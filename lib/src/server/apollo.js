"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var context = {};
var resolvers = {};
var typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    \"A simple type\"\n    hello: String\n  }\n"], ["\n  type Query {\n    \"A simple type\"\n    hello: String\n  }\n"])));
var options = {
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: context,
    playground: {
        settings: {
            "editor.cursorShape": "line",
            "tracing.hideTracingResponse": true,
            "request.credentials": "same-origin",
        },
    },
};
var server = new apollo_server_express_1.ApolloServer(__assign({}, options));
var templateObject_1;
//# sourceMappingURL=apollo.js.map