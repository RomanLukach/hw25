2023-02-13 13:14:19:447 [Appium] Welcome to Appium v1.22.3
2023-02-13 13:14:19:449 [Appium] Non-default server args:
2023-02-13 13:14:19:449 [Appium]   address: localhost
2023-02-13 13:14:19:449 [Appium]   basePath: /
2023-02-13 13:14:19:450 [Appium]   logFile: ./reports/appium.log
2023-02-13 13:14:19:450 [Appium]   relaxedSecurityEnabled: true
2023-02-13 13:14:19:479 [Appium] Appium REST http interface listener started on localhost:4723
2023-02-13 13:14:21:353 [HTTP] --> POST /session
2023-02-13 13:14:21:354 [HTTP] {"capabilities":{"alwaysMatch":{"platformName":"Android","appium:deviceName":"emulator-5554","appium:platformVersion":"13.0","appium:orientation":"PORTRAIT","appium:automationName":"UiAutomator2","appium:app":"D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk","appium:appWaitActivity":"com.wdiodemoapp.MainActivity","appium:newCommandTimeout":240,"appium:connectHardwareKeyboard":true},"firstMatch":[{}]},"desiredCapabilities":{"platformName":"Android","appium:deviceName":"emulator-5554","appium:platformVersion":"13.0","appium:orientation":"PORTRAIT","appium:automationName":"UiAutomator2","appium:app":"D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk","appium:appWaitActivity":"com.wdiodemoapp.MainActivity","appium:newCommandTimeout":240,"appium:connectHardwareKeyboard":true}}
2023-02-13 13:14:21:355 [W3C] Calling AppiumDriver.createSession() with args: [{"platformName":"Android","appium:deviceName":"emulator-5554","appium:platformVersion":"13.0","appium:orientation":"PORTRAIT","appium:automationName":"UiAutomator2","appium:app":"D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk","appium:appWaitActivity":"com.wdiodemoapp.MainActivity","appium:newCommandTimeout":240,"appium:connectHardwareKeyboard":true},null,{"alwaysMatch":{"platformName":"Android","appium:deviceName":"emulator-5554","appium:platformVersion":"13.0","appium:orientation":"PORTRAIT","appium:automationName":"UiAutomator2","appium:app":"D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk","appium:appWaitActivity":"com.wdiodemoapp.MainActivity","appium:newCommandTimeout":240,"appium:connectHardwareKeyboard":true},"firstMatch":[{}]}]
2023-02-13 13:14:21:356 [BaseDriver] Event 'newSessionRequested' logged at 1676294061356 (16:14:21 GMT+0300 (Moscow Standard Time))
2023-02-13 13:14:21:621 [Appium] Appium v1.22.3 creating new AndroidUiautomator2Driver (v1.70.1) session
2023-02-13 13:14:21:621 [Appium] Applying relaxed security to 'AndroidUiautomator2Driver' as per server command line argument. All insecure features will be enabled unless explicitly disabled by --deny-insecure
2023-02-13 13:14:21:624 [BaseDriver] W3C capabilities and MJSONWP desired capabilities were provided
2023-02-13 13:14:21:624 [BaseDriver] Creating session with W3C capabilities: {
2023-02-13 13:14:21:624 [BaseDriver]   "alwaysMatch": {
2023-02-13 13:14:21:625 [BaseDriver]     "platformName": "Android",
2023-02-13 13:14:21:625 [BaseDriver]     "appium:deviceName": "emulator-5554",
2023-02-13 13:14:21:625 [BaseDriver]     "appium:platformVersion": "13.0",
2023-02-13 13:14:21:625 [BaseDriver]     "appium:orientation": "PORTRAIT",
2023-02-13 13:14:21:625 [BaseDriver]     "appium:automationName": "UiAutomator2",
2023-02-13 13:14:21:626 [BaseDriver]     "appium:app": "D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk",
2023-02-13 13:14:21:626 [BaseDriver]     "appium:appWaitActivity": "com.wdiodemoapp.MainActivity",
2023-02-13 13:14:21:626 [BaseDriver]     "appium:newCommandTimeout": 240,
2023-02-13 13:14:21:626 [BaseDriver]     "appium:connectHardwareKeyboard": true
2023-02-13 13:14:21:626 [BaseDriver]   },
2023-02-13 13:14:21:626 [BaseDriver]   "firstMatch": [
2023-02-13 13:14:21:626 [BaseDriver]     {}
2023-02-13 13:14:21:626 [BaseDriver]   ]
2023-02-13 13:14:21:626 [BaseDriver] }
2023-02-13 13:14:21:633 [BaseDriver] The following capabilities were provided, but are not recognized by Appium:
2023-02-13 13:14:21:633 [BaseDriver]   connectHardwareKeyboard
2023-02-13 13:14:21:634 [BaseDriver] Session created with session id: 4d3c5a62-0ece-46de-8543-7b3687cc7ef6
2023-02-13 13:14:21:637 [BaseDriver] Using local app 'D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\apps\Android-NativeDemoApp-0.4.0.apk'
2023-02-13 13:14:21:637 [UiAutomator2] Checking whether app is actually present
2023-02-13 13:14:21:659 [ADB] Found 2 'build-tools' folders under 'C:\Users\Roman\AppData\Local\Android\Sdk' (newest first):
2023-02-13 13:14:21:660 [ADB]     C:/Users/Roman/AppData/Local/Android/Sdk/build-tools/34.0.0-rc1
2023-02-13 13:14:21:660 [ADB]     C:/Users/Roman/AppData/Local/Android/Sdk/build-tools/33.0.1
2023-02-13 13:14:21:660 [ADB] Using 'adb.exe' from 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe'
2023-02-13 13:14:21:661 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 start-server'
2023-02-13 13:14:21:685 [AndroidDriver] Retrieving device list
2023-02-13 13:14:21:685 [ADB] Trying to find a connected android device
2023-02-13 13:14:21:685 [ADB] Getting connected devices
2023-02-13 13:14:21:708 [ADB] Connected devices: [{"udid":"emulator-5554","state":"device"}]
2023-02-13 13:14:21:709 [AndroidDriver] Looking for a device with Android '13.0.0'
2023-02-13 13:14:21:709 [ADB] Setting device id to emulator-5554
2023-02-13 13:14:21:709 [ADB] Getting device platform version
2023-02-13 13:14:21:709 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell getprop ro.build.version.release'
2023-02-13 13:14:21:835 [ADB] Current device property 'ro.build.version.release': 13
2023-02-13 13:14:21:835 [AndroidDriver] Using device: emulator-5554
2023-02-13 13:14:21:836 [ADB] Using 'adb.exe' from 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe'
2023-02-13 13:14:21:837 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 start-server'
2023-02-13 13:14:21:858 [ADB] Setting device id to emulator-5554
2023-02-13 13:14:21:859 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell getprop ro.build.version.sdk'
2023-02-13 13:14:21:908 [ADB] Current device property 'ro.build.version.sdk': 33
2023-02-13 13:14:21:909 [ADB] Getting device platform version
2023-02-13 13:14:21:909 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell getprop ro.build.version.release'
2023-02-13 13:14:21:944 [ADB] Current device property 'ro.build.version.release': 13
2023-02-13 13:14:21:944 [ADB] Device API level: 33
2023-02-13 13:14:21:945 [UiAutomator2] Relaxing hidden api policy
2023-02-13 13:14:21:945 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell 'settings put global hidden_api_policy_pre_p_apps 1;settings put global hidden_api_policy_p_apps 1;settings put global hidden_api_policy 1''
2023-02-13 13:14:22:185 [AndroidDriver] Parsing package and activity from app manifest
2023-02-13 13:14:22:265 [ADB] Package name: 'com.wdiodemoapp'
2023-02-13 13:14:22:265 [ADB] Main activity name: 'com.wdiodemoapp.SplashActivity'
2023-02-13 13:14:22:265 [AndroidDriver] Parsed package and activity are: com.wdiodemoapp/com.wdiodemoapp.SplashActivity
2023-02-13 13:14:22:266 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 wait-for-device'
2023-02-13 13:14:22:289 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell echo ping'
2023-02-13 13:14:22:326 [AndroidDriver] Pushing settings apk to device...
2023-02-13 13:14:22:326 [ADB] Getting install status for io.appium.settings
2023-02-13 13:14:22:327 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell dumpsys package io.appium.settings'
2023-02-13 13:14:22:377 [ADB] 'io.appium.settings' is not installed
2023-02-13 13:14:22:377 [ADB] App 'C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\io.appium.settings\apks\settings_apk-debug.apk' is not installed
2023-02-13 13:14:22:377 [ADB] Installing 'C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\io.appium.settings\apks\settings_apk-debug.apk'
2023-02-13 13:14:22:378 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 help'
2023-02-13 13:14:22:399 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 features'
2023-02-13 13:14:22:419 [ADB] The application at 'C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\io.appium.settings\apks\settings_apk-debug.apk' will not be cached, because the device under test has confirmed the support of streamed installs
2023-02-13 13:14:22:419 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 install -g C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\io.appium.settings\apks\settings_apk-debug.apk'
2023-02-13 13:14:25:804 [ADB] The installation of 'settings_apk-debug.apk' took 3385ms
2023-02-13 13:14:25:804 [ADB] Install command stdout: Performing Streamed Install
2023-02-13 13:14:25:804 [ADB] Success
2023-02-13 13:14:25:805 [ADB] Getting IDs of all 'io.appium.settings' processes
2023-02-13 13:14:25:805 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell 'pgrep --help; echo $?''
2023-02-13 13:14:25:886 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell pgrep -f \(\[\[:blank:\]\]\|\^\)io\.appium\.settings\(\[\[:blank:\]\]\|\$\)'
2023-02-13 13:14:25:988 [ADB] Getting IDs of all 'io.appium.settings' processes
2023-02-13 13:14:25:989 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell pgrep -f \(\[\[:blank:\]\]\|\^\)io\.appium\.settings\(\[\[:blank:\]\]\|\$\)'
2023-02-13 13:14:26:043 [ADB] Starting Appium Settings app
2023-02-13 13:14:26:044 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell am start -n io.appium.settings/.Settings -a android.intent.action.MAIN -c android.intent.category.LAUNCHER'
2023-02-13 13:14:26:105 [ADB] Getting IDs of all 'io.appium.settings' processes
2023-02-13 13:14:26:105 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell pgrep -f \(\[\[:blank:\]\]\|\^\)io\.appium\.settings\(\[\[:blank:\]\]\|\$\)'
2023-02-13 13:14:26:489 [ADB] Getting IDs of all 'io.appium.settings' processes
2023-02-13 13:14:26:489 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell pgrep -f \(\[\[:blank:\]\]\|\^\)io\.appium\.settings\(\[\[:blank:\]\]\|\$\)'
2023-02-13 13:14:26:588 [Logcat] Starting logs capture with command: C:\\Users\\Roman\\AppData\\Local\\Android\\Sdk\\platform-tools\\adb.exe -P 5037 -s emulator-5554 logcat -v threadtime
2023-02-13 13:14:26:704 [UiAutomator2] Forwarding UiAutomator2 Server port 6790 to local port 8200
2023-02-13 13:14:26:705 [ADB] Forwarding system: 8200 to device: 6790
2023-02-13 13:14:26:705 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 forward tcp:8200 tcp:6790'
2023-02-13 13:14:26:728 [ADB] Getting install status for io.appium.uiautomator2.server
2023-02-13 13:14:26:728 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell dumpsys package io.appium.uiautomator2.server'
2023-02-13 13:14:26:799 [ADB] 'io.appium.uiautomator2.server' is not installed
2023-02-13 13:14:26:799 [ADB] App 'C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-uiautomator2-server\apks\appium-uiautomator2-server-v4.27.0.apk' is not installed
2023-02-13 13:14:26:799 [UiAutomator2] io.appium.uiautomator2.server installation state: notInstalled
2023-02-13 13:14:26:800 [ADB] Checking app cert for C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-uiautomator2-server\apks\appium-uiautomator2-server-v4.27.0.apk
2023-02-13 13:14:27:143 [ADB] Using 'apksigner.jar' from 'C:\Users\Roman\AppData\Local\Android\Sdk\build-tools\34.0.0-rc1\lib\apksigner.jar'
2023-02-13 13:14:27:145 [ADB] Starting apksigner: D:\\Tools\\jdk\\jdk-11.0.18.10-hotspot\\bin\\java.exe -Xmx1024M -Xss1m -jar C:\\Users\\Roman\\AppData\\Local\\Android\\Sdk\\build-tools\\34.0.0-rc1\\lib\\apksigner.jar verify --print-certs C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-uiautomator2-server\\apks\\appium-uiautomator2-server-v4.27.0.apk
2023-02-13 13:14:28:623 [ADB] apksigner stdout: Signer #1 certificate DN: EMAILADDRESS=android@android.com, CN=Android, OU=Android, O=Android, L=Mountain View, ST=California, C=US
2023-02-13 13:14:28:624 [ADB] Signer #1 certificate SHA-256 digest: a40da80a59d170caa950cf15c18c454d47a39b26989d8b640ecd745ba71bf5dc
2023-02-13 13:14:28:624 [ADB] Signer #1 certificate SHA-1 digest: 61ed377e85d386a8dfee6b864bd85b0bfaa5af81
2023-02-13 13:14:28:624 [ADB] Signer #1 certificate MD5 digest: e89b158e4bcf988ebd09eb83f5378e87
2023-02-13 13:14:28:624 [ADB] 
2023-02-13 13:14:28:624 [ADB] apksigner stderr: Picked up JAVA_TOOL_OPTIONS: -Dfile.encoding=UTF-8
2023-02-13 13:14:28:624 [ADB] 
2023-02-13 13:14:28:624 [ADB] sha256 hash did match for 'appium-uiautomator2-server-v4.27.0.apk'
2023-02-13 13:14:28:625 [ADB] 'C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-uiautomator2-server\apks\appium-uiautomator2-server-v4.27.0.apk' is signed with the default certificate
2023-02-13 13:14:28:625 [ADB] Getting install status for io.appium.uiautomator2.server.test
2023-02-13 13:14:28:625 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell dumpsys package io.appium.uiautomator2.server.test'
2023-02-13 13:14:28:687 [ADB] 'io.appium.uiautomator2.server.test' is not installed
2023-02-13 13:14:28:687 [ADB] Checking app cert for C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-uiautomator2-server\apks\appium-uiautomator2-server-debug-androidTest.apk
2023-02-13 13:14:28:691 [ADB] Starting apksigner: D:\\Tools\\jdk\\jdk-11.0.18.10-hotspot\\bin\\java.exe -Xmx1024M -Xss1m -jar C:\\Users\\Roman\\AppData\\Local\\Android\\Sdk\\build-tools\\34.0.0-rc1\\lib\\apksigner.jar verify --print-certs C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-uiautomator2-server\\apks\\appium-uiautomator2-server-debug-androidTest.apk
2023-02-13 13:14:29:099 [ADB] apksigner stdout: Signer #1 certificate DN: EMAILADDRESS=android@android.com, CN=Android, OU=Android, O=Android, L=Mountain View, ST=California, C=US
2023-02-13 13:14:29:099 [ADB] Signer #1 certificate SHA-256 digest: a40da80a59d170caa950cf15c18c454d47a39b26989d8b640ecd745ba71bf5dc
2023-02-13 13:14:29:099 [ADB] Signer #1 certificate SHA-1 digest: 61ed377e85d386a8dfee6b864bd85b0bfaa5af81
2023-02-13 13:14:29:099 [ADB] Signer #1 certificate MD5 digest: e89b158e4bcf988ebd09eb83f5378e87
2023-02-13 13:14:29:099 [ADB] 
2023-02-13 13:14:29:099 [ADB] apksigner stderr: Picked up JAVA_TOOL_OPTIONS: -Dfile.encoding=UTF-8
2023-02-13 13:14:29:099 [ADB] 
2023-02-13 13:14:29:099 [ADB] sha256 hash did match for 'appium-uiautomator2-server-debug-androidTest.apk'
2023-02-13 13:14:29:099 [ADB] 'C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-uiautomator2-server\apks\appium-uiautomator2-server-debug-androidTest.apk' is signed with the default certificate
2023-02-13 13:14:29:099 [UiAutomator2] Server packages are going to be (re)installed
2023-02-13 13:14:29:100 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 version'
2023-02-13 13:14:29:122 [ADB] The application at 'C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-uiautomator2-server\apks\appium-uiautomator2-server-v4.27.0.apk' will not be cached, because the device under test has confirmed the support of streamed installs
2023-02-13 13:14:29:122 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 install -r --no-incremental C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-uiautomator2-server\apks\appium-uiautomator2-server-v4.27.0.apk'
2023-02-13 13:14:29:969 [ADB] The installation of 'appium-uiautomator2-server-v4.27.0.apk' took 847ms
2023-02-13 13:14:29:969 [ADB] Install command stdout: Performing Streamed Install
2023-02-13 13:14:29:969 [ADB] Success
2023-02-13 13:14:29:970 [ADB] The application at 'C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-uiautomator2-server\apks\appium-uiautomator2-server-debug-androidTest.apk' will not be cached, because the device under test has confirmed the support of streamed installs
2023-02-13 13:14:29:970 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 install -r --no-incremental C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-uiautomator2-server\apks\appium-uiautomator2-server-debug-androidTest.apk'
2023-02-13 13:14:30:415 [ADB] The installation of 'appium-uiautomator2-server-debug-androidTest.apk' took 444ms
2023-02-13 13:14:30:415 [ADB] Install command stdout: Performing Streamed Install
2023-02-13 13:14:30:415 [ADB] Success
2023-02-13 13:14:30:417 [UiAutomator2] Waiting up to 30000ms for services to be available
2023-02-13 13:14:30:417 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell pm list instrumentation'
2023-02-13 13:14:30:479 [UiAutomator2] Instrumentation target 'io.appium.uiautomator2.server.test/androidx.test.runner.AndroidJUnitRunner' is available
2023-02-13 13:14:30:481 [ADB] Adding packages ["io.appium.settings","io.appium.uiautomator2.server","io.appium.uiautomator2.server.test"] to Doze whitelist
2023-02-13 13:14:30:481 [ADB] Got the following command chunks to execute: [["dumpsys","deviceidle","whitelist","+io.appium.settings",";","dumpsys","deviceidle","whitelist","+io.appium.uiautomator2.server",";","dumpsys","deviceidle","whitelist","+io.appium.uiautomator2.server.test",";"]]
2023-02-13 13:14:30:481 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell dumpsys deviceidle whitelist +io.appium.settings ; dumpsys deviceidle whitelist +io.appium.uiautomator2.server ; dumpsys deviceidle whitelist +io.appium.uiautomator2.server.test ;'
2023-02-13 13:14:30:830 [ADB] Checking app cert for D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\apps\Android-NativeDemoApp-0.4.0.apk
2023-02-13 13:14:30:918 [ADB] Starting apksigner: D:\\Tools\\jdk\\jdk-11.0.18.10-hotspot\\bin\\java.exe -Xmx1024M -Xss1m -jar C:\\Users\\Roman\\AppData\\Local\\Android\\Sdk\\build-tools\\34.0.0-rc1\\lib\\apksigner.jar verify --print-certs D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk
2023-02-13 13:14:32:028 [ADB] apksigner stdout: Signer #1 certificate DN: CN=WebdriverIO, OU=WebdriverIO, O=WebdriverIO, L=Berlin, ST=Brandenburg, C=GE
2023-02-13 13:14:32:028 [ADB] Signer #1 certificate SHA-256 digest: 71df6be97c50600d2a3ab7d69474b188e7b4f57de740e40053120e845bc620f0
2023-02-13 13:14:32:028 [ADB] Signer #1 certificate SHA-1 digest: 21c2f833d61742c16149a98c3802f2f82f6cb059
2023-02-13 13:14:32:028 [ADB] Signer #1 certificate MD5 digest: f70cf1963e27f72ff92ecad01c2932c6
2023-02-13 13:14:32:028 [ADB] 
2023-02-13 13:14:32:028 [ADB] apksigner stderr: Picked up JAVA_TOOL_OPTIONS: -Dfile.encoding=UTF-8
2023-02-13 13:14:32:028 [ADB] 
2023-02-13 13:14:32:029 [ADB] 'D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\apps\Android-NativeDemoApp-0.4.0.apk' is signed with a non-default certificate
2023-02-13 13:14:32:029 [ADB] Getting install status for com.wdiodemoapp
2023-02-13 13:14:32:029 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell dumpsys package com.wdiodemoapp'
2023-02-13 13:14:32:080 [ADB] 'com.wdiodemoapp' is not installed
2023-02-13 13:14:32:080 [ADB] App 'D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\apps\Android-NativeDemoApp-0.4.0.apk' is not installed
2023-02-13 13:14:32:080 [ADB] Installing 'D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\apps\Android-NativeDemoApp-0.4.0.apk'
2023-02-13 13:14:32:081 [ADB] The application at 'D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\apps\Android-NativeDemoApp-0.4.0.apk' will not be cached, because the device under test has confirmed the support of streamed installs
2023-02-13 13:14:32:081 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 install D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\apps\Android-NativeDemoApp-0.4.0.apk'
2023-02-13 13:14:34:619 [ADB] The installation of 'Android-NativeDemoApp-0.4.0.apk' took 2538ms
2023-02-13 13:14:34:620 [ADB] Install command stdout: Performing Streamed Install
2023-02-13 13:14:34:620 [ADB] Success
2023-02-13 13:14:34:620 [UiAutomator2] Performing shallow cleanup of automation leftovers
2023-02-13 13:14:34:964 [UiAutomator2] No obsolete sessions have been detected (socket hang up)
2023-02-13 13:14:34:964 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell am force-stop io.appium.uiautomator2.server.test'
2023-02-13 13:14:35:056 [UiAutomator2] Starting UIAutomator2 server 4.27.0
2023-02-13 13:14:35:056 [UiAutomator2] Using UIAutomator2 server from 'C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-uiautomator2-server\apks\appium-uiautomator2-server-v4.27.0.apk' and test from 'C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-uiautomator2-server\apks\appium-uiautomator2-server-debug-androidTest.apk'
2023-02-13 13:14:35:057 [UiAutomator2] Waiting up to 30000ms for UiAutomator2 to be online...
2023-02-13 13:14:35:057 [ADB] Creating ADB subprocess with args: ["-P",5037,"-s","emulator-5554","shell","am","instrument","-w","-e","disableAnalytics",true,"io.appium.uiautomator2.server.test/androidx.test.runner.AndroidJUnitRunner"]
2023-02-13 13:14:35:072 [WD Proxy] Matched '/status' to command name 'getStatus'
2023-02-13 13:14:35:073 [WD Proxy] Proxying [GET /status] to [GET http://127.0.0.1:8200/wd/hub/status] with no body
2023-02-13 13:14:35:078 [WD Proxy] socket hang up
2023-02-13 13:14:36:093 [WD Proxy] Matched '/status' to command name 'getStatus'
2023-02-13 13:14:36:093 [WD Proxy] Proxying [GET /status] to [GET http://127.0.0.1:8200/wd/hub/status] with no body
2023-02-13 13:14:36:099 [WD Proxy] socket hang up
2023-02-13 13:14:36:433 [Instrumentation] io.appium.uiautomator2.server.test.AppiumUiAutomator2Server:
2023-02-13 13:14:37:112 [WD Proxy] Matched '/status' to command name 'getStatus'
2023-02-13 13:14:37:113 [WD Proxy] Proxying [GET /status] to [GET http://127.0.0.1:8200/wd/hub/status] with no body
2023-02-13 13:14:37:118 [WD Proxy] socket hang up
2023-02-13 13:14:38:121 [WD Proxy] Matched '/status' to command name 'getStatus'
2023-02-13 13:14:38:121 [WD Proxy] Proxying [GET /status] to [GET http://127.0.0.1:8200/wd/hub/status] with no body
2023-02-13 13:14:38:238 [WD Proxy] Got response with status 200: {"sessionId":"None","value":{"message":"UiAutomator2 Server is ready to accept commands","ready":true}}
2023-02-13 13:14:38:238 [UiAutomator2] The initialization of the instrumentation process took 3182ms
2023-02-13 13:14:38:239 [WD Proxy] Matched '/session' to command name 'createSession'
2023-02-13 13:14:38:239 [WD Proxy] Proxying [POST /session] to [POST http://127.0.0.1:8200/wd/hub/session] with body: {"capabilities":{"firstMatch":[{"platform":"LINUX","webStorageEnabled":false,"takesScreenshot":true,"javascriptEnabled":true,"databaseEnabled":false,"networkConnectionEnabled":true,"locationContextEnabled":false,"warnings":{},"desired":{"platformName":"Android","deviceName":"emulator-5554","platformVersion":"13.0","orientation":"PORTRAIT","automationName":"UiAutomator2","app":"D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk","appWaitActivity":"com.wdiodemoapp.MainActivity","newCommandTimeout":240,"connectHardwareKeyboard":true},"platformName":"Android","deviceName":"emulator-5554","platformVersion":"13.0","orientation":"PORTRAIT","automationName":"UiAutomator2","app":"D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk","appWaitActivity":"com.wdiodemoapp.MainActivity","newCommandTimeout":240,"connectHardwareKeyboard":true,"deviceUDID":"emulator-5554","appPackage":"com.wdiodemoapp"}],"alwaysMatch":{}}}
2023-02-13 13:14:38:272 [WD Proxy] Got response with status 200: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"capabilities":{"firstMatch":[{"platform":"LINUX","webStorageEnabled":false,"takesScreenshot":true,"javascriptEnabled":true,"databaseEnabled":false,"networkConnectionEnabled":true,"locationContextEnabled":false,"warnings":{},"desired":{"platformName":"Android","deviceName":"emulator-5554","platformVersion":"13.0","orientation":"PORTRAIT","automationName":"UiAutomator2","app":"D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk","appWaitActivity":"com.wdiodemoapp.MainActivity","newCommandTimeout":240,"connectHardwareKeyboard":true},"platformName":"Android","deviceName":"emulator-5554","platformVersion":"13.0","orientation":"PORTRAIT","automationName":"UiAutomator2","app":"D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk","appWaitActivity":"com.wdiodemoapp.MainActivity","newCommandTimeout":240,"connectHardwareKeyboard":true,"deviceUDID":"emulator-5554","a...
2023-02-13 13:14:38:273 [WD Proxy] Determined the downstream protocol as 'W3C'
2023-02-13 13:14:38:287 [WD Proxy] Proxying [GET /appium/device/info] to [GET http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/appium/device/info] with no body
2023-02-13 13:14:38:309 [WD Proxy] Got response with status 200: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"androidId":"7b71f2c8bcb13e27","apiVersion":"33","bluetooth":{"state":"ON"},"brand":"google","carrierName":"T-Mobile","displayDensity":480,"locale":"en_US","manufacturer":"Google","model":"sdk_gphone64_x86_64","networks":[{"capabilities":{"SSID":null,"linkDownBandwidthKbps":30000,"linkUpstreamBandwidthKbps":12000,"networkCapabilities":"NET_CAPABILITY_NOT_METERED,NET_CAPABILITY_INTERNET,NET_CAPABILITY_NOT_RESTRICTED,NET_CAPABILITY_TRUSTED,NET_CAPABILITY_NOT_VPN,NET_CAPABILITY_VALIDATED,NET_CAPABILITY_NOT_ROAMING,NET_CAPABILITY_FOREGROUND,NET_CAPABILITY_NOT_CONGESTED,NET_CAPABILITY_NOT_SUSPENDED","signalStrength":-50,"transportTypes":"TRANSPORT_WIFI"},"detailedState":"CONNECTED","extraInfo":"","isAvailable":true,"isConnected":true,"isFailover":false,"isRoaming":false,"state":"CONNECTED","subtype":-1,"subtypeName":"","type":1,"typeName":"WIFI"},{"capabilities":{"SSID":null,"linkDownBandwidthKbps":14,"linkUpstreamBandwidthKbps":14,"networkCapabilitie...
2023-02-13 13:14:38:309 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell dumpsys window'
2023-02-13 13:14:38:372 [AndroidDriver] Screen already unlocked, doing nothing
2023-02-13 13:14:38:372 [UiAutomator2] Starting 'com.wdiodemoapp/com.wdiodemoapp.SplashActivity and waiting for 'com.wdiodemoapp/com.wdiodemoapp.MainActivity'
2023-02-13 13:14:38:372 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell am start -W -n com.wdiodemoapp/com.wdiodemoapp.SplashActivity -S -a android.intent.action.MAIN -c android.intent.category.LAUNCHER -f 0x10200000'
2023-02-13 13:14:39:647 [ADB] Waiting up to 20000ms for activity matching pkg: 'com.wdiodemoapp' and activity: 'com.wdiodemoapp.MainActivity' to be focused
2023-02-13 13:14:39:647 [ADB] Possible activities, to be checked: 'com.wdiodemoapp.MainActivity', 'com.wdiodemoapp.com.wdiodemoapp.MainActivity'
2023-02-13 13:14:39:648 [ADB] Getting focused package and activity
2023-02-13 13:14:39:648 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell dumpsys window displays'
2023-02-13 13:14:39:718 [ADB] Found package: 'com.wdiodemoapp' and fully qualified activity name : 'com.wdiodemoapp.MainActivity'
2023-02-13 13:14:39:718 [UiAutomator2] Setting initial orientation to 'PORTRAIT'
2023-02-13 13:14:39:718 [WD Proxy] Matched '/orientation' to command name 'setOrientation'
2023-02-13 13:14:39:718 [WD Proxy] Proxying [POST /orientation] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/orientation] with body: {"orientation":"PORTRAIT"}
2023-02-13 13:14:40:864 [WD Proxy] Got response with status 200: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":"PORTRAIT"}
2023-02-13 13:14:40:865 [WD Proxy] Proxying [GET /appium/device/pixel_ratio] to [GET http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/appium/device/pixel_ratio] with no body
2023-02-13 13:14:40:875 [WD Proxy] Got response with status 200: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":3}
2023-02-13 13:14:40:875 [WD Proxy] Matched '/appium/device/system_bars' to command name 'getSystemBars'
2023-02-13 13:14:40:876 [WD Proxy] Proxying [GET /appium/device/system_bars] to [GET http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/appium/device/system_bars] with no body
2023-02-13 13:14:40:906 [WD Proxy] Got response with status 200: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"statusBar":72}}
2023-02-13 13:14:40:906 [WD Proxy] Matched '/window/current/size' to command name 'getWindowSize'
2023-02-13 13:14:40:906 [WD Proxy] Proxying [GET /window/current/size] to [GET http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/window/current/size] with no body
2023-02-13 13:14:40:922 [WD Proxy] Got response with status 200: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"height":3016,"width":1440}}
2023-02-13 13:14:40:923 [Appium] New AndroidUiautomator2Driver session created successfully, session 4d3c5a62-0ece-46de-8543-7b3687cc7ef6 added to master session list
2023-02-13 13:14:40:924 [BaseDriver] Event 'newSessionStarted' logged at 1676294080924 (16:14:40 GMT+0300 (Moscow Standard Time))
2023-02-13 13:14:40:924 [W3C (4d3c5a62)] Cached the protocol value 'W3C' for the new session 4d3c5a62-0ece-46de-8543-7b3687cc7ef6
2023-02-13 13:14:40:924 [W3C (4d3c5a62)] Responding to client with driver.createSession() result: {"capabilities":{"platform":"LINUX","webStorageEnabled":false,"takesScreenshot":true,"javascriptEnabled":true,"databaseEnabled":false,"networkConnectionEnabled":true,"locationContextEnabled":false,"warnings":{},"desired":{"platformName":"Android","deviceName":"emulator-5554","platformVersion":"13.0","orientation":"PORTRAIT","automationName":"UiAutomator2","app":"D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk","appWaitActivity":"com.wdiodemoapp.MainActivity","newCommandTimeout":240,"connectHardwareKeyboard":true},"platformName":"Android","deviceName":"emulator-5554","platformVersion":"13","orientation":"PORTRAIT","automationName":"UiAutomator2","app":"D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk","appWaitActivity":"com.wdiodemoapp.MainActivity","newCommandTimeout":240,"connectHardwareKeyboard":true,"deviceUDID":"emulator-5554","appPackage":"com.wdiodemoapp","deviceApiLevel":33,"deviceScreenSize":"1440x308...
2023-02-13 13:14:40:927 [HTTP] <-- POST /session 200 19573 ms - 1274
2023-02-13 13:14:40:927 [HTTP] 
2023-02-13 13:14:40:962 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:40:962 [HTTP] {"using":"accessibility id","value":"Home"}
2023-02-13 13:14:40:966 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["accessibility id","Home","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:40:967 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:40:967 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:40:967 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:40:967 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"accessibility id","selector":"Home","context":"","multiple":false}
2023-02-13 13:14:41:037 [WD Proxy] Got response with status 200: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"ELEMENT":"00000000-0000-000e-ffff-ffff00000015","element-6066-11e4-a52e-4f735466cecf":"00000000-0000-000e-ffff-ffff00000015"}}
2023-02-13 13:14:41:037 [W3C (4d3c5a62)] Responding to client with driver.findElement() result: {"element-6066-11e4-a52e-4f735466cecf":"00000000-0000-000e-ffff-ffff00000015","ELEMENT":"00000000-0000-000e-ffff-ffff00000015"}
2023-02-13 13:14:41:038 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 200 76 ms - 137
2023-02-13 13:14:41:038 [HTTP] 
2023-02-13 13:14:41:051 [HTTP] --> GET /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element/00000000-0000-000e-ffff-ffff00000015/displayed
2023-02-13 13:14:41:051 [HTTP] {}
2023-02-13 13:14:41:054 [W3C (4d3c5a62)] Calling AppiumDriver.elementDisplayed() with args: ["00000000-0000-000e-ffff-ffff00000015","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:41:054 [WD Proxy] Matched '/element/00000000-0000-000e-ffff-ffff00000015/attribute/displayed' to command name 'getAttribute'
2023-02-13 13:14:41:055 [WD Proxy] Proxying [GET /element/00000000-0000-000e-ffff-ffff00000015/attribute/displayed] to [GET http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element/00000000-0000-000e-ffff-ffff00000015/attribute/displayed] with no body
2023-02-13 13:14:41:087 [WD Proxy] Got response with status 200: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":"true"}
2023-02-13 13:14:41:088 [W3C (4d3c5a62)] Responding to client with driver.elementDisplayed() result: true
2023-02-13 13:14:41:089 [HTTP] <-- GET /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element/00000000-0000-000e-ffff-ffff00000015/displayed 200 37 ms - 14
2023-02-13 13:14:41:089 [HTTP] 
2023-02-13 13:14:41:093 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:41:093 [HTTP] {"using":"accessibility id","value":"Login"}
2023-02-13 13:14:41:094 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["accessibility id","Login","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:41:095 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:41:095 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:41:095 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:41:096 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"accessibility id","selector":"Login","context":"","multiple":false}
2023-02-13 13:14:41:121 [WD Proxy] Got response with status 200: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"ELEMENT":"00000000-0000-000e-ffff-ffff0000001f","element-6066-11e4-a52e-4f735466cecf":"00000000-0000-000e-ffff-ffff0000001f"}}
2023-02-13 13:14:41:121 [W3C (4d3c5a62)] Responding to client with driver.findElement() result: {"element-6066-11e4-a52e-4f735466cecf":"00000000-0000-000e-ffff-ffff0000001f","ELEMENT":"00000000-0000-000e-ffff-ffff0000001f"}
2023-02-13 13:14:41:122 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 200 28 ms - 137
2023-02-13 13:14:41:122 [HTTP] 
2023-02-13 13:14:41:130 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element/00000000-0000-000e-ffff-ffff0000001f/click
2023-02-13 13:14:41:130 [HTTP] {}
2023-02-13 13:14:41:131 [W3C (4d3c5a62)] Calling AppiumDriver.click() with args: ["00000000-0000-000e-ffff-ffff0000001f","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:41:132 [WD Proxy] Matched '/element/00000000-0000-000e-ffff-ffff0000001f/click' to command name 'click'
2023-02-13 13:14:41:132 [WD Proxy] Proxying [POST /element/00000000-0000-000e-ffff-ffff0000001f/click] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element/00000000-0000-000e-ffff-ffff0000001f/click] with body: {"element":"00000000-0000-000e-ffff-ffff0000001f"}
2023-02-13 13:14:41:191 [WD Proxy] Got response with status 200: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":null}
2023-02-13 13:14:41:192 [W3C (4d3c5a62)] Responding to client with driver.click() result: null
2023-02-13 13:14:41:193 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element/00000000-0000-000e-ffff-ffff0000001f/click 200 62 ms - 14
2023-02-13 13:14:41:193 [HTTP] 
2023-02-13 13:14:41:196 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:41:196 [HTTP] {"using":"accessibility id","value":"Login-screen"}
2023-02-13 13:14:41:197 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["accessibility id","Login-screen","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:41:197 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:41:198 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:41:198 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:41:198 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"accessibility id","selector":"Login-screen","context":"","multiple":false}
2023-02-13 13:14:41:246 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:41:246 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:41:257 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:41:257 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:41:257 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:41:257 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:41:258 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:41:258 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 62 ms - 880
2023-02-13 13:14:41:259 [HTTP] 
2023-02-13 13:14:41:270 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:41:270 [HTTP] {"using":"accessibility id","value":"Login-screen"}
2023-02-13 13:14:41:270 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["accessibility id","Login-screen","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:41:271 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:41:271 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:41:271 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:41:271 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"accessibility id","selector":"Login-screen","context":"","multiple":false}
2023-02-13 13:14:41:307 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:41:307 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:41:308 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:41:308 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:41:308 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:41:308 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:41:308 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:41:309 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 39 ms - 880
2023-02-13 13:14:41:309 [HTTP] 
2023-02-13 13:14:41:781 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:41:781 [HTTP] {"using":"accessibility id","value":"Login-screen"}
2023-02-13 13:14:41:782 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["accessibility id","Login-screen","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:41:782 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:41:782 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:41:782 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:41:782 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"accessibility id","selector":"Login-screen","context":"","multiple":false}
2023-02-13 13:14:42:079 [WD Proxy] Got response with status 200: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"ELEMENT":"00000000-0000-000e-ffff-ffff00000044","element-6066-11e4-a52e-4f735466cecf":"00000000-0000-000e-ffff-ffff00000044"}}
2023-02-13 13:14:42:079 [W3C (4d3c5a62)] Responding to client with driver.findElement() result: {"element-6066-11e4-a52e-4f735466cecf":"00000000-0000-000e-ffff-ffff00000044","ELEMENT":"00000000-0000-000e-ffff-ffff00000044"}
2023-02-13 13:14:42:080 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 200 299 ms - 137
2023-02-13 13:14:42:080 [HTTP] 
2023-02-13 13:14:42:087 [HTTP] --> GET /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element/00000000-0000-000e-ffff-ffff00000044/displayed
2023-02-13 13:14:42:087 [HTTP] {}
2023-02-13 13:14:42:089 [W3C (4d3c5a62)] Calling AppiumDriver.elementDisplayed() with args: ["00000000-0000-000e-ffff-ffff00000044","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:42:089 [WD Proxy] Matched '/element/00000000-0000-000e-ffff-ffff00000044/attribute/displayed' to command name 'getAttribute'
2023-02-13 13:14:42:090 [WD Proxy] Proxying [GET /element/00000000-0000-000e-ffff-ffff00000044/attribute/displayed] to [GET http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element/00000000-0000-000e-ffff-ffff00000044/attribute/displayed] with no body
2023-02-13 13:14:42:101 [WD Proxy] Got response with status 200: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":"true"}
2023-02-13 13:14:42:101 [W3C (4d3c5a62)] Responding to client with driver.elementDisplayed() result: true
2023-02-13 13:14:42:102 [HTTP] <-- GET /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element/00000000-0000-000e-ffff-ffff00000044/displayed 200 15 ms - 14
2023-02-13 13:14:42:102 [HTTP] 
2023-02-13 13:14:42:107 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:42:107 [HTTP] {"using":"accessibility id","value":"button-biometric"}
2023-02-13 13:14:42:107 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["accessibility id","button-biometric","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:42:108 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:42:108 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:42:108 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:42:108 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"accessibility id","selector":"button-biometric","context":"","multiple":false}
2023-02-13 13:14:42:159 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:42:160 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:42:161 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:42:161 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:42:161 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:42:161 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:42:161 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:42:162 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 55 ms - 880
2023-02-13 13:14:42:162 [HTTP] 
2023-02-13 13:14:42:170 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:42:170 [HTTP] {"using":"accessibility id","value":"button-biometric"}
2023-02-13 13:14:42:170 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["accessibility id","button-biometric","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:42:171 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:42:171 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:42:171 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:42:171 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"accessibility id","selector":"button-biometric","context":"","multiple":false}
2023-02-13 13:14:42:240 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:42:241 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:42:241 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:42:242 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:42:242 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:42:242 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:42:242 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:42:243 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 72 ms - 880
2023-02-13 13:14:42:243 [HTTP] 
2023-02-13 13:14:42:251 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/execute/sync
2023-02-13 13:14:42:251 [HTTP] {"script":"mobile: shell","args":[{"command":"am start -a android.settings.SECURITY_SETTINGS && locksettings set-pin 1234"}]}
2023-02-13 13:14:42:257 [W3C (4d3c5a62)] Calling AppiumDriver.execute() with args: ["mobile: shell",[{"command":"am start -a android.settings.SECURITY_SETTINGS && locksettings set-pin 1234"}],"4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:42:257 [AndroidDriver] Executing native command 'mobile: shell'
2023-02-13 13:14:42:258 [AndroidDriver] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell 'am start -a android.settings.SECURITY_SETTINGS && locksettings set-pin 1234''
2023-02-13 13:14:44:971 [W3C (4d3c5a62)] Responding to client with driver.execute() result: "Starting: Intent { act=android.settings.SECURITY_SETTINGS }\r\nPin set to '1234'\r\n"
2023-02-13 13:14:44:972 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/execute/sync 200 2721 ms - 96
2023-02-13 13:14:44:972 [HTTP] 
2023-02-13 13:14:44:976 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:44:976 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"Fingerprint\")"}
2023-02-13 13:14:44:977 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"Fingerprint\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:44:977 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:44:977 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:44:977 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:44:977 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"Fingerprint\")","context":"","multiple":false}
2023-02-13 13:14:46:069 [WD Proxy] Got response with status 200: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"ELEMENT":"00000000-0000-0010-ffff-ffff0000005e","element-6066-11e4-a52e-4f735466cecf":"00000000-0000-0010-ffff-ffff0000005e"}}
2023-02-13 13:14:46:070 [W3C (4d3c5a62)] Responding to client with driver.findElement() result: {"element-6066-11e4-a52e-4f735466cecf":"00000000-0000-0010-ffff-ffff0000005e","ELEMENT":"00000000-0000-0010-ffff-ffff0000005e"}
2023-02-13 13:14:46:070 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 200 1094 ms - 137
2023-02-13 13:14:46:070 [HTTP] 
2023-02-13 13:14:46:076 [HTTP] --> GET /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element/00000000-0000-0010-ffff-ffff0000005e/displayed
2023-02-13 13:14:46:076 [HTTP] {}
2023-02-13 13:14:46:076 [W3C (4d3c5a62)] Calling AppiumDriver.elementDisplayed() with args: ["00000000-0000-0010-ffff-ffff0000005e","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:46:077 [WD Proxy] Matched '/element/00000000-0000-0010-ffff-ffff0000005e/attribute/displayed' to command name 'getAttribute'
2023-02-13 13:14:46:077 [WD Proxy] Proxying [GET /element/00000000-0000-0010-ffff-ffff0000005e/attribute/displayed] to [GET http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element/00000000-0000-0010-ffff-ffff0000005e/attribute/displayed] with no body
2023-02-13 13:14:46:133 [WD Proxy] Got response with status 200: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":"true"}
2023-02-13 13:14:46:134 [W3C (4d3c5a62)] Responding to client with driver.elementDisplayed() result: true
2023-02-13 13:14:46:134 [HTTP] <-- GET /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element/00000000-0000-0010-ffff-ffff0000005e/displayed 200 58 ms - 14
2023-02-13 13:14:46:134 [HTTP] 
2023-02-13 13:14:46:137 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:46:138 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"Fingerprint\")"}
2023-02-13 13:14:46:138 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"Fingerprint\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:46:138 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:46:138 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:46:139 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:46:139 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"Fingerprint\")","context":"","multiple":false}
2023-02-13 13:14:46:352 [WD Proxy] Got response with status 200: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"ELEMENT":"00000000-0000-0010-ffff-ffff0000005e","element-6066-11e4-a52e-4f735466cecf":"00000000-0000-0010-ffff-ffff0000005e"}}
2023-02-13 13:14:46:352 [W3C (4d3c5a62)] Responding to client with driver.findElement() result: {"element-6066-11e4-a52e-4f735466cecf":"00000000-0000-0010-ffff-ffff0000005e","ELEMENT":"00000000-0000-0010-ffff-ffff0000005e"}
2023-02-13 13:14:46:353 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 200 215 ms - 137
2023-02-13 13:14:46:353 [HTTP] 
2023-02-13 13:14:46:359 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element/00000000-0000-0010-ffff-ffff0000005e/click
2023-02-13 13:14:46:359 [HTTP] {}
2023-02-13 13:14:46:359 [W3C (4d3c5a62)] Calling AppiumDriver.click() with args: ["00000000-0000-0010-ffff-ffff0000005e","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:46:360 [WD Proxy] Matched '/element/00000000-0000-0010-ffff-ffff0000005e/click' to command name 'click'
2023-02-13 13:14:46:360 [WD Proxy] Proxying [POST /element/00000000-0000-0010-ffff-ffff0000005e/click] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element/00000000-0000-0010-ffff-ffff0000005e/click] with body: {"element":"00000000-0000-0010-ffff-ffff0000005e"}
2023-02-13 13:14:46:433 [WD Proxy] Got response with status 200: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":null}
2023-02-13 13:14:46:433 [W3C (4d3c5a62)] Responding to client with driver.click() result: null
2023-02-13 13:14:46:434 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element/00000000-0000-0010-ffff-ffff0000005e/click 200 75 ms - 14
2023-02-13 13:14:46:434 [HTTP] 
2023-02-13 13:14:46:436 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:46:436 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"Re-enter your PIN\")"}
2023-02-13 13:14:46:437 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"Re-enter your PIN\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:46:437 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:46:437 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:46:438 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:46:438 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"Re-enter your PIN\")","context":"","multiple":false}
2023-02-13 13:14:46:704 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:46:704 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:46:705 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:46:705 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:46:705 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:46:705 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:46:705 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:46:706 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 269 ms - 880
2023-02-13 13:14:46:706 [HTTP] 
2023-02-13 13:14:46:713 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:46:713 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"Re-enter your PIN\")"}
2023-02-13 13:14:46:714 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"Re-enter your PIN\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:46:714 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:46:714 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:46:714 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:46:715 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"Re-enter your PIN\")","context":"","multiple":false}
2023-02-13 13:14:48:370 [WD Proxy] Got response with status 200: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"ELEMENT":"00000000-0000-0012-ffff-ffff000000b4","element-6066-11e4-a52e-4f735466cecf":"00000000-0000-0012-ffff-ffff000000b4"}}
2023-02-13 13:14:48:371 [W3C (4d3c5a62)] Responding to client with driver.findElement() result: {"element-6066-11e4-a52e-4f735466cecf":"00000000-0000-0012-ffff-ffff000000b4","ELEMENT":"00000000-0000-0012-ffff-ffff000000b4"}
2023-02-13 13:14:48:371 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 200 1658 ms - 137
2023-02-13 13:14:48:371 [HTTP] 
2023-02-13 13:14:48:377 [HTTP] --> GET /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element/00000000-0000-0012-ffff-ffff000000b4/displayed
2023-02-13 13:14:48:377 [HTTP] {}
2023-02-13 13:14:48:377 [W3C (4d3c5a62)] Calling AppiumDriver.elementDisplayed() with args: ["00000000-0000-0012-ffff-ffff000000b4","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:48:378 [WD Proxy] Matched '/element/00000000-0000-0012-ffff-ffff000000b4/attribute/displayed' to command name 'getAttribute'
2023-02-13 13:14:48:378 [WD Proxy] Proxying [GET /element/00000000-0000-0012-ffff-ffff000000b4/attribute/displayed] to [GET http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element/00000000-0000-0012-ffff-ffff000000b4/attribute/displayed] with no body
2023-02-13 13:14:48:403 [WD Proxy] Got response with status 200: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":"true"}
2023-02-13 13:14:48:403 [W3C (4d3c5a62)] Responding to client with driver.elementDisplayed() result: true
2023-02-13 13:14:48:404 [HTTP] <-- GET /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element/00000000-0000-0012-ffff-ffff000000b4/displayed 200 27 ms - 14
2023-02-13 13:14:48:404 [HTTP] 
2023-02-13 13:14:48:406 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/execute/sync
2023-02-13 13:14:48:407 [HTTP] {"script":"mobile: shell","args":[{"command":"input text 1234 && input keyevent 66"}]}
2023-02-13 13:14:48:412 [W3C (4d3c5a62)] Calling AppiumDriver.execute() with args: ["mobile: shell",[{"command":"input text 1234 && input keyevent 66"}],"4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:48:413 [AndroidDriver] Executing native command 'mobile: shell'
2023-02-13 13:14:48:413 [AndroidDriver] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell 'input text 1234 && input keyevent 66''
2023-02-13 13:14:48:586 [W3C (4d3c5a62)] Responding to client with driver.execute() result: ""
2023-02-13 13:14:48:587 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/execute/sync 200 180 ms - 12
2023-02-13 13:14:48:587 [HTTP] 
2023-02-13 13:14:48:589 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:48:589 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:48:590 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:48:590 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:48:590 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:48:591 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:48:591 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:50:088 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:50:088 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:50:089 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:50:089 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:50:089 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:50:089 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:50:089 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:50:090 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 1501 ms - 880
2023-02-13 13:14:50:090 [HTTP] 
2023-02-13 13:14:50:097 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:50:097 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:50:098 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:50:098 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:50:098 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:50:100 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:50:101 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:50:115 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:50:115 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:50:115 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:50:116 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:50:116 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:50:116 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:50:116 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:50:116 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 19 ms - 880
2023-02-13 13:14:50:116 [HTTP] 
2023-02-13 13:14:50:604 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:50:604 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:50:604 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:50:604 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:50:604 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:50:605 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:50:605 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:50:654 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:50:655 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:50:655 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:50:655 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:50:655 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:50:655 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:50:656 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:50:656 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 52 ms - 880
2023-02-13 13:14:50:656 [HTTP] 
2023-02-13 13:14:51:108 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:51:108 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:51:108 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:51:108 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:51:109 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:51:109 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:51:109 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:51:148 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:51:148 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:51:149 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:51:149 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:51:149 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:51:149 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:51:149 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:51:150 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 42 ms - 880
2023-02-13 13:14:51:150 [HTTP] 
2023-02-13 13:14:51:611 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:51:611 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:51:611 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:51:612 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:51:612 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:51:612 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:51:612 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:51:627 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:51:627 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:51:628 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:51:628 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:51:628 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:51:628 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:51:629 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:51:629 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 18 ms - 880
2023-02-13 13:14:51:629 [HTTP] 
2023-02-13 13:14:52:105 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:52:105 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:52:106 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:52:106 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:52:106 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:52:106 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:52:106 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:52:117 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:52:117 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:52:118 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:52:118 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:52:118 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:52:118 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:52:118 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:52:119 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 13 ms - 880
2023-02-13 13:14:52:119 [HTTP] 
2023-02-13 13:14:52:605 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:52:606 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:52:606 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:52:606 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:52:606 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:52:606 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:52:606 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:52:620 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:52:620 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:52:621 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:52:621 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:52:621 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:52:621 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:52:621 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:52:622 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 16 ms - 880
2023-02-13 13:14:52:622 [HTTP] 
2023-02-13 13:14:53:113 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:53:113 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:53:114 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:53:114 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:53:114 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:53:114 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:53:115 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:53:145 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:53:145 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:53:146 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:53:146 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:53:146 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:53:146 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:53:146 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:53:147 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 33 ms - 880
2023-02-13 13:14:53:147 [HTTP] 
2023-02-13 13:14:53:600 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:53:600 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:53:600 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:53:601 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:53:601 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:53:601 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:53:601 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:53:618 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:53:618 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:53:619 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:53:619 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:53:619 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:53:619 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:53:619 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:53:620 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 20 ms - 880
2023-02-13 13:14:53:620 [HTTP] 
2023-02-13 13:14:54:107 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:54:108 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:54:108 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:54:108 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:54:108 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:54:109 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:54:109 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:54:150 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:54:151 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:54:151 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:54:151 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:54:151 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:54:152 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:54:152 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:54:152 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 45 ms - 880
2023-02-13 13:14:54:152 [HTTP] 
2023-02-13 13:14:54:599 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:54:599 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:54:600 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:54:600 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:54:600 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:54:600 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:54:600 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:54:677 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:54:677 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:54:677 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:54:677 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:54:678 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:54:678 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:54:678 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:54:678 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 79 ms - 880
2023-02-13 13:14:54:678 [HTTP] 
2023-02-13 13:14:55:101 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:55:101 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:55:102 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:55:102 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:55:102 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:55:102 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:55:102 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:55:144 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:55:144 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:55:146 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:55:146 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:55:146 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:55:146 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:55:146 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:55:147 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 45 ms - 880
2023-02-13 13:14:55:147 [HTTP] 
2023-02-13 13:14:55:605 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:55:605 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:55:605 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:55:605 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:55:605 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:55:606 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:55:606 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:55:801 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:55:801 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:55:802 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:55:802 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:55:802 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:55:802 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:55:802 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:55:803 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 198 ms - 880
2023-02-13 13:14:55:803 [HTTP] 
2023-02-13 13:14:56:105 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:56:105 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:56:106 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:56:106 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:56:106 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:56:106 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:56:107 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:56:138 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:56:138 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:56:139 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:56:139 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:56:139 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:56:139 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:56:139 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:56:140 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 35 ms - 880
2023-02-13 13:14:56:140 [HTTP] 
2023-02-13 13:14:56:611 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:56:611 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:56:611 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:56:611 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:56:612 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:56:612 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:56:612 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:56:642 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:56:643 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:56:643 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:56:643 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:56:643 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:56:643 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:56:643 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:56:644 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 33 ms - 880
2023-02-13 13:14:56:644 [HTTP] 
2023-02-13 13:14:57:101 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:57:101 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:57:101 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:57:101 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:57:101 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:57:102 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:57:102 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:57:117 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:57:117 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:57:118 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:57:118 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:57:118 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:57:118 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:57:118 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:57:119 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 18 ms - 880
2023-02-13 13:14:57:119 [HTTP] 
2023-02-13 13:14:57:609 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:57:609 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:57:610 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:57:610 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:57:610 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:57:610 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:57:611 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:57:627 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:57:627 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:57:628 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:57:628 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:57:628 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:57:628 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:57:628 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:57:629 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 19 ms - 880
2023-02-13 13:14:57:629 [HTTP] 
2023-02-13 13:14:58:097 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:58:097 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:58:097 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:58:097 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:58:097 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:58:097 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:58:098 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:58:116 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:58:116 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:58:117 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:58:117 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:58:117 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:58:117 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:58:118 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:58:118 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 21 ms - 880
2023-02-13 13:14:58:118 [HTTP] 
2023-02-13 13:14:58:607 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:58:607 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:58:607 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:58:607 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:58:607 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:58:608 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:58:608 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:58:619 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:58:620 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:58:620 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:58:620 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:58:620 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:58:620 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:58:620 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:58:621 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 14 ms - 880
2023-02-13 13:14:58:621 [HTTP] 
2023-02-13 13:14:59:111 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:59:111 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:59:112 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:59:112 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:59:112 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:59:112 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:59:112 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:59:125 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:59:125 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:59:126 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:59:126 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:59:126 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:59:126 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:59:126 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:59:127 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 15 ms - 880
2023-02-13 13:14:59:127 [HTTP] 
2023-02-13 13:14:59:601 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:14:59:601 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:14:59:601 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:14:59:601 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:14:59:602 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:14:59:602 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:14:59:602 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:14:59:614 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:14:59:615 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:14:59:615 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:14:59:616 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:14:59:616 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:14:59:616 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:14:59:616 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:14:59:616 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 15 ms - 880
2023-02-13 13:14:59:616 [HTTP] 
2023-02-13 13:15:00:107 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:00:107 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:00:107 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:00:108 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:00:108 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:00:108 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:00:108 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:00:132 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:00:132 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:00:133 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:00:133 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:00:133 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:00:133 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:00:133 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:00:134 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 27 ms - 880
2023-02-13 13:15:00:134 [HTTP] 
2023-02-13 13:15:00:600 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:00:600 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:00:600 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:00:600 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:00:600 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:00:600 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:00:601 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:00:860 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:00:860 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:00:861 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:00:861 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:00:861 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:00:861 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:00:861 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:00:862 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 262 ms - 880
2023-02-13 13:15:00:862 [HTTP] 
2023-02-13 13:15:01:105 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:01:105 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:01:105 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:01:105 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:01:106 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:01:106 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:01:106 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:01:118 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:01:119 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:01:119 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:01:120 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:01:120 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:01:120 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:01:120 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:01:120 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 15 ms - 880
2023-02-13 13:15:01:120 [HTTP] 
2023-02-13 13:15:01:597 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:01:597 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:01:597 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:01:597 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:01:598 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:01:598 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:01:598 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:01:614 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:01:614 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:01:614 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:01:614 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:01:615 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:01:615 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:01:615 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:01:615 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 18 ms - 880
2023-02-13 13:15:01:615 [HTTP] 
2023-02-13 13:15:02:103 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:02:103 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:02:103 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:02:104 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:02:104 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:02:104 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:02:104 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:02:121 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:02:121 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:02:122 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:02:122 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:02:122 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:02:122 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:02:122 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:02:122 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 19 ms - 880
2023-02-13 13:15:02:122 [HTTP] 
2023-02-13 13:15:02:609 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:02:609 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:02:610 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:02:610 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:02:610 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:02:611 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:02:611 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:02:631 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:02:632 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:02:632 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:02:632 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:02:632 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:02:633 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:02:633 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:02:633 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 24 ms - 880
2023-02-13 13:15:02:633 [HTTP] 
2023-02-13 13:15:03:097 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:03:097 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:03:097 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:03:097 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:03:097 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:03:098 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:03:098 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:03:116 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:03:116 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:03:117 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:03:117 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:03:117 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:03:117 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:03:117 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:03:118 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 21 ms - 880
2023-02-13 13:15:03:118 [HTTP] 
2023-02-13 13:15:03:604 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:03:604 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:03:605 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:03:605 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:03:605 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:03:605 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:03:606 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:03:634 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:03:635 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:03:635 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:03:635 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:03:636 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:03:636 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:03:636 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:03:636 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 32 ms - 880
2023-02-13 13:15:03:636 [HTTP] 
2023-02-13 13:15:04:111 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:04:111 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:04:111 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:04:111 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:04:112 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:04:112 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:04:112 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:04:124 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:04:125 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:04:126 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:04:126 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:04:126 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:04:126 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:04:126 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:04:127 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 16 ms - 880
2023-02-13 13:15:04:127 [HTTP] 
2023-02-13 13:15:04:601 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:04:601 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:04:601 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:04:601 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:04:601 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:04:602 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:04:602 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:04:619 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:04:620 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:04:620 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:04:621 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:04:621 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:04:621 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:04:621 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:04:622 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 21 ms - 880
2023-02-13 13:15:04:622 [HTTP] 
2023-02-13 13:15:05:109 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:05:110 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:05:110 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:05:110 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:05:110 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:05:111 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:05:111 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:05:127 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:05:127 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:05:128 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:05:128 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:05:128 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:05:128 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:05:128 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:05:128 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 19 ms - 880
2023-02-13 13:15:05:129 [HTTP] 
2023-02-13 13:15:05:601 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:05:601 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:05:601 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:05:601 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:05:601 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:05:601 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:05:602 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:05:613 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:05:613 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:05:614 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:05:614 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:05:614 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:05:614 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:05:614 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:05:614 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 14 ms - 880
2023-02-13 13:15:05:615 [HTTP] 
2023-02-13 13:15:06:102 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:06:102 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:06:103 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:06:103 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:06:103 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:06:103 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:06:103 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:06:124 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:06:124 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:06:124 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:06:124 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:06:125 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:06:125 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:06:125 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:06:125 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 23 ms - 880
2023-02-13 13:15:06:126 [HTTP] 
2023-02-13 13:15:06:610 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:06:610 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:06:611 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:06:611 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:06:611 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:06:611 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:06:611 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:06:624 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:06:624 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:06:625 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:06:625 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:06:625 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:06:625 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:06:625 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:06:626 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 15 ms - 880
2023-02-13 13:15:06:626 [HTTP] 
2023-02-13 13:15:07:103 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:07:103 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:07:103 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:07:103 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:07:103 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:07:104 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:07:104 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:07:119 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:07:119 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:07:120 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:07:120 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:07:120 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:07:120 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:07:120 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:07:121 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 18 ms - 880
2023-02-13 13:15:07:121 [HTTP] 
2023-02-13 13:15:07:608 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:07:608 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:07:608 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:07:608 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:07:608 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:07:609 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:07:609 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:07:629 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:07:629 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:07:630 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:07:630 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:07:630 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:07:630 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:07:630 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:07:631 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 23 ms - 880
2023-02-13 13:15:07:631 [HTTP] 
2023-02-13 13:15:08:098 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:08:098 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:08:098 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:08:098 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:08:098 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:08:099 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:08:099 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:08:111 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:08:112 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:08:112 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:08:113 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:08:113 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:08:113 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:08:113 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:08:113 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 16 ms - 880
2023-02-13 13:15:08:113 [HTTP] 
2023-02-13 13:15:08:604 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:08:604 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:08:604 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:08:604 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:08:604 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:08:605 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:08:605 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:08:671 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:08:671 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:08:671 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:08:672 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:08:672 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:08:672 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:08:672 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:08:672 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 69 ms - 880
2023-02-13 13:15:08:672 [HTTP] 
2023-02-13 13:15:09:111 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:09:112 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:09:112 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:09:112 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:09:112 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:09:112 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:09:112 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:09:137 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:09:137 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:09:138 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:09:138 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:09:138 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:09:138 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:09:138 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:09:139 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 27 ms - 880
2023-02-13 13:15:09:139 [HTTP] 
2023-02-13 13:15:09:607 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:09:608 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:09:608 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:09:608 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:09:608 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:09:608 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:09:609 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:09:634 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:09:635 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:09:635 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:09:636 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:09:636 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:09:636 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:09:636 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:09:636 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 29 ms - 880
2023-02-13 13:15:09:636 [HTTP] 
2023-02-13 13:15:10:100 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:10:100 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:10:100 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:10:100 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:10:100 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:10:101 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:10:101 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:10:140 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:10:140 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:10:141 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:10:141 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:10:141 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:10:141 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:10:141 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:10:142 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 42 ms - 880
2023-02-13 13:15:10:142 [HTTP] 
2023-02-13 13:15:10:610 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:10:610 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:10:611 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:10:611 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:10:611 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:10:611 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:10:611 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:10:627 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:10:628 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:10:628 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:10:628 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:10:629 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:10:629 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:10:629 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:10:629 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 19 ms - 880
2023-02-13 13:15:10:629 [HTTP] 
2023-02-13 13:15:11:100 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:11:100 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:11:100 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:11:100 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:11:100 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:11:101 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:11:101 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:11:116 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:11:116 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:11:117 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:11:117 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:11:117 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:11:117 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:11:117 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:11:118 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 17 ms - 880
2023-02-13 13:15:11:118 [HTTP] 
2023-02-13 13:15:11:607 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:11:607 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:11:608 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:11:608 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:11:608 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:11:608 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:11:608 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:11:625 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:11:625 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:11:626 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:11:626 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:11:626 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:11:626 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:11:626 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:11:627 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 20 ms - 880
2023-02-13 13:15:11:627 [HTTP] 
2023-02-13 13:15:12:100 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:12:100 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:12:100 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:12:100 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:12:100 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:12:102 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:12:103 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:12:115 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:12:115 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:12:115 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:12:115 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:12:115 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:12:115 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:12:115 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:12:116 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 16 ms - 880
2023-02-13 13:15:12:116 [HTTP] 
2023-02-13 13:15:12:606 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:12:606 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:12:606 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:12:607 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:12:607 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:12:607 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:12:608 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:12:623 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:12:623 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:12:624 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:12:624 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:12:624 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:12:624 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:12:624 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:12:625 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 18 ms - 880
2023-02-13 13:15:12:625 [HTTP] 
2023-02-13 13:15:13:109 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:13:110 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:13:110 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:13:110 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:13:110 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:13:110 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:13:111 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:13:129 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:13:130 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:13:130 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:13:130 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:13:130 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:13:130 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:13:130 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:13:131 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 21 ms - 880
2023-02-13 13:15:13:131 [HTTP] 
2023-02-13 13:15:13:601 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:13:601 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:13:601 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:13:602 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:13:602 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:13:602 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:13:602 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:13:613 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:13:613 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:13:614 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:13:614 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:13:614 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:13:614 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:13:614 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:13:614 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 13 ms - 880
2023-02-13 13:15:13:615 [HTTP] 
2023-02-13 13:15:14:097 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:14:097 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:14:098 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:14:098 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:14:098 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:14:098 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:14:098 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:14:110 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:14:111 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:14:112 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:14:112 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:14:112 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:14:112 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:14:112 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:14:113 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 15 ms - 880
2023-02-13 13:15:14:113 [HTTP] 
2023-02-13 13:15:14:600 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:14:600 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:14:601 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:14:601 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:14:601 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:14:601 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:14:601 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:14:617 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:14:617 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:14:617 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:14:617 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:14:617 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:14:617 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:14:618 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:14:618 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 18 ms - 880
2023-02-13 13:15:14:618 [HTTP] 
2023-02-13 13:15:15:101 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:15:101 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:15:101 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:15:102 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:15:102 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:15:102 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:15:102 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:15:117 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:15:117 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:15:118 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:15:118 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:15:118 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:15:118 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:15:118 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:15:119 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 18 ms - 880
2023-02-13 13:15:15:119 [HTTP] 
2023-02-13 13:15:15:605 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:15:605 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:15:605 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:15:605 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:15:605 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:15:606 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:15:606 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:15:796 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:15:797 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:15:797 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:15:797 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:15:797 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:15:798 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:15:798 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:15:798 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 193 ms - 880
2023-02-13 13:15:15:798 [HTTP] 
2023-02-13 13:15:16:109 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:16:110 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:16:110 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:16:110 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:16:110 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:16:110 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:16:110 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:16:123 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:16:123 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:16:124 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:16:124 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:16:124 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:16:124 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:16:124 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:16:125 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 15 ms - 880
2023-02-13 13:15:16:125 [HTTP] 
2023-02-13 13:15:16:600 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:16:600 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:16:600 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:16:600 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:16:600 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:16:601 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:16:601 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:16:613 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:16:613 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:16:614 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:16:614 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:16:614 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:16:614 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:16:614 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:16:615 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 15 ms - 880
2023-02-13 13:15:16:615 [HTTP] 
2023-02-13 13:15:17:105 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:17:105 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:17:106 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:17:106 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:17:106 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:17:106 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:17:106 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:17:119 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:17:119 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:17:120 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:17:120 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:17:120 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:17:120 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:17:120 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:17:120 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 15 ms - 880
2023-02-13 13:15:17:121 [HTTP] 
2023-02-13 13:15:17:609 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:17:609 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:17:609 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:17:610 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:17:610 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:17:610 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:17:610 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:17:632 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:17:633 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:17:633 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:17:633 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:17:634 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:17:634 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:17:634 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:17:634 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 25 ms - 880
2023-02-13 13:15:17:634 [HTTP] 
2023-02-13 13:15:18:099 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:18:099 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:18:100 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:18:100 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:18:100 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:18:100 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:18:100 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:18:111 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:18:112 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:18:112 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:18:112 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:18:112 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:18:113 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:18:113 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:18:113 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 14 ms - 880
2023-02-13 13:15:18:113 [HTTP] 
2023-02-13 13:15:18:606 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:18:606 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:18:606 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:18:606 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:18:606 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:18:606 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:18:607 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:18:618 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:18:618 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:18:619 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:18:619 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:18:620 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:18:620 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:18:620 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:18:620 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 15 ms - 880
2023-02-13 13:15:18:620 [HTTP] 
2023-02-13 13:15:19:099 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:19:099 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:19:099 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:19:099 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:19:099 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:19:100 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:19:100 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:19:115 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:19:115 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:19:116 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:19:116 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:19:116 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:19:116 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:19:116 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:19:117 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 18 ms - 880
2023-02-13 13:15:19:117 [HTTP] 
2023-02-13 13:15:19:607 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:19:607 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:19:607 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:19:608 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:19:608 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:19:608 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:19:608 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:19:623 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:19:624 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:19:624 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:19:624 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:19:625 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:19:625 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:19:625 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:19:625 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 18 ms - 880
2023-02-13 13:15:19:626 [HTTP] 
2023-02-13 13:15:20:097 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:20:097 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:20:097 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:20:097 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:20:097 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:20:098 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:20:098 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:20:108 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:20:108 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:20:109 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:20:109 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:20:109 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:20:109 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:20:109 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:20:109 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 13 ms - 880
2023-02-13 13:15:20:110 [HTTP] 
2023-02-13 13:15:20:605 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:20:605 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:20:605 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:20:605 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:20:605 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:20:605 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:20:605 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:20:622 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:20:622 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:20:623 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:20:623 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:20:623 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:20:623 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:20:623 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:20:623 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 18 ms - 880
2023-02-13 13:15:20:623 [HTTP] 
2023-02-13 13:15:21:110 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:21:110 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:21:110 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:21:111 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:21:111 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:21:111 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:21:111 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:21:141 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:21:141 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:21:142 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:21:142 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:21:142 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:21:142 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:21:142 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:21:143 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 33 ms - 880
2023-02-13 13:15:21:143 [HTTP] 
2023-02-13 13:15:21:601 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:21:601 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:21:601 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:21:601 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:21:601 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:21:602 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:21:602 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:21:618 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:21:619 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:21:619 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:21:619 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:21:619 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:21:619 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:21:620 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:21:620 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 19 ms - 880
2023-02-13 13:15:21:620 [HTTP] 
2023-02-13 13:15:22:108 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:22:109 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:22:109 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:22:109 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:22:109 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:22:109 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:22:109 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:22:136 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:22:136 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:22:136 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:22:136 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:22:136 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:22:137 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:22:137 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:22:137 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 29 ms - 880
2023-02-13 13:15:22:137 [HTTP] 
2023-02-13 13:15:22:607 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:22:607 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:22:607 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:22:607 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:22:608 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:22:608 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:22:608 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:22:633 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:22:633 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:22:634 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:22:634 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:22:634 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:22:634 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:22:634 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:22:635 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 28 ms - 880
2023-02-13 13:15:22:635 [HTTP] 
2023-02-13 13:15:23:109 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:23:109 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:23:109 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:23:109 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:23:109 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:23:110 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:23:110 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:23:134 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:23:134 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:23:135 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:23:135 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:23:135 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:23:135 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:23:135 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:23:136 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 27 ms - 880
2023-02-13 13:15:23:136 [HTTP] 
2023-02-13 13:15:23:600 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:23:600 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:23:600 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:23:600 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:23:600 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:23:600 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:23:601 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:23:623 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:23:624 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:23:624 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:23:624 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:23:624 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:23:624 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:23:624 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:23:625 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 25 ms - 880
2023-02-13 13:15:23:625 [HTTP] 
2023-02-13 13:15:24:109 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:24:109 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:24:109 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:24:109 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:24:109 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:24:110 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:24:110 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:24:136 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:24:137 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:24:137 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:24:137 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:24:137 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:24:137 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:24:137 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:24:138 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 29 ms - 880
2023-02-13 13:15:24:138 [HTTP] 
2023-02-13 13:15:24:597 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:24:597 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:24:597 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:24:597 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:24:597 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:24:598 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:24:598 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:24:610 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:24:611 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:24:611 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:24:611 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:24:611 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:24:611 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:24:612 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:24:612 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 15 ms - 880
2023-02-13 13:15:24:612 [HTTP] 
2023-02-13 13:15:25:102 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:25:102 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:25:103 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:25:103 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:25:103 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:25:103 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:25:103 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:25:149 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:25:149 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:25:149 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:25:149 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:25:150 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:25:150 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:25:150 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:25:150 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 48 ms - 880
2023-02-13 13:15:25:150 [HTTP] 
2023-02-13 13:15:25:607 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:25:608 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:25:608 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:25:608 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:25:608 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:25:608 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:25:608 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:25:623 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:25:623 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:25:624 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:25:624 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:25:624 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:25:624 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:25:624 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:25:625 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 17 ms - 880
2023-02-13 13:15:25:625 [HTTP] 
2023-02-13 13:15:26:099 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:26:100 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:26:100 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:26:100 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:26:100 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:26:100 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:26:100 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:26:125 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:26:125 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:26:126 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:26:126 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:26:126 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:26:127 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:26:127 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:26:127 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 28 ms - 880
2023-02-13 13:15:26:127 [HTTP] 
2023-02-13 13:15:26:601 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:26:601 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:26:602 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:26:602 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:26:602 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:26:602 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:26:602 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:26:612 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:26:612 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:26:613 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:26:613 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:26:613 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:26:613 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:26:613 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:26:614 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 12 ms - 880
2023-02-13 13:15:26:614 [HTTP] 
2023-02-13 13:15:27:108 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:27:108 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:27:108 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:27:108 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:27:108 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:27:109 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:27:109 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:27:135 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:27:135 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:27:136 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:27:136 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:27:136 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:27:136 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:27:136 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:27:136 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 28 ms - 880
2023-02-13 13:15:27:137 [HTTP] 
2023-02-13 13:15:27:598 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:27:598 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:27:598 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:27:598 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:27:598 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:27:599 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:27:599 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:27:616 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:27:616 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:27:617 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:27:617 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:27:617 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:27:617 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:27:617 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:27:618 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 20 ms - 880
2023-02-13 13:15:27:618 [HTTP] 
2023-02-13 13:15:28:101 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:28:101 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:28:101 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:28:102 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:28:102 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:28:102 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:28:102 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:28:113 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:28:113 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:28:113 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:28:113 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:28:113 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:28:113 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:28:113 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:28:114 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 13 ms - 880
2023-02-13 13:15:28:114 [HTTP] 
2023-02-13 13:15:28:605 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:28:606 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:28:606 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:28:606 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:28:606 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:28:606 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:28:606 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:28:619 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:28:620 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:28:620 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:28:620 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:28:620 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:28:621 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:28:621 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:28:621 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 15 ms - 880
2023-02-13 13:15:28:621 [HTTP] 
2023-02-13 13:15:29:109 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:29:109 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:29:109 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:29:110 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:29:110 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:29:110 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:29:110 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:29:120 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:29:120 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:29:121 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:29:121 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:29:121 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:29:121 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:29:121 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:29:122 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 12 ms - 880
2023-02-13 13:15:29:122 [HTTP] 
2023-02-13 13:15:29:599 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:29:599 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:29:600 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:29:600 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:29:600 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:29:600 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:29:600 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:29:619 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:29:620 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:29:620 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:29:620 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:29:620 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:29:620 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:29:620 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:29:621 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 21 ms - 880
2023-02-13 13:15:29:621 [HTTP] 
2023-02-13 13:15:30:107 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:30:107 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:30:108 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:30:108 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:30:108 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:30:108 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:30:108 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:30:123 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:30:123 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:30:124 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:30:124 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:30:124 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:30:124 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:30:124 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:30:124 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 17 ms - 880
2023-02-13 13:15:30:125 [HTTP] 
2023-02-13 13:15:30:597 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:30:598 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:30:598 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:30:598 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:30:598 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:30:598 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:30:598 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:30:614 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:30:614 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:30:614 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:30:614 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:30:614 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:30:615 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:30:615 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:30:615 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 17 ms - 880
2023-02-13 13:15:30:615 [HTTP] 
2023-02-13 13:15:31:101 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:31:101 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:31:101 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:31:102 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:31:102 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:31:102 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:31:102 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:31:112 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:31:112 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:31:112 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:31:112 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:31:112 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:31:112 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:31:113 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:31:113 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 12 ms - 880
2023-02-13 13:15:31:113 [HTTP] 
2023-02-13 13:15:31:603 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:31:603 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:31:604 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:31:604 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:31:604 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:31:604 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:31:604 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:31:620 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:31:620 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:31:621 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:31:621 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:31:621 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:31:621 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:31:621 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:31:621 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 18 ms - 880
2023-02-13 13:15:31:621 [HTTP] 
2023-02-13 13:15:32:105 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:32:105 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:32:105 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:32:105 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:32:105 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:32:106 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:32:106 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:32:119 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:32:120 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:32:120 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:32:120 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:32:120 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:32:120 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:32:120 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:32:121 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 16 ms - 880
2023-02-13 13:15:32:121 [HTTP] 
2023-02-13 13:15:32:615 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:32:615 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:32:617 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:32:617 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:32:618 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:32:619 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:32:620 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:32:666 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:32:667 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:32:668 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:32:668 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:32:668 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:32:668 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:32:668 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:32:669 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 54 ms - 880
2023-02-13 13:15:32:669 [HTTP] 
2023-02-13 13:15:33:098 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:33:098 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:33:099 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:33:099 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:33:099 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:33:100 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:33:100 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:33:123 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:33:123 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:33:124 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:33:124 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:33:124 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:33:124 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:33:124 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:33:125 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 27 ms - 880
2023-02-13 13:15:33:126 [HTTP] 
2023-02-13 13:15:33:594 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:33:594 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:33:595 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:33:595 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:33:595 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:33:595 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:33:595 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:33:605 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:33:605 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:33:606 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:33:606 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:33:606 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:33:606 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:33:606 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:33:606 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 12 ms - 880
2023-02-13 13:15:33:607 [HTTP] 
2023-02-13 13:15:34:111 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:34:111 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:34:112 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:34:112 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:34:112 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:34:113 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:34:113 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:34:139 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:34:140 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:34:140 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:34:140 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:34:140 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:34:141 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:34:141 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:34:141 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 30 ms - 880
2023-02-13 13:15:34:141 [HTTP] 
2023-02-13 13:15:34:609 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:34:609 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:34:610 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:34:610 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:34:610 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:34:611 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:34:611 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:34:635 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:34:635 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:34:637 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:34:637 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:34:637 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:34:637 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:34:637 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:34:638 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 28 ms - 880
2023-02-13 13:15:34:638 [HTTP] 
2023-02-13 13:15:35:100 [HTTP] --> POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element
2023-02-13 13:15:35:101 [HTTP] {"using":"-android uiautomator","value":"new UiSelector().textContains(\"NEXT\")"}
2023-02-13 13:15:35:102 [W3C (4d3c5a62)] Calling AppiumDriver.findElement() with args: ["-android uiautomator","new UiSelector().textContains(\"NEXT\")","4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:35:102 [BaseDriver] Valid locator strategies for this request: xpath, id, class name, accessibility id, css selector, -android uiautomator
2023-02-13 13:15:35:103 [BaseDriver] Waiting up to 0 ms for condition
2023-02-13 13:15:35:104 [WD Proxy] Matched '/element' to command name 'findElement'
2023-02-13 13:15:35:105 [WD Proxy] Proxying [POST /element] to [POST http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a/element] with body: {"strategy":"-android uiautomator","selector":"new UiSelector().textContains(\"NEXT\")","context":"","multiple":false}
2023-02-13 13:15:35:140 [HTTP] --> DELETE /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6
2023-02-13 13:15:35:141 [HTTP] {}
2023-02-13 13:15:35:141 [W3C (4d3c5a62)] Calling AppiumDriver.deleteSession() with args: ["4d3c5a62-0ece-46de-8543-7b3687cc7ef6"]
2023-02-13 13:15:35:141 [BaseDriver] Event 'quitSessionRequested' logged at 1676294135141 (16:15:35 GMT+0300 (Moscow Standard Time))
2023-02-13 13:15:35:142 [Appium] Removing session 4d3c5a62-0ece-46de-8543-7b3687cc7ef6 from our master session list
2023-02-13 13:15:35:143 [UiAutomator2] Deleting UiAutomator2 session
2023-02-13 13:15:35:144 [UiAutomator2] Deleting UiAutomator2 server session
2023-02-13 13:15:35:144 [WD Proxy] Matched '/' to command name 'deleteSession'
2023-02-13 13:15:35:144 [WD Proxy] Proxying [DELETE /] to [DELETE http://127.0.0.1:8200/wd/hub/session/54cd6cb6-45d8-4519-92fc-44976718674a] with no body
2023-02-13 13:15:35:146 [WD Proxy] Got response with status 404: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":{"error":"no such element","message":"An element could not be located on the page using the given search parameters","stacktrace":"io.appium.uiautomator2.common.exceptions.ElementNotFoundException: An element could not be located on the page using the given search parameters\n\tat io.appium.uiautomator2.handler.FindElement.safeHandle(FindElement.java:70)\n\tat io.appium.uiautomator2.handler.request.SafeRequestHandler.handle(SafeRequestHandler.java:59)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleRequest(AppiumServlet.java:266)\n\tat io.appium.uiautomator2.server.AppiumServlet.handleHttpRequest(AppiumServlet.java:260)\n\tat io.appium.uiautomator2.http.ServerHandler.channelRead(ServerHandler.java:68)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:366)\n\tat io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:352)\n\tat io.netty.chann...
2023-02-13 13:15:35:147 [W3C] Matched W3C error code 'no such element' to NoSuchElementError
2023-02-13 13:15:35:148 [W3C (4d3c5a62)] Encountered internal error running command: NoSuchElementError: An element could not be located on the page using the given search parameters.
2023-02-13 13:15:35:148 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrEls (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-android-driver\lib\commands\find.js:75:11)
2023-02-13 13:15:35:148 [W3C (4d3c5a62)]     at processTicksAndRejections (node:internal/process/task_queues:95:5)
2023-02-13 13:15:35:148 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:33:12)
2023-02-13 13:15:35:149 [W3C (4d3c5a62)]     at AndroidUiautomator2Driver.findElement (C:\Users\Roman\AppData\Roaming\npm\node_modules\appium\node_modules\appium-base-driver\lib\basedriver\commands\find.js:53:10)
2023-02-13 13:15:35:149 [HTTP] <-- POST /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6/element 404 49 ms - 880
2023-02-13 13:15:35:150 [HTTP] 
2023-02-13 13:15:35:164 [WD Proxy] Got response with status 200: {"sessionId":"54cd6cb6-45d8-4519-92fc-44976718674a","value":null}
2023-02-13 13:15:35:165 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell am force-stop com.wdiodemoapp'
2023-02-13 13:15:35:232 [Logcat] Stopping logcat capture
2023-02-13 13:15:35:235 [ADB] Removing forwarded port socket connection: 8200 
2023-02-13 13:15:35:235 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 forward --remove tcp:8200'
2023-02-13 13:15:35:253 [UiAutomator2] Restoring hidden api policy to the device default configuration
2023-02-13 13:15:35:253 [ADB] Running 'C:\Users\Roman\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s emulator-5554 shell 'settings delete global hidden_api_policy_pre_p_apps;settings delete global hidden_api_policy_p_apps;settings delete global hidden_api_policy''
2023-02-13 13:15:35:305 [BaseDriver] Event 'quitSessionFinished' logged at 1676294135305 (16:15:35 GMT+0300 (Moscow Standard Time))
2023-02-13 13:15:35:305 [W3C (4d3c5a62)] Received response: null
2023-02-13 13:15:35:305 [W3C (4d3c5a62)] But deleting session, so not returning
2023-02-13 13:15:35:305 [W3C (4d3c5a62)] Responding to client with driver.deleteSession() result: null
2023-02-13 13:15:35:306 [HTTP] <-- DELETE /session/4d3c5a62-0ece-46de-8543-7b3687cc7ef6 200 165 ms - 14
2023-02-13 13:15:35:306 [HTTP] 
2023-02-13 13:15:35:587 [Instrumentation] .
2023-02-13 13:15:35:609 [Instrumentation] Time: 59.165
2023-02-13 13:15:35:609 [Instrumentation] 
2023-02-13 13:15:35:609 [Instrumentation] OK (1 test)
2023-02-13 13:15:35:639 [Instrumentation] The process has exited with code 0
