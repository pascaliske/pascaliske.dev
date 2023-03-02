import { Component, OnInit, ElementRef } from '@angular/core'
import { NgcCookieConsentService } from 'ngx-cookieconsent'
import { environment } from '../../../environments/environment'

@Component({
    selector: 'cmp-cookie-banner',
    templateUrl: './cookie-banner.component.html',
    styleUrls: ['./cookie-banner.component.scss'],
})
export class CookieBannerComponent implements OnInit {
    public constructor(
        private readonly elementRef: ElementRef,
        private readonly cookieConsentService: NgcCookieConsentService,
    ) {}

    public ngOnInit(): void {
        this.cookieConsentService.init({
            type: 'opt-in',
            theme: 'edgeless',
            position: 'bottom',
            container: this.elementRef.nativeElement,
            revokeBtn: '<div class="cc-revoke cc-policy {{classes}}">Cookie Settings</div>',
            animateRevokable: false,
            cookie: {
                name: 'pascaliske.dev',
                domain: environment.cookieDomain,
            },
            palette: {
                popup: {
                    background: '#2d333d',
                    text: '#ffffff',
                    link: '#ffffff',
                },
                button: {
                    background: '#eaeaea',
                    text: '#2d333d',
                    border: 'transparent',
                },
            },
            content: {
                header: 'Cookies',
                message: 'This website uses cookies.',
                dismiss: 'Dismiss',
                allow: 'Allow',
                deny: 'Deny',
                link: 'https://pascaliske.dev/en/privacy',
            },
        })
    }
}
