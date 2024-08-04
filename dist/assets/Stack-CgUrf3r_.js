import{a5 as W,e as V,a1 as q,i as l,J as G,a2 as I,a6 as J,V as Q,W as Y,U as $,S as A,a7 as z,Y as H,a8 as K,r as E,Q as X,j as Z,q as ee,t as te,k as oe,a9 as B,s as se,m as re}from"./index-CrSDe5g6.js";const ne=["ownerState"],ie=["variants"],ae=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function ce(e){return Object.keys(e).length===0}function le(e){return typeof e=="string"&&e.charCodeAt(0)>96}function D(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const ue=G(),pe=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function F({defaultTheme:e,theme:t,themeId:o}){return ce(t)?e:t[o]||t}function me(e){return e?(t,o)=>o[e]:null}function T(e,t){let{ownerState:o}=t,r=V(t,ne);const i=typeof e=="function"?e(l({ownerState:o},r)):e;if(Array.isArray(i))return i.flatMap(a=>T(a,l({ownerState:o},r)));if(i&&typeof i=="object"&&Array.isArray(i.variants)){const{variants:a=[]}=i;let p=V(i,ie);return a.forEach(s=>{let n=!0;typeof s.props=="function"?n=s.props(l({ownerState:o},r,o)):Object.keys(s.props).forEach(m=>{(o==null?void 0:o[m])!==s.props[m]&&r[m]!==s.props[m]&&(n=!1)}),n&&(Array.isArray(p)||(p=[p]),p.push(typeof s.style=="function"?s.style(l({ownerState:o},r,o)):s.style))}),p}return i}function fe(e={}){const{themeId:t,defaultTheme:o=ue,rootShouldForwardProp:r=D,slotShouldForwardProp:i=D}=e,a=u=>I(l({},u,{theme:F(l({},u,{defaultTheme:o,themeId:t}))}));return a.__mui_systemSx=!0,(u,p={})=>{W(u,c=>c.filter(d=>!(d!=null&&d.__mui_systemSx)));const{name:s,slot:n,skipVariantsResolver:m,skipSx:S,overridesResolver:y=me(pe(n))}=p,O=V(p,ae),b=m!==void 0?m:n&&n!=="Root"&&n!=="root"||!1,g=S||!1;let R,v=D;n==="Root"||n==="root"?v=r:n?v=i:le(u)&&(v=void 0);const x=q(u,l({shouldForwardProp:v,label:R},O)),C=c=>typeof c=="function"&&c.__emotion_real!==c||J(c)?d=>T(c,l({},d,{theme:F({theme:d.theme,defaultTheme:o,themeId:t})})):c,_=(c,...d)=>{let w=C(c);const k=d?d.map(C):[];s&&y&&k.push(h=>{const f=F(l({},h,{defaultTheme:o,themeId:t}));if(!f.components||!f.components[s]||!f.components[s].styleOverrides)return null;const P=f.components[s].styleOverrides,j={};return Object.entries(P).forEach(([L,U])=>{j[L]=T(U,l({},h,{theme:f}))}),y(h,j)}),s&&!b&&k.push(h=>{var f;const P=F(l({},h,{defaultTheme:o,themeId:t})),j=P==null||(f=P.components)==null||(f=f[s])==null?void 0:f.variants;return T({variants:j},l({},h,{theme:P}))}),g||k.push(a);const N=k.length-d.length;if(Array.isArray(c)&&N>0){const h=new Array(N).fill("");w=[...c,...h],w.raw=[...c.raw,...h]}const M=x(w,...k);return u.muiName&&(M.muiName=u.muiName),M};return x.withConfig&&(_.withConfig=x.withConfig),_}}const de=fe();function he(e){const{theme:t,name:o,props:r}=e;return!t||!t.components||!t.components[o]||!t.components[o].defaultProps?r:Q(t.components[o].defaultProps,r)}function ye({props:e,name:t,defaultTheme:o,themeId:r}){let i=Y(o);return r&&(i=i[r]||i),he({theme:i,name:t,props:e})}const ve=["component","direction","spacing","divider","children","className","useFlexGap"],Se=G(),xe=de("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function ke(e){return ye({props:e,name:"MuiStack",defaultTheme:Se})}function Pe(e,t){const o=E.Children.toArray(e).filter(Boolean);return o.reduce((r,i,a)=>(r.push(i),a<o.length-1&&r.push(E.cloneElement(t,{key:`separator-${a}`})),r),[])}const ge=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Re=({ownerState:e,theme:t})=>{let o=l({display:"flex",flexDirection:"column"},$({theme:t},A({values:e.direction,breakpoints:t.breakpoints.values}),r=>({flexDirection:r})));if(e.spacing){const r=z(t),i=Object.keys(t.breakpoints.values).reduce((s,n)=>((typeof e.spacing=="object"&&e.spacing[n]!=null||typeof e.direction=="object"&&e.direction[n]!=null)&&(s[n]=!0),s),{}),a=A({values:e.direction,base:i}),u=A({values:e.spacing,base:i});typeof a=="object"&&Object.keys(a).forEach((s,n,m)=>{if(!a[s]){const y=n>0?a[m[n-1]]:"column";a[s]=y}}),o=H(o,$({theme:t},u,(s,n)=>e.useFlexGap?{gap:B(r,s)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${ge(n?a[n]:e.direction)}`]:B(r,s)}}))}return o=K(t.breakpoints,o),o};function Ce(e={}){const{createStyledComponent:t=xe,useThemeProps:o=ke,componentName:r="MuiStack"}=e,i=()=>te({root:["root"]},s=>oe(r,s),{}),a=t(Re);return E.forwardRef(function(s,n){const m=o(s),S=X(m),{component:y="div",direction:O="column",spacing:b=0,divider:g,children:R,className:v,useFlexGap:x=!1}=S,C=V(S,ve),_={direction:O,spacing:b,useFlexGap:x},c=i();return Z.jsx(a,l({as:y,ownerState:_,ref:n,className:ee(c.root,v)},C,{children:g?Pe(R,g):R}))})}const je=Ce({createStyledComponent:se("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>re({props:e,name:"MuiStack"})});export{je as S,de as a,he as g,D as s,ye as u};
