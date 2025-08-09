import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "User Service API",
            version: "1.0.0",
            description: "CRUD API for User schema"
        },
        servers: [
            {
                url: "http://localhost:3000",
            }
        ]
    },
    apis: ["./src/routes/*.ts"] // path to files with JSDoc comments
};

export const swaggerSpec = swaggerJSDoc(options);
