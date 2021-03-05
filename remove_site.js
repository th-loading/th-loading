// ==UserScript==
// @name 从谷歌 百度 必应搜索结果中屏蔽自定义关键字 增强版（基于AC的脚本优化）
// @namespace BlockAnyThingYouWant Plus
// @include http://www.baidu.com/*
// @include https://www.baidu.com/*
// @include https://www.google.com/*
// @include /^https?\:\/\/encrypted.google.[^\/]+/
// @include /^https?\:\/\/www.google.[^\/]+/
// @include /^https?\:\/\/www.so.com/
// @include /^https?\:\/\/www.youdao.com/
// @require http://code.jquery.com/jquery-1.8.0.min.js
// @icon    https://coding.net/u/zb227/p/zbImg/git/raw/master/img0/icon.jpg
// @author       zzhjim( Based on AC)
// @version 2.2.1.191010011
// @description 基于AC脚本制作，新增大量关键词，欢迎结合本人其他脚本使用，如有意见请反馈至zzhjim@vip.qq.com（也可向原作者反馈）
//@grant note 2019.8.13 第2.2版 @zzhjim：增加大量规则，对严重影响搜索体验的网站、营销号进行屏蔽
//@grant note 2018.1.21 第2.12版 @zzhjim：增加对于部分反动网站、百家号的屏蔽
//@grant note 2018.1.21 第2.09-2.11版 @zzhjim：调整部分关键词
//@grant note 2017.8.12 第2.04-2.08版 @zzhjim：修复一批重大BUG，调整部分关键词
//@grant note 2017.8.9 第2.02-2.03版 @zzhjim:增加部分关键词
//@grant note 2017.8.8 第2.01版 @zzhjim:增删部分关键词，增强对繁体恶意网站的拦截
//@grant note 2017.8.6 第2.0版 @zzhjim:原脚本已经许久没有更新，我将一些常见的恶意网站名称加入了进去，修改了360搜索的网址。如果还有合适的关键词，欢迎提交讨论。（本脚本配合AC的其他脚本使用效果更好）
//@grant note 2018.1.18 第2.1版 @zzhjim:调整部分关键字
//@grant note 2015.11.26 第一版，规则自己写吧，觉得要反馈的关键字可以在卡饭回个帖，我合适的加入
// ==/UserScript==


/*
变量x用于                                           百度=谷歌=必应=360搜索=有道
就是黑名单,自己加入自己想要屏蔽的关键字
*/
/*
var blankList = "兰州养生||热备资讯||贵阳站长"; //自己看着格式差不多加入就好
*/
var x = blankList.split("||");

//===================================================主入口=======================================================
var mo = new MutationObserver(function(allmutations) {
    var href = window.location.href;
    if(href.indexOf("www.baidu") > -1){
        $(".c-container").each(deal); // 百度

    } else if(href.indexOf("www.google") > -1){
        $(".g").each(deal);     // 谷歌
    } else if(href.indexOf("so.com") > -1){
        $(".res-list").each(deal); // 360搜索
        $(".spread ").each(deal); // 360搜索
        $(".brand").each(deal); // 360搜索
    } else if(href.indexOf("bing.com") > -1){
        $(".b_algo").each(deal);    // 必应1
        $(".b_ans").each(deal);    // 必应2
    } else if(href.indexOf("youdao.com") > -1){
        $(".res-list").each(deal);        // 有道
    }
});
var targets = document.body;
mo.observe(targets, {'childList': true,'characterData':true,'subtree': true});

// ================================================通用处理函数==========================================================
function deal(){
    try{
        document.getElementsByTagName('g-section-with-header')[0].remove();
        document.getElementsByTagName('g-section-with-header')[0].remove();
    }
    catch(err){}
        //console.log("dealing with");
    var curText = $(this).text();
    if(checkIndexof(curText) == true){
        $(this).remove();
    }
}
/*遍历查表，如果在表中则返回true*/
function checkIndexof(element){
	var result = (element.indexOf(x[0]) > -1);
	for(var i = 1; i <= x.length; i++){
		//alert("check");
		result = result || (element.indexOf(x[i]) > - 1);
	}
	return result;
}