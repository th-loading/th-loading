if (!$power_manager.isIgnoringBatteryOptimizations()) {
    console.log("未开启忽略电池优化");
    $power_manager.requestIgnoreBatteryOptimizations();
}

console.log($timers.addDailyTask({
    path: "auto_check_in.js",
    time: new Date(0, 0, 0, 8, 50, 0),
    delay: 0,
    loopTimes: 1,
    interval: 0,
}));


console.log($timers.addDailyTask({
    path: "auto_check_in.js",
    time: new Date(0, 0, 0, 16, 23, 0),
    delay: 0,
    loopTimes: 1,
    interval: 0,
}));