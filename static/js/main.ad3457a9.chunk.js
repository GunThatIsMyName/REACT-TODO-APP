(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{25:function(e,t,n){"use strict";n.r(t);var c,o,i,r,a,d=n(0),s=n.n(d),l=n(13),j=n.n(l),b=n(11),O=n(5),u=n(2),p=n(4),x=n(3),f=n(1),m=x.c.ul(c||(c=Object(p.a)(["\n    display:flex;\n    flex-direction:column;\n"]))),h=x.c.h1(o||(o=Object(p.a)(["\n    font-size:30px;\n    margin-bottom:10px;\n    color:teal;\n"]))),g=x.c.li(i||(i=Object(p.a)(["\n    display:flex;\n    align-items:center;\n"]))),y=x.c.button(r||(r=Object(p.a)(["\n    width:35px;\n    height:35px;\n    border-radius:10px;\n"]))),v=x.c.h1(a||(a=Object(p.a)(["\n    margin-right:10px;\n    font-size: 24px;\n    margin-bottom:10px;\n"]))),k="DELETE",C="COMPLETE",w="Fixed",E={todos:[],completed:[]},S=function(e,t){switch(t.type){case"add":return Object(u.a)(Object(u.a)({},e),{},{todos:[].concat(Object(O.a)(e.todos),[{text:t.payload,id:Math.random()}])});case k:var n=e.todos.filter((function(e){return e.id!==t.id}));return Object(u.a)(Object(u.a)({},e),{},{todos:Object(O.a)(n)});case C:var c=e.todos.filter((function(e){return e.id!==t.id})),o=e.todos.filter((function(e){return e.id===t.id}));return Object(u.a)(Object(u.a)({},e),{},{todos:Object(O.a)(c),completed:[].concat(Object(O.a)(e.completed),Object(O.a)(o))});case w:var i=e.completed.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{fixed:!0}):e}));return Object(u.a)(Object(u.a)({},e),{},{completed:Object(O.a)(i)});case"nofixed":var r=e.completed.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{fixed:!1}):e}));return Object(u.a)(Object(u.a)({},e),{},{completed:Object(O.a)(r)});default:throw console.log("nodatas")}},z=function(){var e=Object(d.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],o=Object(d.useReducer)(S,E),i=Object(b.a)(o,2),r=i[0],a=i[1];return console.log(r.completed.map((function(e){return e})),"\ubcf4\uc5ec\uc9c0\ub294\uacf3"),console.log(r.todos.map((function(e){return e})),"\ud22c\ub450\uc2a4 \ubcf4\uc5ec\uc9c0\ub294\uacf3"),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(v,{children:"TODO APP"}),Object(f.jsx)("form",{onSubmit:function(e){e.preventDefault(),""!==n&&(a({type:"add",payload:n}),c(""))},children:Object(f.jsx)("input",{style:{marginBottom:20},type:"text",onChange:function(e){c(e.target.value)},value:n})}),Object(f.jsxs)("div",{children:[r.todos.length<1?"":Object(f.jsxs)(m,{children:[Object(f.jsx)(h,{children:"Todoapp"}),r.todos.map((function(e,t){return Object(f.jsxs)(g,{children:[Object(f.jsxs)(v,{children:[t+1,"\ubc88 | ",e.text]}),Object(f.jsx)(y,{onClick:function(){return a({type:k,id:e.id})},children:"\u274c"}),Object(f.jsx)(y,{onClick:function(){return a({type:C,id:e.id})},children:"\u2705"})]},e.id)}))]}),r.completed&&r.completed.length<1?"":Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(h,{children:"Completed"}),r.completed.map((function(e,t){return Object(f.jsxs)(g,{style:{backgroundColor:e.fixed?"orange":""},children:[Object(f.jsxs)(v,{children:[t+1,"\ubc88 | ",e.text]}),Object(f.jsx)(y,{onClick:function(){return a({type:e.fixed?"nofixed":w,id:e.id})},children:"\ud83d\udccc"}),Object(f.jsx)(y,{children:"\ud83c\udd7e\ufe0f"})]},e.id)}))]})]})]})};var F,M=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(z,{})})},T=n(17),B=Object(x.a)(F||(F=Object(p.a)(["\n  ","\n  /* other styles */\n  a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-size:14px;\n        color:white;\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        background-color:rgba(20,20,20,10);\n        padding-top:70px;\n        padding-left:10px;\n    }\n\n"])),T.a);j.a.render(Object(f.jsxs)(s.a.StrictMode,{children:[Object(f.jsx)(M,{}),Object(f.jsx)(B,{})]}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ad3457a9.chunk.js.map