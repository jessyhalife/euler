(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{361:function(e,a,t){e.exports=t(927)},366:function(e,a,t){},367:function(e,a,t){},927:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(222),c=t.n(l),o=(t(366),t(54)),i=t(55),s=t(58),u=t(56),m=t(57),h=(t(367),t(941)),d=t(224),E=t(107),p=t(20);function v(e,a){for(var t=[],n=-50;n<=50;n+=.1)t.push({x:n,y:p.eval(e,{x:n,k:a})});return t}function b(e,a){for(var t=p.integral(e,"x"),n=[],r=-50;r<=50;r+=.1)n.push({x:r,y:p.eval(t.toString(),{x:r,k:a})});return n}function k(e,a,t,n,r){var l=[],c=[];l[0]=parseFloat(n)||0,c[0]=parseFloat(r)||0;var o,i=[],s=parseFloat(a),u=4/s;i.push({x:l[0],y:c[0]});for(var m=0;m<u;m++)o=p.eval(e,{y:c[m],x:l[m],k:t}),l[m+1]=l[m]+s,c[m+1]=c[m]+s*o,i.push({x:l[m+1],y:c[m+1]});i.reverse();var h=[];for(m=0;m<u;m++)o=p.eval(e,{y:c[m],x:l[m],k:t}),l[m+1]=l[m]-s,c[m+1]=c[m]-s*o,h.push({x:l[m+1],y:c[m+1]});return i=i.concat(h)}function y(e,a,t,n,r){var l,c,o,i,s=parseFloat(a),u=4/s;l=parseFloat(n)||0,c=parseFloat(r)||0;for(var m=[],h=0;h<=u;h++)m.push({x:l,y:c}),o=p.eval(e,{x:l,y:c,k:t}),i=p.eval(e,{x:l+s,y:c+s*o,k:t}),l+=s,c+=.5*a*(o+i);l=parseFloat(n)||0,c=parseFloat(r)||0;var d=[];for(h=0;h<=u;h++)o=p.eval(e,{x:l,y:c,k:t}),i=p.eval(e,{x:l-a,y:c-a*o,k:t}),l-=s,c-=.5*a*(o+i),d.push({x:l,y:c});return m.reverse(),m=m.concat(d)}function f(e,a,t,n,r){var l,c,o,i,s;l=parseFloat(n)||0,c=parseFloat(r)||0;for(var u=parseFloat(a),m=4/u,h=[],d=0;d<=m;d++)h.push({x:l,y:c}),c+=((o=u*p.eval(e,{x:l,y:c,k:t}))+2*(i=u*p.eval(e,{x:l+u/2,y:c+o/2,k:t}))+2*(s=u*p.eval(e,{x:l+u/2,y:c+i/2,k:t}))+u*p.eval(e,{x:l+u/2,y:c+s,k:t}))/6,l+=u;l=parseFloat(n)||0,c=parseFloat(r)||0;var E=[];for(d=0;d<=m;d++)E.push({x:l,y:c}),c-=((o=u*p.eval(e,{x:l,y:c,k:t}))+2*(i=u*p.eval(e,{x:l-u/2,y:c-o/2,k:t}))+2*(s=u*p.eval(e,{x:l-u/2,y:c-i/2,k:t}))+u*p.eval(e,{x:l-u/2,y:c-s,k:t}))/6,l-=u;return h.reverse(),h=h.concat(E)}p.import(t(289));var g=t(943),x=t(932),C=t(935),j=t(940),O=t(933),S=t(355),I=t(934),w=t(936),F=t(939),_=t(944),M=t(937),N=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.euler,t=e.integral,n=e.funcion,l=e.improved,c=e.runge_kutta;return r.a.createElement("div",null,a||t||n||l||c?r.a.createElement("div",null,r.a.createElement(F.a,{animate:{duration:1e3},domain:{x:[-5,5],y:[-4,4]},theme:_.a.material,style:{parent:{maxWidth:"110%"}}},r.a.createElement(M.a,{data:n,style:{data:{stroke:"#ddbbaa",strokeWidth:.5}}}),r.a.createElement(M.a,{data:a,style:{data:{stroke:"red",strokeWidth:1}}}),r.a.createElement(M.a,{data:l,style:{data:{stroke:"green",strokeWidth:1}}}),r.a.createElement(M.a,{data:c,style:{data:{stroke:"blue",strokeWidth:1}}}),r.a.createElement(M.a,{data:t,style:{data:{stroke:"#93cc93",strokeWidth:.5}}}))):"-")}}]),a}(n.Component);N.defaultProps={data:[],color:"#ff4500",svgHeight:200,svgWidth:600};var R=N,K=(t(910),t(227)),W=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.data||[],a=e.euler,t=e.improved,n=e.runge_kutta,l=e.fn,c=e.i,o=this.props,i=o.integral,s=o.funcion;return r.a.createElement("div",null,a||t||n||l||c?r.a.createElement(x.a,{style:{marginTop:50}},r.a.createElement(O.a,null,r.a.createElement(S.a,null,r.a.createElement(R,{euler:a,integral:c,funcion:l,improved:t,runge_kutta:n})),r.a.createElement(S.a,{sm:"4"},r.a.createElement("h6",null,"Funci\xf3n: ",s?r.a.createElement(K.InlineMath,{math:s}):""),r.a.createElement("h6",null,"Integral: ",i?r.a.createElement(K.InlineMath,{math:i}):""),r.a.createElement("hr",null),r.a.createElement("h6",null,"Color References:"),r.a.createElement("hr",null),r.a.createElement(I.a,{style:{backgroundColor:"#ddbbaa"}},"\xa0\xa0"),r.a.createElement("label",null,"Funci\xf3n dy/dx"),r.a.createElement("br",null),r.a.createElement(I.a,{style:{backgroundColor:"#93cc93"}},"\xa0\xa0"),r.a.createElement("label",null,"Integral Analitica"),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("h6",null,"Methods"),r.a.createElement("hr",null),r.a.createElement(I.a,{style:{backgroundColor:"red"}},"\xa0\xa0"),r.a.createElement("label",null,"EULER"),r.a.createElement("br",null),r.a.createElement(I.a,{style:{backgroundColor:"green"}},"\xa0\xa0"),r.a.createElement("label",null," Improved EULER"),r.a.createElement("br",null),r.a.createElement(I.a,{style:{backgroundColor:"blue"}},"\xa0\xa0"),r.a.createElement("label",null,"RungeKutta K4")))):"")}}]),a}(n.Component);p.import(t(289));var D={showGraph:!1,f:"x",h:.1,k:1,euler:void 0,error:!1,errorMsg:"",integral:"",parsed:"",y0:0,x0:0,improved:void 0,runge_kutta:void 0,chkEuler:!0,chkEulerImproved:!0,chkRK:!0,data:{},btnDisabled:!1},L=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).calculate=t.calculate.bind(Object(E.a)(Object(E.a)(t))),t.reset=t.reset.bind(Object(E.a)(Object(E.a)(t))),t.state=D,t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"reset",value:function(){this.setState(D)}},{key:"calculate",value:function(){var e=this;try{var a,t,n=this.state,r=n.f,l=n.h,c=n.k,o=n.x0,i=n.y0,s=n.chkEuler,u=n.chkEulerImproved,m=n.chkRK;if(isNaN(l)||isNaN(c)||isNaN(o)||isNaN(i))return void this.setState({error:!0,errorMsg:"check values please!"});try{a=p.simplify(p.integral(r,"x")).toString(),a=p.eval(a,{x:1,k:c}).toString()}catch(h){a=""}try{t=p.eval(r,{x:1,k:c})}catch(d){t=""}this.setState({data:{}},function(){try{e.setState({parsed:p.simplify(p.parse(r)).toTex(),integral:p.simplify(p.integral(r,"x")).toTex(),data:{euler:s?k(r,l,c,o,i):[],fn:""!==t?v(r,c):[{x:0,y:0}],i:""!==a?b(r,c):[{x:0,y:0}],improved:u?y(r,l,c,o,i):[],runge_kutta:m?f(r,l,c,o,i):[]}})}catch(h){return void e.setState({error:!0,errorMsg:h.toString()})}}),this.setState({error:!1})}catch(h){this.setState({error:!0,errorMsg:h.toString()})}}},{key:"_handleChange",value:function(e){var a=this;this.setState({btnDisabled:!0}),this.setState(Object(d.a)({},e.target.name,e.target.value),function(){return a.setState({btnDisabled:!1})})}},{key:"_handleCheck",value:function(e){var a=this;this.setState({btnDisabled:!0}),this.setState(Object(d.a)({},e.target.name,!this.state[[e.target.name]]),function(){return a.setState({btnDisabled:!1})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(g.a,{dismissiblen:!0,variant:"success"},r.a.createElement(g.a.Heading,null,"Attention!"),r.a.createElement("p",null,"I'm still working on this, if you see any white screen, please reload page, it might be a Math error")),this.state.error?r.a.createElement(g.a,{dismissible:!0,variant:"danger"},r.a.createElement(g.a.Heading,null,"Oops! :("),r.a.createElement("p",null,this.state.errorMsg)):"",r.a.createElement(x.a,{style:{marginTop:20}},r.a.createElement(C.a,null,r.a.createElement(j.a,null,r.a.createElement(j.a.Group,{as:O.a,controlId:"formPlaintextEmail"},r.a.createElement(j.a.Label,{column:!0,sm:"1"},"dy/dx:"),r.a.createElement(S.a,{sm:"4"},r.a.createElement(j.a.Control,{isInvalid:this.state.error,placeholder:"dy/dx",name:"f",size:"sm",value:this.state.f,onChange:function(a){return e._handleChange(a)}}))),r.a.createElement(j.a.Group,{as:O.a,controlId:"formPlaintextEmail"},r.a.createElement(j.a.Label,{column:!0,sm:"1"},"Initial values:"),r.a.createElement(S.a,{sm:"1"},"("),r.a.createElement(S.a,{sm:"2"},r.a.createElement(j.a.Control,{placeholder:"x0",size:"sm",name:"x0",value:this.state.x0,onChange:function(a){return e._handleChange(a)}})),r.a.createElement(S.a,{sm:"1"},","),r.a.createElement(S.a,{sm:"2"},r.a.createElement(j.a.Control,{placeholder:"y0",size:"sm",name:"y0",value:this.state.y0,onChange:function(a){return e._handleChange(a)}})),r.a.createElement(S.a,{sm:"1"},")")),r.a.createElement(j.a.Group,{as:O.a,controlId:"formPlaintextEmail"},r.a.createElement(j.a.Label,{column:!0,sm:"1"},"h:"),r.a.createElement(S.a,{sm:"4"},r.a.createElement(j.a.Control,{placeholder:"h",size:"sm",name:"h",value:this.state.h,onChange:function(a){return e._handleChange(a)}}))),r.a.createElement(j.a.Group,{as:O.a,controlId:"formPlaintextEmail"},r.a.createElement(j.a.Label,{column:!0,sm:"1"},"K:"),r.a.createElement(S.a,{sm:"1"},r.a.createElement("input",{id:"typeinp",type:"range",min:"-5",max:"5",name:"k",value:this.state.k,onChange:function(a){return e._handleChange(a)},step:"1"})),r.a.createElement(S.a,{sm:"2"},r.a.createElement(I.a,{variant:"secondary"},"K = ",this.state.k))),r.a.createElement(O.a,null,r.a.createElement(S.a,{sm:"2"},r.a.createElement(j.a.Check,{type:"checkbox",label:"Euler",name:"chkEuler",checked:this.state.chkEuler,onChange:function(a){return e._handleCheck(a)}})),r.a.createElement(S.a,{sm:"2"},r.a.createElement(j.a.Check,{type:"checkbox",label:"Improved Euler",name:"chkEulerImproved",checked:this.state.chkEulerImproved,onChange:function(a){return e._handleCheck(a)}})),r.a.createElement(S.a,{sm:"2"},r.a.createElement(j.a.Check,{type:"checkbox",label:"Runge Kutta k4",name:"chkRK",checked:this.state.chkRK,onChange:function(a){return e._handleCheck(a)}}))),r.a.createElement("hr",null),r.a.createElement(O.a,null,r.a.createElement(S.a,{lg:"10"},r.a.createElement(w.a,{disabled:this.state.btnDisabled,variant:"primary",onClick:this.calculate},"Graph!"),"\xa0",r.a.createElement(w.a,{disabled:this.state.btnDisabled,variant:"danger",onClick:this.reset},"RESET"))))),r.a.createElement(W,{data:this.state.data,integral:this.state.integral,funcion:this.state.parsed})))}}]),a}(n.Component),G=t(357),P=t(106),T=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"M\xe9todo EULER"))}}]),a}(n.Component),z=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(G.a,null,r.a.createElement(h.a,{bg:"light",expand:"lg"},r.a.createElement(h.a.Brand,{href:""},"Numerical methods - Comparision")),r.a.createElement(P.a,{exact:!0,path:"/euler/",component:L}),r.a.createElement(P.a,{path:"/euler/calculate",component:L}),r.a.createElement(P.a,{path:"/euler/about",component:T}),r.a.createElement("footer",null,"Made with  ",r.a.createElement("span",{className:"emoji",role:"img","aria-label":"love"},"\u2764\ufe0f")," by @jessyhalife. ")))}}]),a}(n.Component),A=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(z,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[361,1,2]]]);
//# sourceMappingURL=main.2b599fab.chunk.js.map