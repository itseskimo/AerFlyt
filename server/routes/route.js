import { textExtraction, login, register, changePassword, addCountry, getAllCountries, deleteCountry, updateCountry } from '../controller/controller.js';
import { getAllDoctors, getAllDoctorsInfo, updateCalendars, insertDoctors, addReview, getAllReviews, addCalendar, getAllPhysioSchedule, verifyToken } from '../controller/controller.js';
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

route.post("/city-doctorslist", getAllDoctors);
route.post("/insertdoctors", insertDoctors);
route.post("/addreviews", upload.single('image'), addReview);
route.get("/reviews-list", getAllReviews);
route.post("/physio-calendar", verifyToken, addCalendar);
route.get("/get-physio-schedules", verifyToken, getAllPhysioSchedule);
route.get("/get-doctors-info", getAllDoctorsInfo);
route.patch("/update-calendars", updateCalendars);




export default route;