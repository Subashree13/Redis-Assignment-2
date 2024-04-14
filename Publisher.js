const Redis = require('ioredis');
const redis = new Redis();

function getRandomName() {
  const names = ['Subashree', 'Vasuki', 'Logeswaran', 'Baskaran'];
  return names[Math.floor(Math.random() * names.length)];
}

function publishMessage() {
  const name = getRandomName();
  const message = `Hello!.. ${name}`;
  redis.publish('channel', message);
  console.log(`Published: ${message}`);
}

setInterval(publishMessage, 2000); 
