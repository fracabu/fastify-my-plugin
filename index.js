
import fp from 'fastify-plugin';

// Define 
async function myPlugin(fastify, options) {
    fastify.get('/my-plugin-route', async (request, reply) => {
        return { message: 'Hello from my plugin!' };
    });
}

// Export 
export default fp(myPlugin);
