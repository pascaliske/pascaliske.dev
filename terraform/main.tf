terraform {
  backend "remote" {
    organization = "pascaliske"

    workspaces {
      name = "pascaliske-dev"
    }
  }

  required_version = ">= 1.3.3"

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "4.27.0"
    }
  }
}
