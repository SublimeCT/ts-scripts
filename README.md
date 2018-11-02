# ts-scripts
TypeScript library

## install

```bash
# install typescript & ts-node
➜  ts-scripts git:(master) ✗ yarn global add typescript ts-node
➜  ts-scripts git:(master) ✗ yarn
# set entry file permission
➜  ts-scripts git:(master) ✗ sudo chmod 744 sven.ts
➜  ts-scripts git:(master) ✗ yarn link
# or execute tsc to build command
➜  ts-scripts git:(master) ✗ ts-node sven
```

## usage
```bash
➜  ts-scripts git:(master) ✗ sven -h
```

## OCR
- create `./config.ts` to support OCR option
- [baidu OCR document](http://ai.baidu.com/docs#/OCR-Node-SDK/top)
- create `./scripts/ocr/sdk.d.ts`, and append to `tsconfig.json` => `include`