//
//  KiipView.m
//  KiipRCT
//
//  Created by Daniel Yoo on 1/28/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "KiipView.h"

@interface KiipView () 

@end

@implementation KiipView

- (void)setMoment:(NSString*)moment
{
  void (^handler)(KPPoptart *, NSError *) = ^(KPPoptart *poptart, NSError *error) {
    if (error) {
      NSLog(@"%@",[error localizedDescription]);
    } else {
      [poptart showNativeRewardView:self];
    }
  };
  [[Kiip sharedInstance] saveMoment:moment withCompletionHandler:handler];
}

@end
