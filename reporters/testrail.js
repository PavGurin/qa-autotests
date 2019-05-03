const Mocha = require('mocha');
const axios = require('axios');

class TestrailReporter {
    constructor(runner, options) {
        options = options.reporterOptions;
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

        runner
            .on('pass', this.addResult.bind(this))
            .on('fail', this.addResult.bind(this));
    }

    addResult(test) {
        const status_id = {
            passed: 1,
            failed: 5,
        }[test.state];

        const result = {
            case_id: test.title,
            status_id,
            comment: test.err && `${test.err.message}\n${test.err.stack}`,
            elapsed: test.duration && `${test.duration / 1000}s`,
        };

        this.instance.post(`/add_results_for_cases/${this.runId}`, {
            results: [result],
        });
    }
}

module.exports = TestrailReporter;
