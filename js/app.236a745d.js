(function(e){function t(t){for(var a,s,o=t[0],d=t[1],l=t[2],u=0,m=[];u<o.length;u++)s=o[u],n[s]&&m.push(n[s][0]),n[s]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);c&&c(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,o=1;o<r.length;o++){var d=r[o];0!==n[d]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},i=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/gitlab-artifact-remover/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=d;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2ebb":function(e,t,r){"use strict";var a=r("8930"),n=r.n(a);n.a},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),n=r("43f9"),i=r.n(n),s=(r("51de"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("section",{staticClass:"page-header"},[r("h1",{staticClass:"project-name"},[e._v("Gitlab Artifact Remover")]),r("h2",{staticClass:"project-tagline"},[e._v("A hack to remove gitlab artifacts")]),r("RemoveForm")],1),e._m(0)])}),o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"main-content"},[r("p",[r("a",{attrs:{href:"https://docs.gitlab.com/ce/api/jobs.html#erase-a-job",target:"_blank"}},[e._v("Gitlab REST API")]),e._v(" allows an individual artifact to be deleted. However, it is tedious to delete many artifacts one by one. So I created this application to delete a range of gitlab artifacts.")]),r("hr"),r("p",[e._v("This page is inspired by "),r("a",{attrs:{href:"https://blog.fgribreau.com/2018/01/remove-gitlab-ci-artifacts-in-batch.html",target:"_blank"}},[e._v("this post from Francois-Guillaume Ribreau.")])]),r("p",[r("a",{attrs:{href:"https://github.com/Harmannz/gitlab-artifact-remover",target:"_blank"}},[r("strong",[e._v("The code can be found here.")])])]),r("footer",{staticClass:"site-footer"},[r("span",{staticClass:"site-footer-owner"},[r("a",{attrs:{href:"https://github.com/harmannz"}},[e._v("Harman Singh")]),e._v(".")]),r("span",{staticClass:"site-footer-credits"},[e._v("This page uses "),r("a",{attrs:{href:"https://github.com/jasonlong/cayman-theme"}},[e._v("Cayman")]),e._v(" theme.")])])])}],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"removeForm"},[[r("form",{staticClass:"md-layout md-alignment-center-center",class:{invalidFormValidation:e.error},attrs:{id:"FormValidation",novalidate:""},on:{submit:function(t){return t.preventDefault(),e.validateFields(t)}}},[r("md-card",{staticClass:"md-layout-item md-xlarge-size-33 md-size-66",attrs:{"md-with-hover":""}},[r("md-card-content",[r("div",{staticClass:"md-layout md-gutter"},[r("div",{staticClass:"md-layout-item md-small-size-100"},[r("md-field",{class:e.getValidationClass("projectId")},[r("label",{attrs:{for:"project-id"}},[e._v("Project Id")]),r("md-input",{attrs:{name:"project-id",type:"number",id:"project-id",disabled:e.deleting},model:{value:e.form.projectId,callback:function(t){e.$set(e.form,"projectId",e._n(t))},expression:"form.projectId"}}),e.$v.form.projectId.required?e._e():r("span",{staticClass:"md-error"},[e._v("\n                  The project id is required\n                ")])],1)],1),r("div",{staticClass:"md-layout-item md-small-size-100"},[r("md-field",{class:e.getValidationClass("startId")},[r("label",{attrs:{for:"start-id"}},[e._v("Start Id")]),r("md-input",{attrs:{name:"start-id",type:"number",id:"start-id",disabled:e.deleting},model:{value:e.form.startId,callback:function(t){e.$set(e.form,"startId",e._n(t))},expression:"form.startId"}}),e.$v.form.startId.required?e._e():r("span",{staticClass:"md-error"},[e._v("\n                  The start id is required\n                ")])],1)],1),r("div",{staticClass:"md-layout-item md-small-size-100"},[r("md-field",{class:e.getValidationClass("endId")},[r("label",{attrs:{for:"end-id"}},[e._v("End Id")]),r("md-input",{attrs:{name:"end-id",type:"number",id:"end-id",disabled:e.deleting},model:{value:e.form.endId,callback:function(t){e.$set(e.form,"endId",e._n(t))},expression:"form.endId"}}),e.$v.form.endId.required?e.$v.form.endId.endIdGreaterThanOrEqualStartId?e._e():r("span",{staticClass:"md-error"},[e._v("\n                  Must be greater or equal to start id\n                ")]):r("span",{staticClass:"md-error"},[e._v("\n                  The end id is required\n                ")])],1)],1)]),r("div",{staticClass:"md-layout md-gutter"},[r("div",{staticClass:"md-layout-item md-small-size-100"},[r("md-field",{class:e.getValidationClass("token")},[r("label",{attrs:{for:"token"}},[e._v("Token")]),r("md-input",{attrs:{id:"token",name:"token",disabled:e.deleting},model:{value:e.form.token,callback:function(t){e.$set(e.form,"token",t)},expression:"form.token"}}),e.$v.form.token.required?e._e():r("span",{staticClass:"md-error"},[e._v("\n                  The API Token is required\n                ")])],1)],1)]),r("md-field",{class:e.getValidationClass("baseUrl")},[r("label",{attrs:{for:"base-url"}},[e._v("Server Hostname")]),r("md-input",{attrs:{type:"base-url",name:"base-url",id:"base-url",disabled:e.deleting},model:{value:e.form.baseUrl,callback:function(t){e.$set(e.form,"baseUrl",t)},expression:"form.baseUrl"}}),e.$v.form.baseUrl.required?e._e():r("span",{staticClass:"md-error"},[e._v("\n              The host url is required\n            ")])],1)],1),e.performingAction?r("md-progress-bar",{class:{"md-accent":e.error,"md-primary":e.success},attrs:{"md-mode":e.deleting?"indeterminate":"determinate","md-value":100}}):e._e(),r("md-card-actions",[r("md-button",{staticClass:"md-raised md-primary",attrs:{type:"submit",disabled:e.deleting}},[e._v("\n            Delete Artifacts\n          ")])],1)],1),r("md-snackbar",{attrs:{"md-active":e.success,"md-position":"left","md-duration":1e4},on:{"update:mdActive":function(t){e.success=t}}},[e._v("\n        The artifacts "+e._s(e.form.startId)+" to "+e._s(e.form.endId)+" were deleted!!\n      ")]),r("md-snackbar",{attrs:{"md-active":e.error,"md-position":"left","md-duration":15e3},on:{"update:mdActive":function(t){e.error=t}}},[e._v("\n        There was a problem deleting artifacts. Please retry.\n      ")])],1)]],2)},l=[],c=r("1dce"),u=r("b5ae"),m=r("bc3a"),f=function(e,t){return t.startId<=e},p={components:{},name:"FormValidation",mixins:[c["validationMixin"]],data:function(){return{form:{baseUrl:null,projectId:null,token:null,startId:null,endId:null},deleting:!1,success:!1,error:!1}},computed:{performingAction:function(){return this.deleting||this.success||this.error}},validations:{form:{startId:{required:u["required"],numeric:u["numeric"]},endId:{required:u["required"],numeric:u["numeric"],endIdGreaterThanOrEqualStartId:f},projectId:{required:u["required"]},token:{required:u["required"]},baseUrl:{required:u["required"]}}},methods:{getValidationClass:function(e){var t=this.$v.form[e];return t?{"md-invalid":t.$invalid&&t.$dirty}:"md-invalid"},clearForm:function(){this.$v.$reset()},buildRequest:function(e){return m.post("https://".concat(this.form.baseUrl,"/api/v4/projects/").concat(this.form.projectId,"/jobs/").concat(e,"/erase"),{rejectUnauthorized:!1},{headers:{"PRIVATE-TOKEN":this.form.token}})},deleteArtifacts:function(){var e=this;this.deleting=!0,this.error=!1,this.success=!1;for(var t=[],r=this.form.startId;r<=this.form.endId;r+=1)t.push(this.buildRequest(r));m.all(t).then(m.spread(function(){e.success=!0,e.deleting=!1,e.clearForm()})).catch(function(){e.error=!0,e.deleting=!1,e.clearForm()})},validateFields:function(){this.$v.$touch(),this.$v.$invalid||this.deleteArtifacts()}}},v=p,b=(r("2ebb"),r("2877")),h=Object(b["a"])(v,d,l,!1,null,"752968ae",null);h.options.__file="RemoveForm.vue";var g=h.exports,_={name:"app",components:{RemoveForm:g}},y=_,I=(r("5c0b"),Object(b["a"])(y,s,o,!1,null,null,null));I.options.__file="App.vue";var j=I.exports,k=r("9483");Object(k["a"])("".concat("/gitlab-artifact-remover/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["default"].use(i.a),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var a=r("8fba"),n=r.n(a);n.a},8930:function(e,t,r){},"8fba":function(e,t,r){}});
//# sourceMappingURL=app.236a745d.js.map