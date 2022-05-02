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

  getCollections() {
    MongoClient.connect('mongodb://127.0.0.1/')
      .then((client: MongoClient) => {
        const connect = client.db('ProjetDev');
        const list: string[] = [];
        // Get Collections
        connect.listCollections().toArray((err, collections) => {
          if (err) throw err;
          collections.forEach((collection) => {
            const name = collection.name;
            list.push(name);
          });
        });
      })
      .catch((err: InternalServerErrorException) => {
        // Handling the error
        console.log(err.message);
      });
  }

  deleteCollection(dbName: string) {
    MongoClient.connect('mongodb://127.0.0.1').then((client: MongoClient) => {
      const connect = client.db('ProjetDev');
      connect.collection(dbName).drop((err, delOk) => {
        if (err) throw err;
        if (delOk) console.log(`collection ${dbName} deleted`);
        client.close();
      });
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

  updateDocument(dbName: string, query: Document, props: Document) {
    MongoClient.connect('mongodb://127.0.0.1/')
      .then((client: MongoClient) => {
        const connect = client.db('ProjetDev');
        // Update Document
        props = { $set: props };
        connect.collection(dbName).updateOne(query, props, (err) => {
          if (err) throw err;
          console.log('Document updated');
        });
      })
      .catch((err: InternalServerErrorException) => {
        // Handling the error
        console.log(err.message);
      });
  }

  updateManyDocuments(dbName: string, query: Document, props: Document) {
    MongoClient.connect('mongodb://127.0.0.1/')
      .then((client: MongoClient) => {
        const connect = client.db('ProjetDev');
        // Update Document
        props = { $set: props };
        connect.collection(dbName).updateMany(query, props, (err) => {
          if (err) throw err;
          console.log('Document updated');
        });
      })
      .catch((err: InternalServerErrorException) => {
        // Handling the error
        console.log(err.message);
      });
  }

  deleteDocument(dbName: string, query: Document) {
    MongoClient.connect('mongodb://127.0.0.1/')
      .then((client: MongoClient) => {
        const connect = client.db('ProjetDev');
        // Delete Document
        connect.collection(dbName).deleteOne(query, (err) => {
          if (err) throw err;
          console.log('Document deleted');
        });
      })
      .catch((err: InternalServerErrorException) => {
        // Handling the error
        console.log(err.message);
      });
  }
}
