const { ServiceBroker } = require("moleculer");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { typeDefs } = require("../src/schema/schema"); // Путь к вашему schema.graphql
const resolvers = require("../src/resolvers"); // Путь к вашим резолверам

module.exports = {
  name: "graphql",
  actions: {
    // Действие для проверки статуса сервиса
    health(ctx) {
      return { status: "GraphQL service is running" };
    }
  },
  async started() {
    // Настройка Apollo Server
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      introspection: true // Для разработки
    });

    // Запуск Apollo Server
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 }
    });

    this.logger.info(`GraphQL server running at ${url}`);
  },
  async stopped() {
    // Остановка сервера при завершении работы сервиса
    this.logger.info("GraphQL server stopped");
  }
};