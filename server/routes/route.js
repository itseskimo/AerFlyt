import express from 'express';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

import { textExtraction, login, register, changePassword, addCountry, getAllCountries, deleteCountry ,updateCountry} from '../controller/controller.js';

const route = express.Router();


route.post("/scan-passport", textExtraction);
route.post("/login", login);
route.post("/register", register);
route.post("/change-password", changePassword);

route.get("/countries-list", getAllCountries);
route.post("/add-country", upload.single('image'), addCountry);
route.delete("/delete-country/:id", deleteCountry);
route.patch("/update-country/:id", updateCountry);



export default route;