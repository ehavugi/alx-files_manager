const dbClient = require('../utils/db');
const redisClient = require('../utils/redis');

const AppController = {
  async getStatus(req, res) {
    const redisAlive = await redisClient.isAlive();
    const dbAlive = await dbClient.isAlive();

    res.status(200).json({ redis: redisAlive, db: dbAlive });
  },

  async getStats(req, res) {
    const db = dbClient.client.db();
    const usersCollection = db.collection('users');
    const filesCollection = db.collection('files');

    const usersCount = await usersCollection.countDocuments();
    const filesCount = await filesCollection.countDocuments();

    res.status(200).json({ users: usersCount, files: filesCount });
  },
};

module.exports = AppController;
