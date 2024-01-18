import mongoose from "mongoose";


const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    expertise: { type: String, required: true },
  });
  
  const DoctorModel = mongoose.model("doctors", doctorSchema);
  export default DoctorModel;