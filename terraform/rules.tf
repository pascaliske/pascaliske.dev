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
