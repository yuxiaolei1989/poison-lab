let e=document.createElement("style");e.innerHTML=".item[data-v-68455bf4]{height:30px;border-bottom:1px solid #eee}",document.head.appendChild(e);import{d as t,l as s,s as a,u as o,o as l,a as d,f as i,t as n,F as m,g as r,x as f}from"./index.3ca2b568.js";import{u}from"./useMousePosition.9879ab40.js";var p=t({setup(){let e=s([]);a(e,(()=>{console.log("itemRefs: ",e,o(e))}));const{x:t,y:l}=u();return{setItemRef:t=>e.push(t),itemRefs:e,x:t,y:l}}});const c=f("data-v-68455bf4")(((e,t,s,a,o,f)=>(l(),d(m,null,[i("h2",null,n(e.x)+":"+n(e.y),1),(l(),d(m,null,r(5,(t=>i("div",{class:"item",ref:e.setItemRef,"data-time":new Date,key:t},n(t),9,["data-time"]))),64)),i("div",null,"当前 itemRefs 内有元素："+n(e.itemRefs.length)+" 个",1)],64))));p.render=c,p.__scopeId="data-v-68455bf4";export default p;