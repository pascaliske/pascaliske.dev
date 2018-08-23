import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { takeWhile, switchMap } from 'rxjs/operators'
import { NgcCookieConsentService } from 'ngx-cookieconsent'
import { environment } from '../../../environments/environment'
import { TrackingService } from '../../shared/tracking/tracking.service'
import { LanguageService } from '../../shared/language/language.service'

@Component({
    selector: 'cmp-cookie-banner',
    templateUrl: './cookie-banner.component.html',
    styleUrls: ['./cookie-banner.component.scss'],
})
export class CookieBannerComponent implements OnInit, OnDestroy {
    private alive: boolean = true

    public constructor(
        private elementRef: ElementRef,
        private translateService: TranslateService,
        private cookieConsentService: NgcCookieConsentService,
        private trackingService: TrackingService,
        private languageService: LanguageService,
    ) {}

    public ngOnInit(): void {
        this.cookieConsentService.init({
            type: 'opt-in',
            theme: 'edgeless',
            position: 'bottom',
            container: this.elementRef.nativeElement,
            revokeBtn: '<div class="cc-revoke cc-policy {{classes}}">Cookie Policy</div>',
            animateRevokable: false,
            cookie: {
                name: 'pascal-iske.de',
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
        })

        this.languageService.language$
            .pipe(
                takeWhile(() => this.alive),
                switchMap(() => {
                    return this.translateService.get([
                        'COOKIE_CONSENT_REVOKE_BUTTON',
                        'COOKIE_CONSENT_BANNER_HEADER',
                        'COOKIE_CONSENT_BANNER_MESSAGE',
                        'COOKIE_CONSENT_BANNER_DISMISS',
                        'COOKIE_CONSENT_BANNER_ALLOW',
                        'COOKIE_CONSENT_BANNER_DENY',
                        'COOKIE_CONSENT_BANNER_LINK',
                    ])
                }),
            )
            .subscribe(data => {
                const config = this.cookieConsentService.getConfig()
                const revoke = data['COOKIE_CONSENT_REVOKE_BUTTON']

                config.revokeBtn = `<div class="cc-revoke cc-policy {{classes}}">${revoke}</div>`
                config.content = {
                    header: data['COOKIE_CONSENT_BANNER_HEADER'],
                    message: data['COOKIE_CONSENT_BANNER_MESSAGE'],
                    dismiss: data['COOKIE_CONSENT_BANNER_DISMISS'],
                    allow: data['COOKIE_CONSENT_BANNER_ALLOW'],
                    deny: data['COOKIE_CONSENT_BANNER_DENY'],
                    link: data['COOKIE_CONSENT_BANNER_LINK'],
                }

                this.cookieConsentService.destroy()
                this.cookieConsentService.init(config)
            })

        this.cookieConsentService.statusChange$
            .pipe(takeWhile(() => this.alive))
            .subscribe(event => {
                this.trackingService.track('event', {
                    eventCategory: 'cookie-consent',
                    eventAction: 'change',
                    eventValue: event.status,
                })
            })
    }

    public ngOnDestroy(): void {
        this.alive = false
    }
}
