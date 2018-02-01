import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HeadlineH1Component } from './headline-h1.component'

describe('HeadlineH1Component', () => {
    let component: HeadlineH1Component
    let fixture: ComponentFixture<HeadlineH1Component>

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [HeadlineH1Component]
            }).compileComponents()
        })
    )

    beforeEach(() => {
        fixture = TestBed.createComponent(HeadlineH1Component)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
