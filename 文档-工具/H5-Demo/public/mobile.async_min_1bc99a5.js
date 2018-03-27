//功能数据发送及点击等各事件
define("page/mobile/mobile.async",
    function(a) { (function() {
        var t, e, n, i, o, p, d, r, u;
        a("page/mobile/mobile.async.less"),
            a("effect"),
            e = a("common"),
            i = a("music"),
            p = a("share"),
            n = a("db"),
            a("fingerprintDialog"),
            a("shareMask"),
            a("blessingList"),
            t = null,
            o = a("reportAbuse"),
            d = a("stat"),
            u = function() {
                var a, t, n;
                if (pageData.custom_form) {
                    t = e.b64DecodeUnicode(pageData.custom_form),
                        a = document.createElement("script");
                    try {
                        a.appendChild(document.createTextNode(t))
                    } catch(i) {
                        n = i,
                            a.text = t
                    }
                    return document.head.appendChild(a)
                }
            },
            r = function(a) {
                var t, e, n;
                t = [];
                for (e in a) n = a[e],
                n && t.push("" + e + "=" + (encodeURIComponent(n) || ""));
                return t.join("&")
            },
            function() {
                var a, c, l, s, f, g, h, w, D, m, b, v, y, S, k, _, P, K, x, U, V, C, j;
                for (d.init(), a = $(".link"), a.one("tap",
                    function() {
                        var a, t, e;
                        return a = $(this),
                            t = a.attr("data-href") || a.attr("href"),
                            e = a.attr("data-text") || a.text(),
                            d.sendLinkTo(t, e)
                    }), n.reportShare = n.registerMethod({
                    url: "/app/forward",
                    type: "put"
                }), n.reportViewCount = n.registerMethod({
                    url: "/app/viewcount",
                    type: "get",
                    data: {
                        appid: pageData.id
                    },
                    success: function() {return true;},
                    error:function () {
                       return true;
                    }
                }), n.getMusic = n.registerMethod({
                    type: "get"
                }), u(), null != pageData.id && n.reportViewCount(), w = null != (U = pageData.musiccfg) ? U: {},
                         w.mid ? n.getMusic({
                             url: "http://www.kuwo.cn/bd/search/getSongUrlByMid?mid=" + w.mid + "&format=mp3&bdfrom=tuzhan&c=okbaq5ac55vz",
                             dataType: "jsonp",
                             success: function(a) {
                                 console.log('111')
                                 var t, e;
                                 return t = null != (e = a.data) ? e.url: void 0,
                                 t && (pageData.musicPath = t),
                                     i.init()
                             }
                         }) : i.init(), c = window.location, k = c.search, k = k ? k.substring(1) : "", k = k.split("&"), m = {},
                         K = 0, x = k.length; x > K; K++) g = k[K],
                g && (g = g.split("="), g[0] && (m[g[0]] = decodeURIComponent(g[1])));
                window._hmt = window._hmt || [],
                    e.loadScript(null != ("undefined" != typeof pageData && null !== pageData ? pageData.ad: void 0) ? "https://hm.baidu.com/hm.js?5f2111f90d14723adeeb19dd2bbcce8d": "https://hm.baidu.com/hm.js?9ad3eedcbfcad678357018dda8c8c602"),
                    b = [],
                    l = pageData.cnl || m.cnl,
                    v = ["cnl", "cnltype", "actid", "stepid", "debug"],
                l && b.push("cnl=" + l);
                for (h in m) P = m[h],
                P && b.push("" + h + "=" + encodeURIComponent(P));
                return y = b.join("&"),
                y && (y = "?" + y),
                    e.loadScript("https://webapi.amap.com/maps?v=1.3&key=e2cad13fd9a89339f9a07c7758c42623"),
                    s = function() {},
                    /^mk/.test(pageData.app_pfid) ? (D = function() {
                        var a, t, e, n, i;
                        return null != ("undefined" != typeof pageData && null !== pageData ? pageData.ad: void 0) && (a = pageData.ad, null != (t = window.fiboSDK) && "function" == typeof t.pushView && t.pushView(a.pfid, a.id)),
                            null != (e = window.fiboSDK) ? e.init({
                                pfid: pageData.app_pfid,
                                appid: pageData.id,
                                mpid: null != (n = pageData.wechat_userdata) ? n.appid: void 0,
                                openid: null != (i = pageData.wechat_userdata) ? i.openid: void 0,
                                userInfo: pageData.wechat_userdata
                            }) : void 0
                    },
                        e.loadScript("https://res.fibodata.com/data/fibosdk.min.js", D, s, {
                            id: "newFiboDataSDK"
                        })) : (f = {
                        pfid: pageData.app_pfid || "55306108c51369f023cf59b2",
                        appid: pageData.id,
                        blext: !1
                    },
                    pageData.organizationid && (f.pfid = pageData.organizationid, f.blext = !0), D = function() {
                        var a, t, e, n;
                        return null != pageData.wechat_userdata && null != (t = window.dataSDK) && t.pushUserInfo(pageData.wechat_userdata),
                        null != ("undefined" != typeof pageData && null !== pageData ? pageData.ad: void 0) && (a = pageData.ad, null != (e = window.dataSDK) && "function" == typeof e.pushView && e.pushView(a.pfid, a.id)),
                            window.adsenable === !0 && null != (n = window.dataSDK) && "function" == typeof n.pushView ? n.pushView("UqAFqbzv", "13c35185-af4b-4888-9168-b32e9f007bca") : void 0
                    },
                        e.loadScript("https://res.fibodata.com/datahttps/datasdk.min.js?" + r(f), D, s, {
                            id: "fiboDataSDK"
                        })),
                    _ = "default",
                pageData.level > "2" && (_ = "vip"),
                "3" === pageData.state && (_ = "safe"),
                pageData && pageData.imgPath && pageData.imgPath.indexOf("http") < 0 && (pageData.imgPath = window.location.protocol + pageData.imgPath),
                    p.init({
                        debug: "true" === m.debug,
                        title: (pageData.name || "").replace("{{count}}", pageData.viewcount),
                        link: null != (V = pageData.shareUrl) ? V: location.origin + location.pathname + y + "#from=share",
                        imgUrl: null != (C = pageData.imgPath) ? C: "" + window.location.protocol + "//file.rabbitpre.com/default.png",
                        desc: pageData.desc,
                        userLevel: _,
                        appState: pageData.state,
                        cnl: null != (j = e.bom.query("cnl")) ? j: null,
                        onShare: function(a) {
                            var t, i;
                            if (pageData.id) return n.reportShare({
                                data: {
                                    appid: pageData.id,
                                    type: a,
                                    cnl: null != (t = e.bom.query("cnl")) ? t: null
                                }
                            }),window.fiboSDK ? window.fiboSDK.share(a) : null != (i = window.dataSDK) && "function" == typeof i.share ? i.share(a) : void 0
                        },
                        onCancel: function() {}
                    }),
                    t = $("#app-bottom"),
                    t.on("tap", ".link-report-abuse",
                        function() {
                            return o(function() {
                                return t.find(".link-report-abuse").hide()
                            })
                        }),
                    S = function(a) {
                        var t, e, n, i;
                        e = a.data,
                            i = a.origin;
                        try {
                            e = JSON.parse(e)
                        } catch(o) {
                            return void(n = o)
                        }
                        return t = e.code,
                            "PREV" === t ? void("function" == typeof window.prevPage && window.prevPage()) : "NEXT" === t ? void("function" == typeof window.nextPage && window.nextPage()) : (t = Number(t), void(t < pageData.pages.length && "function" == typeof window.go && window.go(t)))
                    },
                    window.addEventListener("message", S, !1)
            } ()
    }).call(this)
    });
