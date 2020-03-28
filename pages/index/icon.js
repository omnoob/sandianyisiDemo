! function(c) {
  var e, a = '<svg><symbol id="icon-ziyuan" viewBox="0 0 1024 1024"><path d="M872.944099 489.73913l-3.498136-2.544099L196.531677 10.176398 185.401242 2.544099A31.801242 31.801242 0 0 0 173.31677 0a31.801242 31.801242 0 0 0-31.801242 31.801242v960.397516a31.801242 31.801242 0 0 0 31.801242 31.801242 31.801242 31.801242 0 0 0 12.084472-2.544099l11.130435-7.632299 673.232298-477.018633 3.180124-2.544099a31.801242 31.801242 0 0 0 0-44.52174z" fill="#ffffff" ></path></symbol></svg>',
    t = (e = document.getElementsByTagName("script"))[e.length - 1].getAttribute("data-injectcss");
  if (t && !c.__iconfont__svg__cssinject__) {
    c.__iconfont__svg__cssinject__ = !0;
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
    } catch (e) {
      console && console.log(e)
    }
  }! function(e) {
    if (document.addEventListener)
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(e, 0);
      else {
        var t = function() {
          document.removeEventListener("DOMContentLoaded", t, !1), e()
        };
        document.addEventListener("DOMContentLoaded", t, !1)
      }
    else document.attachEvent && (o = e, i = c.document, d = !1, (a = function() {
      try {
        i.documentElement.doScroll("left")
      } catch (e) {
        return void setTimeout(a, 50)
      }
      n()
    })(), i.onreadystatechange = function() {
      "complete" == i.readyState && (i.onreadystatechange = null, n())
    });

    function n() {
      d || (d = !0, o())
    }
    var o, i, d, a
  }(function() {
    var e, t, n, o, i, d;
    (e = document.createElement("div")).innerHTML = a, a = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", n = t, (o = document.body).firstChild ? (i = n, (d = o.firstChild).parentNode.insertBefore(i, d)) : o.appendChild(n))
  })
}(window);