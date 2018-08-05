import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HeadlineH6Component } from './headline-h6.component'

describe('HeadlineH6Component', () => {
    let component: HeadlineH6Component
    let fixture: ComponentFixture<HeadlineH6Component>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeadlineH6Component],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(HeadlineH6Component)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
