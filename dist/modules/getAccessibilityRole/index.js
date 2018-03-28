var getAccessibilityRole=function getAccessibilityRole(_ref)





{var accessibilityComponentType=_ref.accessibilityComponentType;var accessibilityRole=_ref.accessibilityRole;var accessibilityTraits=_ref.accessibilityTraits;
if(accessibilityRole){
return accessibilityRole;
}else if(accessibilityComponentType==='button'||accessibilityTraits==='button'){
return'button';
}
};

module.exports=getAccessibilityRole;