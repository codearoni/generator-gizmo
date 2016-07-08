/* jshint ignore:start */
/**
 * Date.now - from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
 */
Date.now||(Date.now=function(){return(new Date).getTime()});
/**
 * Date.toISOString - from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
 */
Date.prototype.toISOString||!function(){function pad(number){return number<10?"0"+number:number}Date.prototype.toISOString=function(){return this.getUTCFullYear()+"-"+pad(this.getUTCMonth()+1)+"-"+pad(this.getUTCDate())+"T"+pad(this.getUTCHours())+":"+pad(this.getUTCMinutes())+":"+pad(this.getUTCSeconds())+"."+(this.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"}}();
/**
* JSON - from: https://github.com/douglascrockford/JSON-js
*/
if(typeof JSON!=='object'){JSON={};}(function(){'use strict';function f(n){return n<10?'0'+n:n;}function this_value(){return this.valueOf();}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null;};Boolean.prototype.toJSON=this_value;Number.prototype.toJSON=this_value;String.prototype.toJSON=this_value;}var cx,escapable,gap,indent,meta,rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}if(typeof rep==='function'){value=rep.call(holder,key,value);}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}if(typeof JSON.stringify!=='function'){escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value});};}if(typeof JSON.parse!=='function'){cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}return reviver.call(holder,key,value);}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}throw new SyntaxError('JSON.parse');};}}());
/**
 * Object.create - from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 */
"function"!=typeof Object.create&&(Object.create=function(undefined){var Temp=function(){};return function(prototype,propertiesObject){if(prototype!==Object(prototype)&&null!==prototype)throw TypeError("Argument must be an object, or null");Temp.prototype=prototype||{},propertiesObject!==undefined&&Object.defineProperties(Temp.prototype,propertiesObject);var result=new Temp;return Temp.prototype=null,null===prototype&&(result.__proto__=null),result}}());
/**
* Array.forEach - from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
Array.prototype.forEach||(Array.prototype.forEach=function(r,t){var o,n;if(null==this)throw new TypeError(" this is null or not defined");var e=Object(this),i=e.length>>>0;if("function"!=typeof r)throw new TypeError(r+" is not a function");for(arguments.length>1&&(o=t),n=0;i>n;){var a;n in e&&(a=e[n],r.call(o,a,n,e)),n++}});
/**
 * Array.isArray - from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 */
Array.isArray||(Array.isArray=function(arg){return"[object Array]"===Object.prototype.toString.call(arg)});
/**
 * Array.every - from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 */
Array.prototype.every||(Array.prototype.every=function(callbackfn,thisArg){"use strict";var T,k;if(null==this)throw new TypeError("this is null or not defined");var O=Object(this),len=O.length>>>0;if("function"!=typeof callbackfn)throw new TypeError;for(arguments.length>1&&(T=thisArg),k=0;k<len;){var kValue;if(k in O){kValue=O[k];var testResult=callbackfn.call(T,kValue,k,O);if(!testResult)return!1}k++}return!0});
/**
 * Array.filter - from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */
Array.prototype.filter||(Array.prototype.filter=function(fun){"use strict";if(void 0===this||null===this)throw new TypeError;var t=Object(this),len=t.length>>>0;if("function"!=typeof fun)throw new TypeError;for(var res=[],thisArg=arguments.length>=2?arguments[1]:void 0,i=0;i<len;i++)if(i in t){var val=t[i];fun.call(thisArg,val,i,t)&&res.push(val)}return res});
/**
 * Array.indexOf - from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
Array.prototype.indexOf||(Array.prototype.indexOf=function(searchElement,fromIndex){var k;if(null==this)throw new TypeError('"this" is null or not defined');var o=Object(this),len=o.length>>>0;if(0===len)return-1;var n=+fromIndex||0;if(Math.abs(n)===1/0&&(n=0),n>=len)return-1;for(k=Math.max(n>=0?n:len-Math.abs(n),0);k<len;){if(k in o&&o[k]===searchElement)return k;k++}return-1});
/**
 * Array.lastIndexOf - from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
 */
Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(searchElement){"use strict";if(void 0===this||null===this)throw new TypeError;var n,k,t=Object(this),len=t.length>>>0;if(0===len)return-1;for(n=len-1,arguments.length>1&&(n=Number(arguments[1]),n!=n?n=0:0!=n&&n!=1/0&&n!=-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n)))),k=n>=0?Math.min(n,len-1):len-Math.abs(n);k>=0;k--)if(k in t&&t[k]===searchElement)return k;return-1});
/**
 * Array.map - from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
Array.prototype.map||(Array.prototype.map=function(callback,thisArg){var T,A,k;if(null==this)throw new TypeError(" this is null or not defined");var O=Object(this),len=O.length>>>0;if("function"!=typeof callback)throw new TypeError(callback+" is not a function");for(arguments.length>1&&(T=thisArg),A=new Array(len),k=0;k<len;){var kValue,mappedValue;k in O&&(kValue=O[k],mappedValue=callback.call(T,kValue,k,O),A[k]=mappedValue),k++}return A});
/**
 * Array.reduce - from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */
Array.prototype.reduce||(Array.prototype.reduce=function(callback){"use strict";if(null==this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof callback)throw new TypeError(callback+" is not a function");var value,t=Object(this),len=t.length>>>0,k=0;if(2==arguments.length)value=arguments[1];else{for(;k<len&&!(k in t);)k++;if(k>=len)throw new TypeError("Reduce of empty array with no initial value");value=t[k++]}for(;k<len;k++)k in t&&(value=callback(value,t[k],k,t));return value});
/**
 * Array.some - from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 */
Array.prototype.some||(Array.prototype.some=function(fun){"use strict";if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof fun)throw new TypeError;for(var t=Object(this),len=t.length>>>0,thisArg=arguments.length>=2?arguments[1]:void 0,i=0;i<len;i++)if(i in t&&fun.call(thisArg,t[i],i,t))return!0;return!1});
/* jshint ignore:end */
if (typeof($) === 'undefined') {
  $ = {};
}

$.init = {
    // Evaluate a file and catch the exception.
    evalFile : function (path) {
        try {
            $.evalFile(path);
        } catch (e) {alert('Exception:' + e);}
    },
    // Evaluate all the files in the given folder
    evalFiles: function (jsxFolderPath) {
        var folder = new Folder(jsxFolderPath);
        if (folder.exists) {
            var jsxFiles = folder.getFiles('*.jsx');
            for (var i = 0, len = jsxFiles.length; i < len; i++) {
                var jsxFile = jsxFiles[i];
                $.init.evalFile(jsxFile);
            }
        }
    }
};

var obj = {
  name: "<%= appName %>",
  message: "Hello from Gizmo!"
};

$.getExampleObject = JSON.stringify(obj);