"use strict";(self.webpackChunkthe_diabetes_calculator=self.webpackChunkthe_diabetes_calculator||[]).push([[942],{799:(e,t,a)=>{a.d(t,{y:()=>d});var n=a(7294),r=a(5723),l=a(3382),i=a(2658),c=a(5725),m=a(7138),u=a(3981),s=function(e){var t=e.age,a=e.setAge;return n.createElement(n.Fragment,null,n.createElement(i.Z,{id:"input-slider",gutterBottom:!0},"I am ",t," years young"),n.createElement(c.ZP,{container:!0,spacing:2,alignItems:"center"},n.createElement(c.ZP,{item:!0,xs:!0},n.createElement(m.ZP,{value:"number"==typeof t?t:0,onChange:function(e,t){a(t)},"data-testid":"age-slider","aria-labelledby":"input-slider",min:18,max:100,color:"secondary"})),n.createElement(c.ZP,{item:!0},n.createElement(u.Z,{value:t,size:"small",required:!0,onChange:function(e){a(""===e.target.value?"":Number(e.target.value))},onBlur:function(){t<18?a(18):t>100&&a(100)},"data-testid":"age-input",inputProps:{step:1,min:18,max:100,type:"number","aria-labelledby":"input-slider"}}))))},o=function(e){var t=e.height,a=e.setHeight;return n.createElement(n.Fragment,null,n.createElement(i.Z,{id:"input-slider",gutterBottom:!0},"I am ",t," inches tall"),n.createElement(c.ZP,{container:!0,spacing:2,alignItems:"center"},n.createElement(c.ZP,{item:!0,xs:!0},n.createElement(m.ZP,{value:"number"==typeof t?t:0,onChange:function(e,t){a(t)},"aria-labelledby":"height-input-slider","data-testid":"height-slider",min:54,max:84,color:"secondary"})),n.createElement(c.ZP,{item:!0},n.createElement(u.Z,{value:t,size:"small",onChange:function(e){a(""===e.target.value?"":Number(e.target.value))},onBlur:function(){t<54?a(54):t>84&&a(84)},"data-testid":"height-input",inputProps:{step:1,min:54,max:84,type:"number","aria-labelledby":"input-slider"}}))))},g=function(e){var t=e.weight,a=e.setWeight;return n.createElement(n.Fragment,null,n.createElement(i.Z,{id:"input-slider",gutterBottom:!0},"I weigh ",t," pounds"),n.createElement(c.ZP,{container:!0,spacing:2,alignItems:"center"},n.createElement(c.ZP,{item:!0,xs:!0},n.createElement(m.ZP,{value:"number"==typeof t?t:0,onChange:function(e,t){a(t)},"data-testid":"weight-slider",min:70,max:400,"aria-labelledby":"weight-input-slider",color:"secondary"})),n.createElement(c.ZP,{item:!0},n.createElement(u.Z,{value:t,size:"small",onChange:function(e){a(""===e.target.value?"":Number(e.target.value))},onBlur:function(){t<70?a(70):t>400&&a(400)},"data-testid":"weight-input",inputProps:{step:1,min:70,max:400,type:"number","aria-labelledby":"input-slider"}}))))},d=function(e){var t=e.handleGenderChange,a=e.gender,i=e.activityLevel,c=e.handleActivityLevelChange,m=e.age,u=e.setAge,d=e.height,h=e.setHeight,p=e.weight,v=e.setWeight;return n.createElement(n.Fragment,null,n.createElement(r.Z,{color:"primary",fullWidth:!0,value:a,exclusive:!0,onChange:t},n.createElement(l.Z,{value:"male"},"Male"),n.createElement(l.Z,{value:"female"},"Female"),n.createElement(l.Z,{value:"other"},"Other")),n.createElement(r.Z,{color:"primary",fullWidth:!0,value:i,exclusive:!0,onChange:c},n.createElement(l.Z,{value:1},"Sedentary(no exercise)"),n.createElement(l.Z,{value:1.25},"Moderate (2x - 4x per week)"),n.createElement(l.Z,{value:1.5},"Active (5x+ per week)")),n.createElement(s,{age:m,setAge:u}),n.createElement(o,{height:d,setHeight:h}),n.createElement(g,{weight:p,setWeight:v}))}},9100:(e,t,a)=>{a.d(t,{C:()=>r});var n=a(6974),r=function(){return(0,n.bx)()}},2942:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var n=a(7294),r=a(799),l=a(6447),i=a(2658),c=a(6501),m=a(6914),u=a(9100);const s=function(){var e=(0,u.C)(),t=e.setGender,a=e.gender,s=e.age,o=e.setAge,g=e.height,d=e.setHeight,h=e.weight,p=e.setWeight,v=e.activityLevel,E=e.setActivityLevel,y=e.handleSubmit;return n.createElement(n.Fragment,null,n.createElement(l.Z,{direction:"column",alignItems:"center",justifyContent:"center",sx:{pt:"2rem",pb:"2rem",pl:{xs:0,sm:"1rem"},pr:{xs:0,sm:"1rem"}},spacing:2},n.createElement(i.Z,{variant:"h2"},"MacroCalculator"),n.createElement(c.Z,{elevation:1,className:"calculator-page",component:"form",onSubmit:y},n.createElement(i.Z,{variant:"body1"},"Enter your personal metrics below to determine your recommended calorie and macronutrient ranges"),n.createElement(r.y,{handleGenderChange:function(e,a){t(a)},gender:a,activityLevel:v,handleActivityLevelChange:function(e,t){E(t)},age:s,setAge:o,height:g,setHeight:d,weight:h,setWeight:p}),n.createElement(m.Z,{fullWidth:!0,type:"submit",variant:"contained"},"Calculate"))))}}}]);