import{r as k,k as K,l as O,s as T,i as x,m as _,o as D,Q as I,e as L,j as N,q as U,S as h,U as b,t as Z}from"./index-CrSDe5g6.js";const z=k.createContext();function A(e){return K("MuiGrid",e)}const F=[0,1,2,3,4,5,6,7,8,9,10],q=["column-reverse","column","row-reverse","row"],Q=["nowrap","wrap-reverse","wrap"],g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],$=O("MuiGrid",["root","container","item","zeroMinWidth",...F.map(e=>`spacing-xs-${e}`),...q.map(e=>`direction-xs-${e}`),...Q.map(e=>`wrap-xs-${e}`),...g.map(e=>`grid-xs-${e}`),...g.map(e=>`grid-sm-${e}`),...g.map(e=>`grid-md-${e}`),...g.map(e=>`grid-lg-${e}`),...g.map(e=>`grid-xl-${e}`)]),H=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function m(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function J({theme:e,ownerState:n}){let i;return e.breakpoints.keys.reduce((t,r)=>{let s={};if(n[r]&&(i=n[r]),!i)return t;if(i===!0)s={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=h({values:n.columns,breakpoints:e.breakpoints.values}),u=typeof a=="object"?a[r]:a;if(u==null)return t;const l=`${Math.round(i/u*1e8)/1e6}%`;let c={};if(n.container&&n.item&&n.columnSpacing!==0){const o=e.spacing(n.columnSpacing);if(o!=="0px"){const p=`calc(${l} + ${m(o)})`;c={flexBasis:p,maxWidth:p}}}s=x({flexBasis:l,flexGrow:0,maxWidth:l},c)}return e.breakpoints.values[r]===0?Object.assign(t,s):t[e.breakpoints.up(r)]=s,t},{})}function X({theme:e,ownerState:n}){const i=h({values:n.direction,breakpoints:e.breakpoints.values});return b({theme:e},i,t=>{const r={flexDirection:t};return t.indexOf("column")===0&&(r[`& > .${$.item}`]={maxWidth:"none"}),r})}function B({breakpoints:e,values:n}){let i="";Object.keys(n).forEach(r=>{i===""&&n[r]!==0&&(i=r)});const t=Object.keys(e).sort((r,s)=>e[r]-e[s]);return t.slice(0,t.indexOf(i))}function Y({theme:e,ownerState:n}){const{container:i,rowSpacing:t}=n;let r={};if(i&&t!==0){const s=h({values:t,breakpoints:e.breakpoints.values});let a;typeof s=="object"&&(a=B({breakpoints:e.breakpoints.values,values:s})),r=b({theme:e},s,(u,l)=>{var c;const o=e.spacing(u);return o!=="0px"?{marginTop:`-${m(o)}`,[`& > .${$.item}`]:{paddingTop:m(o)}}:(c=a)!=null&&c.includes(l)?{}:{marginTop:0,[`& > .${$.item}`]:{paddingTop:0}}})}return r}function ee({theme:e,ownerState:n}){const{container:i,columnSpacing:t}=n;let r={};if(i&&t!==0){const s=h({values:t,breakpoints:e.breakpoints.values});let a;typeof s=="object"&&(a=B({breakpoints:e.breakpoints.values,values:s})),r=b({theme:e},s,(u,l)=>{var c;const o=e.spacing(u);return o!=="0px"?{width:`calc(100% + ${m(o)})`,marginLeft:`-${m(o)}`,[`& > .${$.item}`]:{paddingLeft:m(o)}}:(c=a)!=null&&c.includes(l)?{}:{width:"100%",marginLeft:0,[`& > .${$.item}`]:{paddingLeft:0}}})}return r}function ne(e,n,i={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[i[`spacing-xs-${String(e)}`]];const t=[];return n.forEach(r=>{const s=e[r];Number(s)>0&&t.push(i[`spacing-${r}-${String(s)}`])}),t}const re=T("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:i}=e,{container:t,direction:r,item:s,spacing:a,wrap:u,zeroMinWidth:l,breakpoints:c}=i;let o=[];t&&(o=ne(a,c,n));const p=[];return c.forEach(f=>{const d=i[f];d&&p.push(n[`grid-${f}-${String(d)}`])}),[n.root,t&&n.container,s&&n.item,l&&n.zeroMinWidth,...o,r!=="row"&&n[`direction-xs-${String(r)}`],u!=="wrap"&&n[`wrap-xs-${String(u)}`],...p]}})(({ownerState:e})=>x({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),X,Y,ee,J);function te(e,n){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const i=[];return n.forEach(t=>{const r=e[t];if(Number(r)>0){const s=`spacing-${t}-${String(r)}`;i.push(s)}}),i}const ie=e=>{const{classes:n,container:i,direction:t,item:r,spacing:s,wrap:a,zeroMinWidth:u,breakpoints:l}=e;let c=[];i&&(c=te(s,l));const o=[];l.forEach(f=>{const d=e[f];d&&o.push(`grid-${f}-${String(d)}`)});const p={root:["root",i&&"container",r&&"item",u&&"zeroMinWidth",...c,t!=="row"&&`direction-xs-${String(t)}`,a!=="wrap"&&`wrap-xs-${String(a)}`,...o]};return Z(p,A,n)},oe=k.forwardRef(function(n,i){const t=_({props:n,name:"MuiGrid"}),{breakpoints:r}=D(),s=I(t),{className:a,columns:u,columnSpacing:l,component:c="div",container:o=!1,direction:p="row",item:f=!1,rowSpacing:d,spacing:v=0,wrap:M="wrap",zeroMinWidth:V=!1}=s,w=L(s,H),j=d||v,E=l||v,P=k.useContext(z),W=o?u||12:P,y={},G=x({},w);r.keys.forEach(S=>{w[S]!=null&&(y[S]=w[S],delete G[S])});const C=x({},s,{columns:W,container:o,direction:p,item:f,rowSpacing:j,columnSpacing:E,wrap:M,zeroMinWidth:V,spacing:v},y,{breakpoints:r.keys}),R=ie(C);return N.jsx(z.Provider,{value:W,children:N.jsx(re,x({ownerState:C,className:U(R.root,a),as:c,ref:i},G))})});export{oe as G};
