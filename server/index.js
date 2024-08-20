import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const databaseURL = process.env.DATABASE_URL;

app.use(cors({
    origin: process.env.ORIGIN,
    periods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}));


const server = app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});


mongoose.connect(databaseURL)
    .then(() => console.log('Connected to database'))
    .catch((error) => console.log(error));