define('page/mobile/mobile.async.less',
    function(require, exports, module) {
        function importStyle(css, id) {
            var ele = document.createElement('style');
            ele.id = id;
            document.getElementsByTagName('head')[0].appendChild(ele);
            if (ele.styleSheet) {
                ele.styleSheet.cssText = css;
            } else {
                ele.appendChild(document.createTextNode(css));
            }
        };
        importStyle("", "page/mobile/mobile.async.less");
    });
require("page/mobile/mobile.async.less");
define("effect",
    function(e, n, t) { (function() {
        var n, f, i, c;
        e.async("effect/effect.async"),
            n = e("zepto"),
            c = ["rainy", "fireworks", "erase"],
            i = function(n, t) {
                return - 1 === c.indexOf(n.effect.name) || n && (n.style.height < 1 || n.style.width < 1) ? void 0 : e.async("effect/" + n.effect.name,
                    function(e) {
                        var f;
                        return "erase" === n.effect.name && (f = function() {
                            return n.notAllowMoveToNext = !1
                        }),
                            e.init.call(null, n, t.firstElementChild, {
                                onFinished: f
                            })
                    })
            },
            f = function(n, t) {
                return - 1 !== c.indexOf(n.effect.name) ? e.async("effect/" + n.effect.name,
                    function(e) {
                        return e.destroy.call(null, n, t.firstElementChild)
                    }) : void 0
            },
            t.exports = {
                init: i,
                destroy: f
            }
    }).call(this)
    });
