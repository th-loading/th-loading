function limit() {
    importClass(com.stardust.autojs.core.accessibility.AccessibilityBridge.WindowFilter);
    let bridge = runtime.accessibilityBridge;
    let bridgeField = runtime.getClass().getDeclaredField("accessibilityBridge");
    let configField = bridgeField.getType().getDeclaredField("mConfig");
    configField.setAccessible(true);
    configField.set(bridge, configField.getType().newInstance());
    bridge.setWindowFilter(new JavaAdapter(AccessibilityBridge$WindowFilter, {
        filter: function (info) {
            return true;
        }
    }));
}

limit();


auto.waitFor();

var long = 12000;
var mid = 6000;
var short = 3000;
var quick = 1500;
var passwd = "666666";
var target = "th";

function unlock(password) {
    if (!device.isScreenOn()) {
        device.wakeUpIfNeeded();
    }
    console.log("wake up");
    device.keepScreenOn(6e5);
    sleep(short);
    swipe(600, 1800, 600, 1000, 1000);
    console.log("swipe");
    for (var i = 0; i < password.length; i++) {
        sleep(quick);
        n = text(password[i].toString()).findOnce();
        if (n) {
            n.parent().click();
            console.log("click " + password[i]);
        }
        console.log("no passwd");
    }
    sleep(quick);
    console.log("unlock");
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

function pos_and_wait(x, y, seconds) {
    click(x, y);
    console.log("click " + x + " " + y);
    sleep(seconds);
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

function check_in() {
    home_and_wait(short);
    launch_and_rollback("企业微信", short);
    click_and_wait("消息", short);
    up_and_wait(short);
    click_and_wait("学生健康申报", mid);
    click_and_wait("健康申报", long);
    click_and_wait("下一步", long);
    click_and_wait("提交", long);
    get_pic_permission();
    capture_and_wait("/sdcard/DCIM/Camera/img.png", short);
    click_and_wait("确定", long);
}

function get_pic_permission() {
    var thread1 = threads.start(function () {
        sleep(mid);
        pos_and_wait(786, 2270, 0);
        console.log("check");
    });
    var thread2 = threads.start(function () {
        if (!requestScreenCapture()) {
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
    click_and_wait(target, short);
    desc_and_wait("更多功能按钮，已折叠", short);
    click_and_wait("相册", short);
    pos_and_wait(200, 300, short);
    pos_and_wait(900, 150, short);
}

function process() {
    unlock(passwd);
    check_in();
    send_pic();
    device.cancelKeepingAwake();
}

// process();

 