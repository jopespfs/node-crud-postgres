import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

fastify.get("/", function handler(request, reply) {
  return { hello: "world" };
});

const HOST = "localhost"; //127.0.0.1
const PORT = 5000;

fastify
  .listen({
    port: PORT,
    host: HOST,
  })
  .then(() => console.log(`servidor rodando em http://${HOST}:${PORT}`))
  .catch((err) => console.log(`Erro ao subir o servidor: ${err}`));

