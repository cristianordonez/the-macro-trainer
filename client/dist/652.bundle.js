"use strict";(self.webpackChunkthe_macro_trainer=self.webpackChunkthe_macro_trainer||[]).push([[652],{2761:(e,t,o)=>{var r=o(4836);t.Z=void 0;var l=r(o(4938)),n=o(5893),a=(0,l.default)((0,n.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=a},8037:(e,t,o)=>{o.d(t,{Z:()=>w});var r=o(3366),l=o(7462),n=o(7294),a=o(6010),i=o(4780),s=o(9711),c=o(1647),d=o(6622),u=o(4174),p=o(1468),b=o(5677);function h(e){return(0,b.Z)("MuiFormControlLabel",e)}const f=(0,o(1588).Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]);var m=o(6594),v=o(5893);const Z=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],g=(0,u.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${f.label}`]:t.label},t.root,t[`labelPlacement${(0,d.Z)(o.labelPlacement)}`]]}})((({theme:e,ownerState:t})=>(0,l.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${f.disabled}`]:{cursor:"default"}},"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${f.label}`]:{[`&.${f.disabled}`]:{color:(e.vars||e).palette.text.disabled}}}))),w=n.forwardRef((function(e,t){const o=(0,p.Z)({props:e,name:"MuiFormControlLabel"}),{className:u,componentsProps:b={},control:f,disabled:w,disableTypography:x,label:S,labelPlacement:C="end"}=o,y=(0,r.Z)(o,Z),R=(0,s.Z)();let k=w;void 0===k&&void 0!==f.props.disabled&&(k=f.props.disabled),void 0===k&&R&&(k=R.disabled);const M={disabled:k};["checked","name","onChange","value","inputRef"].forEach((e=>{void 0===f.props[e]&&void 0!==o[e]&&(M[e]=o[e])}));const P=(0,m.Z)({props:o,muiFormControl:R,states:["error"]}),B=(0,l.Z)({},o,{disabled:k,labelPlacement:C,error:P.error}),F=(e=>{const{classes:t,disabled:o,labelPlacement:r,error:l}=e,n={root:["root",o&&"disabled",`labelPlacement${(0,d.Z)(r)}`,l&&"error"],label:["label",o&&"disabled"]};return(0,i.Z)(n,h,t)})(B);let N=S;return null==N||N.type===c.Z||x||(N=(0,v.jsx)(c.Z,(0,l.Z)({component:"span",className:F.label},b.typography,{children:N}))),(0,v.jsxs)(g,(0,l.Z)({className:(0,a.Z)(F.root,u),ownerState:B,ref:t},y,{children:[n.cloneElement(f,M),N]}))}))},9125:(e,t,o)=>{o.d(t,{Z:()=>I});var r=o(3366),l=o(7462),n=o(7294),a=o(6010),i=o(4780),s=o(1796),c=o(6622),d=o(4174),u=o(2293),p=o(9711),b=o(5355),h=o(5677),f=o(1588);function m(e){return(0,h.Z)("PrivateSwitchBase",e)}(0,f.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var v=o(5893);const Z=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],g=(0,d.ZP)(b.Z)((({ownerState:e})=>(0,l.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),w=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),x=n.forwardRef((function(e,t){const{autoFocus:o,checked:n,checkedIcon:s,className:d,defaultChecked:b,disabled:h,disableFocusRipple:f=!1,edge:x=!1,icon:S,id:C,inputProps:y,inputRef:R,name:k,onBlur:M,onChange:P,onFocus:B,readOnly:F,required:N,tabIndex:W,type:z,value:E}=e,j=(0,r.Z)(e,Z),[L,T]=(0,u.Z)({controlled:n,default:Boolean(b),name:"SwitchBase",state:"checked"}),I=(0,p.Z)();let $=h;I&&void 0===$&&($=I.disabled);const H="checkbox"===z||"radio"===z,A=(0,l.Z)({},e,{checked:L,disabled:$,disableFocusRipple:f,edge:x}),D=(e=>{const{classes:t,checked:o,disabled:r,edge:l}=e,n={root:["root",o&&"checked",r&&"disabled",l&&`edge${(0,c.Z)(l)}`],input:["input"]};return(0,i.Z)(n,m,t)})(A);return(0,v.jsxs)(g,(0,l.Z)({component:"span",className:(0,a.Z)(D.root,d),centerRipple:!0,focusRipple:!f,disabled:$,tabIndex:null,role:void 0,onFocus:e=>{B&&B(e),I&&I.onFocus&&I.onFocus(e)},onBlur:e=>{M&&M(e),I&&I.onBlur&&I.onBlur(e)},ownerState:A,ref:t},j,{children:[(0,v.jsx)(w,(0,l.Z)({autoFocus:o,checked:n,defaultChecked:b,className:D.input,disabled:$,id:H&&C,name:k,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;T(t),P&&P(e,t)},readOnly:F,ref:R,required:N,ownerState:A,tabIndex:W,type:z},"checkbox"===z&&void 0===E?{}:{value:E},y)),L?s:S]}))}));var S=o(1468),C=o(41);const y=(0,C.Z)((0,v.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),R=(0,C.Z)((0,v.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),k=(0,d.ZP)("span")({position:"relative",display:"flex"}),M=(0,d.ZP)(y)({transform:"scale(1)"}),P=(0,d.ZP)(R)((({theme:e,ownerState:t})=>(0,l.Z)({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})})));const B=function(e){const{checked:t=!1,classes:o={},fontSize:r}=e,n=(0,l.Z)({},e,{checked:t});return(0,v.jsxs)(k,{className:o.root,ownerState:n,children:[(0,v.jsx)(M,{fontSize:r,className:o.background,ownerState:n}),(0,v.jsx)(P,{fontSize:r,className:o.dot,ownerState:n})]})};var F=o(6207),N=o(7361);function W(e){return(0,h.Z)("MuiRadio",e)}const z=(0,f.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),E=["checked","checkedIcon","color","icon","name","onChange","size","className"],j=(0,d.ZP)(x,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`color${(0,c.Z)(o.color)}`]]}})((({theme:e,ownerState:t})=>(0,l.Z)({color:(e.vars||e).palette.text.secondary,"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${z.checked}`]:{color:(e.vars||e).palette[t.color].main}},{[`&.${z.disabled}`]:{color:(e.vars||e).palette.action.disabled}})));const L=(0,v.jsx)(B,{checked:!0}),T=(0,v.jsx)(B,{}),I=n.forwardRef((function(e,t){var o,s;const d=(0,S.Z)({props:e,name:"MuiRadio"}),{checked:u,checkedIcon:p=L,color:b="primary",icon:h=T,name:f,onChange:m,size:Z="medium",className:g}=d,w=(0,r.Z)(d,E),x=(0,l.Z)({},d,{color:b,size:Z}),C=(e=>{const{classes:t,color:o}=e,r={root:["root",`color${(0,c.Z)(o)}`]};return(0,l.Z)({},t,(0,i.Z)(r,W,t))})(x),y=n.useContext(N.Z);let R=u;const k=(0,F.Z)(m,y&&y.onChange);let M=f;var P,B;return y&&(void 0===R&&(P=y.value,R="object"==typeof(B=d.value)&&null!==B?P===B:String(P)===String(B)),void 0===M&&(M=y.name)),(0,v.jsx)(j,(0,l.Z)({type:"radio",icon:n.cloneElement(h,{fontSize:null!=(o=T.props.fontSize)?o:Z}),checkedIcon:n.cloneElement(p,{fontSize:null!=(s=L.props.fontSize)?s:Z}),ownerState:x,classes:C,name:M,checked:R,onChange:k,ref:t,className:(0,a.Z)(C.root,g)},w))}))},8904:(e,t,o)=>{o.d(t,{Z:()=>C});var r=o(7462),l=o(3366),n=o(7294),a=o(6010),i=o(4780),s=o(4174),c=o(1468),d=o(5677);function u(e){return(0,d.Z)("MuiFormGroup",e)}(0,o(1588).Z)("MuiFormGroup",["root","row","error"]);var p=o(9711),b=o(6594),h=o(5893);const f=["className","row"],m=(0,s.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.row&&t.row]}})((({ownerState:e})=>(0,r.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"}))),v=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiFormGroup"}),{className:n,row:s=!1}=o,d=(0,l.Z)(o,f),v=(0,p.Z)(),Z=(0,b.Z)({props:o,muiFormControl:v,states:["error"]}),g=(0,r.Z)({},o,{row:s,error:Z.error}),w=(e=>{const{classes:t,row:o,error:r}=e,l={root:["root",o&&"row",r&&"error"]};return(0,i.Z)(l,u,t)})(g);return(0,h.jsx)(m,(0,r.Z)({className:(0,a.Z)(w.root,n),ownerState:g,ref:t},d))}));var Z=o(4771),g=o(2293),w=o(7361),x=o(3192);const S=["actions","children","defaultValue","name","onChange","value"],C=n.forwardRef((function(e,t){const{actions:o,children:a,defaultValue:i,name:s,onChange:c,value:d}=e,u=(0,l.Z)(e,S),p=n.useRef(null),[b,f]=(0,g.Z)({controlled:d,default:i,name:"RadioGroup"});n.useImperativeHandle(o,(()=>({focus:()=>{let e=p.current.querySelector("input:not(:disabled):checked");e||(e=p.current.querySelector("input:not(:disabled)")),e&&e.focus()}})),[]);const m=(0,Z.Z)(t,p),C=(0,x.Z)(s);return(0,h.jsx)(w.Z.Provider,{value:{name:C,onChange:e=>{f(e.target.value),c&&c(e,e.target.value)},value:b},children:(0,h.jsx)(v,(0,r.Z)({role:"radiogroup",ref:m},u,{children:a}))})}))},7361:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o(7294).createContext(void 0)},214:(e,t,o)=>{o.d(t,{Z:()=>Z});var r=o(3366),l=o(7462),n=o(7294),a=o(6010),i=o(4780),s=o(5355),c=o(6622),d=o(1468),u=o(4174),p=o(5677);function b(e){return(0,p.Z)("MuiTab",e)}const h=(0,o(1588).Z)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]);var f=o(5893);const m=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],v=(0,u.ZP)(s.Z,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.label&&o.icon&&t.labelIcon,t[`textColor${(0,c.Z)(o.textColor)}`],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped]}})((({theme:e,ownerState:t})=>(0,l.Z)({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:"top"===t.iconPosition||"bottom"===t.iconPosition?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${h.iconWrapper}`]:(0,l.Z)({},"top"===t.iconPosition&&{marginBottom:6},"bottom"===t.iconPosition&&{marginTop:6},"start"===t.iconPosition&&{marginRight:e.spacing(1)},"end"===t.iconPosition&&{marginLeft:e.spacing(1)})},"inherit"===t.textColor&&{color:"inherit",opacity:.6,[`&.${h.selected}`]:{opacity:1},[`&.${h.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"primary"===t.textColor&&{color:(e.vars||e).palette.text.secondary,[`&.${h.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${h.disabled}`]:{color:(e.vars||e).palette.text.disabled}},"secondary"===t.textColor&&{color:(e.vars||e).palette.text.secondary,[`&.${h.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${h.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)}))),Z=n.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiTab"}),{className:s,disabled:u=!1,disableFocusRipple:p=!1,fullWidth:h,icon:Z,iconPosition:g="top",indicator:w,label:x,onChange:S,onClick:C,onFocus:y,selected:R,selectionFollowsFocus:k,textColor:M="inherit",value:P,wrapped:B=!1}=o,F=(0,r.Z)(o,m),N=(0,l.Z)({},o,{disabled:u,disableFocusRipple:p,selected:R,icon:!!Z,iconPosition:g,label:!!x,fullWidth:h,textColor:M,wrapped:B}),W=(e=>{const{classes:t,textColor:o,fullWidth:r,wrapped:l,icon:n,label:a,selected:s,disabled:d}=e,u={root:["root",n&&a&&"labelIcon",`textColor${(0,c.Z)(o)}`,r&&"fullWidth",l&&"wrapped",s&&"selected",d&&"disabled"],iconWrapper:["iconWrapper"]};return(0,i.Z)(u,b,t)})(N),z=Z&&x&&n.isValidElement(Z)?n.cloneElement(Z,{className:(0,a.Z)(W.iconWrapper,Z.props.className)}):Z;return(0,f.jsxs)(v,(0,l.Z)({focusRipple:!p,className:(0,a.Z)(W.root,s),ref:t,role:"tab","aria-selected":R,disabled:u,onClick:e=>{!R&&S&&S(e,P),C&&C(e)},onFocus:e=>{k&&!R&&S&&S(e,P),y&&y(e)},ownerState:N,tabIndex:R?0:-1},F,{children:["top"===g||"start"===g?(0,f.jsxs)(n.Fragment,{children:[z,x]}):(0,f.jsxs)(n.Fragment,{children:[x,z]}),w]}))}))},5293:(e,t,o)=>{o.d(t,{Z:()=>V});var r=o(3366),l=o(7462),n=o(7294),a=(o(9864),o(6010)),i=o(4780),s=o(4174),c=o(1468),d=o(2097),u=o(5400);let p;function b(){if(p)return p;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),p="reverse",e.scrollLeft>0?p="default":(e.scrollLeft=1,0===e.scrollLeft&&(p="negative")),document.body.removeChild(e),p}function h(e,t){const o=e.scrollLeft;if("rtl"!==t)return o;switch(b()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function f(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var m=o(7577),v=o(5893);const Z=["onChange"],g={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var w=o(41);const x=(0,w.Z)((0,v.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),S=(0,w.Z)((0,v.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");var C=o(5355),y=o(5677),R=o(1588);function k(e){return(0,y.Z)("MuiTabScrollButton",e)}const M=(0,R.Z)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]);var P,B;const F=["className","direction","orientation","disabled"],N=(0,s.ZP)(C.Z,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.orientation&&t[o.orientation]]}})((({ownerState:e})=>(0,l.Z)({width:40,flexShrink:0,opacity:.8,[`&.${M.disabled}`]:{opacity:0}},"vertical"===e.orientation&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}}))),W=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiTabScrollButton"}),{className:n,direction:s}=o,u=(0,r.Z)(o,F),p="rtl"===(0,d.Z)().direction,b=(0,l.Z)({isRtl:p},o),h=(e=>{const{classes:t,orientation:o,disabled:r}=e,l={root:["root",o,r&&"disabled"]};return(0,i.Z)(l,k,t)})(b);return(0,v.jsx)(N,(0,l.Z)({component:"div",className:(0,a.Z)(h.root,n),ref:t,role:null,ownerState:b,tabIndex:null},u,{children:"left"===s?P||(P=(0,v.jsx)(x,{fontSize:"small"})):B||(B=(0,v.jsx)(S,{fontSize:"small"}))}))}));var z=o(6432);function E(e){return(0,y.Z)("MuiTabs",e)}const j=(0,R.Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]);var L=o(7505);const T=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],I=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,$=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,H=(e,t,o)=>{let r=!1,l=o(e,t);for(;l;){if(l===e.firstChild){if(r)return;r=!0}const t=l.disabled||"true"===l.getAttribute("aria-disabled");if(l.hasAttribute("tabindex")&&!t)return void l.focus();l=o(e,l)}},A=(0,s.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${j.scrollButtons}`]:t.scrollButtons},{[`& .${j.scrollButtons}`]:o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,o.vertical&&t.vertical]}})((({ownerState:e,theme:t})=>(0,l.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${j.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}}))),D=(0,s.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})((({ownerState:e})=>(0,l.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"}))),X=(0,s.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})((({ownerState:e})=>(0,l.Z)({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"}))),O=(0,s.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})((({ownerState:e,theme:t})=>(0,l.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},"primary"===e.indicatorColor&&{backgroundColor:(t.vars||t).palette.primary.main},"secondary"===e.indicatorColor&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0}))),Y=(0,s.ZP)((function(e){const{onChange:t}=e,o=(0,r.Z)(e,Z),a=n.useRef(),i=n.useRef(null),s=()=>{a.current=i.current.offsetHeight-i.current.clientHeight};return n.useEffect((()=>{const e=(0,u.Z)((()=>{const e=a.current;s(),e!==a.current&&t(a.current)})),o=(0,m.Z)(i.current);return o.addEventListener("resize",e),()=>{e.clear(),o.removeEventListener("resize",e)}}),[t]),n.useEffect((()=>{s(),t(a.current)}),[t]),(0,v.jsx)("div",(0,l.Z)({style:g,ref:i},o))}),{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),q={};const V=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiTabs"}),s=(0,d.Z)(),p="rtl"===s.direction,{"aria-label":Z,"aria-labelledby":g,action:w,centered:x=!1,children:S,className:C,component:y="div",allowScrollButtonsMobile:R=!1,indicatorColor:k="primary",onChange:M,orientation:P="horizontal",ScrollButtonComponent:B=W,scrollButtons:F="auto",selectionFollowsFocus:N,TabIndicatorProps:j={},TabScrollButtonProps:V={},textColor:G="primary",value:_,variant:K="standard",visibleScrollbar:U=!1}=o,J=(0,r.Z)(o,T),Q="scrollable"===K,ee="vertical"===P,te=ee?"scrollTop":"scrollLeft",oe=ee?"top":"left",re=ee?"bottom":"right",le=ee?"clientHeight":"clientWidth",ne=ee?"height":"width",ae=(0,l.Z)({},o,{component:y,allowScrollButtonsMobile:R,indicatorColor:k,orientation:P,vertical:ee,scrollButtons:F,textColor:G,variant:K,visibleScrollbar:U,fixed:!Q,hideScrollbar:Q&&!U,scrollableX:Q&&!ee,scrollableY:Q&&ee,centered:x&&!Q,scrollButtonsHideMobile:!R}),ie=(e=>{const{vertical:t,fixed:o,hideScrollbar:r,scrollableX:l,scrollableY:n,centered:a,scrollButtonsHideMobile:s,classes:c}=e,d={root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",r&&"hideScrollbar",l&&"scrollableX",n&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",a&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",s&&"scrollButtonsHideMobile"],scrollableX:[l&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]};return(0,i.Z)(d,E,c)})(ae);const[se,ce]=n.useState(!1),[de,ue]=n.useState(q),[pe,be]=n.useState({start:!1,end:!1}),[he,fe]=n.useState({overflow:"hidden",scrollbarWidth:0}),me=new Map,ve=n.useRef(null),Ze=n.useRef(null),ge=()=>{const e=ve.current;let t,o;if(e){const o=e.getBoundingClientRect();t={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollLeftNormalized:h(e,s.direction),scrollWidth:e.scrollWidth,top:o.top,bottom:o.bottom,left:o.left,right:o.right}}if(e&&!1!==_){const e=Ze.current.children;if(e.length>0){const t=e[me.get(_)];0,o=t?t.getBoundingClientRect():null}}return{tabsMeta:t,tabMeta:o}},we=(0,z.Z)((()=>{const{tabsMeta:e,tabMeta:t}=ge();let o,r=0;if(ee)o="top",t&&e&&(r=t.top-e.top+e.scrollTop);else if(o=p?"right":"left",t&&e){const l=p?e.scrollLeftNormalized+e.clientWidth-e.scrollWidth:e.scrollLeft;r=(p?-1:1)*(t[o]-e[o]+l)}const l={[o]:r,[ne]:t?t[ne]:0};if(isNaN(de[o])||isNaN(de[ne]))ue(l);else{const e=Math.abs(de[o]-l[o]),t=Math.abs(de[ne]-l[ne]);(e>=1||t>=1)&&ue(l)}})),xe=(e,{animation:t=!0}={})=>{t?function(e,t,o,r={},l=(()=>{})){const{ease:n=f,duration:a=300}=r;let i=null;const s=t[e];let c=!1;const d=()=>{c=!0},u=r=>{if(c)return void l(new Error("Animation cancelled"));null===i&&(i=r);const d=Math.min(1,(r-i)/a);t[e]=n(d)*(o-s)+s,d>=1?requestAnimationFrame((()=>{l(null)})):requestAnimationFrame(u)};s===o?l(new Error("Element already at target position")):requestAnimationFrame(u)}(te,ve.current,e,{duration:s.transitions.duration.standard}):ve.current[te]=e},Se=e=>{let t=ve.current[te];ee?t+=e:(t+=e*(p?-1:1),t*=p&&"reverse"===b()?-1:1),xe(t)},Ce=()=>{const e=ve.current[le];let t=0;const o=Array.from(Ze.current.children);for(let r=0;r<o.length;r+=1){const l=o[r];if(t+l[le]>e){0===r&&(t=e);break}t+=l[le]}return t},ye=()=>{Se(-1*Ce())},Re=()=>{Se(Ce())},ke=n.useCallback((e=>{fe({overflow:null,scrollbarWidth:e})}),[]),Me=(0,z.Z)((e=>{const{tabsMeta:t,tabMeta:o}=ge();if(o&&t)if(o[oe]<t[oe]){const r=t[te]+(o[oe]-t[oe]);xe(r,{animation:e})}else if(o[re]>t[re]){const r=t[te]+(o[re]-t[re]);xe(r,{animation:e})}})),Pe=(0,z.Z)((()=>{if(Q&&!1!==F){const{scrollTop:e,scrollHeight:t,clientHeight:o,scrollWidth:r,clientWidth:l}=ve.current;let n,a;if(ee)n=e>1,a=e<t-o-1;else{const e=h(ve.current,s.direction);n=p?e<r-l-1:e>1,a=p?e>1:e<r-l-1}n===pe.start&&a===pe.end||be({start:n,end:a})}}));n.useEffect((()=>{const e=(0,u.Z)((()=>{ve.current&&(we(),Pe())})),t=(0,m.Z)(ve.current);let o;return t.addEventListener("resize",e),"undefined"!=typeof ResizeObserver&&(o=new ResizeObserver(e),Array.from(Ze.current.children).forEach((e=>{o.observe(e)}))),()=>{e.clear(),t.removeEventListener("resize",e),o&&o.disconnect()}}),[we,Pe]);const Be=n.useMemo((()=>(0,u.Z)((()=>{Pe()}))),[Pe]);n.useEffect((()=>()=>{Be.clear()}),[Be]),n.useEffect((()=>{ce(!0)}),[]),n.useEffect((()=>{we(),Pe()})),n.useEffect((()=>{Me(q!==de)}),[Me,de]),n.useImperativeHandle(w,(()=>({updateIndicator:we,updateScrollButtons:Pe})),[we,Pe]);const Fe=(0,v.jsx)(O,(0,l.Z)({},j,{className:(0,a.Z)(ie.indicator,j.className),ownerState:ae,style:(0,l.Z)({},de,j.style)}));let Ne=0;const We=n.Children.map(S,(e=>{if(!n.isValidElement(e))return null;const t=void 0===e.props.value?Ne:e.props.value;me.set(t,Ne);const o=t===_;return Ne+=1,n.cloneElement(e,(0,l.Z)({fullWidth:"fullWidth"===K,indicator:o&&!se&&Fe,selected:o,selectionFollowsFocus:N,onChange:M,textColor:G,value:t},1!==Ne||!1!==_||e.props.tabIndex?{}:{tabIndex:0}))})),ze=(()=>{const e={};e.scrollbarSizeListener=Q?(0,v.jsx)(Y,{onChange:ke,className:(0,a.Z)(ie.scrollableX,ie.hideScrollbar)}):null;const t=pe.start||pe.end,o=Q&&("auto"===F&&t||!0===F);return e.scrollButtonStart=o?(0,v.jsx)(B,(0,l.Z)({orientation:P,direction:p?"right":"left",onClick:ye,disabled:!pe.start},V,{className:(0,a.Z)(ie.scrollButtons,V.className)})):null,e.scrollButtonEnd=o?(0,v.jsx)(B,(0,l.Z)({orientation:P,direction:p?"left":"right",onClick:Re,disabled:!pe.end},V,{className:(0,a.Z)(ie.scrollButtons,V.className)})):null,e})();return(0,v.jsxs)(A,(0,l.Z)({className:(0,a.Z)(ie.root,C),ownerState:ae,ref:t,as:y},J,{children:[ze.scrollButtonStart,ze.scrollbarSizeListener,(0,v.jsxs)(D,{className:ie.scroller,ownerState:ae,style:{overflow:he.overflow,[ee?"margin"+(p?"Left":"Right"):"marginBottom"]:U?void 0:-he.scrollbarWidth},ref:ve,onScroll:Be,children:[(0,v.jsx)(X,{"aria-label":Z,"aria-labelledby":g,"aria-orientation":"vertical"===P?"vertical":null,className:ie.flexContainer,ownerState:ae,onKeyDown:e=>{const t=Ze.current,o=(0,L.Z)(t).activeElement;if("tab"!==o.getAttribute("role"))return;let r="horizontal"===P?"ArrowLeft":"ArrowUp",l="horizontal"===P?"ArrowRight":"ArrowDown";switch("horizontal"===P&&p&&(r="ArrowRight",l="ArrowLeft"),e.key){case r:e.preventDefault(),H(t,o,$);break;case l:e.preventDefault(),H(t,o,I);break;case"Home":e.preventDefault(),H(t,null,I);break;case"End":e.preventDefault(),H(t,null,$)}},ref:Ze,role:"tablist",children:We}),se&&Fe]}),ze.scrollButtonEnd]}))}))}}]);