# Node Silk Encode

[![npm](https://img.shields.io/npm/v/node-silk-encode?style=flat-square)](https://www.npmjs.com/package/node-silk-encode)

## API
```ts
function encode(input: string, output: string, samplingRate: string): Promise<void>
```

input 和 output 为文件地址，samplingRate 为采样率。

## Build

```
yarn build
```
然后把编码器 (cli.exe) 放入 lib 目录。

## Build cli
```
cd rs
cargo build --release
cross build --target x86_64-unknown-linux-musl
```

