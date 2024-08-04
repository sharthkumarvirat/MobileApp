import{r as n,j as e,L as b}from"./index-CrSDe5g6.js";import{u as g,C as s}from"./index.esm-DhCUdl5s.js";import{D as N}from"./react-toggle-dark-mode.esm-CD6_2_gU.js";import{IoEyeOutline as v,IoEyeOffOutline as w}from"./index-FvIMyEh0.js";import{FiArrowRight as q}from"./index-CuolpsYG.js";import{T as m,I as y}from"./Typography-B6m3jThF.js";import{T as l}from"./TextField-CQ5BZU8W.js";import{I}from"./InputAdornment-CeGPEjB_.js";import{B as u}from"./Button-DmJ9gQ43.js";import{B as d}from"./Box-A77OmvVz.js";import{D as S}from"./Divider-D98BN0hV.js";import"./iconBase-BtSmESxf.js";import"./List-CWn2W4KT.js";function R({toggleTheme:i,setToggleTheme:p}){const[o,x]=n.useState(!1),{control:t,handleSubmit:c,formState:{errors:r}}=g(),h=a=>{console.log(a)},f=a=>{p(a)};return e.jsx(n.Fragment,{children:e.jsxs("div",{className:"relative h-dvh",children:[e.jsx(N,{checked:i,onChange:f,size:35,sunColor:"#00D2A4",className:"absolute top-4 right-4"}),e.jsx("div",{className:"container flex justify-center items-center h-full",children:e.jsxs("div",{className:"border-2 rounded-md border-blue-500 p-5 w-auto max-portrait-tab:w-4/6 md:w-4/6 xl:w-3/6 2xl:w-2/6  max-portrait-tab:grid-cols-1",children:[e.jsx(m,{variant:"h4",align:"center",gutterBottom:!0,className:"!text-green-500",children:"Registration Form"}),e.jsxs("form",{onSubmit:c(h),autoComplete:"off",noValidate:!0,children:[e.jsx(s,{name:"firstName",control:t,defaultValue:"",rules:{required:"First Name is required"},required:!0,render:({field:a})=>e.jsx(l,{required:!0,...a,label:"First Name",variant:"outlined",fullWidth:!0,margin:"normal",error:!!r.firstName,helperText:r.firstName?r.firstName.message:null})}),e.jsx(s,{name:"lastName",control:t,defaultValue:"",rules:{required:"Last Name is required"},render:({field:a})=>e.jsx(l,{...a,required:!0,label:"Last Name",variant:"outlined",fullWidth:!0,margin:"normal",error:!!r.lastName,helperText:r.lastName?r.lastName.message:null})}),e.jsx(s,{name:"phoneNumber",control:t,defaultValue:"",rules:{required:"Phone number is required",pattern:{value:/^[0-9]{10}$/,message:"Invalid phone number format"}},render:({field:a})=>e.jsx(l,{...a,required:!0,label:"Phone Number",variant:"outlined",fullWidth:!0,margin:"normal",error:!!r.phoneNumber,helperText:r.phoneNumber?r.phoneNumber.message:null})}),e.jsx(s,{name:"email",control:t,defaultValue:"",rules:{required:"Email is required",pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"Invalid email address"}},render:({field:a})=>e.jsx(l,{...a,required:!0,label:"Email",variant:"outlined",fullWidth:!0,margin:"normal",error:!!r.email,helperText:r.email?r.email.message:null})}),e.jsx(s,{name:"password",control:t,defaultValue:"",rules:{required:"password is required"},render:({field:a})=>e.jsx(l,{...a,required:!0,label:"password",type:"password",variant:"outlined",fullWidth:!0,margin:"normal",error:!!r.password,helperText:r.password?r.password.message:null,InputProps:{endAdornment:e.jsx(I,{position:"end",children:e.jsx(y,{"aria-label":"toggle password visibility",onClick:()=>x(!o),onMouseDown:j=>j.preventDefault(),children:o?e.jsx(v,{className:"text-green-300"}):e.jsx(w,{className:"text-green-300"})})})}})}),e.jsx(u,{type:"submit",variant:"contained",color:"primary",children:"Submit"})]}),e.jsx(d,{mt:3,children:e.jsx(S,{variant:"middle",className:"!border-blue-600"})}),e.jsx(d,{mt:2,children:e.jsxs(m,{className:`${i?"text-white":"text-black"}`,children:["Already have an account? ",e.jsxs(b,{to:"/",children:[e.jsx(u,{endIcon:e.jsx(q,{}),className:"!text-sm",children:"Sign-in "})," "]})]})})]})})]})})}export{R as default};
