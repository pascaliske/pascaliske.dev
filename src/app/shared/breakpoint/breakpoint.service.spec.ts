import { TestBed, inject } from '@angular/core/testing'

import { BreakpointService } from './breakpoint.service'

describe('BreakpointService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BreakpointService],
        })
    })

    it(
        'should be created',
        inject([BreakpointService], (service: BreakpointService) => {
            expect(service).toBeTruthy()
        }),
    )
})
