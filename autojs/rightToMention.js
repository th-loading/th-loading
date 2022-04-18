//rightToMention.js
module.exports = (function() {
    var mModule = {}
    
    //增加方法.
    mModule.test1 = {}
    mModule.test2 = function() {}

    main();
    function main() {
        limit();
    }

    function limit() {
        importClass(com.stardust.autojs.core.accessibility.AccessibilityBridge.WindowFilter);
        let bridge = runtime.accessibilityBridge;
        let bridgeField = runtime.getClass().getDeclaredField("accessibilityBridge");
        let configField = bridgeField.getType().getDeclaredField("mConfig");
        configField.setAccessible(true);
        configField.set(bridge, configField.getType().newInstance());
        bridge.setWindowFilter(new JavaAdapter(AccessibilityBridge$WindowFilter, {
            filter : function (info) {
                return true;
            }
        }));
    }
    return mModule;
})()
