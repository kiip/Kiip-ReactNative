//
//  KiipModule.h
//  KiipRCT
//
//  Created by Daniel Yoo on 7/16/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTEventEmitter.h>

@interface KiipModule : RCTEventEmitter
- (void) log:(NSString *)message;
@end
