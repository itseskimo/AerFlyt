import express, { Router } from 'express';


import { textExtraction, login, register ,changePassword} from '../controller/controller.js';

const route = express.Router();


route.post("/scan-passport", textExtraction);
route.post("/login", login);
route.post("/register", register);
route.post("/change-password", changePassword);



export default route;