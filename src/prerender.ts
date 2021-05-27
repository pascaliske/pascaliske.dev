// tslint:disable:no-var-requires
import 'reflect-metadata'
import 'zone.js/node'
import { enableProdMode } from '@angular/core'
import { renderModuleFactory } from '@angular/platform-server'
import { create } from '@pascaliske/ngx-prerenderer'

enableProdMode()

const { routes } = require('./app/app-routing.module')
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../dist/server/main')
const prerender = create(renderModuleFactory, null)

prerender(routes, AppServerModuleNgFactory, LAZY_MODULE_MAP).catch(error => {
    console.log(error)
    process.exit(1)
})
