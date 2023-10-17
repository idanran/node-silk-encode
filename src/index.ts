import { spawn } from 'child_process'
import { join } from 'path'
import { access, constants, chmod } from 'fs'
import { platform } from 'os'

export function encode(input: string, output: string, samplingRate: string): Promise<void> {
    return new Promise((resolve, reject) => {
        let bin = join(__dirname, './cli.exe')
        if (platform() === 'linux') {
            bin = join(__dirname, './cli')
            access(bin, constants.X_OK | constants.R_OK, (err) => {
                if (err) {
                    chmod(bin, 0o755, (err) => {
                        if (err) {
                            reject('音频转码失败, code: -3')
                        }
                    })
                }
            })
        }
        const args = ['-i', input, '-s', samplingRate, '-o', output]
        const child = spawn(bin, args)
        child.on('error', () => {
            reject('音频转码失败, code: -2')
        })
        child.on('exit', () => {
            access(output, constants.F_OK, (err) => {
                if (err) {
                    reject('音频转码失败, code: -1')
                }
            })
            resolve()
        })
    })
}