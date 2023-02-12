D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate>npm run android.app

> appium-boilerplate@5.3.1 android.app
> wdio config/wdio.android.app.conf.ts


Execution of 9 workers started at 2023-02-11T14:44:08.530Z

[0-0] RUNNING in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.biometric.login.spec.ts
[0-0] FAILED in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.biometric.login.spec.ts
[0-1] RUNNING in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.deep.link.navigation.spec.ts
[0-1] PASSED in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.deep.link.navigation.spec.ts
[0-2] RUNNING in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.drag.and.drop.spec.ts
[0-2] Error in "WebdriverIO and Appium, when using drag and drop.should be able to solve the puzzle by dragging the pieces into the puzzle"
Error: element ("~button-Retry") still not displayed after 45000ms
    at D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\webdriverio\build\commands\browser\waitUntil.js:66:23
    at async Element.wrapCommandFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
    at async Element.elementErrorHandlerCallbackFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\webdriverio\build\middlewares.js:24:32)
    at async Element.wrapCommandFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
    at async Element.wrapCommandFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
    at async Element.elementErrorHandlerCallbackFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\webdriverio\build\middlewares.js:24:32)
    at async Element.wrapCommandFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
    at async Context.<anonymous> (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.drag.and.drop.spec.ts:25:9)
[0-2] FAILED in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.drag.and.drop.spec.ts
[0-3] RUNNING in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.forms.spec.ts
[0-3] PASSED in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.forms.spec.ts
[0-4] RUNNING in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.login.spec.ts
[0-4] PASSED in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.login.spec.ts
[0-5] RUNNING in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.swipe.spec.ts
[0-5] PASSED in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.swipe.spec.ts
[0-6] RUNNING in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.tab.bar.navigation.spec.ts
[0-6] PASSED in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.tab.bar.navigation.spec.ts
[0-7] RUNNING in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.webview.spec.ts
[0-7] PASSED in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.webview.spec.ts
[0-8] RUNNING in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.webview.xpath.spec.ts
[0-8] Test time for using XPATH It took 0.693 seconds.
[0-8] Test time for switching to the WebView It took 0.348 seconds.
[0-8] PASSED in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.webview.xpath.spec.ts

 "spec" Reporter:
