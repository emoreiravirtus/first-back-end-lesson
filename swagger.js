require('dotenv').config()
const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        title: "FootBet",
        description: "An API to manipulate soccer stats"
    },
    host: process.env.HOST,
    schemes: [process.env.SCHEME],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./api/routes/routes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);