"use strict";(self.webpackChunkthe_macro_trainer=self.webpackChunkthe_macro_trainer||[]).push([[113],{2033:(e,t,a)=>{a.r(t),a.d(t,{default:()=>re});var n=a(3379),r=a(8790),l=a(4384),o=a(130),s=a(9669),i=a.n(s),c=a(7294),u=a(9250),m=a(1275),h=a(7229),d=a(3147),g=a(9144),f=a(1647),p=a(5293),v=a(214),y=a(5705),E=a(8779),b=a(466),S=a(1646),w=a(5503),M=a(813),_=a(3406),Z=a(5722),x=a(3150),C=a(8561),k=a(8736),N=a(6140),F=a(7272),L=a(2388),I=a(9994),A=a(3725),D=function(e){var t=e.slotName,a=e.meals,n=(0,c.useState)(!1),l=n[0],s=n[1],i=function(e){e.stopPropagation(),s(!l)};return c.createElement(c.Fragment,null,c.createElement(_.Z,{component:Z.Z},c.createElement(x.Z,{"aria-label":"Food items for ".concat(t)},c.createElement(C.Z,null,c.createElement(k.Z,null,c.createElement(A.Y,{sx:{fontWeight:"bold"},variant:"head"},t),c.createElement(A.Y,{variant:"head"}),c.createElement(A.Y,{variant:"head",className:"hide-on-mobile"}),c.createElement(A.Y,{variant:"head"}))),c.createElement(N.Z,null,a.map((function(e){return c.createElement(c.Fragment,{key:e.fdc_id},c.createElement(k.Z,{hover:!1,sx:{"& > *":{borderBottom:"unset"}}},c.createElement(F.Z,null,c.createElement(r.Z,{enterDelay:600,enterNextDelay:1200,title:"View item's nutrition facts"},c.createElement(o.Z,{"aria-label":"expand row",size:"small",onClick:i},l?c.createElement(M.Z,null):c.createElement(w.Z,null)))),c.createElement(F.Z,null,(0,L.O)(e.brand_owner,e.description)),c.createElement(F.Z,{className:"hide-on-mobile"},Number(e.serving_size)*Number(e.servings)," ",e.serving_size_unit),c.createElement(F.Z,null,e.nutrition.calories," kcal")),c.createElement(I.K,{open:l,nutrition:e.nutrition,serving_size:100,showStandardizedCol:!1}))}))))))},T=function(e){var t=e.sampleFoodLogItems,a=[],n=[],r=[],l=[];t.length&&t.forEach((function(e){1===e.slot?a.push(e):2===e.slot?n.push(e):3===e.slot?r.push(e):l.push(e)}));var o=["Morning","Afternoon","Evening","Snack"],s=[a,n,r,l];return c.createElement(c.Fragment,null,c.createElement("div",{className:"meal-plan-slots-container"},s.map((function(e,t){return c.createElement(D,{key:e[0].fdc_id,slotName:o[t],meals:e})}))))},O=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];const P=function(e){var t=e.setNutritionSummary,a=e.setAlertSeverity,n=e.setOpenAlert,r=e.setSampleFoodLogItems,l=e.sampleFoodLogItems,o=e.setAlertMessage,s=(0,b.Z)(Date.now()),u=(0,E.Z)(new Date(Date.now()),"yyyy-MM-dd");return(0,c.useEffect)((function(){i().get("/api/foodLog/sample").then((function(e){var a=e.data;t(a.nutritionSummary[0]),r(a.sampleItems)})).catch((function(e){o("Unable to retrieve food log items. Please try again later."),a("error"),n(!0),console.log("err: ",e)}))}),[u]),c.createElement(c.Fragment,null,c.createElement("div",{className:"food-log-page"},c.createElement(S.T,{currentDay:u}),c.createElement("div",{className:"food-log-page-main-content"},c.createElement(g.Z,{direction:"row",spacing:{xs:1,sm:4},alignItems:"space-evenly"},c.createElement(d.Z,null),c.createElement(f.Z,{variant:"body1"},"Log in or create an account to save items and navigate to different days")),c.createElement("div",{className:"tabs-container"},c.createElement(p.Z,{value:s,variant:"scrollable",scrollButtons:"auto","aria-label":"change food log date"},O.map((function(e){return c.createElement(v.Z,{disabled:!0,key:e,label:e})})))),l.length>0?c.createElement(T,{sampleFoodLogItems:l}):c.createElement(y.Z,{size:100}))))};var z=a(724),R=a(7012),G=a(8720),W=a(727),Y=a(3837),j=a(6021),B=a(2085),H=function(e){var t=e.goals;return c.createElement(c.Fragment,null,c.createElement(c.Fragment,null,c.createElement(f.Z,{variant:"h4",component:"h1",align:"center"},"Recommended Daily Goals"),c.createElement(j.H,{goals:t}),c.createElement("div",{className:"goal-card-items"},c.createElement(B.Y,{goals:t}))))},V=a(6332),U=a(1898),q=function(e){var t=e.nutritionSummary,a=e.goals;return c.createElement(c.Fragment,null,c.createElement(f.Z,{variant:"h4",component:"h1",align:"center"},"Today's Goals"),c.createElement(V.G,{calories:parseInt(t.total_calories),goalCalories:a.total_calories}),c.createElement(g.Z,{direction:"column",spacing:2,sx:{p:"1rem"}},c.createElement(U.z,{nutrientsTotal:a.total_carbohydrates,type:"Carbohydrates",nutrientsInFoodLog:parseInt(t.total_carbohydrates)}),c.createElement(U.z,{nutrientsTotal:a.total_protein,type:"Protein",nutrientsInFoodLog:parseInt(t.total_protein)}),c.createElement(U.z,{nutrientsTotal:a.total_fat,type:"Fat",nutrientsInFoodLog:parseInt(t.total_fat)}),c.createElement(f.Z,{variant:"caption",align:"center",sx:{pt:"5rem"}},"Note: This is a sample food log using our own nutrition goals. Please log in or create an account to search and save items to your food log.")))},K="350px",J=function(e){var t=e.mobileOpen,a=e.handleDrawerToggle,n=e.values,r=e.handleSearch,s=e.handleInputChange,i=e.goals,u=e.nutritionSummary,m=e.view,h=e.handleRadioClick;return c.createElement(c.Fragment,null,c.createElement(R.ZP,{variant:"temporary",open:t,onClose:a,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:K,pt:"1rem",pl:"1rem",pr:"1rem"}}},c.createElement(l.Z,null,c.createElement(o.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:a,sx:{mr:2,display:{sm:"none"}}},c.createElement(z.Z,null))),"search"===m?c.createElement(Y.c,{values:n,handleSubmit:r,handleInputChange:s,goals:i,handleRadioClick:h}):null,"foodLog"===m?c.createElement(q,{goals:i,nutritionSummary:u}):null,"calculator"===m?c.createElement(H,{goals:i}):null),c.createElement(R.ZP,{open:!0,variant:"permanent",ModalProps:{keepMounted:!0},sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:K,pt:"1rem",pl:"1rem",pr:"1rem"}}},c.createElement(W.F,null),c.createElement(G.Z,{sx:{pt:"1rem"}},"search"===m?c.createElement(Y.c,{values:n,handleSubmit:r,handleInputChange:s,goals:i,handleRadioClick:h}):null,"foodLog"===m?c.createElement(q,{goals:i,nutritionSummary:u}):null,"calculator"===m?c.createElement(H,{goals:i}):null)))},Q=function(){return Q=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},Q.apply(this,arguments)},X=function(e,t,a,n){return new(a||(a=Promise))((function(r,l){function o(e){try{i(n.next(e))}catch(e){l(e)}}function s(e){try{i(n.throw(e))}catch(e){l(e)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,s)}i((n=n.apply(e,t||[])).next())}))},$=function(e,t){var a,n,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function s(l){return function(s){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,n&&(r=2&l[0]?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,n=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],n=0}finally{a=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}},ee={query:"",category:"All",allergy:"",minCalories:"",maxCalories:"",minProtein:"",maxProtein:"",minCarbs:"",maxCarbs:"",minFat:"",maxFat:"",offset:0,number:10},te={total_carbohydrates:0,total_protein:0,total_fat:0,total_calories:0,goal:"weight_loss"},ae={total_carbohydrates:250,total_protein:100,total_fat:75,total_calories:2075,goal:"weight_loss"},ne={total_calories:"0",total_fat:"0",total_carbohydrates:"0",total_protein:"0"};const re=function(){var e=c.useState(!1),t=e[0],a=e[1],s=(0,c.useState)(!1),d=s[0],g=s[1],f=(0,c.useState)(te),p=f[0],v=f[1],y=(0,c.useState)("error"),E=y[0],b=y[1],S=(0,c.useState)(!1),w=S[0],M=S[1],_=(0,c.useState)(""),Z=_[0],x=_[1],C=(0,c.useState)(ee),k=C[0],N=C[1],F=(0,c.useState)(!1),L=F[0],I=F[1],A=(0,c.useState)([]),D=A[0],T=A[1],O=(0,c.useState)([]),z=O[0],R=O[1],G=(0,c.useState)(18),W=G[0],Y=G[1],j=(0,c.useState)(60),B=j[0],H=j[1],V=(0,c.useState)(200),U=V[0],q=V[1],K=(0,c.useState)(1),re=K[0],le=K[1],oe=c.useState("weight_loss"),se=oe[0],ie=oe[1],ce=(0,c.useState)("male"),ue=ce[0],me=ce[1],he=(0,c.useState)(ne),de=he[0],ge=he[1],fe=function(){a(!t)},pe=function(e){e.preventDefault();var t=Q(Q({},k),{offset:0});N(t),g(!0),i().get("/api/food",{params:t,withCredentials:!0}).then((function(e){var t=e.data;0===t.length?(x("No options matched your search. Try again with a broader search"),b("warning"),I(!0),M(!1)):(b("success"),x("Success! Here are your matching items."),I(!0),t.length<10?M(!1):M(!0),R(t)),g(!1)})).catch((function(e){g(!1),b("error"),x("Unable to get search results. Please try again later."),I(!0),console.log(e)}))},ve=function(e){var t;N(Q(Q({},k),((t={})[e.target.id]=e.target.value,t)))},ye=function(e){e.target.value===k.allergy?N(Q(Q({},k),{allergy:""})):N(Q(Q({},k),{allergy:e.target.value}))};return c.createElement(c.Fragment,null,c.createElement("div",{className:"main-page-container"},c.createElement(r.Z,{title:"Open Sidebar"},c.createElement(l.Z,{sx:{display:{sm:"none"},alignSelf:"flex-start"}},c.createElement(o.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:fe,sx:{mr:2,display:{sm:"none"}}},c.createElement(n.Z,null)))),c.createElement(u.Z5,null,c.createElement(u.AW,{path:"",element:c.createElement(c.Fragment,null,c.createElement(J,{mobileOpen:t,handleDrawerToggle:fe,values:k,handleSearch:pe,handleInputChange:ve,goals:ae,nutritionSummary:de,view:"foodLog",handleRadioClick:ye}),c.createElement(P,{setNutritionSummary:ge,setAlertSeverity:b,setOpenAlert:I,setSampleFoodLogItems:T,setAlertMessage:x,sampleFoodLogItems:D}))}),c.createElement(u.AW,{path:"search",element:c.createElement(J,{mobileOpen:t,handleDrawerToggle:fe,values:k,handleSearch:pe,handleInputChange:ve,goals:p,nutritionSummary:de,view:"search",handleRadioClick:ye})}),c.createElement(u.AW,{path:"calculator",element:c.createElement(J,{mobileOpen:t,handleDrawerToggle:fe,values:k,handleSearch:pe,handleInputChange:ve,goals:p,nutritionSummary:de,view:"calculator",handleRadioClick:ye})})),c.createElement(u.j3,{context:{mobileOpen:t,handleDrawerToggle:fe,setNutritionSummary:ge,setAlertSeverity:b,openAlert:L,setOpenAlert:I,setValues:N,setAlertMessage:x,isLoading:d,alertSeverity:E,alertMessage:Z,goals:p,searchResults:z,setGoals:v,setGender:me,setSearchResults:R,gender:ue,age:W,setAge:Y,height:B,setHeight:H,weight:U,setWeight:q,handleLoadMore:function(){return X(void 0,void 0,void 0,(function(){var e,t,a,n;return $(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),g(!0),e=Q(Q({},k),{offset:k.offset+10}),N(e),[4,i().get("/api/food",{params:e,withCredentials:!0})];case 1:return t=r.sent(),(a=t.data).length<10?M(!1):M(!0),R(z.concat(a)),g(!1),[3,3];case 2:return n=r.sent(),g(!1),console.log(n),[3,3];case 3:return[2]}}))}))},showLoadMoreBtn:w,activityLevel:re,goal:se,setGoal:ie,setActivityLevel:le,handleSubmit:function(e){e.preventDefault();var t=(0,h.L)({gender:ue,age:W,height:B,weight:U,activityLevel:re,goal:se});v(t),b("success"),x("Your custom macronutrient values have been calculated! View the sidebar to see your calculations"),I(!0)}}})),c.createElement(m.I,{openAlert:L,handleAlert:function(){I(!L)},alertSeverity:E,alertMessage:Z}))}},7229:(e,t,a)=>{a.d(t,{L:()=>n});var n=function(e){var t,a,n,r=e.age,l=e.weight,o=e.gender,s=e.height,i=e.activityLevel,c=e.goal,u=Number(l)/2.2,m=2.54*Number(s),h=m/100,d=u/(h*h),g="female"===o?-161:5,f=10*u+6.25*m-5*Number(r)+g;n="female"===o?s<60?Math.floor(105-5*(60-Number(s))):Math.floor(105+5*(Number(s)-60)):s<60?Math.floor(106-6*(60-Number(s))):Math.floor(106+6*(Number(s)-60));var p=Math.floor(.25*(Number(l)-n)+n),v=Math.floor(n/2.2),y=Math.floor(p/2.2);d>=30?"weight_loss"===c?(t=Math.floor(f*i)-250,a=Math.floor(1.8*y)):"gain_muscle"===c?(t=Math.floor(f*i)+250,a=Math.floor(1.8*y)):(t=Math.floor(f*i),a=Math.floor(1.2*y)):d<30&&d>=25?"weight_loss"===c?(t=Math.floor(22*v),a=Math.floor(1.8*v)):"gain_muscle"===c?(t=Math.floor(32*v),a=Math.floor(1.8*v)):(t=Math.floor(28*v),a=Math.floor(1.2*v)):"weight_loss"===c?(t=Math.floor(22*u),a=Math.floor(1.8*u)):"gain_muscle"===c?(t=Math.floor(32*u),a=Math.floor(1.8*u)):(t=Math.floor(28*u),a=Math.floor(1.2*u));var E=Math.floor(.5*t/4);return{total_calories:t,total_carbohydrates:E,total_fat:Math.floor((t-(4*a+4*E))/9),total_protein:a,goal:c}}}}]);