// @20190108 143044 
/*!
 * Dynamsoft JavaScript Library
 * Product: Dynamsoft Web Twain
 * Web Site: http://www.dynamsoft.com
 *
 * Copyright 2019, Dynamsoft Corporation 
 * Author: Dynamsoft Support Team
 * Version: 14.3.1
 */

var Dynamsoft = Dynamsoft || {
		Lib: {}
	},
	dynamsoft = dynamsoft || {};
(function(b, c) {
	var a = b.WebTwainEnv || (b.WebTwainEnv = {});
	a.initQueue = [];
	a.inited = !1;
	c.initOrder = c.initOrder || [];
})(Dynamsoft, dynamsoft);
Dynamsoft.WebTwainEnv.IfUseActiveXForIE10Plus = false;
var dynamsoft = dynamsoft || {};
(function(f, c, b) {
	var d = 20180718;
	if (c._preDefine_ver) {
		if (c._preDefine_ver >= d) {
			return
		}
	}
	c._preDefine_ver = d;
	var a = 0,
		e = function(g, j) {
			for (var h in j) {
				if (j.hasOwnProperty(h)) {
					g[h] = j[h]
				}
			}
			return g
		};
	if (!c.lib) {
		c.lib = {}
	}
	e(c.lib, {
		win: f,
		doc: f.document,
		debug: !1,
		nil: b,
		mix: e,
		keys: Object.keys,
		guid: function(g) {
			return (g || "") + a++
		},
		now: Date.now || function() {
			return +new Date()
		},
		noop: function() {}
	})
})(typeof window !== "undefined" ? window : this, dynamsoft);
(function(d) {
	var b = !({
			toString: 1
		}.propertyIsEnumerable("toString")),
		c = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toString", "toLocaleString", "valueOf"];

	function a(f, e) {
		return ({}).hasOwnProperty.call(f, e)
	}
	d.keys = Object.keys || function(h) {
		var e = [],
			g, f;
		for (g in h) {
			if (a(h, g)) {
				e.push(g)
			}
		}
		if (b) {
			for (f = c.length - 1; f >= 0; f--) {
				g = c[f];
				if (a(h, g)) {
					e.push(g)
				}
			}
		}
		return e
	}
})(dynamsoft.lib);
(function(j, k) {
	var f = 20180508;
	if (j._isXXX_ver) {
		if (j._isXXX_ver >= f) {
			return
		}
	}
	j._isXXX_ver = f;
	var n = j.mix,
		l, g, i = !1,
		e = !0,
		d = i,
		c = {}.hasOwnProperty,
		m = {};

	function h(p) {
		return p === k
	}

	function a(p) {
		return p !== k
	}
	n(j, {
		isDef: a,
		isUndef: h,
		isUndefined: h,
		isNull: function(p) {
			return (p === null)
		},
		isNaN: function(p) {
			return isNaN(p)
		},
		type: function(p) {
			if (p === null || p === k) {
				return String(p)
			}
			return m[{}.toString.call(p)] || "object"
		},
		isPlainObject: function(r) {
			if (!r || j.type(r) !== "object" || r.nodeType || r.window == r) {
				return i
			}
			var o, p;
			try {
				if ((p = r.constructor) && !c(r, "constructor") && !c(p.prototype, "isPrototypeOf")) {
					return i
				}
			} catch (q) {
				return i
			}
			for (o in r) {}
			return (h(o) || c(r, o))
		}
	});

	function b(o, p) {
		m["[object " + o + "]"] = (p = o.toLowerCase());
		j["is" + o] = function(q) {
			return j.type(q) === p
		}
	}
	b("Function");
	j.each = l = function(s, u, o) {
		if (s) {
			var v, q, w, t = 0,
				p = s.length,
				r = h(p) || j.isFunction(s);
			o = o || null;
			if (r) {
				w = j.keys(s);
				for (; t < w.length; t++) {
					v = w[t];
					if (u.call(o, s[v], v, s) === i) {
						break
					}
				}
			} else {
				for (q = s[0]; t < p; q = s[++t]) {
					if (u.call(o, q, t, s) === i) {
						break
					}
				}
			}
		}
		return s
	};
	g = ["String", "Object", "Boolean", "Number"];
	if (Array.isArray) {
		j.isArray = Array.isArray
	} else {
		g.push("Array")
	}
	l(g, b)
})(dynamsoft.lib);
(function(c) {
	var a = c.mix,
		b = c.win,
		e;
	var d = 20180508;
	if (c._log_ver) {
		if (c.isNumber(c._log_ver) && c._log_ver >= d) {
			return
		}
	}
	c._log_ver = d;
	if (c.isDef(b.console)) {
		e = b.console;
		if (!c.isFunction(e.log) || !c.isFunction(e.error)) {
			e = false
		}
	}
	a(c, {
		log: function(f) {
			if (c.debug && e) {
				e.log(f)
			}
		},
		error: function(f) {
			if (c.debug && e) {
				e.error(f)
			}
		},
		getLogger: function() {
			var f = c.log;
			return {
				warn: f,
				log: f,
				info: f,
				debug: f
			}
		}
	})
})(dynamsoft.lib);
(function(b) {
	var a = 20180508;
	if (b._random_ver) {
		if (b._random_ver >= a) {
			return
		}
	}
	b._random_ver = a;
	b.getRandom = function() {
		var d = b.now() % 10000,
			c = [],
			f;
		for (var e = 0; e < 5; e++) {
			f = Math.floor(Math.random() * 10);
			if (e == 0 && f == 0) {
				e = -1;
				continue
			}
			c.push(f)
		}
		if (d < 10) {
			c.push("000")
		} else {
			if (d < 100) {
				c.push("00")
			} else {
				if (d < 1000) {
					c.push("0")
				}
			}
		}
		c.push(d);
		return c.join("")
	}
})(dynamsoft.lib);
(function(b) {
	var a = 20180508;
	if (b._strUtil_ver) {
		if (b.isNumber(b._strUtil_ver) && b._strUtil_ver >= a) {
			return
		}
	}
	b._strUtil_ver = a;
	b.mix(b, {
		startsWith: function(d, c) {
			return d.lastIndexOf(c, 0) === 0
		},
		endsWith: function(e, d) {
			var c = e.length - d.length;
			return c >= 0 && e.indexOf(d, c) === c
		},
		replaceAll: function(e, d, c) {
			return e.replace(new RegExp(d, "gi"), c)
		},
		upperCaseFirst: function(c) {
			return c.charAt(0).toUpperCase() + c.substr(1)
		},
		makeArray: function(h) {
			if (h == null) {
				return []
			}
			if (b.isArray(h)) {
				return h
			}
			var c = typeof h.length,
				g = typeof h;
			if (c !== "number" || h.alert || g === "string" || (g === "function" && !("item" in h && c === "number"))) {
				return [h]
			}
			var e = [];
			for (var f = 0, d = h.length; f < d; f++) {
				e[f] = h[f]
			}
			return e
		}
	})
})(dynamsoft.lib);
(function(j) {
	var b = 20180508;
	if (j._navInfo_ver) {
		if (j.isNumber(j._navInfo_ver) && j._navInfo_ver >= b) {
			return
		}
	}
	j._navInfo_ver = b;
	var z = "",
		H = !1,
		v = !0,
		D = j.win,
		h = j.doc,
		L = h && h.documentElement,
		s = navigator,
		C = s.userAgent.toLowerCase(),
		u = s.platform.toLowerCase(),
		E = h.location.protocol,
		a = (E === "https:"),
		o = (E !== "https:" && E !== "http:"),
		A = (u == "win32") || (u == "win64") || (u == "windows"),
		x = (u == "mac68k") || (u == "macppc") || (u == "macintosh") || (u == "macintel") || (u == "iphone"),
		J = (u.indexOf("linux") >= 0),
		g = (u == "win64") || (C.indexOf("wow64") >= 0) || (C.indexOf("x86_64") >= 0) || (C.indexOf("win64") >= 0) || (C.indexOf("x64") >= 0),
		q = C.indexOf("msie"),
		y = C.indexOf("trident"),
		w = C.indexOf("rv:"),
		K = C.indexOf("edge"),
		F = C.match(/version\/([\d.]+).*safari/),
		l = F ? v : H,
		n = F ? F[1] : 0,
		r = C.indexOf("firefox"),
		t = (r != -1),
		k = A && !t && (K != -1),
		B = C.indexOf("chrome"),
		e = !k && (B != -1),
		d = A && !t && !k && !e && (q != -1 || y != -1 || w != -1),
		i = "",
		c = 0,
		m = C.match(/Gecko/) ? v : H,
		f = H,
		G = z,
		p = H,
		I = D.JSON;
	if (k) {
		F = C.slice(K + 5);
		F = F.slice(0, F.indexOf(" "));
		i = F;
		F = F.slice(0, F.indexOf("."));
		if (F >= 27) {
			f = v
		}
	} else {
		if (e) {
			F = C.slice(B + 7);
			F = F.slice(0, F.indexOf(" "));
			G = F;
			F = F.slice(0, F.indexOf("."));
			if (F >= 27) {
				f = v
			}
		} else {
			if (t) {
				F = C.slice(r + 8);
				F = F.slice(0, F.indexOf(" "));
				G = F;
				F = F.slice(0, F.indexOf("."));
				if (F >= 27) {
					f = v
				}
			} else {
				if (d) {
					if (q != -1) {
						F = C.slice(q + 4);
						F = F.slice(0, F.indexOf(";"));
						i = F
					} else {
						if (w != -1) {
							F = C.slice(w + 3);
							F = F.slice(0, F.indexOf(";"));
							F = F.slice(0, F.indexOf(")"));
							i = F
						} else {
							if (y != -1) {
								F = C.slice(y + 7);
								F = F.slice(0, F.indexOf(";"));
								i = F
							}
						}
					}
					if (i === "" || i > 8) {
						f = v
					}
					G = F
				} else {
					if (l) {
						if (F) {
							G = F[1]
						}
						F = n;
						F = F.slice(0, F.indexOf("."));
						if (F >= 7) {
							f = v
						}
					}
				}
			}
		}
	}
	if (k || d) {
		if (h.documentMode) {
			c = h.documentMode
		} else {
			c = 5;
			if (h.compatMode) {
				if (h.compatMode == "CSS1Compat") {
					c = 7
				}
			}
		}
	}
	if (L && L.querySelector && (!d || d && (G > 8))) {
		p = v
	}
	if (d && G < 9) {
		I = null
	}
	dynamsoft.navInfo = {
		host: D,
		bSSL: a,
		bFileSystem: o,
		bWin: A,
		bMac: x,
		bLinux: J,
		isX64: g,
		bIE: d,
		bEdge: k,
		bChrome: e,
		bFirefox: t,
		bSafari: l,
		bGecko: m,
		bHTML5Edition: f,
		strBrowserVersion: G,
		IEMode: c,
		bQuerySelectorSupported: p,
		nativeJson: I,
		nodejs: H,
		scrollBarWidth: H
	}
})(dynamsoft.lib);
(function(b) {
	var a = 20180508;
	if (b._extend_ver) {
		if (b.isNumber(b._extend_ver) && b._extend_ver >= a) {
			return
		}
	}
	b._extend_ver = a;
	b.extend = function(c, d) {
		var e = function() {
			c.apply(this, arguments);
			if (d) {
				d.apply(this, arguments)
			}
		};
		b.each(c.prototype, function(g, f) {
			e.prototype[f] = g
		});
		e.prototype.constructor = e;
		return e
	}
})(dynamsoft.lib);
(function(c) {
	var a = 20180508;
	if (c._attribute_ver) {
		if (c.isNumber(c._attribute_ver) && c._attribute_ver >= a) {
			return
		}
	}
	c._attribute_ver = a;

	function b(e) {
		var d = this,
			f = d.constructor;
		d.__attrs = {};
		d.__attrVals = {};
		d.userConfig = e;
		while (f) {
			d.addAttrs(f.ATTRS);
			f = f.superclass ? f.superclass.constructor : null
		}
		c.mix(d.__attrs, e)
	}
	c.mix(b.prototype, {
		get: function(e) {
			var d = this;
			if (e in d.__attrs) {
				return d.__attrs[e]
			}
			return ""
		},
		set: function(f, e) {
			var d = this;
			if (f in d.__attrs) {
				d.__attrs[f] = e
			}
		},
		addAttrs: function(d) {
			c.mix(this.__attrs, d)
		}
	});
	b.extend = function(f) {
		var d = this,
			g, e;
		f = f || {};
		if (f.constructor) {
			g = f.constructor
		}
		e = c.extend(d, g);
		c.mix(e, f);
		return e
	};
	c.Attributes = b
})(dynamsoft.lib);
(function(h) {
	var m = 20180508;
	if (h._json_ver) {
		if (h._json_ver >= m) {
			return
		}
	}
	h._json_ver = m;
	var j = h.win.JSON;
	if (j && j.parse && j.stringify) {
		h.parse = j.parse;
		h.stringify = j.stringify;
		return
	}
	var l = (function() {
			var q = {
					"\b": "\\b",
					"\f": "\\f",
					"\n": "\\n",
					"\r": "\\r",
					"\t": "\\t",
					'"': '\\"'
				},
				p = {},
				r = /["\b\f\n\r\t\x00-\x1f]/g,
				o = /\\\\|\\\/|\\b|\\f|\\n|\\r|\\t|\\"|\\u[0-9a-zA-Z]{4}/g;
			h.each(q, function(s, t) {
				p[s] = t
			});
			p["\\/"] = "/";
			p["\\\\"] = "\\";
			return {
				quote: function(s) {
					return '"' + s.replace(r, function(t) {
						var u;
						if (!(u = q[t])) {
							u = "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(0 - 4)
						}
						return u
					}) + '"'
				},
				unQuote: function(s) {
					return s.slice(1, s.length - 1).replace(o, function(t) {
						var u;
						if (!(u = p[t])) {
							u = String.fromCharCode(parseInt(t.slice(2), 16))
						}
						return u
					})
				}
			}
		})(),
		i;

	function b(o) {
		return o < 10 ? "0" + o : o
	}

	function f(F, z, r, E, D, t) {
		var u = t;
		t += E;
		var v, q, x = 0,
			s;
		if (r !== undefined) {
			v = r
		} else {
			v = h.keys(F)
		}
		var C = [];
		for (q = v.length; x < q; x++) {
			s = v[x];
			var o = i(s, F, z, r, E, D, t);
			if (o !== undefined) {
				var w = l.quote(s);
				w += ":";
				if (E) {
					w += " "
				}
				w += o;
				C[C.length] = w
			}
		}
		var A;
		if (!C.length) {
			A = "{}"
		} else {
			if (!E) {
				A = "{" + C.join(",") + "}"
			} else {
				var y = ",\n" + t;
				var B = C.join(y);
				A = "{\n" + t + B + "\n" + u + "}"
			}
		}
		return A
	}

	function n(B, t, p, A, z, q) {
		var r = q;
		q += A;
		var y = [];
		var v = B.length;
		var u = 0;
		while (u < v) {
			var o = i(String(u), B, t, p, A, z, q);
			if (o === undefined) {
				y[y.length] = "null"
			} else {
				y[y.length] = o
			}++u
		}
		var w;
		if (!y.length) {
			w = "[]"
		} else {
			if (!A) {
				w = "[" + y.join(",") + "]"
			} else {
				var s = "\n," + q;
				var x = y.join(s);
				w = "[\n" + q + x + "\n" + r + "]"
			}
		}
		return w
	}
	i = function(r, q, u, s, v, p, o) {
		var t = q[r];
		if (t && typeof t === "object") {
			if (typeof t.toJSON === "function") {
				t = t.toJSON(r)
			} else {
				if (t instanceof Date) {
					t = isFinite(t.valueOf()) ? t.getUTCFullYear() + "-" + b(t.getUTCMonth() + 1) + "-" + b(t.getUTCDate()) + "T" + b(t.getUTCHours()) + ":" + b(t.getUTCMinutes()) + ":" + b(t.getUTCSeconds()) + "Z" : null
				} else {
					if (t instanceof String || t instanceof Number || t instanceof Boolean) {
						t = t.valueOf()
					}
				}
			}
		}
		if (u !== undefined) {
			t = u.call(q, r, t)
		}
		switch (typeof t) {
			case "number":
				return isFinite(t) ? String(t) : "null";
			case "string":
				return l.quote(t);
			case "boolean":
				return String(t);
			case "object":
				if (!t) {
					return "null"
				}
				if (h.isArray(t)) {
					return n(t, u, s, v, p, o)
				}
				return f(t, u, s, v, p, o)
		}
		return undefined
	};
	h.stringify = function(r, o, q) {
		var t = "";
		var p, s;
		if (o) {
			if (typeof o === "function") {
				s = o
			} else {
				if (h.isArray(o)) {
					p = o
				}
			}
		}
		if (typeof q === "number") {
			q = Math.min(10, q);
			t = new Array(q + 1).join(" ")
		} else {
			if (typeof q === "string") {
				t = q.slice(0, 10)
			}
		}
		return i("", {
			"": r
		}, s, p, t, [], "")
	};
	var c = {},
		d = {
			SHIFT_TYPE: 1,
			REDUCE_TYPE: 2,
			ACCEPT_TYPE: 0,
			TYPE_INDEX: 0,
			PRODUCTION_INDEX: 1,
			TO_INDEX: 2
		},
		a;
	c.yy = {
		unQuote: l.unQuote
	};
	a = function(o) {
		var p = this;
		p.rules = [];
		h.mix(p, o);
		p.resetInput(p.input)
	};
	a.prototype = {
		constructor: function(o) {
			var p = this;
			p.rules = [];
			h.mix(p, o);
			p.resetInput(p.input)
		},
		resetInput: function(o) {
			h.mix(this, {
				input: o,
				matched: "",
				stateStack: [a.STATIC.INITIAL],
				match: "",
				text: "",
				firstLine: 1,
				lineNumber: 1,
				lastLine: 1,
				firstColumn: 1,
				lastColumn: 1
			})
		},
		getCurrentRules: function() {
			var o = this,
				p = o.stateStack[o.stateStack.length - 1],
				q = [];
			p = o.mapState(p);
			h.each(o.rules, function(s) {
				var t = s.state || s[3];
				if (!t) {
					if (p == a.STATIC.INITIAL) {
						q.push(s)
					}
				} else {
					if (h.inArray(p, t)) {
						q.push(s)
					}
				}
			});
			return q
		},
		pushState: function(o) {
			this.stateStack.push(o)
		},
		popState: function() {
			return this.stateStack.pop()
		},
		getStateStack: function() {
			return this.stateStack
		},
		showDebugInfo: function() {
			var q = this,
				s = a.STATIC.DEBUG_CONTEXT_LIMIT,
				o = q.matched,
				r = q.match,
				p = q.input;
			o = o.slice(0, o.length - r.length);
			var u = (o.length > s ? "..." : "") + o.slice(-s).replace(/\n/, " "),
				t = r + p;
			t = t.slice(0, s) + (t.length > s ? "..." : "");
			return u + t + "\n" + new Array(u.length + 1).join("-") + "^"
		},
		mapSymbol: function(q) {
			var o = this,
				p = o.symbolMap;
			if (!p) {
				return q
			}
			return p[q] || (p[q] = (++o.symbolId))
		},
		mapReverseSymbol: function(p) {
			var o = this,
				r = o.symbolMap,
				q, s = o.reverseSymbolMap;
			if (!s && r) {
				s = o.reverseSymbolMap = {};
				h.each(r, function(u, t) {
					s[u] = t
				})
			}
			if (s) {
				return s[p]
			} else {
				return p
			}
		},
		mapState: function(q) {
			var o = this,
				p = o.stateMap;
			if (!p) {
				return q
			}
			return p[q] || (p[q] = (++o.stateId))
		},
		lex: function() {
			var y = this,
				w = y.input,
				r, v, o, t, z, x = y.getCurrentRules();
			y.match = y.text = "";
			if (!w) {
				return y.mapSymbol(a.STATIC.END_TAG)
			}
			for (r = 0; r < x.length; r++) {
				v = x[r];
				var u = v.regexp || v[1],
					p = v.token || v[0],
					q = v.action || v[2] || undefined;
				if ((o = w.match(u))) {
					z = o[0].match(/\n.*/g);
					if (z) {
						y.lineNumber += z.length
					}
					h.mix(y, {
						firstLine: y.lastLine,
						lastLine: y.lineNumber + 1,
						firstColumn: y.lastColumn,
						lastColumn: z ? z[z.length - 1].length - 1 : y.lastColumn + o[0].length
					});
					var s;
					s = y.match = o[0];
					y.matches = o;
					y.text = s;
					y.matched += s;
					t = q && q.call(y);
					if (t === undefined) {
						t = p
					} else {
						t = y.mapSymbol(t)
					}
					w = w.slice(s.length);
					y.input = w;
					if (t) {
						return t
					} else {
						return y.lex()
					}
				}
			}
			h.error("lex error at line " + y.lineNumber + ":\n" + y.showDebugInfo());
			return undefined
		}
	};
	a.STATIC = {
		INITIAL: "I",
		DEBUG_CONTEXT_LIMIT: 20,
		END_TAG: "$EOF"
	};
	var e = new a({
		rules: [
			[2, /^"(\\"|\\\\|\\\/|\\b|\\f|\\n|\\r|\\t|\\u[0-9a-zA-Z]{4}|[^\\"\x00-\x1f])*"/, 0],
			[0, /^[\t\r\n\x20]/, 0],
			[3, /^,/, 0],
			[4, /^:/, 0],
			[5, /^\[/, 0],
			[6, /^\]/, 0],
			[7, /^\{/, 0],
			[8, /^\}/, 0],
			[9, /^-?\d+(?:\.\d+)?(?:e-?\d+)?/i, 0],
			[10, /^true|false/, 0],
			[11, /^null/, 0],
			[12, /^./, 0]
		]
	});
	c.lexer = e;
	e.symbolMap = {
		"$EOF": 1,
		STRING: 2,
		COMMA: 3,
		COLON: 4,
		LEFT_BRACKET: 5,
		RIGHT_BRACKET: 6,
		LEFT_BRACE: 7,
		RIGHT_BRACE: 8,
		NUMBER: 9,
		BOOLEAN: 10,
		NULL: 11,
		INVALID: 12,
		"$START": 13,
		json: 14,
		value: 15,
		object: 16,
		array: 17,
		elementList: 18,
		member: 19,
		memberList: 20
	};
	c.productions = [
		[13, [14]],
		[14, [15], function() {
			return this.$1
		}],
		[15, [2], function() {
			return this.yy.unQuote(this.$1)
		}],
		[15, [9], function() {
			return parseFloat(this.$1)
		}],
		[15, [16], function() {
			return this.$1
		}],
		[15, [17], function() {
			return this.$1
		}],
		[15, [10], function() {
			return this.$1 === "true"
		}],
		[15, [11], function() {
			return null
		}],
		[18, [15], function() {
			return [this.$1]
		}],
		[18, [18, 3, 15], function() {
			this.$1[this.$1.length] = this.$3;
			return this.$1
		}],
		[17, [5, 6], function() {
			return []
		}],
		[17, [5, 18, 6], function() {
			return this.$2
		}],
		[19, [2, 4, 15], function() {
			return {
				key: this.yy.unQuote(this.$1),
				value: this.$3
			}
		}],
		[20, [19], function() {
			var o = {};
			o[this.$1.key] = this.$1.value;
			return o
		}],
		[20, [20, 3, 19], function() {
			this.$1[this.$3.key] = this.$3.value;
			return this.$1
		}],
		[16, [7, 8], function() {
			return {}
		}],
		[16, [7, 20, 8], function() {
			return this.$2
		}]
	];
	c.table = {
		gotos: {
			"0": {
				"14": 7,
				"15": 8,
				"16": 9,
				"17": 10
			},
			"2": {
				"15": 12,
				"16": 9,
				"17": 10,
				"18": 13
			},
			"3": {
				"19": 16,
				"20": 17
			},
			"18": {
				"15": 23,
				"16": 9,
				"17": 10
			},
			"20": {
				"15": 24,
				"16": 9,
				"17": 10
			},
			"21": {
				"19": 25
			}
		},
		action: {
			"0": {
				"2": [1, 0, 1],
				"5": [1, 0, 2],
				"7": [1, 0, 3],
				"9": [1, 0, 4],
				"10": [1, 0, 5],
				"11": [1, 0, 6]
			},
			"1": {
				"1": [2, 2, 0],
				"3": [2, 2, 0],
				"6": [2, 2, 0],
				"8": [2, 2, 0]
			},
			"2": {
				"2": [1, 0, 1],
				"5": [1, 0, 2],
				"6": [1, 0, 11],
				"7": [1, 0, 3],
				"9": [1, 0, 4],
				"10": [1, 0, 5],
				"11": [1, 0, 6]
			},
			"3": {
				"2": [1, 0, 14],
				"8": [1, 0, 15]
			},
			"4": {
				"1": [2, 3, 0],
				"3": [2, 3, 0],
				"6": [2, 3, 0],
				"8": [2, 3, 0]
			},
			"5": {
				"1": [2, 6, 0],
				"3": [2, 6, 0],
				"6": [2, 6, 0],
				"8": [2, 6, 0]
			},
			"6": {
				"1": [2, 7, 0],
				"3": [2, 7, 0],
				"6": [2, 7, 0],
				"8": [2, 7, 0]
			},
			"7": {
				"1": [0, 0, 0]
			},
			"8": {
				"1": [2, 1, 0]
			},
			"9": {
				"1": [2, 4, 0],
				"3": [2, 4, 0],
				"6": [2, 4, 0],
				"8": [2, 4, 0]
			},
			"10": {
				"1": [2, 5, 0],
				"3": [2, 5, 0],
				"6": [2, 5, 0],
				"8": [2, 5, 0]
			},
			"11": {
				"1": [2, 10, 0],
				"3": [2, 10, 0],
				"6": [2, 10, 0],
				"8": [2, 10, 0]
			},
			"12": {
				"3": [2, 8, 0],
				"6": [2, 8, 0]
			},
			"13": {
				"3": [1, 0, 18],
				"6": [1, 0, 19]
			},
			"14": {
				"4": [1, 0, 20]
			},
			"15": {
				"1": [2, 15, 0],
				"3": [2, 15, 0],
				"6": [2, 15, 0],
				"8": [2, 15, 0]
			},
			"16": {
				"3": [2, 13, 0],
				"8": [2, 13, 0]
			},
			"17": {
				"3": [1, 0, 21],
				"8": [1, 0, 22]
			},
			"18": {
				"2": [1, 0, 1],
				"5": [1, 0, 2],
				"7": [1, 0, 3],
				"9": [1, 0, 4],
				"10": [1, 0, 5],
				"11": [1, 0, 6]
			},
			"19": {
				"1": [2, 11, 0],
				"3": [2, 11, 0],
				"6": [2, 11, 0],
				"8": [2, 11, 0]
			},
			"20": {
				"2": [1, 0, 1],
				"5": [1, 0, 2],
				"7": [1, 0, 3],
				"9": [1, 0, 4],
				"10": [1, 0, 5],
				"11": [1, 0, 6]
			},
			"21": {
				"2": [1, 0, 14]
			},
			"22": {
				"1": [2, 16, 0],
				"3": [2, 16, 0],
				"6": [2, 16, 0],
				"8": [2, 16, 0]
			},
			"23": {
				"3": [2, 9, 0],
				"6": [2, 9, 0]
			},
			"24": {
				"3": [2, 12, 0],
				"8": [2, 12, 0]
			},
			"25": {
				"3": [2, 14, 0],
				"8": [2, 14, 0]
			}
		}
	};
	c.parse = function g(y) {
		var A = this,
			o = A.lexer,
			t, F, E, I = A.table,
			B = I.gotos,
			s = I.action,
			r = A.productions,
			u = [null],
			v = [0];
		o.resetInput(y);
		while (1) {
			t = v[v.length - 1];
			if (!F) {
				F = o.lex()
			}
			if (!F) {
				h.log("it is not a valid input: " + y, "error");
				return false
			}
			E = s[t] && s[t][F];
			if (!E) {
				var w = [],
					D;
				if (s[t]) {
					h.each(s[t], function(L, M) {
						w.push(A.lexer.mapReverseSymbol(M))
					})
				}
				D = "Syntax error at line " + o.lineNumber + ":\n" + o.showDebugInfo() + "\nexpect " + w.join(", ");
				h.log(D);
				return false
			}
			switch (E[d.TYPE_INDEX]) {
				case d.SHIFT_TYPE:
					v.push(F);
					u.push(o.text);
					v.push(E[d.TO_INDEX]);
					F = null;
					break;
				case d.REDUCE_TYPE:
					var J = r[E[d.PRODUCTION_INDEX]],
						z = J.symbol || J[0],
						q = J.action || J[2],
						C = J.rhs || J[1],
						H = C.length,
						G = 0,
						K, x = u[u.length - H];
					A.$$ = x;
					K = undefined;
					for (; G < H; G++) {
						A["$" + (H - G)] = u[u.length - 1 - G]
					}
					if (q) {
						K = q.call(A)
					}
					if (K !== undefined) {
						x = K
					} else {
						x = A.$$
					}
					if (H) {
						v = v.slice(0, -1 * H * 2);
						u = u.slice(0, -1 * H)
					}
					v.push(z);
					u.push(x);
					var p = B[v[v.length - 2]][v[v.length - 1]];
					v.push(p);
					break;
				case d.ACCEPT_TYPE:
					return x
			}
		}
		return undefined
	};

	function k(w, o, x) {
		var s = w[o],
			t, v, u;
		if (typeof s === "object") {
			if (h.isArray(s)) {
				t = 0;
				v = s.length;
				var r = [];
				while (t < v) {
					u = k(s, String(t), x);
					if (u !== undefined) {
						r[r.length] = u
					}
				}
				s = r
			} else {
				var y = h.keys(s);
				t = 0;
				for (v = y.length; t < v; t++) {
					var q = y[t];
					u = k(s, q, x);
					if (u === undefined) {
						delete s[q]
					} else {
						s[q] = u
					}
				}
			}
		}
		return x.call(w, o, s)
	}
	h.parse = function(q, o) {
		var p = c.parse(String(q));
		if (o) {
			return k({
				"": p
			}, "", o)
		} else {
			return p
		}
	}
})(dynamsoft.lib);
(function(lib, nil) {
	var _utilities_ver = 20180508;
	if (lib._utilities_ver) {
		if (lib._utilities_ver >= _utilities_ver) {
			return
		}
	}
	lib._utilities_ver = _utilities_ver;
	var AP = Array.prototype,
		win = lib.win,
		doc = lib.doc,
		navInfo = dynamsoft.navInfo,
		EMPTY_STR = "",
		FALSE = !1,
		TRUE = !0,
		mix = lib.mix;
	var RE_TRIM = /^[\s\xa0]+|[\s\xa0]+$/g,
		indexOf = AP.indexOf,
		lastIndexOf = AP.lastIndexOf,
		filter = AP.filter,
		every = AP.every,
		some = AP.some,
		map = AP.map;
	var logger = lib.getLogger(),
		location = win.location,
		domReady = 0,
		callbacks = [],
		POLL_RETIRES = 500,
		POLL_INTERVAL = 40,
		RE_ID_STR = /^#?([\w-]+)$/,
		RE_NOT_WHITESPACE = /\S/,
		standardEventModel = !!(doc && doc.addEventListener),
		DOM_READY_EVENT = "DOMContentLoaded",
		READY_STATE_CHANGE_EVENT = "readystatechange",
		LOAD_EVENT = "load",
		COMPLETE = "complete",
		addEventListener = standardEventModel ? function(el, type, fn) {
			el.addEventListener(type, fn, false)
		} : function(el, type, fn) {
			el.attachEvent("on" + type, fn)
		},
		removeEventListener = standardEventModel ? function(el, type, fn) {
			el.removeEventListener(type, fn, false)
		} : function(el, type, fn) {
			el.detachEvent("on" + type, fn)
		};
	lib.mix(lib, {
		isWindow: function(obj) {
			return obj != null && obj == obj.window
		},
		globalEval: function(data) {
			if (data && RE_NOT_WHITESPACE.test(data)) {
				if (win.execScript) {
					win.execScript(data)
				} else {
					(function(data) {
						win.eval.call(win, data)
					})(data)
				}
			}
		},
		ready: function(fn) {
			if (domReady) {
				try {
					fn(lib)
				} catch (e) {
					lib.log(e.stack || e, "error");
					setTimeout(function() {
						throw e
					}, 0)
				}
			} else {
				callbacks.push(fn)
			}
			return this
		}
	});

	function fireReady() {
		if (domReady) {
			return
		}
		if (doc && !navInfo.nodejs) {
			removeEventListener(win, LOAD_EVENT, fireReady)
		}
		domReady = 1;
		for (var i = 0; i < callbacks.length; i++) {
			try {
				callbacks[i](lib)
			} catch (e) {
				lib.log(e.stack || e, "error");
				setTimeout(function() {
					throw e
				}, 0)
			}
		}
	}

	function bindReady() {
		if (!doc || doc.readyState === COMPLETE) {
			fireReady();
			return
		}
		addEventListener(win, LOAD_EVENT, fireReady);
		if (standardEventModel) {
			var domReady = function() {
				removeEventListener(doc, DOM_READY_EVENT, domReady);
				fireReady()
			};
			addEventListener(doc, DOM_READY_EVENT, domReady)
		} else {
			var stateChange = function() {
				if (doc.readyState === COMPLETE) {
					removeEventListener(doc, READY_STATE_CHANGE_EVENT, stateChange);
					fireReady()
				}
			};
			addEventListener(doc, READY_STATE_CHANGE_EVENT, stateChange);
			var notframe, docElem = doc && doc.documentElement,
				doScroll = docElem && docElem.doScroll;
			try {
				notframe = (win.frameElement === null)
			} catch (e) {
				notframe = false
			}
			if (doScroll && notframe) {
				var readyScroll = function() {
					try {
						doScroll("left");
						fireReady()
					} catch (ex) {
						setTimeout(readyScroll, POLL_INTERVAL)
					}
				};
				readyScroll()
			}
		}
	}
	bindReady();
	if (navInfo.bIE) {
		try {
			doc.execCommand("BackgroundImageCache", false, true)
		} catch (e) {}
	}
})(dynamsoft.lib);
(function(d) {
	var c = 20180508;
	if (d._domUtil_ver) {
		if (d._domUtil_ver >= c) {
			return
		}
	}
	d._domUtil_ver = c;
	var b = "",
		a = "none";
	d.mix(d, {
		get: function(e) {
			return d.doc.getElementById(e)
		},
		hide: function(f) {
			var e = d.isString(f) ? d.get(f) : f;
			if (e) {
				e.style.display = a
			}
		},
		show: function(f) {
			var e = d.isString(f) ? d.get(f) : f;
			if (e) {
				e.style.display = b
			}
		},
		toggle: function(f) {
			var e = d.isString(f) ? d.get(f) : f;
			if (e) {
				if (e.style.display === a) {
					e.style.display = b
				} else {
					e.style.display = a
				}
			}
		},
		empty: function(e) {
			if (!e) {
				return
			}
			while (e.firstChild) {
				e.removeChild(e.firstChild)
			}
		}
	})
})(dynamsoft.lib);
(function(d) {
	var c = Array.prototype,
		b = c.indexOf,
		a = c.filter;
	if (!d.isFunction(b)) {
		b = function(g, h) {
			var f;
			if (this == null) {
				return -1
			}
			var i = Object(this);
			var e = i.length >>> 0;
			if (e === 0) {
				return -1
			}
			var j = +h || 0;
			if (Math.abs(j) === Infinity) {
				j = 0
			}
			if (j >= e) {
				return -1
			}
			f = Math.max(j >= 0 ? j : e - Math.abs(j), 0);
			while (f < e) {
				if (f in i && i[f] === g) {
					return f
				}
				f++
			}
			return -1
		}
	}
	d.mix(d, {
		filter: a ? function(e, g, f) {
			return a.call(e, g, f || this)
		} : function(e, h, g) {
			var f = [];
			d.each(e, function(l, k, j) {
				if (h.call(g || this, l, k, j)) {
					f.push(l)
				}
			});
			return f
		},
		indexOf: function(f, e) {
			return b.call(e, f)
		}
	})
})(dynamsoft.lib);
(function(c) {
	var b = Array.prototype,
		a = Function.prototype;
	if (!c.isFunction(a.bind)) {
		a.bind = function(f) {
			var e = this;
			if (1 < arguments.length) {
				var d = b.slice.call(arguments, 1);
				return function() {
					return e.apply(f, arguments.length ? d.concat(b.slice.call(arguments)) : d)
				}
			}
			return function() {
				return arguments.length ? e.apply(f, arguments) : e.call(f)
			}
		}
	}
})(dynamsoft.lib);
(function(e) {
	var b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		d = String.prototype,
		c = "",
		a = d.trim;
	if (!a) {
		a = d.trim = function() {
			return this.replace(b, c)
		}
	}
	e.trim = function(f) {
		return f == null ? c : a.call(f)
	}
})(dynamsoft.lib);
(function(g, c) {
	var t = "",
		j = !1,
		f = !0,
		s = g.getLogger(),
		l = g.isDef,
		a = g.each,
		k = "&",
		m = "=",
		p = 16,
		d = {
			"&amp;": "&",
			"&gt;": ">",
			"&lt;": "<",
			"&#x60;": "`",
			"&#x2F;": "/",
			"&quot;": '"',
			"&#x27;": "'"
		},
		o = {},
		h, i, b = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
	a(d, function(v, u) {
		o[v] = u
	});

	function r(v) {
		var u = typeof v;
		return v == null || (u !== "object" && u !== "function")
	}

	function q() {
		if (h) {
			return h
		}
		var u = t;
		a(d, function(v) {
			u += v + "|"
		});
		u = u.slice(0, -1);
		h = new RegExp(u, "g");
		return h
	}

	function n() {
		if (i) {
			return i
		}
		var u = t;
		a(o, function(v) {
			u += v + "|"
		});
		u += "&#(\\d{1,5});";
		i = new RegExp(u, "g");
		return i
	}

	function e(u) {
		return encodeURIComponent(String(u))
	}
	g.mix(g, {
		urlEncode: e,
		urlDecode: function(u) {
			return decodeURIComponent(u.replace(/\+/g, " "))
		},
		fromUnicode: function(u) {
			return u.replace(/\\u([a-f\d]{4})/ig, function(v, w) {
				return String.fromCharCode(parseInt(w, p))
			})
		},
		escapeHtml: function(u) {
			return (u + "").replace(q(), function(v) {
				return o[v]
			})
		},
		escapeRegExp: function(u) {
			return u.replace(b, "\\$&")
		},
		unEscapeHtml: function(u) {
			return u.replace(n(), function(v, w) {
				return d[v] || String.fromCharCode(+w)
			})
		},
		param: function(y, x, v, u) {
			x = x || k;
			v = v || m;
			if (g.isUndef(u)) {
				u = f
			}
			var w = [];
			a(y, function(B, z) {
				var A = e(z);
				if (r(B)) {
					w.push(A);
					if (l(B)) {
						w.push(v, e(B + t))
					}
					w.push(x)
				} else {
					if (g.isArray(B) && B.length) {
						a(B, function(C) {
							if (r(C)) {
								w.push(A, (u ? e("[]") : t));
								if (l(C)) {
									w.push(v, e(C + t))
								}
								w.push(x)
							}
						})
					}
				}
			});
			w.pop();
			return w.join(t)
		},
		unparam: function(B, F, E) {
			if (!g.isString(B) || !(B = g.trim(B))) {
				return {}
			}
			F = F || k;
			E = E || m;
			var A = {},
				C, u = g.urlDecode,
				v = B.split(F),
				D, w, x = 0,
				y = v.length;
			for (; x < y; ++x) {
				C = g.indexOf(E, v[x]);
				if (C === -1) {
					D = u(v[x]);
					w = c
				} else {
					D = u(v[x].substring(0, C));
					w = v[x].substring(C + 1);
					try {
						w = u(w)
					} catch (z) {
						s.error("decodeURIComponent error : " + w);
						s.error(z)
					}
					if (g.endsWith(D, "[]")) {
						D = D.substring(0, D.length - 2)
					}
				}
				if (D in A) {
					if (g.isArray(A[D])) {
						A[D].push(w)
					} else {
						A[D] = [A[D], w]
					}
				} else {
					A[D] = w
				}
			}
			return A
		}
	})
})(dynamsoft.lib);
(function(d) {
	var c = /^(\/?)([\s\S]+\/(?!$)|\/)?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/]*)?)$/;

	function b(j, f) {
		var e = 0,
			g = j.length - 1,
			k = [],
			h;
		for (; g >= 0; g--) {
			h = j[g];
			if (h !== ".") {
				if (h === "..") {
					e++
				} else {
					if (e) {
						e--
					} else {
						k[k.length] = h
					}
				}
			}
		}
		if (f) {
			for (; e--; e) {
				k[k.length] = ".."
			}
		}
		k = k.reverse();
		return k
	}
	var a = d.Path = {
		resolve: function() {
			var h = "",
				f, g, e = (arguments),
				j, k = 0;
			for (g = e.length - 1; g >= 0 && !k; g--) {
				j = e[g];
				if (d.isString(j) && !!j) {
					h = j + "/" + h;
					k = j.charAt(0) === "/"
				}
			}
			f = b(d.filter(h.split("/"), function(i) {
				return !!i
			}), !k).join("/");
			return ((k ? "/" : "") + f) || "."
		},
		normalize: function(f) {
			var g = f.charAt(0) === "/",
				e = f.slice(-1) === "/";
			f = b(d.filter(f.split("/"), function(h) {
				return !!h
			}), !g).join("/");
			if (!f && !g) {
				f = "."
			}
			if (f && e) {
				f += "/"
			}
			return (g ? "/" : "") + f
		},
		join: function() {
			var e = d.makeArray(arguments);
			return a.normalize(d.filter(e, function(f) {
				return f && (d.isString(f))
			}).join("/"))
		},
		relative: function(l, k) {
			l = a.normalize(l);
			k = a.normalize(k);
			var j = d.filter(l.split("/"), function(m) {
					return !!m
				}),
				i = [],
				f, g, e = d.filter(k.split("/"), function(m) {
					return !!m
				}),
				h = Math.min(j.length, e.length);
			for (f = 0; f < h; f++) {
				if (j[f] !== e[f]) {
					break
				}
			}
			g = f;
			while (f < j.length) {
				i.push("..");
				f++
			}
			i = i.concat(e.slice(g));
			i = i.join("/");
			return i
		},
		basename: function(h, f) {
			var e = h.match(c) || [],
				g;
			g = e[3] || "";
			if (f && g && g.slice(-1 * f.length) === f) {
				g = g.slice(0, -1 * f.length)
			}
			return g
		},
		dirname: function(h) {
			var e = h.match(c) || [],
				f = e[1] || "",
				g = e[2] || "";
			if (!f && !g) {
				return "."
			}
			if (g) {
				g = g.substring(0, g.length - 1)
			}
			return f + g
		},
		extname: function(e) {
			return (e.match(c) || [])[4] || ""
		}
	}
})(dynamsoft.lib);
(function(d, c) {
	function b(e) {
		if (!e._queryMap) {
			e._queryMap = d.unparam(e._query)
		}
	}

	function a(e) {
		this._query = e || ""
	}
	a.prototype = {
		constructor: a,
		clone: function() {
			return new a(this.toString())
		},
		reset: function(f) {
			var e = this;
			e._query = f || "";
			e._queryMap = null;
			return e
		},
		count: function() {
			var e = this,
				f = 0;
			b(e);
			d.each(e._queryMap, function(g) {
				if (d.isArray(g)) {
					f += g.length
				} else {
					f++
				}
			});
			return f
		},
		has: function(f) {
			var e = this,
				g;
			b(e);
			g = e._queryMap;
			if (f) {
				return f in g
			} else {
				return !d.isEmptyObject(g)
			}
		},
		get: function(f) {
			var e = this,
				g;
			b(e);
			g = e._queryMap;
			if (f) {
				return g[f]
			} else {
				return g
			}
		},
		keys: function() {
			var e = this;
			b(e);
			return d.keys(e._queryMap)
		},
		set: function(f, g) {
			var e = this,
				h;
			b(e);
			h = e._queryMap;
			if (d.isString(f)) {
				e._queryMap[f] = g
			} else {
				if (f instanceof a) {
					f = f.get()
				}
				d.each(f, function(j, i) {
					h[i] = j
				})
			}
			return e
		},
		remove: function(f) {
			var e = this;
			b(e);
			if (f) {
				delete e._queryMap[f]
			} else {
				e._queryMap = {}
			}
			return e
		},
		add: function(f, h) {
			var e = this,
				i, g;
			if (d.isString(f)) {
				b(e);
				i = e._queryMap;
				g = i[f];
				if (d.isUndef(g)) {
					g = h
				} else {
					g = [].concat(g).concat(h)
				}
				i[f] = g
			} else {
				if (f instanceof a) {
					f = f.get()
				}
				d.each(f, function(l, j) {
					e.add(j, l)
				})
			}
			return e
		},
		toString: function(e) {
			var f = this;
			b(f);
			return d.param(f._queryMap, c, c, e)
		}
	};
	d.uriQuery = a
})(dynamsoft.lib);
(function(j) {
	var h = j.uriQuery,
		l = j.each,
		f = j.Path,
		n = j.getLogger(),
		o = /[#\/\?@]/g,
		c = /[#\?]/g,
		k = /[#@]/g,
		e = /#/g,
		g = {
			scheme: 1,
			userInfo: 2,
			hostname: 3,
			port: 4,
			path: 5,
			query: 6,
			fragment: 7
		},
		b = new RegExp("^(?:([\\w\\d+.-]+):)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

	function a(p) {
		return p.length === 1 ? "0" + p : p
	}

	function i(q, p) {
		return q.toLowerCase() === p.toLowerCase()
	}

	function m(q, p) {
		return encodeURI(q).replace(p, function(r) {
			return "%" + a(r.charCodeAt(0).toString(16))
		})
	}

	function d(r) {
		if (r instanceof d) {
			return r.clone()
		}
		var q, p = this;
		j.mix(p, {
			scheme: "",
			userInfo: "",
			hostname: "",
			port: "",
			path: "",
			query: "",
			fragment: ""
		});
		q = d.getComponents(r);
		l(q, function(s, t) {
			s = s || "";
			if (t === "query") {
				p.query = new h(s)
			} else {
				try {
					s = j.urlDecode(s)
				} catch (u) {
					n.error(u + "urlDecode error : " + s)
				}
				p[t] = s
			}
		});
		return p
	}
	d.prototype = {
		constructor: d,
		clone: function() {
			var q = new d(),
				p = this;
			l(g, function(r, s) {
				q[s] = p[s]
			});
			q.query = q.query.clone();
			return q
		},
		resolve: function(t) {
			if (j.isString(t)) {
				t = new d(t)
			}
			var r = this,
				s = 0,
				q, p = ["scheme", "userInfo", "hostname", "port", "path", "query", "fragment"],
				u = r.clone();
			l(p, function(w) {
				if (w === "path") {
					if (s) {
						u[w] = t[w]
					} else {
						var v = t.path;
						if (v) {
							s = 1;
							if (!j.startsWith(v, "/")) {
								if (u.hostname && !u.path) {
									v = "/" + v
								} else {
									if (u.path) {
										q = u.path.lastIndexOf("/");
										if (q !== -1) {
											v = u.path.slice(0, q + 1) + v
										}
									}
								}
							}
							u.path = f.normalize(v)
						}
					}
				} else {
					if (w === "query") {
						if (s || t.query.toString()) {
							u.query = t.query.clone();
							s = 1
						}
					} else {
						if (s || t[w]) {
							u[w] = t[w];
							s = 1
						}
					}
				}
			});
			return u
		},
		getScheme: function() {
			return this.scheme
		},
		setScheme: function(p) {
			this.scheme = p;
			return this
		},
		getHostname: function() {
			return this.hostname
		},
		setHostname: function(p) {
			this.hostname = p;
			return this
		},
		setUserInfo: function(p) {
			this.userInfo = p;
			return this
		},
		getUserInfo: function() {
			return this.userInfo
		},
		setPort: function(p) {
			this.port = p;
			return this
		},
		getPort: function() {
			return this.port
		},
		setPath: function(p) {
			this.path = p;
			return this
		},
		getPath: function() {
			return this.path
		},
		setQuery: function(p) {
			if (j.isString(p)) {
				if (j.startsWith(p, "?")) {
					p = p.slice(1)
				}
				p = new h(m(p, k))
			}
			this.query = p;
			return this
		},
		getQuery: function() {
			return this.query
		},
		getFragment: function() {
			return this.fragment
		},
		setFragment: function(q) {
			var p = this;
			if (j.startsWith(q, "#")) {
				q = q.slice(1)
			}
			p.fragment = q;
			return p
		},
		isSameOriginAs: function(p) {
			var q = this;
			return i(q.hostname, p.hostname) && i(q.scheme, p.scheme) && i(q.port, p.port)
		},
		toString: function(s) {
			var r = [],
				x = this,
				p, v, y, q, t, u, w;
			if ((p = x.scheme)) {
				r.push(m(p, o));
				r.push(":")
			}
			if ((v = x.hostname)) {
				r.push("//");
				if ((w = x.userInfo)) {
					r.push(m(w, o));
					r.push("@")
				}
				r.push(encodeURIComponent(v));
				if ((q = x.port)) {
					r.push(":");
					r.push(q)
				}
			}
			if ((y = x.path)) {
				if (v && !j.startsWith(y, "/")) {
					y = "/" + y
				}
				y = f.normalize(y);
				r.push(m(y, c))
			}
			if ((u = (x.query.toString.call(x.query, s)))) {
				r.push("?");
				r.push(u)
			}
			if ((t = x.fragment)) {
				r.push("#");
				r.push(m(t, e))
			}
			return r.join("")
		}
	};
	d.getComponents = function(s) {
		var r = "";
		s = s || r;
		var p = s.match(b) || [],
			q = {};
		l(g, function(t, u) {
			q[u] = p[t]
		});
		return q
	};
	j.Uri = d
})(dynamsoft.lib);
(function(a) {
	var d = a.lib,
		c = a.navInfo;
	var b = 20180508;
	if (d._color_ver) {
		if (d.isNumber(d._color_ver) && d._color_ver >= b) {
			return
		}
	}
	d._color_ver = b;
	d.colorStrToInt = function(j) {
		var e = "0x",
			g, f;
		if (/^(rgb|RGB)/.test(j)) {
			var h = j.replace(/[^\d,.]/g, "").split(",");
			for (f = 0; f < 3; ++f) {
				g = Number(h[f]).toString(16);
				if (g.length == 1) {
					g = "0" + g
				}
				e += g
			}
			if (h.length == 4) {
				g = Math.round(Number(h[f]) * 255).toString(16);
				if (g.length == 1) {
					g = "0" + g
				}
				e += g
			} else {
				e += "ff"
			}
		} else {
			if (j == "transparent") {
				e += "00000000"
			} else {
				if (/^#[0-9a-fA-f]{6}$/.test(j)) {
					e += j.replace(/#/, "") + "ff"
				} else {
					if (/^#[0-9a-fA-f]{3}$/.test(j)) {
						for (f = 0; f < 3; ++f) {
							e += j[f] + j[f]
						}
						e += "ff"
					} else {
						e = "-1"
					}
				}
			}
		}
		return Number(e)
	};
	d.IntToColorStr = function(e) {
		if (e > 4294967295 || e < 0) {
			return null
		}
		var f;
		if (!c.bHTML5Edition) {
			if (e % 256 == 0) {
				f = "transparent"
			} else {
				f = Math.floor(e / 256).toString(16);
				while (f.length != 6) {
					f = "0" + f
				}
				f = "#" + f
			}
		} else {
			f = "rgba(" + Math.floor(e / 16777216) + "," + Math.floor(e / 65536) % 256 + "," + Math.floor(e / 256) % 256 + "," + (e % 256) / 255 + ")"
		}
		return f
	}
})(dynamsoft);
(function(o, q) {
	var t = o.lib,
		B = 20180508;
	if (t._ajax_ver) {
		if (t.isNumber(t._ajax_ver) && t._ajax_ver >= B) {
			return
		}
	}
	t._ajax_ver = B;
	var d = o.navInfo,
		l = t.win,
		j = t.each,
		i = /^(?:about|app|app\-storage|.+\-extension|file|widget)$/,
		w = 1,
		D = 2,
		c = 3,
		G = 200,
		b = 204,
		h = 300,
		u = 304,
		n = 404,
		f = 1223,
		s = 500,
		y = "open error: ",
		v = "send error: ",
		g = new t.Uri(location.href),
		C = g && i.test(g.getScheme()),
		E = false,
		k = function() {
			try {
				return new l.XMLHttpRequest()
			} catch (I) {}
		},
		x = function() {
			try {
				var I = false;
				j(["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.3.0", "Msxml3.XMLHTTP"], function(K) {
					try {
						return (I = new l.ActiveXObject(K))
					} catch (L) {
						t.error("new xhr error: " + L.message)
					}
				});
				return I
			} catch (J) {}
		},
		r = (!C && l.XMLHttpRequest) ? ("withCredentials" in (k() || [])) : false,
		A = l.ActiveXObject ? function(I) {
			if (d.bIE && (parseInt(d.strBrowserVersion) <= 9)) {
				return x()
			}
			if (!r && I && E) {
				return new E()
			}
			return !C && k() || x()
		} : k,
		p = function(I) {
			return E && (I instanceof E)
		},
		m = /^(?:GET|HEAD)$/,
		a = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		H = {
			xml: "application/xml, text/xml",
			html: "text/html",
			text: "text/plain",
			json: "application/json, text/javascript",
			"*": "*/*"
		},
		z = q;
	if (d.bIE && parseInt(d.strBrowserVersion) <= 10) {
		z = t.noop
	}

	function F() {}
	t.mix(F.prototype, {
		url: false,
		onSuccess: false,
		onError: false,
		onComplete: false,
		method: "GET",
		async: true,
		xhrFields: false,
		mimeType: false,
		username: false,
		password: false,
		data: false,
		dataType: "text",
		headers: false,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		beforeSend: false,
		afterSend: false,
		timeout: 0,
		cache: true,
		crossDomain: false,
		setRequestHeader: function(J, K) {
			var I = this;
			I.headers[J] = K;
			return I
		},
		getAllResponseHeaders: function() {
			var I = this;
			return I.state === D ? I.responseHeadersString : null
		},
		getNativeXhr: function() {
			var I = this;
			return I.nativeXhr
		},
		getResponseHeader: function(K) {
			var J, I = this,
				L;
			K = K.toLowerCase();
			if (I.state === D) {
				if (!(L = I.responseHeaders)) {
					L = I.responseHeaders = {};
					while ((J = a.exec(I.responseHeadersString))) {
						L[J[1].toLowerCase()] = J[2]
					}
				}
				J = L[K]
			}
			return J === undefined ? null : J
		},
		overrideMimeType: function(J) {
			var I = this;
			if (!I.state) {
				I.mimeType = J
			}
			return I
		},
		abort: function(J) {
			var I = this;
			J = J || "abort";
			I.state = c;
			I.status = 0;
			I.statusText = J;
			if (I.nativeXhr) {
				I.nativeXhr.abort()
			}
			I._callback();
			return I
		},
		_ioReady: function(J, M) {
			var K = this,
				I;
			if (K.state === D || K.state === c) {
				return
			}
			if (K.state === w) {
				K.state = D
			}
			K.readyState = 4;
			if (J >= G && J < h || J === u) {
				if (J === u) {
					M = "not modified";
					I = true
				} else {
					M = "success";
					I = true
				}
			} else {
				if (J < 0) {
					J = 0
				}
			}
			try {
				if (J >= G) {
					K.handleResponseData()
				}
			} catch (L) {
				t.error(L.stack || L, "error");
				M = L.message || "parser error"
			}
			K.status = J;
			K.statusText = M;
			K._callback(I)
		},
		_callback: function(I) {
			var J = this,
				K = J.timeoutTimer;
			if (K) {
				clearTimeout(K);
				J.timeoutTimer = 0
			}
			j([I ? J.onSuccess : J.onError, J.onComplete], function(L) {
				if (t.isFunction(L)) {
					L.apply(J.context, [J.responseData, J.statusText, J])
				}
			});
			J.responseData = null
		},
		handleResponseData: function() {
			var K = this,
				I, J = K.dataType,
				M = K.nativeXhr;
			if (J === "blob" || J === "arraybuffer") {
				I = !!l.Blob ? M.response : M.responseBody
			} else {
				if (J == "json") {
					if (M.responseType && M.responseType.toLowerCase() == "json") {
						I = M.response
					} else {
						I = M.responseText ? (((l.JSON && l.JSON.parse) ? l.JSON.parse : t.parse)(M.responseText)) : {}
					}
				} else {
					if (J === "user-defined") {
						I = M.response !== undefined ? M.response : M.responseText
					} else {
						K.responseText = I = M.responseText || "";
						try {
							var L = M.responseXML;
							if (L && L.documentElement) {
								K.responseXML = L
							}
						} catch (N) {}
					}
				}
			}
			K.responseData = I
		},
		sendInternal: function(M) {
			var Y = this,
				U, Q, J, K, X, V, W, L, R, P, O;
			U = Y._setup(M);
			J = U.method;
			K = U.url;
			X = U.dataType;
			L = U.mimeType;
			if (!t.isString(K)) {
				return
			}
			Y.nativeXhr = V = A(U.crossDomain);
			if (!V) {
				return
			}
			try {
				Y.state = w;
				if (U.username) {
					V.open(J, K, U.async, U.username, U.password)
				} else {
					V.open(J, K, U.async)
				}
				if ((U.async || d.bIE) && X && X != "user-defined" && ("responseType" in V)) {
					try {
						V.responseType = X
					} catch (S) {}
				}
			} catch (T) {
				if (Y.state < 2) {
					t.error(T.stack || T, "error");
					Y._ioReady(-1, y + (t.isNumber(T.number) ? "(" + T.number + ")" : "") + (T.message || ""))
				} else {
					t.error(T)
				}
				return
			}
			W = U.xhrFields || {};
			if ("withCredentials" in W) {
				if (!r) {
					delete W.withCredentials
				}
			}
			j(W, function(ab, Z) {
				try {
					V[Z] = ab
				} catch (aa) {
					t.error(aa)
				}
			});
			if (L && V.overrideMimeType) {
				V.overrideMimeType(L)
			}
			R = U.headers || {};
			var N = R["X-Requested-With"];
			if (N === false) {
				delete R["X-Requested-With"]
			}
			if ("setRequestHeader" in V) {
				if (U.contentType) {
					V.setRequestHeader("Content-Type", U.contentType)
				}
				V.setRequestHeader("Accept", X && H[X] ? H[X] + (X === "*" ? "" : ", */*; q=0.01") : H["*"]);
				j(R, function(aa, Z) {
					V.setRequestHeader(Z, aa)
				})
			}
			if (!U.cache) {
				V.setRequestHeader("If-Modified-Since", "0");
				V.setRequestHeader("Cache-Control", "no-cache")
			}
			P = !m.test(U.method);
			O = P && U.data || null;
			if (P && d.bIE && parseInt(d.strBrowserVersion) < 10) {
				O = U.data
			}
			if (U.async && U.timeout > 0) {
				Y.timeoutTimer = setTimeout(function() {
					Y.abort("timeout")
				}, U.timeout * 1000)
			}
			try {
				Y.state = w;
				if (t.isFunction(Y.beforeSend)) {
					var I = Y.beforeSend(V, Y);
					if (I === false) {
						Y.abort("cancel");
						return
					}
				}
				V.send(O);
				O = null;
				U.data = null;
				if (t.isFunction(Y.afterSend)) {
					Y.afterSend(Y)
				}
			} catch (S) {
				if (Y.state < 2) {
					t.error(S.stack || S, "error");
					Y._ioReady(-1, v + (S.message || ""))
				} else {
					t.error(S)
				}
			}
			if (!U.async || V.readyState === 4) {
				Y._xhrCallback()
			} else {
				if (p(V)) {
					V.onload = function() {
						V.readyState = 4;
						V.status = G;
						Y._xhrCallback()
					};
					V.onerror = function() {
						V.readyState = 4;
						V.status = s;
						Y._xhrCallback()
					}
				} else {
					V.onreadystatechange = function() {
						Y._xhrCallback()
					}
				}
			}
		},
		_xhrCallback: function(J, O) {
			var K = this,
				L = K.nativeXhr;
			try {
				if (L.readyState === 4 || O) {
					if (p(L)) {
						L.onerror = z;
						L.onload = z
					} else {
						L.onreadystatechange = z
					}
					if (O) {
						if (L.readyState !== 4) {
							L.abort()
						}
					} else {
						if (!p(L)) {
							K.responseHeadersString = L.getAllResponseHeaders()
						}
						var I = L.status,
							N;
						try {
							N = L.statusText
						} catch (M) {
							t.error("xhr statusText error: ");
							t.error(M);
							N = ""
						}
						K._ioReady(I, N)
					}
				}
			} catch (M) {
				t.error(M.stack || M, "error");
				L.onreadystatechange = z;
				if (!O) {
					K._ioReady(-1, M.message || "process error")
				}
			}
		},
		_setup: function(M) {
			var J = this,
				I, L, O, K, N;
			J.context = M.context;
			delete M.context;
			if (M instanceof F) {
				M = M.config
			}
			J.config = M;
			K = M.url;
			if (t.startsWith(K, "http://") || t.startsWith(K, "https://")) {
				N = new t.Uri(K)
			} else {
				if (t.startsWith(K, "//")) {
					M.url = K = "http:" + K
				}
				N = g.resolve(K)
			}
			if (!M.dataType) {
				I = "text"
			} else {
				I = M.dataType.toLowerCase()
			}
			M.dataType = I;
			if (!M.method) {
				M.method = "GET"
			} else {
				M.method = M.method.toUpperCase()
			}
			if (!("crossDomain" in M)) {
				M.crossDomain = !N.isSameOriginAs(g)
			}
			O = M.headers;
			for (L in O) {
				if (t.isUndefined(O[L])) {
					delete O[L]
				}
			}
			t.mix(J, M);
			J.state = w;
			return J
		}
	});

	function e(J) {
		if (!J || !t.isString(J.url)) {
			t.log("the url is error.");
			return
		}
		var I = new F();
		I.sendInternal(J);
		return I
	}
	t.mix(t, {
		ajax: e,
		io: {
			get: function(J, K, L, I) {
				return e({
					method: "GET",
					url: J,
					onSuccess: K,
					onError: L,
					dataType: I
				})
			},
			post: function(J, L, K, M, I) {
				return e({
					method: "POST",
					data: L,
					url: J,
					onSuccess: K,
					onError: M,
					dataType: I
				})
			},
			put: function(J, L, K, M, I) {
				return e({
					method: "PUT",
					data: L,
					url: J,
					onSuccess: K,
					onError: M,
					dataType: I
				})
			}
		}
	})
})(dynamsoft);
(function(h) {
	var f = 20180508;
	if (h._loadjs_ver) {
		if (h._loadjs_ver >= f) {
			return
		}
	}
	h._loadjs_ver = f;
	var b = "",
		d = !0,
		g = h.doc,
		a = g && g.documentElement,
		c = g.getElementsByTagName("head")[0] || a,
		e = g.createElement("script").readyState ? function(j, k) {
			var i = j.onreadystatechange;
			j.onreadystatechange = function() {
				var l = j.readyState;
				if (l === "loaded" || l === "complete") {
					j.onreadystatechange = null;
					if (i) {
						i()
					}
					k.call(this)
				}
			}
		} : function(j, k) {
			var i = !1;
			j.addEventListener("load", k, i);
			j.addEventListener("error", k, i)
		};
	h.getScript = function(j, l, m) {
		var k, i;
		if (!h.isFunction(m)) {
			m = function() {}
		}
		if (!h.isString(j) || j == b) {
			m();
			return
		}
		k = g.createElement("script");
		i = ["", j].join(b);
		k.src = i;
		if (l) {
			k.async = d
		}
		k.charset = "utf-8";
		e(k, m);
		c.insertBefore(k, c.firstChild);
		return k
	};
	h.getCss = function(j, m) {
		var k, i, l = m;
		if (!h.isFunction(l)) {
			l = !1
		}
		if (!h.isString(j) || j == b) {
			if (l) {
				l()
			}
			return
		}
		k = g.createElement("link");
		k.href = j;
		k.rel = "stylesheet";
		k.async = d;
		if (l) {
			e(k, l)
		}
		c.insertBefore(k, c.firstChild);
		return k
	}
})(dynamsoft.lib);
(function(c) {
	var b = 20180508;
	if (c._customEvt_ver) {
		if (c.isNumber(c._customEvt_ver) && c._customEvt_ver >= b) {
			return
		}
	}
	c._customEvt_ver = b;
	var a = {
		fire: function(f) {
			var d = this,
				e;
			d.exec = d.exec || {};
			f = f.toLowerCase();
			e = Array.prototype.slice.call(arguments, 1);
			c.each(d.exec[f] || [], function(i) {
				var h = i.f,
					g = i.c || d;
				try {
					h.apply(g, e)
				} catch (j) {
					c.log(j)
				}
			})
		},
		on: function(g, f, d) {
			var e = this;
			e.exec = e.exec || {};
			g = g.toLowerCase();
			e.exec[g] = e.exec[g] || [];
			e.exec[g].push({
				f: f,
				c: d
			})
		},
		off: function(j, h, k) {
			var f = this,
				e = f.exec;
			if (!e) {
				return
			}
			if (!j) {
				f.exec = null;
				return
			}
			j = j.toLowerCase();
			if (!h) {
				e[j] = null;
				return
			}
			var d = e[j] || [];
			for (var g = d.length - 1; g >= 0; g--) {
				if (d[g] === h) {
					d.splice(g, 1)
				}
			}
		}
	};
	c.obj = {
		customEvent: a
	}
})(dynamsoft.lib);
(function(b) {
	var h = b.lib,
		f = !1,
		d = !0,
		c = b.navInfo,
		g = h.win.document,
		e;
	var a = 20180508;
	if (h._evtBase_ver) {
		if (h.isNumber(h._evtBase_ver) && h._evtBase_ver >= a) {
			return
		}
	}
	h._evtBase_ver = a;
	e = function(i) {
		return (c.bGecko && "mousewheel" === i) ? "DOMMouseScroll" : i
	};
	h.mix(h, {
		addEventListener: g.addEventListener ? function(j, l, k) {
			var i = e(l);
			if (j) {
				j.addEventListener(i, k, false)
			}
		} : function(j, l, k) {
			var i = e(l);
			if (j) {
				j.attachEvent("on" + i, k)
			}
		},
		removeEventListener: g.removeEventListener ? function(j, l, k) {
			var i = e(l);
			if (j) {
				j.removeEventListener(i, k, false)
			}
		} : function(j, l, k) {
			var i = e(l);
			if (j) {
				j.detachEvent("on" + i, k)
			}
		},
		stopPropagation: function(i) {
			var j = i || window.event;
			if (j.preventDefault) {
				j.preventDefault()
			}
			if (j.stopPropagation) {
				j.stopPropagation()
			}
			j.returnValue = false;
			j.cancelBubble = true
		},
		fireEvent: function(i, j) {
			var k;
			if (g.createEvent) {
				k = g.createEvent("HTMLEvents");
				k.initEvent(i, d, d);
				if (j.dispatchEvent) {
					j.dispatchEvent(k)
				}
			} else {
				if (g.createEventObject) {
					k = g.createEventObject();
					k.bubbles = d;
					k.cancelable = d;
					j.fireEvent(i, k)
				} else {
					k = new Event(i);
					if (j.dispatchEvent) {
						j.dispatchEvent(k)
					}
				}
			}
		}
	})
})(dynamsoft);
(function(a) {
	var c = a.lib,
		b = 20180822;
	if (c._asyncQueue_ver) {
		if (c.isNumber(c._asyncQueue_ver) && c._asyncQueue_ver >= b) {
			return
		}
	}
	c._asyncQueue_ver = b;
	var d = {
		queue: [],
		doNextStarted: false,
		timer: false,
		pushToDo: function(g, f, e) {
			d.queue.push({
				obj: g,
				method: f,
				args: e
			})
		},
		doNext: function() {
			if (!d.doNextStarted) {
				clearTimeout(d.timer);
				d.timer = false;
				return
			}
			if (d.queue.length == 0) {
				d.timer = setTimeout(d.doNext, 500);
				return
			}
			var h = d.queue[0],
				j = h.obj,
				k = h.method,
				f = h.args;
			d.queue.splice(0, 1);
			if (c.isFunction(j[k])) {
				if (f.length > 2) {
					var g = f[f.length - 2],
						e = f[f.length - 1];
					f[f.length - 2] = function() {
						try {
							g.apply(j, arguments)
						} catch (l) {}
						d.timer = setTimeout(d.doNext, 0)
					};
					f[f.length - 1] = function() {
						try {
							e.apply(j, arguments)
						} catch (l) {}
						d.timer = setTimeout(d.doNext, 0)
					}
				}
				try {
					j[k].apply(j, f)
				} catch (i) {}
				return
			} else {
				c.log("not invoke a function: " + k);
				d.timer = setTimeout(d.doNext, 0)
			}
		},
		start: function() {
			if (!d.doNextStarted) {
				d.doNextStarted = true;
				d.timer = setTimeout(d.doNext, 0)
			}
		},
		stop: function() {
			clearTimeout(d.timer);
			d.doNextStarted = false;
			d.queue = []
		}
	};
	c.asyncQueue = d
})(dynamsoft);
(function(g) {
	var c = 20180115,
		j = g.lib,
		e = g.navInfo;
	if (j._dialog_ie7_ver) {
		if (j.isNumber(j._dialog_ie7_ver) && j._dialog_ie7_ver >= c) {
			return
		}
	}
	j._dialog_ie7_ver = c;
	var f = j.win,
		s = j.doc,
		i = !0,
		n = !1,
		k = (e.bIE && e.IEMode < 8),
		h = k && (e.IEMode < 7),
		l = 500000,
		a = 1000;

	function b(t) {
		var w, v, u;
		w = s.body.scrollTop || s.documentElement.scrollTop;
		if (f.innerHeight) {
			u = f.innerHeight
		} else {
			u = s.documentElement.clientHeight
		}
		v = w + (u - t.offsetHeight) / 2;
		t.style.top = v + "px";
		t._dlgInfo.isTopOverridden = i
	}

	function m(t, v) {
		for (var u = 0; u < t.length; ++u) {
			if (t[u] == v) {
				return i
			}
		}
		return n
	}

	function o(w) {
		for (var x = 0; x < s.styleSheets.length; ++x) {
			var C = s.styleSheets[x],
				z = n,
				u = n,
				B, D;
			try {
				z = C.cssRules;
				u = s.querySelectorAll
			} catch (y) {}
			if (z && u) {
				for (var v = 0; v < z.length; ++v) {
					B = z[v];
					D = n;
					try {
						D = u(B.selectorText)
					} catch (y) {}
					if (D && m(D, w)) {
						var t = B.style.getPropertyValue("top"),
							A = B.style.getPropertyValue("bottom");
						if ((t && t != "auto") || (A && A != "auto")) {
							return i
						}
					}
				}
			}
		}
		return n
	}

	function p(u) {
		var t = n;
		if (f.getComputedStyle) {
			t = f.getComputedStyle(u)
		} else {
			if (u.currentStyle) {
				t = u.currentStyle
			}
		}
		if (t && t.position != "absolute") {
			return n
		}
		if ((u.style.top != "auto" && u.style.top != "") || (u.style.bottom != "auto" && u.style.bottom != "")) {
			return n
		}
		return !o(u)
	}

	function q(u) {
		var t = s.createEvent("MouseEvents");
		t.initMouseEvent(u.type, u.bubbles, u.cancelable, f, u.detail, u.screenX, u.screenY, u.clientX, u.clientY, u.ctrlKey, u.altKey, u.shiftKey, u.metaKey, u.button, u.relatedTarget);
		return t
	}

	function r() {
		var u = this,
			t;
		u.pendingDialogStack = [];
		u.overlay = s.createElement(k ? "iframe" : "div");
		t = u.overlay.style;
		t.position = k ? "absolute" : "fixed";
		t.display = "block";
		t.left = t.top = t.margin = t.padding = 0;
		t.backgroundColor = "#000";
		t.filter = "alpha(opacity=30)";
		t.opacity = t.MozOpacity = 0.3;
		t.zIndex = l;
		t.width = "100%";
		if (k && s.documentElement.clientHeight > 0) {
			t.height = s.documentElement.clientHeight + "px"
		} else {
			t.height = "100%"
		}
		if (s.createEvent) {
			j.addEventListener(u.overlay, "click", function(v) {
				var w = q(v);
				s.body.dispatchEvent(w)
			})
		}
	}
	var d = r.prototype;
	d._blockDocument = function() {
		if (!s.body.contains(this.overlay)) {
			s.body.appendChild(this.overlay)
		}
	};
	d._unblockDocument = function() {
		s.body.removeChild(this.overlay)
	};
	d._updateStacking = function() {
		var x = this,
			t, v, u, w;
		v = x.pendingDialogStack;
		if (v.length == 0) {
			x._unblockDocument();
			return
		}
		x._blockDocument();
		w = l;
		j.each(v, function(y) {
			w++;
			y._dlgInfo.mask.style.zIndex = w++;
			y.style.zIndex = w
		})
	};
	d.pushDialog = function(u) {
		var v = this,
			t;
		if (v.pendingDialogStack.length >= a) {
			j.error("Too many modal dialogs.");
			return
		}
		t = s.createElement("div");
		t.className = "dynamsoft-backdrop";
		if (k) {
			t.style.position = "absolute"
		}
		if (s.createEvent) {
			j.addEventListener(t, "click", function(w) {
				if (u.dispatchEvent) {
					var x = q(w);
					u.dispatchEvent(x)
				}
			})
		}
		u.parentNode.insertBefore(t, u.nextSibling);
		u._dlgInfo.mask = t;
		v.pendingDialogStack.push(u);
		v._updateStacking()
	};
	d.removeDialog = function(v) {
		var w = this,
			u, t;
		u = j.isArray(w.pendingDialogStack) ? w.pendingDialogStack.indexOf(v) : -1;
		if (u == -1) {
			return
		}
		w.pendingDialogStack.splice(u, 1);
		t = v._dlgInfo.mask;
		t.parentNode.removeChild(t);
		v._dlgInfo.mask = null;
		w._updateStacking()
	};
	j.dialog = {
		showDialog: function(y) {
			var z = this,
				v;
			if (z.open) {
				j.error("showDialog called on open dialog.");
				return
			}
			z.open = i;
			z.setAttribute("open", "open");
			if (k) {
				v = h ? s.body : s.documentElement;
				z._dlgInfo.docOverflow = v.style.overflow;
				v.style.overflow = "hidden"
			}
			if (p(z)) {
				b(z)
			}
			if (y) {
				z._dlgInfo.modal = i;
				z.dm.pushDialog(z);
				if (k) {
					var u, t, x = n,
						w = n;
					u = z.currentStyle.left;
					t = z.currentStyle.top;
					if (u === "auto") {
						if (h) {
							z.style.textAlign = "center"
						}
						u = (v.clientWidth - z.currentStyle.width) / 2
					} else {
						if (u.indexOf("%") > 0) {
							x = u;
							u = Number(u.replace("%", "") * v.clientWidth / 100)
						} else {
							u = Number(u.replace("px", ""))
						}
					}
					if (isNaN(u) || (u <= 0)) {
						u = 0
					}
					if (t === "auto") {
						t = (v.clientHeight - z.currentStyle.height) / 2
					} else {
						if (t.indexOf("%") > 0) {
							w = t;
							t = Number(t.replace("%", "") * v.clientHeight / 100)
						} else {
							t = Number(t.replace("px", ""))
						}
					}
					if (isNaN(t) || (t <= 0)) {
						t = 0
					}
					setTimeout(function() {
						var B = z.style,
							A = z._dlgInfo.mask;
						A.style.backgroundColor = "#000";
						A.style.filter = "alpha(opacity=30)";
						B.position = "absolute";
						B.left = u + "px";
						B.top = t + "px"
					}, 0);
					z._scrollFn = function() {
						var B = v.scrollTop + "px",
							E = v.scrollLeft + "px",
							A = j.dialog.dm.overlay,
							D = z._dlgInfo.mask,
							C = z.style;
						if ((t + v.scrollTop + v.clientHeight) < v.scrollHeight) {
							C.top = t + v.scrollTop + "px"
						} else {
							C.top = B
						}
						if (A) {
							A.style.top = B
						}
						if (D) {
							D.style.top = B
						}
						C.left = E;
						if (A) {
							A.style.left = E
						}
						if (D) {
							D.style.left = E
						}
						setTimeout(function() {
							z._resizeFn()
						}, 100)
					};
					z._resizeFn = function() {
						var E = h ? s.body : s.documentElement,
							C = E.clientWidth + "px",
							D = E.clientHeight + "px",
							A = j.dialog.dm.overlay,
							B = z._dlgInfo.mask;
						A.style.width = C;
						if (B) {
							B.style.width = C
						}
						A.style.height = D;
						if (B) {
							B.style.height = D
						}
						setTimeout(function() {
							var G, I, F = z.style,
								H = h ? s.body : s.documentElement;
							if (x) {
								G = Number(x.replace("%", "") * H.clientWidth / 100);
								F.left = G + "px"
							}
							if (w) {
								I = Number(w.replace("%", "") * H.clientHeight / 100);
								F.top = I + "px"
							}
						}, 0)
					};
					z._scrollFn();
					f.attachEvent("onscroll", z._scrollFn);
					f.attachEvent("onresize", z._resizeFn)
				}
			}
		},
		closeDialog: function(t) {
			var v = this;
			if (!v.open) {
				j.error("closeDialog called on closed dialog.")
			}
			v.open = n;
			v.removeAttribute("open");
			if (k) {
				var u = h ? s.body : s.documentElement;
				u.style.overflow = v._dlgInfo.docOverflow
			}
			if (typeof t != "undefined") {
				v.returnValue = t
			}
			if (v._dlgInfo.isTopOverridden) {
				v.style.top = "auto"
			}
			if (v._dlgInfo.modal) {
				if (k) {
					f.detachEvent("onscroll", v._scrollFn);
					f.detachEvent("onresize", v._resizeFn)
				}
				v.dm.removeDialog(this)
			}
			return v.returnValue
		},
		setup: function(t) {
			var u = this;
			t.show = u.showDialog.bind(t, n);
			t.showModal = u.showDialog.bind(t, i);
			t.close = u.closeDialog.bind(t);
			t._dlgInfo = {}
		},
		dm: new r()
	}
})(dynamsoft);
(function(b, i) {
	var g = b.lib,
		e = b.navInfo,
		c = b.managerEnv,
		h = e.host,
		d, a, f = 20190104,
		j = function() {
			if (dynamsoft.dcp) {
				var k = dynamsoft.dcp.dcpJSVer;
				if (g.isNumber(k)) {
					return k >= f
				}
			}
			return false
		};
	if (!c) {
		dynamsoft.managerEnv = {};
		c = dynamsoft.managerEnv
	}
	c.resourcesPath = c.resourcesPath || "Resources";
	c.IfUpdateService = c.IfUpdateService ? true : false;
	c.trial = c.trial ? true : false;
	if (j()) {
		j = i;
		f = i;
		return
	}
	a = {
		dcpStatus: 0,
		bConnected: false,
		curPortIndex: 0,
		bTrial: false,
		bConnectNumLimited: true,
		IMAXCONNECTCOUNT: 3,
		EnumDCP_DetectStatus: {
			Init: 0,
			Connected: 1,
			DownloadingZip: 2,
			DownloadedZip: 3,
			DownloadFailed: 4,
			CheckingManagerVer: 15,
			CheckingServiceVer: 16,
			NotInstalled: 17,
			CheckedService: 5,
			VerifyingZip: 6,
			VerifiedZip: 7,
			UpdatingService: 8,
			UpdateSucceed: 9,
			UpdateFailed: 10,
			UpdateSkipped: 11
		}
	};
	dynamsoft.dcp = d = {
		ip: "127.0.0.1",
		ports: [
			[18625, 18626],
			[18993, 18994]
		],
		win64Port: [18627, 18628],
		ifCheck64bitServiceFirst: false,
		dcpJSVer: f,
		oldDWASMVerStr: "dwasm_13000404",
		oldDWASMVer: [13, 0, 0, "0404"],
		DWASMVer14: [14, 3, 1, "0115"],
		managerVersion: [14, 3, 1, "0115"],
		managerVersionMac: [14, 0, 0, "0618"],
		managerVersionLinux: [14, 0, 0, "0618"],
		serviceVersion: [1, 4, 1, "0115"],
		serviceVersionMac: [1, 4, 0, "0618"],
		serviceVersionLinux: [1, 4, 0, "0618"],
		detect: a,
		strSID: "",
		bEnhancedMode: false,
		b64bit: false,
		onReadys: [],
		getManagerVersion: function() {
			var k = dynamsoft.navInfo;
			if (k.bWin || k.bWin64) {} else {
				if (k.bMac) {
					return d.managerVersionMac
				} else {
					if (k.bLinux) {
						return d.managerVersionLinux
					}
				}
			}
			return d.managerVersion
		},
		getServiceVersion: function() {
			var k = dynamsoft.navInfo;
			if (k.bWin || k.bWin64) {} else {
				if (k.bMac) {
					return d.serviceVersionMac
				} else {
					if (k.bLinux) {
						return d.serviceVersionLinux
					}
				}
			}
			return d.serviceVersion
		},
		versionInfo: function(o, k) {
			var n = 0,
				m = function(s) {
					if (g.isArray(s) && s.length > 0 && s[0]) {
						a.curPort = d.ports[n % d.ports.length];
						var v = s[0];
						if (g.isString(v) && d._compareVersion(v.split(","), d.oldDWASMVer)) {
							var u = g.isString(s[1]) && s[1].toLowerCase(),
								t = "",
								q = false,
								p = false;
							if (s.length > 4) {
								t = g.isString(s[2]) ? s[2] : "";
								q = g.isString(s[3]) && (s[3] === "true");
								p = g.isString(s[4]) && (s[4] === "64")
							}
							d.strSID = t;
							d.bEnhancedMode = q;
							d.b64bit = p;
							a.bConnected = true;
							a.dcpStatus = a.EnumDCP_DetectStatus.Connected;
							d._sendStatusEvent(false, v);
							if (g.isFunction(o)) {
								setTimeout(function() {
									o(t, q)
								}, 0)
							}
							return true
						}
					}
					return false
				},
				l = function(q, r, p) {
					++n;
					a.curPortIndex = n % d.ports.length;
					a.bConnected = false;
					if (a.bConnectNumLimited && n >= a.IMAXCONNECTCOUNT) {
						setTimeout(function() {
							o(q, r, p)
						}, 0);
						return true
					}
					return false
				};
			a.dcpStatus = a.EnumDCP_DetectStatus.CheckingManagerVer;
			this._postBase("VersionInfo", true, k, m, l)
		},
		_checkOldManagerVersion: function(l, k) {
			a.dcpStatus = a.EnumDCP_DetectStatus.CheckingManagerVer;
			this._postBase("VersionInfo", true, i, l, k)
		},
		_checkManagerVersion: function(k, m, l) {
			a.dcpStatus = a.EnumDCP_DetectStatus.CheckingManagerVer;
			this._postBase("VersionInfo", false, k, m, l)
		},
		_checkService: function(l, k) {
			a.dcpStatus = a.EnumDCP_DetectStatus.CheckingServiceVer;
			this._postBase("DSVersion", false, i, l, k)
		},
		_checkUpdateFile: function(l, k) {
			this._postBase("CheckUpdateFile", false, i, l, k)
		},
		_updateService: function(l, k) {
			this._postBase("UpdateService", false, i, l, k)
		},
		_postBase: function(m, q, n, s, r) {
			var p, k;
			if (q) {
				p = d.oldDWASMVerStr
			} else {
				p = "dwasm2_" + d._getModuleVer()
			}
			k = {
				id: "1",
				method: m,
				version: p,
				parameter: []
			};
			if (n) {
				if (g.startsWith(n, "http://") || g.startsWith(n, "https://")) {
					if (dynamsoft.managerEnv.ifCheckRemoteProductKey) {
						var o = this,
							l = n;
						g.ajax({
							method: "GET",
							url: l,
							onSuccess: function(t) {
								k.productKey = t;
								o._postBaseV2(m, q, k, s, r)
							},
							onError: r
						});
						return true
					}
				} else {
					k.productKey = n
				}
			}
			this._postBaseV2(m, q, k, s, r);
			return true
		},
		_postBaseV2: function(l, o, k, r, q) {
			var p, s, m, n = g.stringify(k);
			if (!g.isFunction(r) || !g.isFunction(q)) {
				return
			}
			p = function(v, u) {
				var t = [d._getPreUrl(a.curPortIndex), o ? "dcp/" : d._getModuleName(), o ? d.oldDWASMVerStr : d._getModuleVer(), "/", l, "?type=1&dsver=", d.getServiceVersion().join(""), "&ts=", g.now()].join("");
				g.ajax({
					method: "POST",
					url: t,
					data: n,
					onSuccess: v,
					onError: u
				})
			};
			s = function(u, v, t) {
				if (q(u, v, t)) {
					return
				}
				setTimeout(function() {
					p(m, s)
				}, 1000)
			};
			m = function(u, w, t) {
				var v = d._getJSON(u);
				if (v && "result" in v) {
					if (r(v.result)) {
						return
					}
				}
				s(u, w, t)
			};
			p(m, s)
		},
		loadZip: function(l, p, o, q) {
			var n, m = p,
				k = o;
			if (m === 100) {
				m = 0;
				k = function(s) {
					if (g.isString(s)) {
						s = s.replace('"result" : [ 0,', '"result" : [ 100,')
					}
					o(s)
				}
			}
			if (dynamsoft.managerEnv.IfUpdateService) {
				n = [d._getPreUrl(a.curPortIndex), d._getModuleName(), d._getModuleVer(), "/LoadZipFromBytes?type=", m, "&dsver=", d.getServiceVersion().join(""), "&ts=", g.now()].join("")
			} else {
				n = [d._getPreUrl(a.curPortIndex), "dcp/", d.oldDWASMVerStr, "/LoadZipFromBytes?type=0", "&dsver=", d.getServiceVersion().join(""), "&ts=", g.now()].join("")
			}
			g.ajax({
				method: "POST",
				url: n,
				async: true,
				data: l,
				onSuccess: k,
				onError: q
			})
		},
		oldLoadZip: function(l, k, n, o) {
			var m = [d._getPreUrl(a.curPortIndex), "dcp/", d.oldDWASMVerStr, "/LoadZipFromBytes?type=0", "&dsver=", d.getServiceVersion().join(""), "&ts=", g.now()].join("");
			g.ajax({
				method: "POST",
				url: m,
				async: true,
				data: l,
				onSuccess: n,
				onError: o
			})
		},
		_getPreUrl: function(m) {
			var k, l;
			if (e.bSSL) {
				l = "https://";
				k = d.ports[m][1]
			} else {
				l = "http://";
				k = d.ports[m][0]
			}
			return [l, d.ip, ":", k, "/"].join("")
		},
		_getJSON: function(k) {
			return k ? g.parse(k) : !1
		},
		_getModuleName: function() {
			return "dcp/dwasm2_"
		},
		_getModuleVer: function() {
			return d.getManagerVersion().join("")
		},
		_compareVersion: function(l, k) {
			if (g.isArray(l) && l.length == 4 && g.isArray(k) && k.length >= 4) {
				return l[0] > k[0] || l[0] == k[0] && l[1] > k[1] || l[0] == k[0] && l[1] == k[1] && l[2] > k[2] || l[0] == k[0] && l[1] == k[1] && l[2] == k[2] && parseInt(l[3]) >= parseInt(k[3])
			} else {
				if (g.isArray(l) && l.length == 1 && g.isArray(k) && k.length >= 1) {
					return parseInt(l[0]) >= parseInt(k[0])
				}
			}
			return false
		},
		_getDSUpdateZipUrl: function() {
			var l = dynamsoft.navInfo,
				m, k, n = "";
			m = "Win";
			if (l.bMac) {
				m = "Mac"
			} else {
				if (l.bLinux) {
					m = "Linux"
				}
			}
			if (l.bFileSystem) {
				k = ""
			} else {
				k = "?t=" + g.now()
			}
			if (l.bWin && d.b64bit) {
				n = "_x64"
			}
			return [dynamsoft.managerEnv.resourcesPath, "/dist/serviceupdate/", m, "DSUpdate_", d.getManagerVersion().join("."), n, ".zip", k].join("")
		},
		getPorts: function(k, o, n) {
			var m = "GetPorts",
				p = "dwasm2_" + d._getModuleVer(),
				l = {
					id: "1",
					method: m,
					version: p,
					parameter: [k]
				};
			this._postBaseV2(m, false, l, o, n)
		},
		checkDcpForUpdate: function(p, k, r, s, n, m, C, u) {
			var q = false,
				E = true,
				A = 3,
				l = 0,
				x = function(I) {
					if (!(g.isArray(I) && I.length > 0 && I[0])) {
						return false
					}
					var J = I[0].split(",");
					var H = false;
					if (I.length > 4) {
						H = g.isString(I[4]) && (I[4] === "64")
					}
					d.b64bit = H;
					if (!dynamsoft.managerEnv.IfUpdateService) {
						a.bConnected = true;
						a.dcpStatus = a.EnumDCP_DetectStatus.UpdateSkipped;
						d._sendStatusEvent();
						setTimeout(C, 0)
					} else {
						if (d._compareVersion(J, d.oldDWASMVer)) {
							var G = d._getDSUpdateZipUrl();
							q = true;
							var L = function(M) {
									a.dcpStatus = a.EnumDCP_DetectStatus.DownloadedZip;
									d._sendStatusEvent();
									var N = 0;
									d.oldLoadZip(M, N, function() {
										setTimeout(function() {
											d._checkManagerVersion(u, t, o)
										}, 5000)
									}, K)
								},
								K = function(N, O, M) {
									d._funUpdateFailed(n, m, N, M.status);
									setTimeout(C, 0)
								},
								F = function(N, P, M) {
									a.dcpStatus = a.EnumDCP_DetectStatus.DownloadFailed;
									if (n) {
										n()
									}
									var Q = M.status,
										O;
									if (Q == 200) {
										O = N
									} else {
										O = "The update package can't be downloaded. The error code is " + Q + "."
									}
									if (m) {
										m(true, O)
									}
									d._sendStatusEvent(true, O);
									setTimeout(C, 0)
								};
							if (r) {
								r()
							}
							if (s) {
								s()
							}
							a.dcpStatus = a.EnumDCP_DetectStatus.DownloadingZip;
							d._sendStatusEvent();
							g.ajax({
								method: "GET",
								url: G,
								async: true,
								dataType: "blob",
								onSuccess: L,
								onError: F
							})
						} else {
							if (E) {
								a.dcpStatus = a.EnumDCP_DetectStatus.NotInstalled;
								if (r) {
									r()
								}
								if (p) {
									p()
								}
								d._sendStatusEvent();
								E = false
							}
						}
					}
					return true
				},
				w = function(F, G) {
					++l;
					a.curPortIndex = l % d.ports.length;
					a.bConnected = false;
					if (a.bConnectNumLimited && l >= a.IMAXCONNECTCOUNT) {
						a.dcpStatus = a.EnumDCP_DetectStatus.NotInstalled;
						d._sendStatusEvent()
					} else {
						setTimeout(function() {
							d._checkOldManagerVersion(x, w)
						}, 1000)
					}
					return true
				},
				t = function(F) {
					if (!(g.isArray(F) && F.length > 0 && F[0])) {
						return false
					}
					var G = F[0].split(",");
					if (d._compareVersion(G, d.getManagerVersion())) {
						if (dynamsoft.managerEnv.IfUpdateService) {
							if (q) {
								setTimeout(function() {
									d._checkUpdateZip(s, n, m, C)
								}, 0)
							} else {
								setTimeout(function() {
									d._checkService(D, v)
								}, 0)
							}
						} else {
							a.dcpStatus = a.EnumDCP_DetectStatus.UpdateSkipped;
							d._sendStatusEvent();
							setTimeout(C, 0)
						}
						return true
					}
					return false
				},
				o = function(H, I, G) {
					var F = 1000;
					if (A < 3) {
						F = 500
					}
					A--;
					if (A < 0) {
						d._funShowUpgradeDialogWhenUpdateFailed(n, m);
						setTimeout(C, 0)
					} else {
						setTimeout(function() {
							d._checkManagerVersion(u, t, o)
						}, F)
					}
					return true
				},
				D = function(G) {
					if (!(g.isArray(G) && G.length > 0 && G[0])) {
						if (r) {
							r()
						}
						return false
					}
					var F = G[0].split(",");
					if (d._compareVersion(F, d.getServiceVersion())) {
						a.bConnected = true;
						if (n) {
							n()
						}
						a.dcpStatus = a.EnumDCP_DetectStatus.CheckedService;
						d._sendStatusEvent(false, G[0]);
						a.dcpStatus = a.EnumDCP_DetectStatus.UpdateSucceed;
						d._sendStatusEvent();
						setTimeout(C, 0)
					} else {
						setTimeout(function() {
							d._checkUpdateZip(s, n, m, C)
						}, 0)
					}
					return true
				},
				v = function(G, H, F) {
					d._funUpdateFailed(n, m, G, F.status);
					setTimeout(C, 0);
					return true
				};
			var z = false,
				B = function(H) {
					if (!(g.isArray(H) && H.length > 0 && H[0])) {
						return false
					}
					var K = H[0];
					if (g.isString(K) && d._compareVersion(K.split(","), d.oldDWASMVer)) {
						var J = g.isString(H[1]) && H[1].toLowerCase(),
							I = "",
							G = false,
							F = false;
						if (H.length > 4) {
							z = true;
							I = g.isString(H[2]) ? H[2] : "";
							G = g.isString(H[3]) && (H[3] === "true");
							F = g.isString(H[4]) && (H[4] === "64")
						}
						d.strSID = I;
						d.bEnhancedMode = G;
						d.b64bit = F;
						a.curPort = d.ports[l % d.ports.length];
						if (!dynamsoft.managerEnv.IfUpdateService) {
							a.dcpStatus = a.EnumDCP_DetectStatus.UpdateSkipped;
							d._sendStatusEvent();
							setTimeout(C, 0)
						} else {
							setTimeout(function() {
								d._checkService(D, v)
							}, 0)
						}
					} else {
						l = 0;
						a.curPortIndex = 0;
						if (E) {
							if (r) {
								r()
							}
							if (p) {
								p()
							}
							E = false
						}
						setTimeout(function() {
							d._checkOldManagerVersion(x, w)
						}, 1000)
					}
					return true
				},
				y = function(F, G) {
					++l;
					a.curPortIndex = l % d.ports.length;
					a.bConnected = false;
					if (E) {
						if (r) {
							r()
						}
						if (p) {
							p(F, G)
						}
						E = false
					}
					if (a.bConnectNumLimited && l >= a.IMAXCONNECTCOUNT) {
						l = 0;
						a.curPortIndex = 0;
						setTimeout(function() {
							d._checkOldManagerVersion(x, w)
						}, 1000)
					} else {
						setTimeout(function() {
							d._checkManagerVersion(u, B, y)
						}, 1000)
					}
					return true
				};
			if (k) {
				k()
			}
			d._checkManagerVersion(u, B, y)
		},
		_checkUpdateZip: function(o, v, n, w, p) {
			var q = function(A, B, z) {
					var C = -1;
					if (z) {
						C = z.status
					}
					if (C == 0) {
						setTimeout(function() {
							d._checkService(u, r)
						}, 5000);
						return true
					}
					var y = d._getDSUpdateZipUrl();
					a.dcpStatus = a.EnumDCP_DetectStatus.DownloadingZip;
					d._sendStatusEvent();
					g.ajax({
						method: "GET",
						url: y,
						async: true,
						dataType: "blob",
						onSuccess: k,
						onError: t
					});
					return true
				},
				t = function(z, B, y) {
					a.dcpStatus = a.EnumDCP_DetectStatus.DownloadFailed;
					if (v) {
						v()
					}
					var C = y.status,
						A;
					if (C == 200) {
						A = z
					} else {
						A = "The update package can't be downloaded. The error code is " + C + "."
					}
					if (n) {
						n(true, A)
					}
					d._sendStatusEvent(true, A);
					setTimeout(w, 0);
					return true
				},
				s = function(z) {
					if (!(g.isArray(z) && z.length > 1)) {
						return false
					}
					if (z[1] == true) {
						a.dcpStatus = a.EnumDCP_DetectStatus.VerifiedZip;
						d._sendStatusEvent();
						a.dcpStatus = a.EnumDCP_DetectStatus.UpdatingService;
						d._sendStatusEvent();
						setTimeout(function() {
							d._checkService(u, r)
						}, 5000)
					} else {
						var y = 0;
						if ("exception" in z) {
							y = z.exception
						}
						if (y == -2373) {
							d._funUpdateFailed(v, n, z, 200);
							setTimeout(w, 0);
							return true
						}
						setTimeout(q, 0)
					}
					return true
				},
				k = function(y) {
					var z = 1;
					dynamsoft.dcp.loadZip(y, z, function(A) {
						var C, B;
						try {
							if (g.isString(A)) {
								B = g.parse(A.replace(/\0/g, ""));
								if ("result" in B) {
									C = B.result
								}
							}
						} catch (D) {}
						if (g.isArray(C) && C.length > 2 && C[2] == true) {
							setTimeout(function() {
								d._checkService(u, r)
							}, 5000);
							return
						}
						d._funUpdateFailed(v, n, A, 200);
						setTimeout(w, 0)
					}, m)
				},
				m = function(z, A, y) {
					var B = -1;
					if (y) {
						B = y.status
					}
					if (B == 0) {
						setTimeout(function() {
							d._checkService(u, r)
						}, 5000)
					} else {
						d._funUpdateFailed(v, n, z, y.status);
						setTimeout(w, 0)
					}
					return true
				},
				x = function(y) {
					if (!(g.isArray(y) && y.length > 0)) {
						return false
					}
					if (y[0] == true) {
						setTimeout(function() {
							d._checkService(u, r)
						}, 5000)
					} else {
						d._funUpdateFailed(v, n, y, 200);
						setTimeout(w, 0)
					}
					return true
				},
				l = 3,
				u = function(z) {
					if (!(g.isArray(z) && z.length > 0 && z[0])) {
						return false
					}
					var y = z[0].split(",");
					if (d._compareVersion(y, d.getServiceVersion())) {
						a.bConnected = true;
						if (v) {
							v()
						}
						a.dcpStatus = a.EnumDCP_DetectStatus.CheckedService;
						d._sendStatusEvent(false, z[0]);
						a.dcpStatus = a.EnumDCP_DetectStatus.UpdateSucceed;
						d._sendStatusEvent();
						setTimeout(w, 0);
						return true
					}
					return false
				},
				r = function(z, A) {
					var y = 1000;
					if (l < 3) {
						y = 500
					}
					l--;
					if (l < 0) {
						d._funShowUpgradeDialogWhenUpdateFailed(v, n);
						setTimeout(w, 0);
						return true
					}
					setTimeout(function() {
						d._checkService(u, r)
					}, y);
					return true
				};
			if (o) {
				o()
			}
			a.dcpStatus = a.EnumDCP_DetectStatus.VerifyingZip;
			d._sendStatusEvent();
			d._checkUpdateFile(s, q)
		},
		_getStatusString: function(o, n) {
			var l, k, m = "";
			if (o == a.EnumDCP_DetectStatus.Init) {
				return "Getting manager version"
			} else {
				if (o == a.EnumDCP_DetectStatus.Connected) {
					if (n) {
						m = n
					}
					return "Getting manager version succeeded and the version is " + m
				} else {
					if (o == a.EnumDCP_DetectStatus.DownloadingZip) {
						return "Downloading the update package"
					} else {
						if (o == a.EnumDCP_DetectStatus.DownloadedZip) {
							return "Update package downloaded"
						} else {
							if (o == a.EnumDCP_DetectStatus.DownloadFailed) {
								k = ".";
								if (n && n.length > 0) {
									if (n.slice(n.length - 1) == ".") {
										k = ""
									}
									l = " with the error: " + n
								} else {
									l = ""
								}
								return "Update package failed to download" + l + k
							} else {
								if (o == a.EnumDCP_DetectStatus.CheckingManagerVer) {
									return "Getting manager version"
								} else {
									if (o == a.EnumDCP_DetectStatus.CheckingServiceVer) {
										return "Getting service version"
									} else {
										if (o == a.EnumDCP_DetectStatus.NotInstalled) {
											return "Dynamsoft Service Not Installed"
										} else {
											if (o == a.EnumDCP_DetectStatus.UpdateSkipped) {
												return "Update skipped"
											} else {
												if (o == a.EnumDCP_DetectStatus.CheckedService) {
													if (n) {
														m = n
													}
													return "Getting service version succeeded and the version is " + m
												} else {
													if (o == a.EnumDCP_DetectStatus.VerifyingZip) {
														return "Verifying the update package"
													} else {
														if (o == a.EnumDCP_DetectStatus.VerifiedZip) {
															return "Update package verified"
														} else {
															if (o == a.EnumDCP_DetectStatus.UpdatingService) {
																return "Updating the service"
															} else {
																if (o == a.EnumDCP_DetectStatus.UpdateSucceed) {
																	return "Update succeeded"
																} else {
																	if (o == a.EnumDCP_DetectStatus.UpdateFailed) {
																		k = ".";
																		if (n && n.length > 0) {
																			if (n.slice(n.length - 1) == ".") {
																				k = ""
																			}
																			l = " with the error: " + n
																		} else {
																			l = ""
																		}
																		return "The update failed" + l + k
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
			return ""
		},
		_sendStatusEvent: function(l, m) {
			var k = l ? true : false;
			if (g.isFunction(h.OnGetServiceUpdateStatus)) {
				h.OnGetServiceUpdateStatus(k, a.dcpStatus, d._getStatusString(a.dcpStatus, m))
			}
		},
		_getErr: function(l) {
			var m, k = "";
			try {
				if (g.isString(l)) {
					m = l.replace(/\0/g, "");
					m = g.parse(m)
				} else {
					if (l) {
						m = l
					}
				}
				if ("description" in m) {
					k = m.description
				}
			} catch (n) {}
			return k
		},
		_funShowUpgradeDialogWhenUpdateFailed: function(l, k) {
			a.bConnected = true;
			a.dcpStatus = a.EnumDCP_DetectStatus.UpdateFailed;
			if (l) {
				l()
			}
			if (k) {
				k()
			}
			d._sendStatusEvent(true);
			return true
		},
		_funUpdateFailed: function(l, k, m, p) {
			a.bConnected = true;
			a.dcpStatus = a.EnumDCP_DetectStatus.UpdateFailed;
			if (l) {
				l()
			}
			var n, o;
			if (p == 200) {
				n = "The update failed.";
				o = d._getStatusString(a.dcpStatus, d._getErr(m))
			} else {
				n = "The update failed. The error code is " + p;
				o = n
			}
			if (k) {
				k(true, n)
			}
			d._sendStatusEvent(true, o);
			return true
		},
		getDSPath: function(k, l) {
			var o = dynamsoft,
				n = o.managerEnv.resourcesPath,
				m = l;
			if (o.lib.isString(n) && n.length > 0) {
				if (n[n.length - 1] != "/") {
					n = n + "/"
				}
			} else {
				n = "Resources/"
			}
			if (!m) {
				if (o.navInfo.bMac) {
					m = ".pkg"
				} else {
					if (o.navInfo.bLinux) {
						m = ".deb"
					} else {
						m = ".msi";
						if (o.dcp.b64bit || o.managerEnv.IfDownload64bitService) {
							m = "x64.msi"
						}
					}
				}
			}
			return [n, "dist/DynamsoftServiceSetup", dynamsoft.managerEnv.trial ? "Trial" : "", m].join("")
		},
		getLinuxHTML5DebPath: function() {
			return dynamsoft.dcp.getDSPath(false, ".deb")
		},
		getLinuxHTML5RpmPath: function() {
			return dynamsoft.dcp.getDSPath(false, ".rpm")
		}
	};
	j = i;
	f = i;
	c = i;
	g.ready(function() {
		if (d.onReadys.length > 0) {
			g.each(d.onReadys, function(k) {
				if (g.isFunction(k)) {
					k()
				}
			})
		}
		if (e.bWin && e.isX64) {
			if (d.ifCheck64bitServiceFirst) {
				d.ports.unshift(d.win64Port)
			} else {
				d.ports.push(d.win64Port)
			}
		}
	})
})(dynamsoft);
(function(b) {
	var f = b.lib,
		e = f.doc;
	var d = 20180508;
	if (f._evt_ver) {
		if (f.isNumber(f._evt_ver) && f._evt_ver >= d) {
			return
		}
	}
	f._evt_ver = d;
	f.Events = {
		registedClass: [],
		registedObjs: []
	};
	var c = function(g) {
		var i = g || window.event;
		var h = true;
		f.each(f.Events.registedObjs, function(j) {
			f.each(f.Events.registedClass, function(k) {
				if (j instanceof k) {
					if (j.bFocus && j.handlerKeyDown) {
						h = j.handlerKeyDown(i);
						if (!h) {
							return false
						}
					}
				}
			})
		});
		return h
	};
	f.ready(function() {
		f.addEventListener(e.documentElement, "keydown", c)
	});
	f.mix(f, {
		getWheelDelta: function(g) {
			g = g || window.event;
			var j, i = g.wheelDelta,
				h = g.detail;
			if (i) {
				j = i / 120
			}
			if (h) {
				j = -(h % 3 === 0 ? h / 3 : h)
			}
			return j
		}
	});
	var a = {
		LEFT: 0,
		MIDDLE: 1,
		RIGHT: 2
	};
	f.EnumMouseButton = a;
	f.detectButton = function(g) {
		var h = g || window.event;
		if (h.which == null) {
			return (h.button < 2) ? a.LEFT : ((h.button == 4) ? a.MIDDLE : a.RIGHT)
		} else {
			return (h.which < 2) ? a.LEFT : ((h.which == 2) ? a.MIDDLE : a.RIGHT)
		}
	}
})(dynamsoft);
(function(b) {
	var a = 20180508;
	if (b._ui_eventWhich_ver) {
		if (b.isNumber(b._ui_eventWhich_ver) && b._ui_eventWhich_ver >= a) {
			return
		}
	}
	b._ui_eventWhich_ver = a;
	b.switchEvent = function(c) {
		c = c || window.event;
		if (c.which == null) {
			c.which = (c.button < 2) ? 1 : ((c.button == 4) ? 2 : 3)
		} else {
			c.which = (c.which < 2) ? 1 : ((c.which == 2) ? 2 : 3)
		}
		return c
	}
})(dynamsoft.lib);
(function(b) {
	var a = 20180508;
	if (b._ui_style_ver) {
		if (b.isNumber(b._ui_style_ver) && b._ui_style_ver >= a) {
			return
		}
	}
	b._ui_style_ver = a;
	b.currentStyle = function(f, g) {
		var e = b.win,
			d = e.doc,
			c;
		if (f.currentStyle) {
			return f.currentStyle[g]
		} else {
			if (e.getComputedStyle) {
				c = g.replace(/([A-Z])/g, "-$1");
				c = g.toLowerCase();
				return d.defaultView.getComputedStyle(f, null)[g]
			}
		}
		return null
	}
})(dynamsoft.lib);
(function(f, h) {
	var m = Array.prototype,
		i = !0,
		t = !1,
		l = f.lib,
		b = f.navInfo,
		o = l.isString,
		v = l.each,
		s = m.slice,
		n = " ",
		p = (b.bIE && b.IEMode < 10),
		r = /[\n\t\r\.]/g;
	var d = 20180508;
	if (l._ui_nodelist_ver) {
		if (l.isNumber(l._ui_nodelist_ver) && l._ui_nodelist_ver >= d) {
			return
		}
	}
	l._ui_nodelist_ver = d;

	function w(z, A, y) {
		var x = this;
		if (!(x instanceof w)) {
			return new w(z, A, y)
		}
		if (!z) {
			return x
		}
		if (typeof z === "string") {
			l.error("Err 4001.");
			return x
		}
		if (l.isArray(z) || z.isNodeList) {
			Array.prototype.push.apply(x, l.makeArray(z));
			return x
		}
		x[0] = z;
		x.length = 1;
		return x
	}
	w.prototype = {
		isNodeList: true,
		length: 0,
		item: function(y) {
			var x = this;
			if (l.isNumber(y)) {
				if (y >= x.length) {
					return null
				} else {
					return new w(x[y])
				}
			} else {
				return new w(y)
			}
		},
		slice: function() {
			return new w(s.apply(this, arguments))
		},
		getDOMNodes: function() {
			return s.call(this)
		},
		each: function(z, y) {
			var x = this;
			v(x, function(B, A) {
				B = new w(B);
				return z.call(y || B, B, A, x)
			});
			return x
		},
		getEL: function() {
			var x = this;
			return (x.length > 0) ? x[0] : h
		},
		all: function(x) {
			var z, y = this;
			if (y.length > 0) {
				z = l.all(x, y)
			} else {
				z = new w()
			}
			return z
		},
		one: function(x) {
			var y = this,
				A = y.all(x),
				z = A.length ? A.slice(0, 1) : A;
			return z
		}
	};

	function j(x) {
		return o(x) && (x = l.trim(x)) && x.length >= 3 && l.startsWith(x, "<") && l.endsWith(x, ">")
	}

	function g(x) {
		return (n + x + n).replace(r, n)
	}

	function u(x) {
		return (x).replace(r, "")
	}

	function a(B) {
		var y = B.innerHTML;
		if (!document.all) {
			return y
		}
		var A = /(\s+\w+)\s*=\s*([^<>"\s]+)(?=[^<>]*\/>)/ig;
		var z = /"'([^'"]*)'"/ig;
		y = y.replace(A, '$1="$2"').replace(z, '"$1"');
		var x = y.replace(/<(\/?)(\w+)([^>]*)>/g, function(D, C, F, E) {
			if (C) {
				return "</" + F.toLowerCase() + ">"
			}
			return ("<" + F.toLowerCase() + E + ">").replace(/=(("[^"]*?")|('[^']*?')|([\w\-\.]+))([\s>])/g, function(M, H, N, L, K, J, G, I) {
				if (K) {
					return '="' + K + '"' + J
				}
				return M
			})
		});
		return x.replace(/<\/?([^>]+)>/g, function(C) {
			return C
		})
	}
	var q = function(B, D) {
			var A = B.className,
				x, y = D.length,
				C, z, E;
			if (A) {
				x = g(A);
				C = A;
				z = 0;
				for (; z < y; z++) {
					E = u(D[z]);
					if (x.indexOf(n + E + n) < 0) {
						C += n + E
					}
				}
				C = l.trim(C)
			} else {
				C = D.join(" ")
			}
			B.className = C
		},
		k = function(B, D) {
			var z = B.className,
				A, x = D.length,
				y, C;
			if (z && x) {
				A = g(z);
				y = 0;
				for (; y < x; y++) {
					C = n + u(D[y]) + n;
					while (A.indexOf(C) >= 0) {
						A = A.replace(C, n)
					}
				}
				B.className = l.trim(A)
			}
		},
		c = function(B, D) {
			var z = B.className,
				A, x = D.length,
				y, C;
			if (z && x) {
				A = g(z);
				y = 0;
				for (; y < x; y++) {
					C = n + u(D[y]) + n;
					if (A.indexOf(C) < 0) {
						return t
					}
				}
				return i
			}
			return t
		};
	l.mix(w.prototype, {
		before: function(y) {
			var z = this.getEL(),
				x = [y];
			if (z) {
				if (j(y)) {
					x = l.parseHTML(y)
				}
				v(x, function(A) {
					z.insertBefore(A, z.childNodes[0])
				})
			}
		},
		append: function(y) {
			var z = this.getEL(),
				x = [y];
			if (z) {
				if (j(y)) {
					x = l.parseHTML(y)
				}
				v(x, function(A) {
					z.appendChild(A)
				})
			}
		},
		html: function(y) {
			var x = this.getEL();
			if (x) {
				if (l.isUndef(y)) {
					return a(x)
				}
				x.innerHTML = "";
				v(l.parseHTML(y), function(z) {
					x.appendChild(z)
				})
			}
		},
		attr: function(z, x) {
			var y = this.getEL();
			if (y) {
				if (l.isUndef(x)) {
					if (z === "readonly") {
						return y.readOnly ? "readonly" : ""
					}
					if (z === "style" || !p) {
						y = y.attributes[z];
						if (y) {
							y = y.value
						}
					} else {
						y = y[z]
					}
					return y
				}
				if (z == "class") {
					y.className = x
				} else {
					y[z] = x
				}
			}
		},
		style: function(z, x) {
			var y = this.getEL();
			if (y) {
				return l.style(y, z, x)
			}
		},
		css: function(x) {
			v(this, function(y) {
				v(x, function(z, A) {
					l.style(y, A, z)
				})
			})
		},
		addClass: function(x) {
			var y = this.getEL();
			if (y) {
				q(y, x.split(n))
			}
		},
		removeClass: function(x) {
			var y = this.getEL();
			if (y) {
				k(y, x.split(n))
			}
		},
		hasClass: function(x) {
			var y = this.getEL();
			if (y) {
				return c(y, x.split(n))
			}
		},
		parent: function() {
			var x = this.getEL();
			if (x) {
				x = x.parentNode
			}
			return new w(x)
		},
		remove: function() {
			var x = this.getEL();
			if (x) {
				x.parentNode.removeChild(x)
			}
		},
		offset: function() {
			var x = this.getEL();
			return l.DOM.getElDimensions(x, i)
		}
	});

	function e(x, z) {
		var y = z;
		if (y && y.isNodeList) {
			y = y.getEL()
		}
		if (o(x)) {
			if (j(x)) {
				l.err("Err 4002.")
			}
			return new w(l.sizzle(x, y))
		}
		if (x.isNodeList) {
			return x
		}
		return new w(x)
	}
	l.mix(l, {
		all: e,
		one: function(x, y) {
			var z = e(x, y);
			return z.length ? z.slice(0, 1) : z
		},
		isNodeList: function(x) {
			return x instanceof w
		}
	});
	l.ready(function() {
		l.all = e
	})
})(dynamsoft);
(function(e) {
	var d = e.win,
		c = e.doc,
		b = isNaN;
	var a = 20180508;
	if (e._dom_ver) {
		if (e.isNumber(e._dom_ver) && e._dom_ver >= a) {
			return
		}
	}
	e._dom_ver = a;
	e.DOM = {
		getOffset: function(p, j, l) {
			p = p || d.event;
			var g = l || p.target,
				o = 0,
				n = 0,
				k = 0,
				m = 0,
				f, i, h = false;
			while (g && !b(g.offsetLeft) && !b(g.offsetTop)) {
				i = g.scrollLeft;
				f = g.scrollTop;
				if (g.tagName === "BODY") {
					if (h) {
						i = 0;
						f = 0
					} else {
						i = i | c.documentElement.scrollLeft;
						f = f | c.documentElement.scrollTop
					}
				} else {
					if (g.style.position === "fixed") {
						h = true
					}
				}
				o += g.offsetLeft - i;
				n += g.offsetTop - f;
				g = g.offsetParent
			}
			if (j) {
				k = j.Left;
				m = j.Top
			}
			o = p.clientX - o - k;
			n = p.clientY - n - m;
			return {
				x: o,
				y: n
			}
		},
		getElDimensions: function(g, i) {
			var f, h;
			if (!g) {
				return {
					offsetTop: 0,
					offsetLeft: 0,
					offsetWidth: 0,
					offsetHeight: 0
				}
			}
			f = g.style.display;
			g.style.display = "";
			h = i ? {
				offsetTop: g.offsetTop,
				offsetLeft: g.offsetLeft,
				offsetWidth: g.offsetWidth,
				offsetHeight: g.offsetHeight
			} : {
				clientTop: g.clientTop,
				clientLeft: g.clientLeft,
				clientWidth: g.clientWidth ? g.clientWidth : (parseInt(g.style.width) ? parseInt(g.style.width) : 0),
				clientHeight: g.clientHeight ? g.clientHeight : (parseInt(g.style.height) ? parseInt(g.style.height) : 0)
			};
			g.style.display = f;
			return h
		}
	};
	e.getElDimensions = e.DOM.getElDimensions
})(dynamsoft.lib);
(function(h, i) {
	var j = 20180731,
		l = h.lib,
		d = h.navInfo,
		r;
	if (l._dialog_ver) {
		if (l.isNumber(l._dialog_ver) && l._dialog_ver >= j) {
			return
		}
	}
	l._dialog_ver = j;
	r = "data:image/gif;base64,R0lGODlhzAETAPf/AK/a/sfn/qnW/aLV/bPb/pnP/KnZ/9Ds/6jZ/8/s/6fY/57S/aTW/qHU/s3r/5XM/Mbn/sLk/bzh/Mrp/rje/K3b/6/d/6va/7nh/szq/8vq/8rp/8Xn/7Tf/8np/7Le/6rZ/6za/8Pm/6bX/sjp/7fe/J/T/bPe/6ra/7/k/5vQ/Lbg/sLm/8zr/7ri/rHd/77k/5rP/KjY/6zb/8Tm/rrg/Mjo/8bo/87r/8Tn/8bn/8Dl/6XW/s3q/8Ll/qPV/r/j/rfg/sXm/sfo/6LV/rbe/MLl/7Lc/bXf/s7s/67d/73j/5jO/Mrq/7zi/rrh/pfN/Ljh/rvh/MDj/ZbN/LTd/KjY/rnf/Kza/r7i/aLU/qHU/cjo/rvg/KXV/Ljf/bni/sDk/6fX/8np/sPl/qrY/cfo/sXn/qnY/sHj/bHb/pbM/KTV/b/j/arZ/rPf/6fX/rPe/aHS/LXe/M/r/8Hk/bjg/r7j/7Da/Z7S/KvZ/a7Z/b3j/pnO/Lvh/qvb/6fV/abW/p/S/LXg/sno/rTe/ZzR/L3i/cDk/rbf/rng/qHT/Lvi/qvZ/sHk/qvY/bvg/bzj/63a/qTU/LLd/p3R/ZzR/bDe/7Te/77j/rDZ/bXd/szq/sHl/6DU/rzh/a7b/prQ/b3i/sro/pjN/J/R/JXM+7bf/ZvQ/bbd/KjX/K3b/ZTM/K3d/6rY/rDb/pvP/JTL+53R/K3Y/aXX/rPc/bXd/K7b/7rg/cno/7jf/KfY/qna/6DT/aDU/aTV/sbm/rnf/Z7T/afX/aPU/KrX/JrQ/Lzj/sTm/7Hd/rbe/aTW/aXW/J3Q/KbV/KbW/bzi/6rX/ZrO/K/Z/anZ/r3h/b/l/7Lb/rfh/qjX/qvX/bvj/qbW/KzZ/bvi/73k/7ff/rHa/qLT/KDS/K7Y/bXe/bHa/cTl/anY/bbd+6LU/aXW/bfg/bjg/aTV/Lrf/LPd/p/T/MTl/q/b/anX/JXN/MPm/qnY/77i/q/Y/ZfO/LPc+7Tc/ZnO+63Y/AAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjAwMjY2NzMzQTQyMTFFODlFMUQ4ODdDOEJCNjY0RkEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjAwMjY2NzQzQTQyMTFFODlFMUQ4ODdDOEJCNjY0RkEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMDAyNjY3MTNBNDIxMUU4OUUxRDg4N0M4QkI2NjRGQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMDAyNjY3MjNBNDIxMUU4OUUxRDg4N0M4QkI2NjRGQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5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K9cHYMOKfeC17NizZb2eHZu261qxbb++BRuXwly6ce+SzXu3rl6/ffnOBTxY8FvChw2vRbxYMVrHbCHDlRyW8eO2ekuUSOevgMICD6AwYVJAgunTp4GiXq16deqfrl/7jG26dWzbrnGzhk1bN2rfsnvSlgC8Nu/bx3Mn3z279/Lfz4PzHF6ceHTjPZl0qUHBc8KboSxV/1qwIIL58+fJq19PHr179vDdo4fPXn56+urtm8efXz//9v79p18E/5UXIH8DFpiggAfityCCDdL3oIMRxldhfReuN6GEGfZnn4IdVmJJFsR9hsoCJjSgYgMQtOiiiyvGGOOLNMpoI40v2igjjjDquCKPLfr4I5BCqggkBEWySGSRRybZJJNLCvmklFH6OKWVVep4pZZZ3tjljl/OGOaQPDo5pgkLtOGdTQt4QgQDcMI5wZx00hnnnXfWqSeefOpZJ594+mknoHEKOiehhRqKqJyKLmroBIsy8GikkzraKKKVYnopoZlyuimgnYL6aZ+jBlpqnqcmKiilpxLhyQJrHv9UgAlvjiCGArgq4MCuvPKa66+/9iossMQK2yuxwBrrK7K5Krsrs806Cy2uzjowra7STlvttdtqmy203YL7LbPhkjsusuWie26x6ybbbrDvRqsst+eKMQIDRJgQq0EFNMDACArIgMDAAydg8MEHE6ywwgg3vPDDDSP88MIRJzwxwRUbfDHGGW9ccMceZ5yAxwiITLLJIYO8Mcorq3wxyy+7PDHMM8sMsc0U48ywzhxXfLLLMihwbwP7FtQvA2LIYMDSTBtwwNNQQ9301EtHbTXVU1sdNdZNay0111V7fQDYYXtNttNiny322GSvrXbabcMNtttxm1231m/bPbfcXNP/vbfeffONtd+BAz443zKIwQDRn0HAgAIIFI733VdTvrXlX/89ueaVc36555lL3rnon5Me+uGGU0046pub/nTerbM+uuyl03666oLjnnrWciOgwOJFE1QABBMkDfrrmCN/PNvLwz677rFD/zzvu3edO/XRYz+99dUzvbr0tYN/u/bhkz8+99mjv73316tfvvtfJw78Z8GMwgnkLfucsv75R/wz/zEDYM0EeDMC5syAO0Ngz/y3Pwb2z2ENhOADJRZBCk7QYhfUWAUxGEAHdlCCH7RgCA8WtHvpqypTSaEKV8jCFrrwhTCMoQxnqJSa2PCGOMyhDnfIwx768IdADKIQDYdIxCIa8YhITOIPAwIAOw==";
	var g = l.win,
		z = l.doc,
		k = !0,
		q = !1,
		u, e, o = 500000,
		a = 1000;

	function b(A) {
		var D, C, B;
		D = z.body.scrollTop || z.documentElement.scrollTop;
		if (g.innerHeight) {
			B = g.innerHeight
		} else {
			B = z.documentElement.clientHeight
		}
		C = D + (B - A.offsetHeight) / 2;
		A.style.top = C + "px";
		A._dlgInfo.isTopOverridden = k
	}

	function p(A, C) {
		for (var B = 0; B < A.length; ++B) {
			if (A[B] == C) {
				return k
			}
		}
		return q
	}

	function v(D) {
		for (var E = 0; E < z.styleSheets.length; ++E) {
			var J = z.styleSheets[E],
				G = q,
				B = q,
				I, K;
			try {
				G = J.cssRules;
				B = z.querySelectorAll
			} catch (F) {}
			if (G && B) {
				for (var C = 0; C < G.length; ++C) {
					I = G[C];
					K = q;
					try {
						K = B(I.selectorText)
					} catch (F) {}
					if (K && p(K, D)) {
						var A = I.style.getPropertyValue("top"),
							H = I.style.getPropertyValue("bottom");
						if ((A && A != "auto") || (H && H != "auto")) {
							return k
						}
					}
				}
			}
		}
		return q
	}

	function t(B) {
		var A = q;
		if (g.getComputedStyle) {
			A = g.getComputedStyle(B)
		} else {
			if (B.currentStyle) {
				A = B.currentStyle
			}
		}
		if (A && A.position != "absolute") {
			return q
		}
		if ((B.style.top != "auto" && B.style.top != "") || (B.style.bottom != "auto" && B.style.bottom != "")) {
			return q
		}
		return !v(B)
	}

	function x(B) {
		var A = z.createEvent("MouseEvents");
		A.initMouseEvent(B.type, B.bubbles, B.cancelable, g, B.detail, B.screenX, B.screenY, B.clientX, B.clientY, B.ctrlKey, B.altKey, B.shiftKey, B.metaKey, B.button, B.relatedTarget);
		return A
	}

	function c(A) {
		z.body.dispatchEvent(x(A))
	}

	function y() {
		u = z.createElement("div");
		e = u.style;
		e.position = "fixed";
		e.display = "block";
		e.left = e.top = e.margin = e.padding = 0;
		e.backgroundColor = "#000";
		e.filter = "alpha(opacity=30)";
		e.opacity = e.MozOpacity = 0.3;
		e.zIndex = o;
		e.width = e.height = "100%";
		if (z.createEvent) {
			l.addEventListener(u, "click", c)
		}
	}

	function m() {
		if (u === i) {
			y()
		}
		if (!z.body.contains(u)) {
			z.body.appendChild(u)
		}
	}

	function w() {
		if (u !== i) {
			l.removeEventListener(u, "click", c);
			z.body.removeChild(u);
			u = i
		}
	}
	var f = {
		pendingDialogStack: [],
		_updateStacking: function(D) {
			var F = this,
				A, C, B, E;
			C = F.pendingDialogStack;
			if (C.length == 0) {
				w();
				return
			}
			if (D != true) {
				m()
			}
			E = o;
			l.each(C, function(G) {
				E++;
				G._dlgInfo.mask.style.zIndex = E++;
				G.style.zIndex = E
			})
		},
		pushDialog: function(B, D) {
			var E = this,
				A, C = B.getBoundingClientRect();
			if (E.pendingDialogStack.length >= a) {
				l.error("Too many modal dialogs.");
				return
			}
			A = z.createElement("div");
			A.className = "dynamsoft-backdrop";
			if (D == true) {
				A.style.left = (C.x | C.left) + "px";
				A.style.top = (C.y | C.top) + "px";
				A.style.width = C.width + "px";
				A.style.height = C.height + "px"
			}
			if (z.createEvent) {
				l.addEventListener(A, "click", function(F) {
					if (B.dispatchEvent) {
						var G = x(F);
						B.dispatchEvent(G)
					}
				})
			}
			B.parentNode.insertBefore(A, B.nextSibling);
			B._dlgInfo.mask = A;
			E.pendingDialogStack.push(B);
			E._updateStacking(D)
		},
		removeDialog: function(C) {
			var D = this,
				B, A;
			B = l.isArray(D.pendingDialogStack) ? l.indexOf(C, D.pendingDialogStack) : -1;
			if (B == -1) {
				return
			}
			D.pendingDialogStack.splice(B, 1);
			A = C._dlgInfo.mask;
			A.parentNode.removeChild(A);
			C._dlgInfo.mask = null;
			D._updateStacking()
		}
	};

	function n(C, B) {
		var D = this,
			A;
		if (D.open) {
			l.error("showDialog called on open dialog.");
			return
		}
		D.open = k;
		D.removeAttribute("closed");
		D.setAttribute("open", "open");
		if (t(D)) {
			b(D)
		}
		if (C) {
			D._dlgInfo.modal = k;
			f.pushDialog(D, B)
		}
	}

	function s(A) {
		var B = this;
		if (!B.open) {
			l.error("closeDialog called on closed dialog.")
		}
		B.open = q;
		B.removeAttribute("open");
		B.setAttribute("closed", "closed");
		if (typeof A != "undefined") {
			B.returnValue = A
		}
		if (B._dlgInfo.isTopOverridden) {
			B.style.top = "auto"
		}
		if (B._dlgInfo.modal) {
			f.removeDialog(B)
		}
		return B.returnValue
	}
	l.dialog = {
		setup: function(A, B) {
			A.show = n.bind(A, q, B);
			A.showModal = n.bind(A, k, B);
			A.close = s.bind(A);
			A._dlgInfo = {}
		}
	};
	l.mask = {
		container: false,
		bConfined: false,
		dlgMask: false,
		preOnresize: false,
		preOnscroll: false
	};
	l.showMask = function() {
		if (l.mask.dlgMask) {
			return
		}
		var C = l.mask.bConfined,
			B = l.mask.container,
			A;
		if (B) {
			A = B.getBoundingClientRect();
			var H = B.firstChild;
			while (H) {
				if (l.isFunction(H.getBoundingClientRect)) {
					A = H.getBoundingClientRect();
					break
				}
				H = H.nextSibling
			}
		}
		var F = document.createElement("div"),
			E = "460px",
			D = "300px";
		F.className = "dynamsoft-dialog-wrap";
		if (!window.onresize) {
			l.mask.preOnresize = false
		} else {
			l.mask.preOnresize = window.onresize
		}
		if (!window.onscroll) {
			l.mask.preOnscroll = false
		} else {
			l.mask.preOnscroll = window.onscroll
		}
		if (C && A) {
			window.onresize = window.onscroll = function() {
				A = B.getBoundingClientRect();
				var I = B.firstChild;
				while (I) {
					if (l.isFunction(I.getBoundingClientRect)) {
						A = I.getBoundingClientRect();
						break
					}
					I = I.nextSibling
				}
				F.style.left = (A.x | A.left) + "px";
				F.style.top = (A.y | A.top) + "px";
				F.style.width = A.width + "px";
				if (A.width < 470) {
					E = (A.width - 10) + "px"
				}
				F.style.height = D = A.height + "px";
				if (l.mask.dlgMask) {
					l.mask.dlgMask.close();
					l.mask.dlgMask.showModal()
				}
			};
			window.onscroll()
		}
		var G = ['<div style="margin:0 auto; width:', E, ";line-height:", D, '"><img src="', r, '" style="margin:0 auto; width:', E, '" /></div>'].join("");
		F.innerHTML = G;
		document.body.appendChild(F);
		l.mask.dlgMask = F;
		l.dialog.setup(l.mask.dlgMask, C);
		l.mask.dlgMask.showModal()
	};
	l.hideMask = function() {
		var A = l.mask.dlgMask;
		if (A) {
			A.close();
			document.body.removeChild(A);
			l.mask.dlgMask = false
		}
		if (!l.mask.preOnresize) {
			window.onresize = null
		} else {
			window.onresize = l.mask.preOnresize
		}
		l.mask.preOnresize = false;
		if (!l.mask.preOnscroll) {
			window.onscroll = null
		} else {
			window.onscroll = l.mask.preOnscroll
		}
		l.mask.preOnscroll = false
	}
})(dynamsoft);
(function(t) {
	var w = 20180508;
	if (t._sizzle_ver) {
		if (t.isNumber(t._sizzle_ver) && t._sizzle_ver >= w) {
			return
		}
	}
	t._sizzle_ver = w;
	var aq, g = RegExp,
		ae, ab, d, k, u, al, Y, U, s, v, o, p, ao = !0,
		f, M, b, S, am = "dws_" + 1 * new Date(),
		an = window.document,
		K = 0,
		y = 0,
		ai, aj, G, z, A = function(i, e) {
			if (i === e) {
				s = true
			}
			return 0
		},
		I = [],
		V = I.pop,
		aa = I.push,
		ak = I.push,
		F = I.slice,
		H = function(ax, aw) {
			var av = 0,
				e = ax.length;
			for (; av < e; av++) {
				if (ax[av] === aw) {
					return av
				}
			}
			return -1
		},
		ag = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		Q = "[\\x20\\t\\r\\n\\f]",
		C = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
		ad = ["\\[", Q, "*(", C, ")(?:", Q, "*([*^$|!~]?=)", Q, "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(", C, "))|)", Q, "*\\]"].join(""),
		E = new g(Q + "+", "g"),
		ah = new g(["^", Q, "+|((?:^|[^\\\\])(?:\\\\.)*)", Q, "+$"].join(""), "g"),
		m = new g(["^", Q, "*,", Q, "*"].join("")),
		X = new g(["^", Q, "*([>+~]|", Q, ")", Q, "*"].join("")),
		h = new g("^" + C + "$"),
		W = {
			ID: new g("^#(" + C + ")"),
			CLASS: new g("^\\.(" + C + ")"),
			TAG: new g("^(" + C + "|[*])"),
			ATTR: new g("^" + ad),
			needsContext: new g(["^", Q, "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(", Q, "*((?:-\\d)?\\d*)", Q, "*\\)|)(?=[^-]|$)"].join(""), "i")
		},
		L = /^[^{]+\{\s*\[native \w/,
		ac = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		c = /^(?:#([\w-]+)|(\w+)|\.([\w-]+)) .*$/,
		R = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		l = function(i, e) {
			if (e) {
				if (i === "\0") {
					return "\uFFFD"
				}
				return i.slice(0, -1) + "\\" + i.charCodeAt(i.length - 1).toString(16) + " "
			}
			return "\\" + i
		},
		q = function() {
			v()
		};

	function au() {
		var i = [];

		function e(av, aw) {
			if (i.push(av + " ") > ab.cacheLength) {
				delete e[i.shift()]
			}
			return (e[av + " "] = aw)
		}
		return e
	}

	function a(ax) {
		var aw = 0,
			av = ax.length,
			e = "";
		for (; aw < av; aw++) {
			e += ax[aw].value
		}
		return e
	}
	ai = au();
	aj = au();
	G = au();
	z = au();
	try {
		ak.apply((I = F.call(an.childNodes)), an.childNodes);
		var r = I[an.childNodes.length].nodeType
	} catch (at) {
		ak = {
			apply: I.length ? function(i, e) {
				aa.apply(i, F.call(e))
			} : function(ax, aw) {
				var e = ax.length,
					av = 0;
				while ((ax[e++] = aw[av++])) {}
				ax.length = e - 1
			}
		}
	}

	function af(aB, av, aE, aH) {
		var az, aF, ay, e, aG, ax, aC, aw = av && av.ownerDocument,
			aD = av ? av.nodeType : 9;
		aE = aE || [];
		if (typeof aB !== "string" || !aB || aD !== 1 && aD !== 9 && aD !== 11) {
			return aE
		}
		if (!aH) {
			if ((av ? av.ownerDocument || av : an) !== o) {
				v(av)
			}
			av = av || o;
			if (aD !== 11) {
				if ((aG = ac.exec(aB))) {
					if ((az = aG[1])) {
						if (aD === 9) {
							if ((ay = av.getElementById(az))) {
								if (ay.id === az) {
									aE.push(ay);
									return aE
								}
							} else {
								return aE
							}
						} else {
							if (aw && (ay = aw.getElementById(az)) && S(av, ay) && ay.id === az) {
								aE.push(ay);
								return aE
							}
						}
					} else {
						if (aG[2]) {
							ak.apply(aE, av.getElementsByTagName(aB));
							return aE
						} else {
							if ((az = aG[3]) && ae.getElementsByClassName && av.getElementsByClassName) {
								ak.apply(aE, av.getElementsByClassName(az));
								return aE
							}
						}
					}
				} else {
					if ((aG = c.exec(aB))) {
						if ((az = aG[1])) {
							if (aD === 9) {
								if ((ay = av.getElementById(az))) {
									if (ay.id === az) {
										av = ay
									}
								}
							} else {
								if (aw && (ay = aw.getElementById(az)) && S(av, ay) && ay.id === az) {
									av = ay
								}
							}
							az = "#" + az + " "
						} else {
							if ((az = aG[2])) {
								ak.apply(aE, av.getElementsByTagName(aB));
								av = aE[0];
								az = az + " "
							} else {
								if ((az = aG[3]) && ae.getElementsByClassName && av.getElementsByClassName) {
									ak.apply(aE, av.getElementsByClassName(az));
									av = aE[0];
									az = az + " "
								}
							}
						}
						aB = aB.replace(az, "")
					}
				}
			}
			if (ae.qsa && !z[aB + " "] && (!f || !f.test(aB))) {
				if (aD !== 1) {
					aw = av;
					aC = aB
				} else {
					if (av.nodeName.toLowerCase() !== "object") {
						if ((e = av.getAttribute("id"))) {
							e = e.replace(R, l)
						} else {
							av.setAttribute("id", (e = am))
						}
						ax = k(aB);
						aF = ax.length;
						while (aF--) {
							ax[aF] = "#" + e + " " + a(ax[aF])
						}
						aC = ax.join(",");
						aw = av
					}
				}
				if (aC) {
					try {
						ak.apply(aE, aw.querySelectorAll(aC));
						return aE
					} catch (aA) {
						z(aB, !0)
					} finally {
						if (e === am) {
							av.removeAttribute("id")
						}
					}
				}
			}
		}
		return al(aB.replace(ah, "$1"), av, aE, aH)
	}

	function ap(e) {
		e[am] = true;
		return e
	}

	function Z(av) {
		var i = o.createElement("fieldset");
		try {
			return !!av(i)
		} catch (aw) {
			return false
		} finally {
			if (i.parentNode) {
				i.parentNode.removeChild(i)
			}
			i = null
		}
	}

	function B(e, i) {}

	function j(i, e) {
		var aw = e && i,
			av = aw && i.nodeType === 1 && e.nodeType === 1 && i.sourceIndex - e.sourceIndex;
		if (av) {
			return av
		}
		if (aw) {
			while ((aw = aw.nextSibling)) {
				if (aw === e) {
					return -1
				}
			}
		}
		return i ? 1 : -1
	}

	function T(e) {
		return e && typeof e.getElementsByTagName !== "undefined" && e
	}
	ae = af.support = {};
	v = af.setDocument = function(av) {
		var e, i, aw = av ? av.ownerDocument || av : an;
		if (aw === o || aw.nodeType !== 9 || !aw.documentElement) {
			return o
		}
		o = aw;
		p = o.documentElement;
		if (an !== o && (i = o.defaultView) && i.top !== i) {
			if (i.addEventListener) {
				i.addEventListener("unload", q, false)
			} else {
				if (i.attachEvent) {
					i.attachEvent("onunload", q)
				}
			}
		}
		ae.attributes = Z(function(ax) {
			ax.className = "i";
			return !ax.getAttribute("className")
		});
		ae.getElementsByTagName = Z(function(ax) {
			ax.appendChild(o.createComment(""));
			return !ax.getElementsByTagName("*").length
		});
		ae.getElementsByClassName = L.test(o.getElementsByClassName);
		ae.getById = Z(function(ax) {
			p.appendChild(ax).id = am;
			return !o.getElementsByName || !o.getElementsByName(am).length
		});
		if (ae.getById) {
			ab.filter.ID = function(ay) {
				var ax = ay;
				return function(az) {
					return az.getAttribute("id") === ax
				}
			}
		} else {
			ab.filter.ID = function(ay) {
				var ax = new g(["^", ay, "$"].join(""), "g");
				return function(aA) {
					var az = typeof aA.getAttributeNode !== "undefined" && aA.getAttributeNode("id");
					return az && ax.test(az.value)
				}
			}
		}
		ab.find.TAG = ae.getElementsByTagName ? function(ax, ay) {
			if (typeof ay.getElementsByTagName !== "undefined") {
				return ay.getElementsByTagName(ax)
			} else {
				if (ae.qsa) {
					return ay.querySelectorAll(ax)
				}
			}
		} : function(ax, aB) {
			var aC, aA = [],
				az = 0,
				ay = aB.getElementsByTagName(ax);
			if (ax === "*") {
				while ((aC = ay[az++])) {
					if (aC.nodeType === 1) {
						aA.push(aC)
					}
				}
				return aA
			}
			return ay
		};
		ab.find.CLASS = ae.getElementsByClassName && function(ay, ax) {
			if (typeof ax.getElementsByClassName !== "undefined") {
				return ax.getElementsByClassName(ay)
			}
		};
		M = [];
		f = [];
		if ((ae.qsa = L.test(o.querySelectorAll))) {
			Z(function(ax) {
				p.appendChild(ax).innerHTML = "<a id='" + am + "'></a><select id='" + am + "-\r\\' msallowcapture=''><option selected=''></option></select>";
				if (ax.querySelectorAll("[msallowcapture^='']").length) {
					f.push("[*^$]=" + Q + "*(?:''|\"\")")
				}
				if (!ax.querySelectorAll("[selected]").length) {
					f.push("\\[" + Q + "*(?:value|" + ag + ")")
				}
				if (!ax.querySelectorAll("[id~=" + am + "-]").length) {
					f.push("~=")
				}
				if (!ax.querySelectorAll(":checked").length) {
					f.push(":checked")
				}
				if (!ax.querySelectorAll("a#" + am + "+*").length) {
					f.push(".#.+[+~]")
				}
			});
			Z(function(ay) {
				ay.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
				var ax = o.createElement("input");
				ax.setAttribute("type", "hidden");
				ay.appendChild(ax).setAttribute("name", "D");
				if (ay.querySelectorAll("[name=d]").length) {
					f.push("name" + Q + "*[*^$|!~]?=")
				}
				if (ay.querySelectorAll(":enabled").length !== 2) {
					f.push(":enabled", ":disabled")
				}
				p.appendChild(ay).disabled = true;
				if (ay.querySelectorAll(":disabled").length !== 2) {
					f.push(":enabled", ":disabled")
				}
				ay.querySelectorAll("*,:x");
				f.push(",.*:")
			})
		}
		if ((ae.matchesSelector = L.test((b = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)))) {
			Z(function(ax) {
				ae.disconnectedMatch = b.call(ax, "*");
				b.call(ax, "[s!='']:x")
			})
		}
		f = f.length && new g(f.join("|"));
		M = M.length && new g(M.join("|"));
		e = L.test(p.compareDocumentPosition);
		S = e || L.test(p.contains) ? function(ay, ax) {
			var aA = ay.nodeType === 9 ? ay.documentElement : ay,
				az = ax && ax.parentNode;
			return ay === az || !!(az && az.nodeType === 1 && (aA.contains ? aA.contains(az) : ay.compareDocumentPosition && ay.compareDocumentPosition(az) & 16))
		} : function(ay, ax) {
			if (ax) {
				while ((ax = ax.parentNode)) {
					if (ax === ay) {
						return true
					}
				}
			}
			return false
		};
		A = e ? function(ay, ax) {
			if (ay === ax) {
				s = true;
				return 0
			}
			var az = !ay.compareDocumentPosition - !ax.compareDocumentPosition;
			if (az) {
				return az
			}
			az = (ay.ownerDocument || ay) === (ax.ownerDocument || ax) ? ay.compareDocumentPosition(ax) : 1;
			if (az & 1 || (!ae.sortDetached && ax.compareDocumentPosition(ay) === az)) {
				if (ay === o || ay.ownerDocument === an && S(an, ay)) {
					return -1
				}
				if (ax === o || ax.ownerDocument === an && S(an, ax)) {
					return 1
				}
				return U ? (H(U, ay) - H(U, ax)) : 0
			}
			return az & 4 ? -1 : 1
		} : function(ay, ax) {
			if (ay === ax) {
				s = true;
				return 0
			}
			var aE, aB = 0,
				aD = ay.parentNode,
				aA = ax.parentNode,
				az = [ay],
				aC = [ax];
			if (!aD || !aA) {
				return ay === o ? -1 : ax === o ? 1 : aD ? -1 : aA ? 1 : U ? (H(U, ay) - H(U, ax)) : 0
			} else {
				if (aD === aA) {
					return j(ay, ax)
				}
			}
			aE = ay;
			while ((aE = aE.parentNode)) {
				az.unshift(aE)
			}
			aE = ax;
			while ((aE = aE.parentNode)) {
				aC.unshift(aE)
			}
			while (az[aB] === aC[aB]) {
				aB++
			}
			return aB ? j(az[aB], aC[aB]) : az[aB] === an ? -1 : aC[aB] === an ? 1 : 0
		};
		return o
	};
	af.matches = function(i, e) {
		return af(i, null, null, e)
	};
	af.matchesSelector = function(av, ax) {
		if ((av.ownerDocument || av) !== o) {
			v(av)
		}
		if (ae.matchesSelector && !z[ax + " "] && (!M || !M.test(ax)) && (!f || !f.test(ax))) {
			try {
				var i = b.call(av, ax);
				if (i || ae.disconnectedMatch || av.document && av.document.nodeType !== 11) {
					return i
				}
			} catch (aw) {
				z(ax, !0)
			}
		}
		return af(ax, o, null, [av]).length > 0
	};
	af.contains = function(e, i) {
		if ((e.ownerDocument || e) !== o) {
			v(e)
		}
		return S(e, i)
	};
	af.escape = function(e) {
		return (e + "").replace(R, l)
	};
	af.error = function(e) {
		throw new Error("Syntax error: " + e)
	};
	af.uniqueSort = function(aw) {
		var ax, ay = [],
			e = 0,
			av = 0;
		s = !ae.detectDuplicates;
		U = !ae.sortStable && aw.slice(0);
		aw.sort(A);
		if (s) {
			while ((ax = aw[av++])) {
				if (ax === aw[av]) {
					e = ay.push(av)
				}
			}
			while (e--) {
				aw.splice(ay[e], 1)
			}
		}
		U = null;
		return aw
	};
	d = af.getText = function(ay) {
		var ax, av = "",
			aw = 0,
			e = ay.nodeType;
		if (!e) {
			while ((ax = ay[aw++])) {
				av += d(ax)
			}
		} else {
			if (e === 1 || e === 9 || e === 11) {
				if (typeof ay.textContent === "string") {
					return ay.textContent
				} else {
					for (ay = ay.firstChild; ay; ay = ay.nextSibling) {
						av += d(ay)
					}
				}
			} else {
				if (e === 3 || e === 4) {
					return ay.nodeValue
				}
			}
		}
		return av
	};
	ab = af.selectors = {
		cacheLength: 50,
		match: W,
		find: {},
		relative: {
			">": {
				dir: "parentNode",
				first: true
			},
			" ": {
				dir: "parentNode"
			},
			"+": {
				dir: "previousSibling",
				first: true
			},
			"~": {
				dir: "previousSibling"
			}
		},
		preFilter: {
			ATTR: function(e) {
				e[3] = (e[3] || e[4] || e[5] || "");
				if (e[2] === "~=") {
					e[3] = " " + e[3] + " "
				}
				return e.slice(0, 4)
			}
		},
		filter: {
			TAG: function(i) {
				var e = i.toLowerCase();
				return i === "*" ? function() {
					return true
				} : function(av) {
					return av.nodeName && av.nodeName.toLowerCase() === e
				}
			},
			CLASS: function(e) {
				var i = ai[e + " "];
				return i || (i = new g("(^|" + Q + ")" + e + "(" + Q + "|$)")) && ai(e, function(av) {
					return i.test(typeof av.className === "string" && av.className || typeof av.getAttribute !== "undefined" && av.getAttribute("class") || "")
				})
			},
			ATTR: function(av, i, e) {
				return function(ax) {
					var aw = af.attr(ax, av);
					if (aw == null) {
						return i === "!="
					}
					if (!i) {
						return true
					}
					aw += "";
					return i === "=" ? aw === e : i === "!=" ? aw !== e : i === "^=" ? e && aw.indexOf(e) === 0 : i === "*=" ? e && aw.indexOf(e) > -1 : i === "$=" ? e && aw.slice(-e.length) === e : i === "~=" ? (" " + aw.replace(E, " ") + " ").indexOf(e) > -1 : i === "|=" ? aw === e || aw.slice(0, e.length + 1) === e + "-" : false
				}
			}
		}
	};

	function D() {}
	D.prototype = ab.filters = ab.pseudos;
	ab.setFilters = new D();
	k = af.tokenize = function(ax, aC) {
		var i, ay, aA = [],
			aB, az, av, e, aw = aj[ax + " "];
		if (aw) {
			return aC ? 0 : aw.slice(0)
		}
		az = ax;
		av = [];
		e = ab.preFilter;
		while (az) {
			if (!i || (ay = m.exec(az))) {
				if (ay) {
					az = az.slice(ay[0].length) || az
				}
				av.push((aA = []))
			}
			i = false;
			if ((ay = X.exec(az))) {
				i = ay.shift();
				aA.push({
					value: i,
					type: ay[0].replace(ah, " ")
				});
				az = az.slice(i.length)
			}
			for (aB in ab.filter) {
				if ((ay = W[aB].exec(az)) && (!e[aB] || (ay = e[aB](ay)))) {
					i = ay.shift();
					aA.push({
						value: i,
						type: aB,
						matches: ay
					});
					az = az.slice(i.length)
				}
			}
			if (!i) {
				break
			}
		}
		return aC ? az.length : az ? af.error(ax) : aj(ax, av).slice(0)
	};

	function O(az, ax, ay) {
		var e = ax.dir,
			aw = ax.next,
			av = aw || e,
			aA = ay && av === "parentNode",
			i = y++;
		return ax.first ? function(aD, aC, aB) {
			while ((aD = aD[e])) {
				if (aD.nodeType === 1 || aA) {
					return az(aD, aC, aB)
				}
			}
			return false
		} : function(aG, aE, aD) {
			var aH, aB, aF, aC = [K, i];
			if (aD) {
				while ((aG = aG[e])) {
					if (aG.nodeType === 1 || aA) {
						if (az(aG, aE, aD)) {
							return true
						}
					}
				}
			} else {
				while ((aG = aG[e])) {
					if (aG.nodeType === 1 || aA) {
						aF = aG[am] || (aG[am] = {});
						aB = aF[aG.uniqueID] || (aF[aG.uniqueID] = {});
						if (aw && aw === aG.nodeName.toLowerCase()) {
							aG = aG[e] || aG
						} else {
							if ((aH = aB[av]) && aH[0] === K && aH[1] === i) {
								return (aC[2] = aH[2])
							} else {
								aB[av] = aC;
								if ((aC[2] = az(aG, aE, aD))) {
									return true
								}
							}
						}
					}
				}
			}
			return false
		}
	}

	function x(e) {
		return e.length > 1 ? function(ay, ax, av) {
			var aw = e.length;
			while (aw--) {
				if (!e[aw](ay, ax, av)) {
					return false
				}
			}
			return true
		} : e[0]
	}

	function J(av, ay, ax) {
		var aw = 0,
			e = ay.length;
		for (; aw < e; aw++) {
			af(av, ay[aw], ax)
		}
		return ax
	}

	function N(e, av, aw, ax, aA) {
		var ay, aD = [],
			az = 0,
			aB = e.length,
			aC = av != null;
		for (; az < aB; az++) {
			if ((ay = e[az])) {
				if (!aw || aw(ay, ax, aA)) {
					aD.push(ay);
					if (aC) {
						av.push(az)
					}
				}
			}
		}
		return aD
	}

	function ar(av, i, ax, aw, ay, e) {
		if (aw && !aw[am]) {
			aw = ar(aw)
		}
		if (ay && !ay[am]) {
			ay = ar(ay, e)
		}
		return ap(function(aJ, aG, aB, aI) {
			var aL, aH, aD, aC = [],
				aK = [],
				aA = aG.length,
				az = aJ || J(i || "*", aB.nodeType ? [aB] : aB, []),
				aE = av && (aJ || !i) ? N(az, aC, av, aB, aI) : az,
				aF = ax ? ay || (aJ ? av : aA || aw) ? [] : aG : aE;
			if (ax) {
				ax(aE, aF, aB, aI)
			}
			if (aw) {
				aL = N(aF, aK);
				aw(aL, [], aB, aI);
				aH = aL.length;
				while (aH--) {
					if ((aD = aL[aH])) {
						aF[aK[aH]] = !(aE[aK[aH]] = aD)
					}
				}
			}
			if (aJ) {
				if (ay || av) {
					if (ay) {
						aL = [];
						aH = aF.length;
						while (aH--) {
							if ((aD = aF[aH])) {
								aL.push((aE[aH] = aD))
							}
						}
						ay(null, (aF = []), aL, aI)
					}
					aH = aF.length;
					while (aH--) {
						if ((aD = aF[aH]) && (aL = ay ? H(aJ, aD) : aC[aH]) > -1) {
							aJ[aL] = !(aG[aL] = aD)
						}
					}
				}
			} else {
				aF = N(aF === aG ? aF.splice(aA, aF.length) : aF);
				if (ay) {
					ay(null, aG, aF, aI)
				} else {
					ak.apply(aG, aF)
				}
			}
		})
	}

	function P(aA) {
		var av, ay, aw, az = aA.length,
			aD = ab.relative[aA[0].type],
			aE = aD || ab.relative[" "],
			ax = aD ? 1 : 0,
			aB = O(function(i) {
				return i === av
			}, aE, true),
			aC = O(function(i) {
				return H(av, i) > -1
			}, aE, true),
			e = [function(aH, aG, aF) {
				var i = (!aD && (aF || aG !== Y)) || ((av = aG).nodeType ? aB(aH, aG, aF) : aC(aH, aG, aF));
				av = null;
				return i
			}];
		for (; ax < az; ax++) {
			if ((ay = ab.relative[aA[ax].type])) {
				e = [O(x(e), ay)]
			} else {
				ay = ab.filter[aA[ax].type].apply(null, aA[ax].matches);
				if (ay[am]) {
					aw = ++ax;
					for (; aw < az; aw++) {
						if (ab.relative[aA[aw].type]) {
							break
						}
					}
					return ar(ax > 1 && x(e), ax > 1 && a(aA.slice(0, ax - 1).concat({
						value: aA[ax - 2].type === " " ? "*" : ""
					})).replace(ah, "$1"), ay, ax < aw && P(aA.slice(ax, aw)), aw < az && P((aA = aA.slice(aw))), aw < az && a(aA))
				}
				e.push(ay)
			}
		}
		return x(e)
	}

	function n(aw, av) {
		var e = av.length > 0,
			ax = aw.length > 0,
			i = function(aH, aB, aG, aF, aK) {
				var aC, aD, aI, aM = 0,
					aE = "0",
					ay = aH && [],
					aN = [],
					aL = Y,
					aA = aH || ax && ab.find.TAG("*", aK),
					az = (K += aL == null ? 1 : Math.random() || 0.1),
					aJ = aA.length;
				if (aK) {
					Y = aB === o || aB || aK
				}
				for (; aE !== aJ && (aC = aA[aE]) != null; aE++) {
					if (ax && aC) {
						aD = 0;
						if (!aB && aC.ownerDocument !== o) {
							v(aC);
							aG = !ao
						}
						while ((aI = aw[aD++])) {
							if (aI(aC, aB || o, aG)) {
								aF.push(aC);
								break
							}
						}
						if (aK) {
							K = az
						}
					}
					if (e) {
						if ((aC = !aI && aC)) {
							aM--
						}
						if (aH) {
							ay.push(aC)
						}
					}
				}
				aM += aE;
				if (e && aE !== aM) {
					aD = 0;
					while ((aI = av[aD++])) {
						aI(ay, aN, aB, aG)
					}
					if (aH) {
						if (aM > 0) {
							while (aE--) {
								if (!(ay[aE] || aN[aE])) {
									aN[aE] = V.call(aF)
								}
							}
						}
						aN = N(aN)
					}
					ak.apply(aF, aN);
					if (aK && !aH && aN.length > 0 && (aM + av.length) > 1) {
						af.uniqueSort(aF)
					}
				}
				if (aK) {
					K = az;
					Y = aL
				}
				return ay
			};
		return e ? ap(i) : i
	}
	u = af.compile = function(e, aw) {
		var ax, av = [],
			az = [],
			ay = G[e + " "];
		if (!ay) {
			if (!aw) {
				aw = k(e)
			}
			ax = aw.length;
			while (ax--) {
				ay = P(aw[ax]);
				if (ay[am]) {
					av.push(ay)
				} else {
					az.push(ay)
				}
			}
			ay = G(e, n(az, av));
			ay.selector = e
		}
		return ay
	};
	al = af.select = function(e, az, ay, av) {
		var ax, aA = typeof e === "function" && e,
			aw = !av && k((e = aA.selector || e));
		ay = ay || [];
		(aA || u(e, aw))(av, az, !ao, ay, !az || az);
		return ay
	};
	ae.sortStable = am.split("").sort(A).join("") === am;
	ae.detectDuplicates = !!s;
	v();
	ae.sortDetached = Z(function(e) {
		return e.compareDocumentPosition(o.createElement("fieldset")) & 1
	});
	if (!Z(function(e) {
			e.innerHTML = "<a href='#'></a>";
			return e.firstChild.getAttribute("href") === "#"
		})) {
		B("type|href|height|width", function(i, e) {
			return i.getAttribute(e, e.toLowerCase() === "type" ? 1 : 2)
		})
	}
	if (!ae.attributes || !Z(function(e) {
			e.innerHTML = "<input/>";
			e.firstChild.setAttribute("value", "");
			return e.firstChild.getAttribute("value") === ""
		})) {
		B("value", function(i, e) {
			if (i.nodeName.toLowerCase() === "input") {
				return i.defaultValue
			}
		})
	}
	if (!Z(function(e) {
			return e.getAttribute("disabled") == null
		})) {
		B(ag, function(i, e) {
			var av;
			return i[e] === true ? e.toLowerCase() : (av = i.getAttributeNode(e)) && av.specified ? av.value : null
		})
	}
	t.support = ae;
	t.sizzle = af
})(dynamsoft.lib);
(function(j) {
	var aa = Array.prototype,
		t = aa.slice,
		f = j.doc,
		U = j.each,
		d = f.documentElement;
	var y = 20180508;
	if (j._ui_nodelistExt_ver) {
		if (j.isNumber(j._ui_nodelistExt_ver) && j._ui_nodelistExt_ver >= y) {
			return
		}
	}
	j._ui_nodelistExt_ver = y;
	var M = j.support,
		Q = j.sizzle;
	var b, S, T, I, r, k, K = f.createElement("div"),
		Y = f.createElement("div");

	function p() {
		var ad, ac;
		d.appendChild(K);
		Y.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
		b = T = k = false;
		S = r = true;
		if (window.getComputedStyle) {
			ac = window.getComputedStyle(Y);
			b = (ac || {}).top !== "1%";
			k = (ac || {}).marginLeft === "2px";
			T = (ac || {
				width: "4px"
			}).width === "4px";
			Y.style.marginRight = "50%";
			S = (ac || {
				marginRight: "4px"
			}).marginRight === "4px";
			ad = Y.appendChild(document.createElement("div"));
			ad.style.cssText = Y.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			ad.style.marginRight = ad.style.width = "0";
			Y.style.width = "1px";
			r = !parseFloat((window.getComputedStyle(ad) || {}).marginRight);
			Y.removeChild(ad)
		}
		Y.style.display = "none";
		I = Y.getClientRects().length === 0;
		if (I) {
			Y.style.display = "";
			Y.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			Y.childNodes[0].style.borderCollapse = "separate";
			ad = Y.getElementsByTagName("td");
			ad[0].style.cssText = "margin:0;border:0;padding:0;display:none";
			I = ad[0].offsetHeight === 0;
			if (I) {
				ad[0].style.display = "";
				ad[1].style.display = "none";
				I = ad[0].offsetHeight === 0
			}
		}
		d.removeChild(K)
	}
	if (!Y.style) {
		return
	}
	Y.style.cssText = "float:left;opacity:.5";
	M.opacity = Y.style.opacity === "0.5";
	M.cssFloat = !!Y.style.cssFloat;
	Y.style.backgroundClip = "content-box";
	Y.cloneNode(true).style.backgroundClip = "";
	M.clearCloneStyle = Y.style.backgroundClip === "content-box";
	K = document.createElement("div");
	K.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
	Y.innerHTML = "";
	K.appendChild(Y);
	M.boxSizing = Y.style.boxSizing === "" || Y.style.MozBoxSizing === "" || Y.style.WebkitBoxSizing === "";
	j.mix(M, {
		reliableHiddenOffsets: function() {
			if (b == null) {
				p()
			}
			return I
		},
		boxSizingReliable: function() {
			if (b == null) {
				p()
			}
			return T
		},
		pixelMarginRight: function() {
			if (b == null) {
				p()
			}
			return S
		},
		pixelPosition: function() {
			if (b == null) {
				p()
			}
			return b
		},
		reliableMarginRight: function() {
			if (b == null) {
				p()
			}
			return r
		},
		reliableMarginLeft: function() {
			if (b == null) {
				p()
			}
			return k
		}
	});
	var i, g, x = (/^margin/),
		q = /^(top|right|bottom|left)$/,
		Z = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source,
		J = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
		o = new RegExp("^(" + Z + ")(.*)$", "i");
	if (window.getComputedStyle) {
		i = function(ae) {
			var ad, ac;
			ad = j.isFunction(ae.getEL) ? ae.getEL() : ae;
			ac = ad.ownerDocument.defaultView;
			if (!ac || !ac.opener) {
				ac = window
			}
			return ac.getComputedStyle(ad)
		};
		g = function(aj, ad, ai) {
			var ag, af, ah, ac, ae = aj.style;
			ai = ai || i(aj);
			ac = ai ? ai.getPropertyValue(ad) || ai[ad] : undefined;
			if ((ac === "" || ac === undefined) && !Q.contains(aj.ownerDocument, aj)) {
				ac = j.style(aj, ad)
			}
			if (ai) {
				if (!M.pixelMarginRight() && J.test(ac) && x.test(ad)) {
					ag = ae.width;
					af = ae.minWidth;
					ah = ae.maxWidth;
					ae.minWidth = ae.maxWidth = ae.width = ac;
					ac = ai.width;
					ae.width = ag;
					ae.minWidth = af;
					ae.maxWidth = ah
				}
			}
			return ac === undefined ? ac : ac + ""
		}
	} else {
		if (d.currentStyle) {
			i = function(ac) {
				return ac.currentStyle
			};
			g = function(ai, af, ah) {
				var aj, ad, ac, ae, ag = ai.style;
				ah = ah || i(ai);
				ae = ah ? ah[af] : undefined;
				if (ae == null && ag && ag[af]) {
					ae = ag[af]
				}
				if (J.test(ae) && !q.test(af)) {
					aj = ag.left;
					ad = ai.runtimeStyle;
					ac = ad && ad.left;
					if (ac) {
						ad.left = ai.currentStyle.left
					}
					ag.left = af === "fontSize" ? "1em" : ae;
					ae = ag.pixelLeft + "px";
					ag.left = aj;
					if (ac) {
						ad.left = ac
					}
				}
				return ae === undefined ? ae : ae + "" || "auto"
			}
		}
	}
	var e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		n = (/<([\w:-]+)/),
		c = (/^\s+/),
		u = /<|&#?\w+;/,
		E = /<tbody/i,
		G = /^-ms-/,
		z = /-([\da-z])/gi,
		A = /^(none|table(?!-c[ea]).+)/,
		O = (/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/),
		L = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		D = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		a = ["Top", "Right", "Bottom", "Left"];
	var R = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: M.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	};
	var C, X = ["Webkit", "O", "Moz", "ms"],
		H = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
	var V = document.createElement("div");
	if (!V.style) {
		return
	}
	C = V.style;
	M.cssFloat = !!V.style.cssFloat;
	var B = function(ac, ad) {
		return ad.toUpperCase()
	};
	var v = {
		type: j.type,
		cssHooks: {},
		htmlPrefilter: function(ac) {
			return ac.replace(e, "<$1></$2>")
		},
		nodeName: function(ad, ac) {
			return ad.nodeName && ad.nodeName.toLowerCase() === ac.toLowerCase()
		},
		merge: function(ag, ae) {
			var ac = +ae.length,
				ad = 0,
				af = ag.length;
			while (ad < ac) {
				ag[af++] = ae[ad++]
			}
			if (ac !== ac) {
				while (ae[ad] !== undefined) {
					ag[af++] = ae[ad++]
				}
			}
			ag.length = af;
			return ag
		},
		camelCase: function(ac) {
			return ac.replace(G, "ms-").replace(z, B)
		},
		cssProps: {
			"float": M.cssFloat ? "cssFloat" : "styleFloat"
		},
		cssNumber: {
			animationIterationCount: true,
			columnCount: true,
			fillOpacity: true,
			flexGrow: true,
			flexShrink: true,
			fontWeight: true,
			lineHeight: true,
			opacity: true,
			order: true,
			orphans: true,
			widows: true,
			zIndex: true,
			zoom: true
		}
	};

	function N(ac) {
		if (ac in C) {
			return ac
		}
		var ae = ac.charAt(0).toUpperCase() + ac.slice(1),
			ad = X.length;
		while (ad--) {
			ac = X[ad] + ae;
			if (ac in C) {
				return ac
			}
		}
	}

	function m(af, ac) {
		var ad, ag, ae = 0,
			ah = typeof af.getElementsByTagName !== "undefined" ? af.getElementsByTagName(ac || "*") : typeof af.querySelectorAll !== "undefined" ? af.querySelectorAll(ac || "*") : undefined;
		if (!ah) {
			ah = [];
			for (ad = af.childNodes || af;
				(ag = ad[ae]) != null; ae++) {
				if (!ac || v.nodeName(ag, ac)) {
					ah.push(ag)
				} else {
					v.merge(ah, m(ag, ac))
				}
			}
		}
		return ac === undefined || ac && v.nodeName(af, ac) ? v.merge([af], ah) : ah
	}

	function W(ae) {
		var ad = H.split("|"),
			ac = ae.createDocumentFragment();
		if (ac.createElement) {
			while (ad.length) {
				ac.createElement(ad.pop())
			}
		}
		return ac
	}

	function h(ad, af) {
		var ak, ah, aj, am, ao, an, ae, ai = ad.length,
			ag = W(af),
			ac = [],
			al = 0;
		for (; al < ai; al++) {
			ah = ad[al];
			if (ah || ah === 0) {
				if (j.type(ah) === "object") {
					v.merge(ac, ah.nodeType ? [ah] : ah)
				} else {
					if (!u.test(ah)) {
						ac.push(af.createTextNode(ah))
					} else {
						am = am || ag.appendChild(af.createElement("div"));
						ao = (n.exec(ah) || ["", ""])[1].toLowerCase();
						ae = R[ao] || R._default;
						am.innerHTML = ae[1] + v.htmlPrefilter(ah) + ae[2];
						ak = ae[0];
						while (ak--) {
							am = am.lastChild
						}
						if (!M.leadingWhitespace && c.test(ah)) {
							ac.push(af.createTextNode(c.exec(ah)[0]))
						}
						if (!M.tbody) {
							ah = ao === "table" && !E.test(ah) ? am.firstChild : ae[1] === "<table>" && !E.test(ah) ? am : 0;
							ak = ah && ah.childNodes.length;
							while (ak--) {
								if (v.nodeName((an = ah.childNodes[ak]), "tbody") && !an.childNodes.length) {
									ah.removeChild(an)
								}
							}
						}
						v.merge(ac, am.childNodes);
						am.textContent = "";
						while (am.firstChild) {
							am.removeChild(am.firstChild)
						}
						am = ag.lastChild
					}
				}
			}
		}
		if (am) {
			ag.removeChild(am)
		}
		al = 0;
		while ((ah = ac[al++])) {
			if (ah.tagName !== "SCRIPT") {
				aj = Q.contains(ah.ownerDocument, ah);
				ag.appendChild(ah)
			}
		}
		am = null;
		return ag
	}
	var F = function(ah, ag, ai, af) {
		var ae, ad, ac = {};
		U(ag, function(ak, aj) {
			ac[aj] = ah.style[aj];
			ah.style[aj] = ag[aj]
		});
		ae = ai.apply(ah, af || []);
		U(ag, function(ak, aj) {
			ah.style[aj] = ac[aj]
		});
		return ae
	};

	function s(ag, ad, ac, ai, af) {
		var ae = ac === (ai ? "border" : "content") ? 4 : ad === "width" ? 1 : 0,
			ah = 0;
		for (; ae < 4; ae += 2) {
			if (ac === "margin") {
				ah += j.css(ag, ac + a[ae], true, af)
			}
			if (ai) {
				if (ac === "content") {
					ah -= j.css(ag, "padding" + a[ae], true, af)
				}
				if (ac !== "margin") {
					ah -= j.css(ag, "border" + a[ae] + "Width", true, af)
				}
			} else {
				ah += j.css(ag, "padding" + a[ae], true, af);
				if (ac !== "padding") {
					ah += j.css(ag, "border" + a[ae] + "Width", true, af)
				}
			}
		}
		return ah
	}

	function ab(ag, ad, ac) {
		var af = true,
			ah = ad === "width" ? ag.offsetWidth : ag.offsetHeight,
			ae = i(ag),
			ai = M.boxSizing && j.css(ag, "boxSizing", false, ae) === "border-box";
		if (ah <= 0 || ah == null) {
			ah = g(ag, ad, ae);
			if (ah < 0 || ah == null) {
				ah = ag.style[ad]
			}
			if (J.test(ah)) {
				return ah
			}
			af = ai && (M.boxSizingReliable() || ah === ag.style[ad]);
			ah = parseFloat(ah) || 0
		}
		return (ah + s(ag, ad, ac || (ai ? "border" : "content"), af, ae))
	}

	function P(ac) {
		var ad = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i");
		return ad.exec(ac)
	}

	function w(ac, ae, af) {
		var ad = o.exec(ae);
		return ad ? Math.max(0, ad[1] - (af || 0)) + (ad[2] || "px") : ae
	}

	function l(ad, ac, ag, al) {
		var am, ae = 1,
			ai = 20,
			ak = al ? function() {
				return al.cur()
			} : function() {
				return j.css(ad, ac, "")
			},
			ah = ak(),
			aj = ag && ag[3] || (v.cssNumber[ac] ? "" : "px"),
			af = (v.cssNumber[ac] || aj !== "px" && +ah) && P(j.css(ad, ac));
		if (af && af[3] !== aj) {
			aj = aj || af[3];
			ag = ag || [];
			af = +ah || 1;
			do {
				ae = ae || ".5";
				af = af / ae;
				j.style(ad, ac, af + aj)
			} while (ae !== (ae = ak() / ah) && ae !== 1 && --ai)
		}
		if (ag) {
			af = +af || +ah || 0;
			am = ag[1] ? af + (ag[1] + 1) * ag[2] : +ag[2];
			if (al) {
				al.unit = aj;
				al.start = af;
				al.end = am
			}
		}
		return am
	}
	U(["height", "width"], function(ac, ad) {
		v.cssHooks[ac] = {
			get: function(ag, af, ae) {
				if (af) {
					return A.test(j.css(ag, "display")) && ag.offsetWidth === 0 ? F(ag, L, function() {
						return ab(ag, ac, ae)
					}) : ab(ag, ac, ae)
				}
			},
			set: function(ag, ah, ae) {
				var af = ae && i(ag);
				return w(ag, ah, ae ? s(ag, ac, ae, M.boxSizing && j.css(ag, "boxSizing", false, af) === "border-box", af) : 0)
			}
		}
	});
	j.style = function(ae, ad, aj, af) {
		if (!ae || ae.nodeType === 3 || ae.nodeType === 8 || !ae.style) {
			return
		}
		var ah, ai, ak, ag = v.camelCase(ad),
			ac = ae.style;
		ad = v.cssProps[ag] || (v.cssProps[ag] = N(ag) || ag);
		ak = v.cssHooks[ad] || v.cssHooks[ag];
		if (aj !== undefined) {
			ai = typeof aj;
			if (ai === "string" && (ah = P(aj)) && ah[1]) {
				aj = l(ae, ad, ah);
				ai = "number"
			}
			if (aj == null || aj !== aj) {
				return
			}
			if (ai === "number") {
				aj += ah && ah[3] || (v.cssNumber[ag] ? "" : "px")
			}
			if (!M.clearCloneStyle && aj === "" && ad.indexOf("background") === 0) {
				ac[ad] = "inherit"
			}
			if (!ak || !("set" in ak) || (aj = ak.set(ae, aj, af)) !== undefined) {
				ac[ad] = aj
			}
		} else {
			if (ak && "get" in ak && (ah = ak.get(ae, false, af)) !== undefined) {
				return ah
			}
			return ac[ad] + ""
		}
	};
	j.css = function(ai, ag, ad, ah) {
		var af, aj, ac, ae = v.camelCase(ag);
		ag = v.cssProps[ae] || (v.cssProps[ae] = N(ae) || ae);
		ac = v.cssHooks[ag] || v.cssHooks[ae];
		if (ac && "get" in ac) {
			aj = ac.get(ai, true, ad)
		}
		if (aj === undefined) {
			aj = g(ai, ag, ah)
		}
		if (aj === "normal" && ag in D) {
			aj = D[ag]
		}
		if (ad === "" || ad) {
			af = parseFloat(aj);
			return ad === true || isFinite(af) ? af || 0 : aj
		}
		return aj
	};
	j.parseHTML = function(ae, ad) {
		if (!ae || typeof ae !== "string") {
			return []
		}
		if (typeof ad === "boolean") {
			ad = false
		}
		ad = ad || document;
		var ac = O.exec(ae);
		if (ac) {
			return [ad.createElement(ac[1])]
		}
		ac = h([ae], ad);
		return v.merge([], ac.childNodes)
	}
})(dynamsoft.lib);
(function(h) {
	var b = "",
		f = "[bio]: ",
		c = !0,
		g = !1;
	var e = dynamsoft.lib.win,
		i = e && e.FormData;

	function a(k) {
		var j = this;
		j.__attrs = {};
		h.mix(j.__attrs, {
			action: b,
			data: {},
			bChunkedSendData: c,
			blockSize: 0,
			ajaxConfig: {
				value: {},
				type: "post",
				processData: g,
				cache: g,
				dataType: "text",
				async: c,
				contentType: g,
				headers: {
					"X-Requested-With": g
				}
			},
			ajax: b,
			formData: b,
			CORS: g
		});
		h.mix(j.__attrs, k);
		j._setWithCredentials()
	}
	h.mix(a, {
		event: {
			SUCCESS: "success",
			ERROR: "error",
			PROGRESS: "progress"
		},
		status: {
			SUCCESS: "success",
			ERROR: "error"
		}
	});
	h.mix(a.prototype, h.obj.customEvent);
	h.mix(a.prototype, {
		get: function(k) {
			var j = this;
			if (k in j.__attrs) {
				return j.__attrs[k]
			}
			return ""
		},
		set: function(l, k) {
			var j = this;
			if (l in j.__attrs) {
				j.__attrs[l] = k
			}
		},
		_setWithCredentials: function() {
			var j = this;
			var l = j.get("CORS");
			var k = j.get("ajaxConfig");
			h.mix(k, {
				xhrFields: {
					withCredentials: false
				}
			});
			return k
		},
		uploadToServer: function(m) {
			var j = this,
				l = j.get("blockSize"),
				k;
			if (l > 0 && m && m.size > 0) {
				k = j._chunkedUpload(m)
			} else {
				k = j._fullUpload(m)
			}
			return k
		},
		_fullUpload: function(n) {
			var j = this,
				l = j.get("ajaxConfig"),
				k = true,
				m = function(r) {
					var q = "";
					if (r) {
						if (r && h.isArray(r) && r.length > 1) {
							q = r[0]
						} else {
							if (h.isString(r)) {
								q = r
							}
						}
					}
					q = j._processResponse(q);
					j.fire(a.event.SUCCESS, q)
				},
				p = function(u, r, t) {
					var q, s;
					k = false;
					if (u && h.isArray(u) && u.length > 2) {
						q = u[1];
						s = u[2]
					} else {
						q = r;
						s = t
					}
					j._errorHandler(s, q, n)
				};
			j._setFormData();
			if (n && n.size > 0) {
				j._addFileData(n)
			}
			h.mix(l, {
				data: j.get("formData"),
				url: j.get("action"),
				beforeSend: function(s, r, q) {
					s.upload.addEventListener("progress", function(t) {
						j.fire(a.event.PROGRESS, {
							loaded: t.loaded,
							total: t.total
						})
					}, false)
				}
			});
			h.mix(l, {
				method: "POST",
				onSuccess: m,
				onError: p
			});
			var o = h.ajax(l);
			j.set("formData", null);
			if (l.async) {
				j.set("ajax", o);
				return true
			} else {
				j.set("ajax", false);
				return k
			}
		},
		_chunkedUpload: function(l) {
			var r = this;
			var p = r.get("ajaxConfig"),
				n = function(u) {
					var t = "";
					if (u) {
						if (u && h.isArray(u) && u.length > 1) {
							t = u[0]
						} else {
							if (h.isString(u)) {
								t = u
							}
						}
					}
					t = r._processResponse(t);
					r.fire(a.event.SUCCESS, t)
				},
				k = function(x, u, w) {
					var t, v;
					if (x && h.isArray(x) && x.length > 2) {
						t = x[1];
						v = x[2]
					} else {
						t = u;
						v = w
					}
					r._errorHandler(v, t, l)
				};
			h.mix(p, {
				url: r.get("action")
			});
			var s = l.size;
			var m = 0;
			var j = r.get("blockSize") || s;
			var o = l.slice || l.webkitSlice || l.mozSlice;

			function q(u) {
				var t = o.call(l, m, m + j, l.type);
				var v = t.size;
				r._setContentRange(m, v, s);
				r._setFormData();
				if (u) {
					r.set("data", [])
				}
				t.name = l.name;
				r._addFileData(t);
				h.mix(p, {
					data: r.get("formData")
				});
				h.mix(p, {
					method: "POST",
					onSuccess: function(y, w, x) {
						m = r._getUploadedBytes(x) || m + v;
						r.fire(a.event.PROGRESS, {
							loaded: m,
							total: s
						});
						if (m < s) {
							q(false)
						} else {
							n(y)
						}
					},
					onError: k
				});
				h.ajax(p);
				r.set("formData", null)
			}
			q(true)
		},
		abort: function() {
			var j = this,
				k = j.get("ajax");
			if (!h.isObject(k)) {
				h.log(f + "abort(), the value of io invalid!");
				return j
			}
			k.abort();
			j.set("ajax", false);
			return j
		},
		_setFormData: function() {
			var j = this,
				k = j.get("data"),
				m;
			if (!i) {
				h.log(f + "the browser does not support ajax.");
				return
			}
			if (k instanceof i) {
				j.set("formData", k)
			} else {
				m = new i();
				try {
					h.each(k, function(o, n) {
						m.append(n, o)
					});
					j.set("formData", m)
				} catch (l) {
					h.log(f + "something error when reset FormData.")
				}
			}
		},
		setRequestHeader: function(l, m) {
			var j = this;
			var k = j.get("ajaxConfig");
			k.headers[l] = m;
			j.set("ajaxConfig", k);
			return m
		},
		_addFileData: function(l) {
			if (!h.isObject(l)) {
				h.log(f + "_addFileData(), file parameter invalid!");
				return false
			}
			var k = this;
			var m = k.get("formData");
			var n = l.name,
				j = l.remoteFilename;
			if (!j) {
				j = "RemoteFile"
			}
			m.append(j, l, n);
			k.set("formData", m);
			return m
		},
		_errorHandler: function(n, m, o) {
			var l = this,
				k = a.status.ERROR,
				j = {
					status: k,
					msg: m,
					response: false
				};
			if (n) {
				j.httpStatus = n.status;
				j.response = n.responseText
			}
			l.fire(k, j)
		},
		_getUploadedBytes: function(l) {
			var j = l.getResponseHeader("Range");
			var m = j && j.split("-");
			var k = m && m.length > 1 && parseInt(m[1], 10);
			return k && k + 1
		},
		_setContentRange: function(m, p, l) {
			var o = "bytes " + m + "-" + (m + p - 1) + "/" + l;
			var j = this;
			var k = j.get("ajaxConfig");
			var n = k.headers;
			n["Content-Range"] = o;
			return o
		},
		_processResponse: function(n) {
			var r = this,
				u, k, j, p = false,
				t = n,
				l = a.status.SUCCESS,
				q = a.event.ERROR;
			h.log("Response from server: " + n);
			if (h.isUndefined(n) || n === "") {
				u = {
					status: l,
					msg: false,
					json: false,
					response: ""
				}
			} else {
				if (h.isString(n)) {
					try {
						for (k = 0; k < n.length; k++) {
							if (k > 10) {
								break
							}
							j = n[k];
							if (j == "{") {
								p = true;
								break
							} else {
								if (j == " " || j == "\r" || j == "\n" || j == "\t") {} else {
									break
								}
							}
						}
						if (p) {
							var o = h.parse(n);
							if (o.status == 1) {
								u = {
									status: l,
									msg: false,
									json: o,
									response: n
								}
							} else {
								u = {
									status: q,
									msg: false,
									json: o,
									response: n
								}
							}
						}
					} catch (m) {
						p = false;
						h.log(m)
					}
					if (!p) {
						var s = String(n);
						s = s.replace(/( |\t|\r|\n)/g, "");
						if (s == "") {
							u = {
								status: l,
								msg: false,
								json: false,
								response: n
							}
						} else {
							u = {
								status: q,
								msg: false,
								json: false,
								response: n
							}
						}
					}
				} else {
					u = {
						status: l,
						msg: false,
						json: false,
						response: ""
					}
				}
			}
			return u
		}
	});

	function d(k) {
		var j = this;
		j.__attrs = {};
		h.mix(j.__attrs, {
			action: b,
			timeout: 0,
			CORS: g,
			async: c,
			dataType: "text",
			fileStatus: b,
			uploadType: g,
			data: {}
		});
		h.mix(j.__attrs, k);
		j._init()
	}
	h.mix(d, {
		event: {
			SUCCESS: "success",
			ERROR: "error",
			PROGRESS: "progress"
		}
	});
	h.mix(d.prototype, h.obj.customEvent);
	h.mix(d.prototype, {
		get: function(k) {
			var j = this;
			if (k in j.__attrs) {
				return j.__attrs[k]
			}
			return ""
		},
		set: function(l, k) {
			var j = this;
			if (l in j.__attrs) {
				j.__attrs[l] = k
			}
		},
		upload: function(k) {
			var j = this,
				l = j.get("uploadType");
			if (k && h.isObject(k)) {
				if (!k.size) {
					k.size = 0
				} else {
					if (!k.name) {
						k.name = k.fileName || b
					}
					if (!k.id) {
						k.id = h.guid("file-")
					}
					if (k.size) {
						k.textSize = j._convertByteSize(k.size)
					}
				}
			}
			return l.uploadToServer(k)
		},
		abort: function() {
			var j = this,
				k = j.get("uploadType");
			k.abort();
			return true
		},
		setRequestHeader: function(k, m) {
			var j = this,
				l = j.get("uploadType");
			l.setRequestHeader(k, m)
		},
		_convertByteSize: function(j) {
			var k = -1;
			do {
				j = j / 1024;
				k++
			} while (j > 99 && k < 4);
			return Math.max(j, 0.1).toFixed(1) + ["KB", "MB", "GB", "TB"][k]
		},
		_init: function() {
			var j = this;
			var m = {
					action: j.get("action"),
					data: j.get("data"),
					CORS: j.get("CORS")
				},
				l = new a(m);
			var k = l.get("ajaxConfig");
			if (k) {
				k.dataType = j.get("dataType");
				k.async = j.get("async")
			}
			l.on(a.event.SUCCESS, j._uploadCompleteHandler, j);
			l.on(a.event.ERROR, j._uploadCompleteHandler, j);
			l.on(a.event.PROGRESS, j._uploadProgressHandler, j);
			j.set("uploadType", l);
			return l
		},
		_uploadProgressHandler: function(k) {
			var j = this;
			j.fire(d.event.PROGRESS, k)
		},
		_uploadCompleteHandler: function(n) {
			var k = this,
				j = n.status,
				m = n.msg,
				l = k.get("file");
			h.mix(n, {
				file: l
			});
			if (j === "success") {
				k.fire(d.event.SUCCESS, n)
			} else {
				if (m === false) {} else {
					if (m === "abort") {
						h.mix(n, {
							canceled: true
						})
					} else {
						if (m === "timeout") {
							h.mix(n, {
								timeout: true
							})
						}
					}
				}
				k.fire(d.event.ERROR, n)
			}
		}
	});
	h.BIO = d
})(dynamsoft.lib);
(function(a) {
	a.DWT = {
		defaultEnv: {
			JSVersion: "14,3,1,0115",
			ServerVersionInfo: "14,3,1,0115",
			ServerLinuxVersionInfo: "14,1,0,0828",
			ServerMacVersionInfo: "14,1,0,0828",
			ActiveXVersion: "14,3,1,0115",
			PluginVersion: "11,1,0,0",
			Containers: false,
			ContainerMap: {},
			DynamicContainers: [],
			DynamicDWTMap: {},
			Trial: true,
			ResourcesPath: "Resources",
			Debug: false,
			IfUpdateService: false,
			AutoLoad: true,
			OnWebTwainReady: false,
			UseDefaultInstallUI: true,
			OnWebTwainNotFound: false,
			OnWebTwainOldPluginNotAllowed: false,
			OnWebTwainNeedUpgrade: false,
			OnWebTwainNeedUpgradeWebJavascript: false,
			OnWebTwainInitMessage: false,
			IfUseViewer: true,
			ViewerJSIntegerited: true,
			ActiveXIntegerited: true,
			ActiveXInstallWithCAB: false,
			IfUseActiveXForIE10Plus: true,
			IfCheck64bitServiceFirst: false,
			IfDownload64bitService: false,
			IfInstallDWTModuleWithZIP: false,
			IfUseEmbeddedDownloadNoticeForActiveX: false,
			IfCheckDCP: true,
			IfCheckDWT: true,
			IfDisableDefaultSettings: true,
			IsLicensePromptFriendly: true,
			EvtBeforeDWTInit: false,
			IfAddMD5InUploadHeader: false,
			IfConfineMaskWithinTheViewer: false,
			CustomizableDisplayInfo: {
				errorMessages: {
					ERR_MODULE_NOT_INSTALLED: "Error: The Dynamic Web TWAIN module is not installed.",
					ERR_BROWSER_NOT_SUPPORT: "Error: This browser is currently not supported.",
					ERR_CreateID_MustNotInContainers: "Error: Duplicate ID detected for creating Dynamic Web TWAIN objects, please check and modify.",
					ERR_CreateID_NotContainer: "Error: The ID of the DIV for creating the new DWT object is invalid.",
					ERR_DWT_NOT_DOWNLOADED: "Error: Failed to download the Dynamic Web TWAIN module.",
					limitReachedForZoomIn: "Error: You have reached the limit for zooming in",
					limitReachedForZoomOut: "Error: You have reached the limit for zooming out",
					insufficientParas: "Error: Not enough parameters.",
					invalidAngle: "Error: The angle you entered is invalid.",
					invalidHeightOrWidth: "Error: The height or width you entered is invalid.",
					imageNotChanged: "Error: You have not changed the current image."
				},
				generalMessages: {
					checkingDWTVersion: "Checking WebTwain version ...",
					updatingDService: "Dynamsoft Service is updating ...",
					downloadingDWTModule: "Downloading the Dynamic Web TWAIN module.",
					refreshNeeded: "Please REFRESH your browser.",
					downloadNeeded: "Please download and install the Dynamic Web TWAIN.",
					DWTmoduleLoaded: "The Dynamic Web TWAIN module is loaded."
				},
				customProgressText: {
					upload: "uploading...",
					download: "Downloading...",
					load: "Loading...",
					decode: "Decoding...",
					decodeTIFF: "Decoding tiff...",
					decodePDF: "Decoding pdf...",
					encode: "Encoding...",
					encodeTIFF: "Encoding tiff...",
					encodePDF: "Encoding pdf...",
					canvasLoading: "Loading ..."
				},
				buttons: {
					titles: {
						previous: "Previous Image",
						next: "Next Image",
						print: "Print Image",
						scan: "Acquire new Image(s)",
						load: "Load local Image(s)",
						rotateleft: "Rotate Left",
						rotate: "Rotate",
						rotateright: "Rotate Right",
						deskew: "Deskew",
						crop: "Crop Selected Area",
						erase: "Erase Selected Area",
						changeimagesize: "Change Image Size",
						flip: "Flip Image",
						mirror: "Mirror Image",
						zoomin: "Zoom In",
						originalsize: "Show Original Size",
						zoomout: "Zoom Out",
						stretch: "Stretch Mode",
						fit: "Fit Window",
						fitw: "Fit Horizontally",
						fith: "Fit Vertically",
						hand: "Hand Mode",
						rectselect: "Select Mode",
						zoom: "Click to Zoom In",
						restore: "Restore Orginal Image",
						save: "Save Changes",
						close: "Close the Editor",
						removeall: "Remove All Images",
						removeselected: "Remove All Selected Images"
					},
					bShowAllButtons: true,
					visibility: {
						scan: true,
						load: true,
						print: true,
						removeall: true,
						removeselected: true,
						rotateleft: true,
						rotate: true,
						rotateright: true,
						deskew: true,
						crop: true,
						erase: true,
						changeimagesize: true,
						flip: true,
						mirror: true,
						zoomin: true,
						originalsize: true,
						zoomout: true,
						stretch: true,
						fit: true,
						fitw: true,
						fith: true,
						hand: true,
						rectselect: true,
						zoom: true
					}
				},
				dialogText: {
					dlgRotateAnyAngle: ["Angle :", "Interpolation:", "Keep size", "  OK  ", "Cancel"],
					dlgChangeImageSize: ["New Height :", "New Width :", "Interpolation method:", "  OK  ", "Cancel"],
					saveChangedImage: ["You have changed the image, do you want to keep the change(s)?", "  Yes  ", "  No  "],
					selectSource: ["Select Source:", "Select", "Cancel", "There is no source available!"]
				}
			}
		}
	}
})(Dynamsoft);
var OnWebTwainNotFoundOnWindowsCallback = OnWebTwainNotFoundOnWindowsCallback || false,
	OnWebTwainNotFoundOnMacCallback = OnWebTwainNotFoundOnMacCallback || false,
	OnWebTwainNotFoundOnLinuxCallback = OnWebTwainNotFoundOnLinuxCallback || false,
	OnWebTwainOldPluginNotAllowedCallback = OnWebTwainOldPluginNotAllowedCallback || false,
	OnWebTwainNeedUpgradeCallback = OnWebTwainNeedUpgradeCallback || false,
	OnWebTwainPreExecuteCallback = OnWebTwainPreExecuteCallback || false,
	OnWebTwainPostExecuteCallback = OnWebTwainPostExecuteCallback || false,
	OnWebTwainShowUpdatingDialog = OnWebTwainShowUpdatingDialog || false,
	OnWebTwainCloseUpdatingDialog = OnWebTwainCloseUpdatingDialog || false,
	OnRemoteWebTwainNotFoundCallback = OnRemoteWebTwainNotFoundCallback || false,
	OnRemoteWebTwainNeedUpgradeCallback = OnRemoteWebTwainNeedUpgradeCallback || false,
	OnWebTWAINDllDownloadSuccessful = OnWebTWAINDllDownloadSuccessful || false,
	OnWebTWAINDllDownloadFailure = OnWebTWAINDllDownloadFailure || false,
	OnWebTWAINModuleDownloadManually = OnWebTWAINModuleDownloadManually || false,
	Dynamsoft_ChangeConfig = Dynamsoft_ChangeConfig || false,
	Dynamsoft_OnLoad = Dynamsoft_OnLoad || false,
	Dynamsoft_OnNotReady = Dynamsoft_OnNotReady || false,
	Dynamsoft_OnReady = Dynamsoft_OnReady || false;
if (!Dynamsoft.Lib) {
	Dynamsoft.Lib = {}
}(function(a, b) {
	b.mix(a, b)
})(Dynamsoft.Lib, dynamsoft.lib);
(function(b) {
	var a = {},
		c = {
			encodeChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
			decodeChars: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1]
		};
	a.base64 = {
		UTF16ToUTF8: function(k) {
			var h = [],
				e = k.length,
				f, d;
			for (var g = 0; g < e; g++) {
				var j = k.charCodeAt(g);
				if (j > 0 && j <= 127) {
					h.push(k.charAt(g))
				} else {
					if (j >= 128 && j <= 2047) {
						f = 192 | ((j >> 6) & 31);
						d = 128 | (j & 63);
						h.push(String.fromCharCode(f), String.fromCharCode(d))
					} else {
						if (j >= 2048 && j <= 65535) {
							f = 224 | ((j >> 12) & 15);
							d = 128 | ((j >> 6) & 63);
							var l = 128 | (j & 63);
							h.push(String.fromCharCode(f), String.fromCharCode(d), String.fromCharCode(l))
						} else {
							if (j >= 65536 && j <= 2097151) {} else {
								if (j >= 2097152 && j <= 67108863) {} else {}
							}
						}
					}
				}
			}
			return h.join("")
		},
		UTF8ToUTF16: function(j) {
			var h = [],
				g = j.length,
				f, m, l, d, n, k, e;
			for (f = 0; f < g; f++) {
				d = j.charCodeAt(f);
				if (((d >> 7) & 255) == 0) {
					h.push(j.charAt(f))
				} else {
					if (((d >> 5) & 255) == 6) {
						n = j.charCodeAt(++f);
						m = (d & 31) << 6;
						l = n & 63;
						e = m | l;
						h.push(String.fromCharCode(e))
					} else {
						if (((d >> 4) & 255) == 14) {
							n = j.charCodeAt(++f);
							k = j.charCodeAt(++f);
							m = (d << 4) | ((n >> 2) & 15);
							l = ((n & 3) << 6) | (k & 63);
							e = ((m & 255) << 8) | l;
							h.push(String.fromCharCode(e))
						} else {
							if (((d >> 3) & 255) == 30) {} else {
								if (((d >> 2) & 255) == 62) {} else {}
							}
						}
					}
				}
			}
			return h.join("")
		},
		encode: function(l) {
			var k = this.UTF16ToUTF8(l),
				f = [],
				h = 0,
				d = k.length,
				j, g, e;
			while (h < d) {
				j = k.charCodeAt(h++) & 255;
				if (h == d) {
					f.push(c.encodeChars.charAt(j >> 2));
					f.push(c.encodeChars.charAt((j & 3) << 4));
					f.push("==");
					break
				}
				g = k.charCodeAt(h++);
				if (h == d) {
					f.push(c.encodeChars.charAt(j >> 2));
					f.push(c.encodeChars.charAt(((j & 3) << 4) | ((g & 240) >> 4)));
					f.push(c.encodeChars.charAt((g & 15) << 2));
					f.push("=");
					break
				}
				e = k.charCodeAt(h++);
				f.push(c.encodeChars.charAt(j >> 2));
				f.push(c.encodeChars.charAt(((j & 3) << 4) | ((g & 240) >> 4)));
				f.push(c.encodeChars.charAt(((g & 15) << 2) | ((e & 192) >> 6)));
				f.push(c.encodeChars.charAt(e & 63))
			}
			return f.join("")
		},
		encodeArray: function(k) {
			var f = [],
				h = 0,
				d = k.length,
				j, g, e;
			while (h < d) {
				j = k[h++] & 255;
				if (h == d) {
					f.push(c.encodeChars.charAt(j >> 2));
					f.push(c.encodeChars.charAt((j & 3) << 4));
					f.push("==");
					break
				}
				g = k[h++] & 255;
				if (h == d) {
					f.push(c.encodeChars.charAt(j >> 2));
					f.push(c.encodeChars.charAt(((j & 3) << 4) | ((g & 240) >> 4)));
					f.push(c.encodeChars.charAt((g & 15) << 2));
					f.push("=");
					break
				}
				e = k[h++] & 255;
				f.push(c.encodeChars.charAt(j >> 2));
				f.push(c.encodeChars.charAt(((j & 3) << 4) | ((g & 240) >> 4)));
				f.push(c.encodeChars.charAt(((g & 15) << 2) | ((e & 192) >> 6)));
				f.push(c.encodeChars.charAt(e & 63))
			}
			return f.join("")
		},
		decode: function(m) {
			var k = this,
				g = [],
				j = 0,
				l = m.length,
				h, f, e, d;
			while (j < l) {
				do {
					h = c.decodeChars[m.charCodeAt(j++) & 255]
				} while (j < l && h == -1);
				if (h == -1) {
					break
				}
				do {
					f = c.decodeChars[m.charCodeAt(j++) & 255]
				} while (j < l && f == -1);
				if (f == -1) {
					break
				}
				g.push(String.fromCharCode((h << 2) | ((f & 48) >> 4)));
				do {
					e = m.charCodeAt(j++) & 255;
					if (e == 61) {
						return k.UTF8ToUTF16(g.join(""))
					}
					e = c.decodeChars[e]
				} while (j < l && e == -1);
				if (e == -1) {
					break
				}
				g.push(String.fromCharCode(((f & 15) << 4) | ((e & 60) >> 2)));
				do {
					d = m.charCodeAt(j++) & 255;
					if (d == 61) {
						return k.UTF8ToUTF16(g.join(""))
					}
					d = c.decodeChars[d]
				} while (j < l && d == -1);
				if (d == -1) {
					break
				}
				g.push(String.fromCharCode(((e & 3) << 6) | d))
			}
			return k.UTF8ToUTF16(g.join(""))
		}
	};
	a.utf8 = {
		fromUTF16: function(g) {
			var e = [],
				f = 0,
				d = g.length,
				h;
			while (f < d) {
				h = g.charCodeAt(f);
				if ((h >= 1) && (h <= 127)) {
					e.push(g.charAt(f))
				} else {
					if (h > 2047) {
						e.push(String.fromCharCode(224 | ((h >> 12) & 15)));
						e.push(String.fromCharCode(128 | ((h >> 6) & 63)));
						e.push(String.fromCharCode(128 | ((h >> 0) & 63)))
					} else {
						e.push(String.fromCharCode(192 | ((h >> 6) & 31)));
						e.push(String.fromCharCode(128 | ((h >> 0) & 63)))
					}
				}
				f++
			}
			return e.join("")
		},
		toUTF16: function(j) {
			var e = [],
				g = 0,
				d = j.length,
				k, h, f;
			while (g < d) {
				k = j.charCodeAt(g++);
				switch (k >> 4) {
					case 0:
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
						e.push(j.charAt(g - 1));
						break;
					case 12:
					case 13:
						h = j.charCodeAt(g++);
						e.push(String.fromCharCode(((k & 31) << 6) | (h & 63)));
						break;
					case 14:
						h = j.charCodeAt(g++);
						f = j.charCodeAt(g++);
						e.push(String.fromCharCode(((k & 15) << 12) | ((h & 63) << 6) | ((f & 63) << 0)));
						break
				}
			}
			return e.join("")
		}
	};
	b.mix(b, a)
})(Dynamsoft.Lib);
(function(b) {
	var c = {},
		a = dynamsoft.dcp;
	b.mix(c, Dynamsoft.DWT.defaultEnv);
	b.mix(c, Dynamsoft.WebTwainEnv);
	c.RegisterEvent = function(d, e) {
		if ((d === "OnWebTwainReady" || !Dynamsoft.WebTwainEnv.UseDefaultInstallUI) && b.isFunction(e)) {
			Dynamsoft.WebTwainEnv[d] = e
		} else {
			if ((d === "OnWebTwainInitMessage") && b.isFunction(e)) {
				Dynamsoft.WebTwainEnv[d] = e
			}
		}
		return true
	};
	Dynamsoft.WebTwainEnv = c;
	a.onReadys.push(function() {
		a.ifCheck64bitServiceFirst = Dynamsoft.WebTwainEnv.IfCheck64bitServiceFirst
	})
})(Dynamsoft.Lib);
(function(o, f) {
	var i = !0,
		t = !1,
		k = f.lib,
		b = f.navInfo,
		y = navigator.userAgent.toLowerCase(),
		x = document.location.protocol,
		c = location.hostname,
		e = location.pathname,
		r = b.bSSL,
		u = b.bMac,
		B = b.bLinux,
		w = b.bWin,
		l = b.isX64,
		m = b.bSafari,
		n = b.bFirefox,
		p = b.bEdge,
		s = b.bChrome,
		v = b.bIE,
		A = b.bFileSystem,
		z = parseFloat(b.strBrowserVersion),
		h = t,
		g = t,
		q = t,
		d = 0,
		a, j;
	if (s || n) {
		if (z >= 27) {
			h = i
		} else {
			g = i
		}
	} else {
		if (p) {
			h = i
		} else {
			if (v) {
				if (z === "" || z > 8) {
					if (z >= 10 && Dynamsoft.WebTwainEnv.IfUseActiveXForIE10Plus == false) {
						h = i
					} else {
						g = i
					}
				} else {
					q = i
				}
			} else {
				if (m) {
					if (z >= 7) {
						h = i
					} else {
						g = i
					}
				} else {
					g = i
				}
			}
		}
	}
	if (c === "") {
		if (w && e.lastIndexOf("\\") > 1) {
			e = e.substring(1, e.lastIndexOf("\\")).replace(/%20/g, " ")
		} else {
			d = 1;
			e = e.substring(1, e.lastIndexOf("/")).replace(/%20/g, " ")
		}
	} else {
		d = 1;
		e = e.substring(0, e.lastIndexOf("/"))
	}
	a = {
		product: {
			name: "Dynamic Web TWAIN",
			bChromeEdition: h,
			bPluginEdition: g,
			bActiveXEdition: q,
			ip: dynamsoft.dcp.ip,
			wsProtocol: "dwt_command",
			_iImageCaptureDriverType: 3,
			_iBrokerProcessType: 1,
			getChromeEditionPath: dynamsoft.dcp.getDSPath,
			getPKGPath: function() {
				var C = "/dist/mac/DynamicWebTWAINMacEdition.pkg";
				return Dynamsoft.WebTwainEnv.ResourcesPath + C
			},
			getMSIPath: function() {
				var C = "/dist/win/DynamicWebTWAINPlugIn.msi";
				return Dynamsoft.WebTwainEnv.ResourcesPath + C
			},
			getActiveXCABx86Path: function() {
				var C = "/dist/win/ActiveX/DynamicWebTWAIN.cab";
				return Dynamsoft.WebTwainEnv.ResourcesPath + C
			},
			getActiveXCABx64Path: function() {
				var C = "/dist/win/ActiveX/DynamicWebTWAINx64.cab";
				return Dynamsoft.WebTwainEnv.ResourcesPath + C
			},
			strMIMEType: "Application/DynamicWebTwain-Plugin",
			strProClassID: "5220cb21-c88d-11cf-b347-00aa00a28331",
			strFullClassID: "E7DA7F8D-27AB-4EE9-8FC0-3FEC9ECFE758",
			strTrialClassID: "FFC6F181-A5CF-4ec4-A441-093D7134FBF2",
			scripts: {},
			getServerVersionInfo: function(D) {
				var C = Dynamsoft.WebTwainEnv.ServerVersionInfo;
				if (o.env.bWin || o.env.bWin64) {} else {
					if (o.env.bMac) {
						C = Dynamsoft.WebTwainEnv.ServerMacVersionInfo
					} else {
						if (o.env.bLinux) {
							C = Dynamsoft.WebTwainEnv.ServerLinuxVersionInfo
						} else {}
					}
				}
				if (D) {
					return C
				}
				return o.replaceAll(C, ",", "")
			}
		},
		env: {
			bIE: v,
			bChrome: s,
			bFirefox: n,
			bSafari: m,
			bEdge: p,
			bWin: w,
			bWin64: (y.indexOf("win64") != -1 || y.indexOf("x64") != -1),
			bMac: u,
			bLinux: B,
			isX64: l,
			iPluginLength: (v || p) ? 0 : navigator.plugins.length,
			strChromeVersion: s ? z : "",
			strFirefoxVersion: n ? z : "",
			strIEVersion: (v || p) ? z : "",
			bFileSystem: A,
			basePath: e,
			pathType: d
		},
		config: {
			debug: t,
			devMode: t,
			usingMainMode: t,
			bDiscardBlankImage: t,
			msg: [],
			msgPrefix: '<span style="color:#cE5E04"><b>',
			msgSuffix: "</b></span><br />"
		},
		detect: {
			ssl: r,
			dcpStatus: 0,
			dcpCallbackType: 0,
			arySTwains: [],
			arySTwainsByIP: [],
			aryReconnectSTwains: [],
			bFirst: i,
			bOK: t,
			__dialog: t,
			scriptLoaded: t,
			cssLoaded: t,
			viewerScriptLoaded: t,
			bNoControlEvent: t,
			bNeedUpgradeEvent: t,
			StartWSTimeoutId: t,
			StartWSByIPTimeoutId: t,
			bPromptJSOrServerOutdated: t,
			detectType: r ? 1 : (x === "http:" || c === "") ? 0 : -1,
			tryTimes: 0,
			ports: [{
				port: 18623,
				ssl: i
			}, {
				port: 18996,
				ssl: i
			}, {
				port: 18622,
				ssl: t
			}, {
				port: 18995,
				ssl: t
			}],
			win64Ports: [{
				port: 18621,
				ssl: i
			}, {
				port: 18620,
				ssl: t
			}],
			cUrlIndex: 0,
			urls: [],
			onNoControl: t,
			needUpgrade: t,
			onNotAllowedForChrome: t,
			OnDetectNext: t,
			OnCreatWS: t
		},
		page: {
			bUnload: t,
			OnUnload: t
		},
		tmp: {
			IfAllowLocalCache: i,
			EmptyFunction: function() {}
		}
	};
	a.appendMessage = function(C) {
		if (typeof(C) === "string") {
			a.config.msg.push(C)
		} else {
			if (Object.prototype.toString.call(C) === "[object Array]") {
				k.each(C, function(D) {
					a.appendMessage(D)
				})
			}
		}
	};
	a.appendRichMessage = function(C) {
		a.appendMessage([a.config.msgPrefix, C, a.config.msgSuffix])
	};
	a.clearMessage = function() {
		if (v && z == 8) {
			a.config.msg.splice(0, a.config.msg.length)
		} else {
			a.config.msg.splice(0)
		}
		return i
	};
	a.getRealPath = function(C) {
		if (C === undefined) {
			return ""
		}
		if (a.env.pathType == 1) {
			return a.env.basePath + C
		}
		return a.env.basePath + C.replace(new RegExp("/", "g"), "\\\\")
	};
	a.getHex = function(D) {
		var C;
		C = Number(D).toString(16).toUpperCase();
		if (C.length == 1) {
			C = ["0", C].join("")
		}
		return C
	};
	a.getColor = function(E) {
		var D, C, G, F;
		F = E >> 16;
		G = (E & 65280) >> 8;
		C = E & 255;
		D = ["#", a.getHex(F), a.getHex(G), a.getHex(C)].join("");
		return D
	};
	a.RGB2BGR = function(D) {
		var G, C, F, E;
		E = D >> 16;
		F = (D & 65280);
		C = D & 255;
		G = (C << 16) | F | E;
		return G
	};
	a.BGR2RGB = a.RGB2BGR;
	a.isLocalIP = function(C) {
		return C && (C === "127.0.0.1" || C === "localhost" || C === "local.dynamsoft.com")
	};
	o.mix(o, a);
	o.Addon_Events = [];
	o.Addon_Sendback_Events = []
})(Dynamsoft.Lib, dynamsoft);
(function(d) {
	var c = !0,
		f = !1,
		a = !1,
		b = {
			ActiveX: 0,
			Plugin: 1,
			HTML5: 2,
			WinMacLinux: 3,
			Barcode1D: 4,
			Barcode2D: 5,
			BarcodeWriter: 6,
			OCR: 7,
			Webcam: 8,
			PDFRasterizer: 9,
			OCRPro: 10,
			QR: 50,
			PDF417: 51,
			DataMatrix: 52
		},
		e = {
			WinMacLinux: 1,
			Barcode1D: 2,
			Barcode2D: 3,
			OCR: 4,
			Webcam: 6,
			PDFRasterizer: 9
		};
	d.License = {
		checkProductKey: function(H, z, E, r) {
			var l, m = Dynamsoft.WebTwainEnv,
				v = m.Trial;
			l = H.__licenseInfo;
			if (!m.IsLicensePromptFriendly && m.ProductKey != "" && m.ProductKey != "******") {
				return c
			}
			if (m.ProductKey == "" || m.ProductKey == "******" || !l || !d.isArray(l.Detail) || (l.Detail.length == 0)) {
				d.Errors.LicenseEmptyOrInvalid(H);
				if (v) {
					d.License.ShowInvalidLicense();
					return f
				}
				if (!r) {
					d.License.promptLicenseErr(H)
				}
				return f
			}
			var F = 0,
				g = 0,
				D = [],
				j = f,
				p = f,
				t = f,
				I = f,
				w = f,
				C, y;
			if (!this.isBindDomainOK(l.Domain)) {
				d.Errors.LicenseBadDomain(H);
				if (!r) {
					d.License.promptLicenseErr(H)
				}
				return f
			}
			for (C = 0; C < l.Detail.length; C++) {
				var x = l.Detail[C],
					q = c,
					k;
				k = this.getEnumLicenseType(x.EnumLicenseType);
				if (k.bCore) {
					var G = this.getLicenseType(x.LicenseType);
					if (d.product.bChromeEdition) {
						if (G.ActiveX && !G.Html5) {
							continue
						}
					} else {
						if (!G.ActiveX && G.Html5) {
							continue
						}
					}
				}
				if (this.isAllowLicenseType(k, z)) {
					if (v && x.Trial == "TRUE" || !v && x.Trial == "FALSE") {
						y = x.ExpireDate.replace(/-/g, "/");
						if (!this.isExpiredOrFuture(y, v)) {
							if (k.Core && parseInt(x.Version) >= 13 || !k.Core) {
								if (this.isBrowserOK(x.Browser) || E) {
									if (this.isOSOK(x.OS)) {
										F++;
										q = f
									} else {
										t = c
									}
								} else {
									I = c
								}
							} else {
								w = c
							}
						} else {
							if (v) {
								var B = y.length;
								if (B > 2 && y[B - 2] == "/" && y[B - 1] == "0") {
									y = "2000/10/10"
								}
							}
							D.push(y)
						}
					} else {
						if (v) {
							p = c
						} else {
							j = c
						}
					}
					if (q) {
						g++
					}
				}
			}
			if (F > 0) {
				return c
			}
			if (g == 0) {
				this.setNoAllowedLicenseTypeError(H, z);
				if (!r) {
					d.License.promptLicenseErr(H)
				}
				return f
			}
			if (j) {
				d.Errors.LicenseTrialButServiceFull(H);
				if (!r) {
					d.License.promptLicenseErr(H)
				}
				return f
			}
			if (p) {
				d.Errors.LicenseFullButServiceTrial(H);
				if (!r) {
					d.License.promptLicenseErr(H)
				}
				return f
			}
			if (D.length > 0) {
				var s = 0,
					n = 100000000000000000000,
					A = "",
					h = (new Date()).getTime(),
					u;
				y = "";
				for (C = 0; C < D.length; C++) {
					u = this.parseDateFromString(D[C]);
					if (u.getTime() < h && u.getTime() > s) {
						s = u.getTime();
						y = D[C]
					} else {
						if (u.getTime() > h && u.getTime() < n) {
							n = u.getTime();
							A = D[C]
						}
					}
				}
				if (y != "") {
					u = this.parseDateFromString(y);
					y = this.getLicenseDateString(u);
					d.Errors.LicenseExpired(H, y);
					if (v) {
						r = true;
						d.License.ShowInvalidLicense(y)
					}
				} else {
					if (A != "") {
						u = this.parseDateFromString(A);
						A = this.getLicenseDateString(u);
						d.Errors.LicenseIsFuture(H, A)
					} else {
						d.Errors.LicenseExpired(H, "");
						if (v) {
							r = true;
							d.License.ShowInvalidLicense()
						}
					}
				}
				if (!r) {
					d.License.promptLicenseErr(H)
				}
				return f
			}
			if (w) {
				d.Errors.LicenseLower(H);
				if (!r) {
					d.License.promptLicenseErr(H)
				}
				return f
			}
			if (I) {
				if (d.env.bEdge) {
					d.Errors.LicenseNoEdge(H)
				} else {
					if (d.env.bChrome) {
						d.Errors.LicenseNoChrome(H)
					} else {
						if (d.env.bFirefox) {
							d.Errors.LicenseNoFirefox(H)
						} else {
							if (d.env.bIE) {
								d.Errors.LicenseNoIE(H)
							} else {
								d.Errors.LicenseNotSupportBorwser(H)
							}
						}
					}
				}
				if (!r) {
					d.License.promptLicenseErr(H)
				}
				return f
			}
			if (t) {
				if (d.env.bWin || d.env.bWin64) {
					d.Errors.LicenseNotSupportWindows(H)
				} else {
					if (d.env.bMac) {
						d.Errors.LicenseNotSupportMAC(H)
					} else {
						if (d.env.bLinux) {
							d.Errors.LicenseNotSupportLinux(H)
						} else {
							d.Errors.LicenseNotSupportOS(H)
						}
					}
				}
				if (!r) {
					d.License.promptLicenseErr(H)
				}
				return f
			}
			d.Errors.LicenseEmptyOrInvalid(H);
			if (!r) {
				this.promptLicenseErr(H)
			}
			return f
		},
		promptLicenseErr: function(h) {
			if (h.ErrorCode < 0) {
				var g = ['<div class="dynamsoft-dwt-dlg-tips">', h.ErrorString, "</div>", '<div style="padding-top:35px"></div>'];
				Dynamsoft.WebTwainEnv.ShowDialog(365, 0, g.join(""))
			}
		},
		ShowInvalidLicense: function(i) {
			if (d.detect.needUpgrade) {
				return
			}
			var g = [],
				h = "is not valid";
			if (i && i != "") {
				if (i.indexOf("on") == -1) {
					h = "has expired on " + i
				} else {
					h = "has expired " + i
				}
			}
			g.push('<div style="padding:30px;border:1px solid #CCCCCC;background:#FFFFFF">');
			g.push("You are seeing this dialog because the <strong>ProductKey</strong> ");
			g.push(h);
			g.push(". Please follow the steps below <br />");
			g.push("<ol><li>For the trial version, request a <strong>Dynamic Web TWAIN</strong> trial license <strong><a class='dynamsoft-major-color' href='https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx' target='_blank'>here</a></strong></li>");
			g.push("<li>Refer to this <strong><a class='dynamsoft-major-color' href='https://developer.dynamsoft.com/?page_id=18633' target='_blank'>article</a></strong> to update the ProductKey</li>");
			g.push("<li>Do a <strong>hard refresh</strong> or clear cache in your browser to make sure the new ProductKey is used</li>");
			g.push("<li>If the issue persists, please contact us at <a class='dynamsoft-major-color' href='mailto:support@dynamsoft.com'>support@dynamsoft.com</a></li>");
			g.push("</div>");
			d.ShowLicenseDialog(g.join(""), {
				width: 680,
				height: 0,
				bClose: false,
				seconds: 100
			})
		},
		isBindDomainOK: function(n) {
			if (d.isUndefined(n) || n == null || n == "" || n == "*" || n == "*.*") {
				return c
			}
			var q = location.hostname,
				g = f;
			if (q == "") {
				return c
			}
			var r = q.toLowerCase().split("."),
				h = r.length,
				l = n.toLowerCase().split(";");
			for (var m = 0; m < l.length; m++) {
				var k = l[m];
				if (k == "*.*") {
					g = c;
					break
				}
				var p = k.split("."),
					s = p.length;
				if (s > 0 && s - 1 <= h) {
					var o = c;
					for (var j = s - 1; j > 0; j--) {
						if (j + h - s >= 0) {
							if (r[j + h - s] != p[j]) {
								o = f;
								break
							}
						} else {
							if (p[j] != "*") {
								o = f;
								break
							}
						}
					}
					if (o) {
						if (p[0] == "*" || h >= s && r[h - s] == p[0]) {
							g = c;
							break
						}
					}
				}
			}
			return g
		},
		isExpiredOrFuture: function(h, k) {
			if (h == "") {
				return f
			}
			if (!k) {
				var g = h.length;
				if (g > 2 && h[g - 2] == "/" && h[g - 1] == "0") {
					return f
				}
			}
			var j = this.parseDateFromString(h),
				i = (new Date()).getTime(),
				l = i + (60 * 24 * 3600000);
			if (j.getTime() < i) {
				return c
			} else {
				if (k && (j.getTime() > l)) {
					return c
				}
			}
			return f
		},
		isOSOK: function(g) {
			if (g == "" || g == "0") {
				return c
			}
			g = g.toLowerCase();
			if (g.indexOf("windows") > -1 && (d.env.bWin || d.env.bWin64)) {
				return c
			} else {
				if (g.indexOf("mac") > -1 && d.env.bMac) {
					return c
				} else {
					if (g.indexOf("linux") > -1 && d.env.bLinux) {
						return c
					}
				}
			}
			return f
		},
		isBrowserOK: function(i) {
			if (d.isString(i)) {
				if (i == "" || i == "0") {
					return c
				}
				i = i.toLowerCase();
				var g = i.split(";"),
					h = f;
				d.each(g, function(j) {
					if (d.trim(j) == "chrome" && d.env.bChrome) {
						h = c
					} else {
						if (d.trim(j) == "ie" && (d.env.bIE || d.env.bEdge)) {
							h = c
						} else {
							if (d.trim(j) == "firefox" && d.env.bFirefox) {
								h = c
							}
						}
					}
				});
				return h
			}
			return f
		},
		parseDateFromString: function(h) {
			var i, g = h;
			g = g.replace(/-/g, "/");
			i = Date.parse(g);
			if (isNaN(i)) {
				i = 0
			}
			return new Date(i)
		},
		getEnumLicenseType: function(k) {
			var h = f,
				o = f,
				m = f,
				j = f,
				p = f,
				n = f,
				l = f,
				i = f,
				g = f;
			if (d.isString(k)) {
				d.each(k.split(";"), function(r) {
					var q = r * 1;
					if (q == b.HTML5 || q == b.WinMacLinux || q == b.ActiveX || q == b.Plugin) {
						h = c
					} else {
						if (q == b.Barcode1D) {
							o = c
						} else {
							if (q == b.QR) {
								m = c
							} else {
								if (q == b.PDF417) {
									j = c
								} else {
									if (q == b.DataMatrix) {
										p = c
									} else {
										if (q == b.OCR) {
											n = c
										} else {
											if (q == b.Webcam) {
												l = c
											} else {
												if (q == b.PDFRasterizer) {
													i = c
												} else {
													if (q == b.OCRPro) {
														g = c
													}
												}
											}
										}
									}
								}
							}
						}
					}
				})
			}
			return {
				Core: h,
				PDFRasterizer: i,
				Webcam: l,
				barcode1D: o,
				QR: m,
				PDF417: j,
				DataMatrix: p,
				OCR: n,
				OCRPro: g
			}
		},
		getLicenseType: function(k) {
			var l = f,
				p = f,
				i = f,
				n = f,
				j = f,
				q = f,
				o = f,
				m = f,
				h = f,
				g = f;
			if (k && k != "") {
				k = k.toLowerCase();
				if (k == "html5;activex;oldie") {
					i = c
				} else {
					if (k == "html5" || k == "win=(aph) or mac=(ph) or linux(h)") {
						l = c
					} else {
						if (k == "html5;activex") {
							l = c;
							i = c
						} else {
							if (k == "1d barcode reader") {
								p = c
							} else {
								if (k == "2d barcode reader(qrcode)") {
									n = c
								} else {
									if (k == "2d barcode reader(pdf417)") {
										j = c
									} else {
										if (k == "2d barcode reader(data matrix)") {
											q = c
										} else {
											if (k == "ocr") {
												o = c
											} else {
												if (k == "webcam") {
													m = c
												} else {
													if (k == "pdf rasterizer") {
														h = c
													} else {
														if (k == "proocr") {
															g = c
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
			return {
				Html5: l,
				PDFRasterizer: h,
				Webcam: m,
				barcode1D: p,
				QR: n,
				PDF417: j,
				DataMatrix: q,
				OCR: o,
				OCRPro: g,
				ActiveX: i
			}
		},
		isAllowLicenseType: function(g, h) {
			if (h.Core) {
				return g.Core
			} else {
				if (h.PDFRasterizer) {
					return g.PDFRasterizer
				} else {
					if (h.Webcam) {
						return g.Webcam
					} else {
						if (h.barcode1D) {
							return g.barcode1D
						} else {
							if (h.QR) {
								return g.QR
							} else {
								if (h.PDF417) {
									return g.PDF417
								} else {
									if (h.DataMatrix) {
										return g.DataMatrix
									} else {
										if (h.OCR) {
											return g.OCR
										} else {
											if (h.OCRPro) {
												return g.OCRPro
											}
										}
									}
								}
							}
						}
					}
				}
			}
			return g.Core
		},
		setNoAllowedLicenseTypeError: function(h, g) {
			if (g.Core) {
				d.Errors.LicenseNoCore(h)
			} else {
				if (g.PDFRasterizer) {
					d.Errors.LicenseNoPDF(h)
				} else {
					if (g.Webcam) {
						d.Errors.LicenseNoWebcam(h)
					} else {
						if (g.barcode1D) {
							d.Errors.LicenseNo1D(h)
						} else {
							if (g.QR) {
								d.Errors.LicenseNo2DQR(h)
							} else {
								if (g.PDF417) {
									d.Errors.LicenseNo2DPDF417(h)
								} else {
									if (g.DataMatrix) {
										d.Errors.LicenseNo2DDataMatrix(h)
									} else {
										if (g.OCR) {
											d.Errors.LicenseNoOCR(h)
										} else {
											if (g.OCRPro) {
												d.Errors.LicenseNoOCRPro(h)
											} else {
												d.Errors.LicenseEmptyOrInvalid(h)
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		getLicenseDateString: function(g) {
			var i = g.getFullYear(),
				h, k, j;
			h = g.getMonth() + 1;
			if (h >= 10) {
				k = "" + h
			} else {
				k = "0" + h
			}
			if (g.getDate() >= 10) {
				j = "" + g.getDate()
			} else {
				j = "0" + g.getDate()
			}
			return [k, "/", j, "/", i].join("")
		},
		checkPDFProductKeyWhenNeeds: function(k, l) {
			if (l == g) {
				var i = 1,
					h = 2,
					g = 4,
					j;
				if (d.product.bChromeEdition) {
					if (k.__addon && k.__addon.PDF) {
						j = k.__addon.PDF.GetConvertMode()
					}
				} else {
					if (k.Addon && k.Addon.PDF) {
						j = k.Addon.PDF.GetConvertMode()
					}
				}
				if (j == i || j == h) {
					return this.checkProductKey(k, {
						PDFRasterizer: c
					})
				}
			}
			return c
		}
	}
})(Dynamsoft.Lib);
(function(b) {
	var a = !0,
		c = !1,
		d = {
			Errors: {
				FilePathSyntaxIncorrect: function(e) {
					e._errorCode = -3123;
					e._errorString = "The filename, directory name, or volume label syntax is incorrect."
				}
			},
			checkFilePath: function(f, e) {
				if (!b.isString(e) || e.length == 0) {
					b.Errors.InvalidFile(f);
					return c
				}
				if (b.startsWith(e, "http://") || b.startsWith(e, "https://") || b.startsWith(e, "ftp://")) {
					b.File.Errors.FilePathSyntaxIncorrect(f);
					return c
				}
				return a
			}
		};
	d.checkFolder = d.checkFilePath;
	b.File = d
})(Dynamsoft.Lib, dynamsoft);
(function(b) {
	var a = {
		getHexColor: function(e) {
			var f = this,
				c = e.length,
				d = [];
			if (c === 7) {
				d.push(parseInt("0x" + e.slice(1, 3)));
				d.push(parseInt("0x" + e.slice(3, 5)));
				d.push(parseInt("0x" + e.slice(5, 7)));
				return d
			}
			return [128, 128, 128]
		},
		drawBoxBorder: function(n, c, h, m, j, l, r) {
			var q = this,
				g, f, s, k, v, e, u, t, o, d, w;
			t = Math.floor(c);
			o = Math.floor(h);
			d = Math.floor(m);
			w = Math.floor(j);
			v = n.getImageData(t, o, d, w);
			k = v.data;
			e = q.getHexColor(l);
			if (b.isUndefined(r)) {
				u = e
			} else {
				u = q.getHexColor(r)
			}
			s = 0;
			for (g = 0; g < d; g++) {
				k[s] = e[0];
				k[s + 1] = e[1];
				k[s + 2] = e[2];
				s += 4
			}
			g = 0;
			for (f = 0; f < w; f++) {
				s = (f * d + g) * 4;
				k[s] = e[0];
				k[s + 1] = e[1];
				k[s + 2] = e[2]
			}
			for (f = 0; f < w; f++) {
				g = d - 1;
				s = (f * d + g) * 4;
				k[s] = u[0];
				k[s + 1] = u[1];
				k[s + 2] = u[2]
			}
			s = (w - 1) * d * 4;
			for (g = 0; g < d; g++) {
				k[s] = u[0];
				k[s + 1] = u[1];
				k[s + 2] = u[2];
				s += 4
			}
			n.putImageData(v, t, o)
		},
		drawImageWithHermite: function(m, O, F, E, v, t) {
			var J = m.width,
				P = m.height,
				e = Math.min(v, O.width),
				Q = Math.min(t, O.height),
				k = m.getContext("2d").getImageData(0, 0, J, P),
				q = O.getContext("2d").getImageData(F, E, e, Q),
				K = k.data,
				z = q.data,
				B = J / e,
				H = P / Q,
				f = Math.ceil(B / 2),
				r = Math.ceil(H / 2),
				N, M;
			for (M = 0; M < Q; M++) {
				for (N = 0; N < e; N++) {
					var l = 0,
						o = 0,
						s = 0,
						u = 0,
						p = (N + M * e) * 4,
						I = 0,
						L = 0,
						C = 0,
						c = (M + 0.5) * H;
					for (var n = Math.floor(M * H); n < (M + 1) * H; n++) {
						var g = Math.abs(c - (n + 0.5)) / r,
							d = (N + 0.5) * B,
							D = g * g;
						for (var A = Math.floor(N * B); A < (N + 1) * B; A++) {
							var h = Math.abs(d - (A + 0.5)) / f,
								G = Math.sqrt(D + h * h);
							if (G >= -1 && G <= 1) {
								I = 2 * G * G * G - 3 * G * G + 1;
								if (I > 0) {
									h = 4 * (A + n * J);
									u += I * K[h + 3];
									C += I;
									if (K[h + 3] < 255) {
										I = I * K[h + 3] / 250
									}
									l += I * K[h];
									o += I * K[h + 1];
									s += I * K[h + 2];
									L += I
								}
							}
						}
					}
					z[p] = l / L;
					z[p + 1] = o / L;
					z[p + 2] = s / L;
					z[p + 3] = u / C
				}
			}
			O.getContext("2d").clearRect(0, 0, O.width, O.height);
			O.getContext("2d").putImageData(q, F, E)
		}
	};
	b.mix(b, a)
})(Dynamsoft.Lib);
(function(a, b) {
	a.ready(function() {
		a.install = {
			_divInstallBody: "dwt-InstallBody",
			_divDWTNonInstallContainerID: "dwt-NonInstallContainerID",
			_divDWTemessageContainer: "",
			_dlgInstall: false
		};
		a.install._strDynamsoftWithClose = ['<div class="dynamsoft-dwt-dlg-header">', '<div class="dynamsoft-dialog-close"></div>', "</div>"].join("");
		a.install._strDynamsoftWithoutClose = ['<div style="height:40px;"></div>'].join("");
		a.install._strNonInstallDIV = ['<div style="text-align:center;" id="', a.install._divDWTNonInstallContainerID, '"></div>'].join("")
	});
	b.CloseDialog = function() {
		var e = a.install._dlgInstall;
		if (e) {
			var d = a.all(".dynamsoft-dialog-close");
			a.each(d, function(f, g) {
				a.removeEventListener(f, "click", DCP_DWT_OnClickCloseInstall)
			});
			if (e.open) {
				e.close()
			}
			if (a.install._dlgFromImageEditor) {
				var c = a.one(".D_ImageUIEditor")[0].parentNode;
				c.removeChild(e)
			} else {
				document.body.removeChild(e)
			}
			a.install._dlgInstall = false
		}
	};
	b.ShowDialog = function(h, k, l, c, i) {
		var f = a.install,
			o;
		if (!a.get("dynamsoft_waiting")) {
			var d = document.createElement("div");
			d.className = "dynamsoft-dialog-wrap";
			d.style.width = "100%";
			o = ['<div id="dynamsoft_waiting" style="border:0;position:relative;z-index:9999;background:transparent;margin:0 auto">', '<iframe frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="javascript:\'\'"', ' style="width:100%;height:100%;border:0;background:transparent;position:absolute;left:0;top:0;z-index:-1">', "</iframe>", '<div class="dynamsoft-dialog dynamsoft-dialog2" style="border:1px solid #CCCCCC;">', '<div id="', f._divInstallBody, '"></div></div></div>'];
			d.innerHTML = o.join("");
			if (c) {
				var e = a.one(".D_ImageUIEditor")[0].parentNode;
				e.appendChild(d)
			} else {
				document.body.appendChild(d)
			}
			f._dlgFromImageEditor = c;
			f._dlgInstall = d;
			a.dialog.setup(f._dlgInstall)
		}
		if (l === false) {
			return
		}
		var j = Dynamsoft.Lib.one(".dynamsoft-dialog");
		if (j && j.getEL()) {
			j[0].style.width = h + "px";
			if (k && k > 0) {
				j[0].style.height = k + "px"
			}
		}
		if (c) {
			a.get(f._divInstallBody).innerHTML = ['<div class="dynamsoft-dwt-dialog-body">', l, "</div>"].join("")
		} else {
			var m = (i ? f._strDynamsoftWithoutClose : f._strDynamsoftWithClose);
			a.get(f._divInstallBody).innerHTML = ['<div class="dynamsoft-dwt-dialog-body">', m, l, "</div>"].join("")
		}
		var n = a.get("dynamsoft_waiting");
		n.style.width = h;
		if (f._dlgInstall.open) {
			f._dlgInstall.close()
		}
		f._dlgInstall.showModal();
		var g = a.all(".dynamsoft-dialog-close");
		a.each(g, function(p, q) {
			a.addEventListener(p, "click", DCP_DWT_OnClickCloseInstall)
		})
	};
	b.OnWebTwainPreExecute = function() {
		Dynamsoft.Lib.detect.OnWebTwainPreExecute(Dynamsoft.WebTwainEnv.IfConfineMaskWithinTheViewer)
	};
	b.OnWebTwainPostExecute = function() {
		Dynamsoft.Lib.detect.OnWebTwainPostExecute()
	}
})(Dynamsoft.Lib, Dynamsoft.WebTwainEnv);

function DCP_DWT_OnClickCloseInstall(a) {
	var d = Dynamsoft.Lib,
		f = d.install._dlgInstall;
	Dynamsoft.WebTwainEnv.CloseDialog();
	var c = d.get(d.install._divDWTNonInstallContainerID);
	if (c) {
		c.parentNode.removeChild(c)
	}
	if (a && d.isString(a)) {
		d.show(a)
	} else {
		var b, e;
		e = Dynamsoft.WebTwainEnv.Containers;
		if (e) {
			for (b = 0; b < e.length; b++) {
				d.show(e[b].ContainerId)
			}
		}
		e = Dynamsoft.WebTwainEnv.DynamicContainers;
		if (e) {
			for (b = 0; b < e.length; b++) {
				d.show(e[b])
			}
		}
		e = null
	}
	if (d.install._divDWTemessageContainer != "") {
		d.show(d.install._divDWTemessageContainer)
	}
}(function(b) {
	var a = b.win;
	b.detect.showMask = function() {
		if (!Dynamsoft.WebTwainEnv.ScanDirectly) {
			if (b.isFunction(a.OnWebTwainPreExecuteCallback)) {
				a.OnWebTwainPreExecuteCallback()
			} else {
				b.detect.OnWebTwainPreExecute(Dynamsoft.WebTwainEnv.IfConfineMaskWithinTheViewer)
			}
		}
	};
	b.detect.OnWebTwainPreExecute = function(f) {
		var e = f,
			c, d;
		if (Dynamsoft.WebTwainEnv.Containers.length > 0) {
			d = Dynamsoft.Lib.get(Dynamsoft.WebTwainEnv.Containers[0].ContainerId)
		}
		if (d) {
			c = d.getBoundingClientRect();
			if (d.firstChild && d.firstChild.getBoundingClientRect) {
				c = d.firstChild.getBoundingClientRect()
			}
		}
		if (c == undefined || Dynamsoft.WebTwainEnv.Containers.length > 1 || (Dynamsoft.WebTwainEnv.Containers.length == 1 && (c.width == 0 || c.height == 0))) {
			e = false
		}
		b.mask.bConfined = e;
		b.mask.container = d;
		b.showMask()
	};
	b.detect.hideMask = function() {
		if (!Dynamsoft.WebTwainEnv.ScanDirectly) {
			if (b.isFunction(a.OnWebTwainPostExecuteCallback)) {
				a.OnWebTwainPostExecuteCallback()
			} else {
				b.detect.OnWebTwainPostExecute()
			}
		}
	};
	b.detect.OnWebTwainPostExecute = b.hideMask
})(Dynamsoft.Lib);
(function(a) {
	a.ready(function() {
		a.install._dlgLicense = false
	});
	a._gb_xkz_dhk = function() {
		var c = a.install._dlgLicense;
		if (c) {
			var b = a.one(".dynamsoft-dialog-close", c);
			if (b.getEL()) {
				a.removeEventListener(b.getEL(), "click", a._gb_xkz_dhk)
			}
			if (c.open) {
				c.close()
			}
			document.body.removeChild(c);
			a.install._dlgLicense = false
		}
	};
	a._zdgb_xkz_dhk = function() {
		var c = a.install._dlgLicense;
		if (c) {
			var d = a.one(".dynamsoft-dialog-closeTimer", c);
			if (d.getEL()) {
				var b = parseInt(d.getEL().style.width);
				b -= 1;
				if (b <= 0) {
					a._gb_xkz_dhk()
				} else {
					d.getEL().style.width = b + "%";
					setTimeout(a._zdgb_xkz_dhk, 100)
				}
			}
		}
	};
	a.ShowLicenseDialog = function(j, i) {
		var f = a.install,
			r, h = "dynamsoft-dialog-license",
			l = "dlg-license-wrap",
			g, m, q, o, b, n;
		if (i) {
			g = i.width;
			m = i.height;
			q = i.seconds;
			o = i.bClose
		}
		if (!g) {
			g = 600
		}
		if (!m) {
			m = "100%"
		}
		if (!q) {
			q = 10
		}
		if (a.one("." + h).length == 0) {
			var d = document.createElement("div"),
				c = document.createElement("div"),
				e = document.createElement("iframe");
			d.className = h;
			d.style.width = "100%";
			d.style.position = "absolute";
			c.className = l;
			c.innerHTML = j;
			c.style.margin = "auto";
			c.style.backgroundColor = "white";
			c.style.zIndex = "9999";
			c.style.position = "relative";
			c.style.border = "0";
			e.frameborder = "0";
			e.marginheight = "0";
			e.marginwidth = "0";
			e.scrolling = "no";
			e.style.border = "0";
			e.style.backgroundColor = "transparent";
			e.style.position = "absolute";
			e.style.left = 0;
			e.style.top = 0;
			e.style.width = "100%";
			e.style.height = "100%";
			e.style.margin = "auto";
			e.style.zIndex = -1;
			e.src = 'javascript:""';
			c.appendChild(e);
			if (o) {
				b = document.createElement("div");
				b.className = "dynamsoft-dialog-close";
				c.insertBefore(b, c.firstChild);
				n = document.createElement("div");
				n.className = "dynamsoft-dialog-closeTimer";
				n.style.width = "100%";
				n.style.height = "2px";
				n.style.marginTop = "-2px";
				n.style.backgroundColor = "#fe8e14";
				c.insertBefore(n, c.firstChild)
			}
			d.appendChild(c);
			document.body.appendChild(d);
			f._dlgLicense = d;
			a.dialog.setup(f._dlgLicense)
		}
		var k = a.one("." + l);
		if (k && k.getEL()) {
			k[0].style.width = g + "px";
			if (a.isNumber(m) && m > 0) {
				k[0].style.height = m + "px"
			} else {
				k[0].style.height = "100%"
			}
		}
		if (f._dlgLicense.open) {
			f._dlgLicense.close()
		}
		f._dlgLicense.showModal();
		if (o) {
			b = a.one(".dynamsoft-dialog-close", f._dlgLicense);
			if (b.getEL()) {
				a.addEventListener(b.getEL(), "click", a._gb_xkz_dhk);
				setTimeout(a._zdgb_xkz_dhk, 100)
			}
		}
	}
})(Dynamsoft.Lib);
(function(b) {
	a.Orientation = {
		Horizontal: 0,
		Vertical: 1
	};
	a.Direction = {
		LeftToRight: 0,
		RightToLeft: 1,
		TopToBottom: 0,
		BottomToTop: 1
	};
	a.CreationType = {
		Replace: 0,
		AppendChild: 1
	};
	a.AnimationStyle = {
		None: 0,
		Static: 1,
		StaticFull: 2,
		Custom: 3,
		CustomFull: 4,
		Flickering1: 10,
		Flickering2: 11,
		Flickering3: 12,
		LeftToRight1: 20,
		LeftToRight2: 21,
		RightToLeft1: 22,
		RightToLeft2: 23,
		TwoWay: 24
	};

	function a(g, d) {
		var h = this,
			e = 0,
			f;
		if (b.isString(g)) {
			f = document.getElementById(g)
		} else {
			f = g
		}
		h.isLoaded = false;
		h.displayType = 0;
		h.progress = 0;
		h.progressPosition = 0;
		h.borderWidth = {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		};
		h.orientation = (d.orientation || a.Orientation.Horizontal);
		h.direction = (d.direction || a.Direction.LeftToRight);
		h.creationType = (d.creationType || a.CreationType.Replace);
		h.value = 0;
		h.initialValue = (d.value || 0);
		h.minValue = (d.minValue || 0);
		h.maxValue = (d.maxValue || 100);
		h.showLabel = (typeof d.showLabel == "undefined" ? true : d.showLabel);
		h.labelText = (d.labelText || "");
		h.width = (d.width || 300);
		h.height = (d.height || 20);
		h.borderRadius = (d.borderRadius || 10);
		if (h.orientation == a.Orientation.Horizontal && h.borderRadius > h.height / 2) {
			h.borderRadius = Math.round(h.height / 2)
		}
		if (h.orientation == a.Orientation.Vertical && h.borderRadius > h.width / 2) {
			h.borderRadius = Math.round(h.width / 2)
		}
		h.backColor = (d.backColor || "");
		h.color = (d.color || "#50a8e1");
		h.animationStyle = 0;
		h.animationInterval = (d.animationInterval || 100);
		var c = ["parent", "background", "wrapper", "left", "middle", "right", "horizontalText", "verticalText", "marker"];
		h.extraClassName = {};
		for (e = 0; e < c.length; e++) {
			if (!d.extraClassName) {
				h.extraClassName[c[e]] = ""
			} else {
				if (typeof d.extraClassName == "string") {
					h.extraClassName[c[e]] = d.extraClassName
				} else {
					h.extraClassName[c[e]] = (d.extraClassName[c[e]] || "")
				}
			}
		}
		h.onLoad = (d.onLoad || null);
		h.onValueChanged = (d.onValueChanged || null);
		h.onAnimate = (d.onAnimate || null);
		if (h.creationType == a.CreationType.Replace) {
			h.parentElement = f
		} else {
			h.parentElement = document.createElement("DIV");
			f.appendChild(h.parentElement)
		}
		h.finishLoading()
	}
	a.prototype.finishLoading = function() {
		var h = this,
			e = "",
			g;
		h.wrapperElement = null;
		h.backgroundElement = null;
		h.valueElement = null;
		h.leftElement = null;
		h.middleElement = null;
		h.rightElement = null;
		h.backgroundElement = document.createElement("DIV");
		h.backgroundElement.className = "progressbar_background" + (h.extraClassName.background ? " " : "") + h.extraClassName.background;
		h.backgroundElement.style.cssText = h.backgroundElement.style.cssText + a._createBorderRadiusCss(h.borderRadius);
		h.parentElement.appendChild(h.backgroundElement);
		var d = ["border-radius", "border-bottom-right-radius", "-moz-border-radius-bottomright", "-webkit-border-bottom-right-radius", "-khtml-border-radius-bottomright", "-khtml-border-bottom-right-radius"];
		var f = 0,
			c = "";
		for (f = 0; f < d.length; f++) {
			c = a._elementCurrentStyle(h.backgroundElement, d[f]);
			if (c || typeof c == "string") {
				break
			}
		}
		if (c != "" && a._parseInt(c) != h.borderRadius) {
			h.borderRadius = a._parseInt(c)
		}
		if ((h.orientation == a.Orientation.Horizontal) || (h.orientation == a.Orientation.Vertical)) {
			h.displayType = 0
		} else {
			h.displayType = 1
		}
		h.parentElement.className = (h.parentElement.className != "" ? " " : "") + "progressbar_parent dynamsoft-progressBar" + (h.extraClassName.parent ? " " : "") + h.extraClassName.parent;
		if (h.displayType == 0) {
			g = h.wrapperElement = document.createElement("DIV");
			g.style.border = "1px solid #A0A0A0";
			g.style.cssFloat = "left";
			g.style.display = "inline-block";
			g.style.width = h.width + "px";
			g.style.height = h.height + "px";
			g.style.left = "0px";
			g.style.top = (-h.height) + "px";
			g.style.backgroundColor = h.backColor;
			g.style.backgroundRepeat = "no-repeat";
			g.style.position = "relative";
			g.style.cssText = g.style.cssText + a._createBorderRadiusCss(h.borderRadius);
			h.parentElement.appendChild(g);
			h.borderWidth = {
				left: a._parseInt(a._elementCurrentStyle(g, "border-left-width")),
				right: a._parseInt(a._elementCurrentStyle(g, "border-right-width")),
				top: a._parseInt(a._elementCurrentStyle(g, "border-top-width")),
				bottom: a._parseInt(a._elementCurrentStyle(g, "border-bottom-width"))
			}
		} else {
			if (h.displayType == 1) {
				if (h.orientation == a.Orientation.Horizontal) {
					if (h.borderRadius > h.width / 2) {
						h.borderRadius = h.width
					}
				} else {
					if (h.orientation == a.Orientation.Vertical) {
						if (h.borderRadius > h.height / 2) {
							h.borderRadius = h.height
						}
					}
				}
				h.valueElement = document.createElement("DIV");
				h.valueElement.className = "";
				h.leftElement = document.createElement("DIV");
				h.middleElement = document.createElement("DIV");
				h.rightElement = document.createElement("DIV");
				h.leftElement.style.border = "1px solid #A0A0A0";
				h.leftElement.style.cssFloat = "left";
				h.leftElement.style.display = "inline-block";
				h.leftElement.style.backgroundColor = h.backColor;
				h.leftElement.style.backgroundRepeat = "no-repeat";
				h.leftElement.style.position = "relative";
				h.rightElement.style.border = "1px solid #A0A0A0";
				h.rightElement.style.cssFloat = "left";
				h.rightElement.style.display = "inline-block";
				h.rightElement.style.backgroundColor = h.backColor;
				h.rightElement.style.backgroundRepeat = "no-repeat";
				h.rightElement.style.position = "relative";
				h.middleElement.style.border = "1px solid #A0A0A0";
				h.middleElement.style.cssFloat = "left";
				h.middleElement.style.display = "inline-block";
				h.middleElement.style.overflow = "hidden";
				h.middleElement.style.position = "relative";
				h.valueElement.style.backgroundColor = h.backColor;
				h.valueElement.style.position = "relative";
				if (h.orientation == a.Orientation.Horizontal) {
					h.leftElement.style.width = h.borderRadius + "px";
					h.leftElement.style.height = h.height + "px";
					h.leftElement.style.top = -h.height + "px";
					h.leftElement.style.left = "0px";
					h.leftElement.style.borderRight = "none";
					h.leftElement.style.cssText = h.leftElement.style.cssText + a._createBorderRadiusCss(h.borderRadius, 0, 0, h.borderRadius);
					h.rightElement.style.width = h.borderRadius + "px";
					h.rightElement.style.height = h.height + "px";
					h.rightElement.style.top = -h.height + "px";
					h.rightElement.style.borderLeft = "none";
					h.rightElement.style.cssText = h.rightElement.style.cssText + a._createBorderRadiusCss(0, h.borderRadius, h.borderRadius, 0);
					h.middleElement.style.width = (h.width - (h.borderRadius * 2)) + "px";
					h.middleElement.style.height = h.height + "px";
					h.middleElement.style.top = -h.height + "px";
					h.middleElement.style.borderLeft = "none";
					h.middleElement.style.borderRight = "none";
					h.valueElement.style.width = "0px";
					h.valueElement.style.height = h.height + "px"
				} else {
					if (h.orientation == a.Orientation.Vertical) {
						h.leftElement.style.width = h.width + "px";
						h.leftElement.style.height = h.borderRadius + "px";
						h.leftElement.style.top = (-h.height) + "px";
						h.leftElement.style.left = "0px";
						h.leftElement.style.borderBottom = "none";
						h.leftElement.style.cssText = h.leftElement.style.cssText + a._createBorderRadiusCss(h.borderRadius, h.borderRadius, 0, 0);
						h.rightElement.style.width = h.width + "px";
						h.rightElement.style.height = h.borderRadius + "px";
						h.rightElement.style.top = (-h.height) + "px";
						h.rightElement.style.left = "0px";
						h.rightElement.style.borderTop = "none";
						h.rightElement.style.cssText = h.rightElement.style.cssText + a._createBorderRadiusCss(0, 0, h.borderRadius, h.borderRadius);
						h.middleElement.style.width = h.width + "px";
						h.middleElement.style.height = h.height - h.borderRadius * 2 + "px";
						h.middleElement.style.top = (-h.height) + "px";
						h.middleElement.style.left = "0px";
						h.middleElement.style.borderTop = "none";
						h.middleElement.style.borderBottom = "none";
						h.valueElement.style.width = h.width + "px";
						h.valueElement.style.height = "0px"
					}
				}
				h.middleElement.appendChild(h.valueElement);
				h.parentElement.appendChild(h.leftElement);
				h.parentElement.appendChild(h.middleElement);
				h.parentElement.appendChild(h.rightElement);
				if (h.orientation == a.Orientation.Horizontal) {
					h.borderWidth = {
						left: a._parseInt(a._elementCurrentStyle(h.leftElement, "border-left-width")),
						right: a._parseInt(a._elementCurrentStyle(h.rightElement, "border-right-width")),
						top: a._parseInt(a._elementCurrentStyle(h.middleElement, "border-top-width")),
						bottom: a._parseInt(a._elementCurrentStyle(h.middleElement, "border-bottom-width"))
					}
				} else {
					if (h.orientation == a.Orientation.Vertical) {
						h.borderWidth = {
							left: a._parseInt(a._elementCurrentStyle(h.middleElement, "border-left-width")),
							right: a._parseInt(a._elementCurrentStyle(h.middleElement, "border-right-width")),
							top: a._parseInt(a._elementCurrentStyle(h.leftElement, "border-top-width")),
							bottom: a._parseInt(a._elementCurrentStyle(h.rightElement, "border-bottom-width"))
						}
					}
				}
			}
		}
		h.parentElement.style.width = (h.width + h.borderWidth.left + h.borderWidth.right) + "px";
		h.parentElement.style.height = (h.height + h.borderWidth.top + h.borderWidth.bottom) + "px";
		h.backgroundElement.style.cssFloat = "left";
		h.backgroundElement.style.display = "inline-block";
		h.backgroundElement.style.width = (h.width + h.borderWidth.left + h.borderWidth.right) + "px";
		h.backgroundElement.style.height = h.height + "px";
		h.backgroundElement.style.backgroundColor = "#FFFFFF";
		h.backgroundElement.style.position = "relative";
		if (h.displayType == 0) {
			h.backgroundElement.style.width = (h.width + h.borderWidth.left + h.borderWidth.right) + "px"
		}
		h.backgroundElement.style.top = h.borderWidth.top + "px";
		h.markerElement = document.createElement("DIV");
		h.markerElement.style.display = "inline-block";
		h.markerElement.style.zoom = "1.0";
		h.markerElement.style.width = h.width + "px";
		h.markerElement.style.height = h.height + "px";
		h.markerElement.style.top = (-h.height * 2 - h.borderWidth.top) + "px";
		h.markerElement.style.left = h.borderWidth.left + "px";
		h.markerElement.style.backgroundColor = h.color;
		h.markerElement.style.lineHeight = (h.height) + "px";
		h.markerElement.style.position = "relative";
		h.parentElement.appendChild(h.markerElement);
		h.isLoaded = true;
		h.setValue(h.initialValue);
		if (h.onLoad != null) {
			h.onLoad()
		}
	};
	a.prototype.setValue = function(e) {
		var i = this;
		if (e !== null && e < i.minValue) {
			e = i.minValue
		}
		if (e !== null && e > i.maxValue) {
			e = i.maxValue
		}
		if (e === null) {} else {
			i.value = e
		}
		if (i.isLoaded) {
			var d = 0,
				h;
			if (i.orientation == a.Orientation.Horizontal) {
				d = (i.value / i.maxValue) * i.width;
				i.progressPosition = d;
				if (i.displayType == 0) {
					if (i.direction == a.Direction.LeftToRight) {} else {}
				} else {
					if (i.displayType == 1) {
						if (i.direction == a.Direction.LeftToRight) {
							if (d <= i.borderRadius) {
								i.valueElement.style.width = "0px"
							} else {
								if (d >= i.width - i.borderRadius) {
									i.valueElement.style.width = i.middleElement.style.width
								} else {
									i.valueElement.style.width = (d - i.borderRadius) + "px"
								}
							}
						} else {
							if (d <= i.borderRadius) {
								i.valueElement.style.width = "0px"
							} else {
								if (d >= i.width - i.borderRadius) {
									i.valueElement.style.left = "0px";
									i.valueElement.style.width = i.middleElement.style.width
								} else {
									i.valueElement.style.left = (i.width - d - i.borderRadius) + "px";
									i.valueElement.style.width = (d - i.borderRadius) + "px"
								}
							}
						}
					}
				}
				if (d > 0) {
					if (i.animationStyle != a.AnimationStyle.StaticFull && i.animationStyle != a.AnimationStyle.CustomFull) {
						i.markerElement.style.width = d + "px"
					} else {
						i.markerElement.style.width = i.width + "px"
					}
					i.markerElement.style.visibility = "visible"
				} else {
					i.markerElement.style.width = i.width + "px";
					if (i.animationStyle != a.AnimationStyle.StaticFull && i.animationStyle != a.AnimationStyle.CustomFull) {
						i.markerElement.style.visibility = "hidden"
					}
				}
				if (i.animationStyle != a.AnimationStyle.StaticFull && i.animationStyle != a.AnimationStyle.CustomFull) {
					if (i.direction == a.Direction.LeftToRight) {
						i.markerElement.style.left = i.borderWidth.left + "px"
					} else {
						i.markerElement.style.left = (i.width - d + i.borderWidth.left) + "px"
					}
				} else {
					i.markerElement.style.left = i.borderWidth.left + "px"
				}
				var l = (-i.height * 2 - i.height - i.borderWidth.top);
				var n = (-i.height * 2 - i.borderWidth.top);
				if (d == 0 || i.width == d) {
					i.markerElement.style.top = n + "px";
					i.markerElement.style.height = i.height + "px";
					i.markerElement.style.cssText = i.markerElement.style.cssText + a._createBorderRadiusCss(i.borderRadius)
				} else {
					if (d < i.borderRadius) {
						var m = i.height - 2.25 * (i.borderRadius - Math.sqrt(Math.pow(i.borderRadius, 2) - Math.pow(i.borderRadius - d, 2)));
						var j = n + (i.height / 2) - (m / 2);
						var c = l - 2 * (n - j);
						i.markerElement.style.top = j + "px";
						i.markerElement.style.height = m + "px";
						if (i.direction == a.Direction.LeftToRight) {
							i.markerElement.style.cssText = i.markerElement.style.cssText + a._createBorderRadiusCss(i.borderRadius, 0, 0, i.borderRadius)
						} else {
							i.markerElement.style.cssText = i.markerElement.style.cssText + a._createBorderRadiusCss(0, i.borderRadius, i.borderRadius, 0)
						}
					} else {
						if (i.width - d < i.borderRadius) {
							h = ((i.borderRadius - (i.width - d)) * 2 + (i.borderRadius - Math.sqrt(Math.pow(i.borderRadius, 2) - Math.pow(i.borderRadius - (i.width - d), 2)))) / 3;
							if (i.direction == a.Direction.LeftToRight) {
								i.markerElement.style.cssText = i.markerElement.style.cssText + a._createBorderRadiusCss(i.borderRadius, h, h, i.borderRadius)
							} else {
								i.markerElement.style.cssText = i.markerElement.style.cssText + a._createBorderRadiusCss(h, i.borderRadius, i.borderRadius, h)
							}
						} else {
							i.markerElement.style.top = n + "px";
							i.markerElement.style.height = i.height + "px";
							if (i.direction == a.Direction.LeftToRight) {
								i.markerElement.style.cssText = i.markerElement.style.cssText + a._createBorderRadiusCss(i.borderRadius, 0, 0, i.borderRadius)
							} else {
								i.markerElement.style.cssText = i.markerElement.style.cssText + a._createBorderRadiusCss(0, i.borderRadius, i.borderRadius, 0)
							}
						}
					}
				}
			} else {
				if (i.orientation == a.Orientation.Vertical) {
					d = (i.value / i.maxValue) * i.height;
					i.progressPosition = d;
					if (i.displayType == 0) {
						if (i.direction == a.Direction.TopToBottom) {} else {}
					} else {
						if (i.displayType == 1) {
							if (i.direction == a.Direction.TopToBottom) {
								if (d <= i.borderRadius) {
									i.valueElement.style.height = "0px"
								} else {
									if (d >= i.height - i.borderRadius) {
										i.valueElement.style.height = i.middleElement.style.height
									} else {
										i.valueElement.style.height = (d - i.borderRadius) + "px"
									}
								}
							} else {
								if (d <= i.borderRadius) {
									i.valueElement.style.height = "0px"
								} else {
									if (d >= i.height - i.borderRadius) {
										i.valueElement.style.top = "0px";
										i.valueElement.style.height = i.middleElement.style.height
									} else {
										i.valueElement.style.top = (i.height - d - i.borderRadius) + "px";
										i.valueElement.style.height = (d + i.borderRadius * 2) + "px"
									}
								}
							}
						}
					}
					if (d > 0) {
						if (i.animationStyle != a.AnimationStyle.StaticFull && i.animationStyle != a.AnimationStyle.CustomFull) {
							i.markerElement.style.height = d + "px"
						} else {
							i.markerElement.style.height = i.height + "px";
							i.markerElement.style.cssText = i.markerElement.style.cssText + a._createBorderRadiusCss(i.borderRadius)
						}
						i.markerElement.style.visibility = "visible"
					} else {
						i.markerElement.style.height = 0 + "px";
						if (i.animationStyle != a.AnimationStyle.StaticFull && i.animationStyle != a.AnimationStyle.CustomFull) {
							i.markerElement.style.visibility = "hidden"
						}
					}
					var g = i.borderWidth.left,
						k = i.borderWidth.left;
					if (d == 0 || i.height == d) {
						i.markerElement.style.left = k + "px";
						i.markerElement.style.width = i.width + "px";
						i.markerElement.style.cssText = i.markerElement.style.cssText + a._createBorderRadiusCss(i.borderRadius)
					} else {
						if (d < i.borderRadius) {
							var f = 2.5 * d;
							if (f > i.width) {
								f = i.width
							}
							var o = k + (i.width / 2) - (f / 2);
							i.markerElement.style.left = o + "px";
							i.markerElement.style.width = f + "px";
							if (i.direction == a.Direction.BottomToTop) {
								i.markerElement.style.cssText = i.markerElement.style.cssText + a._createBorderRadiusCss(0, 0, i.borderRadius, i.borderRadius)
							} else {
								i.markerElement.style.cssText = i.markerElement.style.cssText + a._createBorderRadiusCss(i.borderRadius, i.borderRadius, 0, 0)
							}
						} else {
							if (i.height - d < i.borderRadius) {
								h = ((i.borderRadius - (i.height - d)) * 2 + (i.borderRadius - Math.sqrt(Math.pow(i.borderRadius, 2) - Math.pow(i.borderRadius - (i.height - d), 2)))) / 3;
								if (i.direction == a.Direction.BottomToTop) {
									i.markerElement.style.cssText = i.markerElement.style.cssText + a._createBorderRadiusCss(h, h, i.borderRadius, i.borderRadius)
								} else {
									i.markerElement.style.cssText = i.markerElement.style.cssText + a._createBorderRadiusCss(i.borderRadius, i.borderRadius, h, h)
								}
							} else {
								i.markerElement.style.left = k + "px";
								i.markerElement.style.width = i.width + "px";
								if (i.direction == a.Direction.BottomToTop) {
									i.markerElement.style.cssText = i.markerElement.style.cssText + a._createBorderRadiusCss(0, 0, i.borderRadius, i.borderRadius)
								} else {
									i.markerElement.style.cssText = i.markerElement.style.cssText + a._createBorderRadiusCss(i.borderRadius, i.borderRadius, 0, 0)
								}
							}
						}
					}
					if (i.animationStyle != a.AnimationStyle.StaticFull && i.animationStyle != a.AnimationStyle.CustomFull) {
						if (i.direction == a.Direction.TopToBottom) {
							i.markerElement.style.top = (-i.height * 2 - i.borderWidth.top) + "px"
						} else {
							i.markerElement.style.top = (-i.height - d - i.borderWidth.top) + "px"
						}
					} else {
						i.markerElement.style.top = (-i.height * 2 - i.borderWidth.top) + "px"
					}
				}
			}
			i.progress = (i.value / i.maxValue)
		}
		if (i.onValueChanged != null) {
			i.onValueChanged()
		}
	};
	a._elementCurrentStyle = function(f, e) {
		if (f.currentStyle) {
			var d = 0,
				c = "",
				g = false;
			for (d = 0; d < e.length; d++) {
				if (e[d].toString() != "-") {
					c += (g ? e[d].toString().toUpperCase() : e[d].toString());
					g = false
				} else {
					g = true
				}
			}
			e = c;
			return f.currentStyle[e]
		} else {
			return getComputedStyle(f, null).getPropertyValue(e)
		}
	};
	a._parseInt = function(d) {
		var c = parseInt(d);
		if (isNaN(c)) {
			c = 0
		}
		return c
	};
	a._createBorderRadiusCss = function(c, e, d, f) {
		if (c != null && e == null && d == null && f == null) {
			return "; -moz-border-radius: " + c + "px; -ms-border-radius: " + c + "px; -o-border-radius: " + c + "px; -webkit-border-radius: " + c + "px; -khtml-border-radius: " + c + "px; border-radius: " + c + "px;"
		} else {
			c = (c || 0);
			e = (e || 0);
			d = (d || 0);
			f = (f || 0);
			return "; -moz-border-radius: " + c + "px " + e + "px " + d + "px " + f + "px; -ms-border-radius: " + c + "px " + e + "px " + d + "px " + f + "px; -o-border-radius: " + c + "px " + e + "px " + d + "px " + f + "px; -webkit-border-radius: " + c + "px " + e + "px " + d + "px " + f + "px; -khtml-border-radius: " + c + "px " + e + "px " + d + "px " + f + "px; border-radius: " + c + "px " + e + "px " + d + "px " + f + "px;"
		}
	};
	b.ProgressBar = a
})(Dynamsoft.Lib);
var EnumDWT_PixelType = {
	TWPT_BW: 0,
	TWPT_GRAY: 1,
	TWPT_RGB: 2,
	TWPT_PALLETE: 3,
	TWPT_CMY: 4,
	TWPT_CMYK: 5,
	TWPT_YUV: 6,
	TWPT_YUVK: 7,
	TWPT_CIEXYZ: 8,
	TWPT_LAB: 9,
	TWPT_SRGB: 10,
	TWPT_SCRGB: 11,
	TWPT_INFRARED: 16
};
var EnumDWT_BorderStyle = {
	TWBS_NONE: 0,
	TWBS_SINGLEFLAT: 1,
	TWBS_SINGLE3D: 2
};
var EnumDWT_MessageType = {
	TWQC_GET: 1,
	TWQC_SET: 2,
	TWQC_GETDEFAULT: 4,
	TWQC_GETCURRENT: 8,
	TWQC_RESET: 16
};
var EnumDWT_Cap = {
	CAP_NONE: 0,
	CAP_XFERCOUNT: 1,
	ICAP_COMPRESSION: 256,
	ICAP_PIXELTYPE: 257,
	ICAP_UNITS: 258,
	ICAP_XFERMECH: 259,
	CAP_AUTHOR: 4096,
	CAP_CAPTION: 4097,
	CAP_FEEDERENABLED: 4098,
	CAP_FEEDERLOADED: 4099,
	CAP_TIMEDATE: 4100,
	CAP_SUPPORTEDCAPS: 4101,
	CAP_EXTENDEDCAPS: 4102,
	CAP_AUTOFEED: 4103,
	CAP_CLEARPAGE: 4104,
	CAP_FEEDPAGE: 4105,
	CAP_REWINDPAGE: 4106,
	CAP_INDICATORS: 4107,
	CAP_SUPPORTEDCAPSEXT: 4108,
	CAP_PAPERDETECTABLE: 4109,
	CAP_UICONTROLLABLE: 4110,
	CAP_DEVICEONLINE: 4111,
	CAP_AUTOSCAN: 4112,
	CAP_THUMBNAILSENABLED: 4113,
	CAP_DUPLEX: 4114,
	CAP_DUPLEXENABLED: 4115,
	CAP_ENABLEDSUIONLY: 4116,
	CAP_CUSTOMDSDATA: 4117,
	CAP_ENDORSER: 4118,
	CAP_ALARMS: 4120,
	CAP_ALARMVOLUME: 4121,
	CAP_AUTOMATICCAPTURE: 4122,
	CAP_TIMEBEFOREFIRSTCAPTURE: 4123,
	CAP_TIMEBETWEENCAPTURES: 4124,
	CAP_CLEARBUFFERS: 4125,
	CAP_MAXBATCHBUFFERS: 4126,
	CAP_DEVICETIMEDATE: 4127,
	CAP_POWERSUPPLY: 4128,
	CAP_CAMERAPREVIEWUI: 4129,
	CAP_SERIALNUMBER: 4132,
	CAP_PRINTER: 4134,
	CAP_PRINTERENABLED: 4135,
	CAP_PRINTERINDEX: 4136,
	CAP_PRINTERMODE: 4137,
	CAP_PRINTERSTRING: 4138,
	CAP_PRINTERSUFFIX: 4139,
	CAP_LANGUAGE: 4140,
	CAP_FEEDERALIGNMENT: 4141,
	CAP_FEEDERORDER: 4142,
	CAP_REACQUIREALLOWED: 4144,
	CAP_BATTERYMINUTES: 4146,
	CAP_BATTERYPERCENTAGE: 4147,
	CAP_CAMERASIDE: 4148,
	CAP_SEGMENTED: 4149,
	CAP_CAMERAENABLED: 4150,
	CAP_CAMERAORDER: 4151,
	CAP_MICRENABLED: 4152,
	CAP_FEEDERPREP: 4153,
	CAP_FEEDERPOCKET: 4154,
	CAP_AUTOMATICSENSEMEDIUM: 4155,
	CAP_CUSTOMINTERFACEGUID: 4156,
	ICAP_AUTOBRIGHT: 4352,
	ICAP_BRIGHTNESS: 4353,
	ICAP_CONTRAST: 4355,
	ICAP_CUSTHALFTONE: 4356,
	ICAP_EXPOSURETIME: 4357,
	ICAP_FILTER: 4358,
	ICAP_FLASHUSED: 4359,
	ICAP_GAMMA: 4360,
	ICAP_HALFTONES: 4361,
	ICAP_HIGHLIGHT: 4362,
	ICAP_IMAGEFILEFORMAT: 4364,
	ICAP_LAMPSTATE: 4365,
	ICAP_LIGHTSOURCE: 4366,
	ICAP_ORIENTATION: 4368,
	ICAP_PHYSICALWIDTH: 4369,
	ICAP_PHYSICALHEIGHT: 4370,
	ICAP_SHADOW: 4371,
	ICAP_FRAMES: 4372,
	ICAP_XNATIVERESOLUTION: 4374,
	ICAP_YNATIVERESOLUTION: 4375,
	ICAP_XRESOLUTION: 4376,
	ICAP_YRESOLUTION: 4377,
	ICAP_MAXFRAMES: 4378,
	ICAP_TILES: 4379,
	ICAP_BITORDER: 4380,
	ICAP_CCITTKFACTOR: 4381,
	ICAP_LIGHTPATH: 4382,
	ICAP_PIXELFLAVOR: 4383,
	ICAP_PLANARCHUNKY: 4384,
	ICAP_ROTATION: 4385,
	ICAP_SUPPORTEDSIZES: 4386,
	ICAP_THRESHOLD: 4387,
	ICAP_XSCALING: 4388,
	ICAP_YSCALING: 4389,
	ICAP_BITORDERCODES: 4390,
	ICAP_PIXELFLAVORCODES: 4391,
	ICAP_JPEGPIXELTYPE: 4392,
	ICAP_TIMEFILL: 4394,
	ICAP_BITDEPTH: 4395,
	ICAP_BITDEPTHREDUCTION: 4396,
	ICAP_UNDEFINEDIMAGESIZE: 4397,
	ICAP_EXTIMAGEINFO: 4399,
	ICAP_MINIMUMHEIGHT: 4400,
	ICAP_MINIMUMWIDTH: 4401,
	ICAP_AUTODISCARDBLANKPAGES: 4404,
	ICAP_FLIPROTATION: 4406,
	ICAP_BARCODEDETECTIONENABLED: 4407,
	ICAP_SUPPORTEDBARCODETYPES: 4408,
	ICAP_BARCODEMAXSEARCHPRIORITIES: 4409,
	ICAP_BARCODESEARCHPRIORITIES: 4410,
	ICAP_BARCODESEARCHMODE: 4411,
	ICAP_BARCODEMAXRETRIES: 4412,
	ICAP_BARCODETIMEOUT: 4413,
	ICAP_ZOOMFACTOR: 4414,
	ICAP_PATCHCODEDETECTIONENABLED: 4415,
	ICAP_SUPPORTEDPATCHCODETYPES: 4416,
	ICAP_PATCHCODEMAXSEARCHPRIORITIES: 4417,
	ICAP_PATCHCODESEARCHPRIORITIES: 4418,
	ICAP_PATCHCODESEARCHMODE: 4419,
	ICAP_PATCHCODEMAXRETRIES: 4420,
	ICAP_PATCHCODETIMEOUT: 4421,
	ICAP_FLASHUSED2: 4422,
	ICAP_IMAGEFILTER: 4423,
	ICAP_NOISEFILTER: 4424,
	ICAP_OVERSCAN: 4425,
	ICAP_AUTOMATICBORDERDETECTION: 4432,
	ICAP_AUTOMATICDESKEW: 4433,
	ICAP_AUTOMATICROTATE: 4434,
	ICAP_JPEGQUALITY: 4435,
	ICAP_FEEDERTYPE: 4436,
	ICAP_ICCPROFILE: 4437,
	ICAP_AUTOSIZE: 4438,
	ICAP_AUTOMATICCROPUSESFRAME: 4439,
	ICAP_AUTOMATICLENGTHDETECTION: 4440,
	ICAP_AUTOMATICCOLORENABLED: 4441,
	ICAP_AUTOMATICCOLORNONCOLORPIXELTYPE: 4442,
	ICAP_COLORMANAGEMENTENABLED: 4443,
	ICAP_IMAGEMERGE: 4444,
	ICAP_IMAGEMERGEHEIGHTTHRESHOLD: 4445,
	ICAP_SUPPORTEDEXTIMAGEINFO: 4446
};
var EnumDWT_CapType = {
	TWON_NONE: 0,
	TWON_ARRAY: 3,
	TWON_ENUMERATION: 4,
	TWON_ONEVALUE: 5,
	TWON_RANGE: 6
};
var EnumDWT_TransferMode = {
	TWSX_NATIVE: 0,
	TWSX_FILE: 1,
	TWSX_MEMORY: 2
};
var EnumDWT_FileFormat = {
	TWFF_TIFF: 0,
	TWFF_PICT: 1,
	TWFF_BMP: 2,
	TWFF_XBM: 3,
	TWFF_JFIF: 4,
	TWFF_FPX: 5,
	TWFF_TIFFMULTI: 6,
	TWFF_PNG: 7,
	TWFF_SPIFF: 8,
	TWFF_EXIF: 9,
	TWFF_PDF: 10,
	TWFF_JP2: 11,
	TWFF_JPN: 12,
	TWFF_JPX: 13,
	TWFF_DEJAVU: 14,
	TWFF_PDFA: 15,
	TWFF_PDFA2: 16
};
var EnumDWT_TIFFCompressionType = {
	TIFF_AUTO: 0,
	TIFF_NONE: 1,
	TIFF_RLE: 2,
	TIFF_FAX3: 3,
	TIFF_T4: 3,
	TIFF_FAX4: 4,
	TIFF_T6: 4,
	TIFF_LZW: 5,
	TIFF_JPEG: 7,
	TIFF_PACKBITS: 32773
};
var EnumDWT_InterpolationMethod = {
	IM_NEARESTNEIGHBOUR: 1,
	IM_BILINEAR: 2,
	IM_BICUBIC: 3,
	IM_BESTQUALITY: 5
};
var EnumDWT_ImageType = {
	IT_BMP: 0,
	IT_JPG: 1,
	IT_TIF: 2,
	IT_PNG: 3,
	IT_PDF: 4,
	IT_ALL: 5,
	IT_GIF: 6
};
var EnumDWT_PDFCompressionType = {
	PDF_AUTO: 0,
	PDF_FAX3: 1,
	PDF_FAX4: 2,
	PDF_LZW: 3,
	PDF_RLE: 4,
	PDF_JPEG: 5
};
var EnumDWT_ShowMode = {
	SW_ACTIVE: 0,
	SW_MAX: 1,
	SW_MIN: 2,
	SW_CLOSE: 3,
	SW_IFLIVE: 4
};
var EnumDWT_CapValueType = {
	TWTY_INT8: 0,
	TWTY_INT16: 1,
	TWTY_INT32: 2,
	TWTY_UINT8: 3,
	TWTY_UINT16: 4,
	TWTY_int: 5,
	TWTY_BOOL: 6,
	TWTY_FIX32: 7,
	TWTY_FRAME: 8,
	TWTY_STR32: 9,
	TWTY_STR64: 10,
	TWTY_STR128: 11,
	TWTY_STR255: 12
};
var EnumDWT_UnitType = {
	TWUN_INCHES: 0,
	TWUN_CENTIMETERS: 1,
	TWUN_PICAS: 2,
	TWUN_POINTS: 3,
	TWUN_TWIPS: 4,
	TWUN_PIXELS: 5,
	TWUN_MILLIMETERS: 6
};
var EnumDWT_DUPLEX = {
	TWDX_NONE: 0,
	TWDX_1PASSDUPLEX: 1,
	TWDX_2PASSDUPLEX: 2
};
var EnumDWT_CapLanguage = {
	TWLG_DAN: 0,
	TWLG_DUT: 1,
	TWLG_ENG: 2,
	TWLG_FCF: 3,
	TWLG_FIN: 4,
	TWLG_FRN: 5,
	TWLG_GER: 6,
	TWLG_ICE: 7,
	TWLG_ITN: 8,
	TWLG_NOR: 9,
	TWLG_POR: 10,
	TWLG_SPA: 11,
	TWLG_SWE: 12,
	TWLG_USA: 13,
	TWLG_USERLOCALE: -1,
	TWLG_AFRIKAANS: 14,
	TWLG_ALBANIA: 15,
	TWLG_ARABIC: 16,
	TWLG_ARABIC_ALGERIA: 17,
	TWLG_ARABIC_BAHRAIN: 18,
	TWLG_ARABIC_EGYPT: 19,
	TWLG_ARABIC_IRAQ: 20,
	TWLG_ARABIC_JORDAN: 21,
	TWLG_ARABIC_KUWAIT: 22,
	TWLG_ARABIC_LEBANON: 23,
	TWLG_ARABIC_LIBYA: 24,
	TWLG_ARABIC_MOROCCO: 25,
	TWLG_ARABIC_OMAN: 26,
	TWLG_ARABIC_QATAR: 27,
	TWLG_ARABIC_SAUDIARABIA: 28,
	TWLG_ARABIC_SYRIA: 29,
	TWLG_ARABIC_TUNISIA: 30,
	TWLG_ARABIC_UAE: 31,
	TWLG_ARABIC_YEMEN: 32,
	TWLG_BASQUE: 33,
	TWLG_BYELORUSSIAN: 34,
	TWLG_BULGARIAN: 35,
	TWLG_CATALAN: 36,
	TWLG_CHINESE: 37,
	TWLG_CHINESE_HONGKONG: 38,
	TWLG_CHINESE_PRC: 39,
	TWLG_CHINESE_SINGAPORE: 40,
	TWLG_CHINESE_SIMPLIFIED: 41,
	TWLG_CHINESE_TAIWAN: 42,
	TWLG_CHINESE_TRADITIONAL: 43,
	TWLG_CROATIA: 44,
	TWLG_CZECH: 45,
	TWLG_DANISH: 0,
	TWLG_DUTCH: 1,
	TWLG_DUTCH_BELGIAN: 46,
	TWLG_ENGLISH: 2,
	TWLG_ENGLISH_AUSTRALIAN: 47,
	TWLG_ENGLISH_CANADIAN: 48,
	TWLG_ENGLISH_IRELAND: 49,
	TWLG_ENGLISH_NEWZEALAND: 50,
	TWLG_ENGLISH_SOUTHAFRICA: 51,
	TWLG_ENGLISH_UK: 52,
	TWLG_ENGLISH_USA: 13,
	TWLG_ESTONIAN: 53,
	TWLG_FAEROESE: 54,
	TWLG_FARSI: 55,
	TWLG_FINNISH: 4,
	TWLG_FRENCH: 5,
	TWLG_FRENCH_BELGIAN: 56,
	TWLG_FRENCH_CANADIAN: 3,
	TWLG_FRENCH_LUXEMBOURG: 57,
	TWLG_FRENCH_SWISS: 58,
	TWLG_GERMAN: 6,
	TWLG_GERMAN_AUSTRIAN: 59,
	TWLG_GERMAN_LUXEMBOURG: 60,
	TWLG_GERMAN_LIECHTENSTEIN: 61,
	TWLG_GERMAN_SWISS: 62,
	TWLG_GREEK: 63,
	TWLG_HEBREW: 64,
	TWLG_HUNGARIAN: 65,
	TWLG_ICELANDIC: 7,
	TWLG_INDONESIAN: 66,
	TWLG_ITALIAN: 8,
	TWLG_ITALIAN_SWISS: 67,
	TWLG_JAPANESE: 68,
	TWLG_KOREAN: 69,
	TWLG_KOREAN_JOHAB: 70,
	TWLG_LATVIAN: 71,
	TWLG_LITHUANIAN: 72,
	TWLG_NORWEGIAN: 9,
	TWLG_NORWEGIAN_BOKMAL: 73,
	TWLG_NORWEGIAN_NYNORSK: 74,
	TWLG_POLISH: 75,
	TWLG_PORTUGUESE: 10,
	TWLG_PORTUGUESE_BRAZIL: 76,
	TWLG_ROMANIAN: 77,
	TWLG_RUSSIAN: 78,
	TWLG_SERBIAN_LATIN: 79,
	TWLG_SLOVAK: 80,
	TWLG_SLOVENIAN: 81,
	TWLG_SPANISH: 11,
	TWLG_SPANISH_MEXICAN: 82,
	TWLG_SPANISH_MODERN: 83,
	TWLG_SWEDISH: 12,
	TWLG_THAI: 84,
	TWLG_TURKISH: 85,
	TWLG_UKRANIAN: 86,
	TWLG_ASSAMESE: 87,
	TWLG_BENGALI: 88,
	TWLG_BIHARI: 89,
	TWLG_BODO: 90,
	TWLG_DOGRI: 91,
	TWLG_GUJARATI: 92,
	TWLG_HARYANVI: 93,
	TWLG_HINDI: 94,
	TWLG_KANNADA: 95,
	TWLG_KASHMIRI: 96,
	TWLG_MALAYALAM: 97,
	TWLG_MARATHI: 98,
	TWLG_MARWARI: 99,
	TWLG_MEGHALAYAN: 100,
	TWLG_MIZO: 101,
	TWLG_NAGA: 102,
	TWLG_ORISSI: 103,
	TWLG_PUNJABI: 104,
	TWLG_PUSHTU: 105,
	TWLG_SERBIAN_CYRILLIC: 106,
	TWLG_SIKKIMI: 107,
	TWLG_SWEDISH_FINLAND: 108,
	TWLG_TAMIL: 109,
	TWLG_TELUGU: 110,
	TWLG_TRIPURI: 111,
	TWLG_URDU: 112,
	TWLG_VIETNAMESE: 113
};
var EnumDWT_CapSupportedSizes = {
	TWSS_NONE: 0,
	TWSS_A4LETTER: 1,
	TWSS_B5LETTER: 2,
	TWSS_USLETTER: 3,
	TWSS_USLEGAL: 4,
	TWSS_A5: 5,
	TWSS_B4: 6,
	TWSS_B6: 7,
	TWSS_USLEDGER: 9,
	TWSS_USEXECUTIVE: 10,
	TWSS_A3: 11,
	TWSS_B3: 12,
	TWSS_A6: 13,
	TWSS_C4: 14,
	TWSS_C5: 15,
	TWSS_C6: 16,
	TWSS_4A0: 17,
	TWSS_2A0: 18,
	TWSS_A0: 19,
	TWSS_A1: 20,
	TWSS_A2: 21,
	TWSS_A4: 1,
	TWSS_A7: 22,
	TWSS_A8: 23,
	TWSS_A9: 24,
	TWSS_A10: 25,
	TWSS_ISOB0: 26,
	TWSS_ISOB1: 27,
	TWSS_ISOB2: 28,
	TWSS_ISOB3: 12,
	TWSS_ISOB4: 6,
	TWSS_ISOB5: 29,
	TWSS_ISOB6: 7,
	TWSS_ISOB7: 30,
	TWSS_ISOB8: 31,
	TWSS_ISOB9: 32,
	TWSS_ISOB10: 33,
	TWSS_JISB0: 34,
	TWSS_JISB1: 35,
	TWSS_JISB2: 36,
	TWSS_JISB3: 37,
	TWSS_JISB4: 38,
	TWSS_JISB5: 2,
	TWSS_JISB6: 39,
	TWSS_JISB7: 40,
	TWSS_JISB8: 41,
	TWSS_JISB9: 42,
	TWSS_JISB10: 43,
	TWSS_C0: 44,
	TWSS_C1: 45,
	TWSS_C2: 46,
	TWSS_C3: 47,
	TWSS_C7: 48,
	TWSS_C8: 49,
	TWSS_C9: 50,
	TWSS_C10: 51,
	TWSS_USSTATEMENT: 52,
	TWSS_BUSINESSCARD: 53,
	TWSS_MAXSIZE: 54
};
var EnumDWT_CapFeederAlignment = {
	TWFA_NONE: 0,
	TWFA_LEFT: 1,
	TWFA_CENTER: 2,
	TWFA_RIGHT: 3
};
var EnumDWT_CapFeederOrder = {
	TWFO_FIRSTPAGEFIRST: 0,
	TWFO_LASTPAGEFIRST: 1
};
var EnumDWT_CapPrinter = {
	TWPR_IMPRINTERTOPBEFORE: 0,
	TWPR_IMPRINTERTOPAFTER: 1,
	TWPR_IMPRINTERBOTTOMBEFORE: 2,
	TWPR_IMPRINTERBOTTOMAFTER: 3,
	TWPR_ENDORSERTOPBEFORE: 4,
	TWPR_ENDORSERTOPAFTER: 5,
	TWPR_ENDORSERBOTTOMBEFORE: 6,
	TWPR_ENDORSERBOTTOMAFTER: 7
};
var EnumDWT_CapPrinterMode = {
	TWPM_SINGLESTRING: 0,
	TWPM_MULTISTRING: 1,
	TWPM_COMPOUNDSTRING: 2
};
var EnumDWT_CapBitdepthReduction = {
	TWBR_THRESHOLD: 0,
	TWBR_HALFTONE: 1,
	TWBR_CUSTHALFTONE: 2,
	TWBR_DIFFUSION: 3
};
var EnumDWT_CapBitOrder = {
	TWBO_LSBFIRST: 0,
	TWBO_MSBFIRST: 1
};
var EnumDWT_CapFilterType = {
	TWFT_RED: 0,
	TWFT_GREEN: 1,
	TWFT_BLUE: 2,
	TWFT_NONE: 3,
	TWFT_WHITE: 4,
	TWFT_CYAN: 5,
	TWFT_MAGENTA: 6,
	TWFT_YELLOW: 7,
	TWFT_BLACK: 8
};
var EnumDWT_CapFlash = {
	TWFL_NONE: 0,
	TWFL_OFF: 1,
	TWFL_ON: 2,
	TWFL_AUTO: 3,
	TWFL_REDEYE: 4
};
var EnumDWT_CapFlipRotation = {
	TWFR_BOOK: 0,
	TWFR_FANFOLD: 1
};
var EnumDWT_CapImageFilter = {
	TWIF_NONE: 0,
	TWIF_AUTO: 1,
	TWIF_LOWPASS: 2,
	TWIF_BANDPASS: 3,
	TWIF_HIGHPASS: 4,
	TWIF_TEXT: 3,
	TWIF_FINELINE: 4
};
var EnumDWT_CapLightPath = {
	TWLP_REFLECTIVE: 0,
	TWLP_TRANSMISSIVE: 1
};
var EnumDWT_CapLightSource = {
	TWLS_RED: 0,
	TWLS_GREEN: 1,
	TWLS_BLUE: 2,
	TWLS_NONE: 3,
	TWLS_WHITE: 4,
	TWLS_UV: 5,
	TWLS_IR: 6
};
var EnumDWT_MagType = {
	TWMD_MICR: 0,
	TWMD_RAW: 1,
	TWMD_INVALID: 2
};
var EnumDWT_CapNoiseFilter = {
	TWNF_NONE: 0,
	TWNF_AUTO: 1,
	TWNF_LONEPIXEL: 2,
	TWNF_MAJORITYRULE: 3
};
var EnumDWT_CapORientation = {
	TWOR_ROT0: 0,
	TWOR_ROT90: 1,
	TWOR_ROT180: 2,
	TWOR_ROT270: 3,
	TWOR_PORTRAIT: 0,
	TWOR_LANDSCAPE: 3,
	TWOR_AUTO: 4,
	TWOR_AUTOTEXT: 5,
	TWOR_AUTOPICTURE: 6
};
var EnumDWT_CapOverscan = {
	TWOV_NONE: 0,
	TWOV_AUTO: 1,
	TWOV_TOPBOTTOM: 2,
	TWOV_LEFTRIGHT: 3,
	TWOV_ALL: 4
};
var EnumDWT_CapPixelFlavor = {
	TWPF_CHOCOLATE: 0,
	TWPF_VANILLA: 1
};
var EnumDWT_CapPlanarChunky = {
	TWPC_CHUNKY: 0,
	TWPC_PLANAR: 1
};
var EnumDWT_DataSourceStatus = {
	TWDSS_CLOSED: 0,
	TWDSS_OPENED: 1,
	TWDSS_ENABLED: 2,
	TWDSS_ACQUIRING: 3
};
var EnumDWT_FitWindowType = {
	enumFitWindow: 0,
	enumFitWindowHeight: 1,
	enumFitWindowWidth: 2
};
var EnumDWT_PlatformType = {
	enumWindow: 0,
	enumMac: 1,
	enumLinux: 2
};
var EnumDWT_UploadDataFormat = {
	Binary: 0,
	Base64: 1
};
var EnumDWT_MouseShape = {
	Default: 0,
	Hand: 1,
	Crosshair: 2,
	Zoom: 3,
	NWResize: 4,
	EResize: 5,
	NResize: 6,
	Resize: 7,
	Move: 8
};
var EnumDWT_Language = {
	English: 0,
	French: 1,
	Arabic: 2,
	Spanish: 3,
	Portuguese: 4,
	German: 5,
	Italian: 6,
	Russian: 7,
	Chinese: 8
};
var EnumDWT_InitMsg = {
	Info: 1,
	Error: 2,
	NotInstalledError: 3,
	DownloadError: 4,
	DownloadNotRestartError: 5
};
var EnumDWT_Driver = {
	TWAIN: 0,
	ICA: 3,
	SANE: 3,
	TWAIN_AND_ICA: 4
};
var EnumDWT_Error = {
	ModuleNotExists: -2371
};
(function() {
	Dynamsoft.Lib.Errors = {
		InvalidIndex: function(a) {
			a._errorCode = -1033;
			a._errorString = "Invalid index."
		},
		InvalidValue: function(a) {
			a._errorCode = -1034;
			a._errorString = "Invalid value."
		},
		NoImage: function(a) {
			a._errorCode = -1035;
			a._errorString = "There is no image."
		},
		UnrecognizedExt: function(a) {
			a._errorCode = -1110;
			a._errorString = "Unrecognized file extension."
		},
		Server_Restarted: function(a) {
			a._errorCode = -2208;
			a._errorString = "The connection with the local Dynamsoft Service encountered a problem and has been reset."
		},
		HTML5NotSupport: function(a) {
			a._errorCode = -2209;
			a._errorString = "The HTML5 edition does not support this method or property."
		},
		HttpServerCannotEmpty: function(a) {
			a._errorCode = -2300;
			a._errorString = "Http upload error: the HTTP Server name/ip cannot be empty."
		},
		NetworkError: function(a) {
			a._errorCode = -2301;
			a._errorString = "Network error."
		},
		InvalidResultFormat: function(a) {
			a._errorCode = -2302;
			a._errorString = "The result format is invalid."
		},
		UploadError: function(d, c, b, a) {
			if (c) {
				d._errorCode = -2303;
				d._errorString = "Upload cancelled."
			} else {
				d._errorCode = -2003;
				if (a && a > 0) {
					d._errorString = "HTTP process error: " + a + "."
				} else {
					d._errorString = "HTTP process error."
				}
				if (b) {
					d._errorString += " " + b
				}
			}
		},
		HttpDownloadUrlError: function(a) {
			a._errorCode = -2304;
			a._errorString = "Http download error: the url is invalid."
		},
		HttpDownloadError: function(d, c, b, a) {
			if (c) {
				d._errorCode = -2305;
				d._errorString = "User cancelled the operation."
			} else {
				d._errorCode = -2003;
				if (a && a > 0) {
					d._errorString = "HTTP process error: " + a + "."
				} else {
					d._errorString = "HTTP process error."
				}
				if (b) {
					d._errorString += " " + b
				}
			}
		},
		UploadFileCannotEmpty: function(a) {
			a._errorCode = -2306;
			a._errorString = "Upload Error: the upload file cannot be empty."
		},
		InvalidWidthOrHeight: function(a) {
			a._errorCode = -2307;
			a._errorString = "The width or height you entered is invalid."
		},
		Server_Invalid: function(a) {
			if (a._errorCode == 0) {
				a._errorCode = -2308;
				a._errorString = "The local Dynamsoft Service has been stopped."
			}
		},
		InvalidLocalFilename: function(b, a) {
			b._errorCode = -2309;
			b._errorString = "The LocalFile is empty in the name " + a + " Function."
		},
		BarCode_InvalidIndex: function(b, a) {
			b._errorCode = -2310;
			b._errorString = "The index is out of range."
		},
		BarCode_InvalidRemoteFilename: function(a) {
			a._errorCode = -2311;
			a._errorString = "The RemoteFile field is empty in the Barcode Download Function."
		},
		ImageFileLengthCannotZero: function(a) {
			a._errorCode = -2312;
			a._errorString = "The file length is empty."
		},
		UploadExceededMaxSize: function(a) {
			a._errorCode = -2313;
			a._errorString = "The size of the images you are about to upload has exceeded the limit."
		},
		ParameterCannotEmpty: function(a) {
			a._errorCode = -2314;
			a._errorString = "The parameter cannot be empty."
		},
		Webcam_InvalidIndex: function(b, a) {
			b._errorCode = -2315;
			b._errorString = "The index is out of range."
		},
		Webcam_InvalidRemoteFilename: function(a) {
			a._errorCode = -2316;
			a._errorString = "The RemoteFile field is empty in the Webcam Download Function."
		},
		Pdf_InvalidRemoteFilename: function(a) {
			a._errorCode = -2317;
			a._errorString = "The RemoteFile field is empty in the Pdf Download Function."
		},
		InvalidDestination: function(a) {
			a._errorCode = -2318;
			a._errorString = "Invalid destination file."
		},
		InvalidSourceFile: function(a) {
			a._errorCode = -2319;
			a._errorString = "Invalid source file."
		},
		InvalidFile: function(a) {
			a._errorCode = -2320;
			a._errorString = "Invalid file."
		},
		hasLicenseError: function(a) {
			return (a._errorCode >= -2348 && a._errorCode <= -2325)
		},
		OCR_InvalidIndex: function(b, a) {
			b._errorCode = -2321;
			b._errorString = "The index is out of range."
		},
		OCR_InvalidLeftOrTopOrRightOrBottom: function(a) {
			a._errorCode = -2322;
			a._errorString = "The left or top or right or bottom you entered is invalid."
		},
		OCR_InvalidOutputFormat: function(a) {
			a._errorCode = -2323;
			a._errorString = "The OCR output format is not supported."
		},
		OCR_InvalidPageSetMode: function(a) {
			a._errorCode = -2324;
			a._errorString = "The OCR page set mode is not supported."
		},
		LicenseEmptyOrInvalid: function(a) {
			a._errorCode = -2325;
			a._errorString = "The current product key is empty or invalid, please contact the site administrator."
		},
		LicenseExpired: function(b, a) {
			b._errorCode = -2326;
			var c = "";
			if (a && a != "") {
				if (a.indexOf("on") == -1) {
					c = " on " + a
				}
			}
			b._errorString = "The current product key has expired" + c + ", please contact the site administrator."
		},
		LicenseNoChrome: function(a) {
			a._errorCode = -2327;
			a._errorString = "The current product key does not support Chrome, please contact the site administrator."
		},
		LicenseNoFirefox: function(a) {
			a._errorCode = -2328;
			a._errorString = "The current product key does not support Firefox, please contact the site administrator."
		},
		LicenseNoIE: function(a) {
			a._errorCode = -2329;
			a._errorString = "The current product key does not support IE, please contact the site administrator."
		},
		LicenseNoEdge: function(a) {
			a._errorCode = -2330;
			a._errorString = "The current product key does not support Edge, please contact the site administrator."
		},
		LicenseTrialButServiceFull: function(a) {
			a._errorCode = -2331;
			a._errorString = "The current product key is a trial version key but Dynamsoft.WebTwainEnv.Trial is set to false, please change it to true."
		},
		LicenseFullButServiceTrial: function(a) {
			a._errorCode = -2332;
			a._errorString = "The current product key is a full version key but Dynamsoft.WebTwainEnv.Trial is set to true, please change it to false."
		},
		LicenseNoCore: function(a) {
			a._errorCode = -2333;
			a._errorString = "The current product key is missing the core license, please contact the site administrator."
		},
		LicenseNo1D: function(a) {
			a._errorCode = -2334;
			a._errorString = "The current product key does not include a license for reading 1D barcode, please contact the site administrator."
		},
		LicenseNo2DQR: function(a) {
			a._errorCode = -2335;
			a._errorString = "The current product key does not include a license for reading QRcode barcode, please contact the site administrator."
		},
		LicenseNo2DPDF417: function(a) {
			a._errorCode = -2336;
			a._errorString = "The current product key does not include a license for reading PDF417 barcode, please contact the site administrator."
		},
		LicenseNo2DDataMatrix: function(a) {
			a._errorCode = -2337;
			a._errorString = "The current product key does not include a license for reading DataMatrix barcode, please contact the site administrator."
		},
		LicenseNoWebcam: function(a) {
			a._errorCode = -2338;
			a._errorString = "The current product key does not support Webcam, please contact the site administrator."
		},
		LicenseNoPDF: function(a) {
			a._errorCode = -2339;
			a._errorString = "The current product key does not support pdf rasterizer, please contact the site administrator."
		},
		LicenseNoOCR: function(a) {
			a._errorCode = -2340;
			a._errorString = "The current product key does not support OCR, please contact the site administrator."
		},
		LicenseNoOCRPro: function(a) {
			a._errorCode = -2341;
			a._errorString = "The current product key does not support OCR pro, please contact the site administrator."
		},
		LicenseBadDomain: function(a) {
			a._errorCode = -2342;
			a._errorString = "The domain of your current site does not match the domain bound in the current product key, please contact the site administrator."
		},
		LicenseNotSupportBorwser: function(a) {
			a._errorCode = -2343;
			a._errorString = "The current product key does not support your browser, please contact the site administrator."
		},
		LicenseNotSupportWindows: function(a) {
			a._errorCode = -2344;
			a._errorString = "The current product key does not support Windows OS, please contact the site administrator."
		},
		LicenseNotSupportMAC: function(a) {
			a._errorCode = -2345;
			a._errorString = "The current product key does not support MAC OS, please contact the site administrator."
		},
		LicenseNotSupportLinux: function(a) {
			a._errorCode = -2346;
			a._errorString = "The current product key does not support Linux OS, please contact the site administrator."
		},
		LicenseNotSupportOS: function(a) {
			a._errorCode = -2347;
			a._errorString = "The current product key does not support your OS, please contact the site administrator."
		},
		LicenseLower: function(a) {
			a._errorCode = -2348;
			a._errorString = "The current product key is invalid because it's generated with the licenses of a different major version."
		},
		BarcodeLicenseEmpty: function(a) {
			a._errorCode = -2349;
			a._errorString = a._errorString = "The current product key does not include a license for reading barcode, please contact the site administrator."
		},
		IndicesCannotEmpty: function(a) {
			a._errorCode = -2350;
			a._errorString = "The indices cannot be empty."
		},
		UploadIndexMoreThanOne: function(a) {
			a._errorCode = -2351;
			a._errorString = "You cannot upload more than one image when the format is BMP, JPG or PNG"
		},
		IndicesOutOfRange: function(a) {
			a._errorCode = -2352;
			a._errorString = "The indices are out of range."
		},
		HttpHeaderNotAllowed: function(a) {
			a._errorCode = -2353;
			a._errorString = "The header name being used is a protected keyword and is not allowed."
		},
		HttpHeaderIsEmpty: function(a) {
			a._errorCode = -2354;
			a._errorString = "The header name cannot be empty."
		},
		HttpHeaderIsNull: function(a) {
			a._errorCode = -2355;
			a._errorString = "The header name cannot be null."
		},
		HttpHeaderIsUndefined: function(a) {
			a._errorCode = -2356;
			a._errorString = "The header name cannot be undefined."
		},
		HttpHeaderIsInvalid: function(a) {
			a._errorCode = -2357;
			a._errorString = "The header name you entered is invalid."
		},
		IndicesNotArray: function(a) {
			a._errorCode = -2358;
			a._errorString = "The type of the parameter indices must be an Array."
		},
		IndexOutOfRange: function(a) {
			a._errorCode = -2359;
			a._errorString = "The index is out of range."
		},
		IndexNullOrUndefined: function(a) {
			a._errorCode = -2360;
			a._errorString = "The index is null or undefined."
		},
		ConvertBase64IndexMoreThanOne: function(a) {
			a._errorCode = -2361;
			a._errorString = "You cannot convert more than one image to base64 string when the format is BMP, JPG or PNG."
		},
		InvalidImageType: function(a) {
			a._errorCode = -2362;
			a._errorString = "The image type is not supported."
		},
		InvalidDataFormat: function(a) {
			a._errorCode = -2363;
			a._errorString = "The data format is not supported."
		},
		InvalidUploadInSegments: function(a) {
			a._errorCode = -2364;
			a._errorString = "Please use a Boolean value for the parameter bUploadInSegments."
		},
		InvalidUrl: function(a) {
			a._errorCode = -2365;
			a._errorString = "The url is invalid."
		},
		ConvertBase64Failed: function(a) {
			a._errorCode = -2366;
			a._errorString = "Converting images to a base64 string failed."
		},
		InvalidSegmentUploadThreshold: function(a) {
			a._errorCode = -2367;
			a._errorString = "Invalid value for the parameter segmentUploadThreshold."
		},
		InvalidModuleSize: function(a) {
			a._errorCode = -2368;
			a._errorString = "Invalid value for the parameter moduleSize."
		},
		MustUpgradeService: function(a) {
			a._errorCode = -2207;
			a._errorString = "The Dynamsoft Service installed on your computer is outdated and no longer works with the JavaScript code on the website."
		},
		WebTwainModuleDownloadFailure: function(a) {
			a._errorCode = -2369;
			a._errorString = "The module for Dynamic Web TWAIN has failed to download."
		},
		LicenseIsFuture: function(b, a) {
			b._errorCode = -2370;
			b._errorString = "The current product key is invalid, please contact the site administrator."
		},
		WebTwainModuleNotExist: function(a) {
			a._errorCode = EnumDWT_Error.ModuleNotExists;
			a._errorString = "Dynamic Web TWAIN scanner module is not installed and it is also missing on the server, please contact the site administrator."
		},
		ConvertBinaryIndexMoreThanOne: function(a) {
			a._errorCode = -2372;
			a._errorString = "You cannot convert more than one image to binary when the format is BMP, JPG or PNG."
		},
		Overlay_InvalidLeftOrTopOrRightOrBottom: function(a) {
			a._errorCode = -2375;
			a._errorString = "The left or top or right or bottom you entered is invalid."
		},
		GenerateURL_InvalidRetFromServer: function(a) {
			a._errorCode = -2376;
			a._errorString = "The generate url failed."
		},
		ImageCaptureDriverTypeError: function(a) {
			a._errorCode = -2377;
			a._errorString = "Failed to set Image Capture Driver Type."
		},
		InvalidTiffTagError: function(a) {
			a._errorCode = -2378;
			a._errorString = "Invalid value for the tiff tag code."
		},
		OCR_InvalidRemoteFilename: function(a) {
			a._errorCode = -2379;
			a._errorString = "The RemoteFile field is empty in the OCR Download Function."
		},
		__last: false
	}
})();
(function(a) {
	a.LS = (function() {
		var b = false,
			c;
		if (a.env.bEdge && a.env.bFileSystem) {} else {
			try {
				b = (window.localStorage) ? true : false
			} catch (d) {}
		}
		c = {
			isSupportLS: function() {
				return b
			},
			item: function(f, g, e) {
				var h = null;
				if (this.isSupportLS()) {
					if (g) {
						localStorage.setItem(f, g);
						h = g
					} else {
						h = localStorage.getItem(f)
					}
					if (h === null) {
						return e
					}
					return h
				} else {
					return e
				}
			},
			removeItem: function(e) {
				if (this.isSupportLS()) {
					localStorage.removeItem(e)
				} else {
					return false
				}
				return true
			}
		};
		return c
	})()
})(Dynamsoft.Lib);
(function(b) {
	b.html5 = b.html5 || {};
	if (!b.product.bChromeEdition) {
		return
	}
	var h = 1,
		j, f = !1,
		e = !0,
		a = 0,
		g = 1,
		c = 1,
		d = 2,
		i = Dynamsoft.WebTwainEnv;
	j = b.html5.Funs = {
		notSupportProperty: function(k) {},
		notSupportMethod: function(k) {},
		getRandom: function() {
			var l = new Date().getTime() % 10000,
				k = [],
				n;
			for (var m = 0; m < 5; m++) {
				n = Math.floor(Math.random() * 10);
				if (m == 0 && n == 0) {
					m = -1;
					continue
				}
				k.push(n)
			}
			if (l < 10) {
				k.push("000")
			} else {
				if (l < 100) {
					k.push("00")
				} else {
					if (l < 1000) {
						k.push("0")
					}
				}
			}
			k.push(l);
			return k.join("")
		},
		generateCmdId: function() {
			h++;
			return h
		},
		sendData: function(l, w, q, u) {
			var v, p, m, n, k, t, o, r;
			if (!u) {
				try {
					l.send(w)
				} catch (s) {
					b.log(s)
				}
				return f
			}
			n = new ArrayBuffer(12);
			p = q && q.size ? q.size : 0;
			r = new Blob([w]);
			v = r.size;
			m = v + p;
			k = new DataView(n);
			for (o = 0; o < 8; o++) {
				if (m) {
					k.setUint8(o, m % 256);
					m = parseInt(m / 256)
				} else {
					break
				}
			}
			for (o = 0; o < 4; o++) {
				if (v) {
					k.setUint8(8 + o, v % 256);
					v = parseInt(v / 256)
				} else {
					break
				}
			}
			t = new Blob([n, r]);
			l.send(t);
			if (p > 0) {
				l.send(q)
			}
			n = null;
			r = null;
			t = null;
			return e
		},
		__pushElement: function(l, k) {
			if (b.isString(k)) {
				l.push('"');
				l.push(k);
				l.push('"')
			} else {
				if (b.isArray(k)) {
					var m = e;
					l.push("[");
					b.each(k, function(n) {
						if (m) {
							m = f
						} else {
							l.push(",")
						}
						j.__pushElement(l, n)
					});
					l.push("]")
				} else {
					if (k === undefined) {
						l.push('""')
					} else {
						l.push(k)
					}
				}
			}
		},
		makeParams: function() {
			var l = arguments;
			if (l === undefined || l.length === 0) {
				return undefined
			} else {
				var k = [],
					n, m;
				if (l.length === 1) {
					n = l[0];
					k.push("[");
					j.__pushElement(k, n);
					k.push("]")
				} else {
					if (l.length === 2) {
						n = l[0];
						m = l[1];
						k.push("[");
						j.__pushElement(k, n);
						k.push(",");
						j.__pushElement(k, m);
						k.push("]")
					} else {
						j.__pushElement(k, Array.prototype.slice.call(l))
					}
				}
				return k.join("")
			}
		},
		getJson: function(r, l, s, k) {
			var q = [];
			q.push("{");
			q.push('"id":"');
			q.push(r.clientId);
			q.push('"');
			if (k) {
				q.push(',"cmdId":"');
				q.push(k);
				q.push('"')
			}
			q.push(',"method":"');
			q.push(l);
			q.push('"');
			q.push(',"module":"dwt","version":"');
			var o = Dynamsoft.WebTwainEnv,
				n = [o.Trial ? "dwt_trial_" : "dwt_", b.product.getServerVersionInfo()].join("");
			q.push(n);
			q.push('"');
			if (s !== undefined && s !== null) {
				q.push(',"parameter":');
				q.push(s)
			}
			q.push("}");

			console.log(12345678987654321278543)
			
        
			console.log(q.join(""))
			return q.join("")
		},
		refreshImageAfterInvokeFun: function(k, m, l) {
			return (l == 1)
		},
		loadHttpBlob: function(q, x, p, r, y, k, w, l) {
			var o = "loadHttpBlob",
				z, t, v = f;
			z = function(F, C, E) {
				var B, D;
				if (F && b.isArray(F) && F.length > 2) {
					B = F[1];
					D = F[2]
				} else {
					B = C;
					D = E
				}
				if (D.state == 2 && D.status == 0) {
					if (D.statusText === "abort") {
						var m = e;
						b.Errors.HttpDownloadError(q, m)
					} else {
						b.Errors.HttpDownloadUrlError(q)
					}
				} else {
					b.Errors.HttpDownloadError(q, f, B, D.status)
				}
				if (b.isFunction(k)) {
					k()
				}
			};
			t = {
				method: x,
				url: p,
				async: r,
				onSuccess: y,
				onError: z,
				headers: f,
				onComplete: function() {
					b.bio = f
				}
			};
			if (l) {
				t.headers = l
			}
			if (q.HTTPUserName != "") {
				t.username = q.HTTPUserName;
				t.password = q.HTTPPassword
			}
			if (r) {
				t.dataType = "blob";
				if (b.isFunction(w)) {
					t.beforeSend = function(m) {
						m.addEventListener("progress", function(B) {
							delete(B.totalSize);
							delete(B.position);
							w(B)
						}, f)
					}
				}
				v = e
			} else {
				if (b.env.bIE) {
					t.dataType = "arraybuffer";
					t.onSuccess = function(E, D, C) {
						var F, B, m;
						F = E || C.responseData;
						if (F) {
							m = new Uint8Array(F)
						}
						q._errorCode = 0;
						q._errorString = "";
						y(m);
						m = null;
						q._HowManyImagesInBuffer = q._innerFun("HowManyImagesInBuffer");
						q.__cIndex = q._innerFun("CurrentImageIndexInBuffer");
						v = e
					}
				} else {
					t.contentType = "text/plain; charset=x-user-defined";
					t.mimeType = "text/plain; charset=x-user-defined";
					t.onSuccess = function(F, E, D) {
						var G, B, m;
						G = D.responseText;
						B = G.length;
						m = new Uint8Array(B);
						for (var C = 0; C < B; C++) {
							m[C] = G.charCodeAt(C)
						}
						q._errorCode = 0;
						q._errorString = "";
						y(m);
						m = null;
						q._HowManyImagesInBuffer = q._innerFun("HowManyImagesInBuffer");
						q.__cIndex = q._innerFun("CurrentImageIndexInBuffer");
						v = e
					}
				}
				if (t.headers) {
					b.mix(t.headers, {
						"X-Requested-With": f
					})
				} else {
					t.headers = {
						"X-Requested-With": f
					}
				}
			}
			if (x == "post") {
				var s = q.httpFormFields,
					n;
				if (s) {
					try {
						n = new FormData();
						b.each(s, function(B, m) {
							if (B instanceof Blob) {
								var C = B.name;
								n.append(m, B, C)
							} else {
								n.append(m, B)
							}
						});
						b.mix(t, {
							data: n,
							processData: f,
							contentType: f
						})
					} catch (u) {}
				}
			}
			var A = b.ajax(t);
			if (r) {
				b.bio = A
			}
			return v
		},
		getServerImageUrlPrefix: function(n, o) {
			var l = n.httpUrl,
				k = f,
				m = [l, "dwt/dwt_", i.Trial ? "trial_" : "", b.product.getServerVersionInfo(), "/img?id=", n.clientId];
			return m.join("")
		},
		getServerSmallImageUrl: function(o, p, m) {
			var l = o.httpUrl,
				k = f,
				n = [l, "dwt/dwt_", i.Trial ? "trial_" : "", b.product.getServerVersionInfo(), "/img?id=", o.clientId];
			if (p !== undefined && p !== null) {
				n.push("&index=");
				n.push(p)
			}
			if (m) {
				n.push("&act=");
				n.push(m)
			} else {
				n.push("&width=");
				n.push(k ? "-1" : o._width / 2);
				n.push("&height=");
				n.push(k ? "-1" : o._height / 2)
			}
			return n.join("")
		},
		combineUrl: function(o, l, n) {
			var k = [],
				m = l;
			if (m === undefined || n === undefined) {
				return f
			}
			if (!b.isString(m)) {
				m = String(l)
			}
			if (m.indexOf("http://") == 0) {
				m = m.replace("http://", "");
				k.push("http://")
			} else {
				if (m.indexOf("https://") == 0) {
					m = m.replace("https://", "");
					k.push("https://")
				} else {
					if (m.indexOf("//") == 0) {
						m = m.replace("//", "")
					}
					if (o.IfSSL) {
						k.push("https://")
					} else {
						k.push("http://")
					}
				}
			}
			k.push(m);
			if (m.indexOf(":") < 0) {
				if (o.HTTPPort == "") {
					o.HTTPPort = b.detect.ssl ? 443 : 80
				}
				if ((!b.detect.ssl && o.HTTPPort != 80) || (b.detect.ssl && o.HTTPPort != 443)) {
					k.push(":");
					k.push(o.HTTPPort)
				}
			}
			if (n.indexOf("/") !== 0) {
				k.push("/")
			}
			k.push(n);
			return k.join("")
		},
		httpPostUpload: function(p, k, o, s, w, l, q, r, y) {
			if (!o || o.size <= 0) {
				b.Errors.UploadFileCannotEmpty(p);
				if (b.isFunction(y)) {
					y()
				}
				return f
			}
			var n = p.MaxUploadImageSize,
				u = o.size,
				t = o.type,
				m, v;
			if (u > n && n != -1) {
				b.Errors.UploadExceededMaxSize(p);
				if (b.isFunction(y)) {
					y()
				}
				return f
			}
			if (t === "" || t && t != p.HttpContentTypeFieldValue) {
				var x = o.slice || o.webkitSlice || o.mozSlice;
				m = x.call(o, 0, u, p.HttpContentTypeFieldValue);
				m.name = o.name
			} else {
				m = o
			}
			o = null;
			m.remoteFilename = p.__remoteFilename;
			v = this.httpUploadByBIO(p, k, m, w, s, l, q, r, y);
			m = null;
			return v
		},
		httpPostUploadString: function(o, k, q, n, u, l, p, r, w) {
			var v, m, s, t;
			if (q == "") {
				b.Errors.UploadFileCannotEmpty(o);
				if (b.isFunction(w)) {
					w()
				}
				return f
			}
			m = o.MaxUploadImageSize;
			s = q.length;
			if (s > m && m != -1) {
				b.Errors.UploadExceededMaxSize(o);
				if (b.isFunction(w)) {
					w()
				}
				return f
			}
			v = new Blob([q], {
				type: "text/plain"
			});
			v.name = n;
			t = this.httpUploadByBIO(o, k, v, u, e, l, p, r, w);
			v = null;
			return t
		},
		httpUploadByBIO: function(p, l, k, t, s, m, q, r, v) {
			var w, o, u, n;
			u = p.httpFormFields;
			n = new FormData();
			b.each(u, function(y, x) {
				if (y instanceof Blob) {
					var z = y.name;
					n.append(x, y, z)
				} else {
					n.append(x, y)
				}
			});
			b.bio = new b.BIO({
				action: l,
				data: n,
				async: s
			});
			w = b.bio.get("uploadType");
			if (w) {
				o = w.get("ajaxConfig");
				if (o && o.headers && m) {
					b.mix(o.headers, m)
				}
				if (t >= 0) {
					w.set("blockSize", t)
				}
				if (p.__withCredentials) {
					b.mix(o.xhrFields, {
						withCredentials: true
					})
				}
			}
			p.__HTTPPostResponseString = f;
			b.bio.on(b.BIO.event.SUCCESS, function(x) {
				b.bio = f;
				if (x && b.isString(x.response)) {
					p.__HTTPPostResponseString = x.response
				} else {
					p.__HTTPPostResponseString = ""
				}
				if (b.isFunction(r)) {
					r(p.__HTTPPostResponseString)
				}
			});
			b.bio.on(b.BIO.event.ERROR, function(A) {
				var y = (A && A.canceled),
					B = (A && A.timeout),
					x = f,
					z = f;
				b.bio = f;
				if (A && b.isString(A.response)) {
					p.__HTTPPostResponseString = A.response
				} else {
					p.__HTTPPostResponseString = ""
				}
				if (!y) {
					if (A && A.msg) {
						x = A.msg
					}
					if (A && A.httpStatus) {
						z = A.httpStatus
					}
				}
				b.Errors.UploadError(p, y, x, z);
				if (b.isFunction(v)) {
					v(p.__HTTPPostResponseString)
				}
			});
			if (q) {
				b.bio.on(b.BIO.event.PROGRESS, function(x) {
					delete(x.totalSize);
					delete(x.position);
					var y = (x.total === 0) ? 100 : Math.round(x.loaded * 100 / x.total),
						z = [x.loaded, " / ", x.total].join("");
					p._OnPercentDone([0, y, "", "http"])
				});
				p._OnPercentDone([0, -1, "uploading...", "http"])
			}
			return b.bio.upload(k)
		},
		httpPutImage: function(n, k, m, o, s, l, q) {
			var r = e,
				p = {
					method: "PUT",
					url: k,
					hasContent: e,
					processData: f,
					async: o,
					data: m,
					onSuccess: s,
					onError: function() {
						r = f;
						if (b.isFunction(l)) {
							l()
						}
					},
					onComplete: function() {
						b.bio = f
					},
					beforeSend: function(t) {
						if (b.isFunction(q)) {
							t.upload.addEventListener("progress", function(u) {
								delete(u.totalSize);
								delete(u.position);
								q(u)
							}, f)
						}
					}
				};
			if (n.HTTPUserName != "") {
				p.username = n.HTTPUserName;
				p.password = n.HTTPPassword
			}
			if (!o) {
				b.mix(p, {
					headers: {
						"X-Requested-With": f
					}
				})
			}
			b.bio = b.ajax(p);
			return r
		},
		dialog: f,
		dialogRef: 0,
		showMask: function(l) {
			var k = this;
			b.log("showMask:" + l + "--" + k.dialogRef);
			if (k.dialogRef == 0) {
				b.detect.showMask()
			}
			k.dialogRef++
		},
		hideMask: function(l) {
			var k = this;
			b.log("hideMask:" + l + "--" + k.dialogRef);
			if (k.dialogRef > 1) {
				k.dialogRef--
			} else {
				if (k.dialogRef <= 1) {
					b.detect.hideMask();
					k.dialog = f;
					k.dialogRef = 0
				}
			}
		},
		setBtnCancelVisibleForProgress: function(m, l) {
			var k = this;
			if ((b.cancelFrome == 0 && m.__IfShowProgressBar == e) || (b.cancelFrome != 0 && m.__IfShowCancelDialogWhenImageTransfer == e)) {
				var o = b.one(".dynamsoft-btnCancel"),
					n = o && o.getEL();
				if (n) {
					if (l == f) {
						n.style.display = "none"
					} else {
						n.style.display = ""
					}
				}
			}
		},
		EVENTS: ["OnPostAllTransfers", "OnPostTransfer", "OnPostLoad", "OnPreTransfer", "OnPreAllTransfers", "OnResult", "OnTransferCancelled", "OnTransferError", "OnSourceUIClose", "OnBitmapChanged", "OnGetFilePath", "OnPercentDone"],
		SEND_BACK_EVENTS: ["OnPreAllTransfers", "OnPreTransfer", "OnPostTransfer", "OnGetFilePath", "OnPostLoad"],
		handleEvent: function(n, l) {
			var p = this,
				m = l.result[0],
				k = n._objWS,
				o = f;
			b.each(j.EVENTS, function(s, r) {
				if (l.event === s) {
					var q = ["_", s].join("");
					o = e;
					if (b.isFunction(n[q])) {
						n[q](l.result, l)
					}
					return f
				}
			});
			if (o) {
				b.log("handled event:" + l.event);
				b.each(j.SEND_BACK_EVENTS, function(r, q) {
					if (j.isServerInvalid(n)) {
						return f
					}
					if (l.event === r) {
						b.log("sendback event:" + l.event);
						j.sendData(k, j.getJson(n, l.event, j.makeParams(m), 0), f, e);
						return f
					}
				})
			} else {
				b.each(b.Addon_Events, function(s, r) {
					if (l.event === s) {
						var q = ["_", s].join("");
						o = e;
						if (b.isFunction(n[q])) {
							n[q](l.result)
						}
						return f
					}
				});
				if (o) {
					b.log("handled addon event:" + l.event);
					b.each(b.Addon_Sendback_Events, function(r, q) {
						if (j.isServerInvalid(n)) {
							return f
						}
						if (l.event === r) {
							b.log("sendback addon event:" + l.event);
							j.sendData(k, j.getJson(n, l.event, j.makeParams(m), 0), f, e);
							return f
						}
					})
				}
			}
			return o
		},
		getImageType: function(l) {
			if (l === undefined) {
				return -1
			}
			var k = l.length;
			if (k < 4) {
				return -1
			}
			var m = l.lastIndexOf(".");
			if (m === -1) {
				return -1
			}
			var n = l.slice(m).toLowerCase();
			if (n === ".bmp" || n === ".dib") {
				return EnumDWT_ImageType.IT_BMP
			}
			if (n === ".jpg" || n === ".jpe" || n === ".jpeg" || n === ".jfif") {
				return EnumDWT_ImageType.IT_JPG
			}
			if (n === ".tif" || n === ".tiff") {
				return EnumDWT_ImageType.IT_TIF
			}
			if (n === ".png") {
				return EnumDWT_ImageType.IT_PNG
			}
			if (n === ".pdf") {
				return EnumDWT_ImageType.IT_PDF
			}
			if (n === ".gif") {
				return EnumDWT_ImageType.IT_GIF
			}
			return -1
		},
		addImageFileExt: function(l, k) {
			var m;
			var n = l.substring(l.lastIndexOf(".")).toLowerCase();
			if (n == ".bmp" || n == ".dib" || n == ".jpg" || n == ".jpe" || n == ".jpeg" || n == ".jfif" || n == ".tif" || n == ".tiff" || n == ".png" || n == ".pdf" || n == ".gif") {
				return l
			}
			if (k == EnumDWT_ImageType.IT_BMP) {
				m = [l, ".bmp"].join("")
			} else {
				if (k == EnumDWT_ImageType.IT_JPG) {
					m = [l, ".jpg"].join("")
				} else {
					if (k == EnumDWT_ImageType.IT_PNG) {
						m = [l, ".png"].join("")
					} else {
						if (k == EnumDWT_ImageType.IT_TIF) {
							m = [l, ".tif"].join("")
						} else {
							if (k == EnumDWT_ImageType.IT_PDF) {
								m = [l, ".pdf"].join("")
							} else {
								if (k == EnumDWT_ImageType.IT_GIF) {
									m = [l, ".gif"].join("")
								}
							}
						}
					}
				}
			}
			return m
		},
		autoDiscardBlankImage: function(n, k) {
			if (b.config.bDiscardBlankImage) {
				var l = n.__cIndex;
				if (n.IsBlankImage(l)) {
					n.RemoveImage(l)
				}
				var m = ["Blank Discard (", k, "): ", n.ErrorString].join("");
				if (b.isFunction(n.__OnPrintMsg)) {
					n.__OnPrintMsg(m)
				}
			}
		},
		replaceLocalFilename: function(k) {
			var l;
			if (k === undefined) {
				return ""
			}
			k = String(k);
			l = k.replace(/\\/g, "\\\\");
			if (b.env.bFileSystem) {
				l = decodeURI(l)
			}
			return l
		},
		__SetSelectedImages: function(m, l, k) {
			m.__SelectedImagesCount = k.length;
			if (l === undefined) {
				l = ""
			}
			return m._innerFun("SetSelectedImages", j.makeParams(l, k.join(",")))
		},
		GetImageInfo: function(k, l) {
			var m = k;
			return k._innerFun("GetImageInfo", j.makeParams(l))
		},
		isServerInvalid: function(l) {
			var n = l,
				k, m;
			k = !n.bReady || n._objWS === null;
			m = n.__bMustUpgradeService;
			if (k) {
				b.Errors.Server_Invalid(n)
			} else {
				if (m) {
					b.Errors.MustUpgradeService(n)
				}
			}
			return k || m || n._errorCode == -2208
		},
		isHttpServerInvalid: function(l) {
			var n = l,
				k, m;
			k = !n.bReady || n.httpUrl === null;
			m = n.__bMustUpgradeService;
			if (k) {
				b.Errors.Server_Invalid(n)
			} else {
				if (m) {
					b.Errors.MustUpgradeService(n)
				}
			}
			return k || m || n._errorCode == -2208
		},
		getBlobTypeByImageType: function(l) {
			var k = "application/octet-stream";
			switch (l) {
				case 0:
					k = "image/bmp";
					break;
				case 1:
					k = "image/jpeg";
					break;
				case 2:
					k = "image/tiff";
					break;
				case 3:
					k = "image/png";
					break;
				case 4:
					k = "application/pdf";
					break
			}
			return k
		},
		DEF: function(l, k, p, n) {
			var o;
			if (p !== a && p !== g) {
				o = p
			} else {
				o = {};
				if (p) {
					if (n == c) {
						o.set = function(m) {
							var q = m * 1;
							if (!b.isNumber(q) || isNaN(q)) {
								b.Errors.InvalidValue(l);
								return f
							}
							return l._innerFun(k, j.makeParams(q))
						}
					} else {
						if (n == d) {
							o.set = function(m) {
								if (!b.isBoolean(m)) {
									b.Errors.InvalidValue(l);
									return f
								}
								return l._innerFun(k, j.makeParams(m))
							}
						} else {
							o.set = function(m) {
								if (!b.isString(m)) {
									b.Errors.InvalidValue(l);
									return f
								}
								return l._innerFun(k, j.makeParams(m))
							}
						}
					}
				}
			}
			if (!o.get) {
				o.get = function() {
					return l._innerFun(k)
				}
			}
			Object.defineProperty(l, k, o)
		},
		callbacks: [],
		pushCallback: function(k, p, l) {
			// alert(1111111111)
			var n = {
				method: k,
				callback: p,
				ticks: l
			};
			j.callbacks(n)
		},
		refreshUIRef: 0
	}
})(Dynamsoft.Lib);
(function(c) {
	if (!c.product.bChromeEdition) {
		return
	}
	var e = c.html5.Funs,
		b = e.DEF;

	function d(f) {
		var g = f;
		b(g, "width", {
			get: function() {
				return this._parent._width
			},
			set: function(h) {
				this.SetSize(h, false)
			}
		});
		b(g, "height", {
			get: function() {
				return this._parent._height
			},
			set: function(h) {
				this.SetSize(false, h)
			}
		})
	}

	function a(g, f, k) {
		var m = g,
			j = false,
			l = false,
			i;
		if (m._bNoUI) {
			return false
		}
		if (c.isString(f)) {
			if (f.length > 0) {
				if (f.charAt(f.length - 1) === "%") {
					j = f
				}
			}
		}
		if (!j && f) {
			i = parseInt(f);
			if (i) {
				j = i + "px"
			}
		}
		if (c.isString(k)) {
			if (k.length > 0) {
				if (k.charAt(k.length - 1) === "%") {
					l = k
				}
			}
		}
		if (!l && k) {
			i = parseInt(k);
			if (i) {
				l = i + "px"
			}
		}
		if (j) {
			m._width = j
		}
		if (l) {
			m._height = l
		}
		return e.changeImageUISize(m, j, l)
	}
	c.html5.STwainStyle = function(g) {
		var f = this;
		f._parent = g;
		d(f)
	};
	c.html5.STwainStyle.prototype.SetSize = function(f, g) {
		a(this._parent, f, g)
	}
})(Dynamsoft.Lib);
(function(c) {
	if (!c.product.bChromeEdition) {
		return
	}
	var g = c.html5.Funs,
		b = dynamsoft.dcp,
		d = !1,
		a = !0;
	c.html5.STwain = function(i) {
		var j = this,
			k = i || {},
			l = k.bNoUI;
		j.config = k;
		j.clientId = g.getRandom();
		if (l || !Dynamsoft.WebTwainEnv.IfUseViewer) {
			j._bNoUI = a
		} else {
			j._bNoUI = d
		}
		j._customIP = d;
		j._ssl = c.detect.ssl;
		if (k.customIP) {
			j._customIP = a;
			j._ip = k.ip
		} else {
			j._ip = c.product.ip
		}
		if (k.customIP || b.bEnhancedMode) {
			j._port = k.port
		}
		j.bReady = d;
		j.httpFormFields = {};
		j._objWS = null;
		j.__wsRetry = 0;
		j.curCommand = [];
		j.curCommand_SaveImagesToBytes = [];
		j.__OnInternetTransferPercentage = k.onInternetTransferPercentage || "";
		j.__OnInternetTransferPercentageEx = k.onInternetTransferPercentageEx || "";
		j.__OnWSReady = k.onWSReady || null;
		j.__OnWSReconnect = k.onWSReconnect || null;
		j.__OnWSClose = k.onWSClose || null;
		j.__OnWSMessage = k.onWSMessage || null;
		j.__OnWSError = k.onWSError || null;
		j.__OnPercentDone = k.onPercentDone || "";
		j.__OnPrintMsg = k.onPrintMsg || "";
		j.__OnResult = k.onResult || "";
		j.HTTPPassword = k.HTTPPassword || "";
		j.HTTPPort = k.HTTPPort || (c.detect.ssl ? 443 : 80);
		j.HTTPUserName = k.HTTPUserName || "";
		j.__HTTPPostResponseString = "";
		j.__strHttpContentTypeFieldValue = "application/octet-stream";
		j.__IfShowProgressBar = a;
		j.__IfShowCancelDialogWhenImageTransfer = a;
		j.__cIndex = -1;
		j._HowManyImagesInBuffer = 0;
		j._errorCode = 0;
		j._errorString = "";
		j.__bLoadingImage = d;
		j.__backgroundColor = d;
		j.__addon = {};
		j.__remoteFilename = "RemoteFile";
		j.__sourceName = [];
		j.__defaultSourceName = "";
		j.__sourceCount = 0;
		j.__icaSourceCount = 0;
		j.__SelectedImagesCount = 0;
		j.__serverId = "";
		j.__bConnecting = d;
		j.__bTrial = Dynamsoft.WebTwainEnv.Trial;
		j.__licenseInfo = d;
		j.__httpHeaderMap = d;
		j.__bForceClose = d;
		j.__strProductName = "";
		j.__versionInfo = Dynamsoft.WebTwainEnv.JSVersion;
		j.__bMustUpgradeService = d;
		j.__withCredentials = d;
		j._moduleSize = 1024 * 1024;
		if (dynamsoft.dcp.b64bit) {
			j._segementUploadThreshold = 4 * 1024 * 1024 * 1024
		} else {
			j._segementUploadThreshold = 500 * 1024 * 1024
		}
		j._driverType = EnumDWT_Driver.TWAIN;
		e(j, k)
	};
	var f = c.html5.STwain.prototype;
	f.getInstance = function() {
		return this
	};
	f._OnReady = function(m) {
		var l = this,
			k, j, i = l._objWS;
		if (i === null) {
			return
		}
		if (l._customIP) {
			k = {
				ip: l._ip,
				ssl: l._ssl,
				port: l._port
			}
		} else {
			k = c.detect.urls[c.detect.cUrlIndex];
			k.ip = c.product.ip
		}
		j = c.getHttpUrl(k);
		c.detect.starting = false;
		c.detect.bOK = true;
		l.bReady = true;
		l.__wsRetry = 0;
		i.onopen = null;
		l.httpUrl = j;
		i.onmessage = function(q) {
			var o = q.data,
				y, u;
			if (typeof(o) === "object") {
				y = l.curCommand_SaveImagesToBytes.shift() || {};
				if (y.sFun) {
					y.sFun(o)
				}
				y = null;
				o = null;
				q = null;
				return
			}
			if (l.__OnWSMessage) {
				l.__OnWSMessage(o)
			}
			var p = o.replace(/\0/g, "");
			if (p.indexOf("Exception:") >= 0 || p.indexOf("Error") == 0) {
				var x = o;
				y = l.curCommand.pop() || {};
				u = false;
				c.log(x + "@" + y.cmd);
				if (y.fFun) {
					u = y.fFun(x)
				}
				if (!u && c.isFunction(l.__OnPrintMsg)) {
					l.__OnPrintMsg(x)
				}
				return
			}
			try {
				p = c.parse(p)
			} catch (s) {
				c.log(o)
			}
			if (p.event) {
				g.handleEvent(l, p);
				return
			}
			if (p.cmdId) {
				var w = l.curCommand.length,
					t, n = -1;
				for (t = w - 1; t >= 0; t--) {
					if (l.curCommand[t].cmdId == p.cmdId) {
						n = t;
						y = l.curCommand.splice(n, 1)[0];
						break
					}
				}
				if (n < 0) {
					w = l.curCommand_SaveImagesToBytes.length;
					for (t = w - 1; t >= 0; t--) {
						if (l.curCommand_SaveImagesToBytes[t].cmdId == p.cmdId) {
							n = t;
							y = l.curCommand_SaveImagesToBytes.splice(n, 1)[0];
							break
						}
					}
					if (n < 0) {
						return
					}
				}
			} else {
				y = l.curCommand.pop() || {}
			}
			if (p.exception !== undefined && p.description !== undefined) {
				l._errorCode = p.exception;
				l._errorString = p.description
			} else {
				l._errorCode = 0;
				l._errorString = ""
			}
			if (p.method == "ReadBarcode" || p.method == "OCRRecognize" || (p.request && p.request.method == "OCRProRecognize")) {
				if (y.sFun) {
					y.sFun(p)
				}
				return
			} else {
				if (p.method == "ActiveUI" || p.method == "VersionInfo" || p.method == "SaveSelectedImagesToBase64Binary") {
					if (y.sFun && p.result.length > 0) {
						y.sFun(p.result);
						return
					}
				} else {
					if (p.method == "ShowFileDialog" || p.method == "SplitTiff" || p.method == "SplitPDF" || p.method == "EncodeAsBase64") {
						if (y.sFun) {
							y.sFun(p.result);
							return
						}
					}
				}
			}
			if (p.result && p.result.length && p.result[0] == "1") {
				if (y.sFun) {
					y.sFun()
				}
			} else {
				if (p.exception) {
					u = false;
					if (y.fFun) {
						u = y.fFun(l._errorString)
					}
					if (!u && p.exception && p.exception < 0 && p.exception != -2115) {
						if (c.isFunction(l.__OnPrintMsg)) {
							l.__OnPrintMsg(l._errorString)
						}
					}
				} else {
					var v = ["result:"];
					if (y.fFun) {
						y.fFun(g.__pushElement(v, p.result))
					}
				}
			}
			p = null
		};
		i.onclose = function() {
			l.bReady = false;
			l.__wsRetry = 0;
			c.Errors.Server_Invalid(l);
			if (!l.__bForceClose && !c.page.bUnload && !c.detect.starting) {
				c.detect.aryReconnectSTwains.push(l);
				setTimeout(c._reconnect, 1000);
				c.detect.starting = true
			}
			if (l.__OnWSClose) {
				l.__OnWSClose()
			}
			g.hideMask(true);
			c.detect.bOK = false;
			l.__bForceClose = false
		};
		i.onerror = function(n) {
			l.bReady = false;
			l.__wsRetry = 0;
			c.Errors.Server_Invalid(l);
			c.detect.bOK = false;
			if (!c.page.bUnload && !c.detect.starting) {
				c.detect.aryReconnectSTwains.push(l);
				setTimeout(c._reconnect, 1000);
				c.detect.starting = true
			}
			if (n) {
				c.log("websocket error: " + n)
			}
			if (l.__OnWSError) {
				l.__OnWSError()
			}
			g.hideMask(true)
		};
		if (m) {
			l._innerActiveUI(function(p) {
				var q = l.__serverId,
					n, s;
				if (p && p.length >= 3) {
					n = p[1];
					s = p[2];
					l.__strProductName = s
				} else {
					if (p && p.length >= 2) {
						n = p[1]
					} else {
						c.log("ActiveUI return parameters error.")
					}
				}
				if (s) {
					s = s.toLowerCase();
					if (s.indexOf("trial") > -1) {
						l.__bTrial = true
					} else {
						l.__bTrial = false
					}
				}
				l.__serverId = n;
				c.closeProgress("Reconnect");
				l.SetProductKey(Dynamsoft.WebTwainEnv.ProductKey, true);
				if (q != n) {
					c.Errors.Server_Restarted(l);
					if (c.isFunction(l.__OnWSReconnect)) {
						var o;
						o = c.getWSUrl(l._ip, l._port, l._ssl);
						l.__OnWSReconnect(o, j)
					}
				} else {
					l._errorCode = 0;
					l._errorString = ""
				}
			});
			return
		}
		if (l._ip === "127.0.0.1" || l._ip === "localhost") {
			c.LS.item("DWT_port", k.port);
			c.LS.item("DWT_ssl", k.ssl ? "true" : "false")
		}
		c.attachProperty(l);
		h(l)
	};

	function h(i) {
		var j = i;
		if (Dynamsoft.WebTwainEnv.IfUseViewer) {
			if (!c.detect.viewerScriptLoaded) {
				setTimeout(function() {
					h(j)
				}, 200);
				return
			}
		}
		if (!j._bNoUI) {
			c.html5.ui.init(j, j.config);
			c.html5.ui.addMethods(j);
			c.attachPropertyUI(j)
		} else {
			j._UIManager = new c.UI.ImageUIManager(j, {})
		}
		j._UIManager.OnReady();
		if (!j._bNoUI) {
			j.SetViewMode(1, 1)
		}
		j._innerActiveUI(function(l) {
			var k, n, m = false;
			if (l && l.length >= 3) {
				k = l[1];
				n = l[2];
				j.__strProductName = n
			} else {
				if (l && l.length >= 2) {
					k = l[1];
					m = true
				} else {
					m = true;
					c.log("ActiveUI return parameters error.")
				}
			}
			c.attachAddon(j);
			if (n) {
				n = n.toLowerCase();
				if (n.indexOf("trial") > -1) {
					j.__bTrial = true
				} else {
					j.__bTrial = false
				}
			}
			j.__serverId = k;
			j.__bMustUpgradeService = m;
			if (!m) {
				j.SetProductKey(Dynamsoft.WebTwainEnv.ProductKey, true, function() {
					if (!Dynamsoft.WebTwainEnv.IfDisableDefaultSettings) {
						j._innerFunRaw("LogLevel", g.makeParams(0), true, false, false, function() {}, function() {})
					}
					if (c.isFunction(j.__OnWSReady)) {
						j.__OnWSReady(j)
					}
				})
			} else {
				if (c.isFunction(j.__OnWSReady)) {
					j.__OnWSReady(j)
				}
			}
		})
	}
	f.__unload = function() {
		var j = this,
			i;
		if (j._UIManager) {
			j._UIManager.clear()
		}
		if (j.bReady) {
			i = j._objWS;
			if (i) {
				j.__bForceClose = true;
				i.close();
				j.curCommand.splice(0);
				delete j._objWS
			}
			j.bReady = false
		}
		if (!j._bNoUI) {
			c.html5.ui.unLoad(j)
		}
	};

	function e(j, k) {
		var i = k || {};
		j.__OnAfterOperate = i.onAfterOperate || "";
		j.__OnBeforeOperate = i.onBeforeOperate || "";
		j.__OnOperateStatus = i.onOperateStatus || "";
		j.__OnBitmapChanged = i.onBitmapChanged || "";
		j.__OnGetFilePath = i.onGetFilePath || "";
		j.__OnPreAllTransfers = i.onPreAllTransfers || "";
		j.__OnPreTransfer = i.onPreTransfer || "";
		j.__OnPostLoad = i.onPostLoad || "";
		j.__OnPostTransfer = i.onPostTransfer || "";
		j.__OnPostAllTransfers = i.onPostAllTransfers || "";
		j.__OnSourceUIClose = i.onSourceUIClose || "";
		j.__OnTransferCancelled = i.onTransferCancelled || "";
		j.__OnTransferError = i.onTransferError || "";
		j.__OnInternetTransferPercentage = i.onInternetTransferPercentage || "";
		j.__OnInternetTransferPercentageEx = i.onInternetTransferPercentageEx || ""
	}
})(Dynamsoft.Lib);
(function(b) {
	if (!b.product.bChromeEdition) {
		return
	}
	var n = b.html5.Funs,
		g = !0,
		j = !1,
		a = 0,
		k = 1,
		c = 1,
		e = 2,
		l = n.DEF,
		o = function(p) {
			return p.replace(/(\f|\t|\r|\n)/g, "")
		},
		i = function(r, p, q) {
			if (q == e) {
				b.each(p, function(t, s) {
					l(r, t, {
						get: function() {
							return g
						},
						set: function(u) {
							return g
						}
					})
				})
			}
		},
		h = function(q, p) {
			b.each(p, function(s, r) {
				l(q, s, k, e)
			})
		},
		f = function(q, p) {
			b.each(p, function(s, r) {
				l(q, s, k, c)
			})
		},
		d = function(q, p) {
			b.each(p, function(s, r) {
				l(q, s, a)
			})
		},
		m = function(q, p) {
			b.each(p, function(s, r) {
				l(q, s, k)
			})
		};
	b.DynamicLoadAddonFuns = [];
	b.attachAddon = function(p) {
		b.each(b.DynamicLoadAddonFuns, function(q) {
			if (b.isFunction(q)) {
				q(p)
			}
		})
	};
	b.attachProperty = function(p) {
		var q = p;
		l(q, "ErrorCode", {
			get: function() {
				return q._errorCode
			}
		});
		l(q, "ErrorString", {
			get: function() {
				if (q._errorCode == -2207) {
					if (q.__bMustUpgradeService) {
						b.Errors.MustUpgradeService(q)
					}
				}
				if (q._errorCode != 0) {
					return q._errorString
				}
		
		// function asyncSuccessFunc(result) {
  //           console.log(result.size);
  //           console.log(result);
  //           var date = new Date();
  //           var time = date.getTime();
  //           console.log(DWObject)         
  //           cos.putObject({
  //               Bucket: img_Bucket,
  //               Region: Region,
  //               Key: time + 'test.tif',
  //               Body: result,//arr[index],
  //               onHashProgress: function (progressData) {
  //                   console.log('校验中', JSON.stringify(progressData));
  //               },
  //               onProgress: function (progressData) {
  //                       console.log(progressData);
  //               },
  //           }, function (err, data) {
  //               console.log(data||err)
  //           });

  //       }

  //       function asyncFailureFunc(errorCode, errorString) {
  //           alert("ErrorCode: " + errorCode + "\r" + "ErrorString:" + errorString);
  //       }

  //       function btnUpload_onclick() {
  //           var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
  //           if (DWObject) {
  //               let currentIndex = DWObject.CapCurrentIndex;
  //               let listindex = [];
  //               for (var i = 0; i < DWObject.HowManyImagesInBuffer; i++) {
  //                  listindex.push(i)
  //               }
  //               console.log(currentIndex)
  //               DWObject.ConvertToBlob(listindex, EnumDWT_ImageType.IT_TIF, asyncSuccessFunc,
  //                   asyncFailureFunc);
 
  //           }

  //       }
  //       btnUpload_onclick()
        
				return "Successful."
			}
		});
		l(q, "ProductKey", {
			get: function() {

				return Dynamsoft.WebTwainEnv.ProductKey
			},
			set: function(r) {
				if (!b.isString(r)) {
					b.Errors.InvalidValue(q);
					return j
				}
				return q.SetProductKey(r, false)
			}
		});
		l(q, "ProductName", {
			get: function() {
				return q.__strProductName
			},
			set: function(r) {
				if (!b.isString(r)) {
					b.Errors.InvalidValue(q);
					return j
				}
				q.__strProductName = r;
				return g
			}
		});
		l(q, "VersionInfo", {
			get: function() {
				return q.__versionInfo
			}
		});
		l(q, "DefaultSourceName", {
			get: function() {
				return q.__defaultSourceName
			}
		});
		l(q, "IfShowCancelDialogWhenImageTransfer", {
			get: function() {
				return q.__IfShowCancelDialogWhenImageTransfer
			},
			set: function(r) {
				if (!b.isBoolean(r)) {
					b.Errors.InvalidValue(q);
					return j
				}
				return (q.__IfShowCancelDialogWhenImageTransfer = r)
			}
		});
		l(q, "ImageCaptureDriverType", {
			get: function() {
				return q._driverType
			},
			set: function(r) {
				if (r !== "") {
					var t = r * 1;
					if (t < EnumDWT_Driver.TWAIN || t > EnumDWT_Driver.TWAIN_AND_ICA) {
						b.Errors.ImageCaptureDriverTypeError(q);
						return j
					}
					if (b.env.bWin) {
						q._driverType = EnumDWT_Driver.TWAIN;
						if (t === EnumDWT_Driver.TWAIN) {
							return g
						} else {
							b.Errors.ImageCaptureDriverTypeError(q);
							return j
						}
					} else {
						if (b.env.bLinux) {
							q._driverType = EnumDWT_Driver.SANE;
							if (t === EnumDWT_Driver.SANE) {
								return g
							} else {
								b.Errors.ImageCaptureDriverTypeError(q);
								return j
							}
						} else {
							if (b.env.bMac) {
								if (t === EnumDWT_Driver.TWAIN_AND_ICA) {
									q._driverType = t;
									return g
								} else {
									if (t != EnumDWT_Driver.ICA && t != EnumDWT_Driver.TWAIN) {
										b.Errors.ImageCaptureDriverTypeError(q);
										return j
									}
								}
								q._driverType = t
							}
						}
					}
					q.CloseSourceManager();
					var s = q._innerFun("ImageCaptureDriverType", n.makeParams(t));
					q.OpenSourceManager();
					return s
				}
				b.Errors.ImageCaptureDriverTypeError(q);
				return j
			}
		});
		l(q, "SourceCount", {
			get: function() {
				var r, s, w;
				q.__icaSourceCount = 0;
				if (q._driverType === EnumDWT_Driver.TWAIN_AND_ICA) {
					var u, t, v = "";
					q.CloseSourceManager();
					q._innerFun("ImageCaptureDriverType", n.makeParams(EnumDWT_Driver.ICA));
					q.OpenSourceManager();
					if (q._errorCode != 0 && q._errorCode != -3032) {
						return 0
					}
					u = q._innerFunRaw("GetSourceNames");
					if (q._errorCode != 0) {
						return 0
					}
					if (u.length > 1) {
						w = u[u.length - 1];
						u.splice(u.length - 1, 1);
						if (b.isString(w)) {
							w = b.trim(w);
							w = o(w);
							if (w !== "") {
								v = "ICA-" + w
							}
						}
					} else {
						u = []
					}
					q.CloseSourceManager();
					q._innerFun("ImageCaptureDriverType", n.makeParams(EnumDWT_Driver.TWAIN));
					q.OpenSourceManager();
					if (q._errorCode != 0 && q._errorCode != -3032) {
						return 0
					}
					t = q._innerFunRaw("GetSourceNames");
					if (q._errorCode != 0) {
						return 0
					}
					if (t.length > 1) {
						if (v === "") {
							v = t[t.length - 1]
						}
						t.splice(t.length - 1, 1)
					} else {
						t = []
					}
					s = [];
					if (u.length > 0) {
						b.each(u, function(y) {
							if (b.isString(y)) {
								var x = b.trim(y);
								x = o(x);
								if (x !== "") {
									s.push("ICA-" + x)
								}
							}
						})
					}
					if (t.length > 0) {
						b.each(t, function(y) {
							if (b.isString(y)) {
								var x = b.trim(y);
								x = o(x);
								if (x !== "") {
									s.push(x)
								}
							}
						})
					}
					r = u.length + t.length;
					q.__defaultSourceName = v;
					q.__icaSourceCount = u.length;
					q.__sourceCount = r
				} else {
					s = q._innerFunRaw("GetSourceNames");
					if (q._errorCode != 0) {
						return 0
					}
					q.__defaultSourceName = "";
					if (s.length > 1) {
						w = s[s.length - 1];
						s.splice(s.length - 1, 1);
						if (b.isString(w)) {
							w = o(w);
							q.__defaultSourceName = b.trim(w)
						}
					} else {
						s = []
					}
					r = s.length;
					q.__sourceCount = r;
					if (q._driverType === EnumDWT_Driver.ICA && b.env.bMac) {
						if (r > 0) {
							b.each(s, function(z, y) {
								if (b.isString(z)) {
									var x = b.trim(z);
									x = o(x);
									if (x !== "") {
										s[y] = "ICA-" + x
									}
								}
							});
							if (q.__defaultSourceName !== "") {
								q.__defaultSourceName = "ICA-" + q.__defaultSourceName
							}
						}
					}
				}
				if (r <= 0) {
					s = [];
					q.__sourceName = [];
					q.__defaultSourceName = "";
					q.__sourceCount = 0;
					q.__icaSourceCount = 0;
					return 0
				} else {
					if (r == 1) {
						if (s[0] == "") {
							s = [];
							q.__sourceName = [];
							q.__defaultSourceName = "";
							q.__sourceCount = 0;
							q.__icaSourceCount = 0;
							return 0
						}
					}
				}
				q.__sourceName = s;
				return r
			}
		});
		l(q, "HowManyImagesInBuffer", {
			get: function() {
				return q._HowManyImagesInBuffer
			}
		});
		l(q, "HTTPPostResponseString", {
			get: function() {
				if (q.__HTTPPostResponseString) {
					return q.__HTTPPostResponseString
				} else {
					return ""
				}
			}
		});
		l(q, "FTPPort", {
			get: function() {
				return q._innerFun("FTPPort")
			},
			set: function(r) {
				if (r !== "") {
					var s = r * 1;
					return q._innerFun("FTPPort", n.makeParams(s))
				}
			}
		});
		l(q, "IfShowProgressBar", {
			get: function() {
				return q.__IfShowProgressBar
			},
			set: function(r) {
				if (!b.isBoolean(r)) {
					b.Errors.InvalidValue(q);
					return j
				}
				return (q.__IfShowProgressBar = r)
			}
		});
		l(q, "JPEGQuality", {
			get: function() {
				return q._innerFun("JPEGQuality")
			},
			set: function(r) {
				var s = r * 1;
				if (s >= 100) {
					s = 100
				} else {
					if (s < 0) {
						s = 0
					}
				}
				return q._innerFun("JPEGQuality", n.makeParams(s))
			}
		});
		l(q, "HttpContentTypeFieldValue", {
			get: function() {
				return q.__strHttpContentTypeFieldValue
			},
			set: function(r) {
				q.__strHttpContentTypeFieldValue = r;
				return r
			}
		});
		l(q, "BrokerProcessType", {
			get: function() {
				return 1
			},
			set: function(r) {
				return true
			}
		});
		l(q, "BorderStyle", {
			get: function() {
				return 0
			},
			set: function(r) {
				return false
			}
		});
		l(q, "HttpFieldNameOfUploadedImage", {
			get: function() {
				return q.__remoteFilename
			},
			set: function(r) {
				return (q.__remoteFilename = r)
			}
		});
		l(q, "style", {
			get: function() {
				return q.__style
			}
		});
		l(q, "Addon", {
			get: function() {
				return q.__addon
			}
		});
		l(q, "HTTPRequestswithCredentials", {
			get: function() {
				return q.__withCredentials
			},
			set: function(r) {
				return (q.__withCredentials = r)
			}
		});
		l(q, "CurrentImageIndexInBuffer", {
			get: function() {
				return q.__cIndex
			},
			set: function(r) {
				var s = r * 1;
				if (s >= 0 && s < q._UIManager.count()) {
					if (s != q.__cIndex) {
						q._innerSendCmd("CurrentImageIndexInBuffer", n.makeParams(s))
					}
					q.__cIndex = s;
					if (!q._bNoUI) {
						q._UIManager.Go(q.__cIndex);
						n.__innerRefreshFromUIView(q, q.__cIndex, true)
					}
				}
				return true
			}
		});
		l(q, "SelectedImagesCount", {
			get: function() {
				if (q._UIManager.count() <= 0) {
					return 0
				}
				if (q.__SelectedImagesCount == 0) {
					return 1
				}
				return q.__SelectedImagesCount
			},
			set: function(s) {
				var t, r = s * 1;
				if (q._UIManager.count() <= 0) {
					r = 0
				} else {
					if (r < 1) {
						r = 1
					}
				}
				q.__SelectedImagesCount = r;
				if (!q._bNoUI) {
					q._UIManager.SetSelectedImageCount(r)
				}
				return q._innerFun("SelectedImagesCount", n.makeParams(r))
			}
		});
		q.SetProductKey = function(w, s, r) {
			var u = true,
				z = w,
				y = Dynamsoft.WebTwainEnv,
				x = r,
				A = function() {
					if (Dynamsoft.WebTwainEnv.Trial) {
						return b.License.checkProductKey(q, {
							Core: true
						}, false, true)
					}
				};
			if (!b.isString(z) || z == "******") {
				z = ""
			}
			if (!x) {
				x = function() {}
			}
			y.ProductKey = z;
			q.__licenseInfo = false;
			if (y.Trial && (z == "")) {
				u = false;
				A()
			} else {
				var t = function(v) {
					q._innerFunRaw("ProductKey", n.makeParams(v), s, false, false, function(C) {
						var B = false;
						if (b.isArray(C)) {
							B = C[0]
						} else {
							B = C
						}
						if (b.isArray(C)) {
							if (C.length >= 3 && C[1] === "1" && b.isFunction(b.ShowLicenseDialog)) {
								b.ShowLicenseDialog(C[2], {
									width: 510,
									height: 272,
									bClose: true,
									seconds: 10
								})
							}
						}
						if (!s) {
							u = B
						}
						if (y.IsLicensePromptFriendly) {
							q.GetLicenseInfo(x, A)
						} else {
							x()
						}
					}, function() {
						if (!s) {
							u = false
						}
						A()
					})
				};
				if (b.startsWith(z, "http://") || b.startsWith(z, "https://")) {
					b.ajax({
						method: "GET",
						url: z,
						onSuccess: function(v) {
							t(v)
						}
					})
				} else {
					t(z)
				}
			}
			return u
		};
		m(q, ["Manufacturer", "ProductFamily", "CapDescription", "CapValueString", "FTPPassword", "FTPUserName", "ProxyServer", "PDFAuthor", "PDFCreationDate", "PDFCreator", "PDFKeywords", "PDFModifiedDate", "PDFProducer", "PDFSubject", "PDFTitle", "PDFVersion"]);
		d(q, ["BlankImageCurrentStdDev", "CurrentSourceName", "CapDefaultIndex", "CapDefaultValue", "DataSourceStatus", "Duplex", "ImageBitsPerPixel", "ImageLayoutDocumentNumber", "ImageLayoutFrameBottom", "ImageLayoutFrameLeft", "ImageLayoutFrameNumber", "ImageLayoutFrameRight", "ImageLayoutFrameTop", "ImageLayoutPageNumber", "ImageLength", "ImagePixelType", "ImageWidth", "ImageXResolution", "ImageYResolution", "MagData", "MagType", "PendingXfers", "IfFeederLoaded", "IfPaperDetectable", "IfUIControllable"]);
		h(q, ["AllowPluginAuthentication", "IfAllowLocalCache", "IfAppendImage", "IfAutoBright", "IfAutoDiscardBlankpages", "IfAutoFeed", "IfAutomaticBorderDetection", "IfAutomaticDeskew", "IfAutoScan", "IfDisableSourceAfterAcquire", "IfDuplexEnabled", "IfFeederEnabled", "IfModalUI", "IfPASVMode", "IfScanInNewThread", "IfShowFileDialog", "IfShowUI", "IfShowIndicator", "IfSSL", "IfTiffMultiPage", "IfUseTwainDSM", "_AutoCropMethod"]);
		f(q, ["BitDepth", "BlankImageMaxStdDev", "BlankImageThreshold", "Brightness", "BufferMemoryLimit", "Capability", "CapCurrentIndex", "CapCurrentValue", "CapMaxValue", "CapMinValue", "CapNumItems", "CapStepSize", "CapType", "CapValue", "CapValueType", "Contrast", "LogLevel", "MaxImagesInBuffer", "MaxInternetTransferThreads", "MaxUploadImageSize", "PageSize", "PixelFlavor", "PixelType", "PDFCompressionType", "Resolution", "TransferMode", "TIFFCompressionType", "Unit", "XferCount"]);
		i(q, ["AsyncMode", "EnableInteractiveZoom", "IfThrowException", "IfOpenImageWithGDIPlus", "ImageEditorIfEnableEnumerator", "ImageEditorIfReadonly", "ImageEditorIfModal", "ImageEditorWindowTitle", "IfShowPrintUI", "VScrollBar"], e)
	};
	if (!b.attachPropertyUI) {
		b.attachPropertyUI = function() {}
	}
})(Dynamsoft.Lib);
(function(a) {
	if (!a.product.bChromeEdition) {
		return
	}
	var c = a.html5.STwain,
		b = c.prototype,
		d = a.html5.Funs;
	b.__innerLoadImage = function(e, j, i, h, g, f) {
		var k = this;
		if (!a.License.checkProductKey(k, {
				Core: true
			})) {
			if (a.isFunction(f)) {
				f(k._errorCode, k._errorString)
			}
			return false
		}
		if (!a.License.checkPDFProductKeyWhenNeeds(k, i)) {
			if (a.isFunction(f)) {
				f(k._errorCode, k._errorString)
			}
			return false
		}
		if (a.isFunction(g)) {
			return k.__innerAcquireImage(e, j, h, g, f)
		} else {
			return k.__innerLoadImageFun(e, j)
		}
	};
	b.__innerLoadImageFun = function(e, g) {
		var h = this;
		if (d.isServerInvalid(h)) {
			return false
		}
		var f = h._innerFun(e, g);
		if (f) {
			h._HowManyImagesInBuffer = h._innerFun("HowManyImagesInBuffer");
			h.__cIndex = h._innerFun("CurrentImageIndexInBuffer")
		}
		if (h.__cIndex >= 0) {
			h.OnRefreshUI(h.__cIndex)
		}
		return f
	};
	b.__innerAcquireImage = function(f, k, i, h, g) {
		var l = this,
			e = (f == "LoadImage" || f == "LoadImageEx" || f == "GenerateURLForUploadData");
		var j = function(m) {
			l.__bLoadingImage = false;
			var n = l.__cIndex;
			if (n >= 0) {
				l.OnRefreshUI(n)
			}
			if (a.isFunction(g)) {
				g(l.ErrorCode, l.ErrorString)
			}
			if (e) {
				Dynamsoft.Lib.closeProgress(f)
			} else {
				d.hideMask(f)
			}
			if (m) {
				Dynamsoft.Lib.log(m)
			}
			return false
		};
		if (d.isServerInvalid(l)) {
			j();
			return false
		}
		if (e) {
			Dynamsoft.Lib.showProgress(l, f, false)
		} else {
			d.showMask(f)
		}
		l._innerSend(f, k, true, function() {
			l.__bLoadingImage = false;
			if (e) {
				Dynamsoft.Lib.closeProgress(f);
				if (!l._bNoUI) {
					var m = l._UIManager.GetCurrentImageIndex();
					if (m >= 0) {
						l.OnRefreshUI(m)
					}
				}
			} else {
				d.hideMask(f)
			}
			if (a.isFunction(h)) {
				h()
			}
		}, j);
		return true
	};
	b.__innerSaveImage = function(e, g, f, h) {
		return this.__innerProgressFunction(e, g, false, f, h)
	};
	b.__innerFTPDownloadDirectly = function(e, h, g, f, j) {
		var i = this;
		if (!a.License.checkProductKey(i, {
				Core: true
			})) {
			if (a.isFunction(j)) {
				j(i._errorCode, i._errorString)
			}
			return false
		}
		if (!a.License.checkPDFProductKeyWhenNeeds(i, g)) {
			if (a.isFunction(j)) {
				j(i._errorCode, i._errorString)
			}
			return false
		}
		a.cancelFrome = 4;
		return i.__innerProgressFunction(e, h, true, f, j)
	};
	b.__innerFTPDownload = function(e, j, i, h, l) {
		var k = this,
			g;
		if (!a.License.checkProductKey(k, {
				Core: true
			})) {
			if (a.isFunction(l)) {
				l(k._errorCode, k._errorString)
			}
			return false
		}
		if (!a.License.checkPDFProductKeyWhenNeeds(k, i)) {
			if (a.isFunction(l)) {
				l(k._errorCode, k._errorString)
			}
			return false
		}
		a.cancelFrome = 4;
		if (a.isFunction(l)) {
			return k.__innerProgressFunction(e, j, true, function() {
				var m = k.__cIndex;
				if (m >= 0) {
					k.OnRefreshUI(m)
				}
				if (a.isFunction(h)) {
					h()
				}
			}, l)
		} else {
			g = k._innerFun(e, j);
			var f = k.__cIndex;
			if (f >= 0) {
				k.OnRefreshUI(f)
			}
			return g
		}
	};
	b.__innerFTPUpload = function(e, g, f, h) {
		Dynamsoft.Lib.cancelFrome = 3;
		return this.__innerProgressFunction(e, g, true, f, h)
	};
	b.__innerProgressFunction = function(e, i, f, g, k) {
		var j = this;
		if (!a.isFunction(k)) {
			return this._innerFun(e, i)
		}
		var h = function(l) {
			if (a.isFunction(k)) {
				k(j.ErrorCode, j.ErrorString)
			}
			Dynamsoft.Lib.closeProgress(e);
			if (l) {
				Dynamsoft.Lib.log(l)
			}
			return true
		};
		Dynamsoft.Lib.showProgress(j, e, f);
		return this._innerSend(e, i, true, function() {
			Dynamsoft.Lib.closeProgress(e);
			if (a.isFunction(g)) {
				g()
			}
		}, h)
	};
	b.__innerGetBarcodeResultAsyncFunction = function(f) {
		var e = Dynamsoft.Lib.NewBarcodeResult();
		if (f) {
			e._errorCode = f.exception;
			e._errorString = f.description;
			e._resultlist = f.result;
			e._Count = f.result.length
		}
		return e
	};
	b.__innerGetOCRResultAsyncFunction = function(f) {
		var e = Dynamsoft.Lib.NewOCRResult(this);
		if (f) {
			e._errorCode = f.exception;
			e._errorString = f.description;
			e._resultlist = f.result
		}
		return e
	};
	b.__innerGetOCRProResultAsyncFunction = function(f) {
		var e = Dynamsoft.Lib.NewOCRProResult(this);
		if (f) {
			e._errorCode = f.code;
			e._errorString = f.message;
			e._request = f.request;
			e._errorlist = f.errorList;
			e._ocrTotalCount = f.ocrTotalCount;
			e._alreadyOCRCount = f.alreadyOCRCount;
			e._resultlist = f.resultDetail
		}
		return e
	};
	b._innerSendCmd = function(e, f) {
		var g = this;
		if (d.isHttpServerInvalid(g)) {
			return false
		}
		g._innerFunRaw(e, f, true, false, false)
	};
	b._innerFun = function(e, g) {
		var h = this,
			f;
		if (d.isHttpServerInvalid(h)) {
			return false
		}
		f = h._innerFunRaw(e, g, false, false, false);
		if (Dynamsoft.Lib.isArray(f)) {
			return f[0]
		}
		return f
	};
	b._innerFunRaw = function(h, g, o, i, q, r, f) {
		var l = this,
			e, s, k;
		if (d.isHttpServerInvalid(l)) {
			return false
		}
		l._errorCode = 0;
		l._errorString = "";
		e = [l.httpUrl, "f/", h, "?", d.getRandom()].join("");
		s = d.getJson(l, h, g, 0);
		// console.log(e)
		// console.log('ppppppppppppppppp')
		// console.log(l.httpUrl+ "f/"+h+ "?"+ d.getRandom())
		var n, j = false;
		if (o) {
			j = true
		} else {}
		k = {
			method: "POST",
			url: e,
			data: s,
			async: j,
			onSuccess: function(t, p, m) {
				var u = false;
				try {
					if (a.isString(t) && m.getResponseHeader("content-type") === "text/json") {
						u = a.parse(t)
					} else {
						u = t
					}
				} catch (v) {}
				if (u) {
					if (u.exception !== undefined && u.description !== undefined) {
						l._errorCode = u.exception;
						l._errorString = u.description
					} else {
						l._errorCode = 0;
						l._errorString = ""
					}
					if (q) {
						n = u
					} else {
						n = u.result
					}
				} else {
					Dynamsoft.Lib.Errors.InvalidResultFormat(l);
					n = ""
				}
				if (a.isFunction(r)) {
					r(n)
				}
			},
			onError: function() {
				Dynamsoft.Lib.Errors.NetworkError(l);
				n = "";
				if (a.isFunction(f)) {
					f()
				}
			}
		};
		if (i) {
			if (Dynamsoft.Lib.env.bIE) {
				k.dataType = "arraybuffer";
				k.onSuccess = function(z, B, u) {
					var p, w, A = false;
					if (u.responseHeadersString) {
						var t = u.responseHeadersString;
						if (t.indexOf("text/json") != -1) {
							A = true
						}
					}
					p = u.responseData;
					l._errorCode = 0;
					l._errorString = "";
					n = false;
					if (p) {
						w = new Uint8Array(p);
						if (A) {
							p = String.fromCharCode.apply(null, w)
						} else {
							n = new Blob([w], {
								type: l.__strHttpContentTypeFieldValue
							})
						}
					}
					if (!p || A) {
						var y, x, m = false;
						if (A) {
							y = p
						} else {
							y = u.responseText
						}
						x = y.length;
						if (x > 0) {
							if (y.charAt(0) == "{") {
								try {
									m = a.parse(y);
									A = true
								} catch (v) {
									Dynamsoft.Lib.log(y)
								}
							}
							if (A) {
								if (m.exception !== undefined && m.description !== undefined) {
									l._errorCode = m.exception;
									l._errorString = m.description;
									n = false
								} else {
									n = true
								}
							} else {
								w = new Uint8Array(y);
								n = new Blob([w], {
									type: l.__strHttpContentTypeFieldValue
								})
							}
						}
					}
				}
			} else {
				if (!j) {
					k.contentType = "text/plain; charset=x-user-defined";
					k.mimeType = "text/plain; charset=x-user-defined"
				}
				k.onSuccess = function(y, A, p) {
					var w, t, x;
					w = p.responseText;
					t = w.length;
					l._errorCode = 0;
					l._errorString = "";
					if (t > 0) {
						var z = false,
							m;
						if (w.charAt(0) == "{") {
							try {
								m = a.parse(w);
								z = true
							} catch (u) {
								Dynamsoft.Lib.log(w)
							}
						}
						if (z) {
							if (m.exception !== undefined && m.description !== undefined) {
								l._errorCode = m.exception;
								l._errorString = m.description;
								n = false
							} else {
								n = true
							}
						} else {
							x = new Uint8Array(t);
							for (var v = 0; v < t; v++) {
								x[v] = w.charCodeAt(v)
							}
							n = new Blob([x], {
								type: l.__strHttpContentTypeFieldValue
							})
						}
					} else {
						n = ""
					}
				}
			}
		}
		if (!j) {
			a.mix(k, {
				headers: {
					"X-Requested-With": false
				}
			})
		}
		if (a.env.bFileSystem) {
			k.crossDomain = false
		}
		a.ajax(k);
		if (j) {
			return true
		}
		return n
	};
	b._innerSend = function(i, f, h, k, o) {
		var l = this,
			g = l._objWS,
			q = false,
			j = false,
			e = false;
		if (i != "ActiveUI") {
			e = d.isServerInvalid(l)
		}
		if (e) {
			if (a.isFunction(o)) {
				o()
			}
			return true
		}
		if (a.isFunction(k)) {
			j = k
		}
		if (a.isFunction(o)) {
			q = o
		}
		var r = d.generateCmdId(),
			n;
		if (i == "SaveSelectedImagesToBytes") {
			l.curCommand_SaveImagesToBytes.push({
				cmdId: r,
				sFun: j,
				fFun: q,
				objWS: g,
				json: d.getJson(l, i, f, r),
				binary: h
			});
			if (l.curCommand_SaveImagesToBytes.length == 1) {
				n = d.sendData(g, d.getJson(l, i, f, r), false, h)
			} else {
				n = true
			}
		} else {
			l.curCommand.push({
				cmd: i,
				cmdId: r,
				sFun: j,
				fFun: q
			});
			n = d.sendData(g, d.getJson(l, i, f, r), false, h)
		}
		return n
	};
	b.__SaveSelectedImagesToBytes = function(j, i, g, k, n, f) {
		var l = this;
		if (k) {
			return l.__SaveSelectedImagesToBytesByBlock(j, i, g, n, f)
		} else {
			if (i <= 0 && g <= 0) {
				if (a.isFunction(f)) {
					f()
				}
				return false
			}
			var m = false,
				h = true,
				e = l._innerFunRaw("SaveSelectedImagesToBytes", d.makeParams(j, -2, "", i, g), m, h, false);
			if (l.ErrorCode == 0) {
				return n(e, i)
			} else {
				if (a.isFunction(f)) {
					f()
				}
				return false
			}
		}
	};
	b.__GetSelectedImagesLength = function(g, j, i, l, e) {
		var h = this,
			k = false,
			m;
		var f = false,
			n = false;
		m = h._innerFunRaw("SaveSelectedImagesToBytes", d.makeParams(g, j, "", 0, 0), i, f, n, function(o) {
			if (h.ErrorCode == 0) {
				if (a.isFunction(l)) {
					if (a.isArray(o)) {
						k = l(o[0])
					} else {
						k = l(o)
					}
				}
				return true
			} else {
				if (a.isFunction(e)) {
					e()
				}
				return false
			}
		}, e);
		if (i) {
			return m
		} else {
			return k
		}
	};
	b.__SaveSelectedImagesToBytesByBlock = function(g, h, f, e, j) {
		var i = this;
		if (h <= 0 && f <= 0) {
			if (a.isFunction(j)) {
				j()
			}
			return false
		}
		return i._innerSend("SaveSelectedImagesToBytes", d.makeParams(g, -2, "", h, f), true, function(k) {
			if (a.isFunction(e)) {
				e(k, h)
			}
		}, j)
	};
	b.__SaveLocalFileToBytes = function(g, e, i, l) {
		var k = this;
		if (e) {
			if (Dynamsoft.Lib.isArray(a._aryUploadDirectlyCmd)) {
				a._aryUploadDirectlyCmd.push({
					_this: k,
					localfilePath: g,
					asyncSuccessFunc: i,
					asyncFailureFunc: l
				});
				return true
			} else {
				l();
				return false
			}
		} else {
			var j = false,
				h = true,
				f = k._innerFunRaw("SaveSelectedImagesToBytes", d.makeParams(0, 0, g), j, h, false);
			if (k.ErrorCode == 0) {
				return i(f)
			} else {
				l();
				return false
			}
		}
	};
	b.__LoadImageFromBytes = function(s, k, o, l, r, h, i, u) {
		var n = this,
			j = "LoadImageFromBytes",
			x = k || 3,
			q = s.size || s.length,
			y = s.name || "unknown",
			g, e = d.isServerInvalid(n),
			w = true;
		if (!isNaN(i) && i >= 0 && !isNaN(u) && u > 0) {
			g = ["[", q, ",", 0, ",", x, ',"', o, '", ', i, ",", u, "]"].join("")
		} else {
			g = ["[", q, ",", 0, ",", x, ',"', o, '"]'].join("")
		}
		var v = function() {
			Dynamsoft.Lib.closeProgress(j);
			n.__bLoadingImage = false;
			if (w) {
				var f = n.__cIndex;
				if (f >= 0) {
					n.OnRefreshUI(f)
				}
			}
			if (a.isFunction(h)) {
				h(n._errorCode, n._errorString, y)
			}
			return false
		};
		if (e) {
			w = false;
			return v()
		}
		if (!a.License.checkProductKey(n, {
				Core: true
			})) {
			w = false;
			return v()
		}
		if (!a.License.checkPDFProductKeyWhenNeeds(n, k)) {
			w = false;
			return v()
		}
		if (q === 0) {
			Dynamsoft.Lib.Errors.ImageFileLengthCannotZero(n);
			w = false;
			return v()
		}
		d.setBtnCancelVisibleForProgress(n, false);
		return this._innerSendBlob(j, g, s, l, function() {
			if (i + q == u || u <= 0 || isNaN(u)) {
				Dynamsoft.Lib.closeProgress(j)
			}
			n.__bLoadingImage = false;
			if (!n._bNoUI) {
				var f = n._UIManager.GetCurrentImageIndex();
				if (l && f >= 0) {
					n.OnRefreshUI(f)
				}
			}
			if (a.isFunction(r)) {
				r(y)
			}
			return true
		}, v)
	};
	b._innerSendBlob = function(h, f, r, k, j, q) {
		var n = this,
			g = n._objWS,
			i = false,
			s = false;
		if (d.isServerInvalid(n)) {
			if (a.isFunction(q)) {
				q()
			}
			return false
		}
		if (a.isFunction(j)) {
			i = j
		}
		if (a.isFunction(q)) {
			s = q
		}
		if (k) {
			var t = d.generateCmdId();
			n.curCommand.push({
				cmd: h,
				cmdId: t,
				sFun: i,
				fFun: s
			});
			d.sendData(g, d.getJson(n, h, f, t), r, true)
		} else {
			var o, e, u, l;
			if (d.isHttpServerInvalid(n)) {
				return false
			}
			n._errorCode = 0;
			n._errorString = "";
			e = [n.httpUrl, "f/", h, "?", d.getRandom()].join("");
			u = d.getJson(n, h, f, 0);
			u += "\r\n\r\n";
			u += Dynamsoft.Lib.base64.encodeArray(r);
			l = {
				method: "post",
				url: e,
				processData: false,
				data: u,
				async: false,
				onSuccess: function(v, p, m) {
					var w = false;
					try {
						if (a.isString(v) && m.getResponseHeader("content-type") === "text/json") {
							w = a.parse(v)
						} else {
							w = v
						}
					} catch (x) {}
					if (w !== undefined && w !== null) {
						if (w.exception !== undefined && w.description !== undefined) {
							n._errorCode = w.exception;
							n._errorString = w.description
						} else {
							n._errorCode = 0;
							n._errorString = ""
						}
						o = w.result
					} else {
						Dynamsoft.Lib.Errors.InvalidResultFormat(n);
						o = ""
					}
				},
				onError: function() {
					Dynamsoft.Lib.Errors.NetworkError(n);
					o = ""
				}
			};
			a.mix(l, {
				headers: {
					"X-Requested-With": false
				}
			});
			if (a.env.bFileSystem) {
				l.crossDomain = false
			}
			a.ajax(l);
			if (n._errorCode == 0) {
				if (a.isFunction(i)) {
					i()
				}
			} else {
				if (a.isFunction(s)) {
					s()
				}
			}
			return o
		}
	};
	b._innerActiveUI = function(f, e) {
		this._innerSend("ActiveUI", d.makeParams(Dynamsoft.Lib.env.WSVersion, Dynamsoft.Lib.env.WSSession), false, f, e)
	}
})(Dynamsoft.Lib);
(function(b) {
	if (!b.product.bChromeEdition) {
		return
	}
	var e = b.html5.STwain,
		d = e.prototype,
		f = b.html5.Funs,
		c = Dynamsoft.WebTwainEnv,
		a = ["OnPreAllTransfers", "OnPreTransfer", "OnPostTransfer"];
	d.LoadDibFromClipboard = function(i, g) {
		var h = -1;
		return this.__innerLoadImage("LoadDibFromClipboard", null, h, true, i, g)
	};
	d.LoadImage = function(h, k, g) {
		var i = f.replaceLocalFilename(h),
			j = b.html5.Funs.getImageType(i);
		return this.__innerLoadImage("LoadImage", f.makeParams(i), j, true, k, g)
	};
	d.LoadImageEx = function(i, j, l, h) {
		var k = f.replaceLocalFilename(i),
			g = j;
		if (g == EnumDWT_ImageType.IT_ALL) {
			g = -1
		}
		return this.__innerLoadImage("LoadImageEx", f.makeParams(k, g), g, true, l, h)
	};
	d.EnableSource = function(h, i, g) {
		return this.AcquireImage(h, i, g)
	};
	d.AcquireImage = function(p, o, n) {
		var k = this,
			m = null,
			g = null,
			q, l;
		if (b.isUndefined(n) && (b.isFunction(p) && b.isFunction(o) || b.isFunction(p) && b.isUndefined(o) || b.isFunction(p) && o == null || p == null && b.isFunction(o))) {
			l = {};
			if (b.isFunction(p)) {
				m = p
			}
			if (b.isFunction(o)) {
				g = o
			}
		} else {
			if (b.isUndefined(p) || p == null) {
				l = {}
			} else {
				l = p
			}
			if (b.isFunction(o)) {
				m = o
			}
			if (b.isFunction(n)) {
				g = n
			}
		}
		if (f.isServerInvalid(k)) {
			if (b.isFunction(g)) {
				g(k._errorCode, k._errorString)
			}
			return false
		}
		if (!b.License.checkProductKey(k, {
				Core: true
			})) {
			if (b.isFunction(g)) {
				g(k._errorCode, k._errorString)
			}
			return false
		}
		var j = 0;
		for (var h = 0; h < a.length; h++) {
			var r = ["__", a[h]].join("");
			if (b.isFunction(k[r])) {
				j = j | (1 << h)
			}
		}
		l.EnableEvents = j;
		q = ["[", b.stringify(l), "]"].join("");
		return k.__innerAcquireImage("AcquireImage", q, false, m, g)
	};
	d.CancelAllPendingTransfers = function() {
		return this._innerFun("CancelAllPendingTransfers")
	};
	d.CloseSource = function() {
		return this._innerFun("CloseSource")
	};
	d.CloseSourceManager = function() {
		return this._innerFun("CloseSourceManager")
	};
	d.DisableSource = function() {
		return this._innerFun("DisableSource")
	};
	d.FeedPage = function() {
		return this._innerFun("FeedPage")
	};
	d.GetDeviceType = function() {
		return this._innerFun("GetDeviceType")
	};
	d.GetSourceNameItems = d.SourceNameItems = function(g) {
		if (this.__sourceCount < 0) {
			this.SourceCount = 0
		}
		if (g < this.__sourceCount && g >= 0) {
			return this.__sourceName[g]
		} else {
			return ""
		}
	};
	d.GetSourceNames = function() {
		var h = this,
			g = h.SourceCount;
		return h.__sourceName
	};
	d.GetSourceType = function(g) {
		var j = this,
			h = g * 1;
		if (j._driverType === EnumDWT_Driver.TWAIN_AND_ICA) {
			if (h >= j.__icaSourceCount) {
				h -= j.__icaSourceCount;
				j.CloseSourceManager();
				j._innerFun("ImageCaptureDriverType", f.makeParams(EnumDWT_Driver.TWAIN));
				j.OpenSourceManager()
			} else {
				j.CloseSourceManager();
				j._innerFun("ImageCaptureDriverType", f.makeParams(EnumDWT_Driver.ICA));
				j.OpenSourceManager()
			}
		}
		return j._innerFun("GetSourceType", f.makeParams(h))
	};
	d.OpenSource = function() {
		return this._innerFun("OpenSource")
	};
	d.OpenSourceManager = function() {
		return this._innerFun("OpenSourceManager")
	};
	d.ResetImageLayout = function() {
		return this._innerFun("ResetImageLayout")
	};
	d.RewindPage = function() {
		return this._innerFun("RewindPage")
	};
	d.SelectSource = function(q, k) {
		var m = this,
			l, p = m.SourceCount;
		if (b.isUndefined(q)) {
			return m._innerFun("SelectSource")
		} else {
			if (p > 0) {
				if (!b.dialog.selectsourcedlg) {
					var o = document.createElement("dialog"),
						h, j = -1;
					o.className = "dynamsoft-dialog-selectsource";
					o.style.top = "20%";
					if (Dynamsoft.Lib.env.bIE | Dynamsoft.Lib.env.bEdge) {
						o.style.width = "300px"
					}
					o.setAttribute("closed", "closed");
					h = [];
					h.push('<ul id="dynamsoft-dialog-selectsource-sourcelist-ul">');
					for (l = 0; l < m.__sourceCount; l++) {
						var g = "";
						if ((m.CurrentSourceName == "" && l == 0) || m.CurrentSourceName == m.__sourceName[l]) {
							g = 'class="dynamsoft-dialog-selectsource-sourcelist-li-selected"';
							j = l
						}
						h.push("<li " + g + ' onclick="dynamsoft_dialog_selectsource_li_click(this);" sourceindex=' + l + ">" + m.__sourceName[l] + "</li>")
					}
					h.push("</ul>");
					h = h.join("");
					var n = ["<p>", c.CustomizableDisplayInfo.dialogText.selectSource[0], "</p>", '<div id="dynamsoft-dialog-selectsource-sourcelist">', h, "</div>", '<div id="dynamsoft-dialog-selectsource-buttons"><input type="button" value="', c.CustomizableDisplayInfo.dialogText.selectSource[1], '" onclick="dynamsoft_dialog_selectsource_select()">', '<input type="button" value="', c.CustomizableDisplayInfo.dialogText.selectSource[2], '" onclick="dynamsoft_dialog_selectsource_cancel()"></div>'].join("");
					o.innerHTML = n;
					b.dialog.selectsourcedlg = o;
					document.body.appendChild(b.dialog.selectsourcedlg);
					b.get("dynamsoft-dialog-selectsource-sourcelist-ul").setAttribute("selectedSourceIndex", j.toString());
					b.dialog.setup(b.dialog.selectsourcedlg)
				}
				b.dialog.selectsourcedlg.showModal()
			} else {
				alert(c.CustomizableDisplayInfo.dialogText.selectSource[3])
			}
		}
		window.dynamsoft_dialog_selectsource_li_click = function(u) {
			var s = u.attributes.sourceindex.value,
				r = u.parentElement.children;
			for (var t = 0; t < r.length; t++) {
				r[t].className = ""
			}
			u.className = "dynamsoft-dialog-selectsource-sourcelist-li-selected";
			b.get("dynamsoft-dialog-selectsource-sourcelist-ul").setAttribute("selectedSourceIndex", s)
		};
		window.dynamsoft_dialog_selectsource_select = function() {
			var i = parseInt(Dynamsoft.Lib.get("dynamsoft-dialog-selectsource-sourcelist-ul").attributes.selectedSourceIndex.value);
			m.SelectSourceByIndex(i);
			b.dialog.selectsourcedlg.close();
			document.body.removeChild(b.dialog.selectsourcedlg);
			b.dialog.selectsourcedlg = false;
			if (b.isFunction(q)) {
				q(i)
			}
		};
		window.dynamsoft_dialog_selectsource_cancel = function() {
			b.dialog.selectsourcedlg.close();
			document.body.removeChild(b.dialog.selectsourcedlg);
			b.dialog.selectsourcedlg = false;
			if (b.isFunction(k)) {
				k()
			}
		}
	};
	d.SelectSourceByIndex = function(g) {
		var i = this,
			h = g * 1;
		if (i._driverType === EnumDWT_Driver.TWAIN_AND_ICA) {
			if (h >= i.__icaSourceCount) {
				h -= i.__icaSourceCount;
				i.CloseSourceManager();
				i._innerFun("ImageCaptureDriverType", f.makeParams(EnumDWT_Driver.TWAIN));
				i.OpenSourceManager()
			} else {
				i.CloseSourceManager();
				i._innerFun("ImageCaptureDriverType", f.makeParams(EnumDWT_Driver.ICA));
				i.OpenSourceManager()
			}
		}
		return i._innerFun("SelectSourceByIndex", f.makeParams(h))
	};
	d.SetFileXferInfo = function(g, i) {
		var h = f.replaceLocalFilename(g);
		return this._innerFun("SetFileXferInfo", f.makeParams(h, i))
	};
	d.SetImageLayout = function(j, i, h, g) {
		return this._innerFun("SetImageLayout", f.makeParams(j, i, h, g))
	};
	d.CapGet = function() {
		return this._innerFun("CapGet")
	};
	d.CapGetCurrent = function() {
		return this._innerFun("CapGetCurrent")
	};
	d.CapGetDefault = function() {
		return this._innerFun("CapGetDefault")
	};
	d.CapGetFrameBottom = function(g) {
		return this._innerFun("CapGetFrameBottom", f.makeParams(g))
	};
	d.CapGetFrameLeft = function(g) {
		return this._innerFun("CapGetFrameLeft", f.makeParams(g))
	};
	d.CapGetFrameRight = function(g) {
		return this._innerFun("CapGetFrameRight", f.makeParams(g))
	};
	d.CapGetFrameTop = function(g) {
		return this._innerFun("CapGetFrameTop", f.makeParams(g))
	};
	d.CapGetHelp = function() {
		return this._innerFun("CapGetHelp")
	};
	d.CapGetLabel = function() {
		return this._innerFun("CapGetLabel")
	};
	d.CapGetLabels = function() {
		return this._innerFun("CapGetLabels")
	};
	d.CapIfSupported = function(g) {
		return this._innerFun("CapIfSupported", f.makeParams(g))
	};
	d.CapReset = function() {
		return this._innerFun("CapReset")
	};
	d.CapSet = function() {
		return this._innerFun("CapSet")
	};
	d.CapSetFrame = function(h, k, j, i, g) {
		return this._innerFun("CapSetFrame", f.makeParams(h, k, j, i, g))
	};
	d.GetCapItems = function(g) {
		return this._innerFun("GetCapItems", f.makeParams(g))
	};
	d.GetCapItemsString = function(g) {
		return this._innerFun("GetCapItemsString", f.makeParams(g))
	};
	d.SetCapItems = function(h, g) {
		return this._innerFun("SetCapItems", f.makeParams(h, g))
	};
	d.SetCapItemsString = function(h, g) {
		return this._innerFun("SetCapItemsString", f.makeParams(h, g))
	};
	d.GenerateURLForUploadData = function(j, h, g, i) {
		if (b.isFunction(g) && b.isFunction(i)) {
			dynamsoft.lib.asyncQueue.pushToDo(this, "_asyncGenerateURLForUploadData", arguments);
			return true
		} else {
			return this._syncGenerateURLForUploadData(j, h)
		}
	};
	d._syncGenerateURLForUploadData = function(p, k, q, o) {
		var l = this,
			n = k,
			h = function() {
				if (b.isFunction(o)) {
					o(l.ErrorCode, l.ErrorString, l.__HTTPPostResponseString)
				}
				return ""
			},
			m;
		if (!l._checkIndices(p) && p != -1) {
			h();
			return ""
		}
		if (n == EnumDWT_ImageType.IT_BMP || n == EnumDWT_ImageType.IT_JPG || n == EnumDWT_ImageType.IT_PNG || n == EnumDWT_ImageType.IT_GIF) {
			if (p == -1 || p.length > 1) {
				b.Errors.UploadIndexMoreThanOne(l);
				h();
				return ""
			}
		} else {
			if (n == EnumDWT_ImageType.IT_TIF || n == EnumDWT_ImageType.IT_PDF) {} else {
				b.Errors.InvalidImageType(l);
				h();
				return ""
			}
		}
		m = f.__SetSelectedImages(l, "", p);
		if (!m) {
			h();
			return ""
		}
		var i = false,
			j = dynamsoft.dcp.managerVersion.join("");
		m = this._innerFunRaw("GenerateURLForUploadData", f.makeParams("dcp", "dwasm_" + j, n), false, false, true);
		if (m && b.isArray(m.result) && m.result.length > 1) {
			var r = m.result[0],
				g = m.result[1];
			if (r == true) {
				i = ["dcp://dwasm_", j, "/file/", g].join("")
			}
		}
		if (i == false) {
			b.Errors.GenerateURL_InvalidRetFromServer(l);
			h();
			return ""
		}
		if (b.isFunction(q)) {
			q()
		}
		return i
	};
	d._asyncGenerateURLForUploadData = function(o, j, p, n) {
		var k = this,
			m = j,
			g = function() {
				if (b.isFunction(n)) {
					n(k.ErrorCode, k.ErrorString, k.__HTTPPostResponseString)
				}
				return ""
			},
			l;
		if (!k._checkIndices(o) && o != -1) {
			g();
			return ""
		}
		if (m == EnumDWT_ImageType.IT_BMP || m == EnumDWT_ImageType.IT_JPG || m == EnumDWT_ImageType.IT_PNG || m == EnumDWT_ImageType.IT_GIF) {
			if (o == -1 || o.length > 1) {
				b.Errors.UploadIndexMoreThanOne(k);
				g();
				return ""
			}
		} else {
			if (m == EnumDWT_ImageType.IT_TIF || m == EnumDWT_ImageType.IT_PDF) {} else {
				b.Errors.InvalidImageType(k);
				g();
				return ""
			}
		}
		l = f.__SetSelectedImages(k, "", o);
		if (!l) {
			g();
			return ""
		}
		var h = false,
			i = dynamsoft.dcp.managerVersion.join("");
		return this._innerFunRaw("GenerateURLForUploadData", f.makeParams("dcp", "dwasm_" + i, m), true, false, true, function(r) {
			if (r && b.isArray(r.result) && r.result.length > 1) {
				var q = r.result[0],
					s = r.result[1];
				if (q == true) {
					h = ["dcp://dwasm_", i, "/file/", s].join("")
				}
			}
			if (h == false) {
				b.Errors.GenerateURL_InvalidRetFromServer(k);
				g();
				return ""
			}
			if (b.isFunction(p)) {
				p(h)
			}
			return h
		}, g)
	}
})(Dynamsoft.Lib);
(function(a) {
	if (!a.product.bChromeEdition) {
		return
	}

	function c(d) {
		var e = this;
		e.aryCurrentSelectedImageIndicesInBuffer = d.aryCurrentSelectedImageIndicesInBuffer;
		e.aryModelImageControl = d.aryModelImageControl;
		e.__bAddingImage = false;
		if (a.isFunction(d.onResetCurrentIndex)) {
			e.onResetCurrentIndex = d.onResetCurrentIndex
		}
	}
	var b = c.prototype;
	b.UpdateAllImage = function(h, d, f, e) {
		var g = this;
		return g.UpdateAllImageInner(h, d, false, f, e)
	};
	b.UpdateAllImageInner = function(i, d, g, f, e) {
		var h = this;
		h.aryModelImageControl = i;
		h.__OnlySetCurrentIndex(d);
		h.sHowManyImages = h.aryModelImageControl.length;
		return true
	};
	b.GetDataImageControlList = function() {
		var d = this;
		return d.aryModelImageControl
	};
	b.SetDataImageControl = function(d, f) {
		var g = this;
		if (d > g.aryModelImageControl.length || g.aryModelImageControl.length <= 0) {
			return
		}
		var e;
		if (d == g.aryModelImageControl.length) {
			e = new a.UI.ModelImageControl();
			e.imageIndex = d;
			e.rawWidth = f;
			g.aryModelImageControl.push(e)
		} else {
			e = g.aryModelImageControl[d];
			e.rawWidth = f
		}
		if (e != null) {
			e.bIsDirty = true
		}
		return true
	};
	b.RemoveAllImages = function() {
		return this.Clear()
	};
	b.Clear = function() {
		var e = this;
		var d = 0;
		for (d = 0; d < e.aryModelImageControl.length; d++) {
			e.aryModelImageControl[d].Clear()
		}
		e.aryModelImageControl = [];
		e.cCurrentIndex = -1;
		return true
	};
	b.Go = function(d) {
		var e = this;
		e.__GoInner(d, true, false);
		return true
	};
	b.SetCurrentIndexOnly = function(d) {
		var e = this;
		return e.__GoInner(d, true, false)
	};
	b.__GoInner = function(d, e, f) {
		var h = this,
			g = h.cCurrentIndex;
		if (d < h.aryModelImageControl.length && d >= 0) {
			h.__OnlySetCurrentIndex(d);
			h.iCurrentRow = -1;
			h.iCurrentColumn = -1
		}
		return true
	};
	b.SetSelectedImageCount = function(d) {
		var e = this;
		e.aryCurrentSelectedImageIndicesInBuffer.splice(d);
		e.__SetSelectedImageIndicesInBuffer();
		return true
	};
	b.SetSelectedImageIndex = function(h, g) {
		var k = this;
		k.aryCurrentSelectedImageIndicesInBuffer[h] = g;
		k.__SetSelectedImageIndicesInBuffer();
		var e = -1,
			d = k.aryCurrentSelectedImageIndicesInBuffer.length,
			f, j;
		for (f = 0; f < d; f++) {
			j = k.aryCurrentSelectedImageIndicesInBuffer[f];
			if (e == -1) {
				e = j
			} else {
				if (j < e) {
					e = j
				}
			}
		}
		if (e >= 0 && e < k.aryModelImageControl.length && k.cCurrentIndex != e) {
			k.cCurrentIndex = e;
			k.__fireEvent("onResetCurrentIndex", k.cCurrentIndex)
		}
		return true
	};
	b.__SetSelectedImageIndicesInBuffer = function() {
		var d = this;
		if (d.aryCurrentSelectedImageIndicesInBuffer.length == 0) {
			if (d.cCurrentIndex >= 0) {
				d.aryCurrentSelectedImageIndicesInBuffer.push(d.cCurrentIndex)
			}
		}
	};
	b.__OnlySetCurrentIndex = function(d) {
		var f = this,
			e = f.cCurrentIndex;
		f.cCurrentIndex = d;
		if (e != d) {
			f.__fireEvent("onResetCurrentIndex", d)
		}
		if (f.aryCurrentSelectedImageIndicesInBuffer[0] != f.cCurrentIndex) {
			f.aryCurrentSelectedImageIndicesInBuffer.splice(0);
			f.aryCurrentSelectedImageIndicesInBuffer.push(f.cCurrentIndex)
		}
	};
	b.__fireEvent = function(d, e) {
		var f = this;
		if (a.isFunction(f[d])) {
			return f[d](e)
		}
		return true
	};
	b.AddImage = function(g, e, l) {
		var h = this,
			j = g * 1,
			k, m, f, d;
		m = h.GetDataImageControlList();
		k = m.length;
		if (j < 0 || j > e) {
			return false
		}
		f = j;
		for (; f < k; f++) {
			d = m[f];
			d.imageIndex = (f + 1)
		}
		d = new a.UI.ModelImageControl();
		d.bIsDirty = true;
		d.rawWidth = l;
		if (j >= k) {
			d.imageIndex = k;
			j = k;
			m.push(d)
		} else {
			d.imageIndex = j;
			m.splice(j, 0, d)
		}
		h.__bAddingImage = true;
		h.UpdateAllImage(m, j, j, k);
		h.__bAddingImage = false;
		return true
	};
	b.RemoveImage = function(f, d) {
		var h = this,
			j = f * 1,
			l = d * 1,
			k, n, m;
		if (typeof(j) === "undefined" || j < 0) {
			return
		}
		n = h.GetDataImageControlList();
		k = n.length;
		if (k == 1) {
			h.RemoveAllImages();
			return
		}
		if (j >= k) {
			j = k - 1
		} else {
			var g = j,
				e;
			for (; g < n.length; g++) {
				e = n[g];
				e.imageIndex = (g - 1)
			}
		}
		m = n.splice(j, 1);
		if (m && m[0]) {
			m[0].Clear()
		}
		h.UpdateAllImage(n, l, j, k - 2);
		return true
	};
	b.MoveImage = function(e, n) {
		var h = this,
			l, m, g, f, k, j, d;
		m = h.GetDataImageControlList();
		l = m.length;
		g = e;
		k = m[e];
		for (; g < m.length; g++) {
			f = m[g];
			f.imageIndex = (g - 1)
		}
		m.splice(e, 1);
		g = n;
		for (; g < m.length; g++) {
			f = m[g];
			f.imageIndex = (g + 1)
		}
		m.splice(n, 0, k);
		k.imageIndex = n;
		if (e < n) {
			j = e;
			d = n
		} else {
			j = n;
			d = e
		}
		h.UpdateAllImage(m, h.GetCurrentImageIndex(), j, d);
		return true
	};
	b.GetCurrentImageIndex = function() {
		return this.cCurrentIndex
	};
	b.GetSelectedIndexes = function() {
		return this.aryCurrentSelectedImageIndicesInBuffer
	};
	b.HowManyImagesInBuffer = function() {
		return this.GetDataImageControlList().length
	};
	b.SwitchImage = function(f, e) {
		var j = this,
			d, i, h, g;
		i = j.GetDataImageControlList();
		d = i.length;
		if (f < i.length && f >= 0 && e < i.length && e >= 0) {
			h = i[f];
			h.imageIndex = e;
			g = i[e];
			g.imageIndex = f;
			i[e] = h;
			i[f] = g
		}
		return true
	};
	a.UI = a.UI || {};
	a.UI.FakeView = c
})(Dynamsoft.Lib);
(function(a) {
	if (!a.product.bChromeEdition) {
		return
	}
	var c = a.html5.STwain,
		b = c.prototype,
		d = a.html5.Funs;
	b.AddText = function(o, m, l, n, i, p, e, f) {
		var k = this,
			j = parseInt(o);
		if (isNaN(j) || j < 0 || j >= k.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(k);
			return false
		}
		var h = a.RGB2BGR(i),
			g = a.RGB2BGR(p);
		return k._innerFun("AddText", d.makeParams(j, m, l, n, h, g, e, f))
	};
	b.CreateTextFont = function(g, r, l, k, n, o, h, p, e, m, i, j, q, f) {
		return this._innerFun("CreateTextFont", d.makeParams(g, r, l, k, n, o, h, p, e, m, i, j, q, f))
	};
	b.CopyToClipboard = function(f) {
		var g = this,
			e = parseInt(f);
		if (isNaN(e) || e < 0 || e >= g.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(g);
			return false
		}
		return g._innerFun("CopyToClipboard", d.makeParams(e))
	};
	b.Erase = function(h, j, i, g, e) {
		var k = this,
			f = parseInt(h);
		if (isNaN(f) || f < 0 || f >= k.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(k);
			return false
		}
		return k._innerFun("Erase", d.makeParams(f, j, i, g, e))
	};
	b.GetImageBitDepth = function(f) {
		var g = this,
			e = parseInt(f);
		if (isNaN(e) || e < 0 || e >= g.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(g);
			return false
		}
		return g._innerFun("GetImageBitDepth", d.makeParams(e))
	};
	b.GetImageWidth = function(f) {
		var g = this,
			e = parseInt(f);
		if (isNaN(e) || e < 0 || e >= g.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(g);
			return false
		}
		return g._innerFun("GetImageWidth", d.makeParams(e))
	};
	b.GetImageHeight = function(f) {
		var g = this,
			e = parseInt(f);
		if (isNaN(e) || e < 0 || e >= g.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(g);
			return false
		}
		return g._innerFun("GetImageHeight", d.makeParams(e))
	};
	b.GetImageSize = function(g, f, h) {
		var i = this,
			e = parseInt(g);
		if (isNaN(e) || e < 0 || e >= i.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(i);
			return false
		}
		return i._innerFun("GetImageSize", d.makeParams(e, f, h))
	};
	b.GetImageSizeWithSpecifiedType = function(f, g) {
		var h = this,
			e = parseInt(f);
		if (isNaN(e) || e < 0 || e >= h.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(h);
			return false
		}
		return h._innerFun("GetImageSizeWithSpecifiedType", d.makeParams(e, g))
	};
	b.GetImageXResolution = function(f) {
		var g = this,
			e = parseInt(f);
		if (isNaN(e) || e < 0 || e >= g.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(g);
			return false
		}
		return g._innerFun("GetImageXResolution", d.makeParams(e))
	};
	b.GetImageYResolution = function(f) {
		var g = this,
			e = parseInt(f);
		if (isNaN(e) || e < 0 || e >= g.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(g);
			return false
		}
		return g._innerFun("GetImageYResolution", d.makeParams(e))
	};
	b.GetSelectedImageIndex = function(e) {
		var f = this;
		if (e >= 0) {
			return f._UIManager.GetSelectedImageIndex(e)
		}
		return -1
	};
	b.SetSelectedImageIndex = function(g, f) {
		var h = this,
			e = h.__SelectedImagesCount;
		if (g < h.__SelectedImagesCount && g >= 0) {
			h._UIManager.SetSelectedImageIndex(g, f);
			return this._innerFun("SetSelectedImageIndex", d.makeParams(g, f))
		} else {
			a.Errors.InvalidIndex(h);
			return false
		}
	};
	b.GetSkewAngle = function(f) {
		var g = this,
			e = parseInt(f);
		if (isNaN(e) || e < 0 || e >= g.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(g);
			return false
		}
		return g._innerFun("GetSkewAngle", d.makeParams(e))
	};
	b.GetSkewAngleEx = function(h, j, i, g, e) {
		var k = this,
			f = parseInt(h);
		if (isNaN(f) || f < 0 || f >= k.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(k);
			return false
		}
		return k._innerFun("GetSkewAngleEx", d.makeParams(f, j, i, g, e))
	};
	b.IsBlankImageEx = function(h, j, i, g, e, k) {
		var l = this,
			f = parseInt(h);
		if (isNaN(f) || f < 0 || f >= l.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(l);
			return false
		}
		return l._innerFun("IsBlankImageEx", d.makeParams(f, j, i, g, e, k))
	};
	b.Mirror = function(f) {
		var g = this,
			e = parseInt(f);
		if (isNaN(e) || e < 0 || e >= g.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(g);
			return false
		}
		return g._innerFun("Mirror", d.makeParams(e))
	};
	b.RemoveAllImages = function() {
		var f = this,
			e;
		e = f._innerFun("RemoveAllImages");
		if (e) {
			f._HowManyImagesInBuffer = 0;
			f._UIManager.clear()
		}
		return e
	};
	b.RemoveImage = function(g) {
		var h = this,
			f = parseInt(g),
			e;
		if (isNaN(f) || f < 0 || f >= h.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(h);
			return false
		}
		e = h._innerFun("RemoveImage", d.makeParams(f));
		if (e) {
			h._HowManyImagesInBuffer = h._innerFun("HowManyImagesInBuffer");
			h.__cIndex = h._innerFun("CurrentImageIndexInBuffer");
			if (h._HowManyImagesInBuffer == 0) {
				h._UIManager.clear()
			}
		}
		return e
	};
	b.Rotate = function(h, f, g) {
		var k = this,
			e = parseInt(h),
			i, j;
		if (isNaN(e) || e < 0 || e >= k.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(k);
			return false
		}
		i = k._innerFun("Rotate", d.makeParams(e, f, g));
		j = (i == 1);
		if (j) {
			d.refreshImageAfterInvokeFun(k, e)
		}
		return j
	};
	b.RotateEx = function(i, g, h, e) {
		var l = this,
			f = parseInt(i),
			j, k;
		if (isNaN(f) || f < 0 || f >= l.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(l);
			return false
		}
		j = l._innerFun("RotateEx", d.makeParams(f, g, h, e));
		k = (j == 1);
		if (k) {
			d.refreshImageAfterInvokeFun(l, f)
		}
		return k
	};
	b.RotateLeft = function(f) {
		var i = this,
			e = parseInt(f),
			g, h;
		if (isNaN(e) || e < 0 || e >= i.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(i);
			return false
		}
		g = i._innerFun("RotateLeft", d.makeParams(e));
		h = (g == 1);
		if (h) {
			d.refreshImageAfterInvokeFun(i, e)
		}
		return h
	};
	b.RotateRight = function(f) {
		var i = this,
			e = parseInt(f),
			g, h;
		if (isNaN(e) || e < 0 || e >= i.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(i);
			return false
		}
		g = i._innerFun("RotateRight", d.makeParams(e));
		h = (g == 1);
		if (h) {
			d.refreshImageAfterInvokeFun(i, e)
		}
		return h
	};
	b.ChangeImageSize = function(n, f, k, m) {
		var h = this,
			i = parseInt(n),
			l = 1 * f,
			j = 1 * k,
			e, g;
		if (isNaN(i) || i < 0 || i >= h.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(h);
			return false
		}
		if (l <= 0 || j <= 0) {
			a.Errors.InvalidWidthOrHeight(h);
			return false
		}
		e = h._innerFun("ChangeImageSize", d.makeParams(i, l, j, m));
		g = (e == 1);
		if (g) {
			d.refreshImageAfterInvokeFun(h, i)
		}
		return g
	};
	b.Flip = function(f) {
		var i = this,
			e = parseInt(f),
			g, h;
		if (isNaN(e) || e < 0 || e >= i.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(i);
			return false
		}
		g = i._innerFun("Flip", d.makeParams(e));
		h = (g == 1);
		if (h) {
			d.refreshImageAfterInvokeFun(i, e)
		}
		return h
	};
	b.Crop = function(m, g, k, l, f) {
		var i = this,
			j = parseInt(m),
			e, h;
		if (isNaN(j) || j < 0 || j >= i.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(i);
			return false
		}
		e = i._innerFun("Crop", d.makeParams(j, g, k, l, f));
		h = (e == 1);
		if (h) {
			d.refreshImageAfterInvokeFun(i, j)
		}
		return h
	};
	b.CropToClipboard = function(m, g, k, l, f) {
		var i = this,
			j = parseInt(m),
			e, h;
		if (isNaN(j) || j < 0 || j >= i.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(i);
			return false
		}
		e = i._innerFun("CropToClipboard", d.makeParams(j, g, k, l, f));
		h = (e == 1);
		if (h) {
			d.refreshImageAfterInvokeFun(i, j)
		}
		return h
	};
	b.CutFrameToClipboard = function(m, g, k, l, f) {
		var i = this,
			j = parseInt(m),
			e, h;
		if (isNaN(j) || j < 0 || j >= i.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(i);
			return false
		}
		e = i._innerFun("CutFrameToClipboard", d.makeParams(j, g, k, l, f));
		h = (e == 1);
		if (h) {
			d.refreshImageAfterInvokeFun(i, j)
		}
		return h
	};
	b.CutToClipboard = function(f) {
		var i = this,
			e = parseInt(f),
			g, h;
		if (isNaN(e) || e < 0 || e >= i.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(i);
			return false
		}
		g = i._innerFun("CutToClipboard", d.makeParams(e));
		h = (g == 1);
		if (h) {
			d.refreshImageAfterInvokeFun(i, e)
		}
		return h
	};
	b.SetDPI = function(j, f, i, e, g) {
		var k = this,
			h = parseInt(j);
		if (isNaN(h) || h < 0 || h >= k.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(k);
			return false
		}
		return k._innerFun("SetDPI", d.makeParams(h, f, i, e, g))
	};
	b.MoveImage = function(i, h) {
		var j = this,
			g = parseInt(i),
			e = parseInt(h),
			f;
		if (isNaN(g) || g < 0 || g >= j.HowManyImagesInBuffer || isNaN(e) || e < 0 || e >= j.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(j);
			return false
		}
		f = j._innerFun("MoveImage", d.makeParams(g, e));
		if (f) {
			f = j._UIManager.MoveImage(g, e)
		}
		return f
	};
	b.SwitchImage = function(i, h) {
		var j = this,
			g = parseInt(i),
			e = parseInt(h),
			f;
		if (isNaN(g) || g < 0 || g >= j.HowManyImagesInBuffer || isNaN(e) || e < 0 || e >= j.HowManyImagesInBuffer) {
			a.Errors.IndexOutOfRange(j);
			return false
		}
		f = j._innerFun("SwitchImage", d.makeParams(g, e));
		if (f) {
			j._UIManager.SwitchImage(g, e)
		}
		return f
	};
	b.CloseWorkingProcess = function() {
		return this._innerFun("CloseWorkerProcess")
	};
	b.RemoveAllSelectedImages = function() {
		var f = this,
			e;
		e = d.__SetSelectedImages(f, f._UIManager.GetCurrentImageIndex(), f._UIManager.GetSelectedIndexes());
		if (e) {
			e = f._innerFun("RemoveAllSelectedImages");
			if (e) {
				f._HowManyImagesInBuffer = f._innerFun("HowManyImagesInBuffer");
				f.__cIndex = f._innerFun("CurrentImageIndexInBuffer");
				if (f._HowManyImagesInBuffer == 0) {
					f._UIManager.clear()
				}
				f._UIManager.SetSelectedImageCount(0);
				f.__SelectedImagesCount = 0
			}
		}
		return e
	}
})(Dynamsoft.Lib);
(function(a) {
	if (!a.product.bChromeEdition) {
		return
	}
	var i = a.html5.STwain,
		c = i.prototype,
		g = !1,
		d = !0,
		h = a.html5.Funs,
		e = function(k, j) {
			if (k._HowManyImagesInBuffer == 0) {
				a.Errors.NoImage(k);
				if (a.isFunction(j)) {
					j(k.ErrorCode, k.ErrorString)
				}
				return false
			}
			return true
		},
		f = function(k, l, j) {
			if (!e(k, j)) {
				return false
			}
			if (isNaN(l) || !a.isNumber(l) || l < 0 || l >= k._HowManyImagesInBuffer) {
				a.Errors.IndexOutOfRange(k);
				if (a.isFunction(j)) {
					j(k.ErrorCode, k.ErrorString)
				}
				return false
			}
			return true
		};
	c.FileExists = function(j) {
		var k = h.replaceLocalFilename(j);
		return this._innerFun("FileExists", h.makeParams(k))
	};
	c.SaveAllAsMultiPageTIFF = function(j, m, k) {
		var n = this,
			l = h.replaceLocalFilename(j);
		if (!e(n, k)) {
			return false
		}
		return n.__innerSaveImage("SaveAllAsMultiPageTIFF", h.makeParams(l), m, k)
	};
	c.SaveAllAsPDF = function(j, m, k) {
		var n = this,
			l = h.replaceLocalFilename(j);
		if (!e(n, k)) {
			return false
		}
		return n.__innerSaveImage("SaveAllAsPDF", h.makeParams(l), m, k)
	};
	c.SaveAsBMP = function(j, l, n, k) {
		var o = this,
			m = h.replaceLocalFilename(j);
		if (!f(o, l, k)) {
			return false
		}
		return o.__innerSaveImage("SaveAsBMP", h.makeParams(m, l), n, k)
	};
	c.SaveAsJPEG = function(j, l, n, k) {
		var o = this,
			m = h.replaceLocalFilename(j);
		if (!f(o, l, k)) {
			return false
		}
		return o.__innerSaveImage("SaveAsJPEG", h.makeParams(m, l), n, k)
	};
	c.SaveAsPDF = function(j, l, n, k) {
		var o = this,
			m = h.replaceLocalFilename(j);
		if (!f(o, l, k)) {
			return false
		}
		return o.__innerSaveImage("SaveAsPDF", h.makeParams(m, l), n, k)
	};
	c.SaveAsPNG = function(j, l, n, k) {
		var o = this,
			m = h.replaceLocalFilename(j);
		if (!f(o, l, k)) {
			return false
		}
		return o.__innerSaveImage("SaveAsPNG", h.makeParams(m, l), n, k)
	};
	c.SaveAsTIFF = function(j, l, n, k) {
		var o = this,
			m = h.replaceLocalFilename(j);
		if (!f(o, l, k)) {
			return false
		}
		return o.__innerSaveImage("SaveAsTIFF", h.makeParams(m, l), n, k)
	};
	c.SaveAsGIF = function(j, l, n, k) {
		var o = this,
			m = h.replaceLocalFilename(j);
		if (!f(o, l, k)) {
			return false
		}
		return o.__innerSaveImage("SaveAsGIF", h.makeParams(m, l), n, k)
	};
	c.SaveSelectedImagesAsMultiPagePDF = function(k, n, l) {
		var o = this,
			m = h.replaceLocalFilename(k),
			j;
		j = h.__SetSelectedImages(o, o._UIManager.GetCurrentImageIndex(), o._UIManager.GetSelectedIndexes());
		if (j) {
			return o.__innerSaveImage("SaveSelectedImagesAsMultiPagePDF", h.makeParams(m), n, l)
		}
		return false
	};
	c.SaveSelectedImagesAsMultiPageTIFF = function(k, n, l) {
		var o = this,
			m = h.replaceLocalFilename(k),
			j;
		j = h.__SetSelectedImages(o, o._UIManager.GetCurrentImageIndex(), o._UIManager.GetSelectedIndexes());
		if (j) {
			return o.__innerSaveImage("SaveSelectedImagesAsMultiPageTIFF", h.makeParams(m), n, l)
		}
		return false
	};
	c.SaveSelectedImagesToBase64Binary = function(l, k) {
		var m = this,
			j;
		j = h.__SetSelectedImages(m, m._UIManager.GetCurrentImageIndex(), m._UIManager.GetSelectedIndexes());
		if (j) {
			if (a.isFunction(l)) {
				return this._innerSend("SaveSelectedImagesToBase64Binary", null, true, l, k)
			} else {
				return m._innerFun("SaveSelectedImagesToBase64Binary")
			}
		}
		return false
	};
	c.ShowFileDialog = function(m, k, r, q, p, j, l, s) {
		var o = this,
			n = h.replaceLocalFilename(p);
		return this._innerSend("ShowFileDialog", h.makeParams(m, k, r, q, n, j, l, s), true)
	};
	c.FTPDownload = function(o, m, l, j) {
		var n = this,
			k = a.html5.Funs.getImageType(m);
		return n.__innerFTPDownload("FTPDownload", h.makeParams(o, m), k, l, j)
	};
	c.FTPDownloadDirectly = function(q, o, j, n, k) {
		var p = this,
			l = h.replaceLocalFilename(j),
			m = a.html5.Funs.getImageType(l);
		return p.__innerFTPDownloadDirectly("FTPDownloadDirectly", h.makeParams(q, o, l), m, n, k)
	};
	c.FTPDownloadEx = function(n, m, k, l, j) {
		return this.__innerFTPDownload("FTPDownloadEx", h.makeParams(n, m, k), k, l, j)
	};
	c.FTPUpload = function(n, k, m, l, j) {
		return this.__innerFTPUpload("FTPUpload", h.makeParams(n, k, m), l, j)
	};
	c.FTPUploadDirectly = function(p, j, n, m, k) {
		var o = this,
			l;
		if (!a.License.checkProductKey(o, {
				Core: true
			})) {
			if (a.isFunction(k)) {
				k(o._errorCode, o._errorString)
			}
			return false
		}
		l = h.replaceLocalFilename(j);
		return o.__innerFTPUpload("FTPUploadDirectly", h.makeParams(p, l, n), m, k)
	};
	c.FTPUploadEx = function(o, k, n, l, m, j) {
		return this.__innerFTPUpload("FTPUploadEx", h.makeParams(o, k, n, l), m, j)
	};
	c.FTPUploadAllAsMultiPageTIFF = function(m, l, k, j) {
		return this.__innerFTPUpload("FTPUploadAllAsMultiPageTIFF", h.makeParams(m, l), k, j)
	};
	c.FTPUploadAllAsPDF = function(m, l, k, j) {
		return this.__innerFTPUpload("FTPUploadAllAsPDF", h.makeParams(m, l), k, j)
	};
	c.FTPUploadAsMultiPagePDF = function(m, l, k, j) {
		return this.__innerFTPUpload("FTPUploadAsMultiPagePDF", h.makeParams(m, l), k, j)
	};
	c.FTPUploadAsMultiPageTIFF = function(m, l, k, j) {
		return this.__innerFTPUpload("FTPUploadAsMultiPageTIFF", h.makeParams(m, l), k, j)
	};
	c.HTTPDownload = function(l, k, n, j) {
		var o = this,
			m = h.getImageType(k);
		return o.HTTPDownloadThroughGet(l, k, m, n, j)
	};
	i.prototype.HTTPDownloadEx = function(l, k, m, n, j) {
		var o = this;
		return o.HTTPDownloadThroughGet(l, k, m, n, j)
	};
	c.HTTPDownloadDirectly = function(w, j, p, v, n) {
		var r = this,
			k = b.GetHttpHeadersAndClear(r),
			m = h.combineUrl(r, w, j),
			l, t, q;
		if (m === false) {
			a.Errors.ParameterCannotEmpty(r);
			return false
		}
		if (!p || p == "") {
			a.Errors.InvalidLocalFilename(r, "HTTPDownloadDirectly");
			if (a.isFunction(n)) {
				n(r.ErrorCode, r.ErrorString)
			}
			return false
		}
		l = a.html5.Funs.getImageType(p);
		if (h.isServerInvalid(r)) {
			if (a.isFunction(n)) {
				n(r.ErrorCode, r.ErrorString)
			}
			return false
		}
		if (!a.License.checkProductKey(r, {
				Core: true
			})) {
			if (a.isFunction(n)) {
				n(r._errorCode, r._errorString)
			}
			return false
		}
		if (!a.License.checkPDFProductKeyWhenNeeds(r, l)) {
			if (a.isFunction(n)) {
				n(r._errorCode, r._errorString)
			}
			return false
		}
		a.cancelFrome = 2;
		q = h.replaceLocalFilename(p);
		t = "get";
		a.showProgress(r, "HTTPDownloadDirectly", true);
		var u = function(x) {
				var y = (x.total === 0) ? 100 : Math.round(x.loaded * 100 / x.total),
					z = [x.loaded, " / ", x.total].join("");
				r._OnPercentDone([0, y, "", "http"])
			},
			o = true;
		r._OnPercentDone([0, -1, "Downloading...", "http"]);
		if (!a.isFunction(v)) {
			o = false
		}
		var s = h.loadHttpBlob(r, t, m, o, function(x) {
			r._OnPercentDone([0, -1, "Loading..."]);
			var y = 3;
			return r.__LoadImageFromBytes(x, y, q, o, v, n)
		}, function() {
			a.closeProgress("HTTPDownloadDirectly");
			if (a.isFunction(n)) {
				n(r.ErrorCode, r.ErrorString)
			}
			return false
		}, u, k);
		return s
	};
	c.HTTPUploadThroughPostDirectly = function(w, r, j, p, v, o) {
		var t = this,
			k = b.GetHttpHeadersAndClear(t),
			l = "HTTPUploadThroughPostDirectly",
			n = h.combineUrl(t, w, j),
			q = true,
			s, u;
		if (w === "") {
			a.Errors.HttpServerCannotEmpty(t);
			if (a.isFunction(o)) {
				o(t.ErrorCode, t.ErrorString, "")
			}
			return false
		}
		if (n === false || n === "") {
			a.Errors.ParameterCannotEmpty(t);
			if (a.isFunction(o)) {
				o(t.ErrorCode, t.ErrorString, "")
			}
			return false
		}
		if (!a.isFunction(v)) {
			q = false
		}
		if (!a.License.checkProductKey(t, {
				Core: true
			})) {
			if (a.isFunction(o)) {
				o(t.ErrorCode, t.ErrorString, "")
			}
			return false
		}
		a.cancelFrome = 1;
		var x = function() {
			a.needShowTwiceShowDialog = false;
			a.closeProgress(l);
			if (a.isFunction(o)) {
				o(t.ErrorCode, t.ErrorString, t.__HTTPPostResponseString)
			}
			return false
		};
		a.needShowTwiceShowDialog = true;
		a.showProgress(t, l, false);
		s = h.replaceLocalFilename(r);
		u = t.__SaveLocalFileToBytes(s, q, function(m) {
			a.needShowTwiceShowDialog = false;
			if (m && (a.dlgRef > 0 || t.__IfShowCancelDialogWhenImageTransfer == false || q == false)) {
				m.name = p;
				h.setBtnCancelVisibleForProgress(t, true);
				return h.httpPostUpload(t, n, m, q, 0, k, true, function(y) {
					a._bUploadDirectlyOneDone = true;
					if (a._aryUploadDirectlyCmd.length == 0) {
						a.closeProgress(l)
					}
					if (a.isFunction(v)) {
						v(y)
					}
				}, function() {
					a._bUploadDirectlyOneDone = true;
					if (a._aryUploadDirectlyCmd.length == 0) {
						a.closeProgress(l)
					}
					if (a.isFunction(x)) {
						x()
					}
				})
			} else {
				a._bUploadDirectlyOneDone = true;
				a.closeProgress(l);
				return false
			}
		}, function() {
			a._aryUploadDirectlyCmd.length = 0;
			a.closeProgress(l);
			a._bUploadDirectlyOneDone = true;
			if (a.isFunction(x)) {
				x()
			}
		});
		return u
	};
	c.HTTPUploadThroughPost = function(m, l, j, p, o, k) {
		var n = h.getImageType(p);
		return this.HTTPUploadThroughPostEx(m, l, j, p, n, o, k)
	};
	c.HTTPUploadThroughPostEx = function(y, A, k, r, w, x, q) {
		var t = this,
			o = "HTTPUploadThroughPostEx",
			p = h.combineUrl(t, y, k),
			s = true,
			v = false,
			u = "",
			n = 0,
			j = [],
			l;
		if (!a.isNumber(A) || isNaN(A) || A < -2) {
			a.Errors.IndexOutOfRange(t);
			if (a.isFunction(q)) {
				q(t.ErrorCode, t.ErrorString)
			}
			return false
		}
		t.__HTTPPostResponseString = "";
		if (!a.isFunction(x)) {
			s = false
		}
		if (s) {
			switch (A) {
				case -1:
					j = -1;
					break;
				case -2:
					j = t._UIManager.GetSelectedIndexes();
					break;
				default:
					j.push(A);
					break
			}
			l = {
				bOnlyUploadForm: g,
				_this: t,
				url: p,
				indices: j,
				enumImageType: w,
				filename: r,
				dataFormat: EnumDWT_UploadDataFormat.Binary,
				asyncSuccessFunc: x,
				asyncFailureFunc: q
			};
			a._aryUploadCmd.push(l);
			return true
		} else {
			a.cancelFrome = 1;
			var z = function() {
				var m = t.curCommand_SaveImagesToBytes.length;
				a.needShowTwiceShowDialog = false;
				a.closeProgress(o);
				if (a.isFunction(q)) {
					q(t.ErrorCode, t.ErrorString, t.__HTTPPostResponseString)
				}
				if (m > 0) {
					a.cancelFrome = 1;
					a.needShowTwiceShowDialog = true;
					a.showProgress(t, o, false);
					var B = t.curCommand_SaveImagesToBytes[0];
					h.sendData(B.objWS, B.json, false, B.binary)
				}
				return false
			};
			a.needShowTwiceShowDialog = true;
			a.showProgress(t, o, false);
			if (y === "") {
				a.Errors.HttpServerCannotEmpty(t);
				return z()
			}
			if (p === false) {
				a.Errors.ParameterCannotEmpty(t);
				return z()
			}
			if (A == -2) {
				v = h.__SetSelectedImages(t, t._UIManager.GetCurrentImageIndex(), t._UIManager.GetSelectedIndexes());
				if (!v) {
					return z()
				}
			} else {
				if (A == -1 || A >= 0) {} else {
					a.Errors.IndexOutOfRange(t);
					return z()
				}
			}
			v = t.__GetSelectedImagesLength(w, A, s, function(B) {
				var m = B.split(";"),
					D = Dynamsoft.WebTwainEnv;
				if (m.length == 2) {
					u = m[0];
					n = parseInt(m[1])
				}
				if (n == 0) {
					a.Errors.UploadFileCannotEmpty(t);
					return z()
				}
				var C = b.GetHttpHeadersAndClear(t);
				if (D.IfAddMD5InUploadHeader) {
					C["dwt-md5"] = u
				}
				v = t.__SaveSelectedImagesToBytes(w, 0, n, s, function(E) {
					a.needShowTwiceShowDialog = false;
					if (E && (a.dlgRef > 0 || t.__IfShowCancelDialogWhenImageTransfer == false || s == false)) {
						E.name = r;
						h.setBtnCancelVisibleForProgress(t, true);
						return h.httpPostUpload(t, p, E, s, 0, C, true, function(F) {
							var G = t.curCommand_SaveImagesToBytes.length;
							a.closeProgress(o);
							if (a.isFunction(x)) {
								x(F)
							}
							if (G > 0) {
								a.cancelFrome = 1;
								a.needShowTwiceShowDialog = true;
								a.showProgress(t, o, false);
								var H = t.curCommand_SaveImagesToBytes[0];
								h.sendData(H.objWS, H.json, false, H.binary)
							}
							return true
						}, z)
					} else {
						a.closeProgress(o);
						return false
					}
				}, z);
				return v
			}, z);
			return v
		}
	};
	c._checkIndices = function(m) {
		var n = this,
			j, k;
		if (!a.isArray(m)) {
			a.Errors.IndicesNotArray(n);
			return false
		}
		if (m.length == 0) {
			a.Errors.IndicesCannotEmpty(n);
			return false
		}
		j = n._HowManyImagesInBuffer;
		for (k = 0; k < m.length; k++) {
			var l = m[k];
			if (a.isUndefined(l) || l === null) {
				a.Errors.IndexNullOrUndefined(n);
				return false
			}
			l = parseInt(l);
			if (isNaN(l)) {
				a.Errors.InvalidIndex(n);
				return false
			}
			if (l < 0 || l >= j) {
				a.Errors.IndicesOutOfRange(n);
				return false
			}
		}
		return true
	};
	c.SetUploadSegment = function(j, k) {
		var l = this;
		if (!a.isNumber(j) || j < 0) {
			a.Errors.InvalidSegmentUploadThreshold(l);
			return false
		}
		if (!a.isNumber(k) || (k <= 0)) {
			a.Errors.InvalidModuleSize(l);
			return false
		}
		l._segementUploadThreshold = j * 1024 * 1024;
		l._moduleSize = k * 1024;
		return true
	};
	c.HTTPUpload = function(k, t, r, s, m, n, j) {
		var q = this,
			l, u, p;
		if (arguments.length <= 3) {
			u = t;
			p = r;
			l = {
				bOnlyUploadForm: d,
				_this: q,
				url: k,
				asyncSuccessFunc: u,
				asyncFailureFunc: p
			}
		} else {
			var o;
			if (a.isFunction(m)) {
				o = "RemoteFile";
				u = m;
				p = n
			} else {
				if (a.isString(m)) {
					o = m
				} else {
					o = "RemoteFile"
				}
				u = n;
				p = j
			}
			l = {
				bOnlyUploadForm: g,
				_this: q,
				url: k,
				indices: t,
				enumImageType: r,
				dataFormat: s,
				filename: o,
				asyncSuccessFunc: u,
				asyncFailureFunc: p
			}
		}
		a._aryUploadCmd.push(l);
		return true
	};
	c._innerHTTPUpload = function(n, p, r, H, I, o, B) {
		var z = this,
			s = parseInt(r),
			D = parseInt(H),
			k = I,
			F, v = "HTTPUpload",
			q = n,
			C = true,
			J = false,
			y = z._moduleSize,
			G = z._segementUploadThreshold,
			A, E, l = "",
			t, u;
		z.__HTTPPostResponseString = "";
		F = function() {
			if (a.isFunction(B)) {
				B(z.ErrorCode, z.ErrorString, z.__HTTPPostResponseString)
			}
			return false
		};
		if (a.isUndefined(q) || q === "") {
			a.Errors.ParameterCannotEmpty(z);
			return F()
		} else {
			if (!a.isString(q)) {
				a.Errors.InvalidUrl(z);
				return F()
			}
		}
		if ((q.indexOf("http://") != 0) && (q.indexOf("https://") != 0)) {
			if (a.detect.ssl) {
				q = "https://" + q
			} else {
				q = "http://" + q
			}
		}
		if (h.isServerInvalid(z)) {
			return F()
		}
		if (!z._checkIndices(p) && p != -1) {
			return F()
		}
		if (s == EnumDWT_ImageType.IT_BMP || s == EnumDWT_ImageType.IT_JPG || s == EnumDWT_ImageType.IT_PNG || s == EnumDWT_ImageType.IT_GIF) {
			if (p == -1 || p.length > 1) {
				a.Errors.UploadIndexMoreThanOne(z);
				return F()
			}
		} else {
			if (s == EnumDWT_ImageType.IT_TIF || s == EnumDWT_ImageType.IT_PDF) {} else {
				a.Errors.InvalidImageType(z);
				return F()
			}
		}
		if (D != EnumDWT_UploadDataFormat.Binary && D != EnumDWT_UploadDataFormat.Base64) {
			a.Errors.InvalidDataFormat(z);
			return F()
		}
		z.__HTTPPostResponseString = "";
		a.cancelFrome = 1;
		var j = function() {
			var m = z.curCommand_SaveImagesToBytes.length;
			a.needShowTwiceShowDialog = false;
			a.closeProgress(v);
			if (m > 0) {
				a.cancelFrome = 1;
				a.needShowTwiceShowDialog = true;
				a.showProgress(z, v, false);
				var K = z.curCommand_SaveImagesToBytes[0];
				h.sendData(K.objWS, K.json, false, K.binary)
			}
			if (a.isFunction(B)) {
				B(z.ErrorCode, z.ErrorString, z.__HTTPPostResponseString)
			}
			return false
		};
		u = function(m) {
			var K = (m.total === 0) ? 100 : Math.round(m.loaded * 100 / m.total),
				L = [m.loaded, " / ", m.total].join("");
			z._OnPercentDone([0, K, "", "http"])
		};
		k = h.addImageFileExt(k, s);
		if (D == EnumDWT_UploadDataFormat.Binary) {
			var x = 0;
			if (p != -1) {
				J = h.__SetSelectedImages(z, z._UIManager.GetCurrentImageIndex(), p);
				if (!J) {
					return j()
				}
			}
			a.needShowTwiceShowDialog = true;
			a.showProgress(z, v, false);
			var w;
			if (p == -1) {
				w = -1
			} else {
				w = -2
			}
			J = z.__GetSelectedImagesLength(s, w, C, function(K) {
				var m = K.split(";");
				if (m.length == 2) {
					l = m[0];
					x = parseInt(m[1])
				}
				if (x == 0) {
					a.Errors.UploadFileCannotEmpty(z);
					return j()
				}
				if (G > 0 && x > G) {
					var N = 0,
						M = b.GetHttpHeadersAndClear(z),
						L = Dynamsoft.WebTwainEnv;
					if (L.IfAddMD5InUploadHeader) {
						M["dwt-md5"] = l
					}
					z._OnPercentDone([0, -1, "uploading...", "http"]);
					J = b.UploadBinary(z, q, s, k, x, M, N, y, u, function() {
						a.needShowTwiceShowDialog = false;
						a.closeProgress(v);
						if (a.isFunction(o)) {
							o(z.__HTTPPostResponseString)
						}
						return true
					}, j)
				} else {
					J = z.__innnerHTTPUploadBinaryFull(q, l, x, s, k, o, j)
				}
				return J
			}, j)
		} else {
			if (D == EnumDWT_UploadDataFormat.Base64) {
				a.needShowTwiceShowDialog = true;
				a.showProgress(z, v, false);
				J = z.ConvertToBase64(p, s, function(M) {
					if (!M || M.getLength() <= 0) {
						a.Errors.UploadFileCannotEmpty(z);
						return j()
					}
					if (G > 0 && M.getLength() > G) {
						var N = 0,
							L = b.GetHttpHeadersAndClear(z),
							K = Dynamsoft.WebTwainEnv;
						l = M.getMD5();
						if (K.IfAddMD5InUploadHeader) {
							L["dwt-md5"] = l
						}
						z._OnPercentDone([0, -1, "uploading...", "http"]);
						b.UploadBase64(z, q, s, M, k, L, N, y, u, function() {
							a.needShowTwiceShowDialog = false;
							a.closeProgress(v);
							if (a.isFunction(o)) {
								o(z.__HTTPPostResponseString)
							}
						}, j)
					} else {
						var m;
						l = M.getMD5();
						m = M.getData(0, M.getLength());
						if (!m || m == "") {
							a.Errors.UploadFileCannotEmpty(z);
							return j()
						}
						z.__innnerHTTPUploadBase64Full(q, l, m, s, k, o, j)
					}
				}, j)
			}
		}
		return J
	};
	c._innerFormFieldHTTPUpload = function(k, q, j) {
		var s = this,
			n, o = "HTTPUpload",
			p = k,
			r = true,
			t = false;
		s.__HTTPPostResponseString = "";
		n = function() {
			a.needShowTwiceShowDialog = false;
			a.closeProgress(o);
			if (a.isFunction(j)) {
				j(s.ErrorCode, s.ErrorString, s.__HTTPPostResponseString)
			}
			return false
		};
		if (a.isUndefined(p) || p === "") {
			a.Errors.ParameterCannotEmpty(s);
			return n()
		} else {
			if (!a.isString(p)) {
				a.Errors.InvalidUrl(s);
				return n()
			}
		}
		if ((p.indexOf("http://") != 0) && (p.indexOf("https://") != 0)) {
			if (a.detect.ssl) {
				p = "https://" + p
			} else {
				p = "http://" + p
			}
		}
		if (h.isServerInvalid(s)) {
			return n()
		}
		s.__HTTPPostResponseString = "";
		a.cancelFrome = 1;
		a.showProgress(s, o, false);
		a.needShowTwiceShowDialog = true;
		var l = b.GetHttpHeadersAndClear(s);
		s._OnPercentDone([0, -1, "uploading...", "http"]);
		t = h.httpUploadByBIO(s, p, g, 0, true, l, true, function(m) {
			a.needShowTwiceShowDialog = false;
			a.closeProgress(o);
			if (a.isFunction(q)) {
				q(m)
			}
		}, n);
		return t
	};
	var b = {
		UploadBinary: function(s, o, u, r, l, j, p, t, v, q, x) {
			var w, k, n = "HttpUpload";
			w = l - p;
			if (w > 0) {
				if (w >= t) {
					w -= t;
					k = t
				} else {
					k = w;
					w = 0
				}
				s.__SaveSelectedImagesToBytesByBlock(u, p, k, function(y, m) {
					if (!y) {
						a.Errors.UploadFileCannotEmpty(s);
						return x()
					}
					if (a.dlgRef > 0 || s.__IfShowCancelDialogWhenImageTransfer == false) {
						y.name = r;
						h.setBtnCancelVisibleForProgress(s, true);
						j["Content-Range"] = ["bytes ", m, "-", m + y.size - 1, "/", l].join("");
						v({
							total: l,
							loaded: p
						});
						h.httpPostUpload(s, o, y, true, 0, j, false, function(z) {
							var A = s.curCommand_SaveImagesToBytes.length;
							if (A > 0) {
								a.cancelFrome = 1;
								var B = s.curCommand_SaveImagesToBytes[0];
								h.sendData(B.objWS, B.json, false, B.binary)
							}
							if (w == 0) {
								a.needShowTwiceShowDialog = false;
								v({
									total: l,
									loaded: l
								});
								if (a.isFunction(q)) {
									q(z)
								}
							} else {
								p += k;
								setTimeout(function() {
									a.cancelFrome = 1;
									b.UploadBinary(s, o, u, r, l, j, p, t, v, q, x)
								}, 100)
							}
						}, x);
						return true
					} else {
						a.Errors.UploadError(s, true);
						return x()
					}
				}, x)
			} else {
				a.needShowTwiceShowDialog = false;
				a.closeProgress(n);
				if (a.isFunction(q)) {
					q("")
				}
			}
			return true
		},
		UploadBase64: function(s, o, u, z, p, j, q, t, v, r, x) {
			var l = z.getLength(),
				n = "HttpUpload",
				w, k, y = 0;
			w = l - q;
			if (w > 0) {
				if (w >= t) {
					w -= t;
					k = t
				} else {
					k = w;
					w = 0
				}
				s.__GetBase64ResultDataAsync(-1, q, t, function(A) {
					var m = A[0];
					if (!m || m == "") {
						a.Errors.UploadFileCannotEmpty(s);
						return x()
					}
					if (a.dlgRef > 0 || s.__IfShowCancelDialogWhenImageTransfer == false) {
						h.setBtnCancelVisibleForProgress(s, true);
						j["Content-Range"] = ["bytes ", q, "-", q + k - 1, "/", l].join("");
						v({
							total: l,
							loaded: q
						});
						h.httpPostUploadString(s, o, m, p, 0, j, false, function(B) {
							var C = s.curCommand_SaveImagesToBytes.length;
							if (C > 0) {
								a.cancelFrome = 1;
								var D = s.curCommand_SaveImagesToBytes[0];
								h.sendData(D.objWS, D.json, false, D.binary)
							}
							if (w == 0) {
								a.needShowTwiceShowDialog = false;
								v({
									total: l,
									loaded: l
								});
								if (a.isFunction(r)) {
									r(B)
								}
							} else {
								q += k;
								setTimeout(function() {
									a.cancelFrome = 1;
									b.UploadBase64(s, o, u, z, p, j, q, t, v, r, x)
								}, 100)
							}
						}, x);
						return true
					} else {
						a.Errors.UploadError(s, true);
						return x()
					}
				}, x)
			} else {
				a.needShowTwiceShowDialog = false;
				a.closeProgress(n);
				if (a.isFunction(r)) {
					r("")
				}
			}
			return true
		},
		GetHttpHeadersAndClear: function(k) {
			var j = k.__httpHeaderMap;
			k.__httpHeaderMap = {};
			if (!j) {
				j = {}
			}
			return j
		}
	};
	c.__innnerHTTPUploadBinaryFull = function(o, l, y, s, C, p, j) {
		var x = this,
			u = b.GetHttpHeadersAndClear(x),
			v = "HTTPUpload",
			k = C,
			r = o,
			A = true,
			D = false,
			w = 0,
			z, B, t;
		var q = 0,
			n = Dynamsoft.WebTwainEnv;
		if (n.IfAddMD5InUploadHeader) {
			u["dwt-md5"] = l
		}
		D = x.__SaveSelectedImagesToBytesByBlock(s, q, y, function(E, m) {
			if (!E || E.size <= 0) {
				a.Errors.UploadFileCannotEmpty(x);
				return j()
			}
			if (a.dlgRef > 0 || x.__IfShowCancelDialogWhenImageTransfer == false) {
				E.name = k;
				h.setBtnCancelVisibleForProgress(x, true);
				return h.httpPostUpload(x, r, E, A, w, u, true, function(F) {
					var G = x.curCommand_SaveImagesToBytes.length;
					a.needShowTwiceShowDialog = false;
					a.closeProgress(v);
					if (a.isFunction(p)) {
						p(F)
					}
					if (G > 0) {
						a.cancelFrome = 1;
						a.needShowTwiceShowDialog = true;
						a.showProgress(x, v, false);
						var H = x.curCommand_SaveImagesToBytes[0];
						h.sendData(H.objWS, H.json, false, H.binary)
					}
				}, j)
			} else {
				a.Errors.UploadError(x, true);
				return j()
			}
		}, j);
		return D
	};
	c.__innnerHTTPUploadBase64Full = function(o, l, q, s, B, p, j) {
		var x = this,
			u = b.GetHttpHeadersAndClear(x),
			v = "HTTPUpload",
			k = B,
			r = o,
			z = true,
			C = false,
			w = 0,
			y, A, t, n = Dynamsoft.WebTwainEnv;
		a.needShowTwiceShowDialog = true;
		a.showProgress(x, v, false);
		if (a.dlgRef > 0 || x.__IfShowCancelDialogWhenImageTransfer == false) {
			if (n.IfAddMD5InUploadHeader) {
				if (u) {
					u["dwt-md5"] = l
				}
			}
			h.setBtnCancelVisibleForProgress(x, true);
			return h.httpPostUploadString(x, r, q, k, 0, u, true, function(m) {
				var D = x.curCommand_SaveImagesToBytes.length;
				a.needShowTwiceShowDialog = false;
				a.closeProgress(v);
				if (a.isFunction(p)) {
					p(m)
				}
				if (D > 0) {
					a.cancelFrome = 1;
					a.needShowTwiceShowDialog = true;
					a.showProgress(x, v, false);
					var E = x.curCommand_SaveImagesToBytes[0];
					h.sendData(E.objWS, E.json, false, E.binary)
				}
			}, j)
		} else {
			a.Errors.UploadError(x, true);
			return j()
		}
		return C
	};
	c.ConvertToBase64 = function(s, q, n, j) {
		var o = this,
			k = parseInt(q),
			l = "SaveSelectedImagesToBase64Binary",
			p;
		if (h.isServerInvalid(o)) {
			if (a.isFunction(j)) {
				j(o.ErrorCode, o.ErrorString)
			}
			return false
		}
		if (!o._checkIndices(s)) {
			if (a.isFunction(j)) {
				j(o.ErrorCode, o.ErrorString)
			}
			return false
		}
		if (k == EnumDWT_ImageType.IT_BMP || k == EnumDWT_ImageType.IT_JPG || k == EnumDWT_ImageType.IT_PNG || k == EnumDWT_ImageType.IT_GIF) {
			if (s.length > 1) {
				a.Errors.ConvertBase64IndexMoreThanOne(o);
				if (a.isFunction(j)) {
					j(o.ErrorCode, o.ErrorString)
				}
				return false
			}
		} else {
			if (k == EnumDWT_ImageType.IT_TIF || k == EnumDWT_ImageType.IT_PDF) {} else {
				a.Errors.InvalidImageType(o);
				if (a.isFunction(j)) {
					j(o.ErrorCode, o.ErrorString)
				}
				return false
			}
		}
		p = h.__SetSelectedImages(o, o._UIManager.GetCurrentImageIndex(), s);
		if (!p) {
			if (a.isFunction(j)) {
				j(o.ErrorCode, o.ErrorString)
			}
			return false
		}
		a.showProgress(o, l, false);
		var r = function() {
			a.closeProgress(l);
			if (a.isFunction(j)) {
				j(o.ErrorCode, o.ErrorString)
			}
			return false
		};
		p = o._innerSend(l, h.makeParams(k, 0, 0), true, function(w) {
			var t, m = 0,
				v = "",
				u;
			if (o.ErrorCode != 0) {
				r();
				return
			}
			if (w && a.isArray(w) && w.length == 1) {
				u = w[0].split(";");
				if (u.length == 2) {
					v = u[0];
					m = parseInt(u[1])
				}
				t = new a.html5.Base64Result(o, m, v);
				a.closeProgress(l);
				if (a.isFunction(n)) {
					n(t)
				}
			} else {
				a.Errors.ConvertBase64Failed(o);
				r()
			}
		}, r);
		return p
	};
	c.ClearAllHTTPFormField = function() {
		var j = this;
		j.httpFormFields = {};
		return true
	};
	c.SetHTTPFormField = function(n, j, l) {
		var m = this,
			k = n;
		if (!a.isString(k)) {
			k = "" + k
		}
		if (j instanceof Blob) {
			j.name = l
		}
		m.httpFormFields[k] = j;
		return true
	};
	c.HTTPUploadAllThroughPostAsMultiPageTIFF = function(m, j, p, o, l) {
		var k = -1,
			n = 2;
		return this.HTTPUploadThroughPostEx(m, k, j, p, n, o, l)
	};
	c.HTTPUploadThroughPostAsMultiPageTIFF = function(m, j, q, o, l) {
		var p = this,
			k = -2,
			n = 2;
		return p.HTTPUploadThroughPostEx(m, k, j, q, n, o, l)
	};
	c.HTTPUploadAllThroughPostAsPDF = function(m, j, q, o, l) {
		var p = this,
			k = -1,
			n = 4;
		return this.HTTPUploadThroughPostEx(m, k, j, q, n, o, l)
	};
	c.HTTPUploadThroughPostAsMultiPagePDF = function(m, j, q, o, l) {
		var p = this,
			k = -2,
			n = 4;
		return p.HTTPUploadThroughPostEx(m, k, j, q, n, o, l)
	};
	c.HTTPDownloadThroughPost = function(u, j, l, t, n) {
		var p = this,
			k = b.GetHttpHeadersAndClear(p),
			m = h.combineUrl(p, u, j),
			r, q;
		if (m === g) {
			a.Errors.ParameterCannotEmpty(p);
			return g
		}
		if (h.isServerInvalid(p)) {
			if (a.isFunction(n)) {
				n(p.ErrorCode, p.ErrorString)
			}
			return g
		}
		if (!a.License.checkProductKey(p, {
				Core: d
			})) {
			if (a.isFunction(n)) {
				n(p._errorCode, p._errorString)
			}
			return g
		}
		if (!a.License.checkPDFProductKeyWhenNeeds(p, l)) {
			if (a.isFunction(n)) {
				n(p._errorCode, p._errorString)
			}
			return g
		}
		a.cancelFrome = 2;
		a.showProgress(p, "HttpDownloadThroughPost", d);
		r = "post";
		var s = function(v) {
				var w = (v.total === 0) ? 100 : Math.round(v.loaded * 100 / v.total),
					x = [v.loaded, " / ", v.total].join("");
				p._OnPercentDone([0, w, "", "http"])
			},
			o = d;
		p._OnPercentDone([0, -1, "Downloading...", "http"]);
		if (!a.isFunction(t)) {
			o = g
		}
		q = h.loadHttpBlob(p, r, m, o, function(v) {
			p._OnPercentDone([0, -1, "Loading..."]);
			var x = "",
				w = l;
			if (w < -1 || w > 5) {
				w = -1
			}
			p.__LoadImageFromBytes(v, w, x, o, t, n)
		}, function() {
			a.closeProgress("HttpDownloadThroughPost");
			if (a.isFunction(n)) {
				n(p.ErrorCode, p.ErrorString)
			}
		}, s, k);
		return q
	};
	c.HTTPDownloadThroughGet = function(u, j, l, t, n) {
		var p = this,
			k = b.GetHttpHeadersAndClear(p),
			m = h.combineUrl(p, u, j),
			r, q;
		if (m === g) {
			a.Errors.ParameterCannotEmpty(p);
			return g
		}
		if (h.isServerInvalid(p)) {
			if (a.isFunction(n)) {
				n(p.ErrorCode, p.ErrorString)
			}
			return g
		}
		if (!a.License.checkProductKey(p, {
				Core: d
			})) {
			if (a.isFunction(n)) {
				n(p._errorCode, p._errorString)
			}
			return g
		}
		if (!a.License.checkPDFProductKeyWhenNeeds(p, l)) {
			if (a.isFunction(n)) {
				n(p._errorCode, p._errorString)
			}
			return g
		}
		a.cancelFrome = 2;
		r = "get";
		a.showProgress(p, "HTTPDownloadThroughGet", d);
		var s = function(v) {
				var w = (v.total === 0) ? 100 : Math.round(v.loaded * 100 / v.total),
					x = [v.loaded, " / ", v.total].join("");
				p._OnPercentDone([0, w, "", "http"])
			},
			o = d;
		p._OnPercentDone([0, -1, "Downloading...", "http"]);
		if (!a.isFunction(t)) {
			o = g
		}
		q = h.loadHttpBlob(p, r, m, o, function(v) {
			p._OnPercentDone([0, -1, "Loading..."]);
			var x = "",
				w = l;
			if (w < -1 || w > 5) {
				w = -1
			}
			p.__LoadImageFromBytes(v, w, x, o, t, n)
		}, function() {
			a.closeProgress("HTTPDownloadThroughGet");
			if (a.isFunction(n)) {
				n(p.ErrorCode, p.ErrorString)
			}
		}, s, k);
		return q
	};
	c.HTTPUploadThroughPut = function(m, l, j, o, k) {
		var n = h.getImageType(j);
		return this.HTTPUploadThroughPutEx(m, l, j, n, o, k)
	};
	c.HTTPUploadThroughPutEx = function(v, x, t, r, u, n) {
		var p = this,
			j = b.GetHttpHeadersAndClear(p),
			k = "HTTPUploadThroughPutEx",
			l = h.combineUrl(p, v, t),
			o = true,
			q = false;
		if (l === false) {
			a.Errors.ParameterCannotEmpty(p);
			return false
		}
		if (!a.isFunction(u)) {
			o = false
		}
		a.cancelFrome = 1;
		var w = function() {
				var m = p.curCommand_SaveImagesToBytes.length;
				a.needShowTwiceShowDialog = false;
				a.closeProgress(k);
				if (a.isFunction(n)) {
					n(p.ErrorCode, p.ErrorString, p.__HTTPPostResponseString)
				}
				if (m > 0) {
					a.cancelFrome = 1;
					a.needShowTwiceShowDialog = true;
					a.showProgress(p, k, false);
					var y = p.curCommand_SaveImagesToBytes[0];
					h.sendData(y.objWS, y.json, false, y.binary)
				}
				return false
			},
			s;
		a.needShowTwiceShowDialog = true;
		a.showProgress(p, k, false);
		if (v === "") {
			a.Errors.HttpServerCannotEmpty(p);
			return w()
		}
		if (x == -2) {
			q = h.__SetSelectedImages(p, p._UIManager.GetCurrentImageIndex(), p._UIManager.GetSelectedIndexes());
			if (!q) {
				return w()
			}
		} else {
			if (x == -1 || x >= 0) {} else {
				a.Errors.IndexOutOfRange(p);
				return w()
			}
		}
		q = p.__GetSelectedImagesLength(r, x, o, function(z) {
			var y = z.split(";"),
				B, m = 0,
				A = Dynamsoft.WebTwainEnv;
			if (y.length == 2) {
				B = y[0];
				m = parseInt(y[1])
			}
			if (m == 0) {
				a.Errors.UploadFileCannotEmpty(p);
				return w()
			}
			if (A.IfAddMD5InUploadHeader) {
				if (B) {
					j["dwt-md5"] = B
				}
			}
			q = p.__SaveSelectedImagesToBytes(r, 0, m, o, function(C) {
				a.needShowTwiceShowDialog = false;
				if (C && (a.dlgRef > 0 || p.__IfShowCancelDialogWhenImageTransfer == false || o == false)) {
					s = function(D) {
						var E = (D.total === 0) ? 100 : Math.round(D.loaded * 100 / D.total),
							F = [D.loaded, " / ", D.total].join("");
						p._OnPercentDone([0, E, "", "http"])
					};
					p._OnPercentDone([0, -1, "uploading...", "http"]);
					h.setBtnCancelVisibleForProgress(p, true);
					return h.httpPutImage(p, l, C, o, function(D) {
						var E = p.curCommand_SaveImagesToBytes.length;
						p.__HTTPPostResponseString = D;
						a.closeProgress(k);
						if (a.isFunction(u)) {
							u(p.__HTTPPostResponseString)
						}
						if (E > 0) {
							a.cancelFrome = 1;
							a.needShowTwiceShowDialog = true;
							a.showProgress(p, k, false);
							var F = p.curCommand_SaveImagesToBytes[0];
							h.sendData(F.objWS, F.json, false, F.binary)
						}
						return true
					}, w, s)
				} else {
					a.closeProgress(k);
					return false
				}
			}, w);
			return q
		}, w);
		return q
	};
	c.HTTPUploadAllThroughPutAsMultiPageTIFF = function(m, j, o, l) {
		var k = -1,
			n = 2;
		return this.HTTPUploadThroughPutEx(m, k, j, n, o, l)
	};
	c.HTTPUploadThroughPutAsMultiPageTIFF = function(m, j, o, l) {
		var p = this,
			k = -2,
			n = 2;
		return p.HTTPUploadThroughPutEx(m, k, j, n, o, l)
	};
	c.HTTPUploadAllThroughPutAsPDF = function(m, j, o, l) {
		var k = -1,
			n = 4;
		return this.HTTPUploadThroughPutEx(m, k, j, n, o, l)
	};
	c.HTTPUploadThroughPutAsMultiPagePDF = function(m, j, o, l) {
		var p = this,
			k = -2,
			n = 4;
		return p.HTTPUploadThroughPutEx(m, k, j, n, o, l)
	};
	c.GetSelectedImagesSize = function(k) {
		var l = this,
			j;
		j = h.__SetSelectedImages(l, l._UIManager.GetCurrentImageIndex(), l._UIManager.GetSelectedIndexes());
		if (j) {
			return this._innerFun("GetSelectedImagesSize", h.makeParams(k))
		}
		return false
	};
	c.SetHTTPHeader = function(m, o) {
		var p = this,
			j, l, k, n = m;
		if (!p.__httpHeaderMap) {
			p.__httpHeaderMap = {}
		}
		if (!n || !a.isString(n)) {
			if (a.isUndefined(n)) {
				a.Errors.HttpHeaderIsUndefined(p)
			} else {
				if (n === "") {
					a.Errors.HttpHeaderIsEmpty(p)
				} else {
					if (n === null) {
						a.Errors.HttpHeaderIsNull(p)
					} else {
						a.Errors.HttpHeaderIsInvalid(p)
					}
				}
			}
			return false
		}
		l = ["if-modified-since", "if-none-match", "if-range", "range", "accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via", "dwt-md5"];
		n = n.toLowerCase();
		for (k = 0; k < l.length; k++) {
			if (l[k] == n) {
				a.Errors.HttpHeaderNotAllowed(p);
				return false
			}
		}
		if (a.isUndefined(o) || o === null || o === "") {
			if (m in p.__httpHeaderMap) {
				delete p.__httpHeaderMap[m]
			}
			return true
		}
		if (a.isNumber(o)) {
			o = "" + o
		}
		p.__httpHeaderMap[m] = o;
		return true
	};
	c.__GetBase64ResultData = function(j, l, k) {
		return this._innerFun("SaveSelectedImagesToBase64Binary", h.makeParams(j, l, k))
	};
	c.__GetBase64ResultDataAsync = function(j, m, l, k, n) {
		return this._innerFunRaw("SaveSelectedImagesToBase64Binary", h.makeParams(j, m, l), true, false, false, k, n)
	};
	a.html5.Base64Result = function(j, l, k) {
		var m = this;
		m._stwain = j;
		m._md5 = k;
		m._length = l
	};
	a.html5.Base64Result.prototype.getLength = function() {
		return this._length
	};
	a.html5.Base64Result.prototype.getMD5 = function() {
		return this._md5
	};
	a.html5.Base64Result.prototype.getData = function(m, k) {
		var n = this,
			j = k,
			l = -1;
		if (m < 0 || k <= 0) {
			return ""
		}
		if (m + j > n._length) {
			j = n._length - m
		}
		return n._stwain.__GetBase64ResultData(l, m, j)
	};
	c._ConvertToBlob = function(v, t, o, j) {
		var q = this,
			l = parseInt(t),
			n = "ConvertToBlob",
			p = true,
			s = false,
			r = "",
			k = 0;
		if (!a.isFunction(o)) {
			p = false
		}
		if (h.isServerInvalid(q)) {
			if (a.isFunction(j)) {
				j(q.ErrorCode, q.ErrorString)
			}
			return false
		}
		if (!q._checkIndices(v)) {
			if (a.isFunction(j)) {
				j(q.ErrorCode, q.ErrorString)
			}
			return false
		}
		if (l == EnumDWT_ImageType.IT_BMP || l == EnumDWT_ImageType.IT_JPG || l == EnumDWT_ImageType.IT_PNG || l == EnumDWT_ImageType.IT_GIF) {
			if (v.length > 1) {
				a.Errors.ConvertBinaryIndexMoreThanOne(q);
				if (a.isFunction(j)) {
					j(q.ErrorCode, q.ErrorString)
				}
				return false
			}
		} else {
			if (l == EnumDWT_ImageType.IT_TIF || l == EnumDWT_ImageType.IT_PDF) {} else {
				a.Errors.InvalidImageType(q);
				if (a.isFunction(j)) {
					j(q.ErrorCode, q.ErrorString)
				}
				return false
			}
		}
		a.cancelFrome = 0;
		a.showProgress(q, n, false);
		var u = function() {
			var m = q.curCommand_SaveImagesToBytes.length;
			a.needShowTwiceShowDialog = false;
			a.closeProgress(n);
			if (a.isFunction(j)) {
				j(q.ErrorCode, q.ErrorString)
			}
			if (m > 0) {
				a.cancelFrome = 0;
				a.needShowTwiceShowDialog = true;
				a.showProgress(q, n, false);
				var w = q.curCommand_SaveImagesToBytes[0];
				h.sendData(w.objWS, w.json, false, w.binary)
			}
			return false
		};
		s = h.__SetSelectedImages(q, q._UIManager.GetCurrentImageIndex(), v);
		if (!s) {
			u();
			return false
		}
		s = q.__GetSelectedImagesLength(l, -2, p, function(x) {
			var w = x.split(";"),
				m;
			if (w.length == 2) {
				r = w[0];
				k = parseInt(w[1])
			}
			s = q.__SaveSelectedImagesToBytes(l, 0, k, p, function(z) {
				a.needShowTwiceShowDialog = false;
				a.closeProgress(n);
				if (a.isFunction(o)) {
					if (z instanceof Blob) {
						m = h.getBlobTypeByImageType(l);
						o(z.slice(0, k, m))
					} else {
						o(z)
					}
				}
				var y = q.curCommand_SaveImagesToBytes.length;
				if (y > 0) {
					a.cancelFrome = 0;
					a.needShowTwiceShowDialog = true;
					a.showProgress(q, n, false);
					var A = q.curCommand_SaveImagesToBytes[0];
					h.sendData(A.objWS, A.json, false, A.binary)
				}
				if (p) {
					return true
				} else {
					m = h.getBlobTypeByImageType(l);
					return z.slice(0, k, m)
				}
			}, u);
			return s
		}, u);
		return s
	};
	c.ConvertToBlob = function(l, j, k, m) {
		if (!a.isFunction(k)) {
			return this._ConvertToBlob(l, j)
		}
		dynamsoft.lib.asyncQueue.pushToDo(this, "_ConvertToBlob", arguments);
		return true
	};
	a._aryUploadCmd = [];
	a._aryUploadDirectlyCmd = [];
	a._bUploadDirectlyOneDone = true;
	a._asyUploadLoop = function() {
		if (a._aryUploadCmd.length == 0) {
			if (a._aryUploadDirectlyCmd.length == 0 || !a._bUploadDirectlyOneDone) {
				setTimeout(a._asyUploadLoop, 500);
				return
			} else {
				if (a._bUploadDirectlyOneDone) {
					a._bUploadDirectlyOneDone = false;
					var n = a._aryUploadDirectlyCmd[0];
					a._aryUploadDirectlyCmd.splice(0, 1);
					n._this._innerSend("SaveSelectedImagesToBytes", h.makeParams(0, 0, n.localfilePath), true, n.asyncSuccessFunc, n.asyncFailureFunc);
					setTimeout(a._asyUploadLoop, 500);
					return
				}
			}
		}
		var m = a._aryUploadCmd[0];
		a._aryUploadCmd.splice(0, 1);
		var q = m._this,
			o = m.bOnlyUploadForm,
			l = m.url,
			p = m.asyncSuccessFunc,
			k = m.asyncFailureFunc;
		if (o) {
			q._innerFormFieldHTTPUpload(l, function() {
				if (a.isFunction(p)) {
					try {
						p(q.__HTTPPostResponseString)
					} catch (u) {}
				}
				setTimeout(a._asyUploadLoop, 0)
			}, function() {
				if (a.isFunction(k)) {
					try {
						k(q.ErrorCode, q.ErrorString, q.__HTTPPostResponseString)
					} catch (u) {}
				}
				setTimeout(a._asyUploadLoop, 0)
			})
		} else {
			var t = m.indices,
				r = m.enumImageType,
				s = m.dataFormat,
				j = m.filename;
			q._innerHTTPUpload(l, t, r, s, j, function() {
				if (a.isFunction(p)) {
					try {
						p(q.__HTTPPostResponseString)
					} catch (u) {}
				}
				setTimeout(a._asyUploadLoop, 0)
			}, function() {
				if (a.isFunction(k)) {
					try {
						k(q.ErrorCode, q.ErrorString, q.__HTTPPostResponseString)
					} catch (u) {}
				}
				setTimeout(a._asyUploadLoop, 0)
			})
		}
	};
	setTimeout(a._asyUploadLoop, 500)
})(Dynamsoft.Lib);
(function(b) {
	if (!b.product.bChromeEdition) {
		return
	}
	var e = b.html5.STwain,
		f = b.html5.Funs,
		d = e.prototype,
		c = Dynamsoft.WebTwainEnv,
		a = {
			upload: "uploading...",
			download: "Downloading...",
			load: "Loading...",
			decode: "Decoding...",
			decodeTIFF: "Decoding tiff...",
			decodePDF: "Decoding pdf...",
			encode: "Encoding...",
			encodeTIFF: "Encoding tiff...",
			encodePDF: "Encoding pdf..."
		};
	d.RegisterEvent = function(g, i) {
		var h;
		h = ["__", g].join("");
		this[h] = i;
		return true
	};
	d.onEvent = function(g, h) {
		this.RegisterEvent(g, h)
	};
	d.on = function(g, h) {
		this.RegisterEvent(g, h)
	};
	d.OnRefreshUI = function(i, h, k, j) {
		var l = this,
			g = "On RefreshUI";
		if (!l._bNoUI) {
			if (k) {
				l._UIManager.refresh(i, h, true, j)
			}
			if (Dynamsoft.Lib.isFunction(l.__OnRefreshUI)) {
				l.__OnRefreshUI(l._UIManager.GetCurrentImageIndex(), h)
			}
		}
		return true
	};
	d._OnBitmapChanged = function(q) {
		var p = this,
			n = q[1].split(","),
			g = q[2],
			i = q[3],
			l = q[4],
			h = 0,
			j = "OnBitmapChanged:",
			o = 1,
			k = 2,
			r = 3,
			s = 4,
			t = 5;
		if (q.length > 5) {
			h = q[5]
		}
		p.__cIndex = i;
		p._HowManyImagesInBuffer = l;
		Dynamsoft.Lib.log(j + q);
		if (g == o || g == k) {
			Dynamsoft.Lib.each(n, function(u) {
				var v = parseInt(u),
					m = "item_" + v;
				if (isNaN(v) || v < 0) {
					return true
				}
				if (!p._bNoUI) {
					p._UIManager.add(v, l, h)
				}
			});
			if (Dynamsoft.Lib.isFunction(p.__OnRefreshUI)) {
				p.__OnRefreshUI(i, l)
			}
		} else {
			if (g == r) {
				if (!p._bNoUI) {
					if (n.length == 1 && n[0] == -1 || l == 0) {
						p._UIManager.clear()
					} else {
						Dynamsoft.Lib.each(n, function(u, m) {
							var v = parseInt(u);
							if (isNaN(v) || v < 0) {
								return true
							}
							p._UIManager.remove(v, i)
						})
					}
				}
				if (Dynamsoft.Lib.isFunction(p.__OnRefreshUI)) {
					p.__OnRefreshUI(i, l)
				}
			} else {
				if (g == s) {
					Dynamsoft.Lib.each(n, function(u, m) {
						var v = parseInt(u);
						if (isNaN(v) || v < 0) {
							return true
						}
						if (v >= 0 && !p.__bLoadingImage) {
							if (!p._bNoUI) {
								if (p._UIManager.bImageJustChangedInEditor == false) {
									p._UIManager.bImageChangedInViewer = true
								} else {
									p._UIManager.bImageJustChangedInEditor = false;
									p._UIManager.bImageChangedInViewer = false
								}
							}
							p.OnRefreshUI(v, l, true, h)
						}
					})
				} else {
					if (g == t) {
						if (i >= 0 && !p.__bLoadingImage) {
							if (p.IfAppendImage == false && p._UIManager._UIView.bSingleMode == true) {
								p.OnRefreshUI(i, l, true, h)
							}
							p._UIManager.refresh(i, l, false, h, true)
						}
					}
				}
			}
		}
		if (Dynamsoft.Lib.isFunction(p.__OnBitmapChanged)) {
			p.__OnBitmapChanged(n, g, i, l)
		}
	};
	d._OnPostLoad = function(n, g) {
		var l = this,
			k, q, m, h, o, j;
		if (g !== undefined && g.exception !== undefined && g.description !== undefined) {
			l._errorCode = g.exception;
			l._errorString = g.description
		}
		Dynamsoft.Lib.log("OnPostLoad Results:");
		h = n[1].split(",");
		q = Dynamsoft.Lib.base64.decode(h[0]);
		o = Dynamsoft.Lib.base64.decode(h[1]);
		Dynamsoft.Lib.log(q);
		Dynamsoft.Lib.log(o);
		Dynamsoft.Lib.log(h[2]);
		f.autoDiscardBlankImage(l, "On PostLoad");
		j = l.__cIndex;
		if (j >= 0) {
			l.OnRefreshUI(j)
		}
		if (Dynamsoft.Lib.isFunction(l.__OnPostLoad)) {
			l.__OnPostLoad(q, o, h[2])
		}
	};
	d._OnPostTransfer = function(g) {
		var h = this;
		Dynamsoft.Lib.log("On PostTransfer Results:" + g);
		f.autoDiscardBlankImage(h, "On PostTransfer");
		if (Dynamsoft.Lib.isFunction(h.__OnPostTransfer)) {
			h.__OnPostTransfer()
		}
	};
	d._OnPostAllTransfers = function(h) {
		var j = this,
			g, i;
		if (h.length >= 2) {
			j._errorCode = h[1];
			j._errorString = h[2]
		}
		Dynamsoft.Lib.log("On PostAllTransfers Results:" + h);
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

                 if(data.statusCode == 200){

                	var url = 'http://192.144.175.183:8098/paper/save_pictures'
						
					$.ajax({
						url:url,
						type:'POST',
						headers: { 'Content-Type': 'application/json' },
						data:{
							'picUrls': time + 'test.tif',
							'type':2
						},
						success:function(e){
							console.log(e)
						}
					})
                }
            });

        }

        function asyncFailureFunc(errorCode, errorString) {
            alert("ErrorCode: " + errorCode + "\r" + "ErrorString:" + errorString);
        }

        function btnUpload_onclick() {
            var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
            if (DWObject) {
                let currentIndex = DWObject.CapCurrentIndex;
                let listindex = [];
                for (var i = 0; i < DWObject.HowManyImagesInBuffer; i++) {
                   listindex.push(i)
                }
                console.log(currentIndex)
                DWObject.ConvertToBlob(listindex, EnumDWT_ImageType.IT_TIF, asyncSuccessFunc,
                    asyncFailureFunc);
 
            }

        }
        btnUpload_onclick()

		j.__bLoadingImage = false;
		if (Dynamsoft.Lib.isFunction(j.__OnPostAllTransfers)) {
			j.__OnPostAllTransfers()
		}
	};
	d._OnResult = function(g) {
		var i = this,
			h = g[1];
		if (Dynamsoft.Lib.isFunction(i.__OnResult)) {
			i.__OnResult(h)
		}
	};
	d._OnTransferCancelled = function(g) {
		var j = this,
			h = j._UIManager.GetCurrentImageIndex(),
			i = j._UIManager.count();
		j.__bLoadingImage = false;
		if (Dynamsoft.Lib.isFunction(j.__OnTransferCancelled)) {
			j.__OnTransferCancelled()
		}
	};
	d._OnTransferError = function(g) {
		var h = this;
		if (Dynamsoft.Lib.isFunction(h.__OnTransferError)) {
			h.__OnTransferError()
		}
	};
	d._OnSourceUIClose = function(g) {
		var h = this;
		if (Dynamsoft.Lib.isFunction(h.__OnSourceUIClose)) {
			h.__OnSourceUIClose()
		}
	};
	d._OnPreTransfer = function(g) {
		var h = this;
		if (Dynamsoft.Lib.isFunction(h.__OnPreTransfer)) {
			h.__OnPreTransfer()
		}
	};
	d._OnPreAllTransfers = function(g) {
		var h = this;
		if (Dynamsoft.Lib.isFunction(h.__OnPreAllTransfers)) {
			h.__OnPreAllTransfers()
		}
	};
	d._OnPercentDone = function(r) {
		var n = this,
			t = false,
			g = 0,
			o, q = Dynamsoft.Lib;
		if (q.isArray(r) && r.length > 2) {
			g = r[1];
			o = g;
			if (g < 0) {
				o = 0
			} else {
				if (g > 100) {
					o = 100
				}
			}
		}
		if (g > 0 || g == 0) {
			if (q.cancelFrome == 1 || q.cancelFrome == 2) {
				if (r[3] == "http") {
					t = true
				}
			}
			if (q.cancelFrome == 3 || q.cancelFrome == 4) {
				if (r[4] == "ftp") {
					t = true
				}
			}
		}
		if ((q.cancelFrome == 0 && n.__IfShowProgressBar == true) || (q.cancelFrome != 0 && n.__IfShowCancelDialogWhenImageTransfer == true)) {
			var p = q.one(".dynamsoft-progressBar"),
				k = q.one(".dynamsoft-status"),
				h = q.one(".dynamsoft-finalMessage"),
				l;
			if (q.cancelFrome == 3 || q.cancelFrome == 4) {
				var j = r[3];
				if (j == 0) {
					f.setBtnCancelVisibleForProgress(n, false)
				} else {
					if (j == 1) {
						f.setBtnCancelVisibleForProgress(n, true)
					}
				}
			}
			if (g < 0) {
				q.progressMessage = r[2];
				l = q.progressMessage
			} else {
				if (r[2] != "") {
					l = q.progressMessage + "(" + r[2] + ")"
				} else {
					l = q.progressMessage
				}
			}
			if (h && h.getEL()) {
				var s = "",
					u = "";
				if (l.indexOf(" ...")) {
					l = l.replace(" ...", "...")
				}
				if (l.indexOf("(") != -1) {
					s = l.substr(0, l.indexOf("("));
					u = l.substr(l.indexOf("("))
				} else {
					s = l
				}
				q.each(a, function(v, m) {
					if (v.indexOf(s) != -1) {
						l = c.CustomizableDisplayInfo.customProgressText[m] + u
					}
				});
				h.html(l)
			}
			if (o || o === 0) {
				if (k && k.getEL()) {
					k.html(o + "%")
				}
				if (p && p.getEL()) {
					if (q.env.bIE) {
						if (p[0].objProgressBar) {
							p[0].objProgressBar.setValue(o)
						} else {
							p[0].value = o
						}
					} else {
						if (q.env.bEdge) {
							p[0].style.display = "";
							p[0].value = o
						} else {
							p[0].value = o
						}
					}
				}
			}
			if (o && (o >= 100 || q.dlgRef <= 0)) {
				setTimeout(function() {
					if (p && p.getEL()) {
						if (q.env.bIE) {
							if (p[0].objProgressBar) {
								p[0].objProgressBar.setValue(0)
							} else {
								p[0].value = 0
							}
						} else {
							if (q.env.bEdge) {
								p[0].style.display = "none";
								p[0].value = 0
							} else {
								p[0].value = 0
							}
						}
					}
				}, 1000);
				if (q.dlgRef <= 0) {
					var i = "OnPercentDone";
					q.closeProgress(i)
				}
			}
		}
		if (t == true) {
			if (q.isFunction(n.__OnInternetTransferPercentage)) {
				n.__OnInternetTransferPercentage(o, false)
			}
			if (q.isFunction(n.__OnInternetTransferPercentageEx)) {
				n.__OnInternetTransferPercentageEx(o, false)
			}
		}
		if (q.isFunction(n.__OnPercentDone)) {
			n.__OnPercentDone()
		}
	};
	d._OnGetFilePath = function(h) {
		var n = this,
			j, l, m, k, g;
		m = h[1].split(",");
		Dynamsoft.Lib.log("On GetFilePath Results:" + h);
		k = Dynamsoft.Lib.base64.decode(m[3]);
		g = Dynamsoft.Lib.base64.decode(m[4]);
		if (m[2] == "-1032") {
			m[2] = "-1";
			k = g = ""
		}
		if (Dynamsoft.Lib.isFunction(n.__OnGetFilePath)) {
			n.__OnGetFilePath(m[0], m[1], m[2], k, g)
		}
	};
	d.checkErrorString = function() {
		var i = this,
			h = i.ErrorCode;
		if (h === -2115) {
			return true
		}
		if (h === -2003) {
			var g = window.open("", "ErrorMessage", "height=500,width=750,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");
			g.document.writeln(i.__HTTPPostResponseString)
		}
		return (h === 0)
	}
})(Dynamsoft.Lib);
(function(b) {
	if (!b.product.bChromeEdition) {
		return
	}
	var f = b.html5.STwain,
		e = f.prototype,
		g = b.html5.Funs,
		d = Dynamsoft.WebTwainEnv,
		c = !1,
		a = !0;
	e.SetCookie = function(h) {
		this._cookie = h;
		document.cookie = h;
		return a
	};
	e.LoadImageFromBase64Binary = function(k, p, q, j) {
		var n = this,
			i = c,
			h = "LoadImageFromBase64Binary",
			l = p,
			o;
		if (!b.License.checkProductKey(n, {
				Core: a
			})) {
			return c
		}
		if ((b.isUndef(p) || p == 5) && b.isString(k)) {
			if (k.indexOf("data:image/bmp") != -1) {
				l = 0
			} else {
				if (k.indexOf("data:image/jpeg") != -1) {
					l = 1
				} else {
					if (k.indexOf("data:image/tif") != -1) {
						l = 2
					} else {
						if (k.indexOf("data:image/png") != -1) {
							l = 3
						} else {
							if (k.indexOf("data:application/pdf") != -1) {
								l = 4
							}
						}
					}
				}
			}
		}
		if (l < -1 || l > 5) {
			l = -1
		}
		if (!b.License.checkPDFProductKeyWhenNeeds(n, l)) {
			return c
		}
		if (b.isFunction(q)) {
			i = a
		}
		if (b.isString(k)) {
			if (k.indexOf("base64,") != -1) {
				k = k.substr(k.indexOf("base64,") + 7)
			}
		}
		if (i) {
			if (g.isServerInvalid(n)) {
				if (b.isFunction(j)) {
					j(n.ErrorCode, n.ErrorString)
				}
				return c
			}
			b.cancelFrome = 2;
			b.showProgress(n, h, a);
			n.__bLoadingImage = a;
			o = n._innerSend(h, g.makeParams(k, l), i, function() {
				Dynamsoft.Lib.closeProgress(h);
				n.__bLoadingImage = false;
				if (!n._bNoUI) {
					var m = n._UIManager.GetCurrentImageIndex();
					if (m >= 0) {
						n.OnRefreshUI(m)
					}
				}
				if (q) {
					q()
				}
				return true
			}, function() {
				Dynamsoft.Lib.closeProgress(h);
				n.__bLoadingImage = false;
				if (b.isFunction(j)) {
					j(n.ErrorCode, n.ErrorString)
				}
			})
		} else {
			o = n._innerFun(h, g.makeParams(k, l));
			if (n.ErrorCode == 0) {
				n._HowManyImagesInBuffer = n._innerFun("HowManyImagesInBuffer");
				n.__cIndex = n._innerFun("CurrentImageIndexInBuffer")
			}
		}
		return o
	};
	e.SaveSelectedImagesToBytes = function(i, h) {
		b.Errors.HTML5NotSupport(this);
		return c
	};
	e.LoadImageFromBytes = function(j, h, i) {
		b.Errors.HTML5NotSupport(this);
		return c
	};
	e.UnregisterEvent = function(h, j) {
		var i = ["__", h].join("");
		this[i] = null;
		return a
	};
	e.SetCancel = function(i, h) {
		return this._innerSend("SetCancel", null, a, i, h)
	};
	e.SetImageWidth = function(i, j) {
		var k = this,
			h = parseInt(i);
		if (isNaN(h) || h < 0 || h >= k.HowManyImagesInBuffer) {
			b.Errors.IndexOutOfRange(k);
			return false
		}
		return k._innerFun("SetImageWidth", g.makeParams(h, j))
	};
	e.HTTPDownloadStreamThroughPost = function(i, h) {
		b.Errors.HTML5NotSupport(this);
		return c
	};
	e.HTTPUploadStreamThroughPost = function(k, j, h, l, i) {
		b.Errors.HTML5NotSupport(this);
		return c
	};
	e.HTTPUploadThroughPutDirectly = function(k, i, h, l, j) {
		b.Errors.HTML5NotSupport(this);
		return false
	};
	e.SetCustomDSDataEx = function(h) {
		return this._innerFun("SetCustomDSDataEx", g.makeParams(h))
	};
	e.SetCustomDSData = function(h) {
		var i = g.replaceLocalFilename(h);
		return this._innerFun("SetCustomDSData", g.makeParams(i))
	};
	e.GetCustomDSDataEx = function() {
		return this._innerFun("GetCustomDSDataEx")
	};
	e.GetCustomDSData = function(h) {
		var i = g.replaceLocalFilename(h);
		return this._innerFun("GetCustomDSData", g.makeParams(i))
	};
	e.ChangeBitDepth = function(j, i, l) {
		var k = this,
			h = parseInt(j);
		if (isNaN(h) || h < 0 || h >= k.HowManyImagesInBuffer) {
			b.Errors.IndexOutOfRange(k);
			return false
		}
		return k._innerFun("ChangeBitDepth", g.makeParams(h, i, l))
	};
	e.ConvertToGrayScale = function(i) {
		var j = this,
			h = parseInt(i);
		if (isNaN(h) || h < 0 || h >= j.HowManyImagesInBuffer) {
			b.Errors.IndexOutOfRange(j);
			return false
		}
		return j._innerFun("ConvertToGrayScale", g.makeParams(h))
	};
	e.ClearTiffCustomTag = function() {
		return this._innerFun("ClearTiffCustomTag")
	};
	e.SetTiffCustomTag = function(k, j, m) {
		var l = this,
			i = b.replaceAll(j, '"', '\\"'),
			h = k * 1;
		if (h <= 0 || h > 2147483647) {
			b.Errors.InvalidTiffTagError(l);
			return false
		}
		return l._innerFun("SetTiffCustomTag", g.makeParams(h, i, m))
	};
	e.IsBlankImage = function(i) {
		var j = this,
			h = parseInt(i);
		if (isNaN(h) || h < 0 || h >= j.HowManyImagesInBuffer) {
			b.Errors.IndexOutOfRange(j);
			return false
		}
		return j._innerFun("IsBlankImage", g.makeParams(h, c))
	};
	e.IsBlankImageExpress = function(i) {
		var j = this,
			h = parseInt(i);
		if (isNaN(h) || h < 0 || h >= j.HowManyImagesInBuffer) {
			b.Errors.IndexOutOfRange(j);
			return false
		}
		return j._innerFun("IsBlankImage", g.makeParams(h, a))
	};
	e.GetVersionInfoAsync = function(i, h) {
		return this._innerSend("VersionInfo", null, a, i, h)
	};
	e.SetOpenSourceTimeout = function(h) {
		return this._innerFun("SetOpenSourceTimeout", g.makeParams(h))
	};
	e.GetImageURL = function(o, i, h, s, n) {
		var m = this,
			p = o,
			q = parseInt(i),
			l = parseInt(h),
			r, j, k;
		if (s) {
			r = "";
			j = "dwt://"
		} else {
			r = m.httpUrl;
			j = "dwt/"
		}
		k = [r, j, "dwt_", d.Trial ? "trial_" : "", b.product.getServerVersionInfo(), "/img?id=", m.clientId];
		if (b.isUndefined(p) || p === null) {
			b.Errors.IndexNullOrUndefined(m);
			return ""
		}
		if (!n) {
			p = parseInt(p);
			if (isNaN(p)) {
				b.Errors.InvalidIndex(m);
				return ""
			}
			if (p < -1 || p >= m.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(m);
				return ""
			}
			k.push("&index=");
			k.push(p);
			if (q > 0 && l > 0) {
				k.push("&width=");
				k.push(q);
				k.push("&height=");
				k.push(l)
			}
		} else {
			k.push("&index=-1&width=-1&height=-1&webcam=");
			k.push(n)
		}
		k.push("&t=");
		k.push(new Date().getTime());
		return k.join("")
	};
	e.GetImagePartURL = function(i, j, k) {
		var l = this,
			h = parseInt(i);
		if (isNaN(h) || h < 0 || h >= l.HowManyImagesInBuffer) {
			b.Errors.IndexOutOfRange(l);
			return ""
		}
		return this.GetImageURL(h, j, k, !0)
	};
	e.SetLanguage = function(h) {
		return this._innerFun("SetLanguageForSecurity", g.makeParams(h))
	};
	e.GetLicenseInfo = function(j, i) {
		var k = this,
			h;
		if (!k.__licenseInfo) {
			if (g.isHttpServerInvalid(k)) {
				return c
			}
			k._innerFunRaw("GetLicenseInfo", null, a, c, a, function(l) {
				if (l) {
					if (!l.exception) {
						k.__licenseInfo = l;
						if (j) {
							j(k.__licenseInfo)
						}
					} else {
						if (i) {
							i(l.exception)
						}
					}
				} else {
					if (i) {
						i()
					}
				}
			}, i)
		}
		return a
	}
})(Dynamsoft.Lib);

(function(a, d) {
	if (!a.product.bChromeEdition) {
		return
	}
	var imgUrls = []
	a.html5.___ii = 0;
	var b = a.html5.Funs2 = {

		getImageUrl: function(l, o, k, n) {
			// alert(2222222) 
		
		//  let listindex = [];
		// function asyncSuccessFunc(result) {
  //           console.log(result.size);
  //           console.log(result);
  //           var date = new Date();
  //           var time = date.getTime();
  //           imgUrls.push(time + 'test.tif')
  //           console.log(DWObject)         
  //           cos.putObject({
  //               Bucket: img_Bucket,
  //               Region: Region,
  //               Key: time + 'test.tif',
  //               Body: result,//arr[index], 
  //               onHashProgress: function (progressData) {
  //                   console.log('校验中', JSON.stringify(progressData));
  //               },
  //               onProgress: function (progressData) {
  //                       console.log(progressData);
  //               },
  //           }, function (err, data) {
  //               console.log(data||err)
  //               console.log(listindex)
  //               if(data.statusCode == 200){
  //               	if(imgUrls.length ==listindex.length ){
  //               		var img = imgUrls.join(',')
  //               		console.log(img)
		// 				var url = 'http://192.144.175.183:8098/paper/save_pictures'
						
		// 				$.ajax({
		// 					url:url,
		// 					type:'POST',

		// 					data:{
		// 						'picUrls':img,
		// 						'type':2
		// 					},
		// 					success:function(e){
		// 						console.log(e)
		// 					}
		// 				})

  //               	}
  //               }
  //           });

  //       }

  //       function asyncFailureFunc(errorCode, errorString) {
  //           alert("ErrorCode: " + errorCode + "\r" + "ErrorString:" + errorString);
  //       }

  //       function btnUpload_onclick() {
  //           var DWObject = Dynamsoft.WebTwainEnv.GetWebTwain('dwtcontrolContainer');
  //           if (DWObject) {
		// 		let currentIndex = DWObject.CapCurrentIndex;
		// 		//扫描结束
		// 		document.getElementById('upload_start').style.display='block'
		// 		document.getElementById('upload_start1').style.display='block'
  //   			document.getElementById('scan_start').style.display='none'
				

               
  //               for (var i = 0; i < DWObject.HowManyImagesInBuffer; i++) {
  //                  listindex.push(i)
  //               } 
  //               //没有获取到  扫描结束事件之前这里不用循环
  //               // console.log('currentIndexcurrentIndexcurrentIndexcurrentIndex')
  //               // console.log(o)
  //               // console.log(DWObject.HowManyImagesInBuffer)
  //               // if(o==DWObject.HowManyImagesInBuffer){
  //               	DWObject.ConvertToBlob([o], EnumDWT_ImageType.IT_TIF, asyncSuccessFunc,
  //                   asyncFailureFunc);
  //               // }
                
 
  //           }

  //       }
  //       btnUpload_onclick()
			var m = [l];
			if (o !== undefined && o !== null) {
				m.push("&index=");
				m.push(o)
			}
			m.push("&width=");
			m.push(k);
			m.push("&height=");
			m.push(n);
			m.push("&ticks=");
			m.push(a.html5.___ii++);
			return m.join("")
		},
		getUrlByAct: function(l, n, k) {

			var m = [l];
			if (n !== undefined && n !== null) {
				m.push("&index=");
				m.push(n)
			}
			if (k) {
				m.push("&act=");
				m.push(k)
			}
			m.push("&ticks=");
			m.push(a.html5.___ii++);
			return m.join("")
		},
		output: function(l, k) {
			if (Dynamsoft.WebTwainEnv.Debug) {
				a.log(k)
			}
		},
		print: function(u) {
			var k, A = 850,
				r = 1120,
				z = 0;
			var o = 0,
				l = 0,
				y = "";
			if (a.product.bChromeEdition) {
				if (a.env.bIE) {
					r = 1289
				}
				if (a.env.bFirefox) {
					r = 1169
				}
			}
			for (z = 0; z < u.length; z++) {
				var n = r;
				var t = u[z];
				var w = t.Width;
				var m = t.Height;
				var q = t.Url;
				var v = A / w,
					s = n / m;
				if (v < s) {
					n = parseInt(m * v)
				} else {
					if (v > s) {
						A = parseInt(w * s)
					}
				}
				o += w;
				l += m;
				y = y + '<div style="width:850px;height:' + r + 'px"> <img id="D_img' + z + '" src="' + q + '" style="position:relative;left:0px;top:0px;width: ' + A + "px;height: " + n + 'px" /></div>'
			}
			var C, x = ["alwaysRaised=yes,z-look=yes,top=0,left=0,toolbar=no,menubar=no,location=no,status=no,width=", o, ",height=", l].join(""),
				B = window.open("about:blank", "_blank", x);
			k = '<html><body id="D_img">' + y + "</body></html>";
			if (B) {
				B.document.write(k);
				B.document.close();
				B.focus();
				C = B.document.getElementById("D_img");
				if (C) {
					C.onload = function() {
						B.print();
						B.close();
						a.log("print image...ok")
					}
				} else {
					a.log("cannot find image")
				}
			}
		}
	};
	var h = a.DOM,
		f = Dynamsoft.WebTwainEnv,
		g = {
			getServerImageUrlPrefix: function(n) {
				var l = n.httpUrl,
					k = false,
					m = [l, "dwt/dwt_", f.Trial ? "trial_" : "", a.product.getServerVersionInfo(), "/img?id=", n.clientId];
					
				return m.join("")
			},
			output: function(k) {
				if (Dynamsoft.WebTwainEnv.Debug) {
					a.log(k)
				}
			}
		};

	function j(k, l) {
		var m = this;
		m._stwain = k;
		m.__SelectionImageBorderColor = 8233678;
		m.__BackgroundColor = 16777215;
		m.__BackgroundFillColor = 16777215;
		m.__Ratio = 0;
		m.bImageJustChangedInEditor = false;
		m.bImageChangedInViewer = false;
		l.bEditorViewer = false;
		l._UIEditor = null;
		l.aryModelImageControl = [];
		l.aryCurrentSelectedImageIndicesInBuffer = [];
		l.onTopImageInTheViewChanged = function(n) {
			if (Dynamsoft.Lib.isFunction(k.__OnTopImageInTheViewChanged)) {
				k.__OnTopImageInTheViewChanged(n)
			}
		};
		l.onGetImageInfo = function(p) {
			var n = -1,
				o = -1;
			n = m.GetImageWidth(p);
			return {
				width: n,
				height: o
			}
		};
		if (k._bNoUI) {
			m._UIView = new a.UI.FakeView(l)
		} else {
			if (a.UI.ImageUIView) {
				m._UIView = new a.UI.ImageUIView(l)
			} else {
				k._bNoUI = true;
				m._UIView = new a.UI.FakeView(l)
			}
		}
		m._UIEditor = false
	}
	var e = j.prototype;
	e.getTwain = function() {
		var k = this;
		return k._stwain
	};
	e.getView = function() {
		var k = this;
		return k._UIView
	};
	e.OnReady = function() {
		var l = this,
			k = l.getView();
		k.BaseUrl = g.getServerImageUrlPrefix(l._stwain);
		return true
	};
	e.count = function() {
		var l = this,
			k = l.getView();
		return k.HowManyImagesInBuffer()
	};
	e.clear = function() {
		var l = this,
			k = l.getView();
		if (l._UIEditor && l._UIEditor._UIView) {
			l._UIEditor._UIView.RemoveAllImages();
			l._UIEditor.updateMode()
		}
		return k.RemoveAllImages()
	};
	e.GetCurrentImageIndex = function() {
		var l = this,
			k = l.getView();
		return k.GetCurrentImageIndex()
	};
	e.GetSelectedImageIndex = function(l) {
		var k = this.GetSelectedIndexes();
		if (l >= 0 && l < k.length) {
			return k[l]
		}
		return -1
	};
	e.GetSelectedIndexes = function() {
		var l = this,
			k = l.getView();
		return k.GetSelectedIndexes()
	};
	e.add = function(m, n, l) {
		var o = this,
			k = o.getView();
		if (o._UIEditor && o._UIEditor._UIView) {
			o._UIEditor._UIView.AddImage(m, n, l);
			o._UIEditor.updateMode()
		}
		return k.AddImage(m, n, l)
	};
	e.remove = function(m, l) {
		var n = this,
			k = n.getView();
		if (n._UIEditor && n._UIEditor._UIView) {
			n._UIEditor._UIView.RemoveImage(m, l);
			n._UIEditor.updateMode()
		}
		return k.RemoveImage(m, l)
	};
	e.MoveImage = function(m, l) {
		var n = this,
			k = n.getView();
		return k.MoveImage(m, l)
	};
	e.SwitchImage = function(m, l) {
		var n = this,
			k = n.getView();
		return k.SwitchImage(m, l)
	};
	e.GetImageWidth = function(o) {
		var r = this,
			p = o * 1,
			l, m, q, n, k;
		m = r.getView();
		q = m.GetDataImageControlList();
		l = q.length;
		if (p < 0 || p > l) {
			return 0
		}
		n = q[p];
		if (n && n.rawWidth) {
			k = n.rawWidth
		} else {
			k = r._stwain.GetImageWidth(p)
		}
		return k
	};
	e.get = function(m) {
		var p = this,
			n = parseInt(m),
			k, l, o;
		l = p.getView();
		o = l.GetDataImageControlList();
		k = o.length;
		if (n < 0 || n > k) {
			return false
		}
		return o[n]
	};
	e.refresh = function(l, m, k, r, n) {
		var o = this,
			p = l * 1;
		if (k) {
			var q, u, s, t;
			u = o.getView();
			s = u.GetDataImageControlList();
			q = s.length;
			if (p < 0 || p > q) {
				return false
			}
			u.SetDataImageControl(p, r);
			u.__SetCurrentIndex(p);
			if (o._UIEditor) {
				o._UIEditor.refresh(p)
			}
		}
		if (n) {
			if (o._UIEditor) {
				o._UIEditor.refresh(p)
			}
		}
		return true
	};
	e.refreshEditor = function(k, l) {
		var m = this;
		if (m._UIEditor) {
			m._UIEditor.refresh(k)
		}
		return true
	};
	e.Go = function(l) {
		var m = this,
			k = m.getView();
		if (m._UIEditor && m._UIEditor._UIView) {
			m._UIEditor._UIView.Go(l);
			m._UIEditor.updateMode()
		}
		return k.Go(l)
	};
	e.__Next = function() {
		var l = this,
			k = l.getView();
		if (l._UIEditor && l._UIEditor._UIView) {
			l._UIEditor._UIView.__Next();
			l._UIEditor.updateMode()
		}
		return k.__Next()
	};
	e.__Previous = function() {
		var l = this,
			k = l.getView();
		if (l._UIEditor && l._UIEditor._UIView) {
			l._UIEditor._UIView.__Previous();
			l._UIEditor.updateMode()
		}
		return k.__Previous()
	};
	e.SetSelectedImageCount = function(l) {
		var m = this,
			k = m.getView();
		return k.SetSelectedImageCount(l)
	};
	e.SetSelectedImageIndex = function(m, l) {
		var n = this,
			k = n.getView();
		return k.SetSelectedImageIndex(m, l)
	};
	e.GetZoom = function() {
		var l = this,
			k = l.getView();
		return k.GetZoom()
	};
	e.SetZoom = function(l) {
		var m = this,
			k = m.getView();
		return k.SetZoom(l)
	};
	e.Print = function() {
		var r = this,
			l = r.getView();
		if (l.cCurrentIndex < 0) {
			return
		}
		var q = [],
			o = l.GetDataImageControlList();
		for (var n = 0; n < o.length; n++) {
			var m = b.getImageUrl(l.BaseUrl, n, -1, -1);
			var k = o[n];
			var p = new a.UI.PrintUrl(m, k.imageWidth, k.imageHeight);
			q.push(p)
		}
		b.print(q);
		return true
	};
	e._isNoUI = function() {
		var k = this;
		if (k._stwain._bNoUI) {
			g.output("warning: cannot find UI.")
		}
		return k._stwain._bNoUI
	};
	e.ChangeSize = function(l, m) {
		var n = this,
			k = n.getView();
		return k.ChangeImageViewSize(l, m)
	};
	e.SetViewMode = function(m, l) {
		var n = this,
			k;
		if (n._isNoUI()) {
			return
		}
		k = n.getView();
		return k.SetViewMode(m, l)
	};
	e.ShowImageEditorEx = function(w, u, o, n, r, l, t, v) {
		var s = this;
		if (s._isNoUI()) {
			return
		}
		switch (r) {
			case 0:
				break;
			case 1:
				break;
			case 2:
				break;
			case 3:
				if (s._UIEditor) {
					s._UIEditor.CloseImageEditor();
					return true
				}
				break;
			case 4:
				break
		}
		var p, B, A = document,
			m, k, z, C;
		C = s.getView();
		if (s.getTwain()._strDWTControlContainerID == t) {
			l = false;
			g.output("warning: cannot use the same DIV for the main viewer and the editor viewer.")
		}
		for (var q = 0; q < Dynamsoft.WebTwainEnv.DynamicContainers.length; q++) {
			if (Dynamsoft.WebTwainEnv.DynamicContainers[q] == t) {
				l = false;
				g.output("warning: cannot use an DIV which is already consumed by the method CreateDWTObject.");
				break
			}
		}
		if (l && t) {
			k = A.getElementById(t);
			if (k && k.nodeName == "DIV") {
				s._stwain.__strDWTControlEditorID = t
			} else {
				if (k && k.nodeName != "DIV") {
					g.output("warning: cannot create the editor viewer in a non-DIV element.")
				}
				l = false;
				k = A.createElement("div");
				A.body.appendChild(k)
			}
		} else {
			k = A.createElement("div");
			A.body.appendChild(k)
		}
		z = {
			Container: a.one(k),
			aryModelImageControl: C.GetDataImageControlList(),
			BaseUrl: C.BaseUrl,
			cIndex: C.cCurrentIndex,
			stwain: s.getTwain(),
			bExistingDIV: l,
			bHideToolBar: v
		};
		B = new Dynamsoft.Lib.UI.ImageUIEditor(s, z);
		s._UIEditor = B;
		B.bShow = true;
		if (l && t) {
			return B.ShowImageEditorEx(w, u, o, n, 0, true)
		} else {
			return B.ShowImageEditorEx(w, u, o, n, 0, false)
		}
	};
	e.SetSelectionRectAspectRatio = function(m) {
		var p = this,
			n = m,
			k, o, l;
		p.__Ratio = n;
		if (p._isNoUI()) {
			return true
		}
		l = p.getView();
		return l.SetSelectionRectAspectRatio(n)
	};
	e.GetSelectionRectAspectRatio = function() {
		return this.__Ratio
	};
	e.GetSelectionImageBorderColor = function() {
		return this.__SelectionImageBorderColor
	};
	e.SetSelectionImageBorderColor = function(l) {
		var n = this,
			m = l,
			k;
		if (n._isNoUI()) {
			return true
		}
		k = n.getView();
		n.__SelectionImageBorderColor = m;
		if (Dynamsoft.Lib.isNumber(m)) {
			m = Dynamsoft.Lib.getColor(m)
		}
		return k.SetSelectionImageBorderColor(m)
	};
	e.GetBackgroundColor = function() {
		return this.__BackgroundColor
	};
	e.SetBackgroundColor = function(m, p) {
		var q = this,
			n = m,
			k, o, l;
		q.__BackgroundColor = n;
		if (q._isNoUI()) {
			return true
		}
		l = q.getView();
		if (Dynamsoft.Lib.isNumber(n)) {
			n = Dynamsoft.Lib.getColor(n)
		}
		k = a.one("#" + q._stwain._strDWTControlContainerID);
		if (k) {
			o = a.one(".dynamsoft-dwt-container-box", k);
			if (o) {
				o.style("background-color", n)
			}
		}
		if (p) {
			return l.SetBackgroundColor(n, true)
		} else {
			if (q._UIEditor && q._UIEditor._UIView) {
				q._UIEditor._UIView.SetBackgroundColor(n)
			}
			return l.SetBackgroundColor(n)
		}
	};
	e.GetAllowMultiSelect = function() {
		var l = this,
			k = l.getView();
		if (l._isNoUI()) {
			return false
		}
		return k.GetAllowMultiSelect()
	};
	e.SetAllowMultiSelect = function(l) {
		var m = this,
			k = m.getView();
		if (m._isNoUI()) {
			return true
		}
		return k.SetAllowMultiSelect(l)
	};
	e.GetFitWindowType = function() {
		var l = this,
			k = l.getView();
		if (l._isNoUI()) {
			return 0
		}
		return k.GetFitWindowType()
	};
	e.SetFitWindowType = function(l) {
		var m = this,
			k = m.getView();
		if (m._isNoUI()) {
			return true
		}
		return k.SetFitWindowType(l)
	};
	e.GetIfFitWindow = function() {
		var l = this,
			k = l.getView();
		if (l._isNoUI()) {
			return true
		}
		return k.GetIfFitWindow()
	};
	e.SetIfFitWindow = function(l) {
		var m = this,
			k = m.getView();
		if (m._isNoUI()) {
			return true
		}
		return k.SetIfFitWindow(l)
	};
	e.GetImageMargin = function() {
		var l = this,
			k = l.getView();
		if (l._isNoUI()) {
			return 0
		}
		return k.GetImageMargin()
	};
	e.SetImageMargin = function(l) {
		var m = this,
			k = m.getView();
		if (m._isNoUI()) {
			return true
		}
		return k.SetImageMargin(l)
	};
	e.GetMouseShape = function() {
		var l = this,
			k = l.getView();
		if (l._isNoUI()) {
			return 0
		}
		return k.GetMouseShape()
	};
	e.SetMouseShape = function(l) {
		var m = this,
			k = m.getView();
		if (m._isNoUI()) {
			return true
		}
		return k.SetMouseShape(l)
	};
	e.GetShowPageNumber = function() {
		var l = this,
			k = l.getView();
		if (l._isNoUI()) {
			return false
		}
		return k.GetShowPageNumber()
	};
	e.SetShowPageNumber = function(l) {
		var m = this,
			k = m.getView();
		if (m._isNoUI()) {
			return true
		}
		return k.SetShowPageNumber(l)
	};
	e.GetIfAutoScroll = function() {
		var l = this,
			k = l.getView();
		if (l._isNoUI()) {
			return false
		}
		return k.GetIfAutoScroll()
	};
	e.SetIfAutoScroll = function(l) {
		var m = this,
			k = m.getView();
		if (m._isNoUI()) {
			return true
		}
		return k.SetIfAutoScroll(l)
	};
	e.OverlayRectangle = function(s, l, o, q, k, m, p) {
		var n = this,
			r = n.getView();
		if (n._isNoUI()) {
			return true
		}
		return r.OverlayRectangle(s, l, o, q, k, m, p)
	};
	e.SetSelectedImageArea = function(n, p, o, m, l) {
		var q = this,
			k = q.getView();
		if (q._isNoUI()) {
			return true
		}
		return k.SetSelectedImageArea(n, p, o, m, l)
	};

	function c() {
		var k = this;
		k.bIsDirty = false;
		k.imageToShow = d;
		k.imageWidth = 0;
		k.imageHeight = 0;
		k.rawWidth = 0;
		k.bOriginalImage = false;
		k.imageUrl = "";
		k.iImageControlWidth = 0;
		k.iImageControlHeight = 0;
		k.imageIndex = -1;
		k.aryOverlayRectangleData = []
	}
	c.prototype.Clear = function(k) {
		var l = this;
		if (l.imageToShow && k == true) {
			l.imageToShow.onload = undefined;
			l.imageToShow.src = "data:,"
		}
		l.imageToShow = false;
		l.imageUrl = "";
		l.aryOverlayRectangleData = []
	};

	function i(l, k, m) {
		var n = this;
		n.Url = l;
		n.Width = k;
		n.Height = m
	}
	a.UI = a.UI || {};
	a.UI.ImageUIManager = j;
	a.UI.ModelImageControl = c;
	a.UI.PrintUrl = i
})(Dynamsoft.Lib);
(function(c, a) {
	if (!c.product.bChromeEdition) {
		return
	}
	var d = Dynamsoft.WebTwainEnv,
		f = dynamsoft.lib,
		b = dynamsoft.navInfo,
		e = f.each;
	c.env.WSVersion = "12.0.0";
	c.env.WSSession = new Date().getTime();
	c.getHttpUrl = function(g) {
		if (g.ssl) {
			return ["https://", g.ip, ":", g.port, "/"].join("")
		} else {
			return ["http://", g.ip, ":", g.port, "/"].join("")
		}
	};
	c.getWSUrl = function(i, h, g) {
		if (g) {
			return ["wss://", i, ":", h].join("")
		} else {
			return ["ws://", i, ":", h].join("")
		}
	};
	c.getWS = function(q, h, j) {
		var o = this,
			l, r = c.getWSUrl(q, h, j),
			m = c.product.wsProtocol,
			k = window.MozWebSocket;
		if (o.detect.OnCreatWS) {
			o.detect.OnCreatWS(r, m)
		}
		if (typeof k != "undefined") {
			if (m) {
				l = new k(r, m)
			} else {
				l = new k(r)
			}
		} else {
			var i = WebSocket;
			if (b.bEdge) {
				var n = window,
					g = parent;
				while (n != g && g.WebSocket) {
					i = g.WebSocket;
					n = g.window;
					g = g.parent
				}
			}
			if (m) {
				l = new i(r, m)
			} else {
				l = new i(r)
			}
		}
		return l
	};
	c._init = function(p) {
		var n = Dynamsoft.Lib,
			l = dynamsoft.dcp,
			j = n.LS.item("DWT_port"),
			h = n.LS.item("DWT_ssl"),
			g;
		if (l.bEnhancedMode) {
			return true
		}
		n.detect.urls.splice(0);
		n.detect.cUrlIndex = 0;
		if (j !== a && h !== a) {
			g = {
				port: j,
				ssl: (h == "true")
			}
		}
		var k = function(q) {
			if (!g) {
				return true
			}
			if (q) {
				if (q.port != g.port || q.ssl != g.ssl) {
					return true
				}
			}
			return false
		};
		var i, m;
		if (n.detect.detectType === 1) {
			if (g !== a && g.ssl) {
				n.detect.urls.push(g)
			}
			e(n.detect.ports, function(q) {
				if (q.ssl) {
					if (k(q)) {
						n.detect.urls.push(q)
					}
				}
			})
		} else {
			if (n.detect.detectType === 0) {
				if (g !== a && !g.ssl) {
					n.detect.urls.push(g)
				}
				e(n.detect.ports, function(q) {
					if (q.ssl === false) {
						if (k(q)) {
							n.detect.urls.push(q)
						}
					}
				})
			} else {
				if (g !== a) {
					n.detect.urls.push(g)
				}
				e(n.detect.ports, function(q) {
					if (k(q)) {
						n.detect.urls.push(q)
					}
				})
			}
		}
		i = a
	};
	c._reconnect = function() {
		var m = Dynamsoft.Lib,
			l, i, h, k;
		if (m.detect.aryReconnectSTwains.length > 0) {
			k = m.detect.aryReconnectSTwains[0]
		}
		if (!k || k.__bConnecting) {
			return
		}
		k.__bConnecting = true;
		l = k._ip;
		h = k._ssl;
		i = k._port;
		try {
			var g = m.getWS(l, i, h);
			g.onopen = function() {
				if (g.readyState == 1) {
					k._objWS = g;
					if (!k.bReady) {
						k._OnReady(true)
					}
					k.__bConnecting = false;
					c.detect.hideMask();
					m.detect.bOK = true
				} else {
					if (g.readyState == 0) {
						setTimeout(g.onopen, 100)
					} else {
						k.__bConnecting = false
					}
				}
			};
			g.onclose = function() {
				g.onopen = null;
				k.__bConnecting = false;
				if (!k.bReady) {
					k.__wsRetry++;
					if (k.__wsRetry < 5) {
						setTimeout(c._reconnect, 1000)
					} else {
						c.closeProgress("Reconnect");
						c.Errors.Server_Restarted(k)
					}
				} else {
					c.closeProgress("Reconnect");
					c.detect.hideMask()
				}
			}
		} catch (j) {
			c.log(j);
			k.__bConnecting = false;
			if (!k.bReady) {
				k.__wsRetry++;
				if (k.__wsRetry < 5) {
					setTimeout(c._reconnect, 1000)
				}
			} else {
				c.detect.hideMask()
			}
		}
	};
	c.startWS = function() {
		var k = c.detect,
			m;
		if (!c.product.bChromeEdition) {
			c.appendMessage("This browser is currently not supported. Please try Chrome or Firefox!");
			return
		}
		if (!k.bNoControlEvent) {
			k.showMask()
		}
		if (k.OnDetectNext) {
			k.OnDetectNext()
		}
		if (k.tryTimes == 0 && k.cUrlIndex > 0 && k.arySTwains.length > 0) {
			if (!k.bNoControlEvent) {
				k.hideMask();
				if (c.isFunction(k.onNoControl)) {
					var l, g, j;
					l = k.arySTwains[0];
					g = l._width;
					j = l._height;
					if (g <= 0) {
						g = 270
					}
					if (j <= 0) {
						j = 350
					}
					k.onNoControl(l._strDWTControlContainerID, g, j, l)
				}
				k.bNoControlEvent = true
			}
		}
		if (k.cUrlIndex >= k.urls.length) {
			k.cUrlIndex = 0;
			k.tryTimes++
		}
		if (k.arySTwains.length > 0) {
			m = k.arySTwains[0]
		} else {
			k.hideMask();
			k.bOK = true;
			return
		}
		if (m.bReady) {
			k.arySTwains.splice(0, 1);
			if (k.arySTwains.length <= 0) {
				k.hideMask();
				k.bOK = true
			} else {
				setTimeout(c.startWS, 100)
			}
			return
		}
		if (m.__bConnecting) {
			return
		}
		m.__bConnecting = true;
		try {
			var n = k.urls[k.cUrlIndex],
				h = c.getWS(c.product.ip, n.port, n.ssl);
			c.log(["connecting ... [port:", n.port, "]"].join(""));
			h.onopen = function() {
				m.__bConnecting = false;
				if (h.readyState == 1) {
					m._objWS = h;
					if (!m.bReady) {
						m._port = n.port;
						m._ssl = n.ssl;
						m._OnReady()
					}
					k.arySTwains.splice(0, 1);
					if (k.arySTwains.length <= 0) {
						k.hideMask();
						k.bOK = true
					} else {
						setTimeout(c.startWS, 100)
					}
				} else {
					if (h.readyState == 0) {
						setTimeout(h.onopen, 100)
					} else {}
				}
			};
			h.onclose = function() {
				h.onopen = null;
				m.__bConnecting = false;
				if (!m.bReady) {
					k.cUrlIndex++;
					setTimeout(c.startWS, 100)
				} else {
					k.hideMask()
				}
			}
		} catch (i) {
			c.log(i);
			m.__bConnecting = false;
			if (!m.bReady) {
				k.cUrlIndex++;
				setTimeout(c.startWS, 100)
			} else {
				k.hideMask()
			}
		}
	};
	c.startWSByIP = function() {
		var l = c.detect,
			m;
		if (!c.product.bChromeEdition) {
			c.appendMessage("This browser is currently not supported. Please try Chrome or Firefox!");
			return
		}
		if (!l.bNoControlEvent) {
			l.showMask()
		}
		if (l.arySTwainsByIP.length > 0) {
			m = l.arySTwainsByIP[0]
		} else {
			l.hideMask();
			l.bOK = true;
			return
		}
		if (m.bReady) {
			l.arySTwainsByIP.splice(0, 1);
			if (l.arySTwainsByIP.length <= 0) {
				l.hideMask();
				l.bOK = true
			} else {
				setTimeout(c.startWSByIP, 100)
			}
			return
		}
		if (m.__bConnecting) {
			return
		}
		if (m.__wsRetry > 0) {
			if (!l.bNoControlEvent) {
				l.hideMask();
				if (c.isFunction(l.onNoControl)) {
					var g, k;
					g = m._width;
					k = m._height;
					if (g <= 0) {
						g = 270
					}
					if (k <= 0) {
						k = 350
					}
					l.onNoControl(m._strDWTControlContainerID, g, k, m)
				}
				l.bNoControlEvent = true
			}
		}
		m.__bConnecting = true;
		try {
			var i, h;
			i = m._port;
			h = c.getWS(m._ip, i, m._ssl);
			c.log(["connecting ... [port:", i, "]"].join(""));
			h.onopen = function() {
				m.__bConnecting = false;
				if (h.readyState == 1) {
					m._objWS = h;
					if (!m.bReady) {
						m._OnReady()
					}
					l.arySTwainsByIP.splice(0, 1);
					if (l.arySTwainsByIP.length <= 0) {
						l.hideMask();
						l.bOK = true
					} else {
						setTimeout(c.startWSByIP, 100)
					}
				} else {
					if (h.readyState == 0) {
						setTimeout(h.onopen, 100)
					} else {}
				}
			};
			h.onclose = function() {
				h.onopen = null;
				m.__bConnecting = false;
				if (!m.bReady) {
					m.__wsRetry++;
					setTimeout(c.startWSByIP, 100)
				} else {
					l.hideMask()
				}
			}
		} catch (j) {
			c.log(j);
			m.__bConnecting = false;
			if (!m.bReady) {
				m.__wsRetry++;
				setTimeout(c.startWSByIP, 100)
			} else {
				l.hideMask()
			}
		}
	};
	c.html5.closeAll = function() {
		var n, l, p, m, k, h, g;
		c.dlgProgress = false;
		c.detect.bOK = false;
		c.detect.bFirst = true;
		for (n = c.detect.arySTwains.length - 1; n >= 0; n--) {
			p = c.detect.arySTwains[n];
			if (!p) {
				continue
			}
			m = p._strDWTControlContainerID;
			g = false;
			for (l = 0; l < Dynamsoft.WebTwainEnv.Containers.length; l++) {
				k = Dynamsoft.WebTwainEnv.Containers[l];
				if (!k) {
					continue
				}
				h = k.ContainerId;
				if (m == h) {
					g = true;
					break
				}
			}
			if (g) {
				p.__unload();
				c.detect.arySTwains.splice(n, 1)
			}
		}
	};
	c.bio = false;
	c.progressMessage = "";
	c.dialogShowStatus = false;
	c.needShowTwiceShowDialog = false;
	c.dlgProgress = false;
	c.cancelFrome = 0;
	c.dlgRef = 0;
	c.showProgress = function(p, k, i) {
		var o = p;
		c.log("showProgress:" + k + ",bCancel:" + i);
		if ((c.cancelFrome == 0 && o.__IfShowProgressBar == true) || (c.cancelFrome != 0 && o.__IfShowCancelDialogWhenImageTransfer == true)) {
			var n = c.one(".dynamsoft-btnCancel"),
				g = n && n.getEL();
			if (g) {
				if (i == false) {
					g.style.display = "none"
				} else {
					g.style.display = ""
				}
			}
			if (c.dialogShowStatus == false) {
				if (c.dlgProgress) {
					c.dlgProgress.showModal()
				}
				c.dialogShowStatus = true;
				var h = c.one(".dynamsoft-finalMessage");
				var q = c.one(".dynamsoft-progressBar"),
					j = q && q.getEL();
				var l = c.one(".dynamsoft-status");
				if (h && h.getEL()) {
					h.html("")
				}
				if (l && l.getEL()) {
					l.html("0%")
				}
				if (j) {
					if (c.env.bIE) {
						if (j.objProgressBar) {
							j.objProgressBar.setValue(0)
						} else {
							j.value = 0
						}
					} else {
						j.value = 0
					}
				}
			}
			c.dlgRef++
		}
	};
	c.closeProgress = function(g) {
		c.log("closeProgress:" + g);
		var h = c.one(".dynamsoft-btnCancel");
		if (c.needShowTwiceShowDialog == true && c.cancelFrome == 1) {
			if (h && h.getEL()) {
				h[0].innerHTML = "Cancel"
			}
		} else {
			if (h && h.getEL()) {
				h[0].innerHTML = "Cancel"
			}
			if (c.dialogShowStatus == true) {
				if (c.dlgProgress) {
					c.dlgProgress.close()
				}
				c.dialogShowStatus = false
			}
			c.needShowTwiceShowDialog = false;
			c.cancelFrome = 0
		}
		c.dlgRef--;
		if (c.dlgRef <= 0) {
			c.dlgRef = 0
		}
	};
	c.html5.DynamicWebTwain = function(g) {
		var k, h, j;
		for (h = 0; h < c.detect.arySTwains.length; h++) {
			j = c.detect.arySTwains[h];
			if (j._strDWTControlContainerID == g.containerID) {
				return false
			}
		}
		k = new c.html5.STwain(g);
		c.detect.arySTwains.push(k);
		if (c.detect.bFirst) {
			c._init(g)
		}
		c.detect.bFirst = false;
		return k
	};
	c.html5.CreateDWTObject = function(g, n, k, o) {
		var l, p, h, j, m;
		if (!k) {
			h = c.get(g);
			if (!h) {
				if (o) {
					o()
				}
				return false
			}
		}
		for (j = 0; j < c.detect.arySTwains.length; j++) {
			m = c.detect.arySTwains[j];
			if (m._strDWTControlContainerID == g) {
				return false
			}
		}
		l = {
			containerID: g,
			width: 300,
			height: 300,
			onWSReady: o,
			bNoUI: k
		};
		if (!k) {
			if (h.style.width) {
				l.width = h.style.width
			}
			if (h.style.height) {
				l.height = h.style.height
			}
		}
		if (n) {
			l.customIP = true;
			l.ip = n.ip;
			l.port = n.port
		}
		p = new c.html5.STwain(l);
		if (n) {
			c.detect.arySTwainsByIP.push(p);
			return p
		}
		c.detect.arySTwains.push(p);
		if (c.detect.bFirst) {
			c._init(l)
		}
		c.detect.bFirst = false;
		return p
	};
	d.RemoveAllAuthorizations = function() {
		var i = c.LS.item("DWT_port"),
			k = c.LS.item("DWT_ssl"),
			g = "http://",
			h = c.product.ip,
			j;
		if (k == "true") {
			g = "https://"
		}
		j = [g, h, ":", i, "/dwt/dwt_", d.Trial ? "trial_" : "", c.product.getServerVersionInfo(), "/RemoveAllAuthorizations?t=", c.now()].join("");
		c.ajax({
			method: "GET",
			url: j,
			async: true
		});
		return true
	}
})(Dynamsoft.Lib);
(function(b) {
	if (!b.product.bPluginEdition && !b.product.bActiveXEdition) {
		return
	}
	if (!Object.defineProperty) {
		Object.defineProperty = function(p, m, o) {
			var l = p[m],
				j = function() {
					return o.get.apply(p, [l])
				},
				n = function(q) {
					return (l = o.set.apply(p, [q]))
				};
			if (p.__defineGetter__) {
				p.__defineGetter__(m, j);
				p.__defineSetter__(m, n)
			} else {
				var k = function(r) {
					if (event.propertyName == m) {
						p.detachEvent("onpropertychange", k);
						var q = n(p[m]);
						p[m] = j;
						p[m].toString = j;
						p.attachEvent("onpropertychange", k)
					}
				};
				p[m] = j;
				p[m].toString = j;
				p.attachEvent("onpropertychange", k)
			}
		}
	}
	var e = !0,
		f = !1,
		i = {
			isFunction: function(j) {
				return j && typeof(j) === "function"
			},
			isReturnSuccess: function(k) {
				if (k._errorCode === -2115) {
					return e
				}
				if (k._errorCode === -2003) {
					var j = window.open("", "ErrorMessage", "height=500,width=750,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");
					j.document.writeln(k.HTTPPostResponseString)
				}
				if (k._errorCode == 0) {
					return e
				}
				return f
			},
			setErrorString: function(j) {
				j._errorCode = j.getSWebTwain().ErrorCode;
				j._errorString = j.getSWebTwain().ErrorString
			},
			checkErrorString: function(j) {
				i.setErrorString(j);
				return i.isReturnSuccess(j)
			},
			wrapperRet: function(m, k, j, n, l) {
				if (i.checkErrorString(m)) {
					if (i.isFunction(j)) {
						if (l) {
							j(m.getSWebTwain().HTTPPostResponseString)
						} else {
							j()
						}
					}
				} else {
					if (i.isFunction(n)) {
						if (l) {
							n(m._errorCode, m._errorString, m.getSWebTwain().HTTPPostResponseString)
						} else {
							n(m._errorCode, m._errorString)
						}
					}
				}
				return k
			},
			getImageType: function(k) {
				var j = k.length;
				if (j < 4) {
					return -1
				}
				var l = k.lastIndexOf(".");
				if (l === -1) {
					return -1
				}
				var m = k.slice(l).toLowerCase();
				if (m === ".bmp" || m === ".dib") {
					return 0
				}
				if (m === ".jpg" || m === ".jpe" || m === ".jpeg" || m === ".jfif") {
					return 1
				}
				if (m === ".tif" || m === ".tiff") {
					return 2
				}
				if (m === ".png") {
					return 3
				}
				if (m === ".pdf") {
					return 4
				}
				if (m === ".gif") {
					return 5
				}
				return -1
			},
			replaceLocalFilename: function(j) {
				var k = j;
				if (b.env.bFileSystem) {
					k = decodeURI(k)
				}
				return k
			},
			makeParams: function() {
				var j = arguments;
				if (j === undefined || j.length === 0) {
					return undefined
				} else {
					return j
				}
			}
		};
	b.checkErrorString = i.checkErrorString;
	b.wrapperRet = i.wrapperRet;
	b.setErrorString = i.setErrorString;
	b.DynamicLoadAddonFuns = [];
	b.attachAddon = function(j) {
		b.each(b.DynamicLoadAddonFuns, function(k) {
			if (b.isFunction(k)) {
				k(j)
			}
		})
	};
	var a = 0,
		g = 1,
		c = 1,
		d = 2;
	b.attachProperty = function(j) {
		var l = j;
		var k = function(q, p, m) {
			var o;
			if (p !== a && p !== g) {
				o = p
			} else {
				o = {};
				if (p) {
					if (m == c) {
						o.set = function(n) {
							n = n * 1;
							if (!b.isNumber(n) || isNaN(n)) {
								b.Errors.InvalidValue(l);
								return f
							}
							l.getSWebTwain()[q] = n;
							return i.checkErrorString(l)
						}
					} else {
						if (m == d) {
							o.set = function(n) {
								if (!b.isBoolean(n)) {
									b.Errors.InvalidValue(l);
									return f
								}
								l.getSWebTwain()[q] = n;
								return i.checkErrorString(l)
							}
						} else {
							o.set = function(n) {
								if (!b.isString(n)) {
									b.Errors.InvalidValue(l);
									return f
								}
								l.getSWebTwain()[q] = n;
								return i.checkErrorString(l)
							}
						}
					}
				}
			}
			if (!o.get) {
				o.get = function() {
					var n = l.getSWebTwain()[q];
					l._errorCode = l.getSWebTwain().ErrorCode;
					l._errorString = l.getSWebTwain().ErrorString;
					return n
				}
			}
			Object.defineProperty(l, q, o)
		};
		k("ErrorCode", {
			get: function(m) {
				return l._errorCode
			}
		});
		k("ErrorString", {
			get: function(m) {
				return l._errorString
			}
		});
		k("LogLevel", g, c);
		k("Manufacturer", g);
		k("ProductFamily", g);
		k("ProductKey", {
			get: function() {
				return Dynamsoft.WebTwainEnv.ProductKey
			},
			set: function(q) {
				var p = e,
					n = q,
					r = Dynamsoft.WebTwainEnv,
					o = function() {
						if (Dynamsoft.WebTwainEnv.Trial) {
							return b.License.checkProductKey(l, {
								Core: e
							}, f, e)
						}
					};
				if (!b.isString(n) || n == "******") {
					n = ""
				}
				r.ProductKey = n;
				l.__licenseInfo = f;
				if (r.Trial && (n == "")) {
					p = f;
					o()
				} else {
					var m = function(s) {
						l.getSWebTwain().ProductKey = s
					};
					if (b.startsWith(n, "http://") || b.startsWith(n, "https://")) {
						b.ajax({
							method: "GET",
							url: n,
							async: false,
							onSuccess: function(s) {
								m(s)
							}
						});
						p = i.checkErrorString(l)
					} else {
						m(n);
						p = i.checkErrorString(l)
					}
				}
				return p
			}
		});
		k("ProductName", g);
		k("VersionInfo", g);
		k("BitDepth", g, c);
		k("Brightness", g, c);
		k("Contrast", g, c);
		k("CurrentSourceName", a);
		k("DataSourceStatus", a);
		k("DefaultSourceName", a);
		k("Duplex", a);
		k("IfAppendImage", g, d);
		k("IfAutoBright", g, d);
		k("IfAutoDiscardBlankpages", g, d);
		k("IfAutoFeed", g, d);
		k("IfAutomaticBorderDetection", g, d);
		k("IfAutomaticDeskew", g, d);
		k("IfAutoScan", g, d);
		k("IfDisableSourceAfterAcquire", g, d);
		k("IfDuplexEnabled", g, d);
		k("IfFeederEnabled", g, d);
		k("IfModalUI", g, d);
		k("IfScanInNewThread", g, d);
		k("IfShowCancelDialogWhenImageTransfer", g, d);
		k("IfShowUI", g, d);
		k("IfShowIndicator", g, d);
		k("IfUseTwainDSM", g, d);
		k("IfFeederLoaded", a, d);
		k("IfPaperDetectable", a, d);
		k("IfUIControllable", a, d);
		k("ImageBitsPerPixel", a);
		k("ImageCaptureDriverType", g, c);
		k("ImageLayoutDocumentNumber", a);
		k("ImageLayoutFrameBottom", a);
		k("ImageLayoutFrameLeft", a);
		k("ImageLayoutFrameNumber", a);
		k("ImageLayoutFrameRight", a);
		k("ImageLayoutFrameTop", a);
		k("ImageLayoutPageNumber", a);
		k("ImageLength", a);
		k("ImagePixelType", a);
		k("ImageWidth", a);
		k("ImageXResolution", a);
		k("ImageYResolution", a);
		k("MagData", a);
		k("MagType", a);
		k("PageSize", g, c);
		k("PendingXfers", a);
		k("PixelFlavor", g, c);
		k("PixelType", g, c);
		k("Resolution", g, c);
		k("SourceCount", a);
		k("TransferMode", g, c);
		k("Unit", g, c);
		k("XferCount", g, c);
		k("Capability", g, c);
		k("CapCurrentIndex", g, c);
		k("CapCurrentValue", g, c);
		k("CapDefaultIndex", a);
		k("CapDefaultValue", a);
		k("CapDescription", g);
		k("CapMaxValue", g, c);
		k("CapMinValue", g, c);
		k("CapNumItems", g, c);
		k("CapStepSize", g, c);
		k("CapType", g, c);
		k("CapValue", g, c);
		k("CapValueString", g);
		k("CapValueType", g, c);
		k("AllowMultiSelect", g, d);
		k("BackgroundColor", g, c);
		k("BackgroundFillColor", g, c);
		k("BlankImageCurrentStdDev", a);
		k("BlankImageMaxStdDev", g, c);
		k("BlankImageThreshold", g, c);
		k("CurrentImageIndexInBuffer", {
			set: function(m) {
				if (m != l.getSWebTwain().CurrentImageIndexInBuffer) {
					l.getSWebTwain().CurrentImageIndexInBuffer = m
				}
				return i.checkErrorString(l)
			}
		});
		k("FitWindowType", g, c);
		k("HowManyImagesInBuffer", a);
		k("IfFitWindow", g, d);
		k("ImageMargin", g, c);
		k("MaxImagesInBuffer", g, c);
		k("MouseX", a);
		k("MouseY", a);
		k("SelectedImagesCount", g, c);
		k("SelectionImageBorderColor", g);
		k("Zoom", g, c);
		k("MouseShape", g, c);
		k("HTTPPostResponseString", a);
		k("AsyncMode", g, d);
		k("FTPPassword", g);
		k("FTPPort", {
			set: function(m) {
				if (m !== "") {
					m = m * 1;
					l.getSWebTwain().FTPPort = m;
					return i.checkErrorString(l)
				}
				return f
			}
		});
		k("FTPUserName", g);
		k("HTTPPort", {
			set: function(m) {
				if (m !== "") {
					m = m * 1;
					l.getSWebTwain().HTTPPort = m;
					return i.checkErrorString(l)
				} else {
					m = b.detect.ssl ? 443 : 80;
					l.getSWebTwain().HTTPPort = m;
					return i.checkErrorString(l)
				}
				return e
			}
		});
		k("HTTPPassword", g);
		k("HTTPUserName", g);
		k("IfPASVMode", g, d);
		k("IfShowProgressBar", g, d);
		k("ProxyServer", g);
		k("IfShowFileDialog", g, d);
		k("IfTiffMultiPage", g, d);
		k("PDFAuthor", g);
		k("PDFCompressionType", g, c);
		k("PDFCreationDate", g);
		k("PDFCreator", g);
		k("PDFKeywords", g);
		k("PDFModifiedDate", g);
		k("PDFProducer", g);
		k("PDFSubject", g);
		k("PDFTitle", g);
		k("PDFVersion", g);
		k("TIFFCompressionType", g, c);
		k("JPEGQuality", {
			set: function(m) {
				m = m * 1;
				if (m >= 100) {
					m = 100
				} else {
					if (m < 0) {
						m = 0
					}
				}
				l.getSWebTwain().JPEGQuality = m;
				return i.checkErrorString(l)
			}
		});
		k("HttpContentTypeFieldValue", g);
		k("SelectionRectAspectRatio", g, c);
		k("IfAllowLocalCache", g, d);
		k("_AutoCropMethod", g, d);
		k("BrokerProcessType", g, c);
		k("BorderStyle", g, c);
		k("IfShowPrintUI", g, d);
		k("VScrollBar", g, d);
		k("EnableInteractiveZoom", g, d);
		k("ImageEditorIfEnableEnumerator", g, d);
		k("ImageEditorIfReadonly", g, d);
		k("ImageEditorIfModal", g, d);
		k("ImageEditorWindowTitle", g);
		k("IfSSL", g, d);
		k("AllowPluginAuthentication", g, d);
		k("HttpFieldNameOfUploadedImage", g);
		k("MaxInternetTransferThreads", g, c);
		k("MaxUploadImageSize", g, c);
		k("IfOpenImageWithGDIPlus", g, d);
		k("BufferMemoryLimit", g, c);
		k("Width", {
			get: function() {
				return l.getSWebTwain().style.width
			},
			set: function(m) {
				l._ChangeWidth(m);
				return i.checkErrorString(l)
			}
		});
		k("Height", {
			get: function() {
				return l.getSWebTwain().style.height
			},
			set: function(m) {
				l._ChangeHeight(m);
				return i.checkErrorString(l)
			}
		});
		k("IfThrowException", g, d);
		k("IfAutoScroll", g, d);
		k("ShowPageNumber", {
			get: function() {
				return f
			},
			set: function(m) {
				return f
			}
		})
	};
	b.attachMethod = function(l) {
		var o = l,
			j = function(p) {
				if (!b.License.checkProductKey(o, {
						Core: e
					})) {
					if (b.isFunction(p)) {
						p(o.ErrorCode, o.ErrorString)
					}
					return f
				}
				return e
			},
			k = function(q, p) {
				if (!b.License.checkPDFProductKeyWhenNeeds(o, q)) {
					if (b.isFunction(p)) {
						p(o.ErrorCode, o.ErrorString)
					}
					return f
				}
				return e
			},
			m = function(q, p) {
				if (q._HowManyImagesInBuffer == 0) {
					b.Errors.NoImage(q);
					if (b.isFunction(p)) {
						p(q.ErrorCode, q.ErrorString)
					}
					return false
				}
				return true
			},
			n = function(q, r, p) {
				if (!m(q, p)) {
					return false
				}
				if (isNaN(r) || !b.isNumber(r) || r < 0 || r >= q.HowManyImagesInBuffer) {
					b.Errors.IndexOutOfRange(q);
					if (b.isFunction(p)) {
						p(q.ErrorCode, q.ErrorString)
					}
					return false
				}
				return true
			};
		l.RegisterEvent = function(p, r) {
			var q = ["__", p].join("");
			o[q] = r;
			o.getSWebTwain().RegisterEvent(p, r);
			return i.checkErrorString(o)
		};
		l.onEvent = function(p, q) {
			return o.RegisterEvent(p, q)
		};
		l.on = function(p, q) {
			return o.RegisterEvent(p, q)
		};
		l.CancelAllPendingTransfers = function() {
			o.getSWebTwain().CancelAllPendingTransfers();
			return i.checkErrorString(o)
		};
		l.CloseSource = function() {
			o.getSWebTwain().CloseSource();
			return i.checkErrorString(o)
		};
		l.CloseSourceManager = function() {
			o.getSWebTwain().CloseSourceManager();
			return i.checkErrorString(o)
		};
		l.DisableSource = function() {
			o.getSWebTwain().DisableSource();
			return i.checkErrorString(o)
		};
		l.FeedPage = function() {
			o.getSWebTwain().FeedPage();
			return i.checkErrorString(o)
		};
		l.GetDeviceType = function() {
			var p = o.getSWebTwain().GetDeviceType();
			i.setErrorString(o);
			return p
		};
		l.GetSourceNameItems = function(q) {
			var p = o.getSWebTwain().GetSourceNameItems(q);
			i.setErrorString(o);
			return p
		};
		l.SourceNameItems = function(q) {
			var p = o.getSWebTwain().GetSourceNameItems(q);
			i.setErrorString(o);
			return p
		};
		l.GetSourceNames = function() {
			return []
		};
		l.GetSourceType = function(q) {
			var p = o.getSWebTwain().GetSourceType(q);
			i.setErrorString(o);
			return p
		};
		l.OpenSource = function() {
			o.getSWebTwain().OpenSource();
			return i.checkErrorString(o)
		};
		l.OpenSourceManager = function() {
			o.getSWebTwain().OpenSourceManager();
			return i.checkErrorString(o)
		};
		l.ResetImageLayout = function() {
			o.getSWebTwain().ResetImageLayout();
			return i.checkErrorString(o)
		};
		l.RewindPage = function() {
			o.getSWebTwain().RewindPage();
			return i.checkErrorString(o)
		};
		l.SelectSource = function(p, q) {
			if (b.isUndefined(p)) {
				o.getSWebTwain().SelectSource();
				return i.checkErrorString(o)
			} else {
				o.getSWebTwain().SelectSource();
				var r = i.checkErrorString(o);
				if (r) {
					p();
					return true
				} else {
					q();
					return false
				}
			}
		};
		l.SelectSourceByIndex = function(p) {
			o.getSWebTwain().SelectSourceByIndex(p);
			return i.checkErrorString(o)
		};
		l.SetFileXferInfo = function(p, r) {
			var q = i.replaceLocalFilename(p);
			o.getSWebTwain().SetFileXferInfo(q, r);
			return i.checkErrorString(o)
		};
		l.SetImageLayout = function(s, r, q, p) {
			o.getSWebTwain().SetImageLayout(s, r, q, p);
			return i.checkErrorString(o)
		};
		l.CapGet = function() {
			var p = o.getSWebTwain().CapGet();
			i.setErrorString(o);
			return p
		};
		l.CapGetCurrent = function() {
			var p = o.getSWebTwain().CapGetCurrent();
			i.setErrorString(o);
			return p
		};
		l.CapGetDefault = function() {
			var p = o.getSWebTwain().CapGetDefault();
			i.setErrorString(o);
			return p
		};
		l.CapGetFrameBottom = function(q) {
			var p = o.getSWebTwain().CapGetFrameBottom(q);
			i.setErrorString(o);
			return p
		};
		l.CapGetFrameLeft = function(q) {
			var p = o.getSWebTwain().CapGetFrameLeft(q);
			i.setErrorString(o);
			return p
		};
		l.CapGetFrameRight = function(q) {
			var p = o.getSWebTwain().CapGetFrameRight(q);
			i.setErrorString(o);
			return p
		};
		l.CapGetFrameTop = function(q) {
			var p = o.getSWebTwain().CapGetFrameTop(q);
			i.setErrorString(o);
			return p
		};
		l.CapGetHelp = function() {
			var p = o.getSWebTwain().CapGetHelp();
			i.setErrorString(o);
			return p
		};
		l.CapGetLabel = function() {
			var p = o.getSWebTwain().CapGetLabel();
			i.setErrorString(o);
			return p
		};
		l.CapGetLabels = function() {
			var p = o.getSWebTwain().CapGetLabels();
			i.setErrorString(o);
			return p
		};
		l.CapIfSupported = function(q) {
			var p = o.getSWebTwain().CapIfSupported(q);
			i.setErrorString(o);
			return p
		};
		l.CapReset = function() {
			o.getSWebTwain().CapReset();
			return i.checkErrorString(o)
		};
		l.CapSet = function() {
			o.getSWebTwain().CapSet();
			return i.checkErrorString(o)
		};
		l.CapSetFrame = function(q, t, s, r, p) {
			o.getSWebTwain().CapSetFrame(q, t, s, r, p);
			return i.checkErrorString(o)
		};
		l.GetCapItems = function(q) {
			var p = o.getSWebTwain().GetCapItems(q);
			i.setErrorString(o);
			return p
		};
		l.GetCapItemsString = function(q) {
			var p = o.getSWebTwain().GetCapItemsString(q);
			i.setErrorString(o);
			return p
		};
		l.SetCapItems = function(q, p) {
			o.getSWebTwain().SetCapItems(q, p);
			return i.checkErrorString(o)
		};
		l.SetCapItemsString = function(q, p) {
			o.getSWebTwain().SetCapItemsString(q, p);
			return i.checkErrorString(o)
		};
		l.AddText = function(z, u, t, w, p, v, q, r) {
			var s = parseInt(z);
			if (isNaN(s) || s < 0 || s >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			o.getSWebTwain().AddText(s, u, t, w, p, v, q, r);
			return i.checkErrorString(o)
		};
		l.CreateTextFont = function(r, C, w, v, y, z, s, A, p, x, t, u, B, q) {
			o.getSWebTwain().CreateTextFont(r, C, w, v, y, z, s, A, p, x, t, u, B, q);
			return i.checkErrorString(o)
		};
		l.CopyToClipboard = function(q) {
			var p = parseInt(q);
			if (isNaN(p) || p < 0 || p >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			o.getSWebTwain().CopyToClipboard(p);
			return i.checkErrorString(o)
		};
		l.Erase = function(s, u, t, r, p) {
			var q = parseInt(s);
			if (isNaN(q) || q < 0 || q >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			o.getSWebTwain().Erase(q, u, t, r, p);
			return i.checkErrorString(o)
		};
		l.GetImageBitDepth = function(r) {
			var q = parseInt(r);
			if (isNaN(q) || q < 0 || q >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			var p = o.getSWebTwain().GetImageBitDepth(q);
			i.setErrorString(o);
			return p
		};
		l.GetImageWidth = function(r) {
			var q = parseInt(r);
			if (isNaN(q) || q < 0 || q >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			var p = o.getSWebTwain().GetImageWidth(q);
			i.setErrorString(o);
			return p
		};
		l.GetImageHeight = function(r) {
			var q = parseInt(r);
			if (isNaN(q) || q < 0 || q >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			var p = o.getSWebTwain().GetImageHeight(q);
			i.setErrorString(o);
			return p
		};
		l.GetImageSize = function(s, r, t) {
			var q = parseInt(s);
			if (isNaN(q) || q < 0 || q >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			var p = o.getSWebTwain().GetImageSize(q, r, t);
			i.setErrorString(o);
			return p
		};
		l.GetImageSizeWithSpecifiedType = function(r, s) {
			var q = parseInt(r);
			if (isNaN(q) || q < 0 || q >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			var p = o.getSWebTwain().GetImageSizeWithSpecifiedType(q, s);
			i.setErrorString(o);
			return p
		};
		l.GetImageXResolution = function(r) {
			var q = parseInt(r);
			if (isNaN(q) || q < 0 || q >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			var p = o.getSWebTwain().GetImageXResolution(q);
			i.setErrorString(o);
			return p
		};
		l.GetImageYResolution = function(r) {
			var q = parseInt(r);
			if (isNaN(q) || q < 0 || q >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			var p = o.getSWebTwain().GetImageYResolution(q);
			i.setErrorString(o);
			return p
		};
		l.GetSelectedImageIndex = function(q) {
			var p = o.getSWebTwain().GetSelectedImageIndex(q);
			i.setErrorString(o);
			return p
		};
		l.SetSelectedImageIndex = function(q, p) {
			o.getSWebTwain().SetSelectedImageIndex(q, p);
			return i.checkErrorString(o)
		};
		l.GetSelectedImagesSize = function(q) {
			var p = o.getSWebTwain().GetSelectedImagesSize(q);
			i.setErrorString(o);
			return p
		};
		l.GetSkewAngle = function(r) {
			var q = parseInt(r);
			if (isNaN(q) || q < 0 || q >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			var p = o.getSWebTwain().GetSkewAngle(q);
			i.setErrorString(o);
			return p
		};
		l.GetSkewAngleEx = function(t, v, u, s, p) {
			var r = parseInt(t);
			if (isNaN(r) || r < 0 || r >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			var q = o.getSWebTwain().GetSkewAngleEx(r, v, u, s, p);
			i.setErrorString(o);
			return q
		};
		l.IsBlankImage = function(r) {
			var q = parseInt(r);
			if (isNaN(q) || q < 0 || q >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			var p = o.getSWebTwain().IsBlankImage(q);
			i.setErrorString(o);
			return p
		};
		l.IsBlankImageEx = function(t, v, u, s, p, w) {
			var r = parseInt(t);
			if (isNaN(r) || r < 0 || r >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			var q = o.getSWebTwain().IsBlankImageEx(r, v, u, s, p, w);
			i.setErrorString(o);
			return q
		};
		l.Mirror = function(q) {
			var p = parseInt(q);
			if (isNaN(p) || p < 0 || p >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			o.getSWebTwain().Mirror(p);
			return i.checkErrorString(o)
		};
		l.OverlayRectangle = function(t, v, u, r, q, p, s) {
			o.getSWebTwain().OverlayRectangle(t, v, u, r, q, p, s);
			return i.checkErrorString(o)
		};
		l.RemoveAllImages = function() {
			var p;
			o.getSWebTwain().RemoveAllImages();
			p = i.checkErrorString(o);
			if (p) {
				o.__innerRefreshImage()
			}
			return p
		};
		l.RemoveAllSelectedImages = function() {
			var p;
			o.getSWebTwain().RemoveAllSelectedImages();
			p = i.checkErrorString(o);
			if (p) {
				o.__innerRefreshImage()
			}
			return p
		};
		l.RemoveImage = function(q) {
			var p = parseInt(q);
			if (isNaN(p) || p < 0 || p >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			o.getSWebTwain().RemoveImage(p);
			return i.checkErrorString(o)
		};
		l.Rotate = function(t, q, s) {
			var p = parseInt(t),
				u, v;
			if (isNaN(p) || p < 0 || p >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			u = o.getSWebTwain().Rotate(p, q, s);
			return i.checkErrorString(o)
		};
		l.RotateEx = function(u, s, t, p) {
			var q = parseInt(u),
				v, w;
			if (isNaN(q) || q < 0 || q >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			v = o.getSWebTwain().RotateEx(q, s, t, p);
			return i.checkErrorString(o)
		};
		l.RotateLeft = function(q) {
			var p = parseInt(q),
				s, t;
			if (isNaN(p) || p < 0 || p >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			s = o.getSWebTwain().RotateLeft(p);
			return i.checkErrorString(o)
		};
		l.RotateRight = function(q) {
			var p = parseInt(q),
				s, t;
			if (isNaN(p) || p < 0 || p >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			s = o.getSWebTwain().RotateRight(p);
			return i.checkErrorString(o)
		};
		l.ChangeImageSize = function(t, w, p, q) {
			var s = parseInt(t),
				u, v;
			if (isNaN(s) || s < 0 || s >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			if (w <= 0 || p <= 0) {
				b.Errors.InvalidWidthOrHeight(o);
				return false
			}
			u = o.getSWebTwain().ChangeImageSize(s, w, p, q);
			return i.checkErrorString(o)
		};
		l.Flip = function(q) {
			var p = parseInt(q),
				s, t;
			if (isNaN(p) || p < 0 || p >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			s = o.getSWebTwain().Flip(p);
			return i.checkErrorString(o)
		};
		l.Crop = function(t, w, v, s, p) {
			var q = parseInt(t),
				u, x;
			if (isNaN(q) || q < 0 || q >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			u = o.getSWebTwain().Crop(q, w, v, s, p);
			return i.checkErrorString(o)
		};
		l.CropToClipboard = function(t, w, v, s, p) {
			var q = parseInt(t),
				u, x;
			if (isNaN(q) || q < 0 || q >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			u = o.getSWebTwain().CropToClipboard(q, w, v, s, p);
			return i.checkErrorString(o)
		};
		l.CutFrameToClipboard = function(t, w, v, s, p) {
			var q = parseInt(t),
				u, x;
			if (isNaN(q) || q < 0 || q >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			u = o.getSWebTwain().CutFrameToClipboard(q, w, v, s, p);
			return i.checkErrorString(o)
		};
		l.CutToClipboard = function(q) {
			var p = parseInt(q),
				s, t;
			if (isNaN(p) || p < 0 || p >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			s = o.getSWebTwain().CutToClipboard(p);
			return i.checkErrorString(o)
		};
		l.SetDPI = function(u, q, t, p, r) {
			var s = parseInt(u);
			if (isNaN(s) || s < 0 || s >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			o.getSWebTwain().SetDPI(s, q, t, p, r);
			return i.checkErrorString(o)
		};
		l.SetViewMode = function(q, p) {
			o.getSWebTwain().SetViewMode(q, p);
			return i.checkErrorString(o)
		};
		l.GetViewModeH = function() {
			var p = o.getSWebTwain().GetViewModeH();
			i.setErrorString(o);
			return p
		};
		l.GetViewModeV = function() {
			var p = o.getSWebTwain().GetViewModeV();
			i.setErrorString(o);
			return p
		};
		l.MoveImage = function(s, r) {
			var q = parseInt(s),
				p = parseInt(r);
			if (isNaN(q) || q < 0 || q >= o.HowManyImagesInBuffer || isNaN(p) || p < 0 || p >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			o.getSWebTwain().MoveImage(q, p);
			return i.checkErrorString(o)
		};
		l.SwitchImage = function(s, r) {
			var q = parseInt(s),
				p = parseInt(r);
			if (isNaN(q) || q < 0 || q >= o.HowManyImagesInBuffer || isNaN(p) || p < 0 || p >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			o.getSWebTwain().SwitchImage(q, p);
			return i.checkErrorString(o)
		};
		l.Print = function() {
			o.getSWebTwain().Print();
			return i.checkErrorString(o)
		};
		l.checkErrorString = function() {
			return i.isReturnSuccess(o)
		};
		l.FileExists = function(q) {
			var r = i.replaceLocalFilename(q);
			var p = o.getSWebTwain().FileExists(r);
			i.setErrorString(o);
			return p
		};
		l.SaveAllAsMultiPageTIFF = function(p, t, r) {
			if (!m(o, r)) {
				return false
			}
			var s = i.replaceLocalFilename(p),
				q;
			q = o.getSWebTwain().SaveAllAsMultiPageTIFF(s);
			console.log(q)
			console.log(11111111)
			console.log(s)
			console.log(i.wrapperRet(o, q, t, r))
			return i.wrapperRet(o, q, t, r)
		};
		l.SaveAllAsPDF = function(p, t, r) {
			if (!m(o, r)) {
				return false
			}
			var s = i.replaceLocalFilename(p),
				q;
			q = o.getSWebTwain().SaveAllAsPDF(s);
			return i.wrapperRet(o, q, t, r)
		};
		l.SaveAsBMP = function(p, s, u, r) {
			if (!n(o, s, r)) {
				return false
			}
			var t = i.replaceLocalFilename(p),
				q;
			q = o.getSWebTwain().SaveAsBMP(t, s);
			return i.wrapperRet(o, q, u, r)
		};
		l.SaveAsJPEG = function(p, s, u, r) {
			if (!n(o, s, r)) {
				return false
			}
			var t = i.replaceLocalFilename(p),
				q;
			q = o.getSWebTwain().SaveAsJPEG(t, s);
			return i.wrapperRet(o, q, u, r)
		};
		l.SaveAsPDF = function(p, s, u, r) {
			if (!n(o, s, r)) {
				return false
			}
			var t = i.replaceLocalFilename(p),
				q;
			q = o.getSWebTwain().SaveAsPDF(t, s);
			return i.wrapperRet(o, q, u, r)
		};
		l.SaveAsPNG = function(p, s, u, r) {
			if (!n(o, s, r)) {
				return false
			}
			var t = i.replaceLocalFilename(p),
				q;
			q = o.getSWebTwain().SaveAsPNG(t, s);
			return i.wrapperRet(o, q, u, r)
		};
		l.SaveAsTIFF = function(p, s, u, r) {
			if (!n(o, s, r)) {
				return false
			}
			var t = i.replaceLocalFilename(p),
				q;
			q = o.getSWebTwain().SaveAsTIFF(t, s);
			return i.wrapperRet(o, q, u, r)
		};
		l.SaveSelectedImagesAsMultiPagePDF = function(p, t, r) {
			var s = i.replaceLocalFilename(p),
				q;
			q = o.getSWebTwain().SaveSelectedImagesAsMultiPagePDF(s);
			return i.wrapperRet(o, q, t, r)
		};
		l.SaveSelectedImagesAsMultiPageTIFF = function(p, t, r) {
			var s = i.replaceLocalFilename(p),
				q;
			q = o.getSWebTwain().SaveSelectedImagesAsMultiPageTIFF(s);
			return i.wrapperRet(o, q, t, r)
		};
		l.SaveSelectedImagesToBase64Binary = function() {
			var p = o.getSWebTwain().SaveSelectedImagesToBase64Binary();
			i.setErrorString(o);
			return p
		};
		l.ShowFileDialog = function(q, p, w, s, u, v, r, t) {
			o.getSWebTwain().ShowFileDialog(q, p, w, s, u, v, r, t);
			return i.checkErrorString(o)
		};
		l.FTPDownload = function(t, s, r, q) {
			if (!j(q)) {
				return false
			}
			var p = o.getSWebTwain().FTPDownload(t, s);
			return i.wrapperRet(o, p, r, q)
		};
		l.FTPDownloadDirectly = function(u, t, p, s, r) {
			if (!j(r)) {
				return false
			}
			var q = o.getSWebTwain().FTPDownloadDirectly(u, t, p);
			return i.wrapperRet(o, q, s, r)
		};
		l.FTPDownloadEx = function(u, t, r, s, q) {
			if (!j(q)) {
				return false
			}
			if (r < -1 || r > 5) {
				r = -1
			}
			if (!k(r, q)) {
				return f
			}
			var p = o.getSWebTwain().FTPDownloadEx(u, t, r);
			return i.wrapperRet(o, p, s, q)
		};
		l.FTPUpload = function(u, r, t, s, q) {
			if (!j(q)) {
				return false
			}
			var p = o.getSWebTwain().FTPUpload(u, r, t);
			return i.wrapperRet(o, p, s, q)
		};
		l.FTPUploadDirectly = function(u, p, t, s, r) {
			if (!j(r)) {
				return false
			}
			var q = o.getSWebTwain().FTPUploadDirectly(u, p, t);
			return i.wrapperRet(o, q, s, r)
		};
		l.FTPUploadEx = function(v, r, u, s, t, q) {
			if (!j(q)) {
				return false
			}
			var p = o.getSWebTwain().FTPUploadEx(v, r, u, s);
			return i.wrapperRet(o, p, t, q)
		};
		l.FTPUploadAllAsMultiPageTIFF = function(t, s, r, q) {
			if (!j(q)) {
				return false
			}
			var p = o.getSWebTwain().FTPUploadAllAsMultiPageTIFF(t, s);
			return i.wrapperRet(o, p, r, q)
		};
		l.FTPUploadAllAsPDF = function(t, s, r, q) {
			if (!j(q)) {
				return false
			}
			var p = o.getSWebTwain().FTPUploadAllAsPDF(t, s);
			return i.wrapperRet(o, p, r, q)
		};
		l.FTPUploadAsMultiPagePDF = function(t, s, r, q) {
			var p = o.getSWebTwain().FTPUploadAsMultiPagePDF(t, s);
			return i.wrapperRet(o, p, r, q)
		};
		l.FTPUploadAsMultiPageTIFF = function(t, s, r, q) {
			var p = o.getSWebTwain().FTPUploadAsMultiPageTIFF(t, s);
			return i.wrapperRet(o, p, r, q)
		};
		l.HTTPDownloadDirectly = function(t, s, p, u, r) {
			if (!j(r)) {
				return false
			}
			var q = o.getSWebTwain().HTTPDownloadDirectly(t, s, p);
			return i.wrapperRet(o, q, u, r)
		};
		l.HTTPDownload = function(s, r, u, q) {
			var p, t = i.getImageType(r);
			return o.HTTPDownloadEx(s, r, t, u, q)
		};
		l.HTTPDownloadEx = function(t, s, r, u, q) {
			if (!j(q)) {
				return f
			}
			if (r < -1 || r > 5) {
				r = -1
			}
			if (!k(r, q)) {
				return f
			}
			var p = o.getSWebTwain().HTTPDownloadEx(t, s, r);
			return i.wrapperRet(o, p, u, q)
		};
		l.HTTPDownloadThroughGet = l.HTTPDownloadEx;
		l.HTTPUploadThroughPostDirectly = function(t, q, p, v, u, s) {
			if (!j(s)) {
				return false
			}
			var r = o.getSWebTwain().HTTPUploadThroughPostDirectly(t, q, p, v);
			return i.wrapperRet(o, r, u, s, true)
		};
		l.HTTPUploadThroughPost = function(t, s, p, v, u, r) {
			if (!b.isNumber(s) || isNaN(s) || s < -2) {
				b.Errors.IndexOutOfRange(o);
				if (b.isFunction(r)) {
					r(o.ErrorCode, o.ErrorString)
				}
				return false
			}
			var q = o.getSWebTwain().HTTPUploadThroughPost(t, s, p, v);
			return i.wrapperRet(o, q, u, r, true)
		};
		l.HTTPUploadThroughPostEx = function(t, s, p, w, u, v, r) {
			if (!b.isNumber(s) || isNaN(s) || s < -2) {
				b.Errors.IndexOutOfRange(o);
				if (b.isFunction(r)) {
					r(o.ErrorCode, o.ErrorString)
				}
				return false
			}
			var q = o.getSWebTwain().HTTPUploadThroughPostEx(t, s, p, w, u);
			return i.wrapperRet(o, q, v, r, true)
		};
		l.ClearAllHTTPFormField = function() {
			o.getSWebTwain().ClearAllHTTPFormField();
			return i.checkErrorString(o)
		};
		l.SetHTTPFormField = function(q, p) {
			o.getSWebTwain().SetHTTPFormField(q, p);
			return i.checkErrorString(o)
		};
		l.HTTPUploadAllThroughPostAsMultiPageTIFF = function(s, p, u, t, r) {
			var q;
			q = o.getSWebTwain().HTTPUploadAllThroughPostAsMultiPageTIFF(s, p, u);
			return i.wrapperRet(o, q, t, r, true)
		};
		l.HTTPUploadThroughPostAsMultiPageTIFF = function(s, p, u, t, r) {
			var q;
			q = o.getSWebTwain().HTTPUploadThroughPostAsMultiPageTIFF(s, p, u);
			return i.wrapperRet(o, q, t, r, true)
		};
		l.HTTPUploadAllThroughPostAsPDF = function(s, p, u, t, r) {
			var q;
			q = o.getSWebTwain().HTTPUploadAllThroughPostAsPDF(s, p, u);
			return i.wrapperRet(o, q, t, r, true)
		};
		l.HTTPUploadThroughPostAsMultiPagePDF = function(s, p, u, t, r) {
			var q;
			q = o.getSWebTwain().HTTPUploadThroughPostAsMultiPagePDF(s, p, u);
			return i.wrapperRet(o, q, t, r, true)
		};
		l.HTTPUploadThroughPutDirectly = function(t, q, p, u, s) {
			var r;
			r = o.getSWebTwain().HTTPUploadThroughPutDirectly(t, q, p);
			return i.wrapperRet(o, r, u, s)
		};
		l.HTTPUploadThroughPut = function(s, r, p, u, q) {
			var t = i.getImageType(p);
			return o.HTTPUploadThroughPutEx(s, r, p, t, u, q)
		};
		l.HTTPUploadThroughPutEx = function(t, s, p, u, v, r) {
			var q;
			q = o.getSWebTwain().HTTPUploadThroughPutEx(t, s, p, u);
			return i.wrapperRet(o, q, v, r)
		};
		l.HTTPUploadAllThroughPutAsMultiPageTIFF = function(s, p, u, r) {
			var q = -1,
				t = 2;
			return o.HTTPUploadThroughPutEx(s, q, p, t, u, r)
		};
		l.HTTPUploadThroughPutAsMultiPageTIFF = function(s, p, u, r) {
			var q = -2,
				t = 2;
			return o.HTTPUploadThroughPutEx(s, q, p, t, u, r)
		};
		l.HTTPUploadAllThroughPutAsPDF = function(s, p, u, r) {
			var q = -1,
				t = 4;
			return o.HTTPUploadThroughPutEx(s, q, p, t, u, r)
		};
		l.HTTPUploadThroughPutAsMultiPagePDF = function(s, p, u, r) {
			var q = -2,
				t = 4;
			return o.HTTPUploadThroughPutEx(s, q, p, t, u, r)
		};
		l.ShowImageEditor = function() {
			o.getSWebTwain().ShowImageEditor();
			return i.checkErrorString(o)
		};
		l.SetCookie = function(p) {
			o.getSWebTwain().SetCookie(p);
			return i.checkErrorString(o)
		};
		l.LoadImageFromBase64Binary = function(p, r) {
			if (!j()) {
				return f
			}
			if (r < -1 || r > 5) {
				r = -1
			}
			if (!k(r)) {
				return f
			}
			var q = o.getSWebTwain().LoadImageFromBase64Binary(p, r);
			i.setErrorString(o);
			return q
		};
		l.SaveSelectedImagesToBytes = function(r, p) {
			var q = o.getSWebTwain().SaveSelectedImagesToBytes(r, p);
			i.setErrorString(o);
			return q
		};
		l.LoadImageFromBytes = function(s, p, r) {
			if (!j()) {
				return f
			}
			if (r < -1 || r > 5) {
				r = -1
			}
			if (!k(r)) {
				return f
			}
			var q = o.getSWebTwain().LoadImageFromBytes(s, p, r);
			i.setErrorString(o);
			return q
		};
		l.UnregisterEvent = function(p, q) {
			o.getSWebTwain().UnregisterEvent(p, q);
			return i.checkErrorString(o)
		};
		l.SetImageWidth = function(q, r) {
			var p = parseInt(q);
			if (isNaN(p) || p < 0 || p >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			o.getSWebTwain().SetImageWidth(p, r);
			return i.checkErrorString(o)
		};
		l.HTTPDownloadThroughPost = function(t, s, r, u, q) {
			if (!j(q)) {
				return false
			}
			if (r < -1 || r > 5) {
				r = -1
			}
			if (!k(r, q)) {
				return f
			}
			var p = o.getSWebTwain().HTTPDownloadThroughPost(t, s, r);
			return i.wrapperRet(o, p, u, q)
		};
		l.SetCustomDSDataEx = function(p) {
			o.getSWebTwain().SetCustomDSDataEx(p);
			return i.checkErrorString(o)
		};
		l.SetCustomDSData = function(p) {
			o.getSWebTwain().SetCustomDSData(p);
			return i.checkErrorString(o)
		};
		l.GetCustomDSDataEx = function() {
			var p = o.getSWebTwain().GetCustomDSDataEx();
			i.setErrorString(o);
			return p
		};
		l.GetCustomDSData = function(p) {
			var q = o.getSWebTwain().GetCustomDSData(p);
			i.setErrorString(o);
			return q
		};
		l.ChangeBitDepth = function(r, q, s) {
			var p = parseInt(r);
			if (isNaN(p) || p < 0 || p >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			o.getSWebTwain().ChangeBitDepth(p, q, s);
			return i.checkErrorString(o)
		};
		l.ConvertToGrayScale = function(q) {
			var p = parseInt(q);
			if (isNaN(p) || p < 0 || p >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			o.getSWebTwain().ConvertToGrayScale(q);
			return i.checkErrorString(o)
		};
		l.ShowImageEditorEx = function(q, t, p, s, r) {
			o.getSWebTwain().ShowImageEditorEx(q, t, p, s, r);
			return i.checkErrorString(o)
		};
		l.ClearTiffCustomTag = function() {
			o.getSWebTwain().ClearTiffCustomTag();
			return i.checkErrorString(o)
		};
		l.SetTiffCustomTag = function(r, q, s) {
			var p = r * 1;
			if (p <= 0 || p > 2147483647) {
				Dynamsoft.Lib.Errors.InvalidTiffTagError(o);
				return false
			}
			o.getSWebTwain().SetTiffCustomTag(r, q, s);
			return i.checkErrorString(o)
		};
		l.IsBlankImageExpress = function(r) {
			var q = parseInt(r);
			if (isNaN(q) || q < 0 || q >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return false
			}
			var p = o.getSWebTwain().IsBlankImageExpress(q);
			i.setErrorString(o);
			return p
		};
		l._ChangeWidth = function(q) {
			var p = document.getElementById(o._strDWTInnerContainerID),
				s;
			if (b.isString(q)) {
				if (q.length > 0) {
					if (q.charAt(q.length - 1) === "%") {
						s = q
					}
				}
			}
			if (!s) {
				var r = parseInt(q);
				if (r && r > 2) {
					s = (r - 2) + "px"
				}
			}
			if (s) {
				o._strWidth = s;
				o.getSWebTwain().style.width = s;
				if (p) {
					p.style.width = s
				}
			}
			return e
		};
		l._ChangeHeight = function(q) {
			var p = document.getElementById(o._strDWTInnerContainerID),
				s;
			if (b.isString(q)) {
				if (q.length > 0) {
					if (q.charAt(q.length - 1) === "%") {
						s = q
					}
				}
			}
			if (!s) {
				var r = parseInt(q);
				if (r) {
					s = r + "px"
				}
			}
			if (s) {
				o._strHeight = s;
				o.getSWebTwain().style.height = s;
				if (p) {
					p.style.height = s
				}
			}
			return e
		};
		l.SetSize = function(p, q) {
			var r = this;
			r._ChangeWidth(p);
			r._ChangeHeight(q);
			return e
		};
		l.SetSelectedImageArea = function(r, t, s, q, p) {
			o.getSWebTwain().SetSelectedImageArea(r, t, s, q, p);
			return i.checkErrorString(o)
		};
		l.SetVideoRotateMode = function(p) {
			o.getSWebTwain().SetVideoRotateMode(p);
			return i.checkErrorString(o)
		};
		l.SetOpenSourceTimeout = function(p) {
			o.getSWebTwain().SetOpenSourceTimeout(p);
			return i.checkErrorString(o)
		};
		l.SetHTTPHeader = function(p, q) {
			return false
		};
		l.GetImageURL = function(p, q, r) {
			return ""
		};
		l.GetImagePartURL = function(r) {
			var q = parseInt(r);
			if (isNaN(q) || q < 0 || q >= o.HowManyImagesInBuffer) {
				b.Errors.IndexOutOfRange(o);
				return ""
			}
			var p = o.getSWebTwain().GetDIB(q);
			i.setErrorString(o);
			return p
		};
		l.GetLicenseInfo = function() {
			try {
				var q = o.getSWebTwain().GetLicenseInfo();
				if (i.checkErrorString(o)) {
					try {
						o.__licenseInfo = b.parse(q)
					} catch (p) {
						o.__licenseInfo = {}
					}
				} else {
					o.__licenseInfo = {}
				}
				return true
			} catch (p) {
				return false
			}
		};
		l.LoadDibFromClipboard = function(r, q) {
			var p;
			p = o.getSWebTwain().LoadDibFromClipboard();
			return i.wrapperRet(o, p, r, q)
		};
		l.LoadImage = function(p, t, r) {
			if (!j(r)) {
				return false
			}
			var s = i.replaceLocalFilename(p),
				q;
			q = o.getSWebTwain().LoadImage(s);
			return i.wrapperRet(o, q, t, r)
		};
		l.LoadImageEx = function(q, t, v, s) {
			if (!j(s)) {
				return f
			}
			if (t < -1 || t > 5) {
				t = -1
			}
			if (!k(t, s)) {
				return f
			}
			var u = i.replaceLocalFilename(q),
				p = t,
				r;
			if (p == EnumDWT_ImageType.IT_ALL) {
				p = -1
			}
			r = o.getSWebTwain().LoadImageEx(u, p);
			return i.wrapperRet(o, r, v, s)
		};
		l.EnableSource = function(q, r, p) {
			o.AcquireImage(q, r, p);
			return i.checkErrorString(o)
		};
		l.AcquireImage = function(x, w, u) {
			var p = o.getSWebTwain(),
				v, s = null,
				t = null,
				r = null;
			if (b.isUndefined(u) && (b.isFunction(x) && b.isFunction(w) || b.isFunction(x) && b.isUndefined(w) || b.isFunction(x) && w == null || x == null && b.isFunction(w))) {
				s = null;
				if (b.isFunction(x)) {
					t = x
				}
				if (b.isFunction(w)) {
					r = w
				}
			} else {
				if (!b.isUndefined(x)) {
					s = x
				}
				if (b.isFunction(w)) {
					t = w
				}
				if (b.isFunction(u)) {
					r = u
				}
			}
			if (!j(r)) {
				return false
			}
			if (s !== undefined && s !== null) {
				var q;
				q = s.SelectSourceByIndex;
				if (q != null && typeof(q) != "undefined") {
					p.SelectSourceByIndex(q);
					p.CloseSource();
					p.OpenSource()
				}
				q = s.IfShowUI;
				if (q != null && typeof(q) != "undefined") {
					p.IfShowUI = q
				}
				q = s.PixelType;
				if (q != null && typeof(q) != "undefined") {
					p.PixelType = q
				}
				q = s.Resolution;
				if (q != null && typeof(q) != "undefined") {
					p.Resolution = q
				}
				q = s.IfFeederEnabled;
				if (q != null && typeof(q) != "undefined") {
					p.IfFeederEnabled = q
				}
				q = s.IfDuplexEnabled;
				if (q != null && typeof(q) != "undefined") {
					p.IfDuplexEnabled = q
				}
				q = s.IfDisableSourceAfterAcquire;
				if (q != null && typeof(q) != "undefined") {
					p.IfDisableSourceAfterAcquire = q
				}
			}
			v = p.AcquireImage();
			return i.checkErrorString(o)
		};
		l.GenerateURLForUploadData = function(s, t, r) {
			var p = s,
				q;
			if (p == EnumDWT_ImageType.IT_ALL) {
				p = -1
			}
			q = true;
			return i.wrapperRet(o, q, t, r)
		};
		l._innerFun = function(q, r, s) {
			var u = o.getSWebTwain(),
				t = u[q];
			if (typeof(t) === "function") {
				return t.apply(u, r)
			} else {
				return t
			}
		};
		l.ActiveUI = function(q, p) {};
		l.first = function() {
			var p = o.HowManyImagesInBuffer,
				q;
			if (p > 0) {
				o.CurrentImageIndexInBuffer = 0;
				o.__innerRefreshImage()
			}
			return e
		};
		l.previous = function() {
			var p = o.HowManyImagesInBuffer,
				q;
			if (p > 0) {
				q = o.CurrentImageIndexInBuffer;
				if (q > 0) {
					o.CurrentImageIndexInBuffer = q - 1;
					o.__innerRefreshImage()
				}
			}
			return e
		};
		l.next = function() {
			var p = o.HowManyImagesInBuffer,
				q;
			if (p > 0) {
				q = o.CurrentImageIndexInBuffer;
				if (q >= 0 && q < p - 1) {
					o.CurrentImageIndexInBuffer = q + 1;
					o.__innerRefreshImage()
				}
			}
			return e
		};
		l.last = function() {
			var p = o.HowManyImagesInBuffer,
				q;
			if (p > 0) {
				o.CurrentImageIndexInBuffer = p - 1;
				o.__innerRefreshImage()
			}
			return e
		};
		l.__innerRefreshImage = function() {
			var p = o.HowManyImagesInBuffer,
				q;
			if (p > 0) {
				q = o.CurrentImageIndexInBuffer;
				if (o.__OnRefreshUI) {
					o.__OnRefreshUI(q, p)
				}
			}
		};
		l._attachEvents = function() {
			var p = o.getSWebTwain(),
				q;
			q = Dynamsoft.Lib.detect.getVersionArray(String(o.VersionInfo));
			if (q.length <= 2 || q[0] < 9 || q[0] == 9 && q[1] <= 2) {
				return
			}
			if (o.__OnPostTransfer != "") {
				p.RegisterEvent("OnPostTransfer", o.__OnPostTransfer)
			}
			if (o.__OnPostAllTransfers != "") {
				p.RegisterEvent("OnPostAllTransfers", o.__OnPostAllTransfers)
			}
			if (o.__OnMouseClick != "") {
				p.RegisterEvent("OnMouseClick", o.__OnMouseClick)
			}
			if (o.__OnPostLoad != "") {
				p.RegisterEvent("OnPostLoad", o.__OnPostLoad)
			}
			if (o.__OnImageAreaSelected != "") {
				p.RegisterEvent("OnImageAreaSelected", o.__OnImageAreaSelected)
			}
			if (o.__OnMouseDoubleClick != "") {
				p.RegisterEvent("OnMouseDoubleClick", o.__OnMouseDoubleClick)
			}
			if (o.__OnMouseRightClick != "") {
				p.RegisterEvent("OnMouseRightClick", o.__OnMouseRightClick)
			}
			if (o.__OnTopImageInTheViewChanged != "") {
				p.RegisterEvent("OnTopImageInTheViewChanged", o.__OnTopImageInTheViewChanged)
			}
			if (o.__OnImageAreaDeSelected != "") {
				p.RegisterEvent("OnImageAreaDeSelected", o.__OnImageAreaDeSelected)
			}
			if (o.__OnGetFilePath != "") {
				p.RegisterEvent("OnGetFilePath", o.__OnGetFilePath)
			}
			if (o.__OnAfterOperate != "") {
				p.RegisterEvent("OnAfterOperate", o.__OnAfterOperate)
			}
			if (o.__OnBeforeOperate != "") {
				p.RegisterEvent("OnBeforeOperate", o.__OnBeforeOperate)
			}
			if (o.__OnOperateStatus != "") {
				p.RegisterEvent("OnOperateStatus", o.__OnOperateStatus)
			}
			if (o.__OnBitmapChanged != "") {
				p.RegisterEvent("OnBitmapChanged", o.__OnBitmapChanged)
			}
			if (o.__OnMouseMove != "") {
				p.RegisterEvent("OnMouseMove", o.__OnMouseMove)
			}
			if (o.__OnPreAllTransfers != "") {
				p.RegisterEvent("OnPreAllTransfers", o.__OnPreAllTransfers)
			}
			if (o.__OnPreTransfer != "") {
				p.RegisterEvent("OnPreTransfer", o.__OnPreTransfer)
			}
			if (o.__OnSourceUIClose != "") {
				p.RegisterEvent("OnSourceUIClose", o.__OnSourceUIClose)
			}
			if (o.__OnTransferCancelled != "") {
				p.RegisterEvent("OnTransferCancelled", o.__OnTransferCancelled)
			}
			if (o.__OnTransferError != "") {
				p.RegisterEvent("OnTransferError", o.__OnTransferError)
			}
			if (o.__OnInternetTransferPercentage != "") {
				p.RegisterEvent("OnInternetTransferPercentage", o.__OnInternetTransferPercentage)
			}
			if (o.__OnInternetTransferPercentageEx != "") {
				p.RegisterEvent("OnInternetTransferPercentageEx", o.__OnInternetTransferPercentageEx)
			}
		}
	};

	function h(l) {
		var p = l,
			n = b.get(p._strDWTNonInstallInnerContainerID),
			k = "",
			m;
		if (n.innerHTML != "") {
			return
		}
		if (Dynamsoft.WebTwainEnv.ActiveXInstallWithCAB && b.env.bIE) {
			m = ["<div style='display: block; border:solid black 1px; text-align:center; width:", p._strWidth, ";height:", p._strHeight, "'>", "<ul style='padding-top:100px;'>", "<li>The Component is not installed</li>", "<li>You need to download and install the ActiveX to use this sample.</li>", "<li>Please follow the instructions in the information bar.</li>", "</ul></div>"].join("")
		} else {
			var j = ("https:" == location.protocol ? "https://" : "http://");
			if (b.product.bChromeEdition) {
				k = dynamsoft.dcp.getDSPath()
			} else {
				if (b.env.bIE) {
					k = dynamsoft.dcp.getDSPath()
				} else {
					k = (b.env.bWin) ? b.product.getMSIPath() : b.product.getPKGPath()
				}
			}
			m = ["<div style='display: block; border:solid black 1px; text-align:center; width:", p._strWidth, ";height:", p._strHeight, "'>", "<ul style='padding-top:100px;'>", "<li>The Component is not installed</li>", "<li>You need to download and install to use this sample.</li>", "<li>Please click the below link to download it.</li>", "<li>After the installation, please RESTART your browser.</li>", "<li><a href='", k, "'>Download</a></li>", "</ul></div>"].join("")
		}
		n.innerHTML = m
	}
	b.noControl = function(j) {
		if (Dynamsoft.WebTwainEnv.IfUseEmbeddedDownloadNoticeForActiveX) {
			if (b.isFunction(b.detect.onNoControl)) {
				b.detect.onNoControl(j._strDWTControlContainerID, j._strWidth, j._strHeight)
			} else {
				var k = b.detect.arySTwains;
				for (var l = 0; l < k.length; l++) {
					var q = k[l];
					if (!q._vPluginExist) {
						h(q);
						b.show(q._strDWTNonInstallInnerContainerID);
						b.hide(q._strDWTInnerContainerID)
					}
				}
			}
		} else {
			var p = window,
				m = b.product,
				n = "";
			if (b.isFunction(p.OnWebTwainNotFoundOnWindowsCallback)) {
				if (b.env.bIE) {
					n = dynamsoft.dcp.getDSPath()
				} else {
					if (m.bChromeEdition) {
						n = dynamsoft.dcp.getDSPath()
					} else {
						n = m.getMSIPath()
					}
				}
				p.OnWebTwainNotFoundOnWindowsCallback(m.name, n, m.bChromeEdition, b.env.bIE, b.env.bSafari, b.detect.ssl, b.env.strIEVersion)
			}
		}
	}
})(Dynamsoft.Lib);
(function(b) {
	if (!b.product.bActiveXEdition) {
		return
	}

	function a(c) {
		var d = this,
			e = c || {};
		d._strDWTControlContainerID = e.containerID || "dwtcontrolContainer";
		d._strWidth = e.width || 270;
		d._strHeight = e.height || 350;
		d._errorCode = 0;
		d._errorString = "";
		d.__licenseInfo = false;
		if (b.isString(d._strWidth) && d._strWidth.indexOf("%") > 0) {} else {
			d._strWidth = [parseInt(d._strWidth), "px"].join("")
		}
		if (b.isString(d._strHeight) && d._strHeight.indexOf("%") > 0) {} else {
			d._strHeight = [parseInt(d._strHeight), "px"].join("")
		}
		d._strObjectName = d._strDWTControlContainerID + "_Obj";
		d.__config = e;
		d.__OnPluginReady = e.onPluginReady;
		d.__OnPluginNotReady = e.onPluginNotReady;
		d.Addon = {};
		d._strDWTInnerContainerID = d._strDWTControlContainerID + "_CID";
		d._strDWTNonInstallInnerContainerID = d._strDWTControlContainerID + "_NonInstallCID";
		var f = document.createElement("div");
		document.body.appendChild(f);
		d._fakeControl = f;
		d._createControl()
	}
	a.prototype._createControl = function() {
		var d;
		var g = this,
			f = g._strWidth,
			c = g._strHeight,
			e;
		if (b.isString(f)) {
			if (f.indexOf("%") > 0) {
				f = "100%"
			} else {
				f = parseInt(f) + 2 + "px"
			}
		}
		if (b.isString(c)) {
			if (c.indexOf("%") > 0) {
				c = "100%"
			} else {
				c = parseInt(c) + 2 + "px"
			}
		}
		if (!Dynamsoft.WebTwainEnv.ActiveXInstallWithCAB) {
			e = ['<div id="', g._strDWTInnerContainerID, '" style="width:', f, ";height:", c, '">', '<object id="', g._strObjectName, '" style="width:', g._strWidth, ";height:", g._strHeight, ';border:1px solid #AAAAAA"', ' classid="clsid:', Dynamsoft.WebTwainEnv.Trial ? b.product.strTrialClassID : b.product.strFullClassID, '" viewastext>', '<param name="wmode" value="transparent"/>', "</object>", "</div>"]
		} else {
			e = ['<div id="', g._strDWTInnerContainerID, '" style="width:', f, ";height:", c, '">', '<object id="', g._strObjectName, '" style="width:', g._strWidth, ";height:", g._strHeight, ';border:1px solid #AAAAAA"', ' codebase="', (b.env.bWin64) ? b.product.getActiveXCABx64Path() : b.product.getActiveXCABx86Path(), "#version=", Dynamsoft.WebTwainEnv.ActiveXVersion, '"', ' classid="clsid:', Dynamsoft.WebTwainEnv.Trial ? b.product.strTrialClassID : b.product.strFullClassID, '" viewastext>', '<param name="wmode" value="transparent"/>', "</object>", "</div>"]
		}
		e.push('<div id="', g._strDWTNonInstallInnerContainerID, '" style="width: ', f, ';display:none"></div>');
		d = document.getElementById(g._strDWTControlContainerID);
		if (d) {
			d.innerHTML = e.join("")
		}
		g._fakeControl._objWebTwain = null;
		g._fakeControl.getSWebTwain = function() {
			var h = this;
			if (h._objWebTwain === null) {
				h._objWebTwain = document.getElementById(g._strObjectName)
			}
			return h._objWebTwain
		}
	};
	a.prototype.getInstance = function() {
		var d = this,
			c = d._fakeControl.getSWebTwain();
		if (c) {
			return d._fakeControl
		}
		return false
	};
	b.detect._controlDetect = function() {
		var g = b.detect.arySTwains,
			f = g[0],
			e = f && f._fakeControl && f._fakeControl.getSWebTwain();
		if (e) {
			if (e.ErrorCode == 0) {
				var h = Dynamsoft.WebTwainEnv,
					c = h.ProductKey;
				clearInterval(b.detect._varSeed);
				var d = function(l) {
					var j, m, k;
					for (j = 0; j < g.length; j++) {
						m = g[j];
						k = m._fakeControl.getSWebTwain();
						b.__innerInitEvents(m._fakeControl, m.__config);
						m._fakeControl.__OnRefreshUI = m.__config.onRefreshUI || "";
						b.attachProperty(m._fakeControl);
						b.attachMethod(m._fakeControl);
						m._fakeControl._attachEvents();
						m._fakeControl.ProductKey = l;
						if (h.IsLicensePromptFriendly) {
							m._fakeControl.GetLicenseInfo()
						}
						b.attachAddon(m._fakeControl);
						if (b.isFunction(m.__OnPluginReady)) {
							m.__OnPluginReady()
						}
					}
				};
				if (b.startsWith(c, "http://") || b.startsWith(c, "https://")) {
					b.ajax({
						method: "GET",
						url: c,
						onSuccess: function(i) {
							d(i)
						}
					})
				} else {
					d(c)
				}
			} else {
				if (!Dynamsoft.WebTwainEnv.ActiveXInstallWithCAB) {
					if (!b.detect.bNoControlEvent) {
						b.noControl(f);
						b.detect.bNoControlEvent = true
					}
				}
				if (b.isFunction(e.__OnPluginNotReady)) {
					e.__OnPluginNotReady()
				}
			}
		} else {
			clearInterval(b.detect._varSeed)
		}
	};
	b.ie = {};
	b.ie.DynamicWebTwain = function(c) {
		var d = new a(c);
		b.detect.arySTwains.push(d);
		return d
	};
	b.ie.closeAll = function() {
		var c = b.detect.arySTwains,
			d, f, e;
		for (d = 0; d < c.length; d++) {
			f = c[d];
			if (f && f._fakeControl) {
				e = f._fakeControl.getSWebTwain();
				if (e && e.ErrorCode == 0) {
					e.RemoveAllImages()
				}
			}
		}
		b.detect.arySTwains = []
	};
	Dynamsoft.WebTwainEnv.RemoveAllAuthorizations = function() {
		return false
	}
})(Dynamsoft.Lib);
(function(b) {
	if (!b.product.bPluginEdition) {
		return
	}
	var c = document,
		e = navigator,
		d;

	function a(f) {
		var g = this,
			h = f || {};
		g._strDWTControlContainerID = h.containerID || "dwtcontrolContainer";
		g._strWidth = h.width || 270;
		g._strHeight = h.height || 350;
		if (b.isString(g._strWidth) && g._strWidth.indexOf("%") > 0) {} else {
			g._strWidth = [parseInt(g._strWidth), "px"].join("")
		}
		if (b.isString(g._strHeight) && g._strHeight.indexOf("%") > 0) {} else {
			g._strHeight = [parseInt(g._strHeight), "px"].join("")
		}
		g._strObjectName = g._strDWTControlContainerID + "_Obj";
		b.__innerInitEvents(g, h);
		g.__OnPluginReady = h.onPluginReady;
		g.__OnPluginNotReady = h.onPluginNotReady;
		g.__OnRefreshUI = h.onRefreshUI || "";
		g._objectWebTwain = null;
		g._strDWTInnerContainerID = g._strDWTControlContainerID + "_CID";
		g._strDWTNonInstallInnerContainerID = g._strDWTControlContainerID + "_NonInstallCID";
		g._vNotAllowedForChrome = false;
		g._vPluginExist = false;
		g.Addon = {}
	}
	d = a.prototype;
	d.getSWebTwain = function() {
		var f = this;
		return f._objectWebTwain
	};
	d.getInstance = function() {
		var f = this;
		if (f._objectWebTwain) {
			return f
		}
		return false
	};
	d._createControl = function() {
		var k = this,
			h, j = k._strWidth,
			g = k._strHeight,
			i;
		if (b.isString(j)) {
			if (j.indexOf("%") > 0) {
				j = "100%"
			} else {
				j = parseInt(j) + 2 + "px"
			}
		}
		if (b.isString(g)) {
			if (g.indexOf("%") > 0) {
				g = "100%"
			} else {
				g = parseInt(g) + 2 + "px"
			}
		}
		i = ['<div id="', k._strDWTInnerContainerID, '" style="width:', j, ";height:", g, '">'];
		if (b.env.bIE) {
			if (!Dynamsoft.WebTwainEnv.ActiveXInstallWithCAB) {
				i.push('<object id="', k._strObjectName, '" style="width:', k._strWidth, ";height:", k._strHeight, ';border:1px solid #AAAAAA"', ' classid="clsid:', Dynamsoft.WebTwainEnv.Trial ? b.product.strTrialClassID : b.product.strFullClassID, '" viewastext>', '<param name="wmode" value="transparent"/>', "</object>")
			} else {
				i.push('<object id="', k._strObjectName, '" style="width:', k._strWidth, ";height:", k._strHeight, ';border:1px solid #AAAAAA"', ' codebase="', (b.env.bWin64) ? b.product.getActiveXCABx64Path() : b.product.getActiveXCABx86Path(), "#version=", Dynamsoft.WebTwainEnv.ActiveXVersion, '"', ' classid="clsid:', Dynamsoft.WebTwainEnv.Trial ? b.product.strTrialClassID : b.product.strFullClassID, '" viewastext>', '<param name="wmode" value="transparent"/>', "</object>")
			}
		} else {
			var f = k._strWidth;
			if (b.isString(f) && f.indexOf("%") == -1) {
				f = (parseInt(f) - 2) + "px"
			}
			i.push('<embed id="', k._strObjectName, '" style="display: inline; width:', f, ";height:", k._strHeight, '" type="', b.product.strMIMEType, '"', ' pluginspage="', (b.env.bWin) ? b.product.getMSIPath() : b.product.getPKGPath(), '"></embed>')
		}
		i.push('</div><div id="', k._strDWTNonInstallInnerContainerID, '" style="width: ', j, ';display:none"></div>');
		h = b.get(k._strDWTControlContainerID);
		if (h) {
			h.innerHTML = i.join("")
		}
		k._objectWebTwain = b.get(k._strObjectName)
	};
	d._notAllowedForChrome = function() {
		if (!b.env.bIE) {
			var f = (e.userAgent.toLowerCase()),
				g = this;
			if (f.match(/chrome\/([\d.]+)/)) {
				if (g.__OnNotAllowedForChrome) {
					g.__OnNotAllowedForChrome(g._strDWTInnerContainerID)
				} else {
					g._createNonAllowedDivPlugin();
					b.get(g._strDWTNonInstallInnerContainerID).style.display = "inline";
					b.get(g._strDWTInnerContainerID).style.display = "none"
				}
			}
		}
	};
	d._createNonAllowedDivPlugin = function() {
		var l = this,
			k = b.get(l._strDWTNonInstallInnerContainerID);
		if (k.innerHTML != "") {
			return
		}
		var g = l._strHeight;
		if (b.isString(g) && g.indexOf("%") == -1) {
			g = (parseInt(g) - 10) + "px"
		}
		var h = ['<div style="display: block; border:1px solid black; width:', l._strWidth, ";height:", g, '">', '<div style="margin: 200px 0 0 0; padding: 5px; font-size: 16px;line-height: 30px; ">', "<div>The Component is not allowed to run on this site.</div>", '<div>Please click <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJeSURBVDhPvZRNSxthEMeX0mNpKS09tP04tdBqobT9WCGJ5kU9pIk5xB4KaoJGmoiNMS+IUiqNB08mjUoUN2vU3WyS9d+ZIbvEZREP0j8Mk5ln5sfs7jxRcM/6f8BKpYKZmRlEIhGUSiUYhjE8uV2eQIal0xmobQ3aeQc/CwWUy+Xh6e3yBM7OzuJMbcPs9cUYzNPeRQLc29tDKpVCOBx2LJ3JQDe66Jo9fI3HEY1GnTOurdVqAnBLgFxwcNBAp3N5w0yTJiTTtA5UVXPy9XpDerwkwOnpaZydtWma/p3s8OgYcZraSwIMhULoXFx6NntZvf4XyWRSAG45QO38wrO51x/Asq7F27nbJMBEIoFm8wiLS0uYm0s6j88QfXUF6ucJXNMe2lAWx+qXD3I+KgHu7OwgEAjI/q2vr2N5eUUaebIWwRovFLTG38AaQtlzLPlP4wKyJcB8Pi83IpfLoVqtYmFh0ZnQ0nU0qHn/uSJ+0G7fiPl8VAL0+/20cyZdsTLm57+hdXIqQAdKE+1T869nCnZfK+I5dsNYAgwGg7i8MhwIG8cbG0Wafo1+X6FPk5VfPUDxqSK+r6oCcEuAU1NT0GhhDQLZVtwsIZvNShFPuDX+FqtPFORfPhS/9X5M8m4JkO/pyakKo0uwof3e/SMF3FQg2PfHCgoEMWlS9nbshgqQt755eIwr3RTYOV+vRlMK1j5OIPlIwY93YxgM39mAIBxzns9HJcDt7W3EYjH5OD6fD5OTk7KbrDo99go12TBbDOV8Peuxh5Zl0Z8ATUdFOjWy55jztt1VArw/Af8A9+n0bhYJ0I4AAAAASUVORK5CYII="/>', 'at the right end of the address bar and click "<b>Always allow plug-ins</b>". Then refresh/restart the browser.</div>', "</div></div>"].join("");
		k.innerHTML = h;

		function j() {
			b.get(l._strDWTNonInstallInnerContainerID).style.display = "none";
			b.get(l._strDWTInnerContainerID).style.display = "inline"
		}
		for (var f = 0; f < c.links.length; f++) {
			if (c.links[f].className == "DWT_CloseNonAllowedDiv") {
				c.links[f].onclick = j
			}
		}
	};
	b.detect._controlDetect = function() {
		var s = b.detect.arySTwains,
			m = s[0],
			p = m && m._objectWebTwain;
		if (p) {
			if (p.ErrorCode == 0) {
				var r = Dynamsoft.WebTwainEnv,
					n = r.ProductKey;
				clearInterval(b.detect._varSeed);
				var l = function(t) {
					var j, u;
					for (j = 0; j < s.length; j++) {
						u = s[j];
						b.attachProperty(u);
						b.attachMethod(u);
						u._attachEvents();
						u.ProductKey = t;
						if (r.IsLicensePromptFriendly) {
							u.GetLicenseInfo()
						}
						b.attachAddon(u);
						u._objectWebTwain.BrokerProcessType = b.product._iBrokerProcessType;
						if (!b.env.bWin) {
							u._objectWebTwain.ImageCaptureDriverType = b.product._iImageCaptureDriverType
						}
						if (b.isFunction(u.__OnPluginReady)) {
							u.__OnPluginReady()
						}
					}
				};
				if (b.startsWith(n, "http://") || b.startsWith(n, "https://")) {
					b.ajax({
						method: "GET",
						url: n,
						onSuccess: function(i) {
							l(i)
						}
					})
				} else {
					l(n)
				}
			} else {
				var k, g, h, q = e.mimeTypes;
				if (!b.env.bIE) {
					var f = true;
					e.plugins.refresh(false);
					if (b.env.iPluginLength != e.plugins.length) {
						for (k = 0; k < q.length; k++) {
							if (q[k].type.toLowerCase().indexOf(b.product.strMIMEType.toLowerCase()) > -1) {
								location.reload()
							}
						}
					}
					for (k = 0; k < q.length; k++) {
						if (q[k].type.toLowerCase().indexOf(b.product.strMIMEType.toLowerCase()) > -1) {
							for (h = 0; h < s.length; h++) {
								g = s[h];
								f = false;
								g._vPluginExist = true;
								if (g._vNotAllowedForChrome == false) {
									g._notAllowedForChrome();
									g._vNotAllowedForChrome = true
								}
							}
						}
					}
					if (f && !b.detect.bNoControlEvent) {
						b.noControl(m);
						b.detect.bNoControlEvent = true
					}
				} else {
					if (!Dynamsoft.WebTwainEnv.ActiveXInstallWithCAB) {
						if (!b.detect.bNoControlEvent) {
							b.noControl(m);
							b.detect.bNoControlEvent = true
						}
					}
				}
				if (b.isFunction(m.__OnPluginNotReady)) {
					m.__OnPluginNotReady()
				}
			}
		} else {
			clearInterval(b.detect._varSeed)
		}
	};
	b.plugin = {};
	b.plugin.DynamicWebTwain = function(f) {
		var g = new a(f);
		g._createControl();
		b.detect.arySTwains.push(g);
		return g
	};
	b.plugin.closeAll = function() {
		var f = b.detect.arySTwains,
			g, j, h;
		for (g = 0; g < f.length; g++) {
			j = f[g];
			if (j && j._objectWebTwain) {
				h = j._objectWebTwain;
				if (h && h.ErrorCode == 0) {
					h.RemoveAllImages()
				}
			}
		}
		b.detect.arySTwains = []
	};
	Dynamsoft.WebTwainEnv.RemoveAllAuthorizations = function() {
		return false
	}
})(Dynamsoft.Lib);
(function(a, H) {
	var K = dynamsoft.navInfo,
		p = dynamsoft.lib,
		R = dynamsoft.dcp,
		J = p.win,
		B = !0,
		P = !1;
	var x = {
		curPortIndex: 0,
		bConnected: false,
		versionInfo: function(ab, aa, Z) {
			var Y = 0,
				W = function(ah, ae) {
					var ad = [x._getPreUrl(ab, aa[x.curPortIndex]), "f/VersionInfo?ts=", a.now()].join(""),
						ac, ag;
					ac = [H.Trial ? "dwt_trial_" : "dwt_", a.product.getServerVersionInfo()].join("");
					ag = a.stringify({
						id: "1",
						method: "VersionInfo",
						version: ac,
						parameter: []
					});
					if (H.OnWebTwainInitMessage) {
						var af = H.CustomizableDisplayInfo.generalMessages.checkingDWTVersion;
						H.OnWebTwainInitMessage(af, EnumDWT_InitMsg.Info)
					}
					p.ajax({
						method: "POST",
						url: ad,
						data: ag,
						onSuccess: ah,
						onError: ae
					})
				},
				X = function() {
					x.curPortIndex++;
					x.bConnected = false;
					if (x.curPortIndex < aa.length) {
						setTimeout(function() {
							W(V, X)
						}, 1000)
					} else {
						if (H.OnWebTwainInitMessage) {
							H.OnWebTwainInitMessage(H.CustomizableDisplayInfo.errorMessages.ERR_MODULE_NOT_INSTALLED, EnumDWT_InitMsg.NotInstalledError)
						}
						if (Z) {
							setTimeout(function() {
								Z(P, H.CustomizableDisplayInfo.errorMessages.ERR_MODULE_NOT_INSTALLED)
							}, 0)
						}
					}
				},
				V = function(ad) {
					var ac = R._getJSON(ad);
					if (ac && "result" in ac) {
						ac = ac.result;
						if (a.isArray(ac) && ac.length > 0) {
							if (Z) {
								setTimeout(function() {
									var ae = aa[x.curPortIndex],
										ah = ac[0],
										af = ac.length > 1 ? ac[1] : "";
									if (af !== "") {
										if (H.OnWebTwainInitMessage) {
											H.OnWebTwainInitMessage(af, EnumDWT_InitMsg.Error)
										}
									} else {
										var ag = "The WebTwain version is: " + ah;
										if (H.OnWebTwainInitMessage) {
											H.OnWebTwainInitMessage(ag, EnumDWT_InitMsg.Info)
										}
									}
									Z(ab, ae, ah, af)
								}, 0)
							}
							return
						}
					}
					setTimeout(X, 1000)
				};
			x.curPortIndex = 0;
			W(V, X)
		},
		_getPreUrl: function(X, V) {
			var W;
			if (K.bSSL) {
				W = "https://"
			} else {
				W = "http://"
			}
			return [W, X, ":", V, "/"].join("")
		}
	};
	a.DynamicWebTwain = P;
	var n = J.document,
		k, o, T = H.CustomizableDisplayInfo.errorMessages.ERR_BROWSER_NOT_SUPPORT,
		C = H.CustomizableDisplayInfo.errorMessages.ERR_CreateID_MustNotInContainers,
		q = H.CustomizableDisplayInfo.errorMessages.ERR_CreateID_NotContainer,
		M = a.each,
		f = "dwt",
		j = 0,
		E = 1,
		w = 2,
		y = 3,
		d = function(V) {
			if (a.product.bPluginEdition) {
				a.DynamicWebTwain = a.plugin.DynamicWebTwain;
				a.closeAll = a.plugin.closeAll;
				if (a.isFunction(V)) {
					V()
				}
			} else {
				if (a.product.bActiveXEdition) {
					a.DynamicWebTwain = a.ie.DynamicWebTwain;
					a.closeAll = a.ie.closeAll;
					if (a.isFunction(V)) {
						V()
					}
				}
			}
		};
	a.__innerInitEvents = function(W, V) {
		if (V) {
			M(["onAfterOperate", "onBeforeOperate", "onOperateStatus", "onBitmapChanged", "onGetFilePath", "onImageAreaDeSelected", "onImageAreaSelected", "onMouseClick", "onMouseDoubleClick", "onMouseMove", "onMouseRightClick", "onPreAllTransfers", "onPreTransfer", "onPostLoad", "onPostTransfer", "onPostAllTransfers", "onSourceUIClose", "onTopImageInTheViewChanged", "onTransferCancelled", "onTransferError", "onInternetTransferPercentage", "onInternetTransferPercentageEx"], function(X) {
				W["__O" + X.substring(1)] = V[X] || ""
			})
		}
	};
	a.replaceControl = function(W, V) {
		H.ContainerMap[W] = V
	};
	k = function(ag, Y, ad, V) {
		var W = (navigator.userAgent.toLowerCase()),
			af = a.product,
			X, ac, aa;
		if (V && V._customIP && (!a.isLocalIP(V._ip))) {
			if (a.isFunction(J.OnRemoteWebTwainNotFoundCallback)) {
				var Z = V._port;
				J.OnRemoteWebTwainNotFoundCallback(af.name, V._ip, Z, V._ssl)
			}
			return
		}
		if (a.env.bMac) {
			if (ag) {
				X = a.one("#" + ag);
				X.before(a.install._strNonInstallDIV);
				ac = a.get(a.install._divDWTNonInstallContainerID);
				if (ac) {
					ac.style.width = Y;
					ac.style.height = ad
				}
				a.show(a.install._divDWTNonInstallContainerID);
				a.hide(ag)
			}
			if (a.install._divDWTemessageContainer != "") {
				a.hide(a.install._divDWTemessageContainer)
			}
			if (a.isFunction(J.OnWebTwainNotFoundOnMacCallback)) {
				aa = af.bChromeEdition ? dynamsoft.dcp.getDSPath() : a.product.getPKGPath();
				J.OnWebTwainNotFoundOnMacCallback(af.name, aa, af.bChromeEdition, a.env.bIE, a.env.bSafari, a.detect.ssl, a.env.strIEVersion)
			}
		} else {
			if (a.env.bLinux) {
				if (ag) {
					X = a.one("#" + ag);
					X.before(a.install._strNonInstallDIV);
					ac = a.get(a.install._divDWTNonInstallContainerID);
					if (ac) {
						ac.style.width = Y;
						ac.style.height = ad
					}
					a.show(a.install._divDWTNonInstallContainerID);
					a.hide(ag)
				}
				if (a.install._divDWTemessageContainer != "") {
					a.hide(a.install._divDWTemessageContainer)
				}
				if (a.isFunction(J.OnWebTwainNotFoundOnLinuxCallback)) {
					var ab, ae;
					ab = dynamsoft.dcp.getLinuxHTML5DebPath();
					ae = dynamsoft.dcp.getLinuxHTML5RpmPath();
					J.OnWebTwainNotFoundOnLinuxCallback(af.name, ab, ae, af.bChromeEdition, a.env.bIE, a.env.bSafari, a.detect.ssl, a.env.strIEVersion)
				}
			} else {
				if (W.match(/chrome\/([\d.]+)/) || W.match(/opera.([\d.]+)/) || W.match(/version\/([\d.]+).*safari/) || W.match(/firefox\/([\d.]+)/) || H.IfUseActiveXForIE10Plus == P || (!H.ActiveXInstallWithCAB && a.env.bIE)) {
					if (ag) {
						X = a.one("#" + ag);
						X.before(a.install._strNonInstallDIV);
						ac = a.get(a.install._divDWTNonInstallContainerID);
						if (ac) {
							ac.style.width = Y;
							ac.style.height = ad
						}
						a.show(a.install._divDWTNonInstallContainerID);
						a.hide(ag)
					}
					if (a.install._divDWTemessageContainer != "") {
						a.hide(a.install._divDWTemessageContainer)
					}
					if (a.isFunction(J.OnWebTwainNotFoundOnWindowsCallback)) {
						aa = "";
						if (a.env.bIE) {
							aa = dynamsoft.dcp.getDSPath()
						} else {
							if (af.bChromeEdition) {
								aa = dynamsoft.dcp.getDSPath()
							} else {
								aa = af.getMSIPath()
							}
						}
						J.OnWebTwainNotFoundOnWindowsCallback(af.name, aa, af.bChromeEdition, a.env.bIE, a.env.bSafari, a.detect.ssl, a.env.strIEVersion)
					}
				}
			}
		}
	};
	o = function(V) {
		var W = (navigator.userAgent.toLowerCase());
		if (W.match(/chrome\/([\d.]+)/)) {
			a.one("#" + V).before(a.install._strNonInstallDIV);
			a.show(a.install._divDWTNonInstallContainerID);
			a.hide(V);
			if (a.install._divDWTemessageContainer != "") {
				a.hide(a.install._divDWTemessageContainer)
			}
			if (a.isFunction(J.OnWebTwainOldPluginNotAllowedCallback)) {
				J.OnWebTwainOldPluginNotAllowedCallback(a.product.name)
			}
		}
	};
	a.detect.getVersionArray = function(V) {
		var W = V.toLowerCase().replace(a.product.name.toLowerCase() + " ", "");
		W = W.replace("trial".toLowerCase(), "");
		W = a.replaceAll(W, "[.]", ",");
		return W.split(",")
	};
	a.detect.isDWTVersionLatest = function(W) {
		if (a.isUndefined(W)) {
			return P
		}
		var aa = W.toString().toLowerCase();
		var Z = a.detect.getVersionArray(aa),
			V, ab;
		if (a.env.bIE && (a.product.bPluginEdition || a.product.bActiveXEdition)) {
			V = H.ActiveXVersion
		} else {
			if (a.product.bPluginEdition) {
				V = H.PluginVersion
			} else {
				V = a.product.getServerVersionInfo(true)
			}
		}
		V = a.replaceAll(String(V), "[.]", ",");
		ab = V.split(",");
		var X = Z.length > ab.length ? Z.length : ab.length;
		for (var Y = 0; Y < X; Y++) {
			if (Z[Y] == null) {
				Z[Y] = 0
			}
			if (ab[Y] == null) {
				ab[Y] = 0
			}
			if (parseInt(Z[Y]) < parseInt(ab[Y])) {
				return P
			} else {
				if (parseInt(Z[Y]) > parseInt(ab[Y])) {
					return B
				}
			}
		}
		return B
	};
	var N = function(Z, ad) {
			if (a.isFunction(J.OnWebTwainNeedUpgradeCallback)) {
				var Y = {},
					W, X;
				if (a.env.bWin) {
					if (a.env.bIE) {
						X = dynamsoft.dcp.getDSPath()
					} else {
						var ab = a.product;
						if (ab.bChromeEdition) {
							X = dynamsoft.dcp.getDSPath()
						} else {
							X = ab.getMSIPath()
						}
					}
					W = EnumDWT_PlatformType.enumWindow
				} else {
					if (a.env.bLinux) {
						var V, aa;
						V = dynamsoft.dcp.getLinuxHTML5DebPath();
						aa = dynamsoft.dcp.getLinuxHTML5RpmPath();
						X = V;
						Y.deb = V;
						Y.rpm = aa;
						W = EnumDWT_PlatformType.enumLinux
					} else {
						if (a.product.bChromeEdition) {
							X = dynamsoft.dcp.getDSPath()
						} else {
							X = a.product.getPKGPath()
						}
						W = EnumDWT_PlatformType.enumMac
					}
				}
				Y["default"] = X;
				var ac = a.one(".dynamsoft-dialog-license");
				if (ac && ac.getEL()) {
					ac.getEL().style.display = "none"
				}
				a.detect.needUpgrade = B;
				J.OnWebTwainNeedUpgradeCallback(a.product.name, Y, a.product.bChromeEdition, W, a.env.bIE, a.env.bSafari, a.detect.ssl, a.env.strIEVersion, a.detect.bPromptJSOrServerOutdated, Z, ad)
			}
		},
		m = function(V, X) {
			if (!a.detect.bNeedUpgradeEvent && !a.detect.isDWTVersionLatest(X.VersionInfo)) {
				a.detect.bNeedUpgradeEvent = B;
				if (!H.UseDefaultInstallUI && a.isFunction(H.OnWebTwainNeedUpgrade)) {
					H.OnWebTwainNeedUpgrade();
					return
				}
				if (X && X._customIP && (!a.isLocalIP(X._ip))) {
					if (a.isFunction(J.OnRemoteWebTwainNeedUpgradeCallback)) {
						var W = X._port;
						J.OnRemoteWebTwainNeedUpgradeCallback(a.product.name, X._ip, W, X._ssl)
					}
					return
				}
				a.one("#" + V).before(a.install._strNonInstallDIV);
				a.show(a.install._divDWTNonInstallContainerID);
				a.hide(V);
				if (a.install._divDWTemessageContainer != "") {
					a.hide(a.install._divDWTemessageContainer)
				}
				N()
			}
		};
	var s = function(V) {
			var W = V || {};
			if (W.basePath) {
				a.env.basePath = W.basePath
			}
			if (W.pathType) {
				a.env.pathType = W.pathType
			}
			if (!a.isUndefined(W.bDiscardBlankImage)) {
				a.config.bDiscardBlankImage = W.bDiscardBlankImage
			}
			if (W.msgPrefix) {
				a.config.msgPrefix = W.msgPrefix
			}
			if (W.msgSuffix) {
				a.config.msgSuffix = W.msgSuffix
			}
			if (W.detectType) {
				a.detect.detectType = W.detectType
			}
			if (W.tryTimes) {
				a.detect.tryTimes = W.tryTimes
			}
			if (W.onReady) {
				H.OnWebTwainReady = W.onReady
			}
			if (W.onNotAllowedForChrome) {
				a.detect.onNotAllowedForChrome = W.onNotAllowedForChrome
			}
			if (W.onNoControl) {
				a.detect.onNoControl = W.onNoControl
			}
		},
		G = function(aa) {
			var Z = H.Containers,
				X, W, ac, Y, ab;
			if (Z.length > 0) {
				J.DCP_DWT_OnClickCloseInstall();
				if (!a.isUndefined(aa)) {
					Y = aa._strDWTControlContainerID;
					ab = aa
				} else {
					for (W = 0; W < Z.length; W++) {
						if (v(Z[W])) {
							Y = Z[W].ContainerId;
							ab = H.ContainerMap[Y];
							if (ab) {
								break
							}
						}
					}
				}
				if (ab) {
					if (a.product.bChromeEdition) {
						ab._innerFunRaw("LogLevel", null, true, false, false, function() {
							m(Y, ab)
						}, function() {
							if (ab.ErrorCode == -2207) {
								if (!H.UseDefaultInstallUI && a.isFunction(H.OnWebTwainNeedUpgradeWebJavascript)) {
									H.OnWebTwainNeedUpgradeWebJavascript(ab.ErrorString)
								} else {
									if (!a.detect.bPromptJSOrServerOutdated) {
										a.detect.bPromptJSOrServerOutdated = B
									}
								}
							}
							m(Y, ab)
						})
					} else {
						m(Y, ab)
					}
				}
			}
			for (W = 0; W < Z.length; W++) {
				ac = Z[W].ContainerId;
				X = H.ContainerMap[ac];
				if (X) {
					if (a.product.bChromeEdition) {
						h(X);
						if (X.Width <= 0 || X.Height <= 0) {
							if (X.Width <= 0) {
								X.Width = 270
							}
							if (X.Height <= 0) {
								X.Height = 350
							}
						}
					} else {
						X.IfAllowLocalCache = true;
						X.IfShowFileDialog = true;
						X.IfDisableSourceAfterAcquire = true;
						X.BrokerProcessType = a.product._iBrokerProcessType;
						if (!a.env.bWin) {
							X.ImageCaptureDriverType = a.product._iImageCaptureDriverType
						}
					}
				}
				X = null
			}
			Z = null;
			var V = dynamsoft.initOrder;
			if (V[0] == f) {
				V.splice(0, 1)
			}
			H.inited = B;
			if (a.isFunction(H.OnWebTwainReady)) {
				H.OnWebTwainReady()
			} else {

				if (a.isFunction(J.Dynamsoft_OnReady)) {
					J.Dynamsoft_OnReady()
				}
			}
		},
		h = function(V) {
			V._innerFunRaw("IfAllowLocalCache", "[1]", true, false, false, function() {}, function() {});
			V._innerFunRaw("IfShowFileDialog", "[1]", true, false, false, function() {}, function() {});
			V._innerFunRaw("IfDisableSourceAfterAcquire", "[1]", true, false, false, function() {}, function() {});
			V.BrokerProcessType = 1;
			if (a.env.bMac) {
				V.ImageCaptureDriverType = EnumDWT_Driver.TWAIN_AND_ICA
			} else {
				if (a.env.bLinux) {
					V.ImageCaptureDriverType = EnumDWT_Driver.SANE
				}
			}
		},
		v = function(V) {
			var W;
			if (!V || !V.ContainerId || V.ContainerId == "") {
				return P
			}
			if (!a.get(V.ContainerId)) {
				return P
			}
			return B
		},
		i = function(V) {
			if (v(V)) {
				var W;
				W = H.ContainerMap[V.ContainerId];
				if (W) {
					return P
				}
				return B
			}
			return P
		},
		b = function() {
			if (!a.detect.StartWSTimeoutId && a.detect.arySTwains.length == 0) {
				a.detect.StartWSTimeoutId = setTimeout(function() {
					a.detect.StartWSTimeoutId = P;
					a.startWS()
				}, 100)
			}
		},
		u = function() {
			if (!a.detect.StartWSByIPTimeoutId && a.detect.arySTwainsByIP.length == 0) {
				a.detect.StartWSByIPTimeoutId = setTimeout(function() {
					a.detect.StartWSByIPTimeoutId = P;
					a.startWSByIP()
				}, 100)
			}
		};
	a.detect.__WebTwainCommonMain = function(V, X) {
		var W = H.UseDefaultInstallUI;
		if (W) {
			V.onNotAllowedForChrome = o;
			V.Control = k
		} else {
			V.tAllowedForChrome = H.OnWebTwainOldPluginNotAllowed;
			V.Control = H.OnWebTwainNotFound
		}
		s(V);
		if (a.isFunction(X)) {
			X()
		}
	};
	a.detect.__WebTwainMain = function(Y, W) {
		var V, X;
		V = {
			containerID: Y.ContainerId || "dwtcontrolContainer",
			width: Y.Width,
			height: Y.Height,
			port: Y.port,
			HTTPPort: (a.detect.ssl ? 443 : 80)
		};
		a.detect.__WebTwainCommonMain(V, function() {
			var ac, aa, ad, ab;
			if (a.product.bChromeEdition) {
				V.onWSReady = function(ae) {
					a.replaceControl(V.containerID, ae);
					if (a.isFunction(W)) {
						W(ae)
					}
				};
				ac = a.DynamicWebTwain(V)
			} else {
				V.onPluginReady = function() {
					a.replaceControl(V.containerID, ac.getInstance())
				};
				V.onPluginNotReady = function() {
					if (a.isFunction(J.Dynamsoft_OnNotReady)) {
						J.Dynamsoft_OnNotReady()
					}
				};
				ac = new a.DynamicWebTwain(V);
				ad = 0;
				ab = H.Containers;
				for (aa = ab.length - 1; aa >= 0; aa--) {
					var Z = ab[aa];
					if (v(Z)) {
						ad++
					}
				}
				if (a.detect.arySTwains.length == ad) {
					a.detect._varSeed = setInterval(a.detect._controlDetect, 200)
				}
			}
			return ac
		})
	};
	H.Unload = function() {
		var X = H.Containers,
			aa, V, Z, W, Y;
		if (a.closeAll) {
			a.closeAll()
		}
		if (X) {
			if (a.product.bChromeEdition) {
				Y = H.ContainerMap;
				for (V = 0; V < X.length; V++) {
					W = X[V].ContainerId;
					if (W && a.get(W) && (W in Y)) {
						Z = Y[W];
						if (Z) {
							Z.__unload();
							delete Y[W]
						}
					}
				}
			} else {
				Y = H.ContainerMap;
				for (V = X.length - 1; V >= 0; V--) {
					W = X[V].ContainerId;
					if (W) {
						Z = a.get(W);
						if (Z) {
							if ((W in Y) && Y[W]) {
								delete Y[W]
							}
							Z.innerHTML = ""
						}
					}
				}
			}
		}
		a.page.bUnload = B;
		if (a.page.OnUnload) {
			a.page.OnUnload()
		}
		p.asyncQueue.stop()
	};
	var I = function() {
			var X = H.Containers,
				W, V, Y;
			for (V = 0; V < X.length; V++) {
				if (v(X[V])) {
					Y = X[V].ContainerId;
					W = H.ContainerMap[Y];
					if (!W) {
						setTimeout(I, 200);
						return
					}
				}
			}
			X = null;
			G()
		},
		e = function(aa, V) {
			var Y = dynamsoft.navInfo,
				Z = H.Containers,
				ab = P,
				X, W;
			if (a.config.usingMainMode) {
				a.detect.hideMask();
				return
			}
			if (!Z || Z.length === 0) {
				a.detect.hideMask();
				a.log("DEnv.Containers was not set.");
				return
			}
			a.DynamicWebTwain = a.html5.DynamicWebTwain;
			a.closeAll = a.html5.closeAll;
			for (X = Z.length - 1; X >= 0; X--) {
				W = Z[X];
				if (i(W)) {
					ab = W;
					break
				}
			}
			if (!ab) {
				a.detect.hideMask();
				return
			}
			if (R.bEnhancedMode) {
				a.product.ip = aa;
				a.detect.urls.splice(0);
				a.detect.urls.push({
					port: V,
					ssl: Y.bSSL
				});
				a.detect.cUrlIndex = 0
			}
			b();
			for (X = 0; X < Z.length; X++) {
				W = Z[X];
				if (v(W)) {
					if (R.bEnhancedMode) {
						W.port = V
					}
					if (W == ab) {
						a.detect.__WebTwainMain(W, G);
						break
					}
					a.detect.__WebTwainMain(W)
				}
			}
		},
		z = function() {
			if (a.config.usingMainMode) {
				return
			}
			d(function() {
				var W, X = H.Containers;
				if (X === P || X.length === 0) {
					a.log("DEnv.Containers was not set.");
					return
				}
				for (W = 0; W < X.length; W++) {
					var V = X[W];
					if (i(V)) {
						a.detect.__WebTwainMain(V)
					}
				}
				setTimeout(I, 100)
			})
		},
		A = function(ad, ac, Z, W) {
			var aa, X = ad,
				ab = false;
			if (!a.isString(X) || X == "" || !H.IfUseViewer) {
				ab = true;
				X = "_dwtNoUI_" + a.getRandom()
			}
			if (!a.product.bChromeEdition) {
				if (a.isFunction(W)) {
					W(T)
				}
				return P
			}
			if (H.Containers && !ab) {
				var Y, V = H.Containers;
				for (Y = 0; Y < V.length; Y++) {
					if (V[Y].ContainerId == X) {
						if (a.isFunction(W)) {
							W(C)
						}
						return P
					}
				}
			}
			aa = H.DynamicDWTMap[X];
			if (aa) {
				if (a.isFunction(Z)) {
					Z(aa)
				}
				return B
			}
			if (ac) {
				u()
			} else {
				b()
			}
			a.html5.CreateDWTObject(X, ac, ab, function(ae) {
				J.DCP_DWT_OnClickCloseInstall();
				if (!ae) {
					if (a.isFunction(W)) {
						W(q)
					}
					return false
				}
				H.DynamicContainers.push(X);
				H.DynamicDWTMap[X] = ae;
				if (!H.IfDisableDefaultSettings) {
					h(ae);
					ae._innerFunRaw("LogLevel", null, true, false, false, function() {
						m(X, ae)
					}, function() {
						if (ae.ErrorCode == -2207) {
							if (!a.detect.bPromptJSOrServerOutdated) {
								a.detect.bPromptJSOrServerOutdated = B
							}
						}
						m(X, ae)
					})
				}
				if (a.isFunction(Z)) {
					Z(ae)
				}
				return true
			})
		};
	H.Load = function() {
		if (a.detect.scriptLoaded) {
			H.Unload();
			Q()
		} else {
			setTimeout(H.Load, 200)
		}
	};
	H.CreateDWTObject = function(ac, aa, W, Y, Z, ab) {
		r();
		if (H.initQueue.length == 0) {
			var X, V;
			if (arguments.length <= 3) {
				X = R.ip
			} else {
				X = aa;
				V = (K.bSSL ? Y : W)
			}
			R.ip = X;
			setTimeout(function() {
				L({
					callback: c,
					ip: X,
					port: V
				})
			}, 10)
		}
		H.initQueue.push(arguments)
	};
	var r = function() {
			var V = dynamsoft.initOrder,
				X = P;
			for (var W = 0; W < V.length; W++) {
				if (V[W] == f) {
					X = B;
					break
				}
			}
			if (!X) {
				V.push(f)
			}
		},
		O = function(Y, X) {
			var W = Y.split(","),
				V = X.split(",");
			return (W.length > 3 && a.trim(W[0]) == V[0] && a.trim(W[1]) == V[1] && a.trim(W[2]) == V[2] && a.trim(W[3]) == V[3])
		},
		g = function(W, V) {
			if (a.isLocalIP(W)) {
				a.LS.item("DWT_port", V);
				a.LS.item("DWT_ssl", K.bSSL ? "true" : "false")
			}
		},
		l = function(aa) {
			var Z, V, X = "",
				W = aa,
				Y = "";
			if (K.bMac) {
				Z = "mac/MacDWT_"
			} else {
				if (K.bLinux) {
					Z = "linux/LinuxDWT_"
				} else {
					Z = "win/WinDWT_"
				}
			}
			if (!K.bFileSystem) {
				X = "?t=" + a.getRandom()
			}
			V = H.Trial ? "Trial_" : "";
			if (W.length > 0 && W[W.length - 1] != "/") {
				W = W + "/"
			}
			if (K.bWin && R.b64bit) {
				Y = "_x64"
			}
			return [W, "dist/", Z, V, a.product.getServerVersionInfo(), Y, ".zip", X].join("")
		},
		S = function(V, Z, Y) {
			var X = l(H.ResourcesPath),
				W = function(ac) {
					var ad = 0;
					R.loadZip(ac, ad, function() {
						a.detect.hideMask();
						if (a.isFunction(J.OnWebTWAINDllDownloadSuccessful)) {
							J.OnWebTWAINDllDownloadSuccessful()
						}
						if (H.OnWebTwainInitMessage) {
							var ae;
							if (K.bSSL && a.env.bFirefox) {
								ae = H.CustomizableDisplayInfo.generalMessages.refreshNeeded;
								H.OnWebTwainInitMessage(ae, EnumDWT_InitMsg.DownloadNotRestartError);
								return
							}
							ae = H.CustomizableDisplayInfo.generalMessages.DWTmoduleLoaded;
							H.OnWebTwainInitMessage(ae, EnumDWT_InitMsg.Info)
						}
						setTimeout(Z, 3000)
					}, ab)
				},
				ab = function(ac, af, ae) {
					a.detect.hideMask();
					var ah = B;
					if (H.OnWebTwainInitMessage) {
						var ai = H.CustomizableDisplayInfo.errorMessages.ERR_DWT_NOT_DOWNLOADED;
						H.OnWebTwainInitMessage(ai, EnumDWT_InitMsg.DownloadError)
					}
					if (a.isFunction(J.OnWebTWAINDllDownloadFailure)) {
						var ag = {},
							ad;
						if (ae.status == 404) {
							a.Errors.WebTwainModuleNotExist(ag);
							ad = B
						} else {
							a.Errors.WebTwainModuleDownloadFailure(ag);
							ad = P
						}
						ah = J.OnWebTWAINDllDownloadFailure(a.product.name, ag._errorCode, ag._errorString);
						if (ad) {
							ah = P
						}
					}
					a.detect.dcpStatus = y;
					if (a.isFunction(V.dwtFailedCallback)) {
						V.dwtFailedCallback()
					}
				};
			if (H.OnWebTwainInitMessage) {
				var aa = H.CustomizableDisplayInfo.generalMessages.downloadingDWTModule;
				H.OnWebTwainInitMessage(aa, EnumDWT_InitMsg.Info)
			}
			p.ajax({
				method: "GET",
				url: X,
				async: true,
				dataType: "blob",
				onSuccess: W,
				onError: ab
			})
		},
		t = function(ab, X, V) {
			var af = P,
				ac = P,
				Y = a.detect,
				Z = ab.ip,
				aa = ab.port,
				ad = dynamsoft.navInfo,
				ae, W = 1;
			if (a.detect.dcpStatus == w) {
				if (a.isFunction(ab.callback)) {
					ab.callback(Z, aa)
				}
				return
			}
			if (ad.bWin) {
				W = V > 0 ? (V + 1) : 1;
				if (R.b64bit) {
					Y.ports = Y.win64Ports
				}
			}
			if (aa) {
				ae = [aa]
			} else {
				ae = [];
				a.each(Y.ports, function(ag) {
					if (ad.bSSL) {
						if (ag.ssl) {
							ae.push(ag.port)
						}
					} else {
						if (!ag.ssl) {
							ae.push(ag.port)
						}
					}
				})
			}
			if (!H.IfCheckDWT) {
				a.detect.dcpStatus = w;
				if (a.isFunction(ab.callback)) {
					ab.callback(Z, ae[0])
				}
				return
			}
			x.versionInfo(Z, ae, function(ai, ah, ag) {
				if (ag && ag.length > 0) {
					if (O(ag, a.product.getServerVersionInfo(true))) {
						a.detect.dcpStatus = w;
						a.product.ip = ai;
						g(ai, ah);
						if (a.isFunction(ab.callback)) {
							ab.callback(ai, ah)
						}
						return
					}
				}
				if (X) {
					if (W > 3) {
						a.detect.dcpStatus = y;
						if (a.isFunction(ab.dwtFailedCallback)) {
							ab.dwtFailedCallback()
						}
						return
					} else {
						setTimeout(function() {
							t(ab, B, W)
						}, 1000)
					}
				} else {
					if (H.IfInstallDWTModuleWithZIP) {
						S(ab, function() {
							t(ab, B, W)
						}, function() {
							t(ab, P, W)
						})
					} else {
						a.detect.dcpStatus = y;
						if (a.isFunction(ab.dwtFailedCallback)) {
							ab.dwtFailedCallback()
						}
						return
					}
				}
			})
		},
		D = function(aa) {
			var Y = dynamsoft.initOrder,
				ac = false;
			if (Y.length > 0 && Y[0] === f) {
				if (!H.IfCheckDCP) {
					t(aa, P, 0);
					return
				}
				var ae = function() {
						if (H.OnWebTwainInitMessage) {
							var ag = H.CustomizableDisplayInfo.generalMessages.downloadNeeded;
							H.OnWebTwainInitMessage(ag, EnumDWT_InitMsg.Info)
						}
						if (!a.isLocalIP(aa.ip)) {
							if (a.isFunction(J.OnRemoteWebTwainNotFoundCallback)) {
								var af = K.bSSL;
								J.OnRemoteWebTwainNotFoundCallback(a.product.name, aa.ip, aa.port, af)
							}
						} else {
							k()
						}
					},
					W = function() {
						a.detect.showMask()
					},
					X = function() {
						a.detect.hideMask()
					},
					Z = function() {
						var ag = false;
						if (a.isFunction(J.OnWebTwainShowUpdatingDialog)) {
							ag = J.OnWebTwainShowUpdatingDialog()
						}
						if (!ag) {
							var af = ['<div class="dynamsoft-dwt-dlg-tips dynamsoft-dwt-dlg-center">', H.CustomizableDisplayInfo.generalMessages.updatingDService, "</div>", '<div style="padding-top:35px"></div>'];
							H.ShowDialog(365, 0, af.join(""), 0, 1)
						}
						return true
					},
					V = function() {
						var af = false;
						if (a.isFunction(J.OnWebTwainCloseUpdatingDialog)) {
							af = J.OnWebTwainCloseUpdatingDialog()
						}
						if (!af) {
							H.CloseDialog()
						}
						return true
					},
					ab = function(af, ag) {
						ac = true;
						N(af, ag)
					},
					ad = function(ak) {
						var ah = 1;
						if (K.bWin) {
							ah = ak > 0 ? (ak + 1) : 1;
							if (ah > 3) {
								ad = null;
								a.detect.hideMask();
								a.detect.dcpStatus = y;
								if (a.isFunction(aa.dwtFailedCallback)) {
									aa.dwtFailedCallback()
								}
								return
							}
						}
						if (!ac) {
							if (!aa.dwtFailedCallback) {
								aa.dwtFailedCallback = function() {
									a.detect.hideMask();
									if (a.isFunction(J.OnWebTWAINModuleDownloadManually)) {
										var am, an;
										if (K.bLinux) {
											am = EnumDWT_PlatformType.enumLinux;
											an = {
												"default": dynamsoft.dcp.getLinuxHTML5DebPath(),
												deb: dynamsoft.dcp.getLinuxHTML5DebPath(),
												rpm: dynamsoft.dcp.getLinuxHTML5RpmPath()
											}
										} else {
											if (K.bMac) {
												am = EnumDWT_PlatformType.enumMac;
												an = {
													"default": dynamsoft.dcp.getDSPath()
												}
											} else {
												am = EnumDWT_PlatformType.enumWindow;
												an = {
													"default": dynamsoft.dcp.getDSPath()
												}
											}
										}
										J.OnWebTWAINModuleDownloadManually(an, am, a.env.bIE, a.env.bSafari, a.detect.ssl, a.env.strIEVersion)
									}
								}
							}
							if (R.bEnhancedMode) {
								var al = 0,
									ag = function(ap) {
										if (a.isArray(ap) && ap.length > 1) {
											a.detect.hideMask();
											var ao = ap[1],
												aq = dynamsoft.navInfo,
												an, am;
											if (ao) {
												R.currentUserPorts = ao;
												if (ao.dwt) {
													an = ao.dwt.port;
													am = ao.dwt.sslPort;
													if (an == 0 || am == 0) {
														al++;
														if (al > 5) {
															ad(ah);
															return false
														}
														setTimeout(function() {
															R.getPorts(R.strSID, ag, af)
														}, 300);
														return true
													}
													aa.port = (aq.bSSL ? am : an);
													t(aa, P, 0);
													return true
												}
											}
										}
										if (H.IfInstallDWTModuleWithZIP) {
											S(aa, function() {
												ad(ah)
											}, function() {
												ad(ah)
											})
										} else {
											a.detect.dcpStatus = y;
											if (a.isFunction(aa.dwtFailedCallback)) {
												aa.dwtFailedCallback()
											}
											return
										}
										return true
									},
									af = function() {
										a.detect.hideMask();
										if (H.IfInstallDWTModuleWithZIP) {
											S(aa, function() {
												ad(ah)
											}, function() {
												ad(ah)
											})
										} else {
											a.detect.dcpStatus = y;
											if (a.isFunction(aa.dwtFailedCallback)) {
												aa.dwtFailedCallback()
											}
											return
										}
										return true
									};
								R.getPorts(R.strSID, ag, af);
								return true
							}
							ad = null;
							t(aa, P, 0);
							return true
						}
						var ai = a.install._dlgInstall,
							aj = 500;
						if (!ai || !ai.open) {
							ac = false;
							aj = 0
						}
						setTimeout(ad, aj)
					};
				dynamsoft.managerEnv.IfUpdateService = Dynamsoft.WebTwainEnv.IfUpdateService;
				dynamsoft.managerEnv.IfDownload64bitService = Dynamsoft.WebTwainEnv.IfDownload64bitService;
				R.checkDcpForUpdate(ae, W, X, Z, V, ab, ad, H.ProductKey)
			} else {
				if (!a.env.stopCheckingForService) {
					setTimeout(function() {
						D(aa)
					}, 1000)
				}
			}
		},
		Q = function() {
			a.page.bUnload = P;
			if (a.product.bChromeEdition) {
				r();
				setTimeout(function() {
					L({
						callback: e,
						ip: R.ip
					})
				}, 10);
				p.asyncQueue.start()
			} else {
				z()
			}
		},
		F = function(W, ac, X, aa, Z, V) {
			var ad = P,
				Y = P,
				af, ab, ae;
			if (arguments.length <= 3) {
				ab = function(ag) {
					a.detect.hideMask();
					if (a.isFunction(ac)) {
						ac(ag)
					}
				};
				ae = function(ag) {
					a.detect.hideMask();
					if (a.isFunction(X)) {
						X(ag)
					}
				}
			} else {
				Y = ac;
				af = K.bSSL ? aa : X;
				ab = function(ag) {
					a.detect.hideMask();
					if (a.isFunction(Z)) {
						Z(ag)
					}
				};
				ae = function(ag) {
					a.detect.hideMask();
					if (a.isFunction(V)) {
						V(ag)
					}
				}
			}
			if (!a.product.bChromeEdition) {
				ae(T);
				return P
			}
			if (!a.detect.onNoControl) {
				a.detect.onNoControl = k
			}
			if (Y && af && af > 0) {
				ad = {
					ip: Y,
					port: af
				}
			}
			A(W, ad, ab, ae)
		},
		L = function(V) {
			if (a.detect.scriptLoaded && a.detect.cssLoaded) {
				D(V)
			} else {
				setTimeout(function() {
					L(V)
				}, 200)
			}
		},
		c = function(ac, aa) {
			var Z = dynamsoft.initOrder,
				ab = P;
			if (Z.length > 0 && Z[0] === f) {
				var ag = H.initQueue,
					af;
				if (ag.length > 0) {
					ab = B;
					for (af = 0; af < ag.length; af++) {
						var W, ah, Y, ae, ad, V, X = ag[af];
						if (R.bEnhancedMode) {
							if (af == 0) {
								F(X[0], ac, aa, aa, ad, V)
							} else {
								F(X[0], ac, aa, aa)
							}
						} else {
							if (af == 0) {
								if (X.length <= 3 && X.length > 0) {
									W = X[0];
									if (X.length > 1) {
										ad = X[1]
									}
									if (X.length > 2) {
										V = X[2]
									}
									F(W, ad, V)
								} else {
									if (X.length > 4) {
										W = X[0];
										ah = X[1];
										Y = X[2];
										ae = X[3];
										if (X.length > 4) {
											ad = X[4]
										}
										if (X.length > 5) {
											V = X[5]
										}
										F(W, ah, Y, ae, ad, V)
									}
								}
							} else {
								F.apply(J, X)
							}
						}
					}
					ag.splice(0)
				}
			}
			if (!ab) {
				setTimeout(c, 100)
			}
		};
	H.DeleteDWTObject = function(Y) {
		var X = H.DynamicDWTMap,
			V;
		if (!a.product.bChromeEdition) {
			return P
		}
		if (X && Y in X) {
			var W = X[Y];
			if (W) {
				delete X[Y];
				W.__unload()
			}
		}
		for (V = 0; V < H.DynamicContainers.length; V++) {
			if (H.DynamicContainers[V] == Y) {
				H.DynamicContainers.splice(V, 1);
				break
			}
		}
		a.detect.hideMask();
		return B
	};
	H.GetWebTwain = function(W) {
		var Y = W,
			X, V;
		X = H.Containers;
		if (!Y && X && X.length > 0) {
			for (V = 0; V < X.length; V++) {
				if (v(X[V])) {
					Y = X[V].ContainerId;
					break
				}
			}
		}
		X = H.DynamicContainers;
		if (!Y && X && X.length > 0) {
			Y = X[0]
		}
		X = null;
		if (Y && a.get(Y)) {
			var Z = H.ContainerMap;
			if (Z && (Y in Z)) {
				return Z[Y]
			}
			Z = H.DynamicDWTMap;
			if (Z && (Y in Z)) {
				return Z[Y]
			}
		}
		return null
	};
	var U = function() {
		if (!a.isUndefined(H.ProductKey)) {
			setTimeout(function() {
				var V = a.env.bFileSystem,
					aa = a.env.basePath,
					W = Dynamsoft.WebTwainEnv.ResourcesPath;
				if (!V) {
					var ac = W;
					if (typeof(ac) == "undefined" || ac == "") {
						W = aa
					} else {
						if (ac.length > 0 && ac.charAt(0) != "/" && ac.indexOf("//") < 0 && aa != "") {
							W = [aa, "/", ac].join("")
						}
					}
					if (W.length > 0 && W.charAt(W.length - 1) == "/") {
						W = W.substr(0, W.length - 1)
					}
					Dynamsoft.WebTwainEnv.ResourcesPath = W
				}
				dynamsoft.managerEnv.resourcesPath = W;
				dynamsoft.managerEnv.trial = Dynamsoft.WebTwainEnv.Trial;
				var ab = "?t=20180120",
					Y = B;
				if (a.env.bSafari) {
					Y = P
				}
				a.getScript([W, "/dynamsoft.webtwain.install.js", ab].join(""), Y, function() {
					a.detect.scriptLoaded = B;
					if (H.AutoLoad) {
						if (H.EvtBeforeDWTInit) {
							H.EvtBeforeDWTInit()
						}
						Q()
					}
				});
				var Z = [W, "/dynamsoft.webtwain.css", ab].join(""),
					X = function() {
						a.detect.cssLoaded = B
					};
				if (a.env.bSafari) {
					a.getCss(Z);
					X()
				} else {
					a.getCss(Z, X)
				}
				if (H.IfUseViewer && !H.ViewerJSIntegerited) {
					a.getScript([W, "/dynamsoft.webtwain.viewer.js", ab].join(""), Y)
				}
			}, 100)
		} else {
			setTimeout(U, 100)
		}
	};
	a.ready(function() {
		var V = a.get("dynamsoft_waiting");
		if (V) {
			V.parentNode.removeChild(V)
		}
		U()
	});
	if (!J.Dynamsoft_OnClickInstallButton) {
		J.Dynamsoft_OnClickInstallButton = function() {
			a.hide("dwt-btn-install");
			a.hide("dwt-install-url-div")
		}
	}
	a.main = function(X, V) {
		var W = function() {
				if (a.DynamicWebTwain) {
					a.WebTwain = a.DynamicWebTwain;
					a.product._strChromeEditionPath = dynamsoft.dcp.getDSPath();
					a.product._strMSIPath = a.product.getMSIPath();
					a.product._strPKGPath = a.product.getPKGPath();
					a.product.version = a.product.getServerVersionInfo(true);
					a.product.IEVersion = H.ActiveXVersion;
					if (a.isFunction(X)) {
						X()
					}
					if (a.product.bChromeEdition) {} else {
						a.detect._varSeed = setInterval(a.detect._controlDetect, 200)
					}
				} else {
					a.log("Error: the Dynamic Web Twain module failed to install.")
				}
			},
			Y = function() {
				if (a.product.bChromeEdition) {
					a.DynamicWebTwain = a.html5.DynamicWebTwain;
					a.closeAll = a.html5.closeAll;
					W()
				} else {
					d(W)
				}
			};
		a.config.usingMainMode = B;
		H.UseDefaultInstallUI = P;
		H.OnWebTwainOldPluginNotAllowed = V.onNotAllowedForChrome;
		H.OnWebTwainNotFound = V.onNoControl;
		a.ready(function() {
			a.detect.__WebTwainCommonMain(V, Y)
		})
	}
})(Dynamsoft.Lib, Dynamsoft.WebTwainEnv);
(function(b) {
	if (!b.product.bChromeEdition) {
		return
	}
	var a = true,
		d = false,
		e = {
			output: function(f) {}
		};

	function c(f) {
		var g = this;
		g._maxPosition = 0;
		g._currentPosition = 0;
		g._PagePositionSize = 1;
		g._track = 1;
		g.Horizontal = d;
		g.Width = 16;
		g.Height = -1;
		g.Left = 0;
		g.Top = 0;
		g.Right = 0 + g.Width;
		g.Bottom = 0 + g.Height;
		g.bgColor = "#D4D0C8";
		g.boxOuterBorderLightColor = "#D4D0C8";
		g.boxOuterBorderDarkColor = "#404040";
		g.boxInnerBorderLightColor = "#FFFFFF";
		g.boxInnerBorderDarkColor = "#808080";
		g.arrowColor = "#D4D0C8";
		g.arrowHoverColor = "#BBBBBB";
		g.slideColor = "#D4D0C8";
		g.draggingColor = "#BBBBBB";
		g.hoverColor = "#D4D0C8";
		g.arrowSize = g.Width;
		g.scrollSize = -1;
		g.scrollZeroPos = g.arrowSize;
		g.slideSize = -1;
		g.minslideSize = 18;
		g.dragging = d;
		g.mousePos_StartDrag = {
			x: -1,
			y: -1
		};
		g.mousePos_Dragging = {
			x: -1,
			y: -1
		};
		g.mousePos = {
			x: -1,
			y: -1
		};
		g.bFocus = d;
		g.borderWidth = 1;
		g.borderStyle = 0;
		g.canvas = d;
		g.bCanvas = d;
		if (b.product.bChromeEdition) {
			g.bCanvas = a
		}
		g.divSlide = d;
		g.divArrow1 = d;
		g.divArrow2 = d;
		g.bFloatValue = a;
		g.__init(f)
	}
	c.prototype.__changeSizeForData = function(g, f) {
		var h = this;
		h.Width = g;
		h.Height = f;
		if (h.Horizontal) {
			h.scrollSize = h.Width - 2 * h.Height;
			h.arrowSize = h.Height
		} else {
			h.scrollSize = h.Height - 2 * h.Width;
			h.arrowSize = h.Width
		}
		h.scrollZeroPos = h.arrowSize;
		if (h.canvas) {
			h.canvas.width = g;
			h.canvas.height = f
		}
	};
	c.prototype.__init = function(f) {
		var h = this,
			g = window.document;
		if (f.MaxValue) {
			h._maxPosition = f.MaxValue
		}
		if (f.Value) {
			h.SetPosition(f.Value)
		}
		h.Horizontal = f.Horizontal;
		h.__changeSizeForData(f.Width, f.Height);
		if (h.bCanvas) {
			h.canvas = document.createElement("canvas");
			h.canvas.width = h.Width;
			h.canvas.height = h.Height
		} else {
			h.canvas = document.createElement("div");
			h.canvas.style.width = h.Width + "px";
			h.canvas.style.height = h.Height + "px";
			h.canvas.style.border = "1px solid #CCC";
			h.canvas.style.position = "relative";
			h.divSlide = document.createElement("div");
			h.divSlide.style.position = "absolute";
			h.divSlide.style.top = "0";
			h.divSlide.style.left = "0";
			h.divArrow1 = document.createElement("div");
			h.divArrow1.style.position = "absolute";
			h.divArrow1.style.top = "0";
			h.divArrow1.style.left = "0";
			h.divArrow2 = document.createElement("div");
			h.divArrow2.style.position = "absolute";
			h.divArrow2.style.top = "0";
			h.divArrow2.style.left = "0";
			h.canvas.appendChild(h.divArrow1);
			h.canvas.appendChild(h.divSlide);
			h.canvas.appendChild(h.divArrow2);
			h.arrowColor = "#777";
			h.arrowSize = 12
		}
		h.canvas.onselectstart = function() {
			return d
		};
		Dynamsoft.Lib.addEventListener(h.canvas, "mousedown", function(i) {
			h.onMouseDown(i);
			b.stopPropagation(i)
		});
		Dynamsoft.Lib.addEventListener(h.canvas, "mouseenter", function(i) {
			h.bFocus = a
		});
		Dynamsoft.Lib.addEventListener(h.canvas, "mouseleave", function(i) {
			h.bFocus = d
		});
		h.onValueChanged = f.onValueChanged
	};
	c.prototype.InitScroll = function(f, g) {
		var i = this,
			h = 0;
		if (f >= g && g >= 0) {
			i._PagePositionSize = g;
			h = (f - g);
			i.SetMaxPosition(h);
			return a
		}
		return d
	};
	c.prototype.GetPagePositionSize = function() {
		var f = this;
		return f._PagePositionSize
	};
	c.prototype.SetPagePositionSize = function(f) {
		var g = this;
		g._PagePositionSize = f;
		return a
	};
	c.prototype.__getCurrentPage = function() {
		var f = this;
		return f._currentPosition / f._PagePositionSize
	};
	c.prototype.GetMaxPage = function() {
		var f = this;
		return f._maxPosition / f._PagePositionSize - 1
	};
	c.prototype.GetCurrentPosition = function() {
		var f = this;
		return f._currentPosition
	};
	c.prototype.SetPosition = function(f) {
		var h = this,
			g = f;
		if (b.isUndefined(f) || b.isNaN(f)) {
			f = 0
		}
		if (g < 0) {
			g = 0
		} else {
			if (g > h._maxPosition) {
				g = h._maxPosition
			}
		}
		h._currentPosition = g
	};
	c.prototype.GetEL = function() {
		return this.canvas
	};
	c.prototype.Refresh = function() {
		this.__drawScroll();
		return a
	};
	c.prototype.ChangeControlSize = function(g, f) {
		var h = this;
		h.__changeSizeForData(g, f);
		h.__drawFrame();
		h.__drawScroll()
	};
	c.prototype.GetControlHeight = function() {
		return this.Height
	};
	c.prototype.GetControlWidth = function() {
		return this.Width
	};
	c.prototype.onMouseDown = function(l) {
		var p = this,
			w = l.target,
			m = d,
			j, t, q, f, s, u, n;
		if (w == p.canvas || w == p.divArrow1 || w == p.divArrow2) {
			if (w == p.canvas) {
				j = b.DOM.getOffset(l);
				e.output("mouse down" + j.x + " " + j.y);
				if (p.Horizontal) {
					u = j.x
				} else {
					u = j.y
				}
			} else {
				if (w == p.divArrow1) {
					u = 0
				} else {
					if (w == p.divArrow2) {
						u = p.scrollSize + p.arrowSize
					}
				}
			}
			if (u <= p.arrowSize) {
				n = p._currentPosition;
				p.__click_previous();
				if (n != p._currentPosition) {
					p.__fireEvent("onValueChanged", {
						Value: p._currentPosition,
						EventName: "onPrevious"
					})
				}
			} else {
				if (u >= p.scrollSize + p.arrowSize) {
					n = p._currentPosition;
					p.__click_next();
					if (n != p._currentPosition) {
						p.__fireEvent("onValueChanged", {
							Value: p._currentPosition,
							EventName: "onNext"
						})
					}
				} else {
					n = p._currentPosition;
					t = p.__getPosDirection(j.x, j.y);
					if (t < 0) {
						p.PageUp();
						if (n != p._currentPosition) {
							p.__fireEvent("onValueChanged", {
								Value: p._currentPosition,
								EventName: "onPageUp"
							})
						}
					} else {
						if (t > 0) {
							p.PageDown();
							if (n != p._currentPosition) {
								p.__fireEvent("onValueChanged", {
									Value: p._currentPosition,
									EventName: "onPageDown"
								})
							}
						} else {
							m = a
						}
					}
				}
			}
		} else {
			if (w == p.divSlide) {
				j = b.DOM.getOffset(l);
				t = 0;
				m = a;
				e.output("mouse down" + j.x + " " + j.y)
			}
		}
		if (m) {
			p.dragging = a;
			p.canvas.style.cursor = "default";
			p.mousePos_StartDrag.x = j.x;
			p.mousePos_StartDrag.y = j.y;
			p.mousePos_Dragging.x = j.x;
			p.mousePos_Dragging.y = j.y;
			var v, r, o = l || event,
				i = o.clientX,
				h = o.clientY;
			if (p.canvas.setCapture) {
				v = p.canvas;
				p.canvas.setCapture()
			} else {
				v = document
			}
			var k = function(z) {
					var y = z || event,
						A = {
							x: 0,
							y: 0
						};
					A.x = p.mousePos_StartDrag.x + y.clientX - i;
					A.y = p.mousePos_StartDrag.y + y.clientY - h;
					e.output("onMouseMove: " + A.x + " " + A.y);
					if (p.dragging) {
						var x = p.__caculateDraggingNewPosition(A.x, A.y);
						if (x != p._currentPosition) {
							p.SetPosition(x);
							p.__fireEvent("onValueChanged", {
								Value: p._currentPosition,
								EventName: "onMouseMoving"
							})
						}
						p.__drawScroll("mousemove")
					}
				},
				g = function(z) {
					var y = z || event,
						A = {
							x: 0,
							y: 0
						};
					A.x = p.mousePos_StartDrag.x + y.clientX - i;
					A.y = p.mousePos_StartDrag.y + y.clientY - h;
					e.output("onMouseUp: " + A.x + " " + A.y);
					if (p.canvas.releaseCapture) {
						p.canvas.releaseCapture()
					}
					Dynamsoft.Lib.removeEventListener(p.canvas, "mouseup", g);
					Dynamsoft.Lib.removeEventListener(p.canvas, "mousemove", k);
					Dynamsoft.Lib.removeEventListener(v, "mouseup", g);
					Dynamsoft.Lib.removeEventListener(v, "mousemove", k);
					if (p.dragging) {
						var x = p.__caculateDraggingNewPosition(A.x, A.y);
						if (x != p._currentPosition) {
							p.SetPosition(x);
							p.__drawScroll();
							p.__fireEvent("onValueChanged", {
								Value: p._currentPosition,
								EventName: "onMouseUp"
							})
						}
						p.dragging = d;
						p.mousePos_StartDrag.x = -1;
						p.mousePos_StartDrag.y = -1
					}
				};
			Dynamsoft.Lib.addEventListener(p.canvas, "mouseup", g);
			Dynamsoft.Lib.addEventListener(p.canvas, "mousemove", k);
			Dynamsoft.Lib.addEventListener(v, "mouseup", g);
			Dynamsoft.Lib.addEventListener(v, "mousemove", k);
			p.__drawScroll("mousedown")
		}
	};
	c.prototype.GetScrollDelta = function(g) {
		var i = this,
			f, h;
		f = i.__caculateSlideSize();
		h = g * f;
		return h
	};
	c.prototype.ManualMoving = function(h) {
		var g = this,
			f;
		e.output("ManualMoving: " + [g._currentPosition, h].join(","));
		if (b.isUndefined(h) || b.isNaN(h) || b.isUndefined(g._currentPosition) || b.isNaN(g._currentPosition)) {
			return
		}
		f = g._currentPosition;
		g.SetPosition(g._currentPosition + h);
		if (f != g._currentPosition) {
			g.__fireEvent("onValueChanged", {
				Value: g._currentPosition,
				EventName: "onMouseMoving"
			})
		}
		g.__drawScroll("mousemove")
	};
	c.prototype.ManualMovingScroll = function(j) {
		var i = this,
			h = 0,
			f, g;
		g = i._currentPosition;
		f = i.__caculateSlideSize();
		h = i._currentPosition + (i._PagePositionSize * j / f);
		e.output("ManualMovingScroll: " + [j, f, j / f, i._currentPosition, h].join(","));
		i.SetPosition(h);
		if (g != i._currentPosition) {
			i.__fireEvent("onValueChanged", {
				Value: i._currentPosition,
				EventName: "onMouseMoving"
			})
		}
		i.__drawScroll("mousemove")
	};
	c.prototype.handlerKeyDown = function(g) {
		var i = this,
			f = a,
			h;
		if (!i.bFocus) {
			return f
		}
		h = i._currentPosition;
		switch (g.keyCode) {
			case 37:
				if (i.Horizontal) {
					f = d;
					i.Previous();
					if (h != i._currentPosition) {
						i.__fireEvent("onValueChanged", {
							Value: i._currentPosition,
							EventName: "onPrevious"
						})
					}
				}
				break;
			case 39:
				if (i.Horizontal) {
					f = d;
					i.Next();
					if (h != i._currentPosition) {
						i.__fireEvent("onValueChanged", {
							Value: i._currentPosition,
							EventName: "onNext"
						})
					}
				}
				break;
			case 38:
				if (!i.Horizontal) {
					f = d;
					i.Previous();
					if (h != i._currentPosition) {
						i.__fireEvent("onValueChanged", {
							Value: i._currentPosition,
							EventName: "onPrevious"
						})
					}
				}
				break;
			case 40:
				if (!i.Horizontal) {
					f = d;
					i.Next();
					if (h != i._currentPosition) {
						i.__fireEvent("onValueChanged", {
							Value: i._currentPosition,
							EventName: "onNext"
						})
					}
				}
				break;
			case 33:
				f = d;
				i.PageUp();
				if (h != i._currentPosition) {
					i.__fireEvent("onValueChanged", {
						Value: i._currentPosition,
						EventName: "onPageUp"
					})
				}
				break;
			case 34:
				f = d;
				i.PageDown();
				if (h != i._currentPosition) {
					i.__fireEvent("onValueChanged", {
						Value: i._currentPosition,
						EventName: "onPageDown"
					})
				}
				break;
			case 35:
				f = d;
				i.GoPosition(i._maxPosition);
				if (h != i._currentPosition) {
					i.__fireEvent("onValueChanged", {
						Value: i._currentPosition,
						EventName: "onEnd"
					})
				}
				break;
			case 36:
				f = d;
				i.GoPosition(0);
				if (h != i._currentPosition) {
					i.__fireEvent("onValueChanged", {
						Value: 0,
						EventName: "onBegin"
					})
				}
				break;
			default:
				break
		}
		return f
	};
	c.prototype.__click_previous = function() {
		var g = this,
			f;
		e.output("__click_previous from mouse click arrow");
		g.GoPosition(g._currentPosition - g._track, 200);
		if (g.canvas && g.bCanvas) {
			f = g.canvas.getContext("2d");
			g.__redrawUpOrLeftArrow(f, a)
		}
	};
	c.prototype.__click_next = function() {
		var g = this,
			f;
		e.output("__click_next from mouse click arrow");
		g.GoPosition(g._currentPosition + g._track, 200);
		if (g.canvas && g.bCanvas) {
			f = g.canvas.getContext("2d");
			g.__redrawDownOrRightArrow(f, a)
		}
	};
	c.prototype.Previous = function() {
		var f = this;
		e.output("previous");
		f.GoPosition(f._currentPosition - f._track)
	};
	c.prototype.Next = function() {
		var f = this;
		e.output("next");
		f.GoPosition(f._currentPosition + f._track)
	};
	c.prototype.PageUp = function() {
		var f = this;
		e.output("pageUp");
		f.GoPosition(f._currentPosition - f._PagePositionSize)
	};
	c.prototype.PageDown = function() {
		var f = this;
		e.output("pageDown");
		f.GoPosition(f._currentPosition + f._PagePositionSize)
	};
	c.prototype.GetMaxPosition = function() {
		return this._maxPosition
	};
	c.prototype.SetMaxPosition = function(f) {
		var g = this;
		if (b.isUndefined(f) || b.isNaN(f)) {
			g._maxPosition = 0;
			g._currentPosition = 0;
			return
		}
		g._maxPosition = f;
		if (g._maxPosition < 0) {
			g._maxPosition = 0
		}
		if (g._currentPosition < 0) {
			g._currentPosition = 0
		} else {
			if (g._currentPosition > g._maxPosition) {
				g._currentPosition = g._maxPosition
			}
		}
	};
	c.prototype.GoPage = function(g) {
		var h = this,
			f;
		e.output("go page: " + g);
		f = g * h._PagePositionSize;
		return h.GoPosition(f)
	};
	c.prototype.GoPosition = function(f, h) {
		var i = this,
			g;
		e.output("go position: " + f);
		i.SetPosition(f);
		if (h && h > 0) {
			setTimeout(function() {
				i.__drawScroll()
			}, h)
		} else {
			i.__drawScroll()
		}
	};
	c.prototype.__drawBoxBorder = function(r, f, l, q, m, o, u) {
		var t = this,
			k, j, v, n, B, h, z, w, s, g, C;
		w = Math.floor(f);
		s = Math.floor(l);
		if (q <= 0 || m <= 0) {
			return
		}
		try {
			g = Math.floor(q);
			C = Math.floor(m)
		} catch (A) {
			return
		}
		B = r.getImageData(w, s, g, C);
		n = B.data;
		h = t.__getHexColor(o);
		z = t.__getHexColor(u);
		v = 0;
		for (k = 0; k < g; k++) {
			n[v] = h[0];
			n[v + 1] = h[1];
			n[v + 2] = h[2];
			v += 4
		}
		k = 0;
		for (j = 0; j < C; j++) {
			v = (j * g + k) * 4;
			n[v] = h[0];
			n[v + 1] = h[1];
			n[v + 2] = h[2]
		}
		for (j = 0; j < C; j++) {
			k = g - 1;
			v = (j * g + k) * 4;
			n[v] = z[0];
			n[v + 1] = z[1];
			n[v + 2] = z[2]
		}
		v = (C - 1) * g * 4;
		for (k = 0; k < g; k++) {
			n[v] = z[0];
			n[v + 1] = z[1];
			n[v + 2] = z[2];
			v += 4
		}
		r.putImageData(B, w, s)
	};
	c.prototype.__drawUpTriangle = function(z, j, s) {
		var o = this,
			t, r, m, g, f, q, u = 9,
			n = 4,
			A, v, k, l;
		A = Math.floor(j);
		v = Math.floor(s);
		k = Math.floor(u);
		l = Math.floor(n);
		f = z.getImageData(A, v, k, l);
		g = f.data;
		for (r = 0; r < 4; r++) {
			t = 4 - r;
			q = t + 1 + 2 * r;
			m = (r * u + t) * 4;
			while (t < q) {
				g[m] = g[m + 1] = g[m + 2] = 0;
				t++;
				m += 4
			}
		}
		z.putImageData(f, j, s)
	};
	c.prototype.__drawDownTriangle = function(z, j, s) {
		var o = this,
			t, r, m, g, f, q, u = 9,
			n = 4,
			A, v, k, l;
		A = Math.floor(j);
		v = Math.floor(s);
		k = Math.floor(u);
		l = Math.floor(n);
		f = z.getImageData(A, v, k, l);
		g = f.data;
		for (r = 0; r < 4; r++) {
			t = r;
			q = t + 7 - 2 * r;
			m = (r * u + t) * 4;
			while (t < q) {
				g[m] = g[m + 1] = g[m + 2] = 0;
				t++;
				m += 4
			}
		}
		z.putImageData(f, j, s)
	};
	c.prototype.__drawLeftTriangle = function(z, j, s) {
		var o = this,
			t, r, m, g, f, q, u = 4,
			n = 7,
			A, v, k, l;
		A = Math.floor(j);
		v = Math.floor(s);
		k = Math.floor(u);
		l = Math.floor(n);
		f = z.getImageData(A, v, k, l);
		g = f.data;
		for (r = 0; r < n; r++) {
			if (r > 3) {
				t = r - 3
			} else {
				t = 3 - r
			}
			m = (r * u + t) * 4;
			while (t < u) {
				g[m] = g[m + 1] = g[m + 2] = 0;
				t++;
				m += 4
			}
		}
		z.putImageData(f, j, s)
	};
	c.prototype.__drawRightTriangle = function(z, j, s) {
		var o = this,
			t, r, m, g, f, u = 4,
			n = 7,
			A, v, k, l;
		A = Math.floor(j);
		v = Math.floor(s);
		k = Math.floor(u);
		l = Math.floor(n);
		f = z.getImageData(A, v, k, l);
		g = f.data;
		var q;
		for (r = 0; r < n; r++) {
			t = 0;
			if (r > 3) {
				q = 7 - r
			} else {
				q = r + 1
			}
			m = (r * u + t) * 4;
			while (t < q) {
				g[m] = g[m + 1] = g[m + 2] = 0;
				t++;
				m += 4
			}
		}
		z.putImageData(f, j, s)
	};
	c.prototype.__drawBox = function(t, i, p, f, s, q, o, h, l, r) {
		var m = this,
			g = 0,
			j, k;
		if (f <= 0 || s <= 0) {
			return
		}
		try {
			j = Math.floor(f);
			k = Math.floor(s)
		} catch (n) {
			return
		}
		if (t) {
			t.fillStyle = q;
			t.fillRect(i, p, j, k);
			t.lineWidth = m.borderWidth;
			b.drawBoxBorder(t, i + g, p + g, j - g, k - g, o, h);
			i += m.borderWidth;
			p += m.borderWidth;
			j -= 2 * m.borderWidth;
			k -= 2 * m.borderWidth;
			b.drawBoxBorder(t, i + g, p + g, j - g, k - g, l, r)
		} else {
			if (m.divSlide) {
				m.divSlide.style.backgroundColor = q;
				m.divSlide.style.left = i + "px";
				m.divSlide.style.top = p + "px";
				m.divSlide.style.width = j + "px";
				m.divSlide.style.height = k + "px"
			}
		}
	};
	c.prototype.__drawBackground = function(t, r, m) {
		var n = this,
			q, o, l, g, f, u, s, j, k;
		t.fillStyle = n.bgColor;
		if (n.Width > 0 && n.Height > 0) {
			t.fillRect(n.borderWidth, n.borderWidth, n.Width - 2 * n.borderWidth, n.Height - 2 * n.borderWidth);
			u = 0;
			s = 0;
			j = Math.floor(r);
			k = Math.floor(m);
			f = t.getImageData(u, s, j, k);
			g = f.data;
			for (o = 0; o < m; o++) {
				q = (o % 2);
				l = (o * r + q) * 4;
				while (q < r) {
					g[l] = g[l + 1] = g[l + 2] = 255;
					q += 2;
					l += 8
				}
			}
			t.putImageData(f, 0, 0)
		}
	};
	c.prototype.__drawUpButton = function(f, g) {
		var i = this,
			h;
		if (g) {
			h = i.arrowHoverColor
		} else {
			h = i.arrowColor
		}
		if (f) {
			i.__drawBox(f, 0, 0, i.arrowSize, i.arrowSize, h, i.boxOuterBorderLightColor, i.boxOuterBorderDarkColor, i.boxInnerBorderLightColor, i.boxInnerBorderDarkColor);
			i.__drawUpTriangle(f, 3, 6, i.arrowColor)
		} else {
			if (i.divArrow1) {
				i.divArrow1.style.top = -i.arrowSize / 4 + "px";
				i.divArrow1.style.left = (i.Width - i.arrowSize) / 2 + "px";
				i.divArrow1.style.borderStyle = "dotted dotted solid";
				i.divArrow1.style.borderWidth = i.arrowSize / 2 + "px";
				i.divArrow1.style.borderColor = "transparent transparent " + i.arrowColor;
				i.divArrow1.style.overflow = "hidden"
			}
		}
	};
	c.prototype.__drawDownButton = function(f, g) {
		var i = this,
			h;
		if (g) {
			h = i.arrowHoverColor
		} else {
			h = i.arrowColor
		}
		if (f) {
			i.__drawBox(f, 0, i.Height - i.arrowSize, i.arrowSize, i.arrowSize, h, i.boxOuterBorderLightColor, i.boxOuterBorderDarkColor, i.boxInnerBorderLightColor, i.boxInnerBorderDarkColor);
			i.__drawDownTriangle(f, 4, i.Height - 10, i.arrowColor)
		} else {
			if (i.divArrow2) {
				i.divArrow2.style.top = i.Height - i.arrowSize * 3 / 4 + "px";
				i.divArrow2.style.left = (i.Width - i.arrowSize) / 2 + "px";
				i.divArrow2.style.borderStyle = "dotted dotted solid";
				i.divArrow2.style.borderWidth = i.arrowSize / 2 + "px";
				i.divArrow2.style.borderColor = i.arrowColor + " transparent transparent";
				i.divArrow2.style.overflow = "hidden"
			}
		}
	};
	c.prototype.__drawLeftButton = function(f, g) {
		var i = this,
			h;
		if (g) {
			h = i.arrowHoverColor
		} else {
			h = i.arrowColor
		}
		if (f) {
			i.__drawBox(f, 0, 0, i.arrowSize, i.arrowSize, h, i.boxOuterBorderLightColor, i.boxOuterBorderDarkColor, i.boxInnerBorderLightColor, i.boxInnerBorderDarkColor);
			i.__drawLeftTriangle(f, 5, 4, i.arrowColor)
		} else {
			if (i.divArrow1) {
				i.divArrow1.style.top = (i.Height - i.arrowSize) / 2 + "px";
				i.divArrow1.style.left = -i.arrowSize / 4 + "px";
				i.divArrow1.style.borderStyle = "dotted solid dotted dotted";
				i.divArrow1.style.borderWidth = i.arrowSize / 2 + "px";
				i.divArrow1.style.borderColor = "transparent " + i.arrowColor + " transparent transparent";
				i.divArrow1.style.overflow = "hidden"
			}
		}
	};
	c.prototype.__drawRightButton = function(f, g) {
		var i = this,
			h;
		if (g) {
			h = i.arrowHoverColor
		} else {
			h = i.arrowColor
		}
		if (f) {
			i.__drawBox(f, i.Width - i.arrowSize, 0, i.arrowSize, i.arrowSize, h, i.boxOuterBorderLightColor, i.boxOuterBorderDarkColor, i.boxInnerBorderLightColor, i.boxInnerBorderDarkColor);
			i.__drawRightTriangle(f, i.Width - 10, 4, i.arrowColor)
		} else {
			if (i.divArrow2) {
				i.divArrow2.style.top = (i.Height - i.arrowSize) / 2 + "px";
				i.divArrow2.style.left = i.Width - i.arrowSize * 3 / 4 + "px";
				i.divArrow2.style.borderStyle = "dotted dotted solid dotted";
				i.divArrow2.style.borderWidth = i.arrowSize / 2 + "px";
				i.divArrow2.style.borderColor = "transparent transparent transparent " + i.arrowColor;
				i.divArrow2.style.overflow = "hidden"
			}
		}
	};
	c.prototype.__drawFrame = function() {
		var h = this,
			f = d,
			g = d;
		if (h.canvas && h.bCanvas) {
			f = h.canvas.getContext("2d");
			if (h.Width > 0 && h.Height > 0) {
				f.clearRect(0, 0, h.Width, h.Height)
			}
			h.__drawBackground(f, h.Width, h.Height)
		}
		h.__redrawUpOrLeftArrow(f, g);
		h.__redrawDownOrRightArrow(f, g)
	};
	c.prototype.__redrawUpOrLeftArrow = function(f, g) {
		var h = this;
		if (h.Horizontal) {
			h.__drawLeftButton(f, g)
		} else {
			h.__drawUpButton(f, g)
		}
	};
	c.prototype.__redrawDownOrRightArrow = function(f, g) {
		var h = this;
		if (h.Horizontal) {
			h.__drawRightButton(f, g)
		} else {
			h.__drawDownButton(f, g)
		}
	};
	c.prototype.__drawScroll = function(l) {
		var m = this,
			g = 0,
			f, j, k = l || "",
			h = d,
			i;
		if (m._maxPosition > 0 && m.canvas) {
			m.canvas.style.display = "";
			j = m.__caculateSlideSize();
			f = Math.ceil(m.scrollZeroPos + m._currentPosition * j / m._PagePositionSize);
			e.output("__drawScroll: " + [f, m.__getCurrentPage(), j].join(","));
			if (m.canvas && m.bCanvas) {
				h = m.canvas.getContext("2d")
			}
			m.__drawFrame();
			if (k == "mousedown" || k == "mousemove") {
				i = m.bgColor
			} else {
				i = m.bgColor
			}
			if (m.Horizontal) {
				m.__drawBox(h, f, 0, m.slideSize, m.Height, i, m.boxOuterBorderLightColor, m.boxOuterBorderDarkColor, m.boxInnerBorderLightColor, m.boxInnerBorderDarkColor)
			} else {
				m.__drawBox(h, 0, f, m.Width, m.slideSize, i, m.boxOuterBorderLightColor, m.boxOuterBorderDarkColor, m.boxInnerBorderLightColor, m.boxInnerBorderDarkColor)
			}
		} else {
			if (m.canvas) {
				m.canvas.style.display = "none"
			}
		}
	};
	c.prototype.__caculateDraggingNewPosition = function(k, i) {
		var f = this,
			n, h = 0,
			l = 0,
			j;
		n = f.__caculateSlideSize();
		var m = f.__caculateSlidePos(),
			g;
		if (f.Horizontal) {
			g = k - f.arrowSize;
			l = k - f.mousePos_Dragging.x;
			j = k
		} else {
			g = i - f.arrowSize;
			l = i - f.mousePos_Dragging.y;
			j = i
		}
		e.output("__caculateDraggingNewPosition: " + [f._currentPosition, f._PagePositionSize, l, n].join(","));
		h = f._currentPosition + (f._PagePositionSize * l / n);
		if (h < 0) {
			h = 0
		}
		if (h > f._maxPosition) {
			h = f._maxPosition
		}
		f.mousePos_Dragging.x = k;
		f.mousePos_Dragging.y = i;
		return h
	};
	c.prototype.__getPosDirection = function(g, j) {
		var i = this,
			f, h;
		f = i.__caculateSlidePos();
		if (i.Horizontal) {
			h = g
		} else {
			h = j
		}
		if (h < f.start) {
			return -1
		} else {
			if (h <= f.end) {
				return 0
			} else {
				return 1
			}
		}
	};
	c.prototype.__caculateSlidePos = function() {
		var i = this,
			h = {
				start: 0,
				end: 0
			},
			g, f;
		g = i.__caculateSlideSize();
		f = i.scrollSize + i.arrowSize;
		h.start = i.__getCurrentPage() * g + i.arrowSize;
		h.end = h.start + i.slideSize;
		if (h.end >= f) {
			h.end = f;
			h.start = f - i.slideSize
		}
		return h
	};
	c.prototype.__caculateSlideSize = function() {
		var h = this,
			f = 0,
			g = 0;
		g = h.scrollSize;
		if (h._maxPosition > 0 && g > 0) {
			h.slideSize = g * (h._PagePositionSize / (h._maxPosition + h._PagePositionSize));
			if (h.slideSize < h.minslideSize) {
				h.slideSize = h.minslideSize;
				f = (g - h.slideSize) * h._PagePositionSize / (h._maxPosition)
			} else {
				f = h.slideSize
			}
		}
		return f
	};
	c.prototype.__fireEvent = function(f, g) {
		var h = this;
		if (b.isFunction(h[f])) {
			return h[f](g)
		}
		return a
	};
	c.prototype.SetVisible = function(f) {
		var g = this;
		if (g.canvas) {
			if (f) {
				g.canvas.style.display = "";
				g.__drawFrame();
				g.__drawScroll()
			} else {
				g._maxPosition = 0;
				g._currentPosition = 0;
				g.canvas.style.display = "none"
			}
		}
	};
	c.prototype.GetVisible = function() {
		var f = this;
		if (f.canvas) {
			if (f.canvas.style.display == "none") {
				return d
			} else {
				return a
			}
		}
		return d
	};
	c.prototype.Destroy = function() {
		var g = this,
			f;
		if (g.canvas && g.bCanvas && g.Width > 0 && g.Height > 0) {
			f = g.canvas.getContext("2d");
			f.clearRect(0, 0, g.Width, g.Height)
		}
		g._maxPosition = 0;
		g._currentPosition = 0
	};
	c.prototype.SetLocation = function(f, h) {
		var g = this;
		g.Left = f;
		g.Top = h;
		g.Right = f + g.Width;
		g.Bottom = f + g.Height;
		if (g.canvas) {
			if (g.canvas.parentNode) {
				g.canvas.parentNode.style.position = "relative"
			}
			g.canvas.style.position = "absolute";
			g.canvas.style.left = f + "px";
			g.canvas.style.top = h + "px"
		}
	};
	Dynamsoft.Lib.UI = Dynamsoft.Lib.UI || {};
	Dynamsoft.Lib.UI.ScrollBar = c
})(Dynamsoft.Lib);
(function(b) {
	if (!b.product.bChromeEdition) {
		return
	}
	var a = !0,
		c = !1,
		d = {
			Normal: 0,
			Drawing: 1,
			Moving: 2
		},
		e = {
			output: function(g) {}
		};

	function f(g) {
		var h = this;
		h.__controlWidth = 0;
		h.__controlHeight = 0;
		h.drawWidth = 0;
		h.drawHeight = 0;
		h.Left = 0;
		h.Top = 0;
		h.Right = 0;
		h.Bottom = 0;
		h.imageControl = g;
		h.__mousedownStatus = d.Normal;
		h.mouse_zero_x = -1;
		h.mouse_zero_y = -1;
		h.mouse_x = 0;
		h.mouse_y = 0;
		h.selectedCanvasAreas = [{
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			width: 0,
			height: 0
		}];
		h.indexOfSelectedCanvasAreaThatIsMoving = -1;
		h.canvas = c;
		h.lastClick = c;
		h.cursor = "crosshair";
		h.bCanvas = c;
		if (b.product.bChromeEdition) {
			h.bCanvas = a
		}
	}
	f.prototype.GetEL = function() {
		var g = this;
		if (!g.canvas) {
			g.canvas = document.createElement("canvas");
			g.canvas.style.position = "absolute";
			g.canvas.style.left = "0";
			g.canvas.style.top = "0"
		}
		return g.canvas
	};
	f.prototype.ChangeControlSize = function(h, g) {
		var j = this,
			i;
		j.__controlWidth = h;
		j.__controlHeight = g;
		if (j.canvas) {
			if (j.bCanvas) {
				j.canvas.width = j.__controlWidth;
				j.canvas.height = j.__controlHeight
			} else {
				j.canvas.style.width = j.__controlWidth;
				j.canvas.style.height = j.__controlHeight
			}
		}
	};
	f.prototype.SetDrawImageLocationAndSize = function(j, i, h, g) {
		var k = this;
		e.output("SetLocationAndSize: " + [j, i, h, g].join(","));
		k.drawWidth = h;
		k.drawHeight = g;
		k.Left = j;
		k.Top = i;
		k.Right = k.Left + k.drawWidth;
		k.Bottom = k.Top + k.drawHeight
	};
	f.prototype.__fireEvent = function(g, h) {
		var i = this;
		if (b.isFunction(i[g])) {
			return i[g](h)
		}
		return true
	};
	f.prototype.__MouseShapeIsHand = function() {
		var g = this;
		return g.imageControl.iMouseShape == EnumDWT_MouseShape.Hand
	};
	f.prototype.__MouseShapeIsZoom = function() {
		var g = this;
		return g.imageControl.iMouseShape == EnumDWT_MouseShape.Zoom
	};
	f.prototype.__GetSelectionRectAspectRatio = function() {
		var g = this;
		return g.imageControl.__fSelectionRectAspectRatio
	};
	f.prototype.__restoreCanvas = function(i, g, j) {
		var k = this;
		if (i) {
			i.canvas.width = g;
			i.canvas.height = j
		}
	};
	f.prototype.__draw_dashRect = function() {
		var k = this,
			o = k.canvas.getContext("2d"),
			l = k.drawWidth - 1,
			p = k.drawHeight - 1,
			q, n, g, h, m;
		if (!k.canvas) {
			return
		}
		k.__restoreCanvas(o, o.canvas.width, o.canvas.height);
		for (var j = 0; j < k.selectedCanvasAreas.length; j++) {
			m = k.selectedCanvasAreas[j];
			q = m.left;
			n = m.top;
			g = m.width;
			h = m.height;
			e.output("__select_rect: " + [q, n, g, h].join(","));
			if (g < 0) {}
			if (g > l) {
				g = l
			}
			if (h < 0) {}
			if (h > p) {
				h = p
			}
			if (q < 0) {
				q = 0
			} else {
				if (q + g > l) {
					g = l - q
				}
			}
			if (n < 0) {
				n = 0
			} else {
				if (n + h > p) {
					h = p - n
				}
			}
			if (g > 0 && h > 0) {
				o.__dashedLineRect(q + k.Left, n + k.Top, g, h)
			}
		}
	};
	f.prototype.SetSelectedArea = function(i, o, w, l, q, v, n) {
		var s = this,
			p = s.canvas.getContext("2d"),
			u, r, m, t, j, y, g = s.drawWidth - 1,
			h = s.drawHeight - 1,
			x = false,
			k;
		e.output("SetSelectedArea: " + [i, o, w, l].join(","));
		if (!s.canvas) {
			return false
		}
		if (i < w) {
			u = i;
			m = w
		} else {
			u = w;
			m = i
		}
		if (o < l) {
			r = o;
			t = l
		} else {
			r = l;
			t = o
		}
		if (u < 0) {
			u = 0
		}
		if (r < 0) {
			r = 0
		}
		j = m - u;
		y = t - r;
		if (j > g) {
			j = g;
			m = u + j
		}
		if (y > h) {
			y = h;
			t = r + y
		}
		if (i > g || o > h) {
			x = true
		} else {
			if (Math.abs(j) + Math.abs(y) <= 5) {
				if (!n) {
					x = true
				}
			}
		}
		u = parseInt(u);
		r = parseInt(r);
		m = parseInt(m);
		t = parseInt(t);
		j = parseInt(j);
		y = parseInt(y);
		if (x) {
			k = s.selectedCanvasAreas[0];
			u = k.left;
			r = k.top;
			j = k.width;
			y = k.height;
			if (u == 0 && r == 0 && j == 0 && y == 0 && s.selectedCanvasAreas.length == 1) {
				return false
			}
			s.selectedCanvasAreas = [{
				left: 0,
				top: 0,
				right: 0,
				bottom: 0,
				width: 0,
				height: 0
			}];
			s.indexOfSelectedCanvasAreaThatIsMoving = -1;
			s.__restoreCanvas(p, p.canvas.width, p.canvas.height);
			if (q) {
				s.__fireEvent("onImageAreaDeSelected")
			}
		} else {
			k = {
				left: u,
				top: r,
				right: m,
				bottom: t,
				width: j,
				height: y
			};
			if (v) {
				s.selectedCanvasAreas.push(k);
				s.selectedCanvasAreas[0] = {
					left: 0,
					top: 0,
					right: 0,
					bottom: 0,
					width: 0,
					height: 0
				}
			} else {
				s.selectedCanvasAreas[0] = k
			}
			s.__draw_dashRect();
			if (q && v) {
				s.__fireEvent("onImageAreaSelected", {
					left: u,
					top: r,
					right: m,
					bottom: t,
					fromScroll: false,
					areaIndex: s.selectedCanvasAreas.length - 1
				})
			}
		}
		return true
	};
	f.prototype.ReFireSelectedEventWhenImageMoved = function(m) {
		var l = this,
			p, o, g, k, n, j;
		for (var h = 0; h < l.selectedCanvasAreas.length; h++) {
			if (m && m != -1) {
				l.indexOfSelectedCanvasAreaThatIsMoving = -1;
				n = l.selectedCanvasAreas[m];
				j = m;
				h = l.selectedCanvasAreas.length
			} else {
				n = l.selectedCanvasAreas[h];
				j = h
			}
			p = n.left;
			o = n.top;
			g = n.right;
			k = n.bottom;
			if (p == 0 && o == 0 && g == 0 && k == 0) {
				continue
			} else {
				l.__fireEvent("onImageAreaSelected", {
					left: p,
					top: o,
					right: g,
					bottom: k,
					fromScroll: true,
					areaIndex: j
				})
			}
		}
	};
	f.prototype.SetMouseShape = function(l, h) {
		var j = this,
			n, o, m, g, i, k = j.cursor;
		if (j.canvas) {
			n = j.canvas.getContext("2d");
			if (l == EnumDWT_MouseShape.Hand) {
				k = "pointer";
				j.SetSelectedArea(0, 0, 0, 0, true)
			} else {
				if (l == EnumDWT_MouseShape.Crosshair || l == EnumDWT_MouseShape.Default) {
					k = "crosshair"
				} else {
					if (l == EnumDWT_MouseShape.Zoom) {
						if (b.env.bIE) {
							k = ""
						} else {
							k = "zoom-in"
						}
					} else {
						if (l == EnumDWT_MouseShape.NWResize) {
							k = "nw-resize"
						} else {
							if (l == EnumDWT_MouseShape.EResize) {
								k = "e-resize"
							} else {
								if (l == EnumDWT_MouseShape.NResize) {
									k = "n-resize"
								} else {
									if (l == EnumDWT_MouseShape.Resize) {
										k = "resize"
									} else {
										if (l == EnumDWT_MouseShape.Move) {
											k = "move"
										}
									}
								}
							}
						}
					}
				}
			}
			j.canvas.style.cursor = k;
			if (!h) {
				j.cursor = k
			}
		}
	};
	f.prototype.Destroy = function() {
		var k = this,
			j;
		e.output("Destroy:");
		if (k.canvas) {
			var g = k.canvas.getContext("2d");
			if (k.__controlWidth > 0 && k.__controlHeight > 0) {
				g.clearRect(0, 0, k.__controlWidth, k.__controlHeight)
			}
			j = k.canvas.parentNode;
			if (j) {
				j.removeChild(k.canvas)
			}
		}
		var i = Dynamsoft.Lib.UI.ImageAreaSelectorEvt,
			h = i.indexOf(k);
		if (h >= 0) {
			i.splice(h, 1)
		}
	};
	f.prototype.__movingRect = function() {};
	f.prototype.__funDrawNewSelectArea = function(o) {
		var j = this,
			q, p, g, i, k, h = true;
		if (j.indexOfSelectedCanvasAreaThatIsMoving == -1) {
			return
		}
		if (j.__mousedownStatus == d.Moving) {
			var n = j.mouse_x - j.mouse_zero_x,
				m = j.mouse_y - j.mouse_zero_y;
			var l = j.selectedCanvasAreas[j.indexOfSelectedCanvasAreaThatIsMoving];
			if (l) {
				q = l.left + n;
				p = l.top + m;
				g = l.right + n;
				i = l.bottom + m;
				if (q < 0 || p < 0 || g > j.drawWidth || i > j.drawHeight) {
					q = l.left;
					p = l.top;
					g = l.right;
					i = l.bottom
				}
				l = {
					left: q,
					top: p,
					right: g,
					bottom: i,
					width: Math.abs(g - q),
					height: Math.abs(i - p)
				};
				j.selectedCanvasAreas[j.indexOfSelectedCanvasAreaThatIsMoving] = l;
				j.__draw_dashRect();
				j.mouse_zero_x = j.mouse_x;
				j.mouse_zero_y = j.mouse_y
			}
		}
	};
	f.prototype.__funReSelectArea = function(i, p, r) {
		var m = this,
			s, q, g, l, o, h = true;
		if (m.__mousedownStatus == d.Moving) {
			return
		}
		s = m.mouse_zero_x;
		q = m.mouse_zero_y;
		g = m.mouse_x;
		l = m.mouse_y;
		o = m.__GetSelectionRectAspectRatio();
		if (o > 0) {
			var k, j, n = 1;
			if (o < 1) {
				j = l - q;
				k = j * o;
				if (g > s && l > q || g < s && l < q) {
					g = s + k;
					n = -1
				} else {
					if (g > s && l < q || g < s && l > q) {
						g = s - k
					}
				}
				if (g > m.drawWidth || g < 0) {
					if (g > m.drawWidth) {
						g = m.drawWidth
					} else {
						if (g < 0) {
							g = 0
						}
					}
					k = n * (s - g);
					j = k / o;
					l = q + j
				}
			} else {
				k = g - s;
				j = k / o;
				if (g > s && l > q || g < s && l < q) {
					l = q + j;
					n = -1
				} else {
					if (g > s && l < q || g < s && l > q) {
						l = q - j
					}
				}
				if (l > m.drawHeight || l < 0) {
					if (l > m.drawHeight) {
						l = m.drawHeight
					} else {
						if (l < 0) {
							l = 0
						}
					}
					j = n * (q - l);
					k = j * o;
					g = s + k
				}
			}
		}
		m.SetSelectedArea(s, q, g, l, true, i, r)
	};
	f.prototype.BindEvents = function() {
		var h = this,
			g;
		g = h.canvas.getContext("2d");
		Dynamsoft.Lib.UI.ImageAreaSelectorEvt.push(h);
		Dynamsoft.Lib.addEventListener(h.canvas, "mouseenter", function(i) {
			h.__fireEvent("onMouseEnter", {
				e: i
			})
		});
		Dynamsoft.Lib.addEventListener(h.canvas, "mousedown", function(j) {
			var i;
			i = b.DOM.getOffset(j, h);
			if (i.x < 0) {
				i.x = 0
			} else {
				if (i.x > h.drawWidth) {
					i.x = h.drawWidth
				}
			}
			if (i.y < 0) {
				i.y = 0
			} else {
				if (i.y > h.drawHeight) {
					i.y = h.drawHeight
				}
			}
			e.output("click on selector canvase: " + [i.x, i.y].join(","));
			if (h.__isInSelectedArea(i)) {
				h.__mousedownStatus = d.Moving
			} else {
				h.__mousedownStatus = d.Drawing;
				if (!(j.ctrlKey || b.env.bMac && j.metaKey)) {
					h.SetSelectedArea(0, 0, 0, 0, true)
				}
			}
			h.mouse_zero_x = parseInt(i.x);
			h.mouse_zero_y = parseInt(i.y);
			h.__fireEvent("onMouseDown", {
				e: j,
				x: i.x,
				y: i.y
			});
			b.stopPropagation(j)
		});
		Dynamsoft.Lib.addEventListener(h.canvas, "mousemove", function(j) {
			var i;
			i = b.DOM.getOffset(j, h);
			if (i.x < 0) {
				i.x = 0
			} else {
				if (i.x > h.drawWidth) {
					i.x = h.drawWidth
				}
			}
			if (i.y < 0) {
				i.y = 0
			} else {
				if (i.y > h.drawHeight) {
					i.y = h.drawHeight
				}
			}
			if (h.__isInSelectedArea(i) || h.__mousedownStatus == d.Moving) {
				h.SetMouseShape(EnumDWT_MouseShape.Move, a)
			} else {
				h.SetMouseShape(h.cursor, a)
			}
			if (h.__mousedownStatus != d.Normal) {
				if (i.x == h.mouse_zero_x && i.y == h.mouse_zero_y) {
					return
				}
			}
			h.mouse_x = i.x;
			h.mouse_y = i.y;
			h.__fireEvent("onMouseMove", {
				e: j,
				dragging: (h.__mousedownStatus != d.Normal),
				x: i.x,
				y: i.y,
				origX: h.mouse_zero_x,
				origY: h.mouse_zero_y
			});
			if (!h.__MouseShapeIsHand()) {
				if (h.__mousedownStatus == d.Drawing) {
					if (j.ctrlKey || b.env.bMac && j.metaKey) {
						h.__funReSelectArea(false, false, true)
					} else {
						h.__funReSelectArea(false, false)
					}
				} else {
					if (h.__mousedownStatus == d.Moving) {
						h.__funDrawNewSelectArea()
					}
				}
			}
			b.stopPropagation(j)
		});
		Dynamsoft.Lib.addEventListener(h.canvas, "mouseup", function(n) {
			var l, m, k, j = new Date(),
				i;
			if (h.lastClick) {
				i = j.getTime() - h.lastClick.getTime()
			}
			h.lastClick = j;
			if (h.mouse_zero_x < 0 && h.mouse_zero_y < 0) {
				h.__mousedownStatus = d.Normal;
				h.mouse_zero_x = -1;
				h.mouse_zero_y = -1;
				return
			}
			l = b.DOM.getOffset(n, h);
			if (l.x < 0) {
				l.x = 0
			} else {
				if (l.x > h.drawWidth) {
					l.x = h.drawWidth
				}
			}
			if (l.y < 0) {
				l.y = 0
			} else {
				if (l.y > h.drawHeight) {
					l.y = h.drawHeight
				}
			}
			h.mouse_x = l.x;
			h.mouse_y = l.y;
			if (h.__mousedownStatus == d.Moving) {
				h.ReFireSelectedEventWhenImageMoved(h.indexOfSelectedCanvasAreaThatIsMoving)
			}
			h.__mousedownStatus = d.Normal;
			if (h.__MouseShapeIsHand()) {
				h.__restoreCanvas(g, g.canvas.width, g.canvas.height);
				h.__fireEvent("onMouseUp", {
					e: n,
					x: l.x,
					y: l.y,
					out: false
				})
			} else {
				if (h.__MouseShapeIsZoom()) {
					m = l.x - h.mouse_zero_x;
					k = l.y - h.mouse_zero_y;
					if (Math.abs(m) < 3 && Math.abs(k) < 3) {
						h.__fireEvent("onZoom", {
							e: n,
							x: l.x,
							y: l.y,
							out: false
						})
					} else {
						var p, o;
						p = (l.x + h.mouse_zero_x) / 2;
						o = (l.y + h.mouse_zero_y) / 2;
						h.__fireEvent("onZoom", {
							e: n,
							x: p,
							y: o,
							out: false
						});
						h.__funReSelectArea(true, false)
					}
				} else {
					m = l.x - h.mouse_zero_x;
					k = l.y - h.mouse_zero_y;
					if (Math.abs(m) < 3 && Math.abs(k) < 3) {} else {
						h.__funReSelectArea(true, false);
						h.__fireEvent("onMouseUp", {
							e: n,
							x: l.x,
							y: l.y,
							out: false
						})
					}
				}
			}
			h.mouse_zero_x = -1;
			h.mouse_zero_y = -1;
			if (i < 500) {
				h.__fireEvent("onMouseDoubleClick", {
					e: n,
					x: l.x,
					y: l.y
				});
				h.lastClick = false
			} else {
				if (n.button == 2) {
					h.__fireEvent("onMouseRightClick", {
						e: n,
						x: l.x,
						y: l.y
					})
				} else {
					if (n.button == 0 && !h.imageControl.containingView.bMouseClickEventFiredInMouseDown) {
						if (!h.imageControl.containingView.bDraggedBeforeMouseUp) {
							h.__fireEvent("onMouseClick", {
								e: n,
								x: l.x,
								y: l.y
							})
						}
					}
				}
			}
			b.stopPropagation(n)
		});
		Dynamsoft.Lib.addEventListener(h.canvas, "mouseout", function(i) {
			h.__fireEvent("onMouseOut", {
				e: i
			});
			b.stopPropagation(i)
		})
	};
	f.prototype.__InvokeMouseUpOutside = function(j) {
		var k = this;
		var h;
		if (k.mouse_zero_x < 0 && k.mouse_zero_y < 0) {
			k.__mousedownStatus = d.Normal;
			k.mouse_zero_x = -1;
			k.mouse_zero_y = -1;
			return
		}
		h = b.DOM.getOffset(j, k);
		if (h.x < 0) {
			h.x = 0
		} else {
			if (h.x > k.drawWidth) {
				h.x = k.drawWidth
			}
		}
		if (h.y < 0) {
			h.y = 0
		} else {
			if (h.y > k.drawHeight) {
				h.y = k.drawHeight
			}
		}
		if (k.__mousedownStatus) {
			k.__mousedownStatus = d.Normal;
			if (!k.__MouseShapeIsHand()) {
				var i = h.x - k.mouse_zero_x,
					g = h.y - k.mouse_zero_y;
				if (Math.abs(i) < 3 && Math.abs(g) < 3) {} else {
					k.__funReSelectArea(true, true)
				}
			}
		}
		k.mouse_zero_x = -1;
		k.mouse_zero_y = -1;
		k.__fireEvent("onMouseUp", {
			e: j,
			x: -1,
			y: -1,
			out: true
		})
	};
	f.prototype.__isInSelectedArea = function(n) {
		var l = this,
			q, p, g, k, o, h = false,
			m = -1;
		if (l.indexOfSelectedCanvasAreaThatIsMoving != -1) {
			m = l.indexOfSelectedCanvasAreaThatIsMoving
		}
		for (var j = 1; j < l.selectedCanvasAreas.length; j++) {
			if (j == m) {
				j++
			}
			o = l.selectedCanvasAreas[j];
			if (!o) {
				return false
			}
			q = o.left;
			p = o.top;
			g = o.right;
			k = o.bottom;
			e.output("__deselectWhenMouseClick: " + [n.x, n.y, q, p, g, k].join(","));
			if (q == 0 && p == 0 && g == 0 && k == 0) {
				h = false
			}
			if ((n.x >= q && n.x <= g) && (n.y >= p && n.y <= k)) {
				if (l.__mousedownStatus == d.Moving && l.indexOfSelectedCanvasAreaThatIsMoving == -1) {
					l.indexOfSelectedCanvasAreaThatIsMoving = j
				}
				return true
			}
		}
		return h
	};
	f.prototype.__getCursorWhenInSelectedArea = function(m) {
		var l = this,
			p, o, g, k, n, h = false;
		for (var j = 0; j < l.selectedCanvasAreas.length; j++) {
			n = l.selectedCanvasAreas[j];
			p = n.left;
			o = n.top;
			g = n.right;
			k = n.bottom;
			e.output("__deselectWhenMouseClick: " + [m.x, m.y, p, o, g, k].join(","));
			if (p == 0 && o == 0 && g == 0 && k == 0) {
				h = false
			}
			if ((m.x >= p && m.x <= g) && (m.y >= o && m.y <= k)) {
				return true
			}
		}
		return l.cursor
	};
	Dynamsoft.Lib.UI = Dynamsoft.Lib.UI || {};
	Dynamsoft.Lib.UI.ImageAreaSelector = f;
	Dynamsoft.Lib.UI.ImageAreaSelectorEvt = [];
	Dynamsoft.Lib.addEventListener(window, "mouseup", function(g) {
		var h = Dynamsoft.Lib.UI.ImageAreaSelectorEvt;
		for (var j = 0; j < h.length; j++) {
			h[j].__InvokeMouseUpOutside(g)
		}
	})
})(Dynamsoft.Lib);
(function(a) {
	if (!a.product.bChromeEdition) {
		return
	}
	CanvasRenderingContext2D.prototype.__dashedLineRect = function(j, h, q, p, u) {
		if (j < 0 || h < 0 || q < 0 || p < 0) {
			return
		}
		j = Math.floor(j);
		h = Math.floor(h);
		q = Math.floor(q - 1);
		p = Math.floor(p - 1);
		if (typeof u === "undefined") {
			u = 4
		}
		var r = this,
			s, t, k = r.strokeStyle,
			o = [j, j, j + q, j],
			n = [h, h, h, h + p],
			c = [j + q, j, j + q, j + q],
			b = [h, h + p, h + p, h + p];
		for (t = 0; t < 4; t++) {
			var m = (c[t] - o[t]),
				l = (b[t] - n[t]),
				d = Math.floor(Math.sqrt(m * m + l * l)),
				g = (u <= 0) ? d : (d / u),
				e = (l / d) * u,
				f = (m / d) * u;
			r.lineWidth = 1;
			r.beginPath();
			r.moveTo(o[t], n[t]);
			r.strokeStyle = "#FFFFFF";
			for (s = 0; s < g; s++) {
				if (s % 2) {
					r.moveTo(o[t] + s * f, n[t] + s * e)
				} else {
					r.lineTo(o[t] + s * f, n[t] + s * e)
				}
			}
			r.beginPath();
			r.moveTo(o[t], n[t]);
			r.strokeStyle = "#000000";
			for (s = 0; s < g; s++) {
				if (s % 2) {
					r.lineTo(o[t] + s * f, n[t] + s * e)
				} else {
					r.moveTo(o[t] + s * f, n[t] + s * e)
				}
			}
			r.stroke()
		}
		r.strokeStyle = k
	}
})(Dynamsoft.Lib);
(function(a) {
	if (!a.product.bChromeEdition) {
		return
	}
	var c = {
		output: function(d) {}
	};

	function b(d) {
		var e = this;
		e.MaxWidth = -1;
		e.MaxHeight = -1;
		e.fZoomValue = -1;
		e.ctx = false;
		e.left = -1;
		e.top = -1;
		if (d) {
			e.MaxWidth = d.MaxWidth;
			e.MaxHeight = d.MaxHeight;
			e.fZoomValue = d.fZoomValue;
			e.ctx = d.ctx;
			e.left = d.left;
			e.top = d.top
		}
		e.aryOverlayInfo = []
	}
	b.prototype.SetContext = function(d) {
		this.ctx = d
	};
	b.prototype.SetLocation = function(d, f) {
		var e = this;
		e.left = d;
		e.top = f
	};
	b.prototype.SetImageSize = function(d, e) {
		var f = this;
		f.MaxWidth = d;
		f.MaxHeight = e
	};
	b.prototype.SetZoom = function(d) {
		var e = this;
		e.fZoomValue = d
	};
	b.prototype.Add = function(i, h, l, f, e, g, d) {
		var j = this,
			k;
		k = {
			l: i,
			t: h,
			r: l,
			b: f,
			c: e,
			o: g
		};
		j.aryOverlayInfo.push(k);
		if (d) {
			j.__drawOne(k)
		}
		return true
	};
	b.prototype.Clear = function() {
		var d = this;
		d.aryOverlayInfo.splice(0)
	};
	b.prototype.Destroy = function() {
		var d = this;
		d.ctx = false;
		d.Clear()
	};
	b.prototype.Draw = function() {
		var g = this,
			f, d, e;
		if (g.ctx) {
			f = g.aryOverlayInfo.length;
			for (d = 0; d < f; d++) {
				e = g.aryOverlayInfo[d];
				g.__drawOne(e)
			}
		}
	};
	b.prototype.__drawOne = function(m) {
		var l = this,
			j, h, n, f, e, d, g, k, i;
		if (!l.ctx) {
			return
		}
		j = m.l;
		h = m.t;
		n = m.r;
		f = m.b;
		g = m.c;
		k = m.o;
		if (j < 0) {
			j = 0
		}
		if (h < 0) {
			h = 0
		}
		if (n > l.MaxWidth) {
			n = l.MaxWidth
		}
		if (f > l.MaxHeight) {
			f = l.MaxHeight
		}
		j *= l.fZoomValue;
		h *= l.fZoomValue;
		n *= l.fZoomValue;
		f *= l.fZoomValue;
		e = n - j;
		d = f - h;
		if (Dynamsoft.Lib.isNumber(g)) {
			g = Dynamsoft.Lib.getColor(g)
		}
		i = l.ctx.globalAlpha;
		l.ctx.fillStyle = g;
		l.ctx.globalAlpha = parseFloat(k);
		l.ctx.fillRect(l.left + j, l.top + h, e, d);
		l.ctx.globalAlpha = i
	};
	Dynamsoft.Lib.UI = Dynamsoft.Lib.UI || {};
	Dynamsoft.Lib.UI.ImageOverlay = b
})(Dynamsoft.Lib);
(function(d) {
	if (!d.product.bChromeEdition) {
		return
	}
	var c = !0,
		f = !1,
		g = {
			isNaNOrUndefined: function(h) {
				return d.isUndefined(h) || d.isNaN(h)
			},
			getAdjustedImageSize: function(p, k, q, l) {
				var n = {
						w: p,
						h: k,
						zoom: 1
					},
					i = Math.floor(q + 0.5),
					o = Math.floor(l + 0.5);
				g.output(["image info:", p, ",", k, "; max is ", i, ",", o].join(""));
				if (i <= p || o <= k) {
					if (i <= p && o <= k) {
						var j = i / p,
							m = o / k;
						if (j < m) {
							n.w = Math.floor(p * j + 0.5);
							n.h = Math.floor(k * j + 0.5);
							n.zoom = j
						} else {
							n.w = Math.floor(p * m + 0.5);
							n.h = Math.floor(k * m + 0.5);
							n.zoom = m
						}
					} else {
						if (i <= p) {
							n.zoom = i / p;
							n.w = Math.floor(i + 0.5);
							n.h = Math.floor(k * n.zoom + 0.5)
						} else {
							if (o <= k) {
								n.zoom = o / k;
								n.w = Math.floor(p * n.zoom + 0.5);
								n.h = Math.floor(o + 0.5)
							}
						}
					}
				}
				g.output(["change result:", n.w, ",", n.h].join(""));
				return n
			},
			SetPageNumber: function(m, j) {
				var l = j * 1,
					h, k;
				m.innerHTML = (l + 1);
				if (l >= 99 && l < 999) {
					h = 32;
					k = 24
				} else {
					if (l >= 999 && l < 9999) {
						h = 40;
						k = 30
					} else {
						if (l >= 9999 && l < 99999) {
							h = 46;
							k = 34
						} else {
							if (l >= 99999) {
								h = 55;
								k = 36
							} else {
								h = 24;
								k = 20
							}
						}
					}
				}
				m.style.width = h + "px";
				m.style.height = k + "px";
				if (d.env.bFirefox) {} else {
					m.style.lineHeight = k + "px"
				}
			},
			output: function(h) {
				if (Dynamsoft.WebTwainEnv.Debug) {
					d.log(h)
				}
			}
		},
		e = Dynamsoft.WebTwainEnv,
		b = e.customProgressText;

	function a(h) {
		var i = this;
		i._width = 0;
		i._height = 0;
		i.canvasWidth = 0;
		i.canvasHeight = 0;
		i.Left = 0;
		i.Top = 0;
		i.Right = 0;
		i.Bottom = 0;
		i.CenterH = 0;
		i.CenterV = 0;
		i.borderWidth = 1;
		i.borderColor = "#EEEEEE";
		i.selectionBorderColor = "#7DA2CE";
		i.backgroundColor = "#DDDDDD";
		i.backgroundColorInEditor = "#565656";
		i.bIfFitWindow = true;
		i.fitWindowType = 0;
		i.imageAreaSelector = false;
		i.bSelect = false;
		i.scrollH = false;
		i.scrollV = false;
		i.scrollArrowSize = 16;
		i.cIndex = -1;
		i.objImage = false;
		i.iMouseShape = EnumDWT_MouseShape.Default;
		i.fUserSetZoom = 1;
		i.fZoomValue = 1;
		i.bStretchMode = false;
		i.fZoomValuesWhenStretch = {
			v: 1,
			h: 1
		};
		i.fZoomInStep = 1.2;
		i.fZoomOutStep = 0.8;
		i.mousePosition = {
			x: -1,
			y: -1
		};
		i.mousePreviosPositionWhenMoving = {
			x: -1,
			y: -1
		};
		i.drawArea = {
			width: i.canvasWidth,
			height: i.canvasHeight,
			x: 0,
			y: 0
		};
		i.selectedImageArea = {
			left: 0,
			top: 0,
			right: 0,
			bottom: 0
		};
		i.MoveStep = 10;
		i.__fSelectionRectAspectRatio = 0;
		i.bFocus = f;
		i.__overlay = f;
		i.bShowPageNumber = f;
		i.bVisible = c;
		i.divOut = f;
		i.divInner = f;
		i.divTag = f;
		i.canvas = f;
		i.bOrigMode = c;
		i.bHasOverlay = f;
		i._origImageWidth = -1;
		i._origImageHeight = -1;
		i.containingView = null;
		i.canvasBackgroundGradientColorPairs = {
			NotSelectedHovering: ["rgb(250,252,253)", "rgb(239,246,253)"],
			Selected: ["rgb(221,234,252)", "rgb(199,222,252)"]
		};
		i.__init(h)
	}
	a.prototype.ChangeControlSize = function(i, h) {
		var j = this;
		j._width = i;
		j._height = h;
		j.canvasWidth = i;
		j.canvasHeight = h;
		j.Right = j.Left + j._width;
		j.Bottom = j.Top + j._height;
		j.CenterH = (j.Left + j.Right) / 2;
		j.CenterV = (j.Top + j.Bottom) / 2;
		j.divInner.style.height = j.canvasHeight + "px";
		j.__recaculateDrawArea();
		j.imageAreaSelector.ChangeControlSize(j.canvasWidth, j.canvasHeight);
		j.Show();
		return true
	};
	a.prototype.SetVisible = function(h) {
		var i = this;
		i.bVisible = h;
		if (h) {
			i.divOut.style.display = "";
			i.Show()
		} else {
			i.divOut.style.display = "none"
		}
		return true
	};
	a.prototype.SetOrigMode = function(i) {
		var h = this;
		if (h.bOrigMode && i == false && h.objImage) {
			h.objImage.onload = undefined;
			h.objImage.src = "data:,";
			h.objImage = f
		}
		this.bOrigMode = i
	};
	a.prototype.__init = function(h) {
		var j = this,
			i = window.document;
		if (h.Width) {
			j.canvasWidth = h.Width
		}
		if (h.Height) {
			j.canvasHeight = h.Height
		}
		if (h.index) {
			j.cIndex = h.index
		}
		if (h.containingView) {
			j.containingView = h.containingView
		}
		j.divOut = i.createElement("div");
		j.divOut.style.position = "absolute";
		j.divOut.style.top = "0px";
		j.divOut.style.left = "0px";
		j.divOut.style.borderWidth = "1px";
		j.divOut.onselectstart = function() {
			return false
		};
		j.divInner = i.createElement("div");
		j.divInner.style.position = "relative";
		j.divInner.style.height = j.canvasHeight + "px";
		j.divTag = i.createElement("div");
		j.divTag.className = "dynamsoft-dwt-imgTag";
		j.divTag.style.position = "absolute";
		j.divTag.style.height = "20px";
		j.canvas = i.createElement("canvas");
		j.canvas.style.position = "relative";
		j.canvas.style.top = "0px";
		j.canvas.width = j.canvasWidth;
		j.canvas.height = j.canvasHeight;
		j.divOut.appendChild(j.divInner);
		j.divInner.appendChild(j.divTag);
		j.divInner.appendChild(j.canvas);
		j.__createSelector(h);
		if (d.isFunction(h.onMouseRightClick)) {
			j.onMouseRightClick = h.onMouseRightClick
		}
		if (d.isFunction(h.onMouseClick)) {
			j.onMouseClick = h.onMouseClick
		}
		if (d.isFunction(h.onZoomChanged)) {
			j.onZoomChanged = h.onZoomChanged
		}
		j.__overlay = new Dynamsoft.Lib.UI.ImageOverlay()
	};
	a.prototype.bindEvents = function() {
		var i = this,
			h;
		h = i.divOut.parentNode;
		if (h) {
			i.imageAreaSelector.ChangeControlSize(i.canvasWidth, i.canvasHeight);
			i.imageAreaSelector.BindEvents();
			i.imageAreaSelector.SetMouseShape(i.iMouseShape)
		}
		return true
	};
	a.prototype.__getRealZoomValue = function(h) {
		var j = this,
			i;
		if (j.bOrigMode) {
			if (h) {
				return {
					h: j.fZoomValuesWhenStretch.h,
					v: j.fZoomValuesWhenStretch.v
				}
			}
			i = j.fZoomValue
		} else {
			if (j._origImageWidth <= 0) {
				j.__getImageOrignalSize()
			}
			if (j._origImageWidth > 0) {
				if (j.objImage != null && j.objImage.width != null) {
					if (h) {
						return {
							h: j.fZoomValuesWhenStretch.h * j.objImage.width / j._origImageWidth,
							v: j.fZoomValuesWhenStretch.v * j.objImage.height / j._origImageHeight
						}
					} else {
						i = j.fZoomValue * j.objImage.width / j._origImageWidth
					}
				}
			} else {
				g.output("cannot get image width.");
				i = -1
			}
		}
		return i
	};
	a.prototype.__getOrigImageWidth = function() {
		var h = this;
		if (h.bOrigMode && h.objImage) {
			return h.objImage.width
		} else {
			return h._origImageWidth
		}
	};
	a.prototype.__getOrigImageHeight = function() {
		var h = this;
		if (h.bOrigMode && h.objImage) {
			return h.objImage.height
		} else {
			return h._origImageHeight
		}
	};
	a.prototype.__checkNewZoomValue = function(h) {
		var j = this,
			i = Math.floor(h * 100);
		if (0 < i && i < 2500) {
			return true
		}
		return false
	};
	a.prototype.__checkZoomValue = function(h) {
		var j = this,
			i = 15000;
		if (j._origImageWidth <= 0 || j._origImageHeight <= 0) {
			return false
		}
		if (d.isUndefined(h)) {
			if (parseInt(j._origImageWidth * j.fZoomValue) > i || parseInt(j._origImageHeight * j.fZoomValue) > i) {
				return false
			}
		} else {
			if (parseInt(j._origImageWidth * h) > i || parseInt(j._origImageHeight * h) > i) {
				return false
			}
		}
		return true
	};
	a.prototype.__createSelector = function(h) {
		var j = this;
		if (!j.imageAreaSelector) {
			j.imageAreaSelector = new Dynamsoft.Lib.UI.ImageAreaSelector(j);
			var i = j.imageAreaSelector.GetEL();
			j.divInner.appendChild(i);
			j.imageAreaSelector.onMouseUp = function(k) {
				j.mousePreviosPositionWhenMoving.x = -1;
				j.mousePreviosPositionWhenMoving.y = -1;
				j.__fireEvent("onMouseUp", {
					e: k.e,
					x: k.x,
					y: k.y,
					out: k.out,
					index: j.cIndex
				})
			};
			j.imageAreaSelector.onZoom = function(q) {
				var p, n, l, r, t = q.ddx,
					s = q.ddy,
					k;
				l = j.__getOrigImagePos();
				if (g.isNaNOrUndefined(l.x) || g.isNaNOrUndefined(l.y)) {
					return
				}
				r = j.__getRealZoomValue();
				if (r < 0) {
					return
				}
				p = (q.x + l.x) / r;
				n = (q.y + l.y) / r;
				var m = false;
				if (j.__checkZoomValue()) {
					k = j.fZoomInStep * j.fZoomValue;
					if (!j.__checkNewZoomValue(k)) {
						k = 25;
						m = true
					}
					if (j.fZoomValue != k) {
						j.__zoomInAt(k, p, n, q.x, q.y)
					} else {
						m = true
					}
					j.__fireEvent("onZoomChanged", {
						zoom: j.fZoomValue,
						isMax: m,
						index: j.cIndex
					})
				} else {
					j.__fireEvent("onZoomChanged", {
						zoom: j.fZoomValue,
						isMax: true,
						index: j.cIndex
					})
				}
				j.mousePreviosPositionWhenMoving.x = -1;
				j.mousePreviosPositionWhenMoving.y = -1
			};
			j.imageAreaSelector.onMouseDown = function(n) {
				var p, m, l, k;
				l = j.__getOrigImagePos();
				if (g.isNaNOrUndefined(l.x) || g.isNaNOrUndefined(l.y)) {
					return
				}
				k = j.__getRealZoomValue();
				if (k < 0) {
					return
				}
				p = (n.x + l.x) / k;
				m = (n.y + l.y) / k;
				j.mousePreviosPositionWhenMoving.x = n.x;
				j.mousePreviosPositionWhenMoving.y = n.y;
				j.__fireEvent("onMouseDown", {
					e: n.e,
					x: p,
					y: m,
					index: j.cIndex
				})
			};
			j.imageAreaSelector.onMouseEnter = function(k) {
				j.bMouseHovering = true;
				if (j.bSelect || j.containingView.bEditorViewer) {
					return
				}
				j.Show()
			};
			j.imageAreaSelector.onMouseOut = function(k) {
				j.bMouseHovering = false;
				if (j.bSelect || j.containingView.bEditorViewer) {
					return
				}
				j.Show()
			};
			j.imageAreaSelector.onMouseMove = function(r) {
				var p, n, y, x, m, l = r.dragging,
					v;
				m = j.__getOrigImagePos();
				if (g.isNaNOrUndefined(m.x) || g.isNaNOrUndefined(m.y)) {
					return
				}
				v = j.__getRealZoomValue();
				if (v < 0) {
					return
				}
				p = (r.x + m.x) / v;
				n = (r.y + m.y) / v;
				j.__fireEvent("onMouseMove", {
					e: r.e,
					x: p,
					y: n,
					index: j.cIndex
				});
				if ((j.iMouseShape == EnumDWT_MouseShape.Hand) && l) {
					var u, t, s, q, k = j.__isShowScrollV(),
						w = j.__isShowScrollH();
					u = j.mousePreviosPositionWhenMoving.x;
					t = j.mousePreviosPositionWhenMoving.y;
					s = (u - r.x);
					q = (t - r.y);
					j.mousePreviosPositionWhenMoving.x = r.x;
					j.mousePreviosPositionWhenMoving.y = r.y;
					if (w && j.scrollH) {
						j.scrollH.ManualMoving(s)
					}
					if (k && j.scrollV) {
						j.scrollV.ManualMoving(q)
					}
				}
			};
			j.imageAreaSelector.onMouseClick = function(n) {
				var p, m, l, k;
				l = j.__getOrigImagePos();
				if (g.isNaNOrUndefined(l.x) || g.isNaNOrUndefined(l.y)) {
					return
				}
				k = j.__getRealZoomValue();
				if (k < 0) {
					return
				}
				p = (n.x + l.x) / k;
				m = (n.y + l.y) / k;
				j.__fireEvent("onMouseClick", {
					e: n.e,
					x: p,
					y: m,
					index: j.cIndex
				})
			};
			j.imageAreaSelector.onMouseDoubleClick = function(n) {
				var p, m, l, k;
				l = j.__getOrigImagePos();
				if (g.isNaNOrUndefined(l.x) || g.isNaNOrUndefined(l.y)) {
					return
				}
				k = j.__getRealZoomValue();
				if (k < 0) {
					return
				}
				p = (n.x + l.x) / k;
				m = (n.y + l.y) / k;
				j.__fireEvent("onMouseDoubleClick", {
					e: n.e,
					x: p,
					y: m,
					index: j.cIndex
				})
			};
			j.imageAreaSelector.onMouseRightClick = function(n) {
				var p, m, l, k;
				l = j.__getOrigImagePos();
				if (g.isNaNOrUndefined(l.x) || g.isNaNOrUndefined(l.y)) {
					return
				}
				k = j.__getRealZoomValue();
				if (k < 0) {
					return
				}
				p = (n.x + l.x) / k;
				m = (n.y + l.y) / k;
				j.__fireEvent("onMouseRightClick", {
					e: n.e,
					x: p,
					y: m,
					index: j.cIndex
				})
			};
			j.imageAreaSelector.onImageAreaSelected = function(m) {
				var u = m.left,
					t = m.top,
					k = m.right,
					q = m.bottom,
					r = m.fromScroll,
					n = m.areaIndex,
					l, p, s;
				g.output("selected Area in Selector: " + [u, t, k, q].join(","));
				if (j.fZoomValue > 0) {
					l = j.__getOrigImagePos();
					if (g.isNaNOrUndefined(l.x) || g.isNaNOrUndefined(l.y)) {
						return
					}
					u = (u + l.x);
					t = (t + l.y);
					k = (k + l.x);
					q = (q + l.y);
					g.output("selected zoomed Image Area: " + [u, t, k, q].join(","));
					p = j.__getRealZoomValue();
					if (p < 0) {
						return
					}
					if (j.bStretchMode) {
						s = j.__getRealZoomValue(true);
						u = parseInt(u / s.h);
						t = parseInt(t / s.v);
						k = parseInt(k / s.h);
						q = parseInt(q / s.v)
					} else {
						u = parseInt(u / p);
						t = parseInt(t / p);
						k = parseInt(k / p);
						q = parseInt(q / p)
					}
					g.output("selected orig Image Area: " + [u, t, k, q].join(","));
					if (u < 0) {
						u = 0
					}
					if (t < 0) {
						t = 0
					}
					if (k > j.__getOrigImageWidth()) {
						k = j.__getOrigImageWidth()
					}
					if (q > j.__getOrigImageHeight()) {
						q = j.__getOrigImageHeight()
					}
					j.__fireEvent("onImageAreaSelected", {
						index: j.cIndex,
						left: u,
						top: t,
						right: k,
						bottom: q,
						fromScroll: r,
						areaIndex: n
					})
				}
			};
			j.imageAreaSelector.onImageAreaDeSelected = function() {
				j.__fireEvent("onImageAreaDeSelected", j.cIndex)
			};
			if (d.isFunction(h.onMouseDown)) {
				j.onMouseDown = h.onMouseDown
			}
			if (d.isFunction(h.onMouseUp)) {
				j.onMouseUp = h.onMouseUp
			}
			if (d.isFunction(h.onMouseMove)) {
				j.onMouseMove = h.onMouseMove
			}
			if (d.isFunction(h.onMouseClick)) {
				j.onMouseClick = h.onMouseClick
			}
			if (d.isFunction(h.onMouseRightClick)) {
				j.onMouseRightClick = h.onMouseRightClick
			}
			if (d.isFunction(h.onMouseDoubleClick)) {
				j.onMouseDoubleClick = h.onMouseDoubleClick
			}
			if (d.isFunction(h.onImageAreaSelected)) {
				j.onImageAreaSelected = h.onImageAreaSelected
			}
			if (d.isFunction(h.onImageAreaDeSelected)) {
				j.onImageAreaDeSelected = h.onImageAreaDeSelected
			}
			if (d.isFunction(h.onGetImageInfo)) {
				j.onGetImageInfo = h.onGetImageInfo
			}
		}
	};
	a.prototype.__isShowScrollH = function(i) {
		var j = this,
			h = i;
		if (!j.objImage) {
			return false
		}
		if (d.isUndefined(h)) {
			h = j.canvasHeight
		}
		return (h < j._height)
	};
	a.prototype.__isShowScrollV = function(i) {
		var j = this,
			h = i;
		if (!j.objImage) {
			return false
		}
		if (d.isUndefined(h)) {
			h = j.canvasWidth
		}
		return (h < j._width)
	};
	a.prototype.ImageMoveLeft = function() {
		var j = this,
			h = j.__isShowScrollH(),
			i;
		if (h && j.scrollH) {
			i = -0.2 * j.scrollH.GetPagePositionSize();
			j.scrollH.ManualMoving(i)
		}
		return true
	};
	a.prototype.ImageMoveRight = function() {
		var j = this,
			h = j.__isShowScrollH(),
			i;
		if (h && j.scrollH) {
			i = 0.2 * j.scrollH.GetPagePositionSize();
			j.scrollH.ManualMoving(i)
		}
		return true
	};
	a.prototype.ImageMoveUp = function() {
		var j = this,
			h = j.__isShowScrollV(),
			i;
		if (h && j.scrollV) {
			i = -0.2 * j.scrollV.GetPagePositionSize();
			j.scrollV.ManualMoving(i)
		}
		return true
	};
	a.prototype.ImageMoveDown = function() {
		var j = this,
			h = j.__isShowScrollV(),
			i;
		if (h && j.scrollV) {
			i = 0.2 * j.scrollV.GetPagePositionSize();
			j.scrollV.ManualMoving(i)
		}
		return true
	};
	a.prototype.ImageMovePageUp = function() {
		var j = this,
			h = j.__isShowScrollV(),
			i;
		if (h && j.scrollV) {
			i = -1 * j.scrollV.GetPagePositionSize();
			j.scrollV.ManualMoving(i)
		}
		return true
	};
	a.prototype.ImageMovePageDown = function() {
		var j = this,
			h = j.__isShowScrollV(),
			i;
		if (h && j.scrollV) {
			i = j.scrollV.GetPagePositionSize();
			j.scrollV.ManualMoving(i)
		}
		return true
	};
	a.prototype.ImageMoveHome = function() {
		var l = this,
			i = l.__isShowScrollV(),
			j = l.__isShowScrollH(),
			k, h;
		if (i && l.scrollV) {
			h = l.scrollV.GetMaxPosition();
			l.scrollV.ManualMoving(-h)
		}
		if (j && l.scrollH) {
			h = l.scrollH.GetMaxPosition();
			l.scrollH.ManualMoving(-h)
		}
		return true
	};
	a.prototype.ImageMoveEnd = function() {
		var l = this,
			i = l.__isShowScrollV(),
			j = l.__isShowScrollH(),
			k, h;
		if (i && l.scrollV) {
			h = l.scrollV.GetMaxPosition();
			l.scrollV.ManualMoving(h)
		}
		if (j && l.scrollH) {
			h = l.scrollH.GetMaxPosition();
			l.scrollH.ManualMoving(h)
		}
		return true
	};
	a.prototype.SetLocation = function(h, k, i) {
		var j = this;
		j.Left = h;
		j.Top = k;
		j.Right = h + j.canvasWidth;
		j.Bottom = k + j.canvasHeight;
		j.CenterH = (j.Left + j.Right) / 2;
		j.CenterV = (j.Top + j.Bottom) / 2;
		g.output("SetLocation:" + h + ", " + k);
		if (j.divOut) {
			if (j.divOut.parentNode) {
				j.divOut.parentNode.style.position = "relative"
			}
			j.divOut.style.left = h + "px";
			j.divOut.style.top = k + "px";
			if (!i) {
				j.__refreshImageAreaSelectorLocationAndSize()
			}
			j.__refreshImageOverlayInfo()
		}
		return true
	};
	a.prototype.SetMouseShape = function(i) {
		var j = this,
			h = j.iMouseShape;
		j.iMouseShape = i;
		g.output("SetMouseShape: " + [h, j.iMouseShape].join("->"));
		if (j.imageAreaSelector) {
			j.imageAreaSelector.SetMouseShape(j.iMouseShape)
		}
		return true
	};
	a.prototype.SetBackgroundColor = function(i, h) {
		var j = this;
		g.output("SetBackgroundColor:" + i);
		j.backgroundColor = i;
		if (j.containingView.bEditorViewer) {
			j.backgroundColorInEditor = i
		}
		if (h) {
			return true
		}
		if (j.drawArea.width < j.canvasWidth || j.drawArea.height < j.canvasHeight) {
			j.Show()
		}
		return true
	};
	a.prototype.SetSelectionImageBorderColor = function(h) {
		var i = this;
		g.output("SetSelectionImageBorderColor:" + h);
		i.selectionBorderColor = h;
		i.__refreshBorder();
		return true
	};
	a.prototype.GetEL = function() {
		g.output("GetEL:");
		return this.divOut
	};
	a.prototype.__getOrigImagePos = function() {
		var l = this,
			j = l.drawArea.x,
			k = l.drawArea.y,
			h = l.drawArea.width,
			i = l.drawArea.height;
		if (h <= l.canvasWidth) {
			j = j + (l.canvasWidth - h) * 0.5
		}
		if (i <= l.canvasHeight) {
			k = k + (l.canvasHeight - i) * 0.5
		}
		return {
			x: j,
			y: k
		}
	};
	a.prototype.__getImageDrawLocationAndSize = function(l, k) {
		var n = this,
			j = l,
			m = k,
			h, i;
		if (g.isNaNOrUndefined(j)) {
			j = 0
		}
		if (g.isNaNOrUndefined(m)) {
			m = 0
		}
		h = n.drawArea.width;
		i = n.drawArea.height;
		if (h <= n.canvasWidth) {
			j = (n.canvasWidth - h) * 0.5;
			h = n.drawArea.width
		} else {
			j = j - n.drawArea.x;
			j = j < 0 ? 0 : j;
			h = n.canvasWidth
		}
		if (i <= n.canvasHeight) {
			m = (n.canvasHeight - i) * 0.5;
			i = n.drawArea.height
		} else {
			m = m - n.drawArea.y;
			m = m < 0 ? 0 : m;
			i = n.canvasHeight
		}
		j += n.borderWidth;
		m += n.borderWidth;
		return {
			left: j,
			top: m,
			width: h,
			height: i
		}
	};
	a.prototype.__refreshImageOverlayInfo = function() {
		var j = this,
			h, i = 1;
		h = j.__getImageDrawLocationAndSize();
		i = j.__getRealZoomValue();
		if (i < 0) {
			return
		}
		j.__overlay.SetLocation(h.left, h.top);
		j.__overlay.SetImageSize(j._origImageWidth, j._origImageHeight);
		j.__overlay.SetZoom(i);
		if (j.canvas) {
			j.__overlay.SetContext(j.canvas.getContext("2d"))
		} else {
			j.__overlay.SetContext(false)
		}
	};
	a.prototype.__refreshImageAreaSelectorLocationAndSize = function() {
		var i = this,
			h;
		if (i.imageAreaSelector) {
			h = i.__getImageDrawLocationAndSize();
			i.imageAreaSelector.SetDrawImageLocationAndSize(h.left, h.top, h.width, h.height);
			i.imageAreaSelector.ChangeControlSize(i.canvasWidth, i.canvasHeight)
		}
		return true
	};
	a.prototype.SetBindIndex = function(h) {
		this._bindIndex = h;
		return true
	};
	a.prototype.GetBindIndex = function() {
		return this._bindIndex
	};
	a.prototype.SetCurrentIndex = function(h) {
		var i = this;
		i.cIndex = h;
		return true
	};
	a.prototype.GetCurrentIndex = function() {
		var h = this;
		return h.cIndex
	};
	a.prototype.ClearImage = function() {
		var i = this,
			h;
		if (i.bOrigMode && i.objImage) {
			i.objImage.onload = undefined;
			i.objImage.src = "data:,"
		}
		i.objImage = f;
		i.bHasOverlay = f;
		i.__overlay.Clear();
		if (i.imageAreaSelector) {
			i.imageAreaSelector.SetSelectedArea(0, 0, 0, 0)
		}
		i._origImageWidth = -1;
		i._origImageHeight = -1;
		return true
	};
	a.prototype.__getImageOrignalSize = function() {
		var i = this;
		if (i.bOrigMode) {
			i._origImageWidth = i.objImage.width;
			i._origImageHeight = i.objImage.height
		} else {
			if (i.cIndex >= 0) {
				var h = i.__fireEvent("onGetImageInfo", i.cIndex);
				i._origImageWidth = h.width;
				if (i.objImage != null && i.objImage.height != null && i.objImage.width != null) {
					i._origImageHeight = i._origImageWidth * i.objImage.height / i.objImage.width
				}
			} else {
				i._origImageWidth = -1;
				i._origImageHeight = -1
			}
		}
	};
	a.prototype.AttachImage = function(u, v, s, j, h, l) {
		var q = this;
		g.output("AttachImage: objImage," + [v, s, j, l].join(","));
		if (q.bOrigMode && q.objImage) {
			q.objImage.onload = undefined;
			q.objImage.src = "data:,"
		}
		q.objImage = u;
		q.bOrigMode = l;
		q.__resetTag();
		if (h) {
			var n, k, p = h.length;
			q.__overlay.Clear();
			if (p) {
				q.bHasOverlay = c
			}
			for (n = 0; n < p; n++) {
				k = h[n];
				q.__overlay.Add(k.Left, k.Top, k.Right, k.Bottom, k.ColorRGB, k.Opacity)
			}
		}
		q.__getImageOrignalSize();
		var r = false;
		if (q.bIfFitWindow && (q.fitWindowType == 0 || q.fitWindowType == 1 || q.fitWindowType == 2 || q.fitWindowType == 4)) {
			r = false
		} else {
			r = l && (q.fUserSetZoom != 1)
		}
		if (r) {
			q.SetZoom(q.fUserSetZoom)
		} else {
			if (l && !q.bIfFitWindow) {
				var m = {},
					t;
				m.x = q.drawArea.x;
				m.y = q.drawArea.y;
				m.fOldZoom = 1;
				m.fNewZoom = 1;
				m.oldIfFitWindow = true;
				m.oldFitWindowType = 0;
				m.oldCanvasWidth = q.canvasWidth;
				m.oldCanvasHeight = q.canvasHeight;
				q.fitWindowType = 3;
				q.__recaculateDrawArea();
				t = q.__getScrollInfoWithNewZoom(m);
				q.__setDrawArea(t.x, t.y, q.drawArea.width, q.drawArea.height);
				q.__resetScroll()
			} else {
				q.__recaculateDrawArea()
			}
		}
		return true
	};
	a.prototype.Show = function(m) {
		var l = this,
			h, k;
		if (l.bVisible) {
			l.divOut.style.display = ""
		} else {
			l.divOut.style.display = "none";
			return
		}
		g.output("Show:" + [l.canvasWidth, l.canvasHeight].join(","));
		h = l.canvas.getContext("2d");
		l.__restoreCanvas(h, l.canvasWidth, l.canvasHeight);
		if (l.drawArea.width <= 0 || l.drawArea.height <= 0 || l.canvasWidth <= 0 || l.canvasHeight <= 0) {
			return false
		}
		if (!m) {
			l.__resetScroll()
		}
		l.__resetTag();
		h.clearRect(0, 0, l.canvasWidth, l.canvasHeight);
		if (!l.objImage || l.objImage.src == "data:," || l.objImage.width == 0 || l.objImage.height == 0 || l.objImage.src == "") {
			if (l.containingView.bEditorViewer) {
				h.fillStyle = l.backgroundColorInEditor
			} else {
				h.fillStyle = l.backgroundColor
			}
			h.fillRect(0, 0, h.canvas.width, h.canvas.height);
			if (l._width > 53) {
				h.font = "12px Times New Roman";
				h.textAlign = "center";
				h.strokeText(e.CustomizableDisplayInfo.customProgressText.canvasLoading, h.canvas.width * 0.5, h.canvas.height * 0.5)
			}
			return false
		}
		if (l.cIndex == -1) {
			return
		}
		g.output("draw info: " + [l.objImage.width, l.objImage.height, l.drawArea.x, l.drawArea.y, l.drawArea.width, l.drawArea.height].join(","));
		if (l.drawArea.width < l.canvasWidth || l.drawArea.height < l.canvasHeight) {
			var j = h.createLinearGradient(l.CenterH, 0, l.CenterH, l.canvasHeight);
			if (l.containingView.bEditorViewer) {
				h.fillStyle = l.backgroundColorInEditor
			} else {
				if (l.containingView.bSingleImagePerView) {
					h.fillStyle = l.backgroundColor
				} else {
					if (l.bSelect) {
						j.addColorStop(0, l.canvasBackgroundGradientColorPairs.Selected[0]);
						j.addColorStop(1, l.canvasBackgroundGradientColorPairs.Selected[1]);
						h.fillStyle = j
					} else {
						if (l.bMouseHovering) {
							j.addColorStop(0, l.canvasBackgroundGradientColorPairs.NotSelectedHovering[0]);
							j.addColorStop(1, l.canvasBackgroundGradientColorPairs.NotSelectedHovering[1]);
							h.fillStyle = j
						} else {
							h.fillStyle = l.backgroundColor
						}
					}
				}
			}
			h.fillRect(0, 0, l.canvasWidth, l.canvasHeight)
		}
		var i = function() {
			try {
				if (l.objImage) {
					h.drawImage(l.objImage, Math.floor(-l.drawArea.x), Math.floor(-l.drawArea.y), Math.floor(l.drawArea.width), Math.floor(l.drawArea.height))
				}
				l.__overlay.Draw()
			} catch (n) {}
		};
		if (d.env.bIE) {
			setTimeout(i, 10)
		} else {
			i()
		}
		return true
	};
	a.prototype.SetSelect = function(h) {
		var i = this;
		g.output("SetSelect:" + h);
		i.bSelect = h;
		i.__resetTag();
		i.__refreshBorder();
		i.Show();
		return true
	};
	a.prototype.GetIndex = function() {
		return this.cIndex
	};
	a.prototype.SetSelectedImageArea = function(n, k, s, i, j) {
		var p = this,
			v = n,
			u = k,
			h = 0,
			o = 0,
			l = 1;
		g.output("SetSelectedImageArea:" + [n, k, s, i].join(", "));
		if (s < n && i < k) {
			v = parseInt(s);
			u = parseInt(i);
			h = parseInt(n);
			o = parseInt(k)
		} else {
			h = parseInt(s);
			o = parseInt(i);
			v = parseInt(n);
			u = parseInt(k)
		}
		p.selectedImageArea.left = v;
		p.selectedImageArea.top = u;
		p.selectedImageArea.right = h;
		p.selectedImageArea.bottom = o;
		if (p.imageAreaSelector) {
			if (p._origImageWidth <= 0) {
				p.__getImageOrignalSize()
			}
			if (p._origImageWidth > 0) {
				l = p.__getRealZoomValue();
				if (l < 0) {
					return false
				}
			} else {
				return false
			}
			var m = v * l,
				q = u * l,
				t = h * l,
				r = o * l;
			p.imageAreaSelector.SetSelectedArea(m, q, t, r, j);
			return true
		}
		return false
	};
	a.prototype.OverlayRectangle = function(n, m, p, j, h, l) {
		var o = this;
		g.output("OverlayRectangle:" + [n, m, p, j, h, l].join(", "));
		o.bHasOverlay = c;
		if (o._origImageWidth <= 0) {
			o.__getImageOrignalSize()
		}
		o.__refreshImageOverlayInfo();
		o.__overlay.Add(n, m, p, j, h, l, true);
		o.drawArea.x = 0;
		o.drawArea.y = 0;
		if (o.drawArea.width <= o.canvasWidth) {
			o.drawArea.x = (o.drawArea.width - o.canvasWidth) * 0.5
		} else {
			var k = Math.floor((n * o.fZoomValue + p * o.fZoomValue - o.canvasWidth) / 2 - o.drawArea.x);
			o.drawArea.x = k > 0 ? k : 0
		}
		if (o.drawArea.height <= o.canvasHeight) {
			o.drawArea.y = (o.drawArea.height - o.canvasHeight) * 0.5
		} else {
			var i = Math.floor((m * o.fZoomValue + j * o.fZoomValue - o.canvasHeight) / 2 - o.drawArea.y);
			o.drawArea.y = i > 0 ? i : 0
		}
		o.__setDrawArea(o.drawArea.x, o.drawArea.y, o.drawArea.width, o.drawArea.height);
		o.__resetScroll();
		o.Show();
		return true
	};
	a.prototype.GetMousePosition = function() {
		g.output("GetMousePosition:");
		return this.mousePosition
	};
	a.prototype.__setDrawArea = function(i, l, j, h) {
		var k = this;
		k.drawArea.x = i;
		k.drawArea.y = l;
		k.drawArea.width = j;
		k.drawArea.height = h;
		if (k.drawArea.width > k.canvasWidth && k.drawArea.x > k.drawArea.width - k.canvasWidth) {
			k.drawArea.x = k.drawArea.width - k.canvasWidth
		}
		if (k.drawArea.height > k.canvasHeight && k.drawArea.y > k.drawArea.height - k.canvasHeight) {
			k.drawArea.y = k.drawArea.height - k.canvasHeight
		}
		k.__refreshImageAreaSelectorLocationAndSize();
		k.__refreshImageOverlayInfo()
	};
	a.prototype.GetZoom = function() {
		var h = this;
		return h.fZoomValue
	};
	a.prototype.SetZoom = function(t, n, m, j, i) {
		var o = this,
			k, l = {},
			r, h, s;
		g.output("SetZoom:" + [k, t].join("->"));
		o.fUserSetZoom = t;
		l.x = o.drawArea.x;
		l.y = o.drawArea.y;
		l.fOldZoom = o.fZoomValue;
		l.fNewZoom = t;
		l.oldIfFitWindow = o.bIfFitWindow;
		l.oldFitWindowType = o.fitWindowType;
		l.oldCanvasWidth = o.canvasWidth;
		l.oldCanvasHeight = o.canvasHeight;
		l.bMoveCenter = false;
		if (!d.isUndefined(n) && !d.isUndefined(m)) {
			l.bMoveCenter = true;
			var q = (n / o.fZoomValue);
			var p = (m / o.fZoomValue);
			l.newRealCenterX = n;
			l.newRealCenterY = m;
			l.newClickX = j;
			l.newClickY = i
		}
		o.bIfFitWindow = false;
		o.fitWindowType = 3;
		o.fZoomValue = t;
		if (!o.objImage) {
			return
		}
		o.__recaculateDrawArea();
		r = o.__getScrollInfoWithNewZoom(l);
		o.__setDrawArea(r.x, r.y, o.drawArea.width, o.drawArea.height);
		o.__resetScroll();
		if (o.imageAreaSelector) {
			o.imageAreaSelector.SetSelectedArea(0, 0, 0, 0)
		}
		o.Show();
		return true
	};
	a.prototype.SetSelectionRectAspectRatio = function(h) {
		var i = this;
		g.output("SetSelectionRectAspectRatio:" + h);
		if (h < 0) {
			h = 0
		}
		i.__fSelectionRectAspectRatio = h;
		return true
	};
	a.prototype.SetIfFitWindow = function(i, h) {
		var j = this;
		g.output("SetIfFitWindow:" + [i, h].join(","));
		j.bIfFitWindow = i;
		if (i) {
			j.fitWindowType = h
		} else {
			j.fitWindowType = 3
		}
		j.__recaculateDrawArea();
		j.Show();
		return true
	};
	a.prototype.Stretch = function() {
		var h = this;
		g.output("Stretch");
		h.bStretchMode = true;
		h.canvasWidth = h._width;
		h.canvasHeight = h._height;
		h.__setDrawArea(0, 0, h.canvasWidth, h.canvasHeight);
		h.__refreshImageAreaSelectorLocationAndSize();
		h.__refreshImageOverlayInfo();
		return true
	};
	a.prototype.Destroy = function() {
		var i = this;
		g.output("Destroy:");
		i.SetBindIndex(-1);
		if (i.canvas) {
			var h = i.canvas.getContext("2d");
			if (i.canvasWidth > 0 && i.canvasHeight > 0) {
				h.clearRect(0, 0, i.canvasWidth, i.canvasHeight)
			}
		}
		i.ClearImage();
		if (i.imageAreaSelector) {
			i.imageAreaSelector.Destroy();
			i.imageAreaSelector = false
		}
		if (i.__overlay) {
			i.__overlay.Destroy()
		}
		return true
	};
	a.prototype.SetShowPageNumber = function(h) {
		var i = this;
		i.bShowPageNumber = h;
		i.__resetTag();
		return true
	};
	a.prototype.__getScrollInfoWithNewZoom = function(I) {
		var D = this,
			L = {
				x: 0,
				y: 0
			},
			k, i, w, v, p, n, q = false,
			s, H, r, y, A, m, h, t, C, M;
		s = D.fZoomValue;
		if (s <= 0 || !D.objImage) {
			return L
		}
		k = I.x;
		i = I.y;
		H = I.oldIfFitWindow;
		r = I.oldFitWindowType;
		if (H) {
			if (r == 0) {
				q = true
			} else {
				if (r == 1) {
					q = true
				} else {
					if (r == 2) {
						q = true
					} else {
						if (r == 4) {
							q = true
						}
					}
				}
			}
		}
		A = I.oldCanvasWidth;
		m = I.oldCanvasHeight;
		y = I.fOldZoom;
		if (!I.bMoveCenter) {
			if (q) {
				k = w = D.objImage.width * 0.5;
				i = v = D.objImage.height * 0.5;
				p = w * s;
				n = v * s
			} else {
				k = k + A * 0.5;
				i = i + m * 0.5;
				w = k / y;
				v = i / y;
				p = w * s;
				n = v * s
			}
		} else {
			p = I.newRealCenterX * s;
			n = I.newRealCenterY * s
		}
		var x = D.__isShowScrollV(A),
			F = D.__isShowScrollH(m);
		C = D.__isShowScrollV();
		M = D.__isShowScrollH();
		h = D.canvasWidth;
		t = D.canvasHeight;
		if (I.bMoveCenter) {
			var G = (D.drawArea.width - h) * 0.5,
				o = I.x,
				B = I.newRealCenterX * s,
				l = I.newRealCenterX * y,
				K = G - B - o + l;
			L.x = G - K;
			var u = (D.drawArea.height - t) * 0.5,
				E = I.y,
				z = I.newRealCenterY * s,
				j = I.newRealCenterY * y,
				J = u - z - E + j;
			L.y = u - J;
			return L
		}
		if (M) {
			L.x = p - h * 0.5;
			if (L.x < 0) {
				L.x = 0
			}
		} else {
			L.x = (D.drawArea.width - h) * 0.5
		}
		if (C) {
			L.y = n - t * 0.5;
			if (L.y < 0) {
				L.y = 0
			}
		} else {
			L.y = (D.drawArea.height - t) * 0.5
		}
		return L
	};
	a.prototype.__recaculateDrawArea = function() {
		var o = this,
			j = false,
			m = false,
			i, k = false,
			l = false;
		o.canvasWidth = o._width;
		o.canvasHeight = o._height;
		o.bStretchMode = false;
		if (o.objImage) {
			if (o.bIfFitWindow) {
				if (o.fitWindowType == 0) {
					i = g.getAdjustedImageSize(o.objImage.width, o.objImage.height, o.canvasWidth, o.canvasHeight);
					o.fZoomValue = i.zoom
				} else {
					if (o.fitWindowType == 1) {
						i = g.getAdjustedImageSize(o.objImage.width, o.objImage.height, o.objImage.width, o.canvasHeight);
						if (i.w > o._width) {
							k = true;
							o.canvasHeight = o._height - o.scrollArrowSize;
							i = g.getAdjustedImageSize(o.objImage.width, o.objImage.height, o.objImage.width, o.canvasHeight)
						}
						o.fZoomValue = i.zoom
					} else {
						if (o.fitWindowType == 2) {
							i = g.getAdjustedImageSize(o.objImage.width, o.objImage.height, o.canvasWidth, o.objImage.height);
							if (i.h > o._height) {
								k = true;
								o.canvasWidth = o._width - o.scrollArrowSize;
								i = g.getAdjustedImageSize(o.objImage.width, o.objImage.height, o.canvasWidth, o.objImage.height)
							}
							o.fZoomValue = i.zoom
						} else {
							if (o.fitWindowType == 4) {
								j = true;
								var n = Math.floor(o._width + 0.5),
									h = Math.floor(o._height + 0.5);
								o.fZoomValuesWhenStretch = {
									v: h / o.objImage.height,
									h: n / o.objImage.width
								}
							} else {
								i = {
									w: o.objImage.width,
									h: o.objImage.height
								};
								m = true;
								o.fZoomValue = o.fUserSetZoom
							}
						}
					}
				}
			} else {
				i = {
					w: o.objImage.width * o.fZoomValue,
					h: o.objImage.height * o.fZoomValue
				};
				m = true
			}
		} else {
			j = true;
			o.fZoomValuesWhenStretch = {
				v: 1,
				h: 1
			}
		}
		if (j) {
			o.Stretch()
		} else {
			if (m) {
				if (i.h > o._height) {
					k = true;
					o.canvasWidth = o._width - o.scrollArrowSize
				}
				if (i.w > o._width) {
					k = true;
					o.canvasHeight = o._height - o.scrollArrowSize
				}
			}
			o.drawArea.width = i.w;
			o.drawArea.height = i.h;
			if (o.drawArea.width < o.canvasWidth) {
				o.drawArea.x = (o.drawArea.width - o.canvasWidth) * 0.5
			} else {
				o.drawArea.x = 0
			}
			if (o.drawArea.height < o.canvasHeight) {
				o.drawArea.y = (o.drawArea.height - o.canvasHeight) * 0.5
			} else {
				o.drawArea.y = 0
			}
			g.output("draw Area: " + [o.drawArea.x, o.drawArea.y, o.drawArea.width, o.drawArea.height].join(","));
			o.__refreshImageAreaSelectorLocationAndSize();
			o.__refreshImageOverlayInfo()
		}
	};
	a.prototype.__resetScroll = function() {
		var k = this,
			m, j, h = k.__isShowScrollV(),
			n = k.__isShowScrollH(),
			r, l, q, o, p, i;
		if (k.canvas) {
			q = k.canvas.parentNode
		}
		if (!q) {
			return
		}
		k.__overlay.left = -k.drawArea.x;
		k.__overlay.top = -k.drawArea.y;
		if (h) {
			i = k.drawArea.y;
			if (!k.scrollV) {
				m = {
					Width: k.scrollArrowSize,
					Height: k.canvasHeight,
					Horizontal: false
				};
				m.onValueChanged = function(s) {
					k.drawArea.y = s.Value;
					if (k.drawArea.height > k.canvasHeight && k.drawArea.y > k.drawArea.height - k.canvasHeight) {
						k.drawArea.y = k.drawArea.height - k.canvasHeight
					}
					k.__overlay.top = -k.drawArea.y;
					k.__reselectArea();
					k.Show(true)
				};
				k.scrollV = new Dynamsoft.Lib.UI.ScrollBar(m);
				k.scrollV.InitScroll(k.drawArea.height, k.canvasHeight);
				k.scrollV.SetLocation(1, 1);
				j = k.scrollV.GetEL();
				j.style.position = "absolute";
				q.appendChild(j)
			} else {
				j = k.scrollV.GetEL();
				if (k.scrollV.GetControlHeight() != k.canvasHeight) {
					k.scrollV.ChangeControlSize(k.scrollArrowSize, k.canvasHeight)
				}
				j.style.display = "";
				k.scrollV.InitScroll(k.drawArea.height, k.canvasHeight);
				k.scrollV.SetPosition(i)
			}
			j.style.top = k.borderWidth + "px";
			j.style.left = k.borderWidth + k._width - k.scrollArrowSize + "px";
			k.scrollV.Refresh()
		} else {
			if (k.scrollV) {
				j = k.scrollV.GetEL();
				j.style.display = "none"
			}
		}
		if (n) {
			i = k.drawArea.x;
			if (!k.scrollH) {
				m = {
					Width: k.canvasWidth,
					Height: k.scrollArrowSize,
					Horizontal: true
				};
				m.onValueChanged = function(s) {
					k.drawArea.x = s.Value;
					if (k.drawArea.width > k.canvasWidth && k.drawArea.x > k.drawArea.width - k.canvasWidth) {
						k.drawArea.x = k.drawArea.width - k.canvasWidth
					}
					k.__overlay.left = -k.drawArea.x;
					k.__reselectArea();
					k.Show(true)
				};
				k.scrollH = new Dynamsoft.Lib.UI.ScrollBar(m);
				k.scrollH.InitScroll(k.drawArea.width, k.canvasWidth);
				k.scrollH.SetLocation(1, 1);
				j = k.scrollH.GetEL();
				j.style.position = "absolute";
				q.appendChild(j)
			} else {
				j = k.scrollH.GetEL();
				if (k.scrollH.GetControlWidth() != k.canvasWidth) {
					k.scrollH.ChangeControlSize(k.canvasWidth, k.scrollArrowSize)
				}
				j.style.display = "";
				k.scrollH.InitScroll(k.drawArea.width, k.canvasWidth);
				k.scrollH.SetPosition(i)
			}
			j.style.top = k.borderWidth + k._height - k.scrollArrowSize + "px";
			j.style.left = k.borderWidth + "px";
			k.scrollH.Refresh()
		} else {
			if (k.scrollH) {
				j = k.scrollH.GetEL();
				j.style.display = "none"
			}
		}
	};
	a.prototype.__restoreCanvas = function(j, i, k) {
		var l = this;
		j.canvas.width = i;
		j.canvas.height = k
	};
	a.prototype.__reselectArea = function() {
		var h = this;
		if (h.imageAreaSelector) {
			h.imageAreaSelector.ReFireSelectedEventWhenImageMoved()
		}
	};
	a.prototype.__zoomIn = function() {
		var h = this;
		h.SetZoom(1.1 * h.fZoomValue)
	};
	a.prototype.__zoomInAt = function(i, h, m, k, j) {
		var l = this;
		if (l.fitWindowType == 4) {
			l.SetIfFitWindow(true, 0);
			l.__zoomIn()
		} else {
			l.SetZoom(i, h, m, k, j)
		}
	};
	a.prototype.__zoomOut = function() {
		var h = this;
		h.SetZoom(0.9 * h.fZoomValue)
	};
	a.prototype.__refreshBorder = function() {
		var h = this;
		if (h.bSelect) {
			h.divOut.style.border = h.borderWidth + "px solid " + h.selectionBorderColor
		} else {
			h.divOut.style.border = h.borderWidth + "px solid " + h.borderColor
		}
	};
	a.prototype.__resetTag = function() {
		var h = this;
		if (h.bShowPageNumber) {
			g.SetPageNumber(h.divTag, h.cIndex);
			if (h.bSelect) {
				h.divTag.className = "dynamsoft-dwt-imgTag dynamsoft-dwt-imgTag_Selected"
			} else {
				h.divTag.className = "dynamsoft-dwt-imgTag dynamsoft-dwt-imgTag_Normal"
			}
			h.divTag.style.display = "block"
		} else {
			h.divTag.innerHTML = "";
			h.divTag.style.display = "none"
		}
	};
	a.prototype.ClearControl = function() {
		var h = this;
		h.ClearImage();
		h.bShowPageNumber = f;
		h.Show();
		return true
	};
	a.prototype.__fireEvent = function(h, i) {
		var j = this;
		if (d.isFunction(j[h])) {
			return j[h](i)
		}
		return true
	};
	d.UI = d.UI || {};
	d.UI.ImageControl = a
})(Dynamsoft.Lib);
(function(a) {
	if (!a.product.bChromeEdition) {
		return
	}
	var i = document,
		f = [],
		b = a.html5.Funs2,
		g = {
			idle: -1,
			start: 0,
			inprocess: 1
		},
		j = Dynamsoft.WebTwainEnv;

	function e(m, l, s, t, o, k, u, r, n, q) {
		var p = this;
		p.iControlIndex = m;
		p.iImageIndex = l;
		p.View = s;
		p.imgControl = t;
		p.modelImageControl = o;
		p.iWidth = k;
		p.iHeight = u;
		p.AttachImagesForControl = r;
		p.bOnlyFromServer = n;
		p.BaseUrl = q
	}

	function d(p, o, n, l, k, m) {
		var q = this;
		q.Left = p;
		q.Top = o;
		q.Right = n;
		q.Bottom = l;
		q.ColorRGB = k;
		q.Opacity = m
	}

	function h(k) {
		var l = this;
		if (!Dynamsoft.WebTwainEnv.ScanDirectly) {
			l.bFocus = false;
			l.borderWidth = a.isUndefined(k.borderWidth) ? 1 : k.borderWidth;
			l.canvas = document.createElement("div");
			if (l.canvas) {
				l.canvas.style.width = k.Width + "px";
				l.canvas.style.height = k.Height + "px";
				l.canvas.style.overflow = "hidden";
				if (l.borderWidth > 0) {
					l.canvas.style.border = l.borderWidth + "px solid #CCCCCC"
				}
				l.canvas.style.display = "block"
			}
			l.BaseUrl = false;
			k.Container.append(l.canvas);
			a.addEventListener(l.canvas, "mouseenter", function(m) {
				l.bFocus = true
			});
			a.addEventListener(l.canvas, "mouseleave", function(m) {
				l.bFocus = false
			});
			a.addEventListener(l.canvas, "mousemove", function(m) {
				if (l.bDraggingDropping && l.sDraggingStartImageIndex != -1) {
					l.__draggingDropping(m)
				}
				a.stopPropagation(m)
			});
			a.addEventListener(l.canvas, "mousewheel", function(m) {
				if (!l.bFocus) {
					return true
				}
				var n = a.getWheelDelta(m);
				if (n < 0) {
					l.__MousewheelValue--
				} else {
					if (n > 0) {
						l.__MousewheelValue++
					}
				}
				a.stopPropagation(m);
				setTimeout(function() {
					l.__MousewheelChanged(l)
				}, 200);
				return false
			});
			if (a.env.bFirefox) {
				a.addEventListener(l.canvas, "wheel", function(m) {
					if (!l.bFocus) {
						return true
					}
					var n = m.deltaY > 0 ? -1 : 1;
					if (n < 0) {
						l.__MousewheelValue--
					} else {
						if (n > 0) {
							l.__MousewheelValue++
						}
					}
					a.stopPropagation(m);
					setTimeout(function() {
						l.__MousewheelChanged(l)
					}, 200);
					return false
				})
			}
			l._stwain = k.Stwain;
			l.bEditorViewer = k.bEditorViewer;
			l._UIEditor = k._UIEditor;
			l.imageViewWidth = k.Width;
			l.imageViewHeight = k.Height;
			l.imagesPerRow = 1;
			l.imagesPerColumn = 1;
			l.MAX_ROWS = 128;
			l.MAX_COLUMNS = 128;
			l.bSingleMode = false;
			l.bSingleImagePerView = true;
			l.bVerticalMode = true;
			l.iMouseShape = EnumDWT_MouseShape.Default;
			l.bIfFitWindow = true;
			l.enumDWTFitWindowType = 0;
			l.fZoom = 1;
			l.zoomInStep = 1.2;
			l.zoomOutStep = 0.8;
			l.MIN_ZOOM = 0.02;
			l.MAX_ZOOM = 65;
			l.ImageMargin = 0;
			l.iControlWidth = 0;
			l.iControlHeight = 0;
			l.iCurrentRow = -1;
			l.iOldFirstVisibleRow = 0;
			l.iCurrentColumn = -1;
			l.iOldFirstVisibleColum = 0;
			l.AllowMultiSelect = true;
			l.SelectionImageBorderColor = "#7DA2CE";
			if (k.BackgroundColor) {
				l.BackgroundColorByDefault = k.BackgroundColor
			} else {
				l.BackgroundColorByDefault = "#FFFFFF"
			}
			l.BackgroundColor = l.BackgroundColorByDefault;
			l.BackgroundColorWhenDraggingOver = "rgb(245,245,245)";
			l.cCurrentIndex = -1;
			l.sHowManyImages = 0;
			l.bScrollBar = true;
			l.__InitiHorizontalScrollBar(k);
			l.__InitiVerticalScrollBar(k);
			l.bMouseClickEventFiredInMouseDown = false;
			l.dragDropStatus = g.idle;
			l.aryDivOutCoordinates = [];
			l.bDraggingDropping = false;
			l.sDraggingStartImageIndex = -1;
			l.aryDragDropPairs = [];
			l.elHelperDIV = null;
			l.bDraggedBeforeMouseUp = false;
			l.aryallImageControlIndicesWhenDragDrop = [];
			l.droppingRects = [];
			l.movingIndicesCausedbyInsert = [];
			l.dropAndInsertIndex = -1;
			l.droppedInsertFilesCount = 0;
			l.bShowInsertIndicator = false
		}
		l.aryCurrentSelectedImageIndicesInBuffer = k.aryCurrentSelectedImageIndicesInBuffer;
		l.aryModelImageControl = k.aryModelImageControl;
		l.aryImageControls = [];
		l.bShowPageNumber = false;
		l.ratio = 0;
		l.__IfAutoScroll = true;
		l.__bAddingImage = false;
		l.__InitEvents(k);
		l.__addDropToLoad(k);
		f.push(l);
		if (!Dynamsoft.WebTwainEnv.ScanDirectly) {
			if (l.canvas) {
				l.canvas.style.backgroundColor = l.BackgroundColorByDefault
			}
			l.__MousewheelValue = 0
		}
	}
	h.prototype.__addDropToLoad = function(r) {
		var p = this,
			v, l, o = null,
			s = "drag dragstart dragend dragover dragenter dragleave drop".split(" ");
		var q = function(x) {
			if (x) {
				a.html5.Funs2.output(null, x + " was loaded successfully!")
			}
			if (p.movingIndicesCausedbyInsert.length > 0) {
				var w = p.sHowManyImages - p.movingIndicesCausedbyInsert[p.movingIndicesCausedbyInsert.length - 1] - 1;
				p.MoveMultipleImages(p.movingIndicesCausedbyInsert, p.sHowManyImages - 1);
				for (var y = 0; y < p.movingIndicesCausedbyInsert.length; y++) {
					p.movingIndicesCausedbyInsert[y] += w
				}
				p.droppedInsertFilesCount--;
				if (p.droppedInsertFilesCount == 0) {
					p.movingIndicesCausedbyInsert = []
				}
			}
			if (o != null) {
				p._stwain.Addon.PDF.SetConvertMode(o)
			}
		};
		var u = function(x, y, w) {
			if (w) {
				a.html5.Funs2.output(null, w + " failed to load. Error code: " + x + "Error String: " + y)
			}
			if (o != null) {
				p._stwain.Addon.PDF.SetConvertMode(o)
			}
		};
		var m = function(G) {
			a.stopPropagation(G);
			var A = a.DOM.getOffset(G, null, G.currentTarget),
				K, B;
			switch (G.type) {
				case "drag":
					break;
				case "dragstart":
					break;
				case "dragenter":
					p.droppingRects = [];
					p.movingIndicesCausedbyInsert = [];
					p.SetBackgroundColor(p.BackgroundColorWhenDraggingOver, true);
					if (!p.bSingleImagePerView) {
						for (K = 0; K < p.aryImageControls.length; K++) {
							var x, N, P, z, O, Q = 0,
								J = p.aryImageControls[K],
								H = p.aryImageControls[K + 1],
								M = J.borderWidth * 2;
							if (p.verticalScrollBar.GetVisible()) {
								Q = p.verticalScrollBar.Width
							}
							if (K == 0 && (null != J && J.bVisible) && (null == H || !H.bVisible)) {
								p.droppingRects.push({
									_l: p.borderWidth * 2,
									_t: J.Top + M,
									_r: J.Left - M,
									_b: J.Bottom - M,
									_index: 0
								})
							}
							if (!(null == J || null == H || !J.bVisible || !H.bVisible)) {
								if (p.imagesPerColumn == 1) {
									x = J.Left + M;
									P = J.Right - M - Q;
									if (K == 0) {
										N = p.borderWidth * 2;
										z = J.Top - M;
										O = J.GetCurrentIndex();
										p.droppingRects.push({
											_l: x,
											_t: N,
											_r: P,
											_b: z,
											_index: O
										});
										N = J.Bottom + M;
										z = H.Top - M;
										O = H.GetCurrentIndex();
										p.droppingRects.push({
											_l: x,
											_t: N,
											_r: P,
											_b: z,
											_index: O
										})
									} else {
										if (K == p.imagesPerRow - 2) {
											N = J.Bottom + M;
											z = H.Top - M;
											O = H.GetCurrentIndex();
											p.droppingRects.push({
												_l: x,
												_t: N,
												_r: P,
												_b: z,
												_index: O
											});
											N = H.Bottom + M;
											z = p.imageViewHeight - p.borderWidth * 2;
											O++;
											p.droppingRects.push({
												_l: x,
												_t: N,
												_r: P,
												_b: z,
												_index: O
											})
										} else {
											N = J.Bottom + M;
											z = H.Top - M;
											O = H.GetCurrentIndex();
											p.droppingRects.push({
												_l: x,
												_t: N,
												_r: P,
												_b: z,
												_index: O
											})
										}
									}
								} else {
									N = J.Top + M;
									z = J.Bottom - M;
									if (K % p.imagesPerColumn == 0) {
										x = p.borderWidth * 2;
										P = J.Left - M;
										O = J.GetCurrentIndex();
										p.droppingRects.push({
											_l: x,
											_t: N,
											_r: P,
											_b: z,
											_index: O
										});
										x = J.Right + M;
										P = H.Left - M;
										O = H.GetCurrentIndex();
										p.droppingRects.push({
											_l: x,
											_t: N,
											_r: P,
											_b: z,
											_index: O
										})
									} else {
										if ((K + 2) % p.imagesPerColumn == 0) {
											x = J.Right + M;
											P = H.Left - M;
											O = H.GetCurrentIndex();
											p.droppingRects.push({
												_l: x,
												_t: N,
												_r: P,
												_b: z,
												_index: O
											});
											x = H.Right + M;
											P = p.imageViewWidth - p.borderWidth - Q;
											O++;
											p.droppingRects.push({
												_l: x,
												_t: N,
												_r: P,
												_b: z,
												_index: O
											})
										} else {
											if ((K + 1) % p.imagesPerColumn != 0) {
												x = J.Right + M;
												P = H.Left - M;
												O = H.GetCurrentIndex();
												p.droppingRects.push({
													_l: x,
													_t: N,
													_r: P,
													_b: z,
													_index: O
												})
											} else {
												if ((K + 1) % p.imagesPerColumn == 0) {
													J = p.aryImageControls[K + 2];
													if (null == J || !J.bVisible) {
														N = H.Top + M;
														z = H.Bottom - M;
														x = p.borderWidth * 2;
														P = H.Left - M;
														O = H.GetCurrentIndex();
														p.droppingRects.push({
															_l: x,
															_t: N,
															_r: P,
															_b: z,
															_index: O
														})
													}
												}
											}
										}
									}
								}
							}
						}
					}
					break;
				case "dragover":
					var R = [];
					p.bShowInsertIndicator = false;
					for (K = 0; K < p.droppingRects.length; K++) {
						var E = p.droppingRects[K];
						if (E._l < A.x && A.x < E._r && E._t < A.y && A.y < E._b) {
							p.bShowInsertIndicator = true;
							p.dropAndInsertIndex = E._index;
							R.push(p.droppingRects[K]._l + "px");
							R.push(p.droppingRects[K]._t + "px");
							R.push(p.droppingRects[K]._r - p.droppingRects[K]._l + "px");
							R.push(p.droppingRects[K]._b - p.droppingRects[K]._t + "px");
							break
						}
					}
					if (p.bShowInsertIndicator) {
						var w = document.createElement("div");
						w.className = "ds-dwt_dragdrop_helper";
						w.style.position = "absolute";
						w.style.left = R[0];
						w.style.top = R[1];
						w.style.width = R[2];
						w.style.height = R[3];
						p.canvas.appendChild(w)
					} else {
						B = document.getElementsByClassName("ds-dwt_dragdrop_helper");
						while (B.length != 0) {
							p.canvas.removeChild(B[0])
						}
					}
					break;
				case "dragend":
				case "dragleave":
					if (!a.get(p._stwain._strDWTControlContainerID).contains(G.relatedTarget)) {
						if (G.relatedTarget && G.relatedTarget.className != "ds-dwt_dragdrop_helper") {
							B = document.getElementsByClassName("ds-dwt_dragdrop_helper");
							while (B.length != 0) {
								p.canvas.removeChild(B[0])
							}
							p.SetBackgroundColor(p.BackgroundColorByDefault, true)
						}
					}
					if (p.bEditorViewer && p._stwain.__strDWTControlEditorID && p._stwain.__strDWTControlEditorID != "") {
						p.SetBackgroundColor(p.BackgroundColorByDefault, true)
					}
					break;
				case "drop":
					p.droppingRects = [];
					B = document.getElementsByClassName("ds-dwt_dragdrop_helper");
					while (B.length != 0) {
						p.canvas.removeChild(B[0])
					}
					p.SetBackgroundColor(p.BackgroundColorByDefault, true);
					if (p.dropAndInsertIndex != -1) {
						for (K = p.dropAndInsertIndex; K < p.sHowManyImages; K++) {
							p.movingIndicesCausedbyInsert.push(K)
						}
						p.dropAndInsertIndex = -1
					}
					try {
						var F = G.dataTransfer.files;
						for (var I = 0; I < F.length; I++) {
							v = F[I];
							switch (v.type) {
								case "image/bmp":
									l = EnumDWT_ImageType.IT_BMP;
									break;
								case "image/jpeg":
									l = EnumDWT_ImageType.IT_JPG;
									break;
								case "image/tiff":
									l = EnumDWT_ImageType.IT_TIF;
									break;
								case "image/png":
									l = EnumDWT_ImageType.IT_PNG;
									break;
								case "application/pdf":
									l = EnumDWT_ImageType.IT_PDF;
									break;
								case "image/gif":
									l = EnumDWT_ImageType.IT_GIF;
									break;
								default:
									a.html5.Funs2.output(null, v.name + " failed to load because the file type is not supported!");
									l = -1;
									a.Errors.UnrecognizedExt(p._stwain);
									break
							}
							if (l != -1) {
								a.showProgress(p._stwain, "DropLoading", true);
								p._stwain._OnPercentDone([0, -1, "Loading..."]);
								if (p._stwain.Addon && p._stwain.Addon.PDF) {
									var y = false,
										D, L = a.License.checkProductKey(p._stwain, {
											PDFRasterizer: true
										}, false, true);
									if (L) {
										o = p._stwain.Addon.PDF.GetConvertMode();
										D = p._stwain._innerFun("GetAddOnVersion", Dynamsoft.Lib.html5.Funs.makeParams("pdf"));
										if (a.env.bMac && D == Dynamsoft.PdfMacVersion) {
											y = true
										} else {
											if (a.env.bLinux && D == Dynamsoft.PdfLinuxVersion) {
												y = true
											} else {
												if (D == Dynamsoft.PdfVersion) {
													y = true
												}
											}
										}
										if (y) {
											p._stwain.Addon.PDF.SetConvertMode(1)
										}
									}
								}
								if (p.bShowInsertIndicator) {
									p.droppedInsertFilesCount++
								}
								p._stwain.__LoadImageFromBytes(v, l, "", true, q, u, 0, v.size)
							}
						}
					} catch (C) {
						a.log(C.stack || C, "error");
						setTimeout(function() {
							throw C
						}, 0)
					}
					break
			}
		};
		for (var n = 0; n < s.length; n++) {
			var t = s[n];
			if (p.canvas) {
				var k = p.canvas;
				k.addEventListener(t, m, true)
			}
		}
	};
	h.prototype.__onDragDropStart = function(s, l) {
		var n = this,
			k, r;
		if (s.button == 0) {
			k = n.GetImageControl(l);
			n.bDraggedBeforeMouseUp = false;
			r = n.aryImageControls;
			if (!n.bSingleImagePerView && n.dragDropStatus == g.idle) {
				var q = k.divOut.cloneNode(false);
				q.style.display = "none";
				q.className = "ds-dwt_dragdrop_helper";
				q.style.width = k.canvasWidth + "px";
				if (k.divOut.style.height != "") {
					q.style.height = k.divOut.style.height
				} else {
					q.style.height = k.canvasHeight + "px"
				}
				q.style.top = "";
				q.style.left = "";
				n.elHelperDIV = q;
				n.aryDivOutCoordinates = [];
				for (var m = 0; m < r.length; m++) {
					var p = {};
					if (r[m].bVisible) {
						p = {
							_left: r[m].Left,
							_top: r[m].Top
						};
						n.aryDivOutCoordinates.push(p)
					}
				}
				var o = {
					x: s.clientX - k.Left,
					y: s.clientY - k.Top,
					x0: s.clientX,
					y0: s.clientY
				};
				n.aryDivOutCoordinates.push(o);
				n.dragDropStatus = g.start;
				n.aryDragDropPairs = [];
				n.bDraggingDropping = true;
				n.sDraggingStartImageIndex = k.cIndex
			}
		}
	};
	h.prototype.__draggingDropping = function(D) {
		var n = this,
			l;
		if (n.bSingleImagePerView) {
			n.__onDragDropDone();
			return
		}
		if (n.dragDropStatus != g.idle) {
			if (n.bDraggingDropping && n.sDraggingStartImageIndex != -1) {
				l = n.GetImageControl(n.sDraggingStartImageIndex)
			} else {
				n.__onDragDropDone();
				return
			}
			var L, P, R, A = [],
				y = n.aryImageControls,
				G = [],
				v = n.aryDivOutCoordinates,
				w = n.aryCurrentSelectedImageIndicesInBuffer,
				t = -1,
				U = -1,
				m = -1,
				r = 999999;
			U = l.GetCurrentIndex();
			for (R = 0; R < y.length; R++) {
				if (y[R] && y[R].bVisible) {
					G.push(y[R])
				}
			}
			y = G;
			for (R = 0; R < w.length; R++) {
				P = n.__GetImageControlIndex(w[R]);
				if (P == -1) {
					n.__onDragDropDone();
					return
				}
				A.push(P)
			}
			if (n.aryallImageControlIndicesWhenDragDrop.length == 0) {
				n.aryallImageControlIndicesWhenDragDrop = A
			}
			if (n.dragDropStatus == g.start) {
				l.canvas.style.position = "relative";
				l.canvas.style.top = "0px";
				l.divOut.style.zIndex = r;
				var S = n.horizontalScrollBar.GetEL();
				var M = n.verticalScrollBar.GetEL();
				S.style.zIndex = r + 1;
				M.style.zIndex = r + 1
			}
			if (w.length > 1) {
				var s = l.canvasWidth < l.canvasHeight ? l.canvasWidth : l.canvasHeight;
				L = parseInt(s / 20)
			}
			var B = v[v.length - 1];
			var J = D.clientX - B.x;
			var o = D.clientY - B.y;
			if (Math.abs(D.clientX - B.x0) > 3 || Math.abs(D.clientY - B.y0) > 3) {
				n.bDraggedBeforeMouseUp = true
			}
			l.SetLocation(J, o, true);
			var F = 0;
			for (R = 0; R < w.length; R++) {
				if (n.dragDropStatus == g.start) {
					var I = n.elHelperDIV.cloneNode(false);
					n.canvas.appendChild(I);
					if (D.target.getContext && w.length > 1) {
						var x = D.target.getContext("2d");
						x.canvas.height = x.canvas.height;
						x.fillStyle = "#50a8e1";
						x.fillRect(x.canvas.width * 0.5 - 15, x.canvas.height * 0.5 - 20, 30, 30);
						x.font = "20px Times New Roman";
						x.fillStyle = "white";
						x.textAlign = "center";
						x.fillText(w.length, x.canvas.width * 0.5, x.canvas.height * 0.5)
					}
				}
				P = n.__GetImageControlIndex(w[R]);
				if (P != -1) {
					var N = n.aryImageControls[P];
					if (l.GetCurrentIndex() != N.GetCurrentIndex()) {
						F++;
						N.canvas.style.position = "relative";
						N.canvas.style.top = "0px";
						N.divOut.style.zIndex = r - F;
						if (w.length > 1) {
							if (w.length == 2) {
								N.SetLocation(J - L * 2, o - L * 2, true)
							} else {
								if (F % 2 == 0) {
									N.SetLocation(J - L * 2, o - L * 2, true)
								} else {
									N.SetLocation(J - L, o - L, true)
								}
							}
						}
					}
				}
			}
			n.dragDropStatus = g.inprocess;
			var V, T, C, H = document.getElementsByClassName("ds-dwt_dragdrop_helper");
			for (V = 0; V < H.length; V++) {
				T = H[V];
				C = A[V];
				T.style.display = "";
				if (T.style.left == "") {
					T.style.left = v[C]._left + "px";
					T.style.top = v[C]._top + "px"
				}
			}
			for (var Q = 0; Q < y.length; Q++) {
				if (A.indexOf(Q) == -1) {
					if (y[Q].Left < l.CenterH && l.CenterH < y[Q].Right && y[Q].Top < l.CenterV && l.CenterV < y[Q].Bottom) {
						var E, O, p, k = [],
							z = [],
							K, q = [],
							u = [];
						t = Q;
						p = y[t].cIndex;
						E = n.MoveMultipleImages(w, p, true);
						if (E != false) {
							q = E[0];
							k = E[1];
							n.aryCurrentSelectedImageIndicesInBuffer = q;
							for (O = 0; O < k.length; O++) {
								if (k[O][0] == U) {
									m = k[O][1]
								}
								z.push([n.__GetImageControlIndex(k[O][0]), n.__GetImageControlIndex(k[O][1])])
							}
							for (O = A.length - 1; O > -1; O--) {
								n.aryImageControls[A[O]].SetBindIndex(q[O]);
								n.aryImageControls[A[O]].SetCurrentIndex(q[O])
							}
							for (O = 0; O < z.length; O++) {
								K = n.aryImageControls.splice(z[O][0], 1)[0];
								n.aryImageControls.splice(z[O][1], 0, K)
							}
							for (O = t - 1; O > -1; O--) {
								K = n.aryImageControls[O];
								if (K && K.bVisible) {
									K.SetBindIndex(n.aryImageControls[O + 1].GetBindIndex() - 1);
									K.SetCurrentIndex(n.aryImageControls[O + 1].GetCurrentIndex() - 1)
								}
							}
							for (O = t; O < n.aryImageControls.length - 1; O++) {
								K = n.aryImageControls[O + 1];
								if (K && K.bVisible) {
									K.SetBindIndex(n.aryImageControls[O].GetBindIndex() + 1);
									K.SetCurrentIndex(n.aryImageControls[O].GetCurrentIndex() + 1)
								}
							}
							for (O = 0; O < n.aryImageControls.length; O++) {
								K = n.aryImageControls[O];
								if (K && K.bVisible) {
									if (q.indexOf(K.GetCurrentIndex()) != -1) {
										u.push(O)
									} else {
										K.SetLocation(v[O]._left, v[O]._top, true)
									}
								}
							}
							for (V = 0; V < u.length; V++) {
								T = H[V];
								C = u[V];
								T.style.left = v[C]._left + "px";
								T.style.top = v[C]._top + "px"
							}
							n.aryallImageControlIndicesWhenDragDrop = u;
							n.cCurrentIndex = m;
							n.sDraggingStartImageIndex = m;
							n.SetShowPageNumber(n.bShowPageNumber);
							n.__fireEvent("onResetCurrentIndex", m)
						} else {
							n.__onDragDropDone();
							break
						}
						break
					}
				}
			}
		}
	};
	h.prototype.__onDragDropDone = function() {
		var p = this,
			k, v = p.aryImageControls,
			m = p.aryDivOutCoordinates;
		if (!p.bSingleImagePerView && p.dragDropStatus != g.idle) {
			if (p.bDraggingDropping && p.sDraggingStartImageIndex != -1) {
				k = p.GetImageControl(p.sDraggingStartImageIndex);
				var l, u, n, s = document.getElementsByClassName("ds-dwt_dragdrop_helper");
				while (s.length != 0) {
					p.canvas.removeChild(s[0])
				}
				var t = p.horizontalScrollBar.GetEL();
				var o = p.verticalScrollBar.GetEL();
				t.style.zIndex = "";
				o.style.zIndex = "";
				for (n = 0; n < p.aryallImageControlIndicesWhenDragDrop.length; n++) {
					u = p.aryallImageControlIndicesWhenDragDrop[n];
					l = v[u];
					l.divOut.style.zIndex = "";
					l.SetLocation(m[u]._left, m[u]._top)
				}
				var r = p.aryDragDropPairs;
				for (n = 0; n < r.length; n++) {
					var q = p._stwain._innerFun("MoveImage", Dynamsoft.Lib.html5.Funs.makeParams(r[n][0], r[n][1]));
					if (!q) {
						b.output(["Actual moving from ", r[n][0], " to ", r[n][1], " failed after the dragdrop action!"].join());
						break
					}
				}
				var w = p.aryCurrentSelectedImageIndicesInBuffer;
				p._stwain._innerFun("SelectedImagesCount", Dynamsoft.Lib.html5.Funs.makeParams(w.length));
				for (n = 0; n < w.length; n++) {
					p._stwain._innerFun("SetSelectedImageIndex", Dynamsoft.Lib.html5.Funs.makeParams(n, w[n]))
				}
				p._stwain._OnBitmapChanged(["0", p.cCurrentIndex.toString(), 5, p.cCurrentIndex, p.sHowManyImages])
			}
		}
		p.dragDropStatus = g.idle;
		p.aryDivOutCoordinates = [];
		p.bDraggingDropping = false;
		p.sDraggingStartImageIndex = -1;
		p.aryDragDropPairs = [];
		p.elHelperDIV = null;
		p.bDraggedBeforeMouseUp = false;
		p.aryallImageControlIndicesWhenDragDrop = []
	};
	h.prototype.__InitEvents = function(k) {
		var l = this;
		if (a.isFunction(k.onTopImageInTheViewChanged)) {
			l.onTopImageInTheViewChanged = k.onTopImageInTheViewChanged
		}
		if (a.isFunction(k.onGetImageInfo)) {
			l.onGetImageInfo = k.onGetImageInfo
		}
		if (a.isFunction(k.onZoomChanged)) {
			l.onZoomChanged = k.onZoomChanged
		}
		if (a.isFunction(k.onMouseMove)) {
			l.onMouseMove = k.onMouseMove
		}
		if (a.isFunction(k.onMouseClick)) {
			l.onMouseClick = k.onMouseClick
		}
		if (a.isFunction(k.onMouseRightClick)) {
			l.onMouseRightClick = k.onMouseRightClick
		}
		if (a.isFunction(k.onMouseDoubleClick)) {
			l.onMouseDoubleClick = k.onMouseDoubleClick
		}
		if (a.isFunction(k.onImageAreaDeSelected)) {
			l.onImageAreaDeSelected = k.onImageAreaDeSelected
		}
		if (a.isFunction(k.onImageAreaSelected)) {
			l.onImageAreaSelected = k.onImageAreaSelected
		}
		if (a.isFunction(k.onSelected)) {
			l.onSelected = k.onSelected
		}
		if (a.isFunction(k.onRefreshUI)) {
			l.onRefreshUI = k.onRefreshUI
		}
		if (a.isFunction(k.onResetCurrentIndex)) {
			l.onResetCurrentIndex = k.onResetCurrentIndex
		}
	};
	h.prototype.__InitiHorizontalScrollBar = function(l) {
		var m = this;
		var k = {
			Width: l.Width,
			Height: 16,
			Value: 0,
			MaxValue: 0,
			Horizontal: true
		};
		k.onValueChanged = function(n) {
			m.__UpdateImageByScrollBar(n.Value)
		};
		m.horizontalScrollBar = new a.UI.ScrollBar(k);
		if (m.canvas && m.horizontalScrollBar) {
			m.canvas.appendChild(m.horizontalScrollBar.GetEL())
		}
		m.__SetHLocation(0, l.Height - m.__GetScrollWidth())
	};
	h.prototype.__InitiVerticalScrollBar = function(k) {
		var m = this;
		var l = {
			Width: 16,
			Height: k.Height,
			Value: 0,
			MaxValue: 0,
			Horizontal: false
		};
		l.onValueChanged = function(n) {
			m.__UpdateImageByScrollBar(n.Value)
		};
		m.verticalScrollBar = new a.UI.ScrollBar(l);
		if (m.canvas && m.verticalScrollBar) {
			m.canvas.appendChild(m.verticalScrollBar.GetEL())
		}
		m.__SetVLocation(k.Width - m.__GetScrollWidth(), 0)
	};
	h.prototype.__UpdateImageByScrollBar = function(n) {
		var q = this,
			k = -1,
			o = -1,
			m = -1,
			l, p;
		if (q.aryImageControls && q.aryImageControls.length > 0) {
			p = q.aryImageControls[0];
			if (p) {
				o = p.GetCurrentIndex();
				k = q.__GetRow(o)
			}
		}
		if (q.bVerticalMode == true) {
			m = parseInt(q.__GetVisibleRow(n) * q.imagesPerColumn);
			l = q.__GetRow(m);
			if (k == l) {
				return
			}
		} else {
			m = parseInt(q.__GetVisibleRow(n));
			if (m == o) {
				return
			}
		}
		b.output(q, "__UpdateImageByScrollBar(value, newIndex): " + [n, m].join(","));
		q.__GoInner(m, false, true)
	};
	h.prototype.UpdateImage = function(m, o, l, k, s, q) {
		var p = this;
		var t = p.aryModelImageControl[m];
		t.imageToShow = o;
		t.imageWidth = l;
		t.imageHeight = k;
		t.iImageControlWidth = l;
		t.iImageControlHeight = k;
		t.aryOverlayRectangleData = s;
		t.imageUrl = q;
		var r = p.GetImageControl(m),
			n;
		if (null != r) {
			r.SetCurrentIndex(m);
			if (o != null && (o.src == "data:," || o.width == 0 || o.height == 0 || o.src == "")) {
				n = p.__GetImageControlIndex(m);
				if (n >= 0) {
					p.__SetArrayControlLoadImage(n, m, r, t, l, k, p.AttachImagesForControl, false)
				}
			} else {
				if (o == null) {
					n = p.__GetImageControlIndex(m);
					if (n >= 0) {
						l = parseInt(p.imageViewWidth / 2);
						k = parseInt(p.imageViewHeight / 2);
						if (p.imagesPerRow == 1 && p.imagesPerColumn == 1) {
							if (p.bSingleMode == true) {
								l = -1;
								k = -1;
								t.bOriginalImage = true
							} else {
								l = p.imageViewWidth;
								k = p.imageViewHeight;
								t.bOriginalImage = false
							}
						} else {
							if (l < 300) {
								l = 300
							}
							if (k < 300) {
								k = 300
							}
							t.bOriginalImage = false
						}
						p.__SetArrayControlLoadImage(n, m, r, t, l, k, p.AttachImagesForControl, true)
					}
				}
				p.AttachImagesForControl(r, t, m)
			}
		}
		p.iCurrentRow = -1;
		p.iCurrentColumn = -1;
		return true
	};
	h.prototype.__AddImage = function(l, m) {
		var n = this;
		n.__AddControl();
		var k = n.GetImageControl(l);
		k.SetCurrentIndex(l);
		n.AttachImagesForControl(k, m, l)
	};
	h.prototype.UpdateAllImage = function(o, k, m, l) {
		var n = this;
		return n.UpdateAllImageInner(o, k, false, m, l)
	};
	h.prototype.UpdateAllImageInner = function(r, k, o, n, m) {
		var q = this;
		q.aryModelImageControl = r;
		q.__OnlySetCurrentIndex(k);
		q.sHowManyImages = q.aryModelImageControl.length;
		var p = (q.imagesPerRow * q.imagesPerColumn) > q.sHowManyImages ? q.sHowManyImages : q.imagesPerRow * q.imagesPerColumn;
		var l = 0;
		for (l = q.aryImageControls.length - 1; l >= p; l--) {
			q.__RemoveControl(l)
		}
		for (l = q.aryImageControls.length; l < p; l++) {
			q.__AddControl()
		}
		if (!Dynamsoft.WebTwainEnv.ScanDirectly) {
			q.__ConfirmScrollMaxValue();
			q.__ConfirmScrollVisibity();
			q.iCurrentRow = -1;
			q.iCurrentColumn = -1;
			q.__SetCurrentIndex(q.cCurrentIndex);
			q.__ReInitChildrenPosition();
			q.__AttachImages(o, n, m)
		}
		return true
	};
	h.prototype.__AddControl = function() {
		var m = this,
			k = {};
		k.containingView = m;
		if (!Dynamsoft.WebTwainEnv.ScanDirectly) {
			if (a.isFunction(m.onImageAreaDeSelected)) {
				k.onImageAreaDeSelected = m.onImageAreaDeSelected
			}
			if (a.isFunction(m.onImageAreaSelected)) {
				k.onImageAreaSelected = m.onImageAreaSelected
			}
			k.onZoomChanged = function(n) {
				m.fZoom = n.zoom;
				m.__fireEvent("onZoomChanged", n)
			};
			k.onMouseClick = function(n) {
				m.__OnMouseClick(n);
				m.__fireEvent("onMouseClick", n)
			};
			k.onMouseRightClick = function(n) {
				m.__fireEvent("onMouseRightClick", n)
			};
			k.onMouseMove = function(o) {
				var n = o.e;
				if (!(n.shiftKey || n.ctrlKey || n.metaKey)) {
					if (m.bDraggingDropping && m.sDraggingStartImageIndex != -1) {
						m.__draggingDropping(n)
					}
				}
				m.__fireEvent("onMouseMove", o)
			};
			k.onMouseDoubleClick = function(n) {
				m.__fireEvent("onMouseDoubleClick", n)
			};
			k.onGetImageInfo = function(n) {
				return m.__fireEvent("onGetImageInfo", n)
			};
			k.onMouseDown = function(p) {
				var n = p.e,
					o;
				o = m.GetImageControl(p.index);
				m.bMouseClickEventFiredInMouseDown = false;
				if (n.shiftKey || n.ctrlKey || n.metaKey) {
					return
				}
				if (m.aryCurrentSelectedImageIndicesInBuffer.indexOf(p.index) == -1) {
					m.__OnMouseClick(p);
					m.__fireEvent("onMouseClick", p);
					m.bMouseClickEventFiredInMouseDown = true
				}
				m.__onDragDropStart(p.e, p.index)
			};
			k.onMouseUp = function(o) {
				var n = o.e;
				if (!(n.shiftKey || n.ctrlKey || n.metaKey)) {
					m.__onDragDropDone()
				}
			}
		}
		var l = new a.UI.ImageControl(k);
		m.aryImageControls.push(l);
		a.imageControlCount++;
		m.__InitImageControl(l);
		if (!Dynamsoft.WebTwainEnv.ScanDirectly) {
			if (m.canvas) {
				m.canvas.appendChild(l.GetEL())
			}
			l.bindEvents()
		}
	};
	h.prototype.__InitImageControl = function(k) {
		var l = this;
		if (l.imagesPerRow == 1 && l.imagesPerColumn == 1) {
			k.SetMouseShape(l.iMouseShape);
			k.SetShowPageNumber(false)
		} else {
			k.SetMouseShape(EnumDWT_MouseShape.Hand);
			k.SetShowPageNumber(l.bShowPageNumber)
		}
		k.SetSelectionRectAspectRatio(l.ratio);
		k.SetBackgroundColor(l.BackgroundColor, true);
		k.SetSelectionImageBorderColor(l.SelectionImageBorderColor);
		if (l.bSingleMode) {
			if (l.bIfFitWindow) {
				k.SetIfFitWindow(true, l.enumDWTFitWindowType)
			} else {
				k.SetZoom(l.fZoom)
			}
		} else {
			k.SetIfFitWindow(true, 0)
		}
	};
	h.prototype.__OnMouseClick = function(l) {
		var o = this,
			m = 0,
			p = l.index,
			s = o.aryCurrentSelectedImageIndicesInBuffer.indexOf(p),
			k = l.e.ctrlKey,
			q = l.e.shiftKey,
			r = l.e.metaKey;
		if (s == -1) {
			if (k || q || r || o.aryCurrentSelectedImageIndicesInBuffer.length < 1) {
				o.aryCurrentSelectedImageIndicesInBuffer.push(p)
			} else {
				if (o.aryCurrentSelectedImageIndicesInBuffer.length == 1) {
					if (o.aryCurrentSelectedImageIndicesInBuffer[0] == p) {
						return
					}
					o.aryCurrentSelectedImageIndicesInBuffer[0] = p
				} else {
					o.__ClearSelectedImageIndices();
					o.aryCurrentSelectedImageIndicesInBuffer.push(p)
				}
			}
		} else {
			if ((k || r) && o.aryCurrentSelectedImageIndicesInBuffer.length > 1) {
				o.aryCurrentSelectedImageIndicesInBuffer.splice(s, 1)
			} else {
				if (q) {
					o.aryCurrentSelectedImageIndicesInBuffer.push(p)
				} else {
					if (o.aryCurrentSelectedImageIndicesInBuffer.length == 1 && o.cCurrentIndex == p) {
						return
					}
					o.__ClearSelectedImageIndices();
					o.aryCurrentSelectedImageIndicesInBuffer.push(p)
				}
			}
		}
		if (q) {
			var t, u = o.aryCurrentSelectedImageIndicesInBuffer[0],
				n = o.aryCurrentSelectedImageIndicesInBuffer[o.aryCurrentSelectedImageIndicesInBuffer.length - 1];
			o.__ClearSelectedImageIndices();
			if (n == u) {
				o.aryCurrentSelectedImageIndicesInBuffer.push(parseInt(u))
			} else {
				if (n > u) {
					t = n - u + 1;
					for (m = 0; m < t; m++) {
						o.aryCurrentSelectedImageIndicesInBuffer.push(parseInt(u + m))
					}
				} else {
					t = u - n + 1;
					o.aryCurrentSelectedImageIndicesInBuffer.push(parseInt(u));
					for (m = 0; m < t - 1; m++) {
						o.aryCurrentSelectedImageIndicesInBuffer.push(parseInt(n + m))
					}
				}
			}
		}
		if (o.aryCurrentSelectedImageIndicesInBuffer.length == 1) {
			o.__SetCurrentIndexWithoutSetScroll(o.aryCurrentSelectedImageIndicesInBuffer[0])
		} else {
			o.__SortCurrentSelectedImageIndicesInBuffer();
			o.__ResetSelection()
		}
		o.__fireEvent("onSelected", o.aryCurrentSelectedImageIndicesInBuffer)
	};
	h.prototype.__SortCurrentSelectedImageIndicesInBuffer = function() {
		var p = this;
		var o = p.aryCurrentSelectedImageIndicesInBuffer.length;
		if (o > 1) {
			var n, m, k;
			var l = false;
			for (m = 0; m < o - 1; m++) {
				l = false;
				for (k = 1; k < o; k++) {
					if (p.aryCurrentSelectedImageIndicesInBuffer[k] < p.aryCurrentSelectedImageIndicesInBuffer[k - 1]) {
						l = true;
						n = p.aryCurrentSelectedImageIndicesInBuffer[k - 1];
						p.aryCurrentSelectedImageIndicesInBuffer[k - 1] = p.aryCurrentSelectedImageIndicesInBuffer[k];
						p.aryCurrentSelectedImageIndicesInBuffer[k] = n
					}
				}
				if (!l) {
					return
				}
			}
		}
	};
	h.prototype.__RemoveControl = function(k) {
		var m = this;
		if (k < m.aryImageControls.length && k >= 0) {
			var l = m.aryImageControls[k];
			l.Destroy();
			m.aryImageControls.splice(k, 1);
			if (!Dynamsoft.WebTwainEnv.ScanDirectly) {
				if (m.canvas) {
					m.canvas.removeChild(l.GetEL())
				}
			}
			a.imageControlCount--;
			if (a.imageControlCount < 0) {
				a.imageControlCount = 0
			}
		}
	};
	h.prototype.__ConfirmScrollMaxValue = function() {
		var l = this;
		if (!l.bSingleMode) {
			if (l.bVerticalMode == true) {
				var k = l.__GetHowManyRows();
				l.__SetVScrollMaxValue(k, l.imagesPerRow)
			} else {
				l.__SetHScrollMaxValue(l.sHowManyImages, l.imagesPerColumn)
			}
		}
	};
	h.prototype.__GetHowManyRows = function() {
		var k = this;
		return parseInt((k.sHowManyImages + k.imagesPerColumn - 1) / k.imagesPerColumn)
	};
	h.prototype.__ConfirmScrollVisibity = function() {
		var k = this;
		if (k.bSingleMode) {
			k.__SetIfHScroll(false);
			k.__SetIfVScroll(false)
		} else {
			if (k.bVerticalMode == false) {
				if (k.bScrollBar && k.sHowManyImages > k.imagesPerRow * k.imagesPerColumn) {
					k.__SetIfHScroll(true)
				} else {
					k.__SetIfHScroll(false)
				}
				k.__SetIfVScroll(false)
			} else {
				if (k.bScrollBar && k.sHowManyImages > k.imagesPerRow * k.imagesPerColumn) {
					k.__SetIfVScroll(true)
				} else {
					k.__SetIfVScroll(false)
				}
				k.__SetIfHScroll(false)
			}
		}
	};
	h.prototype.__SetCurrentIndex = function(k) {
		var l = this;
		if (k >= 0) {
			l.__SetCurrentIndexInnerInner(k, true, false)
		}
	};
	h.prototype.__SetCurrentIndexInner = function(l, m, k) {
		var n = this;
		if (!k) {
			n.__SetCurrentIndexInnerInner(l, m, k)
		} else {
			n.__SetCurrentIndexInnerInner(l, m, true)
		}
	};
	h.prototype.__SetCurrentIndexWithoutSetScroll = function(k) {
		var l = this;
		l.__SetCurrentIndexInnerInner(k, true, false, true)
	};
	h.prototype.__SetCurrentIndexWithoutRefreshUI = function(k) {
		var l = this;
		l.__SetCurrentIndexInnerInner(k, true, false)
	};
	h.prototype.__SetCurrentIndexInnerInner = function(s, v, w, r) {
		var q = this,
			m = true,
			t, x;
		if (s < 0 || s >= q.aryModelImageControl.length) {
			return
		}
		if (q.__bAddingImage && !q.__IfAutoScroll) {
			m = false
		}
		if (m) {
			if (q.bVerticalMode == true) {
				var u = q.iCurrentRow;
				q.iCurrentRow = q.__GetRow(s);
				if (q.iCurrentRow != u && (q.iCurrentRow <= q.iOldFirstVisibleRow || ((q.iCurrentRow - q.iOldFirstVisibleRow) >= q.imagesPerRow))) {
					if ((q.iCurrentRow - q.iOldFirstVisibleRow) == q.imagesPerRow) {
						if (w == false) {
							q.iCurrentRow = q.iOldFirstVisibleRow + 1
						}
					}
					if (q.bSingleMode == false) {
						if (!r || r == false) {
							var p = q.iCurrentRow;
							q.__SetVScrollPosition(p)
						}
					}
					var n = q.__GetFirstVisibleRow();
					if (q.iOldFirstVisibleRow != n) {
						q.iOldFirstVisibleRow = n;
						t = n * q.imagesPerColumn;
						x = q.cCurrentIndex;
						q.__fireEvent("onTopImageInTheViewChanged", t);
						if (x != q.cCurrentIndex) {
							s = q.cCurrentIndex
						} else {
							q.cCurrentIndex = s
						}
						q.__AttachImages(false)
					}
				}
			} else {
				var o = q.iCurrentColumn;
				q.iCurrentColumn = s;
				if (q.iCurrentColumn != o && (q.iCurrentColumn < q.iOldFirstVisibleColum || ((q.iCurrentColumn - q.iOldFirstVisibleColum) >= q.imagesPerColumn))) {
					if ((q.iCurrentColumn - q.iOldFirstVisibleColum) == q.imagesPerColumn) {
						q.iCurrentColumn = q.iOldFirstVisibleColum + 1
					}
					if (q.bSingleMode == false) {
						if (!r || r == false) {
							var l = q.iCurrentColumn;
							q.__SetHScrollPotion(l)
						}
					}
					var k = q.__GetFirstVisibleColumn();
					if (q.iOldFirstVisibleColum != k) {
						q.iOldFirstVisibleColum = k;
						t = k;
						x = q.cCurrentIndex;
						q.__fireEvent("onTopImageInTheViewChanged", t);
						if (x != q.cCurrentIndex) {
							s = q.cCurrentIndex
						} else {
							q.cCurrentIndex = s
						}
						q.__AttachImages(false)
					}
				}
			}
		}
		if (v) {
			q.__OnlySetCurrentIndex(s);
			q.__ResetSelection()
		}
	};
	h.prototype.__SetScrollByIndex = function(q) {
		var p = this,
			r;
		if (p.bVerticalMode == true) {
			var s = p.iCurrentRow;
			p.iCurrentRow = p.__GetRow(q);
			if (p.iCurrentRow != s && (p.iCurrentRow <= p.iOldFirstVisibleRow || ((p.iCurrentRow - p.iOldFirstVisibleRow) >= p.imagesPerRow))) {
				if ((p.iCurrentRow - p.iOldFirstVisibleRow) == p.imagesPerRow) {}
				if (p.bSingleMode == false) {
					var n = p.iCurrentRow;
					p.__SetVScrollPosition(n)
				}
				var m = p.__GetFirstVisibleRow();
				if (p.iOldFirstVisibleRow != m) {
					p.iOldFirstVisibleRow = m;
					r = m * p.imagesPerColumn;
					p.__fireEvent("onTopImageInTheViewChanged", r);
					p.__AttachImages(false)
				}
			}
		} else {
			var o = p.iCurrentColumn;
			p.iCurrentColumn = q;
			if (p.iCurrentColumn != o && (p.iCurrentColumn < p.iOldFirstVisibleColum || ((p.iCurrentColumn - p.iOldFirstVisibleColum) >= p.imagesPerColumn))) {
				if ((p.iCurrentColumn - p.iOldFirstVisibleColum) == p.imagesPerColumn) {
					p.iCurrentColumn = p.iOldFirstVisibleColum + 1
				}
				if (p.bSingleMode == false) {
					var l = p.iCurrentColumn;
					p.__SetHScrollPotion(l)
				}
				var k = p.__GetFirstVisibleColumn();
				if (p.iOldFirstVisibleColum != k) {
					p.iOldFirstVisibleColum = k;
					r = k;
					p.__fireEvent("onTopImageInTheViewChanged", r);
					p.__AttachImages(false)
				}
			}
		}
	};
	h.prototype.__GetRow = function(k) {
		var l = this;
		return parseInt(k / l.imagesPerColumn)
	};
	h.prototype.__GetFirstVisibleColumn = function() {
		var k = this;
		return parseInt(k.__GetVisibleRow(k.__GetHScrollPosionValue()))
	};
	h.prototype.__GetFirstVisibleRow = function() {
		var k = this;
		return parseInt(k.__GetVisibleRow(k.__GetVScrollPosionValue()))
	};
	h.prototype.__GetVisibleRow = function(m) {
		var l = this;
		if (l.__GetHowManyRows() == 0) {
			return 0
		}
		var k = m;
		if (l.bSingleMode) {
			return l.cCurrentIndex
		} else {
			if (l.bVerticalMode == true) {
				if (l.__GetHowManyRows() - k < l.imagesPerRow) {
					k = k - (l.imagesPerRow - (l.__GetHowManyRows() - k))
				}
			} else {
				if (l.sHowManyImages - k < l.imagesPerColumn) {
					k = k - (l.imagesPerColumn - (l.sHowManyImages - k))
				}
			}
		}
		if (k < 0) {
			k = 0
		}
		return k
	};
	h.prototype.__AttachImages = function(m, l, k) {
		var n = this;
		n.__AttachImagesInner(m, true, l, k)
	};
	h.prototype.__AttachImagesInner = function(q, r, k, m) {
		var p = this;
		if (p.aryImageControls && p.aryImageControls.length > 0) {
			var s = 0;
			if (p.bVerticalMode == true) {
				s = p.__GetFirstVisibleRow() * p.imagesPerColumn
			} else {
				s = p.__GetFirstVisibleColumn()
			}
			if (s < 0) {
				s = 0
			}
			var n = 0;
			var l = s;
			var v = s + p.aryImageControls.length - 1;
			if (k && k > 0) {
				l = k
			}
			if (m && m > 0) {
				v = m
			}
			for (n = 0; n < p.aryImageControls.length; n++) {
				var t = p.aryImageControls[n];
				if (t) {
					var o = s + n;
					b.output(p, "__AttachImagesInner(baseIndex, index): " + [s, o].join(","));
					if (o < p.sHowManyImages) {
						if (q) {
							p.__InitImageControl(t)
						}
						if (r) {
							var u = p.aryModelImageControl[o];
							if (o >= l && o <= v || u.bIsDirty == true || t.GetCurrentIndex() != o) {
								b.output(p, "__AttachImagesInner() attach Image index -> control index:" + [o, n].join("->"));
								p.__GetImageAndAttach(t, u, o, false)
							}
						}
						if (t.bVisible == false) {
							t.SetVisible(true)
						}
						b.output(p, "__AttachImagesInner() set control index Visible:" + [n].join());
						if (p.__IfContains(p.aryCurrentSelectedImageIndicesInBuffer, o)) {
							b.output(p, "__AttachImagesInner() set control index selected:" + [n].join());
							if (t.bSelect == false) {
								t.SetSelect(true)
							}
						} else {
							if (t.bSelect) {
								t.SetSelect(false)
							}
						}
					} else {
						b.output(p, "__AttachImagesInner() set control index InVisible:" + [n].join());
						if (t.bVisible) {
							t.SetVisible(false)
						}
					}
				}
			}
		}
	};
	h.prototype.__IfContains = function(m, l) {
		var k = 0;
		if (m) {
			for (k = 0; k < m.length; k++) {
				if (m[k] == l) {
					return true
				}
			}
		}
		return false
	};
	h.prototype.__ReInitChildrenPosition = function() {
		var o = this,
			l = 0,
			n = 0,
			m;
		o.__InitControlsSize();
		if (!o.bSingleMode) {
			l = o.ImageMargin;
			n = o.ImageMargin
		}
		for (m = 0; m < o.aryImageControls.length; m++) {
			var k = o.aryImageControls[m];
			if (k._width != o.iControlWidth || k._height != o.iControlHeight) {
				k.ChangeControlSize(o.iControlWidth, o.iControlHeight)
			}
			if (o.bSingleMode) {
				k.SetLocation(0, 0)
			} else {
				k.SetLocation(l, n);
				l = k.Right + o.ImageMargin;
				if (o.bVerticalMode == true) {
					if ((m + 1) % o.imagesPerColumn == 0) {
						l = o.ImageMargin;
						n = k.Bottom + o.ImageMargin;
						if (o.bScrollBar == false) {
							if ((n + o.iControlHeight) > o.imageViewHeight) {
								n = o.ImageMargin
							}
						}
					}
				}
			}
		}
	};
	h.prototype.__InitControlsSize = function() {
		var q = this,
			n, o, p;
		if (q.bSingleMode == false) {
			var l = q.__GetScrollWidth();
			if (q.bVerticalMode == true) {
				if (q.__GetHowManyRows() <= q.imagesPerRow || q.bScrollBar == false) {
					l = 0
				}
				if (q.ImageMargin <= 0 || (q.ImageMargin > (q.imageViewWidth - l - 3 * q.imagesPerColumn)) || (q.ImageMargin > (q.imageViewHeight - 3 * q.imagesPerRow))) {
					o = parseInt(q.imageViewHeight / (q.imagesPerRow * 10));
					p = parseInt((q.imageViewWidth - l) / (q.imagesPerColumn * 10));
					n = o < p ? o : p;
					if (q.ImageMargin <= 0) {
						q.ImageMargin = parseInt(n)
					} else {
						q.ImageMargin = parseInt(q.ImageMargin < n ? q.ImageMargin : n)
					}
				}
			} else {
				if (q.sHowManyImages <= q.imagesPerColumn || q.bScrollBar == false) {
					l = 0
				}
				if (q.ImageMargin <= 0 || (q.ImageMargin > (q.imageViewWidth - 3 * q.imagesPerColumn)) || (q.ImageMargin > (q.imageViewHeight - l - 3 * q.imagesPerRow))) {
					o = parseInt(q.imageViewHeight - l) / (q.imagesPerRow * 10);
					p = parseInt((q.imageViewWidth) / (q.imagesPerColumn * 10));
					n = o < p ? o : p;
					if (q.ImageMargin <= 0) {
						q.ImageMargin = parseInt(n)
					} else {
						q.ImageMargin = parseInt(q.ImageMargin < n ? q.ImageMargin : n)
					}
				}
			}
			if (q.imagesPerColumn == q.imagesPerRow && q.imagesPerRow == 1) {
				q.ImageMargin = 0
			}
			var k = 0;
			var m = 0;
			if (q.bVerticalMode == true) {
				k = q.imageViewHeight - q.ImageMargin - 2 * q.borderWidth;
				m = q.imageViewWidth - l - q.ImageMargin - 2 * q.borderWidth
			} else {
				k = q.imageViewHeight - l - q.ImageMargin - 2 * q.borderWidth;
				m = q.imageViewWidth - q.ImageMargin - 2 * q.borderWidth
			}
			q.iControlWidth = parseInt(m / q.imagesPerColumn - q.ImageMargin);
			q.iControlHeight = parseInt(k / q.imagesPerRow - q.ImageMargin)
		} else {
			q.ImageMargin = 0;
			q.iControlWidth = q.imageViewWidth - 2 * q.borderWidth;
			q.iControlHeight = q.imageViewHeight - 2 * q.borderWidth
		}
	};
	h.prototype.GetDataImageControlList = function() {
		var k = this;
		return k.aryModelImageControl
	};
	h.prototype.SetDataImageControl = function(l, n) {
		var o = this;
		if (l > o.aryModelImageControl.length || o.aryModelImageControl.length < 0) {
			return
		}
		var m;
		if (l == o.aryModelImageControl.length) {
			m = new a.UI.ModelImageControl();
			m.imageIndex = l;
			m.rawWidth = n;
			o.aryModelImageControl.push(m)
		} else {
			m = o.aryModelImageControl[l];
			m.rawWidth = n
		}
		if (m != null) {
			m.bIsDirty = true
		}
		var k = o.GetImageControl(l);
		if (null != k) {
			o.__GetImageAndAttach(k, m, l, true)
		}
		return true
	};
	h.prototype.AttachImagesForControl = function(k, m, l) {
		if (k.GetBindIndex() == l) {
			k.AttachImage(m.imageToShow, m.imageWidth, m.imageHeight, m.imageIndex, m.aryOverlayRectangleData, m.bOriginalImage);
			k.Show()
		}
		if (k.containingView.bEditorViewer && k.containingView._UIEditor.bCouldBeTimeConsuming) {
			k.containingView._UIEditor.bCouldBeTimeConsuming = false;
			Dynamsoft.Lib.hideMask()
		}
		return true
	};
	h.prototype.__SetSelectionWinBorderColor = function(k) {
		var l = this
	};
	h.prototype.__ResetSelection = function() {
		var n = this,
			l = 0;
		if (n.aryCurrentSelectedImageIndicesInBuffer.length == 0) {
			if (n.cCurrentIndex >= 0) {
				n.aryCurrentSelectedImageIndicesInBuffer.push(n.cCurrentIndex)
			}
		}
		for (l = 0; l < n.aryImageControls.length; l++) {
			var k = n.aryImageControls[l];
			if (k.bVisible) {
				var m = n.aryCurrentSelectedImageIndicesInBuffer.indexOf(k.cIndex) == -1;
				if (k.bSelect && m) {
					k.SetSelect(false)
				} else {
					if (k.bSelect == false && !m) {
						k.SetSelect(true)
					}
				}
			}
		}
	};
	h.prototype.GetImageControl = function(m) {
		var n = this;
		var l = n.__GetImageControlIndex(m);
		if (l >= 0 && l < n.aryImageControls.length) {
			var k = n.aryImageControls[l];
			return k
		} else {
			return null
		}
	};
	h.prototype.__GetImageControlIndex = function(l) {
		var m = this;
		var k = -1;
		if (m.bSingleMode == true) {
			k = 0
		} else {
			if (m.bVerticalMode == true) {
				k = l - m.__GetFirstVisibleRow() * m.imagesPerColumn
			} else {
				k = l - m.__GetFirstVisibleColumn()
			}
		}
		if (k >= 0 && k < m.aryImageControls.length) {
			return k
		} else {
			return -1
		}
	};
	h.prototype.__SetIfHScroll = function(k) {
		var l = this;
		b.output(l, "__SetIfHScroll" + k);
		if (l.horizontalScrollBar) {
			l.horizontalScrollBar.SetVisible(k)
		}
	};
	h.prototype.__GetIfHScroll = function() {
		var k = this;
		if (k.horizontalScrollBar) {
			return k.horizontalScrollBar.GetVisible() == true ? true : false
		} else {
			return true
		}
	};
	h.prototype.__SetIfVScroll = function(k) {
		var l = this;
		b.output(l, "__SetIfVScroll" + k);
		if (l.verticalScrollBar) {
			l.verticalScrollBar.SetVisible(k)
		}
	};
	h.prototype.__GetIfVScroll = function() {
		var k = this;
		if (k.verticalScrollBar) {
			return k.verticalScrollBar.GetVisible() == true ? true : false
		} else {
			return true
		}
	};
	h.prototype.__GetHScrollPosionValue = function() {
		var l = this;
		var k = 0;
		if (l.horizontalScrollBar) {
			k = l.horizontalScrollBar.GetCurrentPosition()
		}
		if (k && k >= 0) {
			return k
		} else {
			return 0
		}
	};
	h.prototype.__GetVScrollPosionValue = function() {
		var l = this;
		var k = 0;
		if (l.verticalScrollBar) {
			k = l.verticalScrollBar.GetCurrentPosition()
		}
		if (k && k >= 0) {
			return k
		} else {
			return 0
		}
	};
	h.prototype.__SetHScrollMaxValue = function(l, k) {
		var m = this;
		b.output(m, "__SetHScrollMaxValue(totalSize,pageSize):" + l + "," + k);
		if (m.horizontalScrollBar) {
			m.horizontalScrollBar.InitScroll(l, k)
		}
	};
	h.prototype.__SetVScrollMaxValue = function(l, k) {
		var m = this;
		b.output(m, "__SetVScrollMaxValue(totalSize,pageSize):" + l + "," + k);
		if (m.verticalScrollBar) {
			m.verticalScrollBar.InitScroll(l, k)
		}
	};
	h.prototype.__SetHScrollPotion = function(k) {
		var l = this;
		if (l.horizontalScrollBar) {
			l.horizontalScrollBar.GoPosition(k)
		}
	};
	h.prototype.__SetVScrollPosition = function(k) {
		var l = this;
		if (l.verticalScrollBar) {
			l.verticalScrollBar.GoPosition(k)
		}
	};
	h.prototype.__SetHLocation = function(k, m) {
		var l = this;
		if (l.horizontalScrollBar) {
			l.horizontalScrollBar.SetLocation(k, m)
		}
	};
	h.prototype.__SetVLocation = function(k, m) {
		var l = this;
		if (l.verticalScrollBar) {
			l.verticalScrollBar.SetLocation(k, m)
		}
	};
	h.prototype.__ChangeHControlSize = function(k, l) {
		var m = this;
		if (m.horizontalScrollBar) {
			m.horizontalScrollBar.ChangeControlSize(k, l)
		}
	};
	h.prototype.__ChangeVControlSize = function(k, l) {
		var m = this;
		if (m.verticalScrollBar) {
			m.verticalScrollBar.ChangeControlSize(k, l)
		}
	};
	h.prototype.__GetScrollWidth = function() {
		return 16
	};
	h.prototype.SetSelectedImageArea = function(m, p, o, n, l) {
		var q = this;
		var k = q.GetImageControl(m);
		if (null != k) {
			if (q.imagesPerRow == 1 && q.imagesPerColumn == 1) {
				return k.SetSelectedImageArea(p, o, n, l)
			} else {
				return false
			}
		}
		return false
	};
	h.prototype.OverlayRectangle = function(t, p, o, s, m, l, n) {
		var q = this;
		var r = q.GetImageControl(t);
		if (null != r) {
			r.OverlayRectangle(p, o, s, m, l, n)
		}
		var u = q.aryModelImageControl[t];
		var k = new d(p, o, s, m, l, n);
		return u.aryOverlayRectangleData.push(k)
	};
	h.prototype.GetMousePosition = function() {
		var l = this;
		var k = l.GetImageControl(l.cCurrentIndex);
		if (null != k) {
			return k.GetMousePosition()
		} else {
			return null
		}
	};
	h.prototype.ChangeImageViewSize = function(k, l) {
		var m = this;
		if (k >= 0) {
			m.imageViewWidth = k;
			m.__ChangeHControlSize(k, 16);
			m.__SetVLocation(k - m.__GetScrollWidth(), 0)
		}
		if (l >= 0) {
			m.imageViewHeight = l;
			m.__ChangeVControlSize(16, l);
			m.__SetHLocation(0, l - m.__GetScrollWidth())
		}
		if (m.canvas) {
			m.canvas.style.width = k + "px";
			m.canvas.style.height = l + "px"
		}
		m.UpdateAllImage(m.aryModelImageControl, m.cCurrentIndex);
		return true
	};
	h.prototype.SetViewMode = function(s, l) {
		var o = this,
			n, q, m = o.imagesPerColumn,
			p = o.imagesPerRow,
			t = o.bSingleMode,
			k = o.bVerticalMode;
		o.bSingleImagePerView = true;
		if (s > 0) {
			o.imagesPerColumn = s
		}
		if (l > 0) {
			o.imagesPerRow = l
		}
		if (s > 1 || l > 1) {
			o.bSingleImagePerView = false
		}
		if (s == -1 && l == -1) {
			o.imagesPerRow = 1;
			o.imagesPerColumn = 1;
			o.bSingleMode = true
		} else {
			o.bSingleMode = false;
			if (l == -1) {
				o.imagesPerRow = 1;
				o.bVerticalMode = false
			} else {
				o.bVerticalMode = true
			}
		}
		o.iOldFirstVisibleRow = 0;
		o.iOldFirstVisibleColum = 0;
		if (o.bSingleMode == false) {
			n = 0;
			for (n = 0; n < o.aryImageControls.length; n++) {
				q = o.aryImageControls[n];
				if (q != null) {
					q.SetOrigMode(false)
				}
			}
		}
		if ((m != o.imagesPerColumn || p != o.imagesPerRow) || (t != o.bSingleMode) || (k != o.bVerticalMode)) {
			if (o.imagesPerRow == 1 && o.imagesPerColumn == 1) {
				n = 0;
				for (n = 0; n < o.aryImageControls.length; n++) {
					q = o.aryImageControls[n];
					if (q != null) {
						q.ClearControl()
					}
				}
			}
			if (o.aryCurrentSelectedImageIndicesInBuffer.length > 0) {
				var r = o.aryCurrentSelectedImageIndicesInBuffer[0];
				if (r >= 0 && r < o.aryModelImageControl.length) {
					o.cCurrentIndex = r
				}
			}
			if (o.cCurrentIndex != -1) {
				o.UpdateAllImageInner(o.aryModelImageControl, o.cCurrentIndex, true)
			}
		}
		if (o.cCurrentIndex != -1) {
			o.__ResetSelection()
		}
		return true
	};
	h.prototype.RemoveAllImages = function() {
		var k = this;
		if (k.bEditorViewer && k._UIEditor) {
			if (k._UIEditor._IfChangedWithinTheEditor == true) {
				k._UIEditor._IfChangedWithinTheEditor = false;
				k._UIEditor.iChangedIndex = -1;
				k._UIEditor.updateButtons()
			}
		}
		return k.Clear()
	};
	h.prototype.Clear = function() {
		var n = this;
		var k = 0;
		var l = n.aryImageControls.length;
		for (k = l - 1; k >= 0; k--) {
			n.__RemoveControl(k)
		}
		for (k = 0; k < n.aryModelImageControl.length; k++) {
			if (n.bEditorViewer) {
				n.aryModelImageControl[k].Clear(false)
			} else {
				n.aryModelImageControl[k].Clear(true)
			}
		}
		n.aryModelImageControl = [];
		if (!Dynamsoft.WebTwainEnv.ScanDirectly) {
			n.__SetVScrollMaxValue(0, 0);
			n.__SetHScrollMaxValue(0, 0);
			n.__SetIfHScroll(false);
			n.__SetIfVScroll(false)
		}
		for (k = a.aryControlLoadImage.length - 1; k >= 0; k--) {
			var m = a.aryControlLoadImage[k];
			if (m.imgControl && m.View == n) {
				m.imgControl.SetBindIndex(-1);
				m.imgControl.Destroy();
				a.aryControlLoadImage.splice(k, 1)
			}
		}
		n.cCurrentIndex = -1;
		return true
	};
	h.prototype.ShowImage = function(l, m) {
		var n = this;
		n.__OnlySetCurrentIndex(l);
		if (n.bSingleMode == true) {
			var k = n.GetImageControl(n.cCurrentIndex);
			if (null != k) {
				n.__GetImageAndAttach(k, m, l, false)
			}
		}
		return true
	};
	h.prototype.__GetImageAndAttach = function(t, p, m, o) {
		var q = this;
		var l = parseInt(q.imageViewWidth / 2);
		var k = parseInt(q.imageViewHeight / 2);
		var s = q.borderWidth;
		if (!s) {
			s = 0
		}
		if (q.imagesPerRow == 1 || q.imagesPerColumn == 1) {
			if (q.bSingleMode == true) {
				l = -1;
				k = -1;
				p.bOriginalImage = true
			} else {
				l = q.imageViewWidth;
				k = q.imageViewHeight;
				p.bOriginalImage = false
			}
		} else {
			if (l < 300) {
				l = 300
			}
			if (k < 300) {
				k = 300
			}
			p.bOriginalImage = false
		}
		var r = false;
		if (o) {
			r = true
		} else {
			if (p.bIsDirty == true || (p.iImageControlWidth + 2 * s) < l || (p.iImageControlHeight + 2 * s) < k || (p.iImageControlWidth > 0 && l == -1) || (p.iImageControlHeight > 0 && k == -1)) {
				r = true
			} else {
				r = false
			}
		}
		t.SetCurrentIndex(m);
		var n = q.__GetImageControlIndex(m);
		if (n >= 0) {
			q.__SetArrayControlLoadImage(n, m, t, p, l, k, q.AttachImagesForControl, r)
		}
	};
	h.prototype.__SetArrayControlLoadImage = function(n, m, t, q, l, k, s, o) {
		var r = this;
		var p = 0;
		for (p = 0; p < a.aryControlLoadImage.length; p++) {
			var u = a.aryControlLoadImage[p];
			if (u.iControlIndex == n && u.View == r) {
				u.iImageIndex = m;
				u.imgControl = t;
				u.modelImageControl = q;
				u.iWidth = l;
				u.iHeight = k;
				u.AttachImagesForControl = s;
				u.bOnlyFromServer = o;
				return
			}
		}
		a.aryControlLoadImage.push(new e(n, m, r, t, q, l, k, s, o, r.BaseUrl))
	};
	h.prototype.SetIfFitWindowAndType = function(l) {
		var m = this;
		if (m.bSingleMode == true) {
			m.bIfFitWindow = true;
			m.enumDWTFitWindowType = l;
			var k = m.GetImageControl(m.cCurrentIndex);
			if (null != k) {
				k.SetIfFitWindow(true, l);
				m.fZoom = k.GetZoom();
				k.Show()
			}
		} else {
			m.bIfFitWindow = true
		}
		return true
	};
	h.prototype.GetAllowMultiSelect = function() {
		var k = this;
		return k.AllowMultiSelect
	};
	h.prototype.SetAllowMultiSelect = function(k) {
		var l = this;
		l.AllowMultiSelect = k;
		return true
	};
	h.prototype.GetFitWindowType = function() {
		var k = this;
		return k.enumDWTFitWindowType
	};
	h.prototype.SetSelectionRectAspectRatio = function(k) {
		var l = this;
		l.ratio = k;
		l.__AttachImagesInner(true, false);
		return true
	};
	h.prototype.SetFitWindowType = function(k) {
		var l = this;
		l.enumDWTFitWindowType = k;
		if (l.bSingleMode) {
			l.__AttachImagesInner(true, false)
		} else {
			l.bIfFitWindow = true;
			l.enumDWTFitWindowType = 0
		}
		return true
	};
	h.prototype.GetIfFitWindow = function() {
		var k = this;
		return k.bIfFitWindow
	};
	h.prototype.SetIfFitWindow = function(k) {
		var l = this;
		l.bIfFitWindow = k;
		if (l.bSingleMode) {
			l.__AttachImagesInner(true, false)
		} else {
			l.bIfFitWindow = true;
			l.enumDWTFitWindowType = 0
		}
		return true
	};
	h.prototype.GetImageMargin = function() {
		var k = this;
		return k.ImageMargin
	};
	h.prototype.SetImageMargin = function(k) {
		var l = this;
		l.ImageMargin = k;
		l.__ReInitChildrenPosition();
		l.__AttachImagesInner(false, false);
		return true
	};
	h.prototype.GetSelectionImageBorderColor = function() {
		var k = this;
		return k.SelectionImageBorderColor
	};
	h.prototype.SetSelectionImageBorderColor = function(k) {
		var l = this;
		l.SelectionImageBorderColor = k;
		l.__AttachImagesInner(true, false);
		return true
	};
	h.prototype.GetZoom = function() {
		var l = this;
		if (l.bIfFitWindow) {
			var k = l.GetImageControl(l.cCurrentIndex);
			if (null != k) {
				return k.GetZoom()
			}
		}
		return l.fZoom
	};
	h.prototype.SetZoom = function(m) {
		var l = this;
		if (m < l.MIN_ZOOM) {
			m = l.MIN_ZOOM
		}
		if (m > l.MAX_ZOOM) {
			m = l.MAX_ZOOM
		}
		l.fZoom = m;
		if (l.bSingleMode == true) {
			l.bIfFitWindow = false;
			l.enumDWTFitWindowType = 0;
			var k = l.GetImageControl(l.cCurrentIndex);
			if (null != k) {
				k.SetZoom(l.fZoom)
			}
		} else {
			l.bIfFitWindow = true
		}
		return true
	};
	h.prototype.ZoomIn = function() {
		var p = this;
		if (p.bSingleMode == true) {
			var o = 15000;
			var l = p.aryModelImageControl[p.cCurrentIndex];
			var m = p.fZoom;
			if (p.bIfFitWindow) {
				var k = p.GetImageControl(p.cCurrentIndex);
				if (null != k) {
					m = k.GetZoom()
				}
			}
			var n = (Math.floor(m * 100 * p.zoomInStep) + 1);
			if (1 < n && n < 2501) {
				if (parseInt(l.imageWidth * p.fZoom) > o || parseInt(l.imageHeight * p.fZoom) > o) {
					b.output(p, j.CustomizableDisplayInfo.errorMessages.limitReachedForZoomIn);
					alert(j.CustomizableDisplayInfo.errorMessages.limitReachedForZoomIn);
					return false
				} else {
					p.SetZoom(n / 100)
				}
			} else {
				b.output(p, j.CustomizableDisplayInfo.errorMessages.limitReachedForZoomIn);
				alert(j.CustomizableDisplayInfo.errorMessages.limitReachedForZoomIn);
				return false
			}
		}
		return true
	};
	h.prototype.ZoomOut = function() {
		var n = this;
		if (n.bSingleMode == true) {
			var l = n.fZoom;
			if (n.bIfFitWindow) {
				var k = n.GetImageControl(n.cCurrentIndex);
				if (null != k) {
					l = k.GetZoom()
				}
			}
			var m = (Math.floor(l * 100 * n.zoomOutStep) - 1);
			if (1 < m && m < 6501) {
				n.SetZoom(m / 100)
			} else {
				b.output(n, j.CustomizableDisplayInfo.errorMessages.limitReachedForZoomOut);
				alert(j.CustomizableDisplayInfo.errorMessages.limitReachedForZoomOut);
				return false
			}
		}
		return true
	};
	h.prototype.GetMouseShape = function() {
		var k = this;
		return k.iMouseShape
	};
	h.prototype.SetMouseShape = function(k) {
		var l = this;
		l.iMouseShape = k;
		l.__AttachImagesInner(true, false);
		return true
	};
	h.prototype.SetMouseShapeByIndex = function(l, m) {
		var n = this;
		n.__OnlySetCurrentIndex(l);
		n.iMouseShape = m;
		var k = n.GetImageControl(l);
		if (null != k) {
			k.SetMouseShape(n.iMouseShape);
			return true
		}
		return false
	};
	h.prototype.GetShowPageNumber = function() {
		var k = this;
		return k.bShowPageNumber
	};
	h.prototype.SetShowPageNumber = function(l) {
		var n = this;
		n.bShowPageNumber = l;
		for (var m = 0; m < n.aryImageControls.length; m++) {
			var k = n.aryImageControls[m];
			if (k) {
				k.SetShowPageNumber(n.bShowPageNumber)
			}
		}
		return true
	};
	h.prototype.SetBackgroundColor = function(k, l) {
		var m = this;
		m.BackgroundColor = k;
		if (m.canvas) {
			m.canvas.style.backgroundColor = k
		}
		if (l && !m.bEditorViewer) {
			return true
		} else {
			m.__AttachImagesInner(true, false);
			return true
		}
	};
	h.prototype.Go = function(k) {
		var l = this;
		if (l.bEditorViewer && l._UIEditor) {
			if (l._UIEditor._IfChangedWithinTheEditor == true) {
				if (l._UIEditor.iChangedIndex != k) {
					l._UIEditor.ShowDialogForSaveImage(k, false, function() {
						return l.__GoInner(k, true, false)
					}, function() {
						return l.__GoInner(k, true, false)
					})
				}
			}
		}
		return l.__GoInner(k, true, false)
	};
	h.prototype.SetCurrentIndexOnly = function(k) {
		var l = this;
		return l.__GoInner(k, true, false)
	};
	h.prototype.__GoInner = function(p, s, t) {
		var n = this,
			r = n.cCurrentIndex,
			k, o;
		if (p < n.aryModelImageControl.length && p >= 0) {
			if (t == false) {
				n.__OnlySetCurrentIndex(p)
			}
			if (s == true) {
				if (t == true) {
					n.__SetCurrentIndex(n.cCurrentIndex)
				} else {
					n.__SetCurrentIndexWithoutRefreshUI(n.cCurrentIndex)
				}
			}
			if (t == true) {
				n.__AttachImages(false)
			}
			n.iCurrentRow = -1;
			n.iCurrentColumn = -1;
			if (s == false) {
				if (n.bVerticalMode == true) {
					var q = n.iCurrentRow;
					n.iCurrentRow = n.__GetRow(p);
					if (n.iCurrentRow != q && (n.iCurrentRow <= n.iOldFirstVisibleRow || (n.iCurrentRow > n.iOldFirstVisibleRow))) {
						var l = n.__GetFirstVisibleRow();
						if (n.iOldFirstVisibleRow != l) {
							n.iOldFirstVisibleRow = l;
							o = l * n.imagesPerColumn;
							n.__fireEvent("onTopImageInTheViewChanged", o)
						}
					}
				} else {
					var m = n.iCurrentColumn;
					n.iCurrentColumn = p;
					if (n.iCurrentColumn != m && (n.iCurrentColumn < n.iOldFirstVisibleColum || (n.iCurrentColumn > n.iOldFirstVisibleColum))) {
						k = n.__GetFirstVisibleColumn();
						if (n.iOldFirstVisibleColum != k) {
							n.iOldFirstVisibleColum = k;
							o = k;
							n.__fireEvent("onTopImageInTheViewChanged", o)
						}
					}
				}
			}
		}
		return true
	};
	h.prototype.SetSelectedImageCount = function(k) {
		var l = this;
		l.aryCurrentSelectedImageIndicesInBuffer.splice(k);
		l.__ResetSelection();
		return true
	};
	h.prototype.SetSelectedImageIndex = function(o, n) {
		var q = this;
		q.aryCurrentSelectedImageIndicesInBuffer[o] = n;
		q.__ResetSelection();
		var l = -1,
			k = q.aryCurrentSelectedImageIndicesInBuffer.length,
			m, p;
		for (m = 0; m < k; m++) {
			p = q.aryCurrentSelectedImageIndicesInBuffer[m];
			if (l == -1) {
				l = p
			} else {
				if (p < l) {
					l = p
				}
			}
		}
		if (l >= 0 && l < q.aryModelImageControl.length && q.cCurrentIndex != l) {
			q.cCurrentIndex = l;
			q.__fireEvent("onResetCurrentIndex", q.cCurrentIndex)
		}
		return true
	};
	h.prototype.__ClearSelectedImageIndices = function() {
		var k = this;
		k.aryCurrentSelectedImageIndicesInBuffer.splice(0)
	};
	h.prototype.__OnlySetCurrentIndex = function(k) {
		var m = this,
			l = m.cCurrentIndex;
		m.cCurrentIndex = k;
		if (l != k) {
			m.__fireEvent("onResetCurrentIndex", k)
		}
		if (m.aryCurrentSelectedImageIndicesInBuffer[0] != m.cCurrentIndex) {
			m.__ClearSelectedImageIndices();
			m.aryCurrentSelectedImageIndicesInBuffer.push(m.cCurrentIndex)
		}
	};
	h.prototype.__MousewheelChanged = function(k) {
		if (k.__MousewheelValue > 0) {
			k.__MousewheelUp(k.__MousewheelValue)
		} else {
			if (k.__MousewheelValue < 0) {
				k.__MousewheelDown(-k.__MousewheelValue)
			}
		}
		k.__MousewheelValue = 0
	};
	h.prototype.__MousewheelUp = function(n) {
		var o = this;
		if (o.bSingleMode == false) {
			if (o.__GetIfHScroll() == true || o.__GetIfVScroll() == true) {
				var l = 0,
					m = 0;
				if (o.bVerticalMode == true) {
					l = o.__GetFirstVisibleRow() * o.imagesPerColumn;
					m = l - n * o.imagesPerColumn
				} else {
					l = o.__GetFirstVisibleColumn();
					m = l - n
				}
				if (m < 0) {
					m = 0
				}
				b.output(o, "__MousewheelUp(baseIndex, index): " + [l, m].join(","));
				o.__SetScrollByIndex(m)
			}
		} else {
			var k = o.GetImageControl(o.cCurrentIndex);
			if (null != k) {
				k.ImageMoveUp()
			}
		}
	};
	h.prototype.__MousewheelDown = function(n) {
		var o = this;
		if (o.bSingleMode == false) {
			if (o.__GetIfHScroll() == true || o.__GetIfVScroll() == true) {
				var l = 0,
					m = 0;
				if (o.bVerticalMode == true) {
					l = o.__GetFirstVisibleRow() * o.imagesPerColumn;
					m = l + n * o.imagesPerColumn
				} else {
					l = o.__GetFirstVisibleColumn();
					m = l + n
				}
				if (l + o.imagesPerColumn * o.imagesPerRow < o.aryModelImageControl.length) {
					b.output(o, "__MousewheelDown(baseIndex, index): " + [l, m].join(","));
					o.__SetScrollByIndex(m, true)
				}
			}
		} else {
			var k = o.GetImageControl(o.cCurrentIndex);
			if (null != k) {
				k.ImageMoveDown()
			}
		}
	};
	h.prototype.__Previous = function() {
		var k = this;
		k.Go(k.cCurrentIndex - 1);
		return true
	};
	h.prototype.__DoLeftArrow = function() {
		var l = this;
		if (l.bSingleMode == false) {
			l.Go(l.cCurrentIndex - 1)
		} else {
			var k = l.GetImageControl(l.cCurrentIndex);
			if (null != k) {
				k.ImageMoveLeft()
			}
		}
		return true
	};
	h.prototype.__Next = function() {
		var k = this;
		k.Go(k.cCurrentIndex + 1);
		return true
	};
	h.prototype.__DoRightArrow = function() {
		var l = this;
		if (l.bSingleMode == false) {
			l.__SetCurrentIndexInner(l.cCurrentIndex + 1, true)
		} else {
			var k = l.GetImageControl(l.cCurrentIndex);
			if (null != k) {
				k.ImageMoveRight()
			}
		}
		return true
	};
	h.prototype.__PreviousUp = function() {
		var m = this;
		if (m.bSingleMode == false) {
			var l = m.cCurrentIndex - m.imagesPerColumn;
			if (l >= 0) {
				m.Go(l)
			}
		} else {
			var k = m.GetImageControl(m.cCurrentIndex);
			if (null != k) {
				k.ImageMoveUp()
			}
		}
		return true
	};
	h.prototype.__NextDown = function() {
		var m = this;
		if (m.bSingleMode == false) {
			var l = m.cCurrentIndex + m.imagesPerColumn;
			if (l < m.aryModelImageControl.length) {
				m.__SetCurrentIndexInner(l, true)
			}
		} else {
			var k = m.GetImageControl(m.cCurrentIndex);
			if (null != k) {
				k.ImageMoveDown()
			}
		}
		return true
	};
	h.prototype.__PageUp = function() {
		var n = this;
		if (n.bSingleMode == false) {
			if (n.bVerticalMode == true) {
				var l = n.__GetFirstVisibleRow() * n.imagesPerColumn;
				var m = l - n.imagesPerColumn * n.imagesPerRow;
				if (m >= 0) {
					n.__SetCurrentIndexInner(m, false)
				} else {
					n.__SetCurrentIndexInner(0, false)
				}
			} else {}
		} else {
			var k = n.GetImageControl(n.cCurrentIndex);
			if (null != k) {
				k.ImageMovePageUp()
			}
		}
		return true
	};
	h.prototype.__PageDown = function() {
		var n = this;
		if (n.bSingleMode == false) {
			if (n.bVerticalMode == true) {
				var l = n.__GetFirstVisibleRow() * n.imagesPerColumn;
				var m = l + n.imagesPerColumn * n.imagesPerRow;
				if (m < n.aryModelImageControl.length) {
					n.__SetCurrentIndexInner(m, false)
				} else {
					n.__SetCurrentIndexInner(n.aryModelImageControl.length - 1, false, false)
				}
			} else {}
		} else {
			var k = n.GetImageControl(n.cCurrentIndex);
			if (null != k) {
				k.ImageMovePageDown()
			}
		}
		return true
	};
	h.prototype.__Home = function() {
		var l = this;
		if (l.bSingleMode == false) {
			l.__SetCurrentIndexInner(0, false)
		} else {
			var k = l.GetImageControl(l.cCurrentIndex);
			if (null != k) {
				k.ImageMoveHome()
			}
		}
		return true
	};
	h.prototype.__End = function() {
		var l = this;
		if (l.bSingleMode == false) {
			l.__SetCurrentIndexInner(l.aryModelImageControl.length - 1, false)
		} else {
			var k = l.GetImageControl(l.cCurrentIndex);
			if (null != k) {
				k.ImageMoveEnd()
			}
		}
		return true
	};
	h.prototype.__fireEvent = function(k, l) {
		var m = this;
		if (a.isFunction(m[k])) {
			return m[k](l)
		}
		return true
	};
	h.prototype.AddImageInner = function(n, l, r) {
		var o = this,
			p = n * 1,
			q, s, m, k;
		s = o.GetDataImageControlList();
		q = s.length;
		if (p < 0 || p > l) {
			return false
		}
		m = p;
		for (; m < q; m++) {
			k = s[m];
			k.imageIndex = (m + 1)
		}
		k = new a.UI.ModelImageControl();
		k.bIsDirty = true;
		k.rawWidth = r;
		if (p >= q) {
			k.imageIndex = q;
			p = q;
			s.push(k)
		} else {
			k.imageIndex = p;
			s.splice(p, 0, k)
		}
		o.__bAddingImage = true;
		o.UpdateAllImage(s, p, p, q);
		o.__bAddingImage = false;
		return true
	};
	h.prototype.AddImage = function(l, m, k) {
		var o = this,
			n = l * 1;
		return o.AddImageInner(n, m, k)
	};
	h.prototype.RemoveImage = function(l, k) {
		var n = this,
			m = l * 1;
		if (n.bEditorViewer && n._UIEditor) {
			if (n._UIEditor._IfChangedWithinTheEditor == true) {
				if (n._UIEditor.iChangedIndex != m) {
					if (n._UIEditor.iChangedIndex > m) {
						n._UIEditor.iChangedIndex--
					}
					n._UIEditor._IfChangedWithinTheEditor = false;
					n._UIEditor.iChangedIndex = -1;
					n._UIEditor.updateButtons()
				} else {
					n._UIEditor._IfChangedWithinTheEditor = false;
					n._UIEditor.iChangedIndex = -1;
					n._UIEditor.updateButtons()
				}
			}
			return n.RemoveImageInner(m, k)
		} else {
			return n.RemoveImageInner(m, k)
		}
	};
	h.prototype.RemoveImageInner = function(m, k) {
		var o = this,
			p = m * 1,
			r = k * 1,
			q, t, s;
		if (typeof(p) === "undefined" || p < 0) {
			return
		}
		t = o.GetDataImageControlList();
		q = t.length;
		if (q == 1) {
			o.RemoveAllImages();
			return
		}
		if (p >= q) {
			p = q - 1
		} else {
			var n = p,
				l;
			for (; n < t.length; n++) {
				l = t[n];
				l.imageIndex = (n - 1)
			}
		}
		s = t.splice(p, 1);
		if (s && s[0]) {
			s[0].Clear()
		}
		o.UpdateAllImage(t, r, p, q - 2);
		return true
	};
	h.prototype.MoveImage = function(m, u, l) {
		var p = this,
			s, t, o, n, r, q, k;
		t = p.GetDataImageControlList();
		s = t.length;
		o = m;
		r = t[m];
		for (; o < t.length; o++) {
			n = t[o];
			n.imageIndex = (o - 1)
		}
		t.splice(m, 1);
		o = u;
		for (; o < t.length; o++) {
			n = t[o];
			n.imageIndex = (o + 1)
		}
		t.splice(u, 0, r);
		r.imageIndex = u;
		if (l) {
			return true
		}
		if (m < u) {
			q = m;
			k = u
		} else {
			q = u;
			k = m
		}
		p.UpdateAllImage(t, p.GetCurrentImageIndex(), q, k);
		return true
	};
	h.prototype.MoveMultipleImages = function(k, x, l) {
		var p = this,
			m, n, w = [],
			v, t = [],
			o = [];
		v = x;
		if (k[0] > x) {
			for (n = 0; n < k.length; n++) {
				m = k[n];
				w.push([m, v]);
				o.push(v);
				v++
			}
		} else {
			if (k[k.length - 1] < x) {
				for (n = k.length - 1; n > -1; n--) {
					m = k[n];
					w.push([m, v]);
					o.push(v);
					v--
				}
			} else {
				var r = [],
					u = [];
				for (n = 0; n < k.length; n++) {
					if (k[n] < x && x < k[n + 1]) {
						r = k.slice(0, n + 1);
						u = k.slice(n + 1)
					}
				}
				if (u.length > 0) {
					for (n = 0; n < u.length; n++) {
						m = u[n];
						w.push([m, v]);
						o.push(v);
						v++
					}
				}
				if (r.length > 0) {
					v = x - 1;
					for (n = r.length - 1; n > -1; n--) {
						m = r[n];
						w.push([m, v]);
						o.push(v);
						v--
					}
				}
			}
		}
		o = o.sort(function(A, z) {
			return A - z
		});
		if (l) {
			p.aryDragDropPairs.push.apply(p.aryDragDropPairs, w)
		}
		var s = false,
			q = false;
		if (l) {
			for (n = 0; n < w.length; n++) {
				s = p.MoveImage(w[n][0], w[n][1], true)
			}
		} else {
			for (n = 0; n < w.length; n++) {
				q = p._stwain._innerFun("MoveImage", Dynamsoft.Lib.html5.Funs.makeParams(w[n][0], w[n][1]));
				if (!q) {
					b.output(["Actual moving from ", w[n][0], " to ", w[n][1], " failed after the dragdrop action!"].join())
				}
			}
			if (q) {
				p._stwain._innerFun("SelectedImagesCount", Dynamsoft.Lib.html5.Funs.makeParams(o.length));
				for (n = 0; n < w.length; n++) {
					p._stwain._innerFun("SetSelectedImageIndex", Dynamsoft.Lib.html5.Funs.makeParams(n, o[n]))
				}
				for (n = 0; n < w.length; n++) {
					s = p.MoveImage(w[n][0], w[n][1])
				}
			}
		}
		if (!s) {
			return false
		}
		if (s) {
			var y = [];
			y.push(o);
			y.push(w);
			return y
		} else {
			return false
		}
	};
	h.prototype.GetCurrentImageIndex = function() {
		return this.cCurrentIndex
	};
	h.prototype.GetSelectedIndexes = function() {
		return this.aryCurrentSelectedImageIndicesInBuffer
	};
	h.prototype.HowManyImagesInBuffer = function() {
		return this.GetDataImageControlList().length
	};
	h.prototype.SwitchImage = function(m, l) {
		var q = this,
			k, p, o, n;
		p = q.GetDataImageControlList();
		k = p.length;
		if (m < p.length && m >= 0 && l < p.length && l >= 0) {
			o = p[m];
			o.imageIndex = l;
			n = p[l];
			n.imageIndex = m;
			p[l] = o;
			p[m] = n;
			q.UpdateImage(m, n.imageToShow, n.imageWidth, n.imageHeight, n.aryOverlayRectangleData, n.imageUrl);
			q.UpdateImage(l, o.imageToShow, o.imageWidth, o.imageHeight, o.aryOverlayRectangleData, o.imageUrl)
		}
		return true
	};
	h.prototype.GetIfAutoScroll = function() {
		return this.__IfAutoScroll
	};
	h.prototype.SetIfAutoScroll = function(k) {
		this.__IfAutoScroll = k ? true : false;
		return true
	};
	h.prototype.handlerKeyDownView = function(l) {
		var m = this,
			k = true;
		if (!m.bFocus) {
			return k
		}
		m.iCurrentRow = -1;
		m.iCurrentColumn = -1;
		switch (l.keyCode) {
			case 37:
				k = false;
				m.__DoLeftArrow();
				break;
			case 39:
				k = false;
				m.__DoRightArrow();
				break;
			case 38:
				k = false;
				m.__PreviousUp();
				break;
			case 40:
				k = false;
				m.__NextDown();
				break;
			case 33:
				k = false;
				m.__PageUp();
				break;
			case 34:
				k = false;
				m.__PageDown();
				break;
			case 35:
				k = false;
				m.__End();
				break;
			case 36:
				k = false;
				m.__Home();
				break;
			case 82:
				break;
			case 107:
				m.ZoomIn();
				break;
			case 109:
				m.ZoomOut();
				break
		}
		if (k == false) {
			a.stopPropagation(l)
		}
		return k
	};
	a.UI = a.UI || {};
	a.UI.ImageUIView = h;
	var c = function(l) {
		var k = true;
		a.each(f, function(m) {
			if (m instanceof a.UI.ImageUIView) {
				if (m.bFocus) {
					k = m.handlerKeyDownView(l);
					if (!k) {
						return false
					}
				}
			}
		});
		return k
	};
	a.addEventListener(document.documentElement, "keydown", c);
	a.aryControlLoadImage = [];
	a.imageControlCount = 0;
	a.AttachAndShowImage = function() {
		if (Dynamsoft.WebTwainEnv.ScanDirectly) {
			return
		}
		if (a.aryControlLoadImage.length == 0) {
			setTimeout(a.AttachAndShowImage, 500);
			return
		}
		var m = 0;
		var o = a.aryControlLoadImage[0];
		a.aryControlLoadImage.splice(0, 1);
		if (o.iControlIndex >= 0 && o.iControlIndex < a.imageControlCount) {
			var l = 2,
				k = o.iWidth,
				n = o.iHeight;
			if (k > l) {
				k -= l
			}
			if (n > l) {
				n -= l
			}
			if (o.bOnlyFromServer) {
				a.OnGetImageFromServer(o, o.modelImageControl, o.iImageIndex, k, n, o.BaseUrl, o.AttachImagesForControl)
			} else {
				a.OnGetImageByURL(o, o.modelImageControl, o.iImageIndex, k, n, o.BaseUrl, o.AttachImagesForControl)
			}
		} else {
			setTimeout(a.AttachAndShowImage, 0)
		}
	};
	a.OnGetImageByURL = function(t, m, p, r, o, q, l) {
		var k, s, n = t.imgControl;
		if (l) {
			if (m.imageUrl && m.imageUrl != "") {
				n.ClearImage();
				n.SetBindIndex(p);
				s = new Image();
				s.src = m.imageUrl;
				s.onload = function() {
					n.tmpImage = false;
					m.imageToShow = s;
					m.imageWidth = s.width;
					m.imageHeight = s.height;
					m.iImageControlWidth = r;
					m.iImageControlHeight = o;
					m.bIsDirty = false;
					l(n, m, p);
					s.onload = undefined;
					s.onerror = undefined;
					setTimeout(a.AttachAndShowImage, 0)
				};
				s.onerror = function(v) {
					var w = n.GetBindIndex(),
						x = t.View,
						u;
					u = x.GetDataImageControlList().length;
					if (w >= 0 && w < u) {
						s.ready_src = m.imageUrl;
						setTimeout(function() {
							if (s.ready_src) {
								s.src = s.ready_src
							} else {
								s.src = "data:,";
								s.onload = undefined;
								s.onerror = undefined;
								s = null;
								n.tmpImage = false
							}
							s.ready_src = undefined
						}, 3000)
					} else {
						s.src = "data:,";
						s.onload = undefined;
						s.onerror = undefined;
						s = null;
						n.tmpImage = false;
						setTimeout(a.AttachAndShowImage, 0)
					}
				};
				if (n.tmpImage) {
					n.tmpImage.src = "data:,";
					n.tmpImage.onload = undefined
				}
				n.tmpImage = s
			} else {
				a.OnGetImageFromServer(t, m, p, r, o, q, l)
			}
		} else {
			setTimeout(a.AttachAndShowImage, 0)
		}
		return true
	};
	a.OnGetImageFromServer = function(t, m, p, r, o, q, l) {
		var k, s, n = t.imgControl;
		if (l && q) {
			n.ClearImage();
			n.SetBindIndex(p);
			k = b.getImageUrl(q, p, r, o);
			s = new Image();
			s.src = k;
			s.onload = function() {
				n.tmpImage = false;
				m.imageToShow = s;
				m.imageWidth = s.width;
				m.imageHeight = s.height;
				m.imageUrl = k;
				m.iImageControlWidth = r;
				m.iImageControlHeight = o;
				m.bIsDirty = false;
				l(n, m, p);
				s.onload = undefined;
				s.onerror = undefined;
				setTimeout(a.AttachAndShowImage, 0)
			};
			s.onerror = function(v) {
				var w = n.GetBindIndex(),
					x = t.View,
					u;
				u = x.GetDataImageControlList().length;
				if (w >= 0 && w < u) {
					s.ready_src = b.getImageUrl(q, n.GetBindIndex(), r, o);
					setTimeout(function() {
						if (s.ready_src) {
							s.src = s.ready_src
						} else {
							s.src = "data:,";
							s.onload = undefined;
							s.onerror = undefined;
							s = null;
							n.tmpImage = false
						}
						s.ready_src = undefined
					}, 3000)
				} else {
					s.src = "data:,";
					s.onload = undefined;
					s.onerror = undefined;
					s = null;
					n.tmpImage = false;
					setTimeout(a.AttachAndShowImage, 0)
				}
			};
			if (n.tmpImage) {
				n.tmpImage.src = "data:,";
				n.tmpImage.onload = undefined
			}
			n.tmpImage = s
		} else {
			setTimeout(a.AttachAndShowImage, 0)
		}
		return true
	};
	setTimeout(a.AttachAndShowImage, 500)
})(Dynamsoft.Lib);
(function(a, h) {
	if (!a.product.bChromeEdition) {
		return
	}
	var k = a.DOM,
		g = window,
		i = Dynamsoft.WebTwainEnv,
		e = {
			navigating: ["previous", "next", ""],
			io: ["scan", "load", "print", ""],
			removing: ["removeall", "removeselected", ""],
			rotating: ["rotateleft", "rotate", "rotateright", "deskew", ""],
			editing: ["crop", "erase", "changeimagesize", "flip", "mirror", ""],
			sizing: ["zoomin", "originalsize", "zoomout", "stretch", ""],
			fitting: ["fit", "fitw", "fith", ""],
			cursor: ["hand", "rectselect", "zoom", ""],
			confirming: ["restore", "save", ""],
			close: ["close"]
		},
		c = 32,
		d = {
			changeimagesize: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEP0lEQVR4AbWWb4hU1RvHP89zzp2ZtSKCpFf+IijoVWZ/UEpTDFNJN2S1MCsqCtJ8oWRLlvqj0gh9YUWJRESCEpmhqZT5D9qWNgnsjy/EFMpEArHVyNXZmbn3aZt7GMzLzt5p7QOX82Y4n+95zvOcXU8WP2X59k9qibTHifFf4FTwatv3vNre4cnS9rd807IZVKogwmXFDAoRzFu5sx1o82QpxYnV5Ru/OV5PezmJE+ORcdcTqlvyZBEAEYic1j/h8mBANU4urqr4ZqUqeUchco1U1mR1IogIWamRJFY/sZkhYW8CniYUI2X9th4WPzieNzZ3s2iQdfFDE1i3tQcRqctC4gY3jxrJxFtvCKcXIGcAp1qXGDRdVVPx6sfGUjFBFZRQIRGWbuhhyp03YgB5A5iBV0GhgQyyYtD58ESWbOiic/ZtrNlzjMhp/cSdU28CoOBdPaSK5b+CSAWnkmuui07wCn1V4+oRRbymAXrPx4ike8XhQPkqQDoFQwVwqpQKjhUf7Gfe9DF89N0pSsUiKqCJpQGAgnPELkkrkLcHCl5RkSHlL7y3l8dn3s7uw720lSI0TIRWKpyppI0XeaUWK06thR5wikpz+XPrd/PUrHHsPdJLqZDKUeHkkaMYcFVBU5GT+peYDN0DdlEFZBB5W8Gz8J3PmT/7bvYdPUupGOSi/PT9Id56djrAwG92NRo6copZnh5IDBEoOXfJ1Agq1OVPv7mThXMn8uWxPxhR9IgIqHLowEHWLbyf8/01AN6ePw2nQrlSI1LFIBtg8jOvuf/dMn5sHNfiEz92+6gt4sTpPnrP9WcnwzkWvbubJ+ZMoueXc5QKqVxU+bb7AO8vmknfgFzFQmRj7upP2bSkHTAg+xJGo8ZMOlmu2cgYZeToyZjB2h0HScy4FK9KYnCuKhSLBVRA1NG9/ys2LnkgyEGdht8L217qoL9aw5xm9wOu6B+Qf7jgLlph9PNbuW/GvQjCvs/2snnpLPrK6cz7IBIgihztK7ewbVkHgcwYFsKfRrYe/g2ngtAcA35YM4s7lm4HM7a8mMoTSzJTIxi7Xp5DfzUNJzRpwisjV08vQ8hrcQLAqOuuYe2TE/hzQB4nCZBFRJi64mN2rAgVaBagECmRKkOhCoQg/VUjHlgHw8z44pW0AkMESMfO53n7RQAwMgyvAqUcbz+Alybq4VSgGLlwuubEZtBAEBEwI4OAijDt/wMVWN4RmlCQQQM4RXMESILMOaGtCM55BsMp7F81hziBKDztpSJppTMBvEOFHAFo/JPx6KodILRAKrfy2S7ALgmgufYyUlSFrtfbpwNVWqMGnAbK/2xCr7SCmQH8DJyhNQwoAxeyAXLNFikGQX6Kf4kn3EljvqW1uxwuHrCk70zX3HVf3xMn1pLcJ5XjgA03QHlz54wFwLWAJz8J8DtQGW6AC8Cv4R6F/FiQn2cY/AUQ8amPuyKrBgAAAABJRU5ErkJggg==",
			close: "data:image/png;base64,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",
			crop: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADwElEQVR4Ab2WS4wUVRSGv3Pu7XkoBBdKoibuXLnQhZpZkEFBeS1A4kYgJrrVpSufkUETwLU7NxJlZyI+aBwxmgmJGh+JG+LCCAHBpgW6kUFmmqp77DqppOIwoW269EsqX25q8Z/7OLeKCuL6mcOHHpk5YtO7m1a4GAORehnbeeC4Pb7/KwPGlIrJHN26Z9fDzOx4iMLFGJisM3zXez8v/tFq073QAbg1ljP/wCRs7WU51/rP8wd/4u2d95Plif5K/JnMqAMFWmdaXLrY5ft926cAIuXM33x6ihfeOUZuMDEe3Xky9j4zRZbnjIRBAoIqrx/8th/+xDRwBrgSgQkzYzFLJDMPDaq4BfY0fyHlacR841puvLrlXlKCMrwN9CIgKoKooioUWTEoueHj8fEGjLAFKRl5SiBGMgADmAd6ABGw/Epnbs/730w3gnhw0OCFiAgLrRbDYmZuAXp54qWnptj3+a9kieuIwMLcvh3PAXet3d2czQxCUAoDzL68cTNwjeFo9E9789zZFnb1Kr3MEFHS8gVwFTgF9AB8CzS4S04AnSH7/HS7H94532HlikkyM0IQ93IFZMBlYFKA3AwN4hagDG//2/AdB457n3cudPlh//Ztj84cOZQnQVUpvBSlAgTycgsKIwyDh58vLhnvc2+13wwjWSKouJcS+SdVF6SbD/9ur4efAMAgRwiqbrnhCgAJIYTgHjHc+xzAWzoENzcqQIDkbahuqSEcICVQETeDViAH/MDUFA6Q4ZNyM3ALTIhB3XWEi0AyIQRxiwxaAROCBvdo4RUGqAb3wC5ICDGqu45woLzexQ2DuwBVddcRXq2qugcWYEAIwY1Zdb0WN9zv54YOBzAEUXHD4DNALKs1syXhl4YOB0hAkOAeWAAIquIWoP9VO93uh3f8eh0+HMDKLih8w0MoGDlCCOpGhOKTevF8lx/f2n5T4QIQImPjY25Z7n3J6nUzh89t2riGM91F7lzV4ONP5ogxguBgDE0yI+UJwxAEDUoMimIfffHalicjS8hR74L5BePFZzdiCKNjVAgxBva/O+u//JHrEK9wMcGXJ//CjFpJwIN334KZAUxEKhARtDHG+KQgNQXbMuMFC6gIgEQqLJvvzs1+enTaapy2lWegsE9Qla9Vya505wATKlYC9wC3A5F6aDz2xpHm5m0bmF/IWTERaB6a5egrmzYAZ4FTVVD1c9oGhHpY1bt84djhDz9bU64Agl0CTgItz/yPWQncB6wF1gPrgAeA2/ifiGURdwCr/fFwGpT8Da2vQ8jSORl7AAAAAElFTkSuQmCC",
			crop_grey: "data:image/png;base64,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",
			deskew: "data:image/png;base64,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",
			erase: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MERFRDQ0QURCRTBDMTFFN0I1OTc5MjlGMDRDRkVDNzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MERFRDQ0QUVCRTBDMTFFN0I1OTc5MjlGMDRDRkVDNzYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowREVENDRBQkJFMEMxMUU3QjU5NzkyOUYwNENGRUM3NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowREVENDRBQ0JFMEMxMUU3QjU5NzkyOUYwNENGRUM3NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pol2CTQAAASKSURBVHja7FdLbBtVFL2ej39xbCeuaRKFj0ggatNs2oZ0QYtUgRRUfhUElZYtILUFVWz4qOtukapuYcsGuqmAIqRkgRBIVUtQpApIUyep//Enjj/1zPi96b1vZlwn5OOERTYZ5eq9ceR37j333HufXaZpwm4+Euzys+fArjugOJvxKz+0/y3SrUvsTuD+F1zd9nvbJ9z88pS0yoEdPIOqLH13+Z1R98iT3WCiAxwdM00O9MKxuriDRh/h+zdTd2FyJs5bmd+pA1G0nz54eTg60NsFf+c1aCC6wdAaHAxur4yLlf43fS8J07Nx3h0KSIVS5X9pwIN03zh9bGDwxHA/JMqGAGgwMgus0WBiZbTHyGOpggAPBwOS1++xUrhDByjTXx8/0Df23ovPw4MVA3RmgRsOOO7xD/cUvQnpfBl+m7lvBgM+yY/gqqJAq16UVcJaC7VacPRcGeoLn7swfgiSCK4hvUwA2sYtFgzBAodSTYOpO7Pg9qiuzoAfZFkGWZLxOBfsRAMf9XZ1fP7F6aOQq5tQ1blFO0ZKYMxJg+1ETW/A5O1/wSW7AKkHGSNXFRkUXM2WaNtNwcmg33318ttHQcOvlB5ijvGMVlBHgLTXUQNTt2ehqunQFe5EUFlEL5HhfruNaESRpeufvXXY7ff7IFdjApiJnNsssMeOMPzsj7sLkFupQjQSEjmXKXJVBlVVBQvbcaDP5YIfL46PhJ5+IgRpVLyIupVuLHJSuqgANCq3uXgOovtCIt8CXFaEyZIEnJnrd8J1Hj/a9XPHh/rHhnphcaVhg/PmKpwQtFuqn88UsdwSAlwVOSdgFemXROR1zYDYQoLhuZ9u5QDx9O3JQ/1jb77wLMyXjGZ+uRO5LTahBVzThSr8+tccRLqD4HGrQmwyRa5YeS9Xa7CwmKpwbp7Fs2/814HVvfzqyFORNz58ZRiSFax1W+VUak26G49zT+U2eecfoFLzed0CWJScagmvWChBIrWUxHNPoU1vlYKDaOdnFvNw5quf1/aBDR8CDwR8InLFLjcJqU+llyBfKE3jOa/jOfENp2HLM/Hq4Wfg/ZcO4EDhgKkVkXOi3242dItz3r//fRZu3c9hrfsx37IwYgBQvYsPMlAuV2nMnkGrbDqOWx04MrgfYkUNqceaRropBVTbtBLltDdsLdy6l4VAsEM0GkWh3EvCwVgsAfW6fg2jvoRnsnYvJAcjnd7hnkjQAmhOM94sP4OxZq9fKpahjh3P7/MIcBnBdYPDXCzO6pr+CZ738Wbg6zEwMfrcfijXmTVMRG1b0Rq24BiVHDPF7I8vLUNHh1cIjiKv1XSIJ9MVrJSzNDG3dSOyxTZxZKAHqga3Qa0ad+a74ww5QdpI5UqwLxrGLqdAcbkMmWwhgae8tlbp7d4JBf2RcKB5kTDsvm51OQuY2XM+j5cKzTCw7HyQyRQgmy0S6LHtgK/tAxOjgz2wjIOG5rjlhEO72UyJuGohW0mk3+v1QDKVhUr14aZKb1cD7978cx7INr6LrPsr6hrapa3EtuENZ++n2Z4Du+3AIwEGAK2p9mIKnaPYAAAAAElFTkSuQmCC",
			erase_grey: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MERFRDQ0QjFCRTBDMTFFN0I1OTc5MjlGMDRDRkVDNzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MERFRDQ0QjJCRTBDMTFFN0I1OTc5MjlGMDRDRkVDNzYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowREVENDRBRkJFMEMxMUU3QjU5NzkyOUYwNENGRUM3NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowREVENDRCMEJFMEMxMUU3QjU5NzkyOUYwNENGRUM3NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgQyrfUAAAPASURBVHja7FdLTxNRGP2YQjttebW00FaQBUgE1IoJ8jBx4dbHDmL0B5i4Ulf+An8AunXtAsMCoi78E65IZEECLaWChT6m08fMveP33U47wxBpCws2TDi5A03vOd+5597v0mEYBlzmI8ElP1cCLl1AZ/1ldXX1PN9/iPiJcLfzJQy+sby8LJ0QcI5nXJKkrwsLi+5QOISz0o9Bk1vgNPLG75ubm5BIJnmHzfnzCggjfsTj8XB/IACZzDFoTAddR2g0ajhqUNVqo4Yo5PNQLCp8YCAkZTJ/L5QBD2JjYmJifHjkOuQLBdAZA0bQGXBTiIZgeu1dVVVBHggEJdnrvVAI0T34PDIyMndzchJySK7pFjljNWLdhlK5hNXnjN6+Psnn94PL5bqQgA/BYPDl3ZkZyCuKsJYqFgKYnVgT1VcqFchls4DEHT09PYLcKaCdDLzy+/3v5+bmQS2VoVrRBDHZrzuq1tENEpfNHoPs8UB/f6BBfl4HHsmyvLK4+AAYprpUrphVW9bbBVD1x0cZwF0CwYEQSC7pQgJu40Rrs7P33a6uLgxTCW23yJ3EBKqc47YbHBwUIohUsqEdATHE95mZe30YIlCUIjDOTqx5YzSTn8/ncHkqSD6E5FbVneZImWk1Az7E2tTU9HDsWgyyuULDdp3V1pnZqidytVgUGByKQGenRe5CF8iJarkMO7s7DOd910wA+fRldHR0bvzGOGTziggb5+aa161nWkNABbdbPpeFgVAY3G73iTUn4DkAyURC4Zy/oHOkmYCVcDj87E48DgW0nbZVY91tluumENpux0dHgAcNePGgOUkuic/S6f0UzvsY8avZEkwhXh8eHsLG+nrLe5Qy4uv2i5DVycn2dDpNAoj0KSL5325oe5bGxsZgevpWrblws7HY30WDEV0NtrZ+Yy84gt7ePouYko5nJlqOwS18wzmfI5Qz27FdQCQaQ+sVTDy3WW9mgHExcvoMkUqlcN1Dwuq6APp7MrGLuSh/wvneIFjT+0DdflzD6e6ebiiXSiaJReaEWlTF6PHIjbRrmIdkMoER0d/ifB9bvpDUq4/FYlCtYujQbo7VMocIQ6C2FDlMvc/nb1SuqkXYT6VOJb0tAZFIpJb6eqXMUblRA4koYDccikQFOTWdg4M/ezjHE2fSW70TCvupZXJ22npDjFYQ1ZIqcuH1ynB4cEDkRDrfDrnTgaVoNIrHaFUQOsMmqq5XjwLohuORZUjtpeiQOTPprQpY3t7eBkKbT9Okn3nDufrX7ErAZQv4J8AAmPoCVmSxe4kAAAAASUVORK5CYII=",
			fit: "data:image/png;base64,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",
			fith: "data:image/png;base64,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",
			fitw: "data:image/png;base64,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",
			flip: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFOklEQVR4Xr1XW2xURRj+zmVvbLftInQpdNtKhbZc2qUUEVraci2UKCkgSE3FBFSCPkgUqKYkEBVtmqhowgMSQ6IJeCEklCakIlZBIpJYCSamEdAgiVwMjdDS7bnMOL897e7mnJSGLk7y5cyZmcz3/dezK8F5qAI+Aa+AhJEPTaBHQE9YHeLygED2mqZje+WUYIXJ+IjYFVmCV5VvHHhhTshuqfMgy8cQ+cHNc5GMsW7vmQx6DleARHsDljNw6IYAY9BMDoNx8WQwTFoz+98NsccG9szBM706w8opmaC7hhAwfEgWZAlwKTLcbpnIgKgOZjDQ4FyGBA6i1M2hwyfjPocqyAM+Fct2HccTb7Yh4HVBkWWnBEu2AIvcq2KpIK9dUoq1SyIkAn6vYhORdAFEnirI5zYcRWFpETqvd+PM5S5sWlGCVbtPwO8hEVLSBNgtdyuYufUI5i0sh8wZiEsR+PTsVeyqexSr3z4Bn0clEckVQNe5hYCprxxBTe0yQRwj4AJlE4Pg4Di4ZQHqm7+hBLWRjagKuFWOtbNz0db6FXyqhPySYhIGxjnyQn40ffkTVQQqi8aDPYgQUK03rirGj289Dp0BUpwXaMY58FnDIqxfOAmGwZIvgDGOqG5C43BsLOQJjfYNk+bJEmCPBR/ics4J1vxBCOAWHNfJM5zacX/b1k1G8/tOQq5YmUyN1aMKxPRS/B1LZdqYFIBgL+FhCyAWhTi0u713avecCuhxCUW8HpcClyLZytQly1j94Wn06Sa4tQZY3wxZQtXOz1Pad67pvpcAt0BqUe32pQXjHwpsrCmGYcZYiMjnBtY2HbMnIRg+2FCOqJa4Tsbvaz2Pa1f/qgXwyb0E+ATSAzlFK8umhfHPXR1dvTpMK56cFKoKOHduVu2dt9AdFedZ/3n6GkbC6Zg3PRtnLvyxhQQMlYSKgD8QCocyQhkT88Oj0d1nQLJcLxNATwkSnAVQC1YJigyXhc5rt1GYE8ToNP+MyLPvpQ8lwCsQnLTspXXVs/LQo5kJlhKxy6WQByA79HpJEoQq5YcymKR0LGqY+PNWVHghB8HMnHfsAmJzPwnwhyaviEzORFQzbJl8+Ltfse2jNiEmsR/QjN6bD53CyY5L5Ik44TJ+u3EbFcU5YFDqSKuTAJdAoLDmxYqZ+Vm+tFEeGCZPcC8JOtt5FfNrFiFS9hg4Y+CWZy5d78G21SXYv7kSv/x+PaFMScvfdzRwsTZz8oRA1dYvljsJ8Aikp+YWLZ47PWyznojIve9vqkbb0eMJoSGq7y93kRDU7zmJLU+WUxLaKuHSzW6U5I+D5HK9HBOQ6P7UtLHhihmTQtBM0xZjurRXM9H8fDV+aD8NLslgHDAF6mdn4Y1D57B9XQU0wwBL7IDkEVy+eQelBRPgcXsWDnDL8ckXqdv5VHlRNqJ98cnnLGL3hsW42HEBBeMCKMsLYn9rBxrqnMkJkhWq81e6UBnJQVXDYSpJqNbeKIHRqdkznqkuzYNu2Ky3iTA0htfqK7Hj46/JOrz+dCV6+nQH8oQqEtXQgzlTs9B27uIuAO/KloiUzMLyh7NCqd60FC9dMrxPs2agsb6KLEdUt1vu5AbNZOhhQHhsmn/B1gMTB/4DBnPnr39u6axHbNbzODAeDw6TEQDDZIPvBrPWOaMqorm1F9v/+cotVM/Ow/6WriYJwBiBKQsaj32779XloOrhLF51rGid1+z7jh9KKfG8wYCNza00R7pA7pIdLe06R5ppcjzoQaSyIkOVWAvNXVYJuvH/DS4QFej9Fz5HPBnT86YSAAAAAElFTkSuQmCC",
			hand: "data:image/png;base64,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",
			load: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTY5MTY2QkU1OUJFMTFFMkI2OUFDMDI5N0M0QTI5MEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTY5MTY2QkY1OUJFMTFFMkI2OUFDMDI5N0M0QTI5MEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNjkxNjZCQzU5QkUxMUUyQjY5QUMwMjk3QzRBMjkwRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNjkxNjZCRDU5QkUxMUUyQjY5QUMwMjk3QzRBMjkwRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoYMmOsAAAS4SURBVHja7FZdbJNlFD7v99PfzZWsG7LNOea2bjGlGSJLQBdFLzRxuBkDAUkwZtmNsIVxYUIMd1zKQtYMQ+Yyw4gOIrL5g8QfZMkg80KNvcB1E6QaM6awlXZtv3/PedsuxYgdRMJNv+ak7fe95zzPOed5z/sxy7LgQV6sQKBA4IETuBenQ4eCq+rqmgYFQXwlG4YxBqapn56dvdx54MCbC/eLAOvrG36strZupqmxBqoqvWBiBXXNgKWlFEQi1yHy+58wN3etvqdn9y+4Pm95xbtB7+l52xsIbPhtyzPNUFbmASYAZm2CoRscqdjtBE9JEcSW9O6qqurg1NREIl9M4S7wJb//yfcafdVgd9pAFBhIsgTYBrCwjiZ+dCRjs0tQuaYUAoGNQ+TzfxJwSpK0taKiDAwsuYGlTwvY5A8twwLDQBK6CWtWl4Is29rIJ29W+Z4PDo6dxCw7TBPBUGi6riOwyOUjySK2gCFwGtwwDG4CVkbTdPK3o8XuVYTy0NB4ZMMTjz9cWVnGhRaLJ8Ful9EkcDrtMHD0FI/wxusdEI8nIJlIAREVRREmL/0IqVRiyuFwttAOsSxzrLOz/VWMq6+EgNTfP3r66afWt9XVP8KFlkwokECjTAn8w9GzsH//rhdp8eHDI2dffmkLJFMqX4t44HLbgTpUVOSCWCwB3//wM8zPz7+zd++Ot9DFyKcBpygKbRWYuWkYy7uJAptIYPTkFwTeirfCZL29u1rHP/sWMxe4Lko8RVDqLYHycg/3kbElTQ01IEpSF653/JsG5GBw9CeEaKQ/qqpMWVhKTdFxi6Uz0rAFxOPTzy9Ab+9rBH4VbT7jr+7bt7MV+k5MPP/cZgSUgaefLj3XBcO2CEwofvfoR3Hd0C/v2bM9gH4atUA+cuREyO/3+datawAlpUEoFAaXywVerwdsNjFTKAbjn3wNlG0OuJohYEMrR1uL7ZjYvu0F3J4Cr5yCSSSWkiCIEnhWuXlCodA0hGd+ne7u3umnVS5UsW99cxP2VsYyMni0pgocDjvEYymIRpN8yn351aU7gUPmN927SmvGxi8gqIK9J1801I7H4wI36kKSGNQ31NLO8RE2tcBGwlJx21C7VVXHcmtgcDHhfEfGNG41TYWBgVMTlBlZV1eHPbcCx459rJAAyXRdg2gsjnqxePl1mg/4rSS15fi0jvyIADMtAxZuxvhoVVM6Vzu1MHtSWvi8paWZA9MWu3jxO7rtziHgRt3Apk0bOSAFp9KTvwVpOSzciIHskHGIZZPlG4ERATO6uHD+WmTuWc9DxaAZaUfKPnvxQFxMjP9WFI0LN3dm0D0aUmTU+9tPeQtu4QwRsJWoRLgVjWNrb54nbNKAMjISPDg9PQNJRcEMJeyTxDPNNZr5ZAzLlGF/28WVzoTldbm+2XgM76tINByehePHgwcJmyqQjESuXBke7t/W3r77g/QJad1xcFJlEonY5D+OWmtx8cbkuXPfbE63zfqvwWucOfP+DsIk7GydaTisRqsgZeY5H6jGf6FFcuZ8MVo1mncF5wsd0X+gXUdLsRxqtgy4nCcApZci9jlzXcqcfI4VvORoGRLqSl5YCm/FBQIFAvf9+luAAQCQeWtAGuPU2wAAAABJRU5ErkJggg==",
			mirror: "data:image/png;base64,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",
			next: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAo1JREFUeNrslz1oU1EUx//34+XT1n5MbhqcBIXWxcUaCkK1RXDwa3Bz6CLiJoKtCV1dnQUHcZGAJk3UkGhEwUHq0MFBFEspONtq8vpyPSdJK2mhvpv3tEsvHC7vJbz/7/3Puee+K4wx2M0hsctjD0D7+ZMQQo9nC7km5KSg68rMRJSmhl+RnepM+3xGnMUzV0bRcD14plh/PWsHETQFMX6JutvE9MMPyF4exalMsU73I/8LgJ2H1zRIxBzceLyAOxdHQoGwKkKXXIg7Gsmog9u5Rdy6MIJ0Zj4QhB2ABzgEEI1oJAhiLv8JN88Hg/ANIAQDGGitoJRugcQI5F75M66fO9YzhJUD65QCR6nNiBAEp+T+myVMT/UGYQfQpHXrqHaQEw4Fp4OdePB+BddOH15LZ+0g/KcAhgAENNmvlOoKR+uWG48WVxNX06m1tMXqsHMA7RrQqjta6WA3aK6tIHFpLPVrfK7kC0LbAHjkANuupGg3hi2D2gQBSbjr7sbPyb91SzsAtFMgJbYBmI6hR/sbP5+8W4pXZyZOhLYZ/QGQVIAEILoBWNwIieNDnperfYtXZ8+cpFvLFKvhAdBmwA5wvuWW12fxI8MKTysfVWX2LIt/pfjuZ7OycqBpRKsIuyqXxFMDAs8qCyDxMRtxewASY4BNA6gYDg7GUCi93RD/YiNuDcBWcxFyTxAkfmB/FIX5Gip3J3sS78kBXob0hYThvgiKhVeBxK0A2HYjaROi1tIXi6BUKKMaUNxyNxSQOoqh/iRe5F+GIm7ngDA/yvnn+3jRVzNToYi3nuvnZERvP0DTIYrBTnNZthHfScMvgNPp67y5uB2IUD7L/QIE+vINfC74lwfYvbPhbwEGABp64r7oR6JmAAAAAElFTkSuQmCC",
			next_grey: "data:image/png;base64,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",
			originalsize: "data:image/png;base64,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",
			previous: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAodJREFUeNrsl09oE0EUxt/s/EmywaIV0oMgFBVPRiIIgjSmIqhtEQUrePAgeOhFxJMgtba1V6+ePQjiRQqabgKtqUYpeBB76EFBlIoUvOjBVrfZ3fHNZpW2W8PU7KaXDrywDGG+3/ve27e7REoJm7kM2OS1BcB0/kQI0T1PdN8p235m0i1ODfWcxUunUZ9F6YA4NlKyB89n4XL3PpCE9uJeqlUl8MVHLx6CgQdvoOZJCLJOtgLAF791IQfXHs1COinAQwCoV41E0gONxAsjln2jPwc3x+fAFAxc1HZlxE3YSPz6uRyMFd+BmeCgetXB7J0NDDfWjPjVM1m4O/UBkpi5YdTdlpi+42p43wSALz7Ql4V7Lz9DitfFlaCfN4nXAVEYtewrJ/Yu3X+9YKrM6YoZoWQJlsCVJBYAzLxkXyp0Lj2cWzSFypystloGfe960TehOD5WtvuPdv6qLkgzQSnaHq6zAlD7LkTvQFr91ByHMMqBcwrGPzQ8/zbU7wHtQfRs8OSRxzPziQNtyz8NxsFAF+h6wShOQRI5wCLGl+mhU13jM/Opwx3EpVygGAMWCr6hEugCLGN8xfhUuX2660n1PT2YEb4Yw6xXBsfwYgBYA9GTf1qZhf07WQiCx1SCtRAfFYRVeQt7Mmmggvu1rwcDj+Cxmo34P0/DVRATpVewu93EOyNwQjkA8TkQhhjuzZesKnRsT/kQfg8YRuwAIYjyxHPY0YZOJARuUW0Pmn0h+QsxjRCTxUlo32YCwTFNDBLpJNSBgMpwX96g1gv1bCQgf2i98Op8GWm+FSvvMxi7gtH9TTmD8b2RRpQAfyCUOA+cURO01kqAdVcjDdbsAVvfhs2u3wIMALrn5YTlsIGYAAAAAElFTkSuQmCC",
			previous_grey: "data:image/png;base64,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",
			print: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABBlJREFUeNqsV91rFFcU/82dOx+bZE2M1o9WgumDbmkLAW0QpNAPAi6xRXxp33ws0v9Ai5vFtpD3tqLoP2BBfGgaIdSiJX0OtNKgiMaGSiVZU3zIfszM7Tl37kzduJtmZj1wmbkzc8/5na/f3Guhu8iTX/9wvRlak2EUAQrZxAJsIeDaaubameMn6EmQUQOKH52fUb0K62BdXb3cBIAfsOcksw+0Q3psRZQZ5VFyO9bh03iWFYClTNgLNoXTygYgNGuNDitPBFLpcwCREUC0xZrZEoCCky8FPQNQVmzSt7F5HDsA2KgjF4AIseWCRG5JdHQT0eW5Wz33xd/K+Mwp8GW2wWviaFhgXawzSwT6V1drwB6RFmGUkYhEEnkio9UnNa2TRrMTADk1NXU9iqLJyPS9tAU8KbBou2kb5hVBOvbu2YWpyrlaEEYGk+AxQ3ZPMIACG69Wq20LT5/+HCV5DZ9+8g1Cdj8XFVso7XoVS0GACxe+bXtdqVQmk/LylYrQaDaxuHgXFlWt7/sobhuE53kYHN6BXoTYGI1GA3fv3Ue9XtfzUukA2CbicoGmmLW1f9BqtTQAHsViEa7r6nD1IpxW1sMgWD8DYFumqa20CFdWVumjJuK2VRgcGtILLcvqOQJNim6z2dD6mZrZ1gtdsG/fa9i9+xVt0PN8XL36vU7BywDA3h88eIqucQocx30RQBiGuHX7Vx1yz3NRq9U0gJeRAgZw+5d5HQGev//eux0ABCEKBV8blNLBG6US/nr8GLZtm2xldd38Fcmx10dHKZ2xMwyAbbUB4CgH1Cqu6yQ9ivEjR7CwsIDl5eXcUWBj+0dGMDY2pvUL4ehnfJ9kViZNy0hd57+io17A4UOHMf7OeO464Hxrj0m3LWw9+BnPk5CmKYhU3C6JcUFsaNuSWJFSIHICIAILyFgYBoiIBZVhsyjmgOcBMFKaODKlSgYzOzuLO7//RhEQ+hu1RTa0TNEw2bz51tsol8u6FROqjy+qPQW8iKuexSEgP83N4c8H9zHQ16epeGh4uMPfvgsHk6xRFzEVs45bP9/EhxMTRERBG8AUQOyxh4F+pV86UmJ56SH+2HsSc2c/6KkNJ766if6lGyj2D6BFxcdRTDoiAaDW19fnL1387mgSIka+bcDn3tTzGw/zbcmO7df9rXVduXwx/qkZh9kmf8YA6tPT05/RdeeG/YEzUaUiINnh5d8TWrQnOlM5X6bb1nOfsGcrbJsNrtN4ROPJBhvbeTHLkJ+Lh1IAJHSywNMNr+tsWxo0zzodHIRRs70Q7++zRCChDqPjqXEw26ZUmv7f6ecvQiny74qVqq/Nf/zlj0eTI1p24+Q/6disdzeDxwfKkQ7FmUWSYnvU7Wxo/U90CuZgmXdTkBZbt+P5vwIMAPyo75noDmVBAAAAAElFTkSuQmCC",
			rectselect: "data:image/png;base64,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",
			removeall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MURDQjk3ODYzNUQxMUU2QkU3REY3NTM2QTlDNjE5MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1MURDQjk3OTYzNUQxMUU2QkU3REY3NTM2QTlDNjE5MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUxRENCOTc2NjM1RDExRTZCRTdERjc1MzZBOUM2MTkxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUxRENCOTc3NjM1RDExRTZCRTdERjc1MzZBOUM2MTkxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+TQkyTwAABnVJREFUeNqsV2tsVEUU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",
			removeselected: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NzlGQjhCMDYzNUQxMUU2OTY1RkUxQTA5NDg0NUUwQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NzlGQjhCMTYzNUQxMUU2OTY1RkUxQTA5NDg0NUUwQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ3OUZCOEFFNjM1RDExRTY5NjVGRTFBMDk0ODQ1RTBDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ3OUZCOEFGNjM1RDExRTY5NjVGRTFBMDk0ODQ1RTBDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e/xd7wAABeNJREFUeNq0V1tsVEUY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",
			restore: "data:image/png;base64,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",
			rotate: "data:image/png;base64,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",
			rotateleft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFZklEQVR42sWWe0yTVxjGDyrGGXE3L5vZjJnbH9OImS46FQe0TKJToxPE4ebM5oLZErMsEzZkmXihCqLMGyA6UFHxBhTEoU65lFZE5aJVBnJraSmgIPeb2Gfv+frVIRQqxsub/HLa813ep+85z3vKALxUnmUMmhfIEhdsZ/ytg9kLjoEum1ms7CTDvG2CgNdfaHLpJhb7xwmGf7W+cNkiCBj14n45T36aIaPQE7d1GzBrA4MkgEEqe4SOqiPj9xLPds3nBLBEfzmDqmQlQtMZ8g27kFe1ADerF0N9dyHKaiKQXxmOSMUqeP01EZIN7Bd6bsBTJZOuS1A4+ibCyfcsPvNTKfg6uwYyXK/4DvuvMIRfZghTMRzO5tgIY0zOuzh14wOklyxDQXUYQpI9Id3I4vj7+pN8gMOaKC+/mDzoW4HKdsDpt3TQ/DjJ7+yifzJDZB5DBCXcT0TmMkTlmeYO5DDso7mwayTm5hjcrg7E9mQPSNazoP4sySuzfeIqFEVN+LugCdomYPav57iA9wj7T31Y2vpzlPQ2w0HCeRPDHBnD/GCG1UcYAtNJzC2qEAk6pLZDTrU3vt03FtO92AR63sZacpuPv9kq+X6vCppGIPCiFtpGLuAMFzCGGEFM4SL8LzEc0zC4bhVcMHe8E/vB3oNtmbOZtXiRkMgCEkFCEjRTEZ75CVz8mZzus7UmYLDDz8fk0SodUkpaEHBBi3KhAglmqw00i3AkEQG0Dz4PEgR8SIwlJhCOXERQFi1RMVWhxA5JhulwNdl1eJ/Zx810e+uLLReEpKHKCgSnlHcXwLqKkPox1UJTJxwtbrShXMiUr9n6VUcZoisI/SDE14zGXFOlRvTpcYefDgeHJBXisrYdO9N0hN6SALOIkcTkIcPZ1G6dcOiU5eyr+duYkNRVZhrnB7FGaw1rmIOPHAU1RhzPqUGY0sARN6HcUrcbRNgRr3Y7C2yJt4lphFREQnxEvNar9Wb8GLHa92gucis7EXG5Evszq/jYU4D1sCGGEG/wZ8yIyW17t553rCGDrBenrkNUVjUOEpFZVYILqDLPtd+brUcttRPR2fdwRCT6+j1onrsA0XqHlTpcKmrG8dwanCD4GEN7oYwEzPKOF/rAir2K+GUk1GO3omrRxlPvi+W2Glatt1h2AUX1QOyN2sc4TZQ1ADPXxnEB45ftUYJHc+sD+J7Mg3vw+f4eNpatt4Osl1HWhoRbdY8hJ7oImOi+KwM8MrS1wnggtQhuISmp1g4bq9ZTVz2kvt+As/n1PSj9X8AkN1HAP8XVUGju4SGMyC6txcqITCwOiJ/W25JYtd5VfQfOkwBLlNb3FJBZXosrOkJ/H3db2wGjEWtjcuC+42J4/049sl7qnQYoSltw6U6TJSwKuFnZADWnqkH4XFbXDB5HVRq4/ZmuX7Tx5Hhr1bCZKlpPfdeIdBKQVtLcHZpvRkkXAUt2mgQU19J8F/h3s4h8fT1W7MvE0u3iBu3LegcV5cii8qvKWqG0gErTZlGAobGtBxXi2PHQCB7+cWq4h6Ra3qDceotk51F4H7im68AVbZtFrpa3o5gEzOgmoL6tA3WtvdPa2Qke8mwdluxUYIlMLmzQHtbLrzFS73+AXEMHciyQR9dMFYh/bA8YiU6jsU/MoattwZpD1+G5KyXKvEGHSfzOCB1O0wT6hb3DLWhoe3QYTeKN6GljeagKPDfB3nRZF1/uvC6Rn/O8z/cKv87/GTv7nNLwfzvugWfSPHYrQUtBKJ4IXrUv9yqxdFuSQjghxfN7MuFMSK0h3mdPvENMJBz5fD9xEp+1I5itKGLUEzJSvH+I+IKR5mv9fIed4IiXHf8BgDmxlqvkK6wAAAAASUVORK5CYII=",
			rotateright: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFVElEQVR42sWWC1BUVRzG/wg65WhmKZZN5mQ1k6WVNpoKKYtlmjqa4DMf09jg1IzTNIoO6iimrIqgqQmIhg9UFBUWn2ECsg8eKg8BCeW1y8ICCoIusCDs1/9cV1EWhHUiv5nfnLv37t3/dx7f2UMAXii2qNsUf8KkLXSarx3oBaj3pK0EeThh/EY6RUT29D/Lcfwmwj86L6w9TnDd0Lkm7LmXclc56RkIZD6EMesJN/Trobo5F2tPds5IdJGtp2Uefw5GiHIxskuDUFgRjMzbU5FRPh3pZVOQbdiJgHiCJn8RvBWECfL/bk04TPHtFrHtwhzklAciPn82Tlx/H2Gpb+NQCjF2UhuoIQQlEPYmEa4ZFuEbX4JYH1+tOacct+o0xnqdhuuqKKWtpuxl68jX/8JMZJVvRlhGfwReJezhgvtSCSHphP1MSBoX5nvBjLjnfYEgW0OXiGjgOK9zKK0HiuuA1WHpcFq630OMKHVAdiM9aPAPewYgtdwTBzN7IkgUyyJsiScsOUyY7Ef4Wk5w2UA4cIPNMOv+Iny5gi4T0VDmXeeVZ6EzAudzjFDmGuG8IqKEiF6mDqjreG9SBCV+gSjtcARlcfEcgsdhLrqRaofOok2DxtFPRDRxwmbCUS33POZx8WFMH6a/88oz0N0HtlzSQcvtj7s1+HzhZpnoILWjVyZwvM4aRuJgfk/szSP4Jj8sTkRjmcHMAObDb30JPgmEsU8Xt2ccnVdGocgI+FzUITa/FqEaPZx+PaoQGxi1oz4TuWeRFf0QWuyA0BLC4iOEYfNpnaVwd8uC6jfVnyO5mhJaFKcnDfjFFiFAXSJdf7fpIgaOdnuj3Q1msi/dZxMiUhDt5K1sYB59LxVvVm/LfH/C9H1UvKWBHZeLGT0SdPXYfvYmnH455NfeXvEq8xkjY1wtjGDeZLpSs7oxvZie1hETBhTSIgxUGySOpVYgp8IMpxUKEFGPZy5CiwnHJ3iNean9BWRtIDihFHsTy6Q2rbQRXkfSMOrn4CVSJDtRjtxTKQUhyWU4kFyO/UxEZhVUIpKepwwikp1qYIxnpBS/0Gt3cDjlIaFMRnljO5G0XXbTfjvx3qxdyrLZf6ixMCihjIjeGr08EoVsIIzn/lhaBY4zoo3JrcEhtVUkn1td3P2il3mFp6PG9ABCwgQRfTB6eQQK7wEnr1fiVAtyq4HpcqtI2iwHt+2xcfvictHQaIZKVwkh950qYeDjRwYUWVWIaoGq0IRtVpG0Ycin+0SOWBSciJSCSpiamqDS3sHfeeUQcntoYIgwUMAGzmVXW3E+5x4yy5qaI2mD7N23xQQtP5aKB41NKDGakFR8F0n6SiQyVgaqgWgu1hpXihtsiiQvtPBBbr/HFx/VaCFUWFWDjFLRE4Zbvm7VQMwtY6soC2oRd+tehyLZZaZ/9LIFexKRXVINIS0Xz6usQX4z0mehGTuaDeTz1+MLanA535p4NpB52yxFcvgzIungvj0uzjsiE0L1TWYY7pvaolUDGq0J6sI6KzRMMk/DAWVRq5G0myFXjJixQwlFih5CdTznVXUNbVJtanjKwCg2kMcGrhTVI0lnapWr+gbcvAtMk0c/FUn7uTtjQ5YevAZ9ZS0eqdFsfiZmoMUaiJRGIL30AVINDVakCfhZdoXZKpI95gVo8LyybERDxJ+RwQQRRR6JttEaIe2YstVnHkeyz4JAtXHObrXUG56GDqLCrF1qzA9Q3SWij1w8wwvFiZjPBSLvbSKeu/DpefyqyCIiet3qPGAjMuZT5h1mKOPSwfdcLAebXtbnAdsR73a3/FhfG97rJdV+0foXF5KyYLdSOqoAAAAASUVORK5CYII=",
			save: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0YzVmZjRkMi1kYjVmLTQ2NjAtYmUzNS05NGEwNTlhYmRmY2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E5QTJGQUIyQjVGMTFFNDg4QzlFMEU1RTZGNTQ3NzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0E5QTJGQUEyQjVGMTFFNDg4QzlFMEU1RTZGNTQ3NzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkOTAyNGZiZS1jZDYyLTQzNjQtYjVjOS1mMjI1OTRlZGMxYzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGM1ZmY0ZDItZGI1Zi00NjYwLWJlMzUtOTRhMDU5YWJkZmNk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",
			scan: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzIyNzVGOTE1OEZGMTFFMjg5MTZDREZDM0M3QUJDMTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzIyNzVGOTI1OEZGMTFFMjg5MTZDREZDM0M3QUJDMTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMjI3NUY4RjU4RkYxMUUyODkxNkNERkMzQzdBQkMxOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMjI3NUY5MDU4RkYxMUUyODkxNkNERkMzQzdBQkMxOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkYMFg4AAAQfSURBVHja7FdfTJNXFD/369ePgqMiIiQUK5XQfhpiArZA4pawVzeDMS7M8ECDWTT4ZkL2MhLCHvZAsgcNxAQQotkC0ywjGbz4IDExsQVhe4B1EgMaRBkChcrov++7O+eDrxMoWEmRF29ykvbe3vv73XPu+Z1TxjmHvRzsI4E9J/COdWN3d/c0ksx6X6KMMVBVtbe6uvo8fo3uhIChs7Pzl8OH88+VlZeCSgQSJYHgAprnkRempp795na7v9qKxFYExK6urjtOp+vsoZwcmJyY3JF78235MDszA16vp6O2tvYSTimbbhlnn9DS0lJTVFT0ba4lD6anpzV3CoLw3vYmEIBsvIBoMJTgeNbf3/8nns+3IyC0tbW57YWFHXb5GMzNzWEc8UcGYUcE8DgIhYJgycsDPKiyrLx8uK+v78lWBFhDQ0Oh3e64V3TiBCwuLkI0qmgHkQd2YoJAD5FDJBKGXIsFlpeXLzgcjp8GBgYWNr4B1tzcXIjj7+LikxDGDeFwOKnpJkkSSEYJRkYew/j4uKO+vn6cwiHq6Wa1Wu8fO34cFFWh9AFRFJNKgM6kswkjFArdxykbWpg8YOzp6fmnxOnKSDWZ0F2R1R18dxTHaDTCSjAIw0OD/qqqqmy6ZpqiKAGcyCCWJDiqwoGryWXA8D0IBhbLKMIkbOK1n1K2srKyzGw2Z39x+svv5eICyLCYIFkqjZjgfxEE38hT6Ov//bulpaXZ3t5eDy5NaiFA+4SItLe338632j7NktNxNgpJZRAR4bUvAC9eTo3W1NScwVk/2hs9C4SmpqbPZFkesMsyDE94UUqFdxaKRAddQ+UqlNhK4YnPB2NjY583NjY+oOlYFhQUFLSQag2P/gEjo3+h+BiSSgBjDvCvBEdzj9Dnn9eyIEQYQmtr6zeZmZk3nK5S+Lr2IqYMChAzQDIZqJxEzQDdNztgaNAL8/Pzl+vq6trIAykIfv3gwSzt1r/evrV6e8bihpJtm6NMW4n3dCi7yAsKZhph4biGdosIpOKisaKiAjersVq+qULhqiBwamG2JQCc5Bctjvv0niIPZfnu3TsSYRMB7R28fDUDnsGhVR3fsJnuJSL4jz4bPFzIAAlJCGw9CRWBw2inDvjhqjwBUZV2sQ2R4BqJMpczVvZFXaTCqID7zemxQrKpbiPgD+Wz0DVjhMGVdKxi6wkoeIorNQDunFkIqmZQeHwPkBGWvirqwY1GorAvLS0uuE6Sbn3piB+usIVNDiY6UQSN8H1g4mzLIBEBwoI1nLcqjgppSCARSddcGa+TwVUpsdL0f+ulP7qUlBStUHyIofcYOgGOzcdDr+fRKc5V2O0uXUtlVFnCBC1nAFD4wYqWtT4kuzqoQ36N9pytgaaimSB52peIOgfRVmCvx8f/hv8JMAA3la3gT8UyLAAAAABJRU5ErkJggg==",
			stretch: "data:image/png;base64,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",
			zoom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGQkNGOTBGRDQ3MzIxMUU2OUUwNEMyMzI5QTUxRUY4RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGQkNGOTBGRTQ3MzIxMUU2OUUwNEMyMzI5QTUxRUY4RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZCQ0Y5MEZCNDczMjExRTY5RTA0QzIzMjlBNTFFRjhEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZCQ0Y5MEZDNDczMjExRTY5RTA0QzIzMjlBNTFFRjhEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+791h4QAABt5JREFUeNrElnls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",
			zoomin: "data:image/png;base64,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",
			zoomin_grey: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTU5MUUyMENBMURBMTFFNEFCQUJGQkEzNTUzMTkwRkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTU5MUUyMEJBMURBMTFFNEFCQUJGQkEzNTUzMTkwRkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc4NTBFOTQ2QTFEOTExRTRCMzMyODk1OENFNUYyM0JFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc4NTBFOTQ3QTFEOTExRTRCMzMyODk1OENFNUYyM0JFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SbEbQAAABY1JREFUeNq0l8tP1VcQx+de3i/BAjVQUatBpPIIJKTQFHXRJhKgITUuWBjTVbt1QRNFaCQ8QvgHmnSHrrqRFApRYzRQDA0xLkRiUKECQnijoHAvr87n9HduL4QLNKEnmdwfv9+c+c7MmfnOwSV+6+rVqzI6Oio3b950VVZWfh4aGlrhcrmKVCI2NjaMjj6LPi/pY/v79+9/bGxsHLp06dLG4cOHpaGhQfa6grd5F1dTU9MVHR2dkZmZKcnJyRIfH79JYWZmJmJsbOzC06dPL6hu34sXLwr19bz8h+UP7FIpPnHiRGt+fr5kZGTI2toa0YnH49m0KSYmRk6dOiWnT5+Wvr6+jPX19TnVKdVPv6ts7AXYZX8rKiq+OXjwYEtpaanExsaKGpOhoSF58uSJDA8P+zbgyNGjRyUnJ0eOHTsmQUFB8vbtW2ltbZW5ubmypqam3/YCboCLiooSCgsLp0pKSkw0Hz58kJaWFtEzlMTERImLizMAbrfbCEDj4+MSFhYmZWVlEhkZKQsLC9LW1iZdXV2JHR0d07sBB6mElJeX/5mXl5fIeQJ269Yt4wBRFRQUSG5urhw5ckSSkpKMI3zT7Jgj6O7ulrS0NNGakODgYDJV0tnZ+YvaXd8RWEE/09T9dPbsWVldXZX29nYTQXFxsWRnZ5tIl5aWzLeVlRUDRrqpbvT43t/fL6mpqXLo0CF5+fJlYkJCwq969lM7Abv1nBrS09ONUVoJw0SQkpIii4uLJu2c97Vr16S+vt5swgkEUDKBIyMjI8YGtrAZoGP+Bdb0fIWnVLB6awrr5MmTBnB5edlX2VFRURIREeErMNMSmlrAcZK96GILm/o5fEdgFCgeNs3Pz5v0aapM5KSTYuJXycQIfwOGIxQX4Jw7e8kCthzQsB37mDQCimAIECK16QUAwPDwcAPa3NxsIkYuXrwoXq/X7EXH2uLXCWpnAkERCQkJMcaJFu8xRkQI752q9QGjDxCLZ2tnz8yFETbYVBIxhXLlypV/zsOJFJ3Lly/7gHGQtLNsxPb8dwVWRc/s7GwYKaU3aZ3p6WmTdqLGEMYtmL9hSyiQB3tZagsdz27AbiWMPyYmJswfFAkgAL97986QiW0nC2rTad9RE+iyl4UtbcPuXQlE22dNo/2WFmKRYoRoMWqpMisryxCKbS8LDn3aaqYGYDIloR8mJyf/UnPegBHfvXv3kbbC4MDAgAFgBNoKthVqGYtjoIoRwEix5XP0nz9/jv66jssBtb28Wx/P6+D/7tmzZyZlRMh5QRZUKtHhgH8mcIBIcQBH7YRikilruW/cuDHkN/k2LVrUAi9qWgYfP35c8eDBAxMF3hM1xE+RAQ4gUUOjZIH3OIcuDt+/f99cGuB4mEzBKbDQnaYTRbCit4gxZa03mrqviZT0AcA5W2rk1/Y6wvOrV6+kp6fH6OMsPM/AmJqaYqpVPXz4EN5es4A6fhmdEuT8zQevGhnRc+pQyvxSB0YcoBiHRi1VImSFedzb28tgWVdAF6A4xqTidkKx6hXJgGsmfeAW2LXlUgDHcsFKUs/Tzp079/2BAwfytuFdj6a39969ez8PDg7OVlVVteMkc5r088wFASfv3Lkjr1+/lurqamx47ZTbrgBCVKJUYlU+4orlMJzVhUFWVRZU5pzjSr5+/XonQLQVLMbaDlyBvYGAbfTBflNmK+FTFx6nZdD9WOVTwEk3ozUQuNLxFwrcE2iCENWKExX3p8ktMu18W3FIgndDtbW1Z2g522os7m4U6fnz5+X48eMcxyOCccv+LB94XV3dGVrPH/z27du+m4szvSL3C1h2ixxwOsQOp/0EDhg5TsB+0CttKYFobR9WqC04/R+s03+UamHl68/A/wXsD/6JSrTzblHlDVn5W4ABABElWPB1iV4ZAAAAAElFTkSuQmCC",
			zoomout: "data:image/png;base64,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",
			zoomout_grey: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkY1NzhDRTdBMURBMTFFNDgzNjY5RjA4MjVGNEZCNEQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkY1NzhDRTZBMURBMTFFNDgzNjY5RjA4MjVGNEZCNEQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlCODgyQUI4QTFEOTExRTQ5QTY5QjRCMkZDNEJBOEU5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlCODgyQUI5QTFEOTExRTQ5QTY5QjRCMkZDNEJBOEU5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+HXCklwAABXlJREFUeNq0l8tP1FcUx88Mwxt5VKYGysNqFKkYowkpNEVctAkEMCTGBQsXXXXtgiao0GhUQvwHmnTRha66kRQLQWMgUAwNIS7kFeQRRSECAgoKDDD0fG5+d/rTAEMTepOTub/7O7/zPe9zxyOuVVNTIy9fvpQ7d+54rly58nVUVFS1x+MpVYrd3Nw0PLoX3S/rtvn9+/c/NTQ0jF+8eHEzIyND6uvrZbfLt8VZ8vXr1zsTEhLyTpw4Ienp6bJ///6PGN68eRM7OTl5/unTp+eVt+/Zs2dFerwg/2G5gT1KZYcPH24qKCiQvLw82djYwDpZXV396KN9+/bJsWPH5Pjx49LX15cXDAbnladCX/2ptLkbYI/9ra6uPpeSktJYUVEhSUlJosJkfHxcnjx5Ii9evAh9gCLZ2dly6tQpOXjwoERERMjbt2+lqalJ5ufnK2/fvv3HbsANcGlpaWpRUdFMeXm5sebDhw/S2NgoGkPx+/2SnJxsALxeryGApqamJDo6WiorKyUuLk4WFxfl/v370tnZ6W9paZkNBxyhFFlVVfV3fn6+n3gCdvfuXaMAVhUWFsrp06eF5ElLSzOKJCYminrHhKCrq0tycnJEc0J8Ph+eKu/o6PhV5QZ3BFbQr9R1PxcXF8v6+ro0NzcbC8rKyuTkyZPGUpRZXl6WlZUVCQQCoeyGj/cDAwNy5MgROXDggIyMjPhTU1N/19jP7ATs1TjV5+bmytramiklrMCCzMxMWVpaMqCc8R7FILsHNCsry8R9YmLCnCMLmdtUzL/A6p7v0JQMVm1NYh09etTEGQs5h0g2CBB+TUmoawFHSb6FD1nI1NcxOwLDQPLw0cLCgnGfuspYiTsRbAEiIyNDz/Hx8Sa52BN3vsULyHJAo3esY7S3ViEIMCzl/PLlywYAMEsAkdlYfuHCBRNzvtUuJ1aW4xFv2AZi3YhFCMVatEcYQBbMXVIAww8Qi72Vs+vOZeMGEEKxmES5dOmSYUIJABCOEniFhYIow7IW254eFlgZV+fm5qJxKbVJ2czOzhq3W0DrDbvs3lpP8+BblsoCfDUcsFfL5a/Xr1+bB5IECwB+9+6dKSWst15xk7UO6+HlWxaytAy7wjUQ7+Dg4G9DQ0NGAO7CcqykhnG3zQEL5q5jnmmfKBsTE2Nk0Eza2toaiMSOwA8ePHispTA2PDxs3MYIRAh7d/3azIcsMC62/Rx+DFDeoI7LYZW9Eq6OF3Tw/9Df329chvbEKzY21sQSSwFzW0oeYCmlhKJ2QjHJtGt5r127Nu6afB8tStQCL01PT4/19vZWq4uMFWiP1TR+kgxwAMliQoAHOEc5eFH40aNH5tJAj6eTKTiujtppOpEEa3qLmNSu9Upd9z2W4j4AiJvtXPzaWofYj46OSnd3t+FHWfo8A2NmZoapVtve3k7f3rCAOn4ZnRLhPPMioEImNE4t2jK/1YGRDCjCaaO2gUB4hXnc09PDYAkqoAdQFCO5uJ3Q7/WKZMDVkyFwC+z55FJAj+WClaaa55w9e/ZHnb35W/TdVXVvz8OHD38ZGxubq62tbUZJZjjuZ88FASVbW1vl+fPnUldXh4wAMb5169aWCUB3iFdKUvqMK5bT4SwvrWldaVFp3glX+tWrVzsAYkhQlqytwBU4sB2wtd7nmjKfNvygU6crDu/nSl8CjrsZrduBa0P6RoG7t5sgWLXmWMX9afoTmnXewRNwzsZv3LhxhpKzpcbi7kaSlpSUyKFDhwjHY4zxyt6sEPjNmzfPUHpu8Hv37oWGjTO94vYKWMJZDrhr0Pj2Enhby1GC7kd7pSxlu7a2ByvKJpz+B+twz2hNrAL9Gf6/gN3gXyglOGdLSq/wyj8CDAAE2FAUooo1WwAAAABJRU5ErkJggg=="
		},
		b = a.html5.Funs2,
		j = {
			isFunction: function(l) {
				return l && typeof(l) === "function"
			},
			init: function(o, m) {
				var p = o,
					n = m || {},
					l = Math.floor(Math.random() * 100000 + 1);
				p.container = n.Container;
				p.containerWidth = n.width ? n.width : 0;
				p.containerHeight = n.height ? n.height : 0;
				p.width = p.containerWidth;
				p.height = p.containerHeight;
				p.defaultIndex = 0;
				p.bEdit = n.bEdit || false;
				p.evt_switch = n.evt_switch || "";
				p.evt_mouseMove = n.evt_mouseMove || "";
				p.evt_mouseIn = n.evt_mouseIn || "";
				p.evt_mouseOut = n.evt_mouseOut || "";
				p.evt_mouseClick = n.evt_mouseClick || "";
				p.evt_mouseDblClick = n.evt_mouseDblClick || "";
				p.selectionImageBorderColor = false;
				p.backgroundColor = "rgb(255, 255, 255)";
				p.onRefreshUI = n.onRefreshUI || false;
				p.onMouseRightClick = n.onMouseRightClick || false;
				p.onMouseClick = n.onMouseClick || false;
				p.onMouseDoubleClick = n.onMouseDoubleClick || false;
				p.onMouseMove = n.onMouseMove || false
			},
			addClass: function(m, l) {
				var n = a.one(m);
				if (n && n.length > 0) {
					n.addClass(l)
				}
			},
			removeClass: function(m, l) {
				var n = a.one(m);
				if (n && n.length > 0) {
					n.removeClass(l)
				}
			},
			__createButton: function(q, m, p, l, o) {
				var n = document.createElement("img");
				n.src = d[m];
				n.className = "dynamsoft-dwt-Editor_Buttons_" + m;
				n.title = p;
				n.style.width = l + "px";
				n.style.height = o + "px";
				this.__btnBindEvents(q, n, m);
				return n
			},
			__btnBindEvents: function(n, m, l) {
				switch (l) {
					case "previous":
						m.onclick = function() {
							n.previous_btn()
						};
						break;
					case "next":
						m.onclick = function() {
							n.next_btn()
						};
						break;
					case "rotateleft":
						m.onclick = function() {
							n.RotateLeft()
						};
						break;
					case "rotate":
						m.onclick = function() {
							n.RotateAnyAngle(this)
						};
						break;
					case "rotateright":
						m.onclick = function() {
							n.RotateRight()
						};
						break;
					case "deskew":
						m.onclick = function() {
							n.Deskew()
						};
						break;
					case "crop":
						m.onclick = function() {
							n.Crop_btn()
						};
						break;
					case "erase":
						m.onclick = function() {
							n.Erase_btn()
						};
						break;
					case "changeimagesize":
						m.onclick = function() {
							n.ChangeImageSizeGetinput(this)
						};
						break;
					case "flip":
						m.onclick = function() {
							n.Flip()
						};
						break;
					case "mirror":
						m.onclick = function() {
							n.Mirror()
						};
						break;
					case "zoomin":
						m.onclick = function() {
							n.ZoomIn()
						};
						break;
					case "originalsize":
						m.onclick = function() {
							n.OriginalSize()
						};
						break;
					case "zoomout":
						m.onclick = function() {
							n.ZoomOut()
						};
						break;
					case "stretch":
						m.onclick = function() {
							n.StrechMode()
						};
						break;
					case "fit":
						m.onclick = function() {
							n.FitsWindowSize()
						};
						break;
					case "fitw":
						m.onclick = function() {
							n.FitsWindowWidth()
						};
						break;
					case "fith":
						m.onclick = function() {
							n.FitsWindowHeight()
						};
						break;
					case "print":
						m.onclick = function() {
							n.print()
						};
						break;
					case "scan":
						m.onclick = function() {
							n.scan()
						};
						break;
					case "load":
						m.onclick = function() {
							n.load()
						};
						break;
					case "removeall":
						m.onclick = function() {
							n.removeall()
						};
						break;
					case "removeselected":
						m.onclick = function() {
							n.removeselected()
						};
						break;
					case "hand":
						m.onclick = function() {
							n.Hand_btn()
						};
						break;
					case "rectselect":
						m.onclick = function() {
							n.RectSelect_btn()
						};
						break;
					case "zoom":
						m.onclick = function() {
							n.Zoom_btn()
						};
						break;
					case "restore":
						m.style.display = "none";
						m.onclick = function() {
							n.RestoreImage()
						};
						break;
					case "save":
						m.style.display = "none";
						m.onclick = function() {
							n.SaveImage()
						};
						break;
					case "close":
						m.onclick = function() {
							n.CloseImageEditor()
						};
						break
				}
			},
			getToolBar: function(m, x, u) {
				var z = this,
					t, p = [],
					D, r, A, E, F, q = false,
					w = document.createElement("ul"),
					s = false,
					B = i.CustomizableDisplayInfo.buttons;
				D = B.titles;
				if (B.bShowAllButtons) {
					Dynamsoft.Lib.each(e, function(J, H) {
						switch (H) {
							case "navigating":
								p.push.apply(p, J);
								break;
							case "io":
							case "removing":
							case "rotating":
							case "editing":
							case "sizing":
							case "fitting":
							case "cursor":
								if (J && J.length > 0) {
									var G = J,
										I = 0;
									for (A = 0; A < J.length; A++) {
										var o = J[A];
										if (B.visibility[o] || o == "") {
											if (I == 0 && A == J.length - 1) {} else {
												I++;
												p.push(o)
											}
										} else {
											G.splice(A, 1);
											A--
										}
									}
									e[H] = G
								}
								break;
							case "confirming":
							case "close":
								p.push.apply(p, J);
								break
						}
					});
					var y = window.innerWidth > x ? x : window.innerWidth;
					if (y / p.length < 23) {
						s = true;
						p = [];
						j.output(z, "You are trying to show too many buttons")
					}
				} else {
					s = true
				}
				if (s) {
					var n = 149;
					Dynamsoft.Lib.each(e, function(G, o) {
						if (o != "navigating" && o != "confirming" && o != "close") {
							n = parseInt(n + G.length * 20)
						}
						switch (o) {
							case "navigating":
								p.push.apply(p, G);
								break;
							case "io":
								if (x > n) {
									p.push.apply(p, G)
								}
								break;
							case "removing":
								if (x > n) {
									p.push.apply(p, G)
								}
								break;
							case "rotating":
								if (x > n) {
									p.push.apply(p, G)
								}
								break;
							case "editing":
								if (x > n) {
									p.push.apply(p, G)
								}
								break;
							case "sizing":
								if (x > n) {
									p.push.apply(p, G)
								}
								break;
							case "fitting":
								if (x > n) {
									p.push.apply(p, G)
								}
								break;
							case "cursor":
								if (x > n) {
									p.push.apply(p, G)
								}
								break;
							case "confirming":
								p.push.apply(p, G);
								break;
							case "close":
								p.push.apply(p, G);
								break
						}
					})
				}
				t = p.length + 1;
				var l = (x / t - 2) > (u - 2) ? (u - 2) : (x / t - 2);
				t--;
				l = Math.floor(l);
				l = (l > 18) ? l : 18;
				w.style.paddingTop = "1px";
				for (A = 0; A < t; A++) {
					r = document.createElement("li");
					var C = l;
					r.style.height = u - 1 + "px";
					r.style.floatLeft = "true";
					F = p[A];
					if (F == "") {
						E = document.createElement("span");
						E.style.paddingLeft = l + "px";
						r.appendChild(E)
					} else {
						if (F == "hand" || F == "rectselect" || F == "zoom") {
							r.style.height = u - 3 + "px";
							q = true
						}
						E = z.__createButton(m, F, D[F], C, C);
						var v = ("cssFloat" in E.style) ? "cssFloat" : "styleFloat";
						E.style[v] = "left";
						if (F == "close") {
							v = ("cssFloat" in r.style) ? "cssFloat" : "styleFloat";
							r.style[v] = "right"
						}
						if (q) {
							E.style.margin = "1px"
						}
						r.appendChild(E)
					}
					w.appendChild(r)
				}
				return w
			},
			output: function(m, l) {
				if (Dynamsoft.WebTwainEnv.Debug) {
					a.log(l)
				}
			}
		};

	function f(o, m) {
		var q = this,
			n = m || {},
			l, p = '<div class="D_ImageUIEditor dynamsoft-dwt-noPaddingnoMarginInside dynamsoft-dwt-thinborder"></div>';
		q._UIManager = o;
		q.aryModelImageControl = q.__NewAryModelImageControl(m.aryModelImageControl);
		q._UIView = h;
		q.iControlWidth = 0;
		q.iControlHeight = 0;
		q._stwain = m.stwain;
		q.BaseUrl = m.BaseUrl;
		q.cIndex = m.cIndex;
		q.bHideToolBar = m.bHideToolBar;
		q.totalImagesCount = q.aryModelImageControl.length;
		q._IfChangedWithinTheEditor = false;
		q._IfSaveChangesOutSideOfTheEditor = false;
		q.iChangedIndex = -1;
		q.cursorStatus = "rectselect";
		j.init(q, n);
		l = q.container;
		l.append(p);
		q.UIEditor = l.one(".D_ImageUIEditor");
		q.bShow = false;
		q.actualSelectedCanvasAreas = [{
			left: 0,
			top: 0,
			right: 0,
			bottom: 0
		}];
		q.bCouldBeTimeConsuming = false;
		q.zoom = 1;
		q.aspectRatio = 1;
		q.__fitWindowType = 0;
		q.toolbar = {
			self: null,
			filled: false,
			width: 0,
			height: 0
		};
		q.bExistingDIV = false;
		if (!m.bExistingDIV) {
			window.onresize = function() {
				q.ShowImageEditorEx(-1, -1, -1, -1)
			}
		} else {
			q.bExistingDIV = m.bExistingDIV
		}
	}
	f.prototype.__NewAryModelImageControl = function(n) {
		var q = this,
			o = [],
			m = 0;
		for (; m < n.length; m++) {
			var l = new a.UI.ModelImageControl(),
				p = n[m];
			if (p.bOriginalImage) {
				l.bIsDirty = true;
				l.imageToShow = null;
				l.imageWidth = -1;
				l.imageHeight = -1;
				l.iImageControlWidth = -1;
				l.iImageControlHeight = -1
			} else {
				l.bIsDirty = p.bIsDirty;
				l.imageToShow = p.imageToShow;
				l.imageWidth = p.imageWidth;
				l.imageHeight = p.imageHeight;
				l.iImageControlWidth = p.iImageControlWidth;
				l.iImageControlHeight = p.iImageControlHeight
			}
			l.imageIndex = p.imageIndex;
			l.aryOverlayRectangleData = [];
			o.push(l)
		}
		return o
	};
	f.prototype.ShowImageEditorEx = function(u, t, o, n, p, l) {
		var q = this,
			r, m;
		if (l) {
			r = "relative";
			m = "auto";
			u = 0;
			t = 0
		} else {
			r = "fixed";
			m = 9999;
			o = window.innerWidth;
			n = window.innerHeight;
			u = 0;
			t = 0
		}
		q.width = o;
		q.height = n;
		q.UIEditor.css({
			display: "",
			width: q.width + "px",
			height: q.height + "px",
			position: r,
			left: u,
			top: t,
			"z-index": m
		});
		q.isFitWindow = true;
		if (!l) {
			document.documentElement.scrollLeft = 0;
			document.documentElement.scrollTop = 0;
			document.body.style.overflow = "hidden"
		}
		if (q.toolbar.filled) {
			q.toolbar.filled = false
		}
		q.toolbar.width = q.width;
		var s = Math.ceil(q.height / 20 < 20 ? 20 : q.height / 20);
		s = Math.ceil((q.width / c - 2) > (s - 2) ? (s - 2) : (q.width / c - 2) + 1);
		if (q.bHideToolBar) {
			q.toolbar.width = 0;
			q.toolbar.height = 0
		} else {
			q.toolbar.height = s < 20 ? 20 : s
		}
		this.updateEditor();
		return true
	};
	f.prototype.updateButtons = function() {
		var n = this;
		var l = a.one(n.toolbar.self).one(".dynamsoft-dwt-Editor_Buttons_save"),
			m = a.one(n.toolbar.self).one(".dynamsoft-dwt-Editor_Buttons_restore");
		if (n._IfChangedWithinTheEditor == true) {
			if (l && l[0]) {
				l[0].style.display = ""
			}
			if (m && m[0]) {
				m[0].style.display = ""
			}
		} else {
			if (l && l[0]) {
				l[0].style.display = "none"
			}
			if (m && m[0]) {
				m[0].style.display = "none"
			}
		}
	};
	f.prototype.updateEditor = function() {
		var q = this;
		j.output(q, 'Editor is under mode "' + q.mode + '"');
		if (q.toolbar.self) {
			if (!q.bShow) {
				return
			}
			if (q.toolbar.width + q.toolbar.height == 0) {
				j.addClass(q.toolbar.self, "dynamsoft-dwt-notdisplayed")
			} else {
				q.toolbar.self.style.width = q.toolbar.width + "px";
				q.toolbar.self.style.height = q.toolbar.height + "px";
				if (!q.toolbar.filled) {
					q.toolbar.filled = true;
					while (q.toolbar.self.firstChild) {
						q.toolbar.self.removeChild(q.toolbar.self.firstChild)
					}
					q.toolbar.self.appendChild(j.getToolBar(q, q.toolbar.width, q.toolbar.height));
					q.updateButtons()
				}
				j.removeClass(q.toolbar.self, "dynamsoft-dwt-notdisplayed");
				j.removeClass(q.toolbar.self, "dynamsoft-dwt-overlay")
			}
			q.iControlWidth = q.width;
			q.iControlHeight = (q.height - q.toolbar.height);
			a.log("ChangeImageViewSize: " + [q.iControlWidth, q.iControlHeight].join(","));
			q._UIView.ChangeImageViewSize(q.iControlWidth, q.iControlHeight);
			q.updateMode()
		} else {
			var l = (Math.floor(Math.random() * 1000 + 1)).toString();
			var o, p, n = ["D_ImageUIEditor", "dynamsoft-dwt-noPaddingnoMarginInside", "dynamsoft-dwt-thinborder"];
			o = document.createElement("div");
			o.id = "dynamsoft-dwt-viewerToolbar" + l;
			o.style.width = q.toolbar.width + "px";
			o.style.height = q.toolbar.height + "px";
			o.style.whiteSpace = "normal";
			o.className = "dynamsoft-dwt-viewerToolbar";
			p = document.createElement("div");
			p.id = "ds-dwt-imageViewer" + l;
			p.style.width = q.width + "px";
			p.style.height = (q.height - q.toolbar.height) + "px";
			p.style.backgroundColor = q.backgroundColor;
			p.className = "ds-dwt-imageViewer";
			q.UIEditor.css({
				width: q.width + "px",
				height: q.height + "px"
			});
			q.UIEditor.append(o);
			q.UIEditor.append(p);
			q.iControlWidth = q.width - 2;
			q.iControlHeight = (q.height - q.toolbar.height - 2);
			var m = {
				Stwain: q._stwain,
				Container: q.container.one(".ds-dwt-imageViewer"),
				Width: q.iControlWidth,
				Height: q.iControlHeight,
				BackgroundColor: "#565656",
				borderWidth: 0,
				aryModelImageControl: q.aryModelImageControl,
				aryCurrentSelectedImageIndicesInBuffer: [],
				bEditorViewer: true,
				_UIEditor: q
			};
			m.onImageAreaSelected = function(v) {
				a.log("__onImageAreaSelected: " + [v.left, v.top, v.right, v.bottom].join(","));
				var s = -1;
				if (v.areaIndex) {
					s = parseInt(v.areaIndex)
				}
				if (s > 0 && s < q.actualSelectedCanvasAreas.length) {
					q.actualSelectedCanvasAreas[s] = {
						left: v.left,
						top: v.top,
						right: v.right,
						bottom: v.bottom
					}
				} else {
					if (s == q.actualSelectedCanvasAreas.length) {
						q.actualSelectedCanvasAreas.push({
							left: v.left,
							top: v.top,
							right: v.right,
							bottom: v.bottom
						})
					}
				}
				var u, r, t;
				if (q.actualSelectedCanvasAreas.length == 2) {
					u = a.one(q.toolbar.self).one(".dynamsoft-dwt-Editor_Buttons_crop");
					if (u && u.getEL()) {
						u[0].src = d.crop;
						u.style("cursor", "pointer")
					}
				} else {
					q.__SetCropButtonGrey(false)
				}
				r = a.one(q.toolbar.self).one(".dynamsoft-dwt-Editor_Buttons_erase");
				if (r && r.getEL()) {
					r[0].src = d.erase;
					r.style("cursor", "pointer")
				}
			};
			m.onImageAreaDeSelected = function() {
				a.log("__onImageAreaDeSelected: ");
				q.actualSelectedCanvasAreas = [{
					left: 0,
					top: 0,
					right: 0,
					bottom: 0
				}];
				var r = a.one(q.toolbar.self);
				if (r && r.getEL()) {
					q.__SetCropButtonGrey(false);
					q.__SetEraseButtonGrey(false)
				}
			};
			m.onZoomChanged = function(r) {
				q.__SetZoomInButtonEnable(!r.isMax);
				q.__SetZoomOutButtonEnable(true);
				q.__SetCropButtonGrey(true);
				q.__SetEraseButtonGrey(true)
			};
			q._UIView = new a.UI.ImageUIView(m);
			q._UIView.BaseUrl = q.BaseUrl;
			q._UIView.cCurrentIndex = q.cIndex;
			q._UIView.__fireEvent("onResetCurrentIndex", q.cIndex);
			q._UIView.SetViewMode(-1, -1);
			q.UIEditor.attr("class", n.join(" "));
			q.toolbar.self = document.getElementById("dynamsoft-dwt-viewerToolbar" + l);
			q.updateEditor()
		}
	};
	f.prototype.updateMode = function() {
		var o = this,
			n;
		var m = a.one(o.toolbar.self).one(".dynamsoft-dwt-Editor_Buttons_next"),
			l = a.one(o.toolbar.self).one(".dynamsoft-dwt-Editor_Buttons_previous");
		o.cIndex = o._UIView.cCurrentIndex;
		o.totalImagesCount = o._UIView.aryModelImageControl.length;
		if (o.totalImagesCount > 1) {
			if (m && m.getEL()) {
				if (o.cIndex == o.totalImagesCount - 1) {
					m[0].src = d.next_grey;
					m[0].style.cursor = "auto"
				} else {
					m[0].src = d.next;
					m[0].style.cursor = "pointer"
				}
				if (o.cIndex == 0) {
					l[0].src = d.previous_grey;
					l[0].style.cursor = "auto"
				} else {
					l[0].src = d.previous;
					l[0].style.cursor = "pointer"
				}
			}
		} else {
			if (m && m.getEL()) {
				m[0].src = d.next_grey;
				m[0].style.cursor = "auto";
				l[0].src = d.previous_grey;
				l[0].style.cursor = "auto"
			}
		}
		o.updateButtons();
		o.__SetCropButtonGrey(true);
		o.__SetEraseButtonGrey(true);
		switch (o.cursorStatus) {
			case "hand":
				o.Hand_btn();
				break;
			case "zoom":
				o.Zoom_btn();
				break;
			default:
				o.RectSelect_btn()
		}
	};
	f.prototype.CloseImageEditor = function() {
		var l = this;
		a.hide("dynamsoft_ImgSizeEditor");
		a.hide("dynamsoft_RotateAnyAngle");
		window.onresize = null;
		l._stwain.__strDWTControlEditorID = "";
		if (l._IfChangedWithinTheEditor == true) {
			l.ShowDialogForSaveImage(-1, true);
			return
		}
		document.body.style.overflow = "";
		l.__HideImageEditorInner()
	};
	f.prototype.__HideImageEditorInner = function() {
		var l = this;
		if (l._UIView) {
			l._UIView.Clear();
			delete l._UIView;
			l._UIView = false
		}
		l.aryModelImageControl = [];
		l.aryCurrentSelectedImageIndicesInBuffer = [];
		l.UIEditor = null;
		l._stwain = null;
		l.evt_switch = null;
		l.evt_mouseMove = null;
		l.evt_mouseIn = null;
		l.evt_mouseOut = null;
		l.evt_mouseClick = null;
		l.evt_mouseDblClick = null;
		l.onRefreshUI = false;
		l.onMouseRightClick = false;
		l.onMouseClick = false;
		l.onMouseDoubleClick = false;
		l.onMouseMove = false;
		if (l.bExistingDIV == false) {
			l.container.remove()
		} else {
			Dynamsoft.Lib.one(l.container[0].firstChild).remove()
		}
		l._UIManager._UIEditor = null;
		l._UIManager = null
	};
	f.prototype.previous_btn = function() {
		var n = this,
			l, m = a.one(n.toolbar.self).one(".dynamsoft-dwt-Editor_Buttons_previous");
		if (m && m.getEL()) {
			l = m[0].src;
			if (l.indexOf("grey") != -1) {
				return
			} else {
				n.previous()
			}
		}
	};
	f.prototype.next_btn = function() {
		var n = this,
			l, m = a.one(n.toolbar.self).one(".dynamsoft-dwt-Editor_Buttons_next");
		if (m && m.getEL()) {
			l = m[0].src;
			if (l.indexOf("grey") != -1) {
				return
			} else {
				n.next()
			}
		}
	};
	f.prototype.previous = function() {
		var l = this;
		if (l.cIndex == -1) {
			j.output(l, "No image in Buffer");
			return
		}
		l.go(l.cIndex - 1)
	};
	f.prototype.next = function() {
		var l = this;
		if (l.cIndex == -1) {
			j.output(l, "No image in Buffer");
			return
		}
		l.go(l.cIndex + 1)
	};
	f.prototype.go = function(l) {
		var m = this;
		if (m.cIndex == -1) {
			j.output(m, "No image in Buffer");
			return
		}
		if (m._IfChangedWithinTheEditor == true) {
			m.ShowDialogForSaveImage(l, false);
			return
		}
		m.__goInner(l)
	};
	f.prototype.__goInner = function(l) {
		var m = this;
		m.totalImagesCount = m._UIView.aryModelImageControl.length;
		if (typeof(l) !== "undefined") {
			if (l < 0 || l >= m.totalImagesCount) {
				return
			}
			m.cIndex = l;
			if (m._UIView) {
				m.bCouldBeTimeConsuming = true;
				Dynamsoft.Lib.showMask();
				m._UIView.ShowImage(l, m._UIView.aryModelImageControl[m.cIndex])
			}
			m._UIManager.getView().SetCurrentIndexOnly(l)
		}
		m.updateMode();
		m._stwain._OnBitmapChanged(["0", m.cIndex.toString(), 5, m.cIndex, m._UIView.sHowManyImages])
	};
	f.prototype.Rotate = function(l, m) {
		var n = this;
		if (n.cIndex == -1) {
			j.output(n, "No image in Buffer");
			return
		}
		if (typeof l === "undefined" || typeof m === "undefined") {
			alert(i.CustomizableDisplayInfo.errorMessages.insufficientParas)
		} else {
			if (n._UIManager.bImageChangedInViewer == true) {
				n._IfSaveChangesOutSideOfTheEditor = true;
				n.__SaveImageInner(false, function() {
					n.bCouldBeTimeConsuming = true;
					Dynamsoft.Lib.showMask();
					n._stwain.Rotate(n.cIndex, l, m);
					n._UIManager.bImageJustChangedInEditor = true;
					n._IfChangedWithinTheEditor = true;
					n.iChangedIndex = n.cIndex
				})
			} else {
				n.bCouldBeTimeConsuming = true;
				Dynamsoft.Lib.showMask();
				n._IfSaveChangesOutSideOfTheEditor = false;
				n._stwain.Rotate(n.cIndex, l, m);
				n._UIManager.bImageJustChangedInEditor = true;
				n._IfChangedWithinTheEditor = true;
				n.iChangedIndex = n.cIndex
			}
		}
	};
	f.prototype.RotateEx = function(l, n, m) {
		var o = this;
		if (o.cIndex == -1) {
			j.output(o, "No image in Buffer");
			return
		}
		if (typeof l === "undefined" || typeof n === "undefined" || typeof m === "undefined") {
			alert(i.CustomizableDisplayInfo.errorMessages.insufficientParas)
		} else {
			if (o._UIManager.bImageChangedInViewer == true) {
				o._IfSaveChangesOutSideOfTheEditor = true;
				o.__SaveImageInner(false, function() {
					o.bCouldBeTimeConsuming = true;
					Dynamsoft.Lib.showMask();
					o._UIManager.bImageJustChangedInEditor = true;
					o._stwain.RotateEx(o.cIndex, l, n, m);
					o._IfChangedWithinTheEditor = true;
					o.iChangedIndex = o.cIndex
				})
			} else {
				o.bCouldBeTimeConsuming = true;
				Dynamsoft.Lib.showMask();
				o._IfSaveChangesOutSideOfTheEditor = false;
				o._UIManager.bImageJustChangedInEditor = true;
				o._IfChangedWithinTheEditor = true;
				o.iChangedIndex = o.cIndex;
				o._stwain.RotateEx(o.cIndex, l, n, m)
			}
		}
	};
	f.prototype.RotateLeft = function() {
		var l = this;
		if (l.cIndex == -1) {
			j.output(l, "No image in Buffer");
			return
		}
		if (l._UIManager.bImageChangedInViewer == true) {
			l._IfSaveChangesOutSideOfTheEditor = true;
			l.__SaveImageInner(false, function() {
				l.bCouldBeTimeConsuming = true;
				Dynamsoft.Lib.showMask();
				l._UIManager.bImageJustChangedInEditor = true;
				l._stwain.RotateLeft(l.cIndex);
				l._IfChangedWithinTheEditor = true;
				l.iChangedIndex = l.cIndex
			})
		} else {
			l.bCouldBeTimeConsuming = true;
			Dynamsoft.Lib.showMask();
			l._IfSaveChangesOutSideOfTheEditor = false;
			l._UIManager.bImageJustChangedInEditor = true;
			l._IfChangedWithinTheEditor = true;
			l.iChangedIndex = l.cIndex;
			l._stwain.RotateLeft(l.cIndex)
		}
	};
	f.prototype.RotateAnyAngle = function(r) {
		var n = this;
		if (n.cIndex == -1) {
			j.output(n, "No image in Buffer");
			return
		}
		a.hide("dynamsoft_ImgSizeEditor");
		if (!a.get("dynamsoft_RotateAnyAngle")) {
			var t = ['<div id="dynamsoft_RotateAnyAngle" class="dynamsoft-dwt-imgSizeEditor" style="display:none; z-index: 99999;">', "<ul>", '<li><label for="dynamsoft_Angle"><b>', i.CustomizableDisplayInfo.dialogText.dlgRotateAnyAngle[0], '</b><input type="text" id="dynamsoft_Angle" style="width:50%;" size="10"/></label></li>', '<li><label for="dynamsoft_Angle_InterpolationMethod"><b>', i.CustomizableDisplayInfo.dialogText.dlgRotateAnyAngle[1], '</b>&nbsp;<select size="1" id="dynamsoft_Angle_InterpolationMethod"><option value = ""></option></select></li>', '<li><label for="dynamsoft_KeepSize"><b></b>', '<input type="checkbox" id="dynamsoft_KeepSize"/>', i.CustomizableDisplayInfo.dialogText.dlgRotateAnyAngle[2], "</label></li></ul>", "<div>", '<input id="dynamsoft_btnRotateAnyAngleOK" type="button" value="', i.CustomizableDisplayInfo.dialogText.dlgRotateAnyAngle[3], '"/><span><input id= "dynamsoft_btnCancelRotateAnyAngle" type="button" value="', i.CustomizableDisplayInfo.dialogText.dlgRotateAnyAngle[4], '" /></span></div>', "</div>"];
			a.one("body").append(t.join(""))
		}
		var u = a.get("dynamsoft_Angle_InterpolationMethod");
		u.options.length = 0;
		u.options.add(new Option("NearestNeighbor", 1));
		u.options.add(new Option("Bilinear", 2));
		u.options.add(new Option("Bicubic", 3));
		u = null;
		var p = a.get("dynamsoft_btnRotateAnyAngleOK");
		p.onclick = function() {
			var y = a.get("dynamsoft_Angle").value;
			a.get("dynamsoft_Angle").className = "";
			var w = /^\d+$/;
			if (!w.test(y) || y <= 0) {
				a.get("dynamsoft_Angle").className += " invalid";
				a.get("dynamsoft_Angle").focus();
				alert(i.CustomizableDisplayInfo.errorMessages.invalidAngle);
				return
			}
			var x = a.get("dynamsoft_KeepSize");
			var v = x.checked;
			n.bCouldBeTimeConsuming = true;
			Dynamsoft.Lib.showMask();
			var o = n.RotateEx(y, v, a.get("dynamsoft_Angle_InterpolationMethod").selectedIndex + 1);
			if (n._stwain.ErrorCode == 0) {
				a.hide("dynamsoft_RotateAnyAngle");
				return
			}
		};
		var m = a.get("dynamsoft_btnCancelRotateAnyAngle");
		m.onclick = function() {
			a.hide("dynamsoft_RotateAnyAngle")
		};
		var l = a.get("dynamsoft_RotateAnyAngle");
		a.toggle("dynamsoft_RotateAnyAngle");
		var q = r.y;
		if (!q) {
			q = r.offsetTop + 1
		}
		var s = r.x;
		if (!s) {
			s = r.offsetLeft + 1
		}
		l.style.top = q + r.offsetHeight + document.documentElement.scrollTop + "px";
		l.style.left = s + document.documentElement.scrollLeft + "px";
		a.get("dynamsoft_Angle").value = "45"
	};
	f.prototype.RotateRight = function() {
		var l = this;
		if (l.cIndex == -1) {
			j.output(l, "No image in Buffer");
			return
		}
		if (l._UIManager.bImageChangedInViewer == true) {
			l._IfSaveChangesOutSideOfTheEditor = true;
			l.__SaveImageInner(false, function() {
				l.bCouldBeTimeConsuming = true;
				Dynamsoft.Lib.showMask();
				l._stwain.RotateRight(l.cIndex);
				l._UIManager.bImageJustChangedInEditor = true;
				l._IfChangedWithinTheEditor = true;
				l.iChangedIndex = l.cIndex
			})
		} else {
			l.bCouldBeTimeConsuming = true;
			Dynamsoft.Lib.showMask();
			l._IfSaveChangesOutSideOfTheEditor = false;
			l._UIManager.bImageJustChangedInEditor = true;
			l._IfChangedWithinTheEditor = true;
			l.iChangedIndex = l.cIndex;
			l._stwain.RotateRight(l.cIndex)
		}
	};
	f.prototype.Deskew = function() {
		var l = this;
		if (l.cIndex == -1) {
			j.output(l, "No image in Buffer");
			return
		}
		if (l._UIManager.bImageChangedInViewer == true) {
			l._IfSaveChangesOutSideOfTheEditor = true;
			l.__SaveImageInner(false, function() {
				l.bCouldBeTimeConsuming = true;
				Dynamsoft.Lib.showMask();
				l.RotateEx(l._stwain.GetSkewAngle(l.cIndex), true, 1);
				l._UIManager.bImageJustChangedInEditor = true;
				l._IfChangedWithinTheEditor = true;
				l.iChangedIndex = l.cIndex
			})
		} else {
			l.bCouldBeTimeConsuming = true;
			Dynamsoft.Lib.showMask();
			l._IfSaveChangesOutSideOfTheEditor = false;
			l._UIManager.bImageJustChangedInEditor = true;
			l._IfChangedWithinTheEditor = true;
			l.iChangedIndex = l.cIndex;
			l.RotateEx(l._stwain.GetSkewAngle(l.cIndex), true, 1)
		}
	};
	f.prototype.Flip = function() {
		var l = this;
		if (l.cIndex == -1) {
			j.output(l, "No image in Buffer");
			return
		}
		if (l._UIManager.bImageChangedInViewer == true) {
			l._IfSaveChangesOutSideOfTheEditor = true;
			l.__SaveImageInner(false, function() {
				l.bCouldBeTimeConsuming = true;
				Dynamsoft.Lib.showMask();
				l._stwain.Flip(l.cIndex);
				l._UIManager.bImageJustChangedInEditor = true;
				l._IfChangedWithinTheEditor = true;
				l.iChangedIndex = l.cIndex
			})
		} else {
			l.bCouldBeTimeConsuming = true;
			Dynamsoft.Lib.showMask();
			l._IfSaveChangesOutSideOfTheEditor = false;
			l._UIManager.bImageJustChangedInEditor = true;
			l._IfChangedWithinTheEditor = true;
			l.iChangedIndex = l.cIndex;
			l._stwain.Flip(l.cIndex)
		}
	};
	f.prototype.Mirror = function() {
		var l = this;
		if (l.cIndex == -1) {
			j.output(l, "No image in Buffer");
			return
		}
		if (l._UIManager.bImageChangedInViewer == true) {
			l._IfSaveChangesOutSideOfTheEditor = true;
			l.__SaveImageInner(false, function() {
				l.bCouldBeTimeConsuming = true;
				Dynamsoft.Lib.showMask();
				l._stwain.Mirror(l.cIndex);
				l._UIManager.bImageJustChangedInEditor = true;
				l._IfChangedWithinTheEditor = true;
				l.iChangedIndex = l.cIndex
			})
		} else {
			l.bCouldBeTimeConsuming = true;
			Dynamsoft.Lib.showMask();
			l._IfSaveChangesOutSideOfTheEditor = false;
			l._UIManager.bImageJustChangedInEditor = true;
			l._IfChangedWithinTheEditor = true;
			l.iChangedIndex = l.cIndex;
			l._stwain.Mirror(l.cIndex)
		}
	};
	f.prototype.ChangeImageSize = function(m, l, n) {
		var o = this;
		if (o.cIndex == -1) {
			j.output(o, "No image in Buffer");
			return
		}
		if (o._UIManager.bImageChangedInViewer == true) {
			o._IfSaveChangesOutSideOfTheEditor = true;
			o.__SaveImageInner(false, function() {
				o.bCouldBeTimeConsuming = true;
				Dynamsoft.Lib.showMask();
				o._stwain.ChangeImageSize(o.cIndex, m, l, n);
				o._UIManager.bImageJustChangedInEditor = true;
				o._IfChangedWithinTheEditor = true;
				o.iChangedIndex = o.cIndex
			})
		} else {
			o.bCouldBeTimeConsuming = true;
			Dynamsoft.Lib.showMask();
			o._IfSaveChangesOutSideOfTheEditor = false;
			o._UIManager.bImageJustChangedInEditor = true;
			o._IfChangedWithinTheEditor = true;
			o.iChangedIndex = o.cIndex;
			o._stwain.ChangeImageSize(o.cIndex, m, l, n)
		}
	};
	f.prototype.ChangeImageSizeGetinput = function(r) {
		var n = this;
		if (n.cIndex == -1) {
			j.output(n, "No image in Buffer");
			return
		}
		a.hide("dynamsoft_RotateAnyAngle");
		if (!a.get("dynamsoft_ImgSizeEditor")) {
			var t = ['<div id="dynamsoft_ImgSizeEditor" class="dynamsoft-dwt-imgSizeEditor" style="display:none;z-index: 99999;">', "<ul>", '<li><label for="dynamsoft_img_height"><b>', i.CustomizableDisplayInfo.dialogText.dlgChangeImageSize[0], '</b><input type="text" id="dynamsoft_img_height" style="width:50%;" size="10"/>pixel</label></li>', '<li><label for="dynamsoft_img_width"><b>', i.CustomizableDisplayInfo.dialogText.dlgChangeImageSize[1], '</b>&nbsp;<input type="text" id="dynamsoft_img_width" style="width:50%;" size="10"/>pixel</label></li>', "<li>", i.CustomizableDisplayInfo.dialogText.dlgChangeImageSize[2], '<select size="1" id="dynamsoft_InterpolationMethod"><option value = ""></option></select></li>', "</ul>", "<div>", '<input id="dynamsoft_btnChangeImageSizeOK" type="button" value="', i.CustomizableDisplayInfo.dialogText.dlgChangeImageSize[3], '"/><span><input id= "dynamsoft_btnCancelChange" type="button" value="', i.CustomizableDisplayInfo.dialogText.dlgChangeImageSize[4], '"/></span></div>', "</div>"];
			a.one("body").append(t.join(""))
		}
		var u = a.get("dynamsoft_InterpolationMethod");
		u.options.length = 0;
		u.options.add(new Option("NearestNeighbor", 1));
		u.options.add(new Option("Bilinear", 2));
		u.options.add(new Option("Bicubic", 3));
		u = null;
		var l = a.get("dynamsoft_btnChangeImageSizeOK");
		l.onclick = function() {
			var x = a.get("dynamsoft_img_width").value,
				o = a.get("dynamsoft_img_height").value;
			a.get("dynamsoft_img_width").className = "";
			a.get("dynamsoft_img_height").className = "";
			var w = /^\d+$/;
			if (!w.test(o) || o <= 0) {
				a.get("dynamsoft_img_height").className += " invalid";
				a.get("dynamsoft_img_height").focus();
				alert(i.CustomizableDisplayInfo.errorMessages.invalidHeightOrWidth);
				return
			}
			if (!w.test(x) || x <= 0) {
				a.get("dynamsoft_img_width").className += " invalid";
				a.get("dynamsoft_img_width").focus();
				alert(i.CustomizableDisplayInfo.errorMessages.invalidHeightOrWidth);
				return
			}
			var v = n.ChangeImageSize(x, o, a.get("dynamsoft_InterpolationMethod").selectedIndex + 1);
			if (n._stwain.ErrorCode == 0) {
				a.hide("dynamsoft_ImgSizeEditor");
				return
			}
		};
		var p = a.get("dynamsoft_btnCancelChange");
		p.onclick = function() {
			a.hide("dynamsoft_ImgSizeEditor")
		};
		var m = a.get("dynamsoft_ImgSizeEditor");
		a.toggle("dynamsoft_ImgSizeEditor");
		var q = r.y;
		if (!q) {
			q = r.offsetTop + 1
		}
		var s = r.x;
		if (!s) {
			s = r.offsetLeft + 1
		}
		m.style.top = q + r.offsetHeight + document.documentElement.scrollTop + "px";
		m.style.left = s + document.documentElement.scrollLeft + "px";
		if (n._UIView.aryModelImageControl[n.cIndex].imageToShow) {
			a.get("dynamsoft_img_width").value = n._UIView.aryModelImageControl[n.cIndex].imageToShow.width;
			a.get("dynamsoft_img_height").value = n._UIView.aryModelImageControl[n.cIndex].imageToShow.height
		} else {
			a.get("dynamsoft_img_width").value = 0;
			a.get("dynamsoft_img_height").value = 0
		}
		return false
	};
	f.prototype.Crop_btn = function() {
		var n = this,
			l, m = a.one(n.toolbar.self).one(".dynamsoft-dwt-Editor_Buttons_crop");
		if (m && m.getEL()) {
			l = m[0].src;
			if (l.indexOf("grey") != -1) {
				return
			} else {
				n.Crop()
			}
		}
	};
	f.prototype.Erase_btn = function() {
		var n = this,
			m, l = a.one(n.toolbar.self).one(".dynamsoft-dwt-Editor_Buttons_erase");
		if (l && l.getEL()) {
			m = l[0].src;
			if (m.indexOf("grey") != -1) {
				return
			} else {
				n.Erase()
			}
		}
	};
	f.prototype.Crop = function() {
		var r = this;
		if (r.cIndex == -1) {
			j.output(r, "No image in Buffer");
			return
		}
		var o = r.actualSelectedCanvasAreas;
		if (o.length != 2) {
			j.output(r, "No area selected for cropping");
			return
		} else {
			var n = o[1];
			var q = n.left;
			var p = n.top;
			var m = n.right;
			var l = n.bottom;
			if (parseInt(q) - parseInt(m) != 0 && parseInt(p) - parseInt(l) != 0) {
				if (r._UIManager.bImageChangedInViewer == true) {
					r._IfSaveChangesOutSideOfTheEditor = true;
					r.__SaveImageInner(false, function() {
						r.bCouldBeTimeConsuming = true;
						Dynamsoft.Lib.showMask();
						r._stwain.Crop(r.cIndex, parseInt(q), parseInt(p), parseInt(m), parseInt(l));
						r._UIManager.bImageJustChangedInEditor = true;
						r.__SetCropButtonGrey(true);
						r.__SetEraseButtonGrey(true);
						r._IfChangedWithinTheEditor = true;
						r.iChangedIndex = r.cIndex
					})
				} else {
					r.bCouldBeTimeConsuming = true;
					Dynamsoft.Lib.showMask();
					r._IfSaveChangesOutSideOfTheEditor = false;
					r._UIManager.bImageJustChangedInEditor = true;
					r._IfChangedWithinTheEditor = true;
					r.iChangedIndex = r.cIndex;
					r._stwain.Crop(r.cIndex, parseInt(q), parseInt(p), parseInt(m), parseInt(l));
					r.__SetCropButtonGrey(true);
					r.__SetEraseButtonGrey(true)
				}
			}
		}
	};
	f.prototype.Erase = function() {
		var q = this,
			n = false;
		if (q.cIndex == -1) {
			j.output(q, "No image in Buffer");
			return
		}
		var p = q.actualSelectedCanvasAreas;
		if (p.length == 1) {
			j.output(q, "No area selected for erasing");
			return
		}
		if (q._UIManager.bImageChangedInViewer == true) {
			q._IfSaveChangesOutSideOfTheEditor = true;
			q.__SaveImageInner(false, function() {
				for (var x = 1; x < p.length; x++) {
					var w = p[x];
					var z = w.left;
					var y = w.top;
					var v = w.right;
					var u = w.bottom;
					if (parseInt(z) - parseInt(v) != 0 && parseInt(y) - parseInt(u) != 0) {
						q.bCouldBeTimeConsuming = true;
						Dynamsoft.Lib.showMask();
						q._stwain.Erase(q.cIndex, parseInt(z), parseInt(y), parseInt(v), parseInt(u));
						q._UIManager.bImageJustChangedInEditor = true;
						q._IfChangedWithinTheEditor = true;
						q.iChangedIndex = q.cIndex;
						n = true
					}
				}
				q.__SetEraseButtonGrey(n);
				q.__SetCropButtonGrey(n)
			})
		} else {
			q._IfSaveChangesOutSideOfTheEditor = false;
			q._IfChangedWithinTheEditor = true;
			q.iChangedIndex = q.cIndex;
			for (var o = 1; o < p.length; o++) {
				var s = p[o];
				var m = s.left;
				var r = s.top;
				var t = s.right;
				var l = s.bottom;
				if (parseInt(m) - parseInt(t) != 0 && parseInt(r) - parseInt(l) != 0) {
					q.bCouldBeTimeConsuming = true;
					Dynamsoft.Lib.showMask();
					q._stwain.Erase(q.cIndex, parseInt(m), parseInt(r), parseInt(t), parseInt(l));
					q._UIManager.bImageJustChangedInEditor = true;
					q._IfChangedWithinTheEditor = true;
					q.iChangedIndex = q.cIndex;
					n = true
				}
			}
			q.__SetEraseButtonGrey(n);
			q.__SetCropButtonGrey(n)
		}
	};
	f.prototype.StrechMode = function() {
		var l = this;
		if (l.cIndex == -1) {
			j.output(l, "No image in Buffer");
			return
		}
		if (l._UIView) {
			l._UIView.SetIfFitWindowAndType(4)
		}
		l.__SetZoomInButtonEnable(true);
		l.__SetZoomOutButtonEnable(true);
		l.__SetCropButtonGrey(true);
		l.__SetEraseButtonGrey(true);
		return
	};
	f.prototype.FitsWindowSize = function() {
		var l = this;
		if (l.cIndex == -1) {
			j.output(l, "No image in Buffer");
			return
		}
		if (l._UIView) {
			l._UIView.SetIfFitWindowAndType(0)
		}
		l.__SetZoomInButtonEnable(true);
		l.__SetZoomOutButtonEnable(true);
		l.__SetCropButtonGrey(true);
		l.__SetEraseButtonGrey(true);
		return
	};
	f.prototype.FitsWindowWidth = function(l) {
		var m = this;
		if (m.cIndex == -1) {
			j.output(m, "No image in Buffer");
			return
		}
		if (m._UIView) {
			m._UIView.SetIfFitWindowAndType(2)
		}
		m.__SetZoomInButtonEnable(true);
		m.__SetZoomOutButtonEnable(true);
		m.__SetCropButtonGrey(true);
		m.__SetEraseButtonGrey(true);
		return
	};
	f.prototype.FitsWindowHeight = function(l) {
		var m = this;
		if (m.cIndex == -1) {
			j.output(m, "No image in Buffer");
			return
		}
		if (m._UIView) {
			m._UIView.SetIfFitWindowAndType(1)
		}
		m.__SetZoomInButtonEnable(true);
		m.__SetZoomOutButtonEnable(true);
		m.__SetCropButtonGrey(true);
		m.__SetEraseButtonGrey(true);
		return
	};
	f.prototype.ZoomIn = function() {
		var l = this;
		if (l.cIndex == -1) {
			j.output(l, "No image in Buffer");
			return
		}
		if (l._UIView && l._UIView.ZoomIn()) {
			l.__SetZoomInButtonEnable(true);
			l.__SetZoomOutButtonEnable(true)
		} else {
			l.__SetZoomInButtonEnable(false);
			l.__SetZoomOutButtonEnable(true)
		}
		l.__SetCropButtonGrey(true);
		l.__SetEraseButtonGrey(true)
	};
	f.prototype.ZoomOut = function() {
		var l = this;
		if (l.cIndex == -1) {
			j.output(l, "No image in Buffer");
			return
		}
		if (l._UIView && l._UIView.ZoomOut()) {
			l.__SetZoomOutButtonEnable(true);
			l.__SetZoomInButtonEnable(true)
		} else {
			l.__SetZoomOutButtonEnable(false);
			l.__SetZoomInButtonEnable(true)
		}
		l.__SetCropButtonGrey(true);
		l.__SetEraseButtonGrey(true)
	};
	f.prototype.OriginalSize = function() {
		var l = this;
		if (l.cIndex == -1) {
			j.output(l, "No image in Buffer");
			return
		}
		if (l._UIView) {
			l._UIView.SetZoom(1)
		}
		l.__SetZoomInButtonEnable(true);
		l.__SetZoomOutButtonEnable(true);
		l.__SetCropButtonGrey(true);
		l.__SetEraseButtonGrey(true);
		return
	};
	f.prototype.Hand_btn = function() {
		var m = this,
			l = EnumDWT_MouseShape.Hand;
		if (m._UIView) {
			m._UIView.SetMouseShapeByIndex(m.cIndex, l)
		}
		m.__EnableMouseShapButtons(l);
		m.cursorStatus = "hand"
	};
	f.prototype.RectSelect_btn = function() {
		var m = this,
			l = EnumDWT_MouseShape.Crosshair;
		if (m.cIndex == -1) {
			j.output(m, "No image in Buffer");
			return
		}
		if (m._UIView) {
			m._UIView.SetMouseShapeByIndex(m.cIndex, l)
		}
		m.__EnableMouseShapButtons(l);
		m.cursorStatus = "rectselect"
	};
	f.prototype.Zoom_btn = function() {
		var m = this,
			l = EnumDWT_MouseShape.Zoom;
		if (m.cIndex == -1) {
			j.output(m, "No image in Buffer");
			return
		}
		if (m._UIView) {
			m._UIView.SetMouseShapeByIndex(m.cIndex, l)
		}
		m.__EnableMouseShapButtons(l);
		m.cursorStatus = "zoom"
	};
	f.prototype.__EnableMouseShapButtons = function(s) {
		var n = this,
			r = a.one(n.toolbar.self),
			t, q, o;
		if (r && r.getEL()) {
			var l = r.one(".dynamsoft-dwt-Editor_Buttons_hand"),
				m = r.one(".dynamsoft-dwt-Editor_Buttons_rectselect"),
				p = r.one(".dynamsoft-dwt-Editor_Buttons_zoom");
			j.removeClass(l.parent(), "dynamsoft-dwt-EditorButton-selected");
			j.removeClass(m.parent(), "dynamsoft-dwt-EditorButton-selected");
			j.removeClass(p.parent(), "dynamsoft-dwt-EditorButton-selected");
			if (window.innerWidth > 800) {
				if (s == EnumDWT_MouseShape.Hand) {
					j.addClass(l.parent(), "dynamsoft-dwt-EditorButton-selected")
				} else {
					if (s == EnumDWT_MouseShape.Crosshair) {
						j.addClass(m.parent(), "dynamsoft-dwt-EditorButton-selected")
					} else {
						if (s == EnumDWT_MouseShape.Zoom) {
							j.addClass(p.parent(), "dynamsoft-dwt-EditorButton-selected")
						}
					}
				}
			}
		}
	};
	f.prototype.print = function() {
		var q = this,
			m = q._UIView;
		if (q.cIndex == -1) {
			j.output(q, "No image in Buffer");
			return
		}
		if (m) {
			if (m.cCurrentIndex < 0) {
				return
			}
			var n = b.getImageUrl(m.BaseUrl, m.cCurrentIndex, -1, -1);
			var l = q._UIView.aryModelImageControl[m.cCurrentIndex];
			var p = [];
			var o = new a.UI.PrintUrl(n, l.imageWidth, l.imageHeight);
			p.push(o);
			b.print(p);
			return true
		}
	};
	f.prototype.scan = function() {
		var m = this,
			l = function() {
				m._stwain.SelectSource(function() {
					m._stwain.CloseSource();
					m._stwain.OpenSource();
					m._stwain.IfShowUI = true;
					if (Dynamsoft.WebTwainEnv.IfConfineMaskWithinTheViewer == true) {
						Dynamsoft.WebTwainEnv.IfConfineMaskWithinTheViewer = false;
						m._stwain.AcquireImage({}, function() {
							Dynamsoft.WebTwainEnv.IfConfineMaskWithinTheViewer = true;
							if (window.onresize == null) {
								window.onresize = function() {
									m.ShowImageEditorEx(-1, -1, -1, -1)
								}
							}
						}, function() {
							if (window.onresize == null) {
								window.onresize = function() {
									m.ShowImageEditorEx(-1, -1, -1, -1)
								}
							}
						})
					} else {
						m._stwain.AcquireImage()
					}
				}, function() {
					a.log("User did not select a source")
				})
			};
		if (m._IfChangedWithinTheEditor) {
			m.ShowDialogForSaveImage(m.cIndex, false, l, l)
		} else {
			l()
		}
	};
	f.prototype.load = function() {
		var n = this,
			m = null,
			l = function() {
				var s = function() {
					a.log("Loaded an image successfully.");
					if (m != null) {
						n._stwain.Addon.PDF.SetConvertMode(m)
					}
				};
				var q = function(u, t) {
					a.log("Loading failed with the error: " + t);
					if (m != null) {
						n._stwain.Addon.PDF.SetConvertMode(m)
					}
				};
				n._stwain.IfShowFileDialog = true;
				if (n._stwain.Addon && n._stwain.Addon.PDF) {
					var o = false,
						p, r = a.License.checkProductKey(n._stwain, {
							PDFRasterizer: true
						}, false, true);
					if (r) {
						m = n._stwain.Addon.PDF.GetConvertMode();
						p = n._stwain._innerFun("GetAddOnVersion", Dynamsoft.Lib.html5.Funs.makeParams("pdf"));
						if (a.env.bMac && p == Dynamsoft.PdfMacVersion) {
							o = true
						} else {
							if (a.env.bLinux && p == Dynamsoft.PdfLinuxVersion) {
								o = true
							} else {
								if (p == Dynamsoft.PdfVersion) {
									o = true
								}
							}
						}
						if (o) {
							n._stwain.Addon.PDF.SetConvertMode(1)
						}
					}
				}
				n._stwain.LoadImageEx("", 5, s, q)
			};
		if (n._IfChangedWithinTheEditor) {
			n.ShowDialogForSaveImage(n.cIndex, false, l, l)
		} else {
			l()
		}
	};
	f.prototype.removeselected = function() {
		var l = this;
		if (l.cIndex == -1) {
			j.output(l, "No image in Buffer");
			return
		}
		l._stwain.RemoveAllSelectedImages()
	};
	f.prototype.removeall = function() {
		var l = this;
		if (l.cIndex == -1) {
			j.output(l, "No image in Buffer");
			return
		}
		l._stwain.RemoveAllImages()
	};
	f.prototype.RestoreImage = function() {
		var l = this;
		if (l.cIndex == -1) {
			j.output(l, "No image in Buffer");
			return
		}
		l.__RestoreImageInner(true, -1)
	};
	f.prototype.__RestoreImageInner = function(o, m, r) {
		var s = this,
			p;
		if (s.iChangedIndex == -1) {
			if (r) {
				r()
			}
			return
		}
		var n = function(u, w, v) {
			if (o == true) {
				a.log("__RestoreImageInner: " + [w.imageIndex].join(","));
				w.bOriginalImage = true;
				if (s._UIView && u.GetBindIndex() == v) {
					s._UIView.AttachImagesForControl(u, w)
				}
			}
			s._IfChangedWithinTheEditor = false;
			s.iChangedIndex = -1;
			var t = s._UIView.aryModelImageControl[v];
			if (t != null) {
				t.imageToShow = w.imageToShow;
				t.imageWidth = w.imageWidth;
				t.imageHeight = w.imageHeight;
				t.imageUrl = w.imageUrl
			}
			s._UIManager.getView().SetDataImageControl(v);
			s.updateButtons();
			if (m == -1) {
				s._stwain._OnBitmapChanged(["0", s.cIndex.toString(), 4, s.cIndex, s._UIView.sHowManyImages])
			}
			if (r) {
				r()
			}
		};
		var q = true;
		if (s._UIView && s._IfChangedWithinTheEditor == true) {
			s._UIView.__GoInner(s.iChangedIndex, true, false);
			var l = s._UIView.GetImageControl(s.iChangedIndex);
			if (null != l) {
				l.SetCurrentIndex(s.iChangedIndex);
				s.OnGetImageFromServerForEdit(l, s._UIView.aryModelImageControl[s.iChangedIndex], s.iChangedIndex, 1, n);
				q = false
			}
		}
		if (q) {
			if (r) {
				r()
			}
		}
	};
	f.prototype.OnGetImageFromServerForEdit = function(l, q, o, p, r) {
		var s = this,
			n, m;
		if (r && s.BaseUrl) {
			l.ClearImage();
			l.SetBindIndex(o);
			n = b.getUrlByAct(s.BaseUrl, o, p);
			m = new Image();
			m.src = n;
			m.onload = function() {
				l.tmpImage = false;
				q.imageToShow = m;
				q.imageWidth = m.width;
				q.imageHeight = m.height;
				q.imageUrl = n;
				q.bIsDirty = false;
				r(l, q, o);
				m.onerror = undefined;
				m.onload = undefined
			};
			m.onerror = function(v) {
				var w = l.GetBindIndex(),
					u = s._stwain,
					t = u.HowManyImagesInBuffer;
				if (w >= 0 && w < t) {
					m.ready_src = b.getUrlByAct(s.BaseUrl, l.GetBindIndex(), p);
					setTimeout(function() {
						if (m.ready_src) {
							m.src = m.ready_src
						} else {
							m.src = "data:,";
							m.onload = undefined;
							m.onerror = undefined;
							m = null;
							l.tmpImage = false
						}
						m.ready_src = undefined
					}, 3000)
				} else {
					m.src = "data:,";
					m.onload = undefined;
					m.onerror = undefined;
					m = null;
					l.tmpImage = false
				}
			};
			if (l.tmpImage) {
				l.tmpImage.src = "data:,";
				l.tmpImage.onload = undefined
			}
			l.tmpImage = m
		}
		return true
	};
	f.prototype.ChangeSize = function(l, m) {
		var n = this;
		if (n.cIndex == -1) {
			j.output(n, "No image in Buffer");
			return
		}
		if (l >= 0) {
			n.containerWidth = l
		}
		if (m >= 0) {
			n.containerHeight = m
		}
		n.width = n.containerWidth - 2;
		if (n.width < 0) {
			n.width = 0
		}
		n.height = n.containerHeight - 2;
		if (n.height < 0) {
			n.height = 0
		}
		n.UIEditor.css({
			width: n.width + "px",
			height: n.height + "px"
		})
	};
	f.prototype.SaveImage = function() {
		var l = this;
		if (l.cIndex == -1) {
			j.output(l, "No image in Buffer");
			return
		}
		l.__SaveImageInner(true, function() {
			l._stwain._OnBitmapChanged(["0", l.cIndex.toString(), 4, l.cIndex, l._UIView.sHowManyImages])
		})
	};
	f.prototype.__SaveImageInner = function(n, q) {
		var r = this,
			o;
		if (r.iChangedIndex == -1 && r._IfSaveChangesOutSideOfTheEditor == false) {
			if (q) {
				q()
			}
			return
		}
		if (r._IfChangedWithinTheEditor != true && r._IfSaveChangesOutSideOfTheEditor == false) {
			alert(i.CustomizableDisplayInfo.errorMessages.imageNotChanged);
			if (q) {
				q()
			}
			return
		}
		if (r._IfSaveChangesOutSideOfTheEditor) {
			r.iChangedIndex = r.cIndex
		}
		var m = function(t, v, u) {
			r.updateMode();
			if (n == true) {
				a.log("__SaveImageInner: " + [v.imageIndex].join(","));
				v.bOriginalImage = true;
				if (r._UIView && t.GetBindIndex() == u) {
					r._UIView.AttachImagesForControl(t, v)
				}
			}
			r._IfChangedWithinTheEditor = false;
			r.iChangedIndex = -1;
			var s = r._UIView.aryModelImageControl[u];
			if (s != null) {
				s.imageToShow = v.imageToShow;
				s.imageWidth = v.imageWidth;
				s.imageHeight = v.imageHeight;
				s.imageUrl = v.imageUrl
			}
			r._UIManager.getView().SetDataImageControl(u);
			r.updateButtons();
			if (q) {
				q()
			}
		};
		var p = true;
		if (r._UIView && r._IfChangedWithinTheEditor == true || r._IfSaveChangesOutSideOfTheEditor == true) {
			r._UIView.__GoInner(r.iChangedIndex, true, false);
			var l = r._UIView.GetImageControl(r.iChangedIndex);
			if (null != l) {
				l.SetCurrentIndex(r.iChangedIndex);
				r.OnGetImageFromServerForEdit(l, r._UIView.aryModelImageControl[r.iChangedIndex], r.iChangedIndex, 2, m);
				p = false
			}
		}
		r._IfSaveChangesOutSideOfTheEditor = false;
		if (p) {
			if (q) {
				q()
			}
		}
	};
	f.prototype.ShowDialogForSaveImage = function(m, r, q, n) {
		var s = this;
		var o = ['<div class="dynamsoft-dwt-dlg-tips">', "<div>", i.CustomizableDisplayInfo.dialogText.saveChangedImage[0], "</div>", '<div style="width: 200px;white-space:nowrap;margin-left: auto;margin-right: auto;">', '<input class="dynamsoft_btnSave" style="width: 100px; height:30px; margin-right: 10px; margin-top: 10px;"  type="button" value="', i.CustomizableDisplayInfo.dialogText.saveChangedImage[1], '" /><input class="dynamsoft_btnCancel" style="width: 100px; height:30px;"  type="button" value="', i.CustomizableDisplayInfo.dialogText.saveChangedImage[2], '" /></div>', "</div>"];
		Dynamsoft.WebTwainEnv.ShowDialog(420, 0, o.join(""), true);
		var l = a.one(".dynamsoft_btnSave").getEL();
		if (l) {
			l.onclick = function() {
				s.__SaveImageInner(false, function() {
					var t = s._stwain._strDWTControlContainerID;
					g.DCP_DWT_OnClickCloseInstall(t);
					a.bChangeImage = 1;
					if (m == -1) {
						s.__HideImageEditorInner()
					} else {
						s.__goInner(m)
					}
					if (r) {
						document.body.style.overflow = ""
					}
					if (j.isFunction(q)) {
						q()
					}
				})
			}
		}
		var p = a.one(".dynamsoft_btnCancel").getEL();
		if (p) {
			p.onclick = function() {
				s.__RestoreImageInner(false, m, function() {
					var t = s._stwain._strDWTControlContainerID;
					g.DCP_DWT_OnClickCloseInstall(t);
					a.bChangeImage = 0;
					if (m == -1) {
						s.__HideImageEditorInner()
					} else {
						s.__goInner(m)
					}
					if (r) {
						document.body.style.overflow = ""
					}
					if (j.isFunction(n)) {
						n()
					}
				})
			}
		}
	};
	f.prototype.__SetCropButtonGrey = function(m) {
		var o = this;
		var n = a.one(o.toolbar.self).one(".dynamsoft-dwt-Editor_Buttons_crop");
		if (n && n.getEL()) {
			n[0].src = d.crop_grey;
			n.style("cursor", "auto")
		}
		if (o._UIView && m) {
			var l = o._UIView.GetImageControl(o.cIndex);
			if (null != l) {
				l.SetSelectedImageArea(0, 0, 0, 0, true)
			}
		}
	};
	f.prototype.__SetEraseButtonGrey = function(n) {
		var o = this;
		var m = a.one(o.toolbar.self).one(".dynamsoft-dwt-Editor_Buttons_erase");
		if (m && m.getEL()) {
			m[0].src = d.erase_grey;
			m.style("cursor", "auto")
		}
		if (o._UIView && n) {
			var l = o._UIView.GetImageControl(o.cIndex);
			if (null != l) {
				l.SetSelectedImageArea(0, 0, 0, 0, true)
			}
		}
	};
	f.prototype.__SetZoomInButtonEnable = function(l) {
		var n = this;
		var m = a.one(n.toolbar.self).one(".dynamsoft-dwt-Editor_Buttons_zoomin");
		if (m && m.getEL()) {
			if (l == true) {
				m[0].src = d.zoomin;
				m.style("cursor", "pointer")
			} else {
				m[0].src = d.zoomin_grey;
				m.style("cursor", "auto")
			}
		}
	};
	f.prototype.__SetZoomOutButtonEnable = function(l) {
		var n = this;
		var m = a.one(n.toolbar.self).one(".dynamsoft-dwt-Editor_Buttons_zoomout");
		if (m && m.getEL()) {
			if (l == true) {
				m[0].src = d.zoomout;
				m.style("cursor", "pointer")
			} else {
				m[0].src = d.zoomout_grey;
				m.style("cursor", "auto")
			}
		}
	};
	f.prototype.refresh = function(m) {
		var n = this,
			l = false;
		if (n._IfChangedWithinTheEditor == true) {
			if (n.cIndex != m) {
				l = true;
				n.ShowDialogForSaveImage(m, false, function() {}, function() {})
			}
		}
		if (!l) {
			return n.refreshinner(m)
		}
	};
	f.prototype.refreshinner = function(l) {
		var m = this;
		m.cIndex = l;
		if (m._UIView) {
			m._UIView.SetDataImageControl(l);
			m._UIView.__SetCurrentIndex(l);
			m.updateMode()
		}
	};
	a.UI = a.UI || {};
	a.UI.ImageUIEditor = f
})(Dynamsoft.Lib);
(function(c) {
	if (!c.product.bChromeEdition) {
		return
	}
	var e = c.html5.Funs,
		d = !1,
		b = !0;

	function f(k, m) {
		var h, g, i = k._width,
			l = k._height,
			j = d;
		h = c.one("#" + k._strDWTControlContainerID);
		if (c.isString(i) && i.indexOf("%") >= 0) {
			i = c.css(h, "width") * parseInt(i) / 100;
			j = b
		} else {
			i = parseInt(i)
		}
		if (c.isString(l) && l.indexOf("%") >= 0) {
			l = c.css(h, "height") * parseInt(l) / 100;
			j = b
		} else {
			l = parseInt(l)
		}
		g = {
			Stwain: k,
			Container: m,
			Width: i,
			Height: l
		};
		e.bindUIViewEvents(k, g);
		k._UIManager = new c.UI.ImageUIManager(k, g);
		if (j) {
			e.changeImageUISize(k, k._width, k._height)
		}
	}

	function a(h, i) {
		var g = i || {};
		h.__OnImageAreaDeSelected = g.onImageAreaDeSelected || "";
		h.__OnImageAreaSelected = g.onImageAreaSelected || "";
		h.__OnMouseClick = g.onMouseClick || "";
		h.__OnMouseDoubleClick = g.onMouseDoubleClick || "";
		h.__OnMouseMove = g.onMouseMove || "";
		h.__OnMouseRightClick = g.onMouseRightClick || "";
		h.__OnTopImageInTheViewChanged = g.onTopImageInTheViewChanged || ""
	}
	c.mix(e, {
		init: function(k, v) {
			var h, i = false,
				r, g, o, n = false,
				q, u, j;
			u = [];
			u.push('<dialog class="dynamsoft-dwt-dialogProgress" closed="closed" style="top:30%"><h3 class="dynamsoft-finalMessage"></h3><p class="dynamsoft-status">0%</p>');
			if (c.env.bIE) {
				u.push('<div class="dynamsoft-progressBar" value="" max="100"></div>')
			} else {
				u.push('<progress class="dynamsoft-progressBar" value="" max="100"></progress>')
			}
			u.push('<br /><button class="dynamsoft-btnCancel" value="cancel" autofcus >cancel</button></dialog>');
			j = '<div class="dynamsoft-dwt-container-box"></div>';
			if (!k._bNoUI) {
				i = c.one("#" + v);
				i.html("");
				i.attr("class", k.containerClass);
				i.append(j);
				n = c.one(".dynamsoft-dwt-container-box", i)
			}
			if (n && n.getEL()) {
				n.style("position", "relative");
				e.changeImageUISize(k, k._width, k._height)
			}
			if (!c.dlgProgress) {
				o = c.one(".dynamsoft-dwt-dialogProgress");
				if (o && o.getEL()) {
					o.remove()
				}
				var m = c.parseHTML(u.join(""));
				if (m && m.length > 0) {
					document.body.appendChild(m[0])
				}
				if (c.env.bIE) {
					var s = c.one(".dynamsoft-progressBar"),
						t = s && s.getEL();
					if (t) {
						t.objProgressBar = new c.ProgressBar(t, {
							width: 300,
							height: 20
						})
					}
				}
				o = c.one(".dynamsoft-dwt-dialogProgress");
				if (o && o.getEL()) {
					c.dlgProgress = o[0];
					c.dialog.setup(c.dlgProgress)
				}
				c.dlgRef = 0;
				c.dialogShowStatus = d;
				c.cancelFrome = 0;
				var p = function() {
					var w = c.cancelFrome;
					c.closeProgress(0);
					if (c.bio) {
						c.bio.abort();
						c.bio = d
					} else {
						if (w == 3 || w == 4) {
							k.SetCancel()
						}
					}
				};
				var l = c.one(".dynamsoft-btnCancel");
				if (l && l.getEL()) {
					c.addEventListener(l[0], "mousedown", p)
				}
			}
			f(k, n);
			a(k, k.config)
		},
		changeImageUISize: function(k, j, l) {
			var h, i, p = -1,
				s = -1,
				g = j,
				r = l,
				o = d,
				q, m;
			h = c.one("#" + k._strDWTControlContainerID);
			if (c.isString(j) && j.indexOf("%") >= 0) {
				q = c.css(h, "width");
				if (q == 0) {
					h[0].style.width = "100%"
				}
				q = c.css(h, "width") * parseInt(j) / 100;
				o = b
			} else {
				q = parseInt(j);
				g = [q + 2, "px"].join("")
			}
			if (c.isString(l) && l.indexOf("%") >= 0) {
				m = c.css(h, "height");
				if (m == 0) {
					h[0].style.height = "100%"
				}
				m = c.css(h, "height") * parseInt(l) / 100;
				o = b
			} else {
				m = parseInt(l);
				r = [m + 2, "px"].join("")
			}
			if (h) {
				i = c.one(".dynamsoft-dwt-container-box", h);
				if (i && i.getEL()) {
					i.style("width", g);
					i.style("height", r)
				}
			}
			if (o) {
				if (!k.__funResize) {
					k.__funResize = function() {
						var t = e.__innerGetUIViewRealSize(k._strDWTControlContainerID, k._width, k._height);
						if (k._UIManager) {
							return k._UIManager.ChangeSize(t.width, t.height)
						}
						return b
					}
				}
				c.removeEventListener(window, "resize", k.__funResize);
				c.addEventListener(window, "resize", k.__funResize)
			} else {
				if (k.__funResize) {
					c.removeEventListener(window, "resize", k.__funResize);
					k.__funResize = d
				}
			}
			var n = e.__innerGetUIViewRealSize(k._strDWTControlContainerID, q, m);
			if (k._UIManager) {
				return k._UIManager.ChangeSize(n.width, n.height)
			}
			return b
		},
		__innerGetUIViewRealSize: function(i, g, k) {
			var h, j = -1,
				l = -1;
			h = c.one("#" + i);
			if (c.isString(g) && g.indexOf("%") >= 0) {
				j = c.css(h, "width") * parseInt(g) / 100
			}
			if (j < 0 && g) {
				j = parseInt(g)
			}
			if (c.isString(k) && k.indexOf("%") >= 0) {
				l = c.css(h, "height") * parseInt(k) / 100
			}
			if (l < 0 && k) {
				l = parseInt(k)
			}
			return {
				width: j,
				height: l
			}
		},
		bindUIViewEvents: function(i, g) {
			var j = i,
				h;
			g.onSelected = function(k) {
				var m = k.length,
					l;
				if (m > 0) {
					j.__SelectedImagesCount = m;
					l = k[m - 1];
					j.__cIndex = l;
					h = e.__SetSelectedImages(j, j.__cIndex, k);
					if (h && c.isFunction(j.__OnRefreshUI)) {
						j.__OnRefreshUI(l)
					}
				} else {
					j.__SelectedImagesCount = 0
				}
			};
			g.onRefreshUI = function(k) {
				e.__innerRefreshFromUIView(j, k)
			};
			g.onResetCurrentIndex = function(k) {
				if (k >= 0 && j.__cIndex != k) {
					j._innerFun("CurrentImageIndexInBuffer", e.makeParams(k));
					if (c.isFunction(j.__OnIndexChangeDuringDragDrop) && j._UIManager._UIView.bDraggingDropping) {
						j.__OnIndexChangeDuringDragDrop(j.__cIndex, k)
					}
					j.__cIndex = k
				}
			};
			g.onMouseMove = function(m) {
				var l = m.index;
				if (m) {
					var k = m.x,
						n = m.y;
					j.__MouseX = k;
					j.__MouseY = n
				}
				if (c.isFunction(j.__OnMouseMove)) {
					j.__OnMouseMove(l)
				}
			};
			g.onMouseClick = function(m) {
				var l = m.index;
				if (m) {
					var k = m.x,
						n = m.y;
					j.__MouseX = k;
					j.__MouseY = n
				}
				if (c.isFunction(j.__OnMouseClick)) {
					j.__OnMouseClick(l)
				}
			};
			g.onMouseDoubleClick = function(l) {
				var k = l.index;
				if (c.isFunction(j.__OnMouseDoubleClick)) {
					j.__OnMouseDoubleClick(k)
				}
			};
			g.onMouseRightClick = function(m) {
				var l = m.index;
				if (m) {
					var k = m.x,
						n = m.y;
					j.__MouseX = k;
					j.__MouseY = n
				}
				if (c.isFunction(j.__OnMouseRightClick)) {
					return j.__OnMouseRightClick(l)
				}
				return b
			};
			g.onImageAreaSelected = function(k) {
				if (c.isFunction(j.__OnImageAreaSelected)) {
					j.__OnImageAreaSelected(k.index, k.left, k.top, k.right, k.bottom, k.areaIndex)
				}
			};
			g.onImageAreaDeSelected = function(k) {
				if (c.isFunction(j.__OnImageAreaDeSelected)) {
					j.__OnImageAreaDeSelected(k)
				}
			}
		},
		__innerRefreshFromUIView: function(h, i, g) {
			var j = h;
			if (i >= 0) {
				if (!g) {
					j.CurrentImageIndexInBuffer = i
				}
			}
			if (c.isFunction(j.__OnRefreshUI)) {
				j.__OnRefreshUI(i)
			}
		}
	});
	c.html5.ui = {
		init: function(g, h) {
			g._strDWTControlContainerID = h.containerID || ("dynamsoft-dwt-container-" + g.clientId);
			g._width = h.width;
			g._height = h.height;
			g.containerClass = "dynamsoft-dwt-container dynamsoft-dwt-noPadding";
			e.init(g, g._strDWTControlContainerID);
			g.objectName = g._strDWTControlContainerID + "_obj";
			g.__OnMouseClick = h.onMouseClick || "";
			g.__OnMouseDoubleClick = h.onMouseDoubleClick || "";
			g.__OnMouseRightClick = h.onMouseRightClick || "";
			g.__OnMouseMove = h.onMouseMove || "";
			g.__OnImageAreaSelected = h.onImageAreaSelected || "";
			g.__OnImageAreaDeSelected = h.onImageAreaDeSelected || "";
			g.__OnRefreshUI = h.onRefreshUI || "";
			g.__MouseX = 0;
			g.__MouseY = 0;
			g.__style = new c.html5.STwainStyle(g);
			g.__fSelectionRectAspectRatio = 0
		},
		unLoad: function(h) {
			var i = h._strDWTControlContainerID;
			var g = c.get(i);
			if (g) {
				g.innerHTML = ""
			}
		},
		addMethods: function(g) {
			c.mix(g, {
				OverlayRectangle: function(l, n, m, j, i, h, k) {
					var o = this;
					if (e.isServerInvalid(o)) {
						return false
					}
					if (n > j || m > i || (n == j && m == i)) {
						c.Errors.Overlay_InvalidLeftOrTopOrRightOrBottom(o);
						return false
					}
					return o._UIManager.OverlayRectangle(l, n, m, j, i, h, k)
				},
				SetViewMode: function(l, j) {
					var m = this,
						k, i;
					k = Math.floor(l);
					i = Math.floor(j);
					m._UIManager.SetViewMode(k, i);
					return true
				},
				Print: function(h) {
					var j = this;
					if (h) {
						var i = true;
						return j._innerSend("PrintEx", e.makeParams(i), function() {}, function() {})
					}
					j._UIManager.Print();
					return true
				},
				ShowImageEditor: function(j, i, h, k) {
					var l = this;
					if (e.isServerInvalid(l)) {
						return d
					}
					if (l._UIManager._UIEditor) {
						return l.ShowImageEditorEx(-1, -1, -1, -1, 3)
					}
					if (j && i && h) {
						return l.ShowImageEditorEx(-1, -1, i, h, 0, true, j, k)
					} else {
						return l.ShowImageEditorEx(-1, -1, -1, -1, 0, false)
					}
				},
				ShowImageEditorEx: function(p, n, j, i, k, h, m, o) {
					var l = this;
					return l._UIManager.ShowImageEditorEx(p, n, j, i, k, h, m, o)
				},
				SetSelectedImageArea: function(k, m, l, j, h) {
					var n = this,
						i = parseInt(k);
					if (i < 0 || i >= n.HowManyImagesInBuffer) {
						c.Errors.IndexOutOfRange(n);
						return false
					}
					if (e.isServerInvalid(n)) {
						return false
					}
					return n._UIManager.SetSelectedImageArea(i, m, l, j, h)
				},
				first: function() {
					var i = this,
						h = i._UIManager.count();
					if (h > 0) {
						i._UIManager.Go(0);
						e.__innerRefreshFromUIView(i, i._UIManager.GetCurrentImageIndex())
					}
					return b
				},
				previous: function() {
					var i = this,
						h = i._UIManager.count();
					if (h > 0) {
						i._UIManager.__Previous();
						e.__innerRefreshFromUIView(i, i._UIManager.GetCurrentImageIndex())
					}
					return b
				},
				next: function() {
					var i = this,
						h = i._UIManager.count();
					if (h > 0) {
						i._UIManager.__Next();
						e.__innerRefreshFromUIView(i, i._UIManager.GetCurrentImageIndex())
					}
					return b
				},
				last: function() {
					var i = this,
						h = i._UIManager.count();
					if (h > 0) {
						i._UIManager.Go(h - 1);
						e.__innerRefreshFromUIView(i, i._UIManager.GetCurrentImageIndex())
					}
					return b
				}
			})
		}
	}
})(Dynamsoft.Lib);
(function(d) {
	if (!d.product.bChromeEdition) {
		return
	}
	var g = d.html5.Funs,
		f = 0,
		h = 1,
		a = 1,
		e = !1,
		c = !0,
		b = g.DEF;
	d.attachPropertyUI = function(i) {
		b(i, "Width", {
			get: function() {
				return i._width
			},
			set: function(j) {
				var l = false;
				if (Dynamsoft.Lib.isString(j)) {
					if (j.length > 0) {
						if (j.charAt(j.length - 1) === "%") {
							l = j
						}
					}
				}
				if (!l && j) {
					var k = parseInt(j);
					if (k) {
						l = k + "px"
					}
				}
				if (l) {
					i._width = l;
					return g.changeImageUISize(i, l, false)
				}
				return false
			}
		});
		b(i, "Height", {
			get: function() {
				return i._height
			},
			set: function(j) {
				var l = false;
				if (Dynamsoft.Lib.isString(j)) {
					if (j.length > 0) {
						if (j.charAt(j.length - 1) === "%") {
							l = j
						}
					}
				}
				if (!l && j) {
					var k = parseInt(j);
					if (k) {
						l = k + "px"
					}
				}
				if (l) {
					i._height = l;
					return g.changeImageUISize(i, false, l)
				}
				return false
			}
		});
		b(i, "AllowMultiSelect", {
			get: function() {
				return i._UIManager.GetAllowMultiSelect()
			},
			set: function(j) {
				i._UIManager.SetAllowMultiSelect(j)
			}
		});
		b(i, "BackgroundColor", {
			get: function() {
				return i._UIManager.GetBackgroundColor()
			},
			set: function(j) {
				return i._UIManager.SetBackgroundColor(j)
			}
		});
		b(i, "BackgroundFillColor", {
			get: function() {
				var j = i._innerFun("BackgroundFillColor");
				return d.BGR2RGB(j)
			},
			set: function(k) {
				var l = k * 1,
					j;
				if (!d.isNumber(l) || isNaN(l)) {
					d.Errors.InvalidValue(i);
					return e
				}
				j = d.RGB2BGR(l);
				return i._innerFun("BackgroundFillColor", g.makeParams(j))
			}
		});
		b(i, "FitWindowType", {
			get: function() {
				return i._UIManager.GetFitWindowType()
			},
			set: function(j) {
				var k = j * 1;
				return i._UIManager.SetFitWindowType(k)
			}
		});
		b(i, "IfFitWindow", {
			get: function() {
				return i._UIManager.GetIfFitWindow()
			},
			set: function(j) {
				if (j) {
					return i._UIManager.SetIfFitWindow(true)
				} else {
					return i._UIManager.SetIfFitWindow(false)
				}
			}
		});
		b(i, "ImageMargin", {
			get: function() {
				return i._UIManager.GetImageMargin()
			},
			set: function(j) {
				return i._UIManager.SetImageMargin(j)
			}
		});
		b(i, "MouseX", {
			get: function() {
				return i.__MouseX
			}
		});
		b(i, "MouseY", {
			get: function() {
				return i.__MouseY
			}
		});
		b(i, "SelectionImageBorderColor", {
			get: function() {
				return i._UIManager.GetSelectionImageBorderColor()
			},
			set: function(j) {
				return i._UIManager.SetSelectionImageBorderColor(j)
			}
		});
		b(i, "Zoom", {
			get: function() {
				return i._UIManager.GetZoom()
			},
			set: function(j) {
				return i._UIManager.SetZoom(j)
			}
		});
		b(i, "MouseShape", {
			get: function() {
				var j = i._UIManager.GetMouseShape();
				return (j == EnumDWT_MouseShape.Hand)
			},
			set: function(j) {
				var k = EnumDWT_MouseShape.Crosshair;
				if (j) {
					k = EnumDWT_MouseShape.Hand
				}
				return i._UIManager.SetMouseShape(k)
			}
		});
		b(i, "SelectionRectAspectRatio", {
			get: function() {
				return i._UIManager.GetSelectionRectAspectRatio()
			},
			set: function(j) {
				var k = parseFloat(j);
				if (k >= 0) {
					i._UIManager.SetSelectionRectAspectRatio(k);
					return true
				}
				return false
			}
		});
		b(i, "ShowPageNumber", {
			get: function() {
				return i._UIManager.GetShowPageNumber()
			},
			set: function(j) {
				return i._UIManager.SetShowPageNumber(j)
			}
		});
		b(i, "IfAutoScroll", {
			get: function() {
				return i._UIManager.GetIfAutoScroll()
			},
			set: function(j) {
				return i._UIManager.SetIfAutoScroll(j)
			}
		})
	};
	d.detect.viewerScriptLoaded = c
})(Dynamsoft.Lib);