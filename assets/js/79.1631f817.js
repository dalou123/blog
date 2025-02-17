(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{531:function(t,a,v){"use strict";v.r(a);var _=v(1),r=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"并行处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并行处理"}},[t._v("#")]),t._v(" 并行处理")]),t._v(" "),a("p",[t._v("计算机中的并行处理就是同一时刻处理多个任务。使用并行处理能大大提升性能。")]),t._v(" "),a("h2",{attrs:{id:"线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[t._v("#")]),t._v(" 线程")]),t._v(" "),a("p",[t._v("线程是资源调度的最小单位。")]),t._v(" "),a("p",[t._v("线程是不能单独存在的，它是由进程来启动和管理的。线程共享进程中的数据，使用相同的地址空间。")]),t._v(" "),a("h2",{attrs:{id:"进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[t._v("#")]),t._v(" 进程")]),t._v(" "),a("p",[t._v("进程是资源分配的最小单位。一个进程就是一个程序的运行实例。")]),t._v(" "),a("p",[t._v("详细解释：启动一个程序时，操作系统会为该程序创建一块内存，用来存放代码、运行中的数据和一个执行任务的主线程。我们把这样的一个运行环境叫进程。")]),t._v(" "),a("h2",{attrs:{id:"进程与线程的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程的关系"}},[t._v("#")]),t._v(" 进程与线程的关系")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("进程中任意一个线程执行出错，都会导致程序的崩溃")])]),t._v(" "),a("li",[a("p",[t._v("线程之间共享进程间的数据")])]),t._v(" "),a("li",[a("p",[t._v("当一个进程关闭后，操作系统会回收进程占用的内存")])]),t._v(" "),a("li",[a("p",[t._v("进程之间的内容相互隔离")])])]),t._v(" "),a("h2",{attrs:{id:"单进程浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单进程浏览器"}},[t._v("#")]),t._v(" 单进程浏览器")]),t._v(" "),a("p",[t._v("单进程浏览器是指浏览器所有的功能模块都运行在同一个进程里。单进程浏览器不稳定、不流畅、不安全。")]),t._v(" "),a("h2",{attrs:{id:"多进程浏览器-以-chrome-为例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多进程浏览器-以-chrome-为例"}},[t._v("#")]),t._v(" 多进程浏览器(以 Chrome 为例)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("浏览器进程。主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。")])]),t._v(" "),a("li",[a("p",[t._v("渲染进程。核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页。")])]),t._v(" "),a("li",[a("p",[t._v("GPU 进程。GPU 的使用初衷是为了实现 3D CSS 的效果，只是随后网页、Chrome 的 UI 界面都选择采用 GPU 来绘制，这使得 GPU 成为浏览器普遍的需求。")])]),t._v(" "),a("li",[a("p",[t._v("网络进程。主要负责页面的网络资源加载。")])]),t._v(" "),a("li",[a("p",[t._v("插件进程。主要负责插件的运行。")])])]),t._v(" "),a("p",[t._v("多进程浏览器有着更高的资源占用以及更复杂的体系结构。")])])}),[],!1,null,null,null);a.default=r.exports}}]);