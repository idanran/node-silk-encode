# Node Silk Encode

[![npm](https://img.shields.io/npm/v/node-silk-encode?style=flat-square)](https://www.npmjs.com/package/node-silk-encode)

## API
```ts
function encode(input: string, output: string, samplingRate: string = '44100'): Promise<string>
```

input 和 output 为文件地址，samplingRate 为采样率。

## Build

```
yarn build
```
然后把编码器 (silk_codec-windows-static-x64.exe) 放入 lib 目录。

## Other
编码器来自 https://github.com/KasukuSakura/silk-codec/releases