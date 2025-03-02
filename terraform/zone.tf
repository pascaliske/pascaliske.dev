# zone
data "cloudflare_zones" "zone_search" {
  name = var.DOMAIN
}

data "cloudflare_zone" "zone" {
  zone_id = data.cloudflare_zones.zone_search.result[0].id
}
