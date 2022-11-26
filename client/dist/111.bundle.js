"use strict";(self.webpackChunkthe_macro_trainer=self.webpackChunkthe_macro_trainer||[]).push([[111],{341:(e,t,a)=>{var n=a(4836);t.Z=void 0;var r=n(a(4938)),l=a(5893),i=(0,r.default)((0,l.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41-1.41-1.42zm-6.78.66h5v1.5h-5v-1.5zM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16zm6.5 1.25h-5v-1.5h5v1.5zm0-2.5h-5v-1.5h5v1.5z"}),"Calculate");t.Z=i},783:(e,t,a)=>{a.d(t,{y:()=>g});var n=a(9833),r=a(4825),l=a(7294),i=a(1647),o=a(30),c=a(5659),u=a(5878),s=function(e){var t=e.age,a=e.setAge;return l.createElement(l.Fragment,null,l.createElement(i.Z,{id:"input-slider",gutterBottom:!0},"I am ",t," years young"),l.createElement(o.ZP,{container:!0,spacing:2,alignItems:"center"},l.createElement(o.ZP,{item:!0,xs:!0},l.createElement(c.ZP,{value:"number"==typeof t?t:0,onChange:function(e,t){var n=Array.isArray(t)?t[0]:t;a(n)},"data-testid":"age-slider","aria-labelledby":"input-slider",min:18,max:100,color:"secondary"})),l.createElement(o.ZP,{item:!0},l.createElement(u.Z,{value:t,size:"small",required:!0,onChange:function(e){a(""===e.target.value?"":Number(e.target.value))},onBlur:function(){t<18?a(18):t>100&&a(100)},"data-testid":"age-input",inputProps:{step:1,min:18,max:100,type:"number","aria-labelledby":"input-slider"}}))))},m=function(e){var t=e.height,a=e.setHeight;return l.createElement(l.Fragment,null,l.createElement(i.Z,{id:"input-slider",gutterBottom:!0},"I am ",t," inches tall"),l.createElement(o.ZP,{container:!0,spacing:2,alignItems:"center"},l.createElement(o.ZP,{item:!0,xs:!0},l.createElement(c.ZP,{value:"number"==typeof t?t:0,onChange:function(e,t){var n=Array.isArray(t)?t[0]:t;a(n)},"aria-labelledby":"height-input-slider","data-testid":"height-slider",min:54,max:84,color:"secondary"})),l.createElement(o.ZP,{item:!0},l.createElement(u.Z,{value:t,size:"small",onChange:function(e){a(""===e.target.value?"":Number(e.target.value))},onBlur:function(){t<54?a(54):t>84&&a(84)},"data-testid":"height-input",inputProps:{step:1,min:54,max:84,type:"number","aria-labelledby":"input-slider"}}))))},h=function(e){var t=e.weight,a=e.setWeight;return l.createElement(l.Fragment,null,l.createElement(i.Z,{id:"input-slider",gutterBottom:!0},"I weigh ",t," pounds"),l.createElement(o.ZP,{container:!0,spacing:2,alignItems:"center"},l.createElement(o.ZP,{item:!0,xs:!0},l.createElement(c.ZP,{value:"number"==typeof t?t:0,onChange:function(e,t){var n=Array.isArray(t)?t[0]:t;a(n)},"data-testid":"weight-slider",min:70,max:400,"aria-labelledby":"weight-input-slider",color:"secondary"})),l.createElement(o.ZP,{item:!0},l.createElement(u.Z,{value:t,size:"small",onChange:function(e){a(""===e.target.value?"":Number(e.target.value))},onBlur:function(){t<70?a(70):t>400&&a(400)},"data-testid":"weight-input",inputProps:{step:1,min:70,max:400,type:"number","aria-labelledby":"input-slider"}}))))},g=function(e){var t=e.handleGenderChange,a=e.gender,i=e.activityLevel,o=e.handleActivityLevelChange,c=e.age,u=e.setAge,g=e.height,d=e.setHeight,v=e.weight,f=e.setWeight,p=e.goal,y=e.handleGoalChange;return l.createElement(l.Fragment,null,l.createElement(n.Z,{color:"primary",fullWidth:!0,value:p,exclusive:!0,onChange:y},l.createElement(r.Z,{value:"weight_loss"},"Weight loss"),l.createElement(r.Z,{value:"maintain"},"Maintain"),l.createElement(r.Z,{value:"gain_muscle"},"Gain muscle")),l.createElement(n.Z,{color:"primary",fullWidth:!0,value:i,exclusive:!0,onChange:o},l.createElement(r.Z,{value:1},"Sedentary(no exercise)"),l.createElement(r.Z,{value:1.25},"Moderate (2x - 4x per week)"),l.createElement(r.Z,{value:1.5},"Active (5x+ per week)")),l.createElement(n.Z,{color:"primary",fullWidth:!0,value:a,exclusive:!0,onChange:t},l.createElement(r.Z,{value:"male"},"Male"),l.createElement(r.Z,{value:"female"},"Female"),l.createElement(r.Z,{value:"other"},"Non-binary")),l.createElement(s,{age:c,setAge:u}),l.createElement(m,{height:g,setHeight:d}),l.createElement(h,{weight:v,setWeight:f}))}},8044:(e,t,a)=>{a.d(t,{T:()=>E});var n=a(5722),r=a(9144),l=a(1647),i=a(5305),o=a(9620),c=a(7745),u=a(4498),s=a(8720),m=a(2962),h=a(9669),g=a.n(h),d=a(7294),v=a(947),f=a(783),p=function(e,t,a,n){return new(a||(a=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function o(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,o)}c((n=n.apply(e,t||[])).next())}))},y=function(e,t){var a,n,r,l,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(l){return function(o){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,n&&(r=2&l[0]?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){i.label=l[1];break}if(6===l[0]&&i.label<r[1]){i.label=r[1],r=l;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(l);break}r[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],n=0}finally{a=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}},E=function(e){var t=e.setOpenErrorAlert,a=e.setErrorMessage,h=e.setShowNextPage,E=e.setShowSignup,b=e.setAlertSeverity,w=e.showNextPage,Z=e.page,x=e.setGoals,C=d.useState(1),P=C[0],S=C[1],A=d.useState("male"),k=A[0],N=A[1],G=d.useState("weight_loss"),M=G[0],F=G[1],W=d.useState(18),z=W[0],L=W[1],H=d.useState(60),_=H[0],B=H[1],I=d.useState(200),T=I[0],O=I[1],D=void 0!==w&&w;return d.createElement("div",{className:"macro-calculator-container"},d.createElement(n.Z,{onSubmit:function(e){return p(void 0,void 0,void 0,(function(){var n,r,l,i,o;return y(this,(function(c){switch(c.label){case 0:return e.preventDefault(),[4,g().get("/api/goals/calculate",{params:{gender:k,age:z,height:_,weight:T,weightMetric:"lb",heightMetric:"ft",activityLevel:P,goal:M}})];case 1:n=c.sent(),(r=n.data).goal=M,c.label=2;case 2:return c.trys.push([2,4,,5]),l=g().post("/api/goals",r),i=g().post("/api/metrics",{gender:k,age:z,height:_,weight:T,activityLevel:P,goal:M}),[4,g().all([l,i])];case 3:return c.sent(),"macrocalculator"===Z&&void 0!==x?(x(r),a("You have updated your macronutrient needs.")):a("You have successfully created an account. Please login."),b("success"),t(!0),h(!1),E(!1),[3,5];case 4:return o=c.sent(),console.log("err:",o),[3,5];case 5:return[2]}}))}))},component:"form",className:"macro-calculator-form","data-testid":"macro-calculator-signup-form",elevation:2},void 0!==Z&&"macrocalculator"===Z?d.createElement(d.Fragment,null,d.createElement(r.Z,{direction:"row",sx:{gap:"1em"}},d.createElement(v.vav,{className:"macro-calculator-icon"}),d.createElement(l.Z,{align:"center",variant:"h6"},"Calculate your Macronutrient Recommendations")),d.createElement(l.Z,{variant:"subtitle1"},"Fill out the form below to calculate your recommended nutrient needs")):d.createElement(d.Fragment,null,d.createElement(l.Z,{variant:"h6"},"Complete setting up your account"),d.createElement(l.Z,{variant:"subtitle1"},"Fill out the form below so we can calculate your recommended nutrient needs")),d.createElement(f.y,{handleGenderChange:function(e,t){N(t)},gender:k,activityLevel:P,handleActivityLevelChange:function(e,t){S(t)},age:z,setAge:L,height:_,setHeight:B,weight:T,setWeight:O,goal:M,handleGoalChange:function(e,t){F(t)}}),void 0!==Z&&"macrocalculator"===Z?d.createElement(i.Z,{fullWidth:!0,"data-testid":"recalculate-btn",onClick:function(){return h(!0)},variant:"contained"},"Calculate"):d.createElement(i.Z,{fullWidth:!0,type:"submit",variant:"contained"},"Complete creating account"),void 0!==Z&&"macrocalculator"===Z?d.createElement(o.Z,{open:D},d.createElement(c.Z,null,"Are you sure you want to update your currentGoals? This will overwrite any of your current settings."),d.createElement("form",null,d.createElement(u.Z,null,d.createElement(s.Z,{display:"flex",flexDirection:"column",gap:"10px"})),d.createElement(m.Z,null,d.createElement(i.Z,{variant:"contained","aria-label":"submit form to recalculate macronutrients",type:"submit"},"Confirm"),d.createElement(i.Z,{color:"error",variant:"contained",onClick:function(){return h(!1)}},"Cancel")))):null))}},6162:(e,t,a)=>{a.d(t,{y:()=>r});var n=a(9250),r=function(){return(0,n.bx)()}},6111:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(341),r=a(9144),l=a(1647),i=a(9669),o=a.n(i),c=a(7294),u=a(8044),s=a(1566),m=a(6162),h=function(e,t,a,n){return new(a||(a=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function o(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,o)}c((n=n.apply(e,t||[])).next())}))},g=function(e,t){var a,n,r,l,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(l){return function(o){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,n&&(r=2&l[0]?n.return:l[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;switch(n=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){i.label=l[1];break}if(6===l[0]&&i.label<r[1]){i.label=r[1],r=l;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(l);break}r[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],n=0}finally{a=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,o])}}};const d=function(){var e=(0,m.y)(),t=e.setAlertMessage,a=e.setOpenAlert,i=e.setAlertSeverity,d=e.setGoals,v=(0,s.a)().isLoading,f=(0,c.useState)(!1),p=f[0],y=f[1];(0,c.useEffect)((function(){E()}),[]);var E=function(){return h(void 0,void 0,void 0,(function(){var e,t;return g(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,o().get("/api/goals")];case 1:return""!==(e=a.sent()).data&&d(e.data),[3,3];case 2:return t=a.sent(),console.log(t),[3,3];case 3:return[2]}}))}))};return v?null:c.createElement(c.Fragment,null,c.createElement("div",{className:"macro-calc-page"},c.createElement(r.Z,{direction:"row",spacing:1},c.createElement(n.Z,null),c.createElement(l.Z,{variant:"body1",align:"center"},"Recalculate your goals here, or navigate to your user profile page to enter your desired macronutrients")),c.createElement(u.T,{setOpenErrorAlert:a,setErrorMessage:t,setShowNextPage:y,setShowSignup:y,setAlertSeverity:i,page:"macrocalculator",showNextPage:p,setGoals:d})))}}}]);