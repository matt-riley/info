"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var app = express_1.default();
app.get("/", function (req, res) {
    res.send("Hi!");
});
app.set("port", process.env.PORT || 3000);
app.disable("x-powered-by");
var server = function () {
    return http_1.default.createServer(app).listen(app.get("port"), function () {
        // tslint:disable-next-line:no-console
        console.log("Express server listening on port " + app.get("port"));
    });
};
server();
//# sourceMappingURL=index.js.map