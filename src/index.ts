import { ApolloServer } from '@apollo/server';
import { PrismaClient } from '@prisma/client'
import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
import { makeSchema, objectType }  from 'nexus'
import { users } from 'nexus-prisma'

const prisma = new PrismaClient();

const schema = makeSchema({
    types: [
        objectType({
            name : users.$name,
            definition(t) {
                t.field(users.first)
            }
        })
    ]
})

const server = new ApolloServer({
    schema,
});

export const graphqlHandler = startServerAndCreateLambdaHandler(server)