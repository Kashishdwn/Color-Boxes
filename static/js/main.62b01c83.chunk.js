(this["webpackJsonpcolor-boxes"]=this["webpackJsonpcolor-boxes"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(6),c=n.n(r),i=(n(12),n(1)),l=n(2),s=n(4),u=n(3);n(13);var h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).change=function(){var e;do{e="#".concat(Math.floor(16777215*Math.random()).toString(16))}while(e===o.state.color);o.setState({color:e})},o.state={color:"#".concat(Math.floor(16777215*Math.random()).toString(16))},o}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{onClick:this.change,className:"Box",style:{backgroundColor:this.state.color}})}}]),n}(a.a.Component),m=(n(14),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=Array.from({length:this.props.numBoxes}).map((function(){return a.a.createElement(h,null)}));return a.a.createElement("div",{className:"ColorBoxes"},e)}}]),n}(a.a.Component));m.defaultProps={numBoxes:18};var f=m;n(15);var d=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.62b01c83.chunk.js.map