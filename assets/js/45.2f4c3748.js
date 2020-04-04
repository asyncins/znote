(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{425:function(s,t,e){"use strict";e.r(t);var o=e(3),i=Object(o.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("Boxx"),s._v(" "),e("h2",{attrs:{id:"servlet-单实例多线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#servlet-单实例多线程"}},[s._v("#")]),s._v(" Servlet(单实例多线程)")]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("1.Servlet的生命周期")]),e("ol",[e("li",[s._v("构造方法")]),s._v(" "),e("li",[s._v("初始化方法init()")]),s._v(" "),e("li",[s._v("service方法(由容器帮我们调用,不建议重写)")]),s._v(" "),e("li",[e("strong",[s._v("doGet/doPost方法(需要我们来进行逻辑处理)")])]),s._v(" "),e("li",[s._v("销毁方法destory()")])])]),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("2. Servlet的四个范围及其局限性")]),e("blockquote",[e("p",[s._v("因为可以通过这四个对象setAttribute()传值。")])]),s._v(" "),e("ol",[e("li",[e("strong",[s._v("pageContext")]),s._v("：第一范围,页面跳转立即失效")]),s._v(" "),e("li",[e("strong",[s._v("HttpServletRequest")]),s._v("：第二范围,重定向失效")]),s._v(" "),e("li",[e("strong",[s._v("HttpSession")]),s._v("：第三范围,默认有效期到或者浏览器关闭失效")]),s._v(" "),e("li",[e("strong",[s._v("ServletContext")]),s._v("：第四范围,只要tomcat开着一直有效")])])]),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("3. 两种跳转方式")]),e("ol",[e("li",[e("p",[e("u",[e("strong",[s._v("请求转发")])]),e("br"),s._v("\n跳转之后浏览器地址栏不发生改变；"),e("br"),s._v("\n跳转之前执行的是doGet/doPost，跳转之后还是执行的这个方法")])]),s._v(" "),e("li",[e("p",[e("strong",[e("u",[s._v("重定向")])]),e("br"),s._v("\n跳转之后浏览器地址栏发生改变；"),e("br"),s._v("\n跳转之后肯定执行doGet方法；"),e("br"),s._v("\nrequest第二范围失效(因为浏览器发送的不是同一个请求了)")])])])]),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("4. session保存信息及删除")]),e("ul",[e("li",[s._v("保存信息："),e("br"),e("code",[s._v('session.setAttribute("n",name);')]),e("br"),s._v('\nString name = (String)sessin.getAttribute("n");')]),s._v(" "),e("li",[s._v("删除信息："),e("br"),s._v('session.removeAttribute("n");'),e("br"),s._v(" "),e("code",[s._v("session.invalidate()")]),s._v("是把session内的所有属性都清除;")])])]),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("5. Cookie HttpSession两种会话机制比较")]),e("ul",[e("li",[e("em",[e("strong",[s._v("Cookie")])]),s._v(":"),e("br"),s._v("\n浏览器提供的会话信息,安全性较低；"),e("br"),s._v("\nCookie cookie = new Cookie(String,String)；"),e("br"),s._v("\ncookie仅支持字符串，默认不支持中文，是将信息保存到客户端本地")]),s._v(" "),e("li",[e("em",[e("strong",[s._v("session")])]),s._v(":"),e("br"),s._v("\n服务器提供的会话信息，安全性较高；"),e("br"),s._v("\nsession的信息当"),e("strong",[s._v("默认时间到期")]),s._v("(期间没有任何操作!!)或者"),e("strong",[s._v("关闭浏览器")]),s._v("或者"),e("strong",[s._v("调用invalidate()")]),s._v(" 之后失效")])]),s._v(" "),e("blockquote",[e("p",[s._v("不过现在一般都用基于客户端的"),e("a",{attrs:{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"}},[e("u",[e("strong",[s._v("JWT")])]),e("OutboundLink")],1),s._v("，轻便安全高效")])])]),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("6. Cookie和Session之间有什么联系,如果有,请说出他们的联系")]),e("ol",[e("li",[e("strong",[s._v("session默认依靠cookie维持")]),s._v("，如果cookie被禁用，那么session会话机制失效")]),s._v(" "),e("li",[s._v("session是由servlet容器创建的"),e("br"),s._v("\n当用户getSession()时，web容器会先去cookie查找有没有这个session的id，如果没有，那么cookie就会分配一个就jsessionid并且保存在cookie中")])])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);