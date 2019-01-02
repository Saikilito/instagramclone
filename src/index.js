import express from 'express';

import mongoose from 'mongoose';
import models from './models';

import { ApolloServer, gql } from 'apollo-server-express';
//Mezclando types y resolvers
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context:{
    models,
    user:{_id:1, username:'Kemsito'}
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
