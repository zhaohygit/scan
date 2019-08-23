Dynamsoft.WebTwainEnv.RegisterEvent('OnWebTwainReady', Dynamsoft_OnReady);
        // Register OnWebTwainReady event. This event fires as soon as Dynamic Web TWAIN is initialized and ready to be used

        var DWObject;

        function Dynamsoft_OnReady() {
            DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
            if (DWObject) {
                var count = DWObject.SourceCount;
                for (var i = 0; i < count; i++)
                    document.getElementById("source").options.add(new Option(DWObject.GetSourceNameItems(i), i));
                // Get Data Source names from Data Source Manager and put them in a drop-down box
				DWObject.RegisterEvent('OnPostAllTransfers', function() {
                    console.log(DWObject.HowManyImagesInBuffer);
					btnUpload_onclick();
                });
            }
        }
function acquireImage()
{
    sessionStorage.setItem("num",0);
    // alert('aaaaaaaa')
    //如果 为false则是单面
    // alert(DWObject.IfDuplexEnabled)
    // IfUseTwainDSM = true;
    console.log('开始扫描')
    document.getElementById('scan_upload').style.display='flex'
    document.getElementById('center_success').style.display='none'
    
    var cIndex = document.getElementById("source").selectedIndex;
    if (cIndex < 0)
        return;

    DWObject.SelectSourceByIndex(cIndex);
    DWObject.CloseSource();
    DWObject.OpenSource();
    DWObject.IfShowUI = document.getElementById("ShowUI").checked;
    //使用双面还是单面扫描  true双面，false单面
    if(DWObject.IfFeederLoaded==true){
        document.getElementById('scan_upload').style.display='flex'
        document.getElementById('center_success').style.display='none'
    }else{
        document.getElementById('scan_upload').style.display='none'
        document.getElementById('center_success').style.display='flex'
    }
    DWObject.IfDuplexEnabled = false;
    var i;
    for (i = 0; i < 3; i++) {
        if (document.getElementsByName("PixelType").item(i).checked == true)
            DWObject.PixelType = i;
    }
    if(DWObject.ErrorCode != 0)
    {
        appendMessage('<b>Error setting PixelType value: </b>');
        appendMessage("<span style='color:#cE5E04'><b>" + DWObject.ErrorString + "</b></span><br />");
    }
    DWObject.Resolution = document.getElementById("Resolution").value;
    if(DWObject.ErrorCode != 0)
    {
        appendMessage('<b>Error setting Resolution value: </b>');
        appendMessage("<span style='color:#cE5E04'><b>" + DWObject.ErrorString + "</b></span><br />");
    }
    
    var bADFChecked = document.getElementById("ADF").checked;
    DWObject.IfFeederEnabled = bADFChecked;
    if(bADFChecked == true && DWObject.ErrorCode != 0)
    {
        appendMessage('<b>Error setting ADF value: </b>');
        appendMessage("<span style='color:#cE5E04'><b>" + DWObject.ErrorString + "</b></span><br />");
    }
    
    var bDuplexChecked = document.getElementById("Duplex").checked;
    // DWObject.IfDuplexEnabled = true;//bDuplexChecked;
    
    if(bDuplexChecked == true && DWObject.ErrorCode != 0)
    {
        appendMessage('<b>Error setting Duplex value: </b>');
        appendMessage("<span style='color:#cE5E04'><b>" + DWObject.ErrorString + "</b></span><br />");
    }
    if (Dynamsoft.Lib.env.bWin || (!Dynamsoft.Lib.env.bWin && DWObject.ImageCaptureDriverType == 0))
        appendMessage("Pixel Type: " + DWObject.PixelType + "<br />Resolution: " + DWObject.Resolution + "<br />");
    DWObject.IfDisableSourceAfterAcquire = true;
    DWObject.AcquireImage();
}

    function asyncSuccessFunc(result) {
        console.log(result.size);
        console.log(result);
        var date = new Date();
        var time = date.getTime();
        console.log(DWObject)         
        cos.putObject({
            Bucket: img_Bucket,
            Region: Region,
            Key: time + 'test.tif',
            Body: result,//arr[index],
            onHashProgress: function (progressData) {
                console.log('校验中', JSON.stringify(progressData));
            },
            onProgress: function (progressData) {
                    console.log(progressData);
            },
        }, function (err, data) {
            console.log(data||err)
        });

    }

function asyncFailureFunc(errorCode, errorString) {
        alert("ErrorCode: " + errorCode + "\r" + "ErrorString:" + errorString);
    }

 function btnUpload_onclick() {
        // var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
        // if (DWObject) {
            console.log('oppppppppppppppppp')
            let currentIndex = DWObject.CapCurrentIndex;
            let listindex = [];
            for (var i = 0; i < DWObject.HowManyImagesInBuffer; i++) {
               listindex.push(i)
            }
            console.log(currentIndex)
            DWObject.ConvertToBlob(listindex, EnumDWT_ImageType.IT_TIF, asyncSuccessFunc,
                asyncFailureFunc);

        // }

    }

