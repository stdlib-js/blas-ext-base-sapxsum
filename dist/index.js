"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=i(function(h,n){
var d=require('@stdlib/blas-ext-base-sapxsumkbn/dist').ndarray;function y(e,r,s,a,c){return d(e,r,s,a,c)}n.exports=y
});var q=i(function(w,v){
var f=require('@stdlib/strided-base-stride2offset/dist'),j=u();function l(e,r,s,a){return j(e,r,s,a,f(e,a))}v.exports=l
});var x=i(function(z,p){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=q(),_=u();R(o,"ndarray",_);p.exports=o
});var b=require("path").join,k=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=x(),t,m=k(b(__dirname,"./native.js"));E(m)?t=O:t=m;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
