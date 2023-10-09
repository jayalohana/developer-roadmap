import{j as n}from"./jsx-runtime.6940b965.js";import{r as c}from"./index.070054a4.js";import{r as j}from"./renderer.2494036d.js";import{r as E,u as b,a as C,b as S}from"./resource-progress.9335d95d.js";import{p as y}from"./page.c1a8a472.js";import{u as L}from"./use-toast.fb52de5d.js";import{c as N}from"./createLucideIcon.3c9fdece.js";import{S as I}from"./shapes.18fdadc5.js";const T=N("CircleSlash",[["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),D=c.forwardRef((i,t)=>{const{roadmap:e,onRendered:s}=i;return c.useEffect(()=>{(async()=>{const u=document.getElementById("resource-svg-wrap");if(!u)return;const p=await j(e);u?.replaceChildren(p),s?.()})()},[e]),n.jsx("div",{ref:t,id:"resource-svg-wrap"})});function P(i){const{roadmapId:t,canManage:e}=i,s=`https://draw.roadmap.sh/${t}`;return n.jsx("div",{className:"flex h-full items-center justify-center",children:n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsx(T,{className:"mx-auto h-20 w-20 text-gray-400"}),n.jsx("h3",{className:"mt-2",children:"This roadmap is currently empty."}),e&&n.jsxs("a",{href:s,className:"mt-4 rounded-md bg-gray-500 px-4 py-2 font-medium text-white hover:bg-gray-600 flex items-center",children:[n.jsx(I,{className:"inline-block mr-2 h-4 w-4"}),"Edit Roadmap"]})]})})}function k(i){const t=i?.closest("g")||{},e=t?.dataset?.nodeId,s=t?.dataset?.type;return!e||!s?null:{nodeId:e,nodeType:s,targetGroup:t}}const v=["topic","subtopic","button","link-item"];function J(i){const{roadmap:t}=i,e=c.useRef(null),s=t._id,u=L(),[p,w]=c.useState(!1);async function m(r,d){y.set("Updating progress"),b({resourceId:s,resourceType:"roadmap",topicId:r},d).then(()=>{C(r,d)}).catch(a=>{u.error("Something went wrong, please try again."),console.error(a)}).finally(()=>{y.set(""),S()})}const h=c.useCallback(r=>{const d=r.target,{nodeId:a,nodeType:o,targetGroup:l}=k(d)||{};if(!a||!o||!v.includes(o))return;if(o==="button"||o==="link-item"){const g=l?.dataset?.link||"";g.startsWith("http")?window.open(g,"_blank"):window.location.href=g;return}const f=l?.classList.contains("learning"),R=l?.classList.contains("skipped");if(r.shiftKey){r.preventDefault(),m(a,f?"pending":"learning");return}else if(r.altKey){r.preventDefault(),m(a,R?"pending":"skipped");return}window.dispatchEvent(new CustomEvent("roadmap.node.click",{detail:{topicId:a,resourceId:t?._id,resourceType:"roadmap",isCustomResource:!0}}))},[]),x=c.useCallback(r=>{r.preventDefault();const d=r.target,{nodeId:a,nodeType:o,targetGroup:l}=k(d)||{};if(!a||!o||!v.includes(o)||o==="button"||o==="link-item")return;const f=l?.classList.contains("done");m(a,f?"pending":"done")},[]);return c.useEffect(()=>{if(e?.current)return e?.current?.addEventListener("click",h),e?.current?.addEventListener("contextmenu",x),()=>{e?.current?.removeEventListener("click",h),e?.current?.removeEventListener("contextmenu",x)}},[]),n.jsx("div",{className:"flex grow bg-gray-50 pb-8 pt-4 sm:pt-12",children:n.jsxs("div",{className:"container !max-w-[1000px]",children:[n.jsx(D,{ref:e,roadmap:{nodes:t?.nodes,edges:t?.edges},onRendered:()=>{E("roadmap",s).then(()=>{t?.nodes?.length===0&&(w(!0),e?.current?.classList.add("hidden"))})}}),p&&n.jsx(P,{roadmapId:s,canManage:t.canManage})]})})}export{J as R,v as a,k as g};
