import { browser, by, element } from 'protractor'

export class AppPage {
    public navigateTo() {
        return browser.get('/')
    }

    public getParagraphText() {
        return element(by.css('cmp-root h1')).getText()
    }
}
