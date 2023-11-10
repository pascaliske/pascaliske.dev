export const enum Tags {
    ANGULAR = 'Angular',
    ANSIBLE = 'Ansible',
    AWS = 'AWS',
    BASH = 'Bash',
    CLOUDFLARE = 'Cloudflare',
    DOCKER = 'Docker',
    FLUX = 'Flux',
    GCP = 'GCP',
    GITHUB_ACTIONS = 'GitHub Actions',
    GITLAB_CI = 'GitLab CI',
    GOLANG = 'Go',
    GRAFANA = 'Grafana',
    HELM = 'Helm',
    KUBERNETES = 'Kubernetes',
    NODEJS = 'Node.js',
    OCI = 'OCI',
    PROMETHEUS = 'Prometheus',
    TERRAFORM = 'Terraform',
    TYPESCRIPT = 'TypeScript/JavaScript',
}

/**
 * Manually trigger custom events for Plausible.
 */
declare let plausible: (
    event: string,
    options?: {
        props?: Record<string, string>
        revenue?: { currency: string; amount: string | number }
        callback?: () => void
    },
) => void
