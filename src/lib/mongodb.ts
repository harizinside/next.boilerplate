import "server-only";
import { MongoClient, MongoClientOptions } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

const uri = process.env.MONGODB_URI;
const options: MongoClientOptions = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

interface Global {
  _mongoClientPromise: Promise<MongoClient>;
}

declare const global: Global;

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable to maintain the MongoDB connection across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new client for every request
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
