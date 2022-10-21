"use strict";(self.webpackChunkthe_macro_trainer=self.webpackChunkthe_macro_trainer||[]).push([[801],{1646:(e,t,a)=>{a.d(t,{T:()=>c});var n=a(5722),r=a(1647),l=a(7090),o=a(8779),i=a(584),s=a(7294),c=function(e){var t=e.currentDay,a=(0,o.Z)((0,i.Z)(new Date(t)),"MMMM dd, yyyy"),c=(0,o.Z)((0,l.Z)(new Date(t)),"MMMM dd, yyyy");return s.createElement(s.Fragment,null,s.createElement(n.Z,{className:"food-log-week-text",color:"secondary"},s.createElement(r.Z,{variant:"body1"},"Viewing Week:"),s.createElement(r.Z,{variant:"body1"},a),s.createElement(r.Z,{variant:"body1"},"-"),s.createElement(r.Z,{variant:"body1"},c)))}},9994:(e,t,a)=>{a.d(t,{K:()=>S});var n=a(8736),r=a(7272),l=a(8354),o=a(8720),i=a(9144),s=a(1647),c=a(7888),u=a(8508),m=a(2785),d=a(5841),g=a(3150),h=a(8561),p=a(6140),f=a(7294),v=a(3725),E=a(1523),y=function(e){var t=e.nutrientAmount,a=e.nutrientName,n=e.showRegularAmount,r=e.serving_size;return null===t?f.createElement(v.Y,{align:"right"},"-"):"Amount per Serving"===n?f.createElement(f.Fragment,null,f.createElement(v.Y,{align:"right"},Math.round(Number(t)/100*Number(r))," ",(0,E.O)(a))):f.createElement(f.Fragment,null,f.createElement(v.Y,{align:"right"},Math.round(Number(t))," ",(0,E.O)(a)))},b=function(e){var t=e.nutrientName,a=e.nutrientAmount,r=e.serving_size,l=e.showRegularAmount;return"id"===t||"meal_id"===t||"fdc_id"===t?null:"saturated_fat"===t||"trans_fat"===t||"dietary_fiber"===t||"total_sugars"===t?f.createElement(f.Fragment,null,f.createElement(n.Z,null,f.createElement(v.Y,{component:"th",scope:"row"},f.createElement(s.Z,{variant:"body2",sx:{pl:"20px"}},(0,E.i)(t))),f.createElement(y,{nutrientAmount:a,nutrientName:t,showRegularAmount:l,serving_size:r}))):f.createElement(f.Fragment,null,f.createElement(n.Z,null,f.createElement(v.Y,{component:"th",scope:"row"},f.createElement(s.Z,{variant:"body2",fontWeight:"bold"},(0,E.i)(t))),f.createElement(y,{nutrientAmount:a,nutrientName:t,showRegularAmount:l,serving_size:r})))},S=function(e){var t=e.open,a=e.nutrition,E=e.serving_size,y=e.showStandardizedCol,S=(0,f.useState)("Amount per Serving"),w=S[0],Z=S[1];return f.createElement(n.Z,null,f.createElement(r.Z,{style:{paddingBottom:0,paddingTop:0},colSpan:6},f.createElement(l.Z,{in:t,timeout:"auto",unmountOnExit:!0},f.createElement(o.Z,{sx:{margin:1}},f.createElement(i.Z,{direction:"row",sx:{width:"100%"},alignItems:"center"},f.createElement(s.Z,{variant:"h6",gutterBottom:!0,component:"div"},"Nutrition Facts"),y?f.createElement(c.Z,{sx:{width:"100%"}},f.createElement(u.Z,null,"Show"),f.createElement(m.Z,{value:w,onChange:function(e){Z(e.target.value)},label:"Show",required:!0,fullWidth:!0,size:"small",id:"data to show"},["Amount per Serving","Amount per 100 g"].map((function(e){return f.createElement(d.Z,{value:e,key:e},e)})))):null),f.createElement(g.Z,{size:"small","aria-label":"additional nutrition data",stickyHeader:!0},f.createElement(h.Z,null,f.createElement(n.Z,null,f.createElement(v.Y,null,"Nutrient"),f.createElement(v.Y,null,w))),f.createElement(p.Z,null,Object.entries(a).map((function(e){return f.createElement(b,{key:e[0],nutrientName:e[0],nutrientAmount:e[1],serving_size:E,showRegularAmount:w})}))))))))}},3725:(e,t,a)=>{a.d(t,{Y:()=>l});var n=a(7272),r=a(4026),l=(0,a(4174).ZP)(n.Z)((function(e){var t,a=e.theme;return(t={})["&.".concat(r.Z.head)]={backgroundColor:a.palette.background.paper},t["&.".concat(r.Z.body)]={fontSize:12,backgroundColor:a.palette.action.hover},t}))},6554:(e,t,a)=>{a.r(t),a.d(t,{default:()=>z});var n=a(3379),r=a(8790),l=a(4384),o=a(130),i=a(9669),s=a.n(i),c=a(7294),u=a(9250),m=a(1275),d=a(7229),g=a(8038),h=a(724),p=a(7012),f=a(8720),v=a(727),E=a(3837),y=a(1647),b=a(6021),S=a(2085),w=function(e){var t=e.goals;return c.createElement(c.Fragment,null,c.createElement(c.Fragment,null,c.createElement(y.Z,{variant:"h4",component:"h1",align:"center"},"Recommended Daily Goals"),c.createElement(b.H,{goals:t}),c.createElement("div",{className:"goal-card-items"},c.createElement(S.Y,{goals:t}))))},Z=a(9144),_=a(6332),M=a(1898),x=function(e){var t=e.nutritionSummary,a=e.goals;return c.createElement(c.Fragment,null,c.createElement(y.Z,{variant:"h4",component:"h1",align:"center"},"Today's Goals"),c.createElement(_.G,{calories:parseInt(t.total_calories),goalCalories:a.total_calories}),c.createElement(Z.Z,{direction:"column",spacing:2,sx:{p:"1rem"}},c.createElement(M.z,{nutrientsTotal:a.total_carbohydrates,type:"Carbohydrates",nutrientsInFoodLog:parseInt(t.total_carbohydrates)}),c.createElement(M.z,{nutrientsTotal:a.total_protein,type:"Protein",nutrientsInFoodLog:parseInt(t.total_protein)}),c.createElement(M.z,{nutrientsTotal:a.total_fat,type:"Fat",nutrientsInFoodLog:parseInt(t.total_fat)}),c.createElement(y.Z,{variant:"caption",align:"center",sx:{pt:"5rem"}},"Note: This is a sample food log using our own nutrition goals. Please log in or create an account to search and save items to your food log.")))},C="350px",F=function(e){var t=e.mobileOpen,a=e.handleDrawerToggle,n=e.values,r=e.handleSearch,i=e.handleInputChange,s=e.handleTypeSelect,m=e.goals,d=e.nutritionSummary,g=e.view,y=e.handleRadioClick;(0,u.TH)();return c.createElement(c.Fragment,null,c.createElement(p.ZP,{variant:"temporary",open:t,onClose:a,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:C,pt:"1rem",pl:"1rem",pr:"1rem"}}},c.createElement(l.Z,null,c.createElement(o.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:a,sx:{mr:2,display:{sm:"none"}}},c.createElement(h.Z,null))),"search"===g?c.createElement(E.c,{values:n,handleSubmit:r,handleInputChange:i,handleTypeSelect:s,goals:m,handleRadioClick:y}):null,"foodLog"===g?c.createElement(x,{goals:m,nutritionSummary:d}):null,"calculator"===g?c.createElement(w,{goals:m}):null),c.createElement(p.ZP,{open:!0,variant:"permanent",ModalProps:{keepMounted:!0},sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:C,pt:"1rem",pl:"1rem",pr:"1rem"}}},c.createElement(v.F,null),c.createElement(f.Z,{sx:{pt:"1rem"}},"search"===g?c.createElement(E.c,{values:n,handleSubmit:r,handleInputChange:i,handleTypeSelect:s,goals:m,handleRadioClick:y}):null,"foodLog"===g?c.createElement(x,{goals:m,nutritionSummary:d}):null,"calculator"===g?c.createElement(w,{goals:m}):null)))},k=function(){return k=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},k.apply(this,arguments)},A=function(e,t,a,n){return new(a||(a=Promise))((function(r,l){function o(e){try{s(n.next(e))}catch(e){l(e)}}function i(e){try{s(n.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,i)}s((n=n.apply(e,t||[])).next())}))},N=function(e,t){var a,n,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,n&&(r=2&l[0]?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,n=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],n=0}finally{a=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},T={query:"",category:"All",allergy:"",minCalories:"",maxCalories:"",minProtein:"",maxProtein:"",minCarbs:"",maxCarbs:"",minFat:"",maxFat:"",offset:0,number:10},L={total_carbohydrates:0,total_protein:0,total_fat:0,total_calories:0,goal:"weight_loss"},I={total_carbohydrates:250,total_protein:100,total_fat:75,total_calories:2075,goal:"weight_loss"},D={total_calories:"0",total_fat:"0",total_carbohydrates:"0",total_protein:"0"};const z=function(){var e=c.useState(!1),t=e[0],a=e[1],i=(0,c.useState)(!1),h=i[0],p=i[1],f=(0,c.useState)(L),v=f[0],E=f[1],y=(0,c.useState)("error"),b=y[0],S=y[1],w=(0,c.useState)(!1),Z=w[0],_=w[1],M=(0,c.useState)(""),x=M[0],C=M[1],z=(0,c.useState)(T),O=z[0],P=z[1],R=(0,c.useState)(!1),Y=R[0],W=R[1],G=(0,c.useState)([]),j=G[0],B=G[1],H=(0,c.useState)([]),V=H[0],q=H[1],K=(0,c.useState)(18),U=K[0],J=K[1],Q=(0,c.useState)(60),X=Q[0],$=Q[1],ee=(0,c.useState)(200),te=ee[0],ae=ee[1],ne=(0,c.useState)(1),re=ne[0],le=ne[1],oe=c.useState("weight_loss"),ie=oe[0],se=oe[1],ce=(0,c.useState)("male"),ue=ce[0],me=ce[1],de=(0,c.useState)(D),ge=de[0],he=de[1],pe=function(){a(!t)},fe=function(e){return A(void 0,void 0,void 0,(function(){var t,a,n;return N(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),e.preventDefault(),t=k(k({},O),{offset:0}),P(t),p(!0),[4,s().get("/api/food",{params:t,withCredentials:!0})];case 1:return 0===(a=r.sent()).data.length?(C("No options matched your search. Try again with a broader search"),S("warning"),W(!0),_(!1)):(S("success"),C("Success! Here are your matching items."),W(!0),a.data.length<10?_(!1):_(!0),q(a.data)),p(!1),[3,3];case 2:return n=r.sent(),p(!1),S("error"),C("Unable to get search results. Please try again later."),W(!0),console.log(n),[3,3];case 3:return[2]}}))}))},ve=function(e){P(k(k({},O),{category:e.target.value}))},Ee=function(e){var t;P(k(k({},O),((t={})[e.target.id]=e.target.value,t)))},ye=function(e){e.target.value===O.allergy?P(k(k({},O),{allergy:""})):P(k(k({},O),{allergy:e.target.value}))};return c.createElement(c.Fragment,null,c.createElement("div",{className:"main-page-container"},c.createElement(r.Z,{title:"Open Sidebar"},c.createElement(l.Z,{sx:{display:{sm:"none"},alignSelf:"flex-start"}},c.createElement(o.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:pe,sx:{mr:2,display:{sm:"none"}}},c.createElement(n.Z,null)))),c.createElement(u.Z5,null,c.createElement(u.AW,{path:"",element:c.createElement(c.Fragment,null,c.createElement(F,{mobileOpen:t,handleDrawerToggle:pe,values:O,handleSearch:fe,handleInputChange:Ee,handleTypeSelect:ve,goals:I,nutritionSummary:ge,view:"foodLog",handleRadioClick:ye}),c.createElement(g.default,{setNutritionSummary:he,setAlertSeverity:S,setOpenAlert:W,setSampleFoodLogItems:B,setAlertMessage:C,sampleFoodLogItems:j}))}),c.createElement(u.AW,{path:"search",element:c.createElement(F,{mobileOpen:t,handleDrawerToggle:pe,values:O,handleSearch:fe,handleInputChange:Ee,handleTypeSelect:ve,goals:v,nutritionSummary:ge,view:"search",handleRadioClick:ye})}),c.createElement(u.AW,{path:"calculator",element:c.createElement(F,{mobileOpen:t,handleDrawerToggle:pe,values:O,handleSearch:fe,handleInputChange:Ee,handleTypeSelect:ve,goals:v,nutritionSummary:ge,view:"calculator",handleRadioClick:ye})})),c.createElement(u.j3,{context:{mobileOpen:t,handleDrawerToggle:pe,setNutritionSummary:he,setAlertSeverity:S,openAlert:Y,setOpenAlert:W,setValues:P,setAlertMessage:C,isLoading:h,alertSeverity:b,alertMessage:x,goals:v,searchResults:V,setGoals:E,setGender:me,setSearchResults:q,gender:ue,age:U,setAge:J,height:X,setHeight:$,weight:te,setWeight:ae,handleLoadMore:function(e){return A(void 0,void 0,void 0,(function(){var e,t,a;return N(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),p(!0),e=k(k({},O),{offset:O.offset+10}),P(e),[4,s().get("/api/food",{params:e,withCredentials:!0})];case 1:return(t=n.sent()).data.length<10?_(!1):_(!0),q(V.concat(t.data)),p(!1),[3,3];case 2:return a=n.sent(),p(!1),console.log(a),[3,3];case 3:return[2]}}))}))},showLoadMoreBtn:Z,activityLevel:re,goal:ie,setGoal:se,setActivityLevel:le,handleSubmit:function(e){e.preventDefault();var t=(0,d.L)({gender:ue,age:U,height:X,weight:te,activityLevel:re,goal:ie});E(t),S("success"),C("Your custom macronutrient values have been calculated! View the sidebar to see your calculations"),W(!0)}}})),c.createElement(m.I,{openAlert:Y,handleAlert:function(){W(!Y)},alertSeverity:b,alertMessage:x}))}},8038:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var n=a(3147),r=a(9144),l=a(1647),o=a(5293),i=a(214),s=a(5705),c=a(9669),u=a.n(c),m=a(8779),d=a(466),g=a(7294),h=a(1646),p=a(5503),f=a(813),v=a(3406),E=a(5722),y=a(3150),b=a(8561),S=a(8736),w=a(6140),Z=a(7272),_=a(8790),M=a(130),x=a(2388),C=a(9994),F=a(3725),k=function(e){var t=e.slotName,a=e.meals,n=(e.handleOpeningDialog,e.slot,(0,g.useState)(!1)),r=n[0],l=n[1],o=function(e){e.stopPropagation(),l(!r)};return g.createElement(g.Fragment,null,g.createElement(v.Z,{component:E.Z},g.createElement(y.Z,{"aria-label":"Food items for ".concat(t)},g.createElement(b.Z,null,g.createElement(S.Z,null,g.createElement(F.Y,{sx:{fontWeight:"bold"},variant:"head"},t),g.createElement(F.Y,{variant:"head"}),g.createElement(F.Y,{variant:"head",className:"hide-on-mobile"}),g.createElement(F.Y,{variant:"head"}))),g.createElement(w.Z,null,a.map((function(e){return g.createElement(g.Fragment,{key:e.fdc_id},g.createElement(S.Z,{hover:!1,sx:{"& > *":{borderBottom:"unset"}}},g.createElement(Z.Z,null,g.createElement(_.Z,{enterDelay:600,enterNextDelay:1200,title:"View item's nutrition facts"},g.createElement(M.Z,{"aria-label":"expand row",size:"small",onClick:o},r?g.createElement(f.Z,null):g.createElement(p.Z,null)))),g.createElement(Z.Z,null,(0,x.O)(e.brand_owner,e.description)),g.createElement(Z.Z,{className:"hide-on-mobile"},Number(e.serving_size)*Number(e.servings)," ",e.serving_size_unit),g.createElement(Z.Z,null,e.nutrition.calories," kcal")),g.createElement(C.K,{open:r,nutrition:e.nutrition,serving_size:100,showStandardizedCol:!1}))}))))))},A=function(e){var t=e.sampleFoodLogItems,a=(0,g.useState)(!1),n=a[0],r=a[1],l=(0,g.useState)(!1),o=(l[0],l[1]),i=[],s=[],c=[],u=[];t.length&&t.forEach((function(e){1===e.slot?i.push(e):2===e.slot?s.push(e):3===e.slot?c.push(e):u.push(e)}));var m=["Morning","Afternoon","Evening","Snack"],d=[1,2,3,4],h=[i,s,c,u],p=function(){r(!n),setTimeout((function(){o(!1)}),1e3)};return g.createElement(g.Fragment,null,g.createElement("div",{className:"meal-plan-slots-container"},h.map((function(e,t){return g.createElement(k,{key:e[0].fdc_id,slotName:m[t],meals:e,handleOpeningDialog:p,slot:d[t]})}))))},N=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];const T=function(e){var t=e.setNutritionSummary,a=e.setAlertSeverity,c=e.setOpenAlert,p=e.setSampleFoodLogItems,f=e.sampleFoodLogItems,v=e.setAlertMessage,E=(0,g.useState)((0,d.Z)(Date.now())),y=E[0],b=(E[1],(0,g.useState)((0,m.Z)(new Date(Date.now()),"yyyy-MM-dd"))),S=b[0];b[1];return(0,g.useEffect)((function(){u().get("/api/foodLog/sample").then((function(e){t(e.data.nutritionSummary[0]),p(e.data.sampleItems)})).catch((function(e){v("Unable to retrieve food log items. Please try again later."),a("error"),c(!0)}))}),[S]),g.createElement(g.Fragment,null,g.createElement("div",{className:"food-log-page"},g.createElement(h.T,{currentDay:S}),g.createElement("div",{className:"food-log-page-main-content"},g.createElement(r.Z,{direction:"row",spacing:{xs:1,sm:4},alignItems:"space-evenly"},g.createElement(n.Z,null),g.createElement(l.Z,{variant:"body1"},"Log in or create an account to save items and navigate to different days")),g.createElement("div",{className:"tabs-container"},g.createElement(o.Z,{value:y,variant:"scrollable",scrollButtons:"auto","aria-label":"change food log date"},N.map((function(e){return g.createElement(i.Z,{disabled:!0,key:e,label:e})})))),f.length>0?g.createElement(A,{sampleFoodLogItems:f}):g.createElement(s.Z,{size:100}))))}},7229:(e,t,a)=>{a.d(t,{L:()=>n});var n=function(e){var t,a,n,r,l,o,i,s=e.age,c=e.weight,u=e.gender,m=e.height,d=e.activityLevel,g=e.goal,h=c/2.2,p=2.54*m,f=p/100,v=h/(f*f),E=10*h+6.25*p-5*s+("female"===u?-161:5);return r="female"===u?m<60?Math.floor(105-5*(60-m)):Math.floor(105+5*(m-60)):m<60?Math.floor(106-6*(60-m)):Math.floor(106+6*(m-60)),l=Math.floor(.25*(c-r)+r),o=Math.floor(r/2.2),i=Math.floor(l/2.2),v>=30?"weight_loss"===g?(t=Math.floor(E*d)-250,a=Math.floor(1.8*i)):"gain_muscle"===g?(t=Math.floor(E*d)+250,a=Math.floor(1.8*i)):(t=Math.floor(E*d),a=Math.floor(1.2*i)):v<30&&v>=25?"weight_loss"===g?(t=Math.floor(22*o),a=Math.floor(1.8*o)):"gain_muscle"===g?(t=Math.floor(32*o),a=Math.floor(1.8*o)):(t=Math.floor(28*o),a=Math.floor(1.2*o)):"weight_loss"===g?(t=Math.floor(22*h),a=Math.floor(1.8*h)):"gain_muscle"===g?(t=Math.floor(32*h),a=Math.floor(1.8*h)):(t=Math.floor(28*h),a=Math.floor(1.2*h)),{total_calories:t,total_carbohydrates:n=Math.floor(.5*t/4),total_fat:Math.floor((t-(4*a+4*n))/9),total_protein:a,goal:g}}},1523:(e,t,a)=>{a.d(t,{O:()=>l,i:()=>r});var n={calories:["Calories",""],total_fat:["Total Fat","g"],saturated_fat:["Saturated Fat","g"],trans_fat:["Trans Fat","g"],cholesterol:["Cholesterol","mg"],sodium:["Sodium","mg"],total_carbohydrates:["Total Carbohydrates","g"],dietary_fiber:["Dietary Fiber","g"],total_sugars:["Total Sugars","g"],protein:["Protein","g"],vitamin_d:["Vitamin D","mcg"],calcium:["Calcium","mg"],iron:["Iron","mg"],potassium:["Potassium","mg"]},r=function(e){return n[e][0]},l=function(e){return n[e][1]}},2388:(e,t,a)=>{a.d(t,{O:()=>n});var n=function(e,t){var a="",n="";if(null!==e&&""!==e&&void 0!==e){for(var r=e.split(" "),l=0;l<r.length;l++)""!==r[l]&&(r[l]=r[l][0]+r[l].slice(1).toLowerCase());a=r.join(" ")}if(null!=t&&""!==t){var o=t.split(" ");for(l=0;l<o.length;l++)""!==o[l]&&(o[l]=o[l][0]+o[l].slice(1).toLowerCase());n=o.join(" ")}return""!==a?"".concat(n," (").concat(a,")"):n}}}]);