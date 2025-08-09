import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import userRoutes from "./routes/UserRoutes";
import {swaggerSpec} from "./docs/Swagger";

export const createApp = () => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json({ limit: "5mb" }));

    // API routes
    app.use("/api/users", userRoutes);

    // Swagger UI
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // health
    app.get("/health", (req, res) => res.json({ ok: true }));

    return app;
};
