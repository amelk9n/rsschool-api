process.env.NODE_PORT = 3009;
process.env.NODE_ENV = 'test';

jest.mock('bunyan', () => {
    const logger = {
        child() {
            return logger;
        },
        info() {},
        warn() {},
        error() {},
    };
    return {
        createLogger: () => {
            return logger;
        },
    };
});
