const rootQuery = `
  type Query {
    services(name: String, status: String, host: String, language: String): [Service]
  }
`;

export default rootQuery;
