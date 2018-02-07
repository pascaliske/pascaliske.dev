import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { QuickContactComponent } from './quick-contact.component'

describe('QuickContactComponent', () => {
    let component: QuickContactComponent
    let fixture: ComponentFixture<QuickContactComponent>

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [QuickContactComponent]
            }).compileComponents()
        })
    )

    beforeEach(() => {
        fixture = TestBed.createComponent(QuickContactComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
