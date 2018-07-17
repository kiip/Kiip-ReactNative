//
//  KiipInterstitial.m
//  KiipRCT
//
//  Created by Daniel Yoo on 7/16/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "KiipInterstitial.h"
#import <KiipSDK/KiipSDK.h>
#import <React/RCTLog.h>
#import "KiipModule.h"

@interface KiipInterstitial() <KPModalDelegate>

@end

@implementation KiipInterstitial
KPPoptart *mPoptart;

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

- (NSArray<NSString *> *)supportedEvents{
  return @[@"log"];
}

- (void)didDismissModal:(KPModal *)modal {
  [self log:@"Ad dismissed"];
}

- (void)willPresentModal:(KPModal *)modal {
  [self log:@"Ad Showing"];
}


RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(saveMoment:(NSString *)momentID)
{
  void (^handler)(KPPoptart *, NSError *) = ^(KPPoptart *poptart, NSError *error) {
    if (error) {
      [self log:@"Kiip failed to load ad"];
    }
    if (poptart == nil) {
      [self log:@"No ad to display"];
    }
    mPoptart = poptart;
    if (poptart.modal) {
      poptart.modal.delegate = self;
    }
    [self log:@"Ad is waiting to be shown"];
    RCTLogInfo(@"reward saved");
  };
  [[Kiip sharedInstance] saveMoment:momentID withCompletionHandler:handler];
  RCTLogInfo(@"calling kiipSaveMoment");
}


RCT_EXPORT_METHOD(show)
{
  if (mPoptart == nil) {
    [self log:@"No ad to display"];
    return;
  }
  [mPoptart show];
  mPoptart = nil;
}

@end


