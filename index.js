module.exports = process.env.COVERAGE
? require(__dirname+'/lib-cov/index.js')
: require(__dirname+'/lib/index.js');