const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const { bookList, authorList } = require('./testData');

const resolvers = {
  Query: {
    infoQuery: () => {
      return 'Test string';
    },
    authorQuery: (_, args) => {
      return authorList[args.authorIndex];
    },
    authorListQuery: () => {
      return authorList;
    },
    bookQuery: () => {
      return bookList[2];
    },
  },
  Author: {
    books: (author, args, context, info) => {
      return bookList.filter(book => {
        return book.author === author.id;
      });
    },
  },
  Book: {
    author: (book, args, context, info) => {
      return authorList.find(author => {
        return author.id === book.author;
      });
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
