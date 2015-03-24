// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['scrumdo-login.js'],
  capabilities: {
    browserName: 'firefox'
  }
}