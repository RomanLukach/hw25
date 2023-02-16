const SELECTORS = {
    ANDROID: {
        WRONG_EMAIL_ALERT: '*//android.view.ViewGroup[4]/android.widget.TextView[1]'
    },
    /* Option for future use */
    IOS: {
        ALERT: '-ios predicate string:type == \'XCUIElementTypeAlert\'',
    },
};

class WrongEmailAlert {
    /* Wait for the alert to exist.  The selector for Android differs from iOS */
    static async waitForIsShown (isShown = true) {
        const selector = driver.isAndroid
            ? SELECTORS.ANDROID.WRONG_EMAIL_ALERT
            : SELECTORS.IOS.ALERT;

        return $(selector).waitForExist({
            timeout: 11000,
            reverse: !isShown,
        });
    }

    /* Get the alert text
     * iOS: The default Appium method can be used to get the text of the alert
     * Android: The UI hierarchy for Android is different so it will not give the same result as with iOS if `getText` is being used. 
     * Here we construct a method that would give the same output.
     */
    static async text ():Promise<string> {
        if (driver.isIOS) {
            return driver.getAlertText();
        }
        return `${await $(SELECTORS.ANDROID.WRONG_EMAIL_ALERT).getText()}`;
    }
}

export default WrongEmailAlert;