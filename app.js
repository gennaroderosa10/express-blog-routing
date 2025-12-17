import express from "express";
import posts from "./posts.js";

const app = express();
const port = 3010;


app.use(express.static("public"));


app.listen(port, () => {
    console.log(`il sever è in ascolto sulla porta ${port}`);

});