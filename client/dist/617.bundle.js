"use strict";(self.webpackChunkthe_diabetes_calculator=self.webpackChunkthe_diabetes_calculator||[]).push([[617,566],{9125:(e,t,n)=>{n.d(t,{Z:()=>M});var a=n(7294),r=n(326),l=n(3720),o=n(4386),i=n(1508),c=n(2658),u=n(6867),s=n(4125),m=n(6447),h=n(1079),p=n(6914),f=n(4563),d=n(7109),g=n(4347),v=n(6974),E=n(9669),b=n.n(E),y=n(1566);const Z=n.p+"99cd361417a5bcd8d2d7.svg";var x=n(7859),w=n(2734),C=n(9879),_=n(7289),k=function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function o(e){try{c(a.next(e))}catch(e){l(e)}}function i(e){try{c(a.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}c((a=a.apply(e,t||[])).next())}))},S=function(e,t){var n,a,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&l[0]?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;switch(a=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},P=["Search","Macro Calculator","Meal Plan"];const M=function(e){var t=e.isSettingsPage,n=(0,v.TH)(),E=(0,w.Z)(),M=(0,a.useContext)(x.k),L=(0,v.s0)(),A=(0,y.useAuth)(),I=(A.isLoading,A.isLoggedIn),z=A.username;console.log("username: ",z);var F=(0,a.useState)(!1),O=(F[0],F[1],a.useState(null)),B=O[0],G=O[1],N=a.useState(null),T=N[0],W=N[1],D=function(){G(null)},H=function(){return k(void 0,void 0,void 0,(function(){var e;return S(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,b().post("/api/logout")];case 1:return t.sent(),L("/",{state:{loggedOut:!0},replace:!0}),[3,3];case 2:return e=t.sent(),console.log("err:",e),[3,3];case 3:return[2]}}))}))};return a.createElement(l.Z,{position:"fixed",sx:{zIndex:function(e){return e.zIndex.drawer+1},boxShadow:"none",padding:"0 1vw"},color:"default",enableColorOnDark:!0},a.createElement(o.Z,{disableGutters:!0},a.createElement(i.Z,{component:"img",src:Z,alt:"Logo",sx:{display:{md:"flex"},mr:1,objectFit:"contain",height:"2.5rem","&:hover":{cursor:"pointer"}},onClick:H}),a.createElement(c.Z,{variant:"h6",noWrap:!0,"data-testid":"navlink",onClick:H,sx:{mr:2,display:{xs:"none",md:"flex"},fontWeight:700,letterSpacing:".3rem",color:"inherit",textDecoration:"none",flexGrow:1,"&:hover":{cursor:"pointer"}}},"DiabetesCalculator"),!0===I?a.createElement(a.Fragment,null,a.createElement(i.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},a.createElement(u.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){G(e.currentTarget)},color:"inherit"},a.createElement(r.Z,null)),a.createElement(s.Z,{id:"menu-appbar",anchorEl:B,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(B),onClose:D,sx:{display:{xs:"block",md:"none"}}},a.createElement(m.Z,{direction:"column",sx:{padding:"0.5rem"}},P.map((function(e){return e.toLowerCase().replace(" ","")===n.pathname.slice(1)?a.createElement(h.Z,{onClick:D,key:e,underline:"hover",variant:"overline",href:"/".concat(e.toLowerCase().replace(/ /g,""))},e):a.createElement(h.Z,{onClick:D,key:e,underline:"hover",variant:"overline",color:"secondary",href:"/".concat(e.toLowerCase().replace(/ /g,""))},e)}))))),a.createElement(i.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"},gap:2}},void 0!==t&&!0===t?a.createElement(p.Z,{variant:"text",onClick:function(){return history.back()}},"Go Back"):P.map((function(e){return e.toLowerCase().replace(" ","")===n.pathname.slice(1)?a.createElement(h.Z,{key:e,underline:"hover",variant:"overline",href:"/".concat(e.toLowerCase().replace(/ /g,""))},e):a.createElement(h.Z,{key:e,underline:"hover",variant:"overline",color:"secondary",href:"/".concat(e.toLowerCase().replace(/ /g,""))},e)}))),a.createElement(i.Z,{sx:{flexGrow:0}},a.createElement(f.Z,{title:"Open settings"},a.createElement(u.Z,{onClick:function(e){W(e.currentTarget)},sx:{p:0},"data-testid":"avatar"},a.createElement(d.Z,{alt:"Remy Sharp"}))),a.createElement(s.Z,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:T,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(T),onClose:function(){W(null)}},a.createElement(g.Z,{onClick:function(){W(null),L("/settings")}},a.createElement(c.Z,{textAlign:"center"},"User Profile")),a.createElement(g.Z,{onClick:H,"data-testid":"logout-btn"},a.createElement(c.Z,{textAlign:"center"},"Logout"))))):a.createElement(h.Z,{href:"/login",underline:"hover","data-testid":"home-page",className:"navbar-login",variant:"overline",sx:{fontWeight:"bold",marginLeft:"auto"}},a.createElement(c.Z,{variant:"overline"},"Log in")),a.createElement(u.Z,{sx:{ml:1},onClick:M.toggleColorMode,color:"inherit","aria-label":"Toggle color theme"},"dark"===E.palette.mode?a.createElement(_.Z,null):a.createElement(C.Z,null))))}},3696:(e,t,n)=>{n.d(t,{I:()=>o});var a=n(7294),r=n(9986),l=n(6186),o=function(e){var t=e.openAlert,n=e.handleAlert,o=e.alertSeverity,i=e.alertMessage;return a.createElement(r.Z,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:t,autoHideDuration:8e3,onClose:n},a.createElement(l.Z,{onClose:n,severity:o,sx:{width:"100%"}},i))}},2028:(e,t,n)=>{n.d(t,{C:()=>S});var a=n(7294),r=n(9669),l=n.n(r),o=n(6501),i=n(6447),c=n(2658),u=n(5723),s=n(3382),m=n(6914),h=n(4666),p=n(7645),f=n(7750),d=n(1508),g=n(8979),v=n(5725),E=n(7138),b=n(3981),y=function(e){var t=e.height,n=e.setHeight;return a.createElement(a.Fragment,null,a.createElement(c.Z,{id:"input-slider",gutterBottom:!0},"I am ",t," inches tall"),a.createElement(v.ZP,{container:!0,spacing:2,alignItems:"center"},a.createElement(v.ZP,{item:!0,xs:!0},a.createElement(E.ZP,{value:"number"==typeof t?t:0,onChange:function(e,t){n(t)},"aria-labelledby":"height-input-slider",min:54,max:84})),a.createElement(v.ZP,{item:!0},a.createElement(b.Z,{value:t,size:"small",onChange:function(e){n(""===e.target.value?"":Number(e.target.value))},onBlur:function(){t<54?n(54):t>84&&n(84)},"data-testid":"height-input",inputProps:{step:1,min:54,max:84,type:"number","aria-labelledby":"input-slider"}}))))},Z=function(e){var t=e.weight,n=e.setWeight;return a.createElement(a.Fragment,null,a.createElement(c.Z,{id:"input-slider",gutterBottom:!0},"I weigh ",t," pounds"),a.createElement(v.ZP,{container:!0,spacing:2,alignItems:"center"},a.createElement(v.ZP,{item:!0,xs:!0},a.createElement(E.ZP,{value:"number"==typeof t?t:0,onChange:function(e,t){n(t)},min:70,max:400,"aria-labelledby":"weight-input-slider"})),a.createElement(v.ZP,{item:!0},a.createElement(b.Z,{value:t,size:"small",onChange:function(e){n(""===e.target.value?"":Number(e.target.value))},onBlur:function(){t<70?n(70):t>400&&n(400)},"data-testid":"weight-input",inputProps:{step:1,min:70,max:400,type:"number","aria-labelledby":"input-slider"}}))))},x=function(e){var t=e.age,n=e.setAge;return a.createElement(a.Fragment,null,a.createElement(c.Z,{id:"input-slider",gutterBottom:!0},"I am ",t," years young"),a.createElement(v.ZP,{container:!0,spacing:2,alignItems:"center"},a.createElement(v.ZP,{item:!0,xs:!0},a.createElement(E.ZP,{value:"number"==typeof t?t:0,onChange:function(e,t){n(t)},"aria-labelledby":"input-slider",min:18,max:100})),a.createElement(v.ZP,{item:!0},a.createElement(b.Z,{value:t,size:"small",required:!0,onChange:function(e){n(""===e.target.value?"":Number(e.target.value))},onBlur:function(){t<18?n(18):t>100&&n(100)},"data-testid":"age-input",inputProps:{step:1,min:18,max:100,type:"number","aria-labelledby":"input-slider"}}))))},w=n(6974),C=n(3750),_=function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function o(e){try{c(a.next(e))}catch(e){l(e)}}function i(e){try{c(a.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}c((a=a.apply(e,t||[])).next())}))},k=function(e,t){var n,a,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&l[0]?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;switch(a=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},S=function(e){var t=e.setOpenErrorAlert,n=e.setErrorMessage,r=e.setShowNextPage,v=e.setShowSignup,E=e.setAlertSeverity,b=e.showNextPage,S=e.page,P=((0,w.s0)(),a.useState(1)),M=P[0],L=P[1],A=a.useState("male"),I=A[0],z=A[1],F=a.useState(18),O=F[0],B=F[1],G=a.useState(60),N=G[0],T=G[1],W=a.useState(200),D=W[0],H=W[1];return a.createElement("div",{className:"macro-calculator-container"},a.createElement(o.Z,{onSubmit:function(e){return _(void 0,void 0,void 0,(function(){var a,o;return k(this,(function(i){switch(i.label){case 0:e.preventDefault(),a=function(e){var t=e.age,n=e.weight,a=e.gender,r=e.height,l=e.activityLevel,o=n/2.2,i=10*o+6.25*Math.floor(2.54*r)-5*t+("female"===a?-161:5),c={};c.total_calories=Math.floor(i*l),c.min_calories_per_meal=Math.floor(c.total_calories/3-150),c.max_calories_per_meal=Math.floor(c.total_calories/3+150),c.total_carbohydrates=Math.floor(.45*i/4),c.min_carbs_per_meal=Math.floor(c.total_carbohydrates/3-5),c.max_carbs_per_meal=Math.floor(c.total_carbohydrates/3+5),c.total_protein=Math.floor(o),c.min_protein_per_meal=Math.floor(c.total_protein/3-10),c.max_protein_per_meal=Math.floor(c.total_protein/3+10);var u=c.total_calories-(4*c.total_carbohydrates+4*c.total_protein);return c.total_fat=Math.floor(u/9),c.min_fat_per_meal=Math.floor(c.total_fat/3-10),c.max_fat_per_meal=Math.floor(c.total_fat/3+10),c}({gender:I,age:O,height:N,weight:D,activityLevel:M}),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,l().post("/api/metrics",a)];case 2:return i.sent(),n("macrocalculator"===S?"You have updated your macronutrient needs. Go to search page to begin searching for recipes, menu items, or grocery products within this range.":"You have successfully created an account. Please login."),E("success"),t(!0),r(!1),v(!1),[3,4];case 3:return o=i.sent(),console.log("err:",o),[3,4];case 4:return[2]}}))}))},component:"form",className:"macro-calculator-form","data-testid":"macro-calculator-signup-form",elevation:2},void 0!==S&&"macrocalculator"===S?a.createElement(a.Fragment,null,a.createElement(i.Z,{direction:"row",sx:{gap:"1em"}},a.createElement(C.vav,{className:"macro-calculator-icon"}),a.createElement(c.Z,{align:"center",variant:"h6"},"Recalculate your Macronutrient Recommendations")),a.createElement(c.Z,{variant:"subtitle1"},"Fill out the form below to recalculate your recommended nutrient needs (note that all recommendations are made for individuals with Type 2 Diabetes).")):a.createElement(a.Fragment,null,a.createElement(c.Z,{variant:"h6"},"Complete setting up your account"),a.createElement(c.Z,{variant:"subtitle1"},"Fill out the form below so we can calculate your recommended nutrient needs (note that all recommendations are made for individuals with Type 2 Diabetes).")),a.createElement(u.Z,{color:"primary",fullWidth:!0,value:I,exclusive:!0,onChange:function(e,t){z(t)}},a.createElement(s.Z,{value:"male"},"Male"),a.createElement(s.Z,{value:"female"},"Female"),a.createElement(s.Z,{value:"other"},"Other")),a.createElement(u.Z,{color:"primary",fullWidth:!0,value:M,exclusive:!0,onChange:function(e,t){L(t)}},a.createElement(s.Z,{value:1},"Sedentary(no exercise)"),a.createElement(s.Z,{value:1.25},"Moderate (2x - 4x per week)"),a.createElement(s.Z,{value:1.5},"Active (5x+ per week)")),a.createElement(x,{age:O,setAge:B}),a.createElement(y,{height:N,setHeight:T}),a.createElement(Z,{weight:D,setWeight:H}),void 0!==S&&"macrocalculator"===S?a.createElement(m.Z,{fullWidth:!0,"data-testid":"recalculate-btn",onClick:function(){return r(!0)},variant:"contained"},"Recalculate"):a.createElement(m.Z,{fullWidth:!0,type:"submit",variant:"contained"},"Complete creating account"),void 0!==S&&"macrocalculator"===S?a.createElement(h.Z,{open:b},a.createElement(p.Z,null,"Are you sure you want to recalculate your macronutrient needs? This will overwrite your current settings."),a.createElement("form",null,a.createElement(f.Z,null,a.createElement(d.Z,{display:"flex",flexDirection:"column",gap:"10px"})),a.createElement(g.Z,null,a.createElement(m.Z,{variant:"contained","aria-label":"submit form to recalculate macronutrients",type:"submit"},"Confirm"),a.createElement(m.Z,{color:"error",variant:"contained",onClick:function(){return r(!1)}},"Cancel")))):null))}},1566:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u,useAuth:()=>c});var a=n(7294),r=n(9669),l=n.n(r),o=n(6974),i=(0,a.createContext)({isLoggedIn:!1,isLoading:!0,username:""}),c=function(){return(0,a.useContext)(i)};const u=function(e){var t=e.children,n=(0,o.s0)(),r=(0,a.useState)(!1),c=r[0],u=r[1],s=(0,a.useState)(!0),m=s[0],h=s[1],p=(0,a.useState)(""),f=p[0],d=p[1];return(0,a.useEffect)((function(){var e=l().get("/api/authentication");e.then((function(e){d(e.data),h(!1),u(!0),l().get("api/metrics").then((function(e){0===e.data.length&&n("/macrocalculator")})).catch((function(e){console.log(e)}))})),e.catch((function(e){h(!1),u(!1),n("/",{state:{showError:!1},replace:!0})}))}),[]),a.createElement(a.Fragment,null,a.createElement(i.Provider,{value:{isLoading:m,isLoggedIn:c,username:f}},t))}}}]);