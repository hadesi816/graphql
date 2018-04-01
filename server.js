const express = require('express');
const express_graphql = require('express-graphql');
const {buildSchema} = require('graphql');

// GraphQL Schema
var schema = buildSchema(
    `type Query {
        message: String
    }`
);

// Root resolver
var root = {
    message: () => 'Hello World!'
}

// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server is now running on localhost:4000/graphql'));