import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FCheckboxComponent } from './f-checkbox.component'

describe('FCheckboxComponent', () => {
    let component: FCheckboxComponent
    let fixture: ComponentFixture<FCheckboxComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FCheckboxComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(FCheckboxComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
