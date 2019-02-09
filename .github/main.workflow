workflow "Deploy" {
  on = "push"
  resolves = ["GitHub Action for Google Cloud"]
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@9d4ef995a71b0771f438dd7438851858f4a55d0c"
  args = "branch master"
}

action "GitHub Action for Google Cloud SDK auth" {
  uses = "actions/gcloud/auth@cb9143e453da6e6537b3eff255e16fbcd09b4f9e"
  needs = ["Filters for GitHub Actions"]
  secrets = ["GCLOUD_AUTH"]
}

action "GitHub Action for Google Cloud" {
  uses = "actions/gcloud/cli@cb9143e453da6e6537b3eff255e16fbcd09b4f9e"
  needs = ["GitHub Action for Google Cloud SDK auth"]
  args = "app deploy"
}
