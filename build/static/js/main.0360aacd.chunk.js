(this["webpackJsonptik-tok-clone"]=this["webpackJsonptik-tok-clone"]||[]).push([[0],{26:function(e,a,t){e.exports=t(52)},31:function(e,a,t){},32:function(e,a,t){},43:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),r=t(16),c=t.n(r),s=(t(31),t(10)),i=(t(32),t(17)),l=t.n(i).a.initializeApp({apiKey:"AIzaSyCUSTl06fpVDS2fCePwPv5A_8rOI8Z_6HI",authDomain:"aakash-159a2.firebaseapp.com",databaseURL:"https://aakash-159a2.firebaseio.com",projectId:"aakash-159a2",storageBucket:"aakash-159a2.appspot.com",messagingSenderId:"447529889751",appId:"1:447529889751:web:6ad80f4172dff990d5a592"}).firestore(),m=(t(43),t(19)),u=t.n(m),d=t(18),f=function(e){var a=e.channel,t=e.description,n=e.song;return o.a.createElement("div",{className:"videofooter"},o.a.createElement("div",{className:"videofooter_text"},o.a.createElement("h3",null,"@",a),o.a.createElement("p",null,t),o.a.createElement("div",{className:"videofooter_ticker"},o.a.createElement(u.a,{className:"videofooter_icon"}),o.a.createElement(d.a,{mode:"smooth"},(function(e){e.index;return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,n))})))),o.a.createElement("img",{className:"videofooter_record",src:"/disc.png",alt:""}))},p=(t(49),t(21)),v=t.n(p),E=t(22),h=t.n(E),g=t(23),k=t.n(g),b=t(24),S=t.n(b);var N=function(e){var a=e.likes,t=e.shares,r=e.comments,c=Object(n.useState)(!1),i=Object(s.a)(c,2),l=i[0],m=i[1];return o.a.createElement("div",{className:"videoSideBar"},o.a.createElement("div",{className:"videoSidebar_button"},l?o.a.createElement(v.a,{fontSize:"large",onClick:function(e){return m(!1)}}):o.a.createElement(h.a,{fontSize:"large",onClick:function(e){return m(!0)}}),o.a.createElement("p",null,l?a+1:a)),o.a.createElement("div",{className:"videoSidebar_button"},o.a.createElement(k.a,{fontSize:"large"}),o.a.createElement("p",null,r)),o.a.createElement("div",{className:"videoSidebar_button"},o.a.createElement(S.a,{fontSize:"large"}),o.a.createElement("p",null,t)))};t(50);var _=function(e){var a=e.url,t=e.channel,r=(e.description,e.song),c=e.likes,i=e.messages,l=e.shares,m=Object(n.useState)(!1),u=Object(s.a)(m,2),d=u[0],p=u[1],v=Object(n.useRef)(null);return o.a.createElement("div",{className:"video"},o.a.createElement("video",{className:"video_player",loop:!0,ref:v,onClick:function(){console.log(d),d?(v.current.pause(),p(!1)):(v.current.play(),p(!0))},src:a}),o.a.createElement(f,{channel:t,description:t,song:r}),o.a.createElement(N,{likes:c,shares:l,comments:i}))};var w=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){l.collection("videos").onSnapshot((function(e){return r(e.docs.map((function(e){return e.data()})))}))}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"app_videos"},t.map((function(e){return o.a.createElement(_,{url:e.url,channel:e.channel,description:e.description,song:e.song,likes:e.likes,messages:e.messages,shares:e.shares})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.0360aacd.chunk.js.map