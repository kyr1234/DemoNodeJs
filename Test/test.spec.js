const { add } = require('./test')
const assert = require('assert')

try {
  console.log('SUCCESS')
   assert.strictEqual(add(1, 2), 2)
} catch (e) {
  console.log('FAIL')
  console.log(e)
}
