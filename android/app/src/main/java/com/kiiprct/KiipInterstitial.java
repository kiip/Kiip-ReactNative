package com.kiiprct;

import android.app.Activity;
import android.app.Application;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import me.kiip.sdk.Kiip;
import me.kiip.sdk.Modal;
import me.kiip.sdk.Poptart;

public class KiipInterstitial extends KiipModule implements Kiip.OnContentListener, Modal.OnShowListener, Modal.OnDismissListener, Modal.WebViewListener{
    private static final String TAG = KiipInterstitial.class.getSimpleName();
    private Poptart mPoptart;

    public KiipInterstitial(ReactApplicationContext reactContext) {
        super(reactContext);
    }


    @ReactMethod
    public void saveMoment(String moment) {
        Kiip.getInstance().saveMoment(moment, new Kiip.Callback() {
            @Override
            public void onFailed(Kiip kiip, Exception e) {
                Log.d(TAG, "failed: " + e.toString());
                log("Kiip failed to load ad");
            }

            @Override
            public void onFinished(Kiip kiip, final Poptart poptart) {
                if (poptart == null) {
                    Log.d(TAG, "No ad to display");
                    log("No ad to display");
                    return;
                }
                log("Ad is waiting to be shown");
                mPoptart = poptart;
                Modal modal = mPoptart.getModal();
                modal.setOnDismissListener(KiipInterstitial.this);
                modal.setOnShowListener(KiipInterstitial.this);
                modal.setWebViewListener(KiipInterstitial.this);
            }
        });
        Log.d(TAG, "called save moment");
    }

    @ReactMethod
    public void show() {
        if (mPoptart == null) {
            log("No ad to display");
            return;
        }

        getCurrentActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                mPoptart.show(getCurrentActivity());
                mPoptart = null;
            }
        });
    }

    @Override
    public void onContent(String s, int i, String s1, String s2) {
        Log.d(TAG, "onContent received amount= " + i);
    }

    @Override
    public void onDismiss(Modal modal) {
        log("Ad Dismissed" );
    }

    @Override
    public void onShow(Modal modal) {
        log("Ad Showing" );
    }

    @Override
    public void onWebViewOpen() {
        log("Showing Redirected Webpage" );
    }

    @Override
    public void onWebViewDismiss() {
        log("Closed Redirected Webpage" );
    }
}
