(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),r=c(5),a=c(2),s=(c(20),c(21),c(0)),j=(c(22),c(6)),i=c.n(j),o=c(1),b=Object(s.memo)((function(e){var t=e.to,c=e.text;return Object(o.jsx)(r.c,{to:t,className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:c})})),l=Object(s.memo)((function(){return Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(b,{to:"/",text:"Home"}),Object(o.jsx)(b,{to:"/people",text:"People"})]})})),d=function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(l,{})})}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(a.b,{})})})]})},h=Object(s.memo)((function(){return Object(o.jsx)("h1",{className:"title",children:"Home Page"})})),O=c(8),u=c(11),x=c(4),m=(c(24),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})}),p=Object(s.memo)((function(e){var t=e.person;return Object(o.jsx)(r.b,{to:"../".concat(t.slug),className:i()({"has-text-danger":"f"===t.sex}),children:t.name})})),f=Object(s.memo)((function(e){var t=e.person,c=e.people,n=Object(a.i)().selectedUser,r=void 0===n?"":n,s=function(e){var t=c.find((function(t){return t.name===e}));return t?Object(o.jsx)(p,{person:t}):e};return Object(o.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":r===t.slug}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(p,{person:t})}),Object(o.jsx)("td",{children:t.sex}),Object(o.jsx)("td",{children:t.born}),Object(o.jsx)("td",{children:t.died}),Object(o.jsx)("td",{children:t.motherName?s(t.motherName):"-"}),Object(o.jsx)("td",{children:t.fatherName?s(t.fatherName):"-"})]})})),v=Object(s.memo)((function(e){var t=e.people;return Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Sex"}),Object(o.jsx)("th",{children:"Born"}),Object(o.jsx)("th",{children:"Died"}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsx)(f,{person:e,people:t},e.slug)}))})]})}));function g(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var N=Object(s.memo)((function(){var e=Object(s.useState)([]),t=Object(x.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(!1),a=Object(x.a)(r,2),j=a[0],i=a[1],b=Object(s.useState)(!1),l=Object(x.a)(b,2),d=l[0],h=l[1],p=Object(s.useState)(!1),f=Object(x.a)(p,2),N=f[0],y=f[1],w=function(){var e=Object(u.a)(Object(O.a)().mark((function e(){var t;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,g();case 4:t=e.sent,n(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),h(!0);case 11:return e.prev=11,i(!1),y(!0),e.finish(11);case 15:case"end":return e.stop()}}),e,null,[[0,8,11,15]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){h(!1),y(!1),w()}),[]);var k=Object(s.useMemo)((function(){return N&&!d&&!c.length}),[N,d,c]),P=Object(s.useMemo)((function(){return N&&!d&&c.length}),[N,d,c]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[j&&Object(o.jsx)(m,{}),d&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),k&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),P&&Object(o.jsx)(v,{people:c})]})})]})})),y=Object(s.memo)((function(){return Object(o.jsx)("h1",{className:"title",children:"Page not found"})}));Object(n.createRoot)(document.getElementById("root")).render(Object(o.jsx)(r.a,{children:Object(o.jsx)(a.e,{children:Object(o.jsxs)(a.c,{path:"/",element:Object(o.jsx)(d,{}),children:[Object(o.jsx)(a.c,{path:"*",element:Object(o.jsx)(y,{})}),Object(o.jsx)(a.c,{index:!0,element:Object(o.jsx)(h,{})}),Object(o.jsxs)(a.c,{path:"people",children:[Object(o.jsx)(a.c,{index:!0,element:Object(o.jsx)(N,{})}),Object(o.jsx)(a.c,{path:":selectedUser",element:Object(o.jsx)(N,{})})]}),Object(o.jsx)(a.c,{path:"home",element:Object(o.jsx)(a.a,{to:"/",replace:!0})})]})})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.668be802.chunk.js.map