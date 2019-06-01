const feature = `
  "Feature switch type"
  type Feature {
    "The project that the feature switch belongs to"
    project: String
    "Name of the feature switch"
    name: String
    "If the switch is on/off (true/false)"
    enabled: Boolean
  }
`;

export default feature;
