import { capitalize } from '../src/capitalize.js'

if (capitalize('hello') !== 'Hello') {
    throw new Error("Crash test")
}

if (capitalize('') !== '') {
    throw new Error("Crash test")
}

console.log('Test done =)')