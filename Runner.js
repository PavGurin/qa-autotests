const cypress = require('cypress');
const recursive = require('recursive-readdir');
const cypressConfig = require('../cypress.json');

const specsForRunner = (specs, runners, currentRunner) => {
    const specsInRunner = Math.round(specs.length / runners);

    const to = specsInRunner * currentRunner;
    const from = to - specsInRunner;

    return specs.slice(from, to);
};

recursive('cypress/integration', (err, specs) => {
    const runners = process.env.CI_NODE_TOTAL || 1;
    const currentRunner = process.env.CI_NODE_INDEX || 1;

    const currentRunnerSpecs = specsForRunner(specs, runners, currentRunner);

    if (!currentRunnerSpecs.length) {
        console.log('Nothing to run');
        return;
    }

    cypress.run({
        config: {
            ...cypressConfig,
            baseURL: process.env.CYPRESS_BASE_URL,
        },
        spec: currentRunnerSpecs.join(','),
        reporter: 'cypress/reporters/testrail.js',
        reporterOptions: {
            domain: '1win.testrail.io',
            username: 'niki4@1win.pro',
            password: 'sntFAzot0AaT4m54nJgw-RqFWK7K0fwEB4PjbURfC',
            projectId: 5,
            runId: 252,
        },
    });
});
