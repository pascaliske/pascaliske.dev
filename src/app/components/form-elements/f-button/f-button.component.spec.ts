import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FButtonComponent } from './f-button.component'

describe('FButtonComponent', () => {
    let component: FButtonComponent
    let fixture: ComponentFixture<FButtonComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FButtonComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(FButtonComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
