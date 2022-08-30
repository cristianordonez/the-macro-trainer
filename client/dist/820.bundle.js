"use strict";(self.webpackChunkthe_diabetes_calculator=self.webpackChunkthe_diabetes_calculator||[]).push([[820],{3147:(e,t,n)=>{var a=n(5318);t.Z=void 0;var r=a(n(4938)),l=n(5893),o=(0,r.default)((0,l.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"}),"CalendarMonth");t.Z=o},7069:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(3946),r=n(7349),l=n(3882);function o(e,t){(0,l.Z)(2,arguments);var n=(0,a.Z)(t);return(0,r.Z)(e,-n)}},6332:(e,t,n)=>{n.d(t,{G:()=>o});var a=n(7294),r=n(9062),l=n(2658),o=function(e){var t=e.calories,n=e.caloriesUsed,o=e.caloriesTotal;return a.createElement(a.Fragment,null,a.createElement("div",{className:"daily-goals-kcal"},a.createElement(r.Z,{variant:"determinate",size:200,value:t,thickness:1}),a.createElement("div",{className:"daily-goals-kcal-title"},a.createElement(l.Z,{variant:"body1",align:"center"},"Calories"),a.createElement(l.Z,{variant:"h6"},n," / ",o))))}},6021:(e,t,n)=>{n.d(t,{H:()=>o});var a=n(7294),r=n(9062),l=n(2658),o=function(e){var t=e.goals;return a.createElement(a.Fragment,null,a.createElement("div",{className:"daily-goals-kcal"},a.createElement(r.Z,{variant:"determinate",size:200,value:100,thickness:1}),a.createElement("div",{className:"daily-goals-kcal-title"},a.createElement(l.Z,{align:"center",variant:"body1"},"Total Calories"),a.createElement(l.Z,{align:"center",variant:"h6"},t.total_calories))))}},4200:(e,t,n)=>{n.d(t,{N:()=>u});var a=n(7294),r=n(6332),l=n(6021),o=n(4083),i=n(2658),s=n(6914),c=n(1898),u=function(e){var t,n,u,m=e.goals,p=e.nutritionSummary,d=e.page,f=e.setGoals,v=e.handleSubmitUpdatedGoals;return void 0!==p&&p.length&&(n=p[5].amount,u=m.total_calories,t=Math.floor(n/u*100)),a.createElement(a.Fragment,null,a.createElement("div",{className:"daily-goals"},"mealplan"===d?a.createElement(i.Z,{variant:"h6"},"Today's Macronutrient Totals"):a.createElement(i.Z,{variant:"h6"},"Your Daily Macronutrient Goals"),"mealplan"===d&&void 0!==p&&p.length?a.createElement(a.Fragment,null,a.createElement(r.G,{calories:t,caloriesTotal:m.total_calories,caloriesUsed:Math.floor(p[5].amount)}),a.createElement("div",{className:"daily-goals-items","data-testid":"mealplan-goal-items"},a.createElement(c.z,{type:"Carbohydrates",nutrientsInMealPlan:p[7].amount,nutrientsTotal:m.total_carbohydrates}),a.createElement(c.z,{nutrientsTotal:m.total_protein,type:"Protein",nutrientsInMealPlan:p[28].amount}),a.createElement(c.z,{nutrientsTotal:m.total_fat,type:"Fat",nutrientsInMealPlan:p[11].amount}))):null,"search"===d||"user-profile"===d||"mealplan"===d&&void 0!==m&&void 0!==p&&0===p.length?a.createElement(a.Fragment,null,a.createElement(l.H,{goals:m}),a.createElement("form",{onSubmit:v,className:"daily-goals-items"},a.createElement(o.Y,{goals:m,page:d,setGoals:f}),"user-profile"===d?a.createElement(s.Z,{variant:"contained",fullWidth:!0,type:"submit"},"Update Goals"):null)):null))}},8801:(e,t,n)=>{n.d(t,{h:()=>v});var a=n(7294),r=n(6501),l=n(5295),o=n(4563),i=n(6867),s=n(4962),c=n(2643),u=n(2658),m=n(6447),p=n(9161),d=n(6914),f=n(3343),v=function(e){var t,n,v,y,h=e.route,g=e.image,E=e.title,b=e.restaurantChain,Z=e.nutrition,x=e.url,w=e.handleOpeningDialog,M=e.isMealPlanItem,k=e.servings;return"recipes"===h||"RECIPE"===h?Z.nutrients.forEach((function(e){"Calories"===e.name?t=Math.floor(Z.nutrients[0].amount):"Protein"===e.name?y=Math.floor(Z.nutrients[1].amount)+"g":"Fat"===e.name?v=Math.floor(Z.nutrients[1].amount):"Carbohydrates"===e.name&&(n=Math.floor(Z.nutrients[3].amount)+"g")})):(t=Z.calories,y=Z.protein,v=Z.fat,n=Z.carbs),a.createElement(r.Z,{elevation:1,className:"food-search-paper"},a.createElement(l.Z,{className:"search-item","data-testid":"food-search-item"},M&&void 0!==w?a.createElement(o.Z,{title:"Delete from Mealplan"},a.createElement(i.Z,{sx:{position:"absolute",alignSelf:"flex-end"},size:"small",color:"error","aria-label":"delete from mealplan",onClick:w},a.createElement(f.Z,null))):null,a.createElement(s.Z,{component:"img",alt:"food item image",height:"160",image:g}),a.createElement(c.Z,null,a.createElement(u.Z,{align:"center",variant:"subtitle1"},E),M?a.createElement(m.Z,{direction:"row"},a.createElement(u.Z,{variant:"subtitle2"},"Servings: ",k)):null,"menuItems"===h||"MENU_ITEM"===h&&a.createElement(u.Z,{variant:"h6"},b),void 0!==Z?a.createElement("div",{className:"search-item-nutrition"},a.createElement("div",{className:"search-item-nutrient"},a.createElement(u.Z,{variant:"subtitle2"},a.createElement("strong",null,"Calories")),a.createElement(u.Z,{variant:"body1"},t)),a.createElement("div",{className:"search-item-nutrient"},a.createElement(u.Z,{variant:"subtitle2"},a.createElement("strong",null,"Carbs")),a.createElement(u.Z,{variant:"body1"},n)),a.createElement("div",{className:"search-item-nutrient"},a.createElement(u.Z,{variant:"subtitle2"},a.createElement("strong",null,"Protein")),a.createElement(u.Z,{variant:"body1"},y)),a.createElement("div",{className:"search-item-nutrient"},a.createElement(u.Z,{variant:"subtitle2"},a.createElement("strong",null,"Fat")),a.createElement(u.Z,{variant:"body1"},v))):null),a.createElement(p.Z,{sx:{display:"flex"}},void 0!==x?a.createElement(d.Z,{fullWidth:!0,component:"a",href:x,target:"_blank",className:"card-button",variant:"outlined",color:"secondary",size:"small"},"View Recipe"):null,M?null:a.createElement(d.Z,{fullWidth:!0,className:"card-button",onClick:w,variant:"outlined",size:"small","data-testid":"open-addtomealplan-dialog"},"Add to Mealplan"))))}},1898:(e,t,n)=>{n.d(t,{z:()=>c});var a=n(5295),r=n(2643),l=n(6447),o=n(2658),i=n(9041),s=n(7294),c=function(e){var t,n=e.nutrientsTotal,c=e.type,u=e.nutrientsInMealPlan;return void 0!==u&&(t=Math.floor(u/n*100)),s.createElement(s.Fragment,null,s.createElement(a.Z,null,s.createElement(r.Z,{sx:{display:"flex",flexDirection:"column",minWidth:"240px",flexGrow:"0",gap:"1rem"}},s.createElement(l.Z,{direction:"row",gap:"1rem",alignItems:"space-between"},s.createElement(o.Z,{align:"center",variant:"body1"},c),s.createElement(o.Z,{align:"center",variant:"body1",sx:{marginLeft:"auto"}},Math.floor(u)," / ",n," g")),s.createElement(i.Z,{variant:"determinate",value:t}))))}},4083:(e,t,n)=>{n.d(t,{Y:()=>u});var a=n(7294),r=n(5295),l=n(2643),o=n(2658),i=n(3981),s=function(){return s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)},c=function(e){var t=e.nutrientsTotal,n=e.type,c=e.page,u=e.setGoals,m=e.goals;return a.createElement(a.Fragment,null,a.createElement(r.Z,{sx:{borderRadius:"15%"}},a.createElement(l.Z,{sx:{display:"flex",flexDirection:"column",height:"10rem",width:"10rem",aligItems:"center",gap:"1rem",justifyContent:"center"}},a.createElement(o.Z,{className:"nutrient-type-text",align:"center",variant:"body1",component:"div"},n),"user-profile"===c?a.createElement(i.Z,{value:"".concat(t),type:"number",endAdornment:"g",fullWidth:!0,onInput:function(e){if(void 0!==u)if("Carbohydrates"===e.target.id){var t=parseInt(e.target.value),n=t<=15?0:t/3-5;u(s(s({},m),{total_carbohydrates:t,min_carbs_per_meal:Math.floor(n),max_carbs_per_meal:Math.floor(t/3+5)}))}else if("Protein"==e.target.id){var a=parseInt(e.target.value),r=a<=30?0:a/3-10;u(s(s({},m),{total_protein:a,min_protein_per_meal:Math.floor(r),max_protein_per_meal:Math.floor(a/3+10)}))}else if("Fat"===e.target.id){var l=parseInt(e.target.value),o=l<=30?0:l/3-10;u(s(s({},m),{total_fat:l,min_fat_per_meal:Math.floor(o),max_fat_per_meal:Math.floor(l/3+10)}))}},id:n,required:!0,inputProps:{style:{textAlign:"center"}}}):a.createElement(o.Z,{align:"center",variant:"h6"},t," g"),"Carbohydrates"===n&&a.createElement(o.Z,{align:"center",className:"range-text",variant:"subtitle2"},"Per meal: ",m.min_carbs_per_meal," -"," ",m.max_carbs_per_meal,"g"),"Protein"===n&&a.createElement(o.Z,{align:"center",className:"range-text",variant:"subtitle2"},"Per meal: ",m.min_protein_per_meal," -"," ",m.max_protein_per_meal,"g"),"Fat"===n&&a.createElement(o.Z,{align:"center",className:"range-text",variant:"subtitle2"},"Per meal: ",m.min_fat_per_meal," -"," ",m.max_fat_per_meal,"g"))))},u=function(e){var t=e.goals,n=e.page,r=e.setGoals;return a.createElement(a.Fragment,null,a.createElement(c,{type:"Carbohydrates",nutrientsTotal:t.total_carbohydrates,page:n,setGoals:r,goals:t}),a.createElement(c,{nutrientsTotal:t.total_protein,type:"Protein",page:n,setGoals:r,goals:t}),a.createElement(c,{nutrientsTotal:t.total_fat,type:"Fat",page:n,setGoals:r,goals:t}))}},7204:(e,t,n)=>{n.d(t,{b:()=>c});var a=n(7294),r=n(6501),l=n(584),o=n(8779),i=n(7090),s=n(2658),c=function(e){var t=e.currentDay,n=(0,o.Z)((0,l.Z)(new Date(t)),"MMMM dd, yyyy"),c=(0,o.Z)((0,i.Z)(new Date(t)),"MMMM dd, yyyy");return a.createElement(a.Fragment,null,a.createElement(r.Z,{className:"mealplan-week-text",color:"secondary"},a.createElement(s.Z,{variant:"body1"},"Viewing Week:"),a.createElement(s.Z,{variant:"body1"},n),a.createElement(s.Z,{variant:"body1"},"-"),a.createElement(s.Z,{variant:"body1"},c)))}},3347:(e,t,n)=>{n.d(t,{K:()=>u});var a=n(7294),r=n(4200),l=n(7049),o=n(4386),i=n(6867),s=n(724),c=350,u=function(e){var t=e.mobileOpen,n=e.handleDrawerToggle,u=e.SearchFormComponent,m=e.apiData,p=e.goals,d=e.page,f=e.nutritionSummary,v=e.mealplanItemsFound;return a.createElement(a.Fragment,null,"search"===d&&a.createElement(a.Fragment,null,a.createElement(l.ZP,{variant:"temporary",open:t,onClose:n,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:c,pt:"100px"}}},a.createElement(o.Z,null,a.createElement(i.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:n,sx:{mr:2,display:{sm:"none"}}},a.createElement(s.Z,null))),void 0!==m&&m.length?u:a.createElement(r.N,{goals:p,page:"search"})),a.createElement(l.ZP,{open:!0,variant:"permanent",ModalProps:{keepMounted:!0},sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:c,pt:"100px"}}},void 0!==m&&m.length?u:a.createElement(r.N,{goals:p,page:"search"}))),"mealplan"===d&&void 0!==p&&a.createElement(a.Fragment,null,a.createElement(l.ZP,{variant:"temporary",open:t,onClose:n,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:c,pt:"100px"}}},a.createElement(o.Z,null,a.createElement(i.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:n,sx:{mr:2,display:{sm:"none"}}},a.createElement(s.Z,null))),f?a.createElement(r.N,{goals:p,nutritionSummary:f,page:"mealplan"}):null),a.createElement(l.ZP,{open:!0,variant:"permanent",ModalProps:{keepMounted:!0},sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:c,pt:"100px"}}},f.length?a.createElement(r.N,{goals:p,nutritionSummary:f,page:"mealplan"}):null,f.length||v?null:a.createElement(r.N,{goals:p,page:"search"}))))}},820:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Q});var a=n(7294),r=n(3347),l=n(9669),o=n.n(l),i=function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function o(e){try{s(a.next(e))}catch(e){l(e)}}function i(e){try{s(a.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}s((a=a.apply(e,t||[])).next())}))},s=function(e,t){var n,a,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&l[0]?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;switch(a=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},c=function(e){var t=e.mobileOpen,n=e.handleDrawerToggle,l=e.nutritionSummary,c=e.mealplanItemsFound,u=(0,a.useState)(),m=u[0],p=u[1];(0,a.useEffect)((function(){d()}),[]);var d=function(){return i(void 0,void 0,void 0,(function(){var e,t;return s(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,o().get("/api/metrics")];case 1:return e=n.sent(),p(e.data),[3,3];case 2:return t=n.sent(),console.log(t),[3,3];case 3:return[2]}}))}))};return a.createElement(a.Fragment,null,void 0!==m&&Object.keys(m).length?a.createElement(r.K,{mobileOpen:t,handleDrawerToggle:n,page:"mealplan",nutritionSummary:l,goals:m,mealplanItemsFound:c}):null)},u=n(7610),m=n(2856),p=n(7383),d=n(5842),f=n(1508),v=n(4659),y=n(466),h=n(8779),g=function(){return g=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},g.apply(this,arguments)},E=function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function o(e){try{s(a.next(e))}catch(e){l(e)}}function i(e){try{s(a.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}s((a=a.apply(e,t||[])).next())}))},b=function(e,t){var n,a,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&l[0]?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;switch(a=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},Z=function(e){var t=e.currentDay,n=e.setCurrentDay,r=e.setBreakfastItems,l=e.setLunchItems,o=e.setDinnerItems,i=e.setDayIndex,s=e.value,c=e.setValue,Z=function(e){return E(void 0,void 0,void 0,(function(){return b(this,(function(t){return i((0,y.Z)(e)),r([]),l([]),o([]),c(e),n((0,h.Z)(e,"yyyy-MM-dd")),[2]}))}))};return a.createElement(f.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"}},a.createElement(m._,{dateAdapter:u.Z},a.createElement(f.Z,{sx:{display:{xs:"block",sm:"none"}}},a.createElement(d.O,{label:"Current Date",inputFormat:"MM/dd/yyyy",value:t,onChange:Z,renderInput:function(e){return a.createElement(v.Z,g({},e,{variant:"standard"}))}})),a.createElement(f.Z,{sx:{display:{xs:"none",sm:"block"}}},a.createElement(p.$,{label:"Current Date",inputFormat:"MM/dd/yyyy","data-testid":"date-picker-textfield",value:s,onChange:Z,renderInput:function(e){return a.createElement(v.Z,g({},e,{variant:"standard"}))}}))))},x=n(4666),w=n(7645),M=n(6755),k=n(8979),S=n(6914),_=function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function o(e){try{s(a.next(e))}catch(e){l(e)}}function i(e){try{s(a.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}s((a=a.apply(e,t||[])).next())}))},D=function(e,t){var n,a,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&l[0]?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;switch(a=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},I=function(e){var t=e.shoppingListId,n=e.openDialog,r=e.setMealPlanItems,l=e.currentDay,i=e.setOpenDialog,s=e.handleOpeningDialog,c=e.setOpenSnackbar,u=e.setAlertSeverity,m=e.setAlertMessage;return a.createElement(a.Fragment,null,a.createElement(x.Z,{open:n},a.createElement(w.Z,null,"Are you sure you want to delete this item from your mealplan?"),a.createElement("form",{onSubmit:function(e){return _(void 0,void 0,void 0,(function(){var n,a,s;return D(this,(function(p){switch(p.label){case 0:e.preventDefault(),p.label=1;case 1:return p.trys.push([1,7,,8]),[4,o().delete("/api/mealplan/delete/".concat(t))];case 2:p.sent(),i(!1),u("success"),m("Mealplan item has been deleted."),c(!0),p.label=3;case 3:return p.trys.push([3,5,,6]),[4,o().get("/api/mealplan/day",{params:{date:l},withCredentials:!0})];case 4:return n=p.sent(),r(n.data.items),[3,6];case 5:return a=p.sent(),console.log(a),r([]),[3,6];case 6:return[3,8];case 7:return s=p.sent(),u("error"),m("Unable to delete mealplan item."),c(!0),i(!1),console.log(s),[3,8];case 8:return[2]}}))}))}},a.createElement(M.Z,null,a.createElement(f.Z,{display:"flex",flexDirection:"column",gap:"10px"})),a.createElement(k.Z,null,a.createElement(S.Z,{onClick:s},"Cancel"),a.createElement(S.Z,{"data-testid":"add-mealplan-btn","aria-label":"submit form to add to meal plan",type:"submit"},"Delete")))))},P=n(8801),C=n(5725),F=function(e){e.position;var t=e.type,n=e.id,r=e.shoppingListId,l=e.setMealPlanItems,i=e.currentDay,s=e.servings,c=e.title,u=e.setOpenSnackbar,m=e.setAlertSeverity,p=e.setAlertMessage,d=(0,a.useState)(null),f=d[0],v=d[1],y=(0,a.useState)(!1),h=y[0],g=y[1],E=function(){g(!h)};return(0,a.useEffect)((function(){var e="/api/recipes/".concat(n);"RECIPE"===t?e="/api/recipes/".concat(n):"PRODUCT"===t?e="/api/groceryProducts/".concat(n):"MENU_ITEM"===t&&(e="/api/menuItems/".concat(n)),o().get(e).then((function(e){v(e.data)})).catch((function(e){console.log(e)}))}),[n]),f?a.createElement(C.ZP,{item:!0,xs:12,sm:6,md:4,xl:3},a.createElement(P.h,{servings:s,route:t,image:null==f?void 0:f.image,title:c,restaurantChain:(null==f?void 0:f.restaurantChain)||void 0,nutrition:null==f?void 0:f.nutrition,url:(null==f?void 0:f.sourceUrl)||void 0,handleOpeningDialog:E,isMealPlanItem:!0}),a.createElement(I,{setMealPlanItems:l,currentDay:i,setOpenSnackbar:u,setAlertSeverity:m,setAlertMessage:p,shoppingListId:r,openDialog:h,setOpenDialog:g,handleOpeningDialog:E})):a.createElement("div",null,"Loading...")},N=n(6447),A=n(2658),O=function(e){var t=e.mealplanItems,n=e.setMealPlanItems,r=e.setOpenSnackbar,l=e.setAlertSeverity,o=e.setAlertMessage,i=e.currentDay;if(t.length){var s=[],c=[],u=[];return t.forEach((function(e){1===e.slot?s.push(e):2===e.slot?c.push(e):u.push(e)})),a.createElement(a.Fragment,null,a.createElement(N.Z,{direction:"column"},a.createElement(A.Z,{variant:"h3"},"Morning"),a.createElement(C.ZP,{container:!0,spacing:1},s.map((function(e){return a.createElement(a.Fragment,{key:e.id},a.createElement(F,{position:e.position,type:e.type,id:e.value.id,shoppingListId:e.id,servings:e.value.servings,title:e.value.title,setOpenSnackbar:r,setAlertSeverity:l,setAlertMessage:o,setMealPlanItems:n,currentDay:i}))})))),a.createElement(N.Z,{direction:"column"},a.createElement(A.Z,{variant:"h3"},"Afternoon"),a.createElement(C.ZP,{container:!0,spacing:1},c.map((function(e){return a.createElement(a.Fragment,{key:e.id},a.createElement(F,{position:e.position,type:e.type,id:e.value.id,shoppingListId:e.id,servings:e.value.servings,title:e.value.title,setOpenSnackbar:r,setAlertSeverity:l,setAlertMessage:o,setMealPlanItems:n,currentDay:i}))})))),a.createElement(N.Z,{direction:"column"},a.createElement(A.Z,{variant:"h3"},"Evening"),a.createElement(C.ZP,{container:!0,spacing:1},u.map((function(e){return a.createElement(a.Fragment,{key:e.id},a.createElement(F,{position:e.position,type:e.type,id:e.value.id,shoppingListId:e.id,servings:e.value.servings,title:e.value.title,setOpenSnackbar:r,setAlertSeverity:l,setAlertMessage:o,setMealPlanItems:n,currentDay:i}))})))))}return a.createElement(a.Fragment,null,a.createElement(A.Z,{variant:"h3"},"Morning"),a.createElement(A.Z,{variant:"h3"},"Afternoon"),a.createElement(A.Z,{variant:"h3"},"Evening"))},T=n(7485),z=n(7204),G=n(4386),L=n(6867),j=n(4656),U=n(2640),V=n(1703),H=n(7349),W=n(7069),R=n(3379),Y=n(1566),B=n(3147),K=function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function o(e){try{s(a.next(e))}catch(e){l(e)}}function i(e){try{s(a.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}s((a=a.apply(e,t||[])).next())}))},q=function(e,t){var n,a,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&l[0]?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;switch(a=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},$=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,l=t.length;r<l;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},J=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];const Q=function(){var e=(0,Y.useAuth)(),t=e.isLoading,n=(e.isLoggedin,(0,a.useState)((0,y.Z)(Date.now()))),r=n[0],l=n[1],i=(0,a.useState)([]),s=i[0],u=i[1],m=(0,a.useState)(!0),p=m[0],d=m[1],v=(0,a.useState)(!1),g=v[0],E=v[1],b=(0,a.useState)("error"),x=b[0],w=b[1],M=(0,a.useState)(""),k=M[0],S=M[1],_=(0,a.useState)((0,h.Z)(new Date(Date.now()),"yyyy-MM-dd")),D=_[0],I=_[1],P=(0,a.useState)([]),C=P[0],F=P[1],Q=(0,a.useState)([]),X=Q[0],ee=Q[1],te=(0,a.useState)([]),ne=te[0],ae=te[1],re=a.useState(new Date(Date.now())),le=re[0],oe=re[1],ie=a.useState(!1),se=ie[0],ce=ie[1],ue=(0,a.useState)([]),me=ue[0],pe=ue[1],de=function(){ce(!se)},fe=function(e){var t=e.split("-");return{year:t[0],month:t[1],day:t[2]}};(0,a.useEffect)((function(){ve()}),[D]);var ve=function(){return K(void 0,void 0,void 0,(function(){var e,t;return q(this,(function(n){switch(n.label){case 0:u([]),pe([]),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,o().get("/api/mealplan/day",{params:{date:D},withCredentials:!0})];case 2:return e=n.sent(),pe(e.data.nutritionSummary.nutrients),u(e.data.items),e.data.items.forEach((function(e){if(1===e.slot){var t=$($([],C,!0),[e],!1);F(t)}else if(2===e.slot){var n=$($([],X,!0),[e],!1);ee(n)}else{var a=$($([],ne,!0),[e],!1);ae(a)}})),[3,4];case 3:return t=n.sent(),console.log(t),w("info"),S("You have no items saved on this day for your mealplan."),E(!0),d(!1),[3,4];case 4:return[2]}}))}))};return a.createElement(a.Fragment,null,a.createElement(V.Z,null),a.createElement("div",{className:"mealplan-page"},a.createElement(G.Z,{sx:{display:{sm:"none"}}},a.createElement(L.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:de,sx:{mr:2,display:{sm:"none"}}},a.createElement(R.Z,null))),a.createElement(c,{mobileOpen:se,handleDrawerToggle:de,nutritionSummary:me,mealplanItemsFound:p}),a.createElement(f.Z,{sx:{p:"1rem",display:"flex",flexDirection:"column",gap:"2rem",justifyContent:"space-evenly"}},a.createElement(N.Z,{direction:"row",spacing:1},a.createElement(B.Z,null),a.createElement(A.Z,{variant:"body1"},"View your daily meal plan items or begin to add items to your meal plan")),a.createElement(Z,{setBreakfastItems:F,setLunchItems:ee,setDinnerItems:ae,currentDay:D,setCurrentDay:I,setDayIndex:l,value:le,setValue:oe}),a.createElement(z.b,{currentDay:D}),a.createElement(j.Z,{value:r,onChange:function(e,t){u([]),pe([]);var n,a=t-r,o=fe(D),i=o.year,s=o.month,c=o.day;a>0?n=(0,H.Z)(new Date("".concat(i,", ").concat(s,", ").concat(c)),a):a<0&&(n=(0,W.Z)(new Date("".concat(i,", ").concat(s,", ").concat(c)),Math.abs(a))),void 0!==n&&(oe(n),l(t),I((0,h.Z)(n,"yyyy-MM-dd")))}},J.map((function(e){return a.createElement(U.Z,{key:e,label:e})}))),t?null:a.createElement(O,{setMealPlanItems:u,currentDay:D,mealplanItems:s,setOpenSnackbar:E,setAlertSeverity:w,setAlertMessage:S}),a.createElement(T.I,{openAlert:g,handleAlert:function(e){E(!1)},alertSeverity:x,alertMessage:k}))))}}}]);