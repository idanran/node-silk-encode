import { spawn } from 'child_process'
import { join } from 'path'
import { access, constants } from 'fs'

export function encode(input: string, output: string, samplingRate: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const args = ['-i', input, '-s', samplingRate, '-o', output]
        const child = spawn(join(__dirname, './cli.exe'), args)
        child.on('exit', () => {
            access(output, constants.F_OK, (err) => {
                if (err) {
                    reject('音频转码失败')
                }
            })
            resolve()
        })
    })
}