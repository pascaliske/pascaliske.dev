import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HeadlineH4Component } from './headline-h4.component'

describe('HeadlineH4Component', () => {
    let component: HeadlineH4Component
    let fixture: ComponentFixture<HeadlineH4Component>

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [HeadlineH4Component]
            }).compileComponents()
        })
    )

    beforeEach(() => {
        fixture = TestBed.createComponent(HeadlineH4Component)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
