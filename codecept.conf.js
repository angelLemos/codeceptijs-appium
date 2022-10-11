const server = require('./server/server.js')

exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:\\Users\\AngelicaLemosdeJesus\\Documents\\CursoCodeceptJS\\Aula13\\app-release.apk',
      desiredCapabilities: {
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity',
        deviceName: 'pixel2',
        platformVersion: '9'

      // ======  Execução via navegador Chrome ====== //
      //   platform: 'Android',
      //        desiredCapabilities: {
      //          deviceName: 'pixel2',
      //          platformVersion: '9',
      //          automationName: 'UiAutomator2',
      //          browserName: 'Chrome'
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {},
  bootstrap: async () => {
    await server.start();
  },
  teardown: async () => {
    await server.stop();
  },
 // bootstrap: [AsyncFunction, bootstrap],
 // timeout: null,
 // teardown: [AsyncFunction, teardown],
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'automation-codecept',
  tests: './steps/students_test.js',
}