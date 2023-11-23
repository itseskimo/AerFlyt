import express, { Router } from 'express';


import { textExtraction, login, register, changePassword, addCountry, getAllCountries, deleteCountry } from '../controller/controller.js';

const route = express.Router();


route.post("/scan-passport", textExtraction);
route.post("/login", login);
route.post("/register", register);
route.post("/change-password", changePassword);
route.get("/countries-list", getAllCountries);
route.post("/add-country", addCountry);
route.delete("/delete-country/:id", deleteCountry);



export default route;