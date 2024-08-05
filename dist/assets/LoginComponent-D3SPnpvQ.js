const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-ChTYX-td.js","assets/iconBase-DmbPIzgD.js","assets/index-CUVDC7vY.js","assets/index-D7jXTuoG.css","assets/index-DArHCydm.js"])))=>i.map(i=>d[i]);
import{r as a,j as e,L as d,R as n,_ as i}from"./index-CUVDC7vY.js";import{u as v,C as m}from"./index.esm-DOyzePwA.js";import{D as _}from"./react-toggle-dark-mode.esm-adov3AiF.js";import{S as y}from"./Stack-Bl_P9k8j.js";import{T as u,I}from"./Typography-Bgmhm0Rj.js";import{T as c}from"./TextField-DO4hCUQa.js";import{I as E}from"./InputAdornment-EDVRPTOy.js";import{B as x}from"./Button-DxTWcVOZ.js";import{D as A}from"./Divider-DMhBjmAF.js";import"./List-CNIBfPdE.js";const D="/MobileApp/assets/loginLogo-D1fnjGRZ.jpg",N=n.lazy(()=>i(()=>import("./index-ChTYX-td.js"),__vite__mapDeps([0,1,2,3])).then(r=>({default:r.IoEyeOutline}))),S=n.lazy(()=>i(()=>import("./index-ChTYX-td.js"),__vite__mapDeps([0,1,2,3])).then(r=>({default:r.IoEyeOffOutline}))),p=n.lazy(()=>i(()=>import("./index-DArHCydm.js"),__vite__mapDeps([4,1,2,3])).then(r=>({default:r.FiArrowRight})));function F({toggleTheme:r,setToggleTheme:h}){const{handleSubmit:g,control:l,formState:{errors:t}}=v(),[o,f]=a.useState(!1),j=s=>{console.log(s)},b=s=>{h(s)};return e.jsx(a.Fragment,{children:e.jsxs("div",{className:"relative h-dvh",children:[e.jsx(_,{checked:r,onChange:b,size:35,sunColor:"#00D2A4",className:"absolute top-4 right-4"}),e.jsx("div",{className:"container flex justify-center items-center h-full",children:e.jsxs("div",{className:"border-2 rounded-md border-blue-500 p-4 w-auto max-portrait-tab:w-4/6 md:w-4/6 xl:w-3/6 2xl:w-3/6 grid grid-cols-1 lg:grid-cols-2 max-portrait-tab:grid-cols-1",children:[e.jsx("img",{src:D,alt:"",className:" p-4 !rounded-3xl",style:{filter:"grayscale(0%) brightness(90%)"}}),e.jsxs(y,{component:"form",onSubmit:g(j),autoComplete:"off",noValidate:!0,children:[e.jsx(u,{variant:"h4",className:"text-green-700 !font-semibold",children:"Login"}),e.jsx(m,{name:"email",control:l,defaultValue:"",rules:{required:"Email is required",pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"Invalid email address"}},render:({field:s})=>e.jsx(c,{...s,required:!0,label:"Email",variant:"outlined",fullWidth:!0,margin:"normal",error:!!t.email,helperText:t.email?t.email.message:null})}),e.jsx(m,{name:"password",control:l,defaultValue:"",rules:{required:"Password is required"},render:({field:s})=>e.jsx(c,{...s,required:!0,label:"Password",type:o?"text":"password",variant:"outlined",fullWidth:!0,margin:"normal",error:!!t.password,helperText:t.password?t.password.message:null,InputProps:{endAdornment:e.jsx(E,{position:"end",children:e.jsx(a.Suspense,{children:e.jsx(I,{"aria-label":"toggle password visibility",onClick:()=>f(!o),onMouseDown:w=>w.preventDefault(),children:o?e.jsx(N,{className:"text-green-300"}):e.jsx(S,{className:"text-green-300"})})})})}})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(d,{to:"/dashboard",children:e.jsx(x,{type:"submit",size:"small",variant:"outlined",className:"!rounded-md !border-none !bg-green-900 !text-white hover:!bg-orange-950",endIcon:e.jsx(a.Suspense,{children:e.jsx(p,{})}),children:"Login"})})}),e.jsx(A,{sx:{marginTop:"10px"}}),e.jsxs(u,{variant:"body2",align:"center",className:`${r?"text-white":"text-black"}`,children:["Don't have an account? ",e.jsxs(d,{to:"/register",children:[e.jsx(x,{endIcon:e.jsxs(a.Suspense,{children:[" ",e.jsx(p,{})," "]}),className:"!text-sm",children:"Register here "})," "]})]})]})]})})]})})}export{p as FiArrowRight,S as IoEyeOffOutline,N as IoEyeOutline,F as default};