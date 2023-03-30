# zone
data "cloudflare_zone" "zone" {
  name = local.domain
}

# zone settings
resource "cloudflare_zone_settings_override" "zone_settings" {
  zone_id = data.cloudflare_zone.zone.id

  settings {
    # /ssl-tls
    ssl = "strict"

    # /ssl-tls/edge-certificates
    always_use_https         = "on"
    min_tls_version          = "1.2"
    tls_1_3                  = "on"
    automatic_https_rewrites = "on"

    # /ssl-tls/edge-certificates -> HSTS
    security_header {
      enabled            = true
      preload            = false
      max_age            = 15780000 # 6 months
      include_subdomains = false
      nosniff            = false
    }

    # /security/settings
    security_level = "high"

    # /speed/optimization
    brotli      = "on"
    early_hints = "on"

    # /network
    http3               = "on"
    websockets          = "on"
    opportunistic_onion = "on"
  }
}
