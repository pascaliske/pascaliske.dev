# production
resource "cloudflare_record" "production_ipv4" {
  zone_id = data.cloudflare_zone.zone.id
  type    = "A"
  name    = "@"
  value   = "192.0.2.1"
  proxied = true
}

resource "cloudflare_record" "production_ipv6" {
  zone_id = data.cloudflare_zone.zone.id
  type    = "AAAA"
  name    = "@"
  value   = "2001:db8::"
  proxied = true
}

resource "cloudflare_record" "production_www_ipv4" {
  zone_id = data.cloudflare_zone.zone.id
  type    = "A"
  name    = "www"
  value   = "192.0.2.1"
  proxied = true
}

resource "cloudflare_record" "production_www_ipv6" {
  zone_id = data.cloudflare_zone.zone.id
  type    = "AAAA"
  name    = "www"
  value   = "2001:db8::"
  proxied = true
}

# next
resource "cloudflare_record" "next_ipv4" {
  zone_id = data.cloudflare_zone.zone.id
  type    = "A"
  name    = "next"
  value   = "192.0.2.1"
  proxied = true
}

resource "cloudflare_record" "next_ipv6" {
  zone_id = data.cloudflare_zone.zone.id
  type    = "AAAA"
  name    = "next"
  value   = "2001:db8::"
  proxied = true
}

# mail
resource "cloudflare_record" "mail" {
  zone_id  = data.cloudflare_zone.zone.id
  type     = "MX"
  name     = "@"
  value    = "tempel.uberspace.de"
  priority = 0
}

# bimi
resource "cloudflare_record" "bimi" {
  zone_id = data.cloudflare_zone.zone.id
  type    = "TXT"
  name    = "default._bimi"
  value   = "v=BIMI1; l=https://${var.DOMAIN}/assets/icons/bimi.svg;"
}

# dmarc
resource "cloudflare_record" "dmarc" {
  zone_id = data.cloudflare_zone.zone.id
  type    = "TXT"
  name    = "_dmarc"
  value   = "v=DMARC1; p=quarantine; rua=mailto:info@${var.DOMAIN}"
}

# dkim, uberspace mail
resource "cloudflare_record" "dkim" {
  zone_id = data.cloudflare_zone.zone.id
  type    = "TXT"
  name    = "uberspace._domainkey"
  value   = "v=DKIM1; t=s; n=core; p=${var.DKIM_PUBLIC_KEY}"
}

# spf
resource "cloudflare_record" "spf" {
  zone_id = data.cloudflare_zone.zone.id
  type    = "TXT"
  name    = var.DOMAIN
  value   = "v=spf1 include:spf.uberspace.de include:relay.mailchannels.net ~all"
}

# mail lockdown
resource "cloudflare_record" "mail_lockdown" {
  zone_id = data.cloudflare_zone.zone.id
  type    = "TXT"
  name    = "_mailchannels"
  value   = "v=mc1 cfid=${var.DOMAIN}"
}

# openpgpkey
resource "cloudflare_record" "openpgpkey" {
  zone_id = data.cloudflare_zone.zone.id
  type    = "TXT"
  name    = "openpgpkey"
  value   = "noop"
}

# google
resource "cloudflare_record" "google" {
  zone_id = data.cloudflare_zone.zone.id
  type    = "TXT"
  name    = var.DOMAIN
  value   = "google-site-verification=${var.GOOGLE_VERIFICATION_TOKEN}"
}

# have-i-been-pwned
resource "cloudflare_record" "have_i_been_pwned" {
  zone_id = data.cloudflare_zone.zone.id
  type    = "TXT"
  name    = var.DOMAIN
  value   = "have-i-been-pwned-verification=${var.HAVE_I_BEEN_PWNED_VERIFICATION_TOKEN}"
}
