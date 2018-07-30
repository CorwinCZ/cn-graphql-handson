const { GraphQLServer } = require('graphql-yoga');

const resolvers = {
  Query: {
    info: () => {
      return 'Test string';
    },
  },
};

const server = new GraphQLServer({
  typeDefs: './src/typeDefs.graphql',
  resolvers: resolvers,
});

server.start(() => console.log(`🚀  Server ready at http://localhost:4000`));
