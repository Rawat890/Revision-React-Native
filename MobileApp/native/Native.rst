#import "NotificationModule.h"
#import <UserNotifications/UserNotifications.h>

@implementation NotificationModule

RCT_EXPORT_MODULE();

// Show notification immediately
RCT_EXPORT_METHOD(showNotification:(NSString *)title message:(NSString *)message)
{
  UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];

  UNMutableNotificationContent *content = [UNMutableNotificationContent new];
  content.title = title;
  content.body = message;
  content.sound = [UNNotificationSound defaultSound];

  NSString *identifier = [[NSUUID UUID] UUIDString];
  UNNotificationRequest *request = [UNNotificationRequest requestWithIdentifier:identifier content:content trigger:nil];

  [center addNotificationRequest:request withCompletionHandler:^(NSError * _Nullable error) {
    if (error != nil) {
      NSLog(@"❌ Error adding immediate notification: %@", error.localizedDescription);
    }
  }];
}

// Schedule notification after a delay (in seconds)
RCT_EXPORT_METHOD(scheduleNotification:(NSString *)title message:(NSString *)message afterDelay:(double)delay)
{
  UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];

  UNMutableNotificationContent *content = [UNMutableNotificationContent new];
  content.title = title;
  content.body = message;
  content.sound = [UNNotificationSound defaultSound];

  UNTimeIntervalNotificationTrigger *trigger = [UNTimeIntervalNotificationTrigger triggerWithTimeInterval:delay repeats:NO];

  NSString *identifier = [[NSUUID UUID] UUIDString];
  UNNotificationRequest *request = [UNNotificationRequest requestWithIdentifier:identifier content:content trigger:trigger];

  [center addNotificationRequest:request withCompletionHandler:^(NSError * _Nullable error) {
    if (error != nil) {
      NSLog(@"❌ Error adding scheduled notification: %@", error.localizedDescription);
    }
  }];
}

RCT_EXPORT_METHOD(cancelAllNotifications)
{
  UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
  [center removeAllPendingNotificationRequests];
}

@end

Feature	Why It's Used
RCT_EXPORT_MODULE()	- Exposes the native module to JavaScript
RCT_EXPORT_METHOD	- Exposes methods to be callable from JS
UNUserNotificationCenter	- Central manager for scheduling and managing notifications
UNMutableNotificationContent	- Sets what the notification looks/sounds like
UNTimeIntervalNotificationTrigger	- Used to trigger a notification after delay
NSUUID	- Ensures unique notification IDs
removeAllPendingNotificationRequests	- Clears all scheduled (future) notifications