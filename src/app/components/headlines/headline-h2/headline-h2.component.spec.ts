import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HeadlineH2Component } from './headline-h2.component'

describe('HeadlineH2Component', () => {
    let component: HeadlineH2Component
    let fixture: ComponentFixture<HeadlineH2Component>

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [HeadlineH2Component]
            }).compileComponents()
        })
    )

    beforeEach(() => {
        fixture = TestBed.createComponent(HeadlineH2Component)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
