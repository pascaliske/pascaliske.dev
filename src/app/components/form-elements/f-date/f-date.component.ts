import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core'
import * as Pikaday from 'pikaday'
import { FInputComponent } from '../f-input/f-input.component'

@Component({
    selector: 'cmp-f-date',
    templateUrl: './f-date.component.html',
    styleUrls: ['./f-date.component.scss']
})
export class FDateComponent extends FInputComponent implements AfterViewInit {
    @ViewChild('inputRef') public inputRef: ElementRef

    @ViewChild('calendarContainerRef') public calendarContainerRef: ElementRef

    private instance: Pikaday

    public ngAfterViewInit(): void {
        this.instance = new Pikaday({
            container: this.calendarContainerRef.nativeElement,
            field: this.inputRef.nativeElement,
            firstDay: 1,
            showWeekNumber: true,
            numberOfMonths: 2,
            onSelect: date => {
                console.log('==>', date)
                this.fc.setValue(date)
            }
        })
    }
}
