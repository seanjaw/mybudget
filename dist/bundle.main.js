!function(e){function t(t){for(var a,i,l=t[0],c=t[1],s=t[2],d=0,p=[];d<l.length;d++)i=l[d],r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={0:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;o.push([132,1]),n()}({132:function(e,t,n){n(133),e.exports=n(338)},336:function(e,t,n){var a=n(337);"string"==typeof a&&(a=[[e.i,a,""]]);n(90)(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},337:function(e,t,n){(e.exports=n(89)(!1)).push([e.i,"body {\n  overflow: visible; }\n\nh1 {\n  margin-top: 0;\n  color: #d48282; }\n\n.remove-padding {\n  padding: 0; }\n\n.form-margins {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.making-height {\n  height: 15vh; }\n\n.remove-margin {\n  margin-bottom: 0; }\n\n.add-vertical-line {\n  border-left: solid 1px #c7c6c6; }\n\n/*breakdown bar styling*/\n.breakdown-bar-font {\n  font-size: 18px; }\n\n.breakdown-bar-margin {\n  margin-bottom: 10px; }\n\n/* speech bubble styling*/\n.speech-bubble {\n  position: relative;\n  background: #00aabb;\n  border-radius: .4em; }\n\n.speech-bubble:after {\n  content: '';\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 20px solid transparent;\n  border-left-color: #00aabb;\n  border-right: 0;\n  margin-top: -20px;\n  margin-right: -20px; }\n\n.speech-bubble-size {\n  height: 80px;\n  width: 180px; }\n\n.text-bottom {\n  position: absolute;\n  bottom: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0; }\n\n.accumulation-styling {\n  font-size: 19px;\n  position: absolute;\n  bottom: 25px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0; }\n\n/* table styling */\n/*budget sunmary styling*/\ntbody > tr > td:nth-child(3) {\n  text-align: right; }\n\n.budget-text-styling {\n  margin: auto;\n  text-align: left; }\n\n.table-overflow {\n  overflow-x: auto; }\n\n/* operation buttons spacing */\n.operation-button-margin {\n  margin-right: 7px; }\n\n/*modal styling*/\n.close {\n  color: #aaaaaa;\n  font-size: 23px;\n  font-weight: bold;\n  margin-right: 5px;\n  position: absolute;\n  right: 0; }\n\n.modal-display {\n  display: block;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  background-color: #fafafa;\n  padding: 0;\n  width: 55%;\n  margin: auto;\n  border-radius: 2px;\n  z-index: 100; }\n\n/*form styling */\n.modal {\n  max-height: none; }\n\n.errorFont {\n  font-size: 0.7em;\n  padding-left: 42px;\n  margin-left: 9%;\n  color: red; }\n\n.formErrorFont {\n  font-size: 0.7em;\n  text-align: center;\n  color: red;\n  padding-bottom: 10px; }\n",""])},338:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(128),i=n.n(o),l=(n(303),n(306),n(307),n(31));function c(e){return{type:"EDIT_STUDENT_INFO",payload:e}}var s=n(32),u=n.n(s);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n,a,r,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(a,r)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){var e,n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=function(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,(e=m(t)).call.apply(e,[this].concat(r)))).state={description:"",category:"",value:"",date:""},n.handleSubmit=function(){var e,t=(e=regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n.validate())return e.next=5,u.a.post("/api/data.php?action=update",{id:n.state.id,description:n.state.description,category:n.state.category,value:n.state.value,date:n.state.date});e.next=9;break;case 5:a=e.sent,console.log(a),n.props.refreshAfterEdit(),n.props.closeModal();case 9:console.log("this was clicked");case 10:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){p(o,a,r,i,l,"next",e)}function l(e){p(o,a,r,i,l,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}(),n.handleKeyPress=function(e){var t,a,r;n.setState((t={},a=e.target.name,r=e.target.value,a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t)),console.log("in the handling key press",n.state)},n.validate=function(){console.log("in the validate function");var e="",t="",a="",r="",o="";return n.setState({descriptionError:e,categoryError:t,valueError:a,dateError:r,formError:o}),""!==n.state.description&&""!==n.state.category&&""!==n.state.value&&""!==n.state.date||(o="form must be filled out completely. try again"),""!==n.state.description&&(n.state.description.length<2||19<n.state.description.length)&&(console.log("its not long enough mate"),e="must be between 2 and 20 characters"),""!==n.state.category&&(n.state.category.length<2||19<n.state.category.length)&&(console.log("its not long enough mate"),t="must be between 2 and 20 characters"),""!==n.state.value&&(n.validateDecimal(n.state.value)||(a="must contain two decimal places")),""!==n.state.date&&(n.validateDate(n.state.date)||(r="must be in mm/dd/yyyy and between years 1900 and 2099")),!(o||e||t||a||r)||(n.setState({descriptionError:e,categoryError:t,valueError:a,dateError:r,formError:o}),!1)},n.validateDecimal=function(e){var t=parseFloat(e);return/^-?\d+(\.\d{1,2})?$/.test(t)},n.validateDate=function(e){return/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/.test(e)},n}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.setState(this.props.info),console.log("this is props.info",this.props.info),M.updateTextFields()}},{key:"render",value:function(){var e=this.props.info,t=e.description,n=e.category,a=e.value,o=e.date;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col input-field s10 offset-s1"},r.a.createElement("i",{className:"material-icons prefix"},"label"),r.a.createElement("input",{onChange:this.handleKeyPress,name:"description",type:"text",id:"description",placeholder:t,value:this.state.description}),r.a.createElement("label",{htmlFor:"description"},"Description"))),r.a.createElement("div",{className:"errorFont"},this.state.descriptionError),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col input-field s10 offset-s1"},r.a.createElement("i",{className:"material-icons prefix"},"list"),r.a.createElement("input",{onChange:this.handleKeyPress,name:"category",type:"text",id:"category",placeholder:n,value:this.state.category}),r.a.createElement("label",{htmlFor:"description"},"Category"))),r.a.createElement("div",{className:"errorFont"},this.state.categoryError),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col input-field s10 offset-s1"},r.a.createElement("i",{className:"material-icons prefix"},"attach_money"),r.a.createElement("input",{onChange:this.handleKeyPress,name:"value",type:"number",id:"value",placeholder:a,value:this.state.value}),r.a.createElement("label",{htmlFor:"value"},"Value"))),r.a.createElement("div",{className:"errorFont"},this.state.valueError),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col input-field s10 offset-s1"},r.a.createElement("i",{className:"material-icons prefix"},"date_range"),r.a.createElement("input",{onChange:this.handleKeyPress,name:"date",type:"text",id:"date",placeholder:o,value:this.state.date}),r.a.createElement("label",{htmlFor:"description"},"Date"))),r.a.createElement("div",{className:"errorFont"},this.state.dateError),r.a.createElement("div",{className:"formErrorFont"},this.state.formError),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center"},r.a.createElement("button",{className:"btn-large waves-effect waves-light btn black"},"edit"))))}}])&&f(n.prototype,o),t}(),b=Object(l.b)(function(e){return console.log("STATE",e.edit),{info:e.edit}},{editItem:c})(y),v=Object(l.b)(function(e){return{info:e.edit}},{editItem:c})(function(e){var t=e.list,n=t.description,a=t.value,o=t.id,i=t.category,l=t.date,c=function(){e.editItem({description:n,value:a,id:o,category:i,date:l})};return r.a.createElement("tr",{className:"yellow lighten-5"},r.a.createElement("td",null,n),r.a.createElement("td",null,i),r.a.createElement("td",null,parseFloat(a).toFixed(2)),r.a.createElement("td",null,l),r.a.createElement("td",null,r.a.createElement("a",{className:"btn-floating btn waves-effect waves-light black btn-small operation-button-margin"},r.a.createElement("i",{className:"material-icons",onClick:function(){c(),e.openModal(e.list.id)}},"edit")),r.a.createElement("a",{className:"btn-floating btn waves-effect waves-light black btn-small"},r.a.createElement("i",{className:"material-icons",onClick:function(){c(),e.openDeleteModal(e.list.id)}},"delete"))))}),g=function(e){var t=e.list.map(function(t){return r.a.createElement(v,{edit:e.editItem,delete:e.deleteItem,openDeleteModal:e.openDeleteModal,openModal:e.openEditModal,closeModal:e.closeEditModal,key:t.id,list:t})});return r.a.createElement("table",{className:"highlight table-margin"},r.a.createElement("thead",{className:"teal lighten-1 white-text"},r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Category"),r.a.createElement("th",null,"Value"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Operations"))),r.a.createElement("tbody",null,t))};function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n,a,r,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(a,r)}function O(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){function t(){var e,n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=function(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,(e=N(t)).call.apply(e,[this].concat(r)))).state={description:"",category:"",value:"",date:""},n.handleSubmit=function(){var e,t=(e=regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n.validate())return e.next=5,u.a.post("/api/data.php?action=insert",{description:n.state.description,category:n.state.category,value:n.state.value,date:n.state.date});e.next=11;break;case 5:a=e.sent,console.log("this is addrow",a),n.props.add(n.state),n.resetForm(),e.next=12;break;case 11:console.log(n.state);case 12:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){w(o,a,r,i,l,"next",e)}function l(e){w(o,a,r,i,l,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}(),n.handleKeyPress=function(e){var t,a,r;n.setState((t={},a=e.target.name,r=e.target.value,a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t))},n.validate=function(){console.log("in the validate function");var e="",t="",a="",r="",o="";return n.setState({descriptionError:e,categoryError:t,valueError:a,dateError:r,formError:o}),""!==n.state.description&&""!==n.state.category&&""!==n.state.value&&""!==n.state.date||(o="form must be filled out completely. try again"),""!==n.state.description&&(n.state.description.length<2||19<n.state.description.length)&&(console.log("its not long enough mate"),e="must be between 2 and 20 characters"),""!==n.state.category&&(n.state.category.length<2||19<n.state.category.length)&&(console.log("its not long enough mate"),t="must be between 2 and 20 characters"),""!==n.state.value&&(n.validateDecimal(n.state.value)||(a="must contain two decimal places")),""!==n.state.date&&(n.validateDate(n.state.date)||(r="must be in mm/dd/yyyy and between years 1900 and 2099")),!(o||e||t||a||r)||(n.setState({descriptionError:e,categoryError:t,valueError:a,dateError:r,formError:o}),!1)},n.resetForm=function(){n.setState({description:"",category:"",value:"",date:""}),n.setState({descriptionError:"",categoryError:"",valueError:"",dateError:"",formError:""})},n.validateDecimal=function(e){var t=parseFloat(e);return/^-?\d+(\.\d{1,2})?$/.test(t)},n.validateDate=function(e){return/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/.test(e)},n}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,a.Component),n=t,(o=[{key:"render",value:function(){var e=this.state,t=e.description,n=e.category,a=e.value,o=e.date;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col input-field s10 offset-s1"},r.a.createElement("i",{className:"material-icons prefix"},"label"),r.a.createElement("input",{onChange:this.handleKeyPress,name:"description",type:"text",id:"description",value:t}),r.a.createElement("label",{htmlFor:"description"},"Description"))),r.a.createElement("div",{className:"errorFont"},this.state.descriptionError),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col input-field s10 offset-s1"},r.a.createElement("i",{className:"material-icons prefix"},"list"),r.a.createElement("input",{onChange:this.handleKeyPress,name:"category",type:"text",id:"category",value:n}),r.a.createElement("label",{htmlFor:"description"},"Category"))),r.a.createElement("div",{className:"errorFont"},this.state.categoryError),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col input-field s10 offset-s1"},r.a.createElement("i",{className:"material-icons prefix"},"attach_money"),r.a.createElement("input",{onChange:this.handleKeyPress,name:"value",type:"number",id:"value",value:a}),r.a.createElement("label",{htmlFor:"value"},"Value"))),r.a.createElement("div",{className:"errorFont"},this.state.valueError),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col input-field s10 offset-s1"},r.a.createElement("i",{className:"material-icons prefix"},"date_range"),r.a.createElement("input",{onChange:this.handleKeyPress,name:"date",type:"text",id:"date",value:o}),r.a.createElement("label",{htmlFor:"description"},"mm/dd/yyyy"))),r.a.createElement("div",{className:"errorFont"},this.state.dateError),r.a.createElement("div",{className:"formErrorFont"},this.state.formError),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s6 center"},r.a.createElement("button",{onClick:this.resetForm,type:"button",className:"btn waves-effect waves-light btn black"},"clear")),r.a.createElement("div",{className:"col s6 center"},r.a.createElement("button",{className:"btn waves-effect waves-light btn black"},"add"))))}}])&&O(n.prototype,o),t}();n(336);var _=function(e){return r.a.createElement("div",{className:"col s12 m12 no-padding"},r.a.createElement("div",{className:"yellow lighten-5 making-height valign-wrapper"},r.a.createElement("div",{className:"col s12 breakdown-bar-font white-text"},r.a.createElement("div",{className:"col s10 offset-s1 green breakdown-bar-margin z-depth-1"},r.a.createElement("div",{className:"left"},"Income"),r.a.createElement("div",{className:"right"},"+$",e.posAccumulator)),r.a.createElement("div",{className:"col s10 offset-s1 red z-depth-1"},r.a.createElement("div",{className:"left"},"Expense"),r.a.createElement("div",{className:"right"},"-$",e.negAccumulator)))))};function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,P(t).apply(this,arguments))}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,a.Component),n=t,(o=[{key:"componentDidMount",value:function(){M.Modal.init(this.editModalInstance,{opacity:.5,onCloseStart:this.props.closeModal}).open()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{ref:function(t){e.editModalInstance=t},id:"modal1",className:"modal modal-dsplay"},r.a.createElement("span",{className:"close",onClick:this.props.closeModal},"×"),r.a.createElement("div",{className:"modal-content"},r.a.createElement(b,{refreshAfterEdit:this.props.editItem,closeModal:this.props.closeModal}))))}}])&&k(n.prototype,o),t}();function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){function t(){var e,n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=function(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,(e=C(t)).call.apply(e,[this].concat(r)))).state={description:"",category:"",value:"",date:""},n}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,a.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.setState(this.props.info),console.log("this is props.info",this.props.info),M.Modal.init(this.deleteModalInstance,{opacity:.5,onCloseStart:this.props.closeDeleteModal}).open()}},{key:"render",value:function(){var e,t,n,a=this;return console.log("this is state.edit",this.state.edit),r.a.createElement("div",null,r.a.createElement("div",{ref:function(e){a.deleteModalInstance=e},id:"modal1",className:"modal modal-dsplay"},r.a.createElement("span",{className:"close",onClick:this.props.closeDeleteModal},"×"),r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"center"}," Are you sure you would like to delete?")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s6 center"},r.a.createElement("button",(n=function(){a.props.closeDeleteModal()},(t="onClick")in(e={onClick:this.resetForm,type:"button",className:" btn-small btn waves-effect waves-light btn black"})?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e),"No")),r.a.createElement("div",{className:"col s6 center"},r.a.createElement("button",{className:"btn-small btn waves-effect waves-light btn black",onClick:function(){a.props.closeDeleteModal(),a.props.deleteItem(a.props.info.id)}},"Yes"))))))}}])&&T(n.prototype,o),t}(),K=Object(l.b)(function(e){return console.log("STATE",e.edit),{info:e.edit}},{editItem:c})(R);function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var L=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==z(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,U(t).apply(this,arguments))}var n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(t,a.Component),n=t,(o=[{key:"componentDidMount",value:function(){M.Modal.init(this.warningModalInstance,{opacity:.5,onCloseStart:this.props.closeWarningModal}).open()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{ref:function(t){e.warningModalInstance=t},id:"modal1",className:"modal modal-dsplay"},r.a.createElement("span",{className:"close",onClick:this.props.closeWarningModal},"×"),r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"center"}," This site is accessible to the public. Do not put any sensitive information inside the budgeter!")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center"},r.a.createElement("button",{type:"button",className:" btn-small btn waves-effect waves-light btn black",onClick:function(){e.props.closeWarningModal()}},"OK"))))))}}])&&W(n.prototype,o),t}();function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t,n,a,r,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(a,r)}function J(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){H(o,a,r,i,l,"next",e)}function l(e){H(o,a,r,i,l,"throw",e)}i(void 0)})}}function B(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var q=function(e){function t(){var e,n;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=function(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,(e=G(t)).call.apply(e,[this].concat(r)))).state={list:[],modalOpen:!1,deleteModalOpen:!1,warningModalOpen:!0},n.addItem=function(e){e.id=function(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:8,t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",n="",a=0;a<e;a++)n+=t[Math.floor(Math.random()*t.length)];return n}(),n.setState({list:function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(n.state.list).concat([e])}),console.log("submitted add item",n.state.list)},n.editItem=J(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/data.php?action=readAll");case 2:t=e.sent,n.setState({list:t.data.data});case 4:case"end":return e.stop()}},e,this)})),n.deleteItem=function(){var e=J(regeneratorRuntime.mark(function e(t){var a,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.state.list.findIndex(function(e){return console.log("this is index to delete",t),e.id===t}),console.log(n.state),console.log(a),e.next=5,u.a.post("/api/data.php?action=delete",{id:n.state.list[a].id});case 5:r=e.sent,console.log(r),console.log("current row ",n.state.list[a]),0<=a&&((o=n.state.list.slice()).splice(a,1),n.setState({list:o}));case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.accumulate=function(){var e=0;return n.state.list.map(function(t){var n=parseFloat(t.value);e+=n}),e},n.incomeAccumulate=function(){var e=0;return n.state.list.map(function(t){var n=parseFloat(t.value);0<n&&(e+=n)}),e.toFixed(2)},n.expenseAccumulate=function(){var e=0;return n.state.list.map(function(t){var n=parseFloat(t.value);n<0&&(e+=n)}),(e*=-1).toFixed(2)},n.openEditModal=function(e){n.setState({modalOpen:!0,editID:e}),console.log("in the edit modal")},n.closeEditModal=function(){n.setState({modalOpen:!1})},n.openDeleteModal=function(e){n.setState({deleteModalOpen:!0,deleteID:e}),console.log("this is state after delete modal is opened",n.state),console.log("in the delete modal")},n.closeDeleteModal=function(){n.setState({deleteModalOpen:!1})},n.closeWarningModal=function(){n.setState({warningModalOpen:!1})},n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(t,a.Component),n=t,(o=[{key:"componentDidMount",value:(i=J(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/data.php?action=readAll");case 2:t=e.sent,this.setState({list:t.data.data});case 4:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{key:"render",value:function(){return this.accumulate(),r.a.createElement("div",{className:"yellow lighten-5 z-depth-1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m8 no-padding table-overflow"},r.a.createElement("h3",null,"WhereIsMyMoney?"),r.a.createElement(g,{editItem:this.editItem,openDeleteModal:this.openDeleteModal,openEditModal:this.openEditModal,list:this.state.list})),r.a.createElement("div",{className:"col s12 m4 no-padding"},r.a.createElement(_,{posAccumulator:this.incomeAccumulate(),negAccumulator:this.expenseAccumulate()}),r.a.createElement(S,{add:this.addItem}))),r.a.createElement("div",null),this.state.modalOpen?r.a.createElement(I,{editItem:this.editItem,closeModal:this.closeEditModal}):"",this.state.deleteModalOpen?r.a.createElement(K,{deleteItem:this.deleteItem,closeDeleteModal:this.closeDeleteModal}):"",this.state.warningModalOpen?r.a.createElement(L,{closeWarningModal:this.closeWarningModal}):"")}}])&&B(n.prototype,o),t}(),Q=n(48),X={row:"change_row_info",EDIT_STUDENT_INFO:"EDIT_STUDENT_INFO",REFRESH_LIST:"REFRESH_LIST"},Z={description:"sean",category:"is",value:"a",date:"test"},ee=Object(Q.b)({row:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:Z,t=1<arguments.length?arguments[1]:void 0;switch(t.type){case"GET_STUDENT_INFO":return t.payload;default:return e}},edit:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=1<arguments.length?arguments[1]:void 0;switch(t.type){case X.EDIT_STUDENT_INFO:return t.payload;default:return e}},delete:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=1<arguments.length?arguments[1]:void 0;switch(t.type){case X.DELETE_STUDENT_INFO:return t.payload;default:return e}}}),te=Object(Q.c)(ee);i.a.render(r.a.createElement(l.a,{store:te},r.a.createElement(q,null)),document.getElementById("root"))}});