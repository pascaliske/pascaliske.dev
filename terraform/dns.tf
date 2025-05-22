# production
resource "cloudflare_dns_record" "production_ipv4" {
  zone_id = data.cloudflare_zone.zone.zone_id
  type    = "A"
  name    = var.DOMAIN
  content = "192.0.2.1"
  proxied = true
  ttl     = 1
}

resource "cloudflare_dns_record" "production_ipv6" {
  zone_id = data.cloudflare_zone.zone.zone_id
  type    = "AAAA"
  name    = var.DOMAIN
  content = "2001:db8::"
  proxied = true
  ttl     = 1
}

resource "cloudflare_dns_record" "production_www_ipv4" {
  zone_id = data.cloudflare_zone.zone.zone_id
  type    = "A"
  name    = "www.${var.DOMAIN}"
  content = "192.0.2.1"
  proxied = true
  ttl     = 1
}

resource "cloudflare_dns_record" "production_www_ipv6" {
  zone_id = data.cloudflare_zone.zone.zone_id
  type    = "AAAA"
  name    = "www.${var.DOMAIN}"
  content = "2001:db8::"
  proxied = true
  ttl     = 1
}

# next
resource "cloudflare_dns_record" "next_ipv4" {
  zone_id = data.cloudflare_zone.zone.zone_id
  type    = "A"
  name    = "next.${var.DOMAIN}"
  content = "192.0.2.1"
  proxied = true
  ttl     = 1
}

resource "cloudflare_dns_record" "next_ipv6" {
  zone_id = data.cloudflare_zone.zone.zone_id
  type    = "AAAA"
  name    = "next.${var.DOMAIN}"
  content = "2001:db8::"
  proxied = true
  ttl     = 1
}

# mail
resource "cloudflare_dns_record" "mail" {
  zone_id  = data.cloudflare_zone.zone.zone_id
  type     = "MX"
  name     = var.DOMAIN
  content  = "tempel.uberspace.de"
  priority = 0
  ttl      = 1
}

# bimi
resource "cloudflare_dns_record" "bimi" {
  zone_id = data.cloudflare_zone.zone.zone_id
  type    = "TXT"
  name    = "default._bimi.${var.DOMAIN}"
  content = "v=BIMI1; l=https://${var.DOMAIN}/assets/icons/bimi.svg;"
  ttl     = 1
}

# dmarc
resource "cloudflare_dns_record" "dmarc" {
  zone_id = data.cloudflare_zone.zone.zone_id
  type    = "TXT"
  name    = "_dmarc.${var.DOMAIN}"
  content = "v=DMARC1; p=quarantine; rua=mailto:info@${var.DOMAIN}"
  ttl     = 1
}

# dkim, uberspace mail
resource "cloudflare_dns_record" "dkim" {
  zone_id = data.cloudflare_zone.zone.zone_id
  type    = "TXT"
  name    = "uberspace._domainkey.${var.DOMAIN}"
  content = "v=DKIM1; t=s; n=core; p=${var.DKIM_PUBLIC_KEY}"
  ttl     = 1
}

# spf
resource "cloudflare_dns_record" "spf" {
  zone_id = data.cloudflare_zone.zone.zone_id
  type    = "TXT"
  name    = var.DOMAIN
  content = "v=spf1 include:spf.uberspace.de include:relay.mailchannels.net ~all"
  ttl     = 1
}

# mail lockdown
resource "cloudflare_dns_record" "mail_lockdown" {
  zone_id = data.cloudflare_zone.zone.zone_id
  type    = "TXT"
  name    = "_mailchannels.${var.DOMAIN}"
  content = "v=mc1 cfid=${var.DOMAIN}"
  ttl     = 1
}

# openpgpkey
resource "cloudflare_dns_record" "openpgpkey" {
  zone_id = data.cloudflare_zone.zone.zone_id
  type    = "TXT"
  name    = "openpgpkey.${var.DOMAIN}"
  content = "noop"
  ttl     = 1
}

# google
resource "cloudflare_dns_record" "google" {
  zone_id = data.cloudflare_zone.zone.zone_id
  type    = "TXT"
  name    = var.DOMAIN
  content = "google-site-verification=${var.GOOGLE_VERIFICATION_TOKEN}"
  ttl     = 1
}

# have-i-been-pwned
resource "cloudflare_dns_record" "have_i_been_pwned" {
  zone_id = data.cloudflare_zone.zone.zone_id
  type    = "TXT"
  name    = var.DOMAIN
  content = "have-i-been-pwned-verification=${var.HAVE_I_BEEN_PWNED_VERIFICATION_TOKEN}"
  ttl     = 1
}

# bluesky
resource "cloudflare_dns_record" "bluesky" {
  zone_id = data.cloudflare_zone.zone.zone_id
  type    = "TXT"
  name    = "_atproto.${var.DOMAIN}"
  content = "did=${var.BLUESKY_VERIFICATION_TOKEN}"
  ttl     = 1
}
