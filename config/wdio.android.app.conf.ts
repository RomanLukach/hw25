import { join } from 'path';
import config from './wdio.shared.local.appium.conf';

// ============
// Specs
// ============
config.specs = [
    './tests/specs/**/app*.spec.ts',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '13.0', // see device manager in Android Studio
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2', // Must always be set to uiautomator2. Values of automationName are compared case-insensitively.
        'appium:app': join(process.cwd(), './apps/Android-NativeDemoApp-0.4.0.apk'),
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        'appium:newCommandTimeout': 240,
        // 'appium:ensureWebviewsHavePages': true, 
        //appium:connectHardwareKeyboard': true; }' is not assignable to type 'DesiredCapabilities | W3CCapabilities'.
        // Object literal may only specify known properties, and ''appium:ensureWebviewsHavePages'' does not exist in type 'DesiredCapabilities 
        // 'appium:nativeWebScreenshot': true, // does not exist in type 'DesiredCapabilities
        'appium:connectHardwareKeyboard': true
	//command.addArgument("--log"); if you want to store the appium log use this and next one
	//command.addArgument("C://Users//...//log//appiumLogs.txt");

    },
];

exports.config = config;