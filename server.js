import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

const HOST = "localhost"; //127.0.0.1
const PORT = 5000;

fastify.get("/", function handler(request, response) {
  return { hello: "world" };
});

fastify.get("/produtos", (request, response) => {
  return { rodando: "srevidor produtos"}
})

fastify.get("/produto/:id", (request, response) =>{
  return {rodando: "servidor produto/:id"}
})


fastify
  .listen({
    port: PORT,
    host: HOST,
  })
  .then(() => console.log(`servidor rodando em http://${HOST}:${PORT}`))
  .catch((err) => console.log(`Erro ao subir o servidor: ${err}`));

