// tslint:disable: max-line-length
const rootQuery = `
  type Query {
    services(name: String, status: String, host: String, language: String): [Service] @deprecated(reason: "No longer needed")
    features(project: String, feature: String): [Feature]
    feature(project: String!, feature: String!): Feature
  }
`;

export default rootQuery;
