(this["webpackJsonpreact-admin-notes-frontend"]=this["webpackJsonpreact-admin-notes-frontend"]||[]).push([[0],{432:function(e,a,t){},592:function(e,a,t){},651:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),l=t.n(c),o=(t(432),t(742)),s=t(732),i=t(731),m=t(167),u=t(39),E=t(101),d=t(119),f="http://localhost:3000/api",p=E.a.fetchJson,h={getList:function(e,a){var t=a.pagination,n=t.page,r=t.perPage,c=a.sort,l=c.field,o=c.order,s={sort:JSON.stringify([l,o]),range:JSON.stringify([(n-1)*r,n*r-1]),filter:JSON.stringify(a.filter)},i="".concat(f,"/").concat(e,"?").concat(Object(d.stringify)(s));return p(i).then((function(e){var a=e.headers;return{data:e.json.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{id:e._id})})),total:parseInt(a.get("content-range").split("/").pop(),10)}}))},getOne:function(e,a){return p("".concat(f,"/").concat(e,"/").concat(a.id)).then((function(e){var a=e.json;return{data:Object(u.a)(Object(u.a)({},a),{},{id:a._id})}}))},getMany:function(e,a){var t={filter:JSON.stringify({id:a.ids})},n="".concat(f,"/").concat(e,"?").concat(Object(d.stringify)(t));return p(n).then((function(e){return{data:e.json.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{id:e._id})}))}}))},getManyReference:function(e,a){var t=a.pagination,n=t.page,r=t.perPage,c=a.sort,l=c.field,o=c.order,s={sort:JSON.stringify([l,o]),range:JSON.stringify([(n-1)*r,n*r-1]),filter:JSON.stringify(Object(u.a)(Object(u.a)({},a.filter),{},Object(m.a)({},a.target,a.id)))},i="".concat(f,"/").concat(e,"?").concat(Object(d.stringify)(s));return p(i).then((function(e){var a=e.headers;return{data:e.json.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{id:e._id})})),total:parseInt(a.get("content-range").split("/").pop(),10)}}))},update:function(e,a){return p("".concat(f,"/").concat(e,"/").concat(a.id),{method:"PUT",body:JSON.stringify(a.data)}).then((function(e){var a=e.json;return{data:Object(u.a)(Object(u.a)({},a),{},{id:a._id})}}))},updateMany:function(e,a){var t={filter:JSON.stringify({id:a.id})};return p("".concat(f,"/").concat(e,"?").concat(Object(d.stringify)(t)),{method:"PUT",body:JSON.stringify(a.data)}).then((function(e){var a=e.json;return{data:a,id:a._id}}))},create:function(e,a){return p("".concat(f,"/").concat(e),{method:"POST",body:JSON.stringify(a.data)}).then((function(e){var t=e.json;return{data:Object(u.a)(Object(u.a)({},a.data),{},{id:t._id})}}))},delete:function(e,a){return p("".concat(f,"/").concat(e,"/").concat(a.id),{method:"DELETE",body:JSON.stringify(a._id)}).then((function(e){var a=e.json;return Object(u.a)(Object(u.a)({},a),{},{id:a._id})}))},deleteMany:function(e,a){var t={filter:JSON.stringify({id:a.ids})};return p("".concat(f,"/").concat(e,"?").concat(Object(d.stringify)(t)),{method:"DELETE",body:JSON.stringify(a.data)}).then((function(e){return{data:e.json}}))}},g=t(704),b=t(706),y=t(54),v=function(){return n.createElement(g.a,null,n.createElement(y.b,{title:"Employee manager"}),n.createElement(b.a,null,"Ph\u1ea7n m\u1ec1m qu\u1ea3n l\xfd nh\xe2n s\u1ef1 c\xf4ng ty Cysai"))},O=t(118),j=(t(592),function(e){var a=e.message;return a.attachments&&a.attachments.length>0?r.a.createElement("img",{src:a.attachments[0].file,alt:"message-attachment",className:"message-image",style:{float:"right"}}):r.a.createElement("div",{className:"message",style:{float:"right",marginRight:"18px",color:"white",backgroundColor:"#3B2A50"}},a.text)}),w=function(e){var a=e.lastMessage,t=e.message,n=!a||a.sender.username!==t.sender.username;return r.a.createElement("div",{className:"message-row"},n&&r.a.createElement("div",{className:"message-avatar",style:{backgroundImage:t.sender&&"url(".concat(t.sender.avatar,")")}}),t.attachments&&t.attachments.length>0?r.a.createElement("img",{src:t.attachments[0].file,alt:"message-attachment",className:"message-image",style:{marginLeft:n?"4px":"48px"}}):r.a.createElement("div",{className:"message",style:{float:"left",backgroundColor:"#CABCDC",marginLeft:n?"4px":"48px"}},t.text))},_=t(193),N=t(747),k=t(748),T=function(e){var a=Object(n.useState)(""),t=Object(_.a)(a,2),c=t[0],l=t[1],o=e.chatId,s=e.creds,i=function(e){e.preventDefault();var a=c.trim();a.length>0&&Object(O.r)(s,o,{text:a}),l("")};return r.a.createElement("form",{className:"message-form",onSubmit:i},r.a.createElement("input",{className:"message-input",placeholder:"Send a message...",value:c,onChange:function(a){l(a.target.value),Object(O.n)(e,o)},onSubmit:i}),r.a.createElement("label",{htmlFor:"upload-button"},r.a.createElement("span",{className:"image-button"},r.a.createElement(N.a,{className:"picture-icon"}))),r.a.createElement("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onChange:function(e){Object(O.r)(s,o,{files:e.target.files,text:""})}.bind(undefined)}),r.a.createElement("button",{type:"submit",className:"send-button"},r.a.createElement(k.a,{className:"send-icon"})))},S=function(e){var a=e.chats,t=e.activeChat,n=e.userName,c=e.messages,l=a&&a[t];return l?r.a.createElement("div",{className:"chat-feed"},r.a.createElement("div",{className:"chat-title-container"},r.a.createElement("div",{className:"chat-title"},null===l||void 0===l?void 0:l.title),r.a.createElement("div",{className:"chat-subtitle"},l.people.map((function(e){return" ".concat(e.person.username)})))),function(){var e=Object.keys(c);return e.map((function(a,t){var o=c[a],s=0===t?null:e[t-1],i=n===o.sender.username;return r.a.createElement("div",{key:"msg_".concat(t),style:{width:"100%"}},r.a.createElement("div",{className:"message-block"},i?r.a.createElement(j,{message:o}):r.a.createElement(w,{message:o,lastMessage:c[s]})),r.a.createElement("div",{className:"read-receipts",style:{marginRight:i?"18px":"0px",marginLeft:i?"0px":"68px"}},function(e,a){return l.people.map((function(t,n){return t.last_read===e.id&&r.a.createElement("div",{key:"read_".concat(n),className:"read-receipt",style:{float:a?"right":"left",backgroundImage:t.person.avatar&&"url(".concat(t.person.avatar,")")}})}))}(o,i)))}))}(),r.a.createElement("div",{style:{height:"100px"}}),r.a.createElement("div",{className:"message-form-container"},r.a.createElement(T,Object.assign({},e,{chatId:t})))):r.a.createElement("div",null)},P=function(){return r.a.createElement(O.d,{height:"100vh",userName:"langdaiduong",userSecret:"xyz01634016082",projectID:"0056905e-32d6-48aa-a93c-4c4d4808e8bb",renderChatFeed:function(e){return r.a.createElement(S,e)},onNewMessage:function(){return new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3").play()}})},H=t(80),x={login:function(e){var a=e.username,t=e.password,n=new Request("http://localhost:3000/login",{method:"POST",body:JSON.stringify({username:a,password:t}),headers:new Headers({"Content-Type":"application/json"}),credentials:"include"});return H.a.setRefreshTokenEndpoint("http://localhost:3000/refresh-token"),fetch(n).then((function(e){if(e.status<200||e.status>=300)throw new Error(e.statusText);return e.json()})).then((function(e){var a=e.accessToken,t=(e.refreshToken,e.permissions);return localStorage.setItem("permissions",t),H.a.setToken(a,1e4)}))},logout:function(){new Request("http://localhost:3000/logout",{method:"GET",headers:new Headers({"Content-Type":"application/json"}),credentials:"include"});return H.a.ereaseToken(),Promise.resolve()},checkAuth:function(){return H.a.waitForTokenRefresh().then((function(){return console.log("check auth"),H.a.getToken()?Promise.resolve():Promise.reject()}))},checkError:function(e){var a=e.status;return 401===a||403===a?(H.a.ereaseToken(),Promise.reject()):Promise.resolve()},getPermissions:function(){var e=localStorage.getItem("permissions");return e?Promise.resolve(e):Promise.reject()}},B=t(739),J=t(361),C=t(736),R=t(744),I=t(735),D=t(733),q=t(721),L=t(722),M=t(745),A=t(723),F=t(401),G=t(724),X=t(654),Y=t(174),z=t(707),U=t(315),V=t(28),W=t(743),$=function(e){var a=e.selectedIds,t=Object(X.a)(),r=Object(Y.a)(),c=Object(z.a)(),l=Object(U.a)("employees",a,{views:0},{onSuccess:function(){t(),r("employees updated"),c("employees")},onFailure:function(e){return r("Error: employees not updated","warning")}}),o=Object(_.a)(l,2),s=o[0],i=o[1].loading;return n.createElement(V.a,{label:"Reset Views",disabled:i,onClick:s},n.createElement(W.a,null))},K=t(398),Q=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement($,Object.assign({label:"Reset Views"},e)),r.a.createElement(K.a,e))},Z=function(e){return r.a.createElement(B.a,e,r.a.createElement(J.a,{label:"Search",source:"q",alwaysOn:!0}),r.a.createElement(C.a,{label:"Name",source:"name",reference:"employees",allowEmpty:!0},r.a.createElement(R.a,{optionText:"name"})))},ee=function(e){return r.a.createElement(I.a,Object.assign({},e,{filters:r.a.createElement(Z,null),bulkActionButtons:r.a.createElement(Q,null)}),r.a.createElement(D.a,null,r.a.createElement(q.a,{source:"_id",label:"id"}),r.a.createElement(q.a,{source:"name"}),r.a.createElement(L.a,{source:"date_of_birth"}),r.a.createElement(q.a,{source:"address"}),r.a.createElement(q.a,{source:"phone"}),r.a.createElement(M.a,{source:"email"}),r.a.createElement(q.a,{source:"position"}),r.a.createElement(q.a,{source:"level"}),r.a.createElement(L.a,{source:"date_of_joining"}),r.a.createElement(A.a,{label:"Edit",basePath:"/employees"}),r.a.createElement(F.a,{label:"Delete",basePath:"/employees"}),r.a.createElement(G.a,{source:"Show"})))},ae=t(738),te=t(734),ne=t(726),re=t(362),ce=function(e){return r.a.createElement(ae.a,e,r.a.createElement(te.a,null,r.a.createElement(J.a,{disabled:!0,source:"id"}),r.a.createElement(J.a,{source:"name"}),r.a.createElement(ne.a,{source:"date_of_birth"}),r.a.createElement(R.a,{source:"gender",choices:[{id:"Nam",name:"Nam"},{id:"N\u1eef",name:"N\u1eef"},{id:"Gi\u1edbi t\xednh th\u1ee9 3",name:"Gi\u1edbi t\xednh th\u1ee9 3"}]}),r.a.createElement(J.a,{source:"address",validate:Object(re.b)()}),r.a.createElement(J.a,{source:"phone",validate:Object(re.b)()}),r.a.createElement(J.a,{source:"email",validate:Object(re.b)()}),r.a.createElement(J.a,{source:"position"}),r.a.createElement(J.a,{source:"level"}),r.a.createElement(ne.a,{source:"date_of_joining"})))},le=t(746),oe=function(e){return r.a.createElement(le.a,e,r.a.createElement(te.a,null,r.a.createElement(J.a,{source:"name"}),r.a.createElement(ne.a,{source:"date_of_birth"}),r.a.createElement(R.a,{source:"gender",choices:[{id:"Nam",name:"Nam"},{id:"N\u1eef",name:"N\u1eef"},{id:"Gi\u1edbi t\xednh th\u1ee9 3",name:"Gi\u1edbi t\xednh th\u1ee9 3"}]}),r.a.createElement(J.a,{source:"address"}),r.a.createElement(J.a,{source:"phone"}),r.a.createElement(J.a,{source:"email"}),r.a.createElement(J.a,{source:"position"}),r.a.createElement(J.a,{source:"level"}),r.a.createElement(ne.a,{source:"date_of_joining"})))},se=t(371),ie=t(397),me=function(e){return r.a.createElement(se.a,Object.assign({},e,{color:"secondary"}))},ue=function(e){return r.a.createElement(ie.a,Object.assign({},e,{ActionsComponent:me}))},Ee=function(e){return r.a.createElement(B.a,e,r.a.createElement(J.a,{label:"Search",source:"q",alwaysOn:!0}),r.a.createElement(C.a,{label:"Name",source:"name",reference:"users",allowEmpty:!0},r.a.createElement(R.a,{optionText:"name"})))},de=function(e){return r.a.createElement(I.a,Object.assign({},e,{filters:r.a.createElement(Ee,null),pagination:r.a.createElement(ue,null)}),r.a.createElement(D.a,null,r.a.createElement(q.a,{source:"_id",label:"id"}),r.a.createElement(q.a,{source:"username"}),r.a.createElement(q.a,{source:"name"}),r.a.createElement(q.a,{source:"roles",label:"Roles"}),r.a.createElement(L.a,{source:"created_at"}),r.a.createElement(A.a,{label:"Edit",basePath:"/users"}),r.a.createElement(F.a,{label:"Delete",basePath:"/users"}),r.a.createElement(G.a,{source:"Show"})))},fe=t(727),pe=function(e){return r.a.createElement(ae.a,e,r.a.createElement(te.a,null,r.a.createElement(J.a,{disabled:!0,source:"id"}),r.a.createElement(J.a,{source:"username"}),r.a.createElement(fe.a,{source:"password"}),r.a.createElement(J.a,{source:"name"}),r.a.createElement(R.a,{source:"roles",choices:[{id:"employee",name:"employee"},{id:"admin",name:"admin"},{id:"manager",name:"manager"},{id:"leader",name:"leader"}]}),r.a.createElement(ne.a,{source:"created_at"})))},he=function(e){return r.a.createElement(le.a,e,r.a.createElement(te.a,null,r.a.createElement(J.a,{source:"username"}),r.a.createElement(fe.a,{source:"password"}),r.a.createElement(J.a,{source:"name"}),r.a.createElement(R.a,{source:"roles",choices:[{id:"employee",name:"employee"},{id:"admin",name:"admin"},{id:"manager",name:"manager"},{id:"leader",name:"leader"}]})))},ge=t(728),be=function(e){return r.a.createElement(B.a,e,r.a.createElement(J.a,{label:"Search",source:"q",alwaysOn:!0}),r.a.createElement(C.a,{label:"Name",source:"fullname",reference:"salaries",allowEmpty:!0},r.a.createElement(R.a,{optionText:"fullname"})))},ye=function(e){return r.a.createElement(I.a,Object.assign({},e,{filters:r.a.createElement(be,null)}),r.a.createElement(D.a,null,r.a.createElement(q.a,{source:"_id",label:"id"}),r.a.createElement(q.a,{source:"fullname"}),r.a.createElement(q.a,{source:"stk"}),r.a.createElement(q.a,{source:"position"}),r.a.createElement(ge.a,{source:"salary"}),r.a.createElement(q.a,{source:"allowance"}),r.a.createElement(q.a,{source:"insurrance.BHYT",label:"BHYT"}),r.a.createElement(q.a,{source:"insurrance.BHXH",label:"BHXH"}),r.a.createElement(q.a,{source:"insurrance.BHTN",label:"BHTN"}),r.a.createElement(q.a,{source:"tax_personal"}),r.a.createElement(ge.a,{source:"salary_sum"}),r.a.createElement(L.a,{source:"created_at"}),r.a.createElement(A.a,{label:"Edit",basePath:"/salaries"}),r.a.createElement(F.a,{label:"Delete",basePath:"/salaries"}),r.a.createElement(G.a,{source:"Show"})))},ve=t(729),Oe=function(e){return r.a.createElement(ae.a,e,r.a.createElement(te.a,null,r.a.createElement(J.a,{disabled:!0,source:"id"}),r.a.createElement(J.a,{source:"fullname"}),r.a.createElement(J.a,{source:"stk"}),r.a.createElement(J.a,{source:"position"}),r.a.createElement(ve.a,{source:"salary"}),r.a.createElement(J.a,{source:"allowance"}),r.a.createElement(J.a,{source:"insurrance.BHYT",label:"BHYT"}),r.a.createElement(J.a,{source:"insurrance.BHXH",label:"BHXH"}),r.a.createElement(J.a,{source:"insurrance.BHTN",label:"BHTN"}),r.a.createElement(J.a,{source:"tax_personal"}),r.a.createElement(ve.a,{source:"salary_sum"}),r.a.createElement(ne.a,{source:"created_at"})))},je=function(e){return r.a.createElement(le.a,e,r.a.createElement(te.a,null,r.a.createElement(J.a,{source:"fullname"}),r.a.createElement(J.a,{source:"stk"}),r.a.createElement(J.a,{source:"position"}),r.a.createElement(ve.a,{source:"salary"}),r.a.createElement(J.a,{source:"allowance"}),r.a.createElement(J.a,{source:"insurrance.BHYT",label:"BHYT"}),r.a.createElement(J.a,{source:"insurrance.BHXH",label:"BHXH"}),r.a.createElement(J.a,{source:"insurrance.BHTN",label:"BHTN"}),r.a.createElement(J.a,{source:"tax_personal"}),r.a.createElement(ve.a,{source:"salary_sum"}),r.a.createElement(ne.a,{source:"created_at"})))},we=function(e){return r.a.createElement(B.a,e,r.a.createElement(J.a,{label:"Search",source:"q",alwaysOn:!0}),r.a.createElement(C.a,{label:"Name",source:"fullname",reference:"votes",allowEmpty:!0},r.a.createElement(R.a,{optionText:"fullname"})))},_e=function(e){return r.a.createElement(I.a,Object.assign({},e,{filters:r.a.createElement(we,null)}),r.a.createElement(D.a,null,r.a.createElement(q.a,{source:"_id",label:"id"}),r.a.createElement(q.a,{source:"fullname"}),r.a.createElement(q.a,{source:"kpi"}),r.a.createElement(q.a,{source:"probationary_vote"}),r.a.createElement(q.a,{source:"promotion_vote"}),r.a.createElement(q.a,{source:"personal_development"}),r.a.createElement(q.a,{source:"bonus"}),r.a.createElement(q.a,{source:"discipline"}),r.a.createElement(q.a,{source:"employees_vote"}),r.a.createElement(L.a,{source:"created_at"}),r.a.createElement(A.a,{label:"Edit",basePath:"/votes"}),r.a.createElement(F.a,{label:"Delete",basePath:"/votes"}),r.a.createElement(G.a,{source:"Show",basePath:"/votes"})))},Ne=function(e){return r.a.createElement(ae.a,e,r.a.createElement(te.a,null,r.a.createElement(J.a,{disabled:!0,source:"id"}),r.a.createElement(J.a,{source:"fullname"}),r.a.createElement(J.a,{source:"kpi"}),r.a.createElement(J.a,{source:"probationary_vote"}),r.a.createElement(J.a,{source:"promotion_vote"}),r.a.createElement(J.a,{source:"personal_development"}),r.a.createElement(J.a,{source:"bonus"}),r.a.createElement(J.a,{source:"discipline"}),r.a.createElement(J.a,{source:"employees_vote"}),r.a.createElement(ne.a,{source:"created_at"})))},ke=function(e){return r.a.createElement(le.a,e,r.a.createElement(te.a,null,r.a.createElement(J.a,{source:"fullname"}),r.a.createElement(J.a,{source:"kpi"}),r.a.createElement(J.a,{source:"probationary_vote"}),r.a.createElement(J.a,{source:"promotion_vote"}),r.a.createElement(J.a,{source:"personal_development"}),r.a.createElement(J.a,{source:"bonus"}),r.a.createElement(J.a,{source:"discipline"}),r.a.createElement(J.a,{source:"employees_vote"}),r.a.createElement(ne.a,{source:"created_at"})))},Te=function(e){return r.a.createElement(B.a,e,r.a.createElement(J.a,{label:"Search",source:"q",alwaysOn:!0}),r.a.createElement(C.a,{label:"Name",source:"fullname",reference:"timekeeping",allowEmpty:!0},r.a.createElement(R.a,{optionText:"fullname"})))},Se=function(e){return r.a.createElement(I.a,Object.assign({},e,{filters:r.a.createElement(Te,null)}),r.a.createElement(D.a,null,r.a.createElement(q.a,{source:"_id",label:"id"}),r.a.createElement(q.a,{source:"fullname"}),r.a.createElement(q.a,{source:"position"}),r.a.createElement(ge.a,{source:"workdays"}),r.a.createElement(q.a,{source:"unpaid_leave"}),r.a.createElement(ge.a,{source:"holidays"}),r.a.createElement(ge.a,{source:"checkin"}),r.a.createElement(ge.a,{source:"overtime"}),r.a.createElement(q.a,{source:"notes"}),r.a.createElement(L.a,{source:"created_at"}),r.a.createElement(A.a,{label:"Edit",basePath:"/timekeeping"}),r.a.createElement(F.a,{label:"Delete",basePath:"/timekeeping"}),r.a.createElement(G.a,{source:"Show"})))},Pe=function(e){return r.a.createElement(ae.a,e,r.a.createElement(te.a,null,r.a.createElement(J.a,{disabled:!0,source:"_id",label:"id"}),r.a.createElement(J.a,{source:"fullname"}),r.a.createElement(J.a,{source:"position"}),r.a.createElement(ve.a,{source:"workdays"}),r.a.createElement(J.a,{source:"unpaid_leave"}),r.a.createElement(ve.a,{source:"holidays"}),r.a.createElement(ve.a,{source:"checkin"}),r.a.createElement(ve.a,{source:"overtime"}),r.a.createElement(J.a,{source:"notes"}),r.a.createElement(ne.a,{source:"created_at"})))},He=function(e){return r.a.createElement(le.a,e,r.a.createElement(te.a,null,r.a.createElement(J.a,{source:"fullname"}),r.a.createElement(J.a,{source:"position"}),r.a.createElement(ve.a,{source:"workdays"}),r.a.createElement(J.a,{source:"unpaid_leave"}),r.a.createElement(ve.a,{source:"holidays"}),r.a.createElement(ve.a,{source:"checkin"}),r.a.createElement(ve.a,{source:"overtime"}),r.a.createElement(J.a,{source:"notes"}),r.a.createElement(ne.a,{source:"created_at"})))},xe=t(390),Be=t.n(xe),Je=t(391),Ce=t.n(Je),Re=t(392),Ie=t.n(Re),De=t(393),qe=t.n(De),Le=t(394),Me=t.n(Le),Ae=t(395),Fe=t.n(Ae),Ge=function(){return r.a.createElement(o.a,{backgroundImage:"https://www.smediavn.com/public/ckeditor/imagesimages/Tintuc/Tin%20cong%20nghe/Thang%2011%202016/Smart-city-minh-hoa-2.jpg"})};var Xe=function(){return r.a.createElement(s.a,{dataProvider:h,dashboard:v,chat:P,authProvider:x,loginPage:Ge},(function(e){return["admin"===e||"employee"===e?r.a.createElement(i.a,{name:"employees",list:ee,edit:"admin"===e?ce:null,create:oe,icon:Be.a}):null,"admin"===e?r.a.createElement(i.a,{name:"users",list:de,edit:"admin"===e?pe:null,create:"admin"===e?he:null,icon:Ce.a}):null,"manager"===e||"admin"===e?r.a.createElement(i.a,{name:"salaries",list:ye,edit:Oe,create:je,icon:Ie.a}):null,r.a.createElement(i.a,{name:"votes",list:_e,edit:Ne,create:ke,icon:qe.a}),"manager"===e||"admin"===e?r.a.createElement(i.a,{name:"timekeeping",list:Se,edit:Pe,create:He,icon:Me.a}):null,r.a.createElement(i.a,{name:"chat",list:P,icon:Fe.a})]}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,a,t){"use strict";(function(e){a.a=function(){var a,t=null,n=null,r="ra-logout",c="/refresh-token",l=function(){var a=new Request(c,{method:"GET",headers:new Headers({"Content-Type":"application/json"}),credentials:"include"});return n=fetch(a).then((function(a){return 200!==a.status?(s(),e.console.log("Token renewal failure"),{token:null}):a.json()})).then((function(e){var a=e.token,t=e.tokenExpiry;return a?(o(a,t),!0):(s(),!1)}))},o=function(e,n){return t=e,function(e){a=window.setTimeout(l,1e3*e-5e3)}(n),!0},s=function(){return t=null,a&&window.clearTimeout(a),window.localStorage.setItem(r,Date.now()),!0};return window.addEventListener("storage",(function(e){e.key===r&&(t=null)})),{ereaseToken:s,getRefreshedToken:l,getToken:function(){return t},setLogoutEventName:function(e){return r=e},setRefreshTokenEndpoint:function(e){return c=e},setToken:o,waitForTokenRefresh:function(){return n?n.then((function(){return n=null,!0})):Promise.resolve()}}}()}).call(this,t(73))}},[[651,1,2]]]);
//# sourceMappingURL=main.884dad48.chunk.js.map