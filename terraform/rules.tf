# redirect www to non-www
resource "cloudflare_page_rule" "redirect_www" {
  zone_id = data.cloudflare_zone.zone.zone_id
  status  = "active"

  target = "www.${var.DOMAIN}*"

  actions = {
    forwarding_url = {
      status_code = 301
      url         = "https://${var.DOMAIN}/$1"
    }
  }
}

# redirect legacy page paths
resource "cloudflare_list" "redirect_legacy_pages" {
  account_id = data.cloudflare_account.account.account_id
  kind       = "redirect"
  name       = "${replace(var.DOMAIN, ".", "_")}_legacy_pages"
}

# /about -> /home
resource "cloudflare_list_item" "redirect_legacy_about" {
  account_id = data.cloudflare_account.account.account_id
  list_id    = cloudflare_list.redirect_legacy_pages.id

  comment = "/about -> /home"
  redirect = {
    source_url  = "${var.DOMAIN}/about"
    target_url  = "https://${var.DOMAIN}/home"
    status_code = 301
  }
}

# /imprint -> /legal-notice
resource "cloudflare_list_item" "redirect_legacy_imprint" {
  account_id = data.cloudflare_account.account.account_id
  list_id    = cloudflare_list.redirect_legacy_pages.id

  comment = "/imprint -> /legal-notice"
  redirect = {
    source_url  = "${var.DOMAIN}/imprint"
    target_url  = "https://${var.DOMAIN}/legal-notice"
    status_code = 301
  }
}

# /privacy -> /legal-notice
resource "cloudflare_list_item" "redirect_legacy_privacy" {
  account_id = data.cloudflare_account.account.account_id
  list_id    = cloudflare_list.redirect_legacy_pages.id

  comment = "/privacy -> /legal-notice"
  redirect = {
    source_url  = "${var.DOMAIN}/privacy"
    target_url  = "https://${var.DOMAIN}/legal-notice"
    status_code = 301
  }
}

resource "cloudflare_ruleset" "redirect_legacy_pages" {
  account_id = data.cloudflare_account.account.account_id

  kind  = "root"
  phase = "http_request_redirect"
  name  = "${cloudflare_list.redirect_legacy_pages.name}_redirects"

  rules = [
    {
      enabled     = true
      action      = "redirect"
      expression  = "http.request.full_uri in ${format("$%s", cloudflare_list.redirect_legacy_pages.name)}"
      description = "${cloudflare_list.redirect_legacy_pages.name}_redirects"

      action_parameters = {
        from_list = {
          name = cloudflare_list.redirect_legacy_pages.name
          key  = "http.request.full_uri"
        }
      }
    }
  ]
}
