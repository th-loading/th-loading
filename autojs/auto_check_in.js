require("rightToMention");

auto.waitFor();

var long = 12000;
var mid = 6000;
var short = 3000;
var quick = 1500;
var passwd = "666666";
var target = "th";

function unlock(password){ 
    if(!device.isScreenOn()){
        device.wakeUpIfNeeded();   
        sleep(quick);
        swipe(800, 2300, 800, 1000,1000);  
        for (var i=0; i < password.length; i++){
            n = text(password[i].toString()).findOne();
            n.parent().click(); 
            sleep(quick);
        }
    }
    sleep(quick);
}

function click_by_pos(a) {
    var ax = a.bounds().centerX();
    var ay = a.bounds().centerY();
    click(ax, ay);
}

function click_and_wait(name, seconds) {
    var b = text(name).findOnce();
    console.log(b);
    if (b) {
        console.log("click " + name);
        click_by_pos(b);
        sleep(seconds);
    }
}

function desc_and_wait(name, seconds) {
    var b = desc(name).findOnce();
    console.log(b);
    if (b) {
        console.log("click " + name);
        click_by_pos(b);
        sleep(seconds);
    }
}


function roll_back() {
    // 1176 * 2160
    var t = 5;
    while(t--) {
        gesture(800, [0, 1000], [400, 1000]);
        sleep(quick);
    }
    sleep(quick);
}

function up_and_wait(seconds) {
    scrollUp();
    sleep(seconds);
}

function home_and_wait(seconds) {
    home(); sleep(seconds);
}

function launch_and_wait(name, seconds) {
    launchApp(name);
    sleep(seconds);
}

function check_in() {
    home_and_wait(short);
    launch_and_wait("企业微信", short);
    click_and_wait("消息", short);
    up_and_wait(short);
    click_and_wait("学生健康申报", short);
    click_and_wait("健康申报", mid);
    click_and_wait("下一步", long);
    click_and_wait("提交", long);
    click_and_wait("确定", long);
    get_pic();
    roll_back();
}

function get_pic() {
    var thread1 = threads.start(function () {
        sleep(short);
        click(786, 2270);
        console.log("down");
    })
    var thread2 = threads.start(function() {
        if (!requestScreenCapture()) {
            toast("请求截图失败");
        };
        console.log("two");
    })
    thread1.join();
    thread2.join();
    sleep(short);
    captureScreen("/sdcard/DCIM/Camera/img.png");
    sleep(short);
}

function send_pic() {
    home_and_wait(short);
    launch_and_wait("微信", short);
    up_and_wait(short);
    click_and_wait(target, short);
    desc_and_wait("更多功能按钮，已折叠", short);
    click_and_wait("相册", short);
    click(200, 300); sleep(short);
    click(900, 150); sleep(short);
    roll_back();
}

function process() {
    unlock(passwd);
    check_in();
    send_pic();
}

process();