// ==UserScript==
// @name         打开正在上的课
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.yuketang.cn/v2/web/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yuketang.cn
// @grant        none
// ==/UserScript==


(function() {

    function open(){
        location.reload();
    }
    'use strict';
    window.addEventListener('load', function() {
        setTimeout(function(){
            document.querySelector("#app > div.viewContainer > div > div.onlesson > div").click();
            setTimeout(function(){
                document.querySelector("#app > div.viewContainer > div > div.onlesson > div.onlessonlist > div > div.left").click();
            }, 1000);
        }, 2000);
    }, false);
    var now = new Date();
    var hour = [10, 14, 18];
    var minute = [10, 10, 55];
    var delay = [];
    for (var i = 0; i < 3; i++){
        var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour[i], minute[i], 0, 0) - now;
        if (millisTill10 < 0) {
            millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
        }
        delay.push(millisTill10);
    }
    var k;
    for (i = 0; i < 3; i++) {
        k = setInterval(open, delay[i]);
    }
    // Your code here...
})();