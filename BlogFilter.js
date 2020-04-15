// ==UserScript==
// @name         技术博客页面元素屏蔽与展开脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       张玉良
// @require		https://code.jquery.com/jquery-3.4.1.min.js
// @updateURL    https://github.com/caoxie/BlogFilter/blob/master/BlogFilter.js
// @match        https://blog.csdn.net/*
// @match        https://maimai.cn/article/detail?fid=\d+
// @match        http://blog.didispace.com/[\w?,_]*
// @run-at document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     //loadJs("http://code.jquery.com/jquery-2.1.1.min.js",function(){
     //    alert('done');
     //});


    setTimeout('$(".curouter").remove();',500);
    var hosts = window.location.hostname;
    var b = /blog.csdn.net/i.test(hosts);
    console.log(hosts + "->"+b);
    //debugger;
    if(b){
        setTimeout('$("a.btn-readmore")[0].click();',500);
         // debugger;
        setTimeout('document.getElementById("btn-readmore").click();',500);
        setTimeout('$("div.pulllog-box").hide();$("#btn-readmore").trigger("click");',500);
        setTimeout('$("div.blog-content-box").on("load",function(){$("#article_content").attr("style","");$("div.hide-article-box").remove();});',500);
        return;
    }
    b = /maimai.cn/i.test(hosts);
    console.log(hosts + "->"+b);
    if(b){
        setTimeout('$("div.downloadFixed").hide();$("div.downloadFixed").remove();',500);
        return;
    }
    regex = new RegExp("[a-z\d.]*iocoder.cn","img");
    if(regex.test(hosts)){
        setTimeout('$("div.alert-modal").remove();$("div.alert-container").remove();',500);
        return;
    }
    b = /blog.didispace.com/i.test(hosts);
    if(b){
        setTimeout('$("div.article-entry").css("overflow","auto");$("div.read-more-wrap").remove();',500);
        return;
    }

var loadJs = function(url,callback){
    debugger;
    var script=document.createElement('script');
    script.type="text/javascript";
    if(typeof(callback)!="undefined"){
        if(script.readyState){
            script.onreadystatechange=function(){
                if(script.readyState == "loaded" || script.readyState == "complete"){
                    script.onreadystatechange=null;
                    callback();
                }
            }
        }else{
            script.onload=function(){
                callback();
            }
        }
    }
    script.src=url;
    document.body.appendChild(script);
}
})();


