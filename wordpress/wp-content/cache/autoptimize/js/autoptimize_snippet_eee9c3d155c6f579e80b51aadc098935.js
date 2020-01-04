_u=typeof _=='function'&&_.noConflict();;(function(){var undefined;var arrayPool=[],objectPool=[];var idCounter=0;var keyPrefix=+new Date+'';var largeArraySize=75;var maxPoolSize=40;var whitespace=(' \t\x0B\f\xA0\ufeff'+'\n\r\u2028\u2029'+'\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000');var reEmptyStringLeading=/\b__p \+= '';/g,reEmptyStringMiddle=/\b(__p \+=) '' \+/g,reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;var reFlags=/\w*$/;var reFuncName=/^\s*function[ \n\r\t]+\w/;var reInterpolate=/<%=([\s\S]+?)%>/g;var reLeadingSpacesAndZeros=RegExp('^['+whitespace+']*0+(?=.$)');var reNoMatch=/($^)/;var reThis=/\bthis\b/;var reUnescapedString=/['\n\r\t\u2028\u2029\\]/g;var contextProps=['Array','Boolean','Date','Function','Math','Number','Object','RegExp','String','_','attachEvent','clearTimeout','isFinite','isNaN','parseInt','setTimeout'];var templateCounter=0;var argsClass='[object Arguments]',arrayClass='[object Array]',boolClass='[object Boolean]',dateClass='[object Date]',funcClass='[object Function]',numberClass='[object Number]',objectClass='[object Object]',regexpClass='[object RegExp]',stringClass='[object String]';var cloneableClasses={};cloneableClasses[funcClass]=false;cloneableClasses[argsClass]=cloneableClasses[arrayClass]=cloneableClasses[boolClass]=cloneableClasses[dateClass]=cloneableClasses[numberClass]=cloneableClasses[objectClass]=cloneableClasses[regexpClass]=cloneableClasses[stringClass]=true;var debounceOptions={'leading':false,'maxWait':0,'trailing':false};var descriptor={'configurable':false,'enumerable':false,'value':null,'writable':false};var objectTypes={'boolean':false,'function':true,'object':true,'number':false,'string':false,'undefined':false};var stringEscapes={'\\':'\\',"'":"'",'\n':'n','\r':'r','\t':'t','\u2028':'u2028','\u2029':'u2029'};var root=(objectTypes[typeof window]&&window)||this;var freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType&&exports;var freeModule=objectTypes[typeof module]&&module&&!module.nodeType&&module;var moduleExports=freeModule&&freeModule.exports===freeExports&&freeExports;var freeGlobal=objectTypes[typeof global]&&global;if(freeGlobal&&(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal)){root=freeGlobal;}
function baseIndexOf(array,value,fromIndex){var index=(fromIndex||0)-1,length=array?array.length:0;while(++index<length){if(array[index]===value){return index;}}
return-1;}
function cacheIndexOf(cache,value){var type=typeof value;cache=cache.cache;if(type=='boolean'||value==null){return cache[value]?0:-1;}
if(type!='number'&&type!='string'){type='object';}
var key=type=='number'?value:keyPrefix+value;cache=(cache=cache[type])&&cache[key];return type=='object'?(cache&&baseIndexOf(cache,value)>-1?0:-1):(cache?0:-1);}
function cachePush(value){var cache=this.cache,type=typeof value;if(type=='boolean'||value==null){cache[value]=true;}else{if(type!='number'&&type!='string'){type='object';}
var key=type=='number'?value:keyPrefix+value,typeCache=cache[type]||(cache[type]={});if(type=='object'){(typeCache[key]||(typeCache[key]=[])).push(value);}else{typeCache[key]=true;}}}
function charAtCallback(value){return value.charCodeAt(0);}
function compareAscending(a,b){var ac=a.criteria,bc=b.criteria,index=-1,length=ac.length;while(++index<length){var value=ac[index],other=bc[index];if(value!==other){if(value>other||typeof value=='undefined'){return 1;}
if(value<other||typeof other=='undefined'){return-1;}}}
return a.index-b.index;}
function createCache(array){var index=-1,length=array.length,first=array[0],mid=array[(length/2)|0],last=array[length-1];if(first&&typeof first=='object'&&mid&&typeof mid=='object'&&last&&typeof last=='object'){return false;}
var cache=getObject();cache['false']=cache['null']=cache['true']=cache['undefined']=false;var result=getObject();result.array=array;result.cache=cache;result.push=cachePush;while(++index<length){result.push(array[index]);}
return result;}
function escapeStringChar(match){return'\\'+stringEscapes[match];}
function getArray(){return arrayPool.pop()||[];}
function getObject(){return objectPool.pop()||{'array':null,'cache':null,'criteria':null,'false':false,'index':0,'null':false,'number':null,'object':null,'push':null,'string':null,'true':false,'undefined':false,'value':null};}
function releaseArray(array){array.length=0;if(arrayPool.length<maxPoolSize){arrayPool.push(array);}}
function releaseObject(object){var cache=object.cache;if(cache){releaseObject(cache);}
object.array=object.cache=object.criteria=object.object=object.number=object.string=object.value=null;if(objectPool.length<maxPoolSize){objectPool.push(object);}}
function slice(array,start,end){start||(start=0);if(typeof end=='undefined'){end=array?array.length:0;}
var index=-1,length=end-start||0,result=Array(length<0?0:length);while(++index<length){result[index]=array[start+index];}
return result;}
function runInContext(context){context=context?_.defaults(root.Object(),context,_.pick(root,contextProps)):root;var Array=context.Array,Boolean=context.Boolean,Date=context.Date,Function=context.Function,Math=context.Math,Number=context.Number,Object=context.Object,RegExp=context.RegExp,String=context.String,TypeError=context.TypeError;var arrayRef=[];var objectProto=Object.prototype;var oldDash=context._;var toString=objectProto.toString;var reNative=RegExp('^'+
String(toString).replace(/[.*+?^${}()|[\]\\]/g,'\\$&').replace(/toString| for [^\]]+/g,'.*?')+'$');var ceil=Math.ceil,clearTimeout=context.clearTimeout,floor=Math.floor,fnToString=Function.prototype.toString,getPrototypeOf=isNative(getPrototypeOf=Object.getPrototypeOf)&&getPrototypeOf,hasOwnProperty=objectProto.hasOwnProperty,push=arrayRef.push,setTimeout=context.setTimeout,splice=arrayRef.splice,unshift=arrayRef.unshift;var defineProperty=(function(){try{var o={},func=isNative(func=Object.defineProperty)&&func,result=func(o,o,o)&&func;}catch(e){}
return result;}());var nativeCreate=isNative(nativeCreate=Object.create)&&nativeCreate,nativeIsArray=isNative(nativeIsArray=Array.isArray)&&nativeIsArray,nativeIsFinite=context.isFinite,nativeIsNaN=context.isNaN,nativeKeys=isNative(nativeKeys=Object.keys)&&nativeKeys,nativeMax=Math.max,nativeMin=Math.min,nativeParseInt=context.parseInt,nativeRandom=Math.random;var ctorByClass={};ctorByClass[arrayClass]=Array;ctorByClass[boolClass]=Boolean;ctorByClass[dateClass]=Date;ctorByClass[funcClass]=Function;ctorByClass[objectClass]=Object;ctorByClass[numberClass]=Number;ctorByClass[regexpClass]=RegExp;ctorByClass[stringClass]=String;function lodash(value){return(value&&typeof value=='object'&&!isArray(value)&&hasOwnProperty.call(value,'__wrapped__'))?value:new lodashWrapper(value);}
function lodashWrapper(value,chainAll){this.__chain__=!!chainAll;this.__wrapped__=value;}
lodashWrapper.prototype=lodash.prototype;var support=lodash.support={};support.funcDecomp=!isNative(context.WinRTError)&&reThis.test(runInContext);support.funcNames=typeof Function.name=='string';lodash.templateSettings={'escape':/<%-([\s\S]+?)%>/g,'evaluate':/<%([\s\S]+?)%>/g,'interpolate':reInterpolate,'variable':'','imports':{'_':lodash}};function baseBind(bindData){var func=bindData[0],partialArgs=bindData[2],thisArg=bindData[4];function bound(){if(partialArgs){var args=slice(partialArgs);push.apply(args,arguments);}
if(this instanceof bound){var thisBinding=baseCreate(func.prototype),result=func.apply(thisBinding,args||arguments);return isObject(result)?result:thisBinding;}
return func.apply(thisArg,args||arguments);}
setBindData(bound,bindData);return bound;}
function baseClone(value,isDeep,callback,stackA,stackB){if(callback){var result=callback(value);if(typeof result!='undefined'){return result;}}
var isObj=isObject(value);if(isObj){var className=toString.call(value);if(!cloneableClasses[className]){return value;}
var ctor=ctorByClass[className];switch(className){case boolClass:case dateClass:return new ctor(+value);case numberClass:case stringClass:return new ctor(value);case regexpClass:result=ctor(value.source,reFlags.exec(value));result.lastIndex=value.lastIndex;return result;}}else{return value;}
var isArr=isArray(value);if(isDeep){var initedStack=!stackA;stackA||(stackA=getArray());stackB||(stackB=getArray());var length=stackA.length;while(length--){if(stackA[length]==value){return stackB[length];}}
result=isArr?ctor(value.length):{};}
else{result=isArr?slice(value):assign({},value);}
if(isArr){if(hasOwnProperty.call(value,'index')){result.index=value.index;}
if(hasOwnProperty.call(value,'input')){result.input=value.input;}}
if(!isDeep){return result;}
stackA.push(value);stackB.push(result);(isArr?forEach:forOwn)(value,function(objValue,key){result[key]=baseClone(objValue,isDeep,callback,stackA,stackB);});if(initedStack){releaseArray(stackA);releaseArray(stackB);}
return result;}
function baseCreate(prototype,properties){return isObject(prototype)?nativeCreate(prototype):{};}
if(!nativeCreate){baseCreate=(function(){function Object(){}
return function(prototype){if(isObject(prototype)){Object.prototype=prototype;var result=new Object;Object.prototype=null;}
return result||context.Object();};}());}
function baseCreateCallback(func,thisArg,argCount){if(typeof func!='function'){return identity;}
if(typeof thisArg=='undefined'||!('prototype'in func)){return func;}
var bindData=func.__bindData__;if(typeof bindData=='undefined'){if(support.funcNames){bindData=!func.name;}
bindData=bindData||!support.funcDecomp;if(!bindData){var source=fnToString.call(func);if(!support.funcNames){bindData=!reFuncName.test(source);}
if(!bindData){bindData=reThis.test(source);setBindData(func,bindData);}}}
if(bindData===false||(bindData!==true&&bindData[1]&1)){return func;}
switch(argCount){case 1:return function(value){return func.call(thisArg,value);};case 2:return function(a,b){return func.call(thisArg,a,b);};case 3:return function(value,index,collection){return func.call(thisArg,value,index,collection);};case 4:return function(accumulator,value,index,collection){return func.call(thisArg,accumulator,value,index,collection);};}
return bind(func,thisArg);}
function baseCreateWrapper(bindData){var func=bindData[0],bitmask=bindData[1],partialArgs=bindData[2],partialRightArgs=bindData[3],thisArg=bindData[4],arity=bindData[5];var isBind=bitmask&1,isBindKey=bitmask&2,isCurry=bitmask&4,isCurryBound=bitmask&8,key=func;function bound(){var thisBinding=isBind?thisArg:this;if(partialArgs){var args=slice(partialArgs);push.apply(args,arguments);}
if(partialRightArgs||isCurry){args||(args=slice(arguments));if(partialRightArgs){push.apply(args,partialRightArgs);}
if(isCurry&&args.length<arity){bitmask|=16&~32;return baseCreateWrapper([func,(isCurryBound?bitmask:bitmask&~3),args,null,thisArg,arity]);}}
args||(args=arguments);if(isBindKey){func=thisBinding[key];}
if(this instanceof bound){thisBinding=baseCreate(func.prototype);var result=func.apply(thisBinding,args);return isObject(result)?result:thisBinding;}
return func.apply(thisBinding,args);}
setBindData(bound,bindData);return bound;}
function baseDifference(array,values){var index=-1,indexOf=getIndexOf(),length=array?array.length:0,isLarge=length>=largeArraySize&&indexOf===baseIndexOf,result=[];if(isLarge){var cache=createCache(values);if(cache){indexOf=cacheIndexOf;values=cache;}else{isLarge=false;}}
while(++index<length){var value=array[index];if(indexOf(values,value)<0){result.push(value);}}
if(isLarge){releaseObject(values);}
return result;}
function baseFlatten(array,isShallow,isStrict,fromIndex){var index=(fromIndex||0)-1,length=array?array.length:0,result=[];while(++index<length){var value=array[index];if(value&&typeof value=='object'&&typeof value.length=='number'&&(isArray(value)||isArguments(value))){if(!isShallow){value=baseFlatten(value,isShallow,isStrict);}
var valIndex=-1,valLength=value.length,resIndex=result.length;result.length+=valLength;while(++valIndex<valLength){result[resIndex++]=value[valIndex];}}else if(!isStrict){result.push(value);}}
return result;}
function baseIsEqual(a,b,callback,isWhere,stackA,stackB){if(callback){var result=callback(a,b);if(typeof result!='undefined'){return!!result;}}
if(a===b){return a!==0||(1/a==1/b);}
var type=typeof a,otherType=typeof b;if(a===a&&!(a&&objectTypes[type])&&!(b&&objectTypes[otherType])){return false;}
if(a==null||b==null){return a===b;}
var className=toString.call(a),otherClass=toString.call(b);if(className==argsClass){className=objectClass;}
if(otherClass==argsClass){otherClass=objectClass;}
if(className!=otherClass){return false;}
switch(className){case boolClass:case dateClass:return+a==+b;case numberClass:return(a!=+a)?b!=+b:(a==0?(1/a==1/b):a==+b);case regexpClass:case stringClass:return a==String(b);}
var isArr=className==arrayClass;if(!isArr){var aWrapped=hasOwnProperty.call(a,'__wrapped__'),bWrapped=hasOwnProperty.call(b,'__wrapped__');if(aWrapped||bWrapped){return baseIsEqual(aWrapped?a.__wrapped__:a,bWrapped?b.__wrapped__:b,callback,isWhere,stackA,stackB);}
if(className!=objectClass){return false;}
var ctorA=a.constructor,ctorB=b.constructor;if(ctorA!=ctorB&&!(isFunction(ctorA)&&ctorA instanceof ctorA&&isFunction(ctorB)&&ctorB instanceof ctorB)&&('constructor'in a&&'constructor'in b)){return false;}}
var initedStack=!stackA;stackA||(stackA=getArray());stackB||(stackB=getArray());var length=stackA.length;while(length--){if(stackA[length]==a){return stackB[length]==b;}}
var size=0;result=true;stackA.push(a);stackB.push(b);if(isArr){length=a.length;size=b.length;result=size==length;if(result||isWhere){while(size--){var index=length,value=b[size];if(isWhere){while(index--){if((result=baseIsEqual(a[index],value,callback,isWhere,stackA,stackB))){break;}}}else if(!(result=baseIsEqual(a[size],value,callback,isWhere,stackA,stackB))){break;}}}}
else{forIn(b,function(value,key,b){if(hasOwnProperty.call(b,key)){size++;return(result=hasOwnProperty.call(a,key)&&baseIsEqual(a[key],value,callback,isWhere,stackA,stackB));}});if(result&&!isWhere){forIn(a,function(value,key,a){if(hasOwnProperty.call(a,key)){return(result=--size>-1);}});}}
stackA.pop();stackB.pop();if(initedStack){releaseArray(stackA);releaseArray(stackB);}
return result;}
function baseMerge(object,source,callback,stackA,stackB){(isArray(source)?forEach:forOwn)(source,function(source,key){var found,isArr,result=source,value=object[key];if(source&&((isArr=isArray(source))||isPlainObject(source))){var stackLength=stackA.length;while(stackLength--){if((found=stackA[stackLength]==source)){value=stackB[stackLength];break;}}
if(!found){var isShallow;if(callback){result=callback(value,source);if((isShallow=typeof result!='undefined')){value=result;}}
if(!isShallow){value=isArr?(isArray(value)?value:[]):(isPlainObject(value)?value:{});}
stackA.push(source);stackB.push(value);if(!isShallow){baseMerge(value,source,callback,stackA,stackB);}}}
else{if(callback){result=callback(value,source);if(typeof result=='undefined'){result=source;}}
if(typeof result!='undefined'){value=result;}}
object[key]=value;});}
function baseRandom(min,max){return min+floor(nativeRandom()*(max-min+1));}
function baseUniq(array,isSorted,callback){var index=-1,indexOf=getIndexOf(),length=array?array.length:0,result=[];var isLarge=!isSorted&&length>=largeArraySize&&indexOf===baseIndexOf,seen=(callback||isLarge)?getArray():result;if(isLarge){var cache=createCache(seen);indexOf=cacheIndexOf;seen=cache;}
while(++index<length){var value=array[index],computed=callback?callback(value,index,array):value;if(isSorted?!index||seen[seen.length-1]!==computed:indexOf(seen,computed)<0){if(callback||isLarge){seen.push(computed);}
result.push(value);}}
if(isLarge){releaseArray(seen.array);releaseObject(seen);}else if(callback){releaseArray(seen);}
return result;}
function createAggregator(setter){return function(collection,callback,thisArg){var result={};callback=lodash.createCallback(callback,thisArg,3);var index=-1,length=collection?collection.length:0;if(typeof length=='number'){while(++index<length){var value=collection[index];setter(result,value,callback(value,index,collection),collection);}}else{forOwn(collection,function(value,key,collection){setter(result,value,callback(value,key,collection),collection);});}
return result;};}
function createWrapper(func,bitmask,partialArgs,partialRightArgs,thisArg,arity){var isBind=bitmask&1,isBindKey=bitmask&2,isCurry=bitmask&4,isCurryBound=bitmask&8,isPartial=bitmask&16,isPartialRight=bitmask&32;if(!isBindKey&&!isFunction(func)){throw new TypeError;}
if(isPartial&&!partialArgs.length){bitmask&=~16;isPartial=partialArgs=false;}
if(isPartialRight&&!partialRightArgs.length){bitmask&=~32;isPartialRight=partialRightArgs=false;}
var bindData=func&&func.__bindData__;if(bindData&&bindData!==true){bindData=slice(bindData);if(bindData[2]){bindData[2]=slice(bindData[2]);}
if(bindData[3]){bindData[3]=slice(bindData[3]);}
if(isBind&&!(bindData[1]&1)){bindData[4]=thisArg;}
if(!isBind&&bindData[1]&1){bitmask|=8;}
if(isCurry&&!(bindData[1]&4)){bindData[5]=arity;}
if(isPartial){push.apply(bindData[2]||(bindData[2]=[]),partialArgs);}
if(isPartialRight){unshift.apply(bindData[3]||(bindData[3]=[]),partialRightArgs);}
bindData[1]|=bitmask;return createWrapper.apply(null,bindData);}
var creater=(bitmask==1||bitmask===17)?baseBind:baseCreateWrapper;return creater([func,bitmask,partialArgs,partialRightArgs,thisArg,arity]);}
function escapeHtmlChar(match){return htmlEscapes[match];}
function getIndexOf(){var result=(result=lodash.indexOf)===indexOf?baseIndexOf:result;return result;}
function isNative(value){return typeof value=='function'&&reNative.test(value);}
var setBindData=!defineProperty?noop:function(func,value){descriptor.value=value;defineProperty(func,'__bindData__',descriptor);};function shimIsPlainObject(value){var ctor,result;if(!(value&&toString.call(value)==objectClass)||(ctor=value.constructor,isFunction(ctor)&&!(ctor instanceof ctor))){return false;}
forIn(value,function(value,key){result=key;});return typeof result=='undefined'||hasOwnProperty.call(value,result);}
function unescapeHtmlChar(match){return htmlUnescapes[match];}
function isArguments(value){return value&&typeof value=='object'&&typeof value.length=='number'&&toString.call(value)==argsClass||false;}
var isArray=nativeIsArray||function(value){return value&&typeof value=='object'&&typeof value.length=='number'&&toString.call(value)==arrayClass||false;};var shimKeys=function(object){var index,iterable=object,result=[];if(!iterable)return result;if(!(objectTypes[typeof object]))return result;for(index in iterable){if(hasOwnProperty.call(iterable,index)){result.push(index);}}
return result};var keys=!nativeKeys?shimKeys:function(object){if(!isObject(object)){return[];}
return nativeKeys(object);};var htmlEscapes={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};var htmlUnescapes=invert(htmlEscapes);var reEscapedHtml=RegExp('('+keys(htmlUnescapes).join('|')+')','g'),reUnescapedHtml=RegExp('['+keys(htmlEscapes).join('')+']','g');var assign=function(object,source,guard){var index,iterable=object,result=iterable;if(!iterable)return result;var args=arguments,argsIndex=0,argsLength=typeof guard=='number'?2:args.length;if(argsLength>3&&typeof args[argsLength-2]=='function'){var callback=baseCreateCallback(args[--argsLength-1],args[argsLength--],2);}else if(argsLength>2&&typeof args[argsLength-1]=='function'){callback=args[--argsLength];}
while(++argsIndex<argsLength){iterable=args[argsIndex];if(iterable&&objectTypes[typeof iterable]){var ownIndex=-1,ownProps=objectTypes[typeof iterable]&&keys(iterable),length=ownProps?ownProps.length:0;while(++ownIndex<length){index=ownProps[ownIndex];result[index]=callback?callback(result[index],iterable[index]):iterable[index];}}}
return result};function clone(value,isDeep,callback,thisArg){if(typeof isDeep!='boolean'&&isDeep!=null){thisArg=callback;callback=isDeep;isDeep=false;}
return baseClone(value,isDeep,typeof callback=='function'&&baseCreateCallback(callback,thisArg,1));}
function cloneDeep(value,callback,thisArg){return baseClone(value,true,typeof callback=='function'&&baseCreateCallback(callback,thisArg,1));}
function create(prototype,properties){var result=baseCreate(prototype);return properties?assign(result,properties):result;}
var defaults=function(object,source,guard){var index,iterable=object,result=iterable;if(!iterable)return result;var args=arguments,argsIndex=0,argsLength=typeof guard=='number'?2:args.length;while(++argsIndex<argsLength){iterable=args[argsIndex];if(iterable&&objectTypes[typeof iterable]){var ownIndex=-1,ownProps=objectTypes[typeof iterable]&&keys(iterable),length=ownProps?ownProps.length:0;while(++ownIndex<length){index=ownProps[ownIndex];if(typeof result[index]=='undefined')result[index]=iterable[index];}}}
return result};function findKey(object,callback,thisArg){var result;callback=lodash.createCallback(callback,thisArg,3);forOwn(object,function(value,key,object){if(callback(value,key,object)){result=key;return false;}});return result;}
function findLastKey(object,callback,thisArg){var result;callback=lodash.createCallback(callback,thisArg,3);forOwnRight(object,function(value,key,object){if(callback(value,key,object)){result=key;return false;}});return result;}
var forIn=function(collection,callback,thisArg){var index,iterable=collection,result=iterable;if(!iterable)return result;if(!objectTypes[typeof iterable])return result;callback=callback&&typeof thisArg=='undefined'?callback:baseCreateCallback(callback,thisArg,3);for(index in iterable){if(callback(iterable[index],index,collection)===false)return result;}
return result};function forInRight(object,callback,thisArg){var pairs=[];forIn(object,function(value,key){pairs.push(key,value);});var length=pairs.length;callback=baseCreateCallback(callback,thisArg,3);while(length--){if(callback(pairs[length--],pairs[length],object)===false){break;}}
return object;}
var forOwn=function(collection,callback,thisArg){var index,iterable=collection,result=iterable;if(!iterable)return result;if(!objectTypes[typeof iterable])return result;callback=callback&&typeof thisArg=='undefined'?callback:baseCreateCallback(callback,thisArg,3);var ownIndex=-1,ownProps=objectTypes[typeof iterable]&&keys(iterable),length=ownProps?ownProps.length:0;while(++ownIndex<length){index=ownProps[ownIndex];if(callback(iterable[index],index,collection)===false)return result;}
return result};function forOwnRight(object,callback,thisArg){var props=keys(object),length=props.length;callback=baseCreateCallback(callback,thisArg,3);while(length--){var key=props[length];if(callback(object[key],key,object)===false){break;}}
return object;}
function functions(object){var result=[];forIn(object,function(value,key){if(isFunction(value)){result.push(key);}});return result.sort();}
function has(object,key){return object?hasOwnProperty.call(object,key):false;}
function invert(object){var index=-1,props=keys(object),length=props.length,result={};while(++index<length){var key=props[index];result[object[key]]=key;}
return result;}
function isBoolean(value){return value===true||value===false||value&&typeof value=='object'&&toString.call(value)==boolClass||false;}
function isDate(value){return value&&typeof value=='object'&&toString.call(value)==dateClass||false;}
function isElement(value){return value&&value.nodeType===1||false;}
function isEmpty(value){var result=true;if(!value){return result;}
var className=toString.call(value),length=value.length;if((className==arrayClass||className==stringClass||className==argsClass)||(className==objectClass&&typeof length=='number'&&isFunction(value.splice))){return!length;}
forOwn(value,function(){return(result=false);});return result;}
function isEqual(a,b,callback,thisArg){return baseIsEqual(a,b,typeof callback=='function'&&baseCreateCallback(callback,thisArg,2));}
function isFinite(value){return nativeIsFinite(value)&&!nativeIsNaN(parseFloat(value));}
function isFunction(value){return typeof value=='function';}
function isObject(value){return!!(value&&objectTypes[typeof value]);}
function isNaN(value){return isNumber(value)&&value!=+value;}
function isNull(value){return value===null;}
function isNumber(value){return typeof value=='number'||value&&typeof value=='object'&&toString.call(value)==numberClass||false;}
var isPlainObject=!getPrototypeOf?shimIsPlainObject:function(value){if(!(value&&toString.call(value)==objectClass)){return false;}
var valueOf=value.valueOf,objProto=isNative(valueOf)&&(objProto=getPrototypeOf(valueOf))&&getPrototypeOf(objProto);return objProto?(value==objProto||getPrototypeOf(value)==objProto):shimIsPlainObject(value);};function isRegExp(value){return value&&typeof value=='object'&&toString.call(value)==regexpClass||false;}
function isString(value){return typeof value=='string'||value&&typeof value=='object'&&toString.call(value)==stringClass||false;}
function isUndefined(value){return typeof value=='undefined';}
function mapValues(object,callback,thisArg){var result={};callback=lodash.createCallback(callback,thisArg,3);forOwn(object,function(value,key,object){result[key]=callback(value,key,object);});return result;}
function merge(object){var args=arguments,length=2;if(!isObject(object)){return object;}
if(typeof args[2]!='number'){length=args.length;}
if(length>3&&typeof args[length-2]=='function'){var callback=baseCreateCallback(args[--length-1],args[length--],2);}else if(length>2&&typeof args[length-1]=='function'){callback=args[--length];}
var sources=slice(arguments,1,length),index=-1,stackA=getArray(),stackB=getArray();while(++index<length){baseMerge(object,sources[index],callback,stackA,stackB);}
releaseArray(stackA);releaseArray(stackB);return object;}
function omit(object,callback,thisArg){var result={};if(typeof callback!='function'){var props=[];forIn(object,function(value,key){props.push(key);});props=baseDifference(props,baseFlatten(arguments,true,false,1));var index=-1,length=props.length;while(++index<length){var key=props[index];result[key]=object[key];}}else{callback=lodash.createCallback(callback,thisArg,3);forIn(object,function(value,key,object){if(!callback(value,key,object)){result[key]=value;}});}
return result;}
function pairs(object){var index=-1,props=keys(object),length=props.length,result=Array(length);while(++index<length){var key=props[index];result[index]=[key,object[key]];}
return result;}
function pick(object,callback,thisArg){var result={};if(typeof callback!='function'){var index=-1,props=baseFlatten(arguments,true,false,1),length=isObject(object)?props.length:0;while(++index<length){var key=props[index];if(key in object){result[key]=object[key];}}}else{callback=lodash.createCallback(callback,thisArg,3);forIn(object,function(value,key,object){if(callback(value,key,object)){result[key]=value;}});}
return result;}
function transform(object,callback,accumulator,thisArg){var isArr=isArray(object);if(accumulator==null){if(isArr){accumulator=[];}else{var ctor=object&&object.constructor,proto=ctor&&ctor.prototype;accumulator=baseCreate(proto);}}
if(callback){callback=lodash.createCallback(callback,thisArg,4);(isArr?forEach:forOwn)(object,function(value,index,object){return callback(accumulator,value,index,object);});}
return accumulator;}
function values(object){var index=-1,props=keys(object),length=props.length,result=Array(length);while(++index<length){result[index]=object[props[index]];}
return result;}
function at(collection){var args=arguments,index=-1,props=baseFlatten(args,true,false,1),length=(args[2]&&args[2][args[1]]===collection)?1:props.length,result=Array(length);while(++index<length){result[index]=collection[props[index]];}
return result;}
function contains(collection,target,fromIndex){var index=-1,indexOf=getIndexOf(),length=collection?collection.length:0,result=false;fromIndex=(fromIndex<0?nativeMax(0,length+fromIndex):fromIndex)||0;if(isArray(collection)){result=indexOf(collection,target,fromIndex)>-1;}else if(typeof length=='number'){result=(isString(collection)?collection.indexOf(target,fromIndex):indexOf(collection,target,fromIndex))>-1;}else{forOwn(collection,function(value){if(++index>=fromIndex){return!(result=value===target);}});}
return result;}
var countBy=createAggregator(function(result,value,key){(hasOwnProperty.call(result,key)?result[key]++:result[key]=1);});function every(collection,callback,thisArg){var result=true;callback=lodash.createCallback(callback,thisArg,3);var index=-1,length=collection?collection.length:0;if(typeof length=='number'){while(++index<length){if(!(result=!!callback(collection[index],index,collection))){break;}}}else{forOwn(collection,function(value,index,collection){return(result=!!callback(value,index,collection));});}
return result;}
function filter(collection,callback,thisArg){var result=[];callback=lodash.createCallback(callback,thisArg,3);var index=-1,length=collection?collection.length:0;if(typeof length=='number'){while(++index<length){var value=collection[index];if(callback(value,index,collection)){result.push(value);}}}else{forOwn(collection,function(value,index,collection){if(callback(value,index,collection)){result.push(value);}});}
return result;}
function find(collection,callback,thisArg){callback=lodash.createCallback(callback,thisArg,3);var index=-1,length=collection?collection.length:0;if(typeof length=='number'){while(++index<length){var value=collection[index];if(callback(value,index,collection)){return value;}}}else{var result;forOwn(collection,function(value,index,collection){if(callback(value,index,collection)){result=value;return false;}});return result;}}
function findLast(collection,callback,thisArg){var result;callback=lodash.createCallback(callback,thisArg,3);forEachRight(collection,function(value,index,collection){if(callback(value,index,collection)){result=value;return false;}});return result;}
function forEach(collection,callback,thisArg){var index=-1,length=collection?collection.length:0;callback=callback&&typeof thisArg=='undefined'?callback:baseCreateCallback(callback,thisArg,3);if(typeof length=='number'){while(++index<length){if(callback(collection[index],index,collection)===false){break;}}}else{forOwn(collection,callback);}
return collection;}
function forEachRight(collection,callback,thisArg){var length=collection?collection.length:0;callback=callback&&typeof thisArg=='undefined'?callback:baseCreateCallback(callback,thisArg,3);if(typeof length=='number'){while(length--){if(callback(collection[length],length,collection)===false){break;}}}else{var props=keys(collection);length=props.length;forOwn(collection,function(value,key,collection){key=props?props[--length]:--length;return callback(collection[key],key,collection);});}
return collection;}
var groupBy=createAggregator(function(result,value,key){(hasOwnProperty.call(result,key)?result[key]:result[key]=[]).push(value);});var indexBy=createAggregator(function(result,value,key){result[key]=value;});function invoke(collection,methodName){var args=slice(arguments,2),index=-1,isFunc=typeof methodName=='function',length=collection?collection.length:0,result=Array(typeof length=='number'?length:0);forEach(collection,function(value){result[++index]=(isFunc?methodName:value[methodName]).apply(value,args);});return result;}
function map(collection,callback,thisArg){var index=-1,length=collection?collection.length:0;callback=lodash.createCallback(callback,thisArg,3);if(typeof length=='number'){var result=Array(length);while(++index<length){result[index]=callback(collection[index],index,collection);}}else{result=[];forOwn(collection,function(value,key,collection){result[++index]=callback(value,key,collection);});}
return result;}
function max(collection,callback,thisArg){var computed=-Infinity,result=computed;if(typeof callback!='function'&&thisArg&&thisArg[callback]===collection){callback=null;}
if(callback==null&&isArray(collection)){var index=-1,length=collection.length;while(++index<length){var value=collection[index];if(value>result){result=value;}}}else{callback=(callback==null&&isString(collection))?charAtCallback:lodash.createCallback(callback,thisArg,3);forEach(collection,function(value,index,collection){var current=callback(value,index,collection);if(current>computed){computed=current;result=value;}});}
return result;}
function min(collection,callback,thisArg){var computed=Infinity,result=computed;if(typeof callback!='function'&&thisArg&&thisArg[callback]===collection){callback=null;}
if(callback==null&&isArray(collection)){var index=-1,length=collection.length;while(++index<length){var value=collection[index];if(value<result){result=value;}}}else{callback=(callback==null&&isString(collection))?charAtCallback:lodash.createCallback(callback,thisArg,3);forEach(collection,function(value,index,collection){var current=callback(value,index,collection);if(current<computed){computed=current;result=value;}});}
return result;}
var pluck=map;function reduce(collection,callback,accumulator,thisArg){if(!collection)return accumulator;var noaccum=arguments.length<3;callback=lodash.createCallback(callback,thisArg,4);var index=-1,length=collection.length;if(typeof length=='number'){if(noaccum){accumulator=collection[++index];}
while(++index<length){accumulator=callback(accumulator,collection[index],index,collection);}}else{forOwn(collection,function(value,index,collection){accumulator=noaccum?(noaccum=false,value):callback(accumulator,value,index,collection)});}
return accumulator;}
function reduceRight(collection,callback,accumulator,thisArg){var noaccum=arguments.length<3;callback=lodash.createCallback(callback,thisArg,4);forEachRight(collection,function(value,index,collection){accumulator=noaccum?(noaccum=false,value):callback(accumulator,value,index,collection);});return accumulator;}
function reject(collection,callback,thisArg){callback=lodash.createCallback(callback,thisArg,3);return filter(collection,function(value,index,collection){return!callback(value,index,collection);});}
function sample(collection,n,guard){if(collection&&typeof collection.length!='number'){collection=values(collection);}
if(n==null||guard){return collection?collection[baseRandom(0,collection.length-1)]:undefined;}
var result=shuffle(collection);result.length=nativeMin(nativeMax(0,n),result.length);return result;}
function shuffle(collection){var index=-1,length=collection?collection.length:0,result=Array(typeof length=='number'?length:0);forEach(collection,function(value){var rand=baseRandom(0,++index);result[index]=result[rand];result[rand]=value;});return result;}
function size(collection){var length=collection?collection.length:0;return typeof length=='number'?length:keys(collection).length;}
function some(collection,callback,thisArg){var result;callback=lodash.createCallback(callback,thisArg,3);var index=-1,length=collection?collection.length:0;if(typeof length=='number'){while(++index<length){if((result=callback(collection[index],index,collection))){break;}}}else{forOwn(collection,function(value,index,collection){return!(result=callback(value,index,collection));});}
return!!result;}
function sortBy(collection,callback,thisArg){var index=-1,isArr=isArray(callback),length=collection?collection.length:0,result=Array(typeof length=='number'?length:0);if(!isArr){callback=lodash.createCallback(callback,thisArg,3);}
forEach(collection,function(value,key,collection){var object=result[++index]=getObject();if(isArr){object.criteria=map(callback,function(key){return value[key];});}else{(object.criteria=getArray())[0]=callback(value,key,collection);}
object.index=index;object.value=value;});length=result.length;result.sort(compareAscending);while(length--){var object=result[length];result[length]=object.value;if(!isArr){releaseArray(object.criteria);}
releaseObject(object);}
return result;}
function toArray(collection){if(collection&&typeof collection.length=='number'){return slice(collection);}
return values(collection);}
var where=filter;function compact(array){var index=-1,length=array?array.length:0,result=[];while(++index<length){var value=array[index];if(value){result.push(value);}}
return result;}
function difference(array){return baseDifference(array,baseFlatten(arguments,true,true,1));}
function findIndex(array,callback,thisArg){var index=-1,length=array?array.length:0;callback=lodash.createCallback(callback,thisArg,3);while(++index<length){if(callback(array[index],index,array)){return index;}}
return-1;}
function findLastIndex(array,callback,thisArg){var length=array?array.length:0;callback=lodash.createCallback(callback,thisArg,3);while(length--){if(callback(array[length],length,array)){return length;}}
return-1;}
function first(array,callback,thisArg){var n=0,length=array?array.length:0;if(typeof callback!='number'&&callback!=null){var index=-1;callback=lodash.createCallback(callback,thisArg,3);while(++index<length&&callback(array[index],index,array)){n++;}}else{n=callback;if(n==null||thisArg){return array?array[0]:undefined;}}
return slice(array,0,nativeMin(nativeMax(0,n),length));}
function flatten(array,isShallow,callback,thisArg){if(typeof isShallow!='boolean'&&isShallow!=null){thisArg=callback;callback=(typeof isShallow!='function'&&thisArg&&thisArg[isShallow]===array)?null:isShallow;isShallow=false;}
if(callback!=null){array=map(array,callback,thisArg);}
return baseFlatten(array,isShallow);}
function indexOf(array,value,fromIndex){if(typeof fromIndex=='number'){var length=array?array.length:0;fromIndex=(fromIndex<0?nativeMax(0,length+fromIndex):fromIndex||0);}else if(fromIndex){var index=sortedIndex(array,value);return array[index]===value?index:-1;}
return baseIndexOf(array,value,fromIndex);}
function initial(array,callback,thisArg){var n=0,length=array?array.length:0;if(typeof callback!='number'&&callback!=null){var index=length;callback=lodash.createCallback(callback,thisArg,3);while(index--&&callback(array[index],index,array)){n++;}}else{n=(callback==null||thisArg)?1:callback||n;}
return slice(array,0,nativeMin(nativeMax(0,length-n),length));}
function intersection(){var args=[],argsIndex=-1,argsLength=arguments.length,caches=getArray(),indexOf=getIndexOf(),trustIndexOf=indexOf===baseIndexOf,seen=getArray();while(++argsIndex<argsLength){var value=arguments[argsIndex];if(isArray(value)||isArguments(value)){args.push(value);caches.push(trustIndexOf&&value.length>=largeArraySize&&createCache(argsIndex?args[argsIndex]:seen));}}
var array=args[0],index=-1,length=array?array.length:0,result=[];outer:while(++index<length){var cache=caches[0];value=array[index];if((cache?cacheIndexOf(cache,value):indexOf(seen,value))<0){argsIndex=argsLength;(cache||seen).push(value);while(--argsIndex){cache=caches[argsIndex];if((cache?cacheIndexOf(cache,value):indexOf(args[argsIndex],value))<0){continue outer;}}
result.push(value);}}
while(argsLength--){cache=caches[argsLength];if(cache){releaseObject(cache);}}
releaseArray(caches);releaseArray(seen);return result;}
function last(array,callback,thisArg){var n=0,length=array?array.length:0;if(typeof callback!='number'&&callback!=null){var index=length;callback=lodash.createCallback(callback,thisArg,3);while(index--&&callback(array[index],index,array)){n++;}}else{n=callback;if(n==null||thisArg){return array?array[length-1]:undefined;}}
return slice(array,nativeMax(0,length-n));}
function lastIndexOf(array,value,fromIndex){var index=array?array.length:0;if(typeof fromIndex=='number'){index=(fromIndex<0?nativeMax(0,index+fromIndex):nativeMin(fromIndex,index-1))+1;}
while(index--){if(array[index]===value){return index;}}
return-1;}
function pull(array){var args=arguments,argsIndex=0,argsLength=args.length,length=array?array.length:0;while(++argsIndex<argsLength){var index=-1,value=args[argsIndex];while(++index<length){if(array[index]===value){splice.call(array,index--,1);length--;}}}
return array;}
function range(start,end,step){start=+start||0;step=typeof step=='number'?step:(+step||1);if(end==null){end=start;start=0;}
var index=-1,length=nativeMax(0,ceil((end-start)/(step||1))),result=Array(length);while(++index<length){result[index]=start;start+=step;}
return result;}
function remove(array,callback,thisArg){var index=-1,length=array?array.length:0,result=[];callback=lodash.createCallback(callback,thisArg,3);while(++index<length){var value=array[index];if(callback(value,index,array)){result.push(value);splice.call(array,index--,1);length--;}}
return result;}
function rest(array,callback,thisArg){if(typeof callback!='number'&&callback!=null){var n=0,index=-1,length=array?array.length:0;callback=lodash.createCallback(callback,thisArg,3);while(++index<length&&callback(array[index],index,array)){n++;}}else{n=(callback==null||thisArg)?1:nativeMax(0,callback);}
return slice(array,n);}
function sortedIndex(array,value,callback,thisArg){var low=0,high=array?array.length:low;callback=callback?lodash.createCallback(callback,thisArg,1):identity;value=callback(value);while(low<high){var mid=(low+high)>>>1;(callback(array[mid])<value)?low=mid+1:high=mid;}
return low;}
function union(){return baseUniq(baseFlatten(arguments,true,true));}
function uniq(array,isSorted,callback,thisArg){if(typeof isSorted!='boolean'&&isSorted!=null){thisArg=callback;callback=(typeof isSorted!='function'&&thisArg&&thisArg[isSorted]===array)?null:isSorted;isSorted=false;}
if(callback!=null){callback=lodash.createCallback(callback,thisArg,3);}
return baseUniq(array,isSorted,callback);}
function without(array){return baseDifference(array,slice(arguments,1));}
function xor(){var index=-1,length=arguments.length;while(++index<length){var array=arguments[index];if(isArray(array)||isArguments(array)){var result=result?baseUniq(baseDifference(result,array).concat(baseDifference(array,result))):array;}}
return result||[];}
function zip(){var array=arguments.length>1?arguments:arguments[0],index=-1,length=array?max(pluck(array,'length')):0,result=Array(length<0?0:length);while(++index<length){result[index]=pluck(array,index);}
return result;}
function zipObject(keys,values){var index=-1,length=keys?keys.length:0,result={};if(!values&&length&&!isArray(keys[0])){values=[];}
while(++index<length){var key=keys[index];if(values){result[key]=values[index];}else if(key){result[key[0]]=key[1];}}
return result;}
function after(n,func){if(!isFunction(func)){throw new TypeError;}
return function(){if(--n<1){return func.apply(this,arguments);}};}
function bind(func,thisArg){return arguments.length>2?createWrapper(func,17,slice(arguments,2),null,thisArg):createWrapper(func,1,null,null,thisArg);}
function bindAll(object){var funcs=arguments.length>1?baseFlatten(arguments,true,false,1):functions(object),index=-1,length=funcs.length;while(++index<length){var key=funcs[index];object[key]=createWrapper(object[key],1,null,null,object);}
return object;}
function bindKey(object,key){return arguments.length>2?createWrapper(key,19,slice(arguments,2),null,object):createWrapper(key,3,null,null,object);}
function compose(){var funcs=arguments,length=funcs.length;while(length--){if(!isFunction(funcs[length])){throw new TypeError;}}
return function(){var args=arguments,length=funcs.length;while(length--){args=[funcs[length].apply(this,args)];}
return args[0];};}
function curry(func,arity){arity=typeof arity=='number'?arity:(+arity||func.length);return createWrapper(func,4,null,null,null,arity);}
function debounce(func,wait,options){var args,maxTimeoutId,result,stamp,thisArg,timeoutId,trailingCall,lastCalled=0,maxWait=false,trailing=true;if(!isFunction(func)){throw new TypeError;}
wait=nativeMax(0,wait)||0;if(options===true){var leading=true;trailing=false;}else if(isObject(options)){leading=options.leading;maxWait='maxWait'in options&&(nativeMax(wait,options.maxWait)||0);trailing='trailing'in options?options.trailing:trailing;}
var delayed=function(){var remaining=wait-(now()-stamp);if(remaining<=0){if(maxTimeoutId){clearTimeout(maxTimeoutId);}
var isCalled=trailingCall;maxTimeoutId=timeoutId=trailingCall=undefined;if(isCalled){lastCalled=now();result=func.apply(thisArg,args);if(!timeoutId&&!maxTimeoutId){args=thisArg=null;}}}else{timeoutId=setTimeout(delayed,remaining);}};var maxDelayed=function(){if(timeoutId){clearTimeout(timeoutId);}
maxTimeoutId=timeoutId=trailingCall=undefined;if(trailing||(maxWait!==wait)){lastCalled=now();result=func.apply(thisArg,args);if(!timeoutId&&!maxTimeoutId){args=thisArg=null;}}};return function(){args=arguments;stamp=now();thisArg=this;trailingCall=trailing&&(timeoutId||!leading);if(maxWait===false){var leadingCall=leading&&!timeoutId;}else{if(!maxTimeoutId&&!leading){lastCalled=stamp;}
var remaining=maxWait-(stamp-lastCalled),isCalled=remaining<=0;if(isCalled){if(maxTimeoutId){maxTimeoutId=clearTimeout(maxTimeoutId);}
lastCalled=stamp;result=func.apply(thisArg,args);}
else if(!maxTimeoutId){maxTimeoutId=setTimeout(maxDelayed,remaining);}}
if(isCalled&&timeoutId){timeoutId=clearTimeout(timeoutId);}
else if(!timeoutId&&wait!==maxWait){timeoutId=setTimeout(delayed,wait);}
if(leadingCall){isCalled=true;result=func.apply(thisArg,args);}
if(isCalled&&!timeoutId&&!maxTimeoutId){args=thisArg=null;}
return result;};}
function defer(func){if(!isFunction(func)){throw new TypeError;}
var args=slice(arguments,1);return setTimeout(function(){func.apply(undefined,args);},1);}
function delay(func,wait){if(!isFunction(func)){throw new TypeError;}
var args=slice(arguments,2);return setTimeout(function(){func.apply(undefined,args);},wait);}
function memoize(func,resolver){if(!isFunction(func)){throw new TypeError;}
var memoized=function(){var cache=memoized.cache,key=resolver?resolver.apply(this,arguments):keyPrefix+arguments[0];return hasOwnProperty.call(cache,key)?cache[key]:(cache[key]=func.apply(this,arguments));}
memoized.cache={};return memoized;}
function once(func){var ran,result;if(!isFunction(func)){throw new TypeError;}
return function(){if(ran){return result;}
ran=true;result=func.apply(this,arguments);func=null;return result;};}
function partial(func){return createWrapper(func,16,slice(arguments,1));}
function partialRight(func){return createWrapper(func,32,null,slice(arguments,1));}
function throttle(func,wait,options){var leading=true,trailing=true;if(!isFunction(func)){throw new TypeError;}
if(options===false){leading=false;}else if(isObject(options)){leading='leading'in options?options.leading:leading;trailing='trailing'in options?options.trailing:trailing;}
debounceOptions.leading=leading;debounceOptions.maxWait=wait;debounceOptions.trailing=trailing;return debounce(func,wait,debounceOptions);}
function wrap(value,wrapper){return createWrapper(wrapper,16,[value]);}
function constant(value){return function(){return value;};}
function createCallback(func,thisArg,argCount){var type=typeof func;if(func==null||type=='function'){return baseCreateCallback(func,thisArg,argCount);}
if(type!='object'){return property(func);}
var props=keys(func),key=props[0],a=func[key];if(props.length==1&&a===a&&!isObject(a)){return function(object){var b=object[key];return a===b&&(a!==0||(1/a==1/b));};}
return function(object){var length=props.length,result=false;while(length--){if(!(result=baseIsEqual(object[props[length]],func[props[length]],null,true))){break;}}
return result;};}
function escape(string){return string==null?'':String(string).replace(reUnescapedHtml,escapeHtmlChar);}
function identity(value){return value;}
function mixin(object,source,options){var chain=true,methodNames=source&&functions(source);if(!source||(!options&&!methodNames.length)){if(options==null){options=source;}
ctor=lodashWrapper;source=object;object=lodash;methodNames=functions(source);}
if(options===false){chain=false;}else if(isObject(options)&&'chain'in options){chain=options.chain;}
var ctor=object,isFunc=isFunction(ctor);forEach(methodNames,function(methodName){var func=object[methodName]=source[methodName];if(isFunc){ctor.prototype[methodName]=function(){var chainAll=this.__chain__,value=this.__wrapped__,args=[value];push.apply(args,arguments);var result=func.apply(object,args);if(chain||chainAll){if(value===result&&isObject(result)){return this;}
result=new ctor(result);result.__chain__=chainAll;}
return result;};}});}
function noConflict(){context._=oldDash;return this;}
function noop(){}
var now=isNative(now=Date.now)&&now||function(){return new Date().getTime();};var parseInt=nativeParseInt(whitespace+'08')==8?nativeParseInt:function(value,radix){return nativeParseInt(isString(value)?value.replace(reLeadingSpacesAndZeros,''):value,radix||0);};function property(key){return function(object){return object[key];};}
function random(min,max,floating){var noMin=min==null,noMax=max==null;if(floating==null){if(typeof min=='boolean'&&noMax){floating=min;min=1;}
else if(!noMax&&typeof max=='boolean'){floating=max;noMax=true;}}
if(noMin&&noMax){max=1;}
min=+min||0;if(noMax){max=min;min=0;}else{max=+max||0;}
if(floating||min%1||max%1){var rand=nativeRandom();return nativeMin(min+(rand*(max-min+parseFloat('1e-'+((rand+'').length-1)))),max);}
return baseRandom(min,max);}
function result(object,key){if(object){var value=object[key];return isFunction(value)?object[key]():value;}}
function template(text,data,options){var settings=lodash.templateSettings;text=String(text||'');options=defaults({},options,settings);var imports=defaults({},options.imports,settings.imports),importsKeys=keys(imports),importsValues=values(imports);var isEvaluating,index=0,interpolate=options.interpolate||reNoMatch,source="__p += '";var reDelimiters=RegExp((options.escape||reNoMatch).source+'|'+
interpolate.source+'|'+
(interpolate===reInterpolate?reEsTemplate:reNoMatch).source+'|'+
(options.evaluate||reNoMatch).source+'|$','g');text.replace(reDelimiters,function(match,escapeValue,interpolateValue,esTemplateValue,evaluateValue,offset){interpolateValue||(interpolateValue=esTemplateValue);source+=text.slice(index,offset).replace(reUnescapedString,escapeStringChar);if(escapeValue){source+="' +\n__e("+escapeValue+") +\n'";}
if(evaluateValue){isEvaluating=true;source+="';\n"+evaluateValue+";\n__p += '";}
if(interpolateValue){source+="' +\n((__t = ("+interpolateValue+")) == null ? '' : __t) +\n'";}
index=offset+match.length;return match;});source+="';\n";var variable=options.variable,hasVariable=variable;if(!hasVariable){variable='obj';source='with ('+variable+') {\n'+source+'\n}\n';}
source=(isEvaluating?source.replace(reEmptyStringLeading,''):source).replace(reEmptyStringMiddle,'$1').replace(reEmptyStringTrailing,'$1;');source='function('+variable+') {\n'+
(hasVariable?'':variable+' || ('+variable+' = {});\n')+"var __t, __p = '', __e = _.escape"+
(isEvaluating?', __j = Array.prototype.join;\n'+"function print() { __p += __j.call(arguments, '') }\n":';\n')+
source+'return __p\n}';var sourceURL='\n/*\n//# sourceURL='+(options.sourceURL||'/lodash/template/source['+(templateCounter++)+']')+'\n*/';try{var result=Function(importsKeys,'return '+source+sourceURL).apply(undefined,importsValues);}catch(e){e.source=source;throw e;}
if(data){return result(data);}
result.source=source;return result;}
function times(n,callback,thisArg){n=(n=+n)>-1?n:0;var index=-1,result=Array(n);callback=baseCreateCallback(callback,thisArg,1);while(++index<n){result[index]=callback(index);}
return result;}
function unescape(string){return string==null?'':String(string).replace(reEscapedHtml,unescapeHtmlChar);}
function uniqueId(prefix){var id=++idCounter;return String(prefix==null?'':prefix)+id;}
function chain(value){value=new lodashWrapper(value);value.__chain__=true;return value;}
function tap(value,interceptor){interceptor(value);return value;}
function wrapperChain(){this.__chain__=true;return this;}
function wrapperToString(){return String(this.__wrapped__);}
function wrapperValueOf(){return this.__wrapped__;}
lodash.after=after;lodash.assign=assign;lodash.at=at;lodash.bind=bind;lodash.bindAll=bindAll;lodash.bindKey=bindKey;lodash.chain=chain;lodash.compact=compact;lodash.compose=compose;lodash.constant=constant;lodash.countBy=countBy;lodash.create=create;lodash.createCallback=createCallback;lodash.curry=curry;lodash.debounce=debounce;lodash.defaults=defaults;lodash.defer=defer;lodash.delay=delay;lodash.difference=difference;lodash.filter=filter;lodash.flatten=flatten;lodash.forEach=forEach;lodash.forEachRight=forEachRight;lodash.forIn=forIn;lodash.forInRight=forInRight;lodash.forOwn=forOwn;lodash.forOwnRight=forOwnRight;lodash.functions=functions;lodash.groupBy=groupBy;lodash.indexBy=indexBy;lodash.initial=initial;lodash.intersection=intersection;lodash.invert=invert;lodash.invoke=invoke;lodash.keys=keys;lodash.map=map;lodash.mapValues=mapValues;lodash.max=max;lodash.memoize=memoize;lodash.merge=merge;lodash.min=min;lodash.omit=omit;lodash.once=once;lodash.pairs=pairs;lodash.partial=partial;lodash.partialRight=partialRight;lodash.pick=pick;lodash.pluck=pluck;lodash.property=property;lodash.pull=pull;lodash.range=range;lodash.reject=reject;lodash.remove=remove;lodash.rest=rest;lodash.shuffle=shuffle;lodash.sortBy=sortBy;lodash.tap=tap;lodash.throttle=throttle;lodash.times=times;lodash.toArray=toArray;lodash.transform=transform;lodash.union=union;lodash.uniq=uniq;lodash.values=values;lodash.where=where;lodash.without=without;lodash.wrap=wrap;lodash.xor=xor;lodash.zip=zip;lodash.zipObject=zipObject;lodash.collect=map;lodash.drop=rest;lodash.each=forEach;lodash.eachRight=forEachRight;lodash.extend=assign;lodash.methods=functions;lodash.object=zipObject;lodash.select=filter;lodash.tail=rest;lodash.unique=uniq;lodash.unzip=zip;mixin(lodash);lodash.clone=clone;lodash.cloneDeep=cloneDeep;lodash.contains=contains;lodash.escape=escape;lodash.every=every;lodash.find=find;lodash.findIndex=findIndex;lodash.findKey=findKey;lodash.findLast=findLast;lodash.findLastIndex=findLastIndex;lodash.findLastKey=findLastKey;lodash.has=has;lodash.identity=identity;lodash.indexOf=indexOf;lodash.isArguments=isArguments;lodash.isArray=isArray;lodash.isBoolean=isBoolean;lodash.isDate=isDate;lodash.isElement=isElement;lodash.isEmpty=isEmpty;lodash.isEqual=isEqual;lodash.isFinite=isFinite;lodash.isFunction=isFunction;lodash.isNaN=isNaN;lodash.isNull=isNull;lodash.isNumber=isNumber;lodash.isObject=isObject;lodash.isPlainObject=isPlainObject;lodash.isRegExp=isRegExp;lodash.isString=isString;lodash.isUndefined=isUndefined;lodash.lastIndexOf=lastIndexOf;lodash.mixin=mixin;lodash.noConflict=noConflict;lodash.noop=noop;lodash.now=now;lodash.parseInt=parseInt;lodash.random=random;lodash.reduce=reduce;lodash.reduceRight=reduceRight;lodash.result=result;lodash.runInContext=runInContext;lodash.size=size;lodash.some=some;lodash.sortedIndex=sortedIndex;lodash.template=template;lodash.unescape=unescape;lodash.uniqueId=uniqueId;lodash.all=every;lodash.any=some;lodash.detect=find;lodash.findWhere=find;lodash.foldl=reduce;lodash.foldr=reduceRight;lodash.include=contains;lodash.inject=reduce;mixin(function(){var source={}
forOwn(lodash,function(func,methodName){if(!lodash.prototype[methodName]){source[methodName]=func;}});return source;}(),false);lodash.first=first;lodash.last=last;lodash.sample=sample;lodash.take=first;lodash.head=first;forOwn(lodash,function(func,methodName){var callbackable=methodName!=='sample';if(!lodash.prototype[methodName]){lodash.prototype[methodName]=function(n,guard){var chainAll=this.__chain__,result=func(this.__wrapped__,n,guard);return!chainAll&&(n==null||(guard&&!(callbackable&&typeof n=='function')))?result:new lodashWrapper(result,chainAll);};}});lodash.VERSION='2.4.1';lodash.prototype.chain=wrapperChain;lodash.prototype.toString=wrapperToString;lodash.prototype.value=wrapperValueOf;lodash.prototype.valueOf=wrapperValueOf;forEach(['join','pop','shift'],function(methodName){var func=arrayRef[methodName];lodash.prototype[methodName]=function(){var chainAll=this.__chain__,result=func.apply(this.__wrapped__,arguments);return chainAll?new lodashWrapper(result,chainAll):result;};});forEach(['push','reverse','sort','unshift'],function(methodName){var func=arrayRef[methodName];lodash.prototype[methodName]=function(){func.apply(this.__wrapped__,arguments);return this;};});forEach(['concat','slice','splice'],function(methodName){var func=arrayRef[methodName];lodash.prototype[methodName]=function(){return new lodashWrapper(func.apply(this.__wrapped__,arguments),this.__chain__);};});return lodash;}
var _=runInContext();if(typeof define=='function'&&typeof define.amd=='object'&&define.amd){root._=_;define(function(){return _;});}
else if(freeExports&&freeModule){if(moduleExports){(freeModule.exports=_)._=_;}
else{freeExports._=_;}}
else{root._=root._||{};root._=_;return root._;}}.call(this));!function(root,String){'use strict';var nativeTrim=String.prototype.trim;var nativeTrimRight=String.prototype.trimRight;var nativeTrimLeft=String.prototype.trimLeft;var parseNumber=function(source){return source*1||0;};var strRepeat=function(str,qty){if(qty<1)return'';var result='';while(qty>0){if(qty&1)result+=str;qty>>=1,str+=str;}
return result;};var slice=[].slice;var defaultToWhiteSpace=function(characters){if(characters==null)
return'\\s';else if(characters.source)
return characters.source;else
return'['+_s.escapeRegExp(characters)+']';};function boolMatch(s,matchers){var i,matcher,down=s.toLowerCase();matchers=[].concat(matchers);for(i=0;i<matchers.length;i+=1){matcher=matchers[i];if(!matcher)continue;if(matcher.test&&matcher.test(s))return true;if(matcher.toLowerCase()===down)return true;}}
var escapeChars={lt:'<',gt:'>',quot:'"',amp:'&',apos:"'"};var reversedEscapeChars={};for(var key in escapeChars)reversedEscapeChars[escapeChars[key]]=key;reversedEscapeChars["'"]='#39';var sprintf=(function(){function get_type(variable){return Object.prototype.toString.call(variable).slice(8,-1).toLowerCase();}
var str_repeat=strRepeat;var str_format=function(){if(!str_format.cache.hasOwnProperty(arguments[0])){str_format.cache[arguments[0]]=str_format.parse(arguments[0]);}
return str_format.format.call(null,str_format.cache[arguments[0]],arguments);};str_format.format=function(parse_tree,argv){var cursor=1,tree_length=parse_tree.length,node_type='',arg,output=[],i,k,match,pad,pad_character,pad_length;for(i=0;i<tree_length;i++){node_type=get_type(parse_tree[i]);if(node_type==='string'){output.push(parse_tree[i]);}
else if(node_type==='array'){match=parse_tree[i];if(match[2]){arg=argv[cursor];for(k=0;k<match[2].length;k++){if(!arg.hasOwnProperty(match[2][k])){throw new Error(sprintf('[_.sprintf] property "%s" does not exist',match[2][k]));}
arg=arg[match[2][k]];}}else if(match[1]){arg=argv[match[1]];}
else{arg=argv[cursor++];}
if(/[^s]/.test(match[8])&&(get_type(arg)!='number')){throw new Error(sprintf('[_.sprintf] expecting number but found %s',get_type(arg)));}
switch(match[8]){case'b':arg=arg.toString(2);break;case'c':arg=String.fromCharCode(arg);break;case'd':arg=parseInt(arg,10);break;case'e':arg=match[7]?arg.toExponential(match[7]):arg.toExponential();break;case'f':arg=match[7]?parseFloat(arg).toFixed(match[7]):parseFloat(arg);break;case'o':arg=arg.toString(8);break;case's':arg=((arg=String(arg))&&match[7]?arg.substring(0,match[7]):arg);break;case'u':arg=Math.abs(arg);break;case'x':arg=arg.toString(16);break;case'X':arg=arg.toString(16).toUpperCase();break;}
arg=(/[def]/.test(match[8])&&match[3]&&arg>=0?'+'+arg:arg);pad_character=match[4]?match[4]=='0'?'0':match[4].charAt(1):' ';pad_length=match[6]-String(arg).length;pad=match[6]?str_repeat(pad_character,pad_length):'';output.push(match[5]?arg+pad:pad+arg);}}
return output.join('');};str_format.cache={};str_format.parse=function(fmt){var _fmt=fmt,match=[],parse_tree=[],arg_names=0;while(_fmt){if((match=/^[^\x25]+/.exec(_fmt))!==null){parse_tree.push(match[0]);}
else if((match=/^\x25{2}/.exec(_fmt))!==null){parse_tree.push('%');}
else if((match=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt))!==null){if(match[2]){arg_names|=1;var field_list=[],replacement_field=match[2],field_match=[];if((field_match=/^([a-z_][a-z_\d]*)/i.exec(replacement_field))!==null){field_list.push(field_match[1]);while((replacement_field=replacement_field.substring(field_match[0].length))!==''){if((field_match=/^\.([a-z_][a-z_\d]*)/i.exec(replacement_field))!==null){field_list.push(field_match[1]);}
else if((field_match=/^\[(\d+)\]/.exec(replacement_field))!==null){field_list.push(field_match[1]);}
else{throw new Error('[_.sprintf] huh?');}}}
else{throw new Error('[_.sprintf] huh?');}
match[2]=field_list;}
else{arg_names|=2;}
if(arg_names===3){throw new Error('[_.sprintf] mixing positional and named placeholders is not (yet) supported');}
parse_tree.push(match);}
else{throw new Error('[_.sprintf] huh?');}
_fmt=_fmt.substring(match[0].length);}
return parse_tree;};return str_format;})();var _s={VERSION:'2.3.0',isBlank:function(str){if(str==null)str='';return(/^\s*$/).test(str);},stripTags:function(str){if(str==null)return'';return String(str).replace(/<\/?[^>]+>/g,'');},capitalize:function(str){str=str==null?'':String(str);return str.charAt(0).toUpperCase()+str.slice(1);},chop:function(str,step){if(str==null)return[];str=String(str);step=~~step;return step>0?str.match(new RegExp('.{1,'+step+'}','g')):[str];},clean:function(str){return _s.strip(str).replace(/\s+/g,' ');},count:function(str,substr){if(str==null||substr==null)return 0;str=String(str);substr=String(substr);var count=0,pos=0,length=substr.length;while(true){pos=str.indexOf(substr,pos);if(pos===-1)break;count++;pos+=length;}
return count;},chars:function(str){if(str==null)return[];return String(str).split('');},swapCase:function(str){if(str==null)return'';return String(str).replace(/\S/g,function(c){return c===c.toUpperCase()?c.toLowerCase():c.toUpperCase();});},escapeHTML:function(str){if(str==null)return'';return String(str).replace(/[&<>"']/g,function(m){return'&'+reversedEscapeChars[m]+';';});},unescapeHTML:function(str){if(str==null)return'';return String(str).replace(/\&([^;]+);/g,function(entity,entityCode){var match;if(entityCode in escapeChars){return escapeChars[entityCode];}else if(match=entityCode.match(/^#x([\da-fA-F]+)$/)){return String.fromCharCode(parseInt(match[1],16));}else if(match=entityCode.match(/^#(\d+)$/)){return String.fromCharCode(~~match[1]);}else{return entity;}});},escapeRegExp:function(str){if(str==null)return'';return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g,'\\$1');},splice:function(str,i,howmany,substr){var arr=_s.chars(str);arr.splice(~~i,~~howmany,substr);return arr.join('');},insert:function(str,i,substr){return _s.splice(str,i,0,substr);},include:function(str,needle){if(needle==='')return true;if(str==null)return false;return String(str).indexOf(needle)!==-1;},join:function(){var args=slice.call(arguments),separator=args.shift();if(separator==null)separator='';return args.join(separator);},lines:function(str){if(str==null)return[];return String(str).split("\n");},reverse:function(str){return _s.chars(str).reverse().join('');},startsWith:function(str,starts){if(starts==='')return true;if(str==null||starts==null)return false;str=String(str);starts=String(starts);return str.length>=starts.length&&str.slice(0,starts.length)===starts;},endsWith:function(str,ends){if(ends==='')return true;if(str==null||ends==null)return false;str=String(str);ends=String(ends);return str.length>=ends.length&&str.slice(str.length-ends.length)===ends;},succ:function(str){if(str==null)return'';str=String(str);return str.slice(0,-1)+String.fromCharCode(str.charCodeAt(str.length-1)+1);},titleize:function(str){if(str==null)return'';str=String(str).toLowerCase();return str.replace(/(?:^|\s|-)\S/g,function(c){return c.toUpperCase();});},camelize:function(str){return _s.trim(str).replace(/[-_\s]+(.)?/g,function(match,c){return c?c.toUpperCase():"";});},underscored:function(str){return _s.trim(str).replace(/([a-z\d])([A-Z]+)/g,'$1_$2').replace(/[-\s]+/g,'_').toLowerCase();},dasherize:function(str){return _s.trim(str).replace(/([A-Z])/g,'-$1').replace(/[-_\s]+/g,'-').toLowerCase();},classify:function(str){return _s.titleize(String(str).replace(/[\W_]/g,' ')).replace(/\s/g,'');},humanize:function(str){return _s.capitalize(_s.underscored(str).replace(/_id$/,'').replace(/_/g,' '));},trim:function(str,characters){if(str==null)return'';if(!characters&&nativeTrim)return nativeTrim.call(str);characters=defaultToWhiteSpace(characters);return String(str).replace(new RegExp('\^'+characters+'+|'+characters+'+$','g'),'');},ltrim:function(str,characters){if(str==null)return'';if(!characters&&nativeTrimLeft)return nativeTrimLeft.call(str);characters=defaultToWhiteSpace(characters);return String(str).replace(new RegExp('^'+characters+'+'),'');},rtrim:function(str,characters){if(str==null)return'';if(!characters&&nativeTrimRight)return nativeTrimRight.call(str);characters=defaultToWhiteSpace(characters);return String(str).replace(new RegExp(characters+'+$'),'');},truncate:function(str,length,truncateStr){if(str==null)return'';str=String(str);truncateStr=truncateStr||'...';length=~~length;return str.length>length?str.slice(0,length)+truncateStr:str;},prune:function(str,length,pruneStr){if(str==null)return'';str=String(str);length=~~length;pruneStr=pruneStr!=null?String(pruneStr):'...';if(str.length<=length)return str;var tmpl=function(c){return c.toUpperCase()!==c.toLowerCase()?'A':' ';},template=str.slice(0,length+1).replace(/.(?=\W*\w*$)/g,tmpl);if(template.slice(template.length-2).match(/\w\w/))
template=template.replace(/\s*\S+$/,'');else
template=_s.rtrim(template.slice(0,template.length-1));return(template+pruneStr).length>str.length?str:str.slice(0,template.length)+pruneStr;},words:function(str,delimiter){if(_s.isBlank(str))return[];return _s.trim(str,delimiter).split(delimiter||/\s+/);},pad:function(str,length,padStr,type){str=str==null?'':String(str);length=~~length;var padlen=0;if(!padStr)
padStr=' ';else if(padStr.length>1)
padStr=padStr.charAt(0);switch(type){case'right':padlen=length-str.length;return str+strRepeat(padStr,padlen);case'both':padlen=length-str.length;return strRepeat(padStr,Math.ceil(padlen/2))+str
+strRepeat(padStr,Math.floor(padlen/2));default:padlen=length-str.length;return strRepeat(padStr,padlen)+str;}},lpad:function(str,length,padStr){return _s.pad(str,length,padStr);},rpad:function(str,length,padStr){return _s.pad(str,length,padStr,'right');},lrpad:function(str,length,padStr){return _s.pad(str,length,padStr,'both');},sprintf:sprintf,vsprintf:function(fmt,argv){argv.unshift(fmt);return sprintf.apply(null,argv);},toNumber:function(str,decimals){if(!str)return 0;str=_s.trim(str);if(!str.match(/^-?\d+(?:\.\d+)?$/))return NaN;return parseNumber(parseNumber(str).toFixed(~~decimals));},numberFormat:function(number,dec,dsep,tsep){if(isNaN(number)||number==null)return'';number=number.toFixed(~~dec);tsep=typeof tsep=='string'?tsep:',';var parts=number.split('.'),fnums=parts[0],decimals=parts[1]?(dsep||'.')+parts[1]:'';return fnums.replace(/(\d)(?=(?:\d{3})+$)/g,'$1'+tsep)+decimals;},strRight:function(str,sep){if(str==null)return'';str=String(str);sep=sep!=null?String(sep):sep;var pos=!sep?-1:str.indexOf(sep);return~pos?str.slice(pos+sep.length,str.length):str;},strRightBack:function(str,sep){if(str==null)return'';str=String(str);sep=sep!=null?String(sep):sep;var pos=!sep?-1:str.lastIndexOf(sep);return~pos?str.slice(pos+sep.length,str.length):str;},strLeft:function(str,sep){if(str==null)return'';str=String(str);sep=sep!=null?String(sep):sep;var pos=!sep?-1:str.indexOf(sep);return~pos?str.slice(0,pos):str;},strLeftBack:function(str,sep){if(str==null)return'';str+='';sep=sep!=null?''+sep:sep;var pos=str.lastIndexOf(sep);return~pos?str.slice(0,pos):str;},toSentence:function(array,separator,lastSeparator,serial){separator=separator||', ';lastSeparator=lastSeparator||' and ';var a=array.slice(),lastMember=a.pop();if(array.length>2&&serial)lastSeparator=_s.rtrim(separator)+lastSeparator;return a.length?a.join(separator)+lastSeparator+lastMember:lastMember;},toSentenceSerial:function(){var args=slice.call(arguments);args[3]=true;return _s.toSentence.apply(_s,args);},slugify:function(str){if(str==null)return'';var from="ąàáäâãåæăćęèéëêìíïîłńòóöôõøśșțùúüûñçżź",to="aaaaaaaaaceeeeeiiiilnoooooosstuuuunczz",regex=new RegExp(defaultToWhiteSpace(from),'g');str=String(str).toLowerCase().replace(regex,function(c){var index=from.indexOf(c);return to.charAt(index)||'-';});return _s.dasherize(str.replace(/[^\w\s-]/g,''));},surround:function(str,wrapper){return[wrapper,str,wrapper].join('');},quote:function(str,quoteChar){return _s.surround(str,quoteChar||'"');},unquote:function(str,quoteChar){quoteChar=quoteChar||'"';if(str[0]===quoteChar&&str[str.length-1]===quoteChar)
return str.slice(1,str.length-1);else return str;},exports:function(){var result={};for(var prop in this){if(!this.hasOwnProperty(prop)||prop.match(/^(?:include|contains|reverse)$/))continue;result[prop]=this[prop];}
return result;},repeat:function(str,qty,separator){if(str==null)return'';qty=~~qty;if(separator==null)return strRepeat(String(str),qty);for(var repeat=[];qty>0;repeat[--qty]=str){}
return repeat.join(separator);},naturalCmp:function(str1,str2){if(str1==str2)return 0;if(!str1)return-1;if(!str2)return 1;var cmpRegex=/(\.\d+)|(\d+)|(\D+)/g,tokens1=String(str1).toLowerCase().match(cmpRegex),tokens2=String(str2).toLowerCase().match(cmpRegex),count=Math.min(tokens1.length,tokens2.length);for(var i=0;i<count;i++){var a=tokens1[i],b=tokens2[i];if(a!==b){var num1=parseInt(a,10);if(!isNaN(num1)){var num2=parseInt(b,10);if(!isNaN(num2)&&num1-num2)
return num1-num2;}
return a<b?-1:1;}}
if(tokens1.length===tokens2.length)
return tokens1.length-tokens2.length;return str1<str2?-1:1;},levenshtein:function(str1,str2){if(str1==null&&str2==null)return 0;if(str1==null)return String(str2).length;if(str2==null)return String(str1).length;str1=String(str1);str2=String(str2);var current=[],prev,value;for(var i=0;i<=str2.length;i++)
for(var j=0;j<=str1.length;j++){if(i&&j)
if(str1.charAt(j-1)===str2.charAt(i-1))
value=prev;else
value=Math.min(current[j],current[j-1],prev)+1;else
value=i+j;prev=current[j];current[j]=value;}
return current.pop();},toBoolean:function(str,trueValues,falseValues){if(typeof str==="number")str=""+str;if(typeof str!=="string")return!!str;str=_s.trim(str);if(boolMatch(str,trueValues||["true","1"]))return true;if(boolMatch(str,falseValues||["false","0"]))return false;}};_s.strip=_s.trim;_s.lstrip=_s.ltrim;_s.rstrip=_s.rtrim;_s.center=_s.lrpad;_s.rjust=_s.lpad;_s.ljust=_s.rpad;_s.contains=_s.include;_s.q=_s.quote;_s.toBool=_s.toBoolean;if(typeof exports!=='undefined'){if(typeof module!=='undefined'&&module.exports)
module.exports=_s;exports._s=_s;}
if(typeof define==='function'&&define.amd)
define('underscore.string',[],function(){return _s;});root._=root._||{};root._.string=root._.str=_s;}(this,String);(function(undefined){var moment,VERSION='2.9.0',globalScope=(typeof global!=='undefined'&&(typeof window==='undefined'||window===global.window))?global:this,oldGlobalMoment,round=Math.round,hasOwnProperty=Object.prototype.hasOwnProperty,i,YEAR=0,MONTH=1,DATE=2,HOUR=3,MINUTE=4,SECOND=5,MILLISECOND=6,locales={},momentProperties=[],hasModule=(typeof module!=='undefined'&&module&&module.exports),aspNetJsonRegex=/^\/?Date\((\-?\d+)/i,aspNetTimeSpanJsonRegex=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,isoDurationRegex=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,formattingTokens=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,localFormattingTokens=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,parseTokenOneOrTwoDigits=/\d\d?/,parseTokenOneToThreeDigits=/\d{1,3}/,parseTokenOneToFourDigits=/\d{1,4}/,parseTokenOneToSixDigits=/[+\-]?\d{1,6}/,parseTokenDigits=/\d+/,parseTokenWord=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,parseTokenTimezone=/Z|[\+\-]\d\d:?\d\d/gi,parseTokenT=/T/i,parseTokenOffsetMs=/[\+\-]?\d+/,parseTokenTimestampMs=/[\+\-]?\d+(\.\d{1,3})?/,parseTokenOneDigit=/\d/,parseTokenTwoDigits=/\d\d/,parseTokenThreeDigits=/\d{3}/,parseTokenFourDigits=/\d{4}/,parseTokenSixDigits=/[+-]?\d{6}/,parseTokenSignedNumber=/[+-]?\d+/,isoRegex=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,isoFormat='YYYY-MM-DDTHH:mm:ssZ',isoDates=[['YYYYYY-MM-DD',/[+-]\d{6}-\d{2}-\d{2}/],['YYYY-MM-DD',/\d{4}-\d{2}-\d{2}/],['GGGG-[W]WW-E',/\d{4}-W\d{2}-\d/],['GGGG-[W]WW',/\d{4}-W\d{2}/],['YYYY-DDD',/\d{4}-\d{3}/]],isoTimes=[['HH:mm:ss.SSSS',/(T| )\d\d:\d\d:\d\d\.\d+/],['HH:mm:ss',/(T| )\d\d:\d\d:\d\d/],['HH:mm',/(T| )\d\d:\d\d/],['HH',/(T| )\d\d/]],parseTimezoneChunker=/([\+\-]|\d\d)/gi,proxyGettersAndSetters='Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),unitMillisecondFactors={'Milliseconds':1,'Seconds':1e3,'Minutes':6e4,'Hours':36e5,'Days':864e5,'Months':2592e6,'Years':31536e6},unitAliases={ms:'millisecond',s:'second',m:'minute',h:'hour',d:'day',D:'date',w:'week',W:'isoWeek',M:'month',Q:'quarter',y:'year',DDD:'dayOfYear',e:'weekday',E:'isoWeekday',gg:'weekYear',GG:'isoWeekYear'},camelFunctions={dayofyear:'dayOfYear',isoweekday:'isoWeekday',isoweek:'isoWeek',weekyear:'weekYear',isoweekyear:'isoWeekYear'},formatFunctions={},relativeTimeThresholds={s:45,m:45,h:22,d:26,M:11},ordinalizeTokens='DDD w W M D d'.split(' '),paddedTokens='M D H h m s w W'.split(' '),formatTokenFunctions={M:function(){return this.month()+1;},MMM:function(format){return this.localeData().monthsShort(this,format);},MMMM:function(format){return this.localeData().months(this,format);},D:function(){return this.date();},DDD:function(){return this.dayOfYear();},d:function(){return this.day();},dd:function(format){return this.localeData().weekdaysMin(this,format);},ddd:function(format){return this.localeData().weekdaysShort(this,format);},dddd:function(format){return this.localeData().weekdays(this,format);},w:function(){return this.week();},W:function(){return this.isoWeek();},YY:function(){return leftZeroFill(this.year()%100,2);},YYYY:function(){return leftZeroFill(this.year(),4);},YYYYY:function(){return leftZeroFill(this.year(),5);},YYYYYY:function(){var y=this.year(),sign=y>=0?'+':'-';return sign+leftZeroFill(Math.abs(y),6);},gg:function(){return leftZeroFill(this.weekYear()%100,2);},gggg:function(){return leftZeroFill(this.weekYear(),4);},ggggg:function(){return leftZeroFill(this.weekYear(),5);},GG:function(){return leftZeroFill(this.isoWeekYear()%100,2);},GGGG:function(){return leftZeroFill(this.isoWeekYear(),4);},GGGGG:function(){return leftZeroFill(this.isoWeekYear(),5);},e:function(){return this.weekday();},E:function(){return this.isoWeekday();},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),true);},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),false);},H:function(){return this.hours();},h:function(){return this.hours()%12||12;},m:function(){return this.minutes();},s:function(){return this.seconds();},S:function(){return toInt(this.milliseconds()/100);},SS:function(){return leftZeroFill(toInt(this.milliseconds()/10),2);},SSS:function(){return leftZeroFill(this.milliseconds(),3);},SSSS:function(){return leftZeroFill(this.milliseconds(),3);},Z:function(){var a=this.utcOffset(),b='+';if(a<0){a=-a;b='-';}
return b+leftZeroFill(toInt(a/60),2)+':'+leftZeroFill(toInt(a)%60,2);},ZZ:function(){var a=this.utcOffset(),b='+';if(a<0){a=-a;b='-';}
return b+leftZeroFill(toInt(a/60),2)+leftZeroFill(toInt(a)%60,2);},z:function(){return this.zoneAbbr();},zz:function(){return this.zoneName();},x:function(){return this.valueOf();},X:function(){return this.unix();},Q:function(){return this.quarter();}},deprecations={},lists=['months','monthsShort','weekdays','weekdaysShort','weekdaysMin'],updateInProgress=false;function dfl(a,b,c){switch(arguments.length){case 2:return a!=null?a:b;case 3:return a!=null?a:b!=null?b:c;default:throw new Error('Implement me');}}
function hasOwnProp(a,b){return hasOwnProperty.call(a,b);}
function defaultParsingFlags(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false};}
function printMsg(msg){if(moment.suppressDeprecationWarnings===false&&typeof console!=='undefined'&&console.warn){console.warn('Deprecation warning: '+msg);}}
function deprecate(msg,fn){var firstTime=true;return extend(function(){if(firstTime){printMsg(msg);firstTime=false;}
return fn.apply(this,arguments);},fn);}
function deprecateSimple(name,msg){if(!deprecations[name]){printMsg(msg);deprecations[name]=true;}}
function padToken(func,count){return function(a){return leftZeroFill(func.call(this,a),count);};}
function ordinalizeToken(func,period){return function(a){return this.localeData().ordinal(func.call(this,a),period);};}
function monthDiff(a,b){var wholeMonthDiff=((b.year()-a.year())*12)+(b.month()-a.month()),anchor=a.clone().add(wholeMonthDiff,'months'),anchor2,adjust;if(b-anchor<0){anchor2=a.clone().add(wholeMonthDiff-1,'months');adjust=(b-anchor)/(anchor-anchor2);}else{anchor2=a.clone().add(wholeMonthDiff+1,'months');adjust=(b-anchor)/(anchor2-anchor);}
return-(wholeMonthDiff+adjust);}
while(ordinalizeTokens.length){i=ordinalizeTokens.pop();formatTokenFunctions[i+'o']=ordinalizeToken(formatTokenFunctions[i],i);}
while(paddedTokens.length){i=paddedTokens.pop();formatTokenFunctions[i+i]=padToken(formatTokenFunctions[i],2);}
formatTokenFunctions.DDDD=padToken(formatTokenFunctions.DDD,3);function meridiemFixWrap(locale,hour,meridiem){var isPm;if(meridiem==null){return hour;}
if(locale.meridiemHour!=null){return locale.meridiemHour(hour,meridiem);}else if(locale.isPM!=null){isPm=locale.isPM(meridiem);if(isPm&&hour<12){hour+=12;}
if(!isPm&&hour===12){hour=0;}
return hour;}else{return hour;}}
function Locale(){}
function Moment(config,skipOverflow){if(skipOverflow!==false){checkOverflow(config);}
copyConfig(this,config);this._d=new Date(+config._d);if(updateInProgress===false){updateInProgress=true;moment.updateOffset(this);updateInProgress=false;}}
function Duration(duration){var normalizedInput=normalizeObjectUnits(duration),years=normalizedInput.year||0,quarters=normalizedInput.quarter||0,months=normalizedInput.month||0,weeks=normalizedInput.week||0,days=normalizedInput.day||0,hours=normalizedInput.hour||0,minutes=normalizedInput.minute||0,seconds=normalizedInput.second||0,milliseconds=normalizedInput.millisecond||0;this._milliseconds=+milliseconds+
seconds*1e3+
minutes*6e4+
hours*36e5;this._days=+days+
weeks*7;this._months=+months+
quarters*3+
years*12;this._data={};this._locale=moment.localeData();this._bubble();}
function extend(a,b){for(var i in b){if(hasOwnProp(b,i)){a[i]=b[i];}}
if(hasOwnProp(b,'toString')){a.toString=b.toString;}
if(hasOwnProp(b,'valueOf')){a.valueOf=b.valueOf;}
return a;}
function copyConfig(to,from){var i,prop,val;if(typeof from._isAMomentObject!=='undefined'){to._isAMomentObject=from._isAMomentObject;}
if(typeof from._i!=='undefined'){to._i=from._i;}
if(typeof from._f!=='undefined'){to._f=from._f;}
if(typeof from._l!=='undefined'){to._l=from._l;}
if(typeof from._strict!=='undefined'){to._strict=from._strict;}
if(typeof from._tzm!=='undefined'){to._tzm=from._tzm;}
if(typeof from._isUTC!=='undefined'){to._isUTC=from._isUTC;}
if(typeof from._offset!=='undefined'){to._offset=from._offset;}
if(typeof from._pf!=='undefined'){to._pf=from._pf;}
if(typeof from._locale!=='undefined'){to._locale=from._locale;}
if(momentProperties.length>0){for(i in momentProperties){prop=momentProperties[i];val=from[prop];if(typeof val!=='undefined'){to[prop]=val;}}}
return to;}
function absRound(number){if(number<0){return Math.ceil(number);}else{return Math.floor(number);}}
function leftZeroFill(number,targetLength,forceSign){var output=''+Math.abs(number),sign=number>=0;while(output.length<targetLength){output='0'+output;}
return(sign?(forceSign?'+':''):'-')+output;}
function positiveMomentsDifference(base,other){var res={milliseconds:0,months:0};res.months=other.month()-base.month()+
(other.year()-base.year())*12;if(base.clone().add(res.months,'M').isAfter(other)){--res.months;}
res.milliseconds=+other-+(base.clone().add(res.months,'M'));return res;}
function momentsDifference(base,other){var res;other=makeAs(other,base);if(base.isBefore(other)){res=positiveMomentsDifference(base,other);}else{res=positiveMomentsDifference(other,base);res.milliseconds=-res.milliseconds;res.months=-res.months;}
return res;}
function createAdder(direction,name){return function(val,period){var dur,tmp;if(period!==null&&!isNaN(+period)){deprecateSimple(name,'moment().'+name+'(period, number) is deprecated. Please use moment().'+name+'(number, period).');tmp=val;val=period;period=tmp;}
val=typeof val==='string'?+val:val;dur=moment.duration(val,period);addOrSubtractDurationFromMoment(this,dur,direction);return this;};}
function addOrSubtractDurationFromMoment(mom,duration,isAdding,updateOffset){var milliseconds=duration._milliseconds,days=duration._days,months=duration._months;updateOffset=updateOffset==null?true:updateOffset;if(milliseconds){mom._d.setTime(+mom._d+milliseconds*isAdding);}
if(days){rawSetter(mom,'Date',rawGetter(mom,'Date')+days*isAdding);}
if(months){rawMonthSetter(mom,rawGetter(mom,'Month')+months*isAdding);}
if(updateOffset){moment.updateOffset(mom,days||months);}}
function isArray(input){return Object.prototype.toString.call(input)==='[object Array]';}
function isDate(input){return Object.prototype.toString.call(input)==='[object Date]'||input instanceof Date;}
function compareArrays(array1,array2,dontConvert){var len=Math.min(array1.length,array2.length),lengthDiff=Math.abs(array1.length-array2.length),diffs=0,i;for(i=0;i<len;i++){if((dontConvert&&array1[i]!==array2[i])||(!dontConvert&&toInt(array1[i])!==toInt(array2[i]))){diffs++;}}
return diffs+lengthDiff;}
function normalizeUnits(units){if(units){var lowered=units.toLowerCase().replace(/(.)s$/,'$1');units=unitAliases[units]||camelFunctions[lowered]||lowered;}
return units;}
function normalizeObjectUnits(inputObject){var normalizedInput={},normalizedProp,prop;for(prop in inputObject){if(hasOwnProp(inputObject,prop)){normalizedProp=normalizeUnits(prop);if(normalizedProp){normalizedInput[normalizedProp]=inputObject[prop];}}}
return normalizedInput;}
function makeList(field){var count,setter;if(field.indexOf('week')===0){count=7;setter='day';}
else if(field.indexOf('month')===0){count=12;setter='month';}
else{return;}
moment[field]=function(format,index){var i,getter,method=moment._locale[field],results=[];if(typeof format==='number'){index=format;format=undefined;}
getter=function(i){var m=moment().utc().set(setter,i);return method.call(moment._locale,m,format||'');};if(index!=null){return getter(index);}
else{for(i=0;i<count;i++){results.push(getter(i));}
return results;}};}
function toInt(argumentForCoercion){var coercedNumber=+argumentForCoercion,value=0;if(coercedNumber!==0&&isFinite(coercedNumber)){if(coercedNumber>=0){value=Math.floor(coercedNumber);}else{value=Math.ceil(coercedNumber);}}
return value;}
function daysInMonth(year,month){return new Date(Date.UTC(year,month+1,0)).getUTCDate();}
function weeksInYear(year,dow,doy){return weekOfYear(moment([year,11,31+dow-doy]),dow,doy).week;}
function daysInYear(year){return isLeapYear(year)?366:365;}
function isLeapYear(year){return(year%4===0&&year%100!==0)||year%400===0;}
function checkOverflow(m){var overflow;if(m._a&&m._pf.overflow===-2){overflow=m._a[MONTH]<0||m._a[MONTH]>11?MONTH:m._a[DATE]<1||m._a[DATE]>daysInMonth(m._a[YEAR],m._a[MONTH])?DATE:m._a[HOUR]<0||m._a[HOUR]>24||(m._a[HOUR]===24&&(m._a[MINUTE]!==0||m._a[SECOND]!==0||m._a[MILLISECOND]!==0))?HOUR:m._a[MINUTE]<0||m._a[MINUTE]>59?MINUTE:m._a[SECOND]<0||m._a[SECOND]>59?SECOND:m._a[MILLISECOND]<0||m._a[MILLISECOND]>999?MILLISECOND:-1;if(m._pf._overflowDayOfYear&&(overflow<YEAR||overflow>DATE)){overflow=DATE;}
m._pf.overflow=overflow;}}
function isValid(m){if(m._isValid==null){m._isValid=!isNaN(m._d.getTime())&&m._pf.overflow<0&&!m._pf.empty&&!m._pf.invalidMonth&&!m._pf.nullInput&&!m._pf.invalidFormat&&!m._pf.userInvalidated;if(m._strict){m._isValid=m._isValid&&m._pf.charsLeftOver===0&&m._pf.unusedTokens.length===0&&m._pf.bigHour===undefined;}}
return m._isValid;}
function normalizeLocale(key){return key?key.toLowerCase().replace('_','-'):key;}
function chooseLocale(names){var i=0,j,next,locale,split;while(i<names.length){split=normalizeLocale(names[i]).split('-');j=split.length;next=normalizeLocale(names[i+1]);next=next?next.split('-'):null;while(j>0){locale=loadLocale(split.slice(0,j).join('-'));if(locale){return locale;}
if(next&&next.length>=j&&compareArrays(split,next,true)>=j-1){break;}
j--;}
i++;}
return null;}
function loadLocale(name){var oldLocale=null;if(!locales[name]&&hasModule){try{oldLocale=moment.locale();require('./locale/'+name);moment.locale(oldLocale);}catch(e){}}
return locales[name];}
function makeAs(input,model){var res,diff;if(model._isUTC){res=model.clone();diff=(moment.isMoment(input)||isDate(input)?+input:+moment(input))-(+res);res._d.setTime(+res._d+diff);moment.updateOffset(res,false);return res;}else{return moment(input).local();}}
extend(Locale.prototype,{set:function(config){var prop,i;for(i in config){prop=config[i];if(typeof prop==='function'){this[i]=prop;}else{this['_'+i]=prop;}}
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+'|'+/\d{1,2}/.source);},_months:'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),months:function(m){return this._months[m.month()];},_monthsShort:'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),monthsShort:function(m){return this._monthsShort[m.month()];},monthsParse:function(monthName,format,strict){var i,mom,regex;if(!this._monthsParse){this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[];}
for(i=0;i<12;i++){mom=moment.utc([2000,i]);if(strict&&!this._longMonthsParse[i]){this._longMonthsParse[i]=new RegExp('^'+this.months(mom,'').replace('.','')+'$','i');this._shortMonthsParse[i]=new RegExp('^'+this.monthsShort(mom,'').replace('.','')+'$','i');}
if(!strict&&!this._monthsParse[i]){regex='^'+this.months(mom,'')+'|^'+this.monthsShort(mom,'');this._monthsParse[i]=new RegExp(regex.replace('.',''),'i');}
if(strict&&format==='MMMM'&&this._longMonthsParse[i].test(monthName)){return i;}else if(strict&&format==='MMM'&&this._shortMonthsParse[i].test(monthName)){return i;}else if(!strict&&this._monthsParse[i].test(monthName)){return i;}}},_weekdays:'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),weekdays:function(m){return this._weekdays[m.day()];},_weekdaysShort:'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),weekdaysShort:function(m){return this._weekdaysShort[m.day()];},_weekdaysMin:'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),weekdaysMin:function(m){return this._weekdaysMin[m.day()];},weekdaysParse:function(weekdayName){var i,mom,regex;if(!this._weekdaysParse){this._weekdaysParse=[];}
for(i=0;i<7;i++){if(!this._weekdaysParse[i]){mom=moment([2000,1]).day(i);regex='^'+this.weekdays(mom,'')+'|^'+this.weekdaysShort(mom,'')+'|^'+this.weekdaysMin(mom,'');this._weekdaysParse[i]=new RegExp(regex.replace('.',''),'i');}
if(this._weekdaysParse[i].test(weekdayName)){return i;}}},_longDateFormat:{LTS:'h:mm:ss A',LT:'h:mm A',L:'MM/DD/YYYY',LL:'MMMM D, YYYY',LLL:'MMMM D, YYYY LT',LLLL:'dddd, MMMM D, YYYY LT'},longDateFormat:function(key){var output=this._longDateFormat[key];if(!output&&this._longDateFormat[key.toUpperCase()]){output=this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(val){return val.slice(1);});this._longDateFormat[key]=output;}
return output;},isPM:function(input){return((input+'').toLowerCase().charAt(0)==='p');},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(hours,minutes,isLower){if(hours>11){return isLower?'pm':'PM';}else{return isLower?'am':'AM';}},_calendar:{sameDay:'[Today at] LT',nextDay:'[Tomorrow at] LT',nextWeek:'dddd [at] LT',lastDay:'[Yesterday at] LT',lastWeek:'[Last] dddd [at] LT',sameElse:'L'},calendar:function(key,mom,now){var output=this._calendar[key];return typeof output==='function'?output.apply(mom,[now]):output;},_relativeTime:{future:'in %s',past:'%s ago',s:'a few seconds',m:'a minute',mm:'%d minutes',h:'an hour',hh:'%d hours',d:'a day',dd:'%d days',M:'a month',MM:'%d months',y:'a year',yy:'%d years'},relativeTime:function(number,withoutSuffix,string,isFuture){var output=this._relativeTime[string];return(typeof output==='function')?output(number,withoutSuffix,string,isFuture):output.replace(/%d/i,number);},pastFuture:function(diff,output){var format=this._relativeTime[diff>0?'future':'past'];return typeof format==='function'?format(output):format.replace(/%s/i,output);},ordinal:function(number){return this._ordinal.replace('%d',number);},_ordinal:'%d',_ordinalParse:/\d{1,2}/,preparse:function(string){return string;},postformat:function(string){return string;},week:function(mom){return weekOfYear(mom,this._week.dow,this._week.doy).week;},_week:{dow:0,doy:6},firstDayOfWeek:function(){return this._week.dow;},firstDayOfYear:function(){return this._week.doy;},_invalidDate:'Invalid date',invalidDate:function(){return this._invalidDate;}});function removeFormattingTokens(input){if(input.match(/\[[\s\S]/)){return input.replace(/^\[|\]$/g,'');}
return input.replace(/\\/g,'');}
function makeFormatFunction(format){var array=format.match(formattingTokens),i,length;for(i=0,length=array.length;i<length;i++){if(formatTokenFunctions[array[i]]){array[i]=formatTokenFunctions[array[i]];}else{array[i]=removeFormattingTokens(array[i]);}}
return function(mom){var output='';for(i=0;i<length;i++){output+=array[i]instanceof Function?array[i].call(mom,format):array[i];}
return output;};}
function formatMoment(m,format){if(!m.isValid()){return m.localeData().invalidDate();}
format=expandFormat(format,m.localeData());if(!formatFunctions[format]){formatFunctions[format]=makeFormatFunction(format);}
return formatFunctions[format](m);}
function expandFormat(format,locale){var i=5;function replaceLongDateFormatTokens(input){return locale.longDateFormat(input)||input;}
localFormattingTokens.lastIndex=0;while(i>=0&&localFormattingTokens.test(format)){format=format.replace(localFormattingTokens,replaceLongDateFormatTokens);localFormattingTokens.lastIndex=0;i-=1;}
return format;}
function getParseRegexForToken(token,config){var a,strict=config._strict;switch(token){case'Q':return parseTokenOneDigit;case'DDDD':return parseTokenThreeDigits;case'YYYY':case'GGGG':case'gggg':return strict?parseTokenFourDigits:parseTokenOneToFourDigits;case'Y':case'G':case'g':return parseTokenSignedNumber;case'YYYYYY':case'YYYYY':case'GGGGG':case'ggggg':return strict?parseTokenSixDigits:parseTokenOneToSixDigits;case'S':if(strict){return parseTokenOneDigit;}
case'SS':if(strict){return parseTokenTwoDigits;}
case'SSS':if(strict){return parseTokenThreeDigits;}
case'DDD':return parseTokenOneToThreeDigits;case'MMM':case'MMMM':case'dd':case'ddd':case'dddd':return parseTokenWord;case'a':case'A':return config._locale._meridiemParse;case'x':return parseTokenOffsetMs;case'X':return parseTokenTimestampMs;case'Z':case'ZZ':return parseTokenTimezone;case'T':return parseTokenT;case'SSSS':return parseTokenDigits;case'MM':case'DD':case'YY':case'GG':case'gg':case'HH':case'hh':case'mm':case'ss':case'ww':case'WW':return strict?parseTokenTwoDigits:parseTokenOneOrTwoDigits;case'M':case'D':case'd':case'H':case'h':case'm':case's':case'w':case'W':case'e':case'E':return parseTokenOneOrTwoDigits;case'Do':return strict?config._locale._ordinalParse:config._locale._ordinalParseLenient;default:a=new RegExp(regexpEscape(unescapeFormat(token.replace('\\','')),'i'));return a;}}
function utcOffsetFromString(string){string=string||'';var possibleTzMatches=(string.match(parseTokenTimezone)||[]),tzChunk=possibleTzMatches[possibleTzMatches.length-1]||[],parts=(tzChunk+'').match(parseTimezoneChunker)||['-',0,0],minutes=+(parts[1]*60)+toInt(parts[2]);return parts[0]==='+'?minutes:-minutes;}
function addTimeToArrayFromToken(token,input,config){var a,datePartArray=config._a;switch(token){case'Q':if(input!=null){datePartArray[MONTH]=(toInt(input)-1)*3;}
break;case'M':case'MM':if(input!=null){datePartArray[MONTH]=toInt(input)-1;}
break;case'MMM':case'MMMM':a=config._locale.monthsParse(input,token,config._strict);if(a!=null){datePartArray[MONTH]=a;}else{config._pf.invalidMonth=input;}
break;case'D':case'DD':if(input!=null){datePartArray[DATE]=toInt(input);}
break;case'Do':if(input!=null){datePartArray[DATE]=toInt(parseInt(input.match(/\d{1,2}/)[0],10));}
break;case'DDD':case'DDDD':if(input!=null){config._dayOfYear=toInt(input);}
break;case'YY':datePartArray[YEAR]=moment.parseTwoDigitYear(input);break;case'YYYY':case'YYYYY':case'YYYYYY':datePartArray[YEAR]=toInt(input);break;case'a':case'A':config._meridiem=input;break;case'h':case'hh':config._pf.bigHour=true;case'H':case'HH':datePartArray[HOUR]=toInt(input);break;case'm':case'mm':datePartArray[MINUTE]=toInt(input);break;case's':case'ss':datePartArray[SECOND]=toInt(input);break;case'S':case'SS':case'SSS':case'SSSS':datePartArray[MILLISECOND]=toInt(('0.'+input)*1000);break;case'x':config._d=new Date(toInt(input));break;case'X':config._d=new Date(parseFloat(input)*1000);break;case'Z':case'ZZ':config._useUTC=true;config._tzm=utcOffsetFromString(input);break;case'dd':case'ddd':case'dddd':a=config._locale.weekdaysParse(input);if(a!=null){config._w=config._w||{};config._w['d']=a;}else{config._pf.invalidWeekday=input;}
break;case'w':case'ww':case'W':case'WW':case'd':case'e':case'E':token=token.substr(0,1);case'gggg':case'GGGG':case'GGGGG':token=token.substr(0,2);if(input){config._w=config._w||{};config._w[token]=toInt(input);}
break;case'gg':case'GG':config._w=config._w||{};config._w[token]=moment.parseTwoDigitYear(input);}}
function dayOfYearFromWeekInfo(config){var w,weekYear,week,weekday,dow,doy,temp;w=config._w;if(w.GG!=null||w.W!=null||w.E!=null){dow=1;doy=4;weekYear=dfl(w.GG,config._a[YEAR],weekOfYear(moment(),1,4).year);week=dfl(w.W,1);weekday=dfl(w.E,1);}else{dow=config._locale._week.dow;doy=config._locale._week.doy;weekYear=dfl(w.gg,config._a[YEAR],weekOfYear(moment(),dow,doy).year);week=dfl(w.w,1);if(w.d!=null){weekday=w.d;if(weekday<dow){++week;}}else if(w.e!=null){weekday=w.e+dow;}else{weekday=dow;}}
temp=dayOfYearFromWeeks(weekYear,week,weekday,doy,dow);config._a[YEAR]=temp.year;config._dayOfYear=temp.dayOfYear;}
function dateFromConfig(config){var i,date,input=[],currentDate,yearToUse;if(config._d){return;}
currentDate=currentDateArray(config);if(config._w&&config._a[DATE]==null&&config._a[MONTH]==null){dayOfYearFromWeekInfo(config);}
if(config._dayOfYear){yearToUse=dfl(config._a[YEAR],currentDate[YEAR]);if(config._dayOfYear>daysInYear(yearToUse)){config._pf._overflowDayOfYear=true;}
date=makeUTCDate(yearToUse,0,config._dayOfYear);config._a[MONTH]=date.getUTCMonth();config._a[DATE]=date.getUTCDate();}
for(i=0;i<3&&config._a[i]==null;++i){config._a[i]=input[i]=currentDate[i];}
for(;i<7;i++){config._a[i]=input[i]=(config._a[i]==null)?(i===2?1:0):config._a[i];}
if(config._a[HOUR]===24&&config._a[MINUTE]===0&&config._a[SECOND]===0&&config._a[MILLISECOND]===0){config._nextDay=true;config._a[HOUR]=0;}
config._d=(config._useUTC?makeUTCDate:makeDate).apply(null,input);if(config._tzm!=null){config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm);}
if(config._nextDay){config._a[HOUR]=24;}}
function dateFromObject(config){var normalizedInput;if(config._d){return;}
normalizedInput=normalizeObjectUnits(config._i);config._a=[normalizedInput.year,normalizedInput.month,normalizedInput.day||normalizedInput.date,normalizedInput.hour,normalizedInput.minute,normalizedInput.second,normalizedInput.millisecond];dateFromConfig(config);}
function currentDateArray(config){var now=new Date();if(config._useUTC){return[now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate()];}else{return[now.getFullYear(),now.getMonth(),now.getDate()];}}
function makeDateFromStringAndFormat(config){if(config._f===moment.ISO_8601){parseISO(config);return;}
config._a=[];config._pf.empty=true;var string=''+config._i,i,parsedInput,tokens,token,skipped,stringLength=string.length,totalParsedInputLength=0;tokens=expandFormat(config._f,config._locale).match(formattingTokens)||[];for(i=0;i<tokens.length;i++){token=tokens[i];parsedInput=(string.match(getParseRegexForToken(token,config))||[])[0];if(parsedInput){skipped=string.substr(0,string.indexOf(parsedInput));if(skipped.length>0){config._pf.unusedInput.push(skipped);}
string=string.slice(string.indexOf(parsedInput)+parsedInput.length);totalParsedInputLength+=parsedInput.length;}
if(formatTokenFunctions[token]){if(parsedInput){config._pf.empty=false;}
else{config._pf.unusedTokens.push(token);}
addTimeToArrayFromToken(token,parsedInput,config);}
else if(config._strict&&!parsedInput){config._pf.unusedTokens.push(token);}}
config._pf.charsLeftOver=stringLength-totalParsedInputLength;if(string.length>0){config._pf.unusedInput.push(string);}
if(config._pf.bigHour===true&&config._a[HOUR]<=12){config._pf.bigHour=undefined;}
config._a[HOUR]=meridiemFixWrap(config._locale,config._a[HOUR],config._meridiem);dateFromConfig(config);checkOverflow(config);}
function unescapeFormat(s){return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(matched,p1,p2,p3,p4){return p1||p2||p3||p4;});}
function regexpEscape(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');}
function makeDateFromStringAndArray(config){var tempConfig,bestMoment,scoreToBeat,i,currentScore;if(config._f.length===0){config._pf.invalidFormat=true;config._d=new Date(NaN);return;}
for(i=0;i<config._f.length;i++){currentScore=0;tempConfig=copyConfig({},config);if(config._useUTC!=null){tempConfig._useUTC=config._useUTC;}
tempConfig._pf=defaultParsingFlags();tempConfig._f=config._f[i];makeDateFromStringAndFormat(tempConfig);if(!isValid(tempConfig)){continue;}
currentScore+=tempConfig._pf.charsLeftOver;currentScore+=tempConfig._pf.unusedTokens.length*10;tempConfig._pf.score=currentScore;if(scoreToBeat==null||currentScore<scoreToBeat){scoreToBeat=currentScore;bestMoment=tempConfig;}}
extend(config,bestMoment||tempConfig);}
function parseISO(config){var i,l,string=config._i,match=isoRegex.exec(string);if(match){config._pf.iso=true;for(i=0,l=isoDates.length;i<l;i++){if(isoDates[i][1].exec(string)){config._f=isoDates[i][0]+(match[6]||' ');break;}}
for(i=0,l=isoTimes.length;i<l;i++){if(isoTimes[i][1].exec(string)){config._f+=isoTimes[i][0];break;}}
if(string.match(parseTokenTimezone)){config._f+='Z';}
makeDateFromStringAndFormat(config);}else{config._isValid=false;}}
function makeDateFromString(config){parseISO(config);if(config._isValid===false){delete config._isValid;moment.createFromInputFallback(config);}}
function map(arr,fn){var res=[],i;for(i=0;i<arr.length;++i){res.push(fn(arr[i],i));}
return res;}
function makeDateFromInput(config){var input=config._i,matched;if(input===undefined){config._d=new Date();}else if(isDate(input)){config._d=new Date(+input);}else if((matched=aspNetJsonRegex.exec(input))!==null){config._d=new Date(+matched[1]);}else if(typeof input==='string'){makeDateFromString(config);}else if(isArray(input)){config._a=map(input.slice(0),function(obj){return parseInt(obj,10);});dateFromConfig(config);}else if(typeof(input)==='object'){dateFromObject(config);}else if(typeof(input)==='number'){config._d=new Date(input);}else{moment.createFromInputFallback(config);}}
function makeDate(y,m,d,h,M,s,ms){var date=new Date(y,m,d,h,M,s,ms);if(y<1970){date.setFullYear(y);}
return date;}
function makeUTCDate(y){var date=new Date(Date.UTC.apply(null,arguments));if(y<1970){date.setUTCFullYear(y);}
return date;}
function parseWeekday(input,locale){if(typeof input==='string'){if(!isNaN(input)){input=parseInt(input,10);}
else{input=locale.weekdaysParse(input);if(typeof input!=='number'){return null;}}}
return input;}
function substituteTimeAgo(string,number,withoutSuffix,isFuture,locale){return locale.relativeTime(number||1,!!withoutSuffix,string,isFuture);}
function relativeTime(posNegDuration,withoutSuffix,locale){var duration=moment.duration(posNegDuration).abs(),seconds=round(duration.as('s')),minutes=round(duration.as('m')),hours=round(duration.as('h')),days=round(duration.as('d')),months=round(duration.as('M')),years=round(duration.as('y')),args=seconds<relativeTimeThresholds.s&&['s',seconds]||minutes===1&&['m']||minutes<relativeTimeThresholds.m&&['mm',minutes]||hours===1&&['h']||hours<relativeTimeThresholds.h&&['hh',hours]||days===1&&['d']||days<relativeTimeThresholds.d&&['dd',days]||months===1&&['M']||months<relativeTimeThresholds.M&&['MM',months]||years===1&&['y']||['yy',years];args[2]=withoutSuffix;args[3]=+posNegDuration>0;args[4]=locale;return substituteTimeAgo.apply({},args);}
function weekOfYear(mom,firstDayOfWeek,firstDayOfWeekOfYear){var end=firstDayOfWeekOfYear-firstDayOfWeek,daysToDayOfWeek=firstDayOfWeekOfYear-mom.day(),adjustedMoment;if(daysToDayOfWeek>end){daysToDayOfWeek-=7;}
if(daysToDayOfWeek<end-7){daysToDayOfWeek+=7;}
adjustedMoment=moment(mom).add(daysToDayOfWeek,'d');return{week:Math.ceil(adjustedMoment.dayOfYear()/7),year:adjustedMoment.year()};}
function dayOfYearFromWeeks(year,week,weekday,firstDayOfWeekOfYear,firstDayOfWeek){var d=makeUTCDate(year,0,1).getUTCDay(),daysToAdd,dayOfYear;d=d===0?7:d;weekday=weekday!=null?weekday:firstDayOfWeek;daysToAdd=firstDayOfWeek-d+(d>firstDayOfWeekOfYear?7:0)-(d<firstDayOfWeek?7:0);dayOfYear=7*(week-1)+(weekday-firstDayOfWeek)+daysToAdd+1;return{year:dayOfYear>0?year:year-1,dayOfYear:dayOfYear>0?dayOfYear:daysInYear(year-1)+dayOfYear};}
function makeMoment(config){var input=config._i,format=config._f,res;config._locale=config._locale||moment.localeData(config._l);if(input===null||(format===undefined&&input==='')){return moment.invalid({nullInput:true});}
if(typeof input==='string'){config._i=input=config._locale.preparse(input);}
if(moment.isMoment(input)){return new Moment(input,true);}else if(format){if(isArray(format)){makeDateFromStringAndArray(config);}else{makeDateFromStringAndFormat(config);}}else{makeDateFromInput(config);}
res=new Moment(config);if(res._nextDay){res.add(1,'d');res._nextDay=undefined;}
return res;}
moment=function(input,format,locale,strict){var c;if(typeof(locale)==='boolean'){strict=locale;locale=undefined;}
c={};c._isAMomentObject=true;c._i=input;c._f=format;c._l=locale;c._strict=strict;c._isUTC=false;c._pf=defaultParsingFlags();return makeMoment(c);};moment.suppressDeprecationWarnings=false;moment.createFromInputFallback=deprecate('moment construction falls back to js Date. This is '+'discouraged and will be removed in upcoming major '+'release. Please refer to '+'https://github.com/moment/moment/issues/1407 for more info.',function(config){config._d=new Date(config._i+(config._useUTC?' UTC':''));});function pickBy(fn,moments){var res,i;if(moments.length===1&&isArray(moments[0])){moments=moments[0];}
if(!moments.length){return moment();}
res=moments[0];for(i=1;i<moments.length;++i){if(moments[i][fn](res)){res=moments[i];}}
return res;}
moment.min=function(){var args=[].slice.call(arguments,0);return pickBy('isBefore',args);};moment.max=function(){var args=[].slice.call(arguments,0);return pickBy('isAfter',args);};moment.utc=function(input,format,locale,strict){var c;if(typeof(locale)==='boolean'){strict=locale;locale=undefined;}
c={};c._isAMomentObject=true;c._useUTC=true;c._isUTC=true;c._l=locale;c._i=input;c._f=format;c._strict=strict;c._pf=defaultParsingFlags();return makeMoment(c).utc();};moment.unix=function(input){return moment(input*1000);};moment.duration=function(input,key){var duration=input,match=null,sign,ret,parseIso,diffRes;if(moment.isDuration(input)){duration={ms:input._milliseconds,d:input._days,M:input._months};}else if(typeof input==='number'){duration={};if(key){duration[key]=input;}else{duration.milliseconds=input;}}else if(!!(match=aspNetTimeSpanJsonRegex.exec(input))){sign=(match[1]==='-')?-1:1;duration={y:0,d:toInt(match[DATE])*sign,h:toInt(match[HOUR])*sign,m:toInt(match[MINUTE])*sign,s:toInt(match[SECOND])*sign,ms:toInt(match[MILLISECOND])*sign};}else if(!!(match=isoDurationRegex.exec(input))){sign=(match[1]==='-')?-1:1;parseIso=function(inp){var res=inp&&parseFloat(inp.replace(',','.'));return(isNaN(res)?0:res)*sign;};duration={y:parseIso(match[2]),M:parseIso(match[3]),d:parseIso(match[4]),h:parseIso(match[5]),m:parseIso(match[6]),s:parseIso(match[7]),w:parseIso(match[8])};}else if(duration==null){duration={};}else if(typeof duration==='object'&&('from'in duration||'to'in duration)){diffRes=momentsDifference(moment(duration.from),moment(duration.to));duration={};duration.ms=diffRes.milliseconds;duration.M=diffRes.months;}
ret=new Duration(duration);if(moment.isDuration(input)&&hasOwnProp(input,'_locale')){ret._locale=input._locale;}
return ret;};moment.version=VERSION;moment.defaultFormat=isoFormat;moment.ISO_8601=function(){};moment.momentProperties=momentProperties;moment.updateOffset=function(){};moment.relativeTimeThreshold=function(threshold,limit){if(relativeTimeThresholds[threshold]===undefined){return false;}
if(limit===undefined){return relativeTimeThresholds[threshold];}
relativeTimeThresholds[threshold]=limit;return true;};moment.lang=deprecate('moment.lang is deprecated. Use moment.locale instead.',function(key,value){return moment.locale(key,value);});moment.locale=function(key,values){var data;if(key){if(typeof(values)!=='undefined'){data=moment.defineLocale(key,values);}
else{data=moment.localeData(key);}
if(data){moment.duration._locale=moment._locale=data;}}
return moment._locale._abbr;};moment.defineLocale=function(name,values){if(values!==null){values.abbr=name;if(!locales[name]){locales[name]=new Locale();}
locales[name].set(values);moment.locale(name);return locales[name];}else{delete locales[name];return null;}};moment.langData=deprecate('moment.langData is deprecated. Use moment.localeData instead.',function(key){return moment.localeData(key);});moment.localeData=function(key){var locale;if(key&&key._locale&&key._locale._abbr){key=key._locale._abbr;}
if(!key){return moment._locale;}
if(!isArray(key)){locale=loadLocale(key);if(locale){return locale;}
key=[key];}
return chooseLocale(key);};moment.isMoment=function(obj){return obj instanceof Moment||(obj!=null&&hasOwnProp(obj,'_isAMomentObject'));};moment.isDuration=function(obj){return obj instanceof Duration;};for(i=lists.length-1;i>=0;--i){makeList(lists[i]);}
moment.normalizeUnits=function(units){return normalizeUnits(units);};moment.invalid=function(flags){var m=moment.utc(NaN);if(flags!=null){extend(m._pf,flags);}
else{m._pf.userInvalidated=true;}
return m;};moment.parseZone=function(){return moment.apply(null,arguments).parseZone();};moment.parseTwoDigitYear=function(input){return toInt(input)+(toInt(input)>68?1900:2000);};moment.isDate=isDate;extend(moment.fn=Moment.prototype,{clone:function(){return moment(this);},valueOf:function(){return+this._d-((this._offset||0)*60000);},unix:function(){return Math.floor(+this/1000);},toString:function(){return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');},toDate:function(){return this._offset?new Date(+this):this._d;},toISOString:function(){var m=moment(this).utc();if(0<m.year()&&m.year()<=9999){if('function'===typeof Date.prototype.toISOString){return this.toDate().toISOString();}else{return formatMoment(m,'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');}}else{return formatMoment(m,'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');}},toArray:function(){var m=this;return[m.year(),m.month(),m.date(),m.hours(),m.minutes(),m.seconds(),m.milliseconds()];},isValid:function(){return isValid(this);},isDSTShifted:function(){if(this._a){return this.isValid()&&compareArrays(this._a,(this._isUTC?moment.utc(this._a):moment(this._a)).toArray())>0;}
return false;},parsingFlags:function(){return extend({},this._pf);},invalidAt:function(){return this._pf.overflow;},utc:function(keepLocalTime){return this.utcOffset(0,keepLocalTime);},local:function(keepLocalTime){if(this._isUTC){this.utcOffset(0,keepLocalTime);this._isUTC=false;if(keepLocalTime){this.subtract(this._dateUtcOffset(),'m');}}
return this;},format:function(inputString){var output=formatMoment(this,inputString||moment.defaultFormat);return this.localeData().postformat(output);},add:createAdder(1,'add'),subtract:createAdder(-1,'subtract'),diff:function(input,units,asFloat){var that=makeAs(input,this),zoneDiff=(that.utcOffset()-this.utcOffset())*6e4,anchor,diff,output,daysAdjust;units=normalizeUnits(units);if(units==='year'||units==='month'||units==='quarter'){output=monthDiff(this,that);if(units==='quarter'){output=output/3;}else if(units==='year'){output=output/12;}}else{diff=this-that;output=units==='second'?diff/1e3:units==='minute'?diff/6e4:units==='hour'?diff/36e5:units==='day'?(diff-zoneDiff)/864e5:units==='week'?(diff-zoneDiff)/6048e5:diff;}
return asFloat?output:absRound(output);},from:function(time,withoutSuffix){return moment.duration({to:this,from:time}).locale(this.locale()).humanize(!withoutSuffix);},fromNow:function(withoutSuffix){return this.from(moment(),withoutSuffix);},calendar:function(time){var now=time||moment(),sod=makeAs(now,this).startOf('day'),diff=this.diff(sod,'days',true),format=diff<-6?'sameElse':diff<-1?'lastWeek':diff<0?'lastDay':diff<1?'sameDay':diff<2?'nextDay':diff<7?'nextWeek':'sameElse';return this.format(this.localeData().calendar(format,this,moment(now)));},isLeapYear:function(){return isLeapYear(this.year());},isDST:function(){return(this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset());},day:function(input){var day=this._isUTC?this._d.getUTCDay():this._d.getDay();if(input!=null){input=parseWeekday(input,this.localeData());return this.add(input-day,'d');}else{return day;}},month:makeAccessor('Month',true),startOf:function(units){units=normalizeUnits(units);switch(units){case'year':this.month(0);case'quarter':case'month':this.date(1);case'week':case'isoWeek':case'day':this.hours(0);case'hour':this.minutes(0);case'minute':this.seconds(0);case'second':this.milliseconds(0);}
if(units==='week'){this.weekday(0);}else if(units==='isoWeek'){this.isoWeekday(1);}
if(units==='quarter'){this.month(Math.floor(this.month()/3)*3);}
return this;},endOf:function(units){units=normalizeUnits(units);if(units===undefined||units==='millisecond'){return this;}
return this.startOf(units).add(1,(units==='isoWeek'?'week':units)).subtract(1,'ms');},isAfter:function(input,units){var inputMs;units=normalizeUnits(typeof units!=='undefined'?units:'millisecond');if(units==='millisecond'){input=moment.isMoment(input)?input:moment(input);return+this>+input;}else{inputMs=moment.isMoment(input)?+input:+moment(input);return inputMs<+this.clone().startOf(units);}},isBefore:function(input,units){var inputMs;units=normalizeUnits(typeof units!=='undefined'?units:'millisecond');if(units==='millisecond'){input=moment.isMoment(input)?input:moment(input);return+this<+input;}else{inputMs=moment.isMoment(input)?+input:+moment(input);return+this.clone().endOf(units)<inputMs;}},isBetween:function(from,to,units){return this.isAfter(from,units)&&this.isBefore(to,units);},isSame:function(input,units){var inputMs;units=normalizeUnits(units||'millisecond');if(units==='millisecond'){input=moment.isMoment(input)?input:moment(input);return+this===+input;}else{inputMs=+moment(input);return+(this.clone().startOf(units))<=inputMs&&inputMs<=+(this.clone().endOf(units));}},min:deprecate('moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',function(other){other=moment.apply(null,arguments);return other<this?this:other;}),max:deprecate('moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',function(other){other=moment.apply(null,arguments);return other>this?this:other;}),zone:deprecate('moment().zone is deprecated, use moment().utcOffset instead. '+'https://github.com/moment/moment/issues/1779',function(input,keepLocalTime){if(input!=null){if(typeof input!=='string'){input=-input;}
this.utcOffset(input,keepLocalTime);return this;}else{return-this.utcOffset();}}),utcOffset:function(input,keepLocalTime){var offset=this._offset||0,localAdjust;if(input!=null){if(typeof input==='string'){input=utcOffsetFromString(input);}
if(Math.abs(input)<16){input=input*60;}
if(!this._isUTC&&keepLocalTime){localAdjust=this._dateUtcOffset();}
this._offset=input;this._isUTC=true;if(localAdjust!=null){this.add(localAdjust,'m');}
if(offset!==input){if(!keepLocalTime||this._changeInProgress){addOrSubtractDurationFromMoment(this,moment.duration(input-offset,'m'),1,false);}else if(!this._changeInProgress){this._changeInProgress=true;moment.updateOffset(this,true);this._changeInProgress=null;}}
return this;}else{return this._isUTC?offset:this._dateUtcOffset();}},isLocal:function(){return!this._isUTC;},isUtcOffset:function(){return this._isUTC;},isUtc:function(){return this._isUTC&&this._offset===0;},zoneAbbr:function(){return this._isUTC?'UTC':'';},zoneName:function(){return this._isUTC?'Coordinated Universal Time':'';},parseZone:function(){if(this._tzm){this.utcOffset(this._tzm);}else if(typeof this._i==='string'){this.utcOffset(utcOffsetFromString(this._i));}
return this;},hasAlignedHourOffset:function(input){if(!input){input=0;}
else{input=moment(input).utcOffset();}
return(this.utcOffset()-input)%60===0;},daysInMonth:function(){return daysInMonth(this.year(),this.month());},dayOfYear:function(input){var dayOfYear=round((moment(this).startOf('day')-moment(this).startOf('year'))/864e5)+1;return input==null?dayOfYear:this.add((input-dayOfYear),'d');},quarter:function(input){return input==null?Math.ceil((this.month()+1)/3):this.month((input-1)*3+this.month()%3);},weekYear:function(input){var year=weekOfYear(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return input==null?year:this.add((input-year),'y');},isoWeekYear:function(input){var year=weekOfYear(this,1,4).year;return input==null?year:this.add((input-year),'y');},week:function(input){var week=this.localeData().week(this);return input==null?week:this.add((input-week)*7,'d');},isoWeek:function(input){var week=weekOfYear(this,1,4).week;return input==null?week:this.add((input-week)*7,'d');},weekday:function(input){var weekday=(this.day()+7-this.localeData()._week.dow)%7;return input==null?weekday:this.add(input-weekday,'d');},isoWeekday:function(input){return input==null?this.day()||7:this.day(this.day()%7?input:input-7);},isoWeeksInYear:function(){return weeksInYear(this.year(),1,4);},weeksInYear:function(){var weekInfo=this.localeData()._week;return weeksInYear(this.year(),weekInfo.dow,weekInfo.doy);},get:function(units){units=normalizeUnits(units);return this[units]();},set:function(units,value){var unit;if(typeof units==='object'){for(unit in units){this.set(unit,units[unit]);}}
else{units=normalizeUnits(units);if(typeof this[units]==='function'){this[units](value);}}
return this;},locale:function(key){var newLocaleData;if(key===undefined){return this._locale._abbr;}else{newLocaleData=moment.localeData(key);if(newLocaleData!=null){this._locale=newLocaleData;}
return this;}},lang:deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',function(key){if(key===undefined){return this.localeData();}else{return this.locale(key);}}),localeData:function(){return this._locale;},_dateUtcOffset:function(){return-Math.round(this._d.getTimezoneOffset()/15)*15;}});function rawMonthSetter(mom,value){var dayOfMonth;if(typeof value==='string'){value=mom.localeData().monthsParse(value);if(typeof value!=='number'){return mom;}}
dayOfMonth=Math.min(mom.date(),daysInMonth(mom.year(),value));mom._d['set'+(mom._isUTC?'UTC':'')+'Month'](value,dayOfMonth);return mom;}
function rawGetter(mom,unit){return mom._d['get'+(mom._isUTC?'UTC':'')+unit]();}
function rawSetter(mom,unit,value){if(unit==='Month'){return rawMonthSetter(mom,value);}else{return mom._d['set'+(mom._isUTC?'UTC':'')+unit](value);}}
function makeAccessor(unit,keepTime){return function(value){if(value!=null){rawSetter(this,unit,value);moment.updateOffset(this,keepTime);return this;}else{return rawGetter(this,unit);}};}
moment.fn.millisecond=moment.fn.milliseconds=makeAccessor('Milliseconds',false);moment.fn.second=moment.fn.seconds=makeAccessor('Seconds',false);moment.fn.minute=moment.fn.minutes=makeAccessor('Minutes',false);moment.fn.hour=moment.fn.hours=makeAccessor('Hours',true);moment.fn.date=makeAccessor('Date',true);moment.fn.dates=deprecate('dates accessor is deprecated. Use date instead.',makeAccessor('Date',true));moment.fn.year=makeAccessor('FullYear',true);moment.fn.years=deprecate('years accessor is deprecated. Use year instead.',makeAccessor('FullYear',true));moment.fn.days=moment.fn.day;moment.fn.months=moment.fn.month;moment.fn.weeks=moment.fn.week;moment.fn.isoWeeks=moment.fn.isoWeek;moment.fn.quarters=moment.fn.quarter;moment.fn.toJSON=moment.fn.toISOString;moment.fn.isUTC=moment.fn.isUtc;function daysToYears(days){return days*400/146097;}
function yearsToDays(years){return years*146097/400;}
extend(moment.duration.fn=Duration.prototype,{_bubble:function(){var milliseconds=this._milliseconds,days=this._days,months=this._months,data=this._data,seconds,minutes,hours,years=0;data.milliseconds=milliseconds%1000;seconds=absRound(milliseconds/1000);data.seconds=seconds%60;minutes=absRound(seconds/60);data.minutes=minutes%60;hours=absRound(minutes/60);data.hours=hours%24;days+=absRound(hours/24);years=absRound(daysToYears(days));days-=absRound(yearsToDays(years));months+=absRound(days/30);days%=30;years+=absRound(months/12);months%=12;data.days=days;data.months=months;data.years=years;},abs:function(){this._milliseconds=Math.abs(this._milliseconds);this._days=Math.abs(this._days);this._months=Math.abs(this._months);this._data.milliseconds=Math.abs(this._data.milliseconds);this._data.seconds=Math.abs(this._data.seconds);this._data.minutes=Math.abs(this._data.minutes);this._data.hours=Math.abs(this._data.hours);this._data.months=Math.abs(this._data.months);this._data.years=Math.abs(this._data.years);return this;},weeks:function(){return absRound(this.days()/7);},valueOf:function(){return this._milliseconds+
this._days*864e5+
(this._months%12)*2592e6+
toInt(this._months/12)*31536e6;},humanize:function(withSuffix){var output=relativeTime(this,!withSuffix,this.localeData());if(withSuffix){output=this.localeData().pastFuture(+this,output);}
return this.localeData().postformat(output);},add:function(input,val){var dur=moment.duration(input,val);this._milliseconds+=dur._milliseconds;this._days+=dur._days;this._months+=dur._months;this._bubble();return this;},subtract:function(input,val){var dur=moment.duration(input,val);this._milliseconds-=dur._milliseconds;this._days-=dur._days;this._months-=dur._months;this._bubble();return this;},get:function(units){units=normalizeUnits(units);return this[units.toLowerCase()+'s']();},as:function(units){var days,months;units=normalizeUnits(units);if(units==='month'||units==='year'){days=this._days+this._milliseconds/864e5;months=this._months+daysToYears(days)*12;return units==='month'?months:months/12;}else{days=this._days+Math.round(yearsToDays(this._months/12));switch(units){case'week':return days/7+this._milliseconds/6048e5;case'day':return days+this._milliseconds/864e5;case'hour':return days*24+this._milliseconds/36e5;case'minute':return days*24*60+this._milliseconds/6e4;case'second':return days*24*60*60+this._milliseconds/1000;case'millisecond':return Math.floor(days*24*60*60*1000)+this._milliseconds;default:throw new Error('Unknown unit '+units);}}},lang:moment.fn.lang,locale:moment.fn.locale,toIsoString:deprecate('toIsoString() is deprecated. Please use toISOString() instead '+'(notice the capitals)',function(){return this.toISOString();}),toISOString:function(){var years=Math.abs(this.years()),months=Math.abs(this.months()),days=Math.abs(this.days()),hours=Math.abs(this.hours()),minutes=Math.abs(this.minutes()),seconds=Math.abs(this.seconds()+this.milliseconds()/1000);if(!this.asSeconds()){return'P0D';}
return(this.asSeconds()<0?'-':'')+'P'+
(years?years+'Y':'')+
(months?months+'M':'')+
(days?days+'D':'')+
((hours||minutes||seconds)?'T':'')+
(hours?hours+'H':'')+
(minutes?minutes+'M':'')+
(seconds?seconds+'S':'');},localeData:function(){return this._locale;},toJSON:function(){return this.toISOString();}});moment.duration.fn.toString=moment.duration.fn.toISOString;function makeDurationGetter(name){moment.duration.fn[name]=function(){return this._data[name];};}
for(i in unitMillisecondFactors){if(hasOwnProp(unitMillisecondFactors,i)){makeDurationGetter(i.toLowerCase());}}
moment.duration.fn.asMilliseconds=function(){return this.as('ms');};moment.duration.fn.asSeconds=function(){return this.as('s');};moment.duration.fn.asMinutes=function(){return this.as('m');};moment.duration.fn.asHours=function(){return this.as('h');};moment.duration.fn.asDays=function(){return this.as('d');};moment.duration.fn.asWeeks=function(){return this.as('weeks');};moment.duration.fn.asMonths=function(){return this.as('M');};moment.duration.fn.asYears=function(){return this.as('y');};moment.locale('en',{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(number){var b=number%10,output=(toInt(number%100/10)===1)?'th':(b===1)?'st':(b===2)?'nd':(b===3)?'rd':'th';return number+output;}});function makeGlobal(shouldDeprecate){if(typeof ender!=='undefined'){return;}
oldGlobalMoment=globalScope.moment;if(shouldDeprecate){globalScope.moment=deprecate('Accessing Moment through the global scope is '+'deprecated, and will be removed in an upcoming '+'release.',moment);}else{globalScope.moment=moment;}}
if(hasModule){module.exports=moment;}else if(typeof define==='function'&&define.amd){define(function(require,exports,module){if(module.config&&module.config()&&module.config().noGlobal===true){globalScope.moment=oldGlobalMoment;}
return moment;});makeGlobal(true);}else{makeGlobal();}}).call(this);
/*!
 * numeral.js
 * version : 1.5.3
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
(function(){var numeral,VERSION='1.5.3',languages={},currentLanguage='en',zeroFormat=null,defaultFormat='0,0',hasModule=(typeof module!=='undefined'&&module.exports);function Numeral(number){this._value=number;}
function toFixed(value,precision,roundingFunction,optionals){var power=Math.pow(10,precision),optionalsRegExp,output;output=(roundingFunction(value*power)/power).toFixed(precision);if(optionals){optionalsRegExp=new RegExp('0{1,'+optionals+'}$');output=output.replace(optionalsRegExp,'');}
return output;}
function formatNumeral(n,format,roundingFunction){var output;if(format.indexOf('$')>-1){output=formatCurrency(n,format,roundingFunction);}else if(format.indexOf('%')>-1){output=formatPercentage(n,format,roundingFunction);}else if(format.indexOf(':')>-1){output=formatTime(n,format);}else{output=formatNumber(n._value,format,roundingFunction);}
return output;}
function unformatNumeral(n,string){var stringOriginal=string,thousandRegExp,millionRegExp,billionRegExp,trillionRegExp,suffixes=['KB','MB','GB','TB','PB','EB','ZB','YB'],bytesMultiplier=false,power;if(string.indexOf(':')>-1){n._value=unformatTime(string);}else{if(string===zeroFormat){n._value=0;}else{if(languages[currentLanguage].delimiters.decimal!=='.'){string=string.replace(/\./g,'').replace(languages[currentLanguage].delimiters.decimal,'.');}
thousandRegExp=new RegExp('[^a-zA-Z]'+languages[currentLanguage].abbreviations.thousand+'(?:\\)|(\\'+languages[currentLanguage].currency.symbol+')?(?:\\))?)?$');millionRegExp=new RegExp('[^a-zA-Z]'+languages[currentLanguage].abbreviations.million+'(?:\\)|(\\'+languages[currentLanguage].currency.symbol+')?(?:\\))?)?$');billionRegExp=new RegExp('[^a-zA-Z]'+languages[currentLanguage].abbreviations.billion+'(?:\\)|(\\'+languages[currentLanguage].currency.symbol+')?(?:\\))?)?$');trillionRegExp=new RegExp('[^a-zA-Z]'+languages[currentLanguage].abbreviations.trillion+'(?:\\)|(\\'+languages[currentLanguage].currency.symbol+')?(?:\\))?)?$');for(power=0;power<=suffixes.length;power++){bytesMultiplier=(string.indexOf(suffixes[power])>-1)?Math.pow(1024,power+1):false;if(bytesMultiplier){break;}}
n._value=((bytesMultiplier)?bytesMultiplier:1)*((stringOriginal.match(thousandRegExp))?Math.pow(10,3):1)*((stringOriginal.match(millionRegExp))?Math.pow(10,6):1)*((stringOriginal.match(billionRegExp))?Math.pow(10,9):1)*((stringOriginal.match(trillionRegExp))?Math.pow(10,12):1)*((string.indexOf('%')>-1)?0.01:1)*(((string.split('-').length+Math.min(string.split('(').length-1,string.split(')').length-1))%2)?1:-1)*Number(string.replace(/[^0-9\.]+/g,''));n._value=(bytesMultiplier)?Math.ceil(n._value):n._value;}}
return n._value;}
function formatCurrency(n,format,roundingFunction){var symbolIndex=format.indexOf('$'),openParenIndex=format.indexOf('('),minusSignIndex=format.indexOf('-'),space='',spliceIndex,output;if(format.indexOf(' $')>-1){space=' ';format=format.replace(' $','');}else if(format.indexOf('$ ')>-1){space=' ';format=format.replace('$ ','');}else{format=format.replace('$','');}
output=formatNumber(n._value,format,roundingFunction);if(symbolIndex<=1){if(output.indexOf('(')>-1||output.indexOf('-')>-1){output=output.split('');spliceIndex=1;if(symbolIndex<openParenIndex||symbolIndex<minusSignIndex){spliceIndex=0;}
output.splice(spliceIndex,0,languages[currentLanguage].currency.symbol+space);output=output.join('');}else{output=languages[currentLanguage].currency.symbol+space+output;}}else{if(output.indexOf(')')>-1){output=output.split('');output.splice(-1,0,space+languages[currentLanguage].currency.symbol);output=output.join('');}else{output=output+space+languages[currentLanguage].currency.symbol;}}
return output;}
function formatPercentage(n,format,roundingFunction){var space='',output,value=n._value*100;if(format.indexOf(' %')>-1){space=' ';format=format.replace(' %','');}else{format=format.replace('%','');}
output=formatNumber(value,format,roundingFunction);if(output.indexOf(')')>-1){output=output.split('');output.splice(-1,0,space+'%');output=output.join('');}else{output=output+space+'%';}
return output;}
function formatTime(n){var hours=Math.floor(n._value/60/60),minutes=Math.floor((n._value-(hours*60*60))/60),seconds=Math.round(n._value-(hours*60*60)-(minutes*60));return hours+':'+((minutes<10)?'0'+minutes:minutes)+':'+((seconds<10)?'0'+seconds:seconds);}
function unformatTime(string){var timeArray=string.split(':'),seconds=0;if(timeArray.length===3){seconds=seconds+(Number(timeArray[0])*60*60);seconds=seconds+(Number(timeArray[1])*60);seconds=seconds+Number(timeArray[2]);}else if(timeArray.length===2){seconds=seconds+(Number(timeArray[0])*60);seconds=seconds+Number(timeArray[1]);}
return Number(seconds);}
function formatNumber(value,format,roundingFunction){var negP=false,signed=false,optDec=false,abbr='',abbrK=false,abbrM=false,abbrB=false,abbrT=false,abbrForce=false,bytes='',ord='',abs=Math.abs(value),suffixes=['B','KB','MB','GB','TB','PB','EB','ZB','YB'],min,max,power,w,precision,thousands,d='',neg=false;if(value===0&&zeroFormat!==null){return zeroFormat;}else{if(format.indexOf('(')>-1){negP=true;format=format.slice(1,-1);}else if(format.indexOf('+')>-1){signed=true;format=format.replace(/\+/g,'');}
if(format.indexOf('a')>-1){abbrK=format.indexOf('aK')>=0;abbrM=format.indexOf('aM')>=0;abbrB=format.indexOf('aB')>=0;abbrT=format.indexOf('aT')>=0;abbrForce=abbrK||abbrM||abbrB||abbrT;if(format.indexOf(' a')>-1){abbr=' ';format=format.replace(' a','');}else{format=format.replace('a','');}
if(abs>=Math.pow(10,12)&&!abbrForce||abbrT){abbr=abbr+languages[currentLanguage].abbreviations.trillion;value=value/Math.pow(10,12);}else if(abs<Math.pow(10,12)&&abs>=Math.pow(10,9)&&!abbrForce||abbrB){abbr=abbr+languages[currentLanguage].abbreviations.billion;value=value/Math.pow(10,9);}else if(abs<Math.pow(10,9)&&abs>=Math.pow(10,6)&&!abbrForce||abbrM){abbr=abbr+languages[currentLanguage].abbreviations.million;value=value/Math.pow(10,6);}else if(abs<Math.pow(10,6)&&abs>=Math.pow(10,3)&&!abbrForce||abbrK){abbr=abbr+languages[currentLanguage].abbreviations.thousand;value=value/Math.pow(10,3);}}
if(format.indexOf('b')>-1){if(format.indexOf(' b')>-1){bytes=' ';format=format.replace(' b','');}else{format=format.replace('b','');}
for(power=0;power<=suffixes.length;power++){min=Math.pow(1024,power);max=Math.pow(1024,power+1);if(value>=min&&value<max){bytes=bytes+suffixes[power];if(min>0){value=value/min;}
break;}}}
if(format.indexOf('o')>-1){if(format.indexOf(' o')>-1){ord=' ';format=format.replace(' o','');}else{format=format.replace('o','');}
ord=ord+languages[currentLanguage].ordinal(value);}
if(format.indexOf('[.]')>-1){optDec=true;format=format.replace('[.]','.');}
w=value.toString().split('.')[0];precision=format.split('.')[1];thousands=format.indexOf(',');if(precision){if(precision.indexOf('[')>-1){precision=precision.replace(']','');precision=precision.split('[');d=toFixed(value,(precision[0].length+precision[1].length),roundingFunction,precision[1].length);}else{d=toFixed(value,precision.length,roundingFunction);}
w=d.split('.')[0];if(d.split('.')[1].length){d=languages[currentLanguage].delimiters.decimal+d.split('.')[1];}else{d='';}
if(optDec&&Number(d.slice(1))===0){d='';}}else{w=toFixed(value,null,roundingFunction);}
if(w.indexOf('-')>-1){w=w.slice(1);neg=true;}
if(thousands>-1){w=w.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1'+languages[currentLanguage].delimiters.thousands);}
if(format.indexOf('.')===0){w='';}
return((negP&&neg)?'(':'')+((!negP&&neg)?'-':'')+((!neg&&signed)?'+':'')+w+d+((ord)?ord:'')+((abbr)?abbr:'')+((bytes)?bytes:'')+((negP&&neg)?')':'');}}
numeral=function(input){if(numeral.isNumeral(input)){input=input.value();}else if(input===0||typeof input==='undefined'){input=0;}else if(!Number(input)){input=numeral.fn.unformat(input);}
return new Numeral(Number(input));};numeral.version=VERSION;numeral.isNumeral=function(obj){return obj instanceof Numeral;};numeral.language=function(key,values){if(!key){return currentLanguage;}
if(key&&!values){if(!languages[key]){throw new Error('Unknown language : '+key);}
currentLanguage=key;}
if(values||!languages[key]){loadLanguage(key,values);}
return numeral;};numeral.languageData=function(key){if(!key){return languages[currentLanguage];}
if(!languages[key]){throw new Error('Unknown language : '+key);}
return languages[key];};numeral.language('en',{delimiters:{thousands:',',decimal:'.'},abbreviations:{thousand:'k',million:'m',billion:'b',trillion:'t'},ordinal:function(number){var b=number%10;return(~~(number%100/10)===1)?'th':(b===1)?'st':(b===2)?'nd':(b===3)?'rd':'th';},currency:{symbol:'$'}});numeral.zeroFormat=function(format){zeroFormat=typeof(format)==='string'?format:null;};numeral.defaultFormat=function(format){defaultFormat=typeof(format)==='string'?format:'0.0';};numeral.validate=function(val,culture){var _decimalSep,_thousandSep,_currSymbol,_valArray,_abbrObj,_thousandRegEx,languageData,temp;if(typeof val!=='string'){val+='';if(console.warn){console.warn('Numeral.js: Value is not string. It has been co-erced to: ',val);}}
val=val.trim();if(val===''){return false;}
val=val.replace(/^[+-]?/,'');try{languageData=numeral.languageData(culture);}catch(e){languageData=numeral.languageData(numeral.language());}
_currSymbol=languageData.currency.symbol;_abbrObj=languageData.abbreviations;_decimalSep=languageData.delimiters.decimal;if(languageData.delimiters.thousands==='.'){_thousandSep='\\.';}else{_thousandSep=languageData.delimiters.thousands;}
temp=val.match(/^[^\d]+/);if(temp!==null){val=val.substr(1);if(temp[0]!==_currSymbol){return false;}}
temp=val.match(/[^\d]+$/);if(temp!==null){val=val.slice(0,-1);if(temp[0]!==_abbrObj.thousand&&temp[0]!==_abbrObj.million&&temp[0]!==_abbrObj.billion&&temp[0]!==_abbrObj.trillion){return false;}}
if(!!val.match(/^\d+$/)){return true;}
_thousandRegEx=new RegExp(_thousandSep+'{2}');if(!val.match(/[^\d.,]/g)){_valArray=val.split(_decimalSep);if(_valArray.length>2){return false;}else{if(_valArray.length<2){return(!!_valArray[0].match(/^\d+.*\d$/)&&!_valArray[0].match(_thousandRegEx));}else{if(_valArray[0].length===1){return(!!_valArray[0].match(/^\d+$/)&&!_valArray[0].match(_thousandRegEx)&&!!_valArray[1].match(/^\d+$/));}else{return(!!_valArray[0].match(/^\d+.*\d$/)&&!_valArray[0].match(_thousandRegEx)&&!!_valArray[1].match(/^\d+$/));}}}}
return false;};function loadLanguage(key,values){languages[key]=values;}
if('function'!==typeof Array.prototype.reduce){Array.prototype.reduce=function(callback,opt_initialValue){'use strict';if(null===this||'undefined'===typeof this){throw new TypeError('Array.prototype.reduce called on null or undefined');}
if('function'!==typeof callback){throw new TypeError(callback+' is not a function');}
var index,value,length=this.length>>>0,isValueSet=false;if(1<arguments.length){value=opt_initialValue;isValueSet=true;}
for(index=0;length>index;++index){if(this.hasOwnProperty(index)){if(isValueSet){value=callback(value,this[index],index,this);}else{value=this[index];isValueSet=true;}}}
if(!isValueSet){throw new TypeError('Reduce of empty array with no initial value');}
return value;};}
function multiplier(x){var parts=x.toString().split('.');if(parts.length<2){return 1;}
return Math.pow(10,parts[1].length);}
function correctionFactor(){var args=Array.prototype.slice.call(arguments);return args.reduce(function(prev,next){var mp=multiplier(prev),mn=multiplier(next);return mp>mn?mp:mn;},-Infinity);}
numeral.fn=Numeral.prototype={clone:function(){return numeral(this);},format:function(inputString,roundingFunction){return formatNumeral(this,inputString?inputString:defaultFormat,(roundingFunction!==undefined)?roundingFunction:Math.round);},unformat:function(inputString){if(Object.prototype.toString.call(inputString)==='[object Number]'){return inputString;}
return unformatNumeral(this,inputString?inputString:defaultFormat);},value:function(){return this._value;},valueOf:function(){return this._value;},set:function(value){this._value=Number(value);return this;},add:function(value){var corrFactor=correctionFactor.call(null,this._value,value);function cback(accum,curr,currI,O){return accum+corrFactor*curr;}
this._value=[this._value,value].reduce(cback,0)/corrFactor;return this;},subtract:function(value){var corrFactor=correctionFactor.call(null,this._value,value);function cback(accum,curr,currI,O){return accum-corrFactor*curr;}
this._value=[value].reduce(cback,this._value*corrFactor)/corrFactor;return this;},multiply:function(value){function cback(accum,curr,currI,O){var corrFactor=correctionFactor(accum,curr);return(accum*corrFactor)*(curr*corrFactor)/(corrFactor*corrFactor);}
this._value=[this._value,value].reduce(cback,1);return this;},divide:function(value){function cback(accum,curr,currI,O){var corrFactor=correctionFactor(accum,curr);return(accum*corrFactor)/(curr*corrFactor);}
this._value=[this._value,value].reduce(cback);return this;},difference:function(value){return Math.abs(numeral(this._value).subtract(value).value());}};if(hasModule){module.exports=numeral;}
if(typeof ender==='undefined'){this['numeral']=numeral;}
if(typeof define==='function'&&define.amd){define([],function(){return numeral;});}}).call(window);(function($){'use strict';function safe_add(x,y){var lsw=(x&0xFFFF)+(y&0xFFFF),msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&0xFFFF);}
function bit_rol(num,cnt){return(num<<cnt)|(num>>>(32-cnt));}
function md5_cmn(q,a,b,x,s,t){return safe_add(bit_rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b);}
function md5_ff(a,b,c,d,x,s,t){return md5_cmn((b&c)|((~b)&d),a,b,x,s,t);}
function md5_gg(a,b,c,d,x,s,t){return md5_cmn((b&d)|(c&(~d)),a,b,x,s,t);}
function md5_hh(a,b,c,d,x,s,t){return md5_cmn(b^c^d,a,b,x,s,t);}
function md5_ii(a,b,c,d,x,s,t){return md5_cmn(c^(b|(~d)),a,b,x,s,t);}
function binl_md5(x,len){x[len>>5]|=0x80<<(len%32);x[(((len+64)>>>9)<<4)+14]=len;var i,olda,oldb,oldc,oldd,a=1732584193,b=-271733879,c=-1732584194,d=271733878;for(i=0;i<x.length;i+=16){olda=a;oldb=b;oldc=c;oldd=d;a=md5_ff(a,b,c,d,x[i],7,-680876936);d=md5_ff(d,a,b,c,x[i+1],12,-389564586);c=md5_ff(c,d,a,b,x[i+2],17,606105819);b=md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=md5_ff(a,b,c,d,x[i+4],7,-176418897);d=md5_ff(d,a,b,c,x[i+5],12,1200080426);c=md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=md5_ff(b,c,d,a,x[i+7],22,-45705983);a=md5_ff(a,b,c,d,x[i+8],7,1770035416);d=md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=md5_ff(c,d,a,b,x[i+10],17,-42063);b=md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=md5_ff(a,b,c,d,x[i+12],7,1804603682);d=md5_ff(d,a,b,c,x[i+13],12,-40341101);c=md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=md5_ff(b,c,d,a,x[i+15],22,1236535329);a=md5_gg(a,b,c,d,x[i+1],5,-165796510);d=md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=md5_gg(c,d,a,b,x[i+11],14,643717713);b=md5_gg(b,c,d,a,x[i],20,-373897302);a=md5_gg(a,b,c,d,x[i+5],5,-701558691);d=md5_gg(d,a,b,c,x[i+10],9,38016083);c=md5_gg(c,d,a,b,x[i+15],14,-660478335);b=md5_gg(b,c,d,a,x[i+4],20,-405537848);a=md5_gg(a,b,c,d,x[i+9],5,568446438);d=md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=md5_gg(c,d,a,b,x[i+3],14,-187363961);b=md5_gg(b,c,d,a,x[i+8],20,1163531501);a=md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=md5_gg(d,a,b,c,x[i+2],9,-51403784);c=md5_gg(c,d,a,b,x[i+7],14,1735328473);b=md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=md5_hh(a,b,c,d,x[i+5],4,-378558);d=md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=md5_hh(c,d,a,b,x[i+11],16,1839030562);b=md5_hh(b,c,d,a,x[i+14],23,-35309556);a=md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=md5_hh(d,a,b,c,x[i+4],11,1272893353);c=md5_hh(c,d,a,b,x[i+7],16,-155497632);b=md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=md5_hh(a,b,c,d,x[i+13],4,681279174);d=md5_hh(d,a,b,c,x[i],11,-358537222);c=md5_hh(c,d,a,b,x[i+3],16,-722521979);b=md5_hh(b,c,d,a,x[i+6],23,76029189);a=md5_hh(a,b,c,d,x[i+9],4,-640364487);d=md5_hh(d,a,b,c,x[i+12],11,-421815835);c=md5_hh(c,d,a,b,x[i+15],16,530742520);b=md5_hh(b,c,d,a,x[i+2],23,-995338651);a=md5_ii(a,b,c,d,x[i],6,-198630844);d=md5_ii(d,a,b,c,x[i+7],10,1126891415);c=md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=md5_ii(b,c,d,a,x[i+5],21,-57434055);a=md5_ii(a,b,c,d,x[i+12],6,1700485571);d=md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=md5_ii(c,d,a,b,x[i+10],15,-1051523);b=md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=md5_ii(a,b,c,d,x[i+8],6,1873313359);d=md5_ii(d,a,b,c,x[i+15],10,-30611744);c=md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=md5_ii(b,c,d,a,x[i+13],21,1309151649);a=md5_ii(a,b,c,d,x[i+4],6,-145523070);d=md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=md5_ii(c,d,a,b,x[i+2],15,718787259);b=md5_ii(b,c,d,a,x[i+9],21,-343485551);a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd);}
return[a,b,c,d];}
function binl2rstr(input){var i,output='';for(i=0;i<input.length*32;i+=8){output+=String.fromCharCode((input[i>>5]>>>(i%32))&0xFF);}
return output;}
function rstr2binl(input){var i,output=[];output[(input.length>>2)-1]=undefined;for(i=0;i<output.length;i+=1){output[i]=0;}
for(i=0;i<input.length*8;i+=8){output[i>>5]|=(input.charCodeAt(i/8)&0xFF)<<(i%32);}
return output;}
function rstr_md5(s){return binl2rstr(binl_md5(rstr2binl(s),s.length*8));}
function rstr_hmac_md5(key,data){var i,bkey=rstr2binl(key),ipad=[],opad=[],hash;ipad[15]=opad[15]=undefined;if(bkey.length>16){bkey=binl_md5(bkey,key.length*8);}
for(i=0;i<16;i+=1){ipad[i]=bkey[i]^0x36363636;opad[i]=bkey[i]^0x5C5C5C5C;}
hash=binl_md5(ipad.concat(rstr2binl(data)),512+data.length*8);return binl2rstr(binl_md5(opad.concat(hash),512+128));}
function rstr2hex(input){var hex_tab='0123456789abcdef',output='',x,i;for(i=0;i<input.length;i+=1){x=input.charCodeAt(i);output+=hex_tab.charAt((x>>>4)&0x0F)+
hex_tab.charAt(x&0x0F);}
return output;}
function str2rstr_utf8(input){return unescape(encodeURIComponent(input));}
function raw_md5(s){return rstr_md5(str2rstr_utf8(s));}
function hex_md5(s){return rstr2hex(raw_md5(s));}
function raw_hmac_md5(k,d){return rstr_hmac_md5(str2rstr_utf8(k),str2rstr_utf8(d));}
function hex_hmac_md5(k,d){return rstr2hex(raw_hmac_md5(k,d));}
function md5(string,key,raw){if(!key){if(!raw){return hex_md5(string);}
return raw_md5(string);}
if(!raw){return hex_hmac_md5(key,string);}
return raw_hmac_md5(key,string);}
if(typeof define==='function'&&define.amd){define(function(){return md5;});}else{$.md5=md5;}}(this));this.j$=this.jStat=(function(Math,undefined){var concat=Array.prototype.concat;var slice=Array.prototype.slice;var toString=Object.prototype.toString;function calcRdx(n,m){var val=n>m?n:m;return Math.pow(10,17-~~(Math.log(((val>0)?val:-val))*Math.LOG10E));}
var isArray=Array.isArray||function isArray(arg){return toString.call(arg)==='[object Array]';};function isFunction(arg){return toString.call(arg)==='[object Function]';}
function isNumber(arg){return typeof arg==='number'&&arg===arg;}
function toVector(arr){return concat.apply([],arr);}
function jStat(){return new jStat._init(arguments);}
jStat.fn=jStat.prototype;jStat._init=function _init(args){var i;if(isArray(args[0])){if(isArray(args[0][0])){if(isFunction(args[1]))
args[0]=jStat.map(args[0],args[1]);for(i=0;i<args[0].length;i++)
this[i]=args[0][i];this.length=args[0].length;}else{this[0]=isFunction(args[1])?jStat.map(args[0],args[1]):args[0];this.length=1;}}else if(isNumber(args[0])){this[0]=jStat.seq.apply(null,args);this.length=1;}else if(args[0]instanceof jStat){return jStat(args[0].toArray());}else{this[0]=[];this.length=1;}
return this;};jStat._init.prototype=jStat.prototype;jStat._init.constructor=jStat;jStat.utils={calcRdx:calcRdx,isArray:isArray,isFunction:isFunction,isNumber:isNumber,toVector:toVector};jStat.extend=function extend(obj){var i,j;if(arguments.length===1){for(j in obj)
jStat[j]=obj[j];return this;}
for(i=1;i<arguments.length;i++){for(j in arguments[i])
obj[j]=arguments[i][j];}
return obj;};jStat.rows=function rows(arr){return arr.length||1;};jStat.cols=function cols(arr){return arr[0].length||1;};jStat.dimensions=function dimensions(arr){return{rows:jStat.rows(arr),cols:jStat.cols(arr)};};jStat.row=function row(arr,index){return arr[index];};jStat.col=function cols(arr,index){var column=new Array(arr.length);for(var i=0;i<arr.length;i++)
column[i]=[arr[i][index]];return column;};jStat.diag=function diag(arr){var nrow=jStat.rows(arr);var res=new Array(nrow);for(var row=0;row<nrow;row++)
res[row]=[arr[row][row]];return res;};jStat.antidiag=function antidiag(arr){var nrow=jStat.rows(arr)-1;var res=new Array(nrow);for(var i=0;nrow>=0;nrow--,i++)
res[i]=[arr[i][nrow]];return res;};jStat.transpose=function transpose(arr){var obj=[];var objArr,rows,cols,j,i;if(!isArray(arr[0]))
arr=[arr];rows=arr.length;cols=arr[0].length;for(i=0;i<cols;i++){objArr=new Array(rows);for(j=0;j<rows;j++)
objArr[j]=arr[j][i];obj.push(objArr);}
return obj.length===1?obj[0]:obj;};jStat.map=function map(arr,func,toAlter){var row,nrow,ncol,res,col;if(!isArray(arr[0]))
arr=[arr];nrow=arr.length;ncol=arr[0].length;res=toAlter?arr:new Array(nrow);for(row=0;row<nrow;row++){if(!res[row])
res[row]=new Array(ncol);for(col=0;col<ncol;col++)
res[row][col]=func(arr[row][col],row,col);}
return res.length===1?res[0]:res;};jStat.alter=function alter(arr,func){return jStat.map(arr,func,true);};jStat.create=function create(rows,cols,func){var res=new Array(rows);var i,j;if(isFunction(cols)){func=cols;cols=rows;}
for(i=0;i<rows;i++){res[i]=new Array(cols);for(j=0;j<cols;j++)
res[i][j]=func(i,j);}
return res;};function retZero(){return 0;}
jStat.zeros=function zeros(rows,cols){if(!isNumber(cols))
cols=rows;return jStat.create(rows,cols,retZero);};function retOne(){return 1;}
jStat.ones=function ones(rows,cols){if(!isNumber(cols))
cols=rows;return jStat.create(rows,cols,retOne);};jStat.rand=function rand(rows,cols){if(!isNumber(cols))
cols=rows;return jStat.create(rows,cols,Math.random);};function retIdent(i,j){return i===j?1:0;}
jStat.identity=function identity(rows,cols){if(!isNumber(cols))
cols=rows;return jStat.create(rows,cols,retIdent);};jStat.symmetric=function symmetric(arr){var issymmetric=true;var size=arr.length;var row,col;if(arr.length!==arr[0].length)
return false;for(row=0;row<size;row++){for(col=0;col<size;col++)
if(arr[col][row]!==arr[row][col])
return false;}
return true;};jStat.clear=function clear(arr){return jStat.alter(arr,retZero);};jStat.seq=function seq(min,max,length,func){if(!isFunction(func))
func=false;var arr=[];var hival=calcRdx(min,max);var step=(max*hival-min*hival)/((length-1)*hival);var current=min;var cnt;for(cnt=0;current<=max;cnt++,current=(min*hival+step*hival*cnt)/hival){arr.push((func?func(current,cnt):current));}
return arr;};var jProto=jStat.prototype;jProto.length=0;jProto.push=Array.prototype.push;jProto.sort=Array.prototype.sort;jProto.splice=Array.prototype.splice;jProto.slice=Array.prototype.slice;jProto.toArray=function toArray(){return this.length>1?slice.call(this):slice.call(this)[0];};jProto.map=function map(func,toAlter){return jStat(jStat.map(this,func,toAlter));};jProto.alter=function alter(func){jStat.alter(this,func);return this;};(function(funcs){for(var i=0;i<funcs.length;i++)(function(passfunc){jProto[passfunc]=function(func){var self=this,results;if(func){setTimeout(function(){func.call(self,jProto[passfunc].call(self));});return this;}
results=jStat[passfunc](this);return isArray(results)?jStat(results):results;};})(funcs[i]);})('transpose clear symmetric rows cols dimensions diag antidiag'.split(' '));(function(funcs){for(var i=0;i<funcs.length;i++)(function(passfunc){jProto[passfunc]=function(index,func){var self=this;if(func){setTimeout(function(){func.call(self,jProto[passfunc].call(self,index));});return this;}
return jStat(jStat[passfunc](this,index));};})(funcs[i]);})('row col'.split(' '));(function(funcs){for(var i=0;i<funcs.length;i++)(function(passfunc){jProto[passfunc]=new Function('return jStat(jStat.'+passfunc+'.apply(null, arguments));');})(funcs[i]);})('create zeros ones rand identity'.split(' '));return jStat;}(Math));(function(jStat,Math){var isFunction=jStat.utils.isFunction;function ascNum(a,b){return a-b;}
function clip(arg,min,max){return Math.max(min,Math.min(arg,max));}
jStat.sum=function sum(arr){var sum=0;var i=arr.length;var tmp;while(--i>=0)
sum+=arr[i];return sum;};jStat.sumsqrd=function sumsqrd(arr){var sum=0;var i=arr.length;while(--i>=0)
sum+=arr[i]*arr[i];return sum;};jStat.sumsqerr=function sumsqerr(arr){var mean=jStat.mean(arr);var sum=0;var i=arr.length;var tmp;while(--i>=0){tmp=arr[i]-mean;sum+=tmp*tmp;}
return sum;};jStat.product=function product(arr){var prod=1;var i=arr.length;while(--i>=0)
prod*=arr[i];return prod;};jStat.min=function min(arr){var low=arr[0];var i=0;while(++i<arr.length)
if(arr[i]<low)
low=arr[i];return low;};jStat.max=function max(arr){var high=arr[0];var i=0;while(++i<arr.length)
if(arr[i]>high)
high=arr[i];return high;};jStat.mean=function mean(arr){return jStat.sum(arr)/arr.length;};jStat.meansqerr=function meansqerr(arr){return jStat.sumsqerr(arr)/arr.length;};jStat.geomean=function geomean(arr){return Math.pow(jStat.product(arr),1/arr.length);};jStat.median=function median(arr){var arrlen=arr.length;var _arr=arr.slice().sort(ascNum);return!(arrlen&1)?(_arr[(arrlen/2)-1]+_arr[(arrlen/2)])/2:_arr[(arrlen/2)|0];};jStat.cumsum=function cumsum(arr){var len=arr.length;var sums=new Array(len);var i;sums[0]=arr[0];for(i=1;i<len;i++)
sums[i]=sums[i-1]+arr[i];return sums;};jStat.diff=function diff(arr){var diffs=[];var arrLen=arr.length;var i;for(i=1;i<arrLen;i++)
diffs.push(arr[i]-arr[i-1]);return diffs;};jStat.mode=function mode(arr){var arrLen=arr.length;var _arr=arr.slice().sort(ascNum);var count=1;var maxCount=0;var numMaxCount=0;var mode_arr=[];var i;for(i=0;i<arrLen;i++){if(_arr[i]===_arr[i+1]){count++;}else{if(count>maxCount){mode_arr=[_arr[i]];maxCount=count;numMaxCount=0;}
else if(count===maxCount){mode_arr.push(_arr[i]);numMaxCount++;}
count=1;}}
return numMaxCount===0?mode_arr[0]:mode_arr;};jStat.range=function range(arr){return jStat.max(arr)-jStat.min(arr);};jStat.variance=function variance(arr,flag){return jStat.sumsqerr(arr)/(arr.length-(flag?1:0));};jStat.stdev=function stdev(arr,flag){return Math.sqrt(jStat.variance(arr,flag));};jStat.meandev=function meandev(arr){var devSum=0;var mean=jStat.mean(arr);var i;for(i=arr.length-1;i>=0;i--)
devSum+=Math.abs(arr[i]-mean);return devSum/arr.length;};jStat.meddev=function meddev(arr){var devSum=0;var median=jStat.median(arr);var i;for(i=arr.length-1;i>=0;i--)
devSum+=Math.abs(arr[i]-median);return devSum/arr.length;};jStat.coeffvar=function coeffvar(arr){return jStat.stdev(arr)/jStat.mean(arr);};jStat.quartiles=function quartiles(arr){var arrlen=arr.length;var _arr=arr.slice().sort(ascNum);return[_arr[Math.round((arrlen)/4)-1],_arr[Math.round((arrlen)/2)-1],_arr[Math.round((arrlen)*3/4)-1]];};jStat.quantiles=function quantiles(arr,quantilesArray,alphap,betap){var sortedArray=arr.slice().sort(ascNum);var quantileVals=[quantilesArray.length];var n=arr.length;var i,p,m,aleph,k,gamma;if(typeof alphap==='undefined')
alphap=3/8;if(typeof betap==='undefined')
betap=3/8;for(i=0;i<quantilesArray.length;i++){p=quantilesArray[i];m=alphap+p*(1-alphap-betap);aleph=n*p+m;k=Math.floor(clip(aleph,1,n-1));gamma=clip(aleph-k,0,1);quantileVals[i]=(1-gamma)*sortedArray[k-1]+gamma*sortedArray[k];}
return quantileVals;};jStat.percentileOfScore=function percentileOfScore(arr,score,kind){var counter=0;var len=arr.length;var strict=false;var value,i;if(kind==='strict')
strict=true;for(i=0;i<len;i++){value=arr[i];if((strict&&value<score)||(!strict&&value<=score)){counter++;}}
return counter/len;};jStat.covariance=function covariance(arr1,arr2){var u=jStat.mean(arr1);var v=jStat.mean(arr2);var arr1Len=arr1.length;var sq_dev=new Array(arr1Len);var i;for(i=0;i<arr1Len;i++)
sq_dev[i]=(arr1[i]-u)*(arr2[i]-v);return jStat.sum(sq_dev)/(arr1Len-1);};jStat.corrcoeff=function corrcoeff(arr1,arr2){return jStat.covariance(arr1,arr2)/jStat.stdev(arr1,1)/jStat.stdev(arr2,1);};var jProto=jStat.prototype;jProto.cumsum=function(fullbool,func){var arr=[];var i=0;var tmpthis=this;if(isFunction(fullbool)){func=fullbool;fullbool=false;}
if(func){setTimeout(function(){func.call(tmpthis,jProto.cumsum.call(tmpthis,fullbool));});return this;}
if(this.length>1){tmpthis=fullbool===true?this:this.transpose();for(;i<tmpthis.length;i++)
arr[i]=jStat.cumsum(tmpthis[i]);return arr;}
return jStat.cumsum(this[0],fullbool);};(function(funcs){for(var i=0;i<funcs.length;i++)(function(passfunc){jProto[passfunc]=function(fullbool,func){var arr=[];var i=0;var tmpthis=this;if(isFunction(fullbool)){func=fullbool;fullbool=false;}
if(func){setTimeout(function(){func.call(tmpthis,jProto[passfunc].call(tmpthis,fullbool));});return this;}
if(this.length>1){tmpthis=fullbool===true?this:this.transpose();for(;i<tmpthis.length;i++)
arr[i]=jStat[passfunc](tmpthis[i]);return fullbool===true?jStat[passfunc](jStat.utils.toVector(arr)):arr;}
return jStat[passfunc](this[0],fullbool);};})(funcs[i]);})(('sum sumsqrd sumsqerr product min max mean meansqerr geomean median diff '+'mode range variance stdev meandev meddev coeffvar quartiles').split(' '));(function(funcs){for(var i=0;i<funcs.length;i++)(function(passfunc){jProto[passfunc]=function(){var arr=[];var i=0;var tmpthis=this;var args=Array.prototype.slice.call(arguments);if(isFunction(args[args.length-1])){var callbackFunction=args[args.length-1];var argsToPass=args.slice(0,args.length-1);setTimeout(function(){callbackFunction.call(tmpthis,jProto[passfunc].apply(tmpthis,argsToPass));});return this;}else{var callbackFunction=undefined;var curriedFunction=function curriedFunction(vector){return jStat[passfunc].apply(tmpthis,[vector].concat(args));}}
if(this.length>1){tmpthis=tmpthis.transpose();for(;i<tmpthis.length;i++)
arr[i]=curriedFunction(tmpthis[i]);return arr;}
return curriedFunction(this[0]);};})(funcs[i]);})('quantiles percentileOfScore'.split(' '));}(this.jStat,Math));(function(jStat,Math){jStat.gammaln=function gammaln(x){var j=0;var cof=[76.18009172947146,-86.50532032941677,24.01409824083091,-1.231739572450155,0.1208650973866179e-2,-0.5395239384953e-5];var ser=1.000000000190015;var xx,y,tmp;tmp=(y=xx=x)+5.5;tmp-=(xx+0.5)*Math.log(tmp);for(;j<6;j++)
ser+=cof[j]/++y;return Math.log(2.5066282746310005*ser/xx)-tmp;};jStat.gammafn=function gammafn(x){var p=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054];var q=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.118420980151,4755.8462775278811,-134659.9598649693,-115132.2596755535];var fact=false;var n=0;var xden=0;var xnum=0;var y=x;var i,z,yi,res,sum,ysq;if(y<=0){res=y%1+3.6e-16;if(res){fact=(!(y&1)?1:-1)*Math.PI/Math.sin(Math.PI*res);y=1-y;}else{return Infinity;}}
yi=y;if(y<1){z=y++;}else{z=(y-=n=(y|0)-1)-1;}
for(i=0;i<8;++i){xnum=(xnum+p[i])*z;xden=xden*z+q[i];}
res=xnum/xden+1;if(yi<y){res/=yi;}else if(yi>y){for(i=0;i<n;++i){res*=y;y++;}}
if(fact){res=fact/res;}
return res;};jStat.gammap=function gammap(a,x){var aln=jStat.gammaln(a);var ap=a;var sum=1/a;var del=sum;var b=x+1-a;var c=1/1.0e-30;var d=1/b;var h=d;var i=1;var ITMAX=-~(Math.log((a>=1)?a:1/a)*8.5+a*0.4+17);var an,endval;if(x<0||a<=0){return NaN;}else if(x<a+1){for(;i<=ITMAX;i++){sum+=del*=x/++ap;}
return sum*Math.exp(-x+a*Math.log(x)-(aln));}
for(;i<=ITMAX;i++){an=-i*(i-a);b+=2;d=an*d+b;c=b+an/c;d=1/d;h*=d*c;}
return 1-h*Math.exp(-x+a*Math.log(x)-(aln));};jStat.factorialln=function factorialln(n){return n<0?NaN:jStat.gammaln(n+1);};jStat.factorial=function factorial(n){return n<0?NaN:jStat.gammafn(n+1);};jStat.combination=function combination(n,m){return(n>170||m>170)?Math.exp(jStat.combinationln(n,m)):(jStat.factorial(n)/jStat.factorial(m))/jStat.factorial(n-m);};jStat.combinationln=function combinationln(n,m){return jStat.factorialln(n)-jStat.factorialln(m)-jStat.factorialln(n-m);};jStat.permutation=function permutation(n,m){return jStat.factorial(n)/jStat.factorial(n-m);};jStat.betafn=function betafn(x,y){if(x<=0||y<=0)
return undefined;return(x+y>170)?Math.exp(jStat.betaln(x,y)):jStat.gammafn(x)*jStat.gammafn(y)/jStat.gammafn(x+y);};jStat.betaln=function betaln(x,y){return jStat.gammaln(x)+jStat.gammaln(y)-jStat.gammaln(x+y);};jStat.betacf=function betacf(x,a,b){var fpmin=1e-30;var m=1;var qab=a+b;var qap=a+1;var qam=a-1;var c=1;var d=1-qab*x/qap;var m2,aa,del,h;if(Math.abs(d)<fpmin)
d=fpmin;d=1/d;h=d;for(;m<=100;m++){m2=2*m;aa=m*(b-m)*x/((qam+m2)*(a+m2));d=1+aa*d;if(Math.abs(d)<fpmin)
d=fpmin;c=1+aa/c;if(Math.abs(c)<fpmin)
c=fpmin;d=1/d;h*=d*c;aa=-(a+m)*(qab+m)*x/((a+m2)*(qap+m2));d=1+aa*d;if(Math.abs(d)<fpmin)
d=fpmin;c=1+aa/c;if(Math.abs(c)<fpmin)
c=fpmin;d=1/d;del=d*c;h*=del;if(Math.abs(del-1.0)<3e-7)
break;}
return h;};jStat.gammapinv=function gammapinv(p,a){var j=0;var a1=a-1;var EPS=1e-8;var gln=jStat.gammaln(a);var x,err,t,u,pp,lna1,afac;if(p>=1)
return Math.max(100,a+100*Math.sqrt(a));if(p<=0)
return 0;if(a>1){lna1=Math.log(a1);afac=Math.exp(a1*(lna1-1)-gln);pp=(p<0.5)?p:1-p;t=Math.sqrt(-2*Math.log(pp));x=(2.30753+t*0.27061)/(1+t*(0.99229+t*0.04481))-t;if(p<0.5)
x=-x;x=Math.max(1e-3,a*Math.pow(1-1/(9*a)-x/(3*Math.sqrt(a)),3));}else{t=1-a*(0.253+a*0.12);if(p<t)
x=Math.pow(p/t,1/a);else
x=1-Math.log(1-(p-t)/(1-t));}
for(;j<12;j++){if(x<=0)
return 0;err=jStat.gammap(a,x)-p;if(a>1)
t=afac*Math.exp(-(x-a1)+a1*(Math.log(x)-lna1));else
t=Math.exp(-x+a1*Math.log(x)-gln);u=err/t;x-=(t=u/(1-0.5*Math.min(1,u*((a-1)/x-1))));if(x<=0)
x=0.5*(x+t);if(Math.abs(t)<EPS*x)
break;}
return x;};jStat.erf=function erf(x){var cof=[-1.3026537197817094,6.4196979235649026e-1,1.9476473204185836e-2,-9.561514786808631e-3,-9.46595344482036e-4,3.66839497852761e-4,4.2523324806907e-5,-2.0278578112534e-5,-1.624290004647e-6,1.303655835580e-6,1.5626441722e-8,-8.5238095915e-8,6.529054439e-9,5.059343495e-9,-9.91364156e-10,-2.27365122e-10,9.6467911e-11,2.394038e-12,-6.886027e-12,8.94487e-13,3.13092e-13,-1.12708e-13,3.81e-16,7.106e-15,-1.523e-15,-9.4e-17,1.21e-16,-2.8e-17];var j=cof.length-1;var isneg=false;var d=0;var dd=0;var t,ty,tmp,res;if(x<0){x=-x;isneg=true;}
t=2/(2+x);ty=4*t-2;for(;j>0;j--){tmp=d;d=ty*d-dd+cof[j];dd=tmp;}
res=t*Math.exp(-x*x+0.5*(cof[0]+ty*d)-dd);return isneg?res-1:1-res;};jStat.erfc=function erfc(x){return 1-jStat.erf(x);};jStat.erfcinv=function erfcinv(p){var j=0;var x,err,t,pp;if(p>=2)
return-100;if(p<=0)
return 100;pp=(p<1)?p:2-p;t=Math.sqrt(-2*Math.log(pp/2));x=-0.70711*((2.30753+t*0.27061)/(1+t*(0.99229+t*0.04481))-t);for(;j<2;j++){err=jStat.erfc(x)-pp;x+=err/(1.12837916709551257*Math.exp(-x*x)-x*err);}
return(p<1)?x:-x;};jStat.ibetainv=function ibetainv(p,a,b){var EPS=1e-8;var a1=a-1;var b1=b-1;var j=0;var lna,lnb,pp,t,u,err,x,al,h,w,afac;if(p<=0)
return 0;if(p>=1)
return 1;if(a>=1&&b>=1){pp=(p<0.5)?p:1-p;t=Math.sqrt(-2*Math.log(pp));x=(2.30753+t*0.27061)/(1+t*(0.99229+t*0.04481))-t;if(p<0.5)
x=-x;al=(x*x-3)/6;h=2/(1/(2*a-1)+1/(2*b-1));w=(x*Math.sqrt(al+h)/h)-(1/(2*b-1)-1/(2*a-1))*(al+5/6-2/(3*h));x=a/(a+b*Math.exp(2*w));}else{lna=Math.log(a/(a+b));lnb=Math.log(b/(a+b));t=Math.exp(a*lna)/a;u=Math.exp(b*lnb)/b;w=t+u;if(p<t/w)
x=Math.pow(a*w*p,1/a);else
x=1-Math.pow(b*w*(1-p),1/b);}
afac=-jStat.gammaln(a)-jStat.gammaln(b)+jStat.gammaln(a+b);for(;j<10;j++){if(x===0||x===1)
return x;err=jStat.ibeta(x,a,b)-p;t=Math.exp(a1*Math.log(x)+b1*Math.log(1-x)+afac);u=err/t;x-=(t=u/(1-0.5*Math.min(1,u*(a1/x-b1/(1-x)))));if(x<=0)
x=0.5*(x+t);if(x>=1)
x=0.5*(x+t+1);if(Math.abs(t)<EPS*x&&j>0)
break;}
return x;};jStat.ibeta=function ibeta(x,a,b){var bt=(x===0||x===1)?0:Math.exp(jStat.gammaln(a+b)-jStat.gammaln(a)-
jStat.gammaln(b)+a*Math.log(x)+b*Math.log(1-x));if(x<0||x>1)
return false;if(x<(a+1)/(a+b+2))
return bt*jStat.betacf(x,a,b)/a;return 1-bt*jStat.betacf(1-x,b,a)/b;};jStat.randn=function randn(n,m){var u,v,x,y,q,mat;if(!m)
m=n;if(n)
return jStat.create(n,m,function(){return jStat.randn();});do{u=Math.random();v=1.7156*(Math.random()-0.5);x=u-0.449871;y=Math.abs(v)+0.386595;q=x*x+y*(0.19600*y-0.25472*x);}while(q>0.27597&&(q>0.27846||v*v>-4*Math.log(u)*u*u));return v/u;};jStat.randg=function randg(shape,n,m){var oalph=shape;var a1,a2,u,v,x,mat;if(!m)
m=n;if(!shape)
shape=1;if(n){mat=jStat.zeros(n,m);mat.alter(function(){return jStat.randg(shape);});return mat;}
if(shape<1)
shape+=1;a1=shape-1/3;a2=1/Math.sqrt(9*a1);do{do{x=jStat.randn();v=1+a2*x;}while(v<=0);v=v*v*v;u=Math.random();}while(u>1-0.331*Math.pow(x,4)&&Math.log(u)>0.5*x*x+a1*(1-v+Math.log(v)));if(shape==oalph)
return a1*v;do{u=Math.random();}while(u===0);return Math.pow(u,1/oalph)*a1*v;};(function(funcs){for(var i=0;i<funcs.length;i++)(function(passfunc){jStat.fn[passfunc]=function(){return jStat(jStat.map(this,function(value){return jStat[passfunc](value);}));}})(funcs[i]);})('gammaln gammafn factorial factorialln'.split(' '));(function(funcs){for(var i=0;i<funcs.length;i++)(function(passfunc){jStat.fn[passfunc]=function(){return jStat(jStat[passfunc].apply(null,arguments));};})(funcs[i]);})('randn'.split(' '));}(this.jStat,Math));(function(jStat,Math){(function(list){for(var i=0;i<list.length;i++)(function(func){jStat[func]=function(a,b,c){if(!(this instanceof arguments.callee))
return new arguments.callee(a,b,c);this._a=a;this._b=b;this._c=c;return this;};jStat.fn[func]=function(a,b,c){var newthis=jStat[func](a,b,c);newthis.data=this;return newthis;};jStat[func].prototype.sample=function(arr){var a=this._a;var b=this._b;var c=this._c;if(arr)
return jStat.alter(arr,function(){return jStat[func].sample(a,b,c);});else
return jStat[func].sample(a,b,c);};(function(vals){for(var i=0;i<vals.length;i++)(function(fnfunc){jStat[func].prototype[fnfunc]=function(x){var a=this._a;var b=this._b;var c=this._c;if(!x&&x!==0)
x=this.data;if(typeof x!=='number'){return jStat.fn.map.call(x,function(x){return jStat[func][fnfunc](x,a,b,c);});}
return jStat[func][fnfunc](x,a,b,c);};})(vals[i]);})('pdf cdf inv'.split(' '));(function(vals){for(var i=0;i<vals.length;i++)(function(fnfunc){jStat[func].prototype[fnfunc]=function(){return jStat[func][fnfunc](this._a,this._b,this._c);};})(vals[i]);})('mean median mode variance'.split(' '));})(list[i]);})(('beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy '+'lognormal normal pareto studentt weibull uniform  binomial negbin hypgeom '+'poisson triangular').split(' '));jStat.extend(jStat.beta,{pdf:function pdf(x,alpha,beta){if(x>1||x<0)
return 0;if(alpha==1&&beta==1)
return 1;if(alpha<512||beta<512){return(Math.pow(x,alpha-1)*Math.pow(1-x,beta-1))/jStat.betafn(alpha,beta);}else{return Math.exp((alpha-1)*Math.log(x)+
(beta-1)*Math.log(1-x)-
jStat.betaln(alpha,beta));}},cdf:function cdf(x,alpha,beta){return(x>1||x<0)?(x>1)*1:jStat.ibeta(x,alpha,beta);},inv:function inv(x,alpha,beta){return jStat.ibetainv(x,alpha,beta);},mean:function mean(alpha,beta){return alpha/(alpha+beta);},median:function median(alpha,beta){throw new Error('median not yet implemented');},mode:function mode(alpha,beta){return(alpha*beta)/(Math.pow(alpha+beta,2)*(alpha+beta+1));},sample:function sample(alpha,beta){var u=jStat.randg(alpha);return u/(u+jStat.randg(beta));},variance:function variance(alpha,beta){return(alpha*beta)/(Math.pow(alpha+beta,2)*(alpha+beta+1));}});jStat.extend(jStat.centralF,{pdf:function pdf(x,df1,df2){if(x<0)
return undefined;return Math.sqrt((Math.pow(df1*x,df1)*Math.pow(df2,df2))/(Math.pow(df1*x+df2,df1+df2)))/(x*jStat.betafn(df1/2,df2/2));},cdf:function cdf(x,df1,df2){return jStat.ibeta((df1*x)/(df1*x+df2),df1/2,df2/2);},inv:function inv(x,df1,df2){return df2/(df1*(1/jStat.ibetainv(x,df1/2,df2/2)-1));},mean:function mean(df1,df2){return(df2>2)?df2/(df2-2):undefined;},mode:function mode(df1,df2){return(df1>2)?(df2*(df1-2))/(df1*(df2+2)):undefined;},sample:function sample(df1,df2){var x1=jStat.randg(df1/2)*2;var x2=jStat.randg(df2/2)*2;return(x1/df1)/(x2/df2);},variance:function variance(df1,df2){if(df2<=4)
return undefined;return 2*df2*df2*(df1+df2-2)/(df1*(df2-2)*(df2-2)*(df2-4));}});jStat.extend(jStat.cauchy,{pdf:function pdf(x,local,scale){return(scale/(Math.pow(x-local,2)+Math.pow(scale,2)))/Math.PI;},cdf:function cdf(x,local,scale){return Math.atan((x-local)/scale)/Math.PI+0.5;},inv:function(p,local,scale){return local+scale*Math.tan(Math.PI*(p-0.5));},median:function median(local,scale){return local;},mode:function mode(local,scale){return local;},sample:function sample(local,scale){return jStat.randn()*Math.sqrt(1/(2*jStat.randg(0.5)))*scale+local;}});jStat.extend(jStat.chisquare,{pdf:function pdf(x,dof){return Math.exp((dof/2-1)*Math.log(x)-x/2-(dof/2)*Math.log(2)-jStat.gammaln(dof/2));},cdf:function cdf(x,dof){return jStat.gammap(dof/2,x/2);},inv:function(p,dof){return 2*jStat.gammapinv(p,0.5*dof);},mean:function(dof){return dof;},median:function median(dof){return dof*Math.pow(1-(2/(9*dof)),3);},mode:function mode(dof){return(dof-2>0)?dof-2:0;},sample:function sample(dof){return jStat.randg(dof/2)*2;},variance:function variance(dof){return 2*dof;}});jStat.extend(jStat.exponential,{pdf:function pdf(x,rate){return x<0?0:rate*Math.exp(-rate*x);},cdf:function cdf(x,rate){return x<0?0:1-Math.exp(-rate*x);},inv:function(p,rate){return-Math.log(1-p)/rate;},mean:function(rate){return 1/rate;},median:function(rate){return(1/rate)*Math.log(2);},mode:function mode(rate){return 0;},sample:function sample(rate){return-1/rate*Math.log(Math.random());},variance:function(rate){return Math.pow(rate,-2);}});jStat.extend(jStat.gamma,{pdf:function pdf(x,shape,scale){return Math.exp((shape-1)*Math.log(x)-x/scale-
jStat.gammaln(shape)-shape*Math.log(scale));},cdf:function cdf(x,shape,scale){return jStat.gammap(shape,x/scale);},inv:function(p,shape,scale){return jStat.gammapinv(p,shape)*scale;},mean:function(shape,scale){return shape*scale;},mode:function mode(shape,scale){if(shape>1)return(shape-1)*scale;return undefined;},sample:function sample(shape,scale){return jStat.randg(shape)*scale;},variance:function variance(shape,scale){return shape*scale*scale;}});jStat.extend(jStat.invgamma,{pdf:function pdf(x,shape,scale){return Math.exp(-(shape+1)*Math.log(x)-scale/x-
jStat.gammaln(shape)+shape*Math.log(scale));},cdf:function cdf(x,shape,scale){return 1-jStat.gammap(shape,scale/x);},inv:function(p,shape,scale){return scale/jStat.gammapinv(1-p,shape);},mean:function(shape,scale){return(shape>1)?scale/(shape-1):undefined;},mode:function mode(shape,scale){return scale/(shape+1);},sample:function sample(shape,scale){return scale/jStat.randg(shape);},variance:function variance(shape,scale){if(shape<=2)
return undefined;return scale*scale/((shape-1)*(shape-1)*(shape-2));}});jStat.extend(jStat.kumaraswamy,{pdf:function pdf(x,alpha,beta){return Math.exp(Math.log(alpha)+Math.log(beta)+(alpha-1)*Math.log(x)+(beta-1)*Math.log(1-Math.pow(x,alpha)));},cdf:function cdf(x,alpha,beta){return(1-Math.pow(1-Math.pow(x,alpha),beta));},mean:function(alpha,beta){return(beta*jStat.gammafn(1+1/alpha)*jStat.gammafn(beta))/(jStat.gammafn(1+1/alpha+beta));},median:function median(alpha,beta){return Math.pow(1-Math.pow(2,-1/beta),1/alpha);},mode:function mode(alpha,beta){if(!(alpha>=1&&beta>=1&&(alpha!==1&&beta!==1)))
return undefined;return Math.pow((alpha-1)/(alpha*beta-1),1/alpha);},variance:function variance(alpha,beta){throw new Error('variance not yet implemented');}});jStat.extend(jStat.lognormal,{pdf:function pdf(x,mu,sigma){return Math.exp(-Math.log(x)-0.5*Math.log(2*Math.PI)-
Math.log(sigma)-Math.pow(Math.log(x)-mu,2)/(2*sigma*sigma));},cdf:function cdf(x,mu,sigma){return 0.5+
(0.5*jStat.erf((Math.log(x)-mu)/Math.sqrt(2*sigma*sigma)));},inv:function(p,mu,sigma){return Math.exp(-1.41421356237309505*sigma*jStat.erfcinv(2*p)+mu);},mean:function mean(mu,sigma){return Math.exp(mu+sigma*sigma/2);},median:function median(mu,sigma){return Math.exp(mu);},mode:function mode(mu,sigma){return Math.exp(mu-sigma*sigma);},sample:function sample(mu,sigma){return Math.exp(jStat.randn()*sigma+mu);},variance:function variance(mu,sigma){return(Math.exp(sigma*sigma)-1)*Math.exp(2*mu+sigma*sigma);}});jStat.extend(jStat.normal,{pdf:function pdf(x,mean,std){return Math.exp(-0.5*Math.log(2*Math.PI)-
Math.log(std)-Math.pow(x-mean,2)/(2*std*std));},cdf:function cdf(x,mean,std){return 0.5*(1+jStat.erf((x-mean)/Math.sqrt(2*std*std)));},inv:function(p,mean,std){return-1.41421356237309505*std*jStat.erfcinv(2*p)+mean;},mean:function(mean,std){return mean;},median:function median(mean,std){return mean;},mode:function(mean,std){return mean;},sample:function sample(mean,std){return jStat.randn()*std+mean;},variance:function(mean,std){return std*std;}});jStat.extend(jStat.pareto,{pdf:function pdf(x,scale,shape){if(x<=scale)
return undefined;return(shape*Math.pow(scale,shape))/Math.pow(x,shape+1);},cdf:function cdf(x,scale,shape){return 1-Math.pow(scale/x,shape);},mean:function mean(scale,shape){if(shape<=1)
return undefined;return(shape*Math.pow(scale,shape))/(shape-1);},median:function median(scale,shape){return scale*(shape*Math.SQRT2);},mode:function mode(scale,shape){return scale;},variance:function(scale,shape){if(shape<=2)
return undefined;return(scale*scale*shape)/(Math.pow(shape-1,2)*(shape-2));}});jStat.extend(jStat.studentt,{pdf:function pdf(x,dof){return(jStat.gammafn((dof+1)/2)/(Math.sqrt(dof*Math.PI)*jStat.gammafn(dof/2)))*Math.pow(1+((x*x)/dof),-((dof+1)/2));},cdf:function cdf(x,dof){var dof2=dof/2;return jStat.ibeta((x+Math.sqrt(x*x+dof))/(2*Math.sqrt(x*x+dof)),dof2,dof2);},inv:function(p,dof){var x=jStat.ibetainv(2*Math.min(p,1-p),0.5*dof,0.5);x=Math.sqrt(dof*(1-x)/x);return(p>0)?x:-x;},mean:function mean(dof){return(dof>1)?0:undefined;},median:function median(dof){return 0;},mode:function mode(dof){return 0;},sample:function sample(dof){return jStat.randn()*Math.sqrt(dof/(2*jStat.randg(dof/2)));},variance:function variance(dof){return(dof>2)?dof/(dof-2):(dof>1)?Infinity:undefined;}});jStat.extend(jStat.weibull,{pdf:function pdf(x,scale,shape){if(x<0)
return 0;return(shape/scale)*Math.pow((x/scale),(shape-1))*Math.exp(-(Math.pow((x/scale),shape)));},cdf:function cdf(x,scale,shape){return x<0?0:1-Math.exp(-Math.pow((x/scale),shape));},inv:function(p,scale,shape){return scale*Math.pow(-Math.log(1-p),1/shape);},mean:function(scale,shape){return scale*jStat.gammafn(1+1/shape);},median:function median(scale,shape){return scale*Math.pow(Math.log(2),1/shape);},mode:function mode(scale,shape){if(shape<=1)
return undefined;return scale*Math.pow((shape-1)/shape,1/shape);},sample:function sample(scale,shape){return scale*Math.pow(-Math.log(Math.random()),1/shape);},variance:function variance(scale,shape){return scale*scale*jStat.gammafn(1+2/shape)-
Math.pow(this.mean(scale,shape),2);}});jStat.extend(jStat.uniform,{pdf:function pdf(x,a,b){return(x<a||x>b)?0:1/(b-a);},cdf:function cdf(x,a,b){if(x<a)
return 0;else if(x<b)
return(x-a)/(b-a);return 1;},mean:function mean(a,b){return 0.5*(a+b);},median:function median(a,b){return jStat.mean(a,b);},mode:function mode(a,b){throw new Error('mode is not yet implemented');},sample:function sample(a,b){return(a/2+b/2)+(b/2-a/2)*(2*Math.random()-1);},variance:function variance(a,b){return Math.pow(b-a,2)/12;}});jStat.extend(jStat.binomial,{pdf:function pdf(k,n,p){return(p===0||p===1)?((n*p)===k?1:0):jStat.combination(n,k)*Math.pow(p,k)*Math.pow(1-p,n-k);},cdf:function cdf(x,n,p){var binomarr=[],k=0;if(x<0){return 0;}
if(x<n){for(;k<=x;k++){binomarr[k]=jStat.binomial.pdf(k,n,p);}
return jStat.sum(binomarr);}
return 1;}});jStat.extend(jStat.negbin,{pdf:function pdf(k,r,p){return k!==k|0?false:k<0?0:jStat.combination(k+r-1,r-1)*Math.pow(1-p,k)*Math.pow(p,r);},cdf:function cdf(x,r,p){var sum=0,k=0;if(x<0)return 0;for(;k<=x;k++){sum+=jStat.negbin.pdf(k,r,p);}
return sum;}});jStat.extend(jStat.hypgeom,{pdf:function pdf(k,N,m,n){if(k!==k|0){return false;}else if(k<0||k<m-(N-n)){return 0;}else if(k>n||k>m){return 0;}else if(m*2>N){if(n*2>N){return jStat.hypgeom.pdf(N-m-n+k,N,N-m,N-n)}else{return jStat.hypgeom.pdf(n-k,N,N-m,n);}}else if(n*2>N){return jStat.hypgeom.pdf(m-k,N,m,N-n);}else if(m<n){return jStat.hypgeom.pdf(k,N,n,m);}else{var scaledPDF=1;var samplesDone=0;for(var i=0;i<k;i++){while(scaledPDF>1&&samplesDone<n){scaledPDF*=1-(m/(N-samplesDone));samplesDone++;}
scaledPDF*=(n-i)*(m-i)/((i+1)*(N-m-n+i+1));}
for(;samplesDone<n;samplesDone++){scaledPDF*=1-(m/(N-samplesDone));}
return Math.min(1,Math.max(0,scaledPDF));}},cdf:function cdf(x,N,m,n){if(x<0||x<m-(N-n)){return 0;}else if(x>=n||x>=m){return 1;}else if(m*2>N){if(n*2>N){return jStat.hypgeom.cdf(N-m-n+x,N,N-m,N-n)}else{return 1-jStat.hypgeom.cdf(n-x-1,N,N-m,n);}}else if(n*2>N){return 1-jStat.hypgeom.cdf(m-x-1,N,m,N-n);}else if(m<n){return jStat.hypgeom.cdf(x,N,n,m);}else{var scaledCDF=1;var scaledPDF=1;var samplesDone=0;for(var i=0;i<x;i++){while(scaledCDF>1&&samplesDone<n){var factor=1-(m/(N-samplesDone));scaledPDF*=factor;scaledCDF*=factor;samplesDone++;}
scaledPDF*=(n-i)*(m-i)/((i+1)*(N-m-n+i+1));scaledCDF+=scaledPDF;}
for(;samplesDone<n;samplesDone++){scaledCDF*=1-(m/(N-samplesDone));}
return Math.min(1,Math.max(0,scaledCDF));}}});jStat.extend(jStat.poisson,{pdf:function pdf(k,l){return Math.pow(l,k)*Math.exp(-l)/jStat.factorial(k);},cdf:function cdf(x,l){var sumarr=[],k=0;if(x<0)return 0;for(;k<=x;k++){sumarr.push(jStat.poisson.pdf(k,l));}
return jStat.sum(sumarr);},mean:function(l){return l;},variance:function(l){return l;},sample:function sample(l){var p=1,k=0,L=Math.exp(-l);do{k++;p*=Math.random();}while(p>L);return k-1;}});jStat.extend(jStat.triangular,{pdf:function pdf(x,a,b,c){return(b<=a||c<a||c>b)?undefined:(x<a||x>b)?0:(x<=c)?(2*(x-a))/((b-a)*(c-a)):(2*(b-x))/((b-a)*(b-c));},cdf:function cdf(x,a,b,c){if(b<=a||c<a||c>b)
return undefined;if(x<a){return 0;}else{if(x<=c)
return Math.pow(x-a,2)/((b-a)*(c-a));return 1-Math.pow(b-x,2)/((b-a)*(b-c));}
return 1;},mean:function mean(a,b,c){return(a+b+c)/3;},median:function median(a,b,c){if(c<=(a+b)/2){return b-Math.sqrt((b-a)*(b-c))/Math.sqrt(2);}else if(c>(a+b)/2){return a+Math.sqrt((b-a)*(c-a))/Math.sqrt(2);}},mode:function mode(a,b,c){return c;},sample:function sample(a,b,c){var u=Math.random();if(u<((c-a)/(b-a)))
return a+Math.sqrt(u*(b-a)*(c-a))
return b-Math.sqrt((1-u)*(b-a)*(b-c));},variance:function variance(a,b,c){return(a*a+b*b+c*c-a*b-a*c-b*c)/18;}});}(this.jStat,Math));(function(jStat,Math){var push=Array.prototype.push;var isArray=jStat.utils.isArray;jStat.extend({add:function add(arr,arg){if(isArray(arg)){if(!isArray(arg[0]))arg=[arg];return jStat.map(arr,function(value,row,col){return value+arg[row][col];});}
return jStat.map(arr,function(value){return value+arg;});},subtract:function subtract(arr,arg){if(isArray(arg)){if(!isArray(arg[0]))arg=[arg];return jStat.map(arr,function(value,row,col){return value-arg[row][col]||0;});}
return jStat.map(arr,function(value){return value-arg;});},divide:function divide(arr,arg){if(isArray(arg)){if(!isArray(arg[0]))arg=[arg];return jStat.multiply(arr,jStat.inv(arg));}
return jStat.map(arr,function(value){return value/arg;});},multiply:function multiply(arr,arg){var row,col,nrescols,sum,nrow=arr.length,ncol=arr[0].length,res=jStat.zeros(nrow,nrescols=(isArray(arg))?arg[0].length:ncol),rescols=0;if(isArray(arg)){for(;rescols<nrescols;rescols++){for(row=0;row<nrow;row++){sum=0;for(col=0;col<ncol;col++)
sum+=arr[row][col]*arg[col][rescols];res[row][rescols]=sum;}}
return(nrow===1&&rescols===1)?res[0][0]:res;}
return jStat.map(arr,function(value){return value*arg;});},dot:function dot(arr,arg){if(!isArray(arr[0]))arr=[arr];if(!isArray(arg[0]))arg=[arg];var left=(arr[0].length===1&&arr.length!==1)?jStat.transpose(arr):arr,right=(arg[0].length===1&&arg.length!==1)?jStat.transpose(arg):arg,res=[],row=0,nrow=left.length,ncol=left[0].length,sum,col;for(;row<nrow;row++){res[row]=[];sum=0;for(col=0;col<ncol;col++)
sum+=left[row][col]*right[row][col];res[row]=sum;}
return(res.length===1)?res[0]:res;},pow:function pow(arr,arg){return jStat.map(arr,function(value){return Math.pow(value,arg);});},abs:function abs(arr){return jStat.map(arr,function(value){return Math.abs(value);});},norm:function norm(arr,p){var nnorm=0,i=0;if(isNaN(p))p=2;if(isArray(arr[0]))arr=arr[0];for(;i<arr.length;i++){nnorm+=Math.pow(Math.abs(arr[i]),p);}
return Math.pow(nnorm,1/p);},angle:function angle(arr,arg){return Math.acos(jStat.dot(arr,arg)/(jStat.norm(arr)*jStat.norm(arg)));},aug:function aug(a,b){var newarr=a.slice(),i=0;for(;i<newarr.length;i++){push.apply(newarr[i],b[i]);}
return newarr;},inv:function inv(a){var rows=a.length,cols=a[0].length,b=jStat.identity(rows,cols),c=jStat.gauss_jordan(a,b),obj=[],i=0,j;for(;i<rows;i++){obj[i]=[];for(j=cols-1;j<c[0].length;j++)
obj[i][j-cols]=c[i][j];}
return obj;},det:function det(a){var alen=a.length,alend=alen*2,vals=new Array(alend),rowshift=alen-1,colshift=alend-1,mrow=rowshift-alen+1,mcol=colshift,i=0,result=0,j;if(alen===2){return a[0][0]*a[1][1]-a[0][1]*a[1][0];}
for(;i<alend;i++){vals[i]=1;}
for(i=0;i<alen;i++){for(j=0;j<alen;j++){vals[(mrow<0)?mrow+alen:mrow]*=a[i][j];vals[(mcol<alen)?mcol+alen:mcol]*=a[i][j];mrow++;mcol--;}
mrow=--rowshift-alen+1;mcol=--colshift;}
for(i=0;i<alen;i++){result+=vals[i];}
for(;i<alend;i++){result-=vals[i];}
return result;},gauss_elimination:function gauss_elimination(a,b){var i=0,j=0,n=a.length,m=a[0].length,factor=1,sum=0,x=[],maug,pivot,temp,k;a=jStat.aug(a,b);maug=a[0].length;for(;i<n;i++){pivot=a[i][i];j=i;for(k=i+1;k<m;k++){if(pivot<Math.abs(a[k][i])){pivot=a[k][i];j=k;}}
if(j!=i){for(k=0;k<maug;k++){temp=a[i][k];a[i][k]=a[j][k];a[j][k]=temp;}}
for(j=i+1;j<n;j++){factor=a[j][i]/a[i][i];for(k=i;k<maug;k++){a[j][k]=a[j][k]-factor*a[i][k];}}}
for(i=n-1;i>=0;i--){sum=0;for(j=i+1;j<=n-1;j++){sum=x[j]*a[i][j];}
x[i]=(a[i][maug-1]-sum)/a[i][i];}
return x;},gauss_jordan:function gauss_jordan(a,b){var m=jStat.aug(a,b),h=m.length,w=m[0].length;for(var y=0;y<h;y++){var maxrow=y;for(var y2=y+1;y2<h;y2++){if(Math.abs(m[y2][y])>Math.abs(m[maxrow][y]))
maxrow=y2;}
var tmp=m[y];m[y]=m[maxrow];m[maxrow]=tmp
for(var y2=y+1;y2<h;y2++){c=m[y2][y]/m[y][y];for(var x=y;x<w;x++){m[y2][x]-=m[y][x]*c;}}}
for(var y=h-1;y>=0;y--){c=m[y][y];for(var y2=0;y2<y;y2++){for(var x=w-1;x>y-1;x--){m[y2][x]-=m[y][x]*m[y2][y]/c;}}
m[y][y]/=c;for(var x=h;x<w;x++){m[y][x]/=c;}}
return m;},lu:function lu(a,b){throw new Error('lu not yet implemented');},cholesky:function cholesky(a,b){throw new Error('cholesky not yet implemented');},gauss_jacobi:function gauss_jacobi(a,b,x,r){var i=0;var j=0;var n=a.length;var l=[];var u=[];var d=[];var xv,c,h,xk;for(;i<n;i++){l[i]=[];u[i]=[];d[i]=[];for(j=0;j<n;j++){if(i>j){l[i][j]=a[i][j];u[i][j]=d[i][j]=0;}else if(i<j){u[i][j]=a[i][j];l[i][j]=d[i][j]=0;}else{d[i][j]=a[i][j];l[i][j]=u[i][j]=0;}}}
h=jStat.multiply(jStat.multiply(jStat.inv(d),jStat.add(l,u)),-1);c=jStat.multiply(jStat.inv(d),b);xv=x;xk=jStat.add(jStat.multiply(h,x),c);i=2;while(Math.abs(jStat.norm(jStat.subtract(xk,xv)))>r){xv=xk;xk=jStat.add(jStat.multiply(h,xv),c);i++;}
return xk;},gauss_seidel:function gauss_seidel(a,b,x,r){var i=0;var n=a.length;var l=[];var u=[];var d=[];var j,xv,c,h,xk;for(;i<n;i++){l[i]=[];u[i]=[];d[i]=[];for(j=0;j<n;j++){if(i>j){l[i][j]=a[i][j];u[i][j]=d[i][j]=0;}else if(i<j){u[i][j]=a[i][j];l[i][j]=d[i][j]=0;}else{d[i][j]=a[i][j];l[i][j]=u[i][j]=0;}}}
h=jStat.multiply(jStat.multiply(jStat.inv(jStat.add(d,l)),u),-1);c=jStat.multiply(jStat.inv(jStat.add(d,l)),b);xv=x;xk=jStat.add(jStat.multiply(h,x),c);i=2;while(Math.abs(jStat.norm(jStat.subtract(xk,xv)))>r){xv=xk;xk=jStat.add(jStat.multiply(h,xv),c);i=i+1;}
return xk;},SOR:function SOR(a,b,x,r,w){var i=0;var n=a.length;var l=[];var u=[];var d=[];var j,xv,c,h,xk;for(;i<n;i++){l[i]=[];u[i]=[];d[i]=[];for(j=0;j<n;j++){if(i>j){l[i][j]=a[i][j];u[i][j]=d[i][j]=0;}else if(i<j){u[i][j]=a[i][j];l[i][j]=d[i][j]=0;}else{d[i][j]=a[i][j];l[i][j]=u[i][j]=0;}}}
h=jStat.multiply(jStat.inv(jStat.add(d,jStat.multiply(l,w))),jStat.subtract(jStat.multiply(d,1-w),jStat.multiply(u,w)));c=jStat.multiply(jStat.multiply(jStat.inv(jStat.add(d,jStat.multiply(l,w))),b),w);xv=x;xk=jStat.add(jStat.multiply(h,x),c);i=2;while(Math.abs(jStat.norm(jStat.subtract(xk,xv)))>r){xv=xk;xk=jStat.add(jStat.multiply(h,xv),c);i++;}
return xk;},householder:function householder(a){var m=a.length;var n=a[0].length;var i=0;var w=[];var p=[];var alpha,r,k,j,factor;for(;i<m-1;i++){alpha=0;for(j=i+1;j<n;j++)
alpha+=(a[j][i]*a[j][i]);factor=(a[i+1][i]>0)?-1:1;alpha=factor*Math.sqrt(alpha);r=Math.sqrt((((alpha*alpha)-a[i+1][i]*alpha)/2));w=jStat.zeros(m,1);w[i+1][0]=(a[i+1][i]-alpha)/(2*r);for(k=i+2;k<m;k++)w[k][0]=a[k][i]/(2*r);p=jStat.subtract(jStat.identity(m,n),jStat.multiply(jStat.multiply(w,jStat.transpose(w)),2));a=jStat.multiply(p,jStat.multiply(a,p));}
return a;},QR:function QR(a,b){var m=a.length;var n=a[0].length;var i=0;var w=[];var p=[];var x=[];var j,alpha,r,k,factor,sum;for(;i<m-1;i++){alpha=0;for(j=i+1;j<n;j++)
alpha+=(a[j][i]*a[j][i]);factor=(a[i+1][i]>0)?-1:1;alpha=factor*Math.sqrt(alpha);r=Math.sqrt((((alpha*alpha)-a[i+1][i]*alpha)/2));w=jStat.zeros(m,1);w[i+1][0]=(a[i+1][i]-alpha)/(2*r);for(k=i+2;k<m;k++)
w[k][0]=a[k][i]/(2*r);p=jStat.subtract(jStat.identity(m,n),jStat.multiply(jStat.multiply(w,jStat.transpose(w)),2));a=jStat.multiply(p,a);b=jStat.multiply(p,b);}
for(i=m-1;i>=0;i--){sum=0;for(j=i+1;j<=n-1;j++)
sum=x[j]*a[i][j];x[i]=b[i][0]/a[i][i];}
return x;},jacobi:function jacobi(a){var condition=1;var count=0;var n=a.length;var e=jStat.identity(n,n);var ev=[];var b,i,j,p,q,maxim,theta,s;while(condition===1){count++;maxim=a[0][1];p=0;q=1;for(i=0;i<n;i++){for(j=0;j<n;j++){if(i!=j){if(maxim<Math.abs(a[i][j])){maxim=Math.abs(a[i][j]);p=i;q=j;}}}}
if(a[p][p]===a[q][q])
theta=(a[p][q]>0)?Math.PI/4:-Math.PI/4;else
theta=Math.atan(2*a[p][q]/(a[p][p]-a[q][q]))/2;s=jStat.identity(n,n);s[p][p]=Math.cos(theta);s[p][q]=-Math.sin(theta);s[q][p]=Math.sin(theta);s[q][q]=Math.cos(theta);e=jStat.multiply(e,s);b=jStat.multiply(jStat.multiply(jStat.inv(s),a),s);a=b;condition=0;for(i=1;i<n;i++){for(j=1;j<n;j++){if(i!=j&&Math.abs(a[i][j])>0.001){condition=1;}}}}
for(i=0;i<n;i++)ev.push(a[i][i]);return[e,ev];},rungekutta:function rungekutta(f,h,p,t_j,u_j,order){var k1,k2,u_j1,k3,k4;if(order===2){while(t_j<=p){k1=h*f(t_j,u_j);k2=h*f(t_j+h,u_j+k1);u_j1=u_j+(k1+k2)/2;u_j=u_j1;t_j=t_j+h;}}
if(order===4){while(t_j<=p){k1=h*f(t_j,u_j);k2=h*f(t_j+h/2,u_j+k1/2);k3=h*f(t_j+h/2,u_j+k2/2);k4=h*f(t_j+h,u_j+k3);u_j1=u_j+(k1+2*k2+2*k3+k4)/6;u_j=u_j1;t_j=t_j+h;}}
return u_j;},romberg:function romberg(f,a,b,order){var i=0;var h=(b-a)/2;var x=[];var h1=[];var g=[];var m,a1,j,k,I,d;while(i<order/2){I=f(a);for(j=a,k=0;j<=b;j=j+h,k++)x[k]=j;m=x.length;for(j=1;j<m-1;j++){I+=(((j%2)!==0)?4:2)*f(x[j]);}
I=(h/3)*(I+f(b));g[i]=I;h/=2;i++;}
a1=g.length;m=1;while(a1!==1){for(j=0;j<a1-1;j++)
h1[j]=((Math.pow(4,m))*g[j+1]-g[j])/(Math.pow(4,m)-1);a1=h1.length;g=h1;h1=[];m++;}
return g;},richardson:function richardson(X,f,x,h){function pos(X,x){var i=0;var n=X.length;var p;for(;i<n;i++)
if(X[i]===x)p=i;return p;}
var n=X.length,h_min=Math.abs(x-X[pos(X,x)+1]),i=0,g=[],h1=[],y1,y2,m,a,j;while(h>=h_min){y1=pos(X,x+h);y2=pos(X,x);g[i]=(f[y1]-2*f[y2]+f[2*y2-y1])/(h*h);h/=2;i++;}
a=g.length;m=1;while(a!=1){for(j=0;j<a-1;j++)
h1[j]=((Math.pow(4,m))*g[j+1]-g[j])/(Math.pow(4,m)-1);a=h1.length;g=h1;h1=[];m++;}
return g;},simpson:function simpson(f,a,b,n){var h=(b-a)/n;var I=f(a);var x=[];var j=a;var k=0;var i=1;var m;for(;j<=b;j=j+h,k++)
x[k]=j;m=x.length;for(;i<m-1;i++){I+=((i%2!==0)?4:2)*f(x[i]);}
return(h/3)*(I+f(b));},hermite:function hermite(X,F,dF,value){var n=X.length;var p=0;var i=0;var l=[];var dl=[];var A=[];var B=[];var j;for(;i<n;i++){l[i]=1;for(j=0;j<n;j++){if(i!=j)l[i]*=(value-X[j])/(X[i]-X[j]);}
dl[i]=0;for(j=0;j<n;j++){if(i!=j)dl[i]+=1/(X[i]-X[j]);}
A[i]=(1-2*(value-X[i])*dl[i])*(l[i]*l[i]);B[i]=(value-X[i])*(l[i]*l[i]);p+=(A[i]*F[i]+B[i]*dF[i]);}
return p;},lagrange:function lagrange(X,F,value){var p=0;var i=0;var j,l;var n=X.length;for(;i<n;i++){l=F[i];for(j=0;j<n;j++){if(i!=j)l*=(value-X[j])/(X[i]-X[j]);}
p+=l;}
return p;},cubic_spline:function cubic_spline(X,F,value){var n=X.length;var i=0,j;var A=[];var B=[];var alpha=[];var c=[];var h=[];var b=[];var d=[];for(;i<n-1;i++)
h[i]=X[i+1]-X[i];alpha[0]=0;for(i=1;i<n-1;i++){alpha[i]=(3/h[i])*(F[i+1]-F[i])-
(3/h[i-1])*(F[i]-F[i-1]);}
for(i=1;i<n-1;i++){A[i]=[];B[i]=[];A[i][i-1]=h[i-1];A[i][i]=2*(h[i-1]+h[i]);A[i][i+1]=h[i];B[i][0]=alpha[i];}
c=jStat.multiply(jStat.inv(A),B);for(j=0;j<n-1;j++){b[j]=(F[j+1]-F[j])/h[j]-h[j]*(c[j+1][0]+2*c[j][0])/3;d[j]=(c[j+1][0]-c[j][0])/(3*h[j]);}
for(j=0;j<n;j++){if(X[j]>value)break;}
j-=1;return F[j]+(value-X[j])*b[j]+jStat.sq(value-X[j])*c[j]+(value-X[j])*jStat.sq(value-X[j])*d[j];},gauss_quadrature:function gauss_quadrature(){throw new Error('gauss_quadrature not yet implemented');},PCA:function PCA(X){var m=X.length;var n=X[0].length;var flag=false;var i=0;var j,temp1;var u=[];var D=[];var result=[];var temp2=[];var Y=[];var Bt=[];var B=[];var C=[];var V=[];var Vt=[];for(i=0;i<m;i++){u[i]=jStat.sum(X[i])/n;}
for(i=0;i<n;i++){B[i]=[];for(j=0;j<m;j++){B[i][j]=X[j][i]-u[j];}}
B=jStat.transpose(B);for(i=0;i<m;i++){C[i]=[];for(j=0;j<m;j++){C[i][j]=(jStat.dot([B[i]],[B[j]]))/(n-1);}}
result=jStat.jacobi(C);V=result[0];D=result[1];Vt=jStat.transpose(V);for(i=0;i<D.length;i++){for(j=i;j<D.length;j++){if(D[i]<D[j]){temp1=D[i];D[i]=D[j];D[j]=temp1;temp2=Vt[i];Vt[i]=Vt[j];Vt[j]=temp2;}}}
Bt=jStat.transpose(B);for(i=0;i<m;i++){Y[i]=[];for(j=0;j<Bt.length;j++){Y[i][j]=jStat.dot([Vt[i]],[Bt[j]]);}}
return[X,D,Vt,Y];}});(function(funcs){for(var i=0;i<funcs.length;i++)(function(passfunc){jStat.fn[passfunc]=function(arg,func){var tmpthis=this;if(func){setTimeout(function(){func.call(tmpthis,jStat.fn[passfunc].call(tmpthis,arg));},15);return this;}
return jStat(jStat[passfunc](this,arg));};}(funcs[i]));}('add divide multiply subtract dot pow abs norm angle'.split(' ')));}(this.jStat,Math));(function(jStat,Math){var slice=[].slice;var isNumber=jStat.utils.isNumber;jStat.extend({zscore:function zscore(){var args=slice.call(arguments);if(isNumber(args[1])){return(args[0]-args[1])/args[2];}
return(args[0]-jStat.mean(args[1]))/jStat.stdev(args[1],args[2]);},ztest:function ztest(){var args=slice.call(arguments);if(args.length===4){if(isNumber(args[1])){var z=jStat.zscore(args[0],args[1],args[2])
return(args[3]===1)?(jStat.normal.cdf(-Math.abs(z),0,1)):(jStat.normal.cdf(-Math.abs(z),0,1)*2);}
var z=args[0]
return(args[2]===1)?(jStat.normal.cdf(-Math.abs(z),0,1)):(jStat.normal.cdf(-Math.abs(z),0,1)*2);}
var z=jStat.zscore(args[0],args[1],args[3])
return(args[1]===1)?(jStat.normal.cdf(-Math.abs(z),0,1)):(jStat.normal.cdf(-Math.abs(z),0,1)*2);}});jStat.extend(jStat.fn,{zscore:function zscore(value,flag){return(value-this.mean())/this.stdev(flag);},ztest:function ztest(value,sides,flag){var zscore=Math.abs(this.zscore(value,flag));return(sides===1)?(jStat.normal.cdf(-zscore,0,1)):(jStat.normal.cdf(-zscore,0,1)*2);}});jStat.extend({tscore:function tscore(){var args=slice.call(arguments);return(args.length===4)?((args[0]-args[1])/(args[2]/Math.sqrt(args[3]))):((args[0]-jStat.mean(args[1]))/(jStat.stdev(args[1],true)/Math.sqrt(args[1].length)));},ttest:function ttest(){var args=slice.call(arguments);var tscore;if(args.length===5){tscore=Math.abs(jStat.tscore(args[0],args[1],args[2],args[3]));return(args[4]===1)?(jStat.studentt.cdf(-tscore,args[3]-1)):(jStat.studentt.cdf(-tscore,args[3]-1)*2);}
if(isNumber(args[1])){tscore=Math.abs(args[0])
return(args[2]==1)?(jStat.studentt.cdf(-tscore,args[1]-1)):(jStat.studentt.cdf(-tscore,args[1]-1)*2);}
tscore=Math.abs(jStat.tscore(args[0],args[1]))
return(args[2]==1)?(jStat.studentt.cdf(-tscore,args[1].length-1)):(jStat.studentt.cdf(-tscore,args[1].length-1)*2);}});jStat.extend(jStat.fn,{tscore:function tscore(value){return(value-this.mean())/(this.stdev(true)/Math.sqrt(this.cols()));},ttest:function ttest(value,sides){return(sides===1)?(1-jStat.studentt.cdf(Math.abs(this.tscore(value)),this.cols()-1)):(jStat.studentt.cdf(-Math.abs(this.tscore(value)),this.cols()-1)*2);}});jStat.extend({anovafscore:function anovafscore(){var args=slice.call(arguments),expVar,sample,sampMean,sampSampMean,tmpargs,unexpVar,i,j;if(args.length===1){tmpargs=new Array(args[0].length);for(i=0;i<args[0].length;i++){tmpargs[i]=args[0][i];}
args=tmpargs;}
if(args.length===2){return jStat.variance(args[0])/jStat.variance(args[1]);}
sample=new Array();for(i=0;i<args.length;i++){sample=sample.concat(args[i]);}
sampMean=jStat.mean(sample);expVar=0;for(i=0;i<args.length;i++){expVar=expVar+args[i].length*Math.pow(jStat.mean(args[i])-sampMean,2);}
expVar/=(args.length-1);unexpVar=0;for(i=0;i<args.length;i++){sampSampMean=jStat.mean(args[i]);for(j=0;j<args[i].length;j++){unexpVar+=Math.pow(args[i][j]-sampSampMean,2);}}
unexpVar/=(sample.length-args.length);return expVar/unexpVar;},anovaftest:function anovaftest(){var args=slice.call(arguments),df1,df2,n,i;if(isNumber(args[0])){return 1-jStat.centralF.cdf(args[0],args[1],args[2]);}
anovafscore=jStat.anovafscore(args);df1=args.length-1;n=0;for(i=0;i<args.length;i++){n=n+args[i].length;}
df2=n-df1-1;return 1-jStat.centralF.cdf(anovafscore,df1,df2);},ftest:function ftest(fscore,df1,df2){return 1-jStat.centralF.cdf(fscore,df1,df2);}});jStat.extend(jStat.fn,{anovafscore:function anovafscore(){return jStat.anovafscore(this.toArray());},anovaftes:function anovaftes(){var n=0;var i;for(i=0;i<this.length;i++){n=n+this[i].length;}
return jStat.ftest(this.anovafscore(),this.length-1,n-this.length);}});jStat.extend({normalci:function normalci(){var args=slice.call(arguments),ans=new Array(2),change;if(args.length===4){change=Math.abs(jStat.normal.inv(args[1]/2,0,1)*args[2]/Math.sqrt(args[3]));}else{change=Math.abs(jStat.normal.inv(args[1]/2,0,1)*jStat.stdev(args[2])/Math.sqrt(args[2].length));}
ans[0]=args[0]-change;ans[1]=args[0]+change;return ans;},tci:function tci(){var args=slice.call(arguments),ans=new Array(2),change;if(args.length===4){change=Math.abs(jStat.studentt.inv(args[1]/2,args[3]-1)*args[2]/Math.sqrt(args[3]));}else{change=Math.abs(jStat.studentt.inv(args[1]/2,args[2].length-1)*jStat.stdev(args[2],true)/Math.sqrt(args[2].length));}
ans[0]=args[0]-change;ans[1]=args[0]+change;return ans;},significant:function significant(pvalue,alpha){return pvalue<alpha;}});jStat.extend(jStat.fn,{normalci:function normalci(value,alpha){return jStat.normalci(value,alpha,this.toArray());},tci:function tci(value,alpha){return jStat.tci(value,alpha,this.toArray());}});}(this.jStat,Math));(function(){var root=this;var Formula=root.Formula={};var _=root._;var numeral=root.numeral;var jStat=root.jStat;var moment=root.moment;var lodash=_;var md5=root.md5;var _s=_.str;if(typeof exports!=="undefined"){module.exports=exportModule(require('numeral'),require('jStat'),require('moment'),require('lodash'),require('underscore.string'),require('blueimp-md5'));}else if(typeof define==="function"&&define.amd){define('formula',['numeral','jstat','moment','lodash','underscore.string','md5'],exportModule);}else{Formula=exportModule(numeral,jStat,moment,lodash,_s,md5);return Formula;}
function exportModule(numeral,jStat,moment,_,_s,md5){var MEMOIZED_FACT=[];var SQRT2PI=2.5066282746310002;var WEEK_STARTS=[undefined,0,1,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,1,2,3,4,5,6,0];var WEEK_TYPES=[[],[1,2,3,4,5,6,7],[7,1,2,3,4,5,6],[6,0,1,2,3,4,5],[],[],[],[],[],[],[],[7,1,2,3,4,5,6],[6,7,1,2,3,4,5],[5,6,7,1,2,3,4],[4,5,6,7,1,2,3],[3,4,5,6,7,1,2],[2,3,4,5,6,7,1],[1,2,3,4,5,6,7]];var WEEKEND_TYPES=[[],[6,0],[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],undefined,undefined,undefined,[0],[1],[2],[3],[4],[5],[6]];var simplifyArguments=function(arguments){for(var prop in arguments){if(_.isArray(arguments[prop])){arguments[prop]=Formula.FLATTEN(arguments[prop]);}}
return arguments;};Formula.UNIQUE=function(){return _.unique(arguments);};Formula.FLATTEN=function(){return _.flatten(arguments);};Formula.FLATTENSINGLE=function(value){value=Formula.FLATTEN(value);return value[0];};Formula.FUNCTION=function(){var args=Array.prototype.slice.call(arguments);var expression=args[args.length-1];var regexp=/(\w+)\(/g;var newExpression=expression.replace(regexp,function(){return"Formulae."+arguments[0];});args[args.length-1]="return "+newExpression+";";if(newExpression!==expression){args.unshift('Formulae');}
return Function.apply(null,args);};Formula.MOMENT=function(timestamp,format){return moment(timestamp).format(format);};Formula.MOMENTADD=function(start_date,period,number){return moment(start_date).add(period,number);};Formula.MOMENTDIFF=function(start_date,end_date,period){return moment(end_date).diff(moment.utc(start_date),period);};Formula.MOMENTSUB=function(start_date,period,number){return moment(start_date).subtract(period,number);};Formula.MOMENTUTC=function(timestamp,format){return moment.utc(timestamp).format(format);};Formula.MOMENTUTCADD=function(start_date,period,number){return moment.utc(start_date).add(period,number);};Formula.MOMENTUTCDIFF=function(start_date,end_date,period){return moment.utc(end_date).diff(moment.utc(start_date),period);};Formula.MOMENTUTCSUB=function(start_date,period,number){return moment.utc(start_date).subtract(period,number);};Formula.MOMENTUNIX=function(unixTime){return moment.unix(unixTime).toDate();};Formula.MOMENTFORMAT=function(date,format){return moment(date).format(format);};Formula.MOMENTISLEAPYEAR=function(date,format){return moment(date,format).isLeapYear();};Formula.MOMENTISDST=function(date,format){return moment(date,format).isDST();};Formula.MOMENTSTARTOF=function(date,units,format){return moment(date,format).startOf(units).toDate();};Formula.MOMENTENDOF=function(date,units,format){return moment(date,format).endOf(units).toDate();};Formula.MOMENTISAFTER=function(date1,date2,format){return moment(date1,format).isAfter(moment(date2,format));};Formula.MOMENTISBEFORE=function(date1,date2,format){return moment(date1,format).isBefore(moment(date2,format));};Formula.INTERVAL=function(second){var year=Math.floor(second/946080000);second=second%946080000;var month=Math.floor(second/2592000);second=second%2592000;var day=Math.floor(second/86400);second=second%86400;var hour=Math.floor(second/3600);second=second%3600;var min=Math.floor(second/60);second=second%60;var sec=second;year=(year>0)?year+'Y':'';month=(month>0)?month+'M':'';day=(day>0)?day+'D':'';hour=(hour>0)?hour+'H':'';min=(min>0)?min+'M':'';sec=(sec>0)?sec+'S':'';return'P'+year+month+day+'T'+hour+min+sec;};Formula.ARGSCONCAT=function(args){var result=[];for(var i=0;i<args.length;i++){result=result.concat(args[i]);}
return result;};Formula.ARGSTOARRAY=function(args){return Array.prototype.slice.call(args,0);};Formula.CLEANFLOAT=function(number){var power=Math.pow(10,14);return Math.round(number*power)/power;};Formula.COUNTIN=function(range,value){var result=0;for(var i=0;i<range.length;i++){if(range[i]===value){result++;}}
return result;};Formula.FINDFIELD=function(database,title){var index=null;for(var i=0;i<database.length;i++){if(database[i][0]===title){index=i;break;}}
if(index==null){return'#VALUE!';}
return index;};Formula.FINDRESULTINDEX=function(database,criteria){var maxCriteriaLength=criteria[0].length;for(var i=1;i<criteria.length;i++){if(criteria[i].length>maxCriteriaLength){maxCriteriaLength=criteria[i].length;}}
var columnResultIndexes=[];for(i=1;i<maxCriteriaLength;i++){var rowResultIndexes=[];for(var j=0;j<criteria.length;j++){if(criteria[j].length<maxCriteriaLength){continue;}
var criteriaTitle=criteria[j][0];var criteriaIndex=Formula.FINDFIELD(database,criteriaTitle);var criteriaValues=_.rest(database[criteriaIndex]);var count=0;var singleResultIndexes=[];for(var k=0;k<criteriaValues.length;k++){if(eval(criteriaValues[k]+criteria[j][i])){singleResultIndexes[count++]=k;}}
rowResultIndexes[j]=singleResultIndexes;}
columnResultIndexes[i-1]=_.intersection.apply(_,rowResultIndexes);}
var resultIndexes=_.union.apply(_,columnResultIndexes);return resultIndexes;};Formula.DAVERAGE=function(database,field,criteria){if(isNaN(field)&&(typeof field!=="string")){return'#VALUE!';}
var resultIndexes=Formula.FINDRESULTINDEX(database,criteria);var targetFields=[];if(typeof field==="string"){var index=Formula.FINDFIELD(database,field);targetFields=_.rest(database[index]);}else{targetFields=_.rest(database[field]);}
var sum=0;for(var i=0;i<resultIndexes.length;i++){sum+=targetFields[resultIndexes[i]];}
var average=Formula.IF(resultIndexes.length===0,"#DIV/0!",sum/resultIndexes.length);return average;};Formula.DCOUNT=function(database,field,criteria){if(isNaN(field)&&(typeof field!=="string")){return'#VALUE!';}
var resultIndexes=Formula.FINDRESULTINDEX(database,criteria);var targetFields=[];if(typeof field==="string"){var index=Formula.FINDFIELD(database,field);targetFields=_.rest(database[index]);}else{targetFields=_.rest(database[field]);}
var targetValues=[];for(var i=0;i<resultIndexes.length;i++){targetValues[i]=targetFields[resultIndexes[i]];}
return Formula.COUNT(targetValues);};Formula.DCOUNTA=function(database,field,criteria){if(isNaN(field)&&(typeof field!=="string")){return'#VALUE!';}
var resultIndexes=Formula.FINDRESULTINDEX(database,criteria);var targetFields=[];if(typeof field==="string"){var index=Formula.FINDFIELD(database,field);targetFields=_.rest(database[index]);}else{targetFields=_.rest(database[field]);}
var targetValues=[];for(var i=0;i<resultIndexes.length;i++){targetValues[i]=targetFields[resultIndexes[i]];}
return Formula.COUNTA(targetValues);};Formula.DGET=function(database,field,criteria){if(isNaN(field)&&(typeof field!=="string")){return'#VALUE!';}
var resultIndexes=Formula.FINDRESULTINDEX(database,criteria);var targetFields=[];if(typeof field==="string"){var index=Formula.FINDFIELD(database,field);targetFields=_.rest(database[index]);}else{targetFields=_.rest(database[field]);}
if(resultIndexes.length===0){return'#VALUE!';}
if(resultIndexes.length>1){return'#NUM!';}
return targetFields[resultIndexes[0]];};Formula.DMAX=function(database,field,criteria){if(isNaN(field)&&(typeof field!=="string")){return'#VALUE!';}
var resultIndexes=Formula.FINDRESULTINDEX(database,criteria);var targetFields=[];if(typeof field==="string"){var index=Formula.FINDFIELD(database,field);targetFields=_.rest(database[index]);}else{targetFields=_.rest(database[field]);}
var maxValue=targetFields[resultIndexes[0]];for(var i=1;i<resultIndexes.length;i++){if(maxValue<targetFields[resultIndexes[i]]){maxValue=targetFields[resultIndexes[i]];}}
return maxValue;};Formula.DMIN=function(database,field,criteria){if(isNaN(field)&&(typeof field!=="string")){return'#VALUE!';}
var resultIndexes=Formula.FINDRESULTINDEX(database,criteria);var targetFields=[];if(typeof field==="string"){var index=Formula.FINDFIELD(database,field);targetFields=_.rest(database[index]);}else{targetFields=_.rest(database[field]);}
var minValue=targetFields[resultIndexes[0]];for(var i=1;i<resultIndexes.length;i++){if(minValue>targetFields[resultIndexes[i]]){minValue=targetFields[resultIndexes[i]];}}
return minValue;};Formula.DPRODUCT=function(database,field,criteria){if(isNaN(field)&&(typeof field!=="string")){return'#VALUE!';}
var resultIndexes=Formula.FINDRESULTINDEX(database,criteria);var targetFields=[];if(typeof field==="string"){var index=Formula.FINDFIELD(database,field);targetFields=_.rest(database[index]);}else{targetFields=_.rest(database[field]);}
var targetValues=[];for(var i=0;i<resultIndexes.length;i++){targetValues[i]=targetFields[resultIndexes[i]];}
targetValues=_.compact(targetValues);var result=1;for(i=0;i<targetValues.length;i++){result*=targetValues[i];}
return result;};Formula.DSTDEV=function(database,field,criteria){if(isNaN(field)&&(typeof field!=="string")){return'#VALUE!';}
var resultIndexes=Formula.FINDRESULTINDEX(database,criteria);var targetFields=[];if(typeof field==="string"){var index=Formula.FINDFIELD(database,field);targetFields=_.rest(database[index]);}else{targetFields=_.rest(database[field]);}
var targetValues=[];for(var i=0;i<resultIndexes.length;i++){targetValues[i]=targetFields[resultIndexes[i]];}
targetValues=_.compact(targetValues);return Formula.STDEVS(targetValues);};Formula.DSTDEVP=function(database,field,criteria){if(isNaN(field)&&(typeof field!=="string")){return'#VALUE!';}
var resultIndexes=Formula.FINDRESULTINDEX(database,criteria);var targetFields=[];if(typeof field==="string"){var index=Formula.FINDFIELD(database,field);targetFields=_.rest(database[index]);}else{targetFields=_.rest(database[field]);}
var targetValues=[];for(var i=0;i<resultIndexes.length;i++){targetValues[i]=targetFields[resultIndexes[i]];}
targetValues=_.compact(targetValues);return Formula.STDEVP(targetValues);};Formula.DSUM=function(database,field,criteria){if(isNaN(field)&&(typeof field!=="string")){return'#VALUE!';}
var resultIndexes=Formula.FINDRESULTINDEX(database,criteria);var targetFields=[];if(typeof field==="string"){var index=Formula.FINDFIELD(database,field);targetFields=_.rest(database[index]);}else{targetFields=_.rest(database[field]);}
var targetValues=[];for(var i=0;i<resultIndexes.length;i++){targetValues[i]=targetFields[resultIndexes[i]];}
return Formula.SUM(targetValues);};Formula.DVAR=function(database,field,criteria){if(isNaN(field)&&(typeof field!=="string")){return'#VALUE!';}
var resultIndexes=Formula.FINDRESULTINDEX(database,criteria);var targetFields=[];if(typeof field==="string"){var index=Formula.FINDFIELD(database,field);targetFields=_.rest(database[index]);}else{targetFields=_.rest(database[field]);}
var targetValues=[];for(var i=0;i<resultIndexes.length;i++){targetValues[i]=targetFields[resultIndexes[i]];}
return Formula.VARS(targetValues);};Formula.DVARP=function(database,field,criteria){if(isNaN(field)&&(typeof field!=="string")){return'#VALUE!';}
var resultIndexes=Formula.FINDRESULTINDEX(database,criteria);var targetFields=[];if(typeof field==="string"){var index=Formula.FINDFIELD(database,field);targetFields=_.rest(database[index]);}else{targetFields=_.rest(database[field]);}
var targetValues=[];for(var i=0;i<resultIndexes.length;i++){targetValues[i]=targetFields[resultIndexes[i]];}
return Formula.VARP(targetValues);};Formula.GETJSON=function(file){var request=new XMLHttpRequest();request.open('GET',file,false);request.send(null);if(request.status===200){return JSON.parse(request.responseText);}};Formula.DATE=function(){var args=arguments;if(!args.length){return moment().format(window.supsystic.Tables._dateFormat);}
if(args.length===3){args[1]=args[1]-1;return moment(new Date(args[0],args[1],args[2])).format(window.supsystic.Tables._dateFormat);}
return'N/A';};Formula.DATEVALUE=function(date_text){return Math.ceil((moment(date_text,window.supsystic.Tables._dateFormat)-moment('1900-01-01','YYYY-MM-DD'))/86400000)+2;};Formula.DAY=function(date){return moment(date,window.supsystic.Tables._dateFormat).date();};Formula.DAYS=function(end_date,start_date){return moment(end_date,window.supsystic.Tables._dateFormat).diff(moment(start_date,window.supsystic.Tables._dateFormat),'days');};Formula.DAYS360=function(start_date,end_date,method){var start=moment(start_date,window.supsystic.Tables._dateFormat);var end=moment(end_date,window.supsystic.Tables._dateFormat);var smd=31;var emd=31;var sd=start.date();var ed=end.date();if(method){sd=(sd===31)?30:sd;ed=(ed===31)?30:ed;}
else{if(start.month()===1){smd=start.daysInMonth();}
if(end.month()===1){emd=end.daysInMonth();}
sd=(sd===smd)?30:sd;if(sd===30||sd===smd){ed=(ed===emd)?30:ed;}}
return 360*(end.year()-start.year())+30*(end.month()-start.month())+(ed-sd);};Formula.EDATE=function(start_date,months){return moment(start_date,window.supsystic.Tables._dateFormat).add(months,'months').format(window.supsystic.Tables._dateFormat);};Formula.EOMONTH=function(start_date,months){var edate=moment(start_date,window.supsystic.Tables._dateFormat).add(months,'months').toDate(),ndate=new Date(edate.getFullYear(),edate.getMonth(),new Date(edate.getFullYear(),edate.getMonth()+1,0).getDate());return moment(ndate).format(window.supsystic.Tables._dateFormat);};Formula.FROMNOW=function(timestamp,nosuffix){return moment(new Date(timestamp)).fromNow(nosuffix);};Formula.HOUR=function(timestamp){if(isNaN(timestamp)){return moment(timestamp,window.supsystic.Tables._timeFormat).hours();}else{return(timestamp<=1)?Math.floor(24*timestamp):new Date(timestamp).getHours();}};Formula.MINUTE=function(timestamp){if(isNaN(timestamp)){return moment(timestamp,window.supsystic.Tables._timeFormat).minutes();}else{return(timestamp<=1)?Math.floor(24*60*timestamp)-60*Math.floor(24*timestamp):new Date(timestamp).getMinutes();}};Formula.ISOWEEKNUM=function(date){return moment(date,window.supsystic.Tables._dateFormat).isoWeek();};Formula.MONTH=function(timestamp){if(isNaN(timestamp)){return moment(timestamp,window.supsystic.Tables._dateFormat).month()+1;}else{return new Date(timestamp).getMonth()+1;}};Formula.NETWORKDAYS=function(start_date,end_date,holidays){return Formula.NETWORKDAYSINTL(start_date,end_date,1,holidays);};Formula.NETWORKDAYSINTL=function(start_date,end_date,weekend,holidays){var weekend_type=(typeof weekend==='undefined')?1:weekend;var weekend_days=WEEKEND_TYPES[weekend_type];var sd=moment(start_date);var ed=moment(end_date);var net_days=ed.diff(sd,'days')+1;var net_work_days=net_days;var cd=sd;var holiday_dates=[];if(typeof holidays!=='undefined'){for(var i=0;i<holidays.length;i++){holiday_dates[i]=moment(new Date(holidays[i])).format('MM-DD-YYYY');}}
if(!weekend_days.length&&!holiday_dates.length){return net_work_days;}
var j=0;while(j<net_days){if(weekend_days.indexOf(parseInt(cd.format('d'),10))>=0){net_work_days--;}else if(holiday_dates.indexOf(cd.format('MM-DD-YYYY'))>=0){net_work_days--;}
cd=cd.add('days',1);j++;}
return net_work_days;};Formula.NOW=function(){return moment().format(window.supsystic.Tables._dateFormat);};Formula.SECOND=function(timestamp){return new Date(timestamp).getSeconds();};Formula.TIME=function(hour,minute,second){return(3600*hour+60*minute+second)/86400;};Formula.TIMEVALUE=function(time_text){var timestamp=new Date(time_text);return(3600*timestamp.getHours()+60*timestamp.getMinutes()+timestamp.getSeconds())/86400;};Formula.TODAY=Formula.NOW;Formula.WEEKDAY=function(date,type){var week_day=moment(new Date(date)).format('d');var week_type=(typeof type==='undefined')?1:type;return WEEK_TYPES[week_type][week_day];};Formula.WEEKNUM=function(date,type){var current_date=moment(new Date(date));var january_first=moment(new Date(current_date.year(),0,1));var week_type=(typeof type==='undefined')?1:type;var week_start=WEEK_STARTS[week_type];var first_day=january_first.format('d');var offset=(first_day<week_start)?week_start-first_day+1:first_day-week_start;if(week_type===21){return Formula.ISOWEEKNUM(date);}else{return Math.floor(current_date.diff(january_first.subtract('days',offset),'days')/7)+1;}};Formula.WORKDAY=function(start_date,days,holidays){return Formula.WORKDAYINTL(start_date,days,1,holidays);};Formula.WORKDAYINTL=function(start_date,days,weekend,holidays){var weekend_type=(typeof weekend==='undefined')?1:weekend;var weekend_days=WEEKEND_TYPES[weekend_type];var sd=moment(new Date(start_date));var cd=sd;var day_of_week='';var holiday_dates=[];if(typeof holidays!=='undefined'){for(var i=0;i<holidays.length;i++){holiday_dates[i]=moment(new Date(holidays[i])).format('MM-DD-YYYY');}}
var j=0;while(j<days){cd=cd.add('days',1);day_of_week=cd.format('d');if(weekend_days.indexOf(parseInt(day_of_week,10))<0&&holiday_dates.indexOf(cd.format('MM-DD-YYYY'))<0){j++;}}
return cd.toDate();};Formula.YEAR=function(date){return moment(date,window.supsystic.Tables._dateFormat).year();};Formula.YEARFRAC=function(start_date,end_date,basis){basis=(typeof basis==='undefined')?0:basis;var sdate=moment(new Date(start_date));var edate=moment(new Date(end_date));if(!sdate.isValid()||!edate.isValid()){return'#VALUE!';}
if([0,1,2,3,4].indexOf(basis)===-1){return'#NUM!';}
if(sdate===edate){return 0;}
if(sdate.diff(edate)>0){edate=moment(new Date(start_date));sdate=moment(new Date(end_date));}
var syear=sdate.year();var smonth=sdate.month();var sday=sdate.date();var eyear=edate.year();var emonth=edate.month();var eday=edate.date();switch(basis){case 0:if(sday===31&&eday===31){sday=30;eday=30;}else if(sday===31){sday=30;}else if(sday===30&&eday===31){eday=30;}else if(smonth===1&&emonth===1&&sdate.daysInMonth()===sday&&edate.daysInMonth()===eday){sday=30;eday=30;}else if(smonth===1&&sdate.daysInMonth()===sday){sday=30;}
return((eday+emonth*30+eyear*360)-(sday+smonth*30+syear*360))/360;case 1:var feb29Between=function(date1,date2){var mar1year1=moment(new Date(date1.year(),2,1));if(moment([date1.year()]).isLeapYear()&&date1.diff(mar1year1)<0&&date2.diff(mar1year1)>=0){return true;}
var mar1year2=moment(new Date(date2.year(),2,1));if(moment([date2.year()]).isLeapYear()&&date2.diff(mar1year2)>=0&&date1.diff(mar1year2)<0){return true;}
return false;};var ylength=365;if(syear===eyear||((syear+1)===eyear)&&((smonth>emonth)||((smonth===emonth)&&(sday>=eday)))){if(syear===eyear&&moment([syear]).isLeapYear()){ylength=366;}else if(feb29Between(sdate,edate)||(emonth===1&&eday===29)){ylength=366;}
return edate.diff(sdate,'days')/ylength;}else{var years=(eyear-syear)+1;var days=moment(new Date(eyear+1,0,1)).diff(moment(new Date(syear,0,1)),'days');var average=days/years;return edate.diff(sdate,'days')/average;}
break;case 2:return edate.diff(sdate,'days')/360;case 3:return edate.diff(sdate,'days')/365;case 4:if(sday===31){sday=30;}
if(eday===31){eday=30;}
return((eday+emonth*30+eyear*360)-(sday+smonth*30+syear*360))/360;}};Formula.BESSELI=(function(){function horner(arr,v){return arr.reduce(function(z,w){return v*z+w;},0);}
var b0_a=[1.0,3.5156229,3.0899424,1.2067492,0.2659732,0.360768e-1,0.45813e-2].reverse();var b0_b=[0.39894228,0.1328592e-1,0.225319e-2,-0.157565e-2,0.916281e-2,-0.2057706e-1,0.2635537e-1,-0.1647633e-1,0.392377e-2].reverse();function bessel0(x){if(x<=3.75){return horner(b0_a,x*x/(3.75*3.75));}
return Math.exp(Math.abs(x))/Math.sqrt(Math.abs(x))*horner(b0_b,3.75/Math.abs(x));}
var b1_a=[0.5,0.87890594,0.51498869,0.15084934,0.2658733e-1,0.301532e-2,0.32411e-3].reverse();var b1_b=[0.39894228,-0.3988024e-1,-0.362018e-2,0.163801e-2,-0.1031555e-1,0.2282967e-1,-0.2895312e-1,0.1787654e-1,-0.420059e-2].reverse();function bessel1(x){if(x<3.75){return x*horner(b1_a,x*x/(3.75*3.75));}
return(x<0?-1:1)*Math.exp(Math.abs(x))/Math.sqrt(Math.abs(x))*horner(b1_b,3.75/Math.abs(x));}
return function besseli(x,n){n=Math.round(n);if(n===0){return bessel0(x);}
if(n===1){return bessel1(x);}
if(n<0){throw'BESSELI Order ('+n+') must be nonnegative';}
if(Math.abs(x)===0){return 0;}
var ret,j,tox=2/Math.abs(x),m,bip,bi,bim;m=2*Math.round((n+Math.round(Math.sqrt(40*n)))/2);bip=ret=0.0;bi=1.0;for(j=m;j>0;j--){bim=j*tox*bi+bip;bip=bi;bi=bim;if(Math.abs(bi)>1E10){bi*=1E-10;bip*=1E-10;ret*=1E-10;}
if(j===n){ret=bip;}}
ret*=besseli(x,0)/bi;return x<0&&(n%2)?-ret:ret;};})();Formula.BESSELJ=(function(){function horner(arr,v){return arr.reduce(function(z,w){return v*z+w;},0);}
var b0_a1a=[57568490574.0,-13362590354.0,651619640.7,-11214424.18,77392.33017,-184.9052456].reverse();var b0_a2a=[57568490411.0,1029532985.0,9494680.718,59272.64853,267.8532712,1.0].reverse();var b0_a1b=[1.0,-0.1098628627e-2,0.2734510407e-4,-0.2073370639e-5,0.2093887211e-6].reverse();var b0_a2b=[-0.1562499995e-1,0.1430488765e-3,-0.6911147651e-5,0.7621095161e-6,-0.934935152e-7].reverse();var W=0.636619772;function bessel0(x){var a,a1,a2,y=x*x,xx=Math.abs(x)-0.785398164;if(Math.abs(x)<8){a1=horner(b0_a1a,y);a2=horner(b0_a2a,y);a=a1/a2;}
else{y=64/y;a1=horner(b0_a1b,y);a2=horner(b0_a2b,y);a=Math.sqrt(W/Math.abs(x))*(Math.cos(xx)*a1-Math.sin(xx)*a2*8/Math.abs(x));}
return a;}
var b1_a1a=[72362614232.0,-7895059235.0,242396853.1,-2972611.439,15704.48260,-30.16036606].reverse();var b1_a2a=[144725228442.0,2300535178.0,18583304.74,99447.43394,376.9991397,1.0].reverse();var b1_a1b=[1.0,0.183105e-2,-0.3516396496e-4,0.2457520174e-5,-0.240337019e-6].reverse();var b1_a2b=[0.04687499995,-0.2002690873e-3,0.8449199096e-5,-0.88228987e-6,0.105787412e-6].reverse();function bessel1(x){var a,a1,a2,y=x*x,xx=Math.abs(x)-2.356194491;if(Math.abs(x)<8){a1=x*horner(b1_a1a,y);a2=horner(b1_a2a,y);a=a1/a2;}else{y=64/y;a1=horner(b1_a1b,y);a2=horner(b1_a2b,y);a=Math.sqrt(W/Math.abs(x))*(Math.cos(xx)*a1-Math.sin(xx)*a2*8/Math.abs(x));if(x<0){a=-a;}}
return a;}
function _bessel_iter(x,n,f0,f1,sign){if(!sign){sign=-1;}
var tdx=2/x,f2;if(n===0){return f0;}
if(n===1){return f1;}
for(var o=1;o!==n;++o){f2=f1*o*tdx+sign*f0;f0=f1;f1=f2;}
return f1;}
return function besselj(x,n){n=Math.round(n);if(n===0){return bessel0(Math.abs(x));}
if(n===1){return bessel1(Math.abs(x));}
if(n<0){throw'BESSELJ: Order ('+n+') must be nonnegative';}
if(Math.abs(x)===0){return 0;}
var ret,j,tox=2/Math.abs(x),m,jsum,sum,bjp,bj,bjm;if(Math.abs(x)>n){ret=_bessel_iter(x,n,bessel0(Math.abs(x)),bessel1(Math.abs(x)),-1);}else{m=2*Math.floor((n+Math.floor(Math.sqrt(40*n)))/2);jsum=0;bjp=ret=sum=0.0;bj=1.0;for(j=m;j>0;j--){bjm=j*tox*bj-bjp;bjp=bj;bj=bjm;if(Math.abs(bj)>1E10){bj*=1E-10;bjp*=1E-10;ret*=1E-10;sum*=1E-10;}
if(jsum){sum+=bj;}
jsum=!jsum;if(j===n){ret=bjp;}}
sum=2.0*sum-bj;ret/=sum;}
return x<0&&(n%2)?-ret:ret;};})();Formula.BESSELK=(function(){function horner(arr,v){return arr.reduce(function(z,w){return v*z+w;},0);}
var b0_a=[-0.57721566,0.42278420,0.23069756,0.3488590e-1,0.262698e-2,0.10750e-3,0.74e-5].reverse();var b0_b=[1.25331414,-0.7832358e-1,0.2189568e-1,-0.1062446e-1,0.587872e-2,-0.251540e-2,0.53208e-3].reverse();function bessel0(x){if(x<=2){return-Math.log(x/2)*Formula.BESSELI(x,0)+horner(b0_a,x*x/4);}
return Math.exp(-x)/Math.sqrt(x)*horner(b0_b,2/x);}
var b1_a=[1.0,0.15443144,-0.67278579,-0.18156897,-0.1919402e-1,-0.110404e-2,-0.4686e-4].reverse();var b1_b=[1.25331414,0.23498619,-0.3655620e-1,0.1504268e-1,-0.780353e-2,0.325614e-2,-0.68245e-3].reverse();function bessel1(x){if(x<=2){return Math.log(x/2)*Formula.BESSELI(x,1)+(1/x)*horner(b1_a,x*x/4);}
return Math.exp(-x)/Math.sqrt(x)*horner(b1_b,2/x);}
function _bessel_iter(x,n,f0,f1,sign){if(!sign){sign=-1;}
var tdx=2/x,f2;if(n===0){return f0;}
if(n===1){return f1;}
for(var o=1;o!==n;++o){f2=f1*o*tdx+sign*f0;f0=f1;f1=f2;}
return f1;}
function _bessel_wrap(bessel0,bessel1,name,nonzero,sign){return function bessel(x,n){if(n===0){return bessel0(x);}
if(n===1){return bessel1(x);}
if(n<0){throw name+': Order ('+n+') must be nonnegative';}
if(nonzero===1&&x===0){throw name+': Undefined when x == 0';}
if(nonzero===2&&x<=0){throw name+': Undefined when x <= 0';}
var b0=bessel0(x),b1=bessel1(x);return _bessel_iter(x,n,b0,b1,sign);};}
return _bessel_wrap(bessel0,bessel1,'BESSELK',2,1);})();Formula.BESSELY=(function(){function horner(arr,v){return arr.reduce(function(z,w){return v*z+w;},0);}
var b0_a1a=[-2957821389.0,7062834065.0,-512359803.6,10879881.29,-86327.92757,228.4622733].reverse();var b0_a2a=[40076544269.0,745249964.8,7189466.438,47447.26470,226.1030244,1.0].reverse();var b0_a1b=[1.0,-0.1098628627e-2,0.2734510407e-4,-0.2073370639e-5,0.2093887211e-6].reverse();var b0_a2b=[-0.1562499995e-1,0.1430488765e-3,-0.6911147651e-5,0.7621095161e-6,-0.934945152e-7].reverse();var W=0.636619772;function bessel0(x){var a,a1,a2,y=x*x,xx=x-0.785398164;if(x<8){a1=horner(b0_a1a,y);a2=horner(b0_a2a,y);a=a1/a2+W*Formula.BESSELJ(x,0)*Math.log(x);}else{y=64/y;a1=horner(b0_a1b,y);a2=horner(b0_a2b,y);a=Math.sqrt(W/x)*(Math.sin(xx)*a1+Math.cos(xx)*a2*8/x);}
return a;}
var b1_a1a=[-0.4900604943e13,0.1275274390e13,-0.5153438139e11,0.7349264551e9,-0.4237922726e7,0.8511937935e4].reverse();var b1_a2a=[0.2499580570e14,0.4244419664e12,0.3733650367e10,0.2245904002e8,0.1020426050e6,0.3549632885e3,1].reverse();var b1_a1b=[1.0,0.183105e-2,-0.3516396496e-4,0.2457520174e-5,-0.240337019e-6].reverse();var b1_a2b=[0.04687499995,-0.2002690873e-3,0.8449199096e-5,-0.88228987e-6,0.105787412e-6].reverse();function bessel1(x){var a,a1,a2,y=x*x,xx=x-2.356194491;if(x<8){a1=x*horner(b1_a1a,y);a2=horner(b1_a2a,y);a=a1/a2+W*(Formula.BESSELJ(x,1)*Math.log(x)-1/x);}else{y=64/y;a1=horner(b1_a1b,y);a2=horner(b1_a2b,y);a=Math.sqrt(W/x)*(Math.sin(xx)*a1+Math.cos(xx)*a2*8/x);}
return a;}
function _bessel_iter(x,n,f0,f1,sign){if(!sign){sign=-1;}
var tdx=2/x,f2;if(n===0){return f0;}
if(n===1){return f1;}
for(var o=1;o!==n;++o){f2=f1*o*tdx+sign*f0;f0=f1;f1=f2;}
return f1;}
function _bessel_wrap(bessel0,bessel1,name,nonzero,sign){return function bessel(x,n){if(n===0){return bessel0(x);}
if(n===1){return bessel1(x);}
if(n<0){throw name+': Order ('+n+') must be nonnegative';}
if(nonzero===1&&x===0){throw name+': Undefined when x == 0';}
if(nonzero===2&&x<=0){throw name+': Undefined when x <= 0';}
var b0=bessel0(x),b1=bessel1(x);return _bessel_iter(x,n,b0,b1,sign);};}
return _bessel_wrap(bessel0,bessel1,'BESSELY',1,-1);})();Formula.VALIDBIN=function(number){return(/^[01]{1,10}$/).test(number);};Formula.BIN2DEC=function(number){if(!Formula.VALIDBIN(number)){return'#NUM!';}
var result=parseInt(number,2);var stringified=number.toString();if(stringified.length===10&&stringified.substring(0,1)==='1'){return parseInt(stringified.substring(1),2)-512;}else{return result;}};Formula.BIN2HEX=function(number,places){if(!Formula.VALIDBIN(number)){return'#NUM!';}
var stringified=number.toString();if(stringified.length===10&&stringified.substring(0,1)==='1'){return(1099511627264+parseInt(stringified.substring(1),2)).toString(16);}
var result=parseInt(number,2).toString(16);if(typeof places==='undefined'){return result;}else{if(isNaN(places)){return'#VALUE!';}
if(places<0){return'#NUM!';}
places=Math.floor(places);return(places>=result.length)?_s.repeat('0',places-result.length)+result:'#NUM!';}};Formula.BIN2OCT=function(number,places){if(!Formula.VALIDBIN(number)){return'#NUM!';}
var stringified=number.toString();if(stringified.length===10&&stringified.substring(0,1)==='1'){return(1073741312+parseInt(stringified.substring(1),2)).toString(8);}
var result=parseInt(number,2).toString(8);if(typeof places==='undefined'){return result;}else{if(isNaN(places)){return'#VALUE!';}
if(places<0){return'#NUM!';}
places=Math.floor(places);return(places>=result.length)?_s.repeat('0',places-result.length)+result:'#NUM!';}};Formula.BITAND=function(number1,number2){if(isNaN(number1)||isNaN(number2)){return'#VALUE!';}
if(number1<0||number2<0){return'#NUM!';}
if(Math.floor(number1)!==number1||Math.floor(number2)!==number2){return'#NUM!';}
if(number1>281474976710655||number2>281474976710655){return'#NUM!';}
return number1&number2;};Formula.BITLSHIFT=function(number,shift){if(isNaN(number)||isNaN(shift)){return'#VALUE!';}
if(number<0){return'#NUM!';}
if(Math.floor(number)!==number){return'#NUM!';}
if(number>281474976710655){return'#NUM!';}
if(Math.abs(shift)>53){return'#NUM!';}
return(shift>=0)?number<<shift:number>>-shift;};Formula.BITOR=function(number1,number2){if(isNaN(number1)||isNaN(number2)){return'#VALUE!';}
if(number1<0||number2<0){return'#NUM!';}
if(Math.floor(number1)!==number1||Math.floor(number2)!==number2){return'#NUM!';}
if(number1>281474976710655||number2>281474976710655){return'#NUM!';}
return number1|number2;};Formula.BITRSHIFT=function(number,shift){if(isNaN(number)||isNaN(shift)){return'#VALUE!';}
if(number<0){return'#NUM!';}
if(Math.floor(number)!==number){return'#NUM!';}
if(number>281474976710655){return'#NUM!';}
if(Math.abs(shift)>53){return'#NUM!';}
return(shift>=0)?number>>shift:number<<-shift;};Formula.BITXOR=function(number1,number2){if(isNaN(number1)||isNaN(number2)){return'#VALUE!';}
if(number1<0||number2<0){return'#NUM!';}
if(Math.floor(number1)!==number1||Math.floor(number2)!==number2){return'#NUM!';}
if(number1>281474976710655||number2>281474976710655){return'#NUM!';}
return number1^number2;};Formula.COMPLEX=function(real,imaginary,suffix){if(isNaN(real)||isNaN(imaginary)){return'#VALUE!';}
suffix=(typeof suffix==='undefined')?'i':suffix;if(suffix!=='i'&&suffix!=='j'){return'#VALUE!';}
if(real===0&&imaginary===0){return 0;}else if(real===0){return(imaginary===1)?suffix:imaginary.toString()+suffix;}else if(imaginary===0){return real.toString();}else{var sign=(imaginary>0)?'+':'';return real.toString()+sign+((imaginary===1)?suffix:imaginary.toString()+suffix);}};Formula.CONVERT=function(number,from_unit,to_unit){if(isNaN(number)){return'#VALUE!';}
var units=[["a.u. of action","?",null,"action",false,false,1.05457168181818e-34],["a.u. of charge","e",null,"electric_charge",false,false,1.60217653141414e-19],["a.u. of energy","Eh",null,"energy",false,false,4.35974417757576e-18],["a.u. of length","a?",null,"length",false,false,5.29177210818182e-11],["a.u. of mass","m?",null,"mass",false,false,9.10938261616162e-31],["a.u. of time","?/Eh",null,"time",false,false,2.41888432650516e-17],["admiralty knot","admkn",null,"speed",false,true,0.514773333],["ampere","A",null,"electric_current",true,false,1],["ampere per meter","A/m",null,"magnetic_field_intensity",true,false,1],["ångström","Å",["ang"],"length",false,true,1e-10],["are","ar",null,"area",false,true,100],["astronomical unit","ua",null,"length",false,false,1.49597870691667e-11],["bar","bar",null,"pressure",false,false,100000],["barn","b",null,"area",false,false,1e-28],["becquerel","Bq",null,"radioactivity",true,false,1],["bit","bit",["b"],"information",false,true,1],["btu","BTU",["btu"],"energy",false,true,1055.05585262],["byte","byte",null,"information",false,true,8],["candela","cd",null,"luminous_intensity",true,false,1],["candela per square metre","cd/m?",null,"luminance",true,false,1],["coulomb","C",null,"electric_charge",true,false,1],["cubic ångström","ang3",["ang^3"],"volume",false,true,1e-30],["cubic foot","ft3",["ft^3"],"volume",false,true,0.028316846592],["cubic inch","in3",["in^3"],"volume",false,true,0.000016387064],["cubic light-year","ly3",["ly^3"],"volume",false,true,8.46786664623715e-47],["cubic metre","m?",null,"volume",true,true,1],["cubic mile","mi3",["mi^3"],"volume",false,true,4168181825.44058],["cubic nautical mile","Nmi3",["Nmi^3"],"volume",false,true,6352182208],["cubic Pica","Pica3",["Picapt3","Pica^3","Picapt^3"],"volume",false,true,7.58660370370369e-8],["cubic yard","yd3",["yd^3"],"volume",false,true,0.764554857984],["cup","cup",null,"volume",false,true,0.0002365882365],["dalton","Da",["u"],"mass",false,false,1.66053886282828e-27],["day","d",["day"],"time",false,true,86400],["degree","°",null,"angle",false,false,0.0174532925199433],["degrees Rankine","Rank",null,"temperature",false,true,0.555555555555556],["dyne","dyn",["dy"],"force",false,true,0.00001],["electronvolt","eV",["ev"],"energy",false,true,1.60217656514141],["ell","ell",null,"length",false,true,1.143],["erg","erg",["e"],"energy",false,true,1e-7],["farad","F",null,"electric_capacitance",true,false,1],["fluid ounce","oz",null,"volume",false,true,0.0000295735295625],["foot","ft",null,"length",false,true,0.3048],["foot-pound","flb",null,"energy",false,true,1.3558179483314],["gal","Gal",null,"acceleration",false,false,0.01],["gallon","gal",null,"volume",false,true,0.003785411784],["gauss","G",["ga"],"magnetic_flux_density",false,true,1],["grain","grain",null,"mass",false,true,0.0000647989],["gram","g",null,"mass",false,true,0.001],["gray","Gy",null,"absorbed_dose",true,false,1],["gross registered ton","GRT",["regton"],"volume",false,true,2.8316846592],["hectare","ha",null,"area",false,true,10000],["henry","H",null,"inductance",true,false,1],["hertz","Hz",null,"frequency",true,false,1],["horsepower","HP",["h"],"power",false,true,745.69987158227],["horsepower-hour","HPh",["hh","hph"],"energy",false,true,2684519.538],["hour","h",["hr"],"time",false,true,3600],["imperial gallon (U.K.)","uk_gal",null,"volume",false,true,0.00454609],["imperial hundredweight","lcwt",["uk_cwt","hweight"],"mass",false,true,50.802345],["imperial quart (U.K)","uk_qt",null,"volume",false,true,0.0011365225],["imperial ton","brton",["uk_ton","LTON"],"mass",false,true,1016.046909],["inch","in",null,"length",false,true,0.0254],["international acre","uk_acre",null,"area",false,true,4046.8564224],["IT calorie","cal",null,"energy",false,true,4.1868],["joule","J",null,"energy",true,true,1],["katal","kat",null,"catalytic_activity",true,false,1],["kelvin","K",["kel"],"temperature",true,true,1],["kilogram","kg",null,"mass",true,true,1],["knot","kn",null,"speed",false,true,0.514444444444444],["light-year","ly",null,"length",false,true,9460730472580800],["litre","L",["l","lt"],"volume",false,true,0.001],["lumen","lm",null,"luminous_flux",true,false,1],["lux","lx",null,"illuminance",true,false,1],["maxwell","Mx",null,"magnetic_flux",false,false,1e-18],["measurement ton","MTON",null,"volume",false,true,1.13267386368],["meter per hour","m/h",["m/hr"],"speed",false,true,0.00027777777777778],["meter per second","m/s",["m/sec"],"speed",true,true,1],["meter per second squared","m?s??",null,"acceleration",true,false,1],["parsec","pc",["parsec"],"length",false,true,30856775814671900],["meter squared per second","m?/s",null,"kinematic_viscosity",true,false,1],["metre","m",null,"length",true,true,1],["miles per hour","mph",null,"speed",false,true,0.44704],["millimetre of mercury","mmHg",null,"pressure",false,false,133.322],["minute","?",null,"angle",false,false,0.000290888208665722],["minute","min",["mn"],"time",false,true,60],["modern teaspoon","tspm",null,"volume",false,true,0.000005],["mole","mol",null,"amount_of_substance",true,false,1],["morgen","Morgen",null,"area",false,true,2500],["n.u. of action","?",null,"action",false,false,1.05457168181818e-34],["n.u. of mass","m?",null,"mass",false,false,9.10938261616162e-31],["n.u. of speed","c?",null,"speed",false,false,299792458],["n.u. of time","?/(me?c??)",null,"time",false,false,1.28808866778687e-21],["nautical mile","M",["Nmi"],"length",false,true,1852],["newton","N",null,"force",true,true,1],["œrsted","Oe ",null,"magnetic_field_intensity",false,false,79.5774715459477],["ohm","Ω",null,"electric_resistance",true,false,1],["ounce mass","ozm",null,"mass",false,true,0.028349523125],["pascal","Pa",null,"pressure",true,false,1],["pascal second","Pa?s",null,"dynamic_viscosity",true,false,1],["pferdestärke","PS",null,"power",false,true,735.49875],["phot","ph",null,"illuminance",false,false,0.0001],["pica (1/6 inch)","pica",null,"length",false,true,0.00035277777777778],["pica (1/72 inch)","Pica",["Picapt"],"length",false,true,0.00423333333333333],["poise","P",null,"dynamic_viscosity",false,false,0.1],["pond","pond",null,"force",false,true,0.00980665],["pound force","lbf",null,"force",false,true,4.4482216152605],["pound mass","lbm",null,"mass",false,true,0.45359237],["quart","qt",null,"volume",false,true,0.000946352946],["radian","rad",null,"angle",true,false,1],["second","?",null,"angle",false,false,0.00000484813681109536],["second","s",["sec"],"time",true,true,1],["short hundredweight","cwt",["shweight"],"mass",false,true,45.359237],["siemens","S",null,"electrical_conductance",true,false,1],["sievert","Sv",null,"equivalent_dose",true,false,1],["slug","sg",null,"mass",false,true,14.59390294],["square ångström","ang2",["ang^2"],"area",false,true,1e-20],["square foot","ft2",["ft^2"],"area",false,true,0.09290304],["square inch","in2",["in^2"],"area",false,true,0.00064516],["square light-year","ly2",["ly^2"],"area",false,true,8.95054210748189e+31],["square meter","m?",null,"area",true,true,1],["square mile","mi2",["mi^2"],"area",false,true,2589988.110336],["square nautical mile","Nmi2",["Nmi^2"],"area",false,true,3429904],["square Pica","Pica2",["Picapt2","Pica^2","Picapt^2"],"area",false,true,0.00001792111111111],["square yard","yd2",["yd^2"],"area",false,true,0.83612736],["statute mile","mi",null,"length",false,true,1609.344],["steradian","sr",null,"solid_angle",true,false,1],["stilb","sb",null,"luminance",false,false,0.0001],["stokes","St",null,"kinematic_viscosity",false,false,0.0001],["stone","stone",null,"mass",false,true,6.35029318],["tablespoon","tbs",null,"volume",false,true,0.0000147868],["teaspoon","tsp",null,"volume",false,true,0.00000492892],["tesla","T",null,"magnetic_flux_density",true,true,1],["thermodynamic calorie","c",null,"energy",false,true,4.184],["ton","ton",null,"mass",false,true,907.18474],["tonne","t",null,"mass",false,false,1000],["U.K. pint","uk_pt",null,"volume",false,true,0.00056826125],["U.S. bushel","bushel",null,"volume",false,true,0.03523907],["U.S. oil barrel","barrel",null,"volume",false,true,0.158987295],["U.S. pint","pt",["us_pt"],"volume",false,true,0.000473176473],["U.S. survey mile","survey_mi",null,"length",false,true,1609.347219],["U.S. survey/statute acre","us_acre",null,"area",false,true,4046.87261],["volt","V",null,"voltage",true,false,1],["watt","W",null,"power",true,true,1],["watt-hour","Wh",["wh"],"energy",false,true,3600],["weber","Wb",null,"magnetic_flux",true,false,1],["yard","yd",null,"length",false,true,0.9144],["year","yr",null,"time",false,true,31557600]];var binary_prefixes={Yi:["yobi",80,1208925819614629174706176,"Yi","yotta"],Zi:["zebi",70,1180591620717411303424,"Zi","zetta"],Ei:["exbi",60,1152921504606846976,"Ei","exa"],Pi:["pebi",50,1125899906842624,"Pi","peta"],Ti:["tebi",40,1099511627776,"Ti","tera"],Gi:["gibi",30,1073741824,"Gi","giga"],Mi:["mebi",20,1048576,"Mi","mega"],ki:["kibi",10,1024,"ki","kilo"]};var unit_prefixes={Y:["yotta",1e+24,"Y"],Z:["zetta",1e+21,"Z"],E:["exa",1e+18,"E"],P:["peta",1e+15,"P"],T:["tera",1e+12,"T"],G:["giga",1e+09,"G"],M:["mega",1e+06,"M"],k:["kilo",1e+03,"k"],h:["hecto",1e+02,"h"],e:["dekao",1e+01,"e"],d:["deci",1e-01,"d"],c:["centi",1e-02,"c"],m:["milli",1e-03,"m"],u:["micro",1e-06,"u"],n:["nano",1e-09,"n"],p:["pico",1e-12,"p"],f:["femto",1e-15,"f"],a:["atto",1e-18,"a"],z:["zepto",1e-21,"z"],y:["yocto",1e-24,"y"]};var from=null;var to=null;var base_from_unit=from_unit;var base_to_unit=to_unit;var from_multiplier=1;var to_multiplier=1;var alt;for(var i=0;i<units.length;i++){alt=(units[i][2]===null)?[]:units[i][2];if(units[i][1]===base_from_unit||alt.indexOf(base_from_unit)>=0){from=units[i];}
if(units[i][1]===base_to_unit||alt.indexOf(base_to_unit)>=0){to=units[i];}}
if(from===null){var from_binary_prefix=binary_prefixes[from_unit.substring(0,2)];var from_unit_prefix=unit_prefixes[from_unit.substring(0,1)];if(from_unit.substring(0,2)==='da'){from_unit_prefix=["dekao",1e+01,"da"];}
if(from_binary_prefix){from_multiplier=from_binary_prefix[2];base_from_unit=from_unit.substring(2);}else if(from_unit_prefix){from_multiplier=from_unit_prefix[1];base_from_unit=from_unit.substring(from_unit_prefix[2].length);}
for(var j=0;j<units.length;j++){alt=(units[j][2]===null)?[]:units[j][2];if(units[j][1]===base_from_unit||alt.indexOf(base_from_unit)>=0){from=units[j];}}}
if(to===null){var to_binary_prefix=binary_prefixes[to_unit.substring(0,2)];var to_unit_prefix=unit_prefixes[to_unit.substring(0,1)];if(to_unit.substring(0,2)==='da'){to_unit_prefix=["dekao",1e+01,"da"];}
if(to_binary_prefix){to_multiplier=to_binary_prefix[2];base_to_unit=to_unit.substring(2);}else if(to_unit_prefix){to_multiplier=to_unit_prefix[1];base_to_unit=to_unit.substring(to_unit_prefix[2].length);}
for(var k=0;k<units.length;k++){alt=(units[k][2]===null)?[]:units[k][2];if(units[k][1]===base_to_unit||alt.indexOf(base_to_unit)>=0){to=units[k];}}}
if(from===null||to===null){return'#N/A';}
if(from[3]!==to[3]){return'#N/A';}
return number*from[6]*from_multiplier/(to[6]*to_multiplier);};Formula.DEC2BIN=function(number,places){if(isNaN(number)){return'#VALUE!';}
if(!/^-?[0-9]{1,3}$/.test(number)||number<-512||number>511){return'#NUM!';}
if(number<0){return'1'+_s.repeat('0',9-(512+number).toString(2).length)+(512+number).toString(2);}
var result=parseInt(number,10).toString(2);if(typeof places==='undefined'){return result;}else{if(isNaN(places)){return'#VALUE!';}
if(places<0){return'#NUM!';}
places=Math.floor(places);return(places>=result.length)?_s.repeat('0',places-result.length)+result:'#NUM!';}};Formula.DEC2HEX=function(number,places){if(isNaN(number)){return'#VALUE!';}
if(!/^-?[0-9]{1,12}$/.test(number)||number<-549755813888||number>549755813887){return'#NUM!';}
if(number<0){return(1099511627776+number).toString(16);}
var result=parseInt(number,10).toString(16);if(typeof places==='undefined'){return result;}else{if(isNaN(places)){return'#VALUE!';}
if(places<0){return'#NUM!';}
places=Math.floor(places);return(places>=result.length)?_s.repeat('0',places-result.length)+result:'#NUM!';}};Formula.DEC2OCT=function(number,places){if(isNaN(number)){return'#VALUE!';}
if(!/^-?[0-9]{1,9}$/.test(number)||number<-536870912||number>536870911){return'#NUM!';}
if(number<0){return(1073741824+number).toString(8);}
var result=parseInt(number,10).toString(8);if(typeof places==='undefined'){return result;}else{if(isNaN(places)){return'#VALUE!';}
if(places<0){return'#NUM!';}
places=Math.floor(places);return(places>=result.length)?_s.repeat('0',places-result.length)+result:'#NUM!';}};Formula.DELTA=function(number1,number2){number2=(typeof number2==='undefined')?0:number2;if(isNaN(number1)||isNaN(number2)){return'#VALUE!';}
return(number1===number2)?1:0;};Formula.ERF=function(lower_bound,upper_bound){upper_bound=(typeof upper_bound==='undefined')?0:upper_bound;if(isNaN(lower_bound)||isNaN(upper_bound)){return'#VALUE!';}
return jStat.erf(lower_bound);};Formula.ERFC=function(x){if(isNaN(x)){return'#VALUE!';}
return jStat.erfc(x);};Formula.ERFCPRECISE=function(){return;};Formula.ERFPRECISE=function(){return;};Formula.GESTEP=function(number,step){step=(typeof step==='undefined')?0:step;if(isNaN(number)||isNaN(step)){return'#VALUE!';}
return(number>=step)?1:0;};Formula.HEX2BIN=function(number,places){if(!/^[0-9A-Fa-f]{1,10}$/.test(number)){return'#NUM!';}
var negative=(number.length===10&&number.substring(0,1).toLowerCase()==='f')?true:false;var decimal=(negative)?parseInt(number,16)-1099511627776:parseInt(number,16);if(decimal<-512||decimal>511){return'#NUM!';}
if(negative){return'1'+_s.repeat('0',9-(512+decimal).toString(2).length)+(512+decimal).toString(2);}
var result=decimal.toString(2);if(typeof places==='undefined'){return result;}else{if(isNaN(places)){return'#VALUE!';}
if(places<0){return'#NUM!';}
places=Math.floor(places);return(places>=result.length)?_s.repeat('0',places-result.length)+result:'#NUM!';}};Formula.HEX2DEC=function(number){if(!/^[0-9A-Fa-f]{1,10}$/.test(number)){return'#NUM!';}
var decimal=parseInt(number,16);return(decimal>=549755813888)?decimal-1099511627776:decimal;};Formula.HEX2OCT=function(number,places){if(!/^[0-9A-Fa-f]{1,10}$/.test(number)){return'#NUM!';}
var decimal=parseInt(number,16);if(decimal>536870911&&decimal<1098974756864){return'#NUM!';}
if(decimal>=1098974756864){return(decimal-1098437885952).toString(8);}
var result=decimal.toString(8);if(typeof places==='undefined'){return result;}else{if(isNaN(places)){return'#VALUE!';}
if(places<0){return'#NUM!';}
places=Math.floor(places);return(places>=result.length)?_s.repeat('0',places-result.length)+result:'#NUM!';}};Formula.IMABS=function(inumber){var x=Formula.IMREAL(inumber);var y=Formula.IMAGINARY(inumber);if(x==='#NUM!'||y==='#NUM!'){return'#NUM!';}
return Math.sqrt(Math.pow(x,2)+Math.pow(y,2));};Formula.IMAGINARY=function(inumber){if(inumber===0||inumber==='0'){return 0;}
if(['i','j'].indexOf(inumber)>=0){return 1;}
inumber=inumber.replace('+i','+1i').replace('-i','-1i').replace('+j','+1j').replace('-j','-1j');var plus=inumber.indexOf('+');var minus=inumber.indexOf('-');if(plus===0){plus=inumber.indexOf('+',1);}
if(minus===0){minus=inumber.indexOf('-',1);}
var last=inumber.substring(inumber.length-1,inumber.length);var unit=(last==='i'||last==='j');if(plus>=0||minus>=0){if(!unit){return'#NUM!';}
if(plus>=0){return(isNaN(inumber.substring(0,plus))||isNaN(inumber.substring(plus+1,inumber.length-1)))?'#NUM!':Number(inumber.substring(plus+1,inumber.length-1));}else{return(isNaN(inumber.substring(0,minus))||isNaN(inumber.substring(minus+1,inumber.length-1)))?'#NUM!':-Number(inumber.substring(minus+1,inumber.length-1));}}else{if(unit){return(isNaN(inumber.substring(0,inumber.length-1)))?'#NUM!':inumber.substring(0,inumber.length-1);}else{return(isNaN(inumber))?'#NUM!':0;}}};Formula.IMARGUMENT=function(inumber){var x=Formula.IMREAL(inumber);var y=Formula.IMAGINARY(inumber);if(x==='#NUM!'||y==='#NUM!'){return'#NUM!';}
if(x===0&&y===0){return'#DIV/0!';}
if(x===0&&y>0){return Math.PI/2;}
if(x===0&&y<0){return-Math.PI/2;}
if(y===0&&x>0){return 0;}
if(y===0&&x<0){return-Math.PI;}
if(x>0){return Math.atan(y/x);}else if(x<0&&y>=0){return Math.atan(y/x)+Math.PI;}else{return Math.atan(y/x)-Math.PI;}};Formula.IMCONJUGATE=function(inumber){var x=Formula.IMREAL(inumber);var y=Formula.IMAGINARY(inumber);var unit=inumber.substring(inumber.length-1);unit=(unit==='i'||unit==='j')?unit:'i';if(x==='#NUM!'||y==='#NUM!'){return'#NUM!';}
return(y!==0)?Formula.COMPLEX(x,-y,unit):inumber;};Formula.IMCOS=function(inumber){if(inumber===true||inumber===false){return'#VALUE!';}
var x=Formula.IMREAL(inumber);var y=Formula.IMAGINARY(inumber);var unit=inumber.substring(inumber.length-1);unit=(unit==='i'||unit==='j')?unit:'i';if(x==='#NUM!'||y==='#NUM!'){return'#NUM!';}
return Formula.COMPLEX(Math.cos(x)*(Math.exp(y)+Math.exp(-y))/2,-Math.sin(x)*(Math.exp(y)-Math.exp(-y))/2,unit);};Formula.IMCOSH=function(inumber){if(inumber===true||inumber===false){return'#VALUE!';}
var x=Formula.IMREAL(inumber);var y=Formula.IMAGINARY(inumber);var unit=inumber.substring(inumber.length-1);unit=(unit==='i'||unit==='j')?unit:'i';if(x==='#NUM!'||y==='#NUM!'){return'#NUM!';}
return Formula.COMPLEX(Math.cos(y)*(Math.exp(x)+Math.exp(-x))/2,Math.sin(y)*(Math.exp(x)-Math.exp(-x))/2,unit);};Formula.IMCOT=function(inumber){if(inumber===true||inumber===false){return'#VALUE!';}
var x=Formula.IMREAL(inumber);var y=Formula.IMAGINARY(inumber);if(x==='#NUM!'||y==='#NUM!'){return'#NUM!';}
return Formula.IMDIV(Formula.IMCOS(inumber),Formula.IMSIN(inumber));};Formula.IMCSC=function(inumber){if(inumber===true||inumber===false){return'#VALUE!';}
var x=Formula.IMREAL(inumber);var y=Formula.IMAGINARY(inumber);if(x==='#NUM!'||y==='#NUM!'){return'#NUM!';}
return Formula.IMDIV('1',Formula.IMSIN(inumber));};Formula.IMCSCH=function(inumber){if(inumber===true||inumber===false){return'#VALUE!';}
var x=Formula.IMREAL(inumber);var y=Formula.IMAGINARY(inumber);if(x==='#NUM!'||y==='#NUM!'){return'#NUM!';}
return Formula.IMDIV('1',Formula.IMSINH(inumber));};Formula.IMDIV=function(inumber1,inumber2){var a=Formula.IMREAL(inumber1);var b=Formula.IMAGINARY(inumber1);var c=Formula.IMREAL(inumber2);var d=Formula.IMAGINARY(inumber2);var unit1=inumber1.substring(inumber1.length-1);var unit2=inumber1.substring(inumber1.length-1);var unit='i';if(unit1==='j'){unit='j';}else if(unit2==='j'){unit='j';}
if(a==='#NUM!'||b==='#NUM!'||c==='#NUM!'||d==='#NUM!'){return'#NUM!';}
if(c===0&&d===0){return'#NUM!';}
var den=c*c+d*d;return Formula.COMPLEX((a*c+b*d)/den,(b*c-a*d)/den,unit);};Formula.IMEXP=function(inumber){var x=Formula.IMREAL(inumber);var y=Formula.IMAGINARY(inumber);var unit=inumber.substring(inumber.length-1);unit=(unit==='i'||unit==='j')?unit:'i';if(x==='#NUM!'||y==='#NUM!'){return'#NUM!';}
var e=Math.exp(x);return Formula.COMPLEX(e*Math.cos(y),e*Math.sin(y),unit);};Formula.IMLN=function(inumber){var x=Formula.IMREAL(inumber);var y=Formula.IMAGINARY(inumber);var unit=inumber.substring(inumber.length-1);unit=(unit==='i'||unit==='j')?unit:'i';if(x==='#NUM!'||y==='#NUM!'){return'#NUM!';}
return Formula.COMPLEX(Math.log(Math.sqrt(x*x+y*y)),Math.atan(y/x),unit);};Formula.IMLOG10=function(inumber){var x=Formula.IMREAL(inumber);var y=Formula.IMAGINARY(inumber);var unit=inumber.substring(inumber.length-1);unit=(unit==='i'||unit==='j')?unit:'i';if(x==='#NUM!'||y==='#NUM!'){return'#NUM!';}
return Formula.COMPLEX(Math.log(Math.sqrt(x*x+y*y))/Math.log(10),Math.atan(y/x)/Math.log(10),unit);};Formula.IMLOG2=function(inumber){var x=Formula.IMREAL(inumber);var y=Formula.IMAGINARY(inumber);var unit=inumber.substring(inumber.length-1);unit=(unit==='i'||unit==='j')?unit:'i';if(x==='#NUM!'||y==='#NUM!'){return'#NUM!';}
return Formula.COMPLEX(Math.log(Math.sqrt(x*x+y*y))/Math.log(2),Math.atan(y/x)/Math.log(2),unit);};Formula.IMPOWER=function(inumber,number){if(isNaN(number)){return'#VALUE!';}
var x=Formula.IMREAL(inumber);var y=Formula.IMAGINARY(inumber);var unit=inumber.substring(inumber.length-1);unit=(unit==='i'||unit==='j')?unit:'i';if(x==='#NUM!'||y==='#NUM!'){return'#NUM!';}
var p=Math.pow(Formula.IMABS(inumber),number);var t=Formula.IMARGUMENT(inumber);return Formula.COMPLEX(p*Math.cos(number*t),p*Math.sin(number*t),unit);};Formula.IMPRODUCT=function(){var result=arguments[0];for(var i=1;i<arguments.length;i++){var a=Formula.IMREAL(result);var b=Formula.IMAGINARY(result);var c=Formula.IMREAL(arguments[i]);var d=Formula.IMAGINARY(arguments[i]);if(a==='#NUM!'||b==='#NUM!'||c==='#NUM!'||d==='#NUM!'){return'#NUM!';}
result=Formula.COMPLEX(a*c-b*d,a*d+b*c);}
return result;};Formula.IMREAL=function(inumber){if(inumber===0||inumber==='0'){return 0;}
if(['i','+i','1i','+1i','-i','-1i','j','+j','1j','+1j','-j','-1j'].indexOf(inumber)>=0){return 0;}
var plus=inumber.indexOf('+');var minus=inumber.indexOf('-');if(plus===0){plus=inumber.indexOf('+',1);}
if(minus===0){minus=inumber.indexOf('-',1);}
var last=inumber.substring(inumber.length-1,inumber.length);var unit=(last==='i'||last==='j');if(plus>=0||minus>=0){if(!unit){return'#NUM!';}
if(plus>=0){return(isNaN(inumber.substring(0,plus))||isNaN(inumber.substring(plus+1,inumber.length-1)))?'#NUM!':Number(inumber.substring(0,plus));}else{return(isNaN(inumber.substring(0,minus))||isNaN(inumber.substring(minus+1,inumber.length-1)))?'#NUM!':Number(inumber.substring(0,minus));}}else{if(unit){return(isNaN(inumber.substring(0,inumber.length-1)))?'#NUM!':0;}else{return(isNaN(inumber))?'#NUM!':inumber;}}};Formula.IMSEC=function(inumber){if(inumber===true||inumber===false){return'#VALUE!';}
var x=Formula.IMREAL(inumber);var y=Formula.IMAGINARY(inumber);if(x==='#NUM!'||y==='#NUM!'){return'#NUM!';}
return Formula.IMDIV('1',Formula.IMCOS(inumber));};Formula.IMSECH=function(inumber){if(inumber===true||inumber===false){return'#VALUE!';}
var x=Formula.IMREAL(inumber);var y=Formula.IMAGINARY(inumber);if(x==='#NUM!'||y==='#NUM!'){return'#NUM!';}
return Formula.IMDIV('1',Formula.IMCOSH(inumber));};Formula.IMSIN=function(inumber){if(inumber===true||inumber===false){return'#VALUE!';}
var x=Formula.IMREAL(inumber);var y=Formula.IMAGINARY(inumber);var unit=inumber.substring(inumber.length-1);unit=(unit==='i'||unit==='j')?unit:'i';if(x==='#NUM!'||y==='#NUM!'){return'#NUM!';}
return Formula.COMPLEX(Math.sin(x)*(Math.exp(y)+Math.exp(-y))/2,Math.cos(x)*(Math.exp(y)-Math.exp(-y))/2,unit);};Formula.IMSINH=function(inumber){if(inumber===true||inumber===false){return'#VALUE!';}
var x=Formula.IMREAL(inumber);var y=Formula.IMAGINARY(inumber);var unit=inumber.substring(inumber.length-1);unit=(unit==='i'||unit==='j')?unit:'i';if(x==='#NUM!'||y==='#NUM!'){return'#NUM!';}
return Formula.COMPLEX(Math.cos(y)*(Math.exp(x)-Math.exp(-x))/2,Math.sin(y)*(Math.exp(x)+Math.exp(-x))/2,unit);};Formula.IMSQRT=function(inumber){var x=Formula.IMREAL(inumber);var y=Formula.IMAGINARY(inumber);var unit=inumber.substring(inumber.length-1);unit=(unit==='i'||unit==='j')?unit:'i';if(x==='#NUM!'||y==='#NUM!'){return'#NUM!';}
var s=Math.sqrt(Formula.IMABS(inumber));var t=Formula.IMARGUMENT(inumber);return Formula.COMPLEX(s*Math.cos(t/2),s*Math.sin(t/2),unit);};Formula.IMSUB=function(inumber1,inumber2){var a=Formula.IMREAL(inumber1);var b=Formula.IMAGINARY(inumber1);var c=Formula.IMREAL(inumber2);var d=Formula.IMAGINARY(inumber2);var unit1=inumber1.substring(inumber1.length-1);var unit2=inumber1.substring(inumber1.length-1);var unit='i';if(unit1==='j'){unit='j';}else if(unit2==='j'){unit='j';}
if(a==='#NUM!'||b==='#NUM!'||c==='#NUM!'||d==='#NUM!'){return'#NUM!';}
return Formula.COMPLEX(a-c,b-d,unit);};Formula.IMSUM=function(){var result=arguments[0];for(var i=1;i<arguments.length;i++){var a=Formula.IMREAL(result);var b=Formula.IMAGINARY(result);var c=Formula.IMREAL(arguments[i]);var d=Formula.IMAGINARY(arguments[i]);if(a==='#NUM!'||b==='#NUM!'||c==='#NUM!'||d==='#NUM!'){return'#NUM!';}
result=Formula.COMPLEX(a+c,b+d);}
return result;};Formula.IMTAN=function(inumber){if(inumber===true||inumber===false){return'#VALUE!';}
var x=Formula.IMREAL(inumber);var y=Formula.IMAGINARY(inumber);if(x==='#NUM!'||y==='#NUM!'){return'#NUM!';}
return Formula.IMDIV(Formula.IMSIN(inumber),Formula.IMCOS(inumber));};Formula.OCT2BIN=function(number,places){if(!/^[0-7]{1,10}$/.test(number)){return'#NUM!';}
var negative=(number.length===10&&number.substring(0,1)==='7')?true:false;var decimal=(negative)?parseInt(number,8)-1073741824:parseInt(number,8);if(decimal<-512||decimal>511){return'#NUM!';}
if(negative){return'1'+_s.repeat('0',9-(512+decimal).toString(2).length)+(512+decimal).toString(2);}
var result=decimal.toString(2);if(typeof places==='undefined'){return result;}else{if(isNaN(places)){return'#VALUE!';}
if(places<0){return'#NUM!';}
places=Math.floor(places);return(places>=result.length)?_s.repeat('0',places-result.length)+result:'#NUM!';}};Formula.OCT2DEC=function(number){if(!/^[0-7]{1,10}$/.test(number)){return'#NUM!';}
var decimal=parseInt(number,8);return(decimal>=536870912)?decimal-1073741824:decimal;};Formula.OCT2HEX=function(number,places){if(!/^[0-7]{1,10}$/.test(number)){return'#NUM!';}
var decimal=parseInt(number,8);if(decimal>=536870912){return'ff'+(decimal+3221225472).toString(16);}
var result=decimal.toString(16);if(typeof places==='undefined'){return result;}else{if(isNaN(places)){return'#VALUE!';}
if(places<0){return'#NUM!';}
places=Math.floor(places);return(places>=result.length)?_s.repeat('0',places-result.length)+result:'#NUM!';}};Formula.ACCRINT=function(issue,first,settlement,rate,par,frequency,basis,method){if(!moment(issue).isValid()||!moment(first).isValid()||!moment(settlement).isValid()){return'#VALUE!';}
if(rate<=0||par<=0){return'#NUM!';}
if([1,2,4].indexOf(frequency)===-1){return'#NUM!';}
if([0,1,2,3,4].indexOf(basis)===-1){return'#NUM!';}
if(moment(issue).diff(moment(settlement))>=0){return'#NUM!';}
par=(typeof par==='undefined')?0:par;basis=(typeof basis==='undefined')?0:basis;method=(typeof method==='undefined')?true:method;var factor=0;switch(basis){case 0:factor=Formula.YEARFRAC(issue,settlement,basis);break;case 1:factor=Formula.YEARFRAC(issue,settlement,basis);break;case 2:factor=Formula.YEARFRAC(issue,settlement,basis);break;case 3:factor=Formula.YEARFRAC(issue,settlement,basis);break;case 4:factor=Formula.YEARFRAC(issue,settlement,basis);break;}
return par*rate*factor;};Formula.ACCRINTM=function(){return;};Formula.AMORDEGRC=function(){return;};Formula.AMORLINC=function(){return;};Formula.COUPDAYBS=function(){return;};Formula.COUPDAYS=function(){return;};Formula.COUPDAYSNC=function(){return;};Formula.COUPNCD=function(){return;};Formula.COUPNUM=function(){return;};Formula.COUPPCD=function(){return;};Formula.CUMIPMT=function(rate,periods,value,start,end,type){rate=eval(rate);periods=eval(periods);if(rate<=0||periods<=0||value<=0){return'#NUM!';}
if(start<1||end<1||start>end){return'#NUM!';}
if(type!==0&&type!==1){return'#NUM!';}
var payment=Formula.PMT(rate,periods,value,0,type);var interest=0;if(start===1){if(type===0){interest=-value;start++;}}
for(var i=start;i<=end;i++){if(type===1){interest+=Formula.FV(rate,i-2,payment,value,1)-payment;}else{interest+=Formula.FV(rate,i-1,payment,value,0);}}
interest*=rate;return interest;};Formula.CUMPRINC=function(rate,periods,value,start,end,type){rate=eval(rate);periods=eval(periods);if(rate<=0||periods<=0||value<=0){return'#NUM!';}
if(start<1||end<1||start>end){return'#NUM!';}
if(type!==0&&type!==1){return'#NUM!';}
var payment=Formula.PMT(rate,periods,value,0,type);var principal=0;if(start===1){if(type===0){principal=payment+value*rate;}else{principal=payment;}
start++;}
for(var i=start;i<=end;i++){if(type>0){principal+=payment-(Formula.FV(rate,i-2,payment,value,1)-payment)*rate;}else{principal+=payment-Formula.FV(rate,i-1,payment,value,0)*rate;}}
return principal;};Formula.DB=function(cost,salvage,life,period,month){month=(typeof month==='undefined')?12:month;if(isNaN(cost)||isNaN(salvage)||isNaN(life)||isNaN(period)||isNaN(month)){return'#VALUE!';}
if(cost<0||salvage<0||life<0||period<0){return'#NUM!';}
if([1,2,3,4,5,6,7,8,9,10,11,12].indexOf(month)===-1){return'#NUM!';}
if(period>life){return'#NUM!';}
if(salvage>=cost){return 0;}
var rate=(1-Math.pow(salvage/cost,1/life)).toFixed(3);var initial=cost*rate*month/12;var total=initial;var current=0;var ceiling=(period===life)?life-1:period;for(var i=2;i<=ceiling;i++){current=(cost-total)*rate;total+=current;}
if(period===1){return initial;}else if(period===life){return(cost-total)*rate;}else{return current;}};Formula.DDB=function(cost,salvage,life,period,factor){factor=(typeof factor==='undefined')?2:factor;if(isNaN(cost)||isNaN(salvage)||isNaN(life)||isNaN(period)||isNaN(factor)){return'#VALUE!';}
if(cost<0||salvage<0||life<0||period<0||factor<=0){return'#NUM!';}
if(period>life){return'#NUM!';}
if(salvage>=cost){return 0;}
var total=0;var current=0;for(var i=1;i<=period;i++){current=Math.min((cost-total)*(factor/life),(cost-salvage-total));total+=current;}
return current;};Formula.DISC=function(){return;};Formula.DOLLARDE=function(dollar,fraction){if(isNaN(dollar)||isNaN(fraction)){return'#VALUE!';}
if(fraction<0){return'#NUM!';}
if(fraction>=0&&fraction<1){return'#DIV/0!';}
fraction=parseInt(fraction,10);var result=parseInt(dollar,10);result+=(dollar%1)*Math.pow(10,Math.ceil(Math.log(fraction)/Math.LN10))/fraction;var power=Math.pow(10,Math.ceil(Math.log(fraction)/Math.LN2)+1);result=Math.round(result*power)/power;return result;};Formula.DOLLARFR=function(dollar,fraction){if(isNaN(dollar)||isNaN(fraction)){return'#VALUE!';}
if(fraction<0){return'#NUM!';}
if(fraction>=0&&fraction<1){return'#DIV/0!';}
fraction=parseInt(fraction,10);var result=parseInt(dollar,10);result+=(dollar%1)*Math.pow(10,-Math.ceil(Math.log(fraction)/Math.LN10))*fraction;return result;};Formula.DURATION=function(){return;};Formula.EFFECT=function(rate,periods){if(isNaN(rate)||isNaN(periods)){return'#VALUE!';}
if(rate<=0||periods<1){return'#NUM!';}
periods=parseInt(periods,10);return Math.pow(1+rate/periods,periods)-1;};Formula.FV=function(rate,periods,payment,value,type){type=(typeof type==='undefined')?0:type;rate=eval(rate);var result;if(rate===0){result=value+payment*periods;}else{var term=Math.pow(1+rate,periods);if(type===1){result=value*term+payment*(1+rate)*(term-1.0)/rate;}else{result=value*term+payment*(term-1)/rate;}}
return-result;};Formula.FVSCHEDULE=function(principal,schedule){var future=principal;for(var i=0;i<schedule.length;i++){if(isNaN(schedule[i])){return'#VALUE!';}
future*=1+schedule[i];}
return future;};Formula.INTRATE=function(){return;};Formula.IPMT=function(rate,period,periods,present,future,type){type=(typeof type==='undefined')?0:type;rate=eval(rate);periods=eval(periods);var payment=Formula.PMT(rate,periods,present,future,type);var interest;if(period===1){if(type===1){interest=0;}else{interest=-present;}}else{if(type===1){interest=Formula.FV(rate,period-2,payment,present,1)-payment;}else{interest=Formula.FV(rate,period-1,payment,present,0);}}
return interest*rate;};Formula.IRR=function(values,guess){values=Formula.FLATTEN(values);var irrResult=function(values,dates,rate){var r=rate+1;var result=values[0];for(var i=1;i<values.length;i++){result+=values[i]/Math.pow(r,(dates[i]-dates[0])/365);}
return result;};var irrResultDeriv=function(values,dates,rate){var r=rate+1;var result=0;for(var i=1;i<values.length;i++){var frac=(dates[i]-dates[0])/365;result-=frac*values[i]/Math.pow(r,frac+1);}
return result;};var dates=[];var positive=false;var negative=false;for(var i=0;i<values.length;i++){dates[i]=(i===0)?0:dates[i-1]+365;if(values[i]>0){positive=true;}
if(values[i]<0){negative=true;}}
if(!positive||!negative){return'#NUM!';}
guess=(typeof guess==='undefined')?0.1:guess;var resultRate=guess;var epsMax=1e-10;var iterMax=50;var newRate,epsRate,resultValue;var iteration=0;var contLoop=true;do{resultValue=irrResult(values,dates,resultRate);newRate=resultRate-resultValue/irrResultDeriv(values,dates,resultRate);epsRate=Math.abs(newRate-resultRate);resultRate=newRate;contLoop=(epsRate>epsMax)&&(Math.abs(resultValue)>epsMax);}while(contLoop&&(++iteration<iterMax));if(contLoop){return'#NUM!';}
return resultRate;};Formula.ISPMT=function(rate,period,periods,value){rate=eval(rate);periods=eval(periods);return value*rate*(period/periods-1);};Formula.MDURATION=function(){return;};Formula.MIRR=function(values,finance_rate,reinvest_rate){var n=values.length;var payments=[];var incomes=[];for(var i=0;i<n;i++){if(values[i]<0){payments.push(values[i]);}else{incomes.push(values[i]);}}
var num=-Formula.NPV(reinvest_rate,incomes)*Math.pow(1+reinvest_rate,n-1);var den=Formula.NPV(finance_rate,payments)*(1+finance_rate);return Math.pow(num/den,1/(n-1))-1;};Formula.NOMINAL=function(rate,periods){if(isNaN(rate)||isNaN(periods)){return'#VALUE!';}
if(rate<=0||periods<1){return'#NUM!';}
periods=parseInt(periods,10);return(Math.pow(rate+1,1/periods)-1)*periods;};Formula.NPER=function(rate,payment,present,future,type){type=(typeof type==='undefined')?0:type;future=(typeof future==='undefined')?0:future;rate=eval(rate);var num=payment*(1+rate*type)-future*rate;var den=(present*rate+payment*(1+rate*type));return Math.log(num/den)/Math.log(1+rate);};Formula.NPV=function(){var args=[];for(var i=0;i<arguments.length;i++){args=args.concat(arguments[i]);}
var rate=args[0];var value=0;for(var j=1;j<args.length;j++){value+=args[j]/Math.pow(1+rate,j);}
return value;};Formula.ODDFPRICE=function(){return;};Formula.ODDFYIELD=function(){return;};Formula.ODDLPRICE=function(){return;};Formula.ODDLYIELD=function(){return;};Formula.PDURATION=function(rate,present,future){if(isNaN(rate)||isNaN(present)||isNaN(future)){return'#VALUE!';}
if(rate<=0){return'#NUM!';}
return(Math.log(future)-Math.log(present))/Math.log(1+rate);};Formula.PMT=function(rate,periods,present,future,type){type=(typeof type==='undefined')?0:type;future=future||0;rate=eval(rate);periods=eval(periods);var result;if(rate===0){result=(present+future)/periods;}else{var term=Math.pow(1+rate,periods);if(type===1){result=(future*rate/(term-1)+present*rate/(1-1/term))/(1+rate);}else{result=future*rate/(term-1)+present*rate/(1-1/term);}}
return-result;};Formula.PPMT=function(rate,period,periods,present,future,type){return Formula.PMT(rate,periods,present,future,type)-Formula.IPMT(rate,period,periods,present,future,type);};Formula.PRICE=function(){return;};Formula.PRICEDISC=function(){return;};Formula.PRICEMAT=function(){return;};Formula.PV=function(rate,periods,payment,future,type){type=(typeof type==='undefined')?0:type;rate=eval(rate);periods=eval(periods);if(rate===0){return-payment*periods-future;}else{return(((1-Math.pow(1+rate,periods))/rate)*payment*(1+rate*type)-future)/Math.pow(1+rate,periods);}};Formula.RATE=function(periods,payment,present,future,type,guess){guess=(typeof guess==='undefined')?0.01:guess;future=(typeof future==='undefined')?0:future;type=(typeof type==='undefined')?0:type;periods=eval(periods);var epsMax=1e-10;var iterMax=50;var y,y0,y1,x0,x1=0,f=0,i=0;var rate=guess;if(Math.abs(rate)<epsMax){y=present*(1+periods*rate)+payment*(1+rate*type)*periods+future;}else{f=Math.exp(periods*Math.log(1+rate));y=present*f+payment*(1/rate+type)*(f-1)+future;}
y0=present+payment*periods+future;y1=present*f+payment*(1/rate+type)*(f-1)+future;i=x0=0;x1=rate;while((Math.abs(y0-y1)>epsMax)&&(i<iterMax)){rate=(y1*x0-y0*x1)/(y1-y0);x0=x1;x1=rate;if(Math.abs(rate)<epsMax){y=present*(1+periods*rate)+payment*(1+rate*type)*periods+future;}else{f=Math.exp(periods*Math.log(1+rate));y=present*f+payment*(1/rate+type)*(f-1)+future;}
y0=y1;y1=y;++i;}
return rate;};Formula.RECEIVED=function(){return;};Formula.RRI=function(periods,present,future){if(isNaN(periods)||isNaN(present)||isNaN(future)){return'#VALUE!';}
if(periods===0||present===0){return'#NUM!';}
return Math.pow(future/present,1/periods)-1;};Formula.SLN=function(cost,salvage,life){if(isNaN(cost)||isNaN(salvage)||isNaN(life)){return'#VALUE!';}
if(life===0){return'#NUM!';}
return(cost-salvage)/life;};Formula.SYD=function(cost,salvage,life,period){if(isNaN(cost)||isNaN(salvage)||isNaN(life)||isNaN(period)){return'#VALUE!';}
if(life===0){return'#NUM!';}
if(period<1||period>life){return'#NUM!';}
period=parseInt(period,10);return(cost-salvage)*(life-period+1)*2/(life*(life+1));};Formula.TBILLEQ=function(settlement,maturity,discount){if(!moment(settlement).isValid()||!moment(maturity).isValid()){return'#VALUE!';}
if(discount<=0){return'#NUM!';}
if(moment(settlement).diff(moment(maturity))>0){return'#NUM!';}
if(moment(maturity).diff(moment(settlement),'years')>1){return'#NUM!';}
return(365*discount)/(360-discount*Formula.DAYS360(settlement,maturity));};Formula.TBILLPRICE=function(settlement,maturity,discount){if(!moment(settlement).isValid()||!moment(maturity).isValid()){return'#VALUE!';}
if(discount<=0){return'#NUM!';}
if(moment(settlement).diff(moment(maturity))>0){return'#NUM!';}
if(moment(maturity).diff(moment(settlement),'years')>1){return'#NUM!';}
return 100*(1-discount*Formula.DAYS360(settlement,maturity)/360);};Formula.TBILLYIELD=function(settlement,maturity,price){if(!moment(settlement).isValid()||!moment(maturity).isValid()){return'#VALUE!';}
if(price<=0){return'#NUM!';}
if(moment(settlement).diff(moment(maturity))>0){return'#NUM!';}
if(moment(maturity).diff(moment(settlement),'years')>1){return'#NUM!';}
return(100-price)*360/(price*Formula.DAYS360(settlement,maturity));};Formula.VDB=function(){return;};Formula.XIRR=function(values,dates,guess){var irrResult=function(values,dates,rate){var r=rate+1;var result=values[0];for(var i=1;i<values.length;i++){result+=values[i]/Math.pow(r,moment(dates[i]).diff(moment(dates[0]),'days')/365);}
return result;};var irrResultDeriv=function(values,dates,rate){var r=rate+1;var result=0;for(var i=1;i<values.length;i++){var frac=moment(dates[i]).diff(moment(dates[0]),'days')/365;result-=frac*values[i]/Math.pow(r,frac+1);}
return result;};var positive=false;var negative=false;for(var i=0;i<values.length;i++){if(values[i]>0){positive=true;}
if(values[i]<0){negative=true;}}
if(!positive||!negative){return'#NUM!';}
guess=guess||0.1;var resultRate=guess;var epsMax=1e-10;var iterMax=50;var newRate,epsRate,resultValue;var iteration=0;var contLoop=true;do{resultValue=irrResult(values,dates,resultRate);newRate=resultRate-resultValue/irrResultDeriv(values,dates,resultRate);epsRate=Math.abs(newRate-resultRate);resultRate=newRate;contLoop=(epsRate>epsMax)&&(Math.abs(resultValue)>epsMax);}while(contLoop&&(++iteration<iterMax));if(contLoop){return'#NUM!';}
return resultRate;};Formula.XNPV=function(rate,values,dates){var result=0;for(var i=0;i<values.length;i++){result+=values[i]/Math.pow(1+rate,moment(dates[i]).diff(moment(dates[0]),'days')/365);}
return result;};Formula.YIELD=function(){return;};Formula.YIELDDISC=function(){return;};Formula.YIELDMAT=function(){return;};Formula.ISNUMBER=function(number){return(!isNaN(parseFloat(number))&&isFinite(number))?true:false;};Formula.AND=function(){var result=true;for(var i=0;i<arguments.length;i++){if(!arguments[i]){result=false;}}
return result;};Formula.FALSE=function(){return false;};Formula.SWITCH=function(){var result;if(arguments.length>0){var targetValue=arguments[0];var argc=arguments.length-1;var switchCount=Math.floor(argc/2);var switchSatisfied=false;var defaultClause=argc%2===0?null:arguments[arguments.length-1];if(switchCount){for(var index=0;index<switchCount;index++){if(targetValue===arguments[index*2+1]){result=arguments[index*2+2];switchSatisfied=true;break;}}}
if(!switchSatisfied&&defaultClause){result=defaultClause;}}
return result;};Formula.IF=function(test,then_value,otherwise_value){return test?then_value:otherwise_value;};Formula.IFNA=function(value,value_if_na){return(value==='#N/A')?value_if_na:value;};Formula.NOT=function(logical){return!logical;};Formula.OR=function(){var result=false;for(var i=0;i<arguments.length;i++){if(arguments[i]){result=true;}}
return result;};Formula.TRUE=function(){return true;};Formula.XOR=function(){var result=0;for(var i=0;i<arguments.length;i++){if(arguments[i]){result++;}}
return(Math.floor(Math.abs(result))&1)?true:false;};Formula.REFERENCE=function(context,reference){try{var path=reference.split('.'),result=context;_(path).forEach(function(step){if(step[step.length-1]===']'){var opening=step.indexOf('[');var index=step.substring(opening+1,step.length-1);result=result[step.substring(0,opening)][index];}else{result=result[step];}});return result;}catch(error){return;}};Formula.ABS=function(number){return Math.abs(number);};Formula.ACOS=function(number){return Math.acos(number);};Formula.ACOSH=function(number){return Math.log(number+Math.sqrt(number*number-1));};Formula.ACOT=function(number){return Math.atan(1/number);};Formula.ACOTH=function(number){return 0.5*Math.log((number+1)/(number-1));};Formula.AGGREGATE=function(function_code){var result=[];for(var i=2;i<arguments.length;i++){switch(function_code){case 1:result[i-2]=Formula.AVERAGE(arguments[i]);break;case 2:result[i-2]=Formula.COUNT(arguments[i]);break;case 3:result[i-2]=Formula.COUNTA(arguments[i]);break;case 4:result[i-2]=Formula.MAX(arguments[i]);break;case 5:result[i-2]=Formula.MIN(arguments[i]);break;case 6:result[i-2]=Formula.PRODUCT(arguments[i]);break;case 7:result[i-2]=Formula.STDEVS(arguments[i]);break;case 8:result[i-2]=Formula.STDEVP(arguments[i]);break;case 9:result[i-2]=Formula.SUM(arguments[i]);break;case 10:result[i-2]=Formula.VARS(arguments[i]);break;case 11:result[i-2]=Formula.VARP(arguments[i]);break;case 12:result[i-2]=Formula.MEDIAN(arguments[i]);break;case 13:result[i-2]=Formula.MODESNGL(arguments[i]);break;case 14:result[i-2]=Formula.LARGE(arguments[i]);break;case 15:result[i-2]=Formula.SMALL(arguments[i]);break;case 16:result[i-2]=Formula.PERCENTILEINC(arguments[i]);break;case 17:result[i-2]=Formula.QUARTILEINC(arguments[i]);break;case 18:result[i-2]=Formula.PERCENTILEEXC(arguments[i]);break;case 19:result[i-2]=Formula.QUARTILEEXC(arguments[i]);break;}}
return result;};Formula.ARABIC=function(text){if(!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(text)){throw new Error('Incorrect roman number');}
var r=0;text.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,function(i){r+={M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}[i];});return r;};Formula.ASIN=function(number){return Math.asin(number);};Formula.ASINH=function(number){return Math.log(number+Math.sqrt(number*number+1));};Formula.ATAN=function(number){return Math.atan(number);};Formula.ATAN2=function(number_x,number_y){return Math.atan2(number_x,number_y);};Formula.ATANH=function(number){return Math.log((1+number)/(1-number))/2;};Formula.BASE=function(number,radix,min_length){min_length=(typeof min_length==='undefined')?0:min_length;var result=number.toString(radix);return new Array(Math.max(min_length+1-result.length,0)).join('0')+result;};Formula.CEILING=function(number,significance,mode){if(significance===0){return 0;}
significance=(typeof significance==='undefined')?1:Math.abs(significance);mode=(typeof mode==='undefined')?0:mode;var precision=-Math.floor(Math.log(significance)/Math.log(10));if(number>=0){return Formula.ROUND(Math.ceil(number/significance)*significance,precision);}else{if(mode===0){return-Formula.ROUND(Math.floor(Math.abs(number)/significance)*significance,precision);}else{return-Formula.ROUND(Math.ceil(Math.abs(number)/significance)*significance,precision);}}};Formula.CEILINGMATH=Formula.CEILING;Formula.CEILINGPRECISE=Formula.CEILING;Formula.COMBIN=function(number,number_chosen){return Formula.FACT(number)/(Formula.FACT(number_chosen)*Formula.FACT(number-number_chosen));};Formula.COMBINA=function(number,number_chosen){return(number===0&&number_chosen===0)?1:Formula.COMBIN(number+number_chosen-1,number-1);};Formula.COS=Math.cos;Formula.COSH=function(number){return(Math.exp(number)+Math.exp(-number))/2;};Formula.COT=function(number){return 1/Math.tan(number);};Formula.COTH=function(number){var e2=Math.exp(2*number);return(e2+1)/(e2-1);};Formula.CSC=function(number){return 1/Math.sin(number);};Formula.CSCH=function(number){return 2/(Math.exp(number)-Math.exp(-number));};Formula.DECIMAL=function(number,radix){return parseInt(number,radix);};Formula.DEGREES=function(number){return number*180/Math.PI;};Formula.EVEN=function(number){return Formula.CEILING(number,-2,-1);};Formula.EXP=Math.exp;Formula.FACT=function(number){var n=Math.floor(number);if(n===0||n===1){return 1;}else if(MEMOIZED_FACT[n]>0){return MEMOIZED_FACT[n];}else{MEMOIZED_FACT[n]=Formula.FACT(n-1)*n;return MEMOIZED_FACT[n];}};Formula.FACTDOUBLE=function(number){var n=Math.floor(number);if(n<=0){return 1;}else{return n*Formula.FACTDOUBLE(n-2);}};Formula.FLOOR=function(number,significance,mode){if(significance===0){return 0;}
significance=significance?Math.abs(significance):1;var precision=-Math.floor(Math.log(significance)/Math.log(10));if(number>=0){return Formula.ROUND(Math.floor(number/significance)*significance,precision);}else if(mode===0||typeof mode==='undefined'){return-Formula.ROUND(Math.ceil(Math.abs(number)/significance)*significance,precision);}
return-Formula.ROUND(Math.floor(Math.abs(number)/significance)*significance,precision);};Formula.FLOORMATH=Formula.FLOOR;Formula.FLOORPRECISE=function(number,significance){if(significance===0){return 0;}
significance=significance?Math.abs(significance):1;var precision=-Math.floor(Math.log(significance)/Math.log(10));if(number>=0){return Formula.ROUND(Math.round(number/significance)*significance,precision);}
return-Formula.ROUND(Math.ceil(Math.abs(number)/significance)*significance,precision);};Formula.GCD=function(){for(var r,a,i=arguments.length-1,result=arguments[i];i;){for(a=arguments[--i];(r=a%result);a=result,result=r){}}
return result;};Formula.INT=function(number){return Math.floor(number);};Formula.ISEVEN=function(number){return(Math.floor(Math.abs(number))&1)?false:true;};Formula.ISOCEILING=Formula.CEILING;Formula.ISODD=function(number){return(Math.floor(Math.abs(number))&1)?true:false;};Formula.LCM=function(){var o=Formula.ARGSTOARRAY(arguments);for(var i,j,n,d,r=1;(n=o.pop())!==undefined;){while(n>1){if(n%2){for(i=3,j=Math.floor(Math.sqrt(n));i<=j&&n%i;i+=2){}
d=(i<=j)?i:n;}else{d=2;}
for(n/=d,r*=d,i=o.length;i;(o[--i]%d)===0&&(o[i]/=d)===1&&o.splice(i,1)){}}}
return r;};Formula.LN=function(number){return Math.log(number);};Formula.LOG=function(number,base){base=(typeof base==='undefined')?10:base;return Math.log(number)/Math.log(base);};Formula.LOG10=function(number){return Math.log(number)/Math.log(10);};Formula.MOD=function(dividend,divisor){var modulus=Math.abs(dividend%divisor);return(divisor>0)?modulus:-modulus;};Formula.MROUND=function(number,multiple){if(number*multiple<0){throw new Error('Number and multiple must have the same sign.');}
return Math.round(number/multiple)*multiple;};Formula.MULTINOMIAL=function(){var sum=0;var divisor=1;for(var i=0;i<arguments.length;i++){sum+=arguments[i];divisor*=Formula.FACT(arguments[i]);}
return Formula.FACT(sum)/divisor;};Formula.ODD=function(number){var temp=Math.ceil(Math.abs(number));temp=(temp&1)?temp:temp+1;return(number>0)?temp:-temp;};Formula.E=function(){return Math.E;};Formula.PI=function(){return Math.PI;};Formula.POWER=function(number,power){var result=Math.pow(number,power);if(isNaN(result)){return'#NUM!';}
return result;};Formula.PRODUCT=function(){var result=1;for(var i=0;i<arguments.length;i++){result*=arguments[i];}
return result;};Formula.QUOTIENT=function(numerator,denominator){return(numerator/denominator).toFixed(0);};Formula.RADIANS=function(number){return number*Math.PI/180;};Formula.RAND=function(){return Math.random();};Formula.RANDBETWEEN=function(bottom,top){return bottom+Math.ceil((top-bottom+1)*Math.random())-1;};Formula.ROUND=function(number,digits){return Math.round(number*Math.pow(10,digits))/Math.pow(10,digits);};Formula.ROUNDDOWN=function(number,digits){var sign=(number>0)?1:-1;return sign*(Math.floor(Math.abs(number)*Math.pow(10,digits)))/Math.pow(10,digits);};Formula.ROUNDUP=function(number,digits){var sign=(number>0)?1:-1;return sign*(Math.ceil(Math.abs(number)*Math.pow(10,digits)))/Math.pow(10,digits);};Formula.SERIESSUM=function(x,n,m,coefficients){var result=coefficients[0]*Math.pow(x,n);for(var i=1;i<coefficients.length;i++){result+=coefficients[i]*Math.pow(x,n+i*m);}
return result;};Formula.SEC=function(number){return 1/Math.cos(number);};Formula.SECH=function(number){return 2/(Math.exp(number)+Math.exp(-number));};Formula.SIGN=function(number){if(number<0){return-1;}else if(number===0){return 0;}else{return 1;}};Formula.SIN=Math.sin;Formula.SINH=function(number){return(Math.exp(number)-Math.exp(-number))/2;};Formula.SQRT=Math.sqrt;Formula.SQRTPI=function(number){return Math.sqrt(number*Math.PI);};Formula.SUBTOTAL=function(function_code){var result=[];for(var i=1;i<arguments.length;i++){switch(function_code){case 1:case 101:result[i-1]=Formula.AVERAGE(arguments[i]);break;case 2:case 102:result[i-1]=Formula.COUNT(arguments[i]);break;case 3:case 103:result[i-1]=Formula.COUNTA(arguments[i]);break;case 4:case 104:result[i-1]=Formula.MAX(arguments[i]);break;case 5:case 105:result[i-1]=Formula.MIN(arguments[i]);break;case 6:case 106:result[i-1]=Formula.PRODUCT(arguments[i]);break;case 7:case 107:result[i-1]=Formula.STDEV(arguments[i]);break;case 8:case 108:result[i-1]=Formula.STDEVP(arguments[i]);break;case 9:case 109:result[i-1]=Formula.SUM(arguments[i]);break;case 10:case 110:result[i-1]=Formula.VAR(arguments[i]);break;case 11:case 111:result[i-1]=Formula.VARP(arguments[i]);break;default:break;}}
switch(function_code){case 1:case 101:return Formula.AVERAGE(result);break;case 2:case 102:return Formula.COUNT(result);break;case 3:case 103:return Formula.COUNTA(result);break;case 4:case 104:return Formula.MAX(result);break;case 5:case 105:return Formula.MIN(result);break;case 6:case 106:return Formula.PRODUCT(result);break;case 7:case 107:return Formula.STDEV(result);break;case 8:case 108:return Formula.STDEVP(result);break;case 9:case 109:return Formula.SUM(result);break;case 10:case 110:return Formula.VAR(result);break;case 11:case 111:return Formula.VARP(result);break;default:break;}
return'#VALUE!';};Formula.SUM=function(){var numbers=Formula.FLATTEN(arguments);var result=0;for(var i=0;i<numbers.length;i++){if(numbers[i]instanceof Array){for(var j=0;j<numbers[i].length;j++){result+=(Formula.ISNUMBER(numbers[i][j]))?numbers[i][j]:0;}}else{result+=(Formula.ISNUMBER(numbers[i]))?numbers[i]:0;}}
return result;};Formula.SUMIF=function(range,criteria,sum_range){sum_range=sum_range||range;range=Formula.FLATTEN(range);sum_range=Formula.FLATTEN(sum_range);criteria=criteria===null?'':criteria;var result=0;if(sum_range!=range){range.length=sum_range.length;}
if(range&&sum_range&&range.length===sum_range.length&&(criteria||criteria===''||criteria===0)){if(typeof criteria=='string'){if(!criteria.match(/^[<>=]/g)){criteria='==="'+criteria.replace(/\'/g,"\\'").replace(/\"/g,'\\"')+'"';}else{if(criteria[0]=='='&&criteria[1]!='='){criteria=criteria.replace(/^=/,'===');}}}else{criteria='==='+criteria;}
for(var i=0;i<range.length;i++){range[i]=range[i]===null?'':range[i];range[i]=typeof range[i]=='string'?'"'+range[i].replace(/\'/g,"\\'").replace(/\"/g,'\\"')+'"':range[i];result+=(eval(range[i]+criteria))?sum_range[i]:0;}}else{result='#N/A'}
return result;};Formula.SUMIFS=function(){var criteria=(arguments.length-1)/2;var range=arguments[0];var result=0;for(var i=0;i<range.length;i++){var fit=true;for(var j=0;j<criteria;j++){if(!eval(arguments[2*j+1][i]+arguments[2*j+2])){fit=false;}}
result+=(fit)?range[i]:0;}
return result;};Formula.SUMPRODUCT=function(){var arrays=arguments.length+1;var result=0;for(var i=0;i<arguments[0].length;i++){for(var j=0;j<arguments[0][i].length;j++){var product=1;for(var k=1;k<arrays;k++){product*=arguments[k-1][i][j];}
result+=product;}}
return result;};Formula.SUMSQ=function(){var numbers=Formula.FLATTEN(arguments);var result=0;for(var i=0;i<numbers.length;i++){result+=(Formula.ISNUMBER(numbers[i]))?numbers[i]*numbers[i]:0;}
return result;};Formula.SUMX2MY2=function(array_x,array_y){var result=0;array_x=Formula.FLATTEN(array_x);array_y=Formula.FLATTEN(array_y);for(var i=0;i<array_x.length;i++){result+=array_x[i]*array_x[i]-array_y[i]*array_y[i];}
return result;};Formula.SUMX2PY2=function(array_x,array_y){var result=0;array_x=Formula.FLATTEN(array_x);array_y=Formula.FLATTEN(array_y);for(var i=0;i<array_x.length;i++){result+=array_x[i]*array_x[i]+array_y[i]*array_y[i];}
return result;};Formula.SUMXMY2=function(array_x,array_y){var result=0;array_x=Formula.FLATTEN(array_x);array_y=Formula.FLATTEN(array_y);for(var i=0;i<array_x.length;i++){result+=Math.pow(array_x[i]-array_y[i],2);}
return result;};Formula.TAN=function(number){return Math.tan(number);};Formula.TANH=function(number){var e2=Math.exp(2*number);return(e2-1)/(e2+1);};Formula.TRUNC=function(number,digits){digits=(typeof digits==='undefined')?0:digits;var sign=(number>0)?1:-1;return sign*(Math.floor(Math.abs(number)*Math.pow(10,digits)))/Math.pow(10,digits);};Formula.AVEDEV=function(){var range=Formula.FLATTEN(arguments);return jStat.sum(jStat(range).subtract(jStat.mean(range)).abs()[0])/range.length;};Formula.AVERAGE=function(){var range=Formula.NUMBERS(Formula.FLATTEN(arguments));var n=range.length;var sum=0;var count=0;for(var i=0;i<n;i++){sum+=range[i];count+=1;}
return sum/count;};Formula.AVERAGEA=function(){var range=Formula.FLATTEN(arguments);var n=range.length;var sum=0;var count=0;for(var i=0;i<n;i++){var el=range[i];if(typeof el==='number'){sum+=el;}
if(el===true){sum++;}
if(el!==null){count++;}}
return sum/count;};Formula.AVERAGEIF=function(range,criteria,average_range){average_range=average_range||range;range=Formula.FLATTEN(range);average_range=Formula.FLATTEN(average_range);criteria=criteria.toString();var average_count=0;var result=0;if(range.length==average_range.length){for(var i=0;i<range.length;i++){var newCriteria=criteria;if(!isNaN(range[i])&&range[i]!=''){newCriteria=newCriteria.replace('=','');if(!/[<>=!]/.test(newCriteria)){newCriteria='=="'+newCriteria+'"';}
if(eval(range[i]+newCriteria)){result+=average_range[i];average_count++;}}else{range[i]=range[i].toString().toUpperCase();if(range[i].match(new RegExp('^'+newCriteria+'$'))){result+=average_range[i];average_count++;}}}
if(average_count===0||isNaN(result)){return'#DIV/0!';}
return result/average_count;}else{return'#N/A';}};Formula.AVERAGEIFS=function(){var args=Formula.ARGSTOARRAY(arguments);var criteria=(args.length-1)/2;var range=Formula.FLATTEN(args[0]);var count=0;var result=0;for(var i=0;i<range.length;i++){var condition='';for(var j=0;j<criteria;j++){condition+=args[2*j+1][i]+args[2*j+2];if(j!==criteria-1){condition+='&&';}}
if(eval(condition)){result+=range[i];count++;}}
var average=result/count;if(isNaN(average)){return 0;}else{return average;}};Formula.BETADIST=function(x,alpha,beta,cumulative,A,B){A=(typeof A==='undefined')?0:A;B=(typeof B==='undefined')?1:B;x=(x-A)/(B-A);return(cumulative)?jStat.beta.cdf(x,alpha,beta):jStat.beta.pdf(x,alpha,beta);};Formula.BETAINV=function(probability,alpha,beta,A,B){A=(typeof A==='undefined')?0:A;B=(typeof B==='undefined')?1:B;return jStat.beta.inv(probability,alpha,beta)*(B-A)+A;};Formula.BINOMDIST=function(successes,trials,probability,cumulative){return(cumulative)?jStat.binomial.cdf(successes,trials,probability):jStat.binomial.pdf(successes,trials,probability);};Formula.BINOMDISTRANGE=function(trials,probability,successes,successes2){successes2=(typeof successes2==='undefined')?successes:successes2;var result=0;for(var i=successes;i<=successes2;i++){result+=Formula.COMBIN(trials,i)*Math.pow(probability,i)*Math.pow(1-probability,trials-i);}
return result;};Formula.BINOMINV=function(trials,probability,alpha){var x=0;while(x<=trials){if(jStat.binomial.cdf(x,trials,probability)>=alpha){return x;}
x++;}};Formula.CHISQDIST=function(x,k,cumulative){return(cumulative)?jStat.chisquare.cdf(x,k):jStat.chisquare.pdf(x,k);};Formula.CHISQDISTRT=function(){return;};Formula.CHISQINV=function(probability,k){return jStat.chisquare.inv(probability,k);};Formula.CHISQINVRT=function(){return;};Formula.CHISQTEST=function(){return;};Formula.CONFIDENCENORM=function(alpha,sd,n){return jStat.normalci(1,alpha,sd,n)[1]-1;};Formula.CONFIDENCET=function(alpha,sd,n){return jStat.tci(1,alpha,sd,n)[1]-1;};Formula.CORREL=function(){return jStat.corrcoeff.apply(this,arguments);};Formula.COUNT=function(){var numbers=Formula.NUMBERS(Formula.FLATTEN(arguments));return numbers.length;};Formula.COUNTA=function(){var range=Formula.FLATTEN(arguments)
return range.length-Formula.COUNTBLANK(range);};Formula.COUNTBLANK=function(){var range=Formula.FLATTEN(arguments);var blanks=0;var element;for(var i=0;i<range.length;i++){element=range[i];if(element===null||element===''||!element){blanks++;}}
return blanks;};Formula.COUNTIF=function(range,criteria){var matches=0;range=Formula.FLATTEN(range);criteria=criteria.toString();for(var i=0;i<range.length;i++){var newCriteria=criteria;if(range[i]!==null&&range[i]!==undefined){if(!isNaN(range[i])&&range[i]!=''){if(!/[<>!]/.test(newCriteria)){newCriteria=newCriteria.replace('=','');newCriteria='=="'+newCriteria+'"';}
if(eval(range[i]+newCriteria)){matches++;}}else{range[i]=range[i].toString();newCriteria=newCriteria.replace(/\*/g,function(match,contents,offset,s){if(offset[contents-1]!='~'){return'.*';}
return'*';});newCriteria=newCriteria.replace(/\?/g,function(match,contents,offset,s){if(offset[contents-1]!='~'){return'.{1}';}
return'?';});newCriteria=newCriteria.replace(/~\*/g,'\\*');newCriteria=newCriteria.replace(/~\?/g,'\\?');if(range[i].match(new RegExp('^'+newCriteria+'$'),'i')){matches++;}}}}
return matches;};Formula.COUNTIFS=function(){var criteria=(arguments.length-1)/2;var range=arguments[0];var result=0;for(var i=0;i<range.length;i++){var fit=true;for(var j=0;j<criteria;j++){if(!eval(arguments[2*j+1][i]+arguments[2*j+2])){fit=false;}}
result+=(fit)?1:0;}
return result;};Formula.COUNTUNIQUE=function(){return _.uniq(Formula.FLATTEN(arguments)).length;};Formula.COVARIANCEP=function(array1,array2){array1=Formula.FLATTEN(array1);array2=Formula.FLATTEN(array2);var mean1=jStat.mean(array1);var mean2=jStat.mean(array2);var result=0;var n=array1.length;for(var i=0;i<n;i++){result+=(array1[i]-mean1)*(array2[i]-mean2);}
return result/n;};Formula.COVARIANCES=function(){return jStat.covariance.apply(this,simplifyArguments(arguments));};Formula.DEVSQ=function(){var range=Formula.ARGSCONCAT(arguments);var mean=jStat.mean(range);var result=0;for(var i=0;i<range.length;i++){result+=Math.pow((range[i]-mean),2);}
return result;};Formula.EXPONDIST=function(x,lambda,cumulative){return(cumulative)?jStat.exponential.cdf(x,lambda):jStat.exponential.pdf(x,lambda);};Formula.FDIST=function(x,d1,d2,cumulative){return(cumulative)?jStat.centralF.cdf(x,d1,d2):jStat.centralF.pdf(x,d1,d2);};Formula.FDISTRT=function(){return;};Formula.FINV=function(probability,d1,d2){if(probability<=0.0||probability>1.0){return'#NUM!';}
return jStat.centralF.inv(1.0-probability,d1,d2);};Formula.FINVRT=function(){return;};Formula.FTEST=function(){return;};Formula.FISHER=function(x){return Math.log((1+x)/(1-x))/2;};Formula.FISHERINV=function(y){var e2y=Math.exp(2*y);return(e2y-1)/(e2y+1);};Formula.FORECAST=function(x,data_y,data_x){data_x=Formula.FLATTEN(data_x);data_y=Formula.FLATTEN(data_y);var xmean=jStat.mean(data_x);var ymean=jStat.mean(data_y);var n=data_x.length;var num=0;var den=0;for(var i=0;i<n;i++){num+=(data_x[i]-xmean)*(data_y[i]-ymean);den+=Math.pow(data_x[i]-xmean,2);}
var b=num/den;var a=ymean-b*xmean;return a+b*x;};Formula.FREQUENCY=function(data,bins){var n=data.length;var b=bins.length;var r=[];for(var i=0;i<=b;i++){r[i]=0;for(var j=0;j<n;j++){if(i===0){if(data[j]<=bins[0]){r[0]+=1;}}else if(i<b){if(data[j]>bins[i-1]&&data[j]<=bins[i]){r[i]+=1;}}else if(i===b){if(data[j]>bins[b-1]){r[b]+=1;}}}}
return r;};Formula.GAMMA=function(){return jStat.gammafn.apply(this,arguments);};Formula.GAMMADIST=function(){return;};Formula.GAMMAINV=function(){return;};Formula.GAMMALN=function(){return jStat.gammaln.apply(this,arguments);};Formula.GAMMALNPRECISE=function(){return;};Formula.GAUSS=function(z){return jStat.normal.cdf(z,0,1)-0.5;};Formula.GEOMEAN=function(){return jStat.geomean(Formula.ARGSCONCAT(arguments));};Formula.GROWTH=function(known_y,known_x,new_x,use_const){var i;if(typeof(known_x)==='undefined'){known_x=[];for(i=1;i<=known_y.length;i++){known_x.push(i);}}
if(typeof(new_x)==='undefined'){new_x=[];for(i=1;i<=known_y.length;i++){new_x.push(i);}}
if(typeof(use_const)==='undefined'){use_const=true;}
var n=known_y.length;var avg_x=0;var avg_y=0;var avg_xy=0;var avg_xx=0;for(i=0;i<n;i++){var x=known_x[i];var y=Math.log(known_y[i]);avg_x+=x;avg_y+=y;avg_xy+=x*y;avg_xx+=x*x;}
avg_x/=n;avg_y/=n;avg_xy/=n;avg_xx/=n;var beta;var alpha;if(use_const){beta=(avg_xy-avg_x*avg_y)/(avg_xx-avg_x*avg_x);alpha=avg_y-beta*avg_x;}else{beta=avg_xy/avg_xx;alpha=0;}
var new_y=[];for(i=0;i<new_x.length;i++){new_y.push(Math.exp(alpha+beta*new_x[i]));}
return new_y;};Formula.HARMEAN=function(){var range=Formula.ARGSCONCAT(arguments);var n=range.length;var den=0;for(var i=0;i<n;i++){den+=1/range[i];}
return n/den;};Formula.HYPGEOMDIST=function(x,n,M,N,cumulative){function pdf(x,n,M,N){return Formula.COMBIN(M,x)*Formula.COMBIN(N-M,n-x)/Formula.COMBIN(N,n);}
function cdf(x,n,M,N){var result=0;for(var i=0;i<=x;i++){result+=pdf(i,n,M,N);}
return result;}
return(cumulative)?cdf(x,n,M,N):pdf(x,n,M,N);};Formula.INTERCEPT=function(data_y,data_x){return Formula.FORECAST(0,data_y,data_x);};Formula.KURT=function(){var range=Formula.ARGSCONCAT(arguments);var mean=jStat.mean(range);var n=range.length;var sigma=0;for(var i=0;i<n;i++){sigma+=Math.pow(range[i]-mean,4);}
sigma=sigma/Math.pow(jStat.stdev(range,true),4);return((n*(n+1))/((n-1)*(n-2)*(n-3)))*sigma-3*(n-1)*(n-1)/((n-2)*(n-3));};Formula.LARGE=function(array,k){return array.sort(function(a,b){return b-a;})[k-1];};Formula.LINEST=function(data_y,data_x){var xmean=jStat.mean(data_x);var ymean=jStat.mean(data_y);var n=data_x.length;var num=0;var den=0;for(var i=0;i<n;i++){num+=(data_x[i]-xmean)*(data_y[i]-ymean);den+=Math.pow(data_x[i]-xmean,2);}
var m=num/den;var b=ymean-m*xmean;return[m,b];};Formula.LOGEST=function(){return;};Formula.LOGNORMDIST=function(x,mean,sd,cumulative){return(cumulative)?jStat.lognormal.cdf(x,mean,sd):jStat.lognormal.pdf(x,mean,sd);};Formula.LOGNORMINV=function(probability,mean,sd){return jStat.lognormal.inv(probability,mean,sd);};Formula.MAX=function(){var range=Formula.FLATTEN(arguments);range=range.filter(function(x){return!isNaN(parseFloat(x));});var n=range.length;var max=(n>0)?range[0]:0;for(var i=0;i<n;i++){max=(range[i]>max&&(range[i]!==true)&&(range[i]!==false))?range[i]:max;}
return max;};Formula.MAXA=function(){var range=Formula.FLATTEN(arguments);return(range.length>0)?Math.max.apply(Math,range):0;};Formula.MEDIAN=function(){return jStat.median(Formula.FLATTEN(arguments));};Formula.MIN=function(){var range=Formula.FLATTEN(arguments);range=range.filter(function(x){return!isNaN(parseFloat(x));});var n=range.length;var min=(n>0)?range[0]:0;for(var i=0;i<n;i++){min=(range[i]<min&&(range[i]!==true)&&(range[i]!==false))?range[i]:min;}
return min;};Formula.MINA=function(){var range=Formula.FLATTEN(arguments);return(range.length>0)?Math.min.apply(Math,range):0;};Formula.MODEMULT=function(){var range=Formula.ARGSCONCAT(arguments),n=range.length,count={},maxItems=[],max=0,currentItem;for(var i=0;i<n;i++){currentItem=range[i];count[currentItem]=count[currentItem]?count[currentItem]+1:1;if(count[currentItem]>max){max=count[currentItem];maxItems=[];}
if(count[currentItem]===max){maxItems[maxItems.length]=currentItem;}}
return maxItems;};Formula.MODESNGL=function(){return Formula.MODEMULT(Formula.ARGSCONCAT(arguments)).sort(function(a,b){return a-b;})[0];};Formula.NEGBINOMDIST=function(k,r,p,cumulative){return(cumulative)?jStat.negbin.cdf(k,r,p):jStat.negbin.pdf(k,r,p);};Formula.NORMDIST=function(x,mean,sd,cumulative){if(isNaN(x)||isNaN(mean)||isNaN(sd)){return'#VALUE!';}
if(sd<=0){return'#NUM!';}
return(cumulative)?jStat.normal.cdf(x,mean,sd):jStat.normal.pdf(x,mean,sd);};Formula.NORMINV=function(probability,mean,sd){return jStat.normal.inv(probability,mean,sd);};Formula.NORMSDIST=function(z,cumulative){return(cumulative)?jStat.normal.cdf(z,0,1):jStat.normal.pdf(z,0,1);};Formula.NORMSINV=function(probability){return jStat.normal.inv(probability,0,1);};Formula.PEARSON=function(data_x,data_y){var xmean=jStat.mean(data_x);var ymean=jStat.mean(data_y);var n=data_x.length;var num=0;var den1=0;var den2=0;for(var i=0;i<n;i++){num+=(data_x[i]-xmean)*(data_y[i]-ymean);den1+=Math.pow(data_x[i]-xmean,2);den2+=Math.pow(data_y[i]-ymean,2);}
return num/Math.sqrt(den1*den2);};Formula.PERCENTILEEXC=function(array,k){array=array.sort(function(a,b){{return a-b;}});var n=array.length;if(k<1/(n+1)||k>1-1/(n+1)){return'#NUM!';}
var l=k*(n+1)-1;var fl=Math.floor(l);return Formula.CLEANFLOAT((l===fl)?array[l]:array[fl]+(l-fl)*(array[fl+1]-array[fl]));};Formula.PERCENTILEINC=function(array,k){array=array.sort(function(a,b){return a-b;});var n=array.length;var l=k*(n-1);var fl=Math.floor(l);return Formula.CLEANFLOAT((l===fl)?array[l]:array[fl]+(l-fl)*(array[fl+1]-array[fl]));};Formula.PERCENTRANKEXC=function(array,x,significance){array=array.sort(function(a,b){return a-b;});var uniques=_.uniq(array);var n=array.length;var m=uniques.length;significance=(typeof significance==='undefined')?3:significance;var power=Math.pow(10,significance);var result=0;var match=false;var i=0;while(!match&&i<m){if(x===uniques[i]){result=(array.indexOf(uniques[i])+1)/(n+1);match=true;}else if(x>=uniques[i]&&(x<uniques[i+1]||i===m-1)){result=(array.indexOf(uniques[i])+1+(x-uniques[i])/(uniques[i+1]-uniques[i]))/(n+1);match=true;}
i++;}
return Math.floor(result*power)/power;};Formula.PERCENTRANKINC=function(array,x,significance){array=array.sort(function(a,b){return a-b;});var uniques=_.uniq(array);var n=array.length;var m=uniques.length;significance=(typeof significance==='undefined')?3:significance;var power=Math.pow(10,significance);var result=0;var match=false;var i=0;while(!match&&i<m){if(x===uniques[i]){result=array.indexOf(uniques[i])/(n-1);match=true;}else if(x>=uniques[i]&&(x<uniques[i+1]||i===m-1)){result=(array.indexOf(uniques[i])+(x-uniques[i])/(uniques[i+1]-uniques[i]))/(n-1);match=true;}
i++;}
return Math.floor(result*power)/power;};Formula.PERMUT=function(number,number_chosen){return Formula.FACT(number)/Formula.FACT(number-number_chosen);};Formula.PERMUTATIONA=function(number,number_chosen){return Math.pow(number,number_chosen);};Formula.PHI=function(x){return Math.exp(-0.5*x*x)/SQRT2PI;};Formula.POISSONDIST=function(x,mean,cumulative){return(cumulative)?jStat.poisson.cdf(x,mean):jStat.poisson.pdf(x,mean);};Formula.PROB=function(range,probability,lower,upper){if(typeof lower==='undefined'){return 0;}
upper=(typeof upper==='undefined')?lower:upper;if(lower===upper){return(range.indexOf(lower)>=0)?probability[range.indexOf(lower)]:0;}
var sorted=range.sort(function(a,b){return a-b;});var n=sorted.length;var result=0;for(var i=0;i<n;i++){if(sorted[i]>=lower&&sorted[i]<=upper){result+=probability[range.indexOf(sorted[i])];}}
return result;};Formula.QUARTILEEXC=function(range,quart){switch(quart){case 1:return Formula.PERCENTILEEXC(range,0.25);case 2:return Formula.PERCENTILEEXC(range,0.5);case 3:return Formula.PERCENTILEEXC(range,0.75);default:return'#NUM!';}};Formula.QUARTILEINC=function(range,quart){switch(quart){case 1:return Formula.PERCENTILEINC(range,0.25);case 2:return Formula.PERCENTILEINC(range,0.5);case 3:return Formula.PERCENTILEINC(range,0.75);default:return'#NUM!';}};Formula.RANK=function(number,range,order){return Formula.RANKEQ(number,range,order);};Formula.RANKAVG=function(number,range,order){range=Formula.FLATTEN(range);order=(typeof order==='undefined')?false:order;var sort=(order)?function(a,b){return a-b;}:function(a,b){return b-a;};range=range.sort(sort);var count=Formula.COUNTIN(range,number);return(count>1)?(2*range.indexOf(number)+count+1)/2:range.indexOf(number)+1;};Formula.RANKEQ=function(number,range,order){range=Formula.FLATTEN(range);order=(typeof order==='undefined')?false:order;var sort=(order)?function(a,b){return a-b;}:function(a,b){return b-a;};range=range.sort(sort);return range.indexOf(number)+1;};Formula.RSQ=function(data_x,data_y){return Math.pow(Formula.PEARSON(data_x,data_y),2);};Formula.SKEW=function(){var range=Formula.ARGSCONCAT(arguments);var mean=jStat.mean(range);var n=range.length;var sigma=0;for(var i=0;i<n;i++){sigma+=Math.pow(range[i]-mean,3);}
return n*sigma/((n-1)*(n-2)*Math.pow(jStat.stdev(range,true),3));};Formula.SKEWP=function(){var range=Formula.ARGSCONCAT(arguments);var mean=jStat.mean(range);var n=range.length;var m2=0;var m3=0;for(var i=0;i<n;i++){m3+=Math.pow(range[i]-mean,3);m2+=Math.pow(range[i]-mean,2);}
m3=m3/n;m2=m2/n;return m3/Math.pow(m2,3/2);};Formula.SLOPE=function(data_y,data_x){var xmean=jStat.mean(data_x);var ymean=jStat.mean(data_y);var n=data_x.length;var num=0;var den=0;for(var i=0;i<n;i++){num+=(data_x[i]-xmean)*(data_y[i]-ymean);den+=Math.pow(data_x[i]-xmean,2);}
return num/den;};Formula.SMALL=function(array,k){return array.sort(function(a,b){return a-b;})[k-1];};Formula.STANDARDIZE=function(x,mean,sd){return(x-mean)/sd;};Formula.STDEVA=function(){var range=Formula.FLATTEN(arguments);var n=range.length;var sigma=0;var mean=jStat.mean(range);for(var i=0;i<n;i++){sigma+=Math.pow(range[i]-mean,2);}
return Math.sqrt(sigma/(n-1));};Formula.STDEVP=function(){var range=Formula.FLATTEN(arguments);var n=range.length;var sigma=0;var count=0;var mean=Formula.AVERAGE(range);for(var i=0;i<n;i++){if(range[i]!==true&&range[i]!==false){sigma+=Math.pow(range[i]-mean,2);count++;}}
return Math.sqrt(sigma/count);};Formula.STDEVPA=function(){var range=Formula.ARGSCONCAT(arguments);var n=range.length;var sigma=0;var mean=jStat.mean(range);for(var i=0;i<n;i++){sigma+=Math.pow(range[i]-mean,2);}
return Math.sqrt(sigma/n);};Formula.STDEVS=function(){var range=Formula.FLATTEN(arguments);var n=range.length;var sigma=0;var count=0;var mean=Formula.AVERAGE(range);for(var i=0;i<n;i++){if(range[i]!==true&&range[i]!==false){sigma+=Math.pow(range[i]-mean,2);count++;}}
return Math.sqrt(sigma/(count-1));};Formula.STEYX=function(data_y,data_x){var xmean=jStat.mean(data_x);var ymean=jStat.mean(data_y);var n=data_x.length;var lft=0;var num=0;var den=0;for(var i=0;i<n;i++){lft+=Math.pow(data_y[i]-ymean,2);num+=(data_x[i]-xmean)*(data_y[i]-ymean);den+=Math.pow(data_x[i]-xmean,2);}
return Math.sqrt((lft-num*num/den)/(n-2));};Formula.TDIST=function(x,df,cumulative){return(cumulative)?jStat.studentt.cdf(x,df):jStat.studentt.pdf(x,df);};Formula.TDIST2T=function(){return;};Formula.TDISTRT=function(){return;};Formula.TINV=function(probability,df){return jStat.studentt.inv(probability,df);};Formula.TINV2T=function(){return;};Formula.TTEST=function(){return;};Formula.TREND=function(){return;};Formula.TRIMMEAN=function(range,percent){range=Formula.FLATTEN(range);var trim=Formula.FLOOR(range.length*percent,2)/2;return jStat.mean(_.initial(_.rest(range.sort(function(a,b){return a-b;}),trim),trim));};Formula.VARA=function(){var range=Formula.FLATTEN(arguments);var n=range.length;var sigma=0;var count=0;var mean=Formula.AVERAGEA(range);for(var i=0;i<n;i++){var el=range[i];if(typeof el==='number'){sigma+=Math.pow(el-mean,2);}else if(el===true){sigma+=Math.pow(1-mean,2);}else{sigma+=Math.pow(0-mean,2);}
if(el!==null){count++;}}
return sigma/(count-1);};Formula.VARP=function(){var range=Formula.NUMBERS(Formula.FLATTEN(arguments));var n=range.length;var sigma=0;var count=0;var mean=Formula.AVERAGE(range);for(var i=0;i<n;i++){sigma+=Math.pow(range[i]-mean,2);count++;}
return sigma/count;};Formula.VARPA=function(){var range=Formula.FLATTEN(arguments);var n=range.length;var sigma=0;var count=0;var mean=Formula.AVERAGEA(range);for(var i=0;i<n;i++){var el=range[i];if(typeof el==='number'){sigma+=Math.pow(el-mean,2);}else if(el===true){sigma+=Math.pow(1-mean,2);}else{sigma+=Math.pow(0-mean,2);}
if(el!==null){count++;}}
return sigma/count;};Formula.VARS=function(){var range=Formula.FLATTEN(arguments);var n=range.length;var sigma=0;var count=0;var mean=Formula.AVERAGE(range);for(var i=0;i<n;i++){if(range[i]!==true&&range[i]!==false){sigma+=Math.pow(range[i]-mean,2);count++;}}
return sigma/(count-1);};Formula.WEIBULLDIST=function(x,alpha,beta,cumulative){return(cumulative)?1-Math.exp(-Math.pow(x/beta,alpha)):Math.pow(x,alpha-1)*Math.exp(-Math.pow(x/beta,alpha))*alpha/Math.pow(beta,alpha);};Formula.ZTEST=function(range,x,sigma){var n=range.length;var sd=(typeof sigma==='undefined')?Formula.STDEVS(range):sigma;return 1-Formula.NORMSDIST((Formula.AVERAGE(range)-x)/(sd/Math.sqrt(n)),Formula.TRUE);};Formula.CHAR=function(number){return String.fromCharCode(number);};Formula.CLEAN=function(text){return text.replace(/[\0-\x1F]/g,"");};Formula.CODE=function(text){return text.charCodeAt(0);};Formula.CONCATENATE=function(){var string='';for(var i=0;i<arguments.length;i++){if(arguments[i]!==null&&arguments[i]!==undefined){string+=arguments[i];}}
return string;};Formula.DOLLAR=function(number,decimals){decimals=(typeof decimals==='undefined')?2:decimals;var format='';if(decimals<=0){number=Math.round(number*Math.pow(10,decimals))/Math.pow(10,decimals);format='$0,0';}else if(decimals>0){format='$0,0.'+new Array(decimals+1).join('0');}
return numeral(number).format(format);};Formula.EXACT=function(text1,text2){return text1===text2;};Formula.FIND=function(find_text,within_text,position){position=(typeof position==='undefined')?0:position;return within_text?within_text.indexOf(find_text,position-1)+1:null;};Formula.FIXED=function(number,decimals,no_commas){decimals=(typeof decimals==='undefined')?2:decimals;no_commas=(typeof no_commas==='undefined')?false:no_commas;var format=no_commas?'0':'0,0';if(decimals<=0){number=Math.round(number*Math.pow(10,decimals))/Math.pow(10,decimals);}else if(decimals>0){format+='.'+new Array(decimals+1).join('0');}
return numeral(number).format(format);};Formula.HTML2TEXT=function(value){var result='';if(value){if(value instanceof Array){value.forEach(function(line){if(result!==''){result+='\n';}
result+=(line.replace(/<(?:.|\n)*?>/gm,''));});}else{result=value.replace(/<(?:.|\n)*?>/gm,'');}}
return result;};Formula.HUMANIZE=function(value){if(value instanceof Date){var dvalue=moment(value);if(dvalue.hours()||dvalue.minutes()||dvalue.seconds()){return dvalue.format("dddd, MMMM Do YYYY, h:mm:ss");}else{return dvalue.format("dddd, MMMM Do YYYY");}}
return value;};Formula.JOIN=function(array,separator){return array.join(separator);};Formula.LEFT=function(text,number){number=(typeof number==='undefined')?1:number;return text?text.substring(0,number):null;};Formula.LEN=function(text){return text?text.length:0;};Formula.LOWER=function(text){return text?text.toLowerCase():text;};Formula.MID=function(text,start,number){text=text.toString();return text.substr(start-1,number);};Formula.NUMBERVALUE=function(text,decimal_separator,group_separator){decimal_separator=(typeof decimal_separator==='undefined')?'.':decimal_separator;group_separator=(typeof group_separator==='undefined')?',':group_separator;return Number(text.replace(decimal_separator,'.').replace(group_separator,''));};Formula.NUMBERS=function(){var possibleNumbers=Formula.FLATTEN(arguments);return possibleNumbers.filter(function(el){return typeof el==='number';});};Formula.PROPER=function(text){if(!text){return;}
return text.replace(/\w\S*/g,function(txt){return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();});};Formula.REGEXEXTRACT=function(text,regular_expression){var match=text.match(new RegExp(regular_expression));return match?(match[match.length>1?match.length-1:0]):null;};Formula.REGEXMATCH=function(text,regular_expression,full){var match=text.match(new RegExp(regular_expression));return full?match:!!match;};Formula.REGEXREPLACE=function(text,regular_expression,replacement){return text.replace(new RegExp(regular_expression),replacement);};Formula.REPLACE=function(text,position,length,new_text){return text.substr(0,position-1)+new_text+text.substr(position-1+length);};Formula.REPT=function(text,number){return new Array(number+1).join(text);};Formula.RIGHT=function(text,number){number=(typeof number==='undefined')?1:number;return text?text.substring(text.length-number):null;};Formula.ROMAN=function(number){var digits=String(number).split('');var key=['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM','','X','XX','XXX','XL','L','LX','LXX','LXXX','XC','','I','II','III','IV','V','VI','VII','VIII','IX'];var roman='';var i=3;while(i--){roman=(key[+digits.pop()+(i*10)]||'')+roman;}
return new Array(+digits.join('')+1).join('M')+roman;};Formula.SEARCH=function(find_text,within_text,position){position=(typeof position==='undefined')?0:position;return within_text.toLowerCase().indexOf(find_text.toLowerCase(),position-1)+1;};Formula.SPLIT=function(text,separator){return _s.words(text,separator);};Formula.SUBSTITUTE=function(text,old_text,new_text,occurrence){if(typeof text==='undefined'||typeof old_text==='undefined'||typeof new_text==='undefined'){return text;}else{old_text=String(old_text);new_text=String(new_text);if(typeof occurrence!=='undefined'){var index=0;var i=0;while(i<text.length&&text.indexOf(old_text,index)>0){index=text.indexOf(old_text,index+1);i++;if(i===occurrence&&index>0){return text.substring(0,index)+new_text+text.substring(index+old_text.length);}}}
return text.replace(new RegExp(old_text,'g'),new_text);}};Formula.T=function(value){return(typeof value==="string")?value:null;};Formula.TEXT=function(value,format){if(!value){return'';}
if(!format){return value;}
if(value instanceof Object){try{return JSON.stringify(value);}catch(err){return'';}}
if(typeof value==='string'){return(format.indexOf('0')>=0)?numeral(value).format(format):moment(new Date(value)).format(format);}
if(typeof value==='number'){return(format.indexOf('0')>=0)?numeral(value).format(format):moment(new Date(value*86400*1000)).utc().format(format);}
if(value.toString&&typeof value.toString==='function'){return value.toString();}
return'';};Formula.TRIM=function(text){return _s.clean(text);};Formula.UNICHAR=Formula.CHAR;Formula.UNICODE=Formula.CODE;Formula.UPPER=function(text){return text.toUpperCase();};Formula.VALUE=function(text){return numeral().unformat(text);};Formula.MD5=function(data,key,raw){return md5(data,key,raw);};Formula.NUMERAL=function(number,format){return numeral(number).format(format);};Formula.ISERR=function(value){return(['#DIV/0!','#NAME?','#NUM!','#NULL!','#REF!','#VALUE!'].indexOf(value)>=0)?true:false;};Formula.ISERROR=function(value){return Formula.ISERR(value)||value==='#N/A';};Formula.IFERROR=function(value,valueIfError){if(Formula.ISERROR(value)){return valueIfError;}
return value;};Formula.HYPERLINK=function(url,linkLabel){linkLabel=linkLabel?linkLabel:url;window.supsystic.Tables._hyperlinkUrl=url;var res=linkLabel,protocols=['http','https','mailto','aim:','ftp','gopher','telnet'],linkArr=url.split(':'),protocolChecked=false;if(linkArr&&linkArr.length>0){if(linkArr.length===1){url='http://'+url;protocolChecked=true;}
if(protocols.indexOf(linkArr[0])!==-1||protocolChecked){res='<a href="'+url+'" target="_blank">'+linkLabel+'</a>';}}
return res;};Formula.INDEX=function(arrayValues,rowNum,colNum){if((rowNum<0)||(colNum<0)){return'#VALUE!';}
if(!arrayValues){return'#REF!';}
rowNum=typeof rowNum!='undefined'&&rowNum>0?rowNum:1;colNum=typeof colNum!='undefined'&&colNum>0?colNum:1;arrayValues=Formula.FLATTEN(arrayValues);var chunkArr=Formula._CHUNK(arrayValues);if(chunkArr&&!Formula.ISERROR(chunkArr)){var chunkArrColsCount=chunkArr.length,chunkArrRowsCount=typeof chunkArr[0]!='undefined'?chunkArr[0].length:0;if(rowNum>chunkArrRowsCount){if(chunkArrRowsCount==1){colNum=rowNum;rowNum=chunkArrRowsCount;}else{return'#NUM!';}}
if(colNum>chunkArrColsCount){return'#NUM!';}
return chunkArr[colNum-1][rowNum-1];}
return chunkArr;};Formula.MATCH=function(lookupValue,lookupArray,matchType){matchType=typeof matchType!='undefined'&&matchType!=null?Formula.FLATTENSINGLE(matchType):1;lookupArray=Formula.FLATTEN(lookupArray);lookupValue=Formula.FLATTENSINGLE(lookupValue);var res='#N/A';lookupValue=lookupValue.toString().toLowerCase();if(typeof lookupValue!='number'&&typeof lookupValue!='string'&&typeof lookupValue!='boolean'){return res;}
if(matchType!==0&&matchType!==-1&&matchType!==1){return res;}
if(!lookupArray.length){return res;}
for(var i in lookupArray){if(typeof lookupArray[i]!='number'&&typeof lookupArray[i]!='string'&&typeof lookupArray[i]!='boolean'&&lookupArray[i]!=null){return res;}
if(typeof lookupArray[i]=='string'){lookupArray[i]=lookupArray[i].toLowerCase();}
if(lookupArray[i]==null&&(matchType==1||matchType==-1)){lookupArray=lookupArray.slice(0,i-1);}}
if(matchType==1){lookupArray=lookupArray.sort();}else if(matchType==-1){lookupArray=lookupArray.sort();lookupArray=lookupArray.reverse();}
for(var j in lookupArray){if(matchType==0&&lookupArray[j]==lookupValue){res=++j;}else if(matchType==-1&&lookupArray[j]>=lookupValue){res=++j;}else if(matchType==1&&lookupArray[j]<=lookupValue){res=++j;}}
return res;};Formula._CHUNK=function(array){var formula=window.supsystic.Tables._currentFormula;if(formula){var regexp=new RegExp(/([a-z]+([0-9]+)):?([a-z]+([0-9]+))?/,'gi'),rangeData=regexp.exec(formula),start=rangeData&&typeof rangeData[2]!='undefined'?rangeData[2]:0,end=rangeData&&typeof rangeData[4]!='undefined'?rangeData[4]:start,chunkStep=end-start+1;if(chunkStep<1){return'#REF!';}
return Formula._GETCHUNKARRAY(array,chunkStep);}
return array;};Formula._GETCHUNKARRAY=function(arr,len){var chunks=[],i=0,n=arr.length;while(i<n){chunks.push(arr.slice(i,i+=len));}
return chunks;};return Formula;}}).call(this);if(typeof _u=='function'){_=_u.noConflict();};