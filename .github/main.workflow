workflow "Deploy" {
  on = "push"
  resolves = ["Deploy To GCP"]
}

action "On push to Master" {
  uses = "actions/bin/filter@9d4ef995a71b0771f438dd7438851858f4a55d0c"
  args = "branch master"
}

action "Login to GCP" {
  uses = "actions/gcloud/auth@cb9143e453da6e6537b3eff255e16fbcd09b4f9e"
  secrets = ["GCLOUD_AUTH"]
  needs = ["On push to Master"]
}

action "Set GCP Project" {
  uses = "actions/gcloud/cli@cb9143e453da6e6537b3eff255e16fbcd09b4f9e"
  args = "config set project mattriley-info"
  secrets = ["GCLOUD_AUTH"]
  needs = ["Login to GCP"]
}

action "Deploy To GCP" {
  uses = "actions/gcloud/cli@cb9143e453da6e6537b3eff255e16fbcd09b4f9e"
  args = "app deploy"
  secrets = ["GCLOUD_AUTH"]
  needs = ["Set GCP Project"]
}
