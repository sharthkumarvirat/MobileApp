const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Ce9vqeoO.js","assets/iconBase-BtSmESxf.js","assets/index-CrSDe5g6.js","assets/index-D7jXTuoG.css"])))=>i.map(i=>d[i]);
import{i as p,J as U,w as j,r as g,e as N,j as e,q as S,t as $,k as I,s as G,m as F,l as Z,K as D,A as J,p as K,R as Q,_ as X}from"./index-CrSDe5g6.js";import{MdOutlineLock as Y}from"./index-t8CE7dy7.js";import{u as ee,C as R}from"./index.esm-DhCUdl5s.js";import{G as re}from"./iconBase-BtSmESxf.js";import{IoEyeOutline as W,IoEyeOffOutline as M}from"./index-FvIMyEh0.js";import{a as se,u as te,S as oe}from"./Stack-CgUrf3r_.js";import{G as d}from"./Grid-CFXEG_NG.js";import{S as ne}from"./Slider-Ji9vUM7A.js";import{T as f}from"./TextField-CQ5BZU8W.js";import{B as L}from"./Box-A77OmvVz.js";import{I as v}from"./InputAdornment-CeGPEjB_.js";import{T as _,u as ie,I as T}from"./Typography-B6m3jThF.js";import{B as ae}from"./Button-DmJ9gQ43.js";import"./List-CWn2W4KT.js";const le=["className","component","disableGutters","fixed","maxWidth","classes"],de=U(),ue=se("div",{name:"MuiContainer",slot:"Root",overridesResolver:(s,r)=>{const{ownerState:o}=s;return[r.root,r[`maxWidth${j(String(o.maxWidth))}`],o.fixed&&r.fixed,o.disableGutters&&r.disableGutters]}}),ce=s=>te({props:s,name:"MuiContainer",defaultTheme:de}),pe=(s,r)=>{const o=u=>I(r,u),{classes:i,fixed:a,disableGutters:l,maxWidth:t}=s,n={root:["root",t&&`maxWidth${j(String(t))}`,a&&"fixed",l&&"disableGutters"]};return $(n,o,i)};function me(s={}){const{createStyledComponent:r=ue,useThemeProps:o=ce,componentName:i="MuiContainer"}=s,a=r(({theme:t,ownerState:n})=>p({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:n})=>n.fixed&&Object.keys(t.breakpoints.values).reduce((u,m)=>{const x=m,c=t.breakpoints.values[x];return c!==0&&(u[t.breakpoints.up(x)]={maxWidth:`${c}${t.breakpoints.unit}`}),u},{}),({theme:t,ownerState:n})=>p({},n.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},n.maxWidth&&n.maxWidth!=="xs"&&{[t.breakpoints.up(n.maxWidth)]:{maxWidth:`${t.breakpoints.values[n.maxWidth]}${t.breakpoints.unit}`}}));return g.forwardRef(function(n,u){const m=o(n),{className:x,component:c="div",disableGutters:h=!1,fixed:w=!1,maxWidth:y="lg"}=m,P=N(m,le),C=p({},m,{component:c,disableGutters:h,fixed:w,maxWidth:y}),k=pe(C,i);return e.jsx(a,p({as:c,ownerState:C,className:S(k.root,x),ref:u},P))})}const xe=me({createStyledComponent:G("div",{name:"MuiContainer",slot:"Root",overridesResolver:(s,r)=>{const{ownerState:o}=s;return[r.root,r[`maxWidth${j(String(o.maxWidth))}`],o.fixed&&r.fixed,o.disableGutters&&r.disableGutters]}}),useThemeProps:s=>F({props:s,name:"MuiContainer"})});function fe(s){return I("MuiLink",s)}const he=Z("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),B={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},be=s=>B[s]||s,ge=({theme:s,ownerState:r})=>{const o=be(r.color),i=D(s,`palette.${o}`,!1)||r.color,a=D(s,`palette.${o}Channel`);return"vars"in s&&a?`rgba(${a} / 0.4)`:J(i,.4)},je=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],ye=s=>{const{classes:r,component:o,focusVisible:i,underline:a}=s,l={root:["root",`underline${j(a)}`,o==="button"&&"button",i&&"focusVisible"]};return $(l,fe,r)},Ce=G(_,{name:"MuiLink",slot:"Root",overridesResolver:(s,r)=>{const{ownerState:o}=s;return[r.root,r[`underline${j(o.underline)}`],o.component==="button"&&r.button]}})(({theme:s,ownerState:r})=>p({},r.underline==="none"&&{textDecoration:"none"},r.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},r.underline==="always"&&p({textDecoration:"underline"},r.color!=="inherit"&&{textDecorationColor:ge({theme:s,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),r.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${he.focusVisible}`]:{outline:"auto"}})),ve=g.forwardRef(function(r,o){const i=F({props:r,name:"MuiLink"}),{className:a,color:l="primary",component:t="a",onBlur:n,onFocus:u,TypographyClasses:m,underline:x="always",variant:c="inherit",sx:h}=i,w=N(i,je),{isFocusVisibleRef:y,onBlur:P,onFocus:C,ref:k}=ie(),[q,V]=g.useState(!1),z=K(o,k),E=b=>{P(b),y.current===!1&&V(!1),n&&n(b)},H=b=>{C(b),y.current===!0&&V(!0),u&&u(b)},A=p({},i,{color:l,component:t,focusVisible:q,underline:x,variant:c}),O=ye(A);return e.jsx(Ce,p({color:l,className:S(O.root,a),classes:m,component:t,onBlur:E,onFocus:H,ref:z,ownerState:A,variant:c,sx:[...Object.keys(B).includes(l)?[]:[{color:l}],...Array.isArray(h)?h:[h]]},w))});function we(s){return re({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M200,88l-72,72H96V128l72-72Z",opacity:"0.2"},child:[]},{tag:"path",attr:{d:"M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h80a8,8,0,0,1,0,16H48V208H208V128a8,8,0,0,1,16,0Z"},child:[]}]})(s)}const Pe=Q.lazy(()=>X(()=>import("./index-Ce9vqeoO.js"),__vite__mapDeps([0,1,2,3])).then(s=>({default:s.LuImagePlus})));function Fe(){const{handleSubmit:s,control:r,formState:{errors:o}}=ee(),[i,a]=g.useState(!1),l=t=>{console.log(t)};return e.jsx(xe,{className:"mt-3",children:e.jsxs(d,{container:!0,spacing:6,children:[e.jsx(d,{item:!0,xs:12,md:8,children:e.jsxs(oe,{spacing:3,children:[e.jsx("div",{className:"border border-black rounded py-5",children:e.jsx(ne,{})}),e.jsxs(d,{container:!0,children:[e.jsx(d,{item:!0,xs:12,md:4,children:e.jsx(g.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(Pe,{size:200})})}),e.jsxs(d,{item:!0,xs:12,md:8,children:[e.jsx(f,{required:!0,label:"Residence Name",variant:"outlined",fullWidth:!0,margin:"normal"}),e.jsx(f,{required:!0,label:"First Name",variant:"outlined",fullWidth:!0,margin:"normal"}),e.jsx(L,{position:"relative",width:"100%",children:e.jsx(f,{label:"Address",multiline:!0,required:!0,rows:4,variant:"outlined",margin:"normal",style:{width:"100%"},InputProps:{endAdornment:e.jsxs(v,{position:"end",style:{marginTop:-90,marginRight:-8},children:[e.jsx(we,{size:20}),e.jsx(ve,{href:"#",variant:"body1",underline:"none",style:{marginLeft:4},children:"Edit"})]})}})})]})]})]})}),e.jsx(d,{item:!0,xs:12,md:4,children:e.jsxs(L,{height:"auto",width:"2/3",sx:{border:"2px solid grey",borderRadius:2,padding:2},children:[e.jsxs("div",{className:"flex flex-col gap-2 items-center justify-center mb-4",children:[e.jsx(Y,{size:150}),e.jsx(_,{variant:"h6",className:"!text-blue-400",children:"CHANGE PASSWORD"})]}),e.jsx("form",{onSubmit:s(l),children:e.jsxs(d,{container:!0,spacing:2,children:[e.jsx(d,{item:!0,xs:12,children:e.jsx(R,{name:"currentPassword",control:r,defaultValue:"",render:({field:t})=>e.jsx(f,{...t,label:"Current Password",variant:"outlined",fullWidth:!0,type:i?"text":"password",error:!!o.currentPassword,helperText:o.currentPassword?"Current Password is required":"",InputProps:{endAdornment:e.jsx(v,{position:"end",children:e.jsx(T,{"aria-label":"toggle password visibility",onClick:()=>a(!i),onMouseDown:n=>n.preventDefault(),children:i?e.jsx(W,{}):e.jsx(M,{})})})}}),rules:{required:!0}})}),e.jsx(d,{item:!0,xs:12,children:e.jsx(R,{name:"newPassword",control:r,defaultValue:"",render:({field:t})=>e.jsx(f,{...t,label:"New Password",variant:"outlined",fullWidth:!0,type:i?"text":"password",error:!!o.newPassword,helperText:o.newPassword?"New Password is required":"",InputProps:{endAdornment:e.jsx(v,{position:"end",children:e.jsx(T,{"aria-label":"toggle password visibility",onClick:()=>a(!i),onMouseDown:n=>n.preventDefault(),children:i?e.jsx(W,{}):e.jsx(M,{})})})}}),rules:{required:!0}})}),e.jsx(d,{item:!0,xs:12,children:e.jsx(R,{name:"confirmPassword",control:r,defaultValue:"",render:({field:t})=>e.jsx(f,{...t,label:"Confirm Password",variant:"outlined",fullWidth:!0,type:i?"text":"password",error:!!o.confirmPassword,helperText:o.confirmPassword?"Confirm Password is required":"",InputProps:{endAdornment:e.jsx(v,{position:"end",children:e.jsx(T,{"aria-label":"toggle password visibility",onClick:()=>a(!i),onMouseDown:n=>n.preventDefault(),children:i?e.jsx(W,{}):e.jsx(M,{})})})}}),rules:{required:!0}})}),e.jsx(d,{item:!0,xs:12,display:"flex",justifyContent:"flex-end",children:e.jsx(ae,{variant:"outlined",color:"primary",type:"submit",size:"large",className:"rounded-pill shadow-none",children:"Confirm"})})]})})]})})]})})}export{Fe as default};
