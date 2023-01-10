import express from "express";
import cors from 'cors';
import tasksRotes from './routes/tasks'
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import {options} from './swaggerOpetions'



const specs = swaggerJSDoc(options)
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use(tasksRotes);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));


export default app