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
        runId: Config.testrailRunId,
        fileBaseUrl: Config.fileBaseUrl,
    });

    const currentRunnerSpecs = specsForRunner(specs, Config.runners, Config.currentRunner);

    console.log(process.env)

    if (currentRunnerSpecs.length) {
        for (const spec of currentRunnerSpecs) {
            // eslint-disable-next-line no-await-in-loop
            const { runs } = await cypress.run({
                config: {
                    ...cypressConfig,
                    baseUrl: Config.baseUrl,
                    trashAssetsBeforeRuns: false,
                },
                spec,
            });
            runs
                .forEach(run =>
                    run.tests.forEach(test =>
                        reporter.addTestResult(test, run)));
        }
    } else {
        console.warn('Nothing to run');
    }
});