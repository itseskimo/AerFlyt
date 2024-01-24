import mongoose from "mongoose";

const CalendarSchema = new mongoose.Schema({
    day: { type: String, required: true },
    date: { type: String, required: true },
    slots: { type: [String], default: [] },
  });
  
  const CalendarModel = mongoose.model('Calendar', CalendarSchema);
  export default CalendarModel;