import mongoose from "mongoose";

const CalendarSchema = new mongoose.Schema({
  calendars: [
    {
      day: { type: String, required: true },
      date: { type: String, required: true },
      selectedSlots: { type: [String], default: [] },
    }
  ]
});
  
  const CalendarModel = mongoose.model('Calendar', CalendarSchema);
  export default CalendarModel;