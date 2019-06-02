export default `
  "Information relating to the user relating to Music"
  type Music {
    "A list of the users recently played tracks"
    tracks(
      "Limit the amount of recently played tracks to return"
      limit: Int,
      "The page of recently played tracks which you wish to return"
      page: Int): [Track]
  }
`;
