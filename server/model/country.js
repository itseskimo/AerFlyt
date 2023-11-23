import mongoose from "mongoose";


const countrySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    price: { type: String, required: true },
    expected_date: { type: String, required: true },
    image: { type: String, required: true },
  });
  
  const CountryModel = mongoose.model("country", countrySchema);
  export default CountryModel;