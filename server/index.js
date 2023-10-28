import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }))


const PORT = 8000;

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));