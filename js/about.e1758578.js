(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0afa":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"by-subject"},[r("SubjectList")],1)},n=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"subject-list"},[r("h3",[t._v(t._s(t.root))]),r("ul",t._l(t.folders,(function(e){return r("li",{key:e.url},[r("router-link",{attrs:{to:"?subject="+e.url}},[t._v(t._s(decodeURI(e.name).replace("%2B","+")))])],1)})),0)])},o=[],i=(r("96cf"),r("1da1")),l=r("4360"),c=r("00e8"),u=r.n(c),d={store:l["a"],name:"SubjectList",data:function(){return{root:null,folder:null,folders:[]}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.fc=new SolidFileClient(u.a),t.root=t.$store.state.chat.root,e.next=4,t.fc.readFolder("https://parle.solid.community/public/parle");case 4:t.folder=e.sent,console.log("f",t.folder),t.folders=t.folder.folders;case 7:case"end":return e.stop()}}),e)})))()},mounted:function(){},computed:{},watch:{}},f=d,h=(r("bc55"),r("2877")),p=Object(h["a"])(f,s,o,!1,null,"46df2321",null),_=p.exports,b={name:"BySubject",components:{SubjectList:_}},v=b,m=(r("3e0d"),Object(h["a"])(v,a,n,!1,null,"67c63fca",null));e["default"]=m.exports},"0d76":function(t,e,r){},"3e0d":function(t,e,r){"use strict";var a=r("0d76"),n=r.n(a);n.a},"6fdb":function(t,e,r){},bc55:function(t,e,r){"use strict";var a=r("6fdb"),n=r.n(a);n.a},f820:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about m-3"},[r("span",[t._v(" v0.0.0-a")]),t._v(" Faq : "),t._m(0),r("router-link",{attrs:{to:"/"}},[t._v("Back")])],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v(" Parle is a holonic conversation tool. when you reply to a subject, a new discuss flow is created inside the parent... Allowing nested concersation... This way the main flow is not poluted by reflexions or debate, and you can always come-back to the source of a discuss... ")]),r("li",[t._v(" How to use ? Just type text & send to continue the flow, or in case of new idea, start a new thread linked to a post ! ")]),r("li",[t._v(" Where is the "),r("a",{attrs:{href:"https://github.com/scenaristeur/parle/wiki",target:"_blank"}},[t._v("Wiki")]),t._v(" ? ")]),r("li",[t._v(" Where is the "),r("a",{attrs:{href:"https://parle.solid.community/public/",target:"_blank"}},[t._v("Data")]),t._v(" ? ")]),r("li",[t._v(" How can i visualize the data with "),r("a",{attrs:{href:"https://scenaristeur.github.io/spoggy-simple/?source=https://parle.solid.community/public/parle/2020-08-06.ttl",target:"_blank"}},[t._v(" Spoggy")])]),r("li",[t._v(" How can i "),r("a",{attrs:{href:"https://github.com/scenaristeur/parle/projects/1",target:"_blank"}},[t._v("Contribute")]),t._v(" ? ")]),r("li",[t._v(" Where is the "),r("a",{attrs:{href:"https://github.com/scenaristeur/parle/",target:"_blank"}},[t._v("SourceCode")]),t._v(" ? ")]),r("li",[r("a",{attrs:{href:"https://forum.solidproject.org/t/parle-the-solid-nested-chat/3359",target:"_blank"}},[t._v("Forum")])])])}],s=r("2877"),o={},i=Object(s["a"])(o,a,n,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=about.e1758578.js.map