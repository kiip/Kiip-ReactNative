package com.kiiprct;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.modules.core.DeviceEventManagerModule;

abstract class KiipModule extends ReactContextBaseJavaModule{

    public KiipModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return getClass().getSimpleName();
    }

    void log(String message)
    {
        getReactApplicationContext()
                .getJSModule( DeviceEventManagerModule.RCTDeviceEventEmitter.class )
                .emit( "log", message );
    }
}
