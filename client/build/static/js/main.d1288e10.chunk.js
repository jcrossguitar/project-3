(this["webpackJsonpproject-3-react"]=this["webpackJsonpproject-3-react"]||[]).push([[0],{41:function(e,t,a){e.exports=a(87)},46:function(e,t,a){},47:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},48:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(17),r=a.n(c),i=(a(46),a(47),a(48),a(38)),l=a(16),s=a(96),u=function(e){return o.a.createElement(s.a,{color:"primary"},"This is a alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like.")},p=a(88),m=a(89),h=a(90),d=a(91),v=a(92),f=a(93),E=function(e){return o.a.createElement("div",null,o.a.createElement(p.a,null,o.a.createElement(m.a,null,o.a.createElement(h.a,null,"Card title"),o.a.createElement(d.a,null,"Card subtitle")),o.a.createElement("img",{width:"100%",src:"/assets/318x180.svg",alt:"Card image cap"}),o.a.createElement(m.a,null,o.a.createElement(v.a,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),o.a.createElement(f.a,{href:"#"},"Card Link"),o.a.createElement(f.a,{href:"#"},"Another Link"))))},y=a(7),b=a(8),j=a(10),k=a(9),O=a(11),g=a(37),R=a.n(g),D=function(){function e(){Object(y.a)(this,e)}return Object(b.a)(e,null,[{key:"getCheeseById",value:function(e){return console.log("getCheeseById(cheeseId)",e),R.a.get("/api/cheese/".concat(e))}}]),e}(),q=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(j.a)(this,Object(k.a)(t).call(this,e))).state={cheese:{name:"No Cheese",price:0,description:"loading..."}},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;t&&D.getCheeseById(t).then((function(t){console.log("cheese",t.data),e.setState({cheese:t.data})})).catch((function(a){console.log("ERR - Could not load cheese id: ".concat(t),a),e.setState({cheese:{name:"Smelly Cheese",price:1e3,description:"The stinkiest of sinky cheese"}})}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Welcome to CheeseDetail ",this.props.match.params.id||"Unknown"),o.a.createElement("h2",null,this.state.cheese.name," - $",this.state.cheese.price/100),o.a.createElement("p",null,this.state.cheese.description))}}]),t}(o.a.Component),S=a(4),C=a.n(S),P=(C.a.location.isRequired,C.a.history.isRequired,C.a.match.isRequired,{}),x=(C.a.location.isRequired,C.a.history.isRequired,C.a.match.isRequired,{}),w=(a(75),function(e){var t=function e(t){return o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Key"),o.a.createElement("th",null,"Value"))),o.a.createElement("tbody",null,Object.keys(t).map((function(a){return o.a.createElement("tr",{key:a},o.a.createElement("td",null,a),o.a.createElement("td",null,"object"===typeof t[a]?e(t[a]):t[a]))}))))};return o.a.createElement("div",null,o.a.createElement("h1",null,"React Router Details"),o.a.createElement("h2",null,"this.props.location"),t(e.location),o.a.createElement("h2",null,"this.props.history"),t(e.history),o.a.createElement("h2",null,"this.props.match"),t(e.match))});w.defaultProps=x;a(76);var M=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(j.a)(this,Object(k.a)(t).call(this,e))).state={},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDidMount()",this.props)}},{key:"componentDidUpdate",value:function(e,t,a){console.log("componentDidUpdate(prevProps, prevState, prevSnapshot)",e,t,a)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Inventory Page (Route: ",this.props.match.url,")"),o.a.createElement(w,{location:this.props.location,history:this.props.history,match:this.props.match}))}}]),t}(o.a.Component);M.defaultProps=P;C.a.location.isRequired,C.a.history.isRequired,C.a.match.isRequired;var U={},I=(a(77),function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(j.a)(this,Object(k.a)(t).call(this,e))).state={},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDidMount()",this.props)}},{key:"componentDidUpdate",value:function(e,t,a){console.log("componentDidUpdate(prevProps, prevState, prevSnapshot)",e,t,a)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"View Order Page (Route: ",this.props.match.url,")"),o.a.createElement(w,{location:this.props.location,history:this.props.history,match:this.props.match}))}}]),t}(o.a.Component));I.defaultProps=U;C.a.location.isRequired,C.a.history.isRequired,C.a.match.isRequired;var B={},N=(a(78),function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(j.a)(this,Object(k.a)(t).call(this,e))).state={},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDidMount()",this.props)}},{key:"componentDidUpdate",value:function(e,t,a){console.log("componentDidUpdate(prevProps, prevState, prevSnapshot)",e,t,a)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Shipping Page (Route: ",this.props.match.url,")"),o.a.createElement(w,{location:this.props.location,history:this.props.history,match:this.props.match}))}}]),t}(o.a.Component));N.defaultProps=B;C.a.location.isRequired,C.a.history.isRequired,C.a.match.isRequired;var W={},A=(a(79),function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(j.a)(this,Object(k.a)(t).call(this,e))).state={},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDidMount()",this.props)}},{key:"componentDidUpdate",value:function(e,t,a){console.log("componentDidUpdate(prevProps, prevState, prevSnapshot)",e,t,a)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Assembly Page (Route: ",this.props.match.url,")"),o.a.createElement(w,{location:this.props.location,history:this.props.history,match:this.props.match}))}}]),t}(o.a.Component));A.defaultProps=W;C.a.location.isRequired,C.a.history.isRequired,C.a.match.isRequired;var J={},L=(a(80),function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(j.a)(this,Object(k.a)(t).call(this,e))).state={},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDidMount()",this.props)}},{key:"componentDidUpdate",value:function(e,t,a){console.log("componentDidUpdate(prevProps, prevState, prevSnapshot)",e,t,a)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("table",{id:"simple-board"},o.a.createElement("tbody",null,o.a.createElement("tr",{id:"row0"},"order 1",o.a.createElement("td",{id:"cell0-0"},"Facebook"),o.a.createElement("td",{id:"cell0-1"},"Zuck"),o.a.createElement("td",{id:"cell0-2"},"50 processors")),o.a.createElement("tr",{id:"row1"},"order 2",o.a.createElement("td",{id:"cell1-0"}),o.a.createElement("td",{id:"cell1-1"}),o.a.createElement("td",{id:"cell1-2"})),o.a.createElement("tr",{id:"row2"},"order 3",o.a.createElement("td",{id:"cell2-0"}),o.a.createElement("td",{id:"cell2-1"}),o.a.createElement("td",{id:"cell2-2"})))))}}]),t}(o.a.Component));L.defaultProps=J;C.a.location.isRequired,C.a.history.isRequired,C.a.match.isRequired;var T={},V=(a(81),function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(j.a)(this,Object(k.a)(t).call(this,e))).state={},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDidMount()",this.props)}},{key:"componentDidUpdate",value:function(e,t,a){console.log("componentDidUpdate(prevProps, prevState, prevSnapshot)",e,t,a)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Sales Page (Route: ",this.props.match.url,")"),o.a.createElement(w,{location:this.props.location,history:this.props.history,match:this.props.match}))}}]),t}(o.a.Component));V.defaultProps=T;C.a.location.isRequired,C.a.history.isRequired,C.a.match.isRequired;var $={},F=(a(82),function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(j.a)(this,Object(k.a)(t).call(this,e))).state={},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDidMount()",this.props)}},{key:"componentDidUpdate",value:function(e,t,a){console.log("componentDidUpdate(prevProps, prevState, prevSnapshot)",e,t,a)}},{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(o.a.Component));F.defaultProps=$;var G=a(94),K=a(95),Q=function(e){return o.a.createElement("div",null,o.a.createElement(G.a,{fluid:!0},o.a.createElement(K.a,{fluid:!0},o.a.createElement("h1",{className:"display-3"},"404 - Can't sit here!"),o.a.createElement("p",{className:"lead"},"Seat's taken :("))))};var Z=function(){return o.a.createElement(i.a,null,o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/",component:u}),o.a.createElement(l.a,{exact:!0,path:"/about",component:E}),o.a.createElement(l.a,{exact:!0,path:"/inventory",component:M}),o.a.createElement(l.a,{exact:!0,path:"/assembly",component:A}),o.a.createElement(l.a,{exact:!0,path:"/example/",component:F}),o.a.createElement(l.a,{exact:!0,path:"/sales",component:V}),o.a.createElement(l.a,{exact:!0,path:"/Qc",component:L}),o.a.createElement(l.a,{exact:!0,path:"/vieworder",component:I}),o.a.createElement(l.a,{exact:!0,path:"/shipping",component:N}),o.a.createElement(l.a,{exact:!0,path:"/cheese/:id",component:q}),o.a.createElement(l.a,{exact:!0,path:"/example/:id",component:F}),o.a.createElement(l.a,{component:Q})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(86);r.a.render(o.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.d1288e10.chunk.js.map