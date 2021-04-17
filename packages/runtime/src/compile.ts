import { compile } from 'json-schema-to-typescript';
import json from './example.json';
import fs from 'fs';

global.__dirname = process.cwd();
global.__filename = __dirname;

console.log({ __dirname, __filename });

const initial = JSON.parse(JSON.stringify(json));

const MyObject = json.definitions.MyObject;

const definitions = json.definitions;
//@ts-ignore
delete definitions.MyObject;

const temp = {
  ...json,
  definitions,
  ...MyObject,
};
//@ts-ignore
delete temp.$ref;

delete initial.$ref;

//@ts-ignore
compile(temp, 'zxc', {
  $refOptions: { continueOnError: true },
  cwd: process.cwd(),
  bannerComment: '',
})
  .then((ts) => {
    fs.writeFileSync('./src/result.ts', ts);
  })
  .catch((e) => console.error(e));
