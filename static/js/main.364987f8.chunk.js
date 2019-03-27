(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports={list:"ListItems_list__1pd8c",total:"ListItems_total__2eInb",headerCol:"ListItems_headerCol__2tmp3",lastCol:"ListItems_lastCol__-cjZ_",del:"ListItems_del__1M_UP"}},26:function(e,t,a){e.exports={formItems:"AddItems_formItems__3qfec",inputPrice:"AddItems_inputPrice__2sVX6",button:"AddItems_button__2pfSw"}},36:function(e,t,a){e.exports={edit:"EditItems_edit__Equb5",inputPrice:"EditItems_inputPrice__25yTc"}},51:function(e,t,a){e.exports={app:"App_app__vEpXy"}},57:function(e,t,a){e.exports=a(99)},66:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),l=a.n(i),c=a(14),o=(a(66),a(67),a(10)),s=a(11),d=a(15),u=a(12),m=a(16),h=a(51),p=a.n(h),f=a(102),v=a(103),E=a(52),b=a.n(E),_=a(26),C=a.n(_),y=a(37),g=a(23),j="ADD_ITEM",I="CHANGE_ITEM",O="DELETE_ITEM",V=[{id:"first",name:"first",price:10},{id:"second",name:"second",price:20},{id:"third",name:"third",price:30},{id:"fourth",name:"fourth",price:5}],N=Object(g.b)({itemsState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return[].concat(Object(y.a)(e),[t.payload]);case I:var a=t.payload,n=a.id,r=a.name,i=a.price,l=Object(y.a)(e),c=l.find(function(e){return e.id===n});return c.name=r,c.price=i,l;case O:var o=t.payload;return e.filter(function(e){return e.id!==o});default:return e}}}),w=Object(g.c)(N),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){return function(t){var n=t.target.value;if("name"===e&&a.setState({isValidName:!!n,name:n}),"price"===e){var r=-1!==n.search(/^\d+$/);a.setState({isValidPrice:r,price:n})}}},a.handleAdd=function(){var e=a.props.addItem,t=a.state,n=t.name,r=t.price;a.isFormValid()&&(e({id:b()(),name:n,price:Number(r)}),a.setState({isValidName:null,isValidPrice:null,name:"",price:""}))},a.isFormValid=function(){var e=a.state,t=e.isValidName,n=e.isValidPrice;return t&&n},a.state={isValidName:null,isValidPrice:null,name:"",price:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isValidName,a=e.isValidPrice,n=e.name,i=e.price;return r.a.createElement(f.a,{inline:!0,className:C.a.formItems},r.a.createElement(f.a.Control,{type:"text",placeholder:"Product",value:n,onChange:this.handleChange("name"),isValid:t,isInvalid:null===t?null:!t}),r.a.createElement(f.a.Control,{type:"text",placeholder:"Price",value:i,onChange:this.handleChange("price"),isValid:a,isInvalid:null===a?null:!a,className:C.a.inputPrice}),r.a.createElement(v.a,{variant:"success",onClick:this.handleAdd,className:C.a.button},"Add"))}}]),t}(n.Component),k=Object(c.b)(function(){return{}},function(e){return{addItem:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:j,payload:e}}(t))}}})(P),S=a(100),D=a(18),A=a.n(D),x=a(101),M=a(36),H=a.n(M),L=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){return function(t){var n=t.target.value;if("name"===e&&a.setState({isValidName:!!n,name:n}),"price"===e){var r=-1!==n.search(/^\d+$/);a.setState({isValidPrice:r,price:n})}}},a.handleSave=function(){var e=a.props.changeItem,t=a.state,n=t.id,r=t.name,i=t.price;a.isFormValid()&&(e({id:n,name:r,price:Number(i)}),a.handleHide())},a.isFormValid=function(){var e=a.state,t=e.isValidName,n=e.isValidPrice;return t&&n},a.handleShow=function(){a.setState({showModal:!0})},a.handleHide=function(){a.setState({showModal:!1})};var n=e.item,r=n.id,i=n.name,l=n.price;return a.state={showModal:!1,isValidName:!!i,isValidPrice:-1!==String(l).search(/^\d+$/),id:r,name:i,price:l},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isValidName,a=e.isValidPrice,n=e.showModal,i=e.name,l=e.price;return r.a.createElement("div",{className:H.a.edit},r.a.createElement(v.a,{variant:"warning",onClick:this.handleShow},"edit"),r.a.createElement(x.a,{show:n,onHide:this.handleHide},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,null,"Changing item")),r.a.createElement(x.a.Body,null,r.a.createElement(f.a,null,r.a.createElement(f.a.Control,{type:"text",placeholder:"Product",value:i,onChange:this.handleChange("name"),isValid:t,isInvalid:null===t?null:!t}),r.a.createElement(f.a.Control,{type:"text",placeholder:"Price",value:l,onChange:this.handleChange("price"),isValid:a,isInvalid:null===a?null:!a,className:H.a.inputPrice}))),r.a.createElement(x.a.Footer,null,r.a.createElement(v.a,{variant:"primary",onClick:this.handleSave},"Save"),r.a.createElement(v.a,{variant:"secondary",onClick:this.handleHide},"Close"))))}}]),t}(n.Component),T=Object(c.b)(function(){return{}},function(e){return{changeItem:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:I,payload:e}}(t))}}})(L),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).handleDelete=function(e){return function(){(0,a.props.deleteItem)(e)}},a.renderData=function(){return a.props.items.map(function(e){var t=e.name,n=e.price,i=e.id;return r.a.createElement("tr",{key:i},r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",{className:A.a.lastCol},r.a.createElement(T,{item:e}),r.a.createElement(v.a,{variant:"danger",onClick:a.handleDelete(i),className:A.a.del},"del")))})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.items.reduce(function(e,t){return e+t.price},0);return r.a.createElement(S.a,{striped:!0,bordered:!0,hover:!0,className:A.a.list},r.a.createElement("thead",null,r.a.createElement("tr",{style:{backgroundColor:"#D6D8D9"}},r.a.createElement("th",{className:A.a.headerCol},"name"),r.a.createElement("th",{className:A.a.headerCol},"price"),r.a.createElement("th",null))),r.a.createElement("tbody",null,this.renderData(),r.a.createElement("tr",{style:{backgroundColor:"#D7ECDB"}},r.a.createElement("td",{className:A.a.total},"total"),r.a.createElement("td",null,e),r.a.createElement("td",null))))}}]),t}(n.Component),F=Object(c.b)(function(e){return{items:e.itemsState}},function(e){return{deleteItem:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:O,payload:e}}(t))}}})(B),$=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:p.a.app},r.a.createElement(k,null),r.a.createElement(F,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(c.a,{store:w},r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[57,1,2]]]);
//# sourceMappingURL=main.364987f8.chunk.js.map