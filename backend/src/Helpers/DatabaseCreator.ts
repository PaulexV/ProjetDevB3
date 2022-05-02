import { InternalServerErrorException } from '@nestjs/common';
import { Document, MongoClient } from 'mongodb';

export class DatabaseCreator {
  createCollection(dbName: string) {
    MongoClient.connect('mongodb://127.0.0.1/')
      .then((client: MongoClient) => {
        const connect = client.db('ProjetDev');

        // New Collection
        connect.createCollection(dbName);

        console.log(`collection ${dbName} created`);
      })
      .catch((err: InternalServerErrorException) => {
        // Handling the error
        console.log(err.message);
      });
  }

  createDocument(dbName: string, props: Document) {
    MongoClient.connect('mongodb://127.0.0.1/')
      .then((client: MongoClient) => {
        const connect = client.db('ProjetDev');
        // New Document

        connect.collection(dbName).insertOne(props);
      })
      .catch((err: InternalServerErrorException) => {
        // Handling the error
        console.log(err.message);
      });
  }
}
