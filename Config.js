const cypressConfig = require('../cypress.json');

module.exports = {
    runners: process.env.CI_NODE_TOTAL || 1,
    currentRunner: process.env.CI_NODE_INDEX || 1,
    runName: process.env.CI_COMMIT_REF_NAME && process.env.CI_PIPELINE_ID && `${process.env.CI_COMMIT_REF_NAME}#${process.env.CI_PIPELINE_ID}`,
    fileBaseUrl: process.env.CI_JOB_URL && `${process.env.CI_JOB_URL}/artifacts/file/`,
    baseUrl: process.env.CYPRESS_BASE_URL || cypressConfig.baseUrl,
    testrailProjectId: process.env.CYPRESS_TESTRAIL_PROJECT_ID,
    testrailPassword: process.env.CYPRESS_TESTRAIL_PASSWORD,
    testrailUsername: process.env.CYPRESS_TESTRAIL_USER,
};
