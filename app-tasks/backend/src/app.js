import express from "express";
import tasksRotes from './routes/tasks'

const app = express();

app.use(express.json());

app.use(tasksRotes);

export default app