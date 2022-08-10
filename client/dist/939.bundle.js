"use strict";(self.webpackChunkthe_diabetes_calculator=self.webpackChunkthe_diabetes_calculator||[]).push([[939],{3147:(e,t,n)=>{var a=n(5318);t.Z=void 0;var r=a(n(4938)),l=n(5893),o=(0,r.default)((0,l.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"}),"CalendarMonth");t.Z=o},272:(e,t,n)=>{n.d(t,{h:()=>y});var a=n(7294),r=n(6501),l=n(5295),o=n(4563),i=n(6867),c=n(4962),s=n(2643),u=n(2658),m=n(6447),p=n(9161),d=n(6914),f=n(3343),y=function(e){var t,n,y,h,v=e.route,g=e.image,b=e.title,E=e.restaurantChain,Z=e.nutrition,w=e.url,x=e.handleOpeningDialog,M=e.isMealPlanItem,S=e.servings;return"recipes"===v||"RECIPE"===v?Z.nutrients.forEach((function(e){"Calories"===e.name?t=Math.floor(Z.nutrients[0].amount):"Protein"===e.name?h=Math.floor(Z.nutrients[1].amount)+"g":"Fat"===e.name?y=Math.floor(Z.nutrients[1].amount):"Carbohydrates"===e.name&&(n=Math.floor(Z.nutrients[3].amount)+"g")})):(t=Z.calories,h=Z.protein,y=Z.fat,n=Z.carbs),a.createElement(r.Z,{elevation:1,className:"food-search-paper"},a.createElement(l.Z,{className:"search-item","data-testid":"food-search-item"},M?a.createElement(o.Z,{title:"Delete from Mealplan"},a.createElement(i.Z,{sx:{position:"absolute",alignSelf:"flex-end"},size:"small",color:"error","aria-label":"delete from mealplan",onClick:x},a.createElement(f.Z,null))):null,a.createElement(c.Z,{component:"img",alt:"food item image",height:"160",image:g}),a.createElement(s.Z,null,a.createElement(u.Z,{align:"center",variant:"subtitle1"},b),M?a.createElement(m.Z,{direction:"row"},a.createElement(u.Z,{variant:"subtitle2"},"Servings: ",S)):null,"menuItems"===v||"MENU_ITEM"===v&&a.createElement(u.Z,{variant:"h6"},E),a.createElement("div",{className:"search-item-nutrition"},a.createElement("div",{className:"search-item-nutrient"},a.createElement(u.Z,{variant:"subtitle2"},a.createElement("strong",null,"Calories")),a.createElement(u.Z,{variant:"body1"},t)),a.createElement("div",{className:"search-item-nutrient"},a.createElement(u.Z,{variant:"subtitle2"},a.createElement("strong",null,"Carbs")),a.createElement(u.Z,{variant:"body1"},n)),a.createElement("div",{className:"search-item-nutrient"},a.createElement(u.Z,{variant:"subtitle2"},a.createElement("strong",null,"Protein")),a.createElement(u.Z,{variant:"body1"},h)),a.createElement("div",{className:"search-item-nutrient"},a.createElement(u.Z,{variant:"subtitle2"},a.createElement("strong",null,"Fat")),a.createElement(u.Z,{variant:"body1"},y)))),a.createElement(p.Z,{sx:{display:"flex"}},void 0!==w?a.createElement(d.Z,{fullWidth:!0,component:"a",href:w,target:"_blank",className:"card-button",variant:"outlined",color:"secondary",size:"small"},"View Recipe"):null,M?null:a.createElement(d.Z,{fullWidth:!0,className:"card-button",onClick:x,variant:"outlined",size:"small","data-testid":"open-addtomealplan-dialog"},"Add to Mealplan"))))}},4740:(e,t,n)=>{n.d(t,{K:()=>u});var a=n(7294),r=n(1380),l=n(7049),o=n(4386),i=n(6867),c=n(724),s=350,u=function(e){var t=e.mobileOpen,n=e.handleDrawerToggle,u=e.SearchFormComponent,m=e.apiData,p=e.goals,d=e.page,f=e.nutritionSummary,y=e.mealplanItemsFound;return a.createElement(a.Fragment,null,"search"===d&&a.createElement(a.Fragment,null,a.createElement(l.ZP,{variant:"temporary",open:t,onClose:n,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:s,pt:"100px"}}},a.createElement(o.Z,null,a.createElement(i.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:n,sx:{mr:2,display:{sm:"none"}}},a.createElement(c.Z,null))),void 0!==m&&m.length?u:a.createElement(r.N,{goals:p,page:"search"})),a.createElement(l.ZP,{open:!0,variant:"permanent",ModalProps:{keepMounted:!0},sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:s,pt:"100px"}}},void 0!==m&&m.length?u:a.createElement(r.N,{goals:p,page:"search"}))),"mealplan"===d&&void 0!==p&&a.createElement(a.Fragment,null,a.createElement(l.ZP,{variant:"temporary",open:t,onClose:n,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:s,pt:"100px"}}},a.createElement(o.Z,null,a.createElement(i.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:n,sx:{mr:2,display:{sm:"none"}}},a.createElement(c.Z,null))),f?a.createElement(r.N,{goals:p,nutritionSummary:f,page:"mealplan"}):null),a.createElement(l.ZP,{open:!0,variant:"permanent",ModalProps:{keepMounted:!0},sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:s,pt:"100px"}}},f.length?a.createElement(r.N,{goals:p,nutritionSummary:f,page:"mealplan"}):null,f.length||y?null:a.createElement(r.N,{goals:p,page:"search"}))))}},4088:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ne});var a=n(7294),r=n(4740),l=n(9669),o=n.n(l),i=function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function o(e){try{c(a.next(e))}catch(e){l(e)}}function i(e){try{c(a.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}c((a=a.apply(e,t||[])).next())}))},c=function(e,t){var n,a,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&l[0]?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;switch(a=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},s=function(e){var t=e.mobileOpen,n=e.handleDrawerToggle,l=(e.page,e.nutritionSummary),s=(e.mealplanItems,e.mealplanItemsFound),u=(0,a.useState)(),m=u[0],p=u[1];(0,a.useEffect)((function(){d()}),[]);var d=function(){return i(void 0,void 0,void 0,(function(){var e,t;return c(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,o().get("/api/metrics")];case 1:return e=n.sent(),p(e.data),[3,3];case 2:return t=n.sent(),console.log(t),[3,3];case 3:return[2]}}))}))};return a.createElement(a.Fragment,null,void 0!==m&&Object.keys(m).length&&a.createElement(r.K,{mobileOpen:t,handleDrawerToggle:n,page:"mealplan",nutritionSummary:l,goals:m,mealplanItemsFound:s}))},u=n(2298),m=n(2856),p=n(7383),d=n(5842),f=n(1508),y=n(4659),h=n(466),v=n(8779),g=function(){return g=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},g.apply(this,arguments)},b=function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function o(e){try{c(a.next(e))}catch(e){l(e)}}function i(e){try{c(a.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}c((a=a.apply(e,t||[])).next())}))},E=function(e,t){var n,a,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&l[0]?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;switch(a=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},Z=function(e){var t=e.currentDay,n=e.setCurrentDay,r=e.setBreakfastItems,l=e.setLunchItems,o=e.setDinnerItems,i=e.setDayIndex,c=e.value,s=e.setValue,Z=function(e){return b(void 0,void 0,void 0,(function(){return E(this,(function(t){return i((0,h.Z)(e)),r([]),l([]),o([]),s(e),n((0,v.Z)(e,"yyyy-MM-dd")),[2]}))}))};return a.createElement(f.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"}},a.createElement(m._,{dateAdapter:u.Z},a.createElement(f.Z,{sx:{display:{xs:"block",sm:"none"}}},a.createElement(d.O,{label:"Current Date",inputFormat:"MM/dd/yyyy",value:t,onChange:Z,renderInput:function(e){return a.createElement(y.Z,g({},e,{variant:"standard"}))}})),a.createElement(f.Z,{sx:{display:{xs:"none",sm:"block"}}},a.createElement(p.$,{label:"Current Date",inputFormat:"MM/dd/yyyy","data-testid":"date-picker-textfield",value:c,onChange:Z,renderInput:function(e){return a.createElement(y.Z,g({},e,{variant:"standard"}))}}))))},w=n(4666),x=n(7645),M=n(7750),S=n(8979),k=n(6914),D=function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function o(e){try{c(a.next(e))}catch(e){l(e)}}function i(e){try{c(a.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}c((a=a.apply(e,t||[])).next())}))},I=function(e,t){var n,a,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&l[0]?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;switch(a=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},C=function(e){var t=e.shoppingListId,n=e.openDialog,r=e.setMealPlanItems,l=e.currentDay,i=e.setOpenDialog,c=e.handleOpeningDialog,s=e.setOpenSnackbar,u=e.setAlertSeverity,m=e.setAlertMessage;return a.createElement(a.Fragment,null,a.createElement(w.Z,{open:n},a.createElement(x.Z,null,"Are you sure you want to delete this item from your mealplan?"),a.createElement("form",{onSubmit:function(e){return D(void 0,void 0,void 0,(function(){var n,a,c;return I(this,(function(p){switch(p.label){case 0:e.preventDefault(),p.label=1;case 1:return p.trys.push([1,7,,8]),[4,o().delete("/api/mealplan/delete/".concat(t))];case 2:p.sent(),i(!1),u("success"),m("Mealplan item has been deleted."),s(!0),p.label=3;case 3:return p.trys.push([3,5,,6]),[4,o().get("/api/mealplan/day",{params:{date:l},withCredentials:!0})];case 4:return n=p.sent(),r(n.data.items),[3,6];case 5:return a=p.sent(),console.log(a),r([]),[3,6];case 6:return[3,8];case 7:return c=p.sent(),u("error"),m("Unable to delete mealplan item."),s(!0),i(!1),console.log(c),[3,8];case 8:return[2]}}))}))}},a.createElement(M.Z,null,a.createElement(f.Z,{display:"flex",flexDirection:"column",gap:"10px"})),a.createElement(S.Z,null,a.createElement(k.Z,{onClick:c},"Cancel"),a.createElement(k.Z,{"data-testid":"add-mealplan-btn","aria-label":"submit form to add to meal plan",type:"submit"},"Delete")))))},P=n(272),A=n(5725),O=function(e){e.position;var t=e.type,n=e.id,r=e.shoppingListId,l=e.setMealPlanItems,i=e.currentDay,c=e.servings,s=e.title,u=e.setOpenSnackbar,m=e.setAlertSeverity,p=e.setAlertMessage,d=(0,a.useState)(null),f=d[0],y=d[1],h=(0,a.useState)(!1),v=h[0],g=h[1],b=function(){g(!v)};return(0,a.useEffect)((function(){var e="/api/recipes/".concat(n);"RECIPE"===t?e="/api/recipes/".concat(n):"PRODUCT"===t?e="/api/groceryProducts/".concat(n):"MENU_ITEM"===t&&(e="/api/menuItems/".concat(n)),o().get(e).then((function(e){y(e.data)})).catch((function(e){console.log(e)}))}),[n]),f?a.createElement(A.ZP,{item:!0,xs:12,sm:6,md:4,xl:3},a.createElement(P.h,{servings:c,route:t,image:null==f?void 0:f.image,title:s,restaurantChain:(null==f?void 0:f.restaurantChain)||void 0,nutrition:null==f?void 0:f.nutrition,url:(null==f?void 0:f.sourceUrl)||void 0,handleOpeningDialog:b,isMealPlanItem:!0}),a.createElement(C,{setMealPlanItems:l,currentDay:i,setOpenSnackbar:u,setAlertSeverity:m,setAlertMessage:p,shoppingListId:r,openDialog:v,setOpenDialog:g,handleOpeningDialog:b})):a.createElement("div",null,"Loading...")},F=n(6447),N=n(2658),z=function(e){var t=e.mealplanItems,n=e.setMealPlanItems,r=e.setOpenSnackbar,l=e.setAlertSeverity,o=e.setAlertMessage,i=e.currentDay;if(t.length){var c=[],s=[],u=[];return t.forEach((function(e){1===e.slot?c.push(e):2===e.slot?s.push(e):u.push(e)})),a.createElement(a.Fragment,null,a.createElement(F.Z,{direction:"column"},a.createElement(N.Z,{variant:"h3"},"Morning"),a.createElement(A.ZP,{container:!0,spacing:1},c.map((function(e){return a.createElement(a.Fragment,{key:e.id},a.createElement(O,{position:e.position,type:e.type,id:e.value.id,shoppingListId:e.id,servings:e.value.servings,title:e.value.title,setOpenSnackbar:r,setAlertSeverity:l,setAlertMessage:o,setMealPlanItems:n,currentDay:i}))})))),a.createElement(F.Z,{direction:"column"},a.createElement(N.Z,{variant:"h3"},"Afternoon"),a.createElement(A.ZP,{container:!0,spacing:1},s.map((function(e){return a.createElement(a.Fragment,{key:e.id},a.createElement(O,{position:e.position,type:e.type,id:e.value.id,shoppingListId:e.id,servings:e.value.servings,title:e.value.title,setOpenSnackbar:r,setAlertSeverity:l,setAlertMessage:o,setMealPlanItems:n,currentDay:i}))})))),a.createElement(F.Z,{direction:"column"},a.createElement(N.Z,{variant:"h3"},"Evening"),a.createElement(A.ZP,{container:!0,spacing:1},u.map((function(e){return a.createElement(a.Fragment,{key:e.id},a.createElement(O,{position:e.position,type:e.type,id:e.value.id,shoppingListId:e.id,servings:e.value.servings,title:e.value.title,setOpenSnackbar:r,setAlertSeverity:l,setAlertMessage:o,setMealPlanItems:n,currentDay:i}))})))))}return a.createElement(a.Fragment,null,a.createElement(N.Z,{variant:"h3"},"Morning"),a.createElement(N.Z,{variant:"h3"},"Afternoon"),a.createElement(N.Z,{variant:"h3"},"Evening"))},L=n(3696),T=n(6501),V=n(584),_=n(7090),j=function(e){var t=e.currentDay,n=(0,v.Z)((0,V.Z)(new Date(t)),"MMMM dd, yyyy"),r=(0,v.Z)((0,_.Z)(new Date(t)),"MMMM dd, yyyy");return a.createElement(a.Fragment,null,a.createElement(T.Z,{className:"mealplan-week-text",color:"secondary"},a.createElement(N.Z,{variant:"body1"},"Viewing Week:"),a.createElement(N.Z,{variant:"body1"},n),a.createElement(N.Z,{variant:"body1"},"-"),a.createElement(N.Z,{variant:"body1"},r)))},H=n(4386),U=n(6867),G=n(4656),R=n(2640),W=n(9125),B=n(7349),K=n(3946),Y=n(3882);var $=n(3379),q=n(1566),J=n(3147),Q=function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function o(e){try{c(a.next(e))}catch(e){l(e)}}function i(e){try{c(a.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}c((a=a.apply(e,t||[])).next())}))},X=function(e,t){var n,a,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&l[0]?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;switch(a=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},ee=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,l=t.length;r<l;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},te=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];const ne=function(){var e=(0,q.useAuth)(),t=e.isLoading,n=(e.isLoggedin,(0,a.useState)((0,h.Z)(Date.now()))),r=n[0],l=n[1],i=(0,a.useState)([]),c=i[0],u=i[1],m=(0,a.useState)(!0),p=m[0],d=m[1],y=(0,a.useState)(!1),g=y[0],b=y[1],E=(0,a.useState)("error"),w=E[0],x=E[1],M=(0,a.useState)(""),S=M[0],k=M[1],D=(0,a.useState)((0,v.Z)(new Date(Date.now()),"yyyy-MM-dd")),I=D[0],C=D[1],P=(0,a.useState)([]),A=P[0],O=P[1],T=(0,a.useState)([]),V=T[0],_=T[1],ne=(0,a.useState)([]),ae=ne[0],re=ne[1],le=a.useState(new Date(Date.now())),oe=le[0],ie=le[1],ce=a.useState(!1),se=ce[0],ue=ce[1],me=(0,a.useState)([]),pe=me[0],de=me[1],fe=function(){ue(!se)},ye=function(e){var t=e.split("-");return{year:t[0],month:t[1],day:t[2]}};(0,a.useEffect)((function(){he()}),[I]);var he=function(){return Q(void 0,void 0,void 0,(function(){var e,t;return X(this,(function(n){switch(n.label){case 0:u([]),de([]),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,o().get("/api/mealplan/day",{params:{date:I},withCredentials:!0})];case 2:return e=n.sent(),de(e.data.nutritionSummary.nutrients),u(e.data.items),e.data.items.forEach((function(e){if(1===e.slot){var t=ee(ee([],A,!0),[e],!1);O(t)}else if(2===e.slot){var n=ee(ee([],V,!0),[e],!1);_(n)}else{var a=ee(ee([],ae,!0),[e],!1);re(a)}})),[3,4];case 3:return t=n.sent(),console.log(t),x("info"),k("You have no items saved on this day for your mealplan."),b(!0),d(!1),[3,4];case 4:return[2]}}))}))};return t?null:a.createElement(a.Fragment,null,a.createElement(W.Z,{isLoggedIn:!0}),a.createElement("div",{className:"mealplan-page"},a.createElement(H.Z,{sx:{display:{sm:"none"}}},a.createElement(U.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:fe,sx:{mr:2,display:{sm:"none"}}},a.createElement($.Z,null))),a.createElement(s,{mobileOpen:se,page:"mealplan",handleDrawerToggle:fe,nutritionSummary:pe,mealplanItems:c,mealplanItemsFound:p}),a.createElement(f.Z,{sx:{p:"1rem",display:"flex",flexDirection:"column",gap:"2rem",justifyContent:"space-evenly"}},a.createElement(F.Z,{direction:"row",spacing:1},a.createElement(J.Z,null),a.createElement(N.Z,{variant:"body1"},"View your daily meal plan items or begin to add items to your meal plan")),a.createElement(Z,{setBreakfastItems:O,setLunchItems:_,setDinnerItems:re,currentDay:I,setCurrentDay:C,setDayIndex:l,value:oe,setValue:ie}),a.createElement(j,{currentDay:I}),a.createElement(G.Z,{value:r,onChange:function(e,t){u([]),de([]);var n,a=t-r,o=ye(I),i=o.year,c=o.month,s=o.day;a>0?n=(0,B.Z)(new Date("".concat(i,", ").concat(c,", ").concat(s)),a):a<0&&(n=function(e,t){(0,Y.Z)(2,arguments);var n=(0,K.Z)(t);return(0,B.Z)(e,-n)}(new Date("".concat(i,", ").concat(c,", ").concat(s)),Math.abs(a))),void 0!==n&&(ie(n),l(t),C((0,v.Z)(n,"yyyy-MM-dd")))}},te.map((function(e){return a.createElement(R.Z,{key:e,label:e})}))),a.createElement(z,{setMealPlanItems:u,currentDay:I,mealplanItems:c,setOpenSnackbar:b,setAlertSeverity:x,setAlertMessage:k}),a.createElement(L.I,{openAlert:g,handleAlert:function(e){b(!1)},alertSeverity:w,alertMessage:S}))))}}}]);