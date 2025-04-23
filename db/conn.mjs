import { MongoClient } from "mongodb";

const connectionString =  "mongodb+srv://Rohanvirtualhomes:RohanVH1309@cluster0.25bmpes.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";//process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_mflix");

export default db;