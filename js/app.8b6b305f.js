(function(e){function t(t){for(var o,s,i=t[0],c=t[1],l=t[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"82bd442e"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/parle/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"0389":function(e,t,n){},"0777":function(e,t,n){"use strict";var o=n("0389"),r=n.n(o);r.a},1:function(e,t){},"14aa":function(e,t,n){},2:function(e,t){},2515:function(e,t,n){"use strict";var o=n("8238"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Solid Chat")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},a=[],s=(n("034f"),n("2877")),i={},c=Object(s["a"])(i,r,a,!1,null,null,null),l=c.exports,u=n("9483");Object(u["a"])("".concat("/parle/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var d=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("SolidChat",{attrs:{root:"https://parle.solid.community/public/"}})],1)},g=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("SolidLogin"),n("SolidChatRooms",{attrs:{root:this.base,index:this.index}}),n("SolidChatList",{attrs:{messages:e.messages}}),n("b-button",{on:{click:e.before}},[e._v("day before")]),n("b-button",{on:{click:e.after}},[e._v("day after")]),e._v(" or infinite scroll, loading yesterday... "),n("br"),n("a",{attrs:{href:e.root,target:"_blank"}},[e._v("where is the data")]),n("br"),n("a",{attrs:{href:"https://github.com/scenaristeur/parle",target:"_blank"}},[e._v("source")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("SolidChatSend",{attrs:{index:e.index}})],1)},b=[],m=(n("4de4"),n("4160"),n("c975"),n("a15b"),n("fb6a"),n("ac1f"),n("1276"),n("159b"),n("96cf"),n("1da1")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"solid-chat-send"},[n("b-input-group",{staticClass:"mt-3 input"},[n("b-form-input",{on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.send(t)}},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"warning"},on:{click:e.send}},[e._v("Send")])],1)],1)],1)},v=[],w=n("2f62"),k=function(){return{all:[],webId:null,logged:!1,storage:"",chatPath:"",messages:["one","two"]}},y={},S={send:function(e,t){console.log("in action",t,e.state.chatPath);var n=new Date,o=n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2);console.log(o,e.state.webId);var r=e.state.chatPath+o+".ttl";console.log(r,e.state.webId),e.commit("send",t)}},x={setWebId:function(e,t){e.webId=t},setLogged:function(e,t){e.logged=t},setChatPath:function(e,t){e.chatPath=t},send:function(e,t){e.messages.push(t),console.log(e.messages),console.log("LDFLEX",solid)},setStorage:function(e,t){e.storage=t}},_={namespaced:!0,state:k,getters:y,actions:S,mutations:x};o["default"].use(w["a"]);var C=new w["a"].Store({state:{keyword:"",count:0},mutations:{setKeyword:function(e,t){console.log(e.keyword,t),e.keyword=t},add:function(e,t){console.log(e.count),e.count=e.count+t,console.log(t)}},actions:{},modules:{solid:_}}),O=n("4d8d"),j=n("6dc1"),E={store:C,name:"SolidChatSend",components:{},props:["index"],data:function(){return{message:""}},methods:{send:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,o,r,a,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$store.state.solid.webId,!(e.message.length>0&&null!=n)){t.next=21;break}return console.log(e.message),o=new Date,r="Msg"+o.getTime(),a=o.toISOString(),e.index+r,console.log("WEBID",e.$store.state.solid.webId,e.$store.state.count),t.next=10,Object(O["a"])(e.index);case 10:return s=t.sent,console.log(s),i=s.addSubject({identifier:r}),i.addLiteral(j["c"].content,e.message),i.addLiteral(j["a"].created,a),i.addNodeRef(j["b"].maker,n),t.next=18,s.save();case 18:e.message="",t.next=22;break;case 21:alert("You must login before posting ;-)");case 22:case"end":return t.stop()}}),t)})))()}}},L=E,R=(n("e576"),Object(s["a"])(L,h,v,!1,null,"0818066a",null)),I=R.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"solid-chat-send"},[n("div",e._l(e.folder.folders,(function(t){return n("b-button-group",{key:t.url,staticClass:"inline"},[n("b-button",{attrs:{variant:"primary",value:t.url},on:{click:e.changeRoom}},[e._v(" "+e._s(t.name)+" ")])],1)})),1),n("b-input-group",{staticClass:"mt-3"},[n("b-form-input",{model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"primary"},on:{click:e.send}},[e._v("Create room")])],1)],1)],1)},F=[],P=n("00e8"),T=n.n(P),D={name:"SolidChatRooms",components:{},props:["root","index"],data:function(){return{message:"",folder:{}}},created:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.fc=new SolidFileClient(T.a),console.log(e.fc),e.readFolder();case 3:case"end":return t.stop()}}),t)})))()},methods:{changeRoom:function(e){var t=e.target.value;console.log(t)},readFolder:function(){var e=this;this.fc.readFolder(this.root).then((function(t){console.log("READ Folder",t),e.folder=t}),(function(t){console.log("erreur for url : ",e.root,t)}))},send:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.$store.state.solid.webId,null!=n?(console.log(e.message),e.fc.createFolder(e.root+e.message).then((function(t){console.log("Folder",t),console.log("folder created",t),e.readFolder()}),(function(t){console.log("erreur for url : ",e.root,t)}))):alert("You must login to create a room ! ");case 2:case"end":return t.stop()}}),t)})))()}}},A=D,M=(n("2515"),Object(s["a"])(A,$,F,!1,null,"b1a96284",null)),N=M.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("div",{staticClass:"solid-login"},[0==e.logged?n("b-button",{attrs:{variant:"success"},on:{click:e.login}},[e._v("Login")]):n("b-button",{attrs:{variant:"danger"},on:{click:e.logout}},[e._v("Logout")])],1)])},B=[],W=n("1947");n("f9e3"),n("2dd8");console.log("FETCHDOCUMENT",O["a"]);var q={store:C,name:"SolidLogin",props:{attribut:String,msg:String,doc:[Boolean,String]},components:{BButton:W["a"]},data:function(){return{logged:!1,webId:null,storage:"boo"}},created:function(){var e=this;T.a.trackSession(function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n?(e.logged=!0,e.webId=n.webId,console.log("The user is ".concat(n.webId)),e.$store.commit("solid/setWebId",e.webId),e.$store.commit("solid/setLogged",!0)):(e.logged=!1,e.webId=null,console.log("The user is not logged in",e.logged,e.webId),e.$store.commit("solid/setWebId",e.webId),e.$store.commit("solid/setLogged",!1));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},computed:{count:function(){return console.log(this.$store.state.count),this.$store.state.count}},methods:{add:function(){console.log("add",8),this.$store.commit("add",8)},login:function(){this.popupLogin()},logout:function(){T.a.logout()},popupLogin:function(){return Object(m["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.a.currentSession();case 2:if(t=e.sent,n="https://solid.community/common/popup.html",t){e.next=8;break}return e.next=7,T.a.popupLogin({popupUri:n});case 7:t=e.sent;case 8:case"end":return e.stop()}}),e)})))()}}},Y=q,H=Object(s["a"])(Y,U,B,!1,null,null,null),K=H.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},e._l(e.messages,(function(t){return n("b-list-group",{key:t.id},[n("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center",attrs:{button:""}},[n("b-input-group",{staticClass:"mb-2"},[n("b-input-group-prepend",{attrs:{"is-text":""}},[null!=t.maker?n("a",{attrs:{href:t.maker,target:"_blank"}},[n("b-icon",{attrs:{icon:"person-fill"}})],1):n("b-icon",{attrs:{icon:"person-fill"}})],1),n("div",{staticClass:"ml-3 mr-3"},[e._v(" "+e._s(t.content)+" ")])],1),n("b-badge",{attrs:{variant:"info"}},[e._v(" "+e._s(t.created)+" "),n("div",[e._v(" newRoom"),n("br"),e._v(" reply "),n("br")])])],1)],1)})),1)},X=[],z={name:"SolidChatList",props:{messages:Array}},G=z,Q=(n("f9e4"),Object(s["a"])(G,J,X,!1,null,"691ddb62",null)),V=Q.exports,Z={name:"SolidChat",components:{SolidChatSend:I,SolidChatRooms:N,SolidLogin:K,SolidChatList:V},props:{root:String},data:function(){return{history:[],messages:[]}},mounted:function(){},created:function(){console.log("CREATE ",this.root),console.log("Chat Root",this.root),this.base=this.root+"parle/";var e=this.root.split("//")[1];console.log(e);var t=e.split("/")[0]+"/";console.log("Sock",t);var n=new Date,o=[n.getFullYear(),("0"+(n.getMonth()+1)).slice(-2),("0"+n.getDate()).slice(-2)].join("-")+".ttl";this.index=this.root+"parle/"+o,console.log("Index",this.index);var r=new WebSocket("wss://"+t,["solid.0.1.0"]);console.log("SOCKET",r),r.onopen=function(){console.log("SOCKET OPEN",r,+this.index),r.send("sub "+this.index)}.bind(this),r.onmessage=function(e){e.data&&"pub"===e.data.slice(0,3)&&(console.log("updated",e.data),this.resourceUpdated(e.data.substring(4)))}.bind(this),this.resourceUpdated(this.index)},methods:{before:function(){console.log("before")},after:function(){console.log("after")},resourceUpdated:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){var o,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(e),n.next=3,Object(O["a"])(e);case 3:o=n.sent,r=o.findSubjects(),r=r.filter(t.onlyUnique),a=[],r.forEach((function(e,t){var n=e.getString(j["a"].created),o=e.getLiteral(j["c"].content),r=e.getNodeRef(j["b"].maker),s={id:t,created:new Date(n).toLocaleTimeString(),content:o,maker:r};a.push(s)})),t.messages=a.reverse();case 9:case"end":return n.stop()}}),n)})))()},onlyUnique:function(e,t,n){return n.indexOf(e)===t}}},ee=Z,te=(n("0777"),Object(s["a"])(ee,p,b,!1,null,"cdb63f3c",null)),ne=te.exports,oe={name:"Home",components:{SolidChat:ne}},re=oe,ae=Object(s["a"])(re,f,g,!1,null,null,null),se=ae.exports;o["default"].use(d["a"]);var ie=[{path:"/",name:"Home",component:se},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],ce=new d["a"]({routes:ie}),le=ce,ue=n("5f5b"),de=n("b1e0");o["default"].config.productionTip=!1,o["default"].use(ue["a"]),o["default"].use(de["a"]);var fe=window.solid;console.log("SOLID",fe);var ge=window.SolidFileClient;console.log("SFC",ge),new o["default"]({router:le,store:C,solid:fe,render:function(e){return e(l)}}).$mount("#app")},8238:function(e,t,n){},"85ec":function(e,t,n){},e576:function(e,t,n){"use strict";var o=n("14aa"),r=n.n(o);r.a},ebe7:function(e,t,n){},f9e4:function(e,t,n){"use strict";var o=n("ebe7"),r=n.n(o);r.a}});
//# sourceMappingURL=app.8b6b305f.js.map