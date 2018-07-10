# Kiip iOS SDK

Supported platforms: iOS 9.3+
Compiled with support for 64-bit.

## Public interfaces

* Kiip.h
* KPPoptart.h
* KPNotification.h
* KPModal.h
* KPNotificationView.h
* KPNativeRewardView.h
* KPTableView.h

## Resources

* KiipSDKResources.bundle
* kp_activity_indicator.png
* kp_activity_indicator@2x.png
* kp_webview_o_button.png
* kp_webview_o_button@2x.png
* kp_webview_x_button.png
* kp_webview_x_button@2x.png

## Required Libraries

* CoreTelephony.framework
* QuartzCore.framework
* SystemConfiguration.framework
* AdSupport.framework
* MediaPlayer.framework
* AVFoundation.framework
* CoreMotion.framework
* GLKit.framework
* KIIPMoatMobileAppKit.framework
* XIDLibrary.framework

## Optional Libraries

* CoreLocation.framework

## Instructions

1. Drag-drop `KiipSDK.framework`, `KIIPMoatMobileAppKit.framework`, `XIDLibrary.framework` and `KiipSDKResources.bundle` into your XCode project.
2. In `Build Phases`, verify that `KiipSDK.framework`, `KIIPMoatMobileAppKit.framework`, and `XIDLibrary.framework` are in the `Link Binary with Libraries`
and the `KiipSDKResources.bundle` in `Copy Bundle Resources` section
3. Add the required libraries to your project
4. Go to app settings and click the `Build Settings` tab, and navigate to `Build Options` and change `Always Embed Swift Standard Libraries` to Yes.
5. Go to the `General` tab, and navigate to `Embedded Binaries` and add the `XIDLibrary.framework`.
6. Use `#import <KiipSDK/KiipSDK.h>`

## Distribute your app

When you are ready to upload your app to iTunes, you will need to remove build architectures that are not supported by the App Store. Failure to do so will result in an application submission rejection.

You can remove the unsupported build architectures (that are automatically included by XCode) by adding a new run script.

-  Go to your project TARGET -> Build phases.
-  Click on “+” icon and click on “New Run Script Phase”
-  Copy script below and paste it into “New Run Script Phase”

***************************************************************************************
======================================Start of Script==================================

echo "Target architectures: $ARCHS"

APP_PATH="${TARGET_BUILD_DIR}/${WRAPPER_NAME}"

find "$APP_PATH" -name '*.framework' -type d | while read -r FRAMEWORK
do
FRAMEWORK_EXECUTABLE_NAME=$(defaults read "$FRAMEWORK/Info.plist" CFBundleExecutable)
FRAMEWORK_EXECUTABLE_PATH="$FRAMEWORK/$FRAMEWORK_EXECUTABLE_NAME"
echo "Executable is $FRAMEWORK_EXECUTABLE_PATH"
echo $(lipo -info "$FRAMEWORK_EXECUTABLE_PATH")

FRAMEWORK_TMP_PATH="$FRAMEWORK_EXECUTABLE_PATH-tmp"

# remove simulator's archs if location is not simulator's directory
case "${TARGET_BUILD_DIR}" in
*"iphonesimulator")
    echo "No need to remove archs"
    ;;
*)
    if $(lipo "$FRAMEWORK_EXECUTABLE_PATH" -verify_arch "i386") ; then
    lipo -output "$FRAMEWORK_TMP_PATH" -remove "i386" "$FRAMEWORK_EXECUTABLE_PATH"
    echo "i386 architecture removed"
    rm "$FRAMEWORK_EXECUTABLE_PATH"
    mv "$FRAMEWORK_TMP_PATH" "$FRAMEWORK_EXECUTABLE_PATH"
    fi
    if $(lipo "$FRAMEWORK_EXECUTABLE_PATH" -verify_arch "x86_64") ; then
    lipo -output "$FRAMEWORK_TMP_PATH" -remove "x86_64" "$FRAMEWORK_EXECUTABLE_PATH"
    echo "x86_64 architecture removed"
    rm "$FRAMEWORK_EXECUTABLE_PATH"
    mv "$FRAMEWORK_TMP_PATH" "$FRAMEWORK_EXECUTABLE_PATH"
    fi
    ;;
esac

echo "Completed for executable $FRAMEWORK_EXECUTABLE_PATH"
echo $(lipo -info "$FRAMEWORK_EXECUTABLE_PATH")

done

======================================End of Script====================================
***************************************************************************************



### Location (Optional)

Kiip has the ability to automatically retrieve the user's location, but the application must first
request permission for location updates as well as include CoreLocation.framework

To request permission, you must add the following code:

CLLocationManager *lm = [[CLLocationManager alloc] init];
[lm startUpdatingLocation];
[lm stopUpdatingLocation];


## Support

For integration and reference, see our docs at http://docs.kiip.me
