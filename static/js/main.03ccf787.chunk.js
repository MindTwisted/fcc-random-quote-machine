(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{16:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(13),r=a.n(c),s=(a(21),a(22),a(23),a(3)),l=a.n(s),u=a(14),i=a(2),m=(a(25),a(15)),h=a.n(m);function b(e){var t=e.length-1;return e[Math.floor(Math.random()*(t-0+1))+0]}function d(){return"#"+Math.floor(16777215*Math.random()).toString(16)}function f(e){return"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=".concat(e.author,"&content=").concat(e.quote,"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button")}var p=function(){var e,t=Object(n.useState)("#999999"),a=Object(i.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)([]),m=Object(i.a)(s,2),p=m[0],q=m[1],w=Object(n.useState)(null),E=Object(i.a)(w,2),g=E[0],v=E[1],_=Object(n.useState)("Loading.."),N=Object(i.a)(_,2),k=N[0],j=N[1],M=Object(n.useCallback)(Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");case 3:t=e.sent,a=t.data.quotes,q(a),v(b(a)),r(d()),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),j(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),[]);return Object(n.useEffect)((function(){M()}),[M]),o.a.createElement("div",{className:"quoteMachine",style:{backgroundColor:c}},g?o.a.createElement("div",{className:"quoteMachine__main",id:"quote-box"},o.a.createElement("div",{className:"quoteMachine__content"},o.a.createElement("div",{className:"quoteMachine__quote",style:{color:c}},o.a.createElement("i",{className:"fa fa-quote-left"}),o.a.createElement("span",{id:"text"}," ",g.quote)),o.a.createElement("div",{className:"quoteMachine__author",style:{color:c}},o.a.createElement("span",{id:"author"},"- ",g.author))),o.a.createElement("div",{className:"quoteMachine__controls"},o.a.createElement("div",{className:"quoteMachine__socials"},o.a.createElement("a",{className:"btn",id:"tweet-quote",title:"Tweet this quote!",target:"_blank",rel:"noopener noreferrer",href:(e=g,"https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=".concat(e.quote," ").concat(e.author)),style:{backgroundColor:c}},o.a.createElement("i",{className:"fab fa-twitter"})),o.a.createElement("a",{className:"btn",id:"tumblr-quote",title:"Post this quote on tumblr!",target:"_blank",rel:"noopener noreferrer",href:f(g),style:{backgroundColor:c}},o.a.createElement("i",{className:"fab fa-tumblr"}))),o.a.createElement("button",{className:"btn",id:"new-quote",onClick:function(){v(b(p)),r(d())},style:{backgroundColor:c}},"New quote"))):o.a.createElement("h1",null,k))};var q=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.03ccf787.chunk.js.map