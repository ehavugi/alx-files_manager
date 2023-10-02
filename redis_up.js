const redisClient = require('./utils/redis');

// Check if Redis is up
if (redisClient.isAlive()) {
  console.log('Redis is up and the connection is alive.');
} else {
  console.error('Redis is not connected or is down.');
}

