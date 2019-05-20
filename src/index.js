import { GraphQLServer } from 'graphql-yoga';

import { bookList, authorList } from './testData';

const typeDefs = `
  type Query {
    infoQuery: String!
    getBook: Book!
    getAllBooks: [Book!]!
    getAllAuthors: [Author!]!
  }

  type Book {
    id: String!
    name: String
    description: String
    author: String
  }

  type Author {
    id: String!
    name: String
    biography: String
  }
`;

const resolvers = {
  Query: {
    infoQuery: () => `Server is running`,
    getBook: () => bookList[0],
    getAllBooks: () => bookList,
    getAllAuthors: () => authorList,
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log('Server is running on localhost:4000'));
