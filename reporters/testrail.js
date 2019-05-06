const Mocha = require('mocha');
const axios = require('axios');

const getStatusId = testState => ({
    passed: 1,
    failed: 5,
}[testState]);

const titleToCaseId = testTitle => /\bT?C(\d+)\b/g.exec(testTitle)[1];

const buildComment = (test, run, fileBaseUrl) => {
    const toGitlabURL = location => `${fileBaseUrl}${encodeURI(location.match(/cypress.*/)[0])}`;

    const sections = [];
    const addSection = (title, message) => sections.push(`##${title}:\n${message}\n`);

    if (run.video) addSection('Video', toGitlabURL(run.video));
    if (run.screenshots.length) addSection('Screenshots', run.screenshots.map(screenshot => toGitlabURL(screenshot.path)).join('\n'));
    if (test.error) addSection('Error', test.error);

    return sections.join('*******\n');
};

class TestrailReporter {
    constructor(options) {
        this.projectId = options.projectId;
        this.runName = options.runName;
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

    async createRun() {
        await this.getRunId();
        if (this.runId) return;
        const { data } = await this.instance.post(`/add_run/${this.projectId}`, {
            name: this.runName,
            include_all: true,
        });
        this.runId = data.id;
    }

    async getRunId() {
        // sry, idk how to await for run creation with paralelized jobs
        const { data } = await this.instance.get(`/get_runs/${this.projectId}`, {
            params: {
                is_completed: 0,
            },
        });
        const run = data.find(r => r.name === this.runName);
        if (run) this.runId = run.id;
    }

    async addTestResult(test, run) {
        const result = {
            status_id: getStatusId(test.state),
            case_id: titleToCaseId(test.title[0]),
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
