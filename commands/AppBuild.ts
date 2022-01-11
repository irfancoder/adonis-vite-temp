import { BaseCommand } from '@adonisjs/core/build/standalone'
import fs from 'fs-extra'
import path from 'path'
import execaUtils from '../app/Utils/execaUtils'

export default class AppBuild extends BaseCommand {
  public static commandName = 'app:build'

  public static description = 'Unified Adonis & Vite build'

  public static settings = {
    loadApp: false,
    stayAlive: false,
  }

  public async run() {
    const targetDir = path.resolve('./public/build')
    // const [devEnv, prodEnv] = [path.resolve('./.env'), path.resolve('./build/.env')]
    // const [devEnv, prodEnv] = ['.env', 'build/public/.env']
    await fs.remove(targetDir)

    await execaUtils.execute('npm', ['run', 'build:vite'])
    await execaUtils.execute('npm', ['run', 'build:adonis'])
    // await this.replaceEnv(devEnv, prodEnv, 'development', 'production')
  }

  //   private async replaceEnv(inputFile: string, outputFile: string, from: string, to: string) {
  //     fs.createReadStream(inputFile)
  //       .on('error', function (err, fd) {
  //         console.log(
  //           "createReadStream - Error - Can't read from .sample-env file, please create a sample env file with the name '.sample-env'"
  //         )
  //       })
  //       .pipe(fs.createWriteStream(outputFile, { flags: 'wx' }))
  //       .on('error', function (err, fd) {
  //         console.log('createWriteStream - Error - %s', err.code)
  //       })
  //       .on('finish', function () {
  //         console.log('.ENV file copied from sample')
  //       })

  //     //     fs.readFile(inputFile, 'utf8', (error, data) => {
  //     //     if (error) console.log(error)
  //     //     let result: string = data.replace(from, to)

  //     //     fs.writeFile(outputFile, result, 'utf8', (error) => {
  //     //       if (error) return console.log(error)
  //     //     })
  //     //   })
  //   }
}
