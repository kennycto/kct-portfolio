(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getProfile",(function(){return H}));var r={};n.r(r),n.d(r,"setPage",(function(){return I}));var c=n(0),l=n.n(c),o=n(24),i=n.n(o),s=(n(80),n(10)),u=n(11);function p(){var e=Object(s.a)(["\n    white-space: pre-wrap;\n"]);return p=function(){return e},e}function m(){var e=Object(s.a)(["\n    display: flex;\n    flex-direction: row;\n"]);return m=function(){return e},e}function f(){var e=Object(s.a)(["\n    font-weight: bold;\n    margin-top: 0;\n"]);return f=function(){return e},e}function b(){var e=Object(s.a)(["\n    padding-bottom: 1rem;\n    border-bottom: 1px solid white;\n"]);return b=function(){return e},e}var d=u.a.div(b()),v=u.a.h4(f()),E=u.a.div(m()),h=u.a.p(p()),O=n(13),j=n(14),y=n(16),g=n(15),k=(n(82),n(22)),w=n(29),x=n(39),N=n(59),P=n(19),C=n(64),_=n(67),S={},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE":return Object(_.a)({},t.profile);default:return e}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":return t.pageValue;default:return e}},M=n(42),T=n.n(M),V=n(65),G=n(66),U=n.n(G),H=function(){return function(){var e=Object(V.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get("https://gitconnected.com/v1/portfolio/knyto2");case 3:n=e.sent,t({type:"SAVE",profile:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},I=function(e){return{type:"SET_PAGE",pageValue:e}},J=Object(P.b)(),R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||w.d;var W=n(9),X=n(123),B=n(126),F=n(125),L=[{name:"Me",path:"/"},{name:"Work",path:"/work"},{name:"Projects",path:"/projects"},{name:"Education",path:"/education"},{name:"Resume",path:"/resume"}],q=(n(104),n(40)),z=function(e){Object(y.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(e){console.log("click",e)},e.handleChange=function(t,n){"/resume"===n&&(t.preventDefault(),window.location.href="".concat("https://gitconnected.com/").concat(e.props.user.basics.username,"/resume"),e.props.set("/")),e.props.setPage(n)},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.page;if(!this.props.user||!this.props.user.basics)return l.a.createElement("div",null);var t=this.props.classes;return l.a.createElement(l.a.Fragment,null,l.a.createElement(X.a,{className:t.root},l.a.createElement(B.a,{value:e,onChange:this.handleChange,centered:!0},L.map((function(e,t){return l.a.createElement(F.a,{label:e.name,key:e.name,component:q.a,value:L[t].path,to:L[t].path})})))))}}]),n}(c.PureComponent),K=Object(W.a)({root:{flexGrow:1}})(Object(k.c)((function(e){return{user:e.user,page:e.page}}),(function(e){return{setPage:function(t){return e(r.setPage(t))}}}))(z)),Q=(n(105),function(e){Object(y.a)(n,e);var t=Object(g.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){if(!this.props.user||!this.props.user.basics)return l.a.createElement("div",null);var e=this.props.user;return l.a.createElement("div",{className:"UserHeader"},l.a.createElement("img",{className:"UserHeader-avatar",src:e.basics.picture,alt:e.basics.name}),l.a.createElement("div",{className:"details"},l.a.createElement("span",{className:"title"},e.basics.name),l.a.createElement("h4",null,l.a.createElement("a",{href:"".concat("https://gitconnected.com/").concat(e.basics.username),target:"_blank",rel:"noreferrer noopener"},"@",e.basics.username)),l.a.createElement("span",null,e.basics.label),l.a.createElement("span",null,e.basics.region),l.a.createElement("span",null,e.basics.yearsOfExperience," years of experience as a developer."),l.a.createElement("span",null,e.basics.headline)))}}]),n}(c.PureComponent)),Y=Object(k.c)((function(e){return{user:e.user}}))(Q),Z=n(128),$=n(127),ee=n(5),te=n(129);function ne(){var e=Object(s.a)(["\n\t&.page-appear {\n\t\tanimation: "," 1s forwards;\n\t}\n\t&.page-enter {\n\t\tanimation: "," 1s forwards;\n\t}\n\t&.page-exit {\n\t\tanimation: "," 1s forwards;\n\t}\n"]);return ne=function(){return e},e}function ae(){var e=Object(s.a)([""]);return ae=function(){return e},e}function re(){var e=Object(s.a)(["\n  from {\n    position: fixed;\n    opacity: 0;\n  }\n\n  to {\n    position: unset;\n    opacity: 1;\n  }\n"]);return re=function(){return e},e}function ce(){var e=Object(s.a)(["\n  from {\n    position: fixed;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    position: unset;\n    visibility: hidden;\n    -webkit-transform: translate3d(200%, 0, 0);\n    transform: translate3d(200%, 0, 0);\n  }\n"]);return ce=function(){return e},e}function le(){var e=Object(s.a)(["\n  from {\n    position: fixed;\n    -webkit-transform: translate3d(-200%, 0, 0);\n    transform: translate3d(-200%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    position: unset;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n"]);return le=function(){return e},e}var oe=Object(u.b)(le()),ie=Object(u.b)(ce()),se=Object(u.b)(re()),ue=u.a.div(ae()),pe=Object(u.a)(ue)(ne(),se,oe,ie),me=function(e){Object(y.a)(n,e);var t=Object(g.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.user;return l.a.createElement(pe,{className:"page"},l.a.createElement("div",{className:"section-title"},"About Me"),l.a.createElement(h,null,e.basics.summary),l.a.createElement("div",{className:"section-title"},"Skills"),l.a.createElement("div",null,e.skills.map((function(e){return l.a.createElement(te.a,{className:"pill",key:e.name,label:e.name,color:"secondary"})}))),l.a.createElement("div",{className:"section-title"},"Profiles"),l.a.createElement("ul",null,e.basics.profiles.map((function(e,t){return l.a.createElement("span",{key:e.network},0!==t&&" | ",l.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer noopener"},e.network))}))))}}]),n}(c.Component),fe=n(45);function be(){var e=Object(s.a)(["\n    margin-top: 1.2rem;\n"]);return be=function(){return e},e}var de=u.a.div(be()),ve=function(e){Object(y.a)(n,e);var t=Object(g.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.user;return l.a.createElement(pe,{className:"page"},l.a.createElement("div",{className:"section-title"},"Projects"),l.a.createElement("ul",null,e.projects.map((function(e,t){return l.a.createElement(d,{key:t},l.a.createElement(v,null,e.name),l.a.createElement("div",null,e.summary),l.a.createElement("div",null,l.a.createElement("a",{href:e.website,target:"_blank",rel:"noopener noreferrer"},e.website)),l.a.createElement(de,null,[].concat(Object(fe.a)(e.languages),Object(fe.a)(e.libraries)).map((function(e,t){return l.a.createElement(te.a,{className:"pill",color:"secondary",key:t,label:e})}))))}))))}}]),n}(c.Component),Ee=function(e){Object(y.a)(n,e);var t=Object(g.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.user;return l.a.createElement(pe,{className:"page"},l.a.createElement("div",{className:"section-title"},"Work"),l.a.createElement("ul",null,e.work.map((function(e,t){return l.a.createElement(d,{key:t},l.a.createElement(v,null,e.position),l.a.createElement("div",null,l.a.createElement(E,null,e.company),l.a.createElement("span",null,e.location),l.a.createElement("span",null," \u22c5 "),l.a.createElement("span",null,e.start.year," to"," ",e.end.year||"Present")),l.a.createElement(h,null,e.summary))}))))}}]),n}(c.Component);function he(){var e=Object(s.a)(["\n    @media (max-width: 640px) {\n        display: flex;\n        flex-direction: column;\n    }\n"]);return he=function(){return e},e}var Oe=u.a.div(he()),je=function(e){Object(y.a)(n,e);var t=Object(g.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.user;return l.a.createElement(pe,{className:"page"},l.a.createElement("div",{className:"section-title"},"Education"),l.a.createElement("ul",null,e.education.map((function(e,t){return l.a.createElement(d,{key:t},l.a.createElement(v,null,e.institution),l.a.createElement(Oe,null,l.a.createElement(E,null,l.a.createElement("span",null,e.studyType,", ",e.area),l.a.createElement("span",{className:"item-separator"},"\xa0\u22c5\xa0"),l.a.createElement("span",null,e.start.year," to"," ",e.end.year))),l.a.createElement(h,null,e.description.replace("\n\n","\n")))}))))}}]),n}(c.Component);function ye(){var e=Object(s.a)(["\n    position: relative;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]);return ye=function(){return e},e}var ge=u.a.div(ye()),ke=function(e){Object(y.a)(n,e);var t=Object(g.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname;this.props.setPage(e)}},{key:"render",value:function(){if(!this.props.user||!this.props.user.basics)return l.a.createElement("div",null);var e=this.props.user;return l.a.createElement("div",{className:"Pages"},l.a.createElement(ee.a,{render:function(t){var n=t.location;return l.a.createElement(ge,null,l.a.createElement(Z.a,{appear:!0,component:null},l.a.createElement($.a,{timeout:1e3,classNames:"page",key:n.pathname},l.a.createElement(ee.c,{location:n},l.a.createElement(ee.a,{exact:!0,path:"/"},l.a.createElement(me,{user:e})),l.a.createElement(ee.a,{exact:!0,path:"/projects"},l.a.createElement(ve,{user:e})),l.a.createElement(ee.a,{exact:!0,path:"/work"},l.a.createElement(Ee,{user:e})),l.a.createElement(ee.a,{exact:!0,path:"/education"},l.a.createElement(je,{user:e}))))))}}))}}]),n}(c.PureComponent),we=Object(ee.f)(Object(k.c)((function(e){return{user:e.user}}),(function(e){return{setPage:function(t){return e(r.setPage(t))}}}))(ke)),xe=function(e){Object(y.a)(n,e);var t=Object(g.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(K,null),l.a.createElement(Y,null),l.a.createElement(we,null))}},{key:"componentDidMount",value:function(){this.props.getProfile()}}]),n}(l.a.Component),Ne=Object(k.c)((function(e){return{user:e.user}}),(function(e){return{getProfile:function(){return e(a.getProfile())}}}))(xe),Pe=function(e){var t;return Object(w.e)((t=J,Object(w.c)({router:Object(x.b)(t),user:A,page:D})),e,R(Object(w.a)(Object(N.a)(J),C.a)))}();i.a.render(l.a.createElement(k.a,{store:Pe},l.a.createElement(x.a,{history:J},l.a.createElement(Ne,null))),document.getElementById("root"))},75:function(e,t,n){e.exports=n(106)},80:function(e,t,n){},82:function(e,t,n){}},[[75,1,2]]]);
//# sourceMappingURL=main.74c99c4c.chunk.js.map