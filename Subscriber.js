const Redis = require('ioredis');
const redis = new Redis();

redis.on('error', (err) => {
  console.error('Redis error:', err);
});

redis.on('connect', () => {
  console.log('Connected to Redis server');
});

redis.subscribe('channel', (err, count) => {
  if (err) {
    console.error('Error subscribing to channel:', err);
  } else {
    console.log(`Subscribed to ${count} channels`);
  }
});

redis.on('message', (channel, message) => {
  console.log(`Received message from channel ${channel}: ${message}`);
});
