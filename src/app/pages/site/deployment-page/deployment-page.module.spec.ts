import { DeploymentPageModule } from './deployment-page.module'

describe('DeploymentPageModule', () => {
    let deploymentPageModule: DeploymentPageModule

    beforeEach(() => {
        deploymentPageModule = new DeploymentPageModule()
    })

    it('should create an instance', () => {
        expect(deploymentPageModule).toBeTruthy()
    })
})
