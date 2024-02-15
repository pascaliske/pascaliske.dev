resource "cloudflare_page_rule" "redirect_www" {
  zone_id = data.cloudflare_zone.zone.id
  target  = "www.${var.DOMAIN}*"

  actions {
    forwarding_url {
      status_code = 301
      url         = "https://${var.DOMAIN}/$1"
    }
  }
}

resource "cloudflare_list" "redirect_pages" {
  account_id = data.cloudflare_zone.zone.account_id
  kind       = "redirect"
  name       = "${replace(var.DOMAIN, ".", "_")}_redirects"

  # /about -> /home
  item {
    comment = "/about -> /home"
    value {
      redirect {
        source_url  = "${var.DOMAIN}/about"
        target_url  = "https://${var.DOMAIN}/home"
        status_code = 301
      }
    }
  }

  # /imprint -> /legal-notice
  item {
    comment = "/imprint -> /legal-notice"
    value {
      redirect {
        source_url  = "${var.DOMAIN}/imprint"
        target_url  = "https://${var.DOMAIN}/legal-notice"
        status_code = 301
      }
    }
  }

  # /privacy -> /legal-notice
  item {
    comment = "/privacy -> /legal-notice"
    value {
      redirect {
        source_url  = "${var.DOMAIN}/privacy"
        target_url  = "https://${var.DOMAIN}/legal-notice"
        status_code = 301
      }
    }
  }
}

resource "cloudflare_ruleset" "redirect_pages" {
  account_id = data.cloudflare_zone.zone.account_id
  kind       = "root"
  name       = "${replace(var.DOMAIN, ".", "_")}_redirects"
  phase      = "http_request_redirect"

  rules {
    enabled    = true
    action     = "redirect"
    expression = "http.request.full_uri in ${format("$%s", replace(var.DOMAIN, ".", "_"))}_redirects"

    action_parameters {
      from_list {
        name = "${replace(var.DOMAIN, ".", "_")}_redirects"
        key  = "http.request.full_uri"
      }
    }
  }

  depends_on = [cloudflare_list.redirect_pages]
}
