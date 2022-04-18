
require("rightToMention");

launchApp("微信");

function send_text() {
    sleep(1000);
    className("EditText").findOnce().click()
    sleep(1000);
    className("EditText").findOnce().setText("test");
    sleep(1000);
    text("发送").click();
}

function start_chat(name) {

    var a = text(name).findOnce();
    if (a) {
        let ax = a.bounds().centerX();
        let ay = a.bounds().centerY();
        click(ax, ay);
        setInterval(send_text, 5000);
    }
}

start_chat("th");


// text("我").waitFor();

// var textArray = ["通讯录", "发现", "我"]
// for (let i of textArray) {
//     sleep(1000);
//     click(i);
// }


