package com.kiiprct;

import android.content.DialogInterface;
import android.graphics.Color;
import android.util.Log;
import android.view.View;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import me.kiip.sdk.Kiip;
import me.kiip.sdk.KiipNativeRewardView;
import me.kiip.sdk.Poptart;

public class KiipNativeView extends SimpleViewManager<KiipNativeRewardView> {
    private static final String TAG = KiipNativeView.class.getSimpleName();
    public static final String REACT_CLASS = "KiipNativeRewardView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected KiipNativeRewardView createViewInstance(ThemedReactContext reactContext) {
        return new KiipNativeRewardView(reactContext);
    }

    @ReactProp(name = "moment")
    public void callMoment(final KiipNativeRewardView view, String moment) {
        Kiip.getInstance().saveMoment(moment, new Kiip.Callback() {
            @Override
            public void onFailed(Kiip kiip, Exception e) {
                view.setVisibility(View.GONE);
                Log.d(TAG, "failed: " + e.toString());
            }

            @Override
            public void onFinished(Kiip kiip, final Poptart poptart) {
                if (poptart != null) {
                    Log.d(TAG, "display");
                    poptart.showNativeReward(view);
                }
            }
        });
    }

}
