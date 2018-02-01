import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HeadlineH3Component } from './headline-h3.component'

describe('HeadlineH3Component', () => {
    let component: HeadlineH3Component
    let fixture: ComponentFixture<HeadlineH3Component>

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [HeadlineH3Component]
            }).compileComponents()
        })
    )

    beforeEach(() => {
        fixture = TestBed.createComponent(HeadlineH3Component)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
