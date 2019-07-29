const Mocha = require('mocha');
const axios = require('axios');

// Map testrail status id to cypress test state
const getStatusId = (test) => {
    switch (test.state) {
        case 'passed': return 1;
        case 'failed': return 5;
        default: throw new Error();
    }
};

const titleToCaseId = testTitle => /\bT?C(\d+)\b/g.exec(testTitle)[1];

const buildComment = (test, run, fileBaseUrl) => {
    const toGitlabURL = location => `${fileBaseUrl}${encodeURI(location.match(/cypress.*/)[0])}`;

    const sections = [];
    const addSection = (title, message) => sections.push(`##${title}:\n${message}\n`);

    // if (run.video) addSection('Video', toGitlabURL(run.video));
    if (run.screenshots && run.screenshots.length) addSection('Screenshots', run.screenshots.map(screenshot => toGitlabURL(screenshot.path)).join('\n'));
    if (test.error) addSection('Error', test.error);

    return sections.join('*******\n');
};

class TestrailReporter {
    constructor(options) {
        this.projectId = options.projectId;
        this.runId = options.runId;
        this.fileBaseUrl = options.fileBaseUrl;

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
        const result = {
            status_id: getStatusId(test),
            case_id: titleToCaseId(test.title[test.title.length - 1]),
            comment: buildComment(test, run, this.fileBaseUrl),
            elapsed: test.wallClockDuration && `${test.wallClockDuration / 1000}s`,
        };

        const { data } = await this.instance.post(`/add_results_for_cases/${this.runId}`, {
            results: [result],
        });
        return data[0];
    }
}

module.exports = TestrailReporter;
