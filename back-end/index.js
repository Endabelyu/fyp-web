import express from 'express';
import db from './config/Database.js';
import FileUpload from 'express-fileupload';
import users from './routes/users.js';
import project from './routes/project.js';
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
app.use(express.static('public'));
app.use(FileUpload());
app.use(users);
app.use('/project', project);
app.listen(5000, () => console.log('server running at port 5000'));
