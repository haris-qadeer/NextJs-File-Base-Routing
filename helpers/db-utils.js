import { MongoClient } from "mongodb";
import { URL } from "../constant/CommonConstant";

export const connectDataBase = async () => {
  const client = await MongoClient.connect(URL);
  return client;
};
export const insertDocument = async (client, collection, document) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
};

export const getAllDocument = async (client, collection, sort, filter = {}) => {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
  return documents;
};
