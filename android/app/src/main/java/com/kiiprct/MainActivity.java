package com.kiiprct;

import android.util.Log;

import com.facebook.react.ReactActivity;

import me.kiip.sdk.Kiip;
import me.kiip.sdk.Poptart;

public class MainActivity extends ReactActivity {
    private static final String TAG = MainActivity.class.getSimpleName();

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "KiipRCT";
    }

    public void onException(Exception exception) {
        Log.e(TAG, "Exception", exception);
    }

    @Override
    protected void onStart() {
        super.onStart();
        Kiip.getInstance().startSession(new Kiip.Callback() {
            @Override
            public void onFailed(Kiip kiip, Exception exception) {
                Log.e(TAG, "Failed to start session", exception);

                onException(exception);
            }

            @Override
            public void onFinished(Kiip kiip, Poptart poptart) {
                Log.d (TAG, "Kiip session started");
            }
        });
    }

    @Override
    protected void onStop() {
        // Must call endSession in every Activity#onStop.
        Kiip.getInstance().endSession(new Kiip.Callback() {
            @Override
            public void onFailed(Kiip kiip, Exception exception) {
                Log.e(TAG, "Failed to end session", exception);
            }

            @Override
            public void onFinished(Kiip kiip, Poptart poptart) {
                // do nothing
                Log.d (TAG, "Kiip session ended");
            }
        });

        super.onStop();
    }
}
