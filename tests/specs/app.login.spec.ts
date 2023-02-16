import TabBar from '../screenobjects/components/TabBar';
import LoginScreen from '../screenobjects/LoginScreen';
import NativeAlert from '../screenobjects/components/NativeAlert';
import { faker } from "@faker-js/faker";
import WrongEmailAlert from '../screenobjects/components/WrongEmailAlert';
import WrongPassAlert from '../screenobjects/components/WrongPasswordAlert';
import WrongPassRepeateAlert from '../screenobjects/components/WrongPasswordRepeateAlert';

// --------------------------- Constants - starts -------------------------------------------------------------------------------
let CorrectPassword = "Test1234!";
let PassNull = "";
let PassLes8 = faker.internet.password(4);
// let PassLong = faker.internet.password(3000);
// let PassRuCoding = "РПдцАРПА";
// let PassSpecialSimbol = "~!@#$%^&*()_+`-=|:<>?,./";
// let PassWithBackSpace = "Test 1234";
let CorrectEmail = "test@webdriver.io";
let NoMail = "";
let WrongMail_MissedDog = "testwebdriver.io"
let WrongMail_noPreface = "@webdriver.io"
let WrongMail_MissedDot = "test@webdriverio"
// -------------------------------- Constants - finish --------------------------------------------------------------------

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openLogin();
        await LoginScreen.waitForIsShown(true);
    });

// //============================== Login Page - srarts ====================================================================
// // ---------------------------- Login RL Tests Starts -------------------------------------------------------------------

    it('No email - should not be able login', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnLoginContainerButton();
        // Submit the data
        await LoginScreen.submitLoginForm({ username: NoMail, password: CorrectPassword });
        // Wait for the alert and validate it
        await WrongEmailAlert.waitForIsShown();
        await expect(await WrongEmailAlert.text()).toEqual('Please enter a valid email address');
    });

    it('No Password - should not be able login', async () => {
            // Always make sure you are on the right tab
            await LoginScreen.tapOnLoginContainerButton();
            // Submit the data
            await LoginScreen.submitLoginForm({ username: CorrectEmail, password: PassNull });
            // Wait for the alert and validate it
            await WrongPassAlert.waitForIsShown();
            await expect(await WrongPassAlert.text()).toEqual('Please enter at least 8 characters');
        });

    it('No email / No password - should not be able login', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnLoginContainerButton();
        // Submit the data
        await LoginScreen.submitLoginForm({ username: NoMail, password: PassNull });
        // Wait for the alert and validate it
        await WrongEmailAlert.waitForIsShown();
        await expect(await WrongEmailAlert.text()).toEqual('Please enter a valid email address');
        await WrongPassAlert.waitForIsShown();
        await expect(await WrongPassAlert.text()).toEqual('Please enter at least 8 characters');
    });

    it('Short Password (less 8 symbols) - should not be able login', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnLoginContainerButton();
        // Submit the data
        await LoginScreen.submitLoginForm({ username: CorrectEmail, password: PassLes8 });
        // Wait for the alert and validate it
        await WrongPassAlert.waitForIsShown();
        await expect(await WrongPassAlert.text()).toEqual('Please enter at least 8 characters');
    });

    it('Wrong Mail address Missed "@" - should not be able login', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnLoginContainerButton();
        // Submit the data
        await LoginScreen.submitLoginForm({ username: WrongMail_MissedDog, password: CorrectPassword });
        // Wait for the alert and validate it
        await WrongEmailAlert.waitForIsShown();
        await expect(await WrongEmailAlert.text()).toEqual('Please enter a valid email address');
    });

    it('Wrong Mail address no preface - should not be able login', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnLoginContainerButton();
        // Submit the data
        await LoginScreen.submitLoginForm({ username: WrongMail_noPreface, password: CorrectPassword });
        // Wait for the alert and validate it
        await WrongEmailAlert.waitForIsShown();
        await expect(await WrongEmailAlert.text()).toEqual('Please enter a valid email address');
    });

    it('Wrong Mail address missed dot - should not be able login', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnLoginContainerButton();
        // Submit the data
        await LoginScreen.submitLoginForm({ username: WrongMail_MissedDot, password: CorrectPassword });
        // Wait for the alert and validate it
        await WrongEmailAlert.waitForIsShown();
        await expect(await WrongEmailAlert.text()).toEqual('Please enter a valid email address');
    });

// // it('Long Password (3000 symbols) - should not be able login', async () => {
// //     // Always make sure you are on the right tab
// //     await LoginScreen.tapOnLoginContainerButton();
// //     // Submit the data
// //     await LoginScreen.submitLoginForm({ username: 'test@webdriver.io', password: PassLong });
// //     // Wait for the alert and validate it
// //     await WrongPassAlert.waitForIsShown();
// //     await expect(await WrongPassAlert.text()).toEqual('Please enter at least 8 characters');
// // });

