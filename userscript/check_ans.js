// ==UserScript==
// @name         雨课堂检测答题
// @namespace    http://tampermonkey.net/
// @version      0.1
// @include https://www.google.com/*

// @description  try to take over the world!
// @author       You
// @match        https://www.yuketang.cn/lesson/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yuketang.cn
// @grant       GM_notification
// @grant       GM_xmlhttpRequest

// ==/UserScript==


(function() {
    'use strict';
    function check() {
        var targets = document.body;
        observer.observe(targets, {'childList': true,'characterData':true,'subtree': true});
        alert("Done");
    }
    const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
        var t = document.querySelector("#app > section > section.ppt__wrapper.J_ppt > section.lesson__page > section > section > section > section.slide__info.J_container > section > section > section > section > div.time-box > div");
        var q = document.querySelector("#app > section > section.ppt__wrapper.J_ppt > section.lesson__page > section > section > section > section > div > section.exercise__tips > div > p")
        if(t || q){
            GM_notification({title: '速来答题', image: 'bar', text: '速来', onclick: console.log});
            var url = "https://sctapi.ftqq.com/SCT125897TpVJpicD7SIXdZ2WK6ZfKlS6N.send?title=answer";
            GM_xmlhttpRequest({
                method: 'GET',
                url: url,
            });
            // var xmlHttp = new XMLHttpRequest();
            // xmlHttp.open( "GET", url);
            // xmlHttp.send();
            alert("No!");
            observer.disconnect();
            setTimeout(check, 60000, observer);
        }
    };

    const observer = new MutationObserver(callback);
    var targets = document.body;
    observer.observe(targets, {'childList': true,'characterData':true,'subtree': true});
    // Your code here...
})();