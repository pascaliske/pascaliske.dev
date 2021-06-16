import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core'
import { takeWhile } from 'rxjs/operators'
import { NgcCookieConsentService } from 'ngx-cookieconsent'
import { environment } from '../../../environments/environment'
import { TrackingService } from '../../shared/tracking/tracking.service'

@Component({
    selector: 'cmp-cookie-banner',
    templateUrl: './cookie-banner.component.html',
    styleUrls: ['./cookie-banner.component.scss'],
})
export class CookieBannerComponent implements OnInit, OnDestroy {
    private alive: boolean = true

    public constructor(
        private readonly elementRef: ElementRef,
        private readonly cookieConsentService: NgcCookieConsentService,
        private readonly trackingService: TrackingService,
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

        this.cookieConsentService.statusChange$
            .pipe(takeWhile(() => this.alive))
            .subscribe(event => {
                this.trackingService.track('event', {
                    event_category: 'cookie-consent',
                    event_action: 'change',
                    value: event.status,
                })
            })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
