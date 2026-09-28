import express from "express";
import userRoutes from "./routes/user.route.js";
import userEcRoute from "./routes/user.ec.route.js"
const app = express();

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("api/userec", userEcRoute);

export default app;