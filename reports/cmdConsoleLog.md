npm run android.app

> hw25@1.0.0 android.app
> wdio config/wdio.android.app.conf.ts


Execution of 9 workers started at 2023-02-13T11:56:59.151Z

2023-02-13T11:56:59.153Z DEBUG @wdio/utils:initialiseServices: initialise service "appium" as NPM package
2023-02-13T11:56:59.164Z INFO @wdio/cli:launcher: Run onPrepare hook
2023-02-13T11:56:59.166Z DEBUG @wdio/appium-service: Will spawn Appium process: cmd /c appium --base-path / --relaxed-security --address localhost --log ./logs/appium.log
2023-02-13T11:56:59.965Z DEBUG @wdio/appium-service: Appium started with ID: 16744
2023-02-13T11:56:59.966Z DEBUG @wdio/cli:utils: Finished to run "onPrepare" hook in 801ms
2023-02-13T11:56:59.968Z INFO @wdio/cli:launcher: Run onWorkerStart hook
2023-02-13T11:56:59.969Z DEBUG @wdio/cli:utils: Finished to run "onWorkerStart" hook in 0ms
2023-02-13T11:56:59.970Z INFO @wdio/local-runner: Start worker 0-0 with arg: config/wdio.android.app.conf.ts
[0-0] 2023-02-13T11:57:00.372Z INFO @wdio/local-runner: Run worker command: run
[0-0] 2023-02-13T11:57:00.492Z DEBUG @wdio/config:utils: Found 'ts-node' package, auto-compiling TypeScript files
[0-0] 2023-02-13T11:57:00.566Z DEBUG @wdio/local-runner:utils: init remote session
[0-0] 2023-02-13T11:57:00.573Z DEBUG @wdio/utils:initialiseServices: initialise service "appium" as NPM package
[0-0] RUNNING in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\specs\app.biometric.login.spec.ts
[0-0] 2023-02-13T11:57:00.849Z DEBUG @wdio/local-runner:utils: init remote session
[0-0] 2023-02-13T11:57:00.850Z INFO webdriver: Initiate new session using the WebDriver protocol
[0-0] 2023-02-13T11:57:00.902Z INFO webdriver: [POST] http://localhost:4723/session
[0-0] 2023-02-13T11:57:00.902Z INFO webdriver: DATA {
[0-0]   capabilities: {
[0-0]     alwaysMatch: {
[0-0]       platformName: 'Android',
[0-0]       'appium:deviceName': 'emulator-5554',
[0-0]       'appium:platformVersion': '13.0',
[0-0]       'appium:orientation': 'PORTRAIT',
[0-0]       'appium:automationName': 'UiAutomator2',
[0-0]       'appium:app': 'D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk',
[0-0]       'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
[0-0]       'appium:newCommandTimeout': 240,
[0-0]       'appium:connectHardwareKeyboard': true
[0-0]     },
[0-0]     firstMatch: [ {} ]
[0-0]   },
[0-0]   desiredCapabilities: {
[0-0]     platformName: 'Android',
[0-0]     'appium:deviceName': 'emulator-5554',
[0-0]     'appium:platformVersion': '13.0',
[0-0]     'appium:orientation': 'PORTRAIT',
[0-0]     'appium:automationName': 'UiAutomator2',
[0-0]     'appium:app': 'D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk',
[0-0]     'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
[0-0]     'appium:newCommandTimeout': 240,
[0-0]     'appium:connectHardwareKeyboard': true
[0-0]   }
[0-0] }
[0-0] 2023-02-13T11:57:10.448Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-0] 2023-02-13T11:57:10.448Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:10.448Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-0] 2023-02-13T11:57:10.517Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0167-ffff-ffff00000015',
[0-0]   ELEMENT: '00000000-0000-0167-ffff-ffff00000015'
[0-0] }
[0-0] 2023-02-13T11:57:10.525Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0167-ffff-ffff00000015")
[0-0] 2023-02-13T11:57:10.525Z INFO webdriver: [GET] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element/00000000-0000-0167-ffff-ffff00000015/displayed
[0-0] 2023-02-13T11:57:10.554Z INFO webdriver: RESULT true
[0-0] 2023-02-13T11:57:10.556Z INFO webdriver: COMMAND findElement("accessibility id", "Login")
[0-0] 2023-02-13T11:57:10.556Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:10.556Z INFO webdriver: DATA { using: 'accessibility id', value: 'Login' }
[0-0] 2023-02-13T11:57:10.601Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0167-ffff-ffff0000001f',
[0-0]   ELEMENT: '00000000-0000-0167-ffff-ffff0000001f'
[0-0] }
[0-0] 2023-02-13T11:57:10.607Z INFO webdriver: COMMAND elementClick("00000000-0000-0167-ffff-ffff0000001f")
[0-0] 2023-02-13T11:57:10.607Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element/00000000-0000-0167-ffff-ffff0000001f/click
[0-0] 2023-02-13T11:57:10.659Z INFO webdriver: COMMAND findElement("accessibility id", "Login-screen")
[0-0] 2023-02-13T11:57:10.660Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:10.660Z INFO webdriver: DATA { using: 'accessibility id', value: 'Login-screen' }
[0-0] 2023-02-13T11:57:10.710Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:10.714Z INFO webdriver: COMMAND findElement("accessibility id", "Login-screen")
[0-0] 2023-02-13T11:57:10.715Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:10.715Z INFO webdriver: DATA { using: 'accessibility id', value: 'Login-screen' }
[0-0] 2023-02-13T11:57:10.815Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0167-ffff-ffff00000044',
[0-0]   ELEMENT: '00000000-0000-0167-ffff-ffff00000044'
[0-0] }
[0-0] 2023-02-13T11:57:10.817Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0167-ffff-ffff00000044")
[0-0] 2023-02-13T11:57:10.817Z INFO webdriver: [GET] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element/00000000-0000-0167-ffff-ffff00000044/displayed
[0-0] 2023-02-13T11:57:11.393Z INFO webdriver: RESULT true
[0-0] 2023-02-13T11:57:11.393Z INFO webdriver: COMMAND findElement("accessibility id", "button-biometric")
[0-0] 2023-02-13T11:57:11.393Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:11.393Z INFO webdriver: DATA { using: 'accessibility id', value: 'button-biometric' }
[0-0] 2023-02-13T11:57:11.442Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:11.445Z INFO webdriver: COMMAND findElement("accessibility id", "button-biometric")
[0-0] 2023-02-13T11:57:11.445Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:11.445Z INFO webdriver: DATA { using: 'accessibility id', value: 'button-biometric' }
[0-0] 2023-02-13T11:57:11.507Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:11.510Z INFO webdriver: COMMAND executeScript("mobile: shell", <object>)
[0-0] 2023-02-13T11:57:11.510Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/execute/sync
[0-0] 2023-02-13T11:57:11.510Z INFO webdriver: DATA {
[0-0]   script: 'mobile: shell',
[0-0]   args: [
[0-0]     {
[0-0]       command: 'am start -a android.settings.SECURITY_SETTINGS && locksettings set-pin 1234'
[0-0]     }
[0-0]   ]
[0-0] }
[0-0] 2023-02-13T11:57:13.052Z INFO webdriver: RESULT Starting: Intent { act=android.settings.SECURITY_SETTINGS }
[0-0]
[0-0] 2023-02-13T11:57:13.053Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("Fingerprint")")
[0-0] 2023-02-13T11:57:13.053Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:13.053Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("Fingerprint")'
[0-0] }
[0-0] 2023-02-13T11:57:13.976Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-016a-ffff-ffff00000102',
[0-0]   ELEMENT: '00000000-0000-016a-ffff-ffff00000102'
[0-0] }
[0-0] 2023-02-13T11:57:13.978Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-016a-ffff-ffff00000102")
[0-0] 2023-02-13T11:57:13.978Z INFO webdriver: [GET] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element/00000000-0000-016a-ffff-ffff00000102/displayed
[0-0] 2023-02-13T11:57:14.001Z INFO webdriver: RESULT true
[0-0] 2023-02-13T11:57:14.001Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("Fingerprint")")
[0-0] 2023-02-13T11:57:14.001Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:14.001Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("Fingerprint")'
[0-0] }
[0-0] 2023-02-13T11:57:14.046Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-016a-ffff-ffff00000102',
[0-0]   ELEMENT: '00000000-0000-016a-ffff-ffff00000102'
[0-0] }
[0-0] 2023-02-13T11:57:14.048Z INFO webdriver: COMMAND elementClick("00000000-0000-016a-ffff-ffff00000102")
[0-0] 2023-02-13T11:57:14.048Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element/00000000-0000-016a-ffff-ffff00000102/click
[0-0] 2023-02-13T11:57:14.759Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("Re-enter your PIN")")
[0-0] 2023-02-13T11:57:14.759Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:14.759Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("Re-enter your PIN")'
[0-0] }
[0-0] 2023-02-13T11:57:15.620Z INFO webdriver: RESULT {
[0-0]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-016c-ffff-ffff00000158',
[0-0]   ELEMENT: '00000000-0000-016c-ffff-ffff00000158'
[0-0] }
[0-0] 2023-02-13T11:57:15.622Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-016c-ffff-ffff00000158")
[0-0] 2023-02-13T11:57:15.622Z INFO webdriver: [GET] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element/00000000-0000-016c-ffff-ffff00000158/displayed
[0-0] 2023-02-13T11:57:15.640Z INFO webdriver: RESULT true
[0-0] 2023-02-13T11:57:15.640Z INFO webdriver: COMMAND executeScript("mobile: shell", <object>)
[0-0] 2023-02-13T11:57:15.641Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/execute/sync
[0-0] 2023-02-13T11:57:15.641Z INFO webdriver: DATA {
[0-0]   script: 'mobile: shell',
[0-0]   args: [ { command: 'input text 1234 && input keyevent 66' } ]
[0-0] }
[0-0] 2023-02-13T11:57:15.815Z INFO webdriver: RESULT 
[0-0] 2023-02-13T11:57:15.815Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:15.816Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:15.816Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:17.286Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:17.290Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:17.290Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:17.290Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:17.311Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:17.798Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:17.799Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:17.799Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:17.929Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:18.301Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:18.301Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:18.301Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:18.320Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:18.805Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:18.806Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:18.806Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:18.852Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:19.291Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:19.292Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:19.292Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:19.312Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:19.794Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:19.794Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:19.794Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:19.816Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:20.295Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:20.295Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:20.295Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:20.315Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:20.796Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:20.796Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:20.796Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:20.820Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:21.293Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:21.294Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:21.294Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:21.341Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:21.792Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:21.792Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:21.792Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:21.905Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:22.296Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:22.296Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:22.296Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:22.314Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:22.795Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:22.796Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:22.796Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:22.831Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:23.294Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:23.294Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:23.294Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:23.309Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:23.795Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:23.795Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:23.795Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:23.813Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:24.298Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:24.298Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:24.298Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:24.314Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:24.797Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:24.797Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:24.797Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:24.838Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:25.300Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:25.301Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:25.301Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:25.318Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:25.803Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:25.803Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:25.803Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:25.820Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:26.303Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:26.303Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:26.303Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:26.340Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:26.802Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:26.802Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:26.802Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:26.822Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:27.304Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:27.304Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:27.304Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:27.322Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:27.802Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:27.802Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:27.802Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:27.826Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:28.302Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:28.302Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:28.302Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:28.325Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:28.802Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:28.802Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:28.802Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:28.817Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:29.299Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:29.299Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:29.299Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:29.313Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:29.798Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:29.799Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:29.799Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:29.835Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:30.301Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:30.301Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:30.301Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:30.325Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:30.798Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:30.798Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:30.798Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:30.813Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:31.295Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:31.296Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:31.296Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:31.314Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:31.794Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:31.794Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:31.795Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:31.989Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:32.294Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:32.294Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:32.294Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:32.318Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:32.791Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:32.791Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:32.792Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:32.826Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:33.290Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:33.291Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:33.291Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:33.312Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:33.802Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:33.803Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:33.803Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:33.848Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:34.305Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:34.305Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:34.305Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:34.330Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:34.792Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:34.793Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:34.793Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:34.832Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:35.306Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:35.306Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:35.306Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:35.325Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:35.805Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:35.805Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:35.805Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:35.843Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:36.290Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:36.290Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:36.290Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:36.333Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:36.803Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:36.803Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:36.803Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:36.829Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:37.302Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:37.303Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:37.303Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:37.336Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:37.803Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:37.804Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:37.804Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:37.842Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:38.301Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:38.301Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:38.301Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:38.323Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:38.802Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:38.802Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:38.802Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:38.816Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'
[0-0] }
[0-0] 2023-02-13T11:57:39.302Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:39.302Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:39.302Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:39.316Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:39.802Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:39.802Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:39.802Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:39.831Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:40.301Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:40.301Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:40.301Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:40.321Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:40.797Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:40.797Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:40.797Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:40.819Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:41.294Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:41.294Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:41.294Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:41.342Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:41.796Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:41.796Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:41.796Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:41.827Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:42.298Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:42.298Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:42.298Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:42.330Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:42.797Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:42.797Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:42.797Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:42.812Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:43.294Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:43.294Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:43.294Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:43.332Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:43.795Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:43.795Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:43.795Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:43.821Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:44.291Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:44.291Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:44.291Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:44.323Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:44.791Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:44.791Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:44.791Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:44.819Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:45.292Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:45.292Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:45.292Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:45.330Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:45.792Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:45.792Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:45.792Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:45.807Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:46.291Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:46.291Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:46.291Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:46.324Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:46.805Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:46.805Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:46.805Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:46.833Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'
[0-0] }
[0-0] 2023-02-13T11:57:47.302Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:47.303Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:47.303Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:47.358Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:47.802Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:47.802Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:47.802Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:47.819Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:48.302Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:48.302Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:48.302Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:48.323Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:48.791Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:48.791Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:48.792Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:48.817Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:49.292Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:49.293Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:49.293Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:49.348Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:49.794Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:49.794Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:49.794Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:49.830Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:50.294Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:50.294Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:50.294Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:50.307Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:50.805Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:50.805Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:50.806Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:50.833Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:51.302Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:51.302Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:51.302Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:51.322Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:51.803Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:51.803Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:51.803Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:51.992Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:52.301Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:52.301Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:52.301Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:52.318Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:52.798Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:52.798Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:52.798Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:52.811Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:53.297Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:53.297Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:53.298Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:53.343Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:53.798Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:53.799Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:53.799Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:53.837Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:54.299Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:54.299Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:54.300Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:54.350Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:54.797Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:54.797Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:54.797Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:54.840Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:55.296Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:55.297Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:55.297Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:55.326Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:55.793Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:55.793Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:55.793Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:55.822Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:56.290Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:56.290Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:56.290Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:56.324Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:56.803Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:56.803Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:56.803Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:56.845Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:57.302Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:57.302Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:57.302Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:57.329Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:57.801Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:57.801Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:57.801Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:57.820Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:58.296Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:58.297Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:58.297Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:58.335Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:58.794Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:58.794Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:58.794Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:58.817Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:59.292Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:59.292Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:59.292Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:59.356Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:57:59.793Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:57:59.793Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:57:59.793Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:57:59.820Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:58:00.296Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:58:00.296Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:58:00.296Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:58:00.337Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:58:00.796Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:58:00.796Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:58:00.796Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:58:00.823Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:58:01.290Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:58:01.290Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:58:01.290Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:58:01.318Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:58:01.803Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:58:01.803Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:58:01.803Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:58:01.839Z INFO webdriver: RESULT {
[0-0]   error: 'no such element',
[0-0]   message: 'An element could not be located on the page using the given search parameters.',
[0-0]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-0]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-0]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-0] }
[0-0] 2023-02-13T11:58:02.302Z INFO webdriver: COMMAND findElement("-android uiautomator", "new UiSelector().textContains("NEXT")")
[0-0] 2023-02-13T11:58:02.302Z INFO webdriver: [POST] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a/element
[0-0] 2023-02-13T11:58:02.302Z INFO webdriver: DATA {
[0-0]   using: '-android uiautomator',
[0-0]   value: 'new UiSelector().textContains("NEXT")'
[0-0] }
[0-0] 2023-02-13T11:58:02.313Z INFO webdriver: COMMAND deleteSession()
[0-0] 2023-02-13T11:58:02.314Z INFO webdriver: [DELETE] http://localhost:4723/session/b8a9b8e3-0204-44df-b7ba-0cecb3bd624a
2023-02-13T11:58:02.629Z DEBUG @wdio/local-runner: Runner 0-0 finished with exit code 1
[0-0] FAILED in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\specs\app.biometric.login.spec.ts
2023-02-13T11:58:02.631Z INFO @wdio/cli:launcher: Run onWorkerEnd hook
2023-02-13T11:58:02.631Z DEBUG @wdio/cli:utils: Finished to run "onWorkerEnd" hook in 0ms
2023-02-13T11:58:02.632Z INFO @wdio/cli:launcher: Run onWorkerStart hook
2023-02-13T11:58:02.632Z DEBUG @wdio/cli:utils: Finished to run "onWorkerStart" hook in 0ms
2023-02-13T11:58:02.633Z INFO @wdio/local-runner: Start worker 0-1 with arg: config/wdio.android.app.conf.ts
[0-1] 2023-02-13T11:58:03.050Z INFO @wdio/local-runner: Run worker command: run
[0-1] 2023-02-13T11:58:03.169Z DEBUG @wdio/config:utils: Found 'ts-node' package, auto-compiling TypeScript files
[0-1] 2023-02-13T11:58:03.246Z DEBUG @wdio/local-runner:utils: init remote session
[0-1] 2023-02-13T11:58:03.253Z DEBUG @wdio/utils:initialiseServices: initialise service "appium" as NPM package
[0-1] RUNNING in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\specs\app.deep.link.navigation.spec.ts
[0-1] 2023-02-13T11:58:03.549Z DEBUG @wdio/local-runner:utils: init remote session
[0-1] 2023-02-13T11:58:03.550Z INFO webdriver: Initiate new session using the WebDriver protocol
[0-1] 2023-02-13T11:58:03.601Z INFO webdriver: [POST] http://localhost:4723/session
[0-1] 2023-02-13T11:58:03.601Z INFO webdriver: DATA {
[0-1]   capabilities: {
[0-1]     alwaysMatch: {
[0-1]       platformName: 'Android',
[0-1]       'appium:deviceName': 'emulator-5554',
[0-1]       'appium:platformVersion': '13.0',
[0-1]       'appium:orientation': 'PORTRAIT',
[0-1]       'appium:automationName': 'UiAutomator2',
[0-1]       'appium:app': 'D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk',
[0-1]       'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
[0-1]       'appium:newCommandTimeout': 240,
[0-1]       'appium:connectHardwareKeyboard': true
[0-1]     },
[0-1]     firstMatch: [ {} ]
[0-1]   },
[0-1]   desiredCapabilities: {
[0-1]     platformName: 'Android',
[0-1]     'appium:deviceName': 'emulator-5554',
[0-1]     'appium:platformVersion': '13.0',
[0-1]     'appium:orientation': 'PORTRAIT',
[0-1]     'appium:automationName': 'UiAutomator2',
[0-1]     'appium:app': 'D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk',
[0-1]     'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
[0-1]     'appium:newCommandTimeout': 240,
[0-1]     'appium:connectHardwareKeyboard': true
[0-1]   }
[0-1] }
[0-1] 2023-02-13T11:58:09.295Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-1] 2023-02-13T11:58:09.295Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element
[0-1] 2023-02-13T11:58:09.295Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-1] 2023-02-13T11:58:09.330Z INFO webdriver: RESULT {
[0-1]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0180-ffff-ffff00000015',
[0-1]   ELEMENT: '00000000-0000-0180-ffff-ffff00000015'
[0-1] }
[0-1] 2023-02-13T11:58:09.336Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0180-ffff-ffff00000015")
[0-1] 2023-02-13T11:58:09.336Z INFO webdriver: [GET] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element/00000000-0000-0180-ffff-ffff00000015/displayed
[0-1] 2023-02-13T11:58:09.354Z INFO webdriver: RESULT true
[0-1] 2023-02-13T11:58:09.355Z INFO webdriver: COMMAND executeScript("mobile:deepLink", <object>)
[0-1] 2023-02-13T11:58:09.355Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/execute/sync
[0-1] 2023-02-13T11:58:09.355Z INFO webdriver: DATA {
[0-1]   script: 'mobile:deepLink',
[0-1]   args: [ { url: 'wdio://webview', package: 'com.wdiodemoapp' } ]
[0-1] }
[0-1] 2023-02-13T11:58:09.417Z INFO webdriver: COMMAND getContexts()
[0-1] 2023-02-13T11:58:09.417Z INFO webdriver: [GET] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/contexts
[0-1] 2023-02-13T11:58:09.972Z INFO webdriver: RESULT [ 'NATIVE_APP', 'WEBVIEW_com.wdiodemoapp' ]
[0-1] 2023-02-13T11:58:09.972Z INFO webdriver: COMMAND getContexts()
[0-1] 2023-02-13T11:58:09.973Z INFO webdriver: [GET] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/contexts
[0-1] 2023-02-13T11:58:10.111Z INFO webdriver: RESULT [ 'NATIVE_APP', 'WEBVIEW_com.wdiodemoapp' ]
[0-1] 2023-02-13T11:58:10.111Z INFO webdriver: COMMAND switchContext("WEBVIEW_com.wdiodemoapp")
[0-1] 2023-02-13T11:58:10.111Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/context
[0-1] 2023-02-13T11:58:10.111Z INFO webdriver: DATA { name: 'WEBVIEW_com.wdiodemoapp' }
[0-1] 2023-02-13T11:58:11.787Z INFO webdriver: COMMAND executeScript("return (() => document.readyState).apply(null, arguments)", <object>)
[0-1] 2023-02-13T11:58:11.788Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/execute/sync
[0-1] 2023-02-13T11:58:11.788Z INFO webdriver: DATA {
[0-1]   script: 'return (() => document.readyState).apply(null, arguments)',
[0-1]   args: []
[0-1] }
[0-1] 2023-02-13T11:58:14.170Z INFO webdriver: RESULT complete
[0-1] 2023-02-13T11:58:14.170Z INFO webdriver: COMMAND getContexts()
[0-1] 2023-02-13T11:58:14.170Z INFO webdriver: [GET] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/contexts
[0-1] 2023-02-13T11:58:14.420Z INFO webdriver: RESULT [ 'NATIVE_APP', 'WEBVIEW_com.wdiodemoapp' ]
[0-1] 2023-02-13T11:58:14.420Z INFO webdriver: COMMAND switchContext("NATIVE_APP")
[0-1] 2023-02-13T11:58:14.420Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/context
[0-1] 2023-02-13T11:58:14.420Z INFO webdriver: DATA { name: 'NATIVE_APP' }
[0-1] 2023-02-13T11:58:14.650Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-1] 2023-02-13T11:58:14.650Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element
[0-1] 2023-02-13T11:58:14.650Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-1] 2023-02-13T11:58:15.069Z INFO webdriver: RESULT {
[0-1]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0180-ffff-ffff00000015',
[0-1]   ELEMENT: '00000000-0000-0180-ffff-ffff00000015'
[0-1] }
[0-1] 2023-02-13T11:58:15.073Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0180-ffff-ffff00000015")
[0-1] 2023-02-13T11:58:15.073Z INFO webdriver: [GET] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element/00000000-0000-0180-ffff-ffff00000015/displayed
[0-1] 2023-02-13T11:58:15.118Z INFO webdriver: RESULT true
[0-1] 2023-02-13T11:58:15.119Z INFO webdriver: COMMAND executeScript("mobile:deepLink", <object>)
[0-1] 2023-02-13T11:58:15.119Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/execute/sync
[0-1] 2023-02-13T11:58:15.119Z INFO webdriver: DATA {
[0-1]   script: 'mobile:deepLink',
[0-1]   args: [ { url: 'wdio://login', package: 'com.wdiodemoapp' } ]
[0-1] }
[0-1] 2023-02-13T11:58:15.187Z INFO webdriver: COMMAND findElement("accessibility id", "Login-screen")
[0-1] 2023-02-13T11:58:15.187Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element
[0-1] 2023-02-13T11:58:15.188Z INFO webdriver: DATA { using: 'accessibility id', value: 'Login-screen' }
[0-1] 2023-02-13T11:58:16.022Z INFO webdriver: RESULT {
[0-1]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0180-ffff-ffff0000004c',
[0-1]   ELEMENT: '00000000-0000-0180-ffff-ffff0000004c'
[0-1] }
[0-1] 2023-02-13T11:58:16.024Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0180-ffff-ffff0000004c")
[0-1] 2023-02-13T11:58:16.024Z INFO webdriver: [GET] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element/00000000-0000-0180-ffff-ffff0000004c/displayed
[0-1] 2023-02-13T11:58:16.034Z INFO webdriver: RESULT true
[0-1] 2023-02-13T11:58:16.035Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-1] 2023-02-13T11:58:16.035Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element
[0-1] 2023-02-13T11:58:16.035Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-1] 2023-02-13T11:58:16.063Z INFO webdriver: RESULT {
[0-1]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0180-ffff-ffff00000015',
[0-1]   ELEMENT: '00000000-0000-0180-ffff-ffff00000015'
[0-1] }
[0-1] 2023-02-13T11:58:16.065Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0180-ffff-ffff00000015")
[0-1] 2023-02-13T11:58:16.065Z INFO webdriver: [GET] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element/00000000-0000-0180-ffff-ffff00000015/displayed
[0-1] 2023-02-13T11:58:16.076Z INFO webdriver: RESULT true
[0-1] 2023-02-13T11:58:16.077Z INFO webdriver: COMMAND executeScript("mobile:deepLink", <object>)
[0-1] 2023-02-13T11:58:16.077Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/execute/sync
[0-1] 2023-02-13T11:58:16.077Z INFO webdriver: DATA {
[0-1]   script: 'mobile:deepLink',
[0-1]   args: [ { url: 'wdio://forms', package: 'com.wdiodemoapp' } ]
[0-1] }
[0-1] 2023-02-13T11:58:16.121Z INFO webdriver: COMMAND findElement("accessibility id", "Forms-screen")
[0-1] 2023-02-13T11:58:16.121Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element
[0-1] 2023-02-13T11:58:16.122Z INFO webdriver: DATA { using: 'accessibility id', value: 'Forms-screen' }
[0-1] 2023-02-13T11:58:16.254Z INFO webdriver: RESULT {
[0-1]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0180-ffff-ffff00000069',
[0-1]   ELEMENT: '00000000-0000-0180-ffff-ffff00000069'
[0-1] }
[0-1] 2023-02-13T11:58:16.257Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0180-ffff-ffff00000069")
[0-1] 2023-02-13T11:58:16.257Z INFO webdriver: [GET] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element/00000000-0000-0180-ffff-ffff00000069/displayed
[0-1] 2023-02-13T11:58:16.701Z INFO webdriver: RESULT true
[0-1] 2023-02-13T11:58:16.702Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-1] 2023-02-13T11:58:16.702Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element
[0-1] 2023-02-13T11:58:16.702Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-1] 2023-02-13T11:58:16.738Z INFO webdriver: RESULT {
[0-1]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0180-ffff-ffff00000015',
[0-1]   ELEMENT: '00000000-0000-0180-ffff-ffff00000015'
[0-1] }
[0-1] 2023-02-13T11:58:16.740Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0180-ffff-ffff00000015")
[0-1] 2023-02-13T11:58:16.740Z INFO webdriver: [GET] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element/00000000-0000-0180-ffff-ffff00000015/displayed
[0-1] 2023-02-13T11:58:16.751Z INFO webdriver: RESULT true
[0-1] 2023-02-13T11:58:16.751Z INFO webdriver: COMMAND executeScript("mobile:deepLink", <object>)
[0-1] 2023-02-13T11:58:16.751Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/execute/sync
[0-1] 2023-02-13T11:58:16.751Z INFO webdriver: DATA {
[0-1]   script: 'mobile:deepLink',
[0-1]   args: [ { url: 'wdio://swipe', package: 'com.wdiodemoapp' } ]
[0-1] }
[0-1] 2023-02-13T11:58:16.795Z INFO webdriver: COMMAND findElement("accessibility id", "Swipe-screen")
[0-1] 2023-02-13T11:58:16.795Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element
[0-1] 2023-02-13T11:58:16.795Z INFO webdriver: DATA { using: 'accessibility id', value: 'Swipe-screen' }
[0-1] 2023-02-13T11:58:16.835Z INFO webdriver: RESULT {
[0-1]   error: 'no such element',
[0-1]   message: 'An element could not be located on the page using the given search parameters.',
[0-1]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-1]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-1]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-1]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-1]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-1] }
[0-1] 2023-02-13T11:58:16.838Z INFO webdriver: COMMAND findElement("accessibility id", "Swipe-screen")
[0-1] 2023-02-13T11:58:16.838Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element
[0-1] 2023-02-13T11:58:16.838Z INFO webdriver: DATA { using: 'accessibility id', value: 'Swipe-screen' }
[0-1] 2023-02-13T11:58:16.889Z INFO webdriver: RESULT {
[0-1]   error: 'no such element',
[0-1]   message: 'An element could not be located on the page using the given search parameters.',
[0-1]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-1]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-1]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-1]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-1]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-1] }
[0-1] 2023-02-13T11:58:17.349Z INFO webdriver: COMMAND findElement("accessibility id", "Swipe-screen")
[0-1] 2023-02-13T11:58:17.349Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element
[0-1] 2023-02-13T11:58:17.349Z INFO webdriver: DATA { using: 'accessibility id', value: 'Swipe-screen' }
[0-1] 2023-02-13T11:58:18.781Z INFO webdriver: RESULT {
[0-1]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0180-ffff-ffff0000008e',
[0-1]   ELEMENT: '00000000-0000-0180-ffff-ffff0000008e'
[0-1] }
[0-1] 2023-02-13T11:58:18.783Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0180-ffff-ffff0000008e")
[0-1] 2023-02-13T11:58:18.783Z INFO webdriver: [GET] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element/00000000-0000-0180-ffff-ffff0000008e/displayed
[0-1] 2023-02-13T11:58:18.794Z INFO webdriver: RESULT true
[0-1] 2023-02-13T11:58:18.795Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-1] 2023-02-13T11:58:18.795Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element
[0-1] 2023-02-13T11:58:18.796Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-1] 2023-02-13T11:58:18.827Z INFO webdriver: RESULT {
[0-1]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0180-ffff-ffff00000015',
[0-1]   ELEMENT: '00000000-0000-0180-ffff-ffff00000015'
[0-1] }
[0-1] 2023-02-13T11:58:18.829Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0180-ffff-ffff00000015")
[0-1] 2023-02-13T11:58:18.829Z INFO webdriver: [GET] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element/00000000-0000-0180-ffff-ffff00000015/displayed
[0-1] 2023-02-13T11:58:18.844Z INFO webdriver: RESULT true
[0-1] 2023-02-13T11:58:18.844Z INFO webdriver: COMMAND executeScript("mobile:deepLink", <object>)
[0-1] 2023-02-13T11:58:18.844Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/execute/sync
[0-1] 2023-02-13T11:58:18.844Z INFO webdriver: DATA {
[0-1]   script: 'mobile:deepLink',
[0-1]   args: [ { url: 'wdio://drag', package: 'com.wdiodemoapp' } ]
[0-1] }
[0-1] 2023-02-13T11:58:18.895Z INFO webdriver: COMMAND findElement("accessibility id", "Drag-drop-screen")
[0-1] 2023-02-13T11:58:18.895Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element
[0-1] 2023-02-13T11:58:18.895Z INFO webdriver: DATA { using: 'accessibility id', value: 'Drag-drop-screen' }
[0-1] 2023-02-13T11:58:18.935Z INFO webdriver: RESULT {
[0-1]   error: 'no such element',
[0-1]   message: 'An element could not be located on the page using the given search parameters.',
[0-1]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-1]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-1]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-1]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-1]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-1] }
[0-1] 2023-02-13T11:58:18.938Z INFO webdriver: COMMAND findElement("accessibility id", "Drag-drop-screen")
[0-1] 2023-02-13T11:58:18.938Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element
[0-1] 2023-02-13T11:58:18.938Z INFO webdriver: DATA { using: 'accessibility id', value: 'Drag-drop-screen' }
[0-1] 2023-02-13T11:58:19.019Z INFO webdriver: RESULT {
[0-1]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0180-ffff-ffff000000b7',
[0-1]   ELEMENT: '00000000-0000-0180-ffff-ffff000000b7'
[0-1] }
[0-1] 2023-02-13T11:58:19.020Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0180-ffff-ffff000000b7")
[0-1] 2023-02-13T11:58:19.021Z INFO webdriver: [GET] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element/00000000-0000-0180-ffff-ffff000000b7/displayed
[0-1] 2023-02-13T11:58:19.545Z INFO webdriver: RESULT true
[0-1] 2023-02-13T11:58:19.546Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-1] 2023-02-13T11:58:19.546Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element
[0-1] 2023-02-13T11:58:19.546Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-1] 2023-02-13T11:58:19.602Z INFO webdriver: RESULT {
[0-1]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0180-ffff-ffff00000015',
[0-1]   ELEMENT: '00000000-0000-0180-ffff-ffff00000015'
[0-1] }
[0-1] 2023-02-13T11:58:19.605Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0180-ffff-ffff00000015")
[0-1] 2023-02-13T11:58:19.605Z INFO webdriver: [GET] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element/00000000-0000-0180-ffff-ffff00000015/displayed
[0-1] 2023-02-13T11:58:19.615Z INFO webdriver: RESULT true
[0-1] 2023-02-13T11:58:19.616Z INFO webdriver: COMMAND executeScript("mobile:deepLink", <object>)
[0-1] 2023-02-13T11:58:19.616Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/execute/sync
[0-1] 2023-02-13T11:58:19.616Z INFO webdriver: DATA {
[0-1]   script: 'mobile:deepLink',
[0-1]   args: [ { url: 'wdio://home', package: 'com.wdiodemoapp' } ]
[0-1] }
[0-1] 2023-02-13T11:58:19.662Z INFO webdriver: COMMAND findElement("accessibility id", "Home-screen")
[0-1] 2023-02-13T11:58:19.662Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element
[0-1] 2023-02-13T11:58:19.662Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home-screen' }
[0-1] 2023-02-13T11:58:19.738Z INFO webdriver: RESULT {
[0-1]   error: 'no such element',
[0-1]   message: 'An element could not be located on the page using the given search parameters.',
[0-1]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-1]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-1]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-1]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-1]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-1] }
[0-1] 2023-02-13T11:58:19.741Z INFO webdriver: COMMAND findElement("accessibility id", "Home-screen")
[0-1] 2023-02-13T11:58:19.741Z INFO webdriver: [POST] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element
[0-1] 2023-02-13T11:58:19.741Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home-screen' }
[0-1] 2023-02-13T11:58:20.282Z INFO webdriver: RESULT {
[0-1]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0180-ffff-ffff00000036',
[0-1]   ELEMENT: '00000000-0000-0180-ffff-ffff00000036'
[0-1] }
[0-1] 2023-02-13T11:58:20.285Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0180-ffff-ffff00000036")
[0-1] 2023-02-13T11:58:20.285Z INFO webdriver: [GET] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c/element/00000000-0000-0180-ffff-ffff00000036/displayed
[0-1] 2023-02-13T11:58:20.297Z INFO webdriver: RESULT true
[0-1] 2023-02-13T11:58:20.298Z INFO webdriver: COMMAND deleteSession()
[0-1] 2023-02-13T11:58:20.298Z INFO webdriver: [DELETE] http://localhost:4723/session/728cca98-f6a7-46cd-a509-67e9d264968c
2023-02-13T11:58:20.721Z DEBUG @wdio/local-runner: Runner 0-1 finished with exit code 0
[0-1] PASSED in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\specs\app.deep.link.navigation.spec.ts
2023-02-13T11:58:20.722Z INFO @wdio/cli:launcher: Run onWorkerEnd hook
2023-02-13T11:58:20.723Z DEBUG @wdio/cli:utils: Finished to run "onWorkerEnd" hook in 0ms
2023-02-13T11:58:20.723Z INFO @wdio/cli:launcher: Run onWorkerStart hook
2023-02-13T11:58:20.723Z DEBUG @wdio/cli:utils: Finished to run "onWorkerStart" hook in 0ms
2023-02-13T11:58:20.725Z INFO @wdio/local-runner: Start worker 0-2 with arg: config/wdio.android.app.conf.ts
[0-2] 2023-02-13T11:58:21.696Z INFO @wdio/local-runner: Run worker command: run
[0-2] 2023-02-13T11:58:22.001Z DEBUG @wdio/config:utils: Found 'ts-node' package, auto-compiling TypeScript files
[0-2] 2023-02-13T11:58:22.138Z DEBUG @wdio/local-runner:utils: init remote session
[0-2] 2023-02-13T11:58:22.149Z DEBUG @wdio/utils:initialiseServices: initialise service "appium" as NPM package
[0-2] RUNNING in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\specs\app.drag.and.drop.spec.ts
[0-2] 2023-02-13T11:58:22.513Z DEBUG @wdio/local-runner:utils: init remote session
[0-2] 2023-02-13T11:58:22.514Z INFO webdriver: Initiate new session using the WebDriver protocol
[0-2] 2023-02-13T11:58:22.577Z INFO webdriver: [POST] http://localhost:4723/session
[0-2] 2023-02-13T11:58:22.577Z INFO webdriver: DATA {
[0-2]   capabilities: {
[0-2]     alwaysMatch: {
[0-2]       platformName: 'Android',
[0-2]       'appium:deviceName': 'emulator-5554',
[0-2]       'appium:platformVersion': '13.0',
[0-2]       'appium:orientation': 'PORTRAIT',
[0-2]       'appium:automationName': 'UiAutomator2',
[0-2]       'appium:app': 'D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk',
[0-2]       'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
[0-2]       'appium:newCommandTimeout': 240,
[0-2]       'appium:connectHardwareKeyboard': true
[0-2]     },
[0-2]     firstMatch: [ {} ]
[0-2]   },
[0-2]   desiredCapabilities: {
[0-2]     platformName: 'Android',
[0-2]     'appium:deviceName': 'emulator-5554',
[0-2]     'appium:platformVersion': '13.0',
[0-2]     'appium:orientation': 'PORTRAIT',
[0-2]     'appium:automationName': 'UiAutomator2',
[0-2]     'appium:app': 'D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk',
[0-2]     'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
[0-2]     'appium:newCommandTimeout': 240,
[0-2]     'appium:connectHardwareKeyboard': true
[0-2]   }
[0-2] }
[0-2] 2023-02-13T11:58:28.407Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-2] 2023-02-13T11:58:28.408Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:28.408Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-2] 2023-02-13T11:58:28.447Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff00000015',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff00000015'
[0-2] }
[0-2] 2023-02-13T11:58:28.458Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0191-ffff-ffff00000015")
[0-2] 2023-02-13T11:58:28.458Z INFO webdriver: [GET] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element/00000000-0000-0191-ffff-ffff00000015/displayed
[0-2] 2023-02-13T11:58:28.517Z INFO webdriver: RESULT true
[0-2] 2023-02-13T11:58:28.518Z INFO webdriver: COMMAND findElement("accessibility id", "Drag")
[0-2] 2023-02-13T11:58:28.518Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:28.518Z INFO webdriver: DATA { using: 'accessibility id', value: 'Drag' }
[0-2] 2023-02-13T11:58:28.543Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff0000002e',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff0000002e'
[0-2] }
[0-2] 2023-02-13T11:58:28.547Z INFO webdriver: COMMAND elementClick("00000000-0000-0191-ffff-ffff0000002e")
[0-2] 2023-02-13T11:58:28.548Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element/00000000-0000-0191-ffff-ffff0000002e/click
[0-2] 2023-02-13T11:58:28.605Z INFO webdriver: COMMAND findElement("accessibility id", "Drag-drop-screen")
[0-2] 2023-02-13T11:58:28.605Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:28.605Z INFO webdriver: DATA { using: 'accessibility id', value: 'Drag-drop-screen' }
[0-2] 2023-02-13T11:58:28.720Z INFO webdriver: RESULT {
[0-2]   error: 'no such element',
[0-2]   message: 'An element could not be located on the page using the given search parameters.',
[0-2]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-2]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-2]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-2]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-2]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-2] }
[0-2] 2023-02-13T11:58:28.723Z INFO webdriver: COMMAND findElement("accessibility id", "Drag-drop-screen")
[0-2] 2023-02-13T11:58:28.724Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:28.724Z INFO webdriver: DATA { using: 'accessibility id', value: 'Drag-drop-screen' }
[0-2] 2023-02-13T11:58:29.275Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff00000044',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff00000044'
[0-2] }
[0-2] 2023-02-13T11:58:29.277Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0191-ffff-ffff00000044")
[0-2] 2023-02-13T11:58:29.277Z INFO webdriver: [GET] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element/00000000-0000-0191-ffff-ffff00000044/displayed
[0-2] 2023-02-13T11:58:29.289Z INFO webdriver: RESULT true
[0-2] 2023-02-13T11:58:29.290Z INFO webdriver: COMMAND findElement("accessibility id", "drag-l1")
[0-2] 2023-02-13T11:58:29.290Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:29.290Z INFO webdriver: DATA { using: 'accessibility id', value: 'drag-l1' }
[0-2] 2023-02-13T11:58:29.334Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff00000071',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff00000071'
[0-2] }
[0-2] 2023-02-13T11:58:29.336Z INFO webdriver: COMMAND findElement("accessibility id", "drop-l1")
[0-2] 2023-02-13T11:58:29.336Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:29.337Z INFO webdriver: DATA { using: 'accessibility id', value: 'drop-l1' }
[0-2] 2023-02-13T11:58:29.360Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff00000048',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff00000048'
[0-2] }
[0-2] 2023-02-13T11:58:29.362Z INFO webdriver: COMMAND performActions(<object>)
[0-2] 2023-02-13T11:58:29.362Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/actions
[0-2] 2023-02-13T11:58:29.362Z INFO webdriver: DATA {
[0-2]   actions: [
[0-2]     {
[0-2]       type: 'pointer',
[0-2]       id: 'finger1',
[0-2]       parameters: [Object],
[0-2]       actions: [Array]
[0-2]     }
[0-2]   ]
[0-2] }
[0-2] 2023-02-13T11:58:30.779Z INFO webdriver: COMMAND findElement("accessibility id", "drag-c1")
[0-2] 2023-02-13T11:58:30.779Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:30.779Z INFO webdriver: DATA { using: 'accessibility id', value: 'drag-c1' }
[0-2] 2023-02-13T11:58:30.826Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff00000065',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff00000065'
[0-2] }
[0-2] 2023-02-13T11:58:30.828Z INFO webdriver: COMMAND findElement("accessibility id", "drop-c1")
[0-2] 2023-02-13T11:58:30.828Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:30.828Z INFO webdriver: DATA { using: 'accessibility id', value: 'drop-c1' }
[0-2] 2023-02-13T11:58:30.847Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff0000004a',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff0000004a'
[0-2] }
[0-2] 2023-02-13T11:58:30.849Z INFO webdriver: COMMAND performActions(<object>)
[0-2] 2023-02-13T11:58:30.849Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/actions
[0-2] 2023-02-13T11:58:30.849Z INFO webdriver: DATA {
[0-2]   actions: [
[0-2]     {
[0-2]       type: 'pointer',
[0-2]       id: 'finger1',
[0-2]       parameters: [Object],
[0-2]       actions: [Array]
[0-2]     }
[0-2]   ]
[0-2] }
[0-2] 2023-02-13T11:58:32.268Z INFO webdriver: COMMAND findElement("accessibility id", "drag-r1")
[0-2] 2023-02-13T11:58:32.268Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:32.268Z INFO webdriver: DATA { using: 'accessibility id', value: 'drag-r1' }
[0-2] 2023-02-13T11:58:32.339Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff00000062',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff00000062'
[0-2] }
[0-2] 2023-02-13T11:58:32.342Z INFO webdriver: COMMAND findElement("accessibility id", "drop-r1")
[0-2] 2023-02-13T11:58:32.342Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:32.342Z INFO webdriver: DATA { using: 'accessibility id', value: 'drop-r1' }
[0-2] 2023-02-13T11:58:32.366Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff0000004c',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff0000004c'
[0-2] }
[0-2] 2023-02-13T11:58:32.369Z INFO webdriver: COMMAND performActions(<object>)
[0-2] 2023-02-13T11:58:32.369Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/actions
[0-2] 2023-02-13T11:58:32.370Z INFO webdriver: DATA {
[0-2]   actions: [
[0-2]     {
[0-2]       type: 'pointer',
[0-2]       id: 'finger1',
[0-2]       parameters: [Object],
[0-2]       actions: [Array]
[0-2]     }
[0-2]   ]
[0-2] }
[0-2] 2023-02-13T11:58:33.799Z INFO webdriver: COMMAND findElement("accessibility id", "drag-l2")
[0-2] 2023-02-13T11:58:33.799Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:33.799Z INFO webdriver: DATA { using: 'accessibility id', value: 'drag-l2' }
[0-2] 2023-02-13T11:58:33.824Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff0000005c',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff0000005c'
[0-2] }
[0-2] 2023-02-13T11:58:33.826Z INFO webdriver: COMMAND findElement("accessibility id", "drop-l2")
[0-2] 2023-02-13T11:58:33.826Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:33.826Z INFO webdriver: DATA { using: 'accessibility id', value: 'drop-l2' }
[0-2] 2023-02-13T11:58:33.843Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff0000004e',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff0000004e'
[0-2] }
[0-2] 2023-02-13T11:58:33.846Z INFO webdriver: COMMAND performActions(<object>)
[0-2] 2023-02-13T11:58:33.846Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/actions
[0-2] 2023-02-13T11:58:33.846Z INFO webdriver: DATA {
[0-2]   actions: [
[0-2]     {
[0-2]       type: 'pointer',
[0-2]       id: 'finger1',
[0-2]       parameters: [Object],
[0-2]       actions: [Array]
[0-2]     }
[0-2]   ]
[0-2] }
[0-2] 2023-02-13T11:58:35.264Z INFO webdriver: COMMAND findElement("accessibility id", "drag-c2")
[0-2] 2023-02-13T11:58:35.264Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:35.264Z INFO webdriver: DATA { using: 'accessibility id', value: 'drag-c2' }
[0-2] 2023-02-13T11:58:35.325Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff0000006e',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff0000006e'
[0-2] }
[0-2] 2023-02-13T11:58:35.327Z INFO webdriver: COMMAND findElement("accessibility id", "drop-c2")
[0-2] 2023-02-13T11:58:35.327Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:35.328Z INFO webdriver: DATA { using: 'accessibility id', value: 'drop-c2' }
[0-2] 2023-02-13T11:58:35.346Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff00000050',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff00000050'
[0-2] }
[0-2] 2023-02-13T11:58:35.348Z INFO webdriver: COMMAND performActions(<object>)
[0-2] 2023-02-13T11:58:35.349Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/actions
[0-2] 2023-02-13T11:58:35.349Z INFO webdriver: DATA {
[0-2]   actions: [
[0-2]     {
[0-2]       type: 'pointer',
[0-2]       id: 'finger1',
[0-2]       parameters: [Object],
[0-2]       actions: [Array]
[0-2]     }
[0-2]   ]
[0-2] }
[0-2] 2023-02-13T11:58:36.780Z INFO webdriver: COMMAND findElement("accessibility id", "drag-r2")
[0-2] 2023-02-13T11:58:36.780Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:36.780Z INFO webdriver: DATA { using: 'accessibility id', value: 'drag-r2' }
[0-2] 2023-02-13T11:58:36.802Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff0000006b',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff0000006b'
[0-2] }
[0-2] 2023-02-13T11:58:36.804Z INFO webdriver: COMMAND findElement("accessibility id", "drop-r2")
[0-2] 2023-02-13T11:58:36.804Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:36.804Z INFO webdriver: DATA { using: 'accessibility id', value: 'drop-r2' }
[0-2] 2023-02-13T11:58:36.819Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff00000052',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff00000052'
[0-2] }
[0-2] 2023-02-13T11:58:36.821Z INFO webdriver: COMMAND performActions(<object>)
[0-2] 2023-02-13T11:58:36.821Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/actions
[0-2] 2023-02-13T11:58:36.821Z INFO webdriver: DATA {
[0-2]   actions: [
[0-2]     {
[0-2]       type: 'pointer',
[0-2]       id: 'finger1',
[0-2]       parameters: [Object],
[0-2]       actions: [Array]
[0-2]     }
[0-2]   ]
[0-2] }
[0-2] 2023-02-13T11:58:38.240Z INFO webdriver: COMMAND findElement("accessibility id", "drag-l3")
[0-2] 2023-02-13T11:58:38.240Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:38.240Z INFO webdriver: DATA { using: 'accessibility id', value: 'drag-l3' }
[0-2] 2023-02-13T11:58:38.262Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff00000074',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff00000074'
[0-2] }
[0-2] 2023-02-13T11:58:38.264Z INFO webdriver: COMMAND findElement("accessibility id", "drop-l3")
[0-2] 2023-02-13T11:58:38.264Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:38.264Z INFO webdriver: DATA { using: 'accessibility id', value: 'drop-l3' }
[0-2] 2023-02-13T11:58:38.279Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff00000054',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff00000054'
[0-2] }
[0-2] 2023-02-13T11:58:38.281Z INFO webdriver: COMMAND performActions(<object>)
[0-2] 2023-02-13T11:58:38.281Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/actions
[0-2] 2023-02-13T11:58:38.281Z INFO webdriver: DATA {
[0-2]   actions: [
[0-2]     {
[0-2]       type: 'pointer',
[0-2]       id: 'finger1',
[0-2]       parameters: [Object],
[0-2]       actions: [Array]
[0-2]     }
[0-2]   ]
[0-2] }
[0-2] 2023-02-13T11:58:39.700Z INFO webdriver: COMMAND findElement("accessibility id", "drag-c3")
[0-2] 2023-02-13T11:58:39.700Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:39.700Z INFO webdriver: DATA { using: 'accessibility id', value: 'drag-c3' }
[0-2] 2023-02-13T11:58:39.720Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff00000068',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff00000068'
[0-2] }
[0-2] 2023-02-13T11:58:39.724Z INFO webdriver: COMMAND findElement("accessibility id", "drop-c3")
[0-2] 2023-02-13T11:58:39.724Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:39.724Z INFO webdriver: DATA { using: 'accessibility id', value: 'drop-c3' }
[0-2] 2023-02-13T11:58:39.736Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff00000056',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff00000056'
[0-2] }
[0-2] 2023-02-13T11:58:39.739Z INFO webdriver: COMMAND performActions(<object>)
[0-2] 2023-02-13T11:58:39.740Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/actions
[0-2] 2023-02-13T11:58:39.740Z INFO webdriver: DATA {
[0-2]   actions: [
[0-2]     {
[0-2]       type: 'pointer',
[0-2]       id: 'finger1',
[0-2]       parameters: [Object],
[0-2]       actions: [Array]
[0-2]     }
[0-2]   ]
[0-2] }
[0-2] 2023-02-13T11:58:41.163Z INFO webdriver: COMMAND findElement("accessibility id", "drag-r3")
[0-2] 2023-02-13T11:58:41.165Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:41.165Z INFO webdriver: DATA { using: 'accessibility id', value: 'drag-r3' }
[0-2] 2023-02-13T11:58:41.212Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff0000005f',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff0000005f'
[0-2] }
[0-2] 2023-02-13T11:58:41.218Z INFO webdriver: COMMAND findElement("accessibility id", "drop-r3")
[0-2] 2023-02-13T11:58:41.218Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:41.218Z INFO webdriver: DATA { using: 'accessibility id', value: 'drop-r3' }
[0-2] 2023-02-13T11:58:41.235Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff00000058',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff00000058'
[0-2] }
[0-2] 2023-02-13T11:58:41.239Z INFO webdriver: COMMAND performActions(<object>)
[0-2] 2023-02-13T11:58:41.239Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/actions
[0-2] 2023-02-13T11:58:41.239Z INFO webdriver: DATA {
[0-2]   actions: [
[0-2]     {
[0-2]       type: 'pointer',
[0-2]       id: 'finger1',
[0-2]       parameters: [Object],
[0-2]       actions: [Array]
[0-2]     }
[0-2]   ]
[0-2] }
[0-2] 2023-02-13T11:58:42.664Z INFO webdriver: COMMAND findElement("accessibility id", "button-Retry")
[0-2] 2023-02-13T11:58:42.665Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:42.665Z INFO webdriver: DATA { using: 'accessibility id', value: 'button-Retry' }
[0-2] 2023-02-13T11:58:46.183Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff0000020b',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff0000020b'
[0-2] }
[0-2] 2023-02-13T11:58:46.187Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0191-ffff-ffff0000020b")
[0-2] 2023-02-13T11:58:46.187Z INFO webdriver: [GET] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element/00000000-0000-0191-ffff-ffff0000020b/displayed
[0-2] 2023-02-13T11:58:46.199Z INFO webdriver: RESULT true
[0-2] 2023-02-13T11:58:46.199Z INFO webdriver: COMMAND findElement("accessibility id", "button-Retry")
[0-2] 2023-02-13T11:58:46.200Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:46.200Z INFO webdriver: DATA { using: 'accessibility id', value: 'button-Retry' }
[0-2] 2023-02-13T11:58:46.222Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff0000020b',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff0000020b'
[0-2] }
[0-2] 2023-02-13T11:58:46.225Z INFO webdriver: COMMAND elementClick("00000000-0000-0191-ffff-ffff0000020b")
[0-2] 2023-02-13T11:58:46.225Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element/00000000-0000-0191-ffff-ffff0000020b/click
[0-2] 2023-02-13T11:58:46.279Z INFO webdriver: COMMAND findElement("accessibility id", "renew")
[0-2] 2023-02-13T11:58:46.280Z INFO webdriver: [POST] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element
[0-2] 2023-02-13T11:58:46.280Z INFO webdriver: DATA { using: 'accessibility id', value: 'renew' }
[0-2] 2023-02-13T11:58:46.463Z INFO webdriver: RESULT {
[0-2]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0191-ffff-ffff0000005a',
[0-2]   ELEMENT: '00000000-0000-0191-ffff-ffff0000005a'
[0-2] }
[0-2] 2023-02-13T11:58:46.465Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0191-ffff-ffff0000005a")
[0-2] 2023-02-13T11:58:46.465Z INFO webdriver: [GET] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02/element/00000000-0000-0191-ffff-ffff0000005a/displayed
[0-2] 2023-02-13T11:58:46.479Z INFO webdriver: RESULT true
[0-2] 2023-02-13T11:58:46.481Z INFO webdriver: COMMAND deleteSession()
[0-2] 2023-02-13T11:58:46.481Z INFO webdriver: [DELETE] http://localhost:4723/session/a0ae5a4b-8d70-40a3-89d9-6482e1003b02
2023-02-13T11:58:46.840Z DEBUG @wdio/local-runner: Runner 0-2 finished with exit code 0
[0-2] PASSED in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\specs\app.drag.and.drop.spec.ts
2023-02-13T11:58:46.841Z INFO @wdio/cli:launcher: Run onWorkerEnd hook
2023-02-13T11:58:46.841Z DEBUG @wdio/cli:utils: Finished to run "onWorkerEnd" hook in 0ms
2023-02-13T11:58:46.841Z INFO @wdio/cli:launcher: Run onWorkerStart hook
2023-02-13T11:58:46.842Z DEBUG @wdio/cli:utils: Finished to run "onWorkerStart" hook in 0ms
2023-02-13T11:58:46.842Z INFO @wdio/local-runner: Start worker 0-3 with arg: config/wdio.android.app.conf.ts
[0-3] 2023-02-13T11:58:47.306Z INFO @wdio/local-runner: Run worker command: run
[0-3] 2023-02-13T11:58:47.439Z DEBUG @wdio/config:utils: Found 'ts-node' package, auto-compiling TypeScript files
[0-3] 2023-02-13T11:58:47.520Z DEBUG @wdio/local-runner:utils: init remote session
[0-3] 2023-02-13T11:58:47.528Z DEBUG @wdio/utils:initialiseServices: initialise service "appium" as NPM package
[0-3] RUNNING in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\specs\app.forms.spec.ts
[0-3] 2023-02-13T11:58:47.813Z DEBUG @wdio/local-runner:utils: init remote session
[0-3] 2023-02-13T11:58:47.814Z INFO webdriver: Initiate new session using the WebDriver protocol
[0-3] 2023-02-13T11:58:47.869Z INFO webdriver: [POST] http://localhost:4723/session
[0-3] 2023-02-13T11:58:47.869Z INFO webdriver: DATA {
[0-3]   capabilities: {
[0-3]     alwaysMatch: {
[0-3]       platformName: 'Android',
[0-3]       'appium:deviceName': 'emulator-5554',
[0-3]       'appium:platformVersion': '13.0',
[0-3]       'appium:orientation': 'PORTRAIT',
[0-3]       'appium:automationName': 'UiAutomator2',
[0-3]       'appium:app': 'D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk',
[0-3]       'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
[0-3]       'appium:newCommandTimeout': 240,
[0-3]       'appium:connectHardwareKeyboard': true
[0-3]     },
[0-3]     firstMatch: [ {} ]
[0-3]   },
[0-3]   desiredCapabilities: {
[0-3]     platformName: 'Android',
[0-3]     'appium:deviceName': 'emulator-5554',
[0-3]     'appium:platformVersion': '13.0',
[0-3]     'appium:orientation': 'PORTRAIT',
[0-3]     'appium:automationName': 'UiAutomator2',
[0-3]     'appium:app': 'D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk',
[0-3]     'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
[0-3]     'appium:newCommandTimeout': 240,
[0-3]     'appium:connectHardwareKeyboard': true
[0-3]   }
[0-3] }
[0-3] 2023-02-13T11:58:53.320Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-3] 2023-02-13T11:58:53.321Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:53.321Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-3] 2023-02-13T11:58:53.361Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000015',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000015'
[0-3] }
[0-3] 2023-02-13T11:58:53.367Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01a2-ffff-ffff00000015")
[0-3] 2023-02-13T11:58:53.367Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000015/displayed
[0-3] 2023-02-13T11:58:53.382Z INFO webdriver: RESULT true
[0-3] 2023-02-13T11:58:53.383Z INFO webdriver: COMMAND findElement("accessibility id", "Forms")
[0-3] 2023-02-13T11:58:53.383Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:53.383Z INFO webdriver: DATA { using: 'accessibility id', value: 'Forms' }
[0-3] 2023-02-13T11:58:53.414Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000024',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000024'
[0-3] }
[0-3] 2023-02-13T11:58:53.417Z INFO webdriver: COMMAND elementClick("00000000-0000-01a2-ffff-ffff00000024")
[0-3] 2023-02-13T11:58:53.417Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000024/click
[0-3] 2023-02-13T11:58:53.465Z INFO webdriver: COMMAND findElement("accessibility id", "Forms-screen")
[0-3] 2023-02-13T11:58:53.465Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:53.465Z INFO webdriver: DATA { using: 'accessibility id', value: 'Forms-screen' }
[0-3] 2023-02-13T11:58:53.515Z INFO webdriver: RESULT {
[0-3]   error: 'no such element',
[0-3]   message: 'An element could not be located on the page using the given search parameters.',
[0-3]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-3]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-3] }
[0-3] 2023-02-13T11:58:53.519Z INFO webdriver: COMMAND findElement("accessibility id", "Forms-screen")
[0-3] 2023-02-13T11:58:53.519Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:53.519Z INFO webdriver: DATA { using: 'accessibility id', value: 'Forms-screen' }
[0-3] 2023-02-13T11:58:53.566Z INFO webdriver: RESULT {
[0-3]   error: 'no such element',
[0-3]   message: 'An element could not be located on the page using the given search parameters.',
[0-3]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-3]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-3] }
[0-3] 2023-02-13T11:58:54.020Z INFO webdriver: COMMAND findElement("accessibility id", "Forms-screen")
[0-3] 2023-02-13T11:58:54.021Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:54.021Z INFO webdriver: DATA { using: 'accessibility id', value: 'Forms-screen' }
[0-3] 2023-02-13T11:58:54.117Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000044',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000044'
[0-3] }
[0-3] 2023-02-13T11:58:54.119Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01a2-ffff-ffff00000044")
[0-3] 2023-02-13T11:58:54.119Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000044/displayed
[0-3] 2023-02-13T11:58:54.133Z INFO webdriver: RESULT true
[0-3] 2023-02-13T11:58:54.134Z INFO webdriver: COMMAND findElement("accessibility id", "text-input")
[0-3] 2023-02-13T11:58:54.134Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:54.134Z INFO webdriver: DATA { using: 'accessibility id', value: 'text-input' }
[0-3] 2023-02-13T11:58:54.154Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff0000004d',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff0000004d'
[0-3] }
[0-3] 2023-02-13T11:58:54.156Z INFO webdriver: COMMAND elementClear("00000000-0000-01a2-ffff-ffff0000004d")
[0-3] 2023-02-13T11:58:54.156Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff0000004d/clear
[0-3] 2023-02-13T11:58:54.185Z INFO webdriver: COMMAND elementSendKeys("00000000-0000-01a2-ffff-ffff0000004d", "Hello, this is a demo app")
[0-3] 2023-02-13T11:58:54.185Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff0000004d/value
[0-3] 2023-02-13T11:58:54.185Z INFO webdriver: DATA { text: 'Hello, this is a demo app' }
[0-3] 2023-02-13T11:58:55.188Z INFO webdriver: COMMAND findElement("accessibility id", "input-text-result")
[0-3] 2023-02-13T11:58:55.188Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:55.188Z INFO webdriver: DATA { using: 'accessibility id', value: 'input-text-result' }
[0-3] 2023-02-13T11:58:55.825Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000050',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000050'
[0-3] }
[0-3] 2023-02-13T11:58:55.828Z INFO webdriver: COMMAND getElementText("00000000-0000-01a2-ffff-ffff00000050")
[0-3] 2023-02-13T11:58:55.828Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000050/text
[0-3] 2023-02-13T11:58:55.843Z INFO webdriver: RESULT Hello, this is a demo app
[0-3] 2023-02-13T11:58:55.845Z INFO webdriver: COMMAND isKeyboardShown()
[0-3] 2023-02-13T11:58:55.845Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/appium/device/is_keyboard_shown
[0-3] 2023-02-13T11:58:56.142Z INFO webdriver: RESULT false
[0-3] 2023-02-13T11:58:56.142Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-3] 2023-02-13T11:58:56.143Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:56.143Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-3] 2023-02-13T11:58:56.165Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000015',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000015'
[0-3] }
[0-3] 2023-02-13T11:58:56.168Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01a2-ffff-ffff00000015")
[0-3] 2023-02-13T11:58:56.168Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000015/displayed
[0-3] 2023-02-13T11:58:56.180Z INFO webdriver: RESULT true
[0-3] 2023-02-13T11:58:56.180Z INFO webdriver: COMMAND findElement("accessibility id", "Forms")
[0-3] 2023-02-13T11:58:56.180Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:56.180Z INFO webdriver: DATA { using: 'accessibility id', value: 'Forms' }
[0-3] 2023-02-13T11:58:56.213Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000024',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000024'
[0-3] }
[0-3] 2023-02-13T11:58:56.215Z INFO webdriver: COMMAND elementClick("00000000-0000-01a2-ffff-ffff00000024")
[0-3] 2023-02-13T11:58:56.215Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000024/click
[0-3] 2023-02-13T11:58:56.259Z INFO webdriver: COMMAND findElement("accessibility id", "Forms-screen")
[0-3] 2023-02-13T11:58:56.259Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:56.259Z INFO webdriver: DATA { using: 'accessibility id', value: 'Forms-screen' }
[0-3] 2023-02-13T11:58:56.276Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000044',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000044'
[0-3] }
[0-3] 2023-02-13T11:58:56.279Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01a2-ffff-ffff00000044")
[0-3] 2023-02-13T11:58:56.279Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000044/displayed
[0-3] 2023-02-13T11:58:56.292Z INFO webdriver: RESULT true
[0-3] 2023-02-13T11:58:56.292Z INFO webdriver: COMMAND findElement("accessibility id", "switch")
[0-3] 2023-02-13T11:58:56.292Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:56.292Z INFO webdriver: DATA { using: 'accessibility id', value: 'switch' }
[0-3] 2023-02-13T11:58:56.310Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000053',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000053'
[0-3] }
[0-3] 2023-02-13T11:58:56.313Z INFO webdriver: COMMAND getElementText("00000000-0000-01a2-ffff-ffff00000053")
[0-3] 2023-02-13T11:58:56.313Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000053/text
[0-3] 2023-02-13T11:58:56.325Z INFO webdriver: RESULT OFF
[0-3] 2023-02-13T11:58:56.326Z INFO webdriver: COMMAND findElement("accessibility id", "switch")
[0-3] 2023-02-13T11:58:56.326Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:56.327Z INFO webdriver: DATA { using: 'accessibility id', value: 'switch' }
[0-3] 2023-02-13T11:58:56.346Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000053',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000053'
[0-3] }
[0-3] 2023-02-13T11:58:56.349Z INFO webdriver: COMMAND elementClick("00000000-0000-01a2-ffff-ffff00000053")
[0-3] 2023-02-13T11:58:56.349Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000053/click
[0-3] 2023-02-13T11:58:56.398Z INFO webdriver: COMMAND findElement("accessibility id", "switch")
[0-3] 2023-02-13T11:58:56.398Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:56.398Z INFO webdriver: DATA { using: 'accessibility id', value: 'switch' }
[0-3] 2023-02-13T11:58:56.432Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000053',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000053'
[0-3] }
[0-3] 2023-02-13T11:58:56.434Z INFO webdriver: COMMAND getElementText("00000000-0000-01a2-ffff-ffff00000053")
[0-3] 2023-02-13T11:58:56.434Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000053/text
[0-3] 2023-02-13T11:58:57.034Z INFO webdriver: RESULT ON
[0-3] 2023-02-13T11:58:57.035Z INFO webdriver: COMMAND findElement("accessibility id", "switch")
[0-3] 2023-02-13T11:58:57.035Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:57.035Z INFO webdriver: DATA { using: 'accessibility id', value: 'switch' }
[0-3] 2023-02-13T11:58:57.056Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000053',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000053'
[0-3] }
[0-3] 2023-02-13T11:58:57.057Z INFO webdriver: COMMAND elementClick("00000000-0000-01a2-ffff-ffff00000053")
[0-3] 2023-02-13T11:58:57.058Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000053/click
[0-3] 2023-02-13T11:58:57.099Z INFO webdriver: COMMAND findElement("accessibility id", "switch")
[0-3] 2023-02-13T11:58:57.099Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:57.099Z INFO webdriver: DATA { using: 'accessibility id', value: 'switch' }
[0-3] 2023-02-13T11:58:57.738Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000053',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000053'
[0-3] }
[0-3] 2023-02-13T11:58:57.740Z INFO webdriver: COMMAND getElementText("00000000-0000-01a2-ffff-ffff00000053")
[0-3] 2023-02-13T11:58:57.740Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000053/text
[0-3] 2023-02-13T11:58:57.752Z INFO webdriver: RESULT OFF
[0-3] 2023-02-13T11:58:57.753Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-3] 2023-02-13T11:58:57.753Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:57.753Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-3] 2023-02-13T11:58:57.777Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000015',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000015'
[0-3] }
[0-3] 2023-02-13T11:58:57.779Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01a2-ffff-ffff00000015")
[0-3] 2023-02-13T11:58:57.779Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000015/displayed
[0-3] 2023-02-13T11:58:57.792Z INFO webdriver: RESULT true
[0-3] 2023-02-13T11:58:57.793Z INFO webdriver: COMMAND findElement("accessibility id", "Forms")
[0-3] 2023-02-13T11:58:57.793Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:57.793Z INFO webdriver: DATA { using: 'accessibility id', value: 'Forms' }
[0-3] 2023-02-13T11:58:57.830Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000024',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000024'
[0-3] }
[0-3] 2023-02-13T11:58:57.832Z INFO webdriver: COMMAND elementClick("00000000-0000-01a2-ffff-ffff00000024")
[0-3] 2023-02-13T11:58:57.832Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000024/click
[0-3] 2023-02-13T11:58:57.876Z INFO webdriver: COMMAND findElement("accessibility id", "Forms-screen")
[0-3] 2023-02-13T11:58:57.877Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:57.877Z INFO webdriver: DATA { using: 'accessibility id', value: 'Forms-screen' }
[0-3] 2023-02-13T11:58:57.905Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000044',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000044'
[0-3] }
[0-3] 2023-02-13T11:58:57.906Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01a2-ffff-ffff00000044")
[0-3] 2023-02-13T11:58:57.907Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000044/displayed
[0-3] 2023-02-13T11:58:57.919Z INFO webdriver: RESULT true
[0-3] 2023-02-13T11:58:57.920Z INFO webdriver: COMMAND findElement("accessibility id", "Dropdown")
[0-3] 2023-02-13T11:58:57.920Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:57.920Z INFO webdriver: DATA { using: 'accessibility id', value: 'Dropdown' }
[0-3] 2023-02-13T11:58:57.998Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000057',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000057'
[0-3] }
[0-3] 2023-02-13T11:58:58.000Z INFO webdriver: COMMAND elementClick("00000000-0000-01a2-ffff-ffff00000057")
[0-3] 2023-02-13T11:58:58.000Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000057/click
[0-3] 2023-02-13T11:58:58.042Z INFO webdriver: COMMAND findElement("xpath", "//android.widget.ListView")
[0-3] 2023-02-13T11:58:58.042Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:58.042Z INFO webdriver: DATA { using: 'xpath', value: '//android.widget.ListView' }
[0-3] 2023-02-13T11:58:58.344Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a3-ffff-ffff00000074',
[0-3]   ELEMENT: '00000000-0000-01a3-ffff-ffff00000074'
[0-3] }
[0-3] 2023-02-13T11:58:58.346Z INFO webdriver: COMMAND findElements("xpath", "//android.widget.ListView")
[0-3] 2023-02-13T11:58:58.346Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/elements
[0-3] 2023-02-13T11:58:58.346Z INFO webdriver: DATA { using: 'xpath', value: '//android.widget.ListView' }
[0-3] 2023-02-13T11:58:58.716Z INFO webdriver: RESULT [
[0-3]   {
[0-3]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a3-ffff-ffff00000074',
[0-3]     ELEMENT: '00000000-0000-01a3-ffff-ffff00000074'
[0-3]   }
[0-3] ]
[0-3] 2023-02-13T11:58:58.718Z INFO webdriver: COMMAND findElement("xpath", "//android.widget.ListView/*[@text='This app is awesome']")
[0-3] 2023-02-13T11:58:58.718Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:58.718Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: "//android.widget.ListView/*[@text='This app is awesome']"
[0-3] }
[0-3] 2023-02-13T11:58:58.747Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a3-ffff-ffff00000081',
[0-3]   ELEMENT: '00000000-0000-01a3-ffff-ffff00000081'
[0-3] }
[0-3] 2023-02-13T11:58:58.750Z INFO webdriver: COMMAND elementClick("00000000-0000-01a3-ffff-ffff00000081")
[0-3] 2023-02-13T11:58:58.750Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a3-ffff-ffff00000081/click
[0-3] 2023-02-13T11:58:59.412Z INFO webdriver: COMMAND findElement("xpath", "//android.widget.ListView")
[0-3] 2023-02-13T11:58:59.412Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:59.412Z INFO webdriver: DATA { using: 'xpath', value: '//android.widget.ListView' }
[0-3] 2023-02-13T11:58:59.526Z INFO webdriver: RESULT {
[0-3]   error: 'no such element',
[0-3]   message: 'An element could not be located on the page using the given search parameters.',
[0-3]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-3]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-3] }
[0-3] 2023-02-13T11:58:59.528Z INFO webdriver: COMMAND findElements("xpath", "//android.widget.ListView")
[0-3] 2023-02-13T11:58:59.529Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/elements
[0-3] 2023-02-13T11:58:59.529Z INFO webdriver: DATA { using: 'xpath', value: '//android.widget.ListView' }
[0-3] 2023-02-13T11:58:59.593Z INFO webdriver: RESULT []
[0-3] 2023-02-13T11:58:59.594Z INFO webdriver: COMMAND findElement("xpath", "//*[@content-desc="Dropdown"]/*/android.widget.EditText")
[0-3] 2023-02-13T11:58:59.594Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:59.594Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '//*[@content-desc="Dropdown"]/*/android.widget.EditText'
[0-3] }
[0-3] 2023-02-13T11:58:59.644Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000059',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000059'
[0-3] }
[0-3] 2023-02-13T11:58:59.646Z INFO webdriver: COMMAND getElementText("00000000-0000-01a2-ffff-ffff00000059")
[0-3] 2023-02-13T11:58:59.646Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000059/text
[0-3] 2023-02-13T11:58:59.656Z INFO webdriver: RESULT This app is awesome
[0-3] 2023-02-13T11:58:59.657Z INFO webdriver: COMMAND findElement("accessibility id", "Dropdown")
[0-3] 2023-02-13T11:58:59.657Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:58:59.657Z INFO webdriver: DATA { using: 'accessibility id', value: 'Dropdown' }
[0-3] 2023-02-13T11:58:59.679Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000057',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000057'
[0-3] }
[0-3] 2023-02-13T11:58:59.681Z INFO webdriver: COMMAND elementClick("00000000-0000-01a2-ffff-ffff00000057")
[0-3] 2023-02-13T11:58:59.681Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000057/click
[0-3] 2023-02-13T11:59:00.352Z INFO webdriver: COMMAND findElement("xpath", "//android.widget.ListView")
[0-3] 2023-02-13T11:59:00.353Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:00.353Z INFO webdriver: DATA { using: 'xpath', value: '//android.widget.ListView' }
[0-3] 2023-02-13T11:59:00.376Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a4-ffff-ffff00000090',
[0-3]   ELEMENT: '00000000-0000-01a4-ffff-ffff00000090'
[0-3] }
[0-3] 2023-02-13T11:59:00.378Z INFO webdriver: COMMAND findElements("xpath", "//android.widget.ListView")
[0-3] 2023-02-13T11:59:00.378Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/elements
[0-3] 2023-02-13T11:59:00.378Z INFO webdriver: DATA { using: 'xpath', value: '//android.widget.ListView' }
[0-3] 2023-02-13T11:59:00.404Z INFO webdriver: RESULT [
[0-3]   {
[0-3]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a4-ffff-ffff00000090',
[0-3]     ELEMENT: '00000000-0000-01a4-ffff-ffff00000090'
[0-3]   }
[0-3] ]
[0-3] 2023-02-13T11:59:00.405Z INFO webdriver: COMMAND findElement("xpath", "//android.widget.ListView/*[@text='webdriver.io is awesome']")
[0-3] 2023-02-13T11:59:00.405Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:00.405Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: "//android.widget.ListView/*[@text='webdriver.io is awesome']"
[0-3] }
[0-3] 2023-02-13T11:59:00.431Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a4-ffff-ffff0000009c',
[0-3]   ELEMENT: '00000000-0000-01a4-ffff-ffff0000009c'
[0-3] }
[0-3] 2023-02-13T11:59:00.433Z INFO webdriver: COMMAND elementClick("00000000-0000-01a4-ffff-ffff0000009c")
[0-3] 2023-02-13T11:59:00.433Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a4-ffff-ffff0000009c/click
[0-3] 2023-02-13T11:59:01.108Z INFO webdriver: COMMAND findElement("xpath", "//android.widget.ListView")
[0-3] 2023-02-13T11:59:01.108Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:01.108Z INFO webdriver: DATA { using: 'xpath', value: '//android.widget.ListView' }
[0-3] 2023-02-13T11:59:01.162Z INFO webdriver: RESULT {
[0-3]   error: 'no such element',
[0-3]   message: 'An element could not be located on the page using the given search parameters.',
[0-3]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-3]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-3] }
[0-3] 2023-02-13T11:59:01.164Z INFO webdriver: COMMAND findElements("xpath", "//android.widget.ListView")
[0-3] 2023-02-13T11:59:01.164Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/elements
[0-3] 2023-02-13T11:59:01.164Z INFO webdriver: DATA { using: 'xpath', value: '//android.widget.ListView' }
[0-3] 2023-02-13T11:59:01.222Z INFO webdriver: RESULT []
[0-3] 2023-02-13T11:59:01.223Z INFO webdriver: COMMAND findElement("xpath", "//*[@content-desc="Dropdown"]/*/android.widget.EditText")
[0-3] 2023-02-13T11:59:01.223Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:01.223Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '//*[@content-desc="Dropdown"]/*/android.widget.EditText'
[0-3] }
[0-3] 2023-02-13T11:59:01.290Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000059',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000059'
[0-3] }
[0-3] 2023-02-13T11:59:01.292Z INFO webdriver: COMMAND getElementText("00000000-0000-01a2-ffff-ffff00000059")
[0-3] 2023-02-13T11:59:01.292Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000059/text
[0-3] 2023-02-13T11:59:01.304Z INFO webdriver: RESULT webdriver.io is awesome
[0-3] 2023-02-13T11:59:01.304Z INFO webdriver: COMMAND findElement("accessibility id", "Dropdown")
[0-3] 2023-02-13T11:59:01.305Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:01.305Z INFO webdriver: DATA { using: 'accessibility id', value: 'Dropdown' }
[0-3] 2023-02-13T11:59:01.322Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000057',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000057'
[0-3] }
[0-3] 2023-02-13T11:59:01.323Z INFO webdriver: COMMAND elementClick("00000000-0000-01a2-ffff-ffff00000057")
[0-3] 2023-02-13T11:59:01.323Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000057/click
[0-3] 2023-02-13T11:59:02.002Z INFO webdriver: COMMAND findElement("xpath", "//android.widget.ListView")
[0-3] 2023-02-13T11:59:02.002Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:02.002Z INFO webdriver: DATA { using: 'xpath', value: '//android.widget.ListView' }
[0-3] 2023-02-13T11:59:02.046Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a5-ffff-ffff000000ac',
[0-3]   ELEMENT: '00000000-0000-01a5-ffff-ffff000000ac'
[0-3] }
[0-3] 2023-02-13T11:59:02.049Z INFO webdriver: COMMAND findElements("xpath", "//android.widget.ListView")
[0-3] 2023-02-13T11:59:02.049Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/elements
[0-3] 2023-02-13T11:59:02.049Z INFO webdriver: DATA { using: 'xpath', value: '//android.widget.ListView' }
[0-3] 2023-02-13T11:59:02.645Z INFO webdriver: RESULT [
[0-3]   {
[0-3]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a5-ffff-ffff000000ac',
[0-3]     ELEMENT: '00000000-0000-01a5-ffff-ffff000000ac'
[0-3]   }
[0-3] ]
[0-3] 2023-02-13T11:59:02.646Z INFO webdriver: COMMAND findElement("xpath", "//android.widget.ListView/*[@text='Appium is awesome']")
[0-3] 2023-02-13T11:59:02.647Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:02.647Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: "//android.widget.ListView/*[@text='Appium is awesome']"
[0-3] }
[0-3] 2023-02-13T11:59:02.669Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a5-ffff-ffff000000b7',
[0-3]   ELEMENT: '00000000-0000-01a5-ffff-ffff000000b7'
[0-3] }
[0-3] 2023-02-13T11:59:02.671Z INFO webdriver: COMMAND elementClick("00000000-0000-01a5-ffff-ffff000000b7")
[0-3] 2023-02-13T11:59:02.671Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a5-ffff-ffff000000b7/click
[0-3] 2023-02-13T11:59:03.325Z INFO webdriver: COMMAND findElement("xpath", "//android.widget.ListView")
[0-3] 2023-02-13T11:59:03.325Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:03.325Z INFO webdriver: DATA { using: 'xpath', value: '//android.widget.ListView' }
[0-3] 2023-02-13T11:59:03.394Z INFO webdriver: RESULT {
[0-3]   error: 'no such element',
[0-3]   message: 'An element could not be located on the page using the given search parameters.',
[0-3]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-3]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-3] }
[0-3] 2023-02-13T11:59:03.396Z INFO webdriver: COMMAND findElements("xpath", "//android.widget.ListView")
[0-3] 2023-02-13T11:59:03.396Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/elements
[0-3] 2023-02-13T11:59:03.396Z INFO webdriver: DATA { using: 'xpath', value: '//android.widget.ListView' }
[0-3] 2023-02-13T11:59:03.471Z INFO webdriver: RESULT []
[0-3] 2023-02-13T11:59:03.472Z INFO webdriver: COMMAND findElement("xpath", "//*[@content-desc="Dropdown"]/*/android.widget.EditText")
[0-3] 2023-02-13T11:59:03.472Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:03.472Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '//*[@content-desc="Dropdown"]/*/android.widget.EditText'
[0-3] }
[0-3] 2023-02-13T11:59:03.524Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000059',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000059'
[0-3] }
[0-3] 2023-02-13T11:59:03.525Z INFO webdriver: COMMAND getElementText("00000000-0000-01a2-ffff-ffff00000059")
[0-3] 2023-02-13T11:59:03.525Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000059/text
[0-3] 2023-02-13T11:59:03.536Z INFO webdriver: RESULT Appium is awesome
[0-3] 2023-02-13T11:59:03.536Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-3] 2023-02-13T11:59:03.537Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:03.537Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-3] 2023-02-13T11:59:03.556Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000015',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000015'
[0-3] }
[0-3] 2023-02-13T11:59:03.558Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01a2-ffff-ffff00000015")
[0-3] 2023-02-13T11:59:03.559Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000015/displayed
[0-3] 2023-02-13T11:59:03.570Z INFO webdriver: RESULT true
[0-3] 2023-02-13T11:59:03.570Z INFO webdriver: COMMAND findElement("accessibility id", "Forms")
[0-3] 2023-02-13T11:59:03.570Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:03.570Z INFO webdriver: DATA { using: 'accessibility id', value: 'Forms' }
[0-3] 2023-02-13T11:59:03.595Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000024',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000024'
[0-3] }
[0-3] 2023-02-13T11:59:03.597Z INFO webdriver: COMMAND elementClick("00000000-0000-01a2-ffff-ffff00000024")
[0-3] 2023-02-13T11:59:03.598Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000024/click
[0-3] 2023-02-13T11:59:03.643Z INFO webdriver: COMMAND findElement("accessibility id", "Forms-screen")
[0-3] 2023-02-13T11:59:03.643Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:03.643Z INFO webdriver: DATA { using: 'accessibility id', value: 'Forms-screen' }
[0-3] 2023-02-13T11:59:03.657Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000044',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000044'
[0-3] }
[0-3] 2023-02-13T11:59:03.659Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01a2-ffff-ffff00000044")
[0-3] 2023-02-13T11:59:03.659Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000044/displayed
[0-3] 2023-02-13T11:59:03.669Z INFO webdriver: RESULT true
[0-3] 2023-02-13T11:59:03.670Z INFO webdriver: COMMAND findElement("accessibility id", "button-Active")
[0-3] 2023-02-13T11:59:03.670Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:03.670Z INFO webdriver: DATA { using: 'accessibility id', value: 'button-Active' }
[0-3] 2023-02-13T11:59:03.686Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff0000005f',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff0000005f'
[0-3] }
[0-3] 2023-02-13T11:59:03.689Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01a2-ffff-ffff0000005f")
[0-3] 2023-02-13T11:59:03.689Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff0000005f/displayed
[0-3] 2023-02-13T11:59:03.708Z INFO webdriver: RESULT true
[0-3] 2023-02-13T11:59:03.708Z INFO webdriver: COMMAND findElement("accessibility id", "button-Active")
[0-3] 2023-02-13T11:59:03.708Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:03.708Z INFO webdriver: DATA { using: 'accessibility id', value: 'button-Active' }
[0-3] 2023-02-13T11:59:03.724Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff0000005f',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff0000005f'
[0-3] }
[0-3] 2023-02-13T11:59:03.726Z INFO webdriver: COMMAND elementClick("00000000-0000-01a2-ffff-ffff0000005f")
[0-3] 2023-02-13T11:59:03.726Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff0000005f/click
[0-3] 2023-02-13T11:59:03.779Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-3] 2023-02-13T11:59:03.779Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:03.779Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-3] }
[0-3] 2023-02-13T11:59:03.871Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a6-ffff-ffff000000c2',
[0-3]   ELEMENT: '00000000-0000-01a6-ffff-ffff000000c2'
[0-3] }
[0-3] 2023-02-13T11:59:03.873Z INFO webdriver: COMMAND findElements("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-3] 2023-02-13T11:59:03.873Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/elements
[0-3] 2023-02-13T11:59:03.873Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-3] }
[0-3] 2023-02-13T11:59:04.675Z INFO webdriver: RESULT [
[0-3]   {
[0-3]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a6-ffff-ffff000000c2',
[0-3]     ELEMENT: '00000000-0000-01a6-ffff-ffff000000c2'
[0-3]   }
[0-3] ]
[0-3] 2023-02-13T11:59:04.676Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-3] 2023-02-13T11:59:04.677Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:04.677Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-3] }
[0-3] 2023-02-13T11:59:04.701Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a6-ffff-ffff000000c2',
[0-3]   ELEMENT: '00000000-0000-01a6-ffff-ffff000000c2'
[0-3] }
[0-3] 2023-02-13T11:59:04.703Z INFO webdriver: COMMAND getElementText("00000000-0000-01a6-ffff-ffff000000c2")
[0-3] 2023-02-13T11:59:04.703Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a6-ffff-ffff000000c2/text
[0-3] 2023-02-13T11:59:04.714Z INFO webdriver: RESULT This button is
[0-3] 2023-02-13T11:59:04.714Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.TextView[@resource-id="android:id/message"]")
[0-3] 2023-02-13T11:59:04.715Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:04.715Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '*//android.widget.TextView[@resource-id="android:id/message"]'
[0-3] }
[0-3] 2023-02-13T11:59:04.749Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a6-ffff-ffff000000c8',
[0-3]   ELEMENT: '00000000-0000-01a6-ffff-ffff000000c8'
[0-3] }
[0-3] 2023-02-13T11:59:04.751Z INFO webdriver: COMMAND getElementText("00000000-0000-01a6-ffff-ffff000000c8")
[0-3] 2023-02-13T11:59:04.751Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a6-ffff-ffff000000c8/text
[0-3] 2023-02-13T11:59:04.761Z INFO webdriver: RESULT This button is active
[0-3] 2023-02-13T11:59:04.761Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.Button[@text="ASK ME LATER"]")
[0-3] 2023-02-13T11:59:04.761Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:04.762Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '*//android.widget.Button[@text="ASK ME LATER"]'
[0-3] }
[0-3] 2023-02-13T11:59:04.785Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a6-ffff-ffff000000ce',
[0-3]   ELEMENT: '00000000-0000-01a6-ffff-ffff000000ce'
[0-3] }
[0-3] 2023-02-13T11:59:04.787Z INFO webdriver: COMMAND elementClick("00000000-0000-01a6-ffff-ffff000000ce")
[0-3] 2023-02-13T11:59:04.787Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a6-ffff-ffff000000ce/click
[0-3] 2023-02-13T11:59:04.833Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-3] 2023-02-13T11:59:04.833Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:04.834Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-3] }
[0-3] 2023-02-13T11:59:05.469Z INFO webdriver: RESULT {
[0-3]   error: 'no such element',
[0-3]   message: 'An element could not be located on the page using the given search parameters.',
[0-3]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-3]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-3] }
[0-3] 2023-02-13T11:59:05.471Z INFO webdriver: COMMAND findElements("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-3] 2023-02-13T11:59:05.472Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/elements
[0-3] 2023-02-13T11:59:05.472Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-3] }
[0-3] 2023-02-13T11:59:05.525Z INFO webdriver: RESULT []
[0-3] 2023-02-13T11:59:05.526Z INFO webdriver: COMMAND findElement("accessibility id", "button-Active")
[0-3] 2023-02-13T11:59:05.526Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:05.526Z INFO webdriver: DATA { using: 'accessibility id', value: 'button-Active' }
[0-3] 2023-02-13T11:59:05.549Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff0000005f',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff0000005f'
[0-3] }
[0-3] 2023-02-13T11:59:05.551Z INFO webdriver: COMMAND elementClick("00000000-0000-01a2-ffff-ffff0000005f")
[0-3] 2023-02-13T11:59:05.551Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff0000005f/click
[0-3] 2023-02-13T11:59:05.601Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-3] 2023-02-13T11:59:05.601Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:05.601Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-3] }
[0-3] 2023-02-13T11:59:05.661Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a7-ffff-ffff000000d9',
[0-3]   ELEMENT: '00000000-0000-01a7-ffff-ffff000000d9'
[0-3] }
[0-3] 2023-02-13T11:59:05.663Z INFO webdriver: COMMAND findElements("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-3] 2023-02-13T11:59:05.663Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/elements
[0-3] 2023-02-13T11:59:05.663Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-3] }
[0-3] 2023-02-13T11:59:06.494Z INFO webdriver: RESULT [
[0-3]   {
[0-3]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a7-ffff-ffff000000d9',
[0-3]     ELEMENT: '00000000-0000-01a7-ffff-ffff000000d9'
[0-3]   }
[0-3] ]
[0-3] 2023-02-13T11:59:06.495Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.Button[@text="CANCEL"]")
[0-3] 2023-02-13T11:59:06.495Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:06.495Z INFO webdriver: DATA { using: 'xpath', value: '*//android.widget.Button[@text="CANCEL"]' }
[0-3] 2023-02-13T11:59:06.522Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a7-ffff-ffff000000e7',
[0-3]   ELEMENT: '00000000-0000-01a7-ffff-ffff000000e7'
[0-3] }
[0-3] 2023-02-13T11:59:06.523Z INFO webdriver: COMMAND elementClick("00000000-0000-01a7-ffff-ffff000000e7")
[0-3] 2023-02-13T11:59:06.524Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a7-ffff-ffff000000e7/click
[0-3] 2023-02-13T11:59:06.569Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-3] 2023-02-13T11:59:06.570Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:06.570Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-3] }
[0-3] 2023-02-13T11:59:07.180Z INFO webdriver: RESULT {
[0-3]   error: 'no such element',
[0-3]   message: 'An element could not be located on the page using the given search parameters.',
[0-3]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-3]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-3] }
[0-3] 2023-02-13T11:59:07.183Z INFO webdriver: COMMAND findElements("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-3] 2023-02-13T11:59:07.183Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/elements
[0-3] 2023-02-13T11:59:07.183Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-3] }
[0-3] 2023-02-13T11:59:07.238Z INFO webdriver: RESULT []
[0-3] 2023-02-13T11:59:07.239Z INFO webdriver: COMMAND findElement("accessibility id", "button-Active")
[0-3] 2023-02-13T11:59:07.239Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:07.239Z INFO webdriver: DATA { using: 'accessibility id', value: 'button-Active' }
[0-3] 2023-02-13T11:59:07.255Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff0000005f',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff0000005f'
[0-3] }
[0-3] 2023-02-13T11:59:07.258Z INFO webdriver: COMMAND elementClick("00000000-0000-01a2-ffff-ffff0000005f")
[0-3] 2023-02-13T11:59:07.258Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff0000005f/click
[0-3] 2023-02-13T11:59:07.296Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-3] 2023-02-13T11:59:07.296Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:07.296Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-3] }
[0-3] 2023-02-13T11:59:07.343Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a8-ffff-ffff000000f0',
[0-3]   ELEMENT: '00000000-0000-01a8-ffff-ffff000000f0'
[0-3] }
[0-3] 2023-02-13T11:59:07.345Z INFO webdriver: COMMAND findElements("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-3] 2023-02-13T11:59:07.345Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/elements
[0-3] 2023-02-13T11:59:07.345Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-3] }
[0-3] 2023-02-13T11:59:08.185Z INFO webdriver: RESULT [
[0-3]   {
[0-3]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a8-ffff-ffff000000f0',
[0-3]     ELEMENT: '00000000-0000-01a8-ffff-ffff000000f0'
[0-3]   }
[0-3] ]
[0-3] 2023-02-13T11:59:08.187Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.Button[@text="OK"]")
[0-3] 2023-02-13T11:59:08.187Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:08.187Z INFO webdriver: DATA { using: 'xpath', value: '*//android.widget.Button[@text="OK"]' }
[0-3] 2023-02-13T11:59:08.208Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a8-ffff-ffff000000ff',
[0-3]   ELEMENT: '00000000-0000-01a8-ffff-ffff000000ff'
[0-3] }
[0-3] 2023-02-13T11:59:08.210Z INFO webdriver: COMMAND elementClick("00000000-0000-01a8-ffff-ffff000000ff")
[0-3] 2023-02-13T11:59:08.210Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a8-ffff-ffff000000ff/click
[0-3] 2023-02-13T11:59:08.826Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-3] 2023-02-13T11:59:08.826Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:08.826Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-3] }
[0-3] 2023-02-13T11:59:08.874Z INFO webdriver: RESULT {
[0-3]   error: 'no such element',
[0-3]   message: 'An element could not be located on the page using the given search parameters.',
[0-3]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-3]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-3] }
[0-3] 2023-02-13T11:59:08.877Z INFO webdriver: COMMAND findElements("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-3] 2023-02-13T11:59:08.877Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/elements
[0-3] 2023-02-13T11:59:08.877Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-3] }
[0-3] 2023-02-13T11:59:08.926Z INFO webdriver: RESULT []
[0-3] 2023-02-13T11:59:08.927Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-3] 2023-02-13T11:59:08.927Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:08.927Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-3] 2023-02-13T11:59:08.944Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000015',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000015'
[0-3] }
[0-3] 2023-02-13T11:59:08.946Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01a2-ffff-ffff00000015")
[0-3] 2023-02-13T11:59:08.946Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000015/displayed
[0-3] 2023-02-13T11:59:08.956Z INFO webdriver: RESULT true
[0-3] 2023-02-13T11:59:08.956Z INFO webdriver: COMMAND findElement("accessibility id", "Forms")
[0-3] 2023-02-13T11:59:08.956Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:08.956Z INFO webdriver: DATA { using: 'accessibility id', value: 'Forms' }
[0-3] 2023-02-13T11:59:08.988Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000024',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000024'
[0-3] }
[0-3] 2023-02-13T11:59:08.990Z INFO webdriver: COMMAND elementClick("00000000-0000-01a2-ffff-ffff00000024")
[0-3] 2023-02-13T11:59:08.990Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000024/click
[0-3] 2023-02-13T11:59:09.030Z INFO webdriver: COMMAND findElement("accessibility id", "Forms-screen")
[0-3] 2023-02-13T11:59:09.030Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:09.030Z INFO webdriver: DATA { using: 'accessibility id', value: 'Forms-screen' }
[0-3] 2023-02-13T11:59:09.051Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000044',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000044'
[0-3] }
[0-3] 2023-02-13T11:59:09.054Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01a2-ffff-ffff00000044")
[0-3] 2023-02-13T11:59:09.054Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000044/displayed
[0-3] 2023-02-13T11:59:09.075Z INFO webdriver: RESULT true
[0-3] 2023-02-13T11:59:09.076Z INFO webdriver: COMMAND findElement("accessibility id", "button-Inactive")
[0-3] 2023-02-13T11:59:09.076Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:09.076Z INFO webdriver: DATA { using: 'accessibility id', value: 'button-Inactive' }
[0-3] 2023-02-13T11:59:09.097Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000062',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000062'
[0-3] }
[0-3] 2023-02-13T11:59:09.099Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01a2-ffff-ffff00000062")
[0-3] 2023-02-13T11:59:09.100Z INFO webdriver: [GET] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000062/displayed
[0-3] 2023-02-13T11:59:09.120Z INFO webdriver: RESULT true
[0-3] 2023-02-13T11:59:09.121Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-3] 2023-02-13T11:59:09.121Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:09.121Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-3] }
[0-3] 2023-02-13T11:59:09.221Z INFO webdriver: RESULT {
[0-3]   error: 'no such element',
[0-3]   message: 'An element could not be located on the page using the given search parameters.',
[0-3]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-3]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-3] }
[0-3] 2023-02-13T11:59:09.224Z INFO webdriver: COMMAND findElements("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-3] 2023-02-13T11:59:09.224Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/elements
[0-3] 2023-02-13T11:59:09.224Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-3] }
[0-3] 2023-02-13T11:59:09.290Z INFO webdriver: RESULT []
[0-3] 2023-02-13T11:59:09.291Z INFO webdriver: COMMAND findElement("accessibility id", "button-Inactive")
[0-3] 2023-02-13T11:59:09.291Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:09.291Z INFO webdriver: DATA { using: 'accessibility id', value: 'button-Inactive' }
[0-3] 2023-02-13T11:59:09.320Z INFO webdriver: RESULT {
[0-3]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01a2-ffff-ffff00000062',
[0-3]   ELEMENT: '00000000-0000-01a2-ffff-ffff00000062'
[0-3] }
[0-3] 2023-02-13T11:59:09.322Z INFO webdriver: COMMAND elementClick("00000000-0000-01a2-ffff-ffff00000062")
[0-3] 2023-02-13T11:59:09.322Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element/00000000-0000-01a2-ffff-ffff00000062/click
[0-3] 2023-02-13T11:59:10.367Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-3] 2023-02-13T11:59:10.367Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/element
[0-3] 2023-02-13T11:59:10.367Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-3] }
[0-3] 2023-02-13T11:59:10.419Z INFO webdriver: RESULT {
[0-3]   error: 'no such element',
[0-3]   message: 'An element could not be located on the page using the given search parameters.',
[0-3]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-3]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-3]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-3] }
[0-3] 2023-02-13T11:59:10.422Z INFO webdriver: COMMAND findElements("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-3] 2023-02-13T11:59:10.422Z INFO webdriver: [POST] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab/elements
[0-3] 2023-02-13T11:59:10.422Z INFO webdriver: DATA {
[0-3]   using: 'xpath',
[0-3]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-3] }
[0-3] 2023-02-13T11:59:10.477Z INFO webdriver: RESULT []
[0-3] 2023-02-13T11:59:10.478Z INFO webdriver: COMMAND deleteSession()
[0-3] 2023-02-13T11:59:10.478Z INFO webdriver: [DELETE] http://localhost:4723/session/0e344e35-e053-47ef-adbf-35783f3e33ab
2023-02-13T11:59:10.876Z DEBUG @wdio/local-runner: Runner 0-3 finished with exit code 0
[0-3] PASSED in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\specs\app.forms.spec.ts
2023-02-13T11:59:10.877Z INFO @wdio/cli:launcher: Run onWorkerEnd hook
2023-02-13T11:59:10.877Z DEBUG @wdio/cli:utils: Finished to run "onWorkerEnd" hook in 0ms
2023-02-13T11:59:10.878Z INFO @wdio/cli:launcher: Run onWorkerStart hook
2023-02-13T11:59:10.878Z DEBUG @wdio/cli:utils: Finished to run "onWorkerStart" hook in 0ms
2023-02-13T11:59:10.879Z INFO @wdio/local-runner: Start worker 0-4 with arg: config/wdio.android.app.conf.ts
[0-4] 2023-02-13T11:59:11.353Z INFO @wdio/local-runner: Run worker command: run
[0-4] 2023-02-13T11:59:11.481Z DEBUG @wdio/config:utils: Found 'ts-node' package, auto-compiling TypeScript files
[0-4] 2023-02-13T11:59:11.561Z DEBUG @wdio/local-runner:utils: init remote session
[0-4] 2023-02-13T11:59:11.569Z DEBUG @wdio/utils:initialiseServices: initialise service "appium" as NPM package
[0-4] RUNNING in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\specs\app.login.spec.ts
[0-4] 2023-02-13T11:59:11.843Z DEBUG @wdio/local-runner:utils: init remote session
[0-4] 2023-02-13T11:59:11.845Z INFO webdriver: Initiate new session using the WebDriver protocol
[0-4] 2023-02-13T11:59:11.898Z INFO webdriver: [POST] http://localhost:4723/session
[0-4] 2023-02-13T11:59:11.899Z INFO webdriver: DATA {
[0-4]   capabilities: {
[0-4]     alwaysMatch: {
[0-4]       platformName: 'Android',
[0-4]       'appium:deviceName': 'emulator-5554',
[0-4]       'appium:platformVersion': '13.0',
[0-4]       'appium:orientation': 'PORTRAIT',
[0-4]       'appium:automationName': 'UiAutomator2',
[0-4]       'appium:app': 'D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk',
[0-4]       'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
[0-4]       'appium:newCommandTimeout': 240,
[0-4]       'appium:connectHardwareKeyboard': true
[0-4]     },
[0-4]     firstMatch: [ {} ]
[0-4]   },
[0-4]   desiredCapabilities: {
[0-4]     platformName: 'Android',
[0-4]     'appium:deviceName': 'emulator-5554',
[0-4]     'appium:platformVersion': '13.0',
[0-4]     'appium:orientation': 'PORTRAIT',
[0-4]     'appium:automationName': 'UiAutomator2',
[0-4]     'appium:app': 'D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk',
[0-4]     'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
[0-4]     'appium:newCommandTimeout': 240,
[0-4]     'appium:connectHardwareKeyboard': true
[0-4]   }
[0-4] }
[0-4] 2023-02-13T11:59:17.419Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-4] 2023-02-13T11:59:17.419Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:17.419Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-4] 2023-02-13T11:59:17.465Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01b9-ffff-ffff00000015',
[0-4]   ELEMENT: '00000000-0000-01b9-ffff-ffff00000015'
[0-4] }
[0-4] 2023-02-13T11:59:17.471Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01b9-ffff-ffff00000015")
[0-4] 2023-02-13T11:59:17.471Z INFO webdriver: [GET] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff00000015/displayed
[0-4] 2023-02-13T11:59:17.490Z INFO webdriver: RESULT true
[0-4] 2023-02-13T11:59:17.490Z INFO webdriver: COMMAND findElement("accessibility id", "Login")
[0-4] 2023-02-13T11:59:17.491Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:17.491Z INFO webdriver: DATA { using: 'accessibility id', value: 'Login' }
[0-4] 2023-02-13T11:59:17.537Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01b9-ffff-ffff0000001f',
[0-4]   ELEMENT: '00000000-0000-01b9-ffff-ffff0000001f'
[0-4] }
[0-4] 2023-02-13T11:59:17.540Z INFO webdriver: COMMAND elementClick("00000000-0000-01b9-ffff-ffff0000001f")
[0-4] 2023-02-13T11:59:17.540Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff0000001f/click
[0-4] 2023-02-13T11:59:17.608Z INFO webdriver: COMMAND findElement("accessibility id", "Login-screen")
[0-4] 2023-02-13T11:59:17.608Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:17.608Z INFO webdriver: DATA { using: 'accessibility id', value: 'Login-screen' }
[0-4] 2023-02-13T11:59:17.661Z INFO webdriver: RESULT {
[0-4]   error: 'no such element',
[0-4]   message: 'An element could not be located on the page using the given search parameters.',
[0-4]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-4]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-4]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-4]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-4]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-4] }
[0-4] 2023-02-13T11:59:17.664Z INFO webdriver: COMMAND findElement("accessibility id", "Login-screen")
[0-4] 2023-02-13T11:59:17.665Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:17.665Z INFO webdriver: DATA { using: 'accessibility id', value: 'Login-screen' }
[0-4] 2023-02-13T11:59:17.761Z INFO webdriver: RESULT {
[0-4]   error: 'no such element',
[0-4]   message: 'An element could not be located on the page using the given search parameters.',
[0-4]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-4]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-4]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-4]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-4]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-4] }
[0-4] 2023-02-13T11:59:18.171Z INFO webdriver: COMMAND findElement("accessibility id", "Login-screen")
[0-4] 2023-02-13T11:59:18.172Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:18.172Z INFO webdriver: DATA { using: 'accessibility id', value: 'Login-screen' }
[0-4] 2023-02-13T11:59:18.338Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01b9-ffff-ffff00000044',
[0-4]   ELEMENT: '00000000-0000-01b9-ffff-ffff00000044'
[0-4] }
[0-4] 2023-02-13T11:59:18.340Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01b9-ffff-ffff00000044")
[0-4] 2023-02-13T11:59:18.340Z INFO webdriver: [GET] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff00000044/displayed
[0-4] 2023-02-13T11:59:18.352Z INFO webdriver: RESULT true
[0-4] 2023-02-13T11:59:18.353Z INFO webdriver: COMMAND findElement("accessibility id", "button-login-container")
[0-4] 2023-02-13T11:59:18.354Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:18.354Z INFO webdriver: DATA { using: 'accessibility id', value: 'button-login-container' }
[0-4] 2023-02-13T11:59:18.376Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01b9-ffff-ffff00000049',
[0-4]   ELEMENT: '00000000-0000-01b9-ffff-ffff00000049'
[0-4] }
[0-4] 2023-02-13T11:59:18.378Z INFO webdriver: COMMAND elementClick("00000000-0000-01b9-ffff-ffff00000049")
[0-4] 2023-02-13T11:59:18.378Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff00000049/click
[0-4] 2023-02-13T11:59:18.430Z INFO webdriver: COMMAND findElement("accessibility id", "input-email")
[0-4] 2023-02-13T11:59:18.431Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:18.431Z INFO webdriver: DATA { using: 'accessibility id', value: 'input-email' }
[0-4] 2023-02-13T11:59:18.455Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01b9-ffff-ffff00000053',
[0-4]   ELEMENT: '00000000-0000-01b9-ffff-ffff00000053'
[0-4] }
[0-4] 2023-02-13T11:59:18.457Z INFO webdriver: COMMAND elementClear("00000000-0000-01b9-ffff-ffff00000053")
[0-4] 2023-02-13T11:59:18.458Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff00000053/clear
[0-4] 2023-02-13T11:59:18.487Z INFO webdriver: COMMAND elementSendKeys("00000000-0000-01b9-ffff-ffff00000053", "test@webdriver.io")
[0-4] 2023-02-13T11:59:18.487Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff00000053/value
[0-4] 2023-02-13T11:59:18.487Z INFO webdriver: DATA { text: 'test@webdriver.io' }
[0-4] 2023-02-13T11:59:19.583Z INFO webdriver: COMMAND findElement("accessibility id", "input-password")
[0-4] 2023-02-13T11:59:19.583Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:19.583Z INFO webdriver: DATA { using: 'accessibility id', value: 'input-password' }
[0-4] 2023-02-13T11:59:19.645Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01b9-ffff-ffff00000057',
[0-4]   ELEMENT: '00000000-0000-01b9-ffff-ffff00000057'
[0-4] }
[0-4] 2023-02-13T11:59:19.647Z INFO webdriver: COMMAND elementClear("00000000-0000-01b9-ffff-ffff00000057")
[0-4] 2023-02-13T11:59:19.647Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff00000057/clear
[0-4] 2023-02-13T11:59:20.188Z INFO webdriver: COMMAND elementSendKeys("00000000-0000-01b9-ffff-ffff00000057", "Test1234!")
[0-4] 2023-02-13T11:59:20.189Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff00000057/value
[0-4] 2023-02-13T11:59:20.189Z INFO webdriver: DATA { text: 'Test1234!' }
[0-4] 2023-02-13T11:59:21.200Z INFO webdriver: COMMAND isKeyboardShown()
[0-4] 2023-02-13T11:59:21.200Z INFO webdriver: [GET] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/appium/device/is_keyboard_shown
[0-4] 2023-02-13T11:59:21.386Z INFO webdriver: RESULT false
[0-4] 2023-02-13T11:59:21.386Z INFO webdriver: COMMAND findElement("accessibility id", "button-LOGIN")
[0-4] 2023-02-13T11:59:21.386Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:21.386Z INFO webdriver: DATA { using: 'accessibility id', value: 'button-LOGIN' }
[0-4] 2023-02-13T11:59:21.815Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01b9-ffff-ffff0000005a',
[0-4]   ELEMENT: '00000000-0000-01b9-ffff-ffff0000005a'
[0-4] }
[0-4] 2023-02-13T11:59:21.817Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01b9-ffff-ffff0000005a")
[0-4] 2023-02-13T11:59:21.817Z INFO webdriver: [GET] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff0000005a/displayed
[0-4] 2023-02-13T11:59:21.833Z INFO webdriver: RESULT true
[0-4] 2023-02-13T11:59:21.833Z INFO webdriver: COMMAND findElement("accessibility id", "button-LOGIN")
[0-4] 2023-02-13T11:59:21.834Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:21.834Z INFO webdriver: DATA { using: 'accessibility id', value: 'button-LOGIN' }
[0-4] 2023-02-13T11:59:21.854Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01b9-ffff-ffff0000005a',
[0-4]   ELEMENT: '00000000-0000-01b9-ffff-ffff0000005a'
[0-4] }
[0-4] 2023-02-13T11:59:21.856Z INFO webdriver: COMMAND elementClick("00000000-0000-01b9-ffff-ffff0000005a")
[0-4] 2023-02-13T11:59:21.856Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff0000005a/click
[0-4] 2023-02-13T11:59:21.898Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-4] 2023-02-13T11:59:21.898Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:21.898Z INFO webdriver: DATA {
[0-4]   using: 'xpath',
[0-4]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-4] }
[0-4] 2023-02-13T11:59:22.164Z INFO webdriver: RESULT {
[0-4]   error: 'no such element',
[0-4]   message: 'An element could not be located on the page using the given search parameters.',
[0-4]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-4]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-4]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-4]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-4]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-4] }
[0-4] 2023-02-13T11:59:22.167Z INFO webdriver: COMMAND findElements("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-4] 2023-02-13T11:59:22.168Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/elements
[0-4] 2023-02-13T11:59:22.168Z INFO webdriver: DATA {
[0-4]   using: 'xpath',
[0-4]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-4] }
[0-4] 2023-02-13T11:59:22.580Z INFO webdriver: RESULT []
[0-4] 2023-02-13T11:59:22.669Z INFO webdriver: COMMAND findElements("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-4] 2023-02-13T11:59:22.669Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/elements
[0-4] 2023-02-13T11:59:22.669Z INFO webdriver: DATA {
[0-4]   using: 'xpath',
[0-4]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-4] }
[0-4] 2023-02-13T11:59:22.737Z INFO webdriver: RESULT []
[0-4] 2023-02-13T11:59:23.173Z INFO webdriver: COMMAND findElements("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-4] 2023-02-13T11:59:23.173Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/elements
[0-4] 2023-02-13T11:59:23.173Z INFO webdriver: DATA {
[0-4]   using: 'xpath',
[0-4]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-4] }
[0-4] 2023-02-13T11:59:23.233Z INFO webdriver: RESULT []
[0-4] 2023-02-13T11:59:23.670Z INFO webdriver: COMMAND findElements("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-4] 2023-02-13T11:59:23.671Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/elements
[0-4] 2023-02-13T11:59:23.671Z INFO webdriver: DATA {
[0-4]   using: 'xpath',
[0-4]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-4] }
[0-4] 2023-02-13T11:59:24.380Z INFO webdriver: RESULT [
[0-4]   {
[0-4]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ba-ffff-ffff0000006a',
[0-4]     ELEMENT: '00000000-0000-01ba-ffff-ffff0000006a'
[0-4]   }
[0-4] ]
[0-4] 2023-02-13T11:59:24.382Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-4] 2023-02-13T11:59:24.382Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:24.382Z INFO webdriver: DATA {
[0-4]   using: 'xpath',
[0-4]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-4] }
[0-4] 2023-02-13T11:59:24.407Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ba-ffff-ffff0000006a',
[0-4]   ELEMENT: '00000000-0000-01ba-ffff-ffff0000006a'
[0-4] }
[0-4] 2023-02-13T11:59:24.409Z INFO webdriver: COMMAND getElementText("00000000-0000-01ba-ffff-ffff0000006a")
[0-4] 2023-02-13T11:59:24.409Z INFO webdriver: [GET] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01ba-ffff-ffff0000006a/text
[0-4] 2023-02-13T11:59:24.420Z INFO webdriver: RESULT Success
[0-4] 2023-02-13T11:59:24.420Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.TextView[@resource-id="android:id/message"]")
[0-4] 2023-02-13T11:59:24.420Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:24.420Z INFO webdriver: DATA {
[0-4]   using: 'xpath',
[0-4]   value: '*//android.widget.TextView[@resource-id="android:id/message"]'
[0-4] }
[0-4] 2023-02-13T11:59:24.445Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ba-ffff-ffff00000070',
[0-4]   ELEMENT: '00000000-0000-01ba-ffff-ffff00000070'
[0-4] }
[0-4] 2023-02-13T11:59:24.447Z INFO webdriver: COMMAND getElementText("00000000-0000-01ba-ffff-ffff00000070")
[0-4] 2023-02-13T11:59:24.447Z INFO webdriver: [GET] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01ba-ffff-ffff00000070/text
[0-4] 2023-02-13T11:59:24.476Z INFO webdriver: RESULT You are logged in!
[0-4] 2023-02-13T11:59:24.479Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.Button[@text="OK"]")
[0-4] 2023-02-13T11:59:24.479Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:24.479Z INFO webdriver: DATA { using: 'xpath', value: '*//android.widget.Button[@text="OK"]' }
[0-4] 2023-02-13T11:59:24.505Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ba-ffff-ffff00000079',
[0-4]   ELEMENT: '00000000-0000-01ba-ffff-ffff00000079'
[0-4] }
[0-4] 2023-02-13T11:59:24.507Z INFO webdriver: COMMAND elementClick("00000000-0000-01ba-ffff-ffff00000079")
[0-4] 2023-02-13T11:59:24.507Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01ba-ffff-ffff00000079/click
[0-4] 2023-02-13T11:59:25.108Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-4] 2023-02-13T11:59:25.108Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:25.108Z INFO webdriver: DATA {
[0-4]   using: 'xpath',
[0-4]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-4] }
[0-4] 2023-02-13T11:59:25.167Z INFO webdriver: RESULT {
[0-4]   error: 'no such element',
[0-4]   message: 'An element could not be located on the page using the given search parameters.',
[0-4]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-4]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-4]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-4]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-4]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-4] }
[0-4] 2023-02-13T11:59:25.169Z INFO webdriver: COMMAND findElements("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-4] 2023-02-13T11:59:25.169Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/elements
[0-4] 2023-02-13T11:59:25.169Z INFO webdriver: DATA {
[0-4]   using: 'xpath',
[0-4]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-4] }
[0-4] 2023-02-13T11:59:25.224Z INFO webdriver: RESULT []
[0-4] 2023-02-13T11:59:25.225Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-4] 2023-02-13T11:59:25.225Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:25.225Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-4] 2023-02-13T11:59:25.243Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01b9-ffff-ffff00000015',
[0-4]   ELEMENT: '00000000-0000-01b9-ffff-ffff00000015'
[0-4] }
[0-4] 2023-02-13T11:59:25.245Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01b9-ffff-ffff00000015")
[0-4] 2023-02-13T11:59:25.245Z INFO webdriver: [GET] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff00000015/displayed
[0-4] 2023-02-13T11:59:25.257Z INFO webdriver: RESULT true
[0-4] 2023-02-13T11:59:25.257Z INFO webdriver: COMMAND findElement("accessibility id", "Login")
[0-4] 2023-02-13T11:59:25.257Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:25.257Z INFO webdriver: DATA { using: 'accessibility id', value: 'Login' }
[0-4] 2023-02-13T11:59:25.278Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01b9-ffff-ffff0000001f',
[0-4]   ELEMENT: '00000000-0000-01b9-ffff-ffff0000001f'
[0-4] }
[0-4] 2023-02-13T11:59:25.280Z INFO webdriver: COMMAND elementClick("00000000-0000-01b9-ffff-ffff0000001f")
[0-4] 2023-02-13T11:59:25.280Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff0000001f/click
[0-4] 2023-02-13T11:59:25.327Z INFO webdriver: COMMAND findElement("accessibility id", "Login-screen")
[0-4] 2023-02-13T11:59:25.327Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:25.328Z INFO webdriver: DATA { using: 'accessibility id', value: 'Login-screen' }
[0-4] 2023-02-13T11:59:25.342Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01b9-ffff-ffff00000044',
[0-4]   ELEMENT: '00000000-0000-01b9-ffff-ffff00000044'
[0-4] }
[0-4] 2023-02-13T11:59:25.344Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01b9-ffff-ffff00000044")
[0-4] 2023-02-13T11:59:25.344Z INFO webdriver: [GET] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff00000044/displayed
[0-4] 2023-02-13T11:59:25.354Z INFO webdriver: RESULT true
[0-4] 2023-02-13T11:59:25.355Z INFO webdriver: COMMAND findElement("accessibility id", "button-sign-up-container")
[0-4] 2023-02-13T11:59:25.355Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:25.355Z INFO webdriver: DATA { using: 'accessibility id', value: 'button-sign-up-container' }
[0-4] 2023-02-13T11:59:25.369Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01b9-ffff-ffff0000004c',
[0-4]   ELEMENT: '00000000-0000-01b9-ffff-ffff0000004c'
[0-4] }
[0-4] 2023-02-13T11:59:25.371Z INFO webdriver: COMMAND elementClick("00000000-0000-01b9-ffff-ffff0000004c")
[0-4] 2023-02-13T11:59:25.371Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff0000004c/click
[0-4] 2023-02-13T11:59:26.299Z INFO webdriver: COMMAND findElement("accessibility id", "input-email")
[0-4] 2023-02-13T11:59:26.299Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:26.299Z INFO webdriver: DATA { using: 'accessibility id', value: 'input-email' }
[0-4] 2023-02-13T11:59:26.311Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01b9-ffff-ffff00000053',
[0-4]   ELEMENT: '00000000-0000-01b9-ffff-ffff00000053'
[0-4] }
[0-4] 2023-02-13T11:59:26.314Z INFO webdriver: COMMAND elementClear("00000000-0000-01b9-ffff-ffff00000053")
[0-4] 2023-02-13T11:59:26.314Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff00000053/clear
[0-4] 2023-02-13T11:59:26.326Z INFO webdriver: COMMAND elementSendKeys("00000000-0000-01b9-ffff-ffff00000053", "test@webdriver.io")
[0-4] 2023-02-13T11:59:26.326Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff00000053/value
[0-4] 2023-02-13T11:59:26.326Z INFO webdriver: DATA { text: 'test@webdriver.io' }
[0-4] 2023-02-13T11:59:27.369Z INFO webdriver: COMMAND findElement("accessibility id", "input-password")
[0-4] 2023-02-13T11:59:27.369Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:27.369Z INFO webdriver: DATA { using: 'accessibility id', value: 'input-password' }
[0-4] 2023-02-13T11:59:27.974Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01b9-ffff-ffff00000057',
[0-4]   ELEMENT: '00000000-0000-01b9-ffff-ffff00000057'
[0-4] }
[0-4] 2023-02-13T11:59:27.976Z INFO webdriver: COMMAND elementClear("00000000-0000-01b9-ffff-ffff00000057")
[0-4] 2023-02-13T11:59:27.976Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff00000057/clear
[0-4] 2023-02-13T11:59:27.990Z INFO webdriver: COMMAND elementSendKeys("00000000-0000-01b9-ffff-ffff00000057", "Test1234!")
[0-4] 2023-02-13T11:59:27.990Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff00000057/value
[0-4] 2023-02-13T11:59:27.990Z INFO webdriver: DATA { text: 'Test1234!' }
[0-4] 2023-02-13T11:59:29.101Z INFO webdriver: COMMAND findElement("accessibility id", "input-repeat-password")
[0-4] 2023-02-13T11:59:29.101Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:29.101Z INFO webdriver: DATA { using: 'accessibility id', value: 'input-repeat-password' }
[0-4] 2023-02-13T11:59:29.710Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01b9-ffff-ffff0000007e',
[0-4]   ELEMENT: '00000000-0000-01b9-ffff-ffff0000007e'
[0-4] }
[0-4] 2023-02-13T11:59:29.713Z INFO webdriver: COMMAND elementClear("00000000-0000-01b9-ffff-ffff0000007e")
[0-4] 2023-02-13T11:59:29.714Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff0000007e/clear
[0-4] 2023-02-13T11:59:29.727Z INFO webdriver: COMMAND elementSendKeys("00000000-0000-01b9-ffff-ffff0000007e", "Test1234!")
[0-4] 2023-02-13T11:59:29.727Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff0000007e/value
[0-4] 2023-02-13T11:59:29.727Z INFO webdriver: DATA { text: 'Test1234!' }
[0-4] 2023-02-13T11:59:30.735Z INFO webdriver: COMMAND isKeyboardShown()
[0-4] 2023-02-13T11:59:30.736Z INFO webdriver: [GET] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/appium/device/is_keyboard_shown
[0-4] 2023-02-13T11:59:30.886Z INFO webdriver: RESULT false
[0-4] 2023-02-13T11:59:30.886Z INFO webdriver: COMMAND findElement("accessibility id", "button-SIGN UP")
[0-4] 2023-02-13T11:59:30.886Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:30.886Z INFO webdriver: DATA { using: 'accessibility id', value: 'button-SIGN UP' }
[0-4] 2023-02-13T11:59:31.350Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01b9-ffff-ffff0000005a',
[0-4]   ELEMENT: '00000000-0000-01b9-ffff-ffff0000005a'
[0-4] }
[0-4] 2023-02-13T11:59:31.352Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01b9-ffff-ffff0000005a")
[0-4] 2023-02-13T11:59:31.352Z INFO webdriver: [GET] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff0000005a/displayed
[0-4] 2023-02-13T11:59:31.362Z INFO webdriver: RESULT true
[0-4] 2023-02-13T11:59:31.362Z INFO webdriver: COMMAND findElement("accessibility id", "button-SIGN UP")
[0-4] 2023-02-13T11:59:31.362Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:31.362Z INFO webdriver: DATA { using: 'accessibility id', value: 'button-SIGN UP' }
[0-4] 2023-02-13T11:59:31.378Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01b9-ffff-ffff0000005a',
[0-4]   ELEMENT: '00000000-0000-01b9-ffff-ffff0000005a'
[0-4] }
[0-4] 2023-02-13T11:59:31.381Z INFO webdriver: COMMAND elementClick("00000000-0000-01b9-ffff-ffff0000005a")
[0-4] 2023-02-13T11:59:31.381Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01b9-ffff-ffff0000005a/click
[0-4] 2023-02-13T11:59:31.432Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-4] 2023-02-13T11:59:31.432Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:31.432Z INFO webdriver: DATA {
[0-4]   using: 'xpath',
[0-4]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-4] }
[0-4] 2023-02-13T11:59:31.580Z INFO webdriver: RESULT {
[0-4]   error: 'no such element',
[0-4]   message: 'An element could not be located on the page using the given search parameters.',
[0-4]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-4]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-4]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-4]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-4]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-4] }
[0-4] 2023-02-13T11:59:31.583Z INFO webdriver: COMMAND findElements("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-4] 2023-02-13T11:59:31.583Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/elements
[0-4] 2023-02-13T11:59:31.583Z INFO webdriver: DATA {
[0-4]   using: 'xpath',
[0-4]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-4] }
[0-4] 2023-02-13T11:59:32.416Z INFO webdriver: RESULT []
[0-4] 2023-02-13T11:59:32.417Z INFO webdriver: COMMAND findElements("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-4] 2023-02-13T11:59:32.417Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/elements
[0-4] 2023-02-13T11:59:32.417Z INFO webdriver: DATA {
[0-4]   using: 'xpath',
[0-4]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-4] }
[0-4] 2023-02-13T11:59:32.485Z INFO webdriver: RESULT []
[0-4] 2023-02-13T11:59:32.591Z INFO webdriver: COMMAND findElements("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-4] 2023-02-13T11:59:32.591Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/elements
[0-4] 2023-02-13T11:59:32.591Z INFO webdriver: DATA {
[0-4]   using: 'xpath',
[0-4]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-4] }
[0-4] 2023-02-13T11:59:32.650Z INFO webdriver: RESULT []
[0-4] 2023-02-13T11:59:33.094Z INFO webdriver: COMMAND findElements("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-4] 2023-02-13T11:59:33.095Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/elements
[0-4] 2023-02-13T11:59:33.095Z INFO webdriver: DATA {
[0-4]   using: 'xpath',
[0-4]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-4] }
[0-4] 2023-02-13T11:59:33.875Z INFO webdriver: RESULT [
[0-4]   {
[0-4]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01bb-ffff-ffff00000090',
[0-4]     ELEMENT: '00000000-0000-01bb-ffff-ffff00000090'
[0-4]   }
[0-4] ]
[0-4] 2023-02-13T11:59:33.877Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-4] 2023-02-13T11:59:33.877Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:33.877Z INFO webdriver: DATA {
[0-4]   using: 'xpath',
[0-4]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-4] }
[0-4] 2023-02-13T11:59:33.911Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01bb-ffff-ffff00000090',
[0-4]   ELEMENT: '00000000-0000-01bb-ffff-ffff00000090'
[0-4] }
[0-4] 2023-02-13T11:59:33.913Z INFO webdriver: COMMAND getElementText("00000000-0000-01bb-ffff-ffff00000090")
[0-4] 2023-02-13T11:59:33.913Z INFO webdriver: [GET] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01bb-ffff-ffff00000090/text
[0-4] 2023-02-13T11:59:33.923Z INFO webdriver: RESULT Signed Up!
[0-4] 2023-02-13T11:59:33.923Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.TextView[@resource-id="android:id/message"]")
[0-4] 2023-02-13T11:59:33.924Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:33.924Z INFO webdriver: DATA {
[0-4]   using: 'xpath',
[0-4]   value: '*//android.widget.TextView[@resource-id="android:id/message"]'
[0-4] }
[0-4] 2023-02-13T11:59:33.944Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01bb-ffff-ffff00000096',
[0-4]   ELEMENT: '00000000-0000-01bb-ffff-ffff00000096'
[0-4] }
[0-4] 2023-02-13T11:59:33.946Z INFO webdriver: COMMAND getElementText("00000000-0000-01bb-ffff-ffff00000096")
[0-4] 2023-02-13T11:59:33.946Z INFO webdriver: [GET] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01bb-ffff-ffff00000096/text
[0-4] 2023-02-13T11:59:33.955Z INFO webdriver: RESULT You successfully signed up!
[0-4] 2023-02-13T11:59:33.956Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.Button[@text="OK"]")
[0-4] 2023-02-13T11:59:33.956Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:33.956Z INFO webdriver: DATA { using: 'xpath', value: '*//android.widget.Button[@text="OK"]' }
[0-4] 2023-02-13T11:59:33.978Z INFO webdriver: RESULT {
[0-4]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01bb-ffff-ffff0000009f',
[0-4]   ELEMENT: '00000000-0000-01bb-ffff-ffff0000009f'
[0-4] }
[0-4] 2023-02-13T11:59:33.981Z INFO webdriver: COMMAND elementClick("00000000-0000-01bb-ffff-ffff0000009f")
[0-4] 2023-02-13T11:59:33.982Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element/00000000-0000-01bb-ffff-ffff0000009f/click
[0-4] 2023-02-13T11:59:34.591Z INFO webdriver: COMMAND findElement("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-4] 2023-02-13T11:59:34.591Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/element
[0-4] 2023-02-13T11:59:34.591Z INFO webdriver: DATA {
[0-4]   using: 'xpath',
[0-4]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-4] }
[0-4] 2023-02-13T11:59:34.644Z INFO webdriver: RESULT {
[0-4]   error: 'no such element',
[0-4]   message: 'An element could not be located on the page using the given search parameters.',
[0-4]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-4]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-4]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-4]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-4]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-4] }
[0-4] 2023-02-13T11:59:34.646Z INFO webdriver: COMMAND findElements("xpath", "*//android.widget.TextView[@resource-id="android:id/alertTitle"]")
[0-4] 2023-02-13T11:59:34.647Z INFO webdriver: [POST] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7/elements
[0-4] 2023-02-13T11:59:34.647Z INFO webdriver: DATA {
[0-4]   using: 'xpath',
[0-4]   value: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'
[0-4] }
[0-4] 2023-02-13T11:59:34.695Z INFO webdriver: RESULT []
[0-4] 2023-02-13T11:59:34.697Z INFO webdriver: COMMAND deleteSession()
[0-4] 2023-02-13T11:59:34.697Z INFO webdriver: [DELETE] http://localhost:4723/session/5600bf23-8ee9-48ea-944e-4b941682e6a7
2023-02-13T11:59:35.040Z DEBUG @wdio/local-runner: Runner 0-4 finished with exit code 0
[0-4] PASSED in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\specs\app.login.spec.ts
2023-02-13T11:59:35.040Z INFO @wdio/cli:launcher: Run onWorkerEnd hook
2023-02-13T11:59:35.041Z DEBUG @wdio/cli:utils: Finished to run "onWorkerEnd" hook in 0ms
2023-02-13T11:59:35.041Z INFO @wdio/cli:launcher: Run onWorkerStart hook
2023-02-13T11:59:35.041Z DEBUG @wdio/cli:utils: Finished to run "onWorkerStart" hook in 0ms
2023-02-13T11:59:35.042Z INFO @wdio/local-runner: Start worker 0-5 with arg: config/wdio.android.app.conf.ts
[0-5] 2023-02-13T11:59:35.472Z INFO @wdio/local-runner: Run worker command: run
[0-5] 2023-02-13T11:59:35.599Z DEBUG @wdio/config:utils: Found 'ts-node' package, auto-compiling TypeScript files
[0-5] 2023-02-13T11:59:35.682Z DEBUG @wdio/local-runner:utils: init remote session
[0-5] 2023-02-13T11:59:35.689Z DEBUG @wdio/utils:initialiseServices: initialise service "appium" as NPM package
[0-5] RUNNING in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\specs\app.swipe.spec.ts
[0-5] 2023-02-13T11:59:35.958Z DEBUG @wdio/local-runner:utils: init remote session
[0-5] 2023-02-13T11:59:35.959Z INFO webdriver: Initiate new session using the WebDriver protocol
[0-5] 2023-02-13T11:59:36.011Z INFO webdriver: [POST] http://localhost:4723/session
[0-5] 2023-02-13T11:59:36.011Z INFO webdriver: DATA {
[0-5]   capabilities: {
[0-5]     alwaysMatch: {
[0-5]       platformName: 'Android',
[0-5]       'appium:deviceName': 'emulator-5554',
[0-5]       'appium:platformVersion': '13.0',
[0-5]       'appium:orientation': 'PORTRAIT',
[0-5]       'appium:automationName': 'UiAutomator2',
[0-5]       'appium:app': 'D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk',
[0-5]       'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
[0-5]       'appium:newCommandTimeout': 240,
[0-5]       'appium:connectHardwareKeyboard': true
[0-5]     },
[0-5]     firstMatch: [ {} ]
[0-5]   },
[0-5]   desiredCapabilities: {
[0-5]     platformName: 'Android',
[0-5]     'appium:deviceName': 'emulator-5554',
[0-5]     'appium:platformVersion': '13.0',
[0-5]     'appium:orientation': 'PORTRAIT',
[0-5]     'appium:automationName': 'UiAutomator2',
[0-5]     'appium:app': 'D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk',
[0-5]     'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
[0-5]     'appium:newCommandTimeout': 240,
[0-5]     'appium:connectHardwareKeyboard': true
[0-5]   }
[0-5] }
[0-5] 2023-02-13T11:59:41.450Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-5] 2023-02-13T11:59:41.450Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T11:59:41.451Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-5] 2023-02-13T11:59:41.489Z INFO webdriver: RESULT {
[0-5]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000015',
[0-5]   ELEMENT: '00000000-0000-01cc-ffff-ffff00000015'
[0-5] }
[0-5] 2023-02-13T11:59:41.495Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01cc-ffff-ffff00000015")
[0-5] 2023-02-13T11:59:41.495Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000015/displayed
[0-5] 2023-02-13T11:59:41.509Z INFO webdriver: RESULT true
[0-5] 2023-02-13T11:59:41.509Z INFO webdriver: COMMAND findElement("accessibility id", "Swipe")
[0-5] 2023-02-13T11:59:41.509Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T11:59:41.510Z INFO webdriver: DATA { using: 'accessibility id', value: 'Swipe' }
[0-5] 2023-02-13T11:59:41.554Z INFO webdriver: RESULT {
[0-5]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000029',
[0-5]   ELEMENT: '00000000-0000-01cc-ffff-ffff00000029'
[0-5] }
[0-5] 2023-02-13T11:59:41.557Z INFO webdriver: COMMAND elementClick("00000000-0000-01cc-ffff-ffff00000029")
[0-5] 2023-02-13T11:59:41.557Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000029/click
[0-5] 2023-02-13T11:59:41.613Z INFO webdriver: COMMAND findElement("accessibility id", "Swipe-screen")
[0-5] 2023-02-13T11:59:41.613Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T11:59:41.614Z INFO webdriver: DATA { using: 'accessibility id', value: 'Swipe-screen' }
[0-5] 2023-02-13T11:59:41.649Z INFO webdriver: RESULT {
[0-5]   error: 'no such element',
[0-5]   message: 'An element could not be located on the page using the given search parameters.',
[0-5]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-5]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-5]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-5]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-5]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-5] }
[0-5] 2023-02-13T11:59:41.652Z INFO webdriver: COMMAND findElement("accessibility id", "Swipe-screen")
[0-5] 2023-02-13T11:59:41.652Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T11:59:41.653Z INFO webdriver: DATA { using: 'accessibility id', value: 'Swipe-screen' }
[0-5] 2023-02-13T11:59:41.697Z INFO webdriver: RESULT {
[0-5]   error: 'no such element',
[0-5]   message: 'An element could not be located on the page using the given search parameters.',
[0-5]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-5]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-5]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-5]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-5]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-5] }
[0-5] 2023-02-13T11:59:42.159Z INFO webdriver: COMMAND findElement("accessibility id", "Swipe-screen")
[0-5] 2023-02-13T11:59:42.159Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T11:59:42.159Z INFO webdriver: DATA { using: 'accessibility id', value: 'Swipe-screen' }
[0-5] 2023-02-13T11:59:43.611Z INFO webdriver: RESULT {
[0-5]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000044',
[0-5]   ELEMENT: '00000000-0000-01cc-ffff-ffff00000044'
[0-5] }
[0-5] 2023-02-13T11:59:43.613Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01cc-ffff-ffff00000044")
[0-5] 2023-02-13T11:59:43.613Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000044/displayed
[0-5] 2023-02-13T11:59:43.626Z INFO webdriver: RESULT true
[0-5] 2023-02-13T11:59:43.627Z INFO webdriver: COMMAND findElement("accessibility id", "Carousel")
[0-5] 2023-02-13T11:59:43.627Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T11:59:43.627Z INFO webdriver: DATA { using: 'accessibility id', value: 'Carousel' }
[0-5] 2023-02-13T11:59:43.652Z INFO webdriver: RESULT {
[0-5]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000049',
[0-5]   ELEMENT: '00000000-0000-01cc-ffff-ffff00000049'
[0-5] }
[0-5] 2023-02-13T11:59:43.655Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01cc-ffff-ffff00000049")
[0-5] 2023-02-13T11:59:43.655Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000049/displayed
[0-5] 2023-02-13T11:59:43.665Z INFO webdriver: RESULT true
[0-5] 2023-02-13T11:59:43.666Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-5] 2023-02-13T11:59:43.666Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/elements
[0-5] 2023-02-13T11:59:43.666Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-5] 2023-02-13T11:59:43.702Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000004e',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000004e'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000055',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000055'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T11:59:43.706Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-5] 2023-02-13T11:59:43.706Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/elements
[0-5] 2023-02-13T11:59:43.706Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-5] 2023-02-13T11:59:43.745Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000004e',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000004e'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000055',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000055'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T11:59:43.748Z INFO webdriver: COMMAND findElementsFromElement("00000000-0000-01cc-ffff-ffff0000004e", "xpath", "*//android.widget.TextView")
[0-5] 2023-02-13T11:59:43.748Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff0000004e/elements
[0-5] 2023-02-13T11:59:43.748Z INFO webdriver: DATA { using: 'xpath', value: '*//android.widget.TextView' }
[0-5] 2023-02-13T11:59:43.941Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000004f',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000004f'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000051',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000051'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000052',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000052'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T11:59:43.944Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff0000004f")
[0-5] 2023-02-13T11:59:43.944Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff0000004f/text
[0-5] 2023-02-13T11:59:43.976Z INFO webdriver: RESULT 󰊤
[0-5] 2023-02-13T11:59:43.976Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff00000051")
[0-5] 2023-02-13T11:59:43.976Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000051/text
[0-5] 2023-02-13T11:59:43.989Z INFO webdriver: RESULT FULLY OPEN SOURCE
[0-5] 2023-02-13T11:59:43.989Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff00000052")
[0-5] 2023-02-13T11:59:43.990Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000052/text
[0-5] 2023-02-13T11:59:44.000Z INFO webdriver: RESULT WebdriverIO is fully open source and can be found on GitHub
[0-5] 2023-02-13T11:59:44.001Z INFO webdriver: COMMAND findElement("accessibility id", "Carousel")
[0-5] 2023-02-13T11:59:44.002Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T11:59:44.002Z INFO webdriver: DATA { using: 'accessibility id', value: 'Carousel' }
[0-5] 2023-02-13T11:59:44.021Z INFO webdriver: RESULT {
[0-5]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000049',
[0-5]   ELEMENT: '00000000-0000-01cc-ffff-ffff00000049'
[0-5] }
[0-5] 2023-02-13T11:59:44.023Z INFO webdriver: COMMAND getElementRect("00000000-0000-01cc-ffff-ffff00000049")
[0-5] 2023-02-13T11:59:44.023Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000049/rect
[0-5] 2023-02-13T11:59:44.035Z INFO webdriver: RESULT { height: 1344, width: 1440, x: 0, y: 1412 }
[0-5] 2023-02-13T11:59:44.035Z INFO webdriver: COMMAND performActions(<object>)
[0-5] 2023-02-13T11:59:44.036Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/actions
[0-5] 2023-02-13T11:59:44.036Z INFO webdriver: DATA {
[0-5]   actions: [
[0-5]     {
[0-5]       type: 'pointer',
[0-5]       id: 'finger1',
[0-5]       parameters: [Object],
[0-5]       actions: [Array]
[0-5]     }
[0-5]   ]
[0-5] }
[0-5] 2023-02-13T11:59:46.542Z INFO webdriver: COMMAND findElement("accessibility id", "Carousel")
[0-5] 2023-02-13T11:59:46.543Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T11:59:46.543Z INFO webdriver: DATA { using: 'accessibility id', value: 'Carousel' }
[0-5] 2023-02-13T11:59:47.846Z INFO webdriver: RESULT {
[0-5]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000049',
[0-5]   ELEMENT: '00000000-0000-01cc-ffff-ffff00000049'
[0-5] }
[0-5] 2023-02-13T11:59:47.849Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01cc-ffff-ffff00000049")
[0-5] 2023-02-13T11:59:47.849Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000049/displayed
[0-5] 2023-02-13T11:59:47.859Z INFO webdriver: RESULT true
[0-5] 2023-02-13T11:59:47.859Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-5] 2023-02-13T11:59:47.859Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/elements
[0-5] 2023-02-13T11:59:47.860Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-5] 2023-02-13T11:59:47.888Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000004e',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000004e'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000055',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000055'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000006b',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000006b'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T11:59:47.893Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-5] 2023-02-13T11:59:47.894Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/elements
[0-5] 2023-02-13T11:59:47.894Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-5] 2023-02-13T11:59:47.945Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000004e',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000004e'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000055',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000055'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000006b',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000006b'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T11:59:47.950Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-5] 2023-02-13T11:59:47.950Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/elements
[0-5] 2023-02-13T11:59:47.950Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-5] 2023-02-13T11:59:47.999Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000004e',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000004e'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000055',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000055'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000006b',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000006b'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T11:59:48.003Z INFO webdriver: COMMAND findElementsFromElement("00000000-0000-01cc-ffff-ffff00000055", "xpath", "*//android.widget.TextView")
[0-5] 2023-02-13T11:59:48.003Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000055/elements
[0-5] 2023-02-13T11:59:48.003Z INFO webdriver: DATA { using: 'xpath', value: '*//android.widget.TextView' }
[0-5] 2023-02-13T11:59:48.023Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000056',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000056'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000058',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000058'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000059',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000059'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T11:59:48.028Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff00000056")
[0-5] 2023-02-13T11:59:48.028Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000056/text
[0-5] 2023-02-13T11:59:48.036Z INFO webdriver: RESULT 󰘑
[0-5] 2023-02-13T11:59:48.037Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff00000058")
[0-5] 2023-02-13T11:59:48.037Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000058/text
[0-5] 2023-02-13T11:59:48.047Z INFO webdriver: RESULT GREAT COMMUNITY
[0-5] 2023-02-13T11:59:48.047Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff00000059")
[0-5] 2023-02-13T11:59:48.047Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000059/text
[0-5] 2023-02-13T11:59:48.056Z INFO webdriver: RESULT WebdriverIO has a great community that supports all members.
[0-5] 2023-02-13T11:59:48.056Z INFO webdriver: COMMAND performActions(<object>)
[0-5] 2023-02-13T11:59:48.057Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/actions
[0-5] 2023-02-13T11:59:48.057Z INFO webdriver: DATA {
[0-5]   actions: [
[0-5]     {
[0-5]       type: 'pointer',
[0-5]       id: 'finger1',
[0-5]       parameters: [Object],
[0-5]       actions: [Array]
[0-5]     }
[0-5]   ]
[0-5] }
[0-5] 2023-02-13T11:59:50.586Z INFO webdriver: COMMAND findElement("accessibility id", "Carousel")
[0-5] 2023-02-13T11:59:50.586Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T11:59:50.586Z INFO webdriver: DATA { using: 'accessibility id', value: 'Carousel' }
[0-5] 2023-02-13T11:59:51.632Z INFO webdriver: RESULT {
[0-5]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000049',
[0-5]   ELEMENT: '00000000-0000-01cc-ffff-ffff00000049'
[0-5] }
[0-5] 2023-02-13T11:59:51.633Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01cc-ffff-ffff00000049")
[0-5] 2023-02-13T11:59:51.633Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000049/displayed
[0-5] 2023-02-13T11:59:51.643Z INFO webdriver: RESULT true
[0-5] 2023-02-13T11:59:51.643Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-5] 2023-02-13T11:59:51.643Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/elements
[0-5] 2023-02-13T11:59:51.643Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-5] 2023-02-13T11:59:51.677Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000055',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000055'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000006b',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000006b'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000072',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000072'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T11:59:51.681Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-5] 2023-02-13T11:59:51.681Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/elements
[0-5] 2023-02-13T11:59:51.682Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-5] 2023-02-13T11:59:51.720Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000055',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000055'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000006b',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000006b'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000072',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000072'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T11:59:51.725Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-5] 2023-02-13T11:59:51.725Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/elements
[0-5] 2023-02-13T11:59:51.725Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-5] 2023-02-13T11:59:51.767Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000055',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000055'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000006b',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000006b'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000072',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000072'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T11:59:51.771Z INFO webdriver: COMMAND findElementsFromElement("00000000-0000-01cc-ffff-ffff0000006b", "xpath", "*//android.widget.TextView")
[0-5] 2023-02-13T11:59:51.771Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff0000006b/elements
[0-5] 2023-02-13T11:59:51.771Z INFO webdriver: DATA { using: 'xpath', value: '*//android.widget.TextView' }
[0-5] 2023-02-13T11:59:51.792Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000006c',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000006c'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000006e',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000006e'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000006f',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000006f'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T11:59:51.796Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff0000006c")
[0-5] 2023-02-13T11:59:51.797Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff0000006c/text
[0-5] 2023-02-13T11:59:51.806Z INFO webdriver: RESULT 󰌞
[0-5] 2023-02-13T11:59:51.806Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff0000006e")
[0-5] 2023-02-13T11:59:51.806Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff0000006e/text
[0-5] 2023-02-13T11:59:51.815Z INFO webdriver: RESULT JS.FOUNDATION
[0-5] 2023-02-13T11:59:51.815Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff0000006f")
[0-5] 2023-02-13T11:59:51.815Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff0000006f/text
[0-5] 2023-02-13T11:59:51.825Z INFO webdriver: RESULT The JS Foundation is host to projects that span the entire JavaScript ecosystem.
[0-5] 2023-02-13T11:59:51.825Z INFO webdriver: COMMAND performActions(<object>)
[0-5] 2023-02-13T11:59:51.825Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/actions
[0-5] 2023-02-13T11:59:51.825Z INFO webdriver: DATA {
[0-5]   actions: [
[0-5]     {
[0-5]       type: 'pointer',
[0-5]       id: 'finger1',
[0-5]       parameters: [Object],
[0-5]       actions: [Array]
[0-5]     }
[0-5]   ]
[0-5] }
[0-5] 2023-02-13T11:59:54.307Z INFO webdriver: COMMAND findElement("accessibility id", "Carousel")
[0-5] 2023-02-13T11:59:54.307Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T11:59:54.307Z INFO webdriver: DATA { using: 'accessibility id', value: 'Carousel' }
[0-5] 2023-02-13T11:59:55.415Z INFO webdriver: RESULT {
[0-5]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000049',
[0-5]   ELEMENT: '00000000-0000-01cc-ffff-ffff00000049'
[0-5] }
[0-5] 2023-02-13T11:59:55.418Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01cc-ffff-ffff00000049")
[0-5] 2023-02-13T11:59:55.418Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000049/displayed
[0-5] 2023-02-13T11:59:55.426Z INFO webdriver: RESULT true
[0-5] 2023-02-13T11:59:55.426Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-5] 2023-02-13T11:59:55.426Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/elements
[0-5] 2023-02-13T11:59:55.427Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-5] 2023-02-13T11:59:55.469Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000006b',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000006b'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000072',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000072'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000079',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000079'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T11:59:55.474Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-5] 2023-02-13T11:59:55.474Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/elements
[0-5] 2023-02-13T11:59:55.474Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-5] 2023-02-13T11:59:55.516Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000006b',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000006b'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000072',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000072'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000079',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000079'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T11:59:55.519Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-5] 2023-02-13T11:59:55.519Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/elements
[0-5] 2023-02-13T11:59:55.519Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-5] 2023-02-13T11:59:55.562Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000006b',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000006b'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000072',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000072'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000079',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000079'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T11:59:55.566Z INFO webdriver: COMMAND findElementsFromElement("00000000-0000-01cc-ffff-ffff00000072", "xpath", "*//android.widget.TextView")
[0-5] 2023-02-13T11:59:55.566Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000072/elements
[0-5] 2023-02-13T11:59:55.566Z INFO webdriver: DATA { using: 'xpath', value: '*//android.widget.TextView' }
[0-5] 2023-02-13T11:59:55.589Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000073',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000073'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000075',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000075'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000076',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000076'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T11:59:55.593Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff00000073")
[0-5] 2023-02-13T11:59:55.593Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000073/text
[0-5] 2023-02-13T11:59:55.609Z INFO webdriver: RESULT 󰗃
[0-5] 2023-02-13T11:59:55.609Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff00000075")
[0-5] 2023-02-13T11:59:55.610Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000075/text
[0-5] 2023-02-13T11:59:55.620Z INFO webdriver: RESULT SUPPORT VIDEOS
[0-5] 2023-02-13T11:59:55.620Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff00000076")
[0-5] 2023-02-13T11:59:55.620Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000076/text
[0-5] 2023-02-13T11:59:55.631Z INFO webdriver: RESULT The community around WebdriverIO is actively speaking on various user groups or conferences about specific topics around automated testing with WebdriverIO.
[0-5] 2023-02-13T11:59:55.632Z INFO webdriver: COMMAND performActions(<object>)
[0-5] 2023-02-13T11:59:55.632Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/actions
[0-5] 2023-02-13T11:59:55.632Z INFO webdriver: DATA {
[0-5]   actions: [
[0-5]     {
[0-5]       type: 'pointer',
[0-5]       id: 'finger1',
[0-5]       parameters: [Object],
[0-5]       actions: [Array]
[0-5]     }
[0-5]   ]
[0-5] }
[0-5] 2023-02-13T11:59:58.199Z INFO webdriver: COMMAND performActions(<object>)
[0-5] 2023-02-13T11:59:58.199Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/actions
[0-5] 2023-02-13T11:59:58.199Z INFO webdriver: DATA {
[0-5]   actions: [
[0-5]     {
[0-5]       type: 'pointer',
[0-5]       id: 'finger1',
[0-5]       parameters: [Object],
[0-5]       actions: [Array]
[0-5]     }
[0-5]   ]
[0-5] }
[0-5] 2023-02-13T12:00:00.980Z INFO webdriver: COMMAND findElement("accessibility id", "Carousel")
[0-5] 2023-02-13T12:00:00.980Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T12:00:00.980Z INFO webdriver: DATA { using: 'accessibility id', value: 'Carousel' }
[0-5] 2023-02-13T12:00:02.638Z INFO webdriver: RESULT {
[0-5]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000049',
[0-5]   ELEMENT: '00000000-0000-01cc-ffff-ffff00000049'
[0-5] }
[0-5] 2023-02-13T12:00:02.640Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01cc-ffff-ffff00000049")
[0-5] 2023-02-13T12:00:02.641Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000049/displayed
[0-5] 2023-02-13T12:00:02.651Z INFO webdriver: RESULT true
[0-5] 2023-02-13T12:00:02.651Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-5] 2023-02-13T12:00:02.651Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/elements
[0-5] 2023-02-13T12:00:02.651Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-5] 2023-02-13T12:00:02.686Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000079',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000079'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000080',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000080'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T12:00:02.689Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-5] 2023-02-13T12:00:02.689Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/elements
[0-5] 2023-02-13T12:00:02.689Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-5] 2023-02-13T12:00:02.747Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000079',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000079'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000080',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000080'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T12:00:02.750Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-5] 2023-02-13T12:00:02.750Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/elements
[0-5] 2023-02-13T12:00:02.750Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-5] 2023-02-13T12:00:02.785Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000079',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000079'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000080',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000080'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T12:00:02.789Z INFO webdriver: COMMAND findElementsFromElement("00000000-0000-01cc-ffff-ffff00000080", "xpath", "*//android.widget.TextView")
[0-5] 2023-02-13T12:00:02.789Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000080/elements
[0-5] 2023-02-13T12:00:02.789Z INFO webdriver: DATA { using: 'xpath', value: '*//android.widget.TextView' }
[0-5] 2023-02-13T12:00:02.833Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000081',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000081'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000083',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000083'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000084',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000084'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T12:00:02.837Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff00000081")
[0-5] 2023-02-13T12:00:02.838Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000081/text
[0-5] 2023-02-13T12:00:02.847Z INFO webdriver: RESULT 󰦾
[0-5] 2023-02-13T12:00:02.847Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff00000083")
[0-5] 2023-02-13T12:00:02.847Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000083/text
[0-5] 2023-02-13T12:00:02.856Z INFO webdriver: RESULT COMPATIBLE
[0-5] 2023-02-13T12:00:02.857Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff00000084")
[0-5] 2023-02-13T12:00:02.857Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000084/text
[0-5] 2023-02-13T12:00:02.871Z INFO webdriver: RESULT WebdriverIO works in combination with most of the TDD and BDD test frameworks in the JavaScript world
[0-5] 2023-02-13T12:00:02.871Z INFO webdriver: COMMAND performActions(<object>)
[0-5] 2023-02-13T12:00:02.871Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/actions
[0-5] 2023-02-13T12:00:02.871Z INFO webdriver: DATA {
[0-5]   actions: [
[0-5]     {
[0-5]       type: 'pointer',
[0-5]       id: 'finger1',
[0-5]       parameters: [Object],
[0-5]       actions: [Array]
[0-5]     }
[0-5]   ]
[0-5] }
[0-5] 2023-02-13T12:00:05.566Z INFO webdriver: COMMAND findElement("accessibility id", "Carousel")
[0-5] 2023-02-13T12:00:05.566Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T12:00:05.566Z INFO webdriver: DATA { using: 'accessibility id', value: 'Carousel' }
[0-5] 2023-02-13T12:00:06.640Z INFO webdriver: RESULT {
[0-5]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000049',
[0-5]   ELEMENT: '00000000-0000-01cc-ffff-ffff00000049'
[0-5] }
[0-5] 2023-02-13T12:00:06.642Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01cc-ffff-ffff00000049")
[0-5] 2023-02-13T12:00:06.642Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000049/displayed
[0-5] 2023-02-13T12:00:06.651Z INFO webdriver: RESULT true
[0-5] 2023-02-13T12:00:06.651Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-5] 2023-02-13T12:00:06.652Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/elements
[0-5] 2023-02-13T12:00:06.652Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-5] 2023-02-13T12:00:06.697Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000072',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000072'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000079',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000079'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000080',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000080'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T12:00:06.701Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-5] 2023-02-13T12:00:06.701Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/elements
[0-5] 2023-02-13T12:00:06.702Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-5] 2023-02-13T12:00:06.750Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000072',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000072'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000079',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000079'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000080',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000080'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T12:00:06.754Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-5] 2023-02-13T12:00:06.754Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/elements
[0-5] 2023-02-13T12:00:06.754Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-5] 2023-02-13T12:00:06.797Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000072',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000072'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000079',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000079'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000080',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000080'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T12:00:06.801Z INFO webdriver: COMMAND findElementsFromElement("00000000-0000-01cc-ffff-ffff00000079", "xpath", "*//android.widget.TextView")
[0-5] 2023-02-13T12:00:06.801Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000079/elements
[0-5] 2023-02-13T12:00:06.801Z INFO webdriver: DATA { using: 'xpath', value: '*//android.widget.TextView' }
[0-5] 2023-02-13T12:00:06.824Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000007a',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000007a'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000007c',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000007c'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000007d',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000007d'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T12:00:06.828Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff0000007a")
[0-5] 2023-02-13T12:00:06.828Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff0000007a/text
[0-5] 2023-02-13T12:00:06.839Z INFO webdriver: RESULT 󰇻
[0-5] 2023-02-13T12:00:06.839Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff0000007c")
[0-5] 2023-02-13T12:00:06.839Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff0000007c/text
[0-5] 2023-02-13T12:00:06.848Z INFO webdriver: RESULT EXTENDABLE
[0-5] 2023-02-13T12:00:06.848Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff0000007d")
[0-5] 2023-02-13T12:00:06.848Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff0000007d/text
[0-5] 2023-02-13T12:00:06.859Z INFO webdriver: RESULT Adding helper functions, or more complicated sets and combinations of existing commands is simple and really useful
[0-5] 2023-02-13T12:00:06.859Z INFO webdriver: COMMAND performActions(<object>)
[0-5] 2023-02-13T12:00:06.859Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/actions
[0-5] 2023-02-13T12:00:06.859Z INFO webdriver: DATA {
[0-5]   actions: [
[0-5]     {
[0-5]       type: 'pointer',
[0-5]       id: 'finger1',
[0-5]       parameters: [Object],
[0-5]       actions: [Array]
[0-5]     }
[0-5]   ]
[0-5] }
[0-5] 2023-02-13T12:00:09.595Z INFO webdriver: COMMAND performActions(<object>)
[0-5] 2023-02-13T12:00:09.595Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/actions
[0-5] 2023-02-13T12:00:09.595Z INFO webdriver: DATA {
[0-5]   actions: [
[0-5]     {
[0-5]       type: 'pointer',
[0-5]       id: 'finger1',
[0-5]       parameters: [Object],
[0-5]       actions: [Array]
[0-5]     }
[0-5]   ]
[0-5] }
[0-5] 2023-02-13T12:00:12.460Z INFO webdriver: COMMAND performActions(<object>)
[0-5] 2023-02-13T12:00:12.460Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/actions
[0-5] 2023-02-13T12:00:12.460Z INFO webdriver: DATA {
[0-5]   actions: [
[0-5]     {
[0-5]       type: 'pointer',
[0-5]       id: 'finger1',
[0-5]       parameters: [Object],
[0-5]       actions: [Array]
[0-5]     }
[0-5]   ]
[0-5] }
[0-5] 2023-02-13T12:00:15.320Z INFO webdriver: COMMAND performActions(<object>)
[0-5] 2023-02-13T12:00:15.320Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/actions
[0-5] 2023-02-13T12:00:15.320Z INFO webdriver: DATA {
[0-5]   actions: [
[0-5]     {
[0-5]       type: 'pointer',
[0-5]       id: 'finger1',
[0-5]       parameters: [Object],
[0-5]       actions: [Array]
[0-5]     }
[0-5]   ]
[0-5] }
[0-5] 2023-02-13T12:00:18.162Z INFO webdriver: COMMAND findElement("accessibility id", "Carousel")
[0-5] 2023-02-13T12:00:18.162Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T12:00:18.162Z INFO webdriver: DATA { using: 'accessibility id', value: 'Carousel' }
[0-5] 2023-02-13T12:00:19.221Z INFO webdriver: RESULT {
[0-5]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000049',
[0-5]   ELEMENT: '00000000-0000-01cc-ffff-ffff00000049'
[0-5] }
[0-5] 2023-02-13T12:00:19.222Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01cc-ffff-ffff00000049")
[0-5] 2023-02-13T12:00:19.222Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000049/displayed
[0-5] 2023-02-13T12:00:19.232Z INFO webdriver: RESULT true
[0-5] 2023-02-13T12:00:19.232Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-5] 2023-02-13T12:00:19.232Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/elements
[0-5] 2023-02-13T12:00:19.232Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-5] 2023-02-13T12:00:19.283Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000004e',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000004e'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000055',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000055'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T12:00:19.286Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-5] 2023-02-13T12:00:19.286Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/elements
[0-5] 2023-02-13T12:00:19.286Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-5] 2023-02-13T12:00:19.341Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000004e',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000004e'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000055',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000055'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T12:00:19.344Z INFO webdriver: COMMAND findElementsFromElement("00000000-0000-01cc-ffff-ffff0000004e", "xpath", "*//android.widget.TextView")
[0-5] 2023-02-13T12:00:19.344Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff0000004e/elements
[0-5] 2023-02-13T12:00:19.344Z INFO webdriver: DATA { using: 'xpath', value: '*//android.widget.TextView' }
[0-5] 2023-02-13T12:00:19.369Z INFO webdriver: RESULT [
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff0000004f',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff0000004f'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000051',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000051'
[0-5]   },
[0-5]   {
[0-5]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000052',
[0-5]     ELEMENT: '00000000-0000-01cc-ffff-ffff00000052'
[0-5]   }
[0-5] ]
[0-5] 2023-02-13T12:00:19.374Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff0000004f")
[0-5] 2023-02-13T12:00:19.374Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff0000004f/text
[0-5] 2023-02-13T12:00:19.383Z INFO webdriver: RESULT 󰊤
[0-5] 2023-02-13T12:00:19.384Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff00000051")
[0-5] 2023-02-13T12:00:19.384Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000051/text
[0-5] 2023-02-13T12:00:19.394Z INFO webdriver: RESULT FULLY OPEN SOURCE
[0-5] 2023-02-13T12:00:19.395Z INFO webdriver: COMMAND getElementText("00000000-0000-01cc-ffff-ffff00000052")
[0-5] 2023-02-13T12:00:19.395Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000052/text
[0-5] 2023-02-13T12:00:19.404Z INFO webdriver: RESULT WebdriverIO is fully open source and can be found on GitHub
[0-5] 2023-02-13T12:00:19.407Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-5] 2023-02-13T12:00:19.407Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T12:00:19.407Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-5] 2023-02-13T12:00:19.425Z INFO webdriver: RESULT {
[0-5]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000015',
[0-5]   ELEMENT: '00000000-0000-01cc-ffff-ffff00000015'
[0-5] }
[0-5] 2023-02-13T12:00:19.427Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01cc-ffff-ffff00000015")
[0-5] 2023-02-13T12:00:19.427Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000015/displayed
[0-5] 2023-02-13T12:00:19.436Z INFO webdriver: RESULT true
[0-5] 2023-02-13T12:00:19.437Z INFO webdriver: COMMAND findElement("accessibility id", "Swipe")
[0-5] 2023-02-13T12:00:19.437Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T12:00:19.437Z INFO webdriver: DATA { using: 'accessibility id', value: 'Swipe' }
[0-5] 2023-02-13T12:00:19.471Z INFO webdriver: RESULT {
[0-5]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000029',
[0-5]   ELEMENT: '00000000-0000-01cc-ffff-ffff00000029'
[0-5] }
[0-5] 2023-02-13T12:00:19.474Z INFO webdriver: COMMAND elementClick("00000000-0000-01cc-ffff-ffff00000029")
[0-5] 2023-02-13T12:00:19.474Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000029/click
[0-5] 2023-02-13T12:00:19.528Z INFO webdriver: COMMAND findElement("accessibility id", "Swipe-screen")
[0-5] 2023-02-13T12:00:19.528Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T12:00:19.528Z INFO webdriver: DATA { using: 'accessibility id', value: 'Swipe-screen' }
[0-5] 2023-02-13T12:00:19.543Z INFO webdriver: RESULT {
[0-5]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000044',
[0-5]   ELEMENT: '00000000-0000-01cc-ffff-ffff00000044'
[0-5] }
[0-5] 2023-02-13T12:00:19.547Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01cc-ffff-ffff00000044")
[0-5] 2023-02-13T12:00:19.547Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000044/displayed
[0-5] 2023-02-13T12:00:19.557Z INFO webdriver: RESULT true
[0-5] 2023-02-13T12:00:19.558Z INFO webdriver: COMMAND findElement("accessibility id", "WebdriverIO logo")
[0-5] 2023-02-13T12:00:19.558Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T12:00:19.558Z INFO webdriver: DATA { using: 'accessibility id', value: 'WebdriverIO logo' }
[0-5] 2023-02-13T12:00:19.592Z INFO webdriver: RESULT {
[0-5]   error: 'no such element',
[0-5]   message: 'An element could not be located on the page using the given search parameters.',
[0-5]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-5]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-5]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-5]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-5]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-5] }
[0-5] 2023-02-13T12:00:19.595Z INFO webdriver: COMMAND findElement("accessibility id", "WebdriverIO logo")
[0-5] 2023-02-13T12:00:19.595Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T12:00:19.595Z INFO webdriver: DATA { using: 'accessibility id', value: 'WebdriverIO logo' }
[0-5] 2023-02-13T12:00:19.638Z INFO webdriver: RESULT {
[0-5]   error: 'no such element',
[0-5]   message: 'An element could not be located on the page using the given search parameters.',
[0-5]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-5]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-5]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-5]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-5]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-5] }
[0-5] 2023-02-13T12:00:19.641Z INFO webdriver: COMMAND getWindowRect()
[0-5] 2023-02-13T12:00:19.641Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/window/rect
[0-5] 2023-02-13T12:00:19.649Z INFO webdriver: RESULT { width: 1440, height: 3016, x: 0, y: 0 }
[0-5] 2023-02-13T12:00:19.649Z INFO webdriver: COMMAND performActions(<object>)
[0-5] 2023-02-13T12:00:19.649Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/actions
[0-5] 2023-02-13T12:00:19.649Z INFO webdriver: DATA {
[0-5]   actions: [
[0-5]     {
[0-5]       type: 'pointer',
[0-5]       id: 'finger1',
[0-5]       parameters: [Object],
[0-5]       actions: [Array]
[0-5]     }
[0-5]   ]
[0-5] }
[0-5] 2023-02-13T12:00:22.386Z INFO webdriver: COMMAND findElement("accessibility id", "WebdriverIO logo")
[0-5] 2023-02-13T12:00:22.386Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T12:00:22.386Z INFO webdriver: DATA { using: 'accessibility id', value: 'WebdriverIO logo' }
[0-5] 2023-02-13T12:00:22.427Z INFO webdriver: RESULT {
[0-5]   error: 'no such element',
[0-5]   message: 'An element could not be located on the page using the given search parameters.',
[0-5]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-5]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-5]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-5]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-5]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-5] }
[0-5] 2023-02-13T12:00:22.430Z INFO webdriver: COMMAND performActions(<object>)
[0-5] 2023-02-13T12:00:22.430Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/actions
[0-5] 2023-02-13T12:00:22.430Z INFO webdriver: DATA {
[0-5]   actions: [
[0-5]     {
[0-5]       type: 'pointer',
[0-5]       id: 'finger1',
[0-5]       parameters: [Object],
[0-5]       actions: [Array]
[0-5]     }
[0-5]   ]
[0-5] }
[0-5] 2023-02-13T12:00:25.154Z INFO webdriver: COMMAND findElement("accessibility id", "WebdriverIO logo")
[0-5] 2023-02-13T12:00:25.155Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T12:00:25.155Z INFO webdriver: DATA { using: 'accessibility id', value: 'WebdriverIO logo' }
[0-5] 2023-02-13T12:00:25.178Z INFO webdriver: RESULT {
[0-5]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000067',
[0-5]   ELEMENT: '00000000-0000-01cc-ffff-ffff00000067'
[0-5] }
[0-5] 2023-02-13T12:00:25.181Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01cc-ffff-ffff00000067")
[0-5] 2023-02-13T12:00:25.182Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000067/displayed
[0-5] 2023-02-13T12:00:25.198Z INFO webdriver: RESULT true
[0-5] 2023-02-13T12:00:25.199Z INFO webdriver: COMMAND findElement("accessibility id", "WebdriverIO logo")
[0-5] 2023-02-13T12:00:25.199Z INFO webdriver: [POST] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element
[0-5] 2023-02-13T12:00:25.199Z INFO webdriver: DATA { using: 'accessibility id', value: 'WebdriverIO logo' }
[0-5] 2023-02-13T12:00:25.211Z INFO webdriver: RESULT {
[0-5]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01cc-ffff-ffff00000067',
[0-5]   ELEMENT: '00000000-0000-01cc-ffff-ffff00000067'
[0-5] }
[0-5] 2023-02-13T12:00:25.214Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01cc-ffff-ffff00000067")
[0-5] 2023-02-13T12:00:25.214Z INFO webdriver: [GET] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943/element/00000000-0000-01cc-ffff-ffff00000067/displayed
[0-5] 2023-02-13T12:00:25.223Z INFO webdriver: RESULT true
[0-5] 2023-02-13T12:00:25.226Z INFO webdriver: COMMAND deleteSession()
[0-5] 2023-02-13T12:00:25.226Z INFO webdriver: [DELETE] http://localhost:4723/session/9d7d7d31-a598-446c-b376-899d56b5c943
2023-02-13T12:00:25.575Z DEBUG @wdio/local-runner: Runner 0-5 finished with exit code 0
[0-5] PASSED in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\specs\app.swipe.spec.ts
2023-02-13T12:00:25.576Z INFO @wdio/cli:launcher: Run onWorkerEnd hook
2023-02-13T12:00:25.577Z DEBUG @wdio/cli:utils: Finished to run "onWorkerEnd" hook in 0ms
2023-02-13T12:00:25.577Z INFO @wdio/cli:launcher: Run onWorkerStart hook
2023-02-13T12:00:25.577Z DEBUG @wdio/cli:utils: Finished to run "onWorkerStart" hook in 0ms
2023-02-13T12:00:25.578Z INFO @wdio/local-runner: Start worker 0-6 with arg: config/wdio.android.app.conf.ts
[0-6] 2023-02-13T12:00:26.029Z INFO @wdio/local-runner: Run worker command: run
[0-6] 2023-02-13T12:00:26.161Z DEBUG @wdio/config:utils: Found 'ts-node' package, auto-compiling TypeScript files
[0-6] 2023-02-13T12:00:26.238Z DEBUG @wdio/local-runner:utils: init remote session
[0-6] 2023-02-13T12:00:26.245Z DEBUG @wdio/utils:initialiseServices: initialise service "appium" as NPM package
[0-6] RUNNING in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\specs\app.tab.bar.navigation.spec.ts
[0-6] 2023-02-13T12:00:26.540Z DEBUG @wdio/local-runner:utils: init remote session
[0-6] 2023-02-13T12:00:26.541Z INFO webdriver: Initiate new session using the WebDriver protocol
[0-6] 2023-02-13T12:00:26.595Z INFO webdriver: [POST] http://localhost:4723/session
[0-6] 2023-02-13T12:00:26.596Z INFO webdriver: DATA {
[0-6]   capabilities: {
[0-6]     alwaysMatch: {
[0-6]       platformName: 'Android',
[0-6]       'appium:deviceName': 'emulator-5554',
[0-6]       'appium:platformVersion': '13.0',
[0-6]       'appium:orientation': 'PORTRAIT',
[0-6]       'appium:automationName': 'UiAutomator2',
[0-6]       'appium:app': 'D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk',
[0-6]       'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
[0-6]       'appium:newCommandTimeout': 240,
[0-6]       'appium:connectHardwareKeyboard': true
[0-6]     },
[0-6]     firstMatch: [ {} ]
[0-6]   },
[0-6]   desiredCapabilities: {
[0-6]     platformName: 'Android',
[0-6]     'appium:deviceName': 'emulator-5554',
[0-6]     'appium:platformVersion': '13.0',
[0-6]     'appium:orientation': 'PORTRAIT',
[0-6]     'appium:automationName': 'UiAutomator2',
[0-6]     'appium:app': 'D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk',
[0-6]     'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
[0-6]     'appium:newCommandTimeout': 240,
[0-6]     'appium:connectHardwareKeyboard': true
[0-6]   }
[0-6] }
[0-6] 2023-02-13T12:00:32.034Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-6] 2023-02-13T12:00:32.035Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element
[0-6] 2023-02-13T12:00:32.035Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-6] 2023-02-13T12:00:32.070Z INFO webdriver: RESULT {
[0-6]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01dd-ffff-ffff00000015',
[0-6]   ELEMENT: '00000000-0000-01dd-ffff-ffff00000015'
[0-6] }
[0-6] 2023-02-13T12:00:32.076Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01dd-ffff-ffff00000015")
[0-6] 2023-02-13T12:00:32.076Z INFO webdriver: [GET] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element/00000000-0000-01dd-ffff-ffff00000015/displayed
[0-6] 2023-02-13T12:00:32.089Z INFO webdriver: RESULT true
[0-6] 2023-02-13T12:00:32.090Z INFO webdriver: COMMAND findElement("accessibility id", "Webview")
[0-6] 2023-02-13T12:00:32.090Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element
[0-6] 2023-02-13T12:00:32.090Z INFO webdriver: DATA { using: 'accessibility id', value: 'Webview' }
[0-6] 2023-02-13T12:00:32.121Z INFO webdriver: RESULT {
[0-6]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01dd-ffff-ffff0000001a',
[0-6]   ELEMENT: '00000000-0000-01dd-ffff-ffff0000001a'
[0-6] }
[0-6] 2023-02-13T12:00:32.125Z INFO webdriver: COMMAND elementClick("00000000-0000-01dd-ffff-ffff0000001a")
[0-6] 2023-02-13T12:00:32.125Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element/00000000-0000-01dd-ffff-ffff0000001a/click
[0-6] 2023-02-13T12:00:32.200Z INFO webdriver: COMMAND getContexts()
[0-6] 2023-02-13T12:00:32.200Z INFO webdriver: [GET] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/contexts
[0-6] 2023-02-13T12:00:32.632Z INFO webdriver: RESULT [ 'NATIVE_APP', 'WEBVIEW_com.wdiodemoapp' ]
[0-6] 2023-02-13T12:00:32.632Z INFO webdriver: COMMAND getContexts()
[0-6] 2023-02-13T12:00:32.633Z INFO webdriver: [GET] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/contexts
[0-6] 2023-02-13T12:00:32.813Z INFO webdriver: RESULT [ 'NATIVE_APP', 'WEBVIEW_com.wdiodemoapp' ]
[0-6] 2023-02-13T12:00:32.813Z INFO webdriver: COMMAND switchContext("WEBVIEW_com.wdiodemoapp")
[0-6] 2023-02-13T12:00:32.813Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/context
[0-6] 2023-02-13T12:00:32.813Z INFO webdriver: DATA { name: 'WEBVIEW_com.wdiodemoapp' }
[0-6] 2023-02-13T12:00:34.101Z INFO webdriver: COMMAND executeScript("return (() => document.readyState).apply(null, arguments)", <object>)
[0-6] 2023-02-13T12:00:34.101Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/execute/sync
[0-6] 2023-02-13T12:00:34.101Z INFO webdriver: DATA {
[0-6]   script: 'return (() => document.readyState).apply(null, arguments)',
[0-6]   args: []
[0-6] }
[0-6] 2023-02-13T12:00:36.000Z INFO webdriver: RESULT complete
[0-6] 2023-02-13T12:00:36.000Z INFO webdriver: COMMAND getContexts()
[0-6] 2023-02-13T12:00:36.000Z INFO webdriver: [GET] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/contexts
[0-6] 2023-02-13T12:00:36.244Z INFO webdriver: RESULT [ 'NATIVE_APP', 'WEBVIEW_com.wdiodemoapp' ]
[0-6] 2023-02-13T12:00:36.245Z INFO webdriver: COMMAND switchContext("NATIVE_APP")
[0-6] 2023-02-13T12:00:36.245Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/context
[0-6] 2023-02-13T12:00:36.245Z INFO webdriver: DATA { name: 'NATIVE_APP' }
[0-6] 2023-02-13T12:00:36.422Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-6] 2023-02-13T12:00:36.423Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element
[0-6] 2023-02-13T12:00:36.423Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-6] 2023-02-13T12:00:37.834Z INFO webdriver: RESULT {
[0-6]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01dd-ffff-ffff00000015',
[0-6]   ELEMENT: '00000000-0000-01dd-ffff-ffff00000015'
[0-6] }
[0-6] 2023-02-13T12:00:37.837Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01dd-ffff-ffff00000015")
[0-6] 2023-02-13T12:00:37.837Z INFO webdriver: [GET] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element/00000000-0000-01dd-ffff-ffff00000015/displayed
[0-6] 2023-02-13T12:00:38.800Z INFO webdriver: RESULT true
[0-6] 2023-02-13T12:00:38.800Z INFO webdriver: COMMAND findElement("accessibility id", "Login")
[0-6] 2023-02-13T12:00:38.801Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element
[0-6] 2023-02-13T12:00:38.801Z INFO webdriver: DATA { using: 'accessibility id', value: 'Login' }
[0-6] 2023-02-13T12:00:40.102Z INFO webdriver: RESULT {
[0-6]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01dd-ffff-ffff0000001f',
[0-6]   ELEMENT: '00000000-0000-01dd-ffff-ffff0000001f'
[0-6] }
[0-6] 2023-02-13T12:00:40.104Z INFO webdriver: COMMAND elementClick("00000000-0000-01dd-ffff-ffff0000001f")
[0-6] 2023-02-13T12:00:40.105Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element/00000000-0000-01dd-ffff-ffff0000001f/click
[0-6] 2023-02-13T12:00:40.293Z INFO webdriver: COMMAND findElement("accessibility id", "Login-screen")
[0-6] 2023-02-13T12:00:40.293Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element
[0-6] 2023-02-13T12:00:40.293Z INFO webdriver: DATA { using: 'accessibility id', value: 'Login-screen' }
[0-6] 2023-02-13T12:00:40.451Z INFO webdriver: RESULT {
[0-6]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01dd-ffff-ffff0000004c',
[0-6]   ELEMENT: '00000000-0000-01dd-ffff-ffff0000004c'
[0-6] }
[0-6] 2023-02-13T12:00:40.453Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01dd-ffff-ffff0000004c")
[0-6] 2023-02-13T12:00:40.454Z INFO webdriver: [GET] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element/00000000-0000-01dd-ffff-ffff0000004c/displayed
[0-6] 2023-02-13T12:00:41.004Z INFO webdriver: RESULT true
[0-6] 2023-02-13T12:00:41.005Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-6] 2023-02-13T12:00:41.005Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element
[0-6] 2023-02-13T12:00:41.005Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-6] 2023-02-13T12:00:41.037Z INFO webdriver: RESULT {
[0-6]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01dd-ffff-ffff00000015',
[0-6]   ELEMENT: '00000000-0000-01dd-ffff-ffff00000015'
[0-6] }
[0-6] 2023-02-13T12:00:41.039Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01dd-ffff-ffff00000015")
[0-6] 2023-02-13T12:00:41.039Z INFO webdriver: [GET] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element/00000000-0000-01dd-ffff-ffff00000015/displayed
[0-6] 2023-02-13T12:00:41.048Z INFO webdriver: RESULT true
[0-6] 2023-02-13T12:00:41.049Z INFO webdriver: COMMAND findElement("accessibility id", "Forms")
[0-6] 2023-02-13T12:00:41.049Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element
[0-6] 2023-02-13T12:00:41.049Z INFO webdriver: DATA { using: 'accessibility id', value: 'Forms' }
[0-6] 2023-02-13T12:00:41.078Z INFO webdriver: RESULT {
[0-6]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01dd-ffff-ffff00000024',
[0-6]   ELEMENT: '00000000-0000-01dd-ffff-ffff00000024'
[0-6] }
[0-6] 2023-02-13T12:00:41.080Z INFO webdriver: COMMAND elementClick("00000000-0000-01dd-ffff-ffff00000024")
[0-6] 2023-02-13T12:00:41.080Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element/00000000-0000-01dd-ffff-ffff00000024/click
[0-6] 2023-02-13T12:00:41.152Z INFO webdriver: COMMAND findElement("accessibility id", "Forms-screen")
[0-6] 2023-02-13T12:00:41.152Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element
[0-6] 2023-02-13T12:00:41.152Z INFO webdriver: DATA { using: 'accessibility id', value: 'Forms-screen' }
[0-6] 2023-02-13T12:00:41.363Z INFO webdriver: RESULT {
[0-6]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01dd-ffff-ffff00000069',
[0-6]   ELEMENT: '00000000-0000-01dd-ffff-ffff00000069'
[0-6] }
[0-6] 2023-02-13T12:00:41.364Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01dd-ffff-ffff00000069")
[0-6] 2023-02-13T12:00:41.364Z INFO webdriver: [GET] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element/00000000-0000-01dd-ffff-ffff00000069/displayed
[0-6] 2023-02-13T12:00:41.681Z INFO webdriver: RESULT true
[0-6] 2023-02-13T12:00:41.681Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-6] 2023-02-13T12:00:41.681Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element
[0-6] 2023-02-13T12:00:41.681Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-6] 2023-02-13T12:00:41.709Z INFO webdriver: RESULT {
[0-6]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01dd-ffff-ffff00000015',
[0-6]   ELEMENT: '00000000-0000-01dd-ffff-ffff00000015'
[0-6] }
[0-6] 2023-02-13T12:00:41.710Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01dd-ffff-ffff00000015")
[0-6] 2023-02-13T12:00:41.710Z INFO webdriver: [GET] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element/00000000-0000-01dd-ffff-ffff00000015/displayed
[0-6] 2023-02-13T12:00:41.722Z INFO webdriver: RESULT true
[0-6] 2023-02-13T12:00:41.722Z INFO webdriver: COMMAND findElement("accessibility id", "Swipe")
[0-6] 2023-02-13T12:00:41.722Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element
[0-6] 2023-02-13T12:00:41.722Z INFO webdriver: DATA { using: 'accessibility id', value: 'Swipe' }
[0-6] 2023-02-13T12:00:41.772Z INFO webdriver: RESULT {
[0-6]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01dd-ffff-ffff00000029',
[0-6]   ELEMENT: '00000000-0000-01dd-ffff-ffff00000029'
[0-6] }
[0-6] 2023-02-13T12:00:41.774Z INFO webdriver: COMMAND elementClick("00000000-0000-01dd-ffff-ffff00000029")
[0-6] 2023-02-13T12:00:41.774Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element/00000000-0000-01dd-ffff-ffff00000029/click
[0-6] 2023-02-13T12:00:41.826Z INFO webdriver: COMMAND findElement("accessibility id", "Swipe-screen")
[0-6] 2023-02-13T12:00:41.826Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element
[0-6] 2023-02-13T12:00:41.826Z INFO webdriver: DATA { using: 'accessibility id', value: 'Swipe-screen' }
[0-6] 2023-02-13T12:00:41.878Z INFO webdriver: RESULT {
[0-6]   error: 'no such element',
[0-6]   message: 'An element could not be located on the page using the given search parameters.',
[0-6]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-6]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-6]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-6]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-6]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-6] }
[0-6] 2023-02-13T12:00:41.880Z INFO webdriver: COMMAND findElement("accessibility id", "Swipe-screen")
[0-6] 2023-02-13T12:00:41.881Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element
[0-6] 2023-02-13T12:00:41.881Z INFO webdriver: DATA { using: 'accessibility id', value: 'Swipe-screen' }
[0-6] 2023-02-13T12:00:42.717Z INFO webdriver: RESULT {
[0-6]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01dd-ffff-ffff0000008e',
[0-6]   ELEMENT: '00000000-0000-01dd-ffff-ffff0000008e'
[0-6] }
[0-6] 2023-02-13T12:00:42.719Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01dd-ffff-ffff0000008e")
[0-6] 2023-02-13T12:00:42.719Z INFO webdriver: [GET] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element/00000000-0000-01dd-ffff-ffff0000008e/displayed
[0-6] 2023-02-13T12:00:43.851Z INFO webdriver: RESULT true
[0-6] 2023-02-13T12:00:43.852Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-6] 2023-02-13T12:00:43.852Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element
[0-6] 2023-02-13T12:00:43.852Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-6] 2023-02-13T12:00:43.874Z INFO webdriver: RESULT {
[0-6]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01dd-ffff-ffff00000015',
[0-6]   ELEMENT: '00000000-0000-01dd-ffff-ffff00000015'
[0-6] }
[0-6] 2023-02-13T12:00:43.879Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01dd-ffff-ffff00000015")
[0-6] 2023-02-13T12:00:43.879Z INFO webdriver: [GET] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element/00000000-0000-01dd-ffff-ffff00000015/displayed
[0-6] 2023-02-13T12:00:43.892Z INFO webdriver: RESULT true
[0-6] 2023-02-13T12:00:43.893Z INFO webdriver: COMMAND findElement("accessibility id", "Drag")
[0-6] 2023-02-13T12:00:43.893Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element
[0-6] 2023-02-13T12:00:43.894Z INFO webdriver: DATA { using: 'accessibility id', value: 'Drag' }
[0-6] 2023-02-13T12:00:43.936Z INFO webdriver: RESULT {
[0-6]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01dd-ffff-ffff0000002e',
[0-6]   ELEMENT: '00000000-0000-01dd-ffff-ffff0000002e'
[0-6] }
[0-6] 2023-02-13T12:00:43.939Z INFO webdriver: COMMAND elementClick("00000000-0000-01dd-ffff-ffff0000002e")
[0-6] 2023-02-13T12:00:43.939Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element/00000000-0000-01dd-ffff-ffff0000002e/click
[0-6] 2023-02-13T12:00:43.995Z INFO webdriver: COMMAND findElement("accessibility id", "Drag-drop-screen")
[0-6] 2023-02-13T12:00:43.995Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element
[0-6] 2023-02-13T12:00:43.995Z INFO webdriver: DATA { using: 'accessibility id', value: 'Drag-drop-screen' }
[0-6] 2023-02-13T12:00:44.105Z INFO webdriver: RESULT {
[0-6]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01dd-ffff-ffff000000b7',
[0-6]   ELEMENT: '00000000-0000-01dd-ffff-ffff000000b7'
[0-6] }
[0-6] 2023-02-13T12:00:44.108Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01dd-ffff-ffff000000b7")
[0-6] 2023-02-13T12:00:44.108Z INFO webdriver: [GET] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element/00000000-0000-01dd-ffff-ffff000000b7/displayed
[0-6] 2023-02-13T12:00:44.613Z INFO webdriver: RESULT true
[0-6] 2023-02-13T12:00:44.613Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-6] 2023-02-13T12:00:44.613Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element
[0-6] 2023-02-13T12:00:44.613Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-6] 2023-02-13T12:00:44.640Z INFO webdriver: RESULT {
[0-6]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01dd-ffff-ffff00000015',
[0-6]   ELEMENT: '00000000-0000-01dd-ffff-ffff00000015'
[0-6] }
[0-6] 2023-02-13T12:00:44.643Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01dd-ffff-ffff00000015")
[0-6] 2023-02-13T12:00:44.643Z INFO webdriver: [GET] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element/00000000-0000-01dd-ffff-ffff00000015/displayed
[0-6] 2023-02-13T12:00:44.653Z INFO webdriver: RESULT true
[0-6] 2023-02-13T12:00:44.653Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-6] 2023-02-13T12:00:44.654Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element
[0-6] 2023-02-13T12:00:44.654Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-6] 2023-02-13T12:00:44.682Z INFO webdriver: RESULT {
[0-6]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01dd-ffff-ffff00000015',
[0-6]   ELEMENT: '00000000-0000-01dd-ffff-ffff00000015'
[0-6] }
[0-6] 2023-02-13T12:00:44.684Z INFO webdriver: COMMAND elementClick("00000000-0000-01dd-ffff-ffff00000015")
[0-6] 2023-02-13T12:00:44.685Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element/00000000-0000-01dd-ffff-ffff00000015/click
[0-6] 2023-02-13T12:00:44.744Z INFO webdriver: COMMAND findElement("accessibility id", "Home-screen")
[0-6] 2023-02-13T12:00:44.744Z INFO webdriver: [POST] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element
[0-6] 2023-02-13T12:00:44.744Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home-screen' }
[0-6] 2023-02-13T12:00:44.763Z INFO webdriver: RESULT {
[0-6]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01dd-ffff-ffff00000036',
[0-6]   ELEMENT: '00000000-0000-01dd-ffff-ffff00000036'
[0-6] }
[0-6] 2023-02-13T12:00:44.766Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01dd-ffff-ffff00000036")
[0-6] 2023-02-13T12:00:44.766Z INFO webdriver: [GET] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd/element/00000000-0000-01dd-ffff-ffff00000036/displayed
[0-6] 2023-02-13T12:00:45.343Z INFO webdriver: RESULT true
[0-6] 2023-02-13T12:00:45.345Z INFO webdriver: COMMAND deleteSession()
[0-6] 2023-02-13T12:00:45.345Z INFO webdriver: [DELETE] http://localhost:4723/session/c5bd5974-e9e9-4100-957a-8835360a7ffd
2023-02-13T12:00:45.698Z DEBUG @wdio/local-runner: Runner 0-6 finished with exit code 0
[0-6] PASSED in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\specs\app.tab.bar.navigation.spec.ts
2023-02-13T12:00:45.698Z INFO @wdio/cli:launcher: Run onWorkerEnd hook
2023-02-13T12:00:45.699Z DEBUG @wdio/cli:utils: Finished to run "onWorkerEnd" hook in 0ms
2023-02-13T12:00:45.699Z INFO @wdio/cli:launcher: Run onWorkerStart hook
2023-02-13T12:00:45.700Z DEBUG @wdio/cli:utils: Finished to run "onWorkerStart" hook in 1ms
2023-02-13T12:00:45.700Z INFO @wdio/local-runner: Start worker 0-7 with arg: config/wdio.android.app.conf.ts
[0-7] 2023-02-13T12:00:46.128Z INFO @wdio/local-runner: Run worker command: run
[0-7] 2023-02-13T12:00:46.252Z DEBUG @wdio/config:utils: Found 'ts-node' package, auto-compiling TypeScript files
[0-7] 2023-02-13T12:00:46.332Z DEBUG @wdio/local-runner:utils: init remote session
[0-7] 2023-02-13T12:00:46.339Z DEBUG @wdio/utils:initialiseServices: initialise service "appium" as NPM package
[0-7] RUNNING in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\specs\app.webview.spec.ts
[0-7] 2023-02-13T12:00:46.624Z DEBUG @wdio/local-runner:utils: init remote session
[0-7] 2023-02-13T12:00:46.625Z INFO webdriver: Initiate new session using the WebDriver protocol
[0-7] 2023-02-13T12:00:46.681Z INFO webdriver: [POST] http://localhost:4723/session
[0-7] 2023-02-13T12:00:46.681Z INFO webdriver: DATA {
[0-7]   capabilities: {
[0-7]     alwaysMatch: {
[0-7]       platformName: 'Android',
[0-7]       'appium:deviceName': 'emulator-5554',
[0-7]       'appium:platformVersion': '13.0',
[0-7]       'appium:orientation': 'PORTRAIT',
[0-7]       'appium:automationName': 'UiAutomator2',
[0-7]       'appium:app': 'D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk',
[0-7]       'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
[0-7]       'appium:newCommandTimeout': 240,
[0-7]       'appium:connectHardwareKeyboard': true
[0-7]     },
[0-7]     firstMatch: [ {} ]
[0-7]   },
[0-7]   desiredCapabilities: {
[0-7]     platformName: 'Android',
[0-7]     'appium:deviceName': 'emulator-5554',
[0-7]     'appium:platformVersion': '13.0',
[0-7]     'appium:orientation': 'PORTRAIT',
[0-7]     'appium:automationName': 'UiAutomator2',
[0-7]     'appium:app': 'D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk',
[0-7]     'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
[0-7]     'appium:newCommandTimeout': 240,
[0-7]     'appium:connectHardwareKeyboard': true
[0-7]   }
[0-7] }
[0-7] 2023-02-13T12:00:52.105Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-7] 2023-02-13T12:00:52.106Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element
[0-7] 2023-02-13T12:00:52.106Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-7] 2023-02-13T12:00:52.135Z INFO webdriver: RESULT {
[0-7]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff00000015',
[0-7]   ELEMENT: '00000000-0000-01ee-ffff-ffff00000015'
[0-7] }
[0-7] 2023-02-13T12:00:52.141Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01ee-ffff-ffff00000015")
[0-7] 2023-02-13T12:00:52.141Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/00000000-0000-01ee-ffff-ffff00000015/displayed
[0-7] 2023-02-13T12:00:52.154Z INFO webdriver: RESULT true
[0-7] 2023-02-13T12:00:52.155Z INFO webdriver: COMMAND findElement("accessibility id", "Webview")
[0-7] 2023-02-13T12:00:52.155Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element
[0-7] 2023-02-13T12:00:52.155Z INFO webdriver: DATA { using: 'accessibility id', value: 'Webview' }
[0-7] 2023-02-13T12:00:52.176Z INFO webdriver: RESULT {
[0-7]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff0000001a',
[0-7]   ELEMENT: '00000000-0000-01ee-ffff-ffff0000001a'
[0-7] }
[0-7] 2023-02-13T12:00:52.180Z INFO webdriver: COMMAND elementClick("00000000-0000-01ee-ffff-ffff0000001a")
[0-7] 2023-02-13T12:00:52.180Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/00000000-0000-01ee-ffff-ffff0000001a/click
[0-7] 2023-02-13T12:00:52.259Z INFO webdriver: COMMAND getContexts()
[0-7] 2023-02-13T12:00:52.259Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/contexts
[0-7] 2023-02-13T12:00:52.731Z INFO webdriver: RESULT [ 'NATIVE_APP', 'WEBVIEW_com.wdiodemoapp' ]
[0-7] 2023-02-13T12:00:52.731Z INFO webdriver: COMMAND getContexts()
[0-7] 2023-02-13T12:00:52.732Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/contexts
[0-7] 2023-02-13T12:00:52.952Z INFO webdriver: RESULT [ 'NATIVE_APP', 'WEBVIEW_com.wdiodemoapp' ]
[0-7] 2023-02-13T12:00:52.953Z INFO webdriver: COMMAND switchContext("WEBVIEW_com.wdiodemoapp")
[0-7] 2023-02-13T12:00:52.953Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/context
[0-7] 2023-02-13T12:00:52.953Z INFO webdriver: DATA { name: 'WEBVIEW_com.wdiodemoapp' }
[0-7] 2023-02-13T12:00:54.269Z INFO webdriver: COMMAND executeScript("return (() => document.readyState).apply(null, arguments)", <object>)
[0-7] 2023-02-13T12:00:54.269Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/execute/sync
[0-7] 2023-02-13T12:00:54.269Z INFO webdriver: DATA {
[0-7]   script: 'return (() => document.readyState).apply(null, arguments)',
[0-7]   args: []
[0-7] }
[0-7] 2023-02-13T12:00:55.700Z INFO webdriver: RESULT complete
[0-7] 2023-02-13T12:00:55.700Z INFO webdriver: COMMAND getContexts()
[0-7] 2023-02-13T12:00:55.700Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/contexts
[0-7] 2023-02-13T12:00:55.896Z INFO webdriver: RESULT [ 'NATIVE_APP', 'WEBVIEW_com.wdiodemoapp' ]
[0-7] 2023-02-13T12:00:55.897Z INFO webdriver: COMMAND switchContext("NATIVE_APP")
[0-7] 2023-02-13T12:00:55.897Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/context
[0-7] 2023-02-13T12:00:55.897Z INFO webdriver: DATA { name: 'NATIVE_APP' }
[0-7] 2023-02-13T12:00:56.075Z INFO webdriver: COMMAND getContexts()
[0-7] 2023-02-13T12:00:56.075Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/contexts
[0-7] 2023-02-13T12:00:56.266Z INFO webdriver: RESULT [ 'NATIVE_APP', 'WEBVIEW_com.wdiodemoapp' ]
[0-7] 2023-02-13T12:00:56.266Z INFO webdriver: COMMAND switchContext("WEBVIEW_com.wdiodemoapp")
[0-7] 2023-02-13T12:00:56.266Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/context
[0-7] 2023-02-13T12:00:56.266Z INFO webdriver: DATA { name: 'WEBVIEW_com.wdiodemoapp' }
[0-7] 2023-02-13T12:00:56.615Z INFO webdriver: COMMAND findElement("css selector", ".DocSearch")
[0-7] 2023-02-13T12:00:56.615Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element
[0-7] 2023-02-13T12:00:56.615Z INFO webdriver: DATA { using: 'css selector', value: '.DocSearch' }
[0-7] 2023-02-13T12:00:56.815Z INFO webdriver: RESULT {
[0-7]   ELEMENT: 'd53f8425-5009-41ca-8760-bbfecbad3fd2',
[0-7]   'element-6066-11e4-a52e-4f735466cecf': 'd53f8425-5009-41ca-8760-bbfecbad3fd2'
[0-7] }
[0-7] 2023-02-13T12:00:56.818Z INFO webdriver: COMMAND elementClick("d53f8425-5009-41ca-8760-bbfecbad3fd2")
[0-7] 2023-02-13T12:00:56.818Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/d53f8425-5009-41ca-8760-bbfecbad3fd2/click
[0-7] 2023-02-13T12:00:57.319Z INFO webdriver: COMMAND findElement("css selector", ".DocSearch-Input")
[0-7] 2023-02-13T12:00:57.319Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element
[0-7] 2023-02-13T12:00:57.319Z INFO webdriver: DATA { using: 'css selector', value: '.DocSearch-Input' }
[0-7] 2023-02-13T12:00:57.483Z INFO webdriver: RESULT {
[0-7]   ELEMENT: 'f9f9f458-81a5-4ffa-8f9e-65baf31e702c',
[0-7]   'element-6066-11e4-a52e-4f735466cecf': 'f9f9f458-81a5-4ffa-8f9e-65baf31e702c'
[0-7] }
[0-7] 2023-02-13T12:00:57.486Z INFO webdriver: COMMAND isElementDisplayed("f9f9f458-81a5-4ffa-8f9e-65baf31e702c")
[0-7] 2023-02-13T12:00:57.486Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/f9f9f458-81a5-4ffa-8f9e-65baf31e702c/displayed
[0-7] 2023-02-13T12:00:57.827Z INFO webdriver: RESULT true
[0-7] 2023-02-13T12:00:57.827Z INFO webdriver: COMMAND isKeyboardShown()
[0-7] 2023-02-13T12:00:57.828Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/appium/device/is_keyboard_shown
[0-7] 2023-02-13T12:00:58.227Z INFO webdriver: RESULT true
[0-7] 2023-02-13T12:00:58.227Z INFO webdriver: COMMAND findElement("css selector", ".DocSearch-Footer")
[0-7] 2023-02-13T12:00:58.227Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element
[0-7] 2023-02-13T12:00:58.227Z INFO webdriver: DATA { using: 'css selector', value: '.DocSearch-Footer' }
[0-7] 2023-02-13T12:00:58.399Z INFO webdriver: RESULT {
[0-7]   ELEMENT: 'fe85b541-42c9-4ba2-9cc7-7de7cdb1f8a0',
[0-7]   'element-6066-11e4-a52e-4f735466cecf': 'fe85b541-42c9-4ba2-9cc7-7de7cdb1f8a0'
[0-7] }
[0-7] 2023-02-13T12:00:58.402Z INFO webdriver: COMMAND elementClick("fe85b541-42c9-4ba2-9cc7-7de7cdb1f8a0")
[0-7] 2023-02-13T12:00:58.402Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/fe85b541-42c9-4ba2-9cc7-7de7cdb1f8a0/click
[0-7] 2023-02-13T12:00:58.856Z INFO webdriver: COMMAND getContexts()
[0-7] 2023-02-13T12:00:58.856Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/contexts
[0-7] 2023-02-13T12:00:59.106Z INFO webdriver: RESULT [ 'NATIVE_APP', 'WEBVIEW_com.wdiodemoapp' ]
[0-7] 2023-02-13T12:00:59.106Z INFO webdriver: COMMAND switchContext("NATIVE_APP")
[0-7] 2023-02-13T12:00:59.106Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/context
[0-7] 2023-02-13T12:00:59.106Z INFO webdriver: DATA { name: 'NATIVE_APP' }
[0-7] 2023-02-13T12:00:59.375Z INFO webdriver: COMMAND findElement("accessibility id", "Swipe")
[0-7] 2023-02-13T12:00:59.375Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element
[0-7] 2023-02-13T12:00:59.376Z INFO webdriver: DATA { using: 'accessibility id', value: 'Swipe' }
[0-7] 2023-02-13T12:01:01.101Z INFO webdriver: RESULT {
[0-7]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff00000029',
[0-7]   ELEMENT: '00000000-0000-01ee-ffff-ffff00000029'
[0-7] }
[0-7] 2023-02-13T12:01:01.103Z INFO webdriver: COMMAND elementClick("00000000-0000-01ee-ffff-ffff00000029")
[0-7] 2023-02-13T12:01:01.104Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/00000000-0000-01ee-ffff-ffff00000029/click
[0-7] 2023-02-13T12:01:01.279Z INFO webdriver: COMMAND findElement("accessibility id", "Swipe-screen")
[0-7] 2023-02-13T12:01:01.280Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element
[0-7] 2023-02-13T12:01:01.280Z INFO webdriver: DATA { using: 'accessibility id', value: 'Swipe-screen' }
[0-7] 2023-02-13T12:01:02.585Z INFO webdriver: RESULT {
[0-7]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff0000004c',
[0-7]   ELEMENT: '00000000-0000-01ee-ffff-ffff0000004c'
[0-7] }
[0-7] 2023-02-13T12:01:02.587Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01ee-ffff-ffff0000004c")
[0-7] 2023-02-13T12:01:02.587Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/00000000-0000-01ee-ffff-ffff0000004c/displayed
[0-7] 2023-02-13T12:01:03.283Z INFO webdriver: RESULT true
[0-7] 2023-02-13T12:01:03.283Z INFO webdriver: COMMAND findElement("accessibility id", "Carousel")
[0-7] 2023-02-13T12:01:03.283Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element
[0-7] 2023-02-13T12:01:03.283Z INFO webdriver: DATA { using: 'accessibility id', value: 'Carousel' }
[0-7] 2023-02-13T12:01:03.336Z INFO webdriver: RESULT {
[0-7]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff00000051',
[0-7]   ELEMENT: '00000000-0000-01ee-ffff-ffff00000051'
[0-7] }
[0-7] 2023-02-13T12:01:03.338Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01ee-ffff-ffff00000051")
[0-7] 2023-02-13T12:01:03.338Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/00000000-0000-01ee-ffff-ffff00000051/displayed
[0-7] 2023-02-13T12:01:03.354Z INFO webdriver: RESULT true
[0-7] 2023-02-13T12:01:03.355Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-7] 2023-02-13T12:01:03.355Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/elements
[0-7] 2023-02-13T12:01:03.355Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-7] 2023-02-13T12:01:03.404Z INFO webdriver: RESULT [
[0-7]   {
[0-7]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff00000056',
[0-7]     ELEMENT: '00000000-0000-01ee-ffff-ffff00000056'
[0-7]   },
[0-7]   {
[0-7]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff0000005d',
[0-7]     ELEMENT: '00000000-0000-01ee-ffff-ffff0000005d'
[0-7]   }
[0-7] ]
[0-7] 2023-02-13T12:01:03.407Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-7] 2023-02-13T12:01:03.408Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/elements
[0-7] 2023-02-13T12:01:03.408Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-7] 2023-02-13T12:01:03.462Z INFO webdriver: RESULT [
[0-7]   {
[0-7]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff00000056',
[0-7]     ELEMENT: '00000000-0000-01ee-ffff-ffff00000056'
[0-7]   },
[0-7]   {
[0-7]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff0000005d',
[0-7]     ELEMENT: '00000000-0000-01ee-ffff-ffff0000005d'
[0-7]   }
[0-7] ]
[0-7] 2023-02-13T12:01:03.465Z INFO webdriver: COMMAND findElementsFromElement("00000000-0000-01ee-ffff-ffff00000056", "xpath", "*//android.widget.TextView")
[0-7] 2023-02-13T12:01:03.465Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/00000000-0000-01ee-ffff-ffff00000056/elements
[0-7] 2023-02-13T12:01:03.465Z INFO webdriver: DATA { using: 'xpath', value: '*//android.widget.TextView' }
[0-7] 2023-02-13T12:01:03.668Z INFO webdriver: RESULT [
[0-7]   {
[0-7]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff00000057',
[0-7]     ELEMENT: '00000000-0000-01ee-ffff-ffff00000057'
[0-7]   },
[0-7]   {
[0-7]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff00000059',
[0-7]     ELEMENT: '00000000-0000-01ee-ffff-ffff00000059'
[0-7]   },
[0-7]   {
[0-7]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff0000005a',
[0-7]     ELEMENT: '00000000-0000-01ee-ffff-ffff0000005a'
[0-7]   }
[0-7] ]
[0-7] 2023-02-13T12:01:03.674Z INFO webdriver: COMMAND getElementText("00000000-0000-01ee-ffff-ffff00000057")
[0-7] 2023-02-13T12:01:03.674Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/00000000-0000-01ee-ffff-ffff00000057/text
[0-7] 2023-02-13T12:01:03.685Z INFO webdriver: RESULT 󰊤
[0-7] 2023-02-13T12:01:03.685Z INFO webdriver: COMMAND getElementText("00000000-0000-01ee-ffff-ffff00000059")
[0-7] 2023-02-13T12:01:03.685Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/00000000-0000-01ee-ffff-ffff00000059/text
[0-7] 2023-02-13T12:01:03.695Z INFO webdriver: RESULT FULLY OPEN SOURCE
[0-7] 2023-02-13T12:01:03.695Z INFO webdriver: COMMAND getElementText("00000000-0000-01ee-ffff-ffff0000005a")
[0-7] 2023-02-13T12:01:03.695Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/00000000-0000-01ee-ffff-ffff0000005a/text
[0-7] 2023-02-13T12:01:03.707Z INFO webdriver: RESULT WebdriverIO is fully open source and can be found on GitHub
[0-7] 2023-02-13T12:01:03.709Z INFO webdriver: COMMAND findElement("accessibility id", "Carousel")
[0-7] 2023-02-13T12:01:03.709Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element
[0-7] 2023-02-13T12:01:03.709Z INFO webdriver: DATA { using: 'accessibility id', value: 'Carousel' }
[0-7] 2023-02-13T12:01:03.742Z INFO webdriver: RESULT {
[0-7]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff00000051',
[0-7]   ELEMENT: '00000000-0000-01ee-ffff-ffff00000051'
[0-7] }
[0-7] 2023-02-13T12:01:03.745Z INFO webdriver: COMMAND getElementRect("00000000-0000-01ee-ffff-ffff00000051")
[0-7] 2023-02-13T12:01:03.745Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/00000000-0000-01ee-ffff-ffff00000051/rect
[0-7] 2023-02-13T12:01:03.761Z INFO webdriver: RESULT { height: 1344, width: 1440, x: 0, y: 1412 }
[0-7] 2023-02-13T12:01:03.762Z INFO webdriver: COMMAND performActions(<object>)
[0-7] 2023-02-13T12:01:03.762Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/actions
[0-7] 2023-02-13T12:01:03.762Z INFO webdriver: DATA {
[0-7]   actions: [
[0-7]     {
[0-7]       type: 'pointer',
[0-7]       id: 'finger1',
[0-7]       parameters: [Object],
[0-7]       actions: [Array]
[0-7]     }
[0-7]   ]
[0-7] }
[0-7] 2023-02-13T12:01:06.510Z INFO webdriver: COMMAND findElement("accessibility id", "Carousel")
[0-7] 2023-02-13T12:01:06.510Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element
[0-7] 2023-02-13T12:01:06.511Z INFO webdriver: DATA { using: 'accessibility id', value: 'Carousel' }
[0-7] 2023-02-13T12:01:07.745Z INFO webdriver: RESULT {
[0-7]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff00000051',
[0-7]   ELEMENT: '00000000-0000-01ee-ffff-ffff00000051'
[0-7] }
[0-7] 2023-02-13T12:01:07.748Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-01ee-ffff-ffff00000051")
[0-7] 2023-02-13T12:01:07.748Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/00000000-0000-01ee-ffff-ffff00000051/displayed
[0-7] 2023-02-13T12:01:07.759Z INFO webdriver: RESULT true
[0-7] 2023-02-13T12:01:07.760Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-7] 2023-02-13T12:01:07.760Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/elements
[0-7] 2023-02-13T12:01:07.760Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-7] 2023-02-13T12:01:07.795Z INFO webdriver: RESULT [
[0-7]   {
[0-7]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff00000056',
[0-7]     ELEMENT: '00000000-0000-01ee-ffff-ffff00000056'
[0-7]   },
[0-7]   {
[0-7]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff0000005d',
[0-7]     ELEMENT: '00000000-0000-01ee-ffff-ffff0000005d'
[0-7]   },
[0-7]   {
[0-7]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff00000073',
[0-7]     ELEMENT: '00000000-0000-01ee-ffff-ffff00000073'
[0-7]   }
[0-7] ]
[0-7] 2023-02-13T12:01:07.801Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-7] 2023-02-13T12:01:07.801Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/elements
[0-7] 2023-02-13T12:01:07.801Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-7] 2023-02-13T12:01:07.846Z INFO webdriver: RESULT [
[0-7]   {
[0-7]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff00000056',
[0-7]     ELEMENT: '00000000-0000-01ee-ffff-ffff00000056'
[0-7]   },
[0-7]   {
[0-7]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff0000005d',
[0-7]     ELEMENT: '00000000-0000-01ee-ffff-ffff0000005d'
[0-7]   },
[0-7]   {
[0-7]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff00000073',
[0-7]     ELEMENT: '00000000-0000-01ee-ffff-ffff00000073'
[0-7]   }
[0-7] ]
[0-7] 2023-02-13T12:01:07.851Z INFO webdriver: COMMAND findElements("accessibility id", "card")
[0-7] 2023-02-13T12:01:07.851Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/elements
[0-7] 2023-02-13T12:01:07.851Z INFO webdriver: DATA { using: 'accessibility id', value: 'card' }
[0-7] 2023-02-13T12:01:07.899Z INFO webdriver: RESULT [
[0-7]   {
[0-7]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff00000056',
[0-7]     ELEMENT: '00000000-0000-01ee-ffff-ffff00000056'
[0-7]   },
[0-7]   {
[0-7]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff0000005d',
[0-7]     ELEMENT: '00000000-0000-01ee-ffff-ffff0000005d'
[0-7]   },
[0-7]   {
[0-7]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff00000073',
[0-7]     ELEMENT: '00000000-0000-01ee-ffff-ffff00000073'
[0-7]   }
[0-7] ]
[0-7] 2023-02-13T12:01:07.903Z INFO webdriver: COMMAND findElementsFromElement("00000000-0000-01ee-ffff-ffff0000005d", "xpath", "*//android.widget.TextView")
[0-7] 2023-02-13T12:01:07.904Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/00000000-0000-01ee-ffff-ffff0000005d/elements
[0-7] 2023-02-13T12:01:07.904Z INFO webdriver: DATA { using: 'xpath', value: '*//android.widget.TextView' }
[0-7] 2023-02-13T12:01:07.924Z INFO webdriver: RESULT [
[0-7]   {
[0-7]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff0000005e',
[0-7]     ELEMENT: '00000000-0000-01ee-ffff-ffff0000005e'
[0-7]   },
[0-7]   {
[0-7]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff00000060',
[0-7]     ELEMENT: '00000000-0000-01ee-ffff-ffff00000060'
[0-7]   },
[0-7]   {
[0-7]     'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff00000061',
[0-7]     ELEMENT: '00000000-0000-01ee-ffff-ffff00000061'
[0-7]   }
[0-7] ]
[0-7] 2023-02-13T12:01:07.928Z INFO webdriver: COMMAND getElementText("00000000-0000-01ee-ffff-ffff0000005e")
[0-7] 2023-02-13T12:01:07.928Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/00000000-0000-01ee-ffff-ffff0000005e/text
[0-7] 2023-02-13T12:01:07.938Z INFO webdriver: RESULT 󰘑
[0-7] 2023-02-13T12:01:07.938Z INFO webdriver: COMMAND getElementText("00000000-0000-01ee-ffff-ffff00000060")
[0-7] 2023-02-13T12:01:07.938Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/00000000-0000-01ee-ffff-ffff00000060/text
[0-7] 2023-02-13T12:01:07.947Z INFO webdriver: RESULT GREAT COMMUNITY
[0-7] 2023-02-13T12:01:07.947Z INFO webdriver: COMMAND getElementText("00000000-0000-01ee-ffff-ffff00000061")
[0-7] 2023-02-13T12:01:07.947Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/00000000-0000-01ee-ffff-ffff00000061/text
[0-7] 2023-02-13T12:01:07.956Z INFO webdriver: RESULT WebdriverIO has a great community that supports all members.
[0-7] 2023-02-13T12:01:07.957Z INFO webdriver: COMMAND findElement("accessibility id", "Webview")
[0-7] 2023-02-13T12:01:07.957Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element
[0-7] 2023-02-13T12:01:07.957Z INFO webdriver: DATA { using: 'accessibility id', value: 'Webview' }
[0-7] 2023-02-13T12:01:07.985Z INFO webdriver: RESULT {
[0-7]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-01ee-ffff-ffff0000001a',
[0-7]   ELEMENT: '00000000-0000-01ee-ffff-ffff0000001a'
[0-7] }
[0-7] 2023-02-13T12:01:07.987Z INFO webdriver: COMMAND elementClick("00000000-0000-01ee-ffff-ffff0000001a")
[0-7] 2023-02-13T12:01:07.987Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/00000000-0000-01ee-ffff-ffff0000001a/click
[0-7] 2023-02-13T12:01:08.043Z INFO webdriver: COMMAND getContexts()
[0-7] 2023-02-13T12:01:08.043Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/contexts
[0-7] 2023-02-13T12:01:08.269Z INFO webdriver: RESULT [ 'NATIVE_APP', 'WEBVIEW_com.wdiodemoapp' ]
[0-7] 2023-02-13T12:01:08.269Z INFO webdriver: COMMAND switchContext("WEBVIEW_com.wdiodemoapp")
[0-7] 2023-02-13T12:01:08.269Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/context
[0-7] 2023-02-13T12:01:08.269Z INFO webdriver: DATA { name: 'WEBVIEW_com.wdiodemoapp' }
[0-7] 2023-02-13T12:01:08.584Z INFO webdriver: COMMAND findElement("css selector", ".DocSearch-Input")
[0-7] 2023-02-13T12:01:08.584Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element
[0-7] 2023-02-13T12:01:08.584Z INFO webdriver: DATA { using: 'css selector', value: '.DocSearch-Input' }
[0-7] 2023-02-13T12:01:08.750Z INFO webdriver: RESULT {
[0-7]   ELEMENT: 'f9f9f458-81a5-4ffa-8f9e-65baf31e702c',
[0-7]   'element-6066-11e4-a52e-4f735466cecf': 'f9f9f458-81a5-4ffa-8f9e-65baf31e702c'
[0-7] }
[0-7] 2023-02-13T12:01:08.752Z INFO webdriver: COMMAND elementClear("f9f9f458-81a5-4ffa-8f9e-65baf31e702c")
[0-7] 2023-02-13T12:01:08.752Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/f9f9f458-81a5-4ffa-8f9e-65baf31e702c/clear
[0-7] 2023-02-13T12:01:09.186Z INFO webdriver: COMMAND elementSendKeys("f9f9f458-81a5-4ffa-8f9e-65baf31e702c", "ocr service for appium native apps")
[0-7] 2023-02-13T12:01:09.186Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/f9f9f458-81a5-4ffa-8f9e-65baf31e702c/value
[0-7] 2023-02-13T12:01:09.186Z INFO webdriver: DATA { text: 'ocr service for appium native apps' }
[0-7] 2023-02-13T12:01:10.180Z INFO webdriver: COMMAND findElements("css selector", ".DocSearch-Hit-source")
[0-7] 2023-02-13T12:01:10.180Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/elements
[0-7] 2023-02-13T12:01:10.180Z INFO webdriver: DATA { using: 'css selector', value: '.DocSearch-Hit-source' }
[0-7] 2023-02-13T12:01:11.116Z INFO webdriver: RESULT [
[0-7]   {
[0-7]     ELEMENT: 'b12ccc07-ebeb-4535-8e35-b11288d3676a',
[0-7]     'element-6066-11e4-a52e-4f735466cecf': 'b12ccc07-ebeb-4535-8e35-b11288d3676a'
[0-7]   }
[0-7] ]
[0-7] 2023-02-13T12:01:11.118Z INFO webdriver: COMMAND getElementText("b12ccc07-ebeb-4535-8e35-b11288d3676a")
[0-7] 2023-02-13T12:01:11.118Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/b12ccc07-ebeb-4535-8e35-b11288d3676a/text
[0-7] 2023-02-13T12:01:11.315Z INFO webdriver: RESULT Services
[0-7] 2023-02-13T12:01:11.315Z INFO webdriver: COMMAND findElement("css selector", "#docsearch-item-0 a")
[0-7] 2023-02-13T12:01:11.315Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element
[0-7] 2023-02-13T12:01:11.315Z INFO webdriver: DATA { using: 'css selector', value: '#docsearch-item-0 a' }
[0-7] 2023-02-13T12:01:11.483Z INFO webdriver: RESULT {
[0-7]   ELEMENT: 'f082ddfc-dde8-4201-ac9b-d7cbe698c3e6',
[0-7]   'element-6066-11e4-a52e-4f735466cecf': 'f082ddfc-dde8-4201-ac9b-d7cbe698c3e6'
[0-7] }
[0-7] 2023-02-13T12:01:11.485Z INFO webdriver: COMMAND elementClick("f082ddfc-dde8-4201-ac9b-d7cbe698c3e6")
[0-7] 2023-02-13T12:01:11.486Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/f082ddfc-dde8-4201-ac9b-d7cbe698c3e6/click
[0-7] 2023-02-13T12:01:12.155Z INFO webdriver: COMMAND findElement("css selector", "h1")
[0-7] 2023-02-13T12:01:12.155Z INFO webdriver: [POST] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element
[0-7] 2023-02-13T12:01:12.155Z INFO webdriver: DATA { using: 'css selector', value: 'h1' }
[0-7] 2023-02-13T12:01:12.558Z INFO webdriver: RESULT {
[0-7]   ELEMENT: 'abf020cc-210c-4e6a-9f21-c23dc3b06381',
[0-7]   'element-6066-11e4-a52e-4f735466cecf': 'abf020cc-210c-4e6a-9f21-c23dc3b06381'
[0-7] }
[0-7] 2023-02-13T12:01:12.562Z INFO webdriver: COMMAND isElementDisplayed("abf020cc-210c-4e6a-9f21-c23dc3b06381")
[0-7] 2023-02-13T12:01:12.562Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/element/abf020cc-210c-4e6a-9f21-c23dc3b06381/displayed
[0-7] 2023-02-13T12:01:12.623Z INFO webdriver: RESULT true
[0-7] 2023-02-13T12:01:12.623Z INFO webdriver: COMMAND getTitle()
[0-7] 2023-02-13T12:01:12.623Z INFO webdriver: [GET] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6/title
[0-7] 2023-02-13T12:01:12.657Z INFO webdriver: RESULT OCR service for Appium Native Apps Service | WebdriverIO
[0-7] 2023-02-13T12:01:12.659Z INFO webdriver: COMMAND deleteSession()
[0-7] 2023-02-13T12:01:12.659Z INFO webdriver: [DELETE] http://localhost:4723/session/af98a251-f3d3-4693-a852-946f62699ce6
2023-02-13T12:01:13.051Z DEBUG @wdio/local-runner: Runner 0-7 finished with exit code 0
[0-7] PASSED in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\specs\app.webview.spec.ts
2023-02-13T12:01:13.051Z INFO @wdio/cli:launcher: Run onWorkerEnd hook
2023-02-13T12:01:13.052Z DEBUG @wdio/cli:utils: Finished to run "onWorkerEnd" hook in 0ms
2023-02-13T12:01:13.052Z INFO @wdio/cli:launcher: Run onWorkerStart hook
2023-02-13T12:01:13.052Z DEBUG @wdio/cli:utils: Finished to run "onWorkerStart" hook in 0ms
2023-02-13T12:01:13.053Z INFO @wdio/local-runner: Start worker 0-8 with arg: config/wdio.android.app.conf.ts
[0-8] 2023-02-13T12:01:13.488Z INFO @wdio/local-runner: Run worker command: run
[0-8] 2023-02-13T12:01:13.615Z DEBUG @wdio/config:utils: Found 'ts-node' package, auto-compiling TypeScript files
[0-8] 2023-02-13T12:01:13.695Z DEBUG @wdio/local-runner:utils: init remote session
[0-8] 2023-02-13T12:01:13.702Z DEBUG @wdio/utils:initialiseServices: initialise service "appium" as NPM package
[0-8] RUNNING in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\specs\app.webview.xpath.spec.ts
[0-8] 2023-02-13T12:01:13.959Z DEBUG @wdio/local-runner:utils: init remote session
[0-8] 2023-02-13T12:01:13.959Z INFO webdriver: Initiate new session using the WebDriver protocol
[0-8] 2023-02-13T12:01:14.013Z INFO webdriver: [POST] http://localhost:4723/session
[0-8] 2023-02-13T12:01:14.013Z INFO webdriver: DATA {
[0-8]   capabilities: {
[0-8]     alwaysMatch: {
[0-8]       platformName: 'Android',
[0-8]       'appium:deviceName': 'emulator-5554',
[0-8]       'appium:platformVersion': '13.0',
[0-8]       'appium:orientation': 'PORTRAIT',
[0-8]       'appium:automationName': 'UiAutomator2',
[0-8]       'appium:app': 'D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk',
[0-8]       'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
[0-8]       'appium:newCommandTimeout': 240,
[0-8]       'appium:connectHardwareKeyboard': true
[0-8]     },
[0-8]     firstMatch: [ {} ]
[0-8]   },
[0-8]   desiredCapabilities: {
[0-8]     platformName: 'Android',
[0-8]     'appium:deviceName': 'emulator-5554',
[0-8]     'appium:platformVersion': '13.0',
[0-8]     'appium:orientation': 'PORTRAIT',
[0-8]     'appium:automationName': 'UiAutomator2',
[0-8]     'appium:app': 'D:\\Roman\\Documents\\ITSwitcher\\AutoQA\\Home_works\\hw25\\apps\\Android-NativeDemoApp-0.4.0.apk',
[0-8]     'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
[0-8]     'appium:newCommandTimeout': 240,
[0-8]     'appium:connectHardwareKeyboard': true
[0-8]   }
[0-8] }
[0-8] 2023-02-13T12:01:19.540Z INFO webdriver: COMMAND reset()
[0-8] 2023-02-13T12:01:19.540Z INFO webdriver: [POST] http://localhost:4723/session/d7b4a3d8-d42d-41ad-b70c-4b220473aeea/appium/app/reset
[0-8] 2023-02-13T12:01:20.639Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-8] 2023-02-13T12:01:20.639Z INFO webdriver: [POST] http://localhost:4723/session/d7b4a3d8-d42d-41ad-b70c-4b220473aeea/element
[0-8] 2023-02-13T12:01:20.639Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-8] 2023-02-13T12:01:20.786Z INFO webdriver: RESULT {
[0-8]   error: 'no such element',
[0-8]   message: 'An element could not be located on the page using the given search parameters.',
[0-8]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-8]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-8]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-8]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-8]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-8] }
[0-8] 2023-02-13T12:01:20.794Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-8] 2023-02-13T12:01:20.795Z INFO webdriver: [POST] http://localhost:4723/session/d7b4a3d8-d42d-41ad-b70c-4b220473aeea/element
[0-8] 2023-02-13T12:01:20.795Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-8] 2023-02-13T12:01:21.575Z INFO webdriver: RESULT {
[0-8]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0202-ffff-ffff00000015',
[0-8]   ELEMENT: '00000000-0000-0202-ffff-ffff00000015'
[0-8] }
[0-8] 2023-02-13T12:01:21.578Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0202-ffff-ffff00000015")
[0-8] 2023-02-13T12:01:21.578Z INFO webdriver: [GET] http://localhost:4723/session/d7b4a3d8-d42d-41ad-b70c-4b220473aeea/element/00000000-0000-0202-ffff-ffff00000015/displayed
[0-8] 2023-02-13T12:01:21.590Z INFO webdriver: RESULT true
[0-8] 2023-02-13T12:01:21.591Z INFO webdriver: COMMAND findElement("accessibility id", "Webview")
[0-8] 2023-02-13T12:01:21.591Z INFO webdriver: [POST] http://localhost:4723/session/d7b4a3d8-d42d-41ad-b70c-4b220473aeea/element
[0-8] 2023-02-13T12:01:21.591Z INFO webdriver: DATA { using: 'accessibility id', value: 'Webview' }
[0-8] 2023-02-13T12:01:21.616Z INFO webdriver: RESULT {
[0-8]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0202-ffff-ffff0000001a',
[0-8]   ELEMENT: '00000000-0000-0202-ffff-ffff0000001a'
[0-8] }
[0-8] 2023-02-13T12:01:21.619Z INFO webdriver: COMMAND elementClick("00000000-0000-0202-ffff-ffff0000001a")
[0-8] 2023-02-13T12:01:21.620Z INFO webdriver: [POST] http://localhost:4723/session/d7b4a3d8-d42d-41ad-b70c-4b220473aeea/element/00000000-0000-0202-ffff-ffff0000001a/click
[0-8] 2023-02-13T12:01:21.685Z INFO webdriver: COMMAND findElement("xpath", "*//android.webkit.WebView")
[0-8] 2023-02-13T12:01:21.685Z INFO webdriver: [POST] http://localhost:4723/session/d7b4a3d8-d42d-41ad-b70c-4b220473aeea/element
[0-8] 2023-02-13T12:01:21.685Z INFO webdriver: DATA { using: 'xpath', value: '*//android.webkit.WebView' }
[0-8] 2023-02-13T12:01:22.044Z INFO webdriver: RESULT {
[0-8]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0202-ffff-ffff00000045',
[0-8]   ELEMENT: '00000000-0000-0202-ffff-ffff00000045'
[0-8] }
[0-8] 2023-02-13T12:01:22.047Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0202-ffff-ffff00000045")
[0-8] 2023-02-13T12:01:22.047Z INFO webdriver: [GET] http://localhost:4723/session/d7b4a3d8-d42d-41ad-b70c-4b220473aeea/element/00000000-0000-0202-ffff-ffff00000045/displayed
[0-8] 2023-02-13T12:01:22.376Z INFO webdriver: RESULT true
[0-8] Test time for using XPATH It took 0.693 seconds.
[0-8] 2023-02-13T12:01:22.378Z INFO webdriver: COMMAND reset()
[0-8] 2023-02-13T12:01:22.378Z INFO webdriver: [POST] http://localhost:4723/session/d7b4a3d8-d42d-41ad-b70c-4b220473aeea/appium/app/reset
[0-8] 2023-02-13T12:01:23.565Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-8] 2023-02-13T12:01:23.565Z INFO webdriver: [POST] http://localhost:4723/session/d7b4a3d8-d42d-41ad-b70c-4b220473aeea/element
[0-8] 2023-02-13T12:01:23.565Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-8] 2023-02-13T12:01:23.582Z INFO webdriver: RESULT {
[0-8]   error: 'no such element',
[0-8]   message: 'An element could not be located on the page using the given search parameters.',
[0-8]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-8]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-8]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-8]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-8]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-8] }
[0-8] 2023-02-13T12:01:23.585Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-8] 2023-02-13T12:01:23.586Z INFO webdriver: [POST] http://localhost:4723/session/d7b4a3d8-d42d-41ad-b70c-4b220473aeea/element
[0-8] 2023-02-13T12:01:23.586Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-8] 2023-02-13T12:01:23.600Z INFO webdriver: RESULT {
[0-8]   error: 'no such element',
[0-8]   message: 'An element could not be located on the page using the given search parameters.',
[0-8]   stacktrace: 'NoSuchElementError: An element could not be located on the page using the given search parameters.\n' +
[0-8]     '    at AndroidUiautomator2Driver.findElOrEls (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-android-driver\\lib\\commands\\find.js:75:11)\n' +
[0-8]     '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
[0-8]     '    at AndroidUiautomator2Driver.findElOrElsWithProcessing (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:33:12)\n' +
[0-8]     '    at AndroidUiautomator2Driver.findElement (C:\\Users\\Roman\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\basedriver\\commands\\find.js:53:10)'        
[0-8] }
[0-8] 2023-02-13T12:01:24.099Z INFO webdriver: COMMAND findElement("accessibility id", "Home")
[0-8] 2023-02-13T12:01:24.099Z INFO webdriver: [POST] http://localhost:4723/session/d7b4a3d8-d42d-41ad-b70c-4b220473aeea/element
[0-8] 2023-02-13T12:01:24.099Z INFO webdriver: DATA { using: 'accessibility id', value: 'Home' }
[0-8] 2023-02-13T12:01:24.127Z INFO webdriver: RESULT {
[0-8]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0205-ffff-ffff00000015',
[0-8]   ELEMENT: '00000000-0000-0205-ffff-ffff00000015'
[0-8] }
[0-8] 2023-02-13T12:01:24.129Z INFO webdriver: COMMAND isElementDisplayed("00000000-0000-0205-ffff-ffff00000015")
[0-8] 2023-02-13T12:01:24.129Z INFO webdriver: [GET] http://localhost:4723/session/d7b4a3d8-d42d-41ad-b70c-4b220473aeea/element/00000000-0000-0205-ffff-ffff00000015/displayed
[0-8] 2023-02-13T12:01:24.146Z INFO webdriver: RESULT true
[0-8] 2023-02-13T12:01:24.146Z INFO webdriver: COMMAND findElement("accessibility id", "Webview")
[0-8] 2023-02-13T12:01:24.147Z INFO webdriver: [POST] http://localhost:4723/session/d7b4a3d8-d42d-41ad-b70c-4b220473aeea/element
[0-8] 2023-02-13T12:01:24.147Z INFO webdriver: DATA { using: 'accessibility id', value: 'Webview' }
[0-8] 2023-02-13T12:01:24.173Z INFO webdriver: RESULT {
[0-8]   'element-6066-11e4-a52e-4f735466cecf': '00000000-0000-0205-ffff-ffff0000001a',
[0-8]   ELEMENT: '00000000-0000-0205-ffff-ffff0000001a'
[0-8] }
[0-8] 2023-02-13T12:01:24.175Z INFO webdriver: COMMAND elementClick("00000000-0000-0205-ffff-ffff0000001a")
[0-8] 2023-02-13T12:01:24.175Z INFO webdriver: [POST] http://localhost:4723/session/d7b4a3d8-d42d-41ad-b70c-4b220473aeea/element/00000000-0000-0205-ffff-ffff0000001a/click
[0-8] 2023-02-13T12:01:24.246Z INFO webdriver: COMMAND getContexts()
[0-8] 2023-02-13T12:01:24.247Z INFO webdriver: [GET] http://localhost:4723/session/d7b4a3d8-d42d-41ad-b70c-4b220473aeea/contexts
[0-8] 2023-02-13T12:01:24.490Z INFO webdriver: RESULT [ 'NATIVE_APP', 'WEBVIEW_com.wdiodemoapp' ]
[0-8] Test time for switching to the WebView It took 0.244 seconds.
[0-8] 2023-02-13T12:01:24.492Z INFO webdriver: COMMAND deleteSession()
[0-8] 2023-02-13T12:01:24.492Z INFO webdriver: [DELETE] http://localhost:4723/session/d7b4a3d8-d42d-41ad-b70c-4b220473aeea
2023-02-13T12:01:24.825Z DEBUG @wdio/local-runner: Runner 0-8 finished with exit code 0
[0-8] PASSED in Android - D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\specs\app.webview.xpath.spec.ts
2023-02-13T12:01:24.826Z INFO @wdio/cli:launcher: Run onWorkerEnd hook
2023-02-13T12:01:24.826Z DEBUG @wdio/cli:utils: Finished to run "onWorkerEnd" hook in 0ms
2023-02-13T12:01:24.826Z INFO @wdio/cli:launcher: Run onComplete hook
2023-02-13T12:01:24.827Z DEBUG @wdio/appium-service: Appium (pid: 16744) killed
2023-02-13T12:01:24.827Z DEBUG @wdio/cli:utils: Finished to run "onComplete" hook in 0ms

 "spec" Reporter:
