
# ==========================================================================================================================================
# Домашнее задание 25.1
---
1. Cделать форк проекта boilerplate из лекции - DONE
2. Адаптировать настройки/конфиги для запуска локально на вашем эмуляторе/девайсе - DONE
3. Запустить тесты для Android antive app - DONE
4. Cоставьте отчет о пройденных тестах и приложите его в отдельный .md файл в вашем репозитории

appium.log report [default location - (./appium.log)] generated during test execution. 
I define (change default location) location as  "log: "./reports/appium.log" in "wdio.shared.local.appium.conf.ts" configuration file.

Also, cmd output can be used as a log -see "cmdConsoleLogForWdioAndroidAppTests.md" file
This report has 2 sections:
- Execution - shows which script RUNNING and its status (PASSED / FAILED)
- "spec" Reporter - shows which script running, its session id and assertions status.
- Summary -  shows how many spec files were executed, how many passed, how many failed and summary time spent for all specs execution

5. Если некоторые тесты будут падать - заведите issues и добавьте ссылки на них в ваш .md документ
One test failed - issue is open on github.

# ==========================================================================================================================================

# Домашнее задание 25.1
Ответить на вопросы по https://github.com/webdriverio/appium-boilerplate :
1. 
Question: Каким скриптом запускаются тесты для запуска нативного android приложения?
Answer: In accordance with README.md:

## Native App Tests

All tests can be executed on te devices as configured in [`wdio.android.app.conf.ts`](./config/wdio.android.app.conf.ts) or
[`wdio.ios.app.conf.ts`](./config/wdio.ios.app.conf.ts). Please check the below tests on what they do or on how to run them separately.

```sh
# For Android local execution
npm run android.app

# For iOS local execution
npm run ios.app
```

2. 
Question: Сколько тестов для нативных приложений?
Answer: Totally 9 tests for Android Native tests:
This folder consist 6 config files:
- 2 config files for Android (wdio.android.app.conf.ts and wdio.android.browser.conf.ts) 
- 2 config files for IOS (wdio.ios.app.conf.ts and wdio.ios.browser.conf.ts)
- config file with general settings (wdio.shared.conf.ts)
- config file with local appium settings (wdio.shared.local.appium.conf.ts)

wdio.android.app.conf.ts config file indicate folder with specs ('./tests/specs/**/app*.spec.ts').
This folder has 9 specs for native application test and 3 specs for web - totally 12 specs.

So, Answer on the question is 9 tests are for Native application tests.

3. 
Question: Какой конфиг указывает на папку, в которой лежат архивы с приложениями?
Answer: All config files are located in config folder.

wdio.android.app.conf.ts indicate path to application as following:

config.capabilities = [
    {   ...
        'appium:app': join(process.cwd(), './apps/Android-NativeDemoApp-0.4.0.apk'),
        ...
    }

4. 
Question: Как в конфиге обусловлен путь для спек, которые запускаются на нативном приложении (по какому признаку берутся нужные файлы спек)?
Answer: wdio.android.app.conf.ts indicate path to native specs as following:
config.specs = [
    './tests/specs/**/app*.spec.ts',
];

So, all specs located by /tests/specs/ path and comply to mask app*.spec.ts will be executed. 

5. 
Question: Каким конфигом вы можете изменять уровни логирования, чтобы получать меньше/больше информации о пройденных тестах?
Answer: Log level could be changed by adjusting logLevel parameter (defaul value - "debug") in the section Test Configurations of wdio.shared.conf.ts file. 
Log level provide more or less information terminal in VSCode and in appium log.

# ==========================================================================================================================================