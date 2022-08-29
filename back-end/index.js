import express from 'express';
import db from './config/Database.js';
import users from './models/UserModel.js';
import router from './routes/index.js';
import dotenv from 'dotenv';
import cookie from 'cookie-parser';
import cors from 'cors';

dotenv.config();

try {
  await db.authenticate();
  console.log('database connected');
  await db.sync();
} catch (error) {
  console.log(error);
}
const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookie());
app.use(express.json());
app.use(router);
app.listen(5000, () => console.log('server running at port 5000'));