------------------------------------------------------------------
[emulator-5554 Android 13 #0-0] Running: emulator-5554 on Android 13 executing D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-0] Session ID: b8a9b8e3-0204-44df-b7ba-0cecb3bd624a
[emulator-5554 Android 13 #0-0]
[emulator-5554 Android 13 #0-0] » \tests\specs\app.biometric.login.spec.ts
[emulator-5554 Android 13 #0-0] WebdriverIO and Appium, when interacting with a biometric button,
[emulator-5554 Android 13 #0-0]    ? should be able to login with a matching touch/faceID/fingerprint
[emulator-5554 Android 13 #0-0]    ✖ "before each" hook for WebdriverIO and Appium, when interacting with a biometric button,
[emulator-5554 Android 13 #0-0]
[emulator-5554 Android 13 #0-0] 1 failing (52s)
[emulator-5554 Android 13 #0-0]
[emulator-5554 Android 13 #0-0] 1) WebdriverIO and Appium, when interacting with a biometric button, "before each" hook for WebdriverIO and Appium, when interacting with a biometric button,
[emulator-5554 Android 13 #0-0] element ("android=new UiSelector().textContains("NEXT")") still not displayed after 45000ms
[emulator-5554 Android 13 #0-0] Error: element ("android=new UiSelector().textContains("NEXT")") still not displayed after 45000ms
[emulator-5554 Android 13 #0-0]     at D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\node_modules\webdriverio\build\commands\browser\waitUntil.js:66:23
[emulator-5554 Android 13 #0-0]     at async Element.wrapCommandFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 13 #0-0]     at async Element.elementErrorHandlerCallbackFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\node_modules\webdriverio\build\middlewares.js:24:32)
[emulator-5554 Android 13 #0-0]     at async Element.wrapCommandFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 13 #0-0]     at async Element.wrapCommandFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 13 #0-0]     at async Element.elementErrorHandlerCallbackFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\node_modules\webdriverio\build\middlewares.js:24:32)
[emulator-5554 Android 13 #0-0]     at async Element.wrapCommandFn (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\node_modules\@wdio\utils\build\shim.js:137:29)
[emulator-5554 Android 13 #0-0]     at async AndroidSettings.waitAndTap (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\screenobjects\AndroidSettings.ts:113:9)
[emulator-5554 Android 13 #0-0]     at async AndroidSettings.fingerPrintWizardEightOrHigher (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\screenobjects\AndroidSettings.ts:32:13)
[emulator-5554 Android 13 #0-0]     at async AndroidSettings.enableBiometricLogin (D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\tests\screenobjects\AndroidSettings.ts:137:13)
------------------------------------------------------------------
[emulator-5554 Android 13 #0-1] Running: emulator-5554 on Android 13 executing D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-1] Session ID: 728cca98-f6a7-46cd-a509-67e9d264968c
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
[emulator-5554 Android 13 #0-1] 6 passing (11.3s)
------------------------------------------------------------------
[emulator-5554 Android 13 #0-2] Running: emulator-5554 on Android 13 executing D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-2] Session ID: a0ae5a4b-8d70-40a3-89d9-6482e1003b02
[emulator-5554 Android 13 #0-2]
[emulator-5554 Android 13 #0-2] » \tests\specs\app.drag.and.drop.spec.ts
[emulator-5554 Android 13 #0-2] WebdriverIO and Appium, when using drag and drop
[emulator-5554 Android 13 #0-2]    ✓ should be able to solve the puzzle by dragging the pieces into the puzzle
[emulator-5554 Android 13 #0-2]
[emulator-5554 Android 13 #0-2] 1 passing (18.3s)
------------------------------------------------------------------
[emulator-5554 Android 13 #0-3] Running: emulator-5554 on Android 13 executing D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-3] Session ID: 0e344e35-e053-47ef-adbf-35783f3e33ab
[emulator-5554 Android 13 #0-3]
[emulator-5554 Android 13 #0-3] » \tests\specs\app.forms.spec.ts
[emulator-5554 Android 13 #0-3] WebdriverIO and Appium, when interacting with form elements,
[emulator-5554 Android 13 #0-3]    ✓ should be able type in the input and validate the text
[emulator-5554 Android 13 #0-3]    ✓ should be able turn on and off the switch
[emulator-5554 Android 13 #0-3]    ✓ should be able select a value from the select element
[emulator-5554 Android 13 #0-3]    ✓ should be able to open the alert and close it with all 3 buttons
[emulator-5554 Android 13 #0-3]    ✓ should be able to determine that the inactive button is inactive
[emulator-5554 Android 13 #0-3]
[emulator-5554 Android 13 #0-3] 5 passing (17.4s)
------------------------------------------------------------------
[emulator-5554 Android 13 #0-4] Running: emulator-5554 on Android 13 executing D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-4] Session ID: 5600bf23-8ee9-48ea-944e-4b941682e6a7
[emulator-5554 Android 13 #0-4]
[emulator-5554 Android 13 #0-4] » \tests\specs\app.login.spec.ts
[emulator-5554 Android 13 #0-4] WebdriverIO and Appium, when interacting with a login form,
[emulator-5554 Android 13 #0-4]    ✓ should be able login successfully
[emulator-5554 Android 13 #0-4]    ✓ should be able sign up successfully
[emulator-5554 Android 13 #0-4]
[emulator-5554 Android 13 #0-4] 2 passing (17.4s)
------------------------------------------------------------------
[emulator-5554 Android 13 #0-5] Running: emulator-5554 on Android 13 executing D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-5] Session ID: 9d7d7d31-a598-446c-b376-899d56b5c943
[emulator-5554 Android 13 #0-5]
[emulator-5554 Android 13 #0-5] » \tests\specs\app.swipe.spec.ts
[emulator-5554 Android 13 #0-5] WebdriverIO and Appium, when using swiping
[emulator-5554 Android 13 #0-5]    ✓ should be able to swipe horizontal by swiping the carousel from left to right
[emulator-5554 Android 13 #0-5]    ✓ should be able to swipe vertical by finding the surprise
[emulator-5554 Android 13 #0-5]
[emulator-5554 Android 13 #0-5] 2 passing (44s)
------------------------------------------------------------------
[emulator-5554 Android 13 #0-6] Running: emulator-5554 on Android 13 executing D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-6] Session ID: c5bd5974-e9e9-4100-957a-8835360a7ffd
[emulator-5554 Android 13 #0-6]
[emulator-5554 Android 13 #0-6] » \tests\specs\app.tab.bar.navigation.spec.ts
[emulator-5554 Android 13 #0-6] WebdriverIO and Appium, when using navigation through the tab bar
[emulator-5554 Android 13 #0-6]    ✓ should be able to open the webview
[emulator-5554 Android 13 #0-6]    ✓ should be able to open the login form screen
[emulator-5554 Android 13 #0-6]    ✓ should be able to open the forms screen
[emulator-5554 Android 13 #0-6]    ✓ should be able to open the swipe screen
[emulator-5554 Android 13 #0-6]    ✓ should be able to open the drag and drop screen
[emulator-5554 Android 13 #0-6]    ✓ should be able to open the home screen
[emulator-5554 Android 13 #0-6]
[emulator-5554 Android 13 #0-6] 6 passing (13.5s)
------------------------------------------------------------------
[emulator-5554 Android 13 #0-7] Running: emulator-5554 on Android 13 executing D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-7] Session ID: af98a251-f3d3-4693-a852-946f62699ce6
[emulator-5554 Android 13 #0-7]
[emulator-5554 Android 13 #0-7] » \tests\specs\app.webview.spec.ts
[emulator-5554 Android 13 #0-7] WebdriverIO and Appium, when interacting with a WebView,
[emulator-5554 Android 13 #0-7]    ✓ should be able to switch between webview, native and webview
[emulator-5554 Android 13 #0-7]
[emulator-5554 Android 13 #0-7] 1 passing (20.8s)
------------------------------------------------------------------
[emulator-5554 Android 13 #0-8] Running: emulator-5554 on Android 13 executing D:\Roman\Documents\ITSwitcher\AutoQA\Home_works\hw25\apps\Android-NativeDemoApp-0.4.0.apk
[emulator-5554 Android 13 #0-8] Session ID: d7b4a3d8-d42d-41ad-b70c-4b220473aeea
[emulator-5554 Android 13 #0-8]
[emulator-5554 Android 13 #0-8] » \tests\specs\app.webview.xpath.spec.ts
[emulator-5554 Android 13 #0-8] WebdriverIO and Appium, when interacting with a webview through XPATH
[emulator-5554 Android 13 #0-8]    ✓ should be able to verify that the WebView is shown by xpath
[emulator-5554 Android 13 #0-8]    ✓ should be able to verify that the WebView is shown by switching to the WebView
[emulator-5554 Android 13 #0-8]
[emulator-5554 Android 13 #0-8] 2 passing (5.1s)


Spec Files:      8 passed, 1 failed, 9 total (100% completed) in 00:04:25

2023-02-13T12:01:24.843Z INFO @wdio/local-runner: Shutting down spawned worker
2023-02-13T12:01:25.098Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2023-02-13T12:01:25.099Z INFO @wdio/local-runner: shutting down