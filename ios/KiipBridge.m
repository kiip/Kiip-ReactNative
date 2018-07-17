//
//  KiipBridge.m
//  KiipRCT
//
//  Created by Daniel Yoo on 7/8/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

//#import "KiipBridge.h"
////#import <KiipSDK/KiipSDK.h>
////#import <React/RCTLog.h>
//
//@interface RCT_EXTERN_MODULE(KiipInterstitial, NSObject)
////RCT_EXPORT_METHOD(saveMoment: String)
////RCT_EXTERN_METHOD(show)
//
//@end

//@implementation KiipBridge {
//  KPPoptart *mPoptart;
//  RCTPromiseResolveBlock _requestAdResolve;
//  RCTPromiseRejectBlock _requestAdReject;
//  BOOL hasListeners;
//}
//
//
//
//
//RCT_EXPORT_MODULE();
//
//- (NSDictionary *)constantsToExport {
//  return @{@"greeting": @"React Native Kiip Sample App"};
//}
//
////- (dispatch_queue_t)methodQueue
////{
////  return dispatch_get_main_queue();
////}
////
////+ (BOOL)requiresMainQueueSetup
////{
////  return NO;
////}
//
//
//RCT_EXPORT_METHOD(squareMe:(NSString *)number:(RCTResponseSenderBlock)callback)
//{
//  int x = [number intValue];
//  callback(@[[NSNull null], [NSNumber numberWithInt:(x * x)]]);
//}
//
//RCT_EXPORT_METHOD(kiipInit:(NSString *)appID andSecret:(NSString *)secret)
//{
//  [Kiip initWithAppKey:appID andSecret:secret];
//  RCTLogInfo(@"Initialized Kiip SDK");
//}
//
//
//RCT_EXPORT_METHOD(kiipSaveMoment:(NSString *)momentID rejecter:(RCTPromiseRejectBlock)reject)
//{
//  void (^handler)(KPPoptart *, NSError *) = ^(KPPoptart *poptart, NSError *error) {
//    if (error) {
//      reject(@"E_AD_NOT_READY", @"Ad error.", nil);
//    }
//
//
//    poptart.delegate = self;
//    if (poptart.modal) {
//      poptart.modal.delegate = self;
//    }
//
//    [poptart show];
//  };
//  [[Kiip sharedInstance] saveMoment:momentID withCompletionHandler:handler];
//  RCTLogInfo(@"calling kiipSaveMoment");
//}
//
//
//
//@end
