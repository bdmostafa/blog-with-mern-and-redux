
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config({
  path: './config/keys.env'
})

// Routes
import postRoutes from './routes/posts.js';

const app = express();

// Middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
  res.send("Welcome to mBlog site")
})

const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT|| 4200;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);