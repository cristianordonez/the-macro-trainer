"use strict";(self.webpackChunkthe_diabetes_calculator=self.webpackChunkthe_diabetes_calculator||[]).push([[998],{724:(e,r,o)=>{var t=o(5318);r.Z=void 0;var a=t(o(4938)),n=o(5893),i=(0,a.default)((0,n.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");r.Z=i},3379:(e,r,o)=>{var t=o(5318);r.Z=void 0;var a=t(o(4938)),n=o(5893),i=(0,a.default)((0,n.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");r.Z=i},4962:(e,r,o)=>{o.d(r,{Z:()=>Z});var t=o(3366),a=o(7462),n=o(7294),i=o(6010),s=o(4780),c=o(6122),l=o(9602),d=o(4867);function p(e){return(0,d.Z)("MuiCardMedia",e)}(0,o(1588).Z)("MuiCardMedia",["root","media","img"]);var m=o(5893);const h=["children","className","component","image","src","style"],u=(0,l.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e,{isMediaComponent:t,isImageComponent:a}=o;return[r.root,t&&r.media,a&&r.img]}})((({ownerState:e})=>(0,a.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),v=["video","audio","picture","iframe","img"],f=["picture","img"],Z=n.forwardRef((function(e,r){const o=(0,c.Z)({props:e,name:"MuiCardMedia"}),{children:n,className:l,component:d="div",image:Z,src:k,style:g}=o,x=(0,t.Z)(o,h),w=-1!==v.indexOf(d),S=!w&&Z?(0,a.Z)({backgroundImage:`url("${Z}")`},g):g,P=(0,a.Z)({},o,{component:d,isMediaComponent:w,isImageComponent:-1!==f.indexOf(d)}),b=(e=>{const{classes:r,isMediaComponent:o,isImageComponent:t}=e,a={root:["root",o&&"media",t&&"img"]};return(0,s.Z)(a,p,r)})(P);return(0,m.jsx)(u,(0,a.Z)({className:(0,i.Z)(b.root,l),as:d,role:!w&&Z?"img":void 0,ref:r,style:S,ownerState:P,src:w?Z||k:void 0},x,{children:n}))}))},9062:(e,r,o)=>{o.d(r,{Z:()=>C});var t=o(3366),a=o(7462),n=o(7294),i=o(6010),s=o(4780),c=o(917),l=o(8216),d=o(6122),p=o(9602),m=o(4867);function h(e){return(0,m.Z)("MuiCircularProgress",e)}(0,o(1588).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var u=o(5893);const v=["className","color","disableShrink","size","style","thickness","value","variant"];let f,Z,k,g,x=e=>e;const w=44,S=(0,c.F4)(f||(f=x`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),P=(0,c.F4)(Z||(Z=x`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),b=(0,p.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,r[o.variant],r[`color${(0,l.Z)(o.color)}`]]}})((({ownerState:e,theme:r})=>(0,a.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,c.iv)(k||(k=x`
      animation: ${0} 1.4s linear infinite;
    `),S))),M=(0,p.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),y=(0,p.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.circle,r[`circle${(0,l.Z)(o.variant)}`],o.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,a.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,c.iv)(g||(g=x`
      animation: ${0} 1.4s ease-in-out infinite;
    `),P))),C=n.forwardRef((function(e,r){const o=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:n,color:c="primary",disableShrink:p=!1,size:m=40,style:f,thickness:Z=3.6,value:k=0,variant:g="indeterminate"}=o,x=(0,t.Z)(o,v),S=(0,a.Z)({},o,{color:c,disableShrink:p,size:m,thickness:Z,value:k,variant:g}),P=(e=>{const{classes:r,variant:o,color:t,disableShrink:a}=e,n={root:["root",o,`color${(0,l.Z)(t)}`],svg:["svg"],circle:["circle",`circle${(0,l.Z)(o)}`,a&&"circleDisableShrink"]};return(0,s.Z)(n,h,r)})(S),C={},D={},R={};if("determinate"===g){const e=2*Math.PI*((w-Z)/2);C.strokeDasharray=e.toFixed(3),R["aria-valuenow"]=Math.round(k),C.strokeDashoffset=`${((100-k)/100*e).toFixed(3)}px`,D.transform="rotate(-90deg)"}return(0,u.jsx)(b,(0,a.Z)({className:(0,i.Z)(P.root,n),style:(0,a.Z)({width:m,height:m},D,f),ownerState:S,ref:r,role:"progressbar"},R,x,{children:(0,u.jsx)(M,{className:P.svg,ownerState:S,viewBox:"22 22 44 44",children:(0,u.jsx)(y,{className:P.circle,style:C,ownerState:S,cx:w,cy:w,r:(w-Z)/2,fill:"none",strokeWidth:Z})})}))}))},7049:(e,r,o)=>{o.d(r,{ZP:()=>M});var t=o(3366),a=o(7462),n=o(7294),i=o(6010),s=o(4780),c=o(7794),l=o(4776),d=o(6501),p=o(8216),m=o(2734),h=o(6122),u=o(9602),v=o(4867);function f(e){return(0,v.Z)("MuiDrawer",e)}(0,o(1588).Z)("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);var Z=o(5893);const k=["BackdropProps"],g=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],x=(e,r)=>{const{ownerState:o}=e;return[r.root,("permanent"===o.variant||"persistent"===o.variant)&&r.docked,r.modal]},w=(0,u.ZP)(c.Z,{name:"MuiDrawer",slot:"Root",overridesResolver:x})((({theme:e})=>({zIndex:(e.vars||e).zIndex.drawer}))),S=(0,u.ZP)("div",{shouldForwardProp:u.FO,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:x})({flex:"0 0 auto"}),P=(0,u.ZP)(d.Z,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.paper,r[`paperAnchor${(0,p.Z)(o.anchor)}`],"temporary"!==o.variant&&r[`paperAnchorDocked${(0,p.Z)(o.anchor)}`]]}})((({theme:e,ownerState:r})=>(0,a.Z)({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(e.vars||e).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},"left"===r.anchor&&{left:0},"top"===r.anchor&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},"right"===r.anchor&&{right:0},"bottom"===r.anchor&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},"left"===r.anchor&&"temporary"!==r.variant&&{borderRight:`1px solid ${(e.vars||e).palette.divider}`},"top"===r.anchor&&"temporary"!==r.variant&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`},"right"===r.anchor&&"temporary"!==r.variant&&{borderLeft:`1px solid ${(e.vars||e).palette.divider}`},"bottom"===r.anchor&&"temporary"!==r.variant&&{borderTop:`1px solid ${(e.vars||e).palette.divider}`}))),b={left:"right",right:"left",top:"down",bottom:"up"};const M=n.forwardRef((function(e,r){const o=(0,h.Z)({props:e,name:"MuiDrawer"}),c=(0,m.Z)(),d={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{anchor:u="left",BackdropProps:v,children:x,className:M,elevation:y=16,hideBackdrop:C=!1,ModalProps:{BackdropProps:D}={},onClose:R,open:$=!1,PaperProps:N={},SlideProps:A,TransitionComponent:B=l.Z,transitionDuration:I=d,variant:j="temporary"}=o,z=(0,t.Z)(o.ModalProps,k),F=(0,t.Z)(o,g),L=n.useRef(!1);n.useEffect((()=>{L.current=!0}),[]);const O=function(e,r){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(r)?b[r]:r}(c,u),T=u,_=(0,a.Z)({},o,{anchor:T,elevation:y,open:$,variant:j},F),H=(e=>{const{classes:r,anchor:o,variant:t}=e,a={root:["root"],docked:[("permanent"===t||"persistent"===t)&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${(0,p.Z)(o)}`,"temporary"!==t&&`paperAnchorDocked${(0,p.Z)(o)}`]};return(0,s.Z)(a,f,r)})(_),W=(0,Z.jsx)(P,(0,a.Z)({elevation:"temporary"===j?y:0,square:!0},N,{className:(0,i.Z)(H.paper,N.className),ownerState:_,children:x}));if("permanent"===j)return(0,Z.jsx)(S,(0,a.Z)({className:(0,i.Z)(H.root,H.docked,M),ownerState:_,ref:r},F,{children:W}));const q=(0,Z.jsx)(B,(0,a.Z)({in:$,direction:b[O],timeout:I,appear:L.current},A,{children:W}));return"persistent"===j?(0,Z.jsx)(S,(0,a.Z)({className:(0,i.Z)(H.root,H.docked,M),ownerState:_,ref:r},F,{children:q})):(0,Z.jsx)(w,(0,a.Z)({BackdropProps:(0,a.Z)({},v,D,{transitionDuration:I}),className:(0,i.Z)(H.root,H.modal,M),open:$,ownerState:_,onClose:R,hideBackdrop:C,ref:r},F,z,{children:q}))}))}}]);