var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var _a = require("apollo-server"), ApolloServer = _a.ApolloServer, gql = _a.gql;
var typeDefs = gql(__makeTemplateObject(["\n  type Query {\n    \"A simple type for getting started!\"\n    hello: String\n  }\n"], ["\n  type Query {\n    \"A simple type for getting started!\"\n    hello: String\n  }\n"]));
var resolvers = {
    Query: {
        hello: function () { return "world"; },
    },
};
var server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
});
//# sourceMappingURL=apollo.js.map