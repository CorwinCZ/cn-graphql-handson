import { GraphQLServer } from 'graphql-yoga';

import { bookList, authorList } from './testData';

const typeDefs = `
  type Query {
    infoQuery: String!
    getBook: Book!
    getAllBooks: [Book!]!
    getAllAuthors: [Author!]!
  }

  type Mutation {
    addBook(data: BookInput!): Book!
  }

  type Book {
    id: String!
    name: String
    description: String
    author: Author
  }

  type Author {
    id: String!
    name: String
    biography: String
    allBooks: [Book!]!
  }

  input BookInput {
    id: String!
    name: String
    description: String
    author: String
  }
`;

const resolvers = {
  Query: {
    infoQuery: () => `Server is running`,
    getBook: () => bookList[1],
    getAllBooks: () => bookList,
    getAllAuthors: () => authorList,
  },
  Mutation: {
    addBook: (root, args) => {
      console.log('input', args.data);
      return args.data;
    },
  },
  Book: {
    id: root => root.id,
    author: root => authorList.find(item => item.id === root.author),
  },
  Author: {
    allBooks: root => bookList.filter(item => item.author === root.id),
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start({ port: 4000 }, () =>
  console.log('Server is running on localhost:4000'),
);
