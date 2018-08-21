import { CookieBannerModule } from './cookie-banner.module'

describe('CookieBannerModule', () => {
    let cookieBannerModule: CookieBannerModule

    beforeEach(() => {
        cookieBannerModule = new CookieBannerModule()
    })

    it('should create an instance', () => {
        expect(cookieBannerModule).toBeTruthy()
    })
})
