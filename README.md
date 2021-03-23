### Welcome

This repository was created as an attachment to a Github issue on the `react-native-video` repo, aiming to make an error that I've been experiencing easier to reproduce.

### Error description
Can't play a video from a m3u file on tvOS 11.4 or Android TV.

## Steps to reproduce
1. Clone this repo
2. `npm install`
3. `cd ios && pod install`
4. Open this project with **tvOS 11.4** or Android TV

After following these steps, you will probably notice that the video does not play on Android TV, but on tvOS 11.4 and the app crashes with the following error output (taken from Xcode console):

Any help would be very appreciated. Thank you.

```
AudioObjectRemovePropertyListener: no object with given ID 0
2021-03-23 16:31:22.020553-0300 TVTest-tvOS[97804:1120416] [AudioHAL_Client] HALB_IOBufferManager.cpp:226:GetIOBuffer:  HALB_IOBufferManager::GetIOBuffer: the stream index is out of range
2021-03-23 16:31:22.020760-0300 TVTest-tvOS[97804:1120416] [AudioHAL_Client] HALB_IOBufferManager.cpp:226:GetIOBuffer:  HALB_IOBufferManager::GetIOBuffer: the stream index is out of range
2021-03-23 16:31:22.054546-0300 TVTest-tvOS[97804:1120416] [aqme] 254: AQDefaultDevice (1): output stream 0: null buffer
2021-03-23 16:31:22.054852-0300 TVTest-tvOS[97804:1120416] [aqme] 1433: EXCEPTION thrown (-50): -
2021-03-23 16:31:36.977185-0300 TVTest-tvOS[97804:1120354] [aqme] 177: timed out after 15.000s (0 1); suspension count=0 (IOSuspensions: )
2021-03-23 16:31:36.977745-0300 TVTest-tvOS[97804:1120354] 239: CA_UISoundClientBase::StartPlaying: AddRunningClient failed (status = -66681).
2021-03-23 16:31:36.987513-0300 TVTest-tvOS[97804:1120279] -[AVPlayer setPreventsDisplaySleepDuringVideoPlayback:]: unrecognized selector sent to instance 0x60000001c910
2021-03-23 16:31:37.001498-0300 TVTest-tvOS[97804:1120279] *** Terminating app due to uncaught exception 'NSInvalidArgumentException', reason: '-[AVPlayer setPreventsDisplaySleepDuringVideoPlayback:]: unrecognized selector sent to instance 0x60000001c910'
*** First throw call stack:
(
	0   CoreFoundation                      0x000000010d074a56 __exceptionPreprocess + 294
	1   libobjc.A.dylib                     0x000000010c13e031 objc_exception_throw + 48
	2   CoreFoundation                      0x000000010d0f5be4 -[NSObject(NSObject) doesNotRecognizeSelector:] + 132
	3   CoreFoundation                      0x000000010cff7108 ___forwarding___ + 1432
	4   CoreFoundation                      0x000000010cff6ae8 _CF_forwarding_prep_0 + 120
	5   TVTest-tvOS                         0x000000010783fdd7 -[RCTVideo applyModifiers] + 279
	6   TVTest-tvOS                         0x000000010783c307 -[RCTVideo observeValueForKeyPath:ofObject:change:context:] + 6679
	7   Foundation                          0x000000010bb5a6f0 NSKeyValueNotifyObserver + 349
	8   Foundation                          0x000000010bb59fa7 NSKeyValueDidChange + 483
	9   Foundation                          0x000000010bc38272 NSKeyValueDidChangeWithPerThreadPendingNotifications + 148
	10  AVFoundation                        0x000000010ca46668 -[AVPlayerItem didChangeValueForKey:] + 47
	11  AVFoundation                        0x000000010ca5d5da __avplayeritem_fpItemNotificationCallback_block_invoke + 1967
	12  libdispatch.dylib                   0x00000001111217ab _dispatch_call_block_and_release + 12
	13  libdispatch.dylib                   0x00000001111227ec _dispatch_client_callout + 8
	14  libdispatch.dylib                   0x000000011112d8cf _dispatch_main_queue_callback_4CF + 628
	15  CoreFoundation                      0x000000010d037509 __CFRUNLOOP_IS_SERVICING_THE_MAIN_DISPATCH_QUEUE__ + 9
	16  CoreFoundation                      0x000000010cffb716 __CFRunLoopRun + 2342
	17  CoreFoundation                      0x000000010cffab7b CFRunLoopRunSpecific + 635
	18  GraphicsServices                    0x00000001135d8a73 GSEventRunModal + 62
	19  UIKit                               0x000000010e7a5454 UIApplicationMain + 159
	20  TVTest-tvOS                         0x0000000106e60370 main + 112
	21  libdyld.dylib                       0x00000001112bed99 start + 1
)
libc++abi.dylib: terminating with uncaught exception of type NSException
*** Terminating app due to uncaught exception 'NSInvalidArgumentException', reason: '-[AVPlayer setPreventsDisplaySleepDuringVideoPlayback:]: unrecognized selector sent to instance 0x60000001c910'
terminating with uncaught exception of type NSException
CoreSimulator 732.18.6 - Device: Apple TV 4K (at 1080p) (E4B1B2BC-F2B6-45FE-B463-09BE75A7D03A) - Runtime: tvOS 11.4 (15L576) - DeviceType: Apple TV 4K (at 1080p)
(lldb) 
```
