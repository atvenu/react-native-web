






var _ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');
var _debounce=require('debounce');var _debounce2=_interopRequireDefault(_debounce);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var emptyObject={};
var registry={};

var id=1;
var guid=function guid(){return'r-'+id++;};

if(_ExecutionEnvironment.canUseDOM){
var triggerAll=function triggerAll(){
Object.keys(registry).forEach(function(key){
var instance=registry[key];
instance._handleLayout();
});
};

window.addEventListener('resize',(0,_debounce2.default)(triggerAll,16),false);
}

var safeOverride=function safeOverride(original,next){
if(original){
return function prototypeOverride(){
original.call(this);
next.call(this);
};
}
return next;
};

var applyLayout=function applyLayout(Component){
var componentDidMount=Component.prototype.componentDidMount;
var componentDidUpdate=Component.prototype.componentDidUpdate;
var componentWillUnmount=Component.prototype.componentWillUnmount;

Component.prototype.componentDidMount=safeOverride(
componentDidMount,
function componentDidMount(){
this._layoutState=emptyObject;
this._isMounted=true;
this._onLayoutId=guid();
registry[this._onLayoutId]=this;
this._handleLayout();
});


Component.prototype.componentDidUpdate=safeOverride(
componentDidUpdate,
function componentDidUpdate(){
this._handleLayout();
});


Component.prototype.componentWillUnmount=safeOverride(
componentWillUnmount,
function componentWillUnmount(){
this._isMounted=false;
delete registry[this._onLayoutId];
});


Component.prototype._handleLayout=function(){var _this=this;
var layout=this._layoutState;var
onLayout=this.props.onLayout;

if(onLayout){
this.measure(function(x,y,width,height){
if(!_this._isMounted)return;

if(
layout.x!==x||layout.y!==y||layout.width!==width||layout.height!==height)
{
_this._layoutState={x:x,y:y,width:width,height:height};
var nativeEvent={layout:_this._layoutState};
onLayout({nativeEvent:nativeEvent,timeStamp:Date.now()});
}
});
}
};
return Component;
};

module.exports=applyLayout;