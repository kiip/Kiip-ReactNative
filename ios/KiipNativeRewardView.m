//
//  KiipNativeView.m
//  KiipRCT
//
//  Created by Daniel Yoo on 1/24/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "KiipNativeRewardView.h"
#import <KiipSDK/KiipSDK.h>
#import "KiipView.h"

@interface KiipNativeRewardView ()
@end

@implementation KiipNativeRewardView

RCT_EXPORT_MODULE()
- (UIView *)view
{
  return [[KiipView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(moment, NSString);

@end
