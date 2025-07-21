import { Injectable, inject } from '@angular/core'
import { Meta } from '@angular/platform-browser'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'
import type { ActivatedRouteSnapshot, Event } from '@angular/router'
import { filter } from 'rxjs/operators'
import { BrowserApiService } from 'shared/browser-api/browser-api.service'

export interface ActivatedRouteSnapshotWithMetadata extends ActivatedRouteSnapshot {
    data: {
        description: string
        image: string
    }
}

@Injectable()
export class MetadataService {
    private readonly meta: Meta = inject(Meta)

    private readonly router: Router = inject(Router)

    private readonly route: ActivatedRoute = inject(ActivatedRoute)

    private readonly browserApiService: BrowserApiService = inject(BrowserApiService)

    public constructor() {
        this.router.events
            .pipe(filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd))
            .subscribe(() => {
                const { title, data } = this.route.snapshot as ActivatedRouteSnapshotWithMetadata

                this.browserApiService.with('window', window => {
                    this.update(window.location.href, title ?? '', data.description, data.image)
                })
            })
    }

    public update(url: string, title: string, description: string, image: string): void {
        // title & description
        this.meta.updateTag({ name: 'title', content: title })
        this.meta.updateTag({ name: 'description', content: description })

        // open graph
        this.meta.updateTag({ property: 'og:type', content: 'website' })
        this.meta.updateTag({ property: 'og:url', content: url })
        this.meta.updateTag({ property: 'og:title', content: title })
        this.meta.updateTag({ property: 'og:description', content: description })
        this.meta.updateTag({ property: 'og:image', content: image })

        // twitter
        this.meta.updateTag({ property: 'twitter:card', content: 'summary_large_image' })
        this.meta.updateTag({ property: 'twitter:url', content: url })
        this.meta.updateTag({ property: 'twitter:title', content: title })
        this.meta.updateTag({ property: 'twitter:description', content: description })
        this.meta.updateTag({ property: 'twitter:image', content: image })
    }
}
