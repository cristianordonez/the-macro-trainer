"use strict";(self.webpackChunkthe_diabetes_calculator=self.webpackChunkthe_diabetes_calculator||[]).push([[889],{3379:(e,t,a)=>{var n=a(5318);t.Z=void 0;var r=n(a(4938)),l=a(5893),o=(0,r.default)((0,l.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");t.Z=o},2761:(e,t,a)=>{var n=a(5318);t.Z=void 0;var r=n(a(4938)),l=a(5893),o=(0,r.default)((0,l.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=o},270:(e,t,a)=>{a.d(t,{Z:()=>Z});var n=a(3366),r=a(7462),l=a(7294),o=a(6010),i=a(4780),s=a(8216),c=a(2658),m=a(7167),u=a(4423),d=a(9602),p=a(5677);function h(e){return(0,p.Z)("MuiInputAdornment",e)}const v=(0,a(1588).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var g,E=a(6122),f=a(5893);const y=["children","className","component","disablePointerEvents","disableTypography","position","variant"],b=(0,d.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`position${(0,s.Z)(a.position)}`],!0===a.disablePointerEvents&&t.disablePointerEvents,t[a.variant]]}})((({theme:e,ownerState:t})=>(0,r.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===t.variant&&{[`&.${v.positionStart}&:not(.${v.hiddenLabel})`]:{marginTop:16}},"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"}))),Z=l.forwardRef((function(e,t){const a=(0,E.Z)({props:e,name:"MuiInputAdornment"}),{children:d,className:p,component:v="div",disablePointerEvents:Z=!1,disableTypography:_=!1,position:x,variant:M}=a,S=(0,n.Z)(a,y),C=(0,u.Z)()||{};let w=M;M&&C.variant,C&&!w&&(w=C.variant);const I=(0,r.Z)({},a,{hiddenLabel:C.hiddenLabel,size:C.size,disablePointerEvents:Z,position:x,variant:w}),P=(e=>{const{classes:t,disablePointerEvents:a,hiddenLabel:n,position:r,size:l,variant:o}=e,c={root:["root",a&&"disablePointerEvents",r&&`position${(0,s.Z)(r)}`,o,n&&"hiddenLabel",l&&`size${(0,s.Z)(l)}`]};return(0,i.Z)(c,h,t)})(I);return(0,f.jsx)(m.Z.Provider,{value:null,children:(0,f.jsx)(b,(0,r.Z)({as:v,ownerState:I,className:(0,o.Z)(P.root,p),ref:t},S,{children:"string"!=typeof d||_?(0,f.jsxs)(l.Fragment,{children:["start"===x?g||(g=(0,f.jsx)("span",{className:"notranslate",children:"​"})):null,d]}):(0,f.jsx)(c.Z,{color:"text.secondary",children:d})}))})}))},6332:(e,t,a)=>{a.d(t,{G:()=>o});var n=a(7294),r=a(9062),l=a(2658),o=function(e){var t=e.calories,a=e.caloriesUsed,o=e.caloriesTotal;return n.createElement(n.Fragment,null,n.createElement("div",{className:"daily-goals-kcal"},n.createElement(r.Z,{variant:"determinate",size:200,value:t,thickness:1,color:"secondary"}),n.createElement("div",{className:"daily-goals-kcal-title"},n.createElement(l.Z,{variant:"body1",align:"center"},"Calories"),n.createElement(l.Z,{variant:"h6"},a," / ",o))))}},6021:(e,t,a)=>{a.d(t,{H:()=>o});var n=a(7294),r=a(9062),l=a(2658),o=function(e){var t=e.goals;return n.createElement(n.Fragment,null,n.createElement("div",{className:"daily-goals-kcal"},n.createElement(r.Z,{variant:"determinate",size:200,value:100,thickness:1,color:"secondary"}),n.createElement("div",{className:"daily-goals-kcal-title"},n.createElement(l.Z,{align:"center",variant:"body1"},"Total Calories"),n.createElement(l.Z,{align:"center",variant:"h6"},t.total_calories))))}},8801:(e,t,a)=>{a.d(t,{h:()=>v});var n=a(7294),r=a(6501),l=a(5295),o=a(4563),i=a(6867),s=a(4962),c=a(2643),m=a(2658),u=a(6447),d=a(9161),p=a(6914),h=a(3343),v=function(e){var t,a,v,g,E=e.route,f=e.image,y=e.title,b=e.restaurantChain,Z=e.nutrition,_=e.url,x=e.handleOpeningDialog,M=e.isMealPlanItem,S=e.servings;return void 0!==Z&&"recipes"===E||"RECIPE"===E?Z.nutrients.forEach((function(e){"Calories"===e.name?t=Math.floor(Z.nutrients[0].amount):"Protein"===e.name?g=Math.floor(Z.nutrients[1].amount)+"g":"Fat"===e.name?v=Math.floor(Z.nutrients[1].amount):"Carbohydrates"===e.name&&(a=Math.floor(Z.nutrients[3].amount)+"g")})):void 0!==Z&&(t=Z.calories,g=Z.protein,v=Z.fat,a=Z.carbs),n.createElement(r.Z,{elevation:1,className:"food-search-paper"},n.createElement(l.Z,{className:"search-item","data-testid":"food-search-item"},M&&void 0!==x?n.createElement(o.Z,{title:"Delete from Mealplan"},n.createElement(i.Z,{sx:{position:"absolute",alignSelf:"flex-end"},size:"small",color:"error","aria-label":"delete from mealplan",onClick:x},n.createElement(h.Z,null))):null,n.createElement(s.Z,{component:"img",alt:"food item image",height:"160",image:f}),n.createElement(c.Z,null,n.createElement(m.Z,{align:"center",noWrap:!0,variant:"subtitle1"},y),M&&void 0!==S?n.createElement(u.Z,{direction:"row"},n.createElement(m.Z,{variant:"subtitle2"},"Servings: ",S)):null,"menuItems"===E||"MENU_ITEM"===E?n.createElement(m.Z,{variant:"subtitle2"},b):null,void 0!==Z?n.createElement("div",{className:"search-item-nutrition"},n.createElement("div",{className:"search-item-nutrient"},n.createElement(m.Z,{variant:"subtitle2"},n.createElement("strong",null,"Calories")),n.createElement(m.Z,{variant:"body1"},t)),n.createElement("div",{className:"search-item-nutrient"},n.createElement(m.Z,{variant:"subtitle2"},n.createElement("strong",null,"Carbs")),n.createElement(m.Z,{variant:"body1"},a)),n.createElement("div",{className:"search-item-nutrient"},n.createElement(m.Z,{variant:"subtitle2"},n.createElement("strong",null,"Protein")),n.createElement(m.Z,{variant:"body1"},g)),n.createElement("div",{className:"search-item-nutrient"},n.createElement(m.Z,{variant:"subtitle2"},n.createElement("strong",null,"Fat")),n.createElement(m.Z,{variant:"body1"},v))):null),n.createElement(d.Z,{sx:{display:"flex"}},void 0!==_?n.createElement(p.Z,{fullWidth:!0,component:"a",href:_,target:"_blank",className:"card-button",variant:"outlined",color:"secondary",size:"small"},"View Recipe"):null,M?null:n.createElement(p.Z,{fullWidth:!0,className:"card-button",onClick:x,variant:"outlined",size:"small","data-testid":"open-addtomealplan-dialog"},"Add to Mealplan"))))}},1898:(e,t,a)=>{a.d(t,{z:()=>c});var n=a(5295),r=a(2643),l=a(6447),o=a(2658),i=a(9041),s=a(7294),c=function(e){var t,a=e.nutrientsTotal,c=e.type,m=e.nutrientsInMealPlan;return void 0!==m&&(t=Math.floor(m/a*100)),s.createElement(s.Fragment,null,s.createElement(n.Z,null,s.createElement(r.Z,{sx:{display:"flex",flexDirection:"column",minWidth:"240px",flexGrow:"0",gap:"1rem"}},s.createElement(l.Z,{direction:"row",gap:"1rem",alignItems:"space-between"},s.createElement(o.Z,{align:"center",variant:"body1"},c),s.createElement(o.Z,{align:"center",variant:"body1",sx:{marginLeft:"auto"}},Math.floor(m)," / ",a," g")),s.createElement(i.Z,{variant:"determinate",value:t}))))}},4083:(e,t,a)=>{a.d(t,{Y:()=>u});var n=a(7294),r=a(2526),l=a(5295),o=a(2643),i=a(2658),s=a(3981),c=function(){return c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)},m=function(e){var t=e.nutrientsTotal,a=e.type,m=e.page,u=e.setGoals,d=e.goals,p=(0,r.R)("mode","dark");p[0],p[1];return n.createElement(n.Fragment,null,n.createElement(l.Z,{sx:{borderRadius:"15%"},elevation:5},n.createElement(o.Z,{sx:{display:"flex",flexDirection:"column",height:"10rem",width:"10rem",aligItems:"center",gap:"1rem",justifyContent:"center"}},n.createElement(i.Z,{className:"nutrient-type-text",align:"center",variant:"body1",component:"div"},a),"user-profile"===m?n.createElement(s.Z,{value:"".concat(t),type:"number",endAdornment:"g",fullWidth:!0,onInput:function(e){if(void 0!==u)if("Carbohydrates"===e.target.id){var t=parseInt(e.target.value),a=t<=15?0:t/3-5;u(c(c({},d),{total_carbohydrates:t,min_carbs_per_meal:Math.floor(a),max_carbs_per_meal:Math.floor(t/3+5)}))}else if("Protein"==e.target.id){var n=parseInt(e.target.value),r=n<=30?0:n/3-10;u(c(c({},d),{total_protein:n,min_protein_per_meal:Math.floor(r),max_protein_per_meal:Math.floor(n/3+10)}))}else if("Fat"===e.target.id){var l=parseInt(e.target.value),o=l<=30?0:l/3-10;u(c(c({},d),{total_fat:l,min_fat_per_meal:Math.floor(o),max_fat_per_meal:Math.floor(l/3+10)}))}},id:a,required:!0,inputProps:{style:{textAlign:"center"}}}):n.createElement(i.Z,{align:"center",variant:"h6"},t," g"),"Carbohydrates"===a&&n.createElement(i.Z,{align:"center",className:"range-text",variant:"subtitle2"},"Per meal: ",d.min_carbs_per_meal," -"," ",d.max_carbs_per_meal,"g"),"Protein"===a&&n.createElement(i.Z,{align:"center",className:"range-text",variant:"subtitle2"},"Per meal: ",d.min_protein_per_meal," -"," ",d.max_protein_per_meal,"g"),"Fat"===a&&n.createElement(i.Z,{align:"center",className:"range-text",variant:"subtitle2"},"Per meal: ",d.min_fat_per_meal," -"," ",d.max_fat_per_meal,"g"))))},u=function(e){var t=e.goals,a=e.page,r=e.setGoals;return n.createElement(n.Fragment,null,n.createElement(m,{type:"Carbohydrates",nutrientsTotal:t.total_carbohydrates,page:a,setGoals:r,goals:t}),n.createElement(m,{nutrientsTotal:t.total_protein,type:"Protein",page:a,setGoals:r,goals:t}),n.createElement(m,{nutrientsTotal:t.total_fat,type:"Fat",page:a,setGoals:r,goals:t}))}},7204:(e,t,a)=>{a.d(t,{b:()=>c});var n=a(7294),r=a(6501),l=a(584),o=a(8779),i=a(7090),s=a(2658),c=function(e){var t=e.currentDay,a=(0,o.Z)((0,l.Z)(new Date(t)),"MMMM dd, yyyy"),c=(0,o.Z)((0,i.Z)(new Date(t)),"MMMM dd, yyyy");return n.createElement(n.Fragment,null,n.createElement(r.Z,{className:"mealplan-week-text",color:"secondary"},n.createElement(s.Z,{variant:"body1"},"Viewing Week:"),n.createElement(s.Z,{variant:"body1"},a),n.createElement(s.Z,{variant:"body1"},"-"),n.createElement(s.Z,{variant:"body1"},c)))}},4815:(e,t,a)=>{a.d(t,{U:()=>u});var n=a(7294),r=a(6447),l=a(2658),o=a(6914),i=a(4825),s=a(8869),c=a(111),m=a(4735),u=function(e){var t=e.route,a=e.values,u=e.handleSubmit,d=e.handleRouteChange,p=e.handleInputChange,h=e.handleTypeSelect;return n.createElement(n.Fragment,null,n.createElement("form",{onSubmit:u},n.createElement(r.Z,{spacing:3},n.createElement(s.M,{route:t,handleRouteChange:d}),n.createElement(c.v,{query:a.query,handleInputChange:p}),n.createElement(m.l,{type:a.type,handleTypeSelect:h}),n.createElement(l.Z,{variant:"h6"},"Choose Calorie Range"),n.createElement(i.N,{handleInputChange:p,measurement:"kcal",nutrient:"Calories",minValue:a.minCalories,maxValue:a.maxCalories}),n.createElement(l.Z,{variant:"h6"},"Choose Carb Range"),n.createElement(i.N,{handleInputChange:p,measurement:"g",nutrient:"Carbs",minValue:a.minCarbs,maxValue:a.maxCarbs}),n.createElement(l.Z,{variant:"h6"},"Choose Protein Range"),n.createElement(i.N,{handleInputChange:p,measurement:"g",nutrient:"Protein",minValue:a.minProtein,maxValue:a.maxProtein}),n.createElement(l.Z,{variant:"h6"},"Choose Fat Range"),n.createElement(i.N,{handleInputChange:p,measurement:"g",nutrient:"Fat",minValue:a.minFat,maxValue:a.maxFat}),n.createElement(o.Z,{type:"submit",variant:"contained"},"Submit"))))}},4825:(e,t,a)=>{a.d(t,{N:()=>c});var n=a(7294),r=a(6447),l=a(6446),o=a(3981),i=a(270),s=a(3460),c=function(e){var t=e.handleInputChange,a=e.measurement,c=e.nutrient,m=e.minValue,u=e.maxValue;return n.createElement(n.Fragment,null,n.createElement(r.Z,{direction:"row"},n.createElement(l.Z,{fullWidth:!0,variant:"standard",sx:{m:1,mt:3}},n.createElement(o.Z,{id:"min".concat(c),type:"number",required:!0,"data-testid":"textfield-min-nutrient",value:m,onChange:t,endAdornment:n.createElement(i.Z,{position:"end"},a),inputProps:{"aria-label":"Minimum ".concat(c)}}),n.createElement(s.Z,null,"Minimum ".concat(c))),n.createElement(l.Z,{fullWidth:!0,variant:"standard",sx:{m:1,mt:3}},n.createElement(o.Z,{id:"max".concat(c),"data-testid":"textfield-max-nutrient",type:"number",required:!0,value:u,onChange:t,endAdornment:n.createElement(i.Z,{position:"end"},a),inputProps:{"aria-label":"Maximum ".concat(c)}}),n.createElement(s.Z,null,"Maximum ".concat(c)))))}},111:(e,t,a)=>{a.d(t,{v:()=>i});var n=a(7294),r=a(4659),l=a(270),o=a(2761),i=function(e){var t=e.query,a=e.handleInputChange;return n.createElement(r.Z,{id:"query",required:!0,"data-testid":"query-text-field",InputProps:{startAdornment:n.createElement(l.Z,{position:"start"},n.createElement(o.Z,null))},label:"Item",helperText:"Enter an ingredient or item you want your search to contain (i.e. chicken, greek yogurt, etc.)",value:t,onChange:a})}},8869:(e,t,a)=>{a.d(t,{M:()=>c});var n=a(7294),r=a(6446),l=a(7666),o=a(7920),i=a(4347),s=a(3460),c=function(e){var t=e.route,a=e.handleRouteChange;return n.createElement(r.Z,null,n.createElement(l.Z,null,"Search"),n.createElement(o.Z,{value:t,onChange:a,label:"Search",required:!0,"data-testid":"select-search-input"},n.createElement(i.Z,{value:"recipes"},"Recipes"),n.createElement(i.Z,{value:"groceryProducts"},"Grocery Products"),n.createElement(i.Z,{value:"menuItems"},"Menu items")),n.createElement(s.Z,null,"Choose the type of item you are searching for."))}},4735:(e,t,a)=>{a.d(t,{l:()=>c});var n=a(7294),r=a(6446),l=a(7666),o=a(7920),i=a(4347),s=a(3460),c=function(e){var t=e.type,a=e.handleTypeSelect;return n.createElement(r.Z,null,n.createElement(l.Z,null,"Type"),n.createElement(o.Z,{value:t,onChange:a,label:"Type",required:!0,id:"type","data-testid":"select-type-dropdown"},n.createElement(i.Z,{value:"maincourse"},"Main Course"),n.createElement(i.Z,{value:"sidedish"},"Side Dish"),n.createElement(i.Z,{value:"dessert"},"Dessert"),n.createElement(i.Z,{value:"appetizer"},"Appetizer"),n.createElement(i.Z,{value:"salad"},"Salad"),n.createElement(i.Z,{value:"bread"},"Bread"),n.createElement(i.Z,{value:"breakfast"},"Breakfast"),n.createElement(i.Z,{value:"soup"},"Soup"),n.createElement(i.Z,{value:"beverage"},"Beverage"),n.createElement(i.Z,{value:"sauce"},"Sauce"),n.createElement(i.Z,{value:"marinade"},"Marinade"),n.createElement(i.Z,{value:"fingerfood"},"Fingerfood"),n.createElement(i.Z,{value:"snack"},"Snack"),n.createElement(i.Z,{value:"drink"},"Drink")),n.createElement(s.Z,null,"Choose the type of item you are searching for."))}},8889:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var n=a(3379),r=a(4563),l=a(4386),o=a(6867),i=a(9669),s=a.n(i),c=a(7294),m=a(6974),u=a(7485),d=a(5165),p=a(6521),h=a(724),v=a(7049),g=a(9226),E=a(727),f=a(4815),y=a(6021),b=a(4083),Z=a(2658),_=function(e){var t=e.goals;return c.createElement(c.Fragment,null,c.createElement(c.Fragment,null,c.createElement(Z.Z,{variant:"h4",component:"h1",align:"center"},"Recommended Daily Goals"),c.createElement(y.H,{goals:t}),c.createElement("div",{className:"goal-card-items"},c.createElement(b.Y,{goals:t,page:"mealplan"}))))},x=a(6447),M=a(1898),S=a(6332),C=function(e){var t=e.nutritionSummary,a=e.goals,n=Math.floor(t.calories/a.total_calories*100);return c.createElement(c.Fragment,null,c.createElement(Z.Z,{variant:"h4",component:"h1",align:"center"},"Today's Goals"),c.createElement(S.G,{calories:n,caloriesUsed:Math.floor(t.calories),caloriesTotal:a.total_calories}),c.createElement(x.Z,{direction:"column",spacing:2,sx:{p:"1rem"}},c.createElement(M.z,{nutrientsTotal:a.total_carbohydrates,type:"Carbohydrates",nutrientsInMealPlan:t.carbohydrates}),c.createElement(M.z,{nutrientsTotal:a.total_protein,type:"Protein",nutrientsInMealPlan:t.protein}),c.createElement(M.z,{nutrientsTotal:a.total_fat,type:"Fat",nutrientsInMealPlan:t.fat}),c.createElement(Z.Z,{variant:"caption",align:"center",sx:{pt:"5rem"}},"Note: goals and mealplan items are generated randomly. Please log in or create an account to search and save items to your meal plan.")))},w="350px",I=function(e){var t=e.mobileOpen,a=e.handleDrawerToggle,n=e.route,r=e.values,i=e.handleSearch,s=e.handleRouteChange,u=e.handleInputChange,d=e.handleTypeSelect,p=e.goals,y=e.nutritionSummary,b=e.view;(0,m.TH)();return c.createElement(c.Fragment,null,c.createElement(v.ZP,{variant:"temporary",open:t,onClose:a,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:w,pt:"1rem",pl:"1rem",pr:"1rem"}}},c.createElement(l.Z,null,c.createElement(o.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:a,sx:{mr:2,display:{sm:"none"}}},c.createElement(h.Z,null))),"search"===b?c.createElement(f.U,{route:n,values:r,handleSubmit:i,handleRouteChange:s,handleInputChange:u,handleTypeSelect:d}):null,"mealplan"===b?c.createElement(C,{goals:p,nutritionSummary:y}):null,"calculator"===b?c.createElement(_,{goals:p}):null),c.createElement(v.ZP,{open:!0,variant:"permanent",ModalProps:{keepMounted:!0},sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:w,pt:"1rem",pl:"1rem",pr:"1rem"}}},c.createElement(E.F,null),c.createElement(g.Z,{sx:{pt:"1rem"}},"search"===b?c.createElement(f.U,{route:n,values:r,handleSubmit:i,handleRouteChange:s,handleInputChange:u,handleTypeSelect:d}):null,"mealplan"===b?c.createElement(C,{goals:p,nutritionSummary:y}):null,"calculator"===b?c.createElement(_,{goals:p}):null)))},P=function(){return P=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},P.apply(this,arguments)},N=function(e,t,a,n){return new(a||(a=Promise))((function(r,l){function o(e){try{s(n.next(e))}catch(e){l(e)}}function i(e){try{s(n.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,i)}s((n=n.apply(e,t||[])).next())}))},k=function(e,t){var a,n,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,n&&(r=2&l[0]?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,n=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],n=0}finally{a=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},T={query:"",type:"",minCalories:"",maxCalories:"",minProtein:"",maxProtein:"",minCarbs:"",maxCarbs:"",minFat:"",maxFat:"",offset:0,number:10},F={total_carbohydrates:135,min_carbs_per_meal:45,max_carbs_per_meal:55,total_protein:135,min_protein_per_meal:30,max_protein_per_meal:50,total_fat:100,min_fat_per_meal:25,max_fat_per_meal:45,total_calories:2e3,min_calories_per_meal:450,max_calories_per_meal:650},A={calories:0,fat:0,carbohydrates:0,protein:0};const D=function(){var e=c.useState(!1),t=e[0],a=e[1],i=(0,c.useState)(!1),h=i[0],v=i[1],g=(0,c.useState)([]),E=g[0],f=g[1],y=(0,c.useState)(F),b=y[0],Z=y[1],_=(0,c.useState)("error"),x=_[0],M=_[1],S=(0,c.useState)(""),C=S[0],w=S[1],D=(0,c.useState)("recipes"),R=D[0],z=D[1],L=(0,c.useState)(!1),O=L[0],G=L[1],V=(0,c.useState)(T),W=V[0],j=V[1],q=(0,c.useState)(!0),U=q[0],H=q[1],B=(0,c.useState)([]),$=B[0],Y=B[1],K=(0,c.useState)(18),J=K[0],Q=K[1],X=(0,c.useState)(60),ee=X[0],te=X[1],ae=(0,c.useState)(200),ne=ae[0],re=ae[1],le=(0,c.useState)(1),oe=le[0],ie=le[1],se=(0,c.useState)("male"),ce=se[0],me=se[1],ue=(0,c.useState)([]),de=ue[0],pe=ue[1],he=(0,c.useState)(A),ve=he[0],ge=he[1],Ee=function(){a(!t)},fe=function(e){return N(void 0,void 0,void 0,(function(){var t,a;return k(this,(function(n){switch(n.label){case 0:t=P(P({},W),{offset:0}),j(t),n.label=1;case 1:return n.trys.push([1,3,,4]),v(!0),e.preventDefault(),[4,s().get("/api/".concat(R),{params:t,withCredentials:!0})];case 2:return 0===(a=n.sent()).data.length?(v(!1),w("No options matched your search. Try again with a broader search"),M("warning"),G(!0)):(j(T),M("success"),w("Success! Here are your matching items."),G(!0),H(!1),f(a.data)),v(!1),[3,4];case 3:return n.sent(),v(!1),[3,4];case 4:return[2]}}))}))},ye=function(e){z(e.target.value)},be=function(e){j(P(P({},W),{type:e.target.value}))},Ze=function(e){var t;j(P(P({},W),((t={})[e.target.id]=e.target.value,t)))};return c.createElement(c.Fragment,null,c.createElement("div",{className:"main-page-container"},c.createElement(r.Z,{title:"Open Sidebar"},c.createElement(l.Z,{sx:{display:{sm:"none"}}},c.createElement(o.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:Ee,sx:{mr:2,display:{sm:"none"}}},c.createElement(n.Z,null)))),c.createElement(m.Z5,null,c.createElement(m.AW,{path:"",element:c.createElement(c.Fragment,null,c.createElement(I,{mobileOpen:t,handleDrawerToggle:Ee,route:R,values:W,handleSearch:fe,handleRouteChange:ye,handleInputChange:Ze,handleTypeSelect:be,goals:b,nutritionSummary:ve,view:"mealplan"}),c.createElement(p.default,{setNutritionSummary:ge,setAlertSeverity:M,setOpenAlert:G,setSampleMealplanItems:pe,setMealplanItems:Y,setAlertMessage:w,mealplanItems:$,sampleMealplanItems:de}))}),c.createElement(m.AW,{path:"search",element:c.createElement(I,{mobileOpen:t,handleDrawerToggle:Ee,route:R,values:W,handleSearch:fe,handleRouteChange:ye,handleInputChange:Ze,handleTypeSelect:be,goals:b,nutritionSummary:ve,view:"search"})}),c.createElement(m.AW,{path:"calculator",element:c.createElement(I,{mobileOpen:t,handleDrawerToggle:Ee,route:R,values:W,handleSearch:fe,handleRouteChange:ye,handleInputChange:Ze,handleTypeSelect:be,goals:b,nutritionSummary:ve,view:"calculator"})})),c.createElement(m.j3,{context:{mobileOpen:t,handleDrawerToggle:Ee,setNutritionSummary:ge,setAlertSeverity:M,openAlert:O,route:R,setOpenAlert:G,setValues:j,setAlertMessage:w,setSampleMealplanItems:pe,setMealplanItems:Y,isLoading:h,mealplanItems:$,setPopularRecipes:f,popularRecipes:E,alertSeverity:x,showPopularRecipes:U,alertMessage:C,sampleMealplanItems:de,goals:b,setGoals:Z,setGender:me,gender:ce,age:J,setAge:Q,height:ee,setHeight:te,weight:ne,setWeight:re,activityLevel:oe,setActivityLevel:ie,handleSubmit:function(e){e.preventDefault();var t=(0,d.K)({gender:ce,age:J,height:ee,weight:ne,activityLevel:oe});Z(t),M("success"),w("Your custom macronutrient values have been calculated! View the sidebar to see your calculations"),G(!0)}}})),c.createElement(u.I,{openAlert:O,handleAlert:function(){G(!O)},alertSeverity:x,alertMessage:C}))}},6521:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var n=a(7294),r=a(8801),l=a(2658),o=function(e){var t=e.mealplanItems,a=e.sampleMealplanItems;return n.createElement(n.Fragment,null,n.createElement("div",{className:"meal-plan-slots-container"},t.map((function(e,t){return n.createElement("div",{className:"mealplan-day-slot",key:e.id},0===t&&n.createElement(l.Z,{align:"center",variant:"h4",component:"h1"},"Breakfast"),1===t&&n.createElement(l.Z,{align:"center",variant:"h4",component:"h1"},"Lunch"),2===t&&n.createElement(l.Z,{align:"center",variant:"h4",component:"h1"},"Dinner"),n.createElement("div",{className:"mealplan-item-row"},n.createElement(r.h,{route:"recipes",image:e.image,title:e.title,nutrition:e.nutrition,url:e.sourceUrl,isMealPlanItem:!0,servings:a[t].servings})))}))))},i=a(4656),s=a(2640),c=a(9062);const m=(0,a(1354).Z)();var u=a(9669),d=a.n(u),p=a(7349),h=a(8779),v=a(466),g=a(7069),E=a(7204),f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];const y=function(e){var t=e.setNutritionSummary,a=e.setAlertSeverity,r=e.setOpenAlert,l=e.setSampleMealplanItems,u=e.setMealplanItems,y=e.setAlertMessage,b=e.mealplanItems,Z=e.sampleMealplanItems,_=(0,n.useState)((0,v.Z)(Date.now())),x=_[0],M=_[1],S=n.useState(new Date(Date.now())),C=(S[0],S[1]),w=(0,n.useState)((0,h.Z)(new Date(Date.now()),"yyyy-MM-dd")),I=w[0],P=w[1],N=function(e){var t=e.split("-");return{year:t[0],month:t[1],day:t[2]}};return(0,n.useEffect)((function(){d().get("/api/mealplan/sample").then((function(e){t(e.data.nutrients);var a=e.data.meals;l(a);var n=a.map((function(e){return d().get("/api/recipes/".concat(e.id)).then((function(e){return e.data}))}));Promise.all(n).then((function(e){u(e)}))})).catch((function(e){y("Unable to retrieve meal plan items. Please try again later."),a("error"),r(!0)}))}),[I]),n.createElement(n.Fragment,null,n.createElement("div",{className:"sample-mealplan-page"},n.createElement(E.b,{currentDay:I}),n.createElement(m,{sx:{maxWidth:{xs:320,sm:480}}},n.createElement(i.Z,{value:x,onChange:function(e,a){u([]),t({calories:0,protein:0,fat:0,carbohydrates:0});var n,r=a-x,l=N(I),o=l.year,i=l.month,s=l.day;r>0?n=(0,p.Z)(new Date("".concat(o,", ").concat(i,", ").concat(s)),r):r<0&&(n=(0,g.Z)(new Date("".concat(o,", ").concat(i,", ").concat(s)),Math.abs(r))),void 0!==n&&(C(n),M(a),P((0,h.Z)(n,"yyyy-MM-dd")))},variant:"scrollable",scrollButtons:"auto","aria-label":"change mealplan date"},f.map((function(e){return n.createElement(s.Z,{key:e,label:e})})))),b.length>0&&Z.length>0?n.createElement(o,{mealplanItems:b,sampleMealplanItems:Z}):n.createElement(c.Z,{size:100})))}},5165:(e,t,a)=>{a.d(t,{K:()=>n});var n=function(e){var t=e.age,a=e.weight,n=e.gender,r=e.height,l=e.activityLevel,o=a/2.2,i=10*o+6.25*Math.floor(2.54*r)-5*t+("female"===n?-161:5),s={};s.total_calories=Math.floor(i*l),s.min_calories_per_meal=Math.floor(s.total_calories/3-150),s.max_calories_per_meal=Math.floor(s.total_calories/3+150),s.total_carbohydrates=Math.floor(.45*i/4),s.min_carbs_per_meal=Math.floor(s.total_carbohydrates/3-5),s.max_carbs_per_meal=Math.floor(s.total_carbohydrates/3+5),s.total_protein=Math.floor(o),s.min_protein_per_meal=Math.floor(s.total_protein/3-10),s.max_protein_per_meal=Math.floor(s.total_protein/3+10);var c=s.total_calories-(4*s.total_carbohydrates+4*s.total_protein);return s.total_fat=Math.floor(c/9),s.min_fat_per_meal=Math.floor(s.total_fat/3-10),s.max_fat_per_meal=Math.floor(s.total_fat/3+10),s}}}]);