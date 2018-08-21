import {
    Component,
    AfterViewInit,
    OnDestroy,
    Input,
    ViewChild,
    ElementRef,
    ChangeDetectionStrategy,
} from '@angular/core'
import { takeWhile } from 'rxjs/operators'
import flatpickr from 'flatpickr'
import locale from 'flatpickr/dist/l10n'
import { FInputComponent } from '../f-input/f-input.component'
import { LanguageService, Language } from '../../../shared/language/language.service'
import { FDateOptions } from '../typings'

@Component({
    selector: 'cmp-f-date',
    templateUrl: './f-date.component.html',
    styleUrls: ['./f-date.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FDateComponent extends FInputComponent implements AfterViewInit, OnDestroy {
    public static readonly cmpName: string = 'FDateComponent'

    @Input()
    public options: Partial<FDateOptions> = {}

    @ViewChild('inputRef')
    public inputRef: ElementRef

    private instance: flatpickr.Instance

    private selected: Date

    private alive: boolean = true

    public constructor(private languageService: LanguageService) {
        super()
    }

    public ngAfterViewInit(): void {
        this.languageService.language$.pipe(takeWhile(() => this.alive)).subscribe(language => {
            this.initFlatpickr(language)
        })
    }

    public ngOnDestroy(): void {
        this.alive = false
        this.destroyFlatpickr()
    }

    private initFlatpickr(language: Language): void {
        const options = {
            allowInput: true,
            dateFormat: 'd. F Y',
            defaultDate: this.selected || null,
            locale: this.fetchLocale(language),
            weekNumbers: true,
            onChange: value => (this.selected = value[0]),
        }

        this.destroyFlatpickr()

        this.instance = flatpickr(this.inputRef.nativeElement, options) as flatpickr.Instance
    }

    private destroyFlatpickr(): void {
        if (this.instance) {
            this.instance.destroy()
        }
    }

    private fetchLocale(language: Language): flatpickr.CustomLocale {
        switch (language) {
            case 'de':
                return locale.de

            default:
                return locale.default
        }
    }
}
