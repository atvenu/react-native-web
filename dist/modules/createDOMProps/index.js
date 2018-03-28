var _getAccessibilityRole=require('../getAccessibilityRole');var _getAccessibilityRole2=_interopRequireDefault(_getAccessibilityRole);
var _StyleSheet=require('../../apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var emptyObject={};

var pointerEventStyles=_StyleSheet2.default.create({
auto:{
pointerEvents:'auto'},

'box-none':{
pointerEvents:'box-none'},

'box-only':{
pointerEvents:'box-only'},

none:{
pointerEvents:'none'}});



var createDOMProps=function createDOMProps(rnProps,resolveStyle){var _ref=














rnProps||emptyObject;var accessibilityLabel=_ref.accessibilityLabel;var accessibilityLiveRegion=_ref.accessibilityLiveRegion;var _ref$accessible=_ref.accessible;var accessible=_ref$accessible===undefined?true:_ref$accessible;var pointerEvents=_ref.pointerEvents;var rnStyle=_ref.style;var testID=_ref.testID;var type=_ref.type;var accessibilityComponentType=_ref.accessibilityComponentType;var accessibilityRole=_ref.accessibilityRole;var accessibilityTraits=_ref.accessibilityTraits;var domProps=_objectWithoutProperties(_ref,['accessibilityLabel','accessibilityLiveRegion','accessible','pointerEvents','style','testID','type','accessibilityComponentType','accessibilityRole','accessibilityTraits']);

var pointerEventStyle=pointerEvents&&pointerEventStyles[pointerEvents];var _ref2=
resolveStyle([rnStyle,pointerEventStyle])||emptyObject;var className=_ref2.className;var style=_ref2.style;
var role=(0,_getAccessibilityRole2.default)(rnProps||emptyObject);

if(!accessible){
domProps['aria-hidden']=true;
}
if(accessibilityLabel){
domProps['aria-label']=accessibilityLabel;
}
if(accessibilityLiveRegion){
domProps['aria-live']=accessibilityLiveRegion;
}
if(className&&className!==''){
domProps.className=domProps.className?domProps.className+' '+className:className;
}
if(role){
domProps.role=role;
if(role==='button'){
domProps.type='button';
}else if(role==='link'&&domProps.target==='_blank'){
domProps.rel=(domProps.rel||'')+' noopener noreferrer';
}
}
if(style){
domProps.style=style;
}
if(testID){
domProps['data-testid']=testID;
}
if(type){
domProps.type=type;
}

return domProps;
};

module.exports=createDOMProps;