"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_enforces_ssl_1 = __importDefault(require("express-enforces-ssl"));
var helmet_1 = __importDefault(require("helmet"));
var http_1 = __importDefault(require("http"));
var app = express_1.default();
app.enable("trust proxy");
if (process.env.NODE_ENV === "production") {
    app.use(express_enforces_ssl_1.default());
    app.use(helmet_1.default.hsts({
        maxAge: 31536000,
        preload: true,
    }));
}
app.disable("x-powered-by");
app.set("port", process.env.PORT || 3000);
app.get("/", function (req, res) {
    res.send("Hello world!");
});
http_1.default.createServer(app).listen(app.get("port"), function () {
    // tslint:disable-next-line:no-console
    console.log("Express server listening on port " + app.get("port"));
});
//# sourceMappingURL=index.js.map