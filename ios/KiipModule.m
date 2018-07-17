//
//  KiipModule.m
//  KiipRCT
//
//  Created by Daniel Yoo on 7/16/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "KiipModule.h"
@implementation KiipModule

- (NSArray<NSString *> *)supportedEvents {
  return @[@"log"];
}

RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(log:(NSString *)message) {
  [self sendEventWithName:@"log"
                     body:message];
}

@end
