import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FExplanationComponent } from './f-explanation.component'

describe('FExplanationComponent', () => {
    let component: FExplanationComponent
    let fixture: ComponentFixture<FExplanationComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FExplanationComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(FExplanationComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
