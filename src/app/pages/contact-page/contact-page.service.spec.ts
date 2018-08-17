import { TestBed, inject } from '@angular/core/testing'

import { ContactPageService } from './contact-page.service'

describe('ContactPageService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ContactPageService],
        })
    })

    it('should be created', inject([ContactPageService], (service: ContactPageService) => {
        expect(service).toBeTruthy()
    }))
})
