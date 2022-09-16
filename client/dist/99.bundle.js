"use strict";(self.webpackChunkthe_diabetes_calculator=self.webpackChunkthe_diabetes_calculator||[]).push([[99],{8991:(e,t,a)=>{var n=a(5318);t.Z=void 0;var r=n(a(4938)),l=a(5893),o=(0,r.default)((0,l.jsx)("path",{d:"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2h-4ZM4 16V6h16v10.01L4 16Zm5.0967-6.0469c0-1.027.836-1.864 1.864-1.864 1.027 0 1.864.837 1.864 1.864 0 1.027-.837 1.864-1.864 1.864-1.028 0-1.864-.837-1.864-1.864Zm7.032 4.236-2.482-2.482c.331-.505.527-1.107.527-1.754 0-1.772-1.441-3.213-3.213-3.213s-3.214 1.441-3.214 3.213 1.442 3.214 3.214 3.214c.636 0 1.225-.192 1.724-.511l2.489 2.488.955-.955Z"}),"ScreenSearchDesktop");t.Z=o},4200:(e,t,a)=>{a.d(t,{N:()=>u});var n=a(7294),r=a(6332),l=a(6021),o=a(4083),s=a(2658),i=a(6914),c=a(1898),u=function(e){var t,a,u,m=e.goals,p=e.nutritionSummary,h=e.page,g=e.setGoals,d=e.handleSubmitUpdatedGoals;return void 0!==p&&p.length&&(a=p[5].amount,u=m.total_calories,t=Math.floor(a/u*100)),n.createElement(n.Fragment,null,n.createElement("div",{className:"daily-goals"},"mealplan"===h?n.createElement(s.Z,{variant:"h6"},"Today's Macronutrient Totals"):n.createElement(s.Z,{variant:"h6"},"Your Daily Macronutrient Goals"),"mealplan"===h&&void 0!==p&&p.length?n.createElement(n.Fragment,null,n.createElement(r.G,{calories:t,caloriesTotal:m.total_calories,caloriesUsed:Math.floor(p[5].amount)}),n.createElement("div",{className:"daily-goals-items","data-testid":"mealplan-goal-items"},n.createElement(c.z,{type:"Carbohydrates",nutrientsInMealPlan:p[7].amount,nutrientsTotal:m.total_carbohydrates}),n.createElement(c.z,{nutrientsTotal:m.total_protein,type:"Protein",nutrientsInMealPlan:p[28].amount}),n.createElement(c.z,{nutrientsTotal:m.total_fat,type:"Fat",nutrientsInMealPlan:p[11].amount}))):null,"search"===h||"user-profile"===h||"mealplan"===h&&void 0!==m&&void 0!==p&&0===p.length?n.createElement(n.Fragment,null,n.createElement(l.H,{goals:m}),n.createElement("form",{onSubmit:d,className:"daily-goals-items"},n.createElement(o.Y,{goals:m,page:h,setGoals:g}),"user-profile"===h?n.createElement(i.Z,{variant:"contained",fullWidth:!0,type:"submit"},"Update Goals"):null)):null))}},3347:(e,t,a)=>{a.d(t,{K:()=>m});var n=a(7294),r=a(4200),l=a(7049),o=a(4386),s=a(6867),i=a(6447),c=a(724),u=a(727),m=function(e){var t=e.mobileOpen,a=e.handleDrawerToggle,m=e.SearchFormComponent,p=e.apiData,h=e.goals,g=e.page,d=e.nutritionSummary,f=e.mealplanItemsFound;return n.createElement(n.Fragment,null,n.createElement(n.Fragment,null,n.createElement(l.ZP,{variant:"temporary",open:t,onClose:a,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:350,pt:"1rem"}}},n.createElement(o.Z,null,n.createElement(s.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:a,sx:{mr:2,display:{sm:"none"}}},n.createElement(c.Z,null))),n.createElement(i.Z,{sx:{width:"100%",pb:"5rem"},direction:"row",spacing:2,justifyContent:"center",alignItems:"center"},n.createElement(u.F,null)),"search"===g&&void 0!==p&&p.length?m:null,"search"===g&&void 0===p," ",n.createElement(r.N,{goals:h,page:"search"}),"mealplan"===g&&!0===d?n.createElement(r.N,{goals:h,nutritionSummary:d,page:"mealplan"}):null),n.createElement(l.ZP,{open:!0,variant:"permanent",ModalProps:{keepMounted:!0},sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:350,pt:"1rem"}}},n.createElement(i.Z,{sx:{width:"100%",pb:"5rem"},direction:"row",spacing:2,justifyContent:"center",alignItems:"center"},n.createElement(u.F,null)),"search"===g&&void 0!==p&&p.length?m:null,"search"===g&&void 0!==p&&0===p.length?n.createElement(r.N,{goals:h,page:"search"}):null,"mealplan"===g&&void 0!==d&&d.length>0?n.createElement(r.N,{goals:h,nutritionSummary:d,page:"mealplan"}):null,"mealplan"!==g||void 0===d||d.length||f?null:n.createElement(r.N,{goals:h,page:"search"}),"macrocalculator"===g||"user-profile"===g&&!d?n.createElement(r.N,{goals:h,page:"search"}):null)))}},4512:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var n=a(9669),r=a.n(n),l=a(8779),o=a(7294),s=a(6974),i=a(7485),c=a(3347),u=function(e){var t=e.mobileOpen,a=e.handleDrawerToggle,n=e.nutritionSummary,r=e.mealplanItemsFound,l=e.goals;return o.createElement(o.Fragment,null,void 0!==l&&Object.keys(l).length?o.createElement(c.K,{mobileOpen:t,handleDrawerToggle:a,page:"mealplan",nutritionSummary:n,goals:l,mealplanItemsFound:r}):null)},m=a(8991),p=a(6447),h=a(2658),g=a(4656),d=a(2640),f=a(6914),y=a(4825),b=a(8869),v=a(111),E=a(4735),S=function(){return S=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},S.apply(this,arguments)},w=function(e,t,a,n){return new(a||(a=Promise))((function(r,l){function o(e){try{i(n.next(e))}catch(e){l(e)}}function s(e){try{i(n.throw(e))}catch(e){l(e)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,s)}i((n=n.apply(e,t||[])).next())}))},_=function(e,t){var a,n,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function s(l){return function(s){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,n&&(r=2&l[0]?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,n=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],n=0}finally{a=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}},C=function(e){var t=e.route,a=e.values,n=e.handleRouteChange,l=e.handleInputChange,s=e.handleTypeSelect,i=e.goals,c=e.setValues,u=e.setAlertMessage,m=e.setAlertSeverity,g=e.setLoading,d=e.setOpenAlert,C=e.setShowLoadMoreBtn,x=e.setAPIData;return o.createElement(o.Fragment,null,o.createElement("form",{onSubmit:function(e){return w(void 0,void 0,void 0,(function(){var n,l,o,s;return _(this,(function(p){switch(p.label){case 0:n=S(S({},a),{offset:0}),c(n),p.label=1;case 1:return p.trys.push([1,3,,4]),g(!0),e.preventDefault(),(l=a).minCalories=i.min_calories_per_meal,l.maxCalories=i.max_calories_per_meal,l.minCarbs=i.min_carbs_per_meal,l.maxCarbs=i.max_carbs_per_meal,l.minProtein=i.min_protein_per_meal,l.maxProtein=i.max_protein_per_meal,l.minFat=i.min_fat_per_meal,l.maxFat=i.max_fat_per_meal,[4,r().get("/api/".concat(t),{params:l})];case 2:return 0===(o=p.sent()).data.length?(u("No options matched your search. Try again with a broader search"),m("warning"),d(!0),C(!1)):(m("success"),u("Success! Here are your matching items."),d(!0),o.data.length<6?C(!1):C(!0)),c(l),x(o.data),g(!1),[3,4];case 3:return s=p.sent(),console.log(s),g(!1),[3,4];case 4:return[2]}}))}))}},o.createElement(p.Z,{spacing:3},o.createElement(h.Z,{variant:"subtitle2"}," ","Suggested goals are calculated based on recommend amounts per meal, considering 3 meals are had per day."),o.createElement(b.M,{route:t,handleRouteChange:n}),o.createElement(v.v,{query:a.query,handleInputChange:l}),o.createElement(E.l,{type:a.type,handleTypeSelect:s}),o.createElement(h.Z,{variant:"h6"},"Choose Calorie Range"),o.createElement(y.N,{handleInputChange:l,measurement:"kcal",nutrient:"Calories",minValue:i.min_calories_per_meal,maxValue:i.max_calories_per_meal}),o.createElement(h.Z,{variant:"h6"},"Choose Carb Range"),o.createElement(y.N,{handleInputChange:l,measurement:"g",nutrient:"Carbs",minValue:i.min_carbs_per_meal,maxValue:i.max_carbs_per_meal}),o.createElement(h.Z,{variant:"h6"},"Choose Protein Range"),o.createElement(y.N,{handleInputChange:l,measurement:"g",nutrient:"Protein",minValue:i.min_protein_per_meal,maxValue:i.max_protein_per_meal}),o.createElement(h.Z,{variant:"h6"},"Choose Fat Range"),o.createElement(y.N,{handleInputChange:l,measurement:"g",nutrient:"Fat",minValue:i.min_fat_per_meal,maxValue:i.max_fat_per_meal}),o.createElement(f.Z,{type:"submit",variant:"contained"},"Submit"))))},x=a(4815),M=function(){return M=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},M.apply(this,arguments)},I=function(e){var t=e.handleSubmit,a=e.route,n=e.setRoute,r=(e.setCurrentTab,e.currentTab),l=e.handleChange,s=e.values,i=e.setValues,c=e.goals,u=e.setAlertMessage,f=e.setAlertSeverity,y=e.setLoading,b=e.setOpenAlert,v=e.setShowLoadMoreBtn,E=e.setAPIData,S=function(e){n(e.target.value)},w=function(e){var t;i(M(M({},s),((t={})[e.target.id]=e.target.value,t)))},_=function(e){i(M(M({},s),{type:e.target.value}))};return o.createElement("div",{className:"search-form"},o.createElement(p.Z,{direction:"row",spacing:1},o.createElement(m.Z,null),o.createElement(h.Z,{variant:"body1"},"Find recipes, grocery products, or menu items from over 800+ restaurants that match your nutrient goals")),o.createElement(g.Z,{value:r,onChange:l,"aria-label":"toggle suggested search",className:"search-form-tabs",indicatorColor:"secondary",textColor:"secondary"},o.createElement(d.Z,{value:"custom-search",label:"Custom"}),o.createElement(d.Z,{value:"suggested-goals",label:"Suggested"})),"custom-search"===r?o.createElement(x.U,{route:a,values:s,handleSubmit:t,handleRouteChange:S,handleInputChange:w,handleTypeSelect:_}):o.createElement(C,{route:a,values:s,handleRouteChange:S,handleInputChange:w,handleTypeSelect:_,goals:c,setValues:i,setAlertMessage:u,setAlertSeverity:f,setLoading:y,setOpenAlert:b,setShowLoadMoreBtn:v,setAPIData:E}))},Z=function(e){var t=e.mobileOpen,a=e.handleDrawerToggle,n=e.SearchFormComponent,r=e.apiData,l=e.goals;return o.createElement(o.Fragment,null,o.createElement(c.K,{mobileOpen:t,handleDrawerToggle:a,SearchFormComponent:n,apiData:r,goals:l,page:"search"}))},D=function(){return D=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},D.apply(this,arguments)},F=function(e,t,a,n){return new(a||(a=Promise))((function(r,l){function o(e){try{i(n.next(e))}catch(e){l(e)}}function s(e){try{i(n.throw(e))}catch(e){l(e)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,s)}i((n=n.apply(e,t||[])).next())}))},T=function(e,t){var a,n,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function s(l){return function(s){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,n&&(r=2&l[0]?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,n=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],n=0}finally{a=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}};const A=function(){var e=(0,o.useState)({}),t=e[0],a=e[1],n=(0,o.useState)(!0),m=n[0],p=n[1],h=(0,o.useState)(!1),g=h[0],d=h[1],f=(0,o.useState)([]),y=f[0],b=f[1],v=(0,o.useState)("custom-search"),E=v[0],S=v[1],w=(0,o.useState)("recipes"),_=w[0],C=w[1],x=(0,o.useState)(!1),M=x[0],A=x[1],O=(0,o.useState)(!1),P=O[0],k=O[1],N=(0,o.useState)([]),L=N[0],V=N[1],j=(0,o.useState)([]),R=j[0],G=j[1],B=(0,o.useState)([]),z=B[0],H=B[1],K=(0,o.useState)(""),U=K[0],W=K[1],q=(0,o.useState)([]),Y=q[0],J=q[1],Q=(0,o.useState)(!1),X=Q[0],$=Q[1],ee=(0,o.useState)([]),te=ee[0],ae=ee[1],ne=(0,o.useState)((0,l.Z)(new Date(Date.now()),"yyyy-MM-dd")),re=ne[0],le=ne[1],oe=(0,o.useState)("error"),se=oe[0],ie=oe[1],ce=(0,o.useState)({query:"",type:"",intolerance:"",minCalories:"",maxCalories:"",minCarbs:"",maxCarbs:"",minProtein:"",maxProtein:"",minFat:"",maxFat:"",number:6,offset:0}),ue=ce[0],me=ce[1],pe=function(){d(!g)},he=o.createElement(I,{handleSubmit:function(e){return F(void 0,void 0,void 0,(function(){var t,a;return T(this,(function(n){switch(n.label){case 0:t=D(D({},ue),{offset:0}),me(t),n.label=1;case 1:return n.trys.push([1,3,,4]),k(!0),e.preventDefault(),[4,r().get("/api/".concat(_),{params:t,withCredentials:!0})];case 2:return 0===(a=n.sent()).data.length?(W("No options matched your search. Try again with a broader search"),ie("warning"),A(!0),$(!1)):(ie("success"),W("Success! Here are your matching items."),A(!0),a.data.length<6?$(!1):$(!0)),b(a.data),k(!1),[3,4];case 3:return n.sent(),k(!1),[3,4];case 4:return[2]}}))}))},route:_,setRoute:C,handleChange:function(e,t){S(t)},currentTab:E,setCurrentTab:S,values:ue,setValues:me,goals:t,setAlertMessage:W,setAlertSeverity:ie,setLoading:k,setOpenAlert:A,setShowLoadMoreBtn:$,setAPIData:b});return(0,o.useEffect)((function(){var e=r().get("/api/metrics",{withCredentials:!0});e.then((function(e){a(e.data)})),e.catch((function(e){console.log(e)}))}),[]),o.createElement(o.Fragment,null,o.createElement(s.Z5,null,o.createElement(s.AW,{path:"search",element:o.createElement(Z,{goals:t,mobileOpen:g,handleDrawerToggle:pe,SearchFormComponent:he,apiData:y})}),o.createElement(s.AW,{path:"mealplan",element:o.createElement(u,{mobileOpen:g,handleDrawerToggle:pe,nutritionSummary:te,mealplanItemsFound:m,goals:t})}),o.createElement(s.AW,{path:"*",element:o.createElement(c.K,{mobileOpen:g,handleDrawerToggle:pe,page:"macrocalculator",goals:t})})),o.createElement(s.j3,{context:{loading:P,setGoals:a,handleDrawerToggle:pe,apiData:y,route:_,handleLoadMore:function(e){return F(void 0,void 0,void 0,(function(){var e,t,a;return T(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),k(!0),e=D(D({},ue),{offset:ue.offset+6}),me(e),[4,r().get("/api/".concat(_),{params:e})];case 1:return(t=n.sent()).data.length<6?$(!1):$(!0),b(y.concat(t.data)),k(!1),[3,3];case 2:return a=n.sent(),k(!1),console.log(a),[3,3];case 3:return[2]}}))}))},setAlertMessage:W,setOpenAlert:A,setAlertSeverity:ie,showLoadMoreBtn:X,SearchFormComponent:he,setNutritionSummary:ae,setMealplanItemsFound:p,setMealplanItems:J,currentDay:re,setCurrentDay:le,mealplanItems:Y,breakfastItems:L,setBreakfastItems:V,lunchItems:R,setLunchItems:G,dinnerItems:z,goals:t,setDinnerItems:H,mobileOpen:g}}),o.createElement(i.I,{openAlert:M,handleAlert:function(e){A(!1)},alertSeverity:se,alertMessage:U}))}}}]);