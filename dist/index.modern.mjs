import s from"axios";const e=new class{constructor(s){this.baseUrl=void 0,this.baseUrl=s}onSuccess(s){return s.data}onError(s){throw null==s?void 0:s.message}async request({method:e,endPoint:t,data:r,params:o,responseType:a}){const n=/^https?:\/\//.test(t)?t:`${this.baseUrl}${t}`;return await s({method:e,url:n,responseType:a,data:r,params:o,withCredentials:!0}).then(this.onSuccess).catch(this.onError)}async get(s,e,t){return await this.request({method:"get",endPoint:s,params:e,responseType:t})}async post(s,e,t=void 0,r){return this.request({method:"post",endPoint:s,data:e,params:t,responseType:r})}}("https://jsonplaceholder.typicode.com");class t{constructor(){this.resourceName="posts"}getPostById(s){return e.get(`/${this.resourceName}/${s}`)}getPosts(){return e.get(`/${this.resourceName}`)}createPost(s){return e.post(`/${this.resourceName}`,s)}}class r{constructor(){this.resourceName="users"}getPostById(s){return e.get(`/${this.resourceName}/${s}`)}getPosts(){return e.get(`/${this.resourceName}`)}createPost(s){return e.post(`/${this.resourceName}`,s)}}class o{constructor(){this.posts=void 0,this.users=void 0,this.posts=new t,this.users=new r}}export{o as Library};