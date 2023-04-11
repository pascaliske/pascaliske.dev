import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    standalone: true,
    selector: 'cmp-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: [],
    imports: [CommonModule],
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
