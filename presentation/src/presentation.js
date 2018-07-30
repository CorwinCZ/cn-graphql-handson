import React from 'react';
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Appear,
  Link,
  Image,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

import graphqlYogaLogo from './assets/graphql-yoga-logo.png';
import prismaLogo from './assets/prisma-logo.png';
import graphqlDiagram from './assets/graphql-diagram.png';

require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022', // Black
    tertiary: '#03A9FC', // Blue
    quarternary: '#CECECE', // Gray
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme}>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit textColor="secondary">
            GraphQL hands-on
          </Heading>
          <Text textColor="tertiary" size={1}>
            Petr Čaněk
          </Text>
          <Text textColor="tertiary" size={1}>
            Tomáš Horáček
          </Text>
        </Slide>
        {/* TODO libraries description */}

        <Slide transition={['fade']}>
          <Heading size={3} textColor="secondary">
            GraphQL is
          </Heading>
          <Appear>
            <Heading size={3} textColor="tertiary">
              Alternative to REST
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['fade']}>
          <Image src={graphqlDiagram} />
        </Slide>

        {/* TODO graphql yoga */}
        <Slide transition={['fade']}>
          <Heading size={4} textColor="tertiary">
            GraphQL yoga
            <Image src={graphqlYogaLogo} height={100} />
          </Heading>
          <Link href="https://github.com/prismagraphql/graphql-yoga">
            {'https://github.com/prismagraphql/graphql-yoga'}
          </Link>

          <List>
            <Appear>
              <ListItem textSize={37}>
                Set of libraries for easy GraphQL server set-up
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={37}>Pre-configurated environment</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={37}>Subscriptions + Apollo Tracing</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={37}>
                Based on Express (and can be extended with Express middlewares)
              </ListItem>
            </Appear>
          </List>
        </Slide>
        {/* TODO prisma */}
        <Slide transition={['fade']}>
          <Heading size={4} textColor="tertiary">
            Prisma
            <Image src={prismaLogo} height={150} />
          </Heading>
          <Link href="https://github.com/prismagraphql/prisma">
            {'https://github.com/prismagraphql/prisma'}
          </Link>

          <List>
            <Appear>
              <ListItem textSize={37}>
                ORM-like layer between GraphQL server and DB
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={37}>
                Needs schema (written in GraphQL SDL) and optionally DB
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={37}>
                Can generate DB structure based on schema
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={37}>
                Generates GraphQL CRUD API from schema
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={37}>Can handle DB migrations</ListItem>
            </Appear>
          </List>
        </Slide>
        {/* TODO prisma bindings */}
        <Slide transition={['fade']}>
          <Heading size={4} textColor="tertiary">
            Prisma bindings
          </Heading>
          <Link href="https://github.com/prismagraphql/prisma-binding">
            {'https://github.com/prismagraphql/prisma-binding'}
          </Link>

          <List>
            <Appear>
              <ListItem textSize={37}>
                Requires Prisma server and it's generated GraphQL API
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={37}>Turns that into SDK</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={37}>
                Instead of quering the Prisma server, you can do:
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={37}>
                {`context.db.mutation.createRecepie(args)`}
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} textColor="tertiary">
            Our app
          </Heading>
          <List>
            <Appear>
              <ListItem textSize={37}>
                Aim - build simple GraphQL API with persistent data
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={37}>Simple book & author database</ListItem>
            </Appear>
            <Appear>
              <ListItem
                textSize={37}
              >{`Book: id, name, description, author`}</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={37}>{`Author: id, name, biography`}</ListItem>
            </Appear>
          </List>
        </Slide>

        {/* TODO example - https://github.com/prismagraphql/graphql-server-example */}
      </Deck>
    );
  }
}
