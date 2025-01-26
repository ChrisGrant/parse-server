import { createClient } from 'redis';
import logger from '../../logger';

function createPublisher({ redisURL, redisOptions = {} }): any {
  redisOptions.no_ready_check = true;
  const client = createClient({ url: redisURL, ...redisOptions });
   client.on('error', err => {
    logger.error('RedisCacheAdapter Publisher client error', {
      error: err
    });
  });
  client.on('connect', () => {});
  client.on('reconnecting', () => {});
  client.on('ready', () => {});
  client.on('end', () => {});
  return client;
}

function createSubscriber({ redisURL, redisOptions = {} }): any {
  redisOptions.no_ready_check = true;
  const client = createClient({ url: redisURL, ...redisOptions });
   client.on('error', err => {
    logger.error('RedisCacheAdapter Subscriber client error', {
      error: err
    });
  });
  client.on('connect', () => {});
  client.on('reconnecting', () => {});
  client.on('ready', () => {});
  client.on('end', () => {});
  return client;
}

const RedisPubSub = {
  createPublisher,
  createSubscriber,
};

export { RedisPubSub };
