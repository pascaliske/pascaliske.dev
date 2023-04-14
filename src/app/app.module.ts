import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgProgressModule } from 'ngx-progressbar'
import { NgProgressHttpModule } from 'ngx-progressbar/http'
import { NgProgressRouterModule } from 'ngx-progressbar/router'
import { AppRoutingModule } from './app-routing.module'
import { NavigationComponent } from 'components/navigation/navigation.component'
import { FooterComponent } from 'components/footer/footer.component'
import { TriangleComponent } from 'components/triangle/triangle.component'
import { AppComponent } from './app.component'

@NgModule({
    imports: [
        BrowserModule.withServerTransition({ appId: 'pascaliske-dev' }),
        BrowserAnimationsModule,
        AppRoutingModule,
        NgProgressModule.withConfig({ color: '#ff6666', fixed: true }),
        NgProgressHttpModule,
        NgProgressRouterModule,
        NavigationComponent,
        FooterComponent,
        TriangleComponent,
    ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
