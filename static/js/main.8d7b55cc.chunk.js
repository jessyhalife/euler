(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{344:function(e,t,a){e.exports=a(905)},349:function(e,t,a){},350:function(e,t,a){},905:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(212),c=a.n(l),i=(a(349),a(65)),o=a(66),s=a(68),u=a(67),m=a(69),h=(a(350),a(131)),d=a(49);function p(e,t,a){var n=[],r=[];n[0]=0,r[0]=0;var l=[];l.push({x:n[0],y:r[0]});for(var c=parseFloat(t),i=0;i<=50;i++)n[i+1]=n[i]+c,r[i+1]=r[i]+c*d.eval(e,{y:r[i],x:n[i],k:a}),l.push({x:n[i+1],y:r[i+1]});l.reverse();var o=[];for(i=0;i<=50;i++)n[i+1]=n[i]-c,r[i+1]=r[i]-c*d.eval(e,{y:r[i],x:n[i],k:a}),o.push({x:n[i+1],y:r[i+1]});l=l.concat(o);var s=d.integral(e,"x"),u=[],m=[];for(i=-10;i<=10;i+=.5)u.push({x:i,y:d.eval(e,{x:i,k:a})}),m.push({x:i,y:d.eval(s.toString(),{x:i,k:a})});return console.log(u),{p:l,f:u,i:m}}d.import(a(276));var E=a(910),f=a(913),v=a(917),b=a(911),g=a(340),y=a(912),k=a(920),j=a(916),O=a(921),x=a(914),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.integral,n=e.funcion;return r.a.createElement("div",null,t?r.a.createElement("div",null,r.a.createElement(j.a,{animate:{duration:1e3},domain:{x:[-20,20],y:[-20,20]},theme:O.a.material,style:{parent:{maxWidth:"110%"}}},r.a.createElement(x.a,{data:n,style:{data:{stroke:"#ddbbaa",strokeWidth:.5}}}),r.a.createElement(x.a,{data:t,style:{data:{stroke:"#f24f4f",strokeWidth:2}}}),r.a.createElement(x.a,{data:a,style:{data:{stroke:"#93cc93",strokeWidth:.5}}}))):"-")}}]),t}(n.Component);C.defaultProps={data:[],color:"#ff4500",svgHeight:200,svgWidth:600};var w=C,I=(a(893),a(216)),P=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.dataPoints;return r.a.createElement("div",null,e?r.a.createElement(E.a,{style:{marginTop:50}},r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement(w,{data:e.p,integral:e.i,funcion:e.f})),r.a.createElement(g.a,{sm:"4"},r.a.createElement("h5",null,"Color References:"),r.a.createElement(y.a,{style:{backgroundColor:"#ddbbaa"}},"Funci\xf3n"),r.a.createElement("br",null),r.a.createElement(y.a,{style:{backgroundColor:"#93cc93"}},"Integral Analitica"),r.a.createElement("br",null),r.a.createElement(y.a,{style:{backgroundColor:"#f24f4f"}},"Integral - aproximaci\xf3n EULER"),r.a.createElement("br",null),r.a.createElement("h6",null,"Funci\xf3n: ",r.a.createElement(I.InlineMath,{math:this.props.function})),r.a.createElement("h6",null,"Integral: ",r.a.createElement(I.InlineMath,{math:this.props.integral}))))):"")}}]),t}(n.Component);d.import(a(276));var S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).calculate=a.calculate.bind(Object(h.a)(Object(h.a)(a))),a.state={showGraph:!1,f:"x",h:.1,k:1,dataPoints:void 0,error:!1,integral:"",parsed:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"calculate",value:function(){try{this.setState({dataPoints:p(this.state.f,this.state.h,this.state.k),parsed:d.simplify(d.parse(this.state.f)).toTex(),integral:d.simplify(d.integral(this.state.f,"x")).toTex()}),this.setState({error:!1})}catch(e){console.log(e),this.setState({error:!0})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(E.a,{style:{marginTop:20}},r.a.createElement(f.a,null,r.a.createElement(v.a,null,r.a.createElement(v.a.Group,{as:b.a,controlId:"formPlaintextEmail"},r.a.createElement(v.a.Label,{column:!0,sm:"1"},"dx/dt:"),r.a.createElement(g.a,{sm:"4"},r.a.createElement(v.a.Control,{isInvalid:this.state.error,placeholder:"dx/dt",size:"sm",value:this.state.f,onChange:function(t){return e.setState({f:t.target.value})}}))),r.a.createElement(v.a.Group,{as:b.a,controlId:"formPlaintextEmail"},r.a.createElement(v.a.Label,{column:!0,sm:"1"},"h:"),r.a.createElement(g.a,{sm:"4"},r.a.createElement(v.a.Control,{placeholder:"h",size:"sm",value:this.state.h,onChange:function(t){return e.setState({h:t.target.value})}}))),r.a.createElement(v.a.Group,{as:b.a,controlId:"formPlaintextEmail"},r.a.createElement(v.a.Label,{column:!0,sm:"1"},"K:"),r.a.createElement(g.a,{sm:"1"},r.a.createElement("input",{id:"typeinp",type:"range",min:"-5",max:"5",value:this.state.k,onChange:function(t){e.setState({k:t.target.value})},step:"1"})),r.a.createElement(g.a,{sm:"2"},r.a.createElement(y.a,{variant:"secondary"},"K = ",this.state.k))),r.a.createElement(k.a,{variant:"primary",onClick:this.calculate},"Graph!"))),r.a.createElement(P,{dataPoints:this.state.dataPoints,function:this.state.parsed,integral:this.state.integral})))}}]),t}(n.Component),W=a(918),G=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(W.a,{bg:"light",expand:"lg"},r.a.createElement(W.a.Brand,{href:"#home"},"EULER Simulation"))}}]),t}(n.Component),L=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(G,null),r.a.createElement(S,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[344,1,2]]]);
//# sourceMappingURL=main.8d7b55cc.chunk.js.map