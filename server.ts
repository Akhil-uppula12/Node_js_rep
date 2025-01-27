import * as express from "express";
import * as path from "path";

const app: express.Application = express();

// const auth = (req: any, res: any, next: any): any => {
//     const allheaders = req.headers;
//     if (allheaders.token === "ashokIT") {
//         next();
//     } else {
//         res.status(500).json({ auth: "fail" });
//     }
// };

app.get("/", (req: any, res: any): any => {
    res.sendFile("C:/Users/akhil/Desktop/n/getparameters/index.html"); // Construct an absolute path
});

app.get("/login",  (req: any, res: any): any => {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(201).json({ login: "success" });
    } else {
        res.status(401).json({ login: "failakhil" });
    }
});



app.listen(5051, () => {
    console.log("Server running on http://localhost:5051...");
});
