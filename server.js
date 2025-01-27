"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
// const auth = (req: any, res: any, next: any): any => {
//     const allheaders = req.headers;
//     if (allheaders.token === "ashokIT") {
//         next();
//     } else {
//         res.status(500).json({ auth: "fail" });
//     }
// };
app.get("/", function (req, res) {
    res.sendFile("C:/Users/akhil/Desktop/n/getparameters/index.html"); // Construct an absolute path
});
app.get("/login", function (req, res) {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(201).json({ login: "success" });
    }
    else {
        res.status(401).json({ login: "failakhil" });
    }
});
app.listen(5051, function () {
    console.log("Server running on http://localhost:5051...");
});
