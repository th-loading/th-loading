require("rightToMention");

auto.waitFor();

var long = 12000;
var mid = 6000;
var short = 3000;
var quick = 1500;
var target = "th";
var passwd  = "asdads";
// 2560 * 1600

function unlock(password){ 
    device.wakeUpIfNeeded();
    console.log("wake up");
    device.keepScreenOn(6e5);
    sleep(short);
    gesture(800, [1000, 1400], [1000, 800]);
    console.log("up");
    var t = id("passwordEntry").findOnce();
    if (t) {
        t.setText(password);
        console.log("set text");
    }
    else {
        console.log("not found");
    }
    sleep(1e3);
}


function click_and_wait(name, seconds) {
    var b = text(name).findOnce();
    console.log(b);
    if (b) {
        console.log("click " + name);
        if (!try_to_click(b)) {
            console.log("id false");
            return false;
        }
        sleep(seconds);
        return true;
    }
    else {
        return false;
    }
}

function try_to_click(b) {
    var last = b;
    var cnt = 0;
    if (b.id() && b.id().slice(-1) == "_") {
        return false;
    }
    while (b && cnt < 6) {
        if (b.clickable()) {
            console.log("click parent " + String(cnt));
            b.click();
            return true;
        }
        b = b.parent();
        cnt++;
    }
    console.log("click by pos");
    last.clickCenter();
    return true;
}

function desc_and_wait(name, seconds) {
    var b = desc(name).findOnce();
    console.log(b);
    if (b) {
        console.log("click " + name);
        if (!try_to_click(b)) {
            console.log("id false");
            return;
        }
        sleep(seconds);
    }
}

function pos_and_wait(x, y, seconds) {
    click(x, y);
    console.log("click " + x + " " + y);
    sleep(seconds);
}

function scorll_until_find(name, seconds) {
    if (click_and_wait(name, seconds)) return;
    for (let i = 0; i < 5; i++) {
        scrollUp(0);
        if (click_and_wait(name, seconds)) return;
        sleep(seconds);
    }
    for (let i = 0; i < 5; i++) {
        scrollDown(0);
        if (click_and_wait(name, seconds)) return;
        sleep(seconds);
    }
}

function roll_back() {
    
    // 1176 * 2160
    for (let t = 0; t < 5; t++) {
        sleep(quick);
        gesture(800, [0, 1000], [400, 1000]);
    }
    sleep(quick);
    console.log("roll back");

}

function up_and_wait(seconds) {
    scrollUp();
    console.log("scroll up");
    sleep(seconds);
}

function home_and_wait(seconds) {
    home();
    console.log("home");
    sleep(seconds);
}

function launch_and_rollback(name, seconds) {
    launchApp(name);
    console.log("launch " + name);
    roll_back();
    launchApp(name);
    console.log("relaunch " + name);
    sleep(seconds);    
}

function capture_and_wait(path, seconds) {
    sleep(seconds);
    captureScreen(path);
    console.log("capture " + path);
    sleep(seconds);
}

function wait_until_nxt(nxt, seconds) {
    var max_try = 6;
    while(text(nxt).findOnce() == null && max_try > 0) {
        sleep(seconds);
        console.log("wait " + nxt);
        max_try--;
    }
    if (text(nxt).findOnce() == null) {
        console.log("not found");
        return false;
    }
    else {
        return true;
    }
}

function check_in() {
    home_and_wait(short);
    get_pic_permission();
    launch_and_rollback("企业微信", short);
    click_and_wait("消息", short);
    up_and_wait(short);
    click_and_wait("学生健康申报", mid);
    click_and_wait("健康申报", long);
    if (wait_until_nxt("下一步", mid) == false) {
        return false;
    }
    click_and_wait("下一步", long);
    if (wait_until_nxt("提交", mid) == false) {
        return false;
    }
    click_and_wait("提交", long);    
    if (wait_until_nxt("确定", mid) == false) {
        return false;
    }
    capture_and_wait("/sdcard/Pictures/Screenshots/img.png", mid);
    launch_and_rollback("文件管理", short);
    click_and_wait("确定", long);
}

function get_pic_permission() {
    var thread1 = threads.start(function () {
        sleep(mid);
        click_and_wait("允许", 3e3);
        console.log("check");
    });
    var thread2 = threads.start(function() {
        if (!requestScreenCapture(false)) {
            console.log("请求截图失败");
        }
        console.log("done");
    });
    thread1.join();
    thread2.join();
}

function send_pic() {
    home_and_wait(short);
    launch_and_rollback("微信", short);
    up_and_wait(short);
    scorll_until_find(target, short);

    desc_and_wait("更多功能按钮，已折叠", short);
    click_and_wait("相册", short);
    // 选图片
    pos_and_wait(600, 200, short);
    // 发送
    pos_and_wait(2400, 100, short);
}

function process() {
    unlock(passwd);
    if (check_in() == false) {
        check_in();
    }
    sleep(long); 
    send_pic();
    device.cancelKeepingAwake();
}

process();


// var b = text("th").findOnce();
// var c = b.id().slice(-1);
// console.log(c != "g")


// get_pic_permission();
// capture_and_wait("/sdcard/Pictures/Screenshots/ccmg.png", mid);

// send_pic()