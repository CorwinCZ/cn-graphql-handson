const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const { bookList, authorList } = require('./testData');

const resolvers = {
  Query: {
    infoQuery: () => {
      return 'Test string';
    },
    authorQuery: (_, args, context, info) => {
      return context.db.query.author(args, info);
    },
    authorListQuery: (_, args, context, info) => {
      return context.db.query.authors({}, info);
      // return authorList;
    },
    bookQuery: () => {
      return bookList[2];
    },
    bookListQuery: (_, args, context, info) => {
      return context.db.query.books({}, info);
    },
  },
  Mutation: {
    createAuthor: (_, args, context, info) => {
      return context.db.mutation.createAuthor(args, info);
    },
  },
};

const server = new GraphQLServer({
  typeDefs: './src/typeDefs.graphql',
  resolvers: resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: './src/generated/prisma.graphql',
      endpoint: 'https://eu1.prisma.sh/petr-canek-398ab8/books-orm/dev',
    }),
  }),
});

server.start(() => console.log(`🚀  Server ready at http://localhost:4000`));
