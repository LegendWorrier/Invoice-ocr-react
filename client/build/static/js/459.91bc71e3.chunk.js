"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[459],{8459:function(e,t,n){n.r(t);var r=n(7313),s=n(9666),a=n(1682),i=n(8197),l=n(9624),o=n(6370),c=n(6573),d=n(6287),u=n(7890),f=n(6417);t.default=()=>{const[e,t]=(0,r.useState)(""),[n,p]=(0,r.useState)(""),[m,h]=(0,r.useState)(""),[g,x]=(0,r.useState)(""),[$,y]=(0,r.useState)(""),[b,v]=(0,r.useState)(""),[j,C]=(0,r.useState)(""),[w,Z]=(0,r.useState)(""),O=(0,u.s0)();let E=window.localStorage.getItem("email");return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(i.Z,{justify:"space-evenly",style:{marginBottom:10},children:[(0,f.jsx)(l.Z,{span:8,align:"center",children:(0,f.jsx)(s.Z,{id:"standard-basic",fullWidth:!0,label:"Nombre",value:e,onChange:e=>{t(e.target.value)},variant:"standard"})}),(0,f.jsx)(l.Z,{span:8,align:"center",children:(0,f.jsx)(s.Z,{id:"standard-basic",fullWidth:!0,label:"CIF/DNI",value:n,onChange:e=>{p(e.target.value)},variant:"standard"})})]}),(0,f.jsxs)(i.Z,{justify:"space-evenly",style:{marginBottom:10},children:[(0,f.jsx)(l.Z,{span:8,align:"center",children:(0,f.jsx)(s.Z,{id:"standard-basic",fullWidth:!0,label:"Cantidad IVa",value:m,onChange:e=>{h(e.target.value)},variant:"standard"})}),(0,f.jsx)(l.Z,{span:8,align:"center",children:(0,f.jsx)(s.Z,{id:"standard-basic",fullWidth:!0,label:"Cuota Mensual",value:g,onChange:e=>{x(e.target.value)},variant:"standard"})})]}),(0,f.jsxs)(i.Z,{justify:"space-evenly",style:{marginBottom:10},children:[(0,f.jsx)(l.Z,{span:8,align:"center",children:(0,f.jsx)(s.Z,{id:"standard-basic",fullWidth:!0,label:"Tel\xe9fono",value:w,onChange:e=>{Z(e.target.value)},variant:"standard"})}),(0,f.jsx)(l.Z,{span:8,align:"center",children:(0,f.jsx)(s.Z,{id:"standard-basic",fullWidth:!0,label:"Correo electr\xf3nico",value:$,onChange:e=>{y(e.target.value)},variant:"standard"})})]}),(0,f.jsxs)(i.Z,{justify:"space-evenly",style:{marginBottom:10},children:[(0,f.jsx)(l.Z,{span:8,align:"center",children:(0,f.jsx)(s.Z,{id:"standard-basic",fullWidth:!0,label:"Contador Anual",value:b,onChange:e=>{v(e.target.value)},variant:"standard"})}),(0,f.jsx)(l.Z,{span:8,align:"center",children:(0,f.jsx)(s.Z,{id:"standard-basic",fullWidth:!0,label:"Contador mensual",value:j,onChange:e=>{C(e.target.value)},variant:"standard"})})]}),(0,f.jsx)(i.Z,{style:{justifyContent:"center"},children:(0,f.jsx)(o.ZP,{type:"primary",onClick:()=>{c.Z.post(d.Z.API_URL+"api/users/edit",{fname:e,email:$,oldemail:E,cif:n,iva:m,irpf:g,anual:b,mensual:j,tel:w}).then((()=>{a.Z.success({description:"Registro exitoso!",placement:"bottomRight",duration:2}),O("/dashboard/user/profile")})).catch((()=>a.Z.error({description:"Registro fallida!",placement:"bottomRight",duration:2})))},children:"Guardar"})})]})}},6284:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7313),s=n(3233);let a;const i=()=>{if(!(0,s.Z)()||!window.document.documentElement)return!1;if(void 0!==a)return a;const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div"));const t=document.createElement("div");return t.style.position="absolute",t.style.zIndex="-9999",t.appendChild(e),document.body.appendChild(t),a=1===e.scrollHeight,document.body.removeChild(t),a};var l=()=>{const[e,t]=r.useState(!1);return r.useEffect((()=>{t(i())}),[]),e}},7041:function(e,t,n){n.d(t,{Z:function(){return i},c:function(){return a}});var r=n(7313),s=n(1768);const a=["xxl","xl","lg","md","sm","xs"];function i(){const[,e]=(0,s.Z)(),t=(e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}))((e=>{const t=e,n=[].concat(a).reverse();return n.forEach(((e,r)=>{const s=e.toUpperCase(),a=`screen${s}Min`,i=`screen${s}`;if(!(t[a]<=t[i]))throw new Error(`${a}<=${i} fails : !(${t[a]}<=${t[i]})`);if(r<n.length-1){const e=`screen${s}Max`;if(!(t[i]<=t[e]))throw new Error(`${i}<=${e} fails : !(${t[i]}<=${t[e]})`);const a=`screen${n[r+1].toUpperCase()}Min`;if(!(t[e]<=t[a]))throw new Error(`${e}<=${a} fails : !(${t[e]}<=${t[a]})`)}})),e})(e));return r.useMemo((()=>{const e=new Map;let n=-1,r={};return{matchHandlers:{},dispatch(t){return r=t,e.forEach((e=>e(r))),e.size>=1},subscribe(t){return e.size||this.register(),n+=1,e.set(n,t),t(r),n},unsubscribe(t){e.delete(t),e.size||this.unregister()},unregister(){Object.keys(t).forEach((e=>{const n=t[e],r=this.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),e.clear()},register(){Object.keys(t).forEach((e=>{const n=t[e],s=t=>{let{matches:n}=t;this.dispatch(Object.assign(Object.assign({},r),{[e]:n}))},a=window.matchMedia(n);a.addListener(s),this.matchHandlers[n]={mql:a,listener:s},s(a)}))},responsiveMap:t}}),[e])}},9624:function(e,t,n){var r=n(6297);t.Z=r.Z},6223:function(e,t,n){const r=(0,n(7313).createContext)({});t.Z=r},6297:function(e,t,n){var r=n(6123),s=n.n(r),a=n(7313),i=n(4714),l=n(6223),o=n(2358),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n};const d=["xs","sm","md","lg","xl","xxl"],u=a.forwardRef(((e,t)=>{const{getPrefixCls:n,direction:r}=a.useContext(i.E_),{gutter:u,wrap:f,supportFlexGap:p}=a.useContext(l.Z),{prefixCls:m,span:h,order:g,offset:x,push:$,pull:y,className:b,children:v,flex:j,style:C}=e,w=c(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),Z=n("col",m),[O,E]=(0,o.c)(Z);let S={};d.forEach((t=>{let n={};const s=e[t];"number"===typeof s?n.span=s:"object"===typeof s&&(n=s||{}),delete w[t],S=Object.assign(Object.assign({},S),{[`${Z}-${t}-${n.span}`]:void 0!==n.span,[`${Z}-${t}-order-${n.order}`]:n.order||0===n.order,[`${Z}-${t}-offset-${n.offset}`]:n.offset||0===n.offset,[`${Z}-${t}-push-${n.push}`]:n.push||0===n.push,[`${Z}-${t}-pull-${n.pull}`]:n.pull||0===n.pull,[`${Z}-${t}-flex-${n.flex}`]:n.flex||"auto"===n.flex,[`${Z}-rtl`]:"rtl"===r})}));const I=s()(Z,{[`${Z}-${h}`]:void 0!==h,[`${Z}-order-${g}`]:g,[`${Z}-offset-${x}`]:x,[`${Z}-push-${$}`]:$,[`${Z}-pull-${y}`]:y},b,S,E),M={};if(u&&u[0]>0){const e=u[0]/2;M.paddingLeft=e,M.paddingRight=e}if(u&&u[1]>0&&!p){const e=u[1]/2;M.paddingTop=e,M.paddingBottom=e}return j&&(M.flex=function(e){return"number"===typeof e?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}(j),!1!==f||M.minWidth||(M.minWidth=0)),O(a.createElement("div",Object.assign({},w,{style:Object.assign(Object.assign({},M),C),className:I,ref:t}),v))}));t.Z=u},4268:function(e,t,n){var r=n(6123),s=n.n(r),a=n(7313),i=n(4714),l=n(6284),o=n(7041),c=n(6223),d=n(2358),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n};function f(e,t){const[n,r]=a.useState("string"===typeof e?e:"");return a.useEffect((()=>{(()=>{if("string"===typeof e&&r(e),"object"===typeof e)for(let n=0;n<o.c.length;n++){const s=o.c[n];if(!t[s])continue;const a=e[s];if(void 0!==a)return void r(a)}})()}),[JSON.stringify(e),t]),n}const p=a.forwardRef(((e,t)=>{const{prefixCls:n,justify:r,align:p,className:m,style:h,children:g,gutter:x=0,wrap:$}=e,y=u(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:b,direction:v}=a.useContext(i.E_),[j,C]=a.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[w,Z]=a.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),O=f(p,w),E=f(r,w),S=(0,l.Z)(),I=a.useRef(x),M=(0,o.Z)();a.useEffect((()=>{const e=M.subscribe((e=>{Z(e);const t=I.current||0;(!Array.isArray(t)&&"object"===typeof t||Array.isArray(t)&&("object"===typeof t[0]||"object"===typeof t[1]))&&C(e)}));return()=>M.unsubscribe(e)}),[]);const W=b("row",n),[L,P]=(0,d.V)(W),_=(()=>{const e=[void 0,void 0];return(Array.isArray(x)?x:[x,void 0]).forEach(((t,n)=>{if("object"===typeof t)for(let r=0;r<o.c.length;r++){const s=o.c[r];if(j[s]&&void 0!==t[s]){e[n]=t[s];break}}else e[n]=t})),e})(),k=s()(W,{[`${W}-no-wrap`]:!1===$,[`${W}-${E}`]:E,[`${W}-${O}`]:O,[`${W}-rtl`]:"rtl"===v},m,P),R={},G=null!=_[0]&&_[0]>0?_[0]/-2:void 0,N=null!=_[1]&&_[1]>0?_[1]/-2:void 0;G&&(R.marginLeft=G,R.marginRight=G),S?[,R.rowGap]=_:N&&(R.marginTop=N,R.marginBottom=N);const[A,X]=_,B=a.useMemo((()=>({gutter:[A,X],wrap:$,supportFlexGap:S})),[A,X,$,S]);return L(a.createElement(c.Z.Provider,{value:B},a.createElement("div",Object.assign({},y,{className:k,style:Object.assign(Object.assign({},R),h),ref:t}),g)))}));t.Z=p},2358:function(e,t,n){n.d(t,{V:function(){return o},c:function(){return c}});var r=n(6122),s=n(3239);const a=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},i=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},l=(e,t)=>((e,t)=>{const{componentCls:n,gridColumns:r}=e,s={};for(let a=r;a>=0;a--)0===a?(s[`${n}${t}-${a}`]={display:"none"},s[`${n}-push-${a}`]={insetInlineStart:"auto"},s[`${n}-pull-${a}`]={insetInlineEnd:"auto"},s[`${n}${t}-push-${a}`]={insetInlineStart:"auto"},s[`${n}${t}-pull-${a}`]={insetInlineEnd:"auto"},s[`${n}${t}-offset-${a}`]={marginInlineStart:0},s[`${n}${t}-order-${a}`]={order:0}):(s[`${n}${t}-${a}`]={display:"block",flex:`0 0 ${a/r*100}%`,maxWidth:a/r*100+"%"},s[`${n}${t}-push-${a}`]={insetInlineStart:a/r*100+"%"},s[`${n}${t}-pull-${a}`]={insetInlineEnd:a/r*100+"%"},s[`${n}${t}-offset-${a}`]={marginInlineStart:a/r*100+"%"},s[`${n}${t}-order-${a}`]={order:a});return s})(e,t),o=(0,r.Z)("Grid",(e=>[a(e)])),c=(0,r.Z)("Grid",(e=>{const t=(0,s.TS)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[i(t),l(t,""),l(t,"-xs"),Object.keys(n).map((e=>((e,t,n)=>({[`@media (min-width: ${t}px)`]:Object.assign({},l(e,n))}))(t,n[e],e))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}))},8197:function(e,t,n){var r=n(4268);t.Z=r.Z}}]);