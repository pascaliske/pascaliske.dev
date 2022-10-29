# zone
data "cloudflare_zone" "zone" {
  name = "pascaliske.dev"
}

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
  value   = "v=BIMI1; l=https://pascaliske.dev/assets/logo.svg;"
}

# dmarc
resource "cloudflare_record" "dmarc" {
  zone_id = data.cloudflare_zone.zone.id
  type    = "TXT"
  name    = "_dmarc"
  value   = "v=DMARC1; p=quarantine; rua=mailto:info@pascaliske.dev"
}

# dkim
resource "cloudflare_record" "dkim" {
  zone_id = data.cloudflare_zone.zone.id
  type    = "TXT"
  name    = "*._domainkey"
  value   = "v=DKIM1; p="
}

# spf
resource "cloudflare_record" "spf" {
  zone_id = data.cloudflare_zone.zone.id
  type    = "TXT"
  name    = "pascaliske.dev"
  value   = "v=spf1 include:spf.uberspace.de ~all"
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
  name    = "pascaliske.dev"
  value   = "google-site-verification=${var.google_verification_token}"
}

# have-i-been-pwned
resource "cloudflare_record" "have_i_been_pwned" {
  zone_id = data.cloudflare_zone.zone.id
  type    = "TXT"
  name    = "pascaliske.dev"
  value   = "have-i-been-pwned-verification=${var.have_i_been_pwned_verification_token}"
}
