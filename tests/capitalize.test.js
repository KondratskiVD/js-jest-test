import { capitalize } from '../src/capitalize.js'
import { strict as assert } from 'assert'

assert.strictEqual(capitalize('hello'), 'Hello')
assert.strictEqual(capitalize(''), '')


console.log('Test done =)')