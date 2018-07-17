/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <KiipSDK/KiipSDK.h>
#import <React/RCTLog.h>

@implementation AppDelegate
NSString* const appID = @"YOUR_APP_KEY";
NSString* const secret = @"YOUR_APP_SECRET";

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [Kiip initWithAppKey:appID andSecret:secret];
  [[Kiip sharedInstance] setTestMode:YES];
  [[Kiip sharedInstance] setDelegate:self];
  
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"KiipRCT"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}


- (void) kiip:(Kiip *)kiip didStartSessionWithPoptart:(KPPoptart *)poptart error:(NSError *)error {
  RCTLogInfo(@"Kiip session started");
  if (error) {
    RCTLogInfo(@"Error happened during session start");
  }
}

- (void) kiip:(Kiip *)kiip didEndSessionWithError:(NSError *)error {
  RCTLogInfo(@"Kiip session ended");
  if (error) {
    RCTLogInfo(@"Error happened during session end");
  }
}

- (void)kiip:(Kiip *)kiip didReceiveContent:(NSString *)content quantity:(int)quantity transactionId:(NSString *)transactionId signature:(NSString *)signature {
  RCTLogInfo(@"%@", [NSString stringWithFormat:@"Content: %@ Quantity: %d", content, quantity]);
}

@end
