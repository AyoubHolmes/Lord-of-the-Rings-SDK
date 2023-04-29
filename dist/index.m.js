import e from"axios";var t=new(/*#__PURE__*/function(){function t(e){this.baseUrl=void 0,this.baseUrl=e}var r=t.prototype;return r.onSuccess=function(e){return e.data},r.onError=function(e){throw null==e?void 0:e.message},r.request=function(t){var r=t.method,s=t.endPoint,o=t.data,n=t.params,i=t.responseType;try{var u=this,c=/^https?:\/\//.test(s)?s:""+u.baseUrl+s;return Promise.resolve(e({method:r,url:c,responseType:i,data:o,params:n,withCredentials:!0}).then(u.onSuccess).catch(u.onError))}catch(e){return Promise.reject(e)}},r.get=function(e,t,r){try{return Promise.resolve(this.request({method:"get",endPoint:e,params:t,responseType:r}))}catch(e){return Promise.reject(e)}},r.post=function(e,t,r,s){void 0===r&&(r=void 0);try{return Promise.resolve(this.request({method:"post",endPoint:e,data:t,params:r,responseType:s}))}catch(e){return Promise.reject(e)}},t}())("https://jsonplaceholder.typicode.com"),r=/*#__PURE__*/function(){function e(){this.resourceName="posts"}var r=e.prototype;return r.getPostById=function(e){return t.get("/"+this.resourceName+"/"+e)},r.getPosts=function(){return t.get("/"+this.resourceName)},r.createPost=function(e){return t.post("/"+this.resourceName,e)},e}(),s=/*#__PURE__*/function(){function e(){this.resourceName="users"}var r=e.prototype;return r.getPostById=function(e){return t.get("/"+this.resourceName+"/"+e)},r.getPosts=function(){return t.get("/"+this.resourceName)},r.createPost=function(e){return t.post("/"+this.resourceName,e)},e}(),o=function(){this.posts=void 0,this.users=void 0,this.posts=new r,this.users=new s};export{o as Library};