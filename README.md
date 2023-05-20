# qa-challenge
## Automation Web UI framework
### Requirements
* Nodejs + npm  
https://nodejs.org/en/download
* Allure  
https://docs.qameta.io/allure/#_get_started  
    * Install on Windows:  
    ```
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    irm get.scoop.sh | iex
    scoop install allure
    ```
    * Linux:  
    ```
    sudo apt
    add repository ppa:qameta/allure
    sudo apt get update
    sudo apt get install allure
    ```
    * Mac:
    ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    brew install allure
    ```
### Tools
* WebDriverIO v8
* Typescript
* Cucumber
* Allure report

### How to run
```
git clone https://github.com/jccolina/qa-challenge.git
```
```
npm install
```
```
npm start
```

### Folder structure
* test > features: to store .feature files with tests written in gherkin.
* test > step-definitions: classes to implement the bdd steps from .feature files.
* test > page-objects: object classes containing locators and related methods.
* resources > chrome-extensions: storing the chrome extension to block advertisements.
* resources > data-test: stores data to use on test scripts, currently storing user credentials template
* utils > storing class to generate random numbers

### Framework Notes
* Since there are random advertisements during navigation blocking the whole screen and some times overlapping some web elements the uBlock chrome extension is added before start execution to avoid flaky tests. This is stored in ``resources/chrome-extensions`` folder and loaded in ``wdio.conf.ts`` file.
* `this` object from cucumber is being used to share data between step definitions in different files.
* In order to start the browser in whole resolution maximize browser is configured in chrome options on wdio config file.
* Login step is automatically generating a random email and password to create a new user on every execution

### Reports
* To see html report go to root project and run: `allure serve allure-results`
* Allure is configured to take screenshot on failure.
* Also console report is enable in a way that test results are logged on console.