import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FooterMetaComponent } from './footer-meta.component'

describe('FooterMetaComponent', () => {
    let component: FooterMetaComponent
    let fixture: ComponentFixture<FooterMetaComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FooterMetaComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterMetaComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
