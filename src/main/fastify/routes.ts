import fastifyInit, { RouteShorthandOptions } from 'fastify';
import { routes } from '../routes';

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
        },
      },
    },
  },
};

const fastify = fastifyInit({ logger: false });

fastify.route({
  method: 'POST',
  url: routes.route,
  handler: async (request, reply) => {
    const body = request.body;
    const res = await routes.action().execute(body as any);
    return reply.status(201).send(res);
  },
});

export { fastify };
