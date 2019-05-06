const cypressConfig = require('../cypress.json');

module.exports = {
    runners: process.env.CI_NODE_TOTAL || 1,
    currentRunner: process.env.CI_NODE_INDEX || 1,
    baseUrl: process.env.CYPRESS_BASE_URL || cypressConfig.baseUrl,
    runName: process.env.CI_COMMIT_REF_NAME && process.env.CI_PIPELINE_ID && `${process.env.CI_COMMIT_REF_NAME}#${process.env.CI_PIPELINE_ID}`,
    fileBaseUrl: process.env.CI_JOB_URL && `${process.env.CI_JOB_URL}/artifacts/file/`,
};
