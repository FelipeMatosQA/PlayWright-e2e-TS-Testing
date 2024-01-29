## About the project

On this portfolio automation project, I have tested the application "https://www.saucedemo.com/", this application is a demo E-commerce website for automation tests. Was used Playwright with TypeScript to build e2e tests, for data management was used fixtures files
and fakerJs library. I also have used the design pattern "Page Objects" to have better maintenance and reusability of the code. The plugin "Allure Report" has been used to generate the execution artifact after each execution with all reference data of the last test execution.
For the execution of the suit test, was configured a pipeline multi browser execution using GitHub Actions, with a [PR] and [Push] as the trigger of the execution, deploying the report result on GitHub-Pages.

## Runing the project

If you want to experiment with running this project, you'll need to Clone it first.

To clone this project from Github, run these commands:

```bash
## Clone this repository to a local directory.
git clone https://github.com/FelipeMatosQA/PlayWright-e2e-TS-Testing.git
## Enter in the project folder
cd PlayWright-e2e-TS-Testing
## Install the node modules
npm install
## Install playwright globally
npm install -g playwright
## To run the tests visually use
npx playwright test --ui
## To run the tests in a headless inviroment use
npx playwright test
```

# Report, Pipeline execution and GitHub Pages Deploy

Was configured an execution pipeline using GitHub Actions, if you want to see the complete workflow you must navigate to the session "Actions" of this repository or click this link " https://github.com/FelipeMatosQA/PlayWright-e2e/actions ". You can see the pipeline workflow
in the image below:

![workflows](https://github.com/FelipeMatosQA/PlayWright-e2e-TS-Testing/assets/121990373/4000b290-bdb0-4d38-afb8-5c86fdc37980)

After each execution, the report artifact is deployed to GitHub Pages, and you just have to click at the appointed place to see the entire data of the execution on an HTML page. In the examples below you can see that all the tests have passed.
## GitHub Pages artifact deployment 
![githubpages](https://github.com/FelipeMatosQA/PlayWright-e2e/assets/121990373/b0c948de-1ff1-4242-94de-a2ecbd2e4bf7)

## Allure Report HTML layout

![allure](https://github.com/FelipeMatosQA/PlayWright-e2e/assets/121990373/305f7b9e-0246-482b-bb1a-ec3fb274503b)