------------------------------------------------------------------
[emulator-5554 Android 13 #0-0] Running: emulator-5554 on Android 13 executing D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-0] Session ID: 032175b6-4dc7-407f-8de5-9039eb0d00b8
[emulator-5554 Android 13 #0-0]
[emulator-5554 Android 13 #0-0] » \tests\specs\app.biometric.login.spec.ts
[emulator-5554 Android 13 #0-0] WebdriverIO and Appium, when interacting with a biometric button,
[emulator-5554 Android 13 #0-0]    ? should be able to login with a matching touch/faceID/fingerprint
[emulator-5554 Android 13 #0-0]    ✖ "before each" hook for WebdriverIO and Appium, when interacting with a biometric button,
[emulator-5554 Android 13 #0-0]
[emulator-5554 Android 13 #0-0] 1 failing (52.7s)
[emulator-5554 Android 13 #0-0]
[emulator-5554 Android 13 #0-0] 1) WebdriverIO and Appium, when interacting with a biometric button, "before each" hook for WebdriverIO and Appium, when interacting with a biometric button,
[emulator-5554 Android 13 #0-0] element ("android=new UiSelector().textContains("NEXT")") still not displayed after 45000ms
[emulator-5554 Android 13 #0-0] Error: element ("android=new UiSelector().textContains("NEXT")") still not displayed after 45000ms
[emulator-5554 Android 13 #0-0]     at D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\webdriverio\build\commands\browser\waitUntil.js:66:23
[emulator-5554 Android 13 #0-0]     at async Element.wrapCommandFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 13 #0-0]     at async Element.elementErrorHandlerCallbackFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\webdriverio\build\middlewares.js:24:32)
[emulator-5554 Android 13 #0-0]     at async Element.wrapCommandFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 13 #0-0]     at async Element.wrapCommandFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 13 #0-0]     at async Element.elementErrorHandlerCallbackFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\webdriverio\build\middlewares.js:24:32)
[emulator-5554 Android 13 #0-0]     at async Element.wrapCommandFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 13 #0-0]     at async AndroidSettings.waitAndTap (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\screenobjects\AndroidSettings.ts:113:9)
[emulator-5554 Android 13 #0-0]     at async AndroidSettings.fingerPrintWizardEightOrHigher (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\screenobjects\AndroidSettings.ts:32:13)
[emulator-5554 Android 13 #0-0]     at async AndroidSettings.enableBiometricLogin (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\screenobjects\AndroidSettings.ts:137:13)
------------------------------------------------------------------
[emulator-5554 Android 13 #0-1] Running: emulator-5554 on Android 13 executing D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-1] Session ID: acec0d26-5576-4fc3-b612-10d25f388974
[emulator-5554 Android 13 #0-1]
[emulator-5554 Android 13 #0-1] » \tests\specs\app.deep.link.navigation.spec.ts
[emulator-5554 Android 13 #0-1] WebdriverIO and Appium, when navigating by deep link
[emulator-5554 Android 13 #0-1]    ✓ should be able to open the webview
[emulator-5554 Android 13 #0-1]    ✓ should be able to open the login form screen
[emulator-5554 Android 13 #0-1]    ✓ should be able to open the forms screen
[emulator-5554 Android 13 #0-1]    ✓ should be able to open the swipe screen
[emulator-5554 Android 13 #0-1]    ✓ should be able to open the drag and drop screen
[emulator-5554 Android 13 #0-1]    ✓ should be able to open the home screen
[emulator-5554 Android 13 #0-1]
[emulator-5554 Android 13 #0-1] 6 passing (12.3s)
------------------------------------------------------------------
[emulator-5554 Android 13 #0-2] Running: emulator-5554 on Android 13 executing D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-2] Session ID: 7a7cda93-f2d4-4b2b-bbf8-5a84f4cfc5fd
[emulator-5554 Android 13 #0-2]
[emulator-5554 Android 13 #0-2] » \tests\specs\app.drag.and.drop.spec.ts
[emulator-5554 Android 13 #0-2] WebdriverIO and Appium, when using drag and drop
[emulator-5554 Android 13 #0-2]    ✖ should be able to solve the puzzle by dragging the pieces into the puzzle
[emulator-5554 Android 13 #0-2]
[emulator-5554 Android 13 #0-2] 1 failing (59.8s)
[emulator-5554 Android 13 #0-2]
[emulator-5554 Android 13 #0-2] 1) WebdriverIO and Appium, when using drag and drop should be able to solve the puzzle by dragging the pieces into the puzzle
[emulator-5554 Android 13 #0-2] element ("~button-Retry") still not displayed after 45000ms
[emulator-5554 Android 13 #0-2] Error: element ("~button-Retry") still not displayed after 45000ms
[emulator-5554 Android 13 #0-2]     at D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\webdriverio\build\commands\browser\waitUntil.js:66:23
[emulator-5554 Android 13 #0-2]     at async Element.wrapCommandFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 13 #0-2]     at async Element.elementErrorHandlerCallbackFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\webdriverio\build\middlewares.js:24:32)
[emulator-5554 Android 13 #0-2]     at async Element.wrapCommandFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 13 #0-2]     at async Element.wrapCommandFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 13 #0-2]     at async Element.elementErrorHandlerCallbackFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\webdriverio\build\middlewares.js:24:32)
[emulator-5554 Android 13 #0-2]     at async Element.wrapCommandFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 13 #0-2]     at async Context.<anonymous> (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\tests\specs\app.drag.and.drop.spec.ts:25:9)
------------------------------------------------------------------
[emulator-5554 Android 13 #0-3] Running: emulator-5554 on Android 13 executing D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-3] Session ID: 50e59350-38a9-4a1d-baea-979cb896276d
[emulator-5554 Android 13 #0-3]
[emulator-5554 Android 13 #0-3] » \tests\specs\app.forms.spec.ts
[emulator-5554 Android 13 #0-3] WebdriverIO and Appium, when interacting with form elements,
[emulator-5554 Android 13 #0-3]    ✓ should be able type in the input and validate the text
[emulator-5554 Android 13 #0-3]    ✓ should be able turn on and off the switch
[emulator-5554 Android 13 #0-3]    ✓ should be able select a value from the select element
[emulator-5554 Android 13 #0-3]    ✓ should be able to open the alert and close it with all 3 buttons
[emulator-5554 Android 13 #0-3]    ✓ should be able to determine that the inactive button is inactive
[emulator-5554 Android 13 #0-3]
[emulator-5554 Android 13 #0-3] 5 passing (15.7s)
------------------------------------------------------------------
[emulator-5554 Android 13 #0-4] Running: emulator-5554 on Android 13 executing D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-4] Session ID: f0f29376-b385-4fab-a264-e28254abce4c
[emulator-5554 Android 13 #0-4]
[emulator-5554 Android 13 #0-4] » \tests\specs\app.login.spec.ts
[emulator-5554 Android 13 #0-4] WebdriverIO and Appium, when interacting with a login form,
[emulator-5554 Android 13 #0-4]    ✓ should be able login successfully
[emulator-5554 Android 13 #0-4]    ✓ should be able sign up successfully
[emulator-5554 Android 13 #0-4]
[emulator-5554 Android 13 #0-4] 2 passing (16.5s)
------------------------------------------------------------------
[emulator-5554 Android 13 #0-5] Running: emulator-5554 on Android 13 executing D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-5] Session ID: ff45e979-8eb2-4043-9d31-d282f80f2fda
[emulator-5554 Android 13 #0-5]
[emulator-5554 Android 13 #0-5] » \tests\specs\app.swipe.spec.ts
[emulator-5554 Android 13 #0-5] WebdriverIO and Appium, when using swiping
[emulator-5554 Android 13 #0-5]    ✓ should be able to swipe horizontal by swiping the carousel from left to right
[emulator-5554 Android 13 #0-5]    ✓ should be able to swipe vertical by finding the surprise
[emulator-5554 Android 13 #0-5]
[emulator-5554 Android 13 #0-5] 2 passing (33.5s)
------------------------------------------------------------------
[emulator-5554 Android 13 #0-6] Running: emulator-5554 on Android 13 executing D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-6] Session ID: 2ef76071-43b3-4287-be0a-0c2322b1cf59
[emulator-5554 Android 13 #0-6]
[emulator-5554 Android 13 #0-6] » \tests\specs\app.tab.bar.navigation.spec.ts
[emulator-5554 Android 13 #0-6] WebdriverIO and Appium, when using navigation through the tab bar
[emulator-5554 Android 13 #0-6]    ✓ should be able to open the webview
[emulator-5554 Android 13 #0-6]    ✓ should be able to open the login form screen
[emulator-5554 Android 13 #0-6]    ✓ should be able to open the forms screen
[emulator-5554 Android 13 #0-6]    ✓ should be able to open the login form screen
[emulator-5554 Android 13 #0-6]    ✓ should be able to open the forms screen
[emulator-5554 Android 13 #0-6]    ✓ should be able to open the swipe screen
[emulator-5554 Android 13 #0-6]    ✓ should be able to open the drag and drop screen
[emulator-5554 Android 13 #0-6]    ✓ should be able to open the home screen
[emulator-5554 Android 13 #0-6]
[emulator-5554 Android 13 #0-6] 6 passing (10.3s)
------------------------------------------------------------------
[emulator-5554 Android 13 #0-7] Running: emulator-5554 on Android 13 executing D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-7] Session ID: edd0caad-407a-455c-85bf-060e451c5bb2
[emulator-5554 Android 13 #0-7]
[emulator-5554 Android 13 #0-7] » \tests\specs\app.webview.spec.ts
[emulator-5554 Android 13 #0-7] WebdriverIO and Appium, when interacting with a WebView,
[emulator-5554 Android 13 #0-7]    ✓ should be able to switch between webview, native and webview
[emulator-5554 Android 13 #0-7]
[emulator-5554 Android 13 #0-7] 1 passing (17.7s)
------------------------------------------------------------------
[emulator-5554 Android 13 #0-8] Running: emulator-5554 on Android 13 executing D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25_for testing\appium-boilerplate\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-8] Session ID: c418274e-777f-494f-80d5-7a4fb3bdc509
[emulator-5554 Android 13 #0-8]
[emulator-5554 Android 13 #0-8] » \tests\specs\app.webview.xpath.spec.ts
[emulator-5554 Android 13 #0-8] WebdriverIO and Appium, when interacting with a webview through XPATH
[emulator-5554 Android 13 #0-8]    ✓ should be able to verify that the WebView is shown by xpath
[emulator-5554 Android 13 #0-8]    ✓ should be able to verify that the WebView is shown by switching to the WebView
[emulator-5554 Android 13 #0-8]
[emulator-5554 Android 13 #0-8] 2 passing (5.7s)


Spec Files:      7 passed, 2 failed, 9 total (100% completed) in 00:04:52