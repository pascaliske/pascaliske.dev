resource "cloudflare_page_rule" "redirect_www" {
  zone_id = data.cloudflare_zone.zone.id
  target  = "www.${local.domain}*"

  actions {
    forwarding_url {
      status_code = 301
      url         = "https://${local.domain}/$1"
    }
  }
}

resource "cloudflare_page_rule" "redirect_about" {
  zone_id = data.cloudflare_zone.zone.id
  target  = "www.${local.domain}/about"

  actions {
    forwarding_url {
      status_code = 301
      url         = "https://${local.domain}/home"
    }
  }
}

resource "cloudflare_page_rule" "redirect_imprint" {
  zone_id = data.cloudflare_zone.zone.id
  target  = "www.${local.domain}/imprint"

  actions {
    forwarding_url {
      status_code = 301
      url         = "https://${local.domain}/legal-notice"
    }
  }
}

resource "cloudflare_page_rule" "redirect_privacy" {
  zone_id = data.cloudflare_zone.zone.id
  target  = "www.${local.domain}/privacy"

  actions {
    forwarding_url {
      status_code = 301
      url         = "https://${local.domain}/legal-notice"
    }
  }
}
