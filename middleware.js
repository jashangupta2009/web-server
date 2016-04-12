module.exports = {
    requireAuthentication: function(req, res, next) {
        console.log('Private router hit!');
        next();
    },
    logger: function(req, res, next) {
        console.log('Request: ' + new Date().toString() + req.method + ' ' + req.originalUrl);
        next();
    }
};