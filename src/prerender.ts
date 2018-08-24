import 'reflect-metadata'
import 'zone.js/dist/zone-node'
import * as express from 'express'
import * as compression from 'compression'
import chalk from 'chalk'
import { launch } from 'puppeteer'
import { Server } from 'http'
import { join, dirname } from 'path'
import { readFile, ensureDir, writeFile } from 'fs-extra'
import { routes } from './app/app-routing.module'

const port = process.env.PORT || 9000
const host = `http://localhost:${port}`

async function prerender(): Promise<void> {
    const app = express()
    const paths = routes.map(route => route.path)
    const dist = join(process.cwd(), 'dist', 'app')
    const index = (await readFile(join(dist, 'index.html'), 'utf8')).toString()

    app.use(compression())
    app.get('*.*', express.static(join(dist)))
    app.get('*', (req, res) => {
        res.header('X-Request-Path', req.path)
        res.send(index)
    })

    const server = await new Promise<Server>((resolve, reject) => {
        const self = app.listen(port, error => {
            if (error) {
                reject(error)
            }
            resolve(self)
        })
    })

    console.log(`==> server started at ${chalk.cyan(host)}`)

    const browser = await launch({ args: ['--no-sandbox'] })
    const page = await browser.newPage()

    for (const path of paths) {
        if (!path.includes('*')) {
            await page.goto(`${host}/${path}`, {
                waitUntil: 'domcontentloaded',
            })

            const file = join(dist, `${path || 'index'}.html`)
            const rendered = await page.content()

            await ensureDir(dirname(file))
            await writeFile(file, rendered)

            console.log(`    rendered ${chalk.cyan('/' + path)} -> ${chalk.cyan(file)}`)
        }
    }

    browser.close()
    server.close()
}

prerender()
    .then(() => {
        console.log('==> done')
    })
    .catch(error => {
        console.log(error)
        process.exit(1)
    })
