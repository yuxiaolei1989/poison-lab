let s=document.createElement("style");s.innerHTML="",document.head.appendChild(s);import{d as e,o as c,a as t}from"./index.3ca2b568.js";class i{constructor(s,e){this.subscriber="",this.subscriber=s,this.callback=e}callback(){}}const n=new i("running",(()=>{console.log("订阅者 pingan8787 订阅事件成功！执行回调~")})),r=new i("swimming",(()=>{console.log("订阅者 leo 订阅事件成功！执行回调~")})),l=new i("swimming",(()=>{console.log("订阅者 lisa 订阅事件成功！执行回调~")})),a=new class{constructor(s,e){this.subscriber="",this.subscriber=s,this.data=e}}("swimming",{message:"pual 发布消息~"}),o=new class{constructor(){this.subjects={}}on(s,e){this.subjects[s]||(this.subjects[s]=[]),this.subjects[s].push(e)}off(s,e){if(null===e)this.subjects[s]=[];else{const c=this.subjects[s].indexOf(e);~c&&this.subjects[s].splice(c,1)}}emit(s,e=null){this.subjects[s].forEach((s=>s(e)))}};o.on(n.subscriber,n.callback),o.on(r.subscriber,r.callback),o.on(l.subscriber,l.callback),o.emit(a.subscriber,a.data),o.off(l.subscriber,l.callback),o.emit(a.subscriber,a.data);var b=e({mounted(){console.log(2222)}});b.render=function(s,e,i,n,r,l){return c(),t("div")};export default b;
