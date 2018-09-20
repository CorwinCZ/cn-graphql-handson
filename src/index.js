import { GraphQLServer } from 'graphql-yoga';

import { authorList, bookList } from './testData';

const resolvers = {
  Query: {
    info: () => 'This is info text',
    getAuthorList: () => {
      return authorList;
    },
    getBookList: () => {
      return bookList;
    },
    getBook: () => {
      return bookList[0];
    },
  },
  Book: {
    author: obj => {
      return authorList.find(item => {
        return item.id === obj.author;
      });
    },
  },
};

const server = new GraphQLServer({
  typeDefs: './src/typeDefs.graphql',
  resolvers,
});

server.start(() => console.log('Server is running on localhost:4000'));
