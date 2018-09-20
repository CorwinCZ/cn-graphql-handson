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
    getBook: (obj, { bookIndex }) => bookList[bookIndex.value],
  },
  Mutation: {
    createAuthor: (obj, { data }) => {
      console.log('We got', data);
      return {
        id: 'author-new',
        ...data,
      };
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
