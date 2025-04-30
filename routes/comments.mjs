import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import querystring from "querystring";

const router = express.Router();

// Get a list of 50 comments
router.get("/", async (req, res) => {
    let collection = await db.collection("comments");
    let results = await collection.find({})
      .limit(50)
      .toArray();

    res.send(results).status(200);
});

// Get a get comments by postId
router.get("/postId/:postId", async (req, res)  => {
  let collection = await db.collection("comments");
  const { postId } = req.params;
  let result = (await collection.find({ postId: postId }).toArray()).reverse();

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Add a new comment to the collection
router.post("/", async (req, res) => {
    let collection = await db.collection("comments");
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    console.log(result);
    res.send(result).status(204);
});
  

export default router;