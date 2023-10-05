const { MongoClient } = require('mongodb');

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'file_manager';

    const url = `mongodb://${host}:${port}/${database}`;
    this.client = new MongoClient(url, {
      useUnifiedTopology: true,
    });
    this.client.connect();
  }

  isAlive() {
    return this.client.isConnected();
  }

  async nbUsers() {
    const db = this.client.db();
    const usersCollection = db.collection('users');
    return await usersCollection.countDocuments();
  }

  async nbFiles() {
    if (!this.client) return 0;
    const db = this.client.db();
    const filesCollection = db.collection('files');
    return await filesCollection.countDocuments();
  }
}

const dbClient = new DBClient();

module.exports = dbClient;
