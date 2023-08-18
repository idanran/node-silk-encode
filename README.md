# Node-silk-encode

## API
```ts
function encode(input: string, output: string): Promise<number>
```

input 和 output 为文件地址，返回值为音频时长。

## Build py binding
```
pip install pipenv

cd py
pipenv install
pipenv shell

pip install pilk
pip install pyinstaller

pyinstaller -F cli.py
```