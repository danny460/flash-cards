var config = {
    development: {
        'adminPass': '1234',
        'serverURL': 'http://localhost:8091/',
        'serverDomain': 'localhost',
        'debug': true,
        'dbDebug': true,
        'defaultSettings': {}
    },
    production: {
        'adminPass': process.env.ADMIN_PASS || 'admin',
        'serverURL': `http://localhost:${process.env.PORT}/`,
        'serverDomain': 'localhost',
        'debug': false,
        'dbDebug': false,
        'defaultSettings': {}
    }
}

if(process.env.NODE_ENV === 'production')
    module.exports = config.production;
else
    module.exports = config.development;