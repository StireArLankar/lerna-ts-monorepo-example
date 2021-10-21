# Инструкция по генерации `.ts` файлов из `.proto` файлов

Для генератора нужны зависимости:

- ts-proto - генератор тайпскрипта
- glob - библиотека для чтения файлов по шаблону
- download-cli - CLI для скачивания, которой будем скачивать `protoc` из репы
- @grpc/grpc-js - имплементации `grpc`-транспорта (при другом транспорте надо поменять его опциях генератора)

```bash
yarn add @grpc/grpc-js
yarn add -D ts-proto glob download-cli
```

Скрипт, которым будем вызывать `generate.ts` файл рядом с этим `README.md`

```bash
ts-node-dev -r tsconfig-paths/register --project ./tsconfig.proto.json --transpile-only ./generate.ts
```

`./tsconfig.proto.json` - Конфигурация `ts` для вызова `.ts` файла вместо `.js` (или могут не работать импорты)

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "target": "ES2017",
    "module": "CommonJS"
  }
}
```
