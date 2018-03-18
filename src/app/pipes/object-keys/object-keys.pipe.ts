import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'objectKeys'
})
export class ObjectKeysPipe implements PipeTransform {
    public transform(object: object): Array<string> {
        if (!object) {
            return null
        }
        return Object.keys(object)
    }
}
