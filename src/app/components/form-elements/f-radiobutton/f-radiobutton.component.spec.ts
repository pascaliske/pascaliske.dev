import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FRadiobuttonComponent } from './f-radiobutton.component'

describe('FRadiobuttonComponent', () => {
    let component: FRadiobuttonComponent
    let fixture: ComponentFixture<FRadiobuttonComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FRadiobuttonComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(FRadiobuttonComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
