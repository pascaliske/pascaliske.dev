import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FPasswordComponent } from './f-password.component'

describe('FPasswordComponent', () => {
    let component: FPasswordComponent
    let fixture: ComponentFixture<FPasswordComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FPasswordComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(FPasswordComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
