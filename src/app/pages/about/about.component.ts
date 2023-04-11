import { Component, HostBinding } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { SectionComponent } from 'components/section/section.component'
import { HeadlineComponent } from 'components/headline/headline.component'
import { CopyComponent } from 'components/copy/copy.component'
import { TimelineComponent } from 'components/timeline/timeline.component'
import { SocialsComponent } from 'components/socials/socials.component'

@Component({
    standalone: true,
    selector: 'cmp-about',
    templateUrl: './about.component.html',
    styleUrls: [],
    imports: [
        CommonModule,
        RouterModule,
        SectionComponent,
        HeadlineComponent,
        CopyComponent,
        TimelineComponent,
        SocialsComponent,
    ],
})
export class AboutComponent {
    @HostBinding('class')
    public classes: string = 'flex flex-1 flex-col justify-start'

    public readonly paragraphs: string[] = [
        `Hi, my name is Pascal and I'm a <b>Cloud Engineer</b> based in Frankfurt/Main, Germany. Currently I'm working for <a href="https://www.syzygy-techsolutions.de" target="_blank">SYZYGY Techsolutions</a>, an enterprise IT specialist with many years of experience.`,
        `My heart beats for <b>all things technology</b>, whereby I always strive for a <b>hands-on mentality</b>. I started my career as a developer but soon realized that I enjoy infrastructural topics and developer tooling even more than software development &ndash; building my own <a href="https://k8s.pascaliske.dev" target="_blank">#homelab</a> has certainly also contributed a very large amount to it and taught me a lot of valuable things, including <b>Kubernetes</b>, <b>Infrastructure as Code</b> and <b>GitOps</b>.`,
        `What began as a hobby quickly became my main focus: I took some time for studying and <a href="https://www.credly.com/badges/918f9eac-17f8-4828-abe1-4f184d9250c6/public_url" target="_blank">passed</a> the <b>Certified Kubernetes Administrator</b> exam by the <a href="https://www.cncf.io" target="_blank">Cloud Native Computing Foundation</a>.`,
        `Since I always have a lot of fun with automating things, it was obvious to me that I had to refine my knowledge of CI/CD pipelines using GitHub Actions or GitLab CI.`,
        `A topic I have recently been working on in-depth is <b>Infrastructure as Code</b> using tools like Terraform and Ansible. I am a big fan of the idea of defining your infrastructure as code and automating the provisioning process &ndash; <a href="https://k8s.pascaliske.dev/specs/#external" target="_blank">my entire DNS setup</a> in Cloudflare is managed through Terraform!`,
        `Last but not least, the Raspberry Pi boards will always have a special place in my heart. These little devices are so powerful and can be used for so many different things! They're perfect for learning and practicing new technologies which is more important than ever.`,
    ]
}
