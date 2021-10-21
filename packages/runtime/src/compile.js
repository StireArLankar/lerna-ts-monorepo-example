// import { compile, compileFromFile } from 'json-schema-to-typescript';
// import fs from 'fs';
// import schema from './example.json';
// const fs = require('fs')

const a = require('json-schema-to-typescript')

// const { compile, compileFromFile } = a
const { compile } = a
const json = require('./example.json')
// compile from file
// compileFromFile('./example.json').then((ts) =>
//   fs.writeFileSync('foo.d.ts', ts)
// );

// or, compile a JS object

const MyObject = json.definitions.MyObject

const definitions = json.definitions
delete definitions.MyObject

const temp = {
  ...json,
  definitions,
  ...MyObject,
}

delete temp.$ref

console.log(temp)

compile(temp, 'TestObject', {
  $refOptions: { continueOnError: true },
  cwd: process.cwd(),
})
  .then((ts) => console.log(ts))
  .catch((e) => console.error(e))
