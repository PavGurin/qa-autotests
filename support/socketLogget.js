Cypress.on('window:load', (window) => {
    const decorateSocket = (socketClient) => {
        const send = socketClient.send.bind(socketClient);
        socketClient.__proto__.send = function (type, data) {
            const renderProps = indicator => () => ({
                indicator,
                message: type,
            });

            const logger = Cypress.log({
                name: 'xhr',
                displayName: 'socket',
                message: '',
                event: true,
                type: 'parent',
                renderProps: renderProps('pending'),
            });

            const request = send(type, data);
            logger.snapshot('request');
            request
                .then((response) => {
                    logger.set('state', 'passed');
                    logger.set('consoleProps', () => ({ request: { type, data }, response }));
                    logger.set('renderProps', renderProps('successful'));
                })
                .catch((error) => {
                    logger.set('state', 'failed');
                    logger.set('consoleProps', () => ({ request: { type, data }, error }));
                    logger.set('renderProps', renderProps('aborted'));
                })
                .finally(() => {
                    logger.snapshot('response').end();
                });
            return request;
        };
    };

    if (window.socket) {
        decorateSocket(window.socket);
    } else {
        Object.defineProperty(window, 'socket', {
            set: decorateSocket,
        });
    }
});
