/**
 * [WARNING]
 *   !!! 请勿将本文件保存到您的服务器上自行托管
 *   !!! 否则将造成您的站点统计数据不准确
 *   !!! DO NOT host this file on your own server
 *   !!! Please follow instructions by 
 *       https://fenxi.360.cn/setting/gencode
 */
window._qha_data=window._qha_data||{domain:302384,host:'s.union.360.cn',gu:'132730903.1903581441592802800.1552187633205.5586',hu: '11PVt95qJ8O0nLnmBlF1PwWU3VAp0DFQcNPtqRe7a1rNA%3D',e360:'3102891467',pageClk:null,urlClk:0,idClk:null,mvid:'634465'};
!function(m){"use strict";var g="_qha",y=0,o=3,c=20,e=21,i=11,s=6,a=30,u="constructor",_=function(){},f=function(t){return t},l=""[u],t={}[u],n=[][u],p=/s/[u];"function"!=typeof t.create&&(t.create=function(t){function e(){}return e.prototype=t,new e});var r=t.prototype.toString;function d(t){return r.call(t)}function h(t){return"[object String]"===d(t)}function v(t){return"[object Array]"===d(t)}function w(t){return"[object Object]"===d(t)}function b(t){return"[object Function]"===d(t)}function x(t){if(void 0===t&&(t=null),"object"==typeof JSON&&JSON&&JSON.stringify)return JSON.stringify(t);if(null==t)return"null";if("boolean"==typeof t)return l(t);if("string"==typeof t)return'"'+t+'"';if("number"==typeof t)return isFinite(t)?l(t):"null";if("object"==typeof t){if(v(t)){for(var e=[],n=0;n<t.length;n++)e.push(x(t[n]));return"["+e.join(",")+"]"}var r=[];for(var i in t)if(t.hasOwnProperty(i)){var o=t[i];void 0!==o&&"function"!=typeof o&&r.push('"'+i+'":'+x(o))}return"{"+r.join(",")+"}"}return""}function k(t,e,n){for(var r in t)t.hasOwnProperty(r)&&(n=e(n,t[r],r,t));return n}function O(r,i){return k(r,function(t,e,n){return t.push(i(e,n,r)),t},[])}function j(t,e,n){for(var r=0;r<t.length;r++)n=e(n,t[r],r,t);return n}function E(r,i,t){j(r,function(t,e,n){return i(e,n,r)})}function C(r,i,t){return j(r,function(t,e,n){return t.push(i(e,n,r)),t},[])}var S=n.prototype.slice,N=function(t){return j(t,function(t,e){return I(t,e)<0&&t.push(e),t},[])},I=b([].indexOf)?function(t,e){return t.indexOf(e)}:function(t,e){if(e!=e)return-1;for(var n=0;n<t.length;n++)if(t[n]===e)return n;return-1};var P=function(){return+new Date},q=function(){return+new Date/1e3|0},A=function(t){void 0===t&&(t={});var e=t.callback,n=t.timeout,r=!1,i=null,o=function(){r||(r=!0,clearTimeout(i),b(e)&&e())};return i=setTimeout(o,+n||1e3),o};function T(e){for(var t=[],n=arguments.length-1;0<n--;)t[n]=arguments[n+1];if(!1===w(e))throw new Error(e+" is not an object");return E(t,function(t){var n,r,i;t&&w(t)&&(n=e,i=function(t,e){n[e]=t},k(r=t,function(t,e,n){return i(e,n,r)}))}),e}function V(t){if(!1===w(t))throw new Error("target is not plain object");return O(t,function(t,e){return"object"==typeof t&&(t=x(t)),t=null==t?"":t,encodeURIComponent(e)+"="+encodeURIComponent(t)}).join("&")}function D(t,e){return/^https?:\/\/[^/?]+$/.test(t)&&(t+="/"),t===e||-1<t.indexOf("*")&&(n=t,new p((r=n,r.replace(/([.*+?^=!:$}{()|[\]/\\])/g,"\\$&")).replace("\\*",".*"))).test(e);var n,r}var R=m.document,L=m.location,U=m.navigator,F=m.screen,J=m.history,X=m.Math,B=m.parseInt,M="https:"===L.protocol?"https:":"http:",H=3,$=/^(?:mouse|pointer|contextmenu|drag|drop)|click/;function Y(t,e,n,r){void 0===r&&(r=!1);var i=function(t){t=function(t){if(t||(t=m.event),!t)throw new Error("`event` is not an object");t.target||(t.target=t.srcElement||R),t.target.nodeType===H&&(t.target=t.target.parentNode);var e=t.button,n=t.type;return $.test(n)&&!t.which&&e&&(t.which=1&e?1:2&e?3:4&e?2:0),t}(t),n.call(this,t)};t.addEventListener?t.addEventListener(e,i,r):t.attachEvent?t.attachEvent("on"+e,i):t["on"+e]=i,n.__dlg=i}function z(o,a,u,t){var c=[],s=function(e){var n=this;(void 0===t||b(t)&&t(e))&&E(c,function(t){return t.call(n,e)})},f=!1,l=new Error("Pool has been destoryed.");return Y(o,a,s,u),{append:function(t){if(f)throw l;b(t)&&c.push(t)},remove:function(t){if(f)throw l;var e=I(c,t);-1<e&&c.splice(e,1)},destroy:function(){if(f)throw l;var t,e,n,r,i;t=o,e=a,r=u,i=(n=s).__dlg,t.removeEventListener?t.removeEventListener(e,i,r):t.attachEvent?t.detachEvent("on"+e,i):t["on"+e]=null,i=null,n.__dlg=null,t=n=null,f=!(s=o=c=null)}}}var W="CSS1Compat"===R.compatMode;function G(){var t=-1,e=R.body,n=R.createElement("div");return n.innderHTML="&nbsp;",n.className="adsbox adwords",e&&(e.appendChild(n),t=0===n.offsetWidth?1:0,e.removeChild(n)),t}function K(t){var e="";try{e=t||m.top.document.referrer}catch(t){}if(""===e)return e;var n=/^https?:\/\/e\.so\.com\/search\/(eclk|mclick)\?/.exec(e);if(n){var r=function(t){var e=t.indexOf("?");if(e<0)return{base:t,param:{}};var o={};return j(t.slice(e+1).split("&"),function(t,e){var n=e.indexOf("=");if(-1<n){var r=e.slice(0,n),i=e.slice(n+1);o[r]=i}else o[e]="";return t},o),{base:t.slice(0,e),param:o}}(e),i=r.base,o=r.param,a="mclick"===n[1]?"asin":"p";e=i+"?"+a+"="+(o[a]||"")}else e=e.slice(0,1e3);return e}var Q="";if(void 0===R.hidden)for(var Z=["webkit","moz","ms","o"],tt=0;tt<Z.length;tt++){if(void 0!==R[Z[tt]+"Hidden"]){Q=Z[tt];break}}var et=""===Q?"visibilityState":Q+"VisibilityState",nt=z(R,Q+"visibilitychange",!0);function rt(){return void 0===R[et]?"":R[et]}function it(){return"preview"===U.loadPurpose}var ot={get:function(t){t=encodeURIComponent(t);var e=p("(^| )"+t+"=([^;]*)(;|$)").exec(R.cookie);return decodeURIComponent(e?e[2]:"")},set:function(t,e,n){void 0===n&&(n={});var r,i=encodeURIComponent(t)+"="+encodeURIComponent(e),o=n.path,a=n.domain,u=n.expires;i+=u?";expires="+(r=u,new Date(P()+864e5*r)).toUTCString():"",i+=o?";path="+o:"",i+=a?";domain="+a:"";try{R.cookie=i}catch(t){}},del:function(t,e){this.set(t,"",T({expires:-1},e))}};function at(){for(var t=[U.appName,U.version,U.language||U.browserLanguage,U.platform,U.userAgent,F.width,"x",F.height,F.colorDepth,R.referrer].join(""),e=t.length,n=J.length;n;)t+=n--^e++;return(2147483647*(X.round(2147483647*X.random())^function(t){var e=0,n=0,r=t.length-1;for(;0<=r;r--){var i=B(t.charCodeAt(r),10);0!=(n=4261412864&(e=(e<<6&4294967295)+i+(i<<14)))&&(e^=n>>21)}return e}(t))).toString()}var ut=/(msie|trident)/i.test(U.userAgent),ct=R.createElement("a");function st(t){ut&&(ct.setAttribute("href",t),t=ct.href),ct.setAttribute("href",t);var e=ct.href,n=ct.protocol,r=ct.host,i=ct.search,o=ct.hash,a=ct.hostname,u=ct.port,c=ct.pathname;return{href:e,protocol:n?n.replace(/:$/,""):"",host:r,search:i?i.replace(/^\?/,""):"",hash:o?o.replace(/^#/,""):"",hostname:a,port:u,pathname:"/"===c.charAt(0)?c:"/"+c}}var ft=28800,lt=0,pt=function(t){var e=t.referrer,n=t.domainId,r=t.url,i=t.conf,o=t.ckDomain,a=t.init;void 0===a&&(a=_),this.index=lt++,this.conf=i,this.url=r,this.domainId=n,this.start=q(),this.referrer=e,this.session=new vt({key:"qs_lvt_"+n,ident:q(),domain:o}),this.page=new ht({key:"qs_pv_"+n,ident:at(),domain:o}),a.call(this)};pt.prototype.getBaseInfo=function(){var t=function(t){return t.slice(-2).reverse()},e=this,n=e.url,r=e.start,i=e.referrer,o=e.domainId,a=e.page,u=e.session,c=e.conf,s=c.gu,f=c.version,l=c.hu,p=t(a.list),d=p[0],h=p[1],v=t(u.list),m=v[0],g=v[1],y={url:n,si:o,su:i,flt:r,lt:m,pt:d,guid:s,huid:l,v:f};return g&&(y.lt2=g),h&&(y.pt2=h),y};var dt=function(t){var e=t.key,n=t.ident,r=t.domain,i=t.expires;void 0===i&&(i=365);var o={path:"/",domain:"."+r};this.cfg=T({expires:i},o);var a=this.migrate(e,o);this.ident=""+n,this.key=a.key,this.list=a.list,this.domain=r};dt.prototype.migrate=function(t,e){var n=ot.get(t),r=t.replace(/^[a-z]/,function(t){return t.toUpperCase()});""!==n&&""===ot.get(r)&&ot.set(r,n,this.cfg),ot.del(t,e);var i=ot.get(r);return{key:r,list:""===i?[]:i.split(",")}},dt.prototype.init=function(){var t=this.list,e=this.key,n=this.ident,r=this.cfg;this.list=t.slice(-4).concat(n),ot.set(e,this.list.join(","),r)};var ht=function(e){function t(t){e.call(this,t),this.init()}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t}(dt),vt=function(n){function t(t){n.call(this,t);var e=!function(t,e,n){if(!t||!t.length)return!1;var r=B(t[t.length-1],10);if(X.abs(e-r)>ft)return!1;if(function(t,e){var n=st(t).hostname,r=n.indexOf(e);if(0<=r&&n.slice(r)===e)return!1;return!0}(K(),n))return!1;return!0}(this.list,this.ident,this.domain);(this.isNew=e)&&this.init()}return n&&(t.__proto__=n),(t.prototype=Object.create(n&&n.prototype)).constructor=t}(dt);var mt=/chrome/i.test(U.userAgent),gt=function(t,e){return t+(0<t.length?"&":"")+"_mtd="+e},yt=[function(t,e,n){if(bt&&U.sendBeacon(t,e&&gt(e,"bc")))return n&&n(),!0;return!1},function(t,e,n){var r=m.XMLHttpRequest;if(!r)return!1;var i=new r;if("withCredentials"in i==!1)return function(t,e,n){var r=m.XDomainRequest;if(!r)return!1;try{var i=new r,o=gt(e,"xdr");return i.open("POST",t),setTimeout(function(){return i.send(o)}),i.onload=i.onerror=function(){n&&n()},!0}catch(t){return!1}}(t,e,n);try{var o=gt(e,"xhr");return i.open("POST",t,!0),i.withCredentials=!0,i.setRequestHeader("Content-Type","text/plain"),i.onreadystatechange=function(){2<=i.readyState&&n&&n()},i.onerror=function(){n&&n()},i.send(o),!0}catch(t){return!1}},wt],_t={image:[2,0,1],xhr:[1,0,2],beacon:[0,2,1]};function wt(t,e,n){var r="qha_log_"+X.floor(2147483648*X.random()).toString(36),i=new m.Image;(m[r]=i).onload=i.onerror=i.onabort=function(){i.onload=i.onerror=i.onabort=null,i=m[r]=null,n&&n()},e=mt&&8153<e.length?e.slice(8153):e;var o,a,u,c=gt(e,"im");return i.src=(a=c,u=-1<(o=t).indexOf("?")?"&":"?",o+u+a),!0}var bt=b(U.sendBeacon);for(var xt="__qhart",kt=R.domain.split("."),Ot="."+kt.pop();kt.length;)if(Ot="."+kt.pop()+Ot,ot.set(xt,"1",{domain:Ot}),"1"===ot.get(xt)){ot.del(xt,{domain:Ot});break}var jt=Ot.slice(1),Et=0,Ct=[];function St(t){b(t)&&(Et+=1,t.i=Et,Ct.push(t))}var Nt=l.prototype.trim,It=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,Pt=b(Nt)?function(t){return Nt.call(t)}:function(t){return t.replace(It,"")};function qt(t){return!1==(null!=t)?"":Pt(""+t)}var At=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;function Tt(t,e,n){if("send"===t&&n&&0===n.index){var r=e[0],i=r&&r.et;if(a<=i){var o=null;try{o=function(t){var i,e=qt(""+t);if("object"==typeof JSON&&JSON&&JSON.parse)return JSON.parse(e);var o=null,n=e.replace(At,function(t,e,n,r){return i&&e&&(o=0),0===o?t:(i=n||e,o+=!r-!n,"")});if(e&&!qt(n))return new _[u]("return "+e)();throw new Error("Invalid JSON: "+t)}(ot.get("mediav"))}catch(t){}T(r,o)}}}function Vt(t,e,n){if("send"===t&&n&&0===n.index){var r=e[0],i=r&&r.et;i!==y&&i!==o||T(r,function(){var t={};m._e360_uid&&T(t,{e_uid:m._e360_uid||"",e_cid:m._e360_campaignid||"",e_gid:m._e360_groupid||"",e_yid:m._e360_creativeid||"",e_kid:m._e360_keywordid||"",e_clkid:m._e360_clickid||"",e_type:m._e360_type||"",e_query:m._e360_query||"",e_mtype:m._e360_matchtype||"",e_smtype:m._e360_submatchtype||"",e_requery:m._e360_requery||""});m._e360_commerce&&(t.e_com=m._e360_commerce);m._e360_sip&&(t.e_sip=m._e360_sip);return t}())}}function Dt(t,e){m.postMessage&&m.top!==m&&m.top.postMessage(x({type:t,args:e}),"*")}var Rt=[],Lt=[];function Ut(t,e){1===t?Rt.push(e):Lt.push(e)}function Ft(t,e){E(1===t?Rt:Lt,function(t){b(t)&&t(e)})}var Jt=/micromessenger/.test(U.userAgent.toLowerCase()),Xt=M+"//360fenxi.mediav.com";function Bt(t){!function(t){var e=t.domain,n=t.currentPV,r=t.mvid,i=null;if(!r||0<n.index)return;if(Jt)return Mt("wx");if(143225==+e)return;1===G()&&Mt("adb");try{i=R.createElement('<iframe name="'+r+'"></iframe>')}catch(t){(i=R.createElement("iframe")).name=r}i.height=0,i.width=0,i.border=0,i.style.display="none",i.src=Xt+"/mv.html",i.onload=null,o=r,u=o.split(","),a=function(t){var e,n=t.origin,r=t.data,i=(""+r).split("|"),o=i[0],a=i[1];-1<n.indexOf(Xt)&&(e=o)&&("mid"===e||-1<I(u,e))&&function(t,e){if("mid"===t)return m[g]("send",{et:s,mid:e});var n=e.split(","),r=n[0];void 0===r&&(r="");var i=n[1];void 0===i&&(i="");var o=n[2];void 0===o&&(o="");var a={eid:t,ep:r,vid:i,ctn:o};ot.set("mediav",x(a)),m[g]("send",T({et:c},a))}(o,a)},"postMessage"in m?Y(m,"message",a):U._qha_message=function(t){return a({origin:Xt,data:t})},R.body?R.body.appendChild(i):Y(m,"load",function(){R.body.appendChild(i)});var o,u,a}(t)}function Mt(t){m[g]("send",{et:e,msg:t})}function Ht(t){var e=t.currentPV.start,n={et:o,ep:q()-e};m[g]("send",n,"beacon")}var $t=function(t){var e,n,r,i,o,a,u,c,s=t.currentPV,f=s.index,l=s.session.isNew,p=t.e360,d=p&&0===f&&l,h=T({et:y,ck:0|!l},(e=F.pixelDepth,n=F.colorDepth,r=F.width,i=F.height,o=U.language,a=U.browserLanguage,{adb:G(),cl:e||n||0,ds:r+"x"+i,ln:o||a||"unknown"})),v=(c=!(u=function(){return m[g]("send",h)}),function(){if(!c)return c=!0,u.apply(this,arguments)});d?(!function(t,n,e){void 0===n&&(n=_),void 0===e&&(e=_);var r=R.getElementsByTagName("script")[0],i=R.createElement("script");i.type="text/javascript",i.defer=!0,i.async=!0,i.src=t,i.onerror=e,i.onload=n,i.onreadystatechange=function(t){var e=i.readyState;"loaded"!==e&&"complete"!==e||n(t)},r.parentNode.insertBefore(i,r)}(M+"//e.so.com/search/c.js?u="+p+"&_="+ +new Date,v,v),setTimeout(v,500)):v()},Yt=z(R,"mousedown",!0),zt=null;var Wt=function(t){this.cf=t};Wt.prototype.update=function(t){throw new Error("`update()` method not implemented")},Wt.prototype.listener=function(t){throw new Error("`listener()` method not implemented")},Wt.prototype.send=function(t,e){m[g]("send",t,e)};var Gt=function(e){function t(t){var r=this;e.call(this,t),t.idClk?(this.map=t.idClk,this.matches=[],this.listener=function(t){var e=function(t){var e=t.id;for(;!e&&(t=t.parentNode);)e=t.id;return t}(t.target),n=e&&e.id;n&&-1<I(r.matches,n)&&r.send({et:i,ep:n})}):this.listener=_}return e&&(t.__proto__=e),((t.prototype=Object.create(e&&e.prototype)).constructor=t).prototype.update=function(){this.matches=function(t,r){if(!t)return[];var e=k(t,function(t,e,n){return D(n,r)&&t.push(e),t},[]).join(",").split(",");return N(e)}(this.map,this.cf.currentPV.url)},t}(Wt);var Kt=function(n){function t(t){var e=this;n.call(this,t),this.clk=1==+t.urlClk,this.listener=function(t){return e.clk&&e.resp(t)},this.update=_}return n&&(t.__proto__=n),((t.prototype=Object.create(n&&n.prototype)).constructor=t).prototype.resp=function(t){var e,n,r,i,o=function(t){var e=t.target,n={t:e.nodeName},r=0;for(;r<3&&e&&"A"!==e.nodeName;)r++,e=e.parentNode;return n.u=e&&"A"===e.nodeName?e.href:"",n}(t),a=o.u;a&&!/^\s*javascript:/.test(a)&&this.send({et:2,ep:(e=o,n=function(t){var e=t.pageX;void 0===e&&(e=0);var n=t.pageY;void 0===n&&(n=0);return{x:e,y:n}}(t),r=O(e,function(t,e){return e+":"+encodeURIComponent(t)}),i=O(n,function(t,e){return e+":"+encodeURIComponent(t)}),r.concat(i).join(","))},"beacon")},t}(Wt);var Qt=function(n){function t(t){var e=this;n.call(this,t),this.list=t.pageClk,this.trk=!1,this.listener=function(t){e.trk&&e.clk(t)}}return n&&(t.__proto__=n),((t.prototype=Object.create(n&&n.prototype)).constructor=t).prototype.update=function(){this.trk=function(t,e){if(!t||0===t.length)return!1;for(var n=0;n<t.length;n++)if(D(t[n],e))return!0;return!1}(this.list,this.cf.currentPV.url)},t.prototype.clk=function(t){var e,n,r,i=t.clientX,o=t.clientY,a=(e=void 0!==m.pageXOffset,n=W?R.documentElement:R.body,{scrollX:e?m.pageXOffset:n.scrollLeft,scrollY:e?m.pageYOffset:n.scrollTop}),u=a.scrollX,c=a.scrollY,s=(r=W?R.documentElement:R.body,{width:X.max(r.scrollWidth,r.clientWidth),height:X.max(r.scrollHeight,r.clientHeight)}),f=s.width,l=s.height;this.send({et:10,x:i+u,y:o+c,w:f,h:l})},t}(Wt);var Zt={},te=T({version:"3.2.0",currentPV:null},(w(!1),m._qha_data)),ee=te.domain,ne=M+"//"+te.host+"/s.gif?lts=1",re="_qha_ldt_",ie=m[re]=(m[re]||0)+1,oe=!1,ae=0,ue=function(t){return!(!t||!h(t))&&-1<t.indexOf("//s.union.360.cn/"+ee+".js")};if(R.currentScript){oe=ue(R.currentScript.src)}else{for(var ce=R.getElementsByTagName("script"),se=0;se<ce.length;se++){ue(ce[se].src)&&(ae+=1)}oe=ie<=ae}if(!oe){var fe=m.console;fe&&b(fe.warn)&&fe.warn("请不要自行托管 360 分析统计脚本！！！")}oe&&wt(ne,V({et:100,si:ee,ldt:ie,vis:rt(),prv:+it(),guid:te.gu,huid:te.hu,t:P(),v:"3.2.0"}));var le,pe,de=function(){var n;Ut(-1,Ht),Ut(1,Bt),Ut(1,$t),Ut(1,function(){zt&&E(zt,function(t){return t.update()})}),n=te,zt=C([Kt,Gt,Qt],function(t){var e=new t(n);return Yt.append(e.listener),e}),St(Tt),St(Vt),St(Dt)},he={intlz:function(t,e){w(t)?T(Zt,t):h(t)&&(Zt[t]=e)},set:function(t,e){Zt[t]=e},send:function(){for(var t,e,n=[],r=arguments.length;r--;)n[r]=arguments[r];if("pageview"===n[0])return t=Zt.page,!1===(e=null==te.currentPV)&&Ft(-1,te),te.currentPV=new pt({ckDomain:Zt.ckDomain||jt,referrer:e?K():te.currentPV.url,domainId:ee,url:t?st(t).href:L.href,conf:te}),void Ft(1,te);var i=n[0],o="string"==typeof n[1]?n[1]:Zt.transport,a=null;w(n[1])?a=A(n[1]):w(n[2])&&(a=A(n[2])),T(i,te.currentPV.getBaseInfo(),{t:P()});var u=[ne,i,o,a],c=Zt.pingGuard;b(c)&&!0!==c.apply(null,u)||function(n,t,e,r){void 0===e&&(e="image");var i=V(t);if(i.length<=2048&&"beacon"!==e)return wt(n,i,r);j(e in _t?_t[e]:[0,1,2],function(t,e){return t||yt[e](n,i,r)},!1)}.apply(null,u)}},ve=function(t){var e,n,r,i,o=v(e=t)?e:e.length&&e.item?C(e,f):S.call(e),a=o[0],u=o.slice(1),c=he[a];n=a,r=u,i=te.currentPV,E(Ct,function(t){b(t)&&0<t.i&&t(n,r,t.i?i:void 0)}),b(c)&&c.apply(null,u)};oe&&!it()&&(le=function(){var t=m[g];if(!t||1!==t.__){if(!1===b(t)){var n=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];(n.c=n.c||[]).push(t)};m[g]=n}de(),m[g]("init",ee);var e=m[g];if(m[g]=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return ve(t)},m[g].__=1,e&&v(e.c)&&e.c.length){e.s||e.c.unshift(["send","pageview"]);var r=[],i=[];E(e.c,function(t){"intlz"===t[0]?r.push(t):i.push(t)}),e.c=i,E(r,ve),E(e.c,ve)}Y(m,"unload",function(){return Ft(-1,te)})}},(pe=function(){return"prerender"===rt()})()?nt.append(function(){!1===pe()&&(le(),nt.destroy())}):le())}(this);



