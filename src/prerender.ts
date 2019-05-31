import 'reflect-metadata'
import 'zone.js/dist/zone-node'
import { enableProdMode } from '@angular/core'
import { renderModuleFactory } from '@angular/platform-server'
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader'
import { create } from '@pascaliske/ngx-prerenderer'

enableProdMode()

// tslint:disable-next-line
const { routes } = require('./app/app-routing.module')
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../dist/server/main')
const prerender = create(renderModuleFactory, provideModuleMap)

prerender(routes, AppServerModuleNgFactory, LAZY_MODULE_MAP).catch(error => {
    console.log(error)
    process.exit(1)
})
