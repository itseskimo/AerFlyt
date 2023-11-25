import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import Routes from './routes/route.js';
// import multer from 'multer';

const app = express();
// const upload = multer()

// app.use(upload.none())
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }))

app.use('/', Routes);


const PORT = 8000;
Connection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));