define("music",
    function(a, t, o) { (function() {
        var t, i, s, u, n, p, l, e, c, d;
        p = a("common"),
            t = a("zepto"),
            s = null,
            i = null,
            n = t("#wrapper"),
            u = t(window),
            l = function() {
                var a, o;
                // alert('0')
                // console.log(pageData.music)
                // console.log(pageData.musicPath)
                // console.log(pageData.music_is_auto)
                if (pageData.music && (a = "", 0 !== pageData.music_is_auto && (a = "autoplay = 'autoplay'"), s = t("<div id='music' class='music stopped'><audio id='music-audio'  class='audio' src='" + pageData.musicPath + "' loop " + a + " preload='auto' ></audio><div class='control'><div class='control-after'></div></div></div>"), s.appendTo(n), i = s.find("audio"), i[0].load(), 0 !== pageData.music_is_auto && (i.on("canplay", function() {
                        // alert('1');
                            return s.removeClass("stopped"),i[0].play()
                        }), i[0].play()),
                        s.on("tap",function() {
                        // alert('2')
                            return i[0][s.hasClass("stopped") ? "play": "pause"](pageData.musicPath),s.toggleClass("stopped")
                        }), 0 !== pageData.music_is_auto))
                    return u.on("touchstart", o = function() {
                        return i[0].play(),u.off("touchstart", o)
                    })
            },
            e = function() {
                return i ? i[0].play() : void 0
            }, d = function() {
                return i ? i[0].stop() : void 0
            }, c = function() {
                return i ? (s.addClass("stopped"), i[0].stop()) : void 0
            }, o.exports = {
                init: l,
                stopSilently: d,
                playSilently: e,
                stop: c
            }
    }).call(this)
    });
