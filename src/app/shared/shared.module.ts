import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotificationsModule } from '@pascaliske/ngx-notifications'
import { MarkdownModule } from 'ngx-markdown'

@NgModule({
    imports: [CommonModule, NotificationsModule, MarkdownModule],
    exports: [CommonModule, NotificationsModule, MarkdownModule],
})
export class SharedModule {}
