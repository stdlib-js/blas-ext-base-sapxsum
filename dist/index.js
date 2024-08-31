"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=u(function(g,t){
var d=require('@stdlib/blas-ext-base-sapxsumkbn/dist');function y(e,r,s,a){return d(e,r,s,a)}t.exports=y
});var p=u(function(h,v){
var f=require('@stdlib/blas-ext-base-sapxsumkbn/dist').ndarray;function j(e,r,s,a,c){return f(e,r,s,a,c)}v.exports=j
});var m=u(function(w,x){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=n(),k=p();b(q,"ndarray",k);x.exports=q
});var l=require("path").join,R=require('@stdlib/utils-try-require/dist'),_=require('@stdlib/assert-is-error/dist'),E=m(),i,o=R(l(__dirname,"./native.js"));_(o)?i=E:i=o;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
