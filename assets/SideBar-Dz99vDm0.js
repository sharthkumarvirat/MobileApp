const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-rhujg7cJ.js","assets/iconBase-DmbPIzgD.js","assets/index-CUVDC7vY.js","assets/index-D7jXTuoG.css","assets/index-CLS03Wpe.js","assets/index-DArHCydm.js","assets/index-BIGdFCAq.js"])))=>i.map(i=>d[i]);
import{k as oe,l as se,s as A,w as _,i,r as a,m as Y,e as L,j as t,q as P,t as S,o as ue,p as fe,h as ke,Z as Ce,v as ie,B as xe,E as Te,A as Q,L as w,$ as Ie,_ as R}from"./index-CUVDC7vY.js";import{D as le}from"./react-toggle-dark-mode.esm-adov3AiF.js";import{MdOutlineProductionQuantityLimits as Ee,MdCreateNewFolder as Be}from"./index-DOR5HtAA.js";import{P as me,h as Pe,o as he,M as Re,L as te,u as _e,j as $e}from"./List-CNIBfPdE.js";import{S as j}from"./Stack-Bl_P9k8j.js";import{B as De,T as U,I as O}from"./Typography-Bgmhm0Rj.js";import{D as Le}from"./Divider-DMhBjmAF.js";import{B as Ae}from"./Box-EPfEBeEr.js";import{c as H,g as Ne,l as ce,d as ze,T as W,L as F,b as M}from"./Tooltip-WE5zpBiv.js";import"./iconBase-DmbPIzgD.js";function we(e){return oe("MuiAppBar",e)}se("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const Oe=["className","color","enableColorOnDark","position"],Fe=e=>{const{color:r,position:o,classes:s}=e,n={root:["root",`color${_(r)}`,`position${_(o)}`]};return S(n,we,s)},Z=(e,r)=>e?`${e==null?void 0:e.replace(")","")}, ${r})`:r,Me=A(me,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,r[`position${_(o.position)}`],r[`color${_(o.color)}`]]}})(({theme:e,ownerState:r})=>{const o=e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[900];return i({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},r.position==="fixed"&&{position:"fixed",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},r.position==="absolute"&&{position:"absolute",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},r.position==="sticky"&&{position:"sticky",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},r.position==="static"&&{position:"static"},r.position==="relative"&&{position:"relative"},!e.vars&&i({},r.color==="default"&&{backgroundColor:o,color:e.palette.getContrastText(o)},r.color&&r.color!=="default"&&r.color!=="inherit"&&r.color!=="transparent"&&{backgroundColor:e.palette[r.color].main,color:e.palette[r.color].contrastText},r.color==="inherit"&&{color:"inherit"},e.palette.mode==="dark"&&!r.enableColorOnDark&&{backgroundColor:null,color:null},r.color==="transparent"&&i({backgroundColor:"transparent",color:"inherit"},e.palette.mode==="dark"&&{backgroundImage:"none"})),e.vars&&i({},r.color==="default"&&{"--AppBar-background":r.enableColorOnDark?e.vars.palette.AppBar.defaultBg:Z(e.vars.palette.AppBar.darkBg,e.vars.palette.AppBar.defaultBg),"--AppBar-color":r.enableColorOnDark?e.vars.palette.text.primary:Z(e.vars.palette.AppBar.darkColor,e.vars.palette.text.primary)},r.color&&!r.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":r.enableColorOnDark?e.vars.palette[r.color].main:Z(e.vars.palette.AppBar.darkBg,e.vars.palette[r.color].main),"--AppBar-color":r.enableColorOnDark?e.vars.palette[r.color].contrastText:Z(e.vars.palette.AppBar.darkColor,e.vars.palette[r.color].contrastText)},!["inherit","transparent"].includes(r.color)&&{backgroundColor:"var(--AppBar-background)"},{color:r.color==="inherit"?"inherit":"var(--AppBar-color)"},r.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),Ve=a.forwardRef(function(r,o){const s=Y({props:r,name:"MuiAppBar"}),{className:n,color:p="primary",enableColorOnDark:d=!1,position:u="fixed"}=s,f=L(s,Oe),l=i({},s,{color:p,position:u,enableColorOnDark:d}),x=Fe(l);return t.jsx(Me,i({square:!0,component:"header",ownerState:l,elevation:4,className:P(x.root,n,u==="fixed"&&"mui-fixed"),ref:o},f))}),Ge=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Ue(e,r,o){const s=r.getBoundingClientRect(),n=o&&o.getBoundingClientRect(),p=he(r);let d;if(r.fakeTransform)d=r.fakeTransform;else{const l=p.getComputedStyle(r);d=l.getPropertyValue("-webkit-transform")||l.getPropertyValue("transform")}let u=0,f=0;if(d&&d!=="none"&&typeof d=="string"){const l=d.split("(")[1].split(")")[0].split(",");u=parseInt(l[4],10),f=parseInt(l[5],10)}return e==="left"?n?`translateX(${n.right+u-s.left}px)`:`translateX(${p.innerWidth+u-s.left}px)`:e==="right"?n?`translateX(-${s.right-n.left-u}px)`:`translateX(-${s.left+s.width-u}px)`:e==="up"?n?`translateY(${n.bottom+f-s.top}px)`:`translateY(${p.innerHeight+f-s.top}px)`:n?`translateY(-${s.top-n.top+s.height-f}px)`:`translateY(-${s.top+s.height-f}px)`}function He(e){return typeof e=="function"?e():e}function J(e,r,o){const s=He(o),n=Ue(e,r,s);n&&(r.style.webkitTransform=n,r.style.transform=n)}const We=a.forwardRef(function(r,o){const s=ue(),n={enter:s.transitions.easing.easeOut,exit:s.transitions.easing.sharp},p={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{addEndListener:d,appear:u=!0,children:f,container:l,direction:x="down",easing:I=n,in:y,onEnter:E,onEntered:m,onEntering:h,onExit:k,onExited:b,onExiting:N,style:C,timeout:T=p,TransitionComponent:K=ke}=r,z=L(r,Ge),v=a.useRef(null),ee=fe(f.ref,v,o),$=c=>g=>{c&&(g===void 0?c(v.current):c(v.current,g))},D=$((c,g)=>{J(x,c,l),Ce(c),E&&E(c,g)}),B=$((c,g)=>{const ae=ie({timeout:T,style:C,easing:I},{mode:"enter"});c.style.webkitTransition=s.transitions.create("-webkit-transform",i({},ae)),c.style.transition=s.transitions.create("transform",i({},ae)),c.style.webkitTransform="none",c.style.transform="none",h&&h(c,g)}),X=$(m),q=$(N),ye=$(c=>{const g=ie({timeout:T,style:C,easing:I},{mode:"exit"});c.style.webkitTransition=s.transitions.create("-webkit-transform",g),c.style.transition=s.transitions.create("transform",g),J(x,c,l),k&&k(c)}),be=$(c=>{c.style.webkitTransition="",c.style.transition="",b&&b(c)}),je=c=>{d&&d(v.current,c)},ne=a.useCallback(()=>{v.current&&J(x,v.current,l)},[x,l]);return a.useEffect(()=>{if(y||x==="down"||x==="right")return;const c=Pe(()=>{v.current&&J(x,v.current,l)}),g=he(v.current);return g.addEventListener("resize",c),()=>{c.clear(),g.removeEventListener("resize",c)}},[x,y,l]),a.useEffect(()=>{y||ne()},[y,ne]),t.jsx(K,i({nodeRef:v,onEnter:D,onEntered:X,onEntering:B,onExit:ye,onExited:be,onExiting:q,addEndListener:je,appear:u,in:y,timeout:T},z,{children:(c,g)=>a.cloneElement(f,i({ref:ee,style:i({visibility:c==="exited"&&!y?"hidden":void 0},C,f.props.style)},g))}))});function Ye(e){return oe("MuiDrawer",e)}se("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Se=["BackdropProps"],Xe=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],ge=(e,r)=>{const{ownerState:o}=e;return[r.root,(o.variant==="permanent"||o.variant==="persistent")&&r.docked,r.modal]},qe=e=>{const{classes:r,anchor:o,variant:s}=e,n={root:["root"],docked:[(s==="permanent"||s==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${_(o)}`,s!=="temporary"&&`paperAnchorDocked${_(o)}`]};return S(n,Ye,r)},Qe=A(Re,{name:"MuiDrawer",slot:"Root",overridesResolver:ge})(({theme:e})=>({zIndex:(e.vars||e).zIndex.drawer})),de=A("div",{shouldForwardProp:xe,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:ge})({flex:"0 0 auto"}),Ze=A(me,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.paper,r[`paperAnchor${_(o.anchor)}`],o.variant!=="temporary"&&r[`paperAnchorDocked${_(o.anchor)}`]]}})(({theme:e,ownerState:r})=>i({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(e.vars||e).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},r.anchor==="left"&&{left:0},r.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},r.anchor==="right"&&{right:0},r.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},r.anchor==="left"&&r.variant!=="temporary"&&{borderRight:`1px solid ${(e.vars||e).palette.divider}`},r.anchor==="top"&&r.variant!=="temporary"&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`},r.anchor==="right"&&r.variant!=="temporary"&&{borderLeft:`1px solid ${(e.vars||e).palette.divider}`},r.anchor==="bottom"&&r.variant!=="temporary"&&{borderTop:`1px solid ${(e.vars||e).palette.divider}`})),ve={left:"right",right:"left",top:"down",bottom:"up"};function Je(e){return["left","right"].indexOf(e)!==-1}function Ke({direction:e},r){return e==="rtl"&&Je(r)?ve[r]:r}const er=a.forwardRef(function(r,o){const s=Y({props:r,name:"MuiDrawer"}),n=ue(),p=Te(),d={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{anchor:u="left",BackdropProps:f,children:l,className:x,elevation:I=16,hideBackdrop:y=!1,ModalProps:{BackdropProps:E}={},onClose:m,open:h=!1,PaperProps:k={},SlideProps:b,TransitionComponent:N=We,transitionDuration:C=d,variant:T="temporary"}=s,K=L(s.ModalProps,Se),z=L(s,Xe),v=a.useRef(!1);a.useEffect(()=>{v.current=!0},[]);const ee=Ke({direction:p?"rtl":"ltr"},u),D=i({},s,{anchor:u,elevation:I,open:h,variant:T},z),B=qe(D),X=t.jsx(Ze,i({elevation:T==="temporary"?I:0,square:!0},k,{className:P(B.paper,k.className),ownerState:D,children:l}));if(T==="permanent")return t.jsx(de,i({className:P(B.root,B.docked,x),ownerState:D,ref:o},z,{children:X}));const q=t.jsx(N,i({in:h,direction:ve[ee],timeout:C,appear:v.current},b,{children:X}));return T==="persistent"?t.jsx(de,i({className:P(B.root,B.docked,x),ownerState:D,ref:o},z,{children:q})):t.jsx(Qe,i({BackdropProps:i({},f,E,{transitionDuration:C}),className:P(B.root,B.modal,x),open:h,ownerState:D,onClose:m,hideBackdrop:y,ref:o},z,K,{children:q}))}),rr=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],tr=(e,r)=>{const{ownerState:o}=e;return[r.root,o.dense&&r.dense,o.alignItems==="flex-start"&&r.alignItemsFlexStart,o.divider&&r.divider,!o.disableGutters&&r.gutters]},or=e=>{const{alignItems:r,classes:o,dense:s,disabled:n,disableGutters:p,divider:d,selected:u}=e,l=S({root:["root",s&&"dense",!p&&"gutters",d&&"divider",n&&"disabled",r==="flex-start"&&"alignItemsFlexStart",u&&"selected"]},Ne,o);return i({},o,l)},sr=A(De,{shouldForwardProp:e=>xe(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:tr})(({theme:e,ownerState:r})=>i({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${H.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Q(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${H.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Q(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${H.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Q(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Q(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${H.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${H.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},r.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},r.alignItems==="flex-start"&&{alignItems:"flex-start"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.dense&&{paddingTop:4,paddingBottom:4})),V=a.forwardRef(function(r,o){const s=Y({props:r,name:"MuiListItemButton"}),{alignItems:n="center",autoFocus:p=!1,component:d="div",children:u,dense:f=!1,disableGutters:l=!1,divider:x=!1,focusVisibleClassName:I,selected:y=!1,className:E}=s,m=L(s,rr),h=a.useContext(te),k=a.useMemo(()=>({dense:f||h.dense||!1,alignItems:n,disableGutters:l}),[n,h.dense,f,l]),b=a.useRef(null);_e(()=>{p&&b.current&&b.current.focus()},[p]);const N=i({},s,{alignItems:n,dense:k.dense,disableGutters:l,divider:x,selected:y}),C=or(N),T=fe(b,o);return t.jsx(te.Provider,{value:k,children:t.jsx(sr,i({ref:T,href:m.href||m.to,component:(m.href||m.to)&&d==="div"?"button":d,focusVisibleClassName:P(C.focusVisible,I),ownerState:N,className:P(C.root,E)},m,{classes:C,children:u}))})}),nr=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],ar=e=>{const{classes:r,inset:o,primary:s,secondary:n,dense:p}=e;return S({root:["root",o&&"inset",p&&"dense",s&&n&&"multiline"],primary:["primary"],secondary:["secondary"]},ze,r)},ir=A("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[{[`& .${ce.primary}`]:r.primary},{[`& .${ce.secondary}`]:r.secondary},r.root,o.inset&&r.inset,o.primary&&o.secondary&&r.multiline,o.dense&&r.dense]}})(({ownerState:e})=>i({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),G=a.forwardRef(function(r,o){const s=Y({props:r,name:"MuiListItemText"}),{children:n,className:p,disableTypography:d=!1,inset:u=!1,primary:f,primaryTypographyProps:l,secondary:x,secondaryTypographyProps:I}=s,y=L(s,nr),{dense:E}=a.useContext(te);let m=f??n,h=x;const k=i({},s,{disableTypography:d,inset:u,primary:!!m,secondary:!!h,dense:E}),b=ar(k);return m!=null&&m.type!==U&&!d&&(m=t.jsx(U,i({variant:E?"body2":"body1",className:b.primary,component:l!=null&&l.variant?void 0:"span",display:"block"},l,{children:m}))),h!=null&&h.type!==U&&!d&&(h=t.jsx(U,i({variant:"body2",className:b.secondary,color:"text.secondary",display:"block"},I,{children:h}))),t.jsxs(ir,i({className:P(b.root,p),ownerState:k,ref:o},y,{children:[m,h]}))});function lr(e){return oe("MuiToolbar",e)}se("MuiToolbar",["root","gutters","regular","dense"]);const cr=["className","component","disableGutters","variant"],dr=e=>{const{classes:r,disableGutters:o,variant:s}=e;return S({root:["root",!o&&"gutters",s]},lr,r)},pr=A("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,!o.disableGutters&&r.gutters,r[o.variant]]}})(({theme:e,ownerState:r})=>i({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},r.variant==="dense"&&{minHeight:48}),({theme:e,ownerState:r})=>r.variant==="regular"&&e.mixins.toolbar),ur=a.forwardRef(function(r,o){const s=Y({props:r,name:"MuiToolbar"}),{className:n,component:p="div",disableGutters:d=!1,variant:u="regular"}=s,f=L(s,cr),l=i({},s,{component:p,disableGutters:d,variant:u}),x=dr(l);return t.jsx(pr,i({as:p,className:P(x.root,n),ref:o,ownerState:l},f))}),fr=a.lazy(()=>R(()=>import("./index-rhujg7cJ.js"),__vite__mapDeps([0,1,2,3])).then(e=>({default:e.FaArrowLeft}))),xr=a.lazy(()=>R(()=>import("./index-rhujg7cJ.js"),__vite__mapDeps([0,1,2,3])).then(e=>({default:e.FaHome})));a.lazy(()=>R(()=>import("./index-rhujg7cJ.js"),__vite__mapDeps([0,1,2,3])).then(e=>({default:e.FaInfoCircle})));a.lazy(()=>R(()=>import("./index-rhujg7cJ.js"),__vite__mapDeps([0,1,2,3])).then(e=>({default:e.FaEnvelope})));const mr=a.lazy(()=>R(()=>import("./index-rhujg7cJ.js"),__vite__mapDeps([0,1,2,3])).then(e=>({default:e.FaCog}))),hr=a.lazy(()=>R(()=>import("./index-rhujg7cJ.js"),__vite__mapDeps([0,1,2,3])).then(e=>({default:e.FaQuestionCircle}))),re=a.lazy(()=>R(()=>import("./index-CLS03Wpe.js"),__vite__mapDeps([4,1,2,3])).then(e=>({default:e.CgProfile}))),pe=a.lazy(()=>R(()=>import("./index-DArHCydm.js"),__vite__mapDeps([5,1,2,3])).then(e=>({default:e.FiLogOut}))),gr=a.lazy(()=>R(()=>import("./index-BIGdFCAq.js"),__vite__mapDeps([6,1,2,3])).then(e=>({default:e.IoMdMenu})));function Pr({isMobile:e,setIsMobile:r,toggleTheme:o,setToggleTheme:s}){const[n,p]=a.useState(!0),d=u=>{s(u)};return a.useEffect(()=>{p(!e)},[e]),t.jsxs("div",{className:"h-screen flex p-2 overflow-hidden",children:[t.jsx(er,{open:n,PaperProps:{className:`!z-40 ${n&&!e?"!w-1/6":n&&e?"!w-4/6":""} ${e?"":"!py-2 ps-2 pe-1 !rounded-xl"} !bg-transparent !border-none`},className:`${n&&!e?"!w-1/6":n&&e?"!w-4/6":""}`,variant:e?"temporary":"persistent",anchor:"left",ModalProps:{keepMounted:!0},onClose:()=>p(!1),children:t.jsxs(j,{className:`h-full !w-full bg-[#31c896] ${e?"":"rounded-xl"}`,justifyContent:"space-between",children:[t.jsxs(j,{children:[!e&&t.jsxs(j,{className:"p-2",direction:"row",alignItems:"center",justifyContent:"center",spacing:4,children:[t.jsx(U,{variant:"h5",className:"text-white !font-bold",children:"Demo"}),t.jsx(Le,{className:"!border-white"})]}),e&&t.jsx(Ae,{className:"!flex !justify-end",children:t.jsx(W,{title:"close-menu",children:t.jsx(O,{onClick:()=>{p(!n)},children:t.jsx(a.Suspense,{children:t.jsx(fr,{size:22})})})})}),t.jsxs($e,{className:"nav",disablePadding:!0,children:[t.jsx(j,{children:t.jsx(w,{to:"/dashboard",children:t.jsx(F,{children:t.jsxs(V,{className:"focus:!bg-[#3d9f80] border-none",children:[t.jsx(M,{children:t.jsx(a.Suspense,{children:t.jsx(xr,{size:22})})}),t.jsx(G,{primary:"Home"})]})})})}),t.jsx(j,{children:t.jsx(w,{to:"/products",children:t.jsx(F,{children:t.jsxs(V,{className:"focus:!bg-[#3d9f80] border-none",children:[t.jsx(M,{children:t.jsx(a.Suspense,{children:t.jsx(Ee,{})})}),t.jsx(G,{primary:"Products"})]})})})}),t.jsx(j,{children:t.jsx(w,{to:"/profile",children:t.jsx(F,{children:t.jsxs(V,{className:"focus:!bg-[#3d9f80] !border-0",children:[t.jsx(M,{children:t.jsx(a.Suspense,{children:t.jsx(re,{size:22})})}),t.jsx(G,{primary:"Profile"})]})})})}),t.jsx(j,{children:t.jsx(w,{to:"/create",children:t.jsx(F,{children:t.jsxs(V,{className:"focus:!bg-[#3d9f80] border-none",children:[t.jsx(M,{children:t.jsx(a.Suspense,{children:t.jsx(Be,{size:22})})}),t.jsx(G,{primary:"Create"})]})})})}),t.jsx(j,{children:t.jsx(F,{children:t.jsxs(V,{className:"focus:!bg-[#3d9f80] border-none",children:[t.jsx(M,{children:t.jsx(a.Suspense,{children:t.jsx(mr,{size:22})})}),t.jsx(G,{primary:"Settings"})]})})}),t.jsx(j,{children:t.jsx(F,{children:t.jsxs(V,{className:"focus:!bg-[#3d9f80] border-none",children:[t.jsx(M,{children:t.jsx(a.Suspense,{children:t.jsx(hr,{size:22})})}),t.jsx(G,{primary:"Help"})]})})})]})]}),!e&&t.jsxs(j,{direction:"row",justifyContent:"space-around",alignItems:"center",children:[t.jsx(le,{checked:o,onChange:d,size:35,sunColor:"#fff"}),t.jsx(W,{title:"profile",children:t.jsx(O,{children:t.jsx(a.Suspense,{children:t.jsx(re,{size:28})})})}),t.jsx(W,{title:"logout",children:t.jsx(w,{to:"/",children:t.jsx(O,{children:t.jsx(a.Suspense,{children:t.jsx(pe,{size:28})})})})})]})]})}),t.jsxs(j,{className:"w-full h-full !overflow-y-auto",children:[t.jsx(Ve,{position:n&&e?"static":"sticky",className:`${o?"!bg-[#31c896]":"!bg-[#42c896]"} !rounded-xl ${e?"!block":"!hidden"}`,children:t.jsxs(ur,{children:[t.jsx(O,{edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:()=>{p(!n)},children:t.jsx(a.Suspense,{children:t.jsx(gr,{})})}),t.jsx(U,{variant:"h6",component:"div",sx:{flexGrow:1},children:"News"}),t.jsxs(j,{direction:"row",justifyContent:"space-around",alignItems:"center",spacing:2,children:[t.jsx(le,{checked:o,onChange:d,size:35,sunColor:"#fff"}),t.jsx(W,{title:"profile",children:t.jsx(O,{className:"!text-white",children:t.jsx(a.Suspense,{children:t.jsx(re,{})})})}),t.jsx(W,{title:"logout",children:t.jsx(w,{to:"/",children:t.jsx(O,{children:t.jsx(a.Suspense,{children:t.jsx(pe,{size:28})})})})})]})]})}),t.jsx("div",{className:"border-2 rounded-xl  border-red-500 h-full w-full relative overflow-hidden mt-2 md:mt-0 p-2",children:t.jsx("div",{className:"h-full overflow-auto !z-40",children:t.jsx(Ie,{})})})]})]})}export{Pr as default};