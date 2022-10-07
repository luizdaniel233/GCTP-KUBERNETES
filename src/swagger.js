const options = {
    language: 'pt-BR',
    openapi: '3.0.0'
}
const swaggerAutogen = require('swagger-autogen')(options);

const doc = {
    info: {
      version: '0.1.0',
      title: 'API AJUDA AÍ',
      description: 'Essa API tem como objetivo a demonstração do correto funcionamento das rotas, bem como ser um norteado para as equipes de Frontend e Testers.',
    },
    host: 'localhost:3001', 
    // host1: ['https://metaphora-dev.conecthus.org.br/api'], 
    // host2: ['https://metaphora-test.conecthus.org.br/api'],
    // host3: ['https://metaphora.conecthus.org.br/api'],
    basePath: '/',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],  
    tags: [
    {
      name: 'Test API',         
      description: `Endpoint's referente a Test API`,
    }
  ],
    securityDefinitions: {            
      bearerAuth : { 
        type : 'http' , 
        scheme : 'bearer' , 
        bearerFormat : 'JWT' 
    } 
    // apiKeyAuth: {
    //   type: 'apiKey',
    //   in: 'header', // can be 'header', 'query' or 'cookie'
    //   name: 'X-API-KEY', // name of the header, query parameter or cookie
    //   description: 'Some description...'
    // }
  },  // by default: empty object
    definitions: {},          // by default: empty object (Swagger 2.0)
    components: {}            // by default: empty object (OpenAPI 3.x)
  };
const outputFile = './src/swagger/swagger_output.json';

const endpointsFiles = ['./src/server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);