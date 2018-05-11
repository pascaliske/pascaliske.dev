import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FPhoneComponent } from './f-phone.component'

describe('FPhoneComponent', () => {
    let component: FPhoneComponent
    let fixture: ComponentFixture<FPhoneComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FPhoneComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(FPhoneComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
