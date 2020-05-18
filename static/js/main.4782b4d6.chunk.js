(this["webpackJsonpmy-d3-app"]=this["webpackJsonpmy-d3-app"]||[]).push([[0],{26:function(t,a,r){t.exports={primaryColor:"#00eccc",secondaryColor:"#ff55f7",contrastColor:"#ff8182",darkColor:"#20232a",primaryFont:'"Montserrat",Helvetica,sans-serif',primaryFontColor:"#eee",secondaryFont:'"Archivo Black",Helvetica,sans-serif',secondaryFontColor:"#fff",reactColor:"#61dafb",d3Color:"#f68e48"}},37:function(t,a,r){t.exports=r(44)},42:function(t,a,r){},43:function(t,a,r){},44:function(t,a,r){"use strict";r.r(a);var e=r(1),n=r.n(e),o=r(27),i=r.n(o),c=(r(42),r(3)),u=r(4),l=r(6),s=r(5),h=(r(43),r(0)),d=r(26),f=h.f().range([0,450]).padding(.1),p=h.g().range([375,0]),m=function(t){h.c(t.data,(function(a){return{valueX:a[t.headerX],valueY:a[t.headerY]}})).then((function(a){var r=h.h(".barChart").append("svg").attr("width",550).attr("height",450).append("g").attr("transform","translate(50,30)");f.domain(a.map((function(t){return t.valueX}))),p.domain([0,h.e(a,(function(t){return t.valueY}))]);var e=h.a().scale(f),n=h.b().scale(p);r.append("g").call(n).append("text").attr("transform","rotate(-90)").attr("y",15).attr("dy","-5.1em").attr("text-anchor","end").attr("stroke","black").text(t.headerY);r.append("g").attr("transform","translate(0, 375)").call(e).append("text").attr("y",30).attr("x",450).attr("stroke","black").text(t.headerX),r.selectAll(".bar").attr("transform","translate(0, 375)").data(a).enter().append("rect").attr("class","bar").attr("x",(function(t){return f(t.valueX)})).attr("y",(function(t){return p(t.valueY)})).attr("width",f.bandwidth()).attr("height",(function(t){return 375-p(t.valueY)})).attr("fill",d.primaryColor).on("mouseover",v).on("mouseout",b).transition().ease(h.d).duration(400).delay((function(t,a){return 50*a}))}))};function v(t,a){h.h(this).attr("class","highlight"),h.h(this).transition().duration(400).attr("width",f.bandwidth()+5).attr("y",(function(t){return p(t.valueY)-5})).attr("x",(function(t){return f(t.valueX)-2.5})).attr("height",(function(t){return 380-p(t.valueY)})),console.log(m.gBar2),h.h(this.parentNode).append("text").attr("class","val").attr("x",(function(){return f(t.valueX)})).attr("y",(function(){return p(t.valueY)-15})).text((function(){return["$"+t.valueY]}))}function b(t,a){h.h(this).attr("class","bar"),h.h(this).transition().duration(400).attr("width",f.bandwidth()).attr("y",(function(t){return p(t.valueY)})).attr("x",(function(t){return f(t.valueX)})).attr("height",(function(t){return 375-p(t.valueY)})),h.i(".val").remove()}var y=function(t){return Object(e.useEffect)((function(){h.h(".barChart > *").remove(),m(t)}),[t]),n.a.createElement("div",{className:"barChart"})},g=r(28),x=r(26);var w=h.f().range([0,450]).padding(.1),E=h.g().range([375,0]),k=function(t){var a=Object(g.a)(Array(10)).map((function(t,a){return{x:a,y:40*Math.random(),temparature:500*Math.random()}}));h.h(".drawGrapho").append("svg").attr("width",550).attr("height",450).attr("id","svg-bars");h.h("#svg-bars").append("g").attr("transform","translate(50,30)").attr("id","g-bars");w.domain(a.map((function(t){return t.x}))),E.domain([0,h.e(a,(function(t){return t.y}))]);var r=h.a().scale(w),e=h.b().scale(E);h.h("#g-bars").append("g").call(e).append("text").attr("transform","rotate(-90)").attr("y",15).attr("dy","-5.1em").attr("text-anchor","end").attr("stroke","black").text("Stock Price");h.h("#g-bars").append("g").attr("transform","translate(0, 375)").call(r).append("text").attr("y",30).attr("x",450).attr("stroke","black").text("Year"),h.h("#g-bars").selectAll(".bar").attr("transform","translate(0, 375)").data(a).enter().append("rect").attr("class","bar").attr("x",(function(t){return w(t.x)})).attr("y",(function(t){return E(t.y)})).attr("width",w.bandwidth()).attr("height",(function(t){return 375-E(t.y)})).attr("fill",x.primaryColor).on("mouseover",C).on("mouseout",j).transition().ease(h.d).duration(400).delay((function(t,a){return 50*a}))};function C(t,a){h.h(this).attr("class","highlight"),h.h(this).transition().duration(400).attr("width",w.bandwidth()+5).attr("y",(function(t){return E(t.y)-5})).attr("x",(function(t){return w(t.x)-2.5})).attr("height",(function(t){return 380-E(t.y)})),h.h("#g-bars").append("text").attr("class","val").attr("x",(function(){return w(t.x)})).attr("y",(function(){return E(t.y)-15})).text((function(){return["$"+t.y]}))}function j(t,a){h.h(this).attr("class","bar"),h.h(this).transition().duration(400).attr("width",w.bandwidth()).attr("y",(function(t){return E(t.y)})).attr("x",(function(t){return w(t.x)})).attr("height",(function(t){return 375-E(t.y)})),h.i(".val").remove()}var O=function(t){return Object(e.useEffect)((function(){h.h(".drawGrapho > *").remove(),k(t)}),[]),n.a.createElement("div",{className:"drawGrapho"})},Y=function(t){Object(l.a)(r,t);var a=Object(s.a)(r);function r(){return Object(c.a)(this,r),a.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return n.a.createElement("div",{className:"controller"},n.a.createElement("h2",null,"Sample 01 plot Bars"),n.a.createElement("div",null,n.a.createElement(y,{data:"https://raw.githubusercontent.com/cFabianR/Prubas/master/src/XYZ.csv",headerX:"year",headerY:"value"})))}}]),r}(e.Component),X=function(t){Object(l.a)(r,t);var a=Object(s.a)(r);function r(){return Object(c.a)(this,r),a.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return n.a.createElement("div",{className:"controller"},n.a.createElement("h2",null,"Sample 02  Grapho"),n.a.createElement("div",null,n.a.createElement(O,null)))}}]),r}(e.Component),N=(e.Component,function(t){Object(l.a)(r,t);var a=Object(s.a)(r);function r(){return Object(c.a)(this,r),a.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",{className:"App-title"},"chart un React and D3.js")),n.a.createElement(Y,null),n.a.createElement(X,null))}}]),r}(e.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.4782b4d6.chunk.js.map