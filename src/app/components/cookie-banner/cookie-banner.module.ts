import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { CookieBannerComponent } from './cookie-banner.component'

@NgModule({
    imports: [SharedModule],
    declarations: [CookieBannerComponent],
    exports: [CookieBannerComponent],
})
export class CookieBannerModule {}
