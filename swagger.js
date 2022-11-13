require('dotenv').config()
const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        title: "Contacts List",
        description: "An API to manipulate phone contacts"
    },
    host: process.env.HOST,
    schemes: [process.env.SCHEME],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./api/routes/contactListRoutes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);