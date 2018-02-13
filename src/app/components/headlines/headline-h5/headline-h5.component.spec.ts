import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HeadlineH5Component } from './headline-h5.component'

describe('HeadlineH5Component', () => {
    let component: HeadlineH5Component
    let fixture: ComponentFixture<HeadlineH5Component>

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [HeadlineH5Component]
            }).compileComponents()
        })
    )

    beforeEach(() => {
        fixture = TestBed.createComponent(HeadlineH5Component)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
