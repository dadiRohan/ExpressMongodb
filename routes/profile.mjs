import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get a list of 50 profiles
router.get("/", async (req, res) => {
    let collection = await db.collection("profile");
    let results = await collection.find({})
      .limit(50)
      .toArray();

    res.send(results).status(200);
});

// Add a new profile to the collection
router.post("/", async (req, res) => {
    let collection = await db.collection("profile");
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    console.log(result);
    res.send(result).status(204);
});
  

export default router;