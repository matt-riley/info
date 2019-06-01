// tslint:disable: max-line-length
const rootQuery = `
  "Root Query"
  type Query {
    "Returns a list of feature switches. Available args are 'project' and 'feature'"
    features(project: String, feature: String): [Feature]
    "Returns a single feature switch. Available args are 'project' and 'feature'"
    feature(project: String!, feature: String!): Feature
    "User details"
    user: User
    "[DEPRECATED]: A list of services"
    services(name: String, status: String, host: String, language: String): [Service] @deprecated(reason: "No longer needed")
  }
`;

export default rootQuery;
