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
    log("wake up");
    device.keepScreenOn(6e5);
    sleep(short);
    if (text("滑动屏幕或按空格键解锁").findOnce() == null) {
        log("亮屏失败");
    }
    else {
        log("亮屏成功");
    }
    var times = 6;
    while (times > 0 && text("滑动屏幕或按空格键解锁").findOnce() != null) {
        log("unlock " + 7 - times);
        gesture(800, [1000, 1400], [1000, 800]);
        times--;
    }
    log("up");
    var t = id("passwordEntry").findOnce();
    if (t) {
        t.setText(password);
        log("set text");
    }
    else {
        log("not found");
    }
    home_and_wait(short);
    if (desc("浏览器").findOnce() != null) {
        log("解锁成功");
    }
    else {
        log("解锁失败");
    }
    sleep(1e3);
}

function click_and_wait(name, seconds) {
    var b = text(name).findOnce();
    log(b);
    if (b) {
        log("click " + name);
        if (!try_to_click(b)) {
            log("id false");
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
    if ((b && b.id() && b.id().slice(-1) == "_") || !b) {
        return false;
    }
    while (b && cnt < 6) {
        if (b.clickable()) {
            log("click parent " + String(cnt));
            b.click();
            return true;
        }
        b = b.parent();
        cnt++;
    }
    log("click by pos");
    last.clickCenter();
    return true;
}

function desc_and_wait(name, seconds) {
    var b = desc(name).findOnce();
    log(b);
    if (b) {
        log("click " + name);
        if (!try_to_click(b)) {
            log("id false");
            return;
        }
        sleep(seconds);
    }
}

function pos_and_wait(x, y, seconds) {
    click(x, y);
    log("click " + x + " " + y);
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
    log("roll back");

}

function up_and_wait(seconds) {
    scrollUp();
    log("scroll up");
    sleep(seconds);
}

function home_and_wait(seconds) {
    home();
    log("home");
    sleep(seconds);
}

function launch_and_rollback(name, seconds) {
    launchApp(name);
    log("launch " + name);
    roll_back();
    launchApp(name);
    log("relaunch " + name);
    sleep(seconds);    
}

function capture_and_wait(path, seconds) {
    sleep(seconds);
    captureScreen(path);
    log("capture " + path);
    sleep(seconds);
}

function wait_until_nxt(nxt, seconds) {
    var max_try = 6;
    while(text(nxt).findOnce() == null && max_try > 0) {
        sleep(seconds);
        log("wait " + nxt);
        max_try--;
    }
    if (text(nxt).findOnce() == null) {
        log("not found");
        return false;
    }
    else {
        return true;
    }
}

function check_in() {
    home_and_wait(short);
    if (get_pic_permission() == false) {
        return false;
    }
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
    click_and_wait("确定", long);
    try_to_click(id("kk6").findOnce());
    sleep(mid);
}

function get_pic_permission() {
    var sign = 0;
    var thread1 = threads.start(function () {
        log("1");
        sleep(long);
        click_and_wait("允许", 3e3);
        log("check");
    });
    var thread2 = threads.start(function() {
        if (!requestScreenCapture(false)) {
            log("请求截图失败");
            sign = 1;
        }
        log("done");
    });
    thread1.join();
    thread2.join();
    if (sign) return false;
    else return true;
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
    launch_and_rollback("文件管理", short);
    sleep(long); 
    send_pic();
    device.cancelKeepingAwake();
}

process();



// var b = text("th").findOnce();
// var c = b.id().slice(-1);
// log(c != "g")


// get_pic_permission();
// capture_and_wait("/sdcard/Pictures/Screenshots/ccmg.png", mid);

// send_pic()

// home();

