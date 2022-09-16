"use strict";(self.webpackChunkthe_diabetes_calculator=self.webpackChunkthe_diabetes_calculator||[]).push([[139],{2761:(e,t,a)=>{var n=a(5318);t.Z=void 0;var r=n(a(4938)),l=a(5893),i=(0,r.default)((0,l.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=i},270:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(3366),r=a(7462),l=a(7294),i=a(6010),o=a(4780),s=a(8216),c=a(2658),m=a(7167),u=a(4423),d=a(9602),p=a(5677);function v(e){return(0,p.Z)("MuiInputAdornment",e)}const h=(0,a(1588).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var g,E=a(6122),Z=a(5893);const f=["children","className","component","disablePointerEvents","disableTypography","position","variant"],y=(0,d.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`position${(0,s.Z)(a.position)}`],!0===a.disablePointerEvents&&t.disablePointerEvents,t[a.variant]]}})((({theme:e,ownerState:t})=>(0,r.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===t.variant&&{[`&.${h.positionStart}&:not(.${h.hiddenLabel})`]:{marginTop:16}},"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"}))),b=l.forwardRef((function(e,t){const a=(0,E.Z)({props:e,name:"MuiInputAdornment"}),{children:d,className:p,component:h="div",disablePointerEvents:b=!1,disableTypography:x=!1,position:_,variant:C}=a,P=(0,n.Z)(a,f),I=(0,u.Z)()||{};let M=C;C&&I.variant,I&&!M&&(M=I.variant);const S=(0,r.Z)({},a,{hiddenLabel:I.hiddenLabel,size:I.size,disablePointerEvents:b,position:_,variant:M}),k=(e=>{const{classes:t,disablePointerEvents:a,hiddenLabel:n,position:r,size:l,variant:i}=e,c={root:["root",a&&"disablePointerEvents",r&&`position${(0,s.Z)(r)}`,i,n&&"hiddenLabel",l&&`size${(0,s.Z)(l)}`]};return(0,o.Z)(c,v,t)})(S);return(0,Z.jsx)(m.Z.Provider,{value:null,children:(0,Z.jsx)(y,(0,r.Z)({as:h,ownerState:S,className:(0,i.Z)(k.root,p),ref:t},P,{children:"string"!=typeof d||x?(0,Z.jsxs)(l.Fragment,{children:["start"===_?g||(g=(0,Z.jsx)("span",{className:"notranslate",children:"​"})):null,d]}):(0,Z.jsx)(c.Z,{color:"text.secondary",children:d})}))})}))},6332:(e,t,a)=>{a.d(t,{G:()=>i});var n=a(7294),r=a(9062),l=a(2658),i=function(e){var t=e.calories,a=e.caloriesUsed,i=e.caloriesTotal;return n.createElement(n.Fragment,null,n.createElement("div",{className:"daily-goals-kcal"},n.createElement(r.Z,{variant:"determinate",size:200,value:t,thickness:1,color:"secondary"}),n.createElement("div",{className:"daily-goals-kcal-title"},n.createElement(l.Z,{variant:"body1",align:"center"},"Calories"),n.createElement(l.Z,{variant:"h6"},a," / ",i))))}},6021:(e,t,a)=>{a.d(t,{H:()=>i});var n=a(7294),r=a(9062),l=a(2658),i=function(e){var t=e.goals;return n.createElement(n.Fragment,null,n.createElement("div",{className:"daily-goals-kcal"},n.createElement(r.Z,{variant:"determinate",size:200,value:100,thickness:1,color:"secondary"}),n.createElement("div",{className:"daily-goals-kcal-title"},n.createElement(l.Z,{align:"center",variant:"body1"},"Total Calories"),n.createElement(l.Z,{align:"center",variant:"h6"},t.total_calories))))}},1898:(e,t,a)=>{a.d(t,{z:()=>c});var n=a(5295),r=a(2643),l=a(6447),i=a(2658),o=a(9041),s=a(7294),c=function(e){var t,a=e.nutrientsTotal,c=e.type,m=e.nutrientsInMealPlan;return void 0!==m&&(t=Math.floor(m/a*100)),s.createElement(s.Fragment,null,s.createElement(n.Z,null,s.createElement(r.Z,{sx:{display:"flex",flexDirection:"column",minWidth:"240px",flexGrow:"0",gap:"1rem"}},s.createElement(l.Z,{direction:"row",gap:"1rem",alignItems:"space-between"},s.createElement(i.Z,{align:"center",variant:"body1"},c),s.createElement(i.Z,{align:"center",variant:"body1",sx:{marginLeft:"auto"}},Math.floor(m)," / ",a," g")),s.createElement(o.Z,{variant:"determinate",value:t}))))}},4083:(e,t,a)=>{a.d(t,{Y:()=>u});var n=a(7294),r=a(2526),l=a(5295),i=a(2643),o=a(2658),s=a(3981),c=function(){return c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)},m=function(e){var t=e.nutrientsTotal,a=e.type,m=e.page,u=e.setGoals,d=e.goals,p=(0,r.R)("mode","dark");p[0],p[1];return n.createElement(n.Fragment,null,n.createElement(l.Z,{sx:{borderRadius:"15%"},elevation:5},n.createElement(i.Z,{sx:{display:"flex",flexDirection:"column",height:"10rem",width:"10rem",aligItems:"center",gap:"1rem",justifyContent:"center"}},n.createElement(o.Z,{className:"nutrient-type-text",align:"center",variant:"body1",component:"div"},a),"user-profile"===m?n.createElement(s.Z,{value:"".concat(t),type:"number",endAdornment:"g",fullWidth:!0,onInput:function(e){if(void 0!==u)if("Carbohydrates"===e.target.id){var t=parseInt(e.target.value),a=t<=15?0:t/3-5;u(c(c({},d),{total_carbohydrates:t,min_carbs_per_meal:Math.floor(a),max_carbs_per_meal:Math.floor(t/3+5)}))}else if("Protein"==e.target.id){var n=parseInt(e.target.value),r=n<=30?0:n/3-10;u(c(c({},d),{total_protein:n,min_protein_per_meal:Math.floor(r),max_protein_per_meal:Math.floor(n/3+10)}))}else if("Fat"===e.target.id){var l=parseInt(e.target.value),i=l<=30?0:l/3-10;u(c(c({},d),{total_fat:l,min_fat_per_meal:Math.floor(i),max_fat_per_meal:Math.floor(l/3+10)}))}},id:a,required:!0,inputProps:{style:{textAlign:"center"}}}):n.createElement(o.Z,{align:"center",variant:"h6"},t," g"),"Carbohydrates"===a&&n.createElement(o.Z,{align:"center",className:"range-text",variant:"subtitle2"},"Per meal: ",d.min_carbs_per_meal," -"," ",d.max_carbs_per_meal,"g"),"Protein"===a&&n.createElement(o.Z,{align:"center",className:"range-text",variant:"subtitle2"},"Per meal: ",d.min_protein_per_meal," -"," ",d.max_protein_per_meal,"g"),"Fat"===a&&n.createElement(o.Z,{align:"center",className:"range-text",variant:"subtitle2"},"Per meal: ",d.min_fat_per_meal," -"," ",d.max_fat_per_meal,"g"))))},u=function(e){var t=e.goals,a=e.page,r=e.setGoals;return n.createElement(n.Fragment,null,n.createElement(m,{type:"Carbohydrates",nutrientsTotal:t.total_carbohydrates,page:a,setGoals:r,goals:t}),n.createElement(m,{nutrientsTotal:t.total_protein,type:"Protein",page:a,setGoals:r,goals:t}),n.createElement(m,{nutrientsTotal:t.total_fat,type:"Fat",page:a,setGoals:r,goals:t}))}},4815:(e,t,a)=>{a.d(t,{U:()=>u});var n=a(7294),r=a(6447),l=a(2658),i=a(6914),o=a(4825),s=a(8869),c=a(111),m=a(4735),u=function(e){var t=e.route,a=e.values,u=e.handleSubmit,d=e.handleRouteChange,p=e.handleInputChange,v=e.handleTypeSelect;return n.createElement(n.Fragment,null,n.createElement("form",{onSubmit:u},n.createElement(r.Z,{spacing:3},n.createElement(s.M,{route:t,handleRouteChange:d}),n.createElement(c.v,{query:a.query,handleInputChange:p}),n.createElement(m.l,{type:a.type,handleTypeSelect:v}),n.createElement(l.Z,{variant:"h6"},"Choose Calorie Range"),n.createElement(o.N,{handleInputChange:p,measurement:"kcal",nutrient:"Calories",minValue:a.minCalories,maxValue:a.maxCalories}),n.createElement(l.Z,{variant:"h6"},"Choose Carb Range"),n.createElement(o.N,{handleInputChange:p,measurement:"g",nutrient:"Carbs",minValue:a.minCarbs,maxValue:a.maxCarbs}),n.createElement(l.Z,{variant:"h6"},"Choose Protein Range"),n.createElement(o.N,{handleInputChange:p,measurement:"g",nutrient:"Protein",minValue:a.minProtein,maxValue:a.maxProtein}),n.createElement(l.Z,{variant:"h6"},"Choose Fat Range"),n.createElement(o.N,{handleInputChange:p,measurement:"g",nutrient:"Fat",minValue:a.minFat,maxValue:a.maxFat}),n.createElement(i.Z,{type:"submit",variant:"contained"},"Submit"))))}},4825:(e,t,a)=>{a.d(t,{N:()=>c});var n=a(7294),r=a(6447),l=a(6446),i=a(3981),o=a(270),s=a(3460),c=function(e){var t=e.handleInputChange,a=e.measurement,c=e.nutrient,m=e.minValue,u=e.maxValue;return n.createElement(n.Fragment,null,n.createElement(r.Z,{direction:"row"},n.createElement(l.Z,{fullWidth:!0,variant:"standard",sx:{m:1,mt:3}},n.createElement(i.Z,{id:"min".concat(c),type:"number",required:!0,"data-testid":"textfield-min-nutrient",value:m,onChange:t,endAdornment:n.createElement(o.Z,{position:"end"},a),inputProps:{"aria-label":"Minimum ".concat(c)}}),n.createElement(s.Z,null,"Minimum ".concat(c))),n.createElement(l.Z,{fullWidth:!0,variant:"standard",sx:{m:1,mt:3}},n.createElement(i.Z,{id:"max".concat(c),"data-testid":"textfield-max-nutrient",type:"number",required:!0,value:u,onChange:t,endAdornment:n.createElement(o.Z,{position:"end"},a),inputProps:{"aria-label":"Maximum ".concat(c)}}),n.createElement(s.Z,null,"Maximum ".concat(c)))))}},111:(e,t,a)=>{a.d(t,{v:()=>o});var n=a(7294),r=a(4659),l=a(270),i=a(2761),o=function(e){var t=e.query,a=e.handleInputChange;return n.createElement(r.Z,{id:"query",required:!0,"data-testid":"query-text-field",InputProps:{startAdornment:n.createElement(l.Z,{position:"start"},n.createElement(i.Z,null))},label:"Item",helperText:"Enter an ingredient or item you want your search to contain (i.e. chicken, greek yogurt, etc.)",value:t,onChange:a})}},8869:(e,t,a)=>{a.d(t,{M:()=>c});var n=a(7294),r=a(6446),l=a(7666),i=a(7920),o=a(4347),s=a(3460),c=function(e){var t=e.route,a=e.handleRouteChange;return n.createElement(r.Z,null,n.createElement(l.Z,null,"Search"),n.createElement(i.Z,{value:t,onChange:a,label:"Search",required:!0,"data-testid":"select-search-input"},n.createElement(o.Z,{value:"recipes"},"Recipes"),n.createElement(o.Z,{value:"groceryProducts"},"Grocery Products"),n.createElement(o.Z,{value:"menuItems"},"Menu items")),n.createElement(s.Z,null,"Choose the type of item you are searching for."))}},4735:(e,t,a)=>{a.d(t,{l:()=>c});var n=a(7294),r=a(6446),l=a(7666),i=a(7920),o=a(4347),s=a(3460),c=function(e){var t=e.type,a=e.handleTypeSelect;return n.createElement(r.Z,null,n.createElement(l.Z,null,"Type"),n.createElement(i.Z,{value:t,onChange:a,label:"Type",required:!0,id:"type","data-testid":"select-type-dropdown"},n.createElement(o.Z,{value:"maincourse"},"Main Course"),n.createElement(o.Z,{value:"sidedish"},"Side Dish"),n.createElement(o.Z,{value:"dessert"},"Dessert"),n.createElement(o.Z,{value:"appetizer"},"Appetizer"),n.createElement(o.Z,{value:"salad"},"Salad"),n.createElement(o.Z,{value:"bread"},"Bread"),n.createElement(o.Z,{value:"breakfast"},"Breakfast"),n.createElement(o.Z,{value:"soup"},"Soup"),n.createElement(o.Z,{value:"beverage"},"Beverage"),n.createElement(o.Z,{value:"sauce"},"Sauce"),n.createElement(o.Z,{value:"marinade"},"Marinade"),n.createElement(o.Z,{value:"fingerfood"},"Fingerfood"),n.createElement(o.Z,{value:"snack"},"Snack"),n.createElement(o.Z,{value:"drink"},"Drink")),n.createElement(s.Z,null,"Choose the type of item you are searching for."))}}}]);