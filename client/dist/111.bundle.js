"use strict";(self.webpackChunkthe_diabetes_calculator=self.webpackChunkthe_diabetes_calculator||[]).push([[111],{3379:(e,t,a)=>{var r=a(5318);t.Z=void 0;var n=r(a(4938)),l=a(5893),o=(0,n.default)((0,l.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");t.Z=o},799:(e,t,a)=>{a.d(t,{y:()=>d});var r=a(7294),n=a(5723),l=a(3382),o=a(2658),i=a(5725),c=a(7138),u=a(3981),s=function(e){var t=e.age,a=e.setAge;return r.createElement(r.Fragment,null,r.createElement(o.Z,{id:"input-slider",gutterBottom:!0},"I am ",t," years young"),r.createElement(i.ZP,{container:!0,spacing:2,alignItems:"center"},r.createElement(i.ZP,{item:!0,xs:!0},r.createElement(c.ZP,{value:"number"==typeof t?t:0,onChange:function(e,t){a(t)},"data-testid":"age-slider","aria-labelledby":"input-slider",min:18,max:100,color:"secondary"})),r.createElement(i.ZP,{item:!0},r.createElement(u.Z,{value:t,size:"small",required:!0,onChange:function(e){a(""===e.target.value?"":Number(e.target.value))},onBlur:function(){t<18?a(18):t>100&&a(100)},"data-testid":"age-input",inputProps:{step:1,min:18,max:100,type:"number","aria-labelledby":"input-slider"}}))))},m=function(e){var t=e.height,a=e.setHeight;return r.createElement(r.Fragment,null,r.createElement(o.Z,{id:"input-slider",gutterBottom:!0},"I am ",t," inches tall"),r.createElement(i.ZP,{container:!0,spacing:2,alignItems:"center"},r.createElement(i.ZP,{item:!0,xs:!0},r.createElement(c.ZP,{value:"number"==typeof t?t:0,onChange:function(e,t){a(t)},"aria-labelledby":"height-input-slider","data-testid":"height-slider",min:54,max:84,color:"secondary"})),r.createElement(i.ZP,{item:!0},r.createElement(u.Z,{value:t,size:"small",onChange:function(e){a(""===e.target.value?"":Number(e.target.value))},onBlur:function(){t<54?a(54):t>84&&a(84)},"data-testid":"height-input",inputProps:{step:1,min:54,max:84,type:"number","aria-labelledby":"input-slider"}}))))},h=function(e){var t=e.weight,a=e.setWeight;return r.createElement(r.Fragment,null,r.createElement(o.Z,{id:"input-slider",gutterBottom:!0},"I weigh ",t," pounds"),r.createElement(i.ZP,{container:!0,spacing:2,alignItems:"center"},r.createElement(i.ZP,{item:!0,xs:!0},r.createElement(c.ZP,{value:"number"==typeof t?t:0,onChange:function(e,t){a(t)},"data-testid":"weight-slider",min:70,max:400,"aria-labelledby":"weight-input-slider",color:"secondary"})),r.createElement(i.ZP,{item:!0},r.createElement(u.Z,{value:t,size:"small",onChange:function(e){a(""===e.target.value?"":Number(e.target.value))},onBlur:function(){t<70?a(70):t>400&&a(400)},"data-testid":"weight-input",inputProps:{step:1,min:70,max:400,type:"number","aria-labelledby":"input-slider"}}))))},d=function(e){var t=e.handleGenderChange,a=e.gender,o=e.activityLevel,i=e.handleActivityLevelChange,c=e.age,u=e.setAge,d=e.height,f=e.setHeight,p=e.weight,g=e.setWeight;return r.createElement(r.Fragment,null,r.createElement(n.Z,{color:"primary",fullWidth:!0,value:a,exclusive:!0,onChange:t},r.createElement(l.Z,{value:"male"},"Male"),r.createElement(l.Z,{value:"female"},"Female"),r.createElement(l.Z,{value:"other"},"Other")),r.createElement(n.Z,{color:"primary",fullWidth:!0,value:o,exclusive:!0,onChange:i},r.createElement(l.Z,{value:1},"Sedentary(no exercise)"),r.createElement(l.Z,{value:1.25},"Moderate (2x - 4x per week)"),r.createElement(l.Z,{value:1.5},"Active (5x+ per week)")),r.createElement(s,{age:c,setAge:u}),r.createElement(m,{height:d,setHeight:f}),r.createElement(h,{weight:p,setWeight:g}))}},7750:(e,t,a)=>{a.d(t,{C:()=>w});var r=a(7294),n=a(9669),l=a.n(n),o=a(799),i=a(6501),c=a(6447),u=a(2658),s=a(6914),m=a(4666),h=a(7645),d=a(6755),f=a(9226),p=a(8979),g=a(5165),v=a(6974),y=a(947),b=function(e,t,a,r){return new(a||(a=Promise))((function(n,l){function o(e){try{c(r.next(e))}catch(e){l(e)}}function i(e){try{c(r.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,i)}c((r=r.apply(e,t||[])).next())}))},E=function(e,t){var a,r,n,l,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,r&&(n=2&l[0]?r.return:l[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,l[1])).done)return n;switch(r=0,n&&(l=[2&l[0],n.value]),l[0]){case 0:case 1:n=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(n=o.trys,(n=n.length>0&&n[n.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!n||l[1]>n[0]&&l[1]<n[3])){o.label=l[1];break}if(6===l[0]&&o.label<n[1]){o.label=n[1],n=l;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(l);break}n[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{a=n=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},w=function(e){var t=e.setOpenErrorAlert,a=e.setErrorMessage,n=e.setShowNextPage,w=e.setShowSignup,Z=e.setAlertSeverity,_=e.showNextPage,x=e.page,C=((0,v.s0)(),r.useState(1)),S=C[0],P=C[1],M=r.useState("male"),k=M[0],A=M[1],N=r.useState(18),F=N[0],L=N[1],I=r.useState(60),W=I[0],B=I[1],G=r.useState(200),T=G[0],D=G[1];return r.createElement("div",{className:"macro-calculator-container"},r.createElement(i.Z,{onSubmit:function(e){return b(void 0,void 0,void 0,(function(){var r,o;return E(this,(function(i){switch(i.label){case 0:e.preventDefault(),r=(0,g.K)({gender:k,age:F,height:W,weight:T,activityLevel:S}),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,l().post("/api/metrics",r)];case 2:return i.sent(),a("macrocalculator"===x?"You have updated your macronutrient needs. Go to search page to begin searching for recipes, menu items, or grocery products within this range.":"You have successfully created an account. Please login."),Z("success"),t(!0),n(!1),w(!1),[3,4];case 3:return o=i.sent(),console.log("err:",o),[3,4];case 4:return[2]}}))}))},component:"form",className:"macro-calculator-form","data-testid":"macro-calculator-signup-form",elevation:2},void 0!==x&&"macrocalculator"===x?r.createElement(r.Fragment,null,r.createElement(c.Z,{direction:"row",sx:{gap:"1em"}},r.createElement(y.vav,{className:"macro-calculator-icon"}),r.createElement(u.Z,{align:"center",variant:"h6"},"Calculate your Macronutrient Recommendations")),r.createElement(u.Z,{variant:"subtitle1"},"Fill out the form below to calculate your recommended nutrient needs (note that all recommendations are made for individuals with Type 2 Diabetes).")):r.createElement(r.Fragment,null,r.createElement(u.Z,{variant:"h6"},"Complete setting up your account"),r.createElement(u.Z,{variant:"subtitle1"},"Fill out the form below so we can calculate your recommended nutrient needs (note that all recommendations are made for individuals with Type 2 Diabetes).")),r.createElement(o.y,{handleGenderChange:function(e,t){A(t)},gender:k,activityLevel:S,handleActivityLevelChange:function(e,t){P(t)},age:F,setAge:L,height:W,setHeight:B,weight:T,setWeight:D}),void 0!==x&&"macrocalculator"===x?r.createElement(s.Z,{fullWidth:!0,"data-testid":"recalculate-btn",onClick:function(){return n(!0)},variant:"contained"},"Calculate"):r.createElement(s.Z,{fullWidth:!0,type:"submit",variant:"contained"},"Complete creating account"),void 0!==x&&"macrocalculator"===x?r.createElement(m.Z,{open:_},r.createElement(h.Z,null,"Are you sure you want to update your metrics? This will overwrite any of your current settings."),r.createElement("form",null,r.createElement(d.Z,null,r.createElement(f.Z,{display:"flex",flexDirection:"column",gap:"10px"})),r.createElement(p.Z,null,r.createElement(s.Z,{variant:"contained","aria-label":"submit form to recalculate macronutrients",type:"submit"},"Confirm"),r.createElement(s.Z,{color:"error",variant:"contained",onClick:function(){return n(!1)}},"Cancel")))):null))}},6162:(e,t,a)=>{a.d(t,{y:()=>n});var r=a(6974),n=function(){return(0,r.bx)()}},6111:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var r=a(7294),n=a(9669),l=a.n(n),o=a(4386),i=a(6867),c=a(7750),u=a(1566),s=a(3379),m=a(6162),h=function(e,t,a,r){return new(a||(a=Promise))((function(n,l){function o(e){try{c(r.next(e))}catch(e){l(e)}}function i(e){try{c(r.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,i)}c((r=r.apply(e,t||[])).next())}))},d=function(e,t){var a,r,n,l,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,r&&(n=2&l[0]?r.return:l[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,l[1])).done)return n;switch(r=0,n&&(l=[2&l[0],n.value]),l[0]){case 0:case 1:n=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(n=o.trys,(n=n.length>0&&n[n.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!n||l[1]>n[0]&&l[1]<n[3])){o.label=l[1];break}if(6===l[0]&&o.label<n[1]){o.label=n[1],n=l;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(l);break}n[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{a=n=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}};const f=function(){var e=(0,m.y)(),t=e.handleDrawerToggle,a=e.setAlertMessage,n=e.setOpenAlert,f=e.setAlertSeverity,p=e.setGoals,g=(e.goals,(0,u.a)()),v=g.isLoading,y=(g.isLoggedIn,g.username,(0,r.useState)(!1)),b=y[0],E=y[1],w=(0,r.useState)(!1),Z=(w[0],w[1]);(0,r.useEffect)((function(){_()}),[]);var _=function(){return h(void 0,void 0,void 0,(function(){var e,t;return d(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,l().get("/api/metrics")];case 1:return e=a.sent(),p(e.data),[3,3];case 2:return t=a.sent(),console.log(t),[3,3];case 3:return[2]}}))}))};return v?null:r.createElement("div",{className:"macro-calc-page"},r.createElement(o.Z,{sx:{display:{sm:"none"},alignSelf:"flex-start"}},r.createElement(i.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:t,sx:{mr:2,display:{sm:"none"}}},r.createElement(s.Z,null))),r.createElement(c.C,{setOpenErrorAlert:n,setErrorMessage:a,setShowNextPage:E,setShowSignup:Z,setAlertSeverity:f,page:"macrocalculator",showNextPage:b}))}},5165:(e,t,a)=>{a.d(t,{K:()=>r});var r=function(e){var t=e.age,a=e.weight,r=e.gender,n=e.height,l=e.activityLevel,o=a/2.2,i=10*o+6.25*Math.floor(2.54*n)-5*t+("female"===r?-161:5),c={};c.total_calories=Math.floor(i*l),c.min_calories_per_meal=Math.floor(c.total_calories/3-150),c.max_calories_per_meal=Math.floor(c.total_calories/3+150),c.total_carbohydrates=Math.floor(.45*i/4),c.min_carbs_per_meal=Math.floor(c.total_carbohydrates/3-5),c.max_carbs_per_meal=Math.floor(c.total_carbohydrates/3+5),c.total_protein=Math.floor(o),c.min_protein_per_meal=Math.floor(c.total_protein/3-10),c.max_protein_per_meal=Math.floor(c.total_protein/3+10);var u=c.total_calories-(4*c.total_carbohydrates+4*c.total_protein);return c.total_fat=Math.floor(u/9),c.min_fat_per_meal=Math.floor(c.total_fat/3-10),c.max_fat_per_meal=Math.floor(c.total_fat/3+10),c}}}]);