// ==UserScript==
// @name         BOSS直聘过滤
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  BOSS直聘过滤已谈过的boss
// @author       张玉良
// @home-url     https://greasyfork.org/zh-CN/scripts/404941
// @home-url2    https://github.com/caoxie/BlogFilter/boss.js
// @homepageURL  https://greasyfork.org/zh-CN/scripts/404941
// @copyright    2020-2020, AC
// @require      http://code.jquery.com/jquery-2.1.1.min.js
// @match        https://www.zhipin.com/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    var showNew = function() {
        var liList = $(".job-list ul li");
        if(liList){
            for(var i = 0; i < liList.length; i++){
                var li = $(liList[i]);
                var sp = li.find("button span");
                if(sp){
                    var text = $(sp[0]).text();
                    if(text == "继续沟通"){
                        li.hide();
                        try{
                            var jobmain = li.parent().parent().parent();
                            if(jobmain){
                                console.log(jobmain.text().replace("\\s+"," "));
                            }
                        } catch(e){
                            console.log(e);
                        }
                    }
                }

            }
        }
    };
    showNew();
    // Your code here...
})();
