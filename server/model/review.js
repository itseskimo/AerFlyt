import mongoose from "mongoose";


const reviewsSchema = new mongoose.Schema({
  quote: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  designation: { type: String, required: true },
  rating: { type: String, required: true },
  image: { type: String, required: true },
});

const ReviewsModel = mongoose.model("reviews", reviewsSchema);
export default ReviewsModel;