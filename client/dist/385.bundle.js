"use strict";(self.webpackChunkthe_diabetes_calculator=self.webpackChunkthe_diabetes_calculator||[]).push([[385],{8801:(e,t,n)=>{n.d(t,{h:()=>f});var a=n(7294),r=n(6501),l=n(5295),i=n(4563),o=n(6867),s=n(4962),c=n(2643),u=n(2658),m=n(6447),d=n(9161),p=n(6914),v=n(3343),f=function(e){var t,n,f,h,g=e.route,E=e.image,y=e.title,b=e.restaurantChain,Z=e.nutrition,S=e.url,M=e.handleOpeningDialog,C=e.isMealPlanItem,w=e.servings;return void 0!==Z&&"recipes"===g||"RECIPE"===g?Z.nutrients.forEach((function(e){"Calories"===e.name?t=Math.floor(Z.nutrients[0].amount):"Protein"===e.name?h=Math.floor(Z.nutrients[1].amount)+"g":"Fat"===e.name?f=Math.floor(Z.nutrients[1].amount):"Carbohydrates"===e.name&&(n=Math.floor(Z.nutrients[3].amount)+"g")})):void 0!==Z&&(t=Z.calories,h=Z.protein,f=Z.fat,n=Z.carbs),a.createElement(r.Z,{elevation:1,className:"food-search-paper"},a.createElement(l.Z,{className:"search-item","data-testid":"food-search-item"},C&&void 0!==M?a.createElement(i.Z,{title:"Delete from Mealplan"},a.createElement(o.Z,{sx:{position:"absolute",alignSelf:"flex-end"},size:"small",color:"error","aria-label":"delete from mealplan",onClick:M},a.createElement(v.Z,null))):null,a.createElement(s.Z,{component:"img",alt:"food item image",height:"160",image:E}),a.createElement(c.Z,null,a.createElement(u.Z,{align:"center",noWrap:!0,variant:"subtitle1"},y),C&&void 0!==w?a.createElement(m.Z,{direction:"row"},a.createElement(u.Z,{variant:"subtitle2"},"Servings: ",w)):null,"menuItems"===g||"MENU_ITEM"===g?a.createElement(u.Z,{variant:"subtitle2"},b):null,void 0!==Z?a.createElement("div",{className:"search-item-nutrition"},a.createElement("div",{className:"search-item-nutrient"},a.createElement(u.Z,{variant:"subtitle2"},a.createElement("strong",null,"Calories")),a.createElement(u.Z,{variant:"body1"},t)),a.createElement("div",{className:"search-item-nutrient"},a.createElement(u.Z,{variant:"subtitle2"},a.createElement("strong",null,"Carbs")),a.createElement(u.Z,{variant:"body1"},n)),a.createElement("div",{className:"search-item-nutrient"},a.createElement(u.Z,{variant:"subtitle2"},a.createElement("strong",null,"Protein")),a.createElement(u.Z,{variant:"body1"},h)),a.createElement("div",{className:"search-item-nutrient"},a.createElement(u.Z,{variant:"subtitle2"},a.createElement("strong",null,"Fat")),a.createElement(u.Z,{variant:"body1"},f))):null),a.createElement(d.Z,{sx:{display:"flex"}},void 0!==S?a.createElement(p.Z,{fullWidth:!0,component:"a",href:S,target:"_blank",className:"card-button",variant:"outlined",color:"secondary",size:"small"},"View Recipe"):null,C?null:a.createElement(p.Z,{fullWidth:!0,className:"card-button",onClick:M,variant:"outlined",size:"small","data-testid":"open-addtomealplan-dialog"},"Add to Mealplan"))))}},6162:(e,t,n)=>{n.d(t,{y:()=>r});var a=n(6974),r=function(){return(0,a.bx)()}},2385:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var a=n(7294),r=n(8801),l=n(6446),i=n(7666),o=n(7920),s=n(4347),c=n(3460),u=[{value:1,name:"1"},{value:2,name:"2"},{value:3,name:"3"}],m=function(e){var t=e.servings,n=e.handleSelectServings;return a.createElement(l.Z,null,a.createElement(i.Z,null,"Servings"),a.createElement(o.Z,{value:"".concat(t),onChange:n,label:"Servings",required:!0,id:"servings",fullWidth:!0,sx:{width:"100%"}},u.map((function(e){return a.createElement(s.Z,{key:e.value,value:e.value},e.name)}))),a.createElement(c.Z,null,"Choose number of servings"))},d=[{value:1,name:"Morning"},{value:2,name:"Afternoon"},{value:3,name:"Evening"}],p=function(e){var t=e.slot,n=e.handleSelectSlot;return a.createElement(l.Z,null,a.createElement(i.Z,null,"Slot"),a.createElement(o.Z,{value:"".concat(t),onChange:n,label:"Slot",required:!0,fullWidth:!0,id:"slot"},d.map((function(e){return a.createElement(s.Z,{key:e.value,value:e.value},e.name)}))),a.createElement(c.Z,null,"Choose correct slot for chosen day"))},v=n(4666),f=n(7645),h=n(6755),g=n(9226),E=n(8979),y=n(6914),b=n(7610),Z=n(2856),S=n(7383),M=n(5842),C=n(4659),w={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:10,Nov:9,Dec:11},k=n(2902),x=n(722),O=n(9119),A=n(8366),D=function(){return D=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},D.apply(this,arguments)},I=function(e){var t=e.setData,n=e.data,r=a.useState((0,A.Z)()),l=r[0],i=r[1],o=function(e){i(e);var a=function(e){var t=(e+"").split(" "),n=t[4],a=w[t[1]],r=n.split(":"),l=r[0],i=r[1],o=r[2];return{year:parseInt(t[3]),month:a,day:parseInt(t[2]),hour:parseInt(l),min:parseInt(i),sec:parseInt(o)}}((0,x.zonedTimeToUtc)(e,"UTC")),r=a.year,l=a.month,o=a.day,s=a.hour,c=a.min,u=a.sec,m=(0,O.Z)(new Date(r,l,o,s,c,u)),d=(0,k.Z)(m);t(D(D({},n),{date:d}))};return a.createElement(Z._,{dateAdapter:b.Z},a.createElement(g.Z,{sx:{display:{xs:"block",sm:"none"}}},a.createElement(M.O,{label:"Select day",inputFormat:"MM/dd/yyyy",value:l,onChange:o,renderInput:function(e){return a.createElement(C.Z,D({},e,{variant:"standard"}))}})),a.createElement(g.Z,{sx:{display:{xs:"none",sm:"block"}}},a.createElement(S.$,{label:"Select day",inputFormat:"MM/dd/yyyy","data-testid":"date-picker-textfield",value:l,onChange:o,renderInput:function(e){return a.createElement(C.Z,D({},e,{variant:"standard"}))}})))},N=n(9669),T=n.n(N),P=function(){return P=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},P.apply(this,arguments)},F=function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function i(e){try{s(a.next(e))}catch(e){l(e)}}function o(e){try{s(a.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}s((a=a.apply(e,t||[])).next())}))},L=function(e,t){var n,a,r,l,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(l){return function(o){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(r=2&l[0]?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;switch(a=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,a=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){i.label=l[1];break}if(6===l[0]&&i.label<r[1]){i.label=r[1],r=l;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(l);break}r[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],a=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}},_=function(e){var t,n=e.openDialog,r=e.handleOpeningDialog,l=e.route,i=e.imageType,o=e.title,s=e.id,c=e.setOpenDialog,u=e.setAlertMessage,d=e.setOpenSnackbar,b=e.setAlertSeverity;t="recipes"===l?"RECIPE":"groceryProducts"===l?"PRODUCT":"MENU_ITEM";var Z=(0,a.useState)({date:(0,k.Z)((0,A.Z)()),slot:1,position:0,type:t,value:{id:s,servings:1,title:o,imageType:i}}),S=Z[0],M=Z[1];return a.createElement(v.Z,{open:n},a.createElement(f.Z,{align:"left"},"Select preferred day, slot and number of servings to add to Meaplan"),a.createElement("form",{onSubmit:function(e){return F(void 0,void 0,void 0,(function(){var t;return L(this,(function(n){switch(n.label){case 0:e.preventDefault(),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,T().post("/api/mealplan",S)];case 2:return n.sent(),b("success"),u("Item has been added to your mealplan!"),d(!0),c(!1),[3,4];case 3:return t=n.sent(),console.log(t),[3,4];case 4:return[2]}}))}))}},a.createElement(h.Z,null,a.createElement(g.Z,{display:"flex",flexDirection:"column",gap:"1rem"},a.createElement(I,{setData:M,data:S}),a.createElement(p,{handleSelectSlot:function(e){M(P(P({},S),{slot:parseInt(e.target.value)}))},slot:S.slot}),a.createElement(m,{handleSelectServings:function(e){M((function(t){return P(P({},t),{value:P(P({},t.value),{servings:parseInt(e.target.value)})})}))},servings:S.value.servings}))),a.createElement(E.Z,null,a.createElement(y.Z,{"data-testid":"add-mealplan-btn","aria-label":"submit form to add to meal plan",type:"submit",variant:"contained"},"Submit"),a.createElement(y.Z,{variant:"contained","aria-label":"cancel",onClick:r,color:"error"},"Cancel"))))},U=function(e){var t=e.route,n=e.image,l=e.imageType,i=e.title,o=e.nutrition,s=e.restaurantChain,c=e.url,u=e.id,m=e.setAlertMessage,d=e.setOpenSnackbar,p=e.setAlertSeverity,v=(0,a.useState)(!1),f=v[0],h=v[1],g=function(){h(!f)};return a.createElement("div",{"data-testid":"food-search-item"},a.createElement(r.h,{route:t,image:n,title:i,restaurantChain:s,nutrition:o,url:c,handleOpeningDialog:g,isMealPlanItem:!1}),a.createElement(_,{openDialog:f,handleOpeningDialog:g,route:t,imageType:l,title:i,id:u,setOpenDialog:h,setAlertMessage:m,setOpenSnackbar:d,setAlertSeverity:p}))},W=n(6447),z=n(2658),j=n(7600),R=function(e){var t=e.apiData,n=e.route,r=e.handleLoadMore,l=e.setAlertMessage,i=e.setOpenSnackbar,o=e.setAlertSeverity,s=e.showLoadMoreBtn;return a.createElement("div",{className:"food-search-list"},a.createElement(W.Z,{direction:"row",spacing:{xs:0,sm:1},sx:{width:"100%"}},a.createElement(j.Z,null),a.createElement(z.Z,{variant:"body1"},"Click on the Add to Mealplan button then choose intended date and slot (morning, afternoon, or evening) to save any item")),a.createElement("div",{className:"food-search-main-container"},t.map((function(e){return a.createElement(U,{key:e.id,id:e.id,imageType:e.imageType,image:e.image,title:e.title,nutrition:e.nutrition,route:n,url:e.sourceUrl,restaurantChain:e.restaurantChain,setAlertMessage:l,setOpenSnackbar:i,setAlertSeverity:o})}))),s?a.createElement(y.Z,{fullWidth:!0,onClick:r,variant:"contained"},"Load More"):null)},B=n(9062),J=n(4386),q=n(6867),G=n(1566),V=n(3379),$=n(6162);const H=function(){var e=(0,G.a)(),t=e.isLoading,n=(e.isLoggedIn,e.username,(0,$.y)()),r=n.loading,l=n.handleDrawerToggle,i=n.apiData,o=n.route,s=n.handleLoadMore,c=n.setAlertMessage,u=n.setOpenAlert,m=n.setAlertSeverity,d=n.showLoadMoreBtn,p=n.SearchFormComponent;return a.createElement(a.Fragment,null,t?null:a.createElement(a.Fragment,null,a.createElement(g.Z,{className:"search-page",sx:{width:"100vw"}},r?a.createElement(B.Z,{size:68}):null,a.createElement(J.Z,{sx:{display:{sm:"none"},alignSelf:"flex-start"}},a.createElement(q.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:l,sx:{mr:2,display:{sm:"none"}}},a.createElement(V.Z,null))),i.length?a.createElement(a.Fragment,null,a.createElement(R,{apiData:i,route:o,handleLoadMore:s,setAlertMessage:c,setOpenSnackbar:u,setAlertSeverity:m,showLoadMoreBtn:d})):a.createElement(a.Fragment,null,p))))}}}]);