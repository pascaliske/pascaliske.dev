import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FRowComponent } from './f-row.component'

describe('FRowComponent', () => {
    let component: FRowComponent
    let fixture: ComponentFixture<FRowComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FRowComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(FRowComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
