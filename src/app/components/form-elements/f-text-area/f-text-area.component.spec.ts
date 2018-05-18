import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FTextAreaComponent } from './f-text-area.component'

describe('FTextAreaComponent', () => {
    let component: FTextAreaComponent
    let fixture: ComponentFixture<FTextAreaComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FTextAreaComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(FTextAreaComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
