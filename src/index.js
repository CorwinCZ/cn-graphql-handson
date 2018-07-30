const { GraphQLServer } = require('graphql-yoga');
const { bookList, authorList } = require('./testData');

const resolvers = {
  Query: {
    infoQuery: () => {
      return 'Test string';
    },
    authorQuery: () => {
      return authorList[0];
    },
    authorListQuery: () => {
      return authorList;
    },
    bookQuery: () => {
      return bookList[2];
    },
  },
  Book: {
    author: (obj, args, context, info) => {
      return authorList.find(item => {
        return item.id === obj.author;
      });
    },
  },
};

const server = new GraphQLServer({
  typeDefs: './src/typeDefs.graphql',
  resolvers: resolvers,
});

server.start(() => console.log(`🚀  Server ready at http://localhost:4000`));
