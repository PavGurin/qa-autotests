const cypress = require('cypress');
const recursive = require('recursive-readdir');
const TestrailReporter = require('./reporters/testrail.js');

const cypressConfig = require('../cypress.json');
const Config = require('./Config');

const specsForRunner = (specs, runners, currentRunner) => {
    const specsInRunner = Math.ceil(specs.length / runners);

    const to = specsInRunner * currentRunner;
    const from = to - specsInRunner;

    return specs.slice(from, to);
};

recursive('cypress/integration', async (err, specs) => {
    const reporter = new TestrailReporter({
        domain: '1win.testrail.io',
        username: Config.testrailUsername,
        password: Config.testrailPassword,
        projectId: Config.testrailProjectId,
        runName: Config.runName,
        fileBaseUrl: Config.fileBaseUrl,
    });


    const currentRunnerSpecs = specsForRunner(specs, Config.runners, Config.currentRunner);

    if (!currentRunnerSpecs.length) {
        console.log('Nothing to run');
        return;
    }

    if (+Config.currentRunner === 1) {
        await reporter.createRun();
    } else {
        const runIdRequest = async () => {
            await new Promise(res => setTimeout(res, 10000));
            try {
                await reporter.getRunId();
            } catch (e) {
                await runIdRequest();
            }
        };
    }

    currentRunnerSpecs.map(async (spec) => {
        const { runs } = await cypress.run({
            config: { ...cypressConfig, baseUrl: Config.baseUrl },
            spec,
        });

        runs[0].tests.forEach(test => reporter.addTestResult(test, runs[0]));
    });
});
