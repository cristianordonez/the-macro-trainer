"use strict";(self.webpackChunkthe_macro_trainer=self.webpackChunkthe_macro_trainer||[]).push([[104],{2104:(e,t,n)=>{n.d(t,{B:()=>Q});var r=n(7600),l=n(6447),a=n(2658),o=n(7896),i=n(6501),c=n(9573),u=n(6011),s=n(8732),m=n(6914),d=n(7294),p=n(3725),g=n(4052),E=n(4666),f=n(7645),h=n(7750),v=n(1508),b=n(7720),_=n(8979),y=n(9669),Z=n.n(y),w=n(8779),S=n(8366),Y=n(4659),x=n(7610),z=n(7383),A=n(2856),k=n(5842),C=n(722),F=function(){return F=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},F.apply(this,arguments)},M=function(e){var t=e.setData,n=e.data,r=d.useState((0,S.Z)()),l=r[0],a=r[1],o=function(e){var r=e;a(e);var l=(0,C.format)(r,"yyy-MM-dd");t(F(F({},n),{date:l}))};return d.createElement(A._,{dateAdapter:x.Z},d.createElement(v.Z,{sx:{display:{xs:"block",sm:"none"},width:"100%"}},d.createElement(k.O,{label:"Select day",inputFormat:"MM/dd/yyyy",value:l,onChange:o,renderInput:function(e){return d.createElement(Y.Z,F({},e,{variant:"standard",fullWidth:!0}))}})),d.createElement(v.Z,{sx:{display:{xs:"none",sm:"block"},width:"100%"}},d.createElement(z.$,{label:"Select day",inputFormat:"MM/dd/yyyy","data-testid":"date-picker-textfield",value:l,onChange:o,renderInput:function(e){return d.createElement(Y.Z,F({},e,{variant:"standard",fullWidth:!0}))}})))},W=n(6446),D=n(7666),O=n(7920),N=n(1753),T=function(e){var t=e.handleSelectServingSize,n=e.currentServingSizes,r=e.servingSize,o=e.currentServingSizeUnit,i=e.currentModifier;return d.createElement(d.Fragment,null,d.createElement(b.Z,null),d.createElement(l.Z,{alignItems:"center",direction:"row",spacing:2,sx:{pl:"1rem",pr:"1rem"},justifyContent:"center"},d.createElement(a.Z,{sx:{minWidth:"25%"},variant:"body2"},"Serving Size"),d.createElement(W.Z,null,d.createElement(D.Z,null,"Enter serving size"),d.createElement(O.Z,{value:r+"",onChange:t,label:"Enter serving size",required:!0,fullWidth:!0,id:"unit"},n.map((function(e){return 100===e?d.createElement(N.Z,{key:e,value:e},e," ",o," (standardized serving size)"):d.createElement(N.Z,{key:e,value:e},e," ",o," ( ",i,")")}))))))},L=[{value:1,name:"Morning"},{value:2,name:"Afternoon"},{value:3,name:"Evening"},{value:4,name:"Snack"}],I=function(e){var t=e.slot,n=e.handleSelectSlot;return d.createElement(d.Fragment,null,d.createElement(b.Z,null),d.createElement(l.Z,{alignItems:"center",direction:"row",spacing:2,sx:{pl:"1rem",pr:"1rem",width:"100%"}},d.createElement(a.Z,{variant:"body2",sx:{minWidth:"25%"}},"Slot"),d.createElement(W.Z,{sx:{width:"100%"}},d.createElement(D.Z,null,"Enter Slot"),d.createElement(O.Z,{value:"".concat(t),onChange:n,label:"Enter Slot",required:!0,fullWidth:!0,id:"slot"},L.map((function(e){return d.createElement(N.Z,{key:e.value,value:e.value},e.name)}))))))},P=n(8878),j=function(){return j=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},j.apply(this,arguments)},B=function(e,t,n,r){return new(n||(n=Promise))((function(l,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function i(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}c((r=r.apply(e,t||[])).next())}))},U=function(e,t){var n,r,l,a,o={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(l=2&a[0]?r.return:a[0]?r.throw||((l=r.return)&&l.call(r),0):r.next)&&!(l=l.call(r,a[1])).done)return l;switch(r=0,l&&(a=[2&a[0],l.value]),a[0]){case 0:case 1:l=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(l=o.trys,(l=l.length>0&&l[l.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!l||a[1]>l[0]&&a[1]<l[3])){o.label=a[1];break}if(6===a[0]&&o.label<l[1]){o.label=l[1],l=a;break}if(l&&o.label<l[2]){o.label=l[2],o.ops.push(a);break}l[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=l=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},V=function(e){var t=e.openDialog,n=e.handleOpeningDialog,r=e.id,o=e.currentDataType,i=e.currentServingSizes,c=e.currentModifier,u=e.currentServingSizeUnit,s=e.currentDescription,p=e.currentBrand,g=e.setOpenDialog,y=e.setAlertMessage,Y=e.setOpenSnackbar,x=e.setAlertSeverity,z=(0,d.useState)({date:(0,w.Z)((0,S.Z)(),"yyyy-MM-dd"),slot:1,fdc_id:r,servings:"",data_type:o,serving_size:i[0],serving_size_unit:u,description:s,brand_owner:p}),A=z[0],k=z[1];(0,d.useEffect)((function(){k(j(j({},A),{fdc_id:r,servings:1,data_type:o,serving_size:i[0],serving_size_unit:u,slot:1,date:(0,w.Z)((0,S.Z)(),"yyyy-MM-dd"),description:s,brand_owner:p}))}),[r]);return d.createElement(E.Z,{open:t,onClose:function(){g(!1)}},d.createElement(f.Z,{align:"left"},"Add item to your food log"),d.createElement("form",{onSubmit:function(e){return B(void 0,void 0,void 0,(function(){var t;return U(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e.preventDefault(),[4,Z().post("/api/foodLog",A)];case 1:return n.sent(),x("success"),y("Item has been added to your food log!"),Y(!0),g(!1),[3,3];case 2:return t=n.sent(),console.log(t),[3,3];case 3:return[2]}}))}))}},d.createElement(h.Z,{sx:{p:0,width:"100%"}},d.createElement(v.Z,{display:"flex",flexDirection:"column",gap:"10px"},d.createElement(b.Z,null),d.createElement(l.Z,{spacing:2,direction:"row",alignItems:"center",sx:{pl:"1rem",pr:"1rem"}},d.createElement(a.Z,{sx:{minWidth:"25%"},variant:"body2"},"Date"," "),d.createElement(M,{setData:k,data:A})),d.createElement(I,{handleSelectSlot:function(e){k(j(j({},A),{slot:parseInt(e.target.value)}))},slot:A.slot}),d.createElement(T,{servingSize:A.serving_size,handleSelectServingSize:function(e){k(j(j({},A),{serving_size:parseInt(e.target.value)}))},currentServingSizes:i,currentServingSizeUnit:u,currentModifier:c}),d.createElement(b.Z,null),d.createElement(l.Z,{spacing:2,direction:"row",alignItems:"center",sx:{pl:"1rem",pr:"1rem"}},d.createElement(a.Z,{sx:{minWidth:"25%"},variant:"body2"},"Number of servings"),d.createElement(P.$,{inputValue:A.servings,handleNumberChange:function(e){k((function(t){return j(j({},t),{servings:e.target.value})}))},label:"Enter Number of Servings",id:"servings"})))),d.createElement(_.Z,null,d.createElement(m.Z,{variant:"contained","aria-label":"cancel",onClick:n,color:"error"},"Cancel"),d.createElement(m.Z,{"data-testid":"add-foodLog-btn","aria-label":"submit the form to add the item to your food log",type:"submit",variant:"contained",color:"success"},"Submit"))))},q=n(5503),$=n(813),H=n(8102),K=n(6867),R=n(2388),G=n(9699),J=function(e){var t=e.brand_owner,n=e.description,r=e.fdc_id,l=e.serving_size,a=e.serving_size_unit,o=e.data_type,i=e.nutrition,c=e.custom_food_brand_owner,u=e.custom_food_serving_size,s=e.custom_food_serving_size_unit,m=e.gram_weight,p=e.modifier,E=e.handleOpeningAddToFoodLogDialog,f=e.enableAddToFoodLogFeature,h=(0,d.useState)(!1),v=h[0],b=h[1],_="",y="",Z=0,w=[100],S="";"custom"===o&&null!==c?(_=c,y=s,Z=u,S="Custom input"):"branded_food"===o&&null!==t?(_=t,y=a,Z=l,S="1 serving as per nutrition label"):null!==t&&(_=t,y="g",Z=m,S=p);return d.createElement(d.Fragment,null,d.createElement(g.A,{"data-testid":"food-search-item",hover:!!f,onClick:function(e){100!==Z&&null!==Z&&w.push(Z),null===y&&(y="g"),E(parseInt(r),o,w,y,n,_,S)},sx:{"& > *":{borderBottom:"unset"},cursor:"pointer"}},d.createElement(H.Z,null,d.createElement(K.Z,{"aria-label":"expand row",size:"small",onClick:function(e){e.stopPropagation(),b(!v)}},v?d.createElement($.Z,null):d.createElement(q.Z,null))),d.createElement(H.Z,{component:"th",scope:"row"},(0,R.O)(_,n)),d.createElement(H.Z,{align:"right"},i.calories),d.createElement(H.Z,{className:"desktop-table-view",align:"right"},i.total_fat),d.createElement(H.Z,{className:"desktop-table-view",align:"right"},i.total_carbohydrates),d.createElement(H.Z,{className:"desktop-table-view",align:"right"},i.protein)),d.createElement(G.K,{open:v,nutrition:i}))},Q=function(e){var t=e.searchResults,n=e.handleLoadMore,E=e.setAlertMessage,f=e.setOpenSnackbar,h=e.setAlertSeverity,v=e.showLoadMoreBtn,b=e.enableAddToFoodLogFeature,_=(0,d.useState)(!1),y=_[0],Z=_[1],w=(0,d.useState)(0),S=w[0],Y=w[1],x=(0,d.useState)(""),z=x[0],A=x[1],k=(0,d.useState)(""),C=k[0],F=k[1],M=(0,d.useState)(),W=M[0],D=M[1],O=(0,d.useState)(""),N=O[0],T=O[1],L=(0,d.useState)(""),I=L[0],P=L[1],j=(0,d.useState)([100]),B=j[0],U=j[1],q=function(e,t,n,r,l,a,o){Y(e),T(t),U(n),P(r),A(l),F(a),D(o),Z(!y)};return d.createElement(d.Fragment,null,d.createElement("div",{className:"food-search-list"},d.createElement(l.Z,{direction:"row",spacing:{xs:.5,sm:1},sx:{width:"100%"}},d.createElement(r.Z,null),d.createElement(a.Z,{variant:"body1"},"Note: Nutrition Facts for results may differ from those seen on their nutrition label as they are standardized per 100 grams. This is to help better compare the nutrition of different foods to each other.")),d.createElement(a.Z,{variant:"h6",align:"left"},"Search Results"),d.createElement("div",{className:"food-search-main-container"},d.createElement(o.Z,{component:i.Z},d.createElement(c.Z,{stickyHeader:!0,"aria-label":"search results"},d.createElement(u.Z,null,d.createElement(g.A,null,d.createElement(p.Y,{variant:"head"}),d.createElement(p.Y,null,"Food (per 100g)"),d.createElement(p.Y,{align:"right"},"Calories"),d.createElement(p.Y,{align:"right",className:"desktop-table-view"},"Fat (g)"),d.createElement(p.Y,{align:"right",className:"desktop-table-view"},"Carbs (g)"),d.createElement(p.Y,{align:"right",className:"desktop-table-view"},"Protein (g)"))),d.createElement(s.Z,null,t.map((function(e,t){return d.createElement(J,{key:t,handleOpeningAddToFoodLogDialog:q,brand_owner:e.brand_owner,custom_food_brand_owner:e.custom_food_brand_owner,description:e.description,fdc_id:e.fdc_id,serving_size:e.serving_size,custom_food_serving_size:e.custom_food_serving_size,serving_size_unit:e.serving_size_unit,custom_food_serving_size_unit:e.custom_food_serving_size_unit,data_type:e.data_type,nutrition:e.nutrition,gram_weight:e.gram_weight,modifier:e.modifier,enableAddToFoodLogFeature:b})})))))),v?d.createElement(m.Z,{fullWidth:!0,onClick:n,variant:"text"},"Load More"):null),!0===b?d.createElement(V,{openDialog:y,handleOpeningDialog:function(){Z(!y)},id:S,currentDataType:N,currentServingSizes:B,currentServingSizeUnit:I,setOpenDialog:Z,currentDescription:z,setAlertMessage:E,setOpenSnackbar:f,setAlertSeverity:h,currentModifier:W,currentBrand:C}):null)}},8878:(e,t,n)=>{n.d(t,{$:()=>o});var r=n(6446),l=n(4659),a=n(7294),o=function(e){var t=e.inputValue,n=e.handleNumberChange,o=e.label,i=e.id;return a.createElement(r.Z,{sx:{width:"100%"}},a.createElement(l.Z,{value:t,required:!0,id:i,label:o,type:"number",inputProps:{step:"0.1",lang:"en-US"},onChange:n,fullWidth:!0}))}},9699:(e,t,n)=>{n.d(t,{K:()=>p});var r=n(8102),l=n(2981),a=n(1508),o=n(2658),i=n(9573),c=n(6011),u=n(8732),s=n(7294),m=n(3725),d=n(4052),p=function(e){var t=e.open,n=e.nutrition;return s.createElement(s.Fragment,null,s.createElement(d.A,null,s.createElement(r.Z,{style:{paddingBottom:0,paddingTop:0},colSpan:6},s.createElement(l.Z,{in:t,timeout:"auto",unmountOnExit:!0},s.createElement(a.Z,{sx:{margin:1}},s.createElement(s.Fragment,null,s.createElement(o.Z,{variant:"h6",gutterBottom:!0,component:"div"},"Nutrition Facts"),s.createElement(i.Z,{size:"small","aria-label":"additional nutrition data",stickyHeader:!0},s.createElement(c.Z,null,s.createElement(d.A,null,s.createElement(m.Y,null,"Nutrient"),s.createElement(m.Y,null,"Amount"))),s.createElement(u.Z,null,s.createElement(d.A,null,s.createElement(m.Y,{sx:{fontWeight:"bold"},component:"th",scope:"row"},"Calories"),null!==n.calories?s.createElement(m.Y,null,n.calories):s.createElement(m.Y,null,"-")),s.createElement(d.A,null,s.createElement(m.Y,{sx:{fontWeight:"bold"},component:"th",scope:"row"},"Total Fat"),null!==n.total_fat?s.createElement(m.Y,null,n.total_fat," g"):s.createElement(m.Y,null,"-")),s.createElement(d.A,null,s.createElement(m.Y,{component:"th",scope:"row"},"Saturated"),null!==n.saturated_fat?s.createElement(m.Y,null,n.saturated_fat," g"):s.createElement(m.Y,null,"-")),s.createElement(d.A,null,s.createElement(m.Y,{component:"th",scope:"row"},"Trans"),null!==n.trans_fat?s.createElement(m.Y,null,n.trans_fat," g"):s.createElement(m.Y,null,"-")),s.createElement(d.A,null,s.createElement(m.Y,{component:"th",scope:"row"},"Polyunsaturated"),null!==n.polyunsaturated_fat?s.createElement(m.Y,null,n.polyunsaturated_fat," g"):s.createElement(m.Y,null,"-")),s.createElement(d.A,null,s.createElement(m.Y,{component:"th",scope:"row"},"Monounsaturated"),null!==n.monounsaturated_fat?s.createElement(m.Y,null,n.monounsaturated_fat," g"):s.createElement(m.Y,null,"-")),s.createElement(d.A,null,s.createElement(m.Y,{sx:{fontWeight:"bold"},component:"th",scope:"row"},"Cholesterol"),null!==n.cholesterol?s.createElement(m.Y,null,n.cholesterol," mg"):s.createElement(m.Y,null,"-")),s.createElement(d.A,null,s.createElement(m.Y,{sx:{fontWeight:"bold"},component:"th",scope:"row"},"Sodium"),null!==n.sodium?s.createElement(m.Y,null,n.sodium," mg"):s.createElement(m.Y,null,"-")),s.createElement(d.A,null,s.createElement(m.Y,{sx:{fontWeight:"bold"},component:"th",scope:"row"},"Total Carbohydrates"),null!==n.total_carbohydrates?s.createElement(m.Y,null,n.total_carbohydrates," g"):s.createElement(m.Y,null,"-")),s.createElement(d.A,null,s.createElement(m.Y,{component:"th",scope:"row"},"Dietary Fiber"),null!==n.dietary_fiber?s.createElement(m.Y,null,n.dietary_fiber," g"):s.createElement(m.Y,null,"-")),s.createElement(d.A,null,s.createElement(m.Y,{component:"th",scope:"row"},"Sugar"),null!==n.sugar?s.createElement(m.Y,null,n.sugar," g"):s.createElement(m.Y,null,"-")),s.createElement(d.A,null,s.createElement(m.Y,{sx:{fontWeight:"bold"},component:"th",scope:"row"},"Protein"),null!==n.protein?s.createElement(m.Y,null,n.protein," g"):s.createElement(m.Y,null,"-")),s.createElement(d.A,null,s.createElement(m.Y,{sx:{fontWeight:"bold"},component:"th",scope:"row"},"Vitamin D"),null!==n.vitamin_d?s.createElement(m.Y,null,n.vitamin_d," %"):s.createElement(m.Y,null,"-")),s.createElement(d.A,null,s.createElement(m.Y,{sx:{fontWeight:"bold"},component:"th",scope:"row"},"Calcium"),null!==n.calcium?s.createElement(m.Y,null,n.calcium," %"):s.createElement(m.Y,null,"-")),s.createElement(d.A,null,s.createElement(m.Y,{sx:{fontWeight:"bold"},component:"th",scope:"row"},"Iron"),null!==n.iron?s.createElement(m.Y,null,n.iron," %"):s.createElement(m.Y,null,"-")),s.createElement(d.A,null,s.createElement(m.Y,{sx:{fontWeight:"bold"},component:"th",scope:"row"},"Potassium"),null!==n.potassium?s.createElement(m.Y,null,n.potassium," mg"):s.createElement(m.Y,null,"-")),s.createElement(d.A,null,s.createElement(m.Y,{sx:{fontWeight:"bold"},component:"th",scope:"row"},"Vitamin A"),null!==n.vitamin_a?s.createElement(m.Y,null,n.vitamin_a," %"):s.createElement(m.Y,null,"-")),s.createElement(d.A,null,s.createElement(m.Y,{sx:{fontWeight:"bold"},component:"th",scope:"row"},"Vitamin C"),null!==n.vitamin_c?s.createElement(m.Y,null,n.vitamin_c," %"):s.createElement(m.Y,null,"-"))))))))))}},3725:(e,t,n)=>{n.d(t,{Y:()=>a});var r=n(8102),l=n(9755),a=(0,n(9602).ZP)(r.Z)((function(e){var t,n=e.theme;return(t={})["&.".concat(l.Z.head)]={backgroundColor:n.palette.background.paper},t["&.".concat(l.Z.body)]={fontSize:12,backgroundColor:n.palette.action.hover},t}))},4052:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(3694),l=(0,n(9602).ZP)(r.Z)((function(e){return{"&:nth-of-type(even)":{backgroundColor:e.theme.palette.background},"&:last-child td, &:last-child th":{border:0}}}))},2388:(e,t,n)=>{n.d(t,{O:()=>r});var r=function(e,t){var n="",r="";if(null!==e&&""!==e&&void 0!==e){for(var l=e.split(" "),a=0;a<l.length;a++)""!==l[a]&&(l[a]=l[a][0]+l[a].slice(1).toLowerCase());n=l.join(" ")}if(null!=t&&""!==t){var o=t.split(" ");for(a=0;a<o.length;a++)""!==o[a]&&(o[a]=o[a][0]+o[a].slice(1).toLowerCase());r=o.join(" ")}return""!==n?"".concat(r," (").concat(n,")"):r}}}]);