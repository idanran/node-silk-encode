# Node Silk Encode

## API
```ts
function encode(input: string, output: string): Promise<number>
```

input 和 output 为文件地址，返回值为音频时长。

input 要求：PCM 44100Hz

## Build

```
yarn build
```
然后把编码器 (silk_codec-windows-static-x64.exe) 放入 lib 目录。

## Other
编码器来自 https://github.com/KasukuSakura/silk-codec/releases