import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FSelectComponent } from './f-select.component'

describe('FSelectComponent', () => {
    let component: FSelectComponent
    let fixture: ComponentFixture<FSelectComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FSelectComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(FSelectComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
