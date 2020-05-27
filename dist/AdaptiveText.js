'use strict';function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _interopDefault(a){return a&&"object"===_typeof(a)&&"default"in a?a["default"]:a}var React=require("react"),React__default=_interopDefault(React),PropTypes=_interopDefault(require("prop-types"));function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _iterableToArrayLimit(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var useResize=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:100;React.useEffect(function(){var c=function(){return setTimeout(a,b)};return window.addEventListener("resize",c),function(){return window.removeEventListener("resize",c)}},[a])},AdaptiveText=function(a){var b=a.color,c=a.fontFamily,d=a.fontSizeMax,e=a.fontSizeMin,f=a.fontStyle,g=a.fontWeight,h=a.text,i=a.textDecoration,j=a.width,k=void 0===j?"100%":j,l=React.useRef(),m=React.useRef(),n=React.useState({opacity:0,whiteSpace:"nowrap"}),o=_slicedToArray(n,2),p=o[0],q=o[1],r=React.useState(0),s=_slicedToArray(r,2),t=s[0],u=s[1],v=React.useState(0),w=_slicedToArray(v,2),x=w[0],y=w[1],z={display:"block",textAlign:"center"},A=function(a,b){a&&"undefined"!=typeof a&&(z[b]=a)};A(b,"color"),A(c,"fontFamily"),A(f,"fontStyle"),A(g,"fontWeight"),A(i,"textDecoration"),A(k,"width"),React.useEffect(function(){var a=window.getComputedStyle(m.current).getPropertyValue("font-size"),b=parseFloat(a),c=0===m.current.offsetWidth?1:m.current.offsetWidth;u(b),y(c),q({fontSize:B(b,c,d,e)})},[d,e,h,k]),useResize(function(){return q({fontSize:B(t,x,d,e)})});var B=function(a,b,c,d){var e=Math.floor,f=l.current.offsetWidth,g=e(e(a)*e(f))/Math.ceil(b);return g>c?c:g<d?d:g};return/*#__PURE__*/React__default.createElement("span",{ref:l,style:z},/*#__PURE__*/React__default.createElement("span",{ref:m,style:p},h))};AdaptiveText.propTypes={color:PropTypes.string,fontFamily:PropTypes.string,fontSizeMax:PropTypes.number,fontSizeMin:PropTypes.number,fontStyle:PropTypes.string,fontWeight:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),text:function(a,b,c){return"string"==typeof a[b]?0>=a[b].length?new Error("Property '".concat(b,"' supplied to ").concat(c," cannot be empty.")):void 0:new Error("Property '".concat(b,"' supplied to ").concat(c," is required and must be type of 'string'."))},textDecoration:PropTypes.string,width:PropTypes.oneOfType([PropTypes.number,PropTypes.string])},module.exports=AdaptiveText;
