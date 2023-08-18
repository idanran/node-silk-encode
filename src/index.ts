import { spawn } from 'child_process'
import { join } from 'path'

export function encode(input: string, output: string): Promise<number> {
    return new Promise((resolve, reject) => {
        const child = spawn(join(__dirname, './cli.exe'), [input, output])
        child.stdout.on('data', (data: Buffer) => {
            const text = data.toString()
            const regex = /duration:\s+(\d+)/
            const match = text.match(regex)
            if (!match) {
                reject('Silk: 未知异常')
            } else {
                resolve(+match[1])
            }
        })
    })
}