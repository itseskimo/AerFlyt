import express, { Router } from 'express';


import { textExtraction } from '../controller/controller.js';

const route = express.Router();


route.post("/scan-image", textExtraction);



export default route;