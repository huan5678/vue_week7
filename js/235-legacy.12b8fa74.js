"use strict";(self["webpackChunkvue_week7"]=self["webpackChunkvue_week7"]||[]).push([[235],{3842:function(e,n,t){t.d(n,{Z:function(){return g}});t(8309);var r=t(6252),u={class:"bg-secondary-900"},o={class:"container flex justify-between p-3"},a=(0,r.Uk)(" LOGO "),i={key:0,class:"flex gap-4 justify-between items-center"},c=(0,r.Uk)(" 產品列表 "),l=(0,r.Uk)(" 後台管理 "),s={key:1,class:"flex justify-center items-center gap-4"},d=(0,r._)("h2",{class:"text-lg text-secondary-50"},"管理者登出",-1);function f(e,n,t,f,p,h){var w=(0,r.up)("AppLink");return(0,r.wg)(),(0,r.iD)("section",u,[(0,r._)("nav",o,[(0,r._)("h2",null,[(0,r.Wm)(w,{to:"/"},{default:(0,r.w5)((function(){return[a]})),_:1})]),"product-detail"!==f.route.name?((0,r.wg)(),(0,r.iD)("ul",i,[(0,r._)("li",null,[(0,r.Wm)(w,{to:"product"},{default:(0,r.w5)((function(){return[c]})),_:1})]),(0,r._)("li",null,[(0,r.Wm)(w,{to:"admin"},{default:(0,r.w5)((function(){return[l]})),_:1})])])):(0,r.kq)("",!0),"dashboard"===f.route.name?((0,r.wg)(),(0,r.iD)("div",s,[d,(0,r._)("button",{class:"py-1 px-6 text-white bg-primary-500 hover:shadow-primary-600 rounded hover:shadow-inner transition duration-300",onClick:n[0]||(n[0]=function(e){return f.handleIsLogout()})}," 登出 ")])):(0,r.kq)("",!0)])])}var p=t(2119),h=t(7565),w=t(1614),k={components:{AppLink:w.Z},setup:function(){var e=(0,p.yj)(),n=(0,h.Z)(),t=n.adminStore,r=t.handleSetLogout,u=t.handleClearToken,o=(0,p.tv)();function a(){u(),r(),o.push("/")}return{route:e,handleIsLogout:a}}},m=t(3744);const v=(0,m.Z)(k,[["render",f]]);var g=v},5235:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(6252),u=t(9963);function o(e,n,t,o,a,i){var c=(0,r.up)("TheHeader"),l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(c),(0,r.Wm)(l,null,{default:(0,r.w5)((function(e){var n=e.Component;return[(0,r.Wm)(u.uT,{name:"fade"},{default:(0,r.w5)((function(){return[((0,r.wg)(),(0,r.j4)((0,r.LL)(n)))]})),_:2},1024)]})),_:1})],64)}var a=t(3842),i=t(7565),c=t(2119),l={name:"BackEndView",components:{TheHeader:a.Z},setup:function(){var e=(0,i.Z)(),n=e.adminStore,t=n.handleCheckUser,u=n.handleGetToken,o=n.isLoggedIn,a=(0,c.tv)();(0,r.wF)((function(){u(),t(),o||a.push("/login")}))}},s=t(3744);const d=(0,s.Z)(l,[["render",o]]);var f=d}}]);
//# sourceMappingURL=235-legacy.12b8fa74.js.map