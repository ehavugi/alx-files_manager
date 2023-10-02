const redis = require('redis');
const { promisify } = require('util');

class RedisClient {
  constructor() {
    
    this.client = redis.createClient();

    // Handle Redis client errors
    this.client.on('error', (error) => {
      console.error(`Redis client error: ${error}`);
    });
  }

  isAlive() {
     //console.log('Client connected:', this.client.connected);
     return this.client.connected;
  }

  async get(key) {
    const getAsync = promisify(this.client.get).bind(this.client);
    return getAsync(key);
  }

  async set(key, value, duration) {
    return this.client.setex(key, duration, value);
  }

  async del(key) {
    return this.client.del(key);
  }
}

const redisClient = new RedisClient();

module.exports = redisClient;

