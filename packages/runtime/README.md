# Template for running NodeJS scripts with typescript

## Install deps
```bash
yarn
```

## Update / add scripts
```json5
{
  ...
  "scripts": {
    "start": "esrun src/foo.ts --option=bar --verbose -S",
    // example: "esrun [entry file] [...options]"
    "another": "esrun src/entry.ts --option=baz"
  },
  ...
}
```

## Run script
```bash
yarn another
```

## Run script with additional parameters
```bash
yarn another --option=foo
```
