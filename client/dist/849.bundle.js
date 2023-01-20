"use strict";(self.webpackChunkthe_macro_trainer=self.webpackChunkthe_macro_trainer||[]).push([[849],{9535:(e,t,r)=>{var n=r(4836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,r&&r.set(e,n)}(r(7294));var a=n(r(4938)),o=r(5893);function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}var i=(0,a.default)((0,o.jsx)("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"}),"Google");t.Z=i},783:(e,t,r)=>{r.d(t,{y:()=>h});var n=r(9833),a=r(4825),o=r(7294),l=r(1647),i=r(30),c=r(5659),s=r(5878),u=function(e){var t=e.age,r=e.setAge;return o.createElement(o.Fragment,null,o.createElement(l.Z,{id:"input-slider",gutterBottom:!0},"I am ",t," years young"),o.createElement(i.ZP,{container:!0,spacing:2,alignItems:"center"},o.createElement(i.ZP,{item:!0,xs:!0},o.createElement(c.ZP,{value:"number"==typeof t?t:0,onChange:function(e,t){var n=Array.isArray(t)?t[0]:t;r(n)},"data-testid":"age-slider","aria-labelledby":"input-slider",min:18,max:100,color:"secondary"})),o.createElement(i.ZP,{item:!0},o.createElement(s.Z,{value:t,size:"small",required:!0,onChange:function(e){r(""===e.target.value?"":Number(e.target.value))},onBlur:function(){t<18?r(18):t>100&&r(100)},"data-testid":"age-input",inputProps:{step:1,min:18,max:100,type:"number","aria-labelledby":"input-slider"}}))))},m=function(e){var t=e.height,r=e.setHeight;return o.createElement(o.Fragment,null,o.createElement(l.Z,{id:"input-slider",gutterBottom:!0},"I am ",t," inches tall"),o.createElement(i.ZP,{container:!0,spacing:2,alignItems:"center"},o.createElement(i.ZP,{item:!0,xs:!0},o.createElement(c.ZP,{value:"number"==typeof t?t:0,onChange:function(e,t){var n=Array.isArray(t)?t[0]:t;r(n)},"aria-labelledby":"height-input-slider","data-testid":"height-slider",min:54,max:84,color:"secondary"})),o.createElement(i.ZP,{item:!0},o.createElement(s.Z,{value:t,size:"small",onChange:function(e){r(""===e.target.value?"":Number(e.target.value))},onBlur:function(){t<54?r(54):t>84&&r(84)},"data-testid":"height-input",inputProps:{step:1,min:54,max:84,type:"number","aria-labelledby":"input-slider"}}))))},d=function(e){var t=e.weight,r=e.setWeight;return o.createElement(o.Fragment,null,o.createElement(l.Z,{id:"input-slider",gutterBottom:!0},"I weigh ",t," pounds"),o.createElement(i.ZP,{container:!0,spacing:2,alignItems:"center"},o.createElement(i.ZP,{item:!0,xs:!0},o.createElement(c.ZP,{value:"number"==typeof t?t:0,onChange:function(e,t){var n=Array.isArray(t)?t[0]:t;r(n)},"data-testid":"weight-slider",min:70,max:400,"aria-labelledby":"weight-input-slider",color:"secondary"})),o.createElement(i.ZP,{item:!0},o.createElement(s.Z,{value:t,size:"small",onChange:function(e){r(""===e.target.value?"":Number(e.target.value))},onBlur:function(){t<70?r(70):t>400&&r(400)},"data-testid":"weight-input",inputProps:{step:1,min:70,max:400,type:"number","aria-labelledby":"input-slider"}}))))},h=function(e){var t=e.handleGenderChange,r=e.gender,l=e.activityLevel,i=e.handleActivityLevelChange,c=e.age,s=e.setAge,h=e.height,p=e.setHeight,g=e.weight,f=e.setWeight,v=e.goal,y=e.handleGoalChange;return o.createElement(o.Fragment,null,o.createElement(n.Z,{color:"primary",fullWidth:!0,value:v,exclusive:!0,onChange:y},o.createElement(a.Z,{value:"weight_loss"},"Weight loss"),o.createElement(a.Z,{value:"maintain"},"Maintain"),o.createElement(a.Z,{value:"gain_muscle"},"Gain muscle")),o.createElement(n.Z,{color:"primary",fullWidth:!0,value:l,exclusive:!0,onChange:i},o.createElement(a.Z,{value:1},"Sedentary(no exercise)"),o.createElement(a.Z,{value:1.25},"Moderate (2x - 4x per week)"),o.createElement(a.Z,{value:1.5},"Active (5x+ per week)")),o.createElement(n.Z,{color:"primary",fullWidth:!0,value:r,exclusive:!0,onChange:t},o.createElement(a.Z,{value:"male"},"Male"),o.createElement(a.Z,{value:"female"},"Female"),o.createElement(a.Z,{value:"other"},"Non-binary")),o.createElement(u,{age:c,setAge:s}),o.createElement(m,{height:h,setHeight:p}),o.createElement(d,{weight:g,setWeight:f}))}},9397:(e,t,r)=>{r.d(t,{y:()=>o});var n=r(2949),a=r(7294),o=function(e){var t=e.showSignup,r=e.errorMessage,o=e.handleCreateAccountChange,l=e.handleLoginChange,i=e.name,c=e.label,s=e.value,u=e.type,m=e.helperText,d=e.placeholder,h=e.showTextFieldError;return a.createElement(n.Z,{inputProps:{"data-testid":"username-textfield"},required:!0,error:h,onChange:t?o:l,label:c,type:u,variant:"filled",name:i,placeholder:d,fullWidth:!0,helperText:h?r:m,value:s})}},8044:(e,t,r)=>{r.d(t,{T:()=>E});var n=r(5722),a=r(9144),o=r(1647),l=r(5305),i=r(9620),c=r(7745),s=r(4498),u=r(8720),m=r(2962),d=r(9669),h=r.n(d),p=r(7294),g=r(947),f=r(783),v=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function l(e){try{c(n.next(e))}catch(e){o(e)}}function i(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,i)}c((n=n.apply(e,t||[])).next())}))},y=function(e,t){var r,n,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},E=function(e){var t=e.setOpenErrorAlert,r=e.setErrorMessage,d=e.setShowNextPage,E=e.setShowSignup,w=e.setAlertSeverity,b=e.showNextPage,x=e.page,Z=e.setGoals,S=p.useState(1),C=S[0],P=S[1],A=p.useState("male"),T=A[0],k=A[1],M=p.useState("weight_loss"),F=M[0],N=M[1],O=p.useState(18),W=O[0],L=O[1],G=p.useState(60),j=G[0],I=G[1],_=p.useState(200),D=_[0],B=_[1],R=void 0!==b&&b;return p.createElement("div",{className:"macro-calculator-container"},p.createElement(n.Z,{onSubmit:function(e){return v(void 0,void 0,void 0,(function(){var n,a,o,l,i;return y(this,(function(c){switch(c.label){case 0:return e.preventDefault(),[4,h().get("/api/goals/calculate",{params:{gender:T,age:W,height:j,weight:D,weightMetric:"lb",heightMetric:"ft",activityLevel:C,goal:F}})];case 1:n=c.sent(),(a=n.data).goal=F,c.label=2;case 2:return c.trys.push([2,4,,5]),o=h().post("/api/goals",a),l=h().post("/api/metrics",{gender:T,age:W,height:j,weight:D,activityLevel:C,goal:F}),[4,h().all([o,l])];case 3:return c.sent(),"macrocalculator"===x&&void 0!==Z?(Z(a),r("You have updated your macronutrient needs.")):r("You have successfully created an account. Please login."),w("success"),t(!0),d(!1),E(!1),[3,5];case 4:return i=c.sent(),console.error(i),[3,5];case 5:return[2]}}))}))},component:"form",className:"macro-calculator-form","data-testid":"macro-calculator-signup-form",elevation:2},void 0!==x&&"macrocalculator"===x?p.createElement(p.Fragment,null,p.createElement(a.Z,{direction:"row",sx:{gap:"1em"}},p.createElement(g.vav,{className:"macro-calculator-icon"}),p.createElement(o.Z,{align:"center",variant:"h6"},"Calculate your Macronutrient Recommendations")),p.createElement(o.Z,{variant:"subtitle1"},"Fill out the form below to calculate your recommended nutrient needs")):p.createElement(p.Fragment,null,p.createElement(o.Z,{variant:"h6"},"Complete setting up your account"),p.createElement(o.Z,{variant:"subtitle1"},"Fill out the form below so we can calculate your recommended nutrient needs")),p.createElement(f.y,{handleGenderChange:function(e,t){k(t)},gender:T,activityLevel:C,handleActivityLevelChange:function(e,t){P(t)},age:W,setAge:L,height:j,setHeight:I,weight:D,setWeight:B,goal:F,handleGoalChange:function(e,t){N(t)}}),void 0!==x&&"macrocalculator"===x?p.createElement(l.Z,{fullWidth:!0,"data-testid":"recalculate-btn",onClick:function(){return d(!0)},variant:"contained"},"Calculate"):p.createElement(l.Z,{fullWidth:!0,type:"submit",variant:"contained"},"Complete creating account"),void 0!==x&&"macrocalculator"===x?p.createElement(i.Z,{open:R},p.createElement(c.Z,null,"Are you sure you want to update your currentGoals? This will overwrite any of your current settings."),p.createElement("form",null,p.createElement(s.Z,null,p.createElement(u.Z,{display:"flex",flexDirection:"column",gap:"10px"})),p.createElement(m.Z,null,p.createElement(l.Z,{variant:"contained","aria-label":"submit form to recalculate macronutrients",type:"submit"},"Confirm"),p.createElement(l.Z,{color:"error",variant:"contained",onClick:function(){return d(!1)}},"Cancel")))):null))}},1134:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var n=r(7294),a=r(8339),o=r(9535),l=r(5722),i=r(1647),c=r(5305),s=r(9144),u=r(9669),m=r.n(u),d=r(9250),h=r(9397),p=r(1566);const g=r.p+"aff557eece24fd0164aa.svg";var f=function(){return f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)},v=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function l(e){try{c(n.next(e))}catch(e){o(e)}}function i(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,i)}c((n=n.apply(e,t||[])).next())}))},y=function(e,t){var r,n,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},E=function(e){var t=e.showSignup,r=e.setAlertSeverity,a=e.handleRedirectToSignup,u=e.showTextFieldError,E=e.setShowTextFieldError,w=e.errorMessage,b=e.setErrorMessage,x=e.handleErrorAlert,Z=(0,d.s0)(),S=(0,p.a)().setIsLoggedIn,C=(0,n.useState)({username:"",password:""}),P=C[0],A=C[1],T=function(e){var t,r;r="username"===e.target.name?e.target.value.toLowerCase():e.target.value,A(f(f({},P),((t={})[e.target.name]=r,t)))};return n.createElement(n.Fragment,null,n.createElement("div",{className:"login-form"},n.createElement("img",{src:g}),n.createElement("div",{className:"login-form-card"},n.createElement(l.Z,{component:"form",elevation:2,onSubmit:function(e){return v(void 0,void 0,void 0,(function(){var t;return y(this,(function(n){switch(n.label){case 0:e.preventDefault(),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,m().post("/api/login",P,{withCredentials:!0})];case 2:return 200===n.sent().status&&(S(!0),E(!1),Z("/home",{replace:!0})),[3,4];case 3:return t=n.sent(),console.error("err: ",t),r("error"),b("No matching username and password found."),E(!0),x(),[3,4];case 4:return[2]}}))}))},className:"login-form-input"},n.createElement(i.Z,{variant:"h6"},"Log in"),n.createElement(c.Z,{variant:"contained",fullWidth:!0,component:"a",color:"error",href:"/api/login/federated/google"},n.createElement(o.Z,null),n.createElement(i.Z,{variant:"button",align:"right",sx:{marginLeft:"10px"}},"Sign in with Google")),n.createElement(i.Z,{variant:"h6"},"or"),n.createElement(h.y,{value:P.username,showSignup:t,handleLoginChange:T,name:"username",showTextFieldError:void 0,label:"Email",type:"email",placeholder:"Email",errorMessage:"",helperText:"Enter your email."}),n.createElement(h.y,{showTextFieldError:u,showSignup:t,errorMessage:w,name:"password",label:"Password",type:"password",helperText:"Enter your password",placeholder:"Password",value:P.password,handleLoginChange:T}),n.createElement(s.Z,{alignItems:"flex-end",sx:{width:"100%"}},n.createElement(i.Z,{align:"center",className:"login-form-text",sx:{"&:hover":{cursor:"pointer"}},onClick:function(){Z("/account-recovery")},variant:"caption"},"Forgot password?")),n.createElement(c.Z,{"data-testid":"login-btn",type:"submit",fullWidth:!0,variant:"contained"},"Log In"),n.createElement(s.Z,{direction:"row"},n.createElement(i.Z,{className:"login-form-account-text",variant:"caption"},"Don't have an account yet?"," "),n.createElement(c.Z,{variant:"text",onClick:a},n.createElement(i.Z,{align:"center","data-testid":"create-account-btn",className:"login-form-text",variant:"caption",color:"textPrimary",sx:{textDecoration:"underline"}},"Create Account")))))))},w=r(8044),b=function(){return b=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},b.apply(this,arguments)},x=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function l(e){try{c(n.next(e))}catch(e){o(e)}}function i(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,i)}c((n=n.apply(e,t||[])).next())}))},Z=function(e,t){var r,n,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},S=function(e){var t=e.showSignup,r=e.setShowSignup,a=e.handleRedirectToSignup,s=e.showTextFieldError,u=e.setShowTextFieldError,d=e.errorMessage,p=e.setErrorMessage,g=e.setOpenErrorAlert,f=e.setAlertSeverity,v=(0,n.useState)(!1),y=v[0],E=v[1],S=(0,n.useState)({email:"",password:"",confirmedPassword:""}),C=S[0],P=S[1],A=function(e){var t,r;r="email"===e.target.name?e.target.value.toLowerCase():e.target.value,P(b(b({},C),((t={})[e.target.name]=r,t)))};(0,n.useEffect)((function(){u(!1)}),[]);return n.createElement("div",{className:"signup"},y?n.createElement(w.T,{setOpenErrorAlert:g,setErrorMessage:p,setShowNextPage:E,setShowSignup:r,setAlertSeverity:f}):n.createElement(l.Z,{onSubmit:function(e){return x(void 0,void 0,void 0,(function(){var t;return Z(this,(function(r){switch(r.label){case 0:return e.preventDefault(),C.password===C.confirmedPassword?[3,1]:(p("Your passwords do not match"),g(!0),u(!0),[3,4]);case 1:return r.trys.push([1,3,,4]),[4,m().post("/api/signup",C)];case 2:return r.sent(),f("success"),p("Your account has been created! Now enter your metrics to get customized macronutrient recommendations."),g(!0),E(!0),[3,4];case 3:return t=r.sent(),console.error(t),f("error"),p("An account with your email already exists."),g(!0),[3,4];case 4:return[2]}}))}))},component:"form",className:"signup-form","data-testid":"signup-form"},n.createElement(i.Z,{variant:"h6"},"Create an account"),n.createElement(c.Z,{variant:"contained",fullWidth:!0,component:"a",color:"error",href:"/api/login/federated/google"},n.createElement(o.Z,null),n.createElement(i.Z,{variant:"button",align:"right",sx:{marginLeft:"10px"}},"Sign in with Google")),n.createElement(i.Z,{variant:"h6"},"or"),n.createElement(i.Z,{variant:"subtitle1"},"Please enter your details"),n.createElement(h.y,{showSignup:!0,errorMessage:"",handleCreateAccountChange:A,name:"email",label:"Email",value:C.email,type:"email",helperText:"Enter your email.",placeholder:"Email",showTextFieldError:void 0}),n.createElement(h.y,{showSignup:t,errorMessage:d,handleCreateAccountChange:A,name:"password",label:"Password",type:"password",helperText:"Enter your password",placeholder:"Password",value:C.password,showTextFieldError:s}),n.createElement(h.y,{errorMessage:d,showTextFieldError:s,handleCreateAccountChange:A,type:"password",name:"confirmedPassword",placeholder:"Confirm Password",label:"Confirm Password",showSignup:!0,helperText:"Confirm your password.",value:C.confirmedPassword}),n.createElement(c.Z,{"data-testid":"initial-signup-form-btn",type:"submit",fullWidth:!0,variant:"contained"},"Almost done"),n.createElement(c.Z,{variant:"text",onClick:a},n.createElement(i.Z,{align:"center",className:"signup-form-text",variant:"caption"},"Go back"))))},C=r(1275);const P=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1],o=(0,n.useState)("success"),l=o[0],i=o[1],c=(0,n.useState)(!1),s=c[0],u=c[1],m=(0,n.useState)(!1),h=m[0],p=m[1],g=(0,n.useState)(""),f=g[0],v=g[1],y=function(){p(!h)},w=function(){r(!t)},b=(0,d.TH)();return(0,n.useEffect)((function(){b.state&&b.state.resetPassword?(i("success"),v("Your password has been reset"),p(!0),window.history.replaceState({},document.title)):b.state&&b.state.sentRecoveryEmail&&(i("success"),v("A link to reset your password has been successfully sent to your email address"),p(!0),window.history.replaceState({},document.title))}),[]),n.createElement(n.Fragment,null,t?n.createElement(S,{showSignup:t,setShowSignup:r,setAlertSeverity:i,handleRedirectToSignup:w,showTextFieldError:s,setShowTextFieldError:u,errorMessage:f,setErrorMessage:v,setOpenErrorAlert:p}):n.createElement(E,{showSignup:t,setAlertSeverity:i,handleRedirectToSignup:w,showTextFieldError:s,setShowTextFieldError:u,errorMessage:f,setErrorMessage:v,handleErrorAlert:y}),n.createElement(C.I,{openAlert:h,handleAlert:y,alertSeverity:l,alertMessage:f}),n.createElement(a.$,null))}}}]);