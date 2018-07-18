# Kiip-ReactNative Demo

This is our open source demo application for React Native. You may re-use any code in your own project(s). 
## React Native Setup
Install required node modules with `$ npm install`.

## iOS Setup
1. Go to `ios/` and open the `.xcodeproj` project in Xcode.
1. Download the latest [SDK](http://docs.kiip.me/en/downloads/).

2. Drag-and-drop `KiipSDK.framework` into the root folder of the project.

3. Link the Following Frameworks in Your Project

   - CoreTelephony
   - QuartzCore
   - SystemConfiguration
   - AdSupport
   - MediaPlayer
   - AVFoundation
   - CoreMotion
   - GLKit
   - KIIPMoatMobileAppKit
   - XIDLibrary

3. Initialize and add your Kiip SDK key and secret into the `AppDelegate.m` file (refer the sample project).

## Android Setup

1. Open the project from the `android/` directory and go to your app | build.gradle to add the Kiip dependency.
```
  dependencies {
            compile "me.kiip.sdk:kiip:3.0.0"
  }
```
2. Do a Gradle sync and the project will automatically import the latest version of Kiip SDK via [JCenter](https://bintray.com/kiip/maven/me.kiip.sdk/)
3. Initialize and add your SDK key and secret into your `MainApplication.java` file

## Starting from Scratch?
1. This demo app is built over [`react-native-cli`](https://facebook.github.io/react-native/docs/getting-started).
```
$ npm install -g react-native-cli
$ react-native init YourApp
$ cd YourApp/
```
Your `ios/` and `android/` directories are now setup to integrate native modules from the Kiip SDK.
