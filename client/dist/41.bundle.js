"use strict";(self.webpackChunkthe_diabetes_calculator=self.webpackChunkthe_diabetes_calculator||[]).push([[41],{4229:(e,t,r)=>{var a=r(5318);t.Z=void 0;var n=a(r(4938)),o=r(5893),i=(0,n.default)((0,o.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");t.Z=i},9062:(e,t,r)=>{r.d(t,{Z:()=>P});var a=r(3366),n=r(7462),o=r(7294),i=r(6010),l=r(4780),s=r(917),c=r(8216),u=r(6122),m=r(9602),d=r(4867);function f(e){return(0,d.Z)("MuiCircularProgress",e)}(0,r(1588).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var p=r(5893);const v=["className","color","disableShrink","size","style","thickness","value","variant"];let g,h,b,y,Z=e=>e;const _=44,x=(0,s.F4)(g||(g=Z`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),E=(0,s.F4)(h||(h=Z`
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
`)),w=(0,m.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,n.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,s.iv)(b||(b=Z`
      animation: ${0} 1.4s linear infinite;
    `),x))),k=(0,m.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),S=(0,m.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,n.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,s.iv)(y||(y=Z`
      animation: ${0} 1.4s ease-in-out infinite;
    `),E))),P=o.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiCircularProgress"}),{className:o,color:s="primary",disableShrink:m=!1,size:d=40,style:g,thickness:h=3.6,value:b=0,variant:y="indeterminate"}=r,Z=(0,a.Z)(r,v),x=(0,n.Z)({},r,{color:s,disableShrink:m,size:d,thickness:h,value:b,variant:y}),E=(e=>{const{classes:t,variant:r,color:a,disableShrink:n}=e,o={root:["root",r,`color${(0,c.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(r)}`,n&&"circleDisableShrink"]};return(0,l.Z)(o,f,t)})(x),P={},C={},M={};if("determinate"===y){const e=2*Math.PI*((_-h)/2);P.strokeDasharray=e.toFixed(3),M["aria-valuenow"]=Math.round(b),P.strokeDashoffset=`${((100-b)/100*e).toFixed(3)}px`,C.transform="rotate(-90deg)"}return(0,p.jsx)(w,(0,n.Z)({className:(0,i.Z)(E.root,o),style:(0,n.Z)({width:d,height:d},C,g),ownerState:x,ref:t,role:"progressbar"},M,Z,{children:(0,p.jsx)(k,{className:E.svg,ownerState:x,viewBox:"22 22 44 44",children:(0,p.jsx)(S,{className:E.circle,style:P,ownerState:x,cx:_,cy:_,r:(_-h)/2,fill:"none",strokeWidth:h})})}))}))},9041:(e,t,r)=>{r.d(t,{Z:()=>F});var a=r(3366),n=r(7462),o=r(7294),i=r(6010),l=r(4780),s=r(917),c=r(1796),u=r(8216),m=r(2734),d=r(9602),f=r(6122),p=r(4867);function v(e){return(0,p.Z)("MuiLinearProgress",e)}(0,r(1588).Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var g=r(5893);const h=["className","color","value","valueBuffer","variant"];let b,y,Z,_,x,E,w=e=>e;const k=(0,s.F4)(b||(b=w`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),S=(0,s.F4)(y||(y=w`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),P=(0,s.F4)(Z||(Z=w`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),C=(e,t)=>"inherit"===t?"currentColor":"light"===e.palette.mode?(0,c.$n)(e.palette[t].main,.62):(0,c._j)(e.palette[t].main,.5),M=(0,d.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`color${(0,u.Z)(r.color)}`],t[r.variant]]}})((({ownerState:e,theme:t})=>(0,n.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:C(t,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"}))),N=(0,d.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.dashed,t[`dashedColor${(0,u.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>{const r=C(t,e.color);return(0,n.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,s.iv)(_||(_=w`
    animation: ${0} 3s infinite linear;
  `),P)),$=(0,d.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.bar,t[`barColor${(0,u.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&t.bar1Indeterminate,"determinate"===r.variant&&t.bar1Determinate,"buffer"===r.variant&&t.bar1Buffer]}})((({ownerState:e,theme:t})=>(0,n.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":t.palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,s.iv)(x||(x=w`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),k))),I=(0,d.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.bar,t[`barColor${(0,u.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&t.bar2Indeterminate,"buffer"===r.variant&&t.bar2Buffer]}})((({ownerState:e,theme:t})=>(0,n.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":t.palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:C(t,e.color),transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,s.iv)(E||(E=w`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),S))),F=o.forwardRef((function(e,t){const r=(0,f.Z)({props:e,name:"MuiLinearProgress"}),{className:o,color:s="primary",value:c,valueBuffer:d,variant:p="indeterminate"}=r,b=(0,a.Z)(r,h),y=(0,n.Z)({},r,{color:s,variant:p}),Z=(e=>{const{classes:t,variant:r,color:a}=e,n={root:["root",`color${(0,u.Z)(a)}`,r],dashed:["dashed",`dashedColor${(0,u.Z)(a)}`],bar1:["bar",`barColor${(0,u.Z)(a)}`,("indeterminate"===r||"query"===r)&&"bar1Indeterminate","determinate"===r&&"bar1Determinate","buffer"===r&&"bar1Buffer"],bar2:["bar","buffer"!==r&&`barColor${(0,u.Z)(a)}`,"buffer"===r&&`color${(0,u.Z)(a)}`,("indeterminate"===r||"query"===r)&&"bar2Indeterminate","buffer"===r&&"bar2Buffer"]};return(0,l.Z)(n,v,t)})(y),_=(0,m.Z)(),x={},E={bar1:{},bar2:{}};if("determinate"===p||"buffer"===p)if(void 0!==c){x["aria-valuenow"]=Math.round(c),x["aria-valuemin"]=0,x["aria-valuemax"]=100;let e=c-100;"rtl"===_.direction&&(e=-e),E.bar1.transform=`translateX(${e}%)`}else 0;if("buffer"===p)if(void 0!==d){let e=(d||0)-100;"rtl"===_.direction&&(e=-e),E.bar2.transform=`translateX(${e}%)`}else 0;return(0,g.jsxs)(M,(0,n.Z)({className:(0,i.Z)(Z.root,o),ownerState:y,role:"progressbar"},x,{ref:t},b,{children:["buffer"===p?(0,g.jsx)(N,{className:Z.dashed,ownerState:y}):null,(0,g.jsx)($,{className:Z.bar1,ownerState:y,style:E.bar1}),"determinate"===p?null:(0,g.jsx)(I,{className:Z.bar2,ownerState:y,style:E.bar2})]}))}))},6332:(e,t,r)=>{r.d(t,{G:()=>i});var a=r(7294),n=r(9062),o=r(2658),i=function(e){var t=e.calories,r=e.caloriesUsed,i=e.caloriesTotal;return a.createElement(a.Fragment,null,a.createElement("div",{className:"daily-goals-kcal"},a.createElement(n.Z,{variant:"determinate",size:200,value:t,thickness:1}),a.createElement("div",{className:"daily-goals-kcal-title"},a.createElement(o.Z,{variant:"body1",align:"center"},"Calories"),a.createElement(o.Z,{variant:"h6"},r," / ",i))))}},6021:(e,t,r)=>{r.d(t,{H:()=>i});var a=r(7294),n=r(9062),o=r(2658),i=function(e){var t=e.goals;return a.createElement(a.Fragment,null,a.createElement("div",{className:"daily-goals-kcal"},a.createElement(n.Z,{variant:"determinate",size:200,value:100,thickness:1}),a.createElement("div",{className:"daily-goals-kcal-title"},a.createElement(o.Z,{align:"center",variant:"body1"},"Total Calories"),a.createElement(o.Z,{align:"center",variant:"h6"},t.total_calories))))}},4200:(e,t,r)=>{r.d(t,{N:()=>u});var a=r(7294),n=r(6332),o=r(6021),i=r(4083),l=r(2658),s=r(6914),c=r(1898),u=function(e){var t,r,u,m=e.goals,d=e.nutritionSummary,f=e.page,p=e.setGoals,v=e.handleSubmitUpdatedGoals;return void 0!==d&&d.length&&(r=d[5].amount,u=m.total_calories,t=Math.floor(r/u*100)),a.createElement(a.Fragment,null,a.createElement("div",{className:"daily-goals"},"mealplan"===f?a.createElement(l.Z,{variant:"h6"},"Today's Macronutrient Totals"):a.createElement(l.Z,{variant:"h6"},"Your Daily Macronutrient Goals"),"mealplan"===f&&void 0!==d&&d.length?a.createElement(a.Fragment,null,a.createElement(n.G,{calories:t,caloriesTotal:m.total_calories,caloriesUsed:Math.floor(d[5].amount)}),a.createElement("div",{className:"daily-goals-items","data-testid":"mealplan-goal-items"},a.createElement(c.z,{type:"Carbohydrates",nutrientsInMealPlan:d[7].amount,nutrientsTotal:m.total_carbohydrates}),a.createElement(c.z,{nutrientsTotal:m.total_protein,type:"Protein",nutrientsInMealPlan:d[28].amount}),a.createElement(c.z,{nutrientsTotal:m.total_fat,type:"Fat",nutrientsInMealPlan:d[11].amount}))):null,"search"===f||"user-profile"===f||"mealplan"===f&&void 0!==m&&void 0!==d&&0===d.length?a.createElement(a.Fragment,null,a.createElement(o.H,{goals:m}),a.createElement("form",{onSubmit:v,className:"daily-goals-items"},a.createElement(i.Y,{goals:m,page:f,setGoals:p}),"user-profile"===f?a.createElement(s.Z,{variant:"contained",fullWidth:!0,type:"submit"},"Update Goals"):null)):null))}},1898:(e,t,r)=>{r.d(t,{z:()=>c});var a=r(5295),n=r(2643),o=r(6447),i=r(2658),l=r(9041),s=r(7294),c=function(e){var t,r=e.nutrientsTotal,c=e.type,u=e.nutrientsInMealPlan;return void 0!==u&&(t=Math.floor(u/r*100)),s.createElement(s.Fragment,null,s.createElement(a.Z,null,s.createElement(n.Z,{sx:{display:"flex",flexDirection:"column",minWidth:"240px",flexGrow:"0",gap:"1rem"}},s.createElement(o.Z,{direction:"row",gap:"1rem",alignItems:"space-between"},s.createElement(i.Z,{align:"center",variant:"body1"},c),s.createElement(i.Z,{align:"center",variant:"body1",sx:{marginLeft:"auto"}},Math.floor(u)," / ",r," g")),s.createElement(l.Z,{variant:"determinate",value:t}))))}},4083:(e,t,r)=>{r.d(t,{Y:()=>u});var a=r(7294),n=r(5295),o=r(2643),i=r(2658),l=r(3981),s=function(){return s=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)},c=function(e){var t=e.nutrientsTotal,r=e.type,c=e.page,u=e.setGoals,m=e.goals;return a.createElement(a.Fragment,null,a.createElement(n.Z,{sx:{borderRadius:"15%"}},a.createElement(o.Z,{sx:{display:"flex",flexDirection:"column",height:"10rem",width:"10rem",aligItems:"center",gap:"1rem",justifyContent:"center"}},a.createElement(i.Z,{className:"nutrient-type-text",align:"center",variant:"body1",component:"div"},r),"user-profile"===c?a.createElement(l.Z,{value:"".concat(t),type:"number",endAdornment:"g",fullWidth:!0,onInput:function(e){if(void 0!==u)if("Carbohydrates"===e.target.id){var t=parseInt(e.target.value),r=t<=15?0:t/3-5;u(s(s({},m),{total_carbohydrates:t,min_carbs_per_meal:Math.floor(r),max_carbs_per_meal:Math.floor(t/3+5)}))}else if("Protein"==e.target.id){var a=parseInt(e.target.value),n=a<=30?0:a/3-10;u(s(s({},m),{total_protein:a,min_protein_per_meal:Math.floor(n),max_protein_per_meal:Math.floor(a/3+10)}))}else if("Fat"===e.target.id){var o=parseInt(e.target.value),i=o<=30?0:o/3-10;u(s(s({},m),{total_fat:o,min_fat_per_meal:Math.floor(i),max_fat_per_meal:Math.floor(o/3+10)}))}},id:r,required:!0,inputProps:{style:{textAlign:"center"}}}):a.createElement(i.Z,{align:"center",variant:"h6"},t," g"),"Carbohydrates"===r&&a.createElement(i.Z,{align:"center",className:"range-text",variant:"subtitle2"},"Per meal: ",m.min_carbs_per_meal," -"," ",m.max_carbs_per_meal,"g"),"Protein"===r&&a.createElement(i.Z,{align:"center",className:"range-text",variant:"subtitle2"},"Per meal: ",m.min_protein_per_meal," -"," ",m.max_protein_per_meal,"g"),"Fat"===r&&a.createElement(i.Z,{align:"center",className:"range-text",variant:"subtitle2"},"Per meal: ",m.min_fat_per_meal," -"," ",m.max_fat_per_meal,"g"))))},u=function(e){var t=e.goals,r=e.page,n=e.setGoals;return a.createElement(a.Fragment,null,a.createElement(c,{type:"Carbohydrates",nutrientsTotal:t.total_carbohydrates,page:r,setGoals:n,goals:t}),a.createElement(c,{nutrientsTotal:t.total_protein,type:"Protein",page:r,setGoals:n,goals:t}),a.createElement(c,{nutrientsTotal:t.total_fat,type:"Fat",page:r,setGoals:n,goals:t}))}},41:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var a=r(7294),n=r(4200),o=r(7485),i=r(6447),l=r(2658),s=r(9669),c=r.n(s),u=r(1703),m=r(1566),d=r(4229),f=function(){return f=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},f.apply(this,arguments)},p=function(e,t,r,a){return new(r||(r=Promise))((function(n,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function l(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}s((a=a.apply(e,t||[])).next())}))},v=function(e,t){var r,a,n,o,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){i.label=o[1];break}if(6===o[0]&&i.label<n[1]){i.label=n[1],n=o;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(o);break}n[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};const g=function(){var e=(0,m.useAuth)(),t=e.isLoading,r=(e.isLoggedIn,e.username),s=(0,a.useState)(!1),g=s[0],h=s[1],b=(0,a.useState)("error"),y=b[0],Z=b[1],_=(0,a.useState)(""),x=_[0],E=_[1],w=(0,a.useState)({}),k=w[0],S=w[1];(0,a.useEffect)((function(){c().get("/api/metrics").then((function(e){S(e.data)})).catch((function(e){E("Could not retrieve your daily goals. Please try again later."),Z("error"),h(!0)}))}),[]);return t?null:a.createElement(a.Fragment,null,a.createElement(u.Z,{isSettingsPage:!0}),a.createElement("div",{className:"user-profile-page"},a.createElement(i.Z,{direction:"row",spacing:1,sx:{paddingBottom:"1rem"}},a.createElement(d.Z,null),a.createElement(l.Z,{variant:"body1",align:"center"},"Welcome to your account, ",r,"! Edit your macronutrient goals to a custom amount (calories will be calculated based on your input).")),a.createElement(n.N,{goals:k,page:"user-profile",setGoals:S,handleSubmitUpdatedGoals:function(e){return p(void 0,void 0,void 0,(function(){var t,r,a;return v(this,(function(n){switch(n.label){case 0:e.preventDefault(),n.label=1;case 1:return n.trys.push([1,3,,4]),t=Math.floor(4*k.total_carbohydrates+4*k.total_protein+9*k.total_fat),r=t<=450?0:t/3-150,a=f(f({},k),{total_calories:t,min_calories_per_meal:Math.floor(r),max_calories_per_meal:Math.floor(t/3+150)}),S(a),[4,c().put("/api/metrics",a)];case 2:return 201===n.sent().status&&(E("Your Macronutrient goals have been updated!"),Z("success"),h(!0)),[3,4];case 3:return n.sent(),E("Could not update goals. Please try again."),Z("error"),h(!0),[3,4];case 4:return[2]}}))}))}}),a.createElement(o.I,{openAlert:g,handleAlert:function(){h(!g)},alertSeverity:y,alertMessage:x})))}}}]);