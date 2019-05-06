const cypress = require('cypress');
const recursive = require('recursive-readdir');
const fs = require('fs');
const TestrailReporter = require('./reporters/testrail.js');
const cypressConfig = require('../cypress.json');

const specsForRunner = (specs, runners, currentRunner) => {
    const specsInRunner = Math.ceil(specs.length / runners);

    const to = specsInRunner * currentRunner;
    const from = to - specsInRunner;

    return specs.slice(from, to);
};

recursive('cypress/integration', async (err, specs) => {
    const runners = process.env.CI_NODE_TOTAL || 1;
    const currentRunner = process.env.CI_NODE_INDEX || 1;
    const baseUrl = process.env.CYPRESS_BASE_URL || cypressConfig.baseUrl;
    const runName = `${process.env.CI_COMMIT_REF_NAME}#${process.env.CI_PIPELINE_ID}`;

    const reporter = new TestrailReporter({
        domain: '1win.testrail.io',
        username: 'niki4@1win.pro',
        password: 'sntFAzot0AaT4m54nJgw-RqFWK7K0fwEB4PjbURfC',
        projectId: 5,
        runName,
        fileBaseUrl: `${process.env.CI_JOB_URL}/artifacts/file/`,
    });


    const currentRunnerSpecs = specsForRunner(specs, runners, currentRunner);

    if (!currentRunnerSpecs.length) {
        console.log('Nothing to run');
        return;
    }

    if (+currentRunner === 1) {
        await reporter.createRun();
    } else {
        await reporter.getRunId();
    }

    currentRunnerSpecs.map(async (spec) => {
        const { runs } = await cypress.run({
            config: { ...cypressConfig, baseUrl },
            spec,
        });

        runs[0].tests.forEach(test => reporter.addTestResult(test, runs[0]));
    });
});
