import { spawn } from 'child_process'
import { join } from 'path'

export function encode(input: string, output: string, samplingRate: string = '44100'): Promise<string> {
    return new Promise((resolve, reject) => {
        const args = ['pts', '-i', input, '-s', samplingRate, '-o', output]
        const child = spawn(join(__dirname, './silk_codec-windows-static-x64.exe'), args)
        let data = ''
        child.stderr.on('data', chunk => data += chunk.toString())
        child.on('exit', () => {
            const regex = /Silk simple rate: (\d+)/
            const match = data.match(regex)
            if (match) {
                resolve(match[0])
            } else {
                reject()
            }
        })
    })
}