// // it('RUS Encoding Password - should not be able login', async () => {
// //     // Always make sure you are on the right tab
// //     await LoginScreen.tapOnLoginContainerButton();
// //     // Submit the data
// //     await LoginScreen.submitLoginForm({ username: 'test@webdriver.io', password: PassRuCoding });
// //     // Wait for the alert and validate it
// //     await WrongPassAlert.waitForIsShown();
// //     await expect(await WrongPassAlert.text()).toEqual('Please enter at least 8 characters');
// // });

// // it('Special Symbols Password - should not be able login', async () => {
// //     // Always make sure you are on the right tab
// //     await LoginScreen.tapOnLoginContainerButton();
// //     // Submit the data
// //     await LoginScreen.submitLoginForm({ username: 'test@webdriver.io', password: PassSpecialSimbol });
// //     // Wait for the alert and validate it
// //     await WrongPassAlert.waitForIsShown();
// //     await expect(await WrongPassAlert.text()).toEqual('Please enter at least 8 characters');
// // });

// // it('Password with backspace- should not be able login ', async () => {
// //     // Always make sure you are on the right tab
// //     await LoginScreen.tapOnLoginContainerButton();
// //     // Submit the data
// //     await LoginScreen.submitLoginForm({ username: 'test@webdriver.io', password: PassWithBackSpace });
// //     // Wait for the alert and validate it
// //     await WrongPassAlert.waitForIsShown();
// //     await expect(await WrongPassAlert.text()).toEqual('Please enter at least 8 characters');
// // });

// ------------------------------ Login RL Tests Finish ---------------------------------------------------------------------
// ---------------------------- Login Original Tests Starts -----------------------------------------------------------------
    it('should be able login successfully', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnLoginContainerButton();
        // Submit the data
        await LoginScreen.submitLoginForm({ username: CorrectEmail, password: CorrectPassword });
        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toEqual('Success\nYou are logged in!');

        // Close the alert
        await NativeAlert.topOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
    });
// --------------------------- Login Original Tests ends  -------------------------------------------------------------------
//================================ Login Page - end =========================================================================
//
//============================== SignUp Page - srarts =======================================================================
// ---------------------------- Sign up My Tests Starts ---------------------------------------------------------------------
    it('No mail /  passwords are correct - should not be able sign up', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnSignUpContainerButton();
        // Submit the data
    await LoginScreen.submitSignUpForm({ username: NoMail, password: CorrectPassword, passwordRepeat: CorrectPassword });
        // Wait for the alert and validate it
        await WrongEmailAlert.waitForIsShown();
        await expect(await WrongEmailAlert.text()).toEqual('Please enter a valid email address');
    });

    it('Repeate passwords is shorter - should not be able sign up', async () => {
            // Always make sure you are on the right tab
            await LoginScreen.tapOnSignUpContainerButton();
            // Submit the data
        await LoginScreen.submitSignUpForm({ username: CorrectEmail, password: CorrectPassword, passwordRepeat: PassLes8 });
            // Wait for the alert and validate it
            await WrongPassRepeateAlert.waitForIsShown();
            await expect(await WrongPassRepeateAlert.text()).toEqual('Please enter the same password');
        });

    it('No password / Repeate password is correct - should not be able sign up', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnSignUpContainerButton();
        // Submit the data
    await LoginScreen.submitSignUpForm({ username: CorrectEmail, password: PassNull, passwordRepeat: CorrectPassword });
        // Wait for the alert and validate it
        await WrongPassAlert.waitForIsShown();
        await expect(await WrongPassAlert.text()).toEqual('Please enter at least 8 characters');
    });

    it('Repeate password is the same lenght but different - should not be able sign up', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnSignUpContainerButton();
        // Submit the data
    await LoginScreen.submitSignUpForm({ username: CorrectEmail, password: 'test12345', passwordRepeat: CorrectPassword });
        // Wait for the alert and validate it
        await WrongPassRepeateAlert.waitForIsShown();
        await expect(await WrongPassRepeateAlert.text()).toEqual('Please enter the same password');
    });
// ---------------------------- Sign up My Tests finihs --------------------------------------------------------------------
// ------------------------- Sign up Original Tests starts  ----------------------------------------------------------------
    it('should be able sign up successfully', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnSignUpContainerButton();
        // Submit the data
        await LoginScreen.submitSignUpForm({ username: CorrectEmail, password: CorrectPassword, passwordRepeat: CorrectPassword });
        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toEqual('Signed Up!\nYou successfully signed up!');

        // Close the alert
        await NativeAlert.topOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
    });
// ------------------------- Sign up Original Tests ends  ------------------------------------------------------------------
//============================ SignUp Page - end ===========================================================================
});