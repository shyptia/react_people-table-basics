(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),s=c(5),r=c(2),a=(c(20),c(21),c(0)),j=(c(22),c(6)),i=c.n(j),o=c(1),l=Object(a.memo)((function(e){var t=e.to,c=e.text;return Object(o.jsx)(s.c,{to:t,className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:c})})),b=Object(a.memo)((function(){return Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(l,{to:"/",text:"Home"}),Object(o.jsx)(l,{to:"/people",text:"People"})]})})),d=function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(b,{})})}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(r.b,{})})})]})},h=Object(a.memo)((function(){return Object(o.jsx)("h1",{className:"title",children:"Home Page"})})),O=c(8),x=c(11),u=c(4),m=(c(24),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})}),p=Object(a.memo)((function(e){var t=e.person;return Object(o.jsx)(s.b,{to:"../".concat(t.slug),className:i()({"has-text-danger":"f"===t.sex}),children:t.name})})),f=Object(a.memo)((function(e){var t=e.person,c=e.people,n=e.selectedUser,s=function(e){var t=c.find((function(t){return t.name===e}));return t?Object(o.jsx)(p,{person:t}):e};return Object(o.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":n===t.slug}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(p,{person:t})}),Object(o.jsx)("td",{children:t.sex}),Object(o.jsx)("td",{children:t.born}),Object(o.jsx)("td",{children:t.died}),Object(o.jsx)("td",{children:t.motherName?s(t.motherName):"-"}),Object(o.jsx)("td",{children:t.fatherName?s(t.fatherName):"-"})]})})),v=Object(a.memo)((function(e){var t=e.people,c=e.selectedUser;return Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Sex"}),Object(o.jsx)("th",{children:"Born"}),Object(o.jsx)("th",{children:"Died"}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsx)(f,{person:e,people:t,selectedUser:c},e.slug)}))})]})}));function g(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var N=Object(a.memo)((function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),j=Object(u.a)(s,2),i=j[0],l=j[1],b=Object(a.useState)(!1),d=Object(u.a)(b,2),h=d[0],p=d[1],f=Object(a.useState)(!1),N=Object(u.a)(f,2),y=N[0],w=N[1],k=Object(r.i)().selectedUser,P=void 0===k?"":k,S=function(){var e=Object(x.a)(Object(O.a)().mark((function e(){var t;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,g();case 4:t=e.sent,n(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),p(!0);case 11:return e.prev=11,l(!1),w(!0),e.finish(11);case 15:case"end":return e.stop()}}),e,null,[[0,8,11,15]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){p(!1),w(!1),S()}),[]);var U=y&&!h&&!c.length,_=y&&!h&&c.length;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[i&&Object(o.jsx)(m,{}),h&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),U&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),_&&Object(o.jsx)(v,{people:c,selectedUser:P})]})})]})})),y=Object(a.memo)((function(){return Object(o.jsx)("h1",{className:"title",children:"Page not found"})}));Object(n.createRoot)(document.getElementById("root")).render(Object(o.jsx)(s.a,{children:Object(o.jsx)(r.e,{children:Object(o.jsxs)(r.c,{path:"/",element:Object(o.jsx)(d,{}),children:[Object(o.jsx)(r.c,{path:"*",element:Object(o.jsx)(y,{})}),Object(o.jsx)(r.c,{index:!0,element:Object(o.jsx)(h,{})}),Object(o.jsxs)(r.c,{path:"people",children:[Object(o.jsx)(r.c,{index:!0,element:Object(o.jsx)(N,{})}),Object(o.jsx)(r.c,{path:":selectedUser",element:Object(o.jsx)(N,{})})]}),Object(o.jsx)(r.c,{path:"home",element:Object(o.jsx)(r.a,{to:"/",replace:!0})})]})})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.2e76228d.chunk.js.map