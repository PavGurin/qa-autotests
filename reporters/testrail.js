const Mocha = require('mocha');
const axios = require('axios');

const titleToCaseId = testTitle => /\bT?C(\d+)\b/g.exec(testTitle)[1];

const buildComment = (test, run) => {
    const message = [];
    if (process.env.CI_JOB_URL) {
        const toGitlabURL = location => `${process.env.CI_JOB_URL}/artifacts/file/${encodeURI(location.match(/cypress.*/)[0])}`;

        if (run.video) message.push('Video:', toGitlabURL(run.video));
        if (run.screenshots.length) message.push('Screenshots:', run.screenshots.map(toGitlabURL).join('/n'));
    }
    if (test.error) message.push('Error:', test.error);
    if (test.stack) message.push('Stack trace:', test.stack);
    return message.join('\n');
};

class TestrailReporter {
    constructor(options) {
        this.projectId = options.projectId;
        this.runId = options.runId;

        this.instance = axios.create({
            baseURL: `https://${options.domain}/index.php?/api/v2`,
            headers: { 'Content-Type': 'application/json' },
            auth: {
                username: options.username,
                password: options.password,
            },
        });
    }

    async addTestResult(test, run) {
        const status_id = {
            passed: 1,
            failed: 5,
        }[test.state];

        const result = {
            case_id: titleToCaseId(test.title[0]),
            status_id,
            comment: buildComment(test, run),
            elapsed: test.wallClockDuration && `${test.wallClockDuration / 1000}s`,
        };

        const { data } = await this.instance.post(`/add_results_for_cases/${this.runId}`, {
            results: [result],
        });
        return data[0];
    }
}

module.exports = TestrailReporter;
