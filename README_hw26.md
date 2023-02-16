Домашнее задание 26.1 (70 баллов) / Срок сдачи задания - до 19.02

В проекте boilerplate добавить негативные тесты для логина и регистрации в нативном приложении. Тесты добавьте в существующий спек для тестирования экрана. Добавьте 1 тест с неверным паролем для логина и 1 тест с неверным паролем в поле подтверждения пароля для регистрации.
Обязательно:
- используйте архитектуру проекта для хранения элементов, а также методов для работы с этими элементами
- обязательно следуйте подходу ААА
- тесты также должны проходить по отдельности и в разном порядке, то есть быть независимыми
- заведите issue, если ваши тесты найдут проблему

Changes in original boilerplate project:

1. folder \tests\specs\
    - Initial app.login.spec.ts file copied to COPY_app.login.spec.ts
    - Initial tests 'should be able login successfully' and 'should be able sign up successfully' are not modifyed 
    - follwoing tests added to app.login.spec.ts:
        LOGIN:
        - No email - should not be able login
        - No Password - should not be able login
        - No email / No password - should not be able login
        - Short Password (less 8 symbols) - should not be able login
        - Wrong Mail address Missed "@" - should not be able login
        - Wrong Mail address no preface - should not be able login
        - Wrong Mail address missed dot - should not be able login
        SIGN UP:
        - No mail / No passwords - should not be able sign up
        - No mail /  passwords are correct - should not be able sign up
        - Repeate passwords is shorter - should not be able sign up
        - No password / Repeate password is correct - should not be able sign up
        - Repeate password is the same lenght but different - should not be able sign up

The following tests were added but hiden due they  allowto loging:
- Long Password (3000 symbols)
- RUS Encoding Password
- Special Symbols Password
- Password with backspace

2. folder tests\screenobjects\
    - initial LoginScreen.ts file copied to COPY_LoginScreen.ts
    - LoginScreen.ts was modified and saved with the same file name:
        -  function 'submitSignUpForm' modified to be able to operate with Password and Repeate paswodr fields separetly

3. folder \tests\screenobjects\components\
    - added 3 files:
        - WrongEmailAlert.ts
        - WrongPasswordAlert.ts
        - WrongPasswordRepeateAlert.ts

4. Execution
To run only login script use following command in terminal: 
npm run android.app -- --spec=tests/specs/app.login.spec.ts

5. Terminal Log output (Windows 10): 
[emulator-5554 Android 13 #0-0]    ✓ No email - should not be able login
[emulator-5554 Android 13 #0-0]    ✓ No Password - should not be able login
[emulator-5554 Android 13 #0-0]    ✓ No email / No password - should not be able login
[emulator-5554 Android 13 #0-0]    ✓ Short Password (less 8 symbols) - should not be able login
[emulator-5554 Android 13 #0-0]    ✓ Wrong Mail address Missed "@" - should not be able login
[emulator-5554 Android 13 #0-0]    ✓ Wrong Mail address no preface - should not be able login
[emulator-5554 Android 13 #0-0]    ✓ Wrong Mail address missed dot - should not be able login
[emulator-5554 Android 13 #0-0]    ✓ should be able login successfully
[emulator-5554 Android 13 #0-0]    ✓ No mail / No passwords - should not be able sign up
[emulator-5554 Android 13 #0-0]    ✓ No mail /  passwords are correct - should not be able sign up
[emulator-5554 Android 13 #0-0]    ✓ Repeate passwords is shorter - should not be able sign up
[emulator-5554 Android 13 #0-0]    ✓ No password / Repeate password is correct - should not be able sign up
[emulator-5554 Android 13 #0-0]    ✓ Repeate password is the same lenght but different - should not be able sign up
[emulator-5554 Android 13 #0-0]    ✓ should be able sign up successfully