import express from "express";
import { ofertRouter } from "./routes/routes";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

// Healthcheck e rota raiz para o proxy do painel
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/", (_req, res) => {
  res.status(200).json({ message: "API online" });
});

app.use(ofertRouter);

app.listen(3434, () => {
  console.log("Server is running on 3434...");
});

export { app };
