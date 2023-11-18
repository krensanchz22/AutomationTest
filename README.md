# Cypress Automation Tests

Cypress test done for Student Registration Form on site https://demoqa.com/automation-practice-form, this test objective is to run on different browsers (chrome and firefox) and executed in different viewports, as well as be able to execute them in parallel per browser.

## Installation

You will need to install [cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) via npm. (this test are working with v.13.5.1)

```
npm install cypress --save-dev
```

## Additional you will need to install some plugins needed


```
npm install --save-dev cypress-file-upload

# to be able to run parallel tests
npm install cypress-parallel

# fake data generator
npm install @faker-js/faker --save-dev

# adding reporter
npm i --save-dev cypress-mochawesome-reporter
```

## Usage

Once you have the repo on your local and all plugins needed installed you can run test using the following:

##### To run an specfic test file
```
npx cypress run --spec path/to/file.spec.js
```
##### Running all tests via terminal
```
npm run cy:run
```
##### Running all tests headed
```
npm run cy:run-headed
```
##### Running all tests headed brewsers
```
* npm run cy:run:chrome-head
* npm run cy:run:firefox-head

```

##### To run tests in parallel
```
# running via console in parallel (default browser)
npm run cy:parallel

# running chrome headed in parallel
npm run cy:parallel-chrome

# running firefox headed in parallel
npm run cy:parallel-firefox

# No package installation needed
npx cy:parallel -s cy:run -t 2 -d <cypress-specs-folder> 
npx cy:parallel -s cy:run cy:run:chrome-head-t 2 -d <cypress-specs-folder> 
npx cy:parallel -s cy:run cy:run:firefox-head-t 2 -d <cypress-specs-folder> 

```