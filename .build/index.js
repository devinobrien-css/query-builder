"use strict";
exports.__esModule = true;
exports.graphqlHandler = void 0;
var server_1 = require("@apollo/server");
var client_1 = require("@prisma/client");
var aws_lambda_1 = require("@as-integrations/aws-lambda");
var nexus_1 = require("nexus");
var nexus_prisma_1 = require("nexus-prisma");
var prisma = new client_1.PrismaClient();
var schema = (0, nexus_1.makeSchema)({
    types: [
        (0, nexus_1.objectType)({
            name: nexus_prisma_1.users.$name,
            definition: function (t) {
                t.field(nexus_prisma_1.users.first);
            }
        })
    ]
});
var server = new server_1.ApolloServer({
    schema: schema
});
exports.graphqlHandler = (0, aws_lambda_1.startServerAndCreateLambdaHandler)(server);
//# sourceMappingURL=index.js.map