//==UserScript==
//@name         技术博客
//@namespace    http://tampermonkey.net/
//@version      0.1
//@description  try to take over the world!
//@author       You
//@match        *://*/*/detail*
//@grant        none
//@require		https://code.jquery.com/jquery-3.4.1.min.js
//@updateURL    https://github.com/caoxie/BlogFilter/blob/master/BlogFilter.js
//==/UserScript==

(function() {
    'use strict';

    
    $(".curouter").remove();
    var hosts = window.location.hostname;
    var b = /blog.csdn.net/i.test(hosts);
    console.log(hosts + "->"+b);
    //debugger;
    if(b){
        window.setTimeout('$("a.btn-readmore")[0].click();',500);
        return;
    }
    b = /maimai.cn/i.test(hosts);
    console.log(hosts + "->"+b);
    if(b){
        window.setTimeout('$("div.downloadFixed").remove();',500);
        return;
    }
 // Your code here...
})();
