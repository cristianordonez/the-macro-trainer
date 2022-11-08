"use strict";(self.webpackChunkthe_macro_trainer=self.webpackChunkthe_macro_trainer||[]).push([[204],{9535:(e,t,r)=>{var a=r(4836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,r&&r.set(e,a)}(r(7294));var n=a(r(4938)),o=r(5893);function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}var i=(0,n.default)((0,o.jsx)("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"}),"Google");t.Z=i},783:(e,t,r)=>{r.d(t,{y:()=>d});var a=r(9833),n=r(4825),o=r(7294),l=r(1647),i=r(30),c=r(5659),u=r(5878),s=function(e){var t=e.age,r=e.setAge;return o.createElement(o.Fragment,null,o.createElement(l.Z,{id:"input-slider",gutterBottom:!0},"I am ",t," years young"),o.createElement(i.ZP,{container:!0,spacing:2,alignItems:"center"},o.createElement(i.ZP,{item:!0,xs:!0},o.createElement(c.ZP,{value:"number"==typeof t?t:0,onChange:function(e,t){var a=Array.isArray(t)?t[0]:t;r(a)},"data-testid":"age-slider","aria-labelledby":"input-slider",min:18,max:100,color:"secondary"})),o.createElement(i.ZP,{item:!0},o.createElement(u.Z,{value:t,size:"small",required:!0,onChange:function(e){r(""===e.target.value?"":Number(e.target.value))},onBlur:function(){t<18?r(18):t>100&&r(100)},"data-testid":"age-input",inputProps:{step:1,min:18,max:100,type:"number","aria-labelledby":"input-slider"}}))))},m=function(e){var t=e.height,r=e.setHeight;return o.createElement(o.Fragment,null,o.createElement(l.Z,{id:"input-slider",gutterBottom:!0},"I am ",t," inches tall"),o.createElement(i.ZP,{container:!0,spacing:2,alignItems:"center"},o.createElement(i.ZP,{item:!0,xs:!0},o.createElement(c.ZP,{value:"number"==typeof t?t:0,onChange:function(e,t){var a=Array.isArray(t)?t[0]:t;r(a)},"aria-labelledby":"height-input-slider","data-testid":"height-slider",min:54,max:84,color:"secondary"})),o.createElement(i.ZP,{item:!0},o.createElement(u.Z,{value:t,size:"small",onChange:function(e){r(""===e.target.value?"":Number(e.target.value))},onBlur:function(){t<54?r(54):t>84&&r(84)},"data-testid":"height-input",inputProps:{step:1,min:54,max:84,type:"number","aria-labelledby":"input-slider"}}))))},h=function(e){var t=e.weight,r=e.setWeight;return o.createElement(o.Fragment,null,o.createElement(l.Z,{id:"input-slider",gutterBottom:!0},"I weigh ",t," pounds"),o.createElement(i.ZP,{container:!0,spacing:2,alignItems:"center"},o.createElement(i.ZP,{item:!0,xs:!0},o.createElement(c.ZP,{value:"number"==typeof t?t:0,onChange:function(e,t){var a=Array.isArray(t)?t[0]:t;r(a)},"data-testid":"weight-slider",min:70,max:400,"aria-labelledby":"weight-input-slider",color:"secondary"})),o.createElement(i.ZP,{item:!0},o.createElement(u.Z,{value:t,size:"small",onChange:function(e){r(""===e.target.value?"":Number(e.target.value))},onBlur:function(){t<70?r(70):t>400&&r(400)},"data-testid":"weight-input",inputProps:{step:1,min:70,max:400,type:"number","aria-labelledby":"input-slider"}}))))},d=function(e){var t=e.handleGenderChange,r=e.gender,l=e.activityLevel,i=e.handleActivityLevelChange,c=e.age,u=e.setAge,d=e.height,f=e.setHeight,g=e.weight,p=e.setWeight,v=e.goal,y=e.handleGoalChange;return o.createElement(o.Fragment,null,o.createElement(a.Z,{color:"primary",fullWidth:!0,value:v,exclusive:!0,onChange:y},o.createElement(n.Z,{value:"weight_loss"},"Weight loss"),o.createElement(n.Z,{value:"maintain"},"Maintain"),o.createElement(n.Z,{value:"gain_muscle"},"Gain muscle")),o.createElement(a.Z,{color:"primary",fullWidth:!0,value:l,exclusive:!0,onChange:i},o.createElement(n.Z,{value:1},"Sedentary(no exercise)"),o.createElement(n.Z,{value:1.25},"Moderate (2x - 4x per week)"),o.createElement(n.Z,{value:1.5},"Active (5x+ per week)")),o.createElement(a.Z,{color:"primary",fullWidth:!0,value:r,exclusive:!0,onChange:t},o.createElement(n.Z,{value:"male"},"Male"),o.createElement(n.Z,{value:"female"},"Female"),o.createElement(n.Z,{value:"other"},"Non-binary")),o.createElement(s,{age:c,setAge:u}),o.createElement(m,{height:d,setHeight:f}),o.createElement(h,{weight:g,setWeight:p}))}},9561:(e,t,r)=>{r.d(t,{H:()=>o});var a=r(2949),n=r(7294),o=function(e){var t=e.showTextFieldError,r=e.handleCreateAccountChange,o=e.errorMessage;return n.createElement(a.Z,{required:!0,"data-testid":"confirm-password-textfield",error:t,label:"Confirm Password",placeholder:"Confirm Password",onChange:r,type:"password",name:"confirmedPassword",variant:"filled",fullWidth:!0,helperText:t?o:"Enter your password"})}},4143:(e,t,r)=>{r.d(t,{a:()=>o});var a=r(2949),n=r(7294),o=function(e){var t=e.handleCreateAccountChange;return n.createElement(a.Z,{required:!0,onChange:t,"data-testid":"email-textfield",label:"Email",placeholder:"Email",type:"email",name:"email",variant:"filled",fullWidth:!0,helperText:"Enter your email"})}},4726:(e,t,r)=>{r.d(t,{T:()=>o});var a=r(2949),n=r(7294),o=function(e){var t=e.showTextFieldError,r=e.errorMessage,o=e.showSignup,l=e.handleCreateAccountChange,i=e.handleLoginChange;return n.createElement(a.Z,{required:!0,error:t,onChange:o?l:i,label:"Password",placeholder:"Password",type:"password",name:"password",variant:"filled",fullWidth:!0,helperText:t?r:"Enter your password"})}},8044:(e,t,r)=>{r.d(t,{T:()=>w});var a=r(5722),n=r(9144),o=r(1647),l=r(5305),i=r(9620),c=r(7745),u=r(4498),s=r(8720),m=r(2962),h=r(9669),d=r.n(h),f=r(7294),g=r(947),p=r(7229),v=r(783),y=function(e,t,r,a){return new(r||(r=Promise))((function(n,o){function l(e){try{c(a.next(e))}catch(e){o(e)}}function i(e){try{c(a.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,i)}c((a=a.apply(e,t||[])).next())}))},E=function(e,t){var r,a,n,o,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,a=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(n=l.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){l.label=o[1];break}if(6===o[0]&&l.label<n[1]){l.label=n[1],n=o;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(o);break}n[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},w=function(e){var t=e.setOpenErrorAlert,r=e.setErrorMessage,h=e.setShowNextPage,w=e.setShowSignup,b=e.setAlertSeverity,x=e.showNextPage,Z=e.page,S=e.setGoals,C=f.useState(1),M=C[0],A=C[1],P=f.useState("male"),T=P[0],N=P[1],k=f.useState("weight_loss"),F=k[0],W=k[1],L=f.useState(18),_=L[0],O=L[1],G=f.useState(60),j=G[0],I=G[1],D=f.useState(200),H=D[0],B=D[1],R=void 0!==x&&x;return f.createElement("div",{className:"macro-calculator-container"},f.createElement(a.Z,{onSubmit:function(e){return y(void 0,void 0,void 0,(function(){var a,n;return E(this,(function(o){switch(o.label){case 0:e.preventDefault(),a=(0,p.L)({gender:T,age:_,height:j,weight:H,activityLevel:M,goal:F}),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,d().post("/api/goals",a)];case 2:return o.sent(),"macrocalculator"===Z&&void 0!==S?(S(a),r("You have updated your macronutrient needs.")):r("You have successfully created an account. Please login."),b("success"),t(!0),h(!1),w(!1),[3,4];case 3:return n=o.sent(),console.log("err:",n),[3,4];case 4:return[2]}}))}))},component:"form",className:"macro-calculator-form","data-testid":"macro-calculator-signup-form",elevation:2},void 0!==Z&&"macrocalculator"===Z?f.createElement(f.Fragment,null,f.createElement(n.Z,{direction:"row",sx:{gap:"1em"}},f.createElement(g.vav,{className:"macro-calculator-icon"}),f.createElement(o.Z,{align:"center",variant:"h6"},"Calculate your Macronutrient Recommendations")),f.createElement(o.Z,{variant:"subtitle1"},"Fill out the form below to calculate your recommended nutrient needs")):f.createElement(f.Fragment,null,f.createElement(o.Z,{variant:"h6"},"Complete setting up your account"),f.createElement(o.Z,{variant:"subtitle1"},"Fill out the form below so we can calculate your recommended nutrient needs")),f.createElement(v.y,{handleGenderChange:function(e,t){N(t)},gender:T,activityLevel:M,handleActivityLevelChange:function(e,t){A(t)},age:_,setAge:O,height:j,setHeight:I,weight:H,setWeight:B,goal:F,handleGoalChange:function(e,t){W(t)}}),void 0!==Z&&"macrocalculator"===Z?f.createElement(l.Z,{fullWidth:!0,"data-testid":"recalculate-btn",onClick:function(){return h(!0)},variant:"contained"},"Calculate"):f.createElement(l.Z,{fullWidth:!0,type:"submit",variant:"contained"},"Complete creating account"),void 0!==Z&&"macrocalculator"===Z?f.createElement(i.Z,{open:R},f.createElement(c.Z,null,"Are you sure you want to update your currentGoals? This will overwrite any of your current settings."),f.createElement("form",null,f.createElement(u.Z,null,f.createElement(s.Z,{display:"flex",flexDirection:"column",gap:"10px"})),f.createElement(m.Z,null,f.createElement(l.Z,{variant:"contained","aria-label":"submit form to recalculate macronutrients",type:"submit"},"Confirm"),f.createElement(l.Z,{color:"error",variant:"contained",onClick:function(){return h(!1)}},"Cancel")))):null))}},5370:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var a=r(7294),n=r(8339),o=r(9535),l=r(5722),i=r(1647),c=r(5305),u=r(9144),s=r(9669),m=r.n(s),h=r(9250),d=r(4726),f=r(2949),g=function(e){var t=e.showSignup,r=e.handleCreateAccountChange,n=e.handleLoginChange;return a.createElement(f.Z,{inputProps:{"data-testid":"username-textfield"},required:!0,onChange:t?r:n,label:t?"Username":"Email",type:"text",variant:"filled",name:"username",placeholder:t?"Username":"Email",fullWidth:!0,id:"username",helperText:t?"Enter your username":"Enter your email"})},p=r(1566);const v=r.p+"aff557eece24fd0164aa.svg";var y=function(){return y=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},y.apply(this,arguments)},E=function(e,t,r,a){return new(r||(r=Promise))((function(n,o){function l(e){try{c(a.next(e))}catch(e){o(e)}}function i(e){try{c(a.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,i)}c((a=a.apply(e,t||[])).next())}))},w=function(e,t){var r,a,n,o,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,a=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(n=l.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){l.label=o[1];break}if(6===o[0]&&l.label<n[1]){l.label=n[1],n=o;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(o);break}n[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},b=function(e){var t=e.showSignup,r=e.setAlertSeverity,n=e.handleRedirectToSignup,s=e.showTextFieldError,f=e.setShowTextFieldError,b=e.errorMessage,x=e.setErrorMessage,Z=e.handleErrorAlert,S=(0,h.s0)(),C=(0,p.a)().setIsLoggedIn,M=(0,a.useState)({username:"",password:""}),A=M[0],P=M[1],T=function(e){var t,r;r="username"===e.target.name?e.target.value.toLowerCase():e.target.value,P(y(y({},A),((t={})[e.target.name]=r,t)))};return a.createElement(a.Fragment,null,a.createElement("div",{className:"login-form"},a.createElement("img",{src:v}),a.createElement("div",{className:"login-form-card"},a.createElement(l.Z,{component:"form",elevation:2,onSubmit:function(e){return E(void 0,void 0,void 0,(function(){return w(this,(function(t){switch(t.label){case 0:e.preventDefault(),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,m().post("/api/login",A,{withCredentials:!0})];case 2:return 201===t.sent().status&&(C(!0),f(!1),S("/home",{replace:!0})),[3,4];case 3:return t.sent(),r("error"),x("No matching username and password found."),f(!0),Z(),[3,4];case 4:return[2]}}))}))},className:"login-form-input"},a.createElement(i.Z,{variant:"h6"},"Log in"),a.createElement(c.Z,{variant:"contained",fullWidth:!0,component:"a",color:"error",href:"/api/login/federated/google"},a.createElement(o.Z,null),a.createElement(i.Z,{variant:"button",align:"right",sx:{marginLeft:"10px"}},"Sign in with Google")),a.createElement(i.Z,{variant:"h6"},"or"),a.createElement(g,{showSignup:t,handleLoginChange:T}),a.createElement(d.T,{showTextFieldError:s,showSignup:t,errorMessage:b,handleLoginChange:T}),a.createElement(u.Z,{alignItems:"flex-end",sx:{width:"100%"}},a.createElement(i.Z,{align:"center",className:"login-form-text",sx:{"&:hover":{cursor:"pointer"}},onClick:function(){S("/account-recovery")},variant:"caption"},"Forgot password?")),a.createElement(c.Z,{"data-testid":"login-btn",type:"submit",fullWidth:!0,variant:"contained"},"Log In"),a.createElement(u.Z,{direction:"row"},a.createElement(i.Z,{className:"login-form-account-text",variant:"caption"},"Don't have an account yet?"," "),a.createElement(c.Z,{variant:"text",onClick:n},a.createElement(i.Z,{align:"center","data-testid":"create-account-btn",className:"login-form-text",variant:"caption",color:"textPrimary",sx:{textDecoration:"underline"}},"Create Account")))))))},x=r(9561),Z=r(4143),S=r(8044),C=function(){return C=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},C.apply(this,arguments)},M=function(e,t,r,a){return new(r||(r=Promise))((function(n,o){function l(e){try{c(a.next(e))}catch(e){o(e)}}function i(e){try{c(a.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,i)}c((a=a.apply(e,t||[])).next())}))},A=function(e,t){var r,a,n,o,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,a=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(n=l.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){l.label=o[1];break}if(6===o[0]&&l.label<n[1]){l.label=n[1],n=o;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(o);break}n[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},P=function(e){var t=e.showSignup,r=e.setShowSignup,n=e.handleRedirectToSignup,u=e.showTextFieldError,s=e.setShowTextFieldError,h=e.errorMessage,f=e.setErrorMessage,p=e.setOpenErrorAlert,v=e.setAlertSeverity,y=(0,a.useState)(!1),E=y[0],w=y[1],b=(0,a.useState)({username:"",email:"",password:"",confirmedPassword:""}),P=b[0],T=b[1],N=function(e){var t,r;r="username"===e.target.name||"email"===e.target.name?e.target.value.toLowerCase():e.target.value,T(C(C({},P),((t={})[e.target.name]=r,t)))};(0,a.useEffect)((function(){s(!1)}),[]);return a.createElement("div",{className:"signup"},E?a.createElement(S.T,{setOpenErrorAlert:p,setErrorMessage:f,setShowNextPage:w,setShowSignup:r,setAlertSeverity:v}):a.createElement(l.Z,{onSubmit:function(e){return M(void 0,void 0,void 0,(function(){var t;return A(this,(function(r){switch(r.label){case 0:return e.preventDefault(),P.password===P.confirmedPassword?[3,1]:(f("Your passwords do not match"),p(!0),s(!0),[3,4]);case 1:return r.trys.push([1,3,,4]),[4,m().post("/api/signup",P)];case 2:return r.sent(),v("success"),f("Your account has been created! Now enter your metrics to get customized macronutrient recommendations."),p(!0),w(!0),[3,4];case 3:return t=r.sent(),console.log("err:",t),v("error"),f("An account with that username or email already exists. Try logging in instead."),p(!0),[3,4];case 4:return[2]}}))}))},component:"form",className:"signup-form","data-testid":"signup-form"},a.createElement(i.Z,{variant:"h6"},"Create an account"),a.createElement(c.Z,{variant:"contained",fullWidth:!0,component:"a",color:"error",href:"/api/login/federated/google"},a.createElement(o.Z,null),a.createElement(i.Z,{variant:"button",align:"right",sx:{marginLeft:"10px"}},"Sign in with Google")),a.createElement(i.Z,{variant:"h6"},"or"),a.createElement(i.Z,{variant:"subtitle1"},"Please enter your details"),a.createElement(g,{showSignup:t,handleCreateAccountChange:N}),a.createElement(Z.a,{handleCreateAccountChange:N}),a.createElement(d.T,{showTextFieldError:u,showSignup:t,handleCreateAccountChange:N,errorMessage:h}),a.createElement(x.H,{errorMessage:h,showTextFieldError:u,handleCreateAccountChange:N}),a.createElement(c.Z,{"data-testid":"initial-signup-form-btn",type:"submit",fullWidth:!0,variant:"contained"},"Almost done"),a.createElement(c.Z,{variant:"text",onClick:n},a.createElement(i.Z,{align:"center",className:"signup-form-text",variant:"caption"},"Go back"))))},T=r(1275);const N=function(){var e=(0,a.useState)(!1),t=e[0],r=e[1],o=(0,a.useState)("success"),l=o[0],i=o[1],c=(0,a.useState)(!1),u=c[0],s=c[1],m=(0,a.useState)(!1),d=m[0],f=m[1],g=(0,a.useState)(""),p=g[0],v=g[1],y=function(){f(!d)},E=function(){r(!t)},w=(0,h.TH)();return(0,a.useEffect)((function(){w.state&&w.state.resetPassword?(i("success"),v("Your password has been reset"),f(!0),window.history.replaceState({},document.title)):w.state&&w.state.sentRecoveryEmail&&(i("success"),v("A link to reset your password has been successfully sent to your email address"),f(!0),window.history.replaceState({},document.title))}),[]),a.createElement(a.Fragment,null,t?a.createElement(P,{showSignup:t,setShowSignup:r,setAlertSeverity:i,handleRedirectToSignup:E,showTextFieldError:u,setShowTextFieldError:s,errorMessage:p,setErrorMessage:v,setOpenErrorAlert:f}):a.createElement(b,{showSignup:t,setAlertSeverity:i,handleRedirectToSignup:E,showTextFieldError:u,setShowTextFieldError:s,errorMessage:p,setErrorMessage:v,handleErrorAlert:y}),a.createElement(T.I,{openAlert:d,handleAlert:y,alertSeverity:l,alertMessage:p}),a.createElement(n.$,null))}},7229:(e,t,r)=>{r.d(t,{L:()=>a});var a=function(e){var t,r,a,n=e.age,o=e.weight,l=e.gender,i=e.height,c=e.activityLevel,u=e.goal,s=Number(o)/2.2,m=2.54*Number(i),h=m/100,d=s/(h*h),f="female"===l?-161:5,g=10*s+6.25*m-5*Number(n)+f;a="female"===l?i<60?Math.floor(105-5*(60-Number(i))):Math.floor(105+5*(Number(i)-60)):i<60?Math.floor(106-6*(60-Number(i))):Math.floor(106+6*(Number(i)-60));var p=Math.floor(.25*(Number(o)-a)+a),v=Math.floor(a/2.2),y=Math.floor(p/2.2);d>=30?"weight_loss"===u?(t=Math.floor(g*c)-250,r=Math.floor(1.8*y)):"gain_muscle"===u?(t=Math.floor(g*c)+250,r=Math.floor(1.8*y)):(t=Math.floor(g*c),r=Math.floor(1.2*y)):d<30&&d>=25?"weight_loss"===u?(t=Math.floor(22*v),r=Math.floor(1.8*v)):"gain_muscle"===u?(t=Math.floor(32*v),r=Math.floor(1.8*v)):(t=Math.floor(28*v),r=Math.floor(1.2*v)):"weight_loss"===u?(t=Math.floor(22*s),r=Math.floor(1.8*s)):"gain_muscle"===u?(t=Math.floor(32*s),r=Math.floor(1.8*s)):(t=Math.floor(28*s),r=Math.floor(1.2*s));var E=Math.floor(.5*t/4);return{total_calories:t,total_carbohydrates:E,total_fat:Math.floor((t-(4*r+4*E))/9),total_protein:r,goal:u}}}}]);