define("share",
    function(n, e, i) { (function() {
        var e, o, t, r, a, l, c, u;
        e = n("zepto"),
            t = n("common"),
            o = n("async"),
            r = n("db"),
            a = n("stat"),
            l = function(n) {
            // return true
                //分享待启用
                return r.fetchWxShare = r.registerMethod({
                    url: "http://v1.rabbitpre.com/common/wxshare",
                    type: "get"
                }), -1 !== navigator.userAgent.toLowerCase().indexOf("micromessenger") ? c(n) : void 0
            },
            c = function(n) {
                return o.parallel([
                    function(e) {
                        return r.fetchWxShare({
                            data: {
                                pageUrl: location.href.replace(/#.*$/, ""),
                                shareUrl: n.link,
                                userLevel: n.userLevel
                            },
                            complete: function(n) {
                                return e(n)
                            }
                        })
                    },
                        function(n) {
                            return t.loadScript("//res.wx.qq.com/open/js/jweixin-1.2.0.js",
                                function() {
                                    return n()
                                })
                        }],
                    function(i) {
                        var o, t, r;
                        if (!i.errorCode) return o = null != (r = n.debug) ? r: !1,
                            t = {
                                debug: o,
                                appId: "wx06a877b61d74ea72",
                                timestamp: parseInt("1429690618"),
                                nonceStr: "kxpmsmqtdab2cso",
                                signature: "81fe1716cc21be3647d13ffb8138ffbb340bd9de",
                                jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
                            },
                            n.link = ("undefined" != typeof pageData && null !== pageData ? pageData.sharelimit: void 0) || i.shareUrl || n.link,
                            delete i.shareUrl,

                            window.wx.config(e.extend({},
                                t, i)),
                            window.wx.ready(function() {
                                var i, o;
                                return i = e("#music-audio"), null != i[0] && "autoplay" === i.attr("autoplay") && null != (o = i[0]) && o.play(),u(n)}),window.wx.error(function(n) {

                                return n.params = t,
                                    a.sendComponent("ERROR", "WEXINCONFIG", "" + JSON.stringify(n)),
                                    o === !0 ? alert(JSON.stringify(n)) : void 0
                            })
                    })
            },
            u = function(n) {
                return window.dataSDK && window.dataSDK.dealUrl ? n.link = window.dataSDK.dealUrl(n.link) : window.fiboSDK && window.fiboSDK.dealUrl && (n.link = window.fiboSDK.dealUrl(n.link)),
                n.desc || (n.desc = n.title),
                    window.wx.onMenuShareTimeline({
                        title: n.title,
                        link: n.link,
                        imgUrl: n.imgUrl,
                        success: function() {
                            return "function" == typeof n.onShare ? n.onShare("timeline") : void 0
                        },
                        cancel: function() {
                            return "function" == typeof n.onCancel ? n.onCancel("timeline") : void 0
                        }
                    }),
                    window.wx.onMenuShareAppMessage({
                        title: n.title,
                        desc: n.desc,
                        link: n.link,
                        imgUrl: n.imgUrl,
                        success: function() {
                            return "function" == typeof n.onShare ? n.onShare("friend") : void 0
                        },
                        cancel: function() {
                            return "function" == typeof n.onCancel ? n.onCancel("friend") : void 0
                        }
                    }),
                    window.wx.onMenuShareQQ({
                        title: n.title,
                        desc: n.desc,
                        link: n.link,
                        imgUrl: n.imgUrl,
                        success: function() {
                            return "function" == typeof n.onShare ? n.onShare("qq") : void 0
                        },
                        cancel: function() {
                            return "function" == typeof n.onCancel ? n.onCancel("qq") : void 0
                        }
                    }),
                    window.wx.onMenuShareQZone({
                        title: n.title,
                        desc: n.desc,
                        link: n.link,
                        imgUrl: n.imgUrl,
                        success: function() {
                            return "function" == typeof n.onShare ? n.onShare("qzone") : void 0
                        },
                        cancel: function() {
                            return "function" == typeof n.onCancel ? n.onCancel("qzone") : void 0
                        }
                    }),
                    window.wx.onMenuShareWeibo({
                        title: n.title,
                        desc: n.desc,
                        link: n.link,
                        imgUrl: n.imgUrl,
                        success: function() {
                            return "function" == typeof n.onShare ? n.onShare("weibo") : void 0
                        },
                        cancel: function() {
                            return "function" == typeof n.onCancel ? n.onCancel("weibo") : void 0
                        }
                    })
            },
            i.exports = {
                init: l
            }
    }).call(this)
    });
define("fingerprintDialog",
    function(n, t, o) { (function() {
        var t, e, r, c = {}.hasOwnProperty,
            i = function(n, t) {
                function o() {
                    this.constructor = n
                }
                for (var e in t) c.call(t, e) && (n[e] = t[e]);
                return o.prototype = t.prototype,
                    n.prototype = new o,
                    n.__super__ = t.prototype,
                    n
            };
        t = n("zepto"),
            e = n("dialog"),
            r = function(o) {
                function e(o) {
                    o = t.extend({
                            className: "fingerprint",
                            confirm: window.isPC ? "确认": "快邀请好友一同参与",
                            content: "<p class='pre-content'>" + o.cmp.message.front + "</p><p class='mid-content'>第" + o.viewcount + "位</p><p class='post-content'>" + escapeHTML(o.cmp.message.end) + "</p>",
                            textAlign: "center",
                            onConfirm: function() {
                                return window.isPC ? void 0 : (n.async("shareMask",
                                    function(n) {
                                        return n.show()
                                    }), !1)
                            }
                        },
                        o),
                        e.__super__.constructor.call(this, o)
                }
                return i(e, o),
                    e
            } (e),
            o.exports = r
    }).call(this)
    });
define("shareMask",
    function(n, e, s) { (function() {
        var e, o, t, a, r, i;
        e = n("zepto"),
            n("shareMask/shareMask.async.less"),
            r = !1,
            o = null,
            a = function() {
                return r ? void 0 : (o = e('<div class="share-mask"></div>'), o.appendTo(document.body), o.on("tap",
                    function() {
                        return t()
                    }), r = !0)
            },
            i = function() {
                return r || a(),
                    o.show()
            },
            t = function() {
                return r || a(),
                    o.hide()
            },
            s.exports = {
                show: i,
                hide: t
            }
    }).call(this)
    });;
define("blessingList",
    function(n, t, e) { (function() {
        var t, o, r, i, a, l, s, u, c, d, p, m, g, f, h, v, b, C, w, D, P, y, k, L, R, E, I, M, N, O, T, x, z, A, G, H, S, Y, j;
        t = n("zepto"),
            m = n("common"),
            w = n("blessingList/blessingList.tpl"),
            C = n("blessingList/blessingItem.tpl"),
            g = n("db"),
            L = !1,
            a = null,
            i = null,
            c = null,
            l = null,
            d = null,
            r = null,
            s = null,
            u = null,
            o = null,
            p = null,
            f = 140,
            h = 15,
            D = 0,
            O = 20,
            N = 500,
            T = 500,
            v = {
                EMPTY: "暂无留言",
                LOADING: "正在加载",
                ERROR: "加载失败, 点击重试",
                END: "加载完毕"
            },
            E = !1,
            A = v.LOADING,
            g.postComment = g.registerMethod({
                url: "/comment",
                type: "post"
            }),
            g.getComments = g.registerMethod({
                url: "/comment/list/" + pageData.id,
                type: "get"
            }),
            M = {},
            k = function(n) {
                return M = n,
                    L ? void 0 : (o = t(document.body), p = t(window), a = t(w(n.data)), a.appendTo(document.body), H(), i = a.find("#blessing-content"), c = a.find("#blessing-name"), d = a.find(".blessing-submit"), r = a.find(".btn-close"), s = a.find(".blessing-list"), u = a.find(".btn-load-more"), N = 5 * o.height(), T = o.height(), f = parseInt(i.attr("maxlength")), h = parseInt(c.attr("maxlength")), l = a.find(".blessing-form"), b(), P(), L = !0)
            },
            H = function() {
                var n;
                return window.isPC ? (n = window.calPageSize(), a.css({
                    width: Math.ceil(n.width) + "px",
                    marginLeft: -n.width / 2 + "px"
                })) : void 0
            },
            b = function() {
                var e, o;
                return i.on("input",
                    function() {
                        var n;
                        return n = i.val().length,
                            i[n > f ? "addClass": "removeClass"]("error"),
                            Y()
                    }),
                    c.on("input",
                        function() {
                            var n;
                            return n = c.val().length,
                                c[n > h ? "addClass": "removeClass"]("error"),
                                Y()
                        }),
                    r.on("click",
                        function() {
                            return y()
                        }),
                    o = !1,
                    e = !1,
                    l.on("submit",
                        function(r) {
                            var a, u;
                            return r.preventDefault(),
                                o || e || !j(!0) ? void 0 : (o = !0, u = "", (pageData.level || 0) >= 2 && (u = pageData.logoPath ? "background: url('" + pageData.logoPath + "') no-repeat center center;background-size: contain;": "display: none;"), a = t(n("pageManagement/loading.tpl")({
                                    style: u
                                })), a.appendTo(l), i.add(c).blur(), M.addComment && M.addComment({
                                    content: m.str.trim(i.val())
                                }), g.postComment({
                                    data: {
                                        appid: pageData.id,
                                        nickname: m.str.trim(c.val()),
                                        content: m.str.trim(i.val())
                                    },
                                    success: function(n) {
                                        return I(),
                                            n = n.data,
                                            s.prepend(C({
                                                    data: {
                                                        items: [{
                                                            content: n.content,
                                                            nickname: n.nickname,
                                                            createtime: n.createtime,
                                                            updatetime: n.updatetime
                                                        }]
                                                    }
                                                },
                                                {
                                                    C: m
                                                })),
                                            S(v.END),
                                            e = !0
                                    },
                                    error: function() {
                                        return alert("网络繁忙, 请稍后再试")
                                    },
                                    complete: function() {
                                        return a.remove(),
                                            o = !1
                                    }
                                }))
                        }),
                    u.on("click",
                        function() {
                            return A === v.ERROR ? P() : void 0
                        }),
                    window.isPC ? a.on("scroll",
                        function() {
                            return G()
                        }) : (p.on("scroll",
                        function() {
                            return G()
                        }), p.on("touchend, touchmove",
                        function() {
                            return G()
                        })),
                    p.on("resize",
                        function() {
                            return H()
                        })
            },
            Y = function() {
                var n;
                return n = j(),
                    n ? d.prop("disabled", !1) : d.prop("disabled", !0)
            },
            j = function(n) {
                var t, e, o;
                return t = m.str.trim(i.val()),
                    e = m.str.trim(c.val()),
                    o = !0,
                (!t || t.length > f) && (n && i.addClass("error"), o = !1),
                (!e || e.length > h) && (n && c.addClass("error"), o = !1),
                    o
            },
            I = function() {
                var e, o, r;
                return r = "",
                    o = "",
                (pageData.level || 0) >= 2 && (pageData.logoPath ? r = "background: url('" + pageData.logoPath + "') no-repeat center center;background-size: contain;": (r = "display: none;", o = "top: 30%;")),
                    e = t(n("pageManagement/formSubmitSuccess.tpl")({
                        message: "留言成功!",
                        style: r,
                        messagestyle: o
                    })),
                    e.appendTo(l)
            },
            R = !1,
            P = function() {
                return R ? void 0 : (R = !0, g.getComments({
                    data: {
                        page: D + 1,
                        pagesize: O
                    },
                    success: function(n) {
                        return s.append(C(n, {
                            C: m
                        })),
                            D += 1,
                            0 === n.data.length && 1 === D ? void S(v.EMPTY) : S(O !== n.data.items.length ? v.END: v.LOADING)
                    },
                    error: function() {
                        return S(v.ERROR)
                    },
                    complete: function() {
                        return R = !1,
                            G()
                    }
                }))
            },
            S = function(n) {
                return u.text(n),
                    A = n
            },
            G = function() {
                return x() ? P() : void 0
            },
            x = function() {
                return E && A === v.LOADING && (window.isPC ? a.scrollTop() : o.scrollTop()) + T >= (window.isPC ? a.prop("scrollHeight") : a.height()) - N
            },
            z = function(n) {
                return k(n),
                    a.show(),
                    E = !0
            },
            y = function() {
                return a.hide(),
                    E = !1,
                    "function" == typeof M.onHide ? M.onHide() : void 0
            },
            e.exports = {
                init: k,
                show: z
            }
    }).call(this)
    });;
define("reportAbuse",
    function(t, e, r) { (function() {
        var e, o, n, p, s, i, a, u = {}.hasOwnProperty,
            c = function(t, e) {
                function r() {
                    this.constructor = t
                }
                for (var o in e) u.call(e, o) && (t[o] = e[o]);
                return r.prototype = e.prototype,
                    t.prototype = new r,
                    t.__super__ = e.prototype,
                    t
            };
        e = t("zepto"),
            p = t("dialog"),
            o = t("dialog/alert"),
            a = t("reportAbuse/postAd"),
            i = t("reportAbuse/reportAbuse.tpl"),
            t("reportAbuse/reportAbuse.async.less"),
            n = t("db"),
            n.reportAbuse = n.registerMethod({
                url: "/app/report",
                type: "post"
            }),
            s = function(t) {
                function r(t) {
                    var p, s = this;
                    return this === window ? new r(t) : (p = e.extend({},
                        {
                            title: "请选择",
                            content: i(),
                            className: "report-abuse",
                            confirm: "确认",
                            cancel: "取消",
                            onConfirm: function() {
                                var e;
                                return e = s.$dom.find("input:checked").parent(),
                                    e.hasClass("illegal-poster") ? (a.uploadFile(), o({
                                        title: "提交成功"
                                    })) : (n.reportAbuse({
                                        data: {
                                            appid: pageData.id,
                                            reason: e.text()
                                        }
                                    }), o({
                                        title: "提交成功"
                                    })),
                                    "function" == typeof t ? t() : void 0
                            }
                        }), void r.__super__.constructor.call(this, p))
                }
                return c(r, t),
                    r
            } (p),
            r.exports = s
    }).call(this)
    });;
define("dialog",
    function(o, t, n) { (function() {
        var t, i, e;
        t = o("zepto"),
            e = o("dialog/dialog.tpl"),
            o("dialog/dialog.async.less"),
            i = function() {
                function o(n) {
                    return null == n && (n = {}),
                        this === window ? new o(n) : (this.opts = n, this.$dom = t(e(n)), this.$dom.appendTo(document.body), this.$dialog = this.$dom.find(".dialog"), this.refreshLocation(), void this.bindEvents())
                }
                return o.prototype.show = function() {
                    return this.$dom.fadeIn()
                },
                    o.prototype.hide = function() {
                        var o = this;
                        return this.$dom.fadeOut(function() {
                            return o.destroy()
                        })
                    },
                    o.prototype.refreshLocation = function() {
                        return this.$dialog.css("marginTop", -this.$dialog.height() / 2 + "px")
                    },
                    o.prototype.bindEvents = function() {
                        var o = this;
                        return this.$dom.on("tap",
                            function() {
                                return o.hide()
                            }),
                            this.$dialog.on("tap",
                                function(o) {
                                    return o.stopPropagation()
                                }),
                            this.$dialog.on("tap", ".btn-cancel",
                                function() {
                                    var t, n;
                                    return t = "function" == typeof(n = o.opts).onCancel ? n.onCancel() : void 0,
                                        t !== !1 ? o.hide() : void 0
                                }),
                            this.$dialog.on("tap", ".btn-confirm",
                                function() {
                                    var t, n;
                                    return t = "function" == typeof(n = o.opts).onConfirm ? n.onConfirm() : void 0,
                                        t !== !1 ? o.hide() : void 0
                                })
                    },
                    o.prototype.destroy = function() {
                        return this.$dom.remove(),
                            this.$dom = null,
                            this.$dialog = null
                    },
                    o
            } (),
            n.exports = i
    }).call(this)
    });;
define('shareMask/shareMask.async.less',
    function(require, exports, module) {
        function importStyle(css, id) {
            var ele = document.createElement('style');
            ele.id = id;
            document.getElementsByTagName('head')[0].appendChild(ele);
            if (ele.styleSheet) {
                ele.styleSheet.cssText = css;
            } else {
                ele.appendChild(document.createTextNode(css));
            }
        };
        importStyle(".share-mask{display:none;background:url(//oss3.rabbitpre.com/rp2/apps/static/widget/shareMask/share-mask_00d3bd4.png) rgba(0,0,0,.6) no-repeat;background-size:90% auto;background-position:center 2em;position:absolute;top:0;left:0;right:0;bottom:0;z-index:101}", "shareMask/shareMask.async.less");
    });
require("shareMask/shareMask.async.less");
define("blessingList/blessingList.tpl",
    function(s, e, n) {
        n.exports = function(s) {
            s = s || {};
            var e = [];
            return e.push('<div class="blessing-dialog"> <div class="banner clearfix"> <button class="btn-close"><i class="icon icon-close"></i></button> </div> <form class="blessing-form"> <textarea id="blessing-content" class="blessing-content" name="blessing-content" placeholder="', s.content, '" maxlength="140"></textarea>  <p class="restriction-desc">限140字</p> <input id="blessing-name" class="blessing-name border-bottom" name="blessing-name" placeholder="', s.sign, '" maxlength="15"/>  <input class="blessing-submit" type="submit" value="', s.text, '" disabled/> </form>  <ul class="blessing-list border-top"> <div class="list-desc">最近留言</div> </ul> <button class="btn-load-more">正在加载</button></div>'),
                e.join("")
        }
    });;
define("blessingList/blessingItem.tpl",
    function(s, t, e) {
        e.exports = function(s, t) {
            s = s || {};
            for (var e = [], a = 0, n = s.data.items.length; n > a; a++) {
                var i = s.data.items[a];
                e.push('<li class="item"> <p class="name">', t.C.str.xss(i.nickname) || "", '</p> <p class="date">', t.C.formatDate("yyyy/MM/dd hh:mm:ss", i.createtime), '</p> <p class="clear"></p> <p class="content">', t.C.str.xss(i.content) || "", "</p></li>")
            }
            return e.join("")
        }
    });;
define("dialog/alert",
    function(t, o, n) { (function() {
        var o, r, e, i = {}.hasOwnProperty,
            c = function(t, o) {
                function n() {
                    this.constructor = t
                }
                for (var r in o) i.call(o, r) && (t[r] = o[r]);
                return n.prototype = o.prototype,
                    t.prototype = new n,
                    t.__super__ = o.prototype,
                    t
            };
        o = t("zepto"),
            e = t("dialog"),
            r = function(t) {
                function n(t) {
                    return this === window ? new n(t) : (t = o.extend({},
                        t, {
                            confirm: "确认"
                        }), void n.__super__.constructor.call(this, t))
                }
                return c(n, t),
                    n
            } (e),
            n.exports = r
    }).call(this)
    });;
define("reportAbuse/postAd",
    function(e, t, n) { (function() {
        var t, r, o, i, a, u, p, s, c;
        t = e("zepto"),
            o = e("db"),
            r = e("dialog/alert"),
            o.getSignature = o.registerMethod({
                url: "/upload/report/params"
            }),
            o.postFile = o.registerMethod({
                type: "POST",
                dataType: "json",
                cache: !1,
                processData: !1,
                contentType: !1
            }),
            o.postHtml = o.registerMethod({
                url: "/app/report",
                type: "post"
            }),
            i = t("html").html(),
        -1 !== location.hash.indexOf("REPORTAD") && setTimeout(function() {
                return c(function(e) {
                    return r({
                        title: "举报广告成功：" + e.get("key")
                    })
                })
            },
            5e3),
            p = function() {
                var e, n, r, o, u;
                return r = i,
                    o = a(r),
                    e = a(),
                    u = o.innerHTML.length,
                    n = e.innerHTML.length,
                    n > u ? i = t("html").html() : void 0
            },
            a = function(e) {
                var n, r;
                return n = document.createElement("html"),
                    n.innerHTML = e || t("html").html(),
                    r = t(n),
                    r.find(".wrapper").remove(),
                    r.find("head").remove(),
                    r.find(".dialog-outer").remove(),
                    n
            },
            u = function(e, t) {
                var n;
                return n = [],
                    n.push({
                        name: "xxx.html"
                    }),
                    o.getSignature({
                        data: {
                            serverType: "A",
                            type: "REPORT",
                            count: 1,
                            files: JSON.stringify(n)
                        },
                        success: function(n) {
                            return s(n[0], e, t)
                        },
                        error: function(e) {
                            return t && t(e)
                        }
                    })
            },
            s = function(e, t, n) {
                var r, a, u, p, s, c;
                a = i,
                    r = new FormData,
                    r.append("OSSAccessKeyId", e.accessKey),
                    r.append("policy", e.policy),
                    r.append("signature", e.token),
                    r.append("key", "" + e.key),
                    s = null != (c = e.xparams) ? c: {};
                for (u in s) p = s[u],
                    r.append("x-oss-meta-" + u, p);
                return r.append("file", new File(["<html>" + a + "</html>"], "" + e.key + ".html", {
                    type: "text/html"
                })),
                    o.postFile({
                        url: "http://" + s.bucket + ".oss-cn-shenzhen.aliyuncs.com/",
                        data: r,
                        success: function() {
                            return t && t(r)
                        },
                        error: function(e) {
                            return n && n(e)
                        }
                    })
            },
            c = function(e, n) {
                var r, a;
                return File ? u(e, n) : (r = document.createElement("html"), r.innerHTML = i, a = t(r), a.find("style").remove(), a.find("script").each(function() {
                    return t(this).attr("src") ? void 0 : t(this).remove()
                }), o.postHtml({
                    data: {
                        content: "<html>" + r.innerHTML + "</html>",
                        appid: pageData.id,
                        reason: t(".report-abuse").find("input:checked").parent().text()
                    },
                    success: function(t) {
                        return e && e(t)
                    },
                    error: function(e) {
                        return n && n(e)
                    }
                }))
            },
            n.exports = {
                uploadFile: c
            }
    }).call(this)
    });;
define("reportAbuse/reportAbuse.tpl",
    function(l, e, a) {
        a.exports = function(l) {
            l = l || {};
            var e = [];
            return e.push('<ul class="reasons"> <li class="reason"> <label class="illegal-poster"><input type="radio" name="reason" checked/>可选择1</label> </li> <li class="reason"> <label><input type="radio" name="reason"/>可选择2</label> </li> <li class="reason"> <label><input type="radio" name="reason"/>可选择3</label> </li> <li class="reason"> <label><input type="radio" name="reason"/>可选择4</label> </li> <li class="reason"> <label><input type="radio" name="reason"/>可选择5</label> </li> <li class="reason"> <label><input type="radio" name="reason"/>不想选择</label> </li></ul>'),
                e.join("")
        }
    });;
define('reportAbuse/reportAbuse.async.less',
    function(require, exports, module) {
        function importStyle(css, id) {
            var ele = document.createElement('style');
            ele.id = id;
            document.getElementsByTagName('head')[0].appendChild(ele);
            if (ele.styleSheet) {
                ele.styleSheet.cssText = css;
            } else {
                ele.appendChild(document.createTextNode(css));
            }
        };
        importStyle(".dialog.report-abuse{width:14rem;margin-left:-7rem}.dialog.report-abuse .content{padding:.5rem 0}.dialog.report-abuse .content .reason{padding:0 .3rem;line-height:2rem}.dialog.report-abuse .content .reason input[type=radio]{background:transparent;margin-right:.75rem;margin-left:.5rem;border:1px solid #aaa;border-radius:.5rem;width:.9rem;height:.9rem;vertical-align:middle;background-clip:padding-box;-webkit-appearance:none;position:relative}.dialog.report-abuse .content .reason input[type=radio]:checked{border-color:#68b30f;background-color:#68b30f}.dialog.report-abuse .content .reason input[type=radio]:checked:before,.dialog.report-abuse .content .reason input[type=radio]:checked:after{display:block}.dialog.report-abuse .content .reason input[type=radio]:before,.dialog.report-abuse .content .reason input[type=radio]:after{content:\"\";position:absolute;display:none;top:50%;left:50%;height:.1rem;background:#fff}.dialog.report-abuse .content .reason input[type=radio]:before{width:33.3%;-webkit-transform:translate(-70%,-50%) rotate(45deg);-ms-transform:translate(-70%,-50%) rotate(45deg);transform:translate(-70%,-50%) rotate(45deg);-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top}.dialog.report-abuse .content .reason input[type=radio]:after{width:50%;-webkit-transform:translate(-30%,-50%) rotate(-45deg);-ms-transform:translate(-30%,-50%) rotate(-45deg);transform:translate(-30%,-50%) rotate(-45deg)}", "reportAbuse/reportAbuse.async.less");
    });
require("reportAbuse/reportAbuse.async.less");
define("dialog/dialog.tpl",
    function(t, n, c) {
        c.exports = function(t) {
            t = t || {};
            var n = [];
            return n.push("<div class='dialog-outer'> <div class='dialog ", t.className, "'> <h3 class='title'>", t.title, "</h3> <div class='content'> ", t.content, " </div> <div class='actions ", t.confirm && t.cancel ? "double": "", "'> "),
            t.cancel && n.push('<button class="btn btn-left btn-cancel">', t.cancel, "</button>"),
            t.confirm && n.push('<button class="btn btn-right btn-confirm">', t.confirm, "</button>"),
                n.push(" </div> </div></div>"),
                n.join("")
        }
    });;
define('dialog/dialog.async.less',
    function(require, exports, module) {
        function importStyle(css, id) {
            var ele = document.createElement('style');
            ele.id = id;
            document.getElementsByTagName('head')[0].appendChild(ele);
            if (ele.styleSheet) {
                ele.styleSheet.cssText = css;
            } else {
                ele.appendChild(document.createTextNode(css));
            }
        };
        importStyle(".dialog-outer{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.6);z-index:1000}.dialog{position:absolute;top:45%;left:50%;width:10rem;margin-left:-5rem;background:#fff;border-radius:.5rem}.dialog .title{text-align:center;line-height:2rem;font-size:.9rem}.dialog .content{font-size:.6rem;line-height:1.2rem}.dialog .btn{background:#fff;font-size:.7rem;color:#0057af;display:inline-block;width:100%;border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;border:0;height:2rem;border-top:1px solid #aaa}.dialog .actions.double .btn{width:50%}.dialog .actions.double .btn-left{border-bottom-right-radius:0;border-right:1px solid #aaa}.dialog .actions.double .btn-right{border-bottom-left-radius:0}", "dialog/dialog.async.less");
    });
require("dialog/dialog.async.less")