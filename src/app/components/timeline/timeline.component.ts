import { Component } from '@angular/core'
import { NgFor, NgIf } from '@angular/common'

@Component({
    standalone: true,
    selector: 'cmp-timeline',
    templateUrl: './timeline.component.html',
    imports: [NgFor, NgIf],
})
export class TimelineComponent {
    public readonly points: string[] = [
        'Developer',
        'CI/CD',
        'Ansible',
        'Kubernetes',
        'GitOps',
        'Terraform',
    ]
}
