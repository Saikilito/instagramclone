import express from 'express';

import mongoose from 'mongoose';
import models from './models';

import { ApolloServer, gql } from 'apollo-server-express';
import typeDefs from './schemas';
import resolvers from './resolvers';


const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context:{
    models
  }
});

const app = express();
server.applyMiddleware({ app });

const port = 4000;

const ObjectId = mongoose.Types.ObjectId;
ObjectId.prototype.valueOf = function () {
	return this.toString();
};

mongoose.connect('mongodb://localhost:27017/instagramClone', {useNewUrlParser: true})
  .then(
    ()=>{
      console.log('Conectado a DB');
      app.listen({ port }, () =>
        console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
      );
    }
  );
