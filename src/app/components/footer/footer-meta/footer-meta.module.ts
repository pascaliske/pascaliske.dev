import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../../../shared/shared.module'
import { LinkModule } from '../../link/link.module'
import { FooterMetaComponent } from './footer-meta.component'

@NgModule({
    imports: [RouterModule, SharedModule, LinkModule],
    declarations: [FooterMetaComponent],
    exports: [FooterMetaComponent],
})
export class FooterMetaModule {}
