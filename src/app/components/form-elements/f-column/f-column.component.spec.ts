import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FColumnComponent } from './f-column.component'

describe('FColumnComponent', () => {
    let component: FColumnComponent
    let fixture: ComponentFixture<FColumnComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FColumnComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(FColumnComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
