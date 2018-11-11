import 'reflect-metadata'
import 'zone.js/dist/zone-node'
import chalk from 'chalk'
import { enableProdMode } from '@angular/core'
import { renderModuleFactory } from '@angular/platform-server'
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader'
import { join, dirname } from 'path'
import { readFile, ensureDir, writeFile } from 'fs-extra'
import { routes } from './app/app-routing.module'

enableProdMode()

async function prerender(): Promise<void> {
    const dist = file => join(process.cwd(), 'dist', 'app', file)
    const paths = routes.map(route => route.path)
    const index = (await readFile(dist('index.html'), 'utf8')).toString()

    // tslint:disable-next-line
    const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../dist/server/main')

    for (const path of paths) {
        if (!path.includes('*')) {
            const file = dist(`${path || 'index'}.html`)
            const rendered = await renderModuleFactory(AppServerModuleNgFactory, {
                url: path,
                document: index,
                extraProviders: [provideModuleMap(LAZY_MODULE_MAP)],
            })

            await ensureDir(dirname(file))
            await writeFile(file, rendered)

            console.log(`    rendered ${chalk.cyan('/' + path)} -> ${chalk.cyan(file)}`)
        }
    }
}

prerender()
    .then(() => {
        console.log('==> done')
    })
    .catch(error => {
        console.log(error)
        process.exit(1)
    })
