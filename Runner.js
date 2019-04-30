const cypress = require('cypress');
const recursive = require('recursive-readdir');
const cypressConfig = require('../cypress.json');

recursive('cypress/integration', (err, specs) => {
    const totalRunners = process.env.CI_NODE_TOTAL || 1;
    const runner = process.env.CI_NODE_INDEX || 1;

    const specToRunner = Math.round(specs.length / totalRunners);
    const currentRunnerSpecs = specs.slice(specToRunner * (runner - 1), specToRunner * runner);

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
    });
});
