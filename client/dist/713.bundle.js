"use strict";(self.webpackChunkthe_diabetes_calculator=self.webpackChunkthe_diabetes_calculator||[]).push([[713],{6332:(e,t,a)=>{a.d(t,{G:()=>o});var n=a(7294),r=a(9062),l=a(2658),o=function(e){var t=e.calories,a=e.caloriesUsed,o=e.caloriesTotal;return n.createElement(n.Fragment,null,n.createElement("div",{className:"daily-goals-kcal"},n.createElement(r.Z,{variant:"determinate",size:200,value:t,thickness:1}),n.createElement("div",{className:"daily-goals-kcal-title"},n.createElement(l.Z,{variant:"body1",align:"center"},"Calories"),n.createElement(l.Z,{variant:"h6"},a," / ",o))))}},6021:(e,t,a)=>{a.d(t,{H:()=>o});var n=a(7294),r=a(9062),l=a(2658),o=function(e){var t=e.goals;return n.createElement(n.Fragment,null,n.createElement("div",{className:"daily-goals-kcal"},n.createElement(r.Z,{variant:"determinate",size:200,value:100,thickness:1}),n.createElement("div",{className:"daily-goals-kcal-title"},n.createElement(l.Z,{align:"center",variant:"body1"},"Total Calories"),n.createElement(l.Z,{align:"center",variant:"h6"},t.total_calories))))}},4200:(e,t,a)=>{a.d(t,{N:()=>u});var n=a(7294),r=a(6332),l=a(6021),o=a(4083),i=a(2658),c=a(6914),s=a(1898),u=function(e){var t,a,u,m=e.goals,d=e.nutritionSummary,p=e.page,h=e.setGoals,g=e.handleSubmitUpdatedGoals;return void 0!==d&&d.length&&(a=d[5].amount,u=m.total_calories,t=Math.floor(a/u*100)),n.createElement(n.Fragment,null,n.createElement("div",{className:"daily-goals"},"mealplan"===p?n.createElement(i.Z,{variant:"h6"},"Today's Macronutrient Totals"):n.createElement(i.Z,{variant:"h6"},"Your Daily Macronutrient Goals"),"mealplan"===p&&void 0!==d&&d.length?n.createElement(n.Fragment,null,n.createElement(r.G,{calories:t,caloriesTotal:m.total_calories,caloriesUsed:Math.floor(d[5].amount)}),n.createElement("div",{className:"daily-goals-items","data-testid":"mealplan-goal-items"},n.createElement(s.z,{type:"Carbohydrates",nutrientsInMealPlan:d[7].amount,nutrientsTotal:m.total_carbohydrates}),n.createElement(s.z,{nutrientsTotal:m.total_protein,type:"Protein",nutrientsInMealPlan:d[28].amount}),n.createElement(s.z,{nutrientsTotal:m.total_fat,type:"Fat",nutrientsInMealPlan:d[11].amount}))):null,"search"===p||"user-profile"===p||"mealplan"===p&&void 0!==m&&void 0!==d&&0===d.length?n.createElement(n.Fragment,null,n.createElement(l.H,{goals:m}),n.createElement("form",{onSubmit:g,className:"daily-goals-items"},n.createElement(o.Y,{goals:m,page:p,setGoals:h}),"user-profile"===p?n.createElement(c.Z,{variant:"contained",fullWidth:!0,type:"submit"},"Update Goals"):null)):null))}},8801:(e,t,a)=>{a.d(t,{h:()=>g});var n=a(7294),r=a(6501),l=a(5295),o=a(4563),i=a(6867),c=a(4962),s=a(2643),u=a(2658),m=a(6447),d=a(9161),p=a(6914),h=a(3343),g=function(e){var t,a,g,v,E=e.route,f=e.image,y=e.title,b=e.restaurantChain,Z=e.nutrition,C=e.url,x=e.handleOpeningDialog,_=e.isMealPlanItem,S=e.servings;return"recipes"===E||"RECIPE"===E?Z.nutrients.forEach((function(e){"Calories"===e.name?t=Math.floor(Z.nutrients[0].amount):"Protein"===e.name?v=Math.floor(Z.nutrients[1].amount)+"g":"Fat"===e.name?g=Math.floor(Z.nutrients[1].amount):"Carbohydrates"===e.name&&(a=Math.floor(Z.nutrients[3].amount)+"g")})):(t=Z.calories,v=Z.protein,g=Z.fat,a=Z.carbs),n.createElement(r.Z,{elevation:1,className:"food-search-paper"},n.createElement(l.Z,{className:"search-item","data-testid":"food-search-item"},_&&void 0!==x?n.createElement(o.Z,{title:"Delete from Mealplan"},n.createElement(i.Z,{sx:{position:"absolute",alignSelf:"flex-end"},size:"small",color:"error","aria-label":"delete from mealplan",onClick:x},n.createElement(h.Z,null))):null,n.createElement(c.Z,{component:"img",alt:"food item image",height:"160",image:f}),n.createElement(s.Z,null,n.createElement(u.Z,{align:"center",variant:"subtitle1"},y),_?n.createElement(m.Z,{direction:"row"},n.createElement(u.Z,{variant:"subtitle2"},"Servings: ",S)):null,"menuItems"===E||"MENU_ITEM"===E&&n.createElement(u.Z,{variant:"h6"},b),void 0!==Z?n.createElement("div",{className:"search-item-nutrition"},n.createElement("div",{className:"search-item-nutrient"},n.createElement(u.Z,{variant:"subtitle2"},n.createElement("strong",null,"Calories")),n.createElement(u.Z,{variant:"body1"},t)),n.createElement("div",{className:"search-item-nutrient"},n.createElement(u.Z,{variant:"subtitle2"},n.createElement("strong",null,"Carbs")),n.createElement(u.Z,{variant:"body1"},a)),n.createElement("div",{className:"search-item-nutrient"},n.createElement(u.Z,{variant:"subtitle2"},n.createElement("strong",null,"Protein")),n.createElement(u.Z,{variant:"body1"},v)),n.createElement("div",{className:"search-item-nutrient"},n.createElement(u.Z,{variant:"subtitle2"},n.createElement("strong",null,"Fat")),n.createElement(u.Z,{variant:"body1"},g))):null),n.createElement(d.Z,{sx:{display:"flex"}},void 0!==C?n.createElement(p.Z,{fullWidth:!0,component:"a",href:C,target:"_blank",className:"card-button",variant:"outlined",color:"secondary",size:"small"},"View Recipe"):null,_?null:n.createElement(p.Z,{fullWidth:!0,className:"card-button",onClick:x,variant:"outlined",size:"small","data-testid":"open-addtomealplan-dialog"},"Add to Mealplan"))))}},1898:(e,t,a)=>{a.d(t,{z:()=>s});var n=a(5295),r=a(2643),l=a(6447),o=a(2658),i=a(9041),c=a(7294),s=function(e){var t,a=e.nutrientsTotal,s=e.type,u=e.nutrientsInMealPlan;return void 0!==u&&(t=Math.floor(u/a*100)),c.createElement(c.Fragment,null,c.createElement(n.Z,null,c.createElement(r.Z,{sx:{display:"flex",flexDirection:"column",minWidth:"240px",flexGrow:"0",gap:"1rem"}},c.createElement(l.Z,{direction:"row",gap:"1rem",alignItems:"space-between"},c.createElement(o.Z,{align:"center",variant:"body1"},s),c.createElement(o.Z,{align:"center",variant:"body1",sx:{marginLeft:"auto"}},Math.floor(u)," / ",a," g")),c.createElement(i.Z,{variant:"determinate",value:t}))))}},4083:(e,t,a)=>{a.d(t,{Y:()=>u});var n=a(7294),r=a(5295),l=a(2643),o=a(2658),i=a(3981),c=function(){return c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)},s=function(e){var t=e.nutrientsTotal,a=e.type,s=e.page,u=e.setGoals,m=e.goals;return n.createElement(n.Fragment,null,n.createElement(r.Z,{sx:{borderRadius:"15%"}},n.createElement(l.Z,{sx:{display:"flex",flexDirection:"column",height:"10rem",width:"10rem",aligItems:"center",gap:"1rem",justifyContent:"center"}},n.createElement(o.Z,{className:"nutrient-type-text",align:"center",variant:"body1",component:"div"},a),"user-profile"===s?n.createElement(i.Z,{value:"".concat(t),type:"number",endAdornment:"g",fullWidth:!0,onInput:function(e){if(void 0!==u)if("Carbohydrates"===e.target.id){var t=parseInt(e.target.value),a=t<=15?0:t/3-5;u(c(c({},m),{total_carbohydrates:t,min_carbs_per_meal:Math.floor(a),max_carbs_per_meal:Math.floor(t/3+5)}))}else if("Protein"==e.target.id){var n=parseInt(e.target.value),r=n<=30?0:n/3-10;u(c(c({},m),{total_protein:n,min_protein_per_meal:Math.floor(r),max_protein_per_meal:Math.floor(n/3+10)}))}else if("Fat"===e.target.id){var l=parseInt(e.target.value),o=l<=30?0:l/3-10;u(c(c({},m),{total_fat:l,min_fat_per_meal:Math.floor(o),max_fat_per_meal:Math.floor(l/3+10)}))}},id:a,required:!0,inputProps:{style:{textAlign:"center"}}}):n.createElement(o.Z,{align:"center",variant:"h6"},t," g"),"Carbohydrates"===a&&n.createElement(o.Z,{align:"center",className:"range-text",variant:"subtitle2"},"Per meal: ",m.min_carbs_per_meal," -"," ",m.max_carbs_per_meal,"g"),"Protein"===a&&n.createElement(o.Z,{align:"center",className:"range-text",variant:"subtitle2"},"Per meal: ",m.min_protein_per_meal," -"," ",m.max_protein_per_meal,"g"),"Fat"===a&&n.createElement(o.Z,{align:"center",className:"range-text",variant:"subtitle2"},"Per meal: ",m.min_fat_per_meal," -"," ",m.max_fat_per_meal,"g"))))},u=function(e){var t=e.goals,a=e.page,r=e.setGoals;return n.createElement(n.Fragment,null,n.createElement(s,{type:"Carbohydrates",nutrientsTotal:t.total_carbohydrates,page:a,setGoals:r,goals:t}),n.createElement(s,{nutrientsTotal:t.total_protein,type:"Protein",page:a,setGoals:r,goals:t}),n.createElement(s,{nutrientsTotal:t.total_fat,type:"Fat",page:a,setGoals:r,goals:t}))}},4815:(e,t,a)=>{a.d(t,{U:()=>m});var n=a(7294),r=a(6447),l=a(2658),o=a(6914),i=a(955),c=a(6375),s=a(6776),u=a(1383),m=function(e){var t=e.route,a=e.values,m=e.handleSubmit,d=e.handleRouteChange,p=e.handleInputChange,h=e.handleTypeSelect;return n.createElement(n.Fragment,null,n.createElement("form",{onSubmit:m},n.createElement(r.Z,{spacing:3},n.createElement(c.M,{route:t,handleRouteChange:d}),n.createElement(s.v,{query:a.query,handleInputChange:p}),n.createElement(u.l,{type:a.type,handleTypeSelect:h}),n.createElement(l.Z,{variant:"h6"},"Choose Calorie Range"),n.createElement(i.N,{handleInputChange:p,measurement:"kcal",nutrient:"Calories",minValue:a.minCalories,maxValue:a.maxCalories}),n.createElement(l.Z,{variant:"h6"},"Choose Carb Range"),n.createElement(i.N,{handleInputChange:p,measurement:"g",nutrient:"Carbs",minValue:a.minCarbs,maxValue:a.maxCarbs}),n.createElement(l.Z,{variant:"h6"},"Choose Protein Range"),n.createElement(i.N,{handleInputChange:p,measurement:"g",nutrient:"Protein",minValue:a.minProtein,maxValue:a.maxProtein}),n.createElement(l.Z,{variant:"h6"},"Choose Fat Range"),n.createElement(i.N,{handleInputChange:p,measurement:"g",nutrient:"Fat",minValue:a.minFat,maxValue:a.maxFat}),n.createElement(o.Z,{type:"submit",variant:"contained"},"Submit"))))}},3347:(e,t,a)=>{a.d(t,{K:()=>u});var n=a(7294),r=a(4200),l=a(7049),o=a(4386),i=a(6867),c=a(724),s=350,u=function(e){var t=e.mobileOpen,a=e.handleDrawerToggle,u=e.SearchFormComponent,m=e.apiData,d=e.goals,p=e.page,h=e.nutritionSummary,g=e.mealplanItemsFound;return n.createElement(n.Fragment,null,"search"===p&&n.createElement(n.Fragment,null,n.createElement(l.ZP,{variant:"temporary",open:t,onClose:a,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:s,pt:"100px"}}},n.createElement(o.Z,null,n.createElement(i.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:a,sx:{mr:2,display:{sm:"none"}}},n.createElement(c.Z,null))),void 0!==m&&m.length?u:n.createElement(r.N,{goals:d,page:"search"})),n.createElement(l.ZP,{open:!0,variant:"permanent",ModalProps:{keepMounted:!0},sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:s,pt:"100px"}}},void 0!==m&&m.length?u:n.createElement(r.N,{goals:d,page:"search"}))),"mealplan"===p&&void 0!==d&&n.createElement(n.Fragment,null,n.createElement(l.ZP,{variant:"temporary",open:t,onClose:a,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:s,pt:"100px"}}},n.createElement(o.Z,null,n.createElement(i.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:a,sx:{mr:2,display:{sm:"none"}}},n.createElement(c.Z,null))),h?n.createElement(r.N,{goals:d,nutritionSummary:h,page:"mealplan"}):null),n.createElement(l.ZP,{open:!0,variant:"permanent",ModalProps:{keepMounted:!0},sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:s,pt:"100px"}}},h.length?n.createElement(r.N,{goals:d,nutritionSummary:h,page:"mealplan"}):null,h.length||g?null:n.createElement(r.N,{goals:d,page:"search"}))))}},713:(e,t,a)=>{a.r(t),a.d(t,{default:()=>pe});var n=a(7294),r=a(8991),l=a(6447),o=a(2658),i=a(4656),c=a(2640),s=a(6914),u=a(955),m=a(6375),d=a(6776),p=a(1383),h=function(e){var t=e.route,a=e.values,r=e.handleRouteChange,i=e.handleInputChange,c=e.handleTypeSelect,h=e.goals,g=e.handleSuggestedSubmit;return n.createElement(n.Fragment,null,n.createElement("form",{onSubmit:g},n.createElement(l.Z,{spacing:3},n.createElement(o.Z,{variant:"subtitle2"}," ","Suggested goals are calculated based on recommend amounts per meal, considering 3 meals are had per day."),n.createElement(m.M,{route:t,handleRouteChange:r}),n.createElement(d.v,{query:a.query,handleInputChange:i}),n.createElement(p.l,{type:a.type,handleTypeSelect:c}),n.createElement(o.Z,{variant:"h6"},"Choose Calorie Range"),n.createElement(u.N,{handleInputChange:i,measurement:"kcal",nutrient:"Calories",minValue:h.min_calories_per_meal,maxValue:h.max_calories_per_meal}),n.createElement(o.Z,{variant:"h6"},"Choose Carb Range"),n.createElement(u.N,{handleInputChange:i,measurement:"g",nutrient:"Carbs",minValue:h.min_carbs_per_meal,maxValue:h.max_carbs_per_meal}),n.createElement(o.Z,{variant:"h6"},"Choose Protein Range"),n.createElement(u.N,{handleInputChange:i,measurement:"g",nutrient:"Protein",minValue:h.min_protein_per_meal,maxValue:h.max_protein_per_meal}),n.createElement(o.Z,{variant:"h6"},"Choose Fat Range"),n.createElement(u.N,{handleInputChange:i,measurement:"g",nutrient:"Fat",minValue:h.min_fat_per_meal,maxValue:h.max_fat_per_meal}),n.createElement(s.Z,{type:"submit",variant:"contained"},"Submit"))))},g=a(4815),v=function(){return v=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},v.apply(this,arguments)},E=function(e){var t=e.handleSubmit,a=e.route,s=e.setRoute,u=(e.setCurrentTab,e.currentTab),m=e.handleChange,d=e.values,p=e.setValues,E=e.goals,f=e.handleSuggestedSubmit,y=function(e){s(e.target.value)},b=function(e){var t;p(v(v({},d),((t={})[e.target.id]=e.target.value,t)))},Z=function(e){p(v(v({},d),{type:e.target.value}))};return n.createElement("div",{className:"search-form"},n.createElement(l.Z,{direction:"row",spacing:1},n.createElement(r.Z,null),n.createElement(o.Z,{variant:"body1"},"Find recipes, grocery products, or menu items from over 800+ restaurants that match your nutrient goals")),n.createElement(i.Z,{value:u,onChange:m,"aria-label":"toggle suggested search",className:"search-form-tabs"},n.createElement(c.Z,{value:"custom-search",label:"Custom"}),n.createElement(c.Z,{value:"suggested-goals",label:"Suggested"})),"custom-search"===u?n.createElement(g.U,{route:a,values:d,handleSubmit:t,handleRouteChange:y,handleInputChange:b,handleTypeSelect:Z}):n.createElement(h,{route:a,values:d,handleRouteChange:y,handleInputChange:b,handleTypeSelect:Z,goals:E,handleSuggestedSubmit:f}))},f=a(7485),y=a(8801),b=a(5725),Z=a(6446),C=a(7666),x=a(7920),_=a(1753),S=a(3460),M=[{value:1,name:"1"},{value:2,name:"2"},{value:3,name:"3"}],w=function(e){var t=e.servings,a=e.handleSelectServings;return n.createElement(Z.Z,null,n.createElement(C.Z,null,"Servings"),n.createElement(x.Z,{value:"".concat(t),onChange:a,label:"Servings",required:!0,id:"servings",fullWidth:!0,sx:{width:"100%"}},M.map((function(e){return n.createElement(_.Z,{key:e.value,value:e.value},e.name)}))),n.createElement(S.Z,null,"Choose number of servings"))},k=[{value:1,name:"Morning"},{value:2,name:"Afternoon"},{value:3,name:"Evening"}],P=function(e){var t=e.slot,a=e.handleSelectSlot;return n.createElement(Z.Z,null,n.createElement(C.Z,null,"Slot"),n.createElement(x.Z,{value:"".concat(t),onChange:a,label:"Slot",required:!0,fullWidth:!0,id:"slot"},k.map((function(e){return n.createElement(_.Z,{key:e.value,value:e.value},e.name)}))),n.createElement(S.Z,null,"Choose correct slot for chosen day"))},I=a(4666),T=a(7645),F=a(6755),N=a(9226),D=a(8979),O=a(7610),A=a(2856),R=a(7383),V=a(5842),z=a(4659),q={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:10,Nov:9,Dec:11},G=a(2902),U=a(722),j=a(9119),W=a(8366),L=function(){return L=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},L.apply(this,arguments)},B=function(e){var t=e.setData,a=e.data,r=n.useState((0,W.Z)()),l=r[0],o=r[1],i=function(e){o(e);var n=function(e){var t=(e+"").split(" "),a=t[4],n=q[t[1]],r=a.split(":"),l=r[0],o=r[1],i=r[2];return{year:parseInt(t[3]),month:n,day:parseInt(t[2]),hour:parseInt(l),min:parseInt(o),sec:parseInt(i)}}((0,U.zonedTimeToUtc)(e,"UTC")),r=n.year,l=n.month,i=n.day,c=n.hour,s=n.min,u=n.sec,m=(0,j.Z)(new Date(r,l,i,c,s,u)),d=(0,G.Z)(m);t(L(L({},a),{date:d}))};return n.createElement(A._,{dateAdapter:O.Z},n.createElement(N.Z,{sx:{display:{xs:"block",sm:"none"}}},n.createElement(V.O,{label:"Select day",inputFormat:"MM/dd/yyyy",value:l,onChange:i,renderInput:function(e){return n.createElement(z.Z,L({},e,{variant:"standard"}))}})),n.createElement(N.Z,{sx:{display:{xs:"none",sm:"block"}}},n.createElement(R.$,{label:"Select day",inputFormat:"MM/dd/yyyy","data-testid":"date-picker-textfield",value:l,onChange:i,renderInput:function(e){return n.createElement(z.Z,L({},e,{variant:"standard"}))}})))},H=a(9669),J=a.n(H),Y=function(){return Y=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},Y.apply(this,arguments)},K=function(e,t,a,n){return new(a||(a=Promise))((function(r,l){function o(e){try{c(n.next(e))}catch(e){l(e)}}function i(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,i)}c((n=n.apply(e,t||[])).next())}))},$=function(e,t){var a,n,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,n&&(r=2&l[0]?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,n=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],n=0}finally{a=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},Q=function(e){var t,a=e.openDialog,r=e.handleOpeningDialog,l=e.route,o=e.imageType,i=e.title,c=e.id,u=e.setOpenDialog,m=e.setAlertMessage,d=e.setOpenSnackbar,p=e.setAlertSeverity;t="recipes"===l?"RECIPE":"groceryProducts"===l?"PRODUCT":"MENU_ITEM";var h=(0,n.useState)({date:(0,G.Z)((0,W.Z)()),slot:1,position:0,type:t,value:{id:c,servings:1,title:i,imageType:o}}),g=h[0],v=h[1];return n.createElement(I.Z,{open:a},n.createElement(T.Z,{align:"left"},"Select preferred day, slot and number of servings to add to Meaplan"),n.createElement("form",{onSubmit:function(e){return K(void 0,void 0,void 0,(function(){var t;return $(this,(function(a){switch(a.label){case 0:e.preventDefault(),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,J().post("/api/mealplan",g)];case 2:return a.sent(),p("success"),m("Item has been added to your mealplan!"),d(!0),u(!1),[3,4];case 3:return t=a.sent(),console.log(t),[3,4];case 4:return[2]}}))}))}},n.createElement(F.Z,null,n.createElement(N.Z,{display:"flex",flexDirection:"column",gap:"1rem"},n.createElement(B,{setData:v,data:g}),n.createElement(P,{handleSelectSlot:function(e){v(Y(Y({},g),{slot:parseInt(e.target.value)}))},slot:g.slot}),n.createElement(w,{handleSelectServings:function(e){v((function(t){return Y(Y({},t),{value:Y(Y({},t.value),{servings:parseInt(e.target.value)})})}))},servings:g.value.servings}))),n.createElement(D.Z,null,n.createElement(s.Z,{"data-testid":"add-mealplan-btn","aria-label":"submit form to add to meal plan",type:"submit",variant:"contained"},"Submit"),n.createElement(s.Z,{variant:"contained","aria-label":"cancel",onClick:r,color:"error"},"Cancel"))))},X=function(e){var t=e.route,a=e.image,r=e.imageType,l=e.title,o=e.nutrition,i=e.restaurantChain,c=e.url,s=e.id,u=e.setAlertMessage,m=e.setOpenSnackbar,d=e.setAlertSeverity,p=(0,n.useState)(!1),h=p[0],g=p[1],v=function(){g(!h)};return n.createElement(n.Fragment,null,n.createElement(b.ZP,{item:!0,xs:12,sm:6,md:4,"data-testid":"food-search-item"},n.createElement(y.h,{route:t,image:a,title:l,restaurantChain:i,nutrition:o,url:c,handleOpeningDialog:v,isMealPlanItem:!1})),n.createElement(Q,{openDialog:h,handleOpeningDialog:v,route:t,imageType:r,title:l,id:s,setOpenDialog:g,setAlertMessage:u,setOpenSnackbar:m,setAlertSeverity:d}))},ee=a(7600),te=function(e){var t=e.apiData,a=e.route,r=e.handleLoadMore,i=e.setAlertMessage,c=e.setOpenSnackbar,u=e.setAlertSeverity,m=e.showLoadMoreBtn;return n.createElement("div",{className:"food-search-list"},n.createElement(l.Z,{direction:"row",spacing:1},n.createElement(ee.Z,null),n.createElement(o.Z,{variant:"body1"},"Click on the Add to Mealplan button then choose intended date and slot (morning, afternoon, or evening) to save any item")),n.createElement(b.ZP,{container:!0,spacing:2},t.map((function(e){return n.createElement(X,{key:e.id,id:e.id,imageType:e.imageType,image:e.image,title:e.title,nutrition:e.nutrition,route:a,url:e.sourceUrl||void 0,restaurantChain:e.restaurantChain||void 0,setAlertMessage:i,setOpenSnackbar:c,setAlertSeverity:u})}))),m?n.createElement(s.Z,{fullWidth:!0,onClick:r,variant:"contained"},"Load More"):null)},ae=a(9062),ne=a(4386),re=a(6867),le=a(3347),oe=function(e){var t=e.mobileOpen,a=e.handleDrawerToggle,r=e.SearchFormComponent,l=e.apiData,o=e.goals;return n.createElement(n.Fragment,null,n.createElement(le.K,{mobileOpen:t,handleDrawerToggle:a,SearchFormComponent:r,apiData:l,goals:o,page:"search"}))},ie=a(1566),ce=a(1703),se=a(3379),ue=function(){return ue=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},ue.apply(this,arguments)},me=function(e,t,a,n){return new(a||(a=Promise))((function(r,l){function o(e){try{c(n.next(e))}catch(e){l(e)}}function i(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,i)}c((n=n.apply(e,t||[])).next())}))},de=function(e,t){var a,n,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,n&&(r=2&l[0]?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,n=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],n=0}finally{a=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}};const pe=function(){var e=(0,ie.useAuth)(),t=e.isLoading,a=(e.isLoggedIn,e.username,(0,n.useState)([])),r=a[0],l=a[1],o=(0,n.useState)(!1),i=o[0],c=o[1],s=(0,n.useState)(!1),u=s[0],m=s[1],d=(0,n.useState)("recipes"),p=d[0],h=d[1],g=(0,n.useState)("custom-search"),v=g[0],y=g[1],b=(0,n.useState)(!1),Z=b[0],C=b[1],x=(0,n.useState)("No options matched your search. Try again with a broader search."),_=x[0],S=x[1],M=(0,n.useState)("error"),w=M[0],k=M[1],P=(0,n.useState)({query:"",type:"",intolerance:"",minCalories:"",maxCalories:"",minCarbs:"",maxCarbs:"",minProtein:"",maxProtein:"",minFat:"",maxFat:"",number:6,offset:0}),I=P[0],T=P[1],F=(0,n.useState)({}),D=F[0],O=F[1],A=n.useState(!1),R=A[0],V=A[1],z=function(){V(!R)};(0,n.useEffect)((function(){var e=J().get("/api/metrics",{withCredentials:!0});e.then((function(e){O(e.data)})),e.catch((function(e){console.log(e)}))}),[]);var q=n.createElement(E,{handleSubmit:function(e){return me(void 0,void 0,void 0,(function(){var t,a;return de(this,(function(n){switch(n.label){case 0:t=ue(ue({},I),{offset:0}),T(t),n.label=1;case 1:return n.trys.push([1,3,,4]),m(!0),e.preventDefault(),[4,J().get("/api/".concat(p),{params:t,withCredentials:!0})];case 2:return 0===(a=n.sent()).data.length?(S("No options matched your search. Try again with a broader search"),k("warning"),C(!0),c(!1)):(k("success"),S("Success! Here are your matching items."),C(!0),a.data.length<6?c(!1):c(!0)),l(a.data),m(!1),[3,4];case 3:return n.sent(),m(!1),[3,4];case 4:return[2]}}))}))},handleSuggestedSubmit:function(e){return me(void 0,void 0,void 0,(function(){var t,a,n,r;return de(this,(function(o){switch(o.label){case 0:t=ue(ue({},I),{offset:0}),T(t),o.label=1;case 1:return o.trys.push([1,3,,4]),m(!0),e.preventDefault(),(a=I).minCalories=D.min_calories_per_meal,a.maxCalories=D.max_calories_per_meal,a.minCarbs=D.min_carbs_per_meal,a.maxCarbs=D.max_carbs_per_meal,a.minProtein=D.min_protein_per_meal,a.maxProtein=D.max_protein_per_meal,a.minFat=D.min_fat_per_meal,a.maxFat=D.max_fat_per_meal,[4,J().get("/api/".concat(p),{params:a})];case 2:return 0===(n=o.sent()).data.length?(S("No options matched your search. Try again with a broader search"),k("warning"),C(!0),c(!1)):(k("success"),S("Success! Here are your matching items."),C(!0),n.data.length<6?c(!1):c(!0)),T(a),l(n.data),m(!1),[3,4];case 3:return r=o.sent(),console.log(r),m(!1),[3,4];case 4:return[2]}}))}))},route:p,setRoute:h,handleChange:function(e,t){y(t)},currentTab:v,setCurrentTab:y,values:I,setValues:T,goals:D});return n.createElement(n.Fragment,null,t?null:n.createElement(n.Fragment,null,n.createElement(ce.Z,null),n.createElement(N.Z,{className:"search-page",sx:{width:"100vw"}},u&&n.createElement(ae.Z,{size:68}),n.createElement(ne.Z,{sx:{display:{sm:"none"}}},n.createElement(re.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:z,sx:{mr:2,display:{sm:"none"}}},n.createElement(se.Z,null))),n.createElement(oe,{goals:D,mobileOpen:R,handleDrawerToggle:z,SearchFormComponent:q,apiData:r}),r.length?n.createElement(n.Fragment,null,n.createElement(te,{apiData:r,route:p,handleLoadMore:function(e){return me(void 0,void 0,void 0,(function(){var e,t,a;return de(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),m(!0),e=ue(ue({},I),{offset:I.offset+6}),T(e),[4,J().get("/api/".concat(p),{params:e})];case 1:return(t=n.sent()).data.length<6?c(!1):c(!0),l(r.concat(t.data)),m(!1),[3,3];case 2:return a=n.sent(),m(!1),console.log(a),[3,3];case 3:return[2]}}))}))},setAlertMessage:S,setOpenSnackbar:C,setAlertSeverity:k,showLoadMoreBtn:i})):n.createElement(n.Fragment,null,q),n.createElement(f.I,{openAlert:Z,handleAlert:function(e){C(!1)},alertSeverity:w,alertMessage:_}))))}},955:(e,t,a)=>{a.d(t,{N:()=>s});var n=a(7294),r=a(6447),l=a(6446),o=a(3981),i=a(270),c=a(3460),s=function(e){var t=e.handleInputChange,a=e.measurement,s=e.nutrient,u=e.minValue,m=e.maxValue;return n.createElement(n.Fragment,null,n.createElement(r.Z,{direction:"row"},n.createElement(l.Z,{fullWidth:!0,variant:"standard",sx:{m:1,mt:3}},n.createElement(o.Z,{id:"min".concat(s),type:"number",required:!0,"data-testid":"textfield-min-nutrient",value:u,onChange:t,endAdornment:n.createElement(i.Z,{position:"end"},a),inputProps:{"aria-label":"Minimum ".concat(s)}}),n.createElement(c.Z,null,"Minimum ".concat(s))),n.createElement(l.Z,{fullWidth:!0,variant:"standard",sx:{m:1,mt:3}},n.createElement(o.Z,{id:"max".concat(s),"data-testid":"textfield-max-nutrient",type:"number",required:!0,value:m,onChange:t,endAdornment:n.createElement(i.Z,{position:"end"},a),inputProps:{"aria-label":"Maximum ".concat(s)}}),n.createElement(c.Z,null,"Maximum ".concat(s)))))}},6776:(e,t,a)=>{a.d(t,{v:()=>i});var n=a(7294),r=a(4659),l=a(270),o=a(2761),i=function(e){var t=e.query,a=e.handleInputChange;return n.createElement(r.Z,{id:"query",required:!0,"data-testid":"query-text-field",InputProps:{startAdornment:n.createElement(l.Z,{position:"start"},n.createElement(o.Z,null))},label:"Item",helperText:"Enter an ingredient or item you want your search to contain (i.e. chicken, greek yogurt, etc.)",value:t,onChange:a})}},6375:(e,t,a)=>{a.d(t,{M:()=>s});var n=a(7294),r=a(6446),l=a(7666),o=a(7920),i=a(1753),c=a(3460),s=function(e){var t=e.route,a=e.handleRouteChange;return n.createElement(r.Z,null,n.createElement(l.Z,null,"Search"),n.createElement(o.Z,{value:t,onChange:a,label:"Search",required:!0,"data-testid":"select-search-input"},n.createElement(i.Z,{value:"recipes"},"Recipes"),n.createElement(i.Z,{value:"groceryProducts"},"Grocery Products"),n.createElement(i.Z,{value:"menuItems"},"Menu items")),n.createElement(c.Z,null,"Choose the type of item you are searching for."))}},1383:(e,t,a)=>{a.d(t,{l:()=>s});var n=a(7294),r=a(6446),l=a(7666),o=a(7920),i=a(1753),c=a(3460),s=function(e){var t=e.type,a=e.handleTypeSelect;return n.createElement(r.Z,null,n.createElement(l.Z,null,"Type"),n.createElement(o.Z,{value:t,onChange:a,label:"Type",required:!0,id:"type","data-testid":"select-type-dropdown"},n.createElement(i.Z,{value:"maincourse"},"Main Course"),n.createElement(i.Z,{value:"sidedish"},"Side Dish"),n.createElement(i.Z,{value:"dessert"},"Dessert"),n.createElement(i.Z,{value:"appetizer"},"Appetizer"),n.createElement(i.Z,{value:"salad"},"Salad"),n.createElement(i.Z,{value:"bread"},"Bread"),n.createElement(i.Z,{value:"breakfast"},"Breakfast"),n.createElement(i.Z,{value:"soup"},"Soup"),n.createElement(i.Z,{value:"beverage"},"Beverage"),n.createElement(i.Z,{value:"sauce"},"Sauce"),n.createElement(i.Z,{value:"marinade"},"Marinade"),n.createElement(i.Z,{value:"fingerfood"},"Fingerfood"),n.createElement(i.Z,{value:"snack"},"Snack"),n.createElement(i.Z,{value:"drink"},"Drink")),n.createElement(c.Z,null,"Choose the type of item you are searching for."))}}}]);