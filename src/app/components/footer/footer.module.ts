import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FooterMetaModule } from '../footer-meta/footer-meta.module'

import { FooterComponent } from './footer.component'

@NgModule({
    imports: [CommonModule, FooterMetaModule],
    declarations: [FooterComponent],
    exports: [FooterComponent]
})
export class FooterModule {}
