import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FErrorComponent } from './f-error.component'

describe('FErrorComponent', () => {
    let component: FErrorComponent
    let fixture: ComponentFixture<FErrorComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FErrorComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(FErrorComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
