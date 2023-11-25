import { textExtraction, login, register, changePassword, addCountry, getAllCountries, deleteCountry, updateCountry } from '../controller/controller.js';
import express from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the destination folder for uploaded files
    },
    filename: (req, file, cb) => {
        const filename = 'file_' + Date.now() + '_' + file.originalname;
        cb(null, filename);
    },
});

const upload = multer({ storage });


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