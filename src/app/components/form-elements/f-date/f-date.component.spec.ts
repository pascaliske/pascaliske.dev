import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FDateComponent } from './f-date.component'

describe('FDateComponent', () => {
    let component: FDateComponent
    let fixture: ComponentFixture<FDateComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FDateComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(FDateComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
