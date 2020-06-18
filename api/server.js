// importing a json file is causing HMR to stop after first refresh
// make sure to start up nuxt with this line in place to see the problem
// or start it up without to see HMR behave
const eesh = require('../eesh.json');

// change this log to check if HMR is working correctly
console.log('check 1');

export default {
  handler(req, res) {
    res.write('Hello middleware!')
    res.end()
  },
  path: '/test'
}