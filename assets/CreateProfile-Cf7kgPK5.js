const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-JBwgYxUM.js","assets/iconBase-BUPbvJr7.js","assets/index-Z56z2WNn.js","assets/index-DaepNKAQ.css"])))=>i.map(i=>d[i]);
import{q as A,s as _,t as j,p as u,r as p,v as M,n as R,j as e,c as T,A as N,T as m,Y as z,aa as P,R as g,B as l,av as a,aA as U,aB as k,I as v,_ as B,u as F,C as b,b as y}from"./index-Z56z2WNn.js";import{r as E,c as D,b as w,a as S,D as I}from"./Close-DzsBXZft.js";import{S as C}from"./Stack-CKTSZZtO.js";function V(t){return A("MuiCardActions",t)}_("MuiCardActions",["root","spacing"]);const O=["disableSpacing","className"],W=t=>{const{classes:s,disableSpacing:o}=t;return N({root:["root",!o&&"spacing"]},V,s)},L=j("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:o}=t;return[s.root,!o.disableSpacing&&s.spacing]}})(({ownerState:t})=>u({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),$=p.forwardRef(function(s,o){const n=M({props:s,name:"MuiCardActions"}),{disableSpacing:i=!1,className:c}=n,r=R(n,O),x=u({},n,{disableSpacing:i}),h=W(x);return e.jsx(L,u({className:T(h.root,c),ownerState:x,ref:o},r))});function H(t){return A("MuiDialogContentText",t)}_("MuiDialogContentText",["root"]);const Y=["children","className"],G=t=>{const{classes:s}=t,n=N({root:["root"]},H,s);return u({},s,n)},J=j(m,{shouldForwardProp:t=>z(t)||t==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,s)=>s.root})({}),K=p.forwardRef(function(s,o){const n=M({props:s,name:"MuiDialogContentText"}),{className:i}=n,c=R(n,Y),r=G(c);return e.jsx(J,u({component:"p",variant:"body1",color:"text.secondary",ref:o,ownerState:c,className:T(r.root,i)},n,{classes:r}))});var f={},Q=P;Object.defineProperty(f,"__esModule",{value:!0});var q=f.default=void 0,X=Q(E()),Z=e;q=f.default=(0,X.default)((0,Z.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"}),"CloudUpload");const ee=p.lazy(()=>B(()=>import("./index-JBwgYxUM.js"),__vite__mapDeps([0,1,2,3])).then(t=>({default:t.MdDelete}))),te=j("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1}),se=j(I)(({theme:t})=>({"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}));function le(){const t=[{id:"1",content:"Application 1"},{id:"2",content:"Application 2"},{id:"3",content:"Application 3"},{id:"4",content:"Application 4"},{id:"5",content:"Application 5"},{id:"6",content:"Application 6"}],[s,o]=g.useState(!1),n=()=>{o(!0)},i=()=>{o(!1)},[c,r]=p.useState(!1),x=()=>{console.log("hiii"),r(!0)},h=()=>{r(!1)};return e.jsxs("div",{className:"overflow-x-hidden w-full",children:[e.jsx(C,{direction:"row",justifyContent:"end",mb:3,children:e.jsx(g.Fragment,{children:e.jsx(l,{variant:"outlined",className:"!bg-orange-500 !text-white",onClick:n,children:"CreateApp"})})}),e.jsx(a,{container:!0,spacing:3,p:4,children:t.map(d=>e.jsx(a,{item:!0,xs:12,sm:3,md:4,children:e.jsxs(U,{sx:{maxWidth:300},children:[e.jsx(C,{direction:"row",justifyContent:"end",alignItems:"center",children:e.jsxs($,{children:[e.jsx(l,{onClick:n,children:"edit"}),e.jsx(g.Fragment,{children:e.jsx(p.Suspense,{children:e.jsx(l,{size:"small",onClick:x,children:e.jsx(ee,{size:25})})})})]})}),e.jsxs(k,{children:[e.jsx(m,{gutterBottom:!0,variant:"h5",component:"div",children:d.content}),e.jsx(m,{variant:"body2",color:"text.secondary"})]})]})},d.id))}),e.jsxs(se,{onClose:i,"aria-labelledby":"customized-dialog-title",open:s,children:[e.jsx(D,{sx:{m:0,p:2},id:"customized-dialog-title",children:"Modal title"}),e.jsx(v,{"aria-label":"close",onClick:i,sx:{position:"absolute",right:8,top:8,color:d=>d.palette.grey[500]},children:e.jsx(w,{})}),e.jsx(S,{dividers:!0,children:e.jsx(oe,{})})]}),e.jsxs(I,{open:c,onClose:h,children:[e.jsx(v,{"aria-label":"close",onClick:h,sx:{position:"absolute",right:8,top:8,color:d=>d.palette.grey[500]},children:e.jsx(w,{})}),e.jsx(D,{children:"Delete"}),e.jsx(S,{children:e.jsx(K,{children:e.jsx(ne,{})})})]})]})}const oe=()=>{const{handleSubmit:t,control:s,formState:{errors:o}}=F(),n=i=>{console.log(i)};return e.jsx("div",{children:e.jsx("form",{onSubmit:t(n),autoComplete:"off",noValidate:!0,children:e.jsxs(a,{container:!0,spacing:2,children:[e.jsx(a,{item:!0,xs:12,children:e.jsx(b,{name:"name",control:s,defaultValue:"",render:({field:i})=>e.jsx(y,{...i,label:"Name",variant:"outlined",required:!0,fullWidth:!0,error:!!o.name,helperText:o.nmae?"name is required":""}),rules:{required:!0}})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(b,{name:"description",control:s,defaultValue:"",render:({field:i})=>e.jsx(y,{...i,label:"Description",variant:"outlined",fullWidth:!0,multiline:!0,required:!0,rows:3,error:!!o.description,helperText:o.description?"description is required":""}),rules:{required:!0}})}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(l,{component:"label",role:void 0,variant:"contained",tabIndex:-1,startIcon:e.jsx(q,{}),children:["Upload file",e.jsx(te,{type:"file"})]})}),e.jsx(a,{item:!0,xs:12,display:"flex",justifyContent:"flex-end",children:e.jsx(l,{variant:"outlined",color:"primary",type:"submit",size:"large",className:"rounded-pill shadow-none",children:"Confirm"})})]})})})},ne=()=>e.jsxs("div",{className:"m-2 p-4",children:[e.jsx(m,{variant:"body1",mb:2,children:" Are sure you want to delete"}),e.jsxs(C,{direction:"row",alignItems:"center",justifyContent:"space-around",children:[e.jsx(l,{size:"small",variant:"outlined",className:"!text-white hover:!bg-red-600",children:"Yes"}),e.jsx(l,{size:"small",variant:"outlined",className:"!text-white hover:!bg-green-600",children:"No"})]})]});export{le as default};