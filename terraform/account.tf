# account
data "cloudflare_accounts" "account_search" {
  name = var.ACCOUNT_NAME
}

data "cloudflare_account" "account" {
  account_id = data.cloudflare_accounts.account_search.result[0].id
}
