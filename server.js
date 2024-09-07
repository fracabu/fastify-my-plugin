import Fastify from 'fastify';
import myPlugin from './index.js';  // Assicurati di includere .js

const fastify = Fastify({
  logger: true
});

// Registra il plugin
fastify.register(myPlugin);

// Avvia il server
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server in ascolto su ${address}`);
});
