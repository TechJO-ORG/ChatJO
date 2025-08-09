import dotenv from "dotenv";
dotenv.config();
import {connectDB} from "./config/mongo";
import {createApp} from "./App";
dotenv.config();

const PORT = process.env.PORT || 3000;

(async () => {
    await connectDB();
    const app = createApp();
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
        console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
    });
})();
