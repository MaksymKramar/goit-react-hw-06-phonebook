(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{28:function(e,t,n){},43:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),o=n(13),i=n.n(o),l=(n(28),n(19)),b=n(6),d=n(7),s=n(11),u=n.n(s),j={addContact:Object(d.b)("contacts/Add",(function(e){var t=e.name,n=e.number;return{payload:{id:u.a.generate(),name:t,number:n}}})),deleteContact:Object(d.b)("contacts/Delete"),changeFilter:Object(d.b)("contacts/ChangeFilter")},h=n(3),O=n(4),p=O.a.button(r||(r=Object(h.a)(["\n  width: 150px;\n  height: 20px;\n  cursor: pointer;\n  background-color: green;\n  border-radius: 50px;\n"]))),m=n(1);var x,f,g=function(e){var t=e.type,n=e.text,r=e.onClick;return Object(m.jsx)(p,{type:t,onClick:r,children:n})},v=O.a.form(x||(x=Object(h.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n"]))),y=O.a.input(f||(f=Object(h.a)(["\n  border-style: dashed;\n  border-color: aqua;\n  outline-color: tomato;\n  margin-bottom: 15px;\n"])));var C,k,w,A,z,F,B=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(l.a)(c,2),i=o[0],d=o[1],s=Object(b.b)(),h=u.a.generate(),O=u.a.generate(),p=function(){r(""),d("")},x=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":r(a);break;case"number":d(a)}};return Object(m.jsxs)(v,{onSubmit:function(e){e.preventDefault(),s(j.addContact({name:n,number:i})),p()},children:[Object(m.jsx)("label",{htmlFor:h,children:Object(m.jsx)(y,{id:h,placeholder:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:x,value:n})}),Object(m.jsx)("label",{htmlFor:O,children:Object(m.jsx)(y,{id:O,placeholder:"Tel",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:x,value:i})}),Object(m.jsx)(g,{text:"Add contact",type:"submit"})]})},S=O.a.div(C||(C=Object(h.a)(["\n  border-style: dotted;\n  display: inline-block;\n  padding-left: 15px;\n  padding-right: 30px;\n"]))),L=O.a.ul(k||(k=Object(h.a)(["\n  display: inline-block;\n  list-style-type: decimal;\n  font-size: x-large;\n"]))),q=O.a.li(w||(w=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 15px;\n"]))),D=O.a.p(A||(A=Object(h.a)(["\n  font-size: x-large;\n  margin-right: 20px;\n"]))),J=O.a.span(z||(z=Object(h.a)(["\n  font-weight: bold;\n  font-family: sans-serif;\n"]))),T=O.a.button(F||(F=Object(h.a)(["\n  background-color: red;\n  border-radius: 45%;\n  width: 60px;\n  height: 30px;\n\n  cursor: pointer;\n"]))),Z=function(e){return e.phoneBook.filter},M=function(e){var t=function(e){return e.phoneBook.contacts}(e),n=Z(e),r=n.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(r)||e.number.includes(n)}))};var N,E,I=function(){var e=Object(b.c)(M),t=Object(b.b)();return Object(m.jsx)(S,{children:Object(m.jsx)(L,{children:e.map((function(e){var n=e.id,r=e.name,a=e.number;return Object(m.jsxs)(q,{children:[Object(m.jsxs)(D,{children:[Object(m.jsx)(J,{children:r}),": ",a]}),Object(m.jsx)(T,{type:"button",onClick:function(){return function(e){return t(j.deleteContact(e))}(n)},children:"Delete"})]},n)}))})})},P=O.a.div(N||(N=Object(h.a)(["\n  margin-bottom: 15px;\n"]))),$=O.a.p(E||(E=Object(h.a)(["\n  margin-top: 0px;\n  margin-bottom: 0px;\n"])));var G=function(){var e=Object(b.c)(Z),t=Object(b.b)();return Object(m.jsxs)(P,{children:[Object(m.jsx)($,{children:"Find contacts by name"}),Object(m.jsx)("input",{placeholder:"Search",type:"text",value:e,onChange:function(e){return t(j.changeFilter(e.target.value))}})]})};var H=function(e){var t=e.title,n=e.children;return Object(m.jsxs)("section",{children:[Object(m.jsx)("h2",{children:t}),n]})};n(43);var K,Q=function(){return Object(m.jsxs)("div",{className:"mainContainer",children:[Object(m.jsx)(H,{title:"Phonebook",children:Object(m.jsx)(B,{})}),Object(m.jsxs)(H,{title:"Contacts",children:[Object(m.jsx)(G,{}),Object(m.jsx)(I,{})]})]})},R=n(15),U=n(8),V=n(20),W=n.n(V),X=n(21),Y=n(16),_=n(2),ee=Object(d.c)([],(K={},Object(Y.a)(K,j.addContact,(function(e,t){var n=t.payload;return e.find((function(e){return e.number===n.number}))?(alert("'".concat(n.number,"' is already in your list")),e):e.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?(alert("'".concat(n.name,"' is already in your list")),e):(alert("'".concat(n.name,"' added to phonebook")),[].concat(Object(R.a)(e),[n]))})),Object(Y.a)(K,j.deleteContact,(function(e,t){var n=t.payload;return alert("Contact deleted"),e.filter((function(e){return e.id!==n}))})),K)),te=Object(d.c)("",Object(Y.a)({},j.changeFilter,(function(e,t){return t.payload}))),ne=Object(_.b)({contacts:ee,filter:te}),re={key:"phoneBook",storage:W.a,blacklist:["filter"]},ae=[].concat(Object(R.a)(Object(d.d)({serializableCheck:{ignoredActions:[U.a,U.f,U.b,U.c,U.d,U.e]}})),[X.logger]),ce=Object(d.a)({reducer:{phoneBook:Object(U.g)(re,ne)},middleware:ae,devTools:!1}),oe={store:ce,persistore:Object(U.h)(ce)},ie=n(22);i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(b.a,{store:oe.store,children:Object(m.jsx)(ie.a,{loading:null,persistor:oe.persistore,children:Object(m.jsx)(Q,{})})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.c5028c42.chunk.js.map