import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FooterMetaModule } from './footer-meta/footer-meta.module'
import { ToTopButtonModule } from './to-top-button/to-top-button.module'
import { FooterComponent } from './footer.component'

@NgModule({
    imports: [CommonModule, FooterMetaModule, ToTopButtonModule],
    declarations: [FooterComponent],
    exports: [FooterComponent],
})
export class FooterModule {}
