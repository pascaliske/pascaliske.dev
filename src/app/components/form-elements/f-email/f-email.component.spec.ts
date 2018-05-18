import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FEmailComponent } from './f-email.component'

describe('FEmailComponent', () => {
    let component: FEmailComponent
    let fixture: ComponentFixture<FEmailComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FEmailComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(FEmailComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
