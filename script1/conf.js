// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['scrumdo-registration.js'],
  capabilities: {
    browserName: 'firefox'
  }
}