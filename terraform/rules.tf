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

resource "cloudflare_list" "redirect_pages" {
  account_id = data.cloudflare_zone.zone.account_id
  kind       = "redirect"
  name       = "${local.redirect_prefix}_redirects"

  # /about -> /home
  item {
    comment = "/about -> /home"
    value {
      redirect {
        source_url  = "${local.domain}/about"
        target_url  = "https://${local.domain}/home"
        status_code = 301
      }
    }
  }

  # /imprint -> /legal-notice
  item {
    comment = "/imprint -> /legal-notice"
    value {
      redirect {
        source_url  = "${local.domain}/imprint"
        target_url  = "https://${local.domain}/legal-notice"
        status_code = 301
      }
    }
  }

  # /privacy -> /legal-notice
  item {
    comment = "/privacy -> /legal-notice"
    value {
      redirect {
        source_url  = "${local.domain}/privacy"
        target_url  = "https://${local.domain}/legal-notice"
        status_code = 301
      }
    }
  }
}

resource "cloudflare_ruleset" "redirect_pages" {
  account_id = data.cloudflare_zone.zone.account_id
  kind       = "root"
  name       = "${local.redirect_prefix}_redirects"
  phase      = "http_request_redirect"

  rules {
    enabled    = true
    action     = "redirect"
    expression = "http.request.full_uri in ${format("$%s", local.redirect_prefix)}_redirects"

    action_parameters {
      from_list {
        name = "${local.redirect_prefix}_redirects"
        key  = "http.request.full_uri"
      }
    }
  }

  depends_on = [cloudflare_list.redirect_pages]
}
