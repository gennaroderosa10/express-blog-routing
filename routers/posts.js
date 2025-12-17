import express from "express";
import posts from "../data/data.js"

const router = express.Router();


// INDEX
router.get("/", (req, res) => {
    res.send("visualizzo tutti i post")
});

//SHOW 
router.get("/:id", (req, res) => {
    res.send("visualizzo solo un post")
});

//STORE
router.post("/", (req, res) => {
    res.send("creo un nuovo post")
});

//UPDATE
router.put("/:id", (req, res) => {
    res.send("modifico interamente il mio post")
});

//MODIFY
router.patch("/:id", (req, res) => {
    res.send("modifico parzialmente il mio post")
});

//DESTROY
router.delete("/:id", (req, res) => {
    res.send("elimino il mio post")
});


export default router