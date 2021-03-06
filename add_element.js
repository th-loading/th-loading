// ==UserScript==
// @name         add_meta
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @grant    GM_addStyle
// @match        https://telegra.ph/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // window.addEventListener('DOMContentLoaded', function() {
    //     alert("i\'m good")
    //     var tag = document.createElement("meta");
    //     tag.name = "referrer";
    //     tag.content = "never";
    //     var parentElement = document.getElementsByTagName('head')[0];
    //     // document.getElementsByTagName('header')[0].appendChild(tag);
    //     parentElement.insertBefore(tag, parentElement.children[0]);
    //     // Your code here...
    // }, false);
    // //create element
    // // setTimeout(function() {
    // //     var tag = document.createElement("meta");
    // //     tag.name = "referrer";
    // //     tag.content = "never";
    // //     var parentElement = document.getElementsByTagName('head')[0];
    // //     // document.getElementsByTagName('header')[0].appendChild(tag);
    // //     parentElement.insertBefore(tag, parentElement.children[0]);
    // //     // Your code here...
    // // },600);
    // if (document.readyState == "complete" || document.readyState == "loaded" || document.readyState == "interactive") {
    //     alert("Already Loaded");
    // } else {
    //     document.addEventListener("DOMContentLoaded", function(event) {
    //         alert("Just Loaded");
    //     });
    // }

    //未变化

    // new MutationObserver(function(allmutations) {
    //     if(document.getElementsByTagName('meta')[0].name != "referrer"){
    //     alert('ss');
    //     var tag = document.createElement("meta");
    //     tag.name = "referrer";
    //     tag.content = "never";
    //     //var parentElement = document.getElementsByTagName('head')[0];
    //     document.getElementsByTagName('head')[0].appendChild(tag);
    //     //parentElement.insertBefore(tag, parentElement.children[0]);
    // }
    // }).observe(document.getElementsByTagName('head')[0], {childList: true, // 观察直接子节点
    //                                                       subtree: true, // 及其更低的后代节点
    //                                                       characterDataOldValue: true // 将旧的数据传递给回调
    //                                                      });
    // var c = elements[i].src;
    // new_c = "https" + c.substring(4);
    // new_c = new_c.concat("?",Math.random());

    // var accounts = [];

    // a = document.createElement("div")
    // elements = document.getElementsByTagName("img")[0]
    // url = elements.src
    // var frameid = 'frameimg' + Math.random();
    // window.accounts[0] = '<img id="img1" src=\'' + url + '?' + Math.random() +
    // '\' /><script>window.onload = function() { parent.document.getElementById(\'' +
    // frameid + '\').height = document.getElementById(\'img1\').height+\'px\'; }<' +
    // '/script>';

    // a.innerHTML +=('<iframe id="' + frameid +
    // '" src="javascript:parent.accounts[0];" frameBorder="0" scrolling="no" width="100%" style = "position = absolute"></iframe>');
    // document.body.append(a)

    // a = document.createElement("div")
    // var frameid = 'frameimg' + Math.random();
    // window.accounts[1] = '<img id="img2" src=\'' + url + '?' + Math.random() +
    // '\' /><script>window.onload = function() { parent.document.getElementById(\'' +
    // frameid + '\').height = document.getElementById(\'img2\').height+\'px\'; }<' +
    // '/script>';
    // a.innerHTML += ('<iframe id="' + frameid +
    // '" src="javascript:parent.accounts[1];" frameBorder="0" scrolling="no" width="100%"></iframe>');
    // document.body.append(a)


// ----------------------------------method - 1 ----------------------------------

    // function initCSS() {
    //     const ele= document.createElement('style');
    //     ele.type = 'text/css';
    //     ele.innerHTML = `
    //         .tl_page_wrap {
    //         max-width: 1200px !important;
    //         }
    //     `;
    //     document.head.appendChild(ele);
    // }
    
    // initCSS();

    // window.addEventListener('load', function() {
    //     window.accounts = [];
    //     var imgs = document.getElementsByTagName("img");
    //     var t = imgs.length;
    //     for (var i = 0; i < t;i++){
    //         var a = document.createElement("div");
    //         a.class = "aaa"
    //         var id_str = 'img' + i;
    //         var url = imgs[0].src;
    //         var frameid = 'frameimg' + Math.random();
    //         window.accounts[i] = '<img id=\"' + id_str + '\" src=\'' + url + '?' + Math.random() +
    //         '\' /><script>window.onload = function() { parent.document.getElementById(\'' +
    //         frameid + '\').height = document.getElementById(\'' + id_str + '\').height+\'px\';parent.document.getElementById(\'' +
    //         frameid + '\').width = document.getElementById(\'' + id_str + '\').width +\'px\'; }<' +
    //         '/script>';
    //         a.innerHTML += ('<iframe id="' + frameid +
    //         '" src="javascript:parent.accounts['+ i + '];" frameBorder="0" scrolling="no" width="100%" position = "absolute" block = "none"></iframe>');
    //         imgs[0].parentElement.append(a);
    //         imgs[0].parentElement.removeChild(imgs[0])
    //     }
    // });
    // Element.setAttribute(name, value);
//-------------------------------------method 2-----------------------------------
    // iframe: parent -> parent's window; src -> parent object 
    // css -> change max_width / change image size
    // use iframe and random num
    window.addEventListener('load', function() {
        window.accounts = [];
        var imgs = document.getElementsByTagName("img");
        var t = imgs.length;
        for (var i = 0; i < t;i++){
            var a = document.createElement("div");
            a.class = "aaa"
            var width = imgs[0].parentElement.offsetWidth;
            var height = imgs[0].parentElement.offsetHeight;
            var id_str = 'img' + i;
            var url = imgs[0].src;
            var frameid = 'frameimg' + Math.random();
            window.accounts[i] = '<img id=\"' + id_str + '\" src=\'' + url + '?' + Math.random() +
            '\' width=' + width + 'px><script>window.onload = function() { parent.document.getElementById(\''+
            frameid + '\').height = document.getElementById(\'' + id_str + '\').height+\'px\';parent.document.getElementById(\'' +
            frameid + '\').width = document.getElementById(\'' + id_str + '\').width +\'px\'; }<' +
            '/script>'
            a.innerHTML += ('<iframe id="' + frameid +
            '" src="javascript:parent.accounts['+ i + '];" frameBorder="0" scrolling="no" width="100%" position = "absolute" block = "none"></iframe>');
            imgs[0].parentElement.append(a);
            imgs[0].parentElement.removeChild(imgs[0])
        }
    });
}
)();