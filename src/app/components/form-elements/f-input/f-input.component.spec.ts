import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FInputComponent } from './f-input.component'

describe('FInputComponent', () => {
    let component: FInputComponent
    let fixture: ComponentFixture<FInputComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FInputComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(FInputComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
