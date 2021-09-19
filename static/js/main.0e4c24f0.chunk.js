(this.webpackJsonpreactproject1=this.webpackJsonpreactproject1||[]).push([[0],{47:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(16),l=c.n(r),a=(c(47),c(12)),i=(c(48),c(56)),o=c(42),j=c(1);var d=function(e){return Object(j.jsx)("div",{children:e.alert&&Object(j.jsx)(o.a,{variant:e.alert.type,children:e.alert.message})})},h=c(58),b=c(57);function x(e){return Object(j.jsx)("div",{children:Object(j.jsx)(h.a,{collapseOnSelect:!0,expand:"lg",bg:"light"===e.mode?"primary":"dark",variant:"dark",children:Object(j.jsx)(h.a.Collapse,{id:"responsive-navbar-nav",children:Object(j.jsx)(b.a,{className:"d-flex text-light",style:{margin:"0px 19px"},children:Object(j.jsx)(b.a,{children:Object(j.jsx)(b.a.Check,{type:"switch",id:"custom-switch",label:"Enable Darkmode",onClick:e.tooglemode})})})})})})}var u=c(17);function O(e){var t=Object(n.useState)({}),c=Object(a.a)(t,2),s=c[0],r=c[1];Object(n.useEffect)((function(){l()}),[e.text]);var l=function(){var t=e.text.split(/\s+/),c={};t.forEach((function(e){""!==e&&(c[e]?c[e]=c[e]+1:c[e]=1)})),r(c)};return Object(j.jsx)("div",{children:Object(j.jsx)("ol",{children:Object(j.jsx)("table",{style:{border:" 1px solid black",width:"40%"},children:Object.keys.length>0&&Object.keys(s).map((function(e,t){return Object(j.jsxs)("tr",{style:{border:"1px solid black"},children:[Object(j.jsx)("td",{children:e}),Object(j.jsx)("td",{children:s[e]})]})}))})})})}function p(e){var t,c=Object(n.useState)(""),s=Object(a.a)(c,2),r=s[0],l=s[1];return t=.008*r.split(/\s+/).filter((function(e){return 0!==e.length})).length,Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:e.heading}),Object(j.jsx)(b.a,{children:Object(j.jsxs)(b.a.Group,{className:"mb-3",controlId:"TextBox",children:[Object(j.jsx)(b.a.Label,{children:Object(j.jsx)("h6",{children:"Write your text here"})}),Object(j.jsx)(b.a.Control,{as:"textarea",value:r,rows:8,onChange:function(e){console.log("onchange was clicked"),l(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"black",color:"light"===e.mode?"black":"white"},placeholder:"Enter your text here"})]})}),Object(j.jsx)(u.a,{className:"btn btn-primary",onClick:function(){console.log("uppercase was clicked"),l(r.toUpperCase()),r.split(/\s+/).filter((function(e){return 0!==e.length})).length&&e.showAlert("Coverted to UpperCase","success")},children:"Convert to UpperCase"}),Object(j.jsx)(u.a,{className:"btn btn-primary mx-3 my-3",onClick:function(){console.log("uppercase was clicked"),l(r.toLowerCase()),r.split(/\s+/).filter((function(e){return 0!==e.length})).length&&e.showAlert("Coverted to LowerCase","success")},children:"Convert to LowerCase"}),Object(j.jsx)(u.a,{className:"btn btn-primary",onClick:function(){var t=document.getElementById("TextBox");t.select(),navigator.clipboard.writeText(t.value),r.length&&e.showAlert("Text copied on clipboard ","success")},children:"Copy Text"}),Object(j.jsx)(u.a,{className:"btn btn-primary mx-3 my-3",onClick:function(){var t=r.split(/\s+/);l(t.join(" ")),r.split(/\s+/).filter((function(e){return 0!==e.length})).length&&e.showAlert("Text Formated ","success")},children:"Format Text"}),Object(j.jsx)(u.a,{className:"btn btn-primary  ",onClick:function(){l(""),r.length&&e.showAlert("Text Box clear","success")},children:"Clear All"})]}),Object(j.jsxs)("div",{className:"my-3",children:[Object(j.jsx)("h2",{children:"Your Text summary "}),Object(j.jsxs)("p",{children:[r.split(/\s+/).filter((function(e){return 0!==e.length})).length," ","words and ",r.length," characters"]}),Object(j.jsxs)("p",{children:[" ",t," minutes to read."]}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{}),Object(j.jsx)("h3",{children:"Preview Text"}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{children:r})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"my-3",children:[Object(j.jsx)("h2",{children:"Word Count"}),Object(j.jsx)(O,{text:r})]})]})}var g=c(28),m=c(7);function f(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"this is About"})})}var v=function(){var e=Object(n.useState)("light"),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(null),l=Object(a.a)(r,2),o=l[0],h=l[1],b=function(e,t){h({message:e,type:t}),setTimeout((function(){h(null)}),2e3)};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(x,{title:"TextUtils",navlist1:"Home",navlist2:"About Us",mode:c,tooglemode:function(){"light"===c?(s("dark"),b("DarkMode activated sucessfully","success"),document.body.style.backgroundColor="grey"):(s("light"),b("LightMode activated sucessfully","success"),document.body.style.backgroundColor="white")}}),Object(j.jsx)(d,{alert:o}),Object(j.jsx)(i.a,{children:Object(j.jsx)(g.a,{children:Object(j.jsxs)(m.c,{children:[Object(j.jsx)(m.a,{exact:!0,path:"/about",children:Object(j.jsx)(f,{})}),Object(j.jsx)(m.a,{exact:!0,path:"/",children:Object(j.jsx)(p,{heading:"Enter the text to analyze",mode:c,showAlert:b})})]})})})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,59)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,l=t.getTTFB;c(e),n(e),s(e),r(e),l(e)}))};l.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),y()}},[[54,1,2]]]);
//# sourceMappingURL=main.0e4c24f0.chunk.js.map