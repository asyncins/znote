(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{427:function(s,t,v){"use strict";v.r(t);var _=v(3),l=Object(_.a)({},(function(){var s=this,t=s.$createElement,v=s._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[v("Boxx"),s._v(" "),v("h2",{attrs:{id:"第一天"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第一天"}},[s._v("#")]),s._v(" 第一天")]),s._v(" "),v("details",{staticClass:"custom-block details"},[v("summary",[s._v("1. 接口和抽象类之间的区别？")]),v("ol",[v("li",[v("p",[s._v("分别表示的"),v("strong",[s._v("类型不同")])]),s._v(" "),v("p",[s._v("接口："),v("strong",[s._v("interface")]),v("br"),s._v("\n抽象类："),v("strong",[s._v("class")])])]),s._v(" "),v("li",[v("p",[s._v("里面"),v("strong",[s._v("定义的属性修饰符不同")])]),s._v(" "),v("p",[s._v("接口：里面定义的属性默认都是静态的最终变量（public static final）"),v("br"),s._v("\n抽象类：里面定义的属性默认是（default）")])]),s._v(" "),v("li",[v("p",[s._v("里面"),v("strong",[s._v("定义的方法不同")])]),s._v(" "),v("p",[s._v("接口：里面定义的方法默认都是抽象方法（public abstarct）"),v("br"),s._v("\n从 jdk8.0开始 接口里面可以定义普通方法"),v("br"),s._v("\n抽象类：里面既可以定义抽象方法 又可以定义普通方法")])])])]),v("details",{staticClass:"custom-block details"},[v("summary",[s._v("2. ArrayList和Vector之间的区别？")]),v("ul",[v("li",[v("p",[v("em",[v("strong",[s._v("Vector")])]),s._v("：同一时间允许单个线程进行访问 效率较低，但是不会出现并发错误"),v("br"),s._v(" "),v("em",[v("strong",[s._v("ArrayList")])]),s._v("：同一时间允许多个线程进行访问 效率较高，但是可能会出现并发错误")])]),s._v(" "),v("li",[v("p",[s._v("从jdk5.0开始 集合的工具类里面提供一个方法("),v("em",[v("strong",[s._v("synchronizedList")])]),s._v(") 可以将线程不安全的ArrayList对象变成线程安全的集合对象，于是Vector渐渐被淘汰")])])])]),v("details",{staticClass:"custom-block details"},[v("summary",[s._v("3. ArrayList和LinkedList之间的区别？")]),v("ul",[v("li",[v("p",[v("em",[v("strong",[s._v("ArrayList")])]),s._v("：底层基于"),v("strong",[s._v("数组")]),s._v("实现的")]),s._v(" "),v("p",[s._v("优点：随机访问 遍历查找效率高"),v("br"),s._v("\n缺点：添加/删除元素")])]),s._v(" "),v("li",[v("p",[v("em",[v("strong",[s._v("LinkedList")])]),s._v("：底层基于"),v("strong",[s._v("链表")]),s._v("实现的")]),s._v(" "),v("p",[s._v("优点：添加/删除元素效率高"),v("br"),s._v("\n缺点：随机访问/遍历查找效率低")])]),s._v(" "),v("li",[v("p",[s._v("*：当正常开发的时候 尽量避免使用LinkedList里面的get(下标)方法")])])])]),v("details",{staticClass:"custom-block details"},[v("summary",[s._v("4. HashMap和Hashtable之间的区别？")]),v("ol",[v("li",[v("p",[s._v("同步特性不同：")]),s._v(" "),v("ul",[v("li",[v("em",[v("strong",[s._v("HashMap")])]),s._v(" 同一时间允许多个线程进行访问 "),v("strong",[s._v("效率较高")]),s._v("，但是"),v("strong",[s._v("可能会出现并发错误")])]),s._v(" "),v("li",[v("em",[v("strong",[s._v("Hashtable")])]),s._v(" 同一时间允许一个线程进行访问 "),v("strong",[s._v("效率较低")]),s._v("，但是"),v("strong",[s._v("不会出现并发错误")])]),s._v(" "),v("li",[s._v("从jdk5.0开始，集合的工具类里面提供一个方法（"),v("em",[v("strong",[s._v("synchronizedList")])]),s._v("） 可以将线程不安全的HashMap对象变成线程安全的集合对象")])])]),s._v(" "),v("li",[v("p",[s._v("对null的要求不同")]),s._v(" "),v("ul",[v("li",[v("strong",[s._v("HashMap无论主键还是值都可以存放null")]),s._v("，但是由于主键唯一 所以主键只能添加一个null")]),s._v(" "),v("li",[s._v("Hashtable无论主键还是值都不能装null，一旦泛型里面装null 都会触发NullPointerException")])])]),s._v(" "),v("li",[v("p",[s._v("底层分组不同：")]),s._v(" "),v("ul",[v("li",[v("strong",[s._v("HashMap底层数组大小默认为16")]),s._v("，程序员可以随意的定义，但是最终一定是2的n次方数")]),s._v(" "),v("li",[s._v("Hashtable底层数组大小默认为11，程序员可以随意定义")])])]),s._v(" "),v("li",[v("p",[s._v("出现的版本不同")]),s._v(" "),v("ul",[v("li",[v("strong",[s._v("Hashtable：since jdk1.0")])]),s._v(" "),v("li",[v("strong",[s._v("HashMap：since jdk1.2")])])])])])])],1)}),[],!1,null,null,null);t.default=l.exports}}]);