module.exports = {
    'adminPass': process.env.ADMIN_PASS || 'admin',
    'serverURL': `http://localhost:${process.env.PORT}/`,
    'serverDomain': 'localhost',
    'environment': 'development',
    'debug': true,
    'dbDebug': true,
    'defaultSettings': {}
};