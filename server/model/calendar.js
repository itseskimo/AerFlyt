import mongoose from "mongoose";


const CalendarSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  calendars: [
    {
      day: { type: String, required: true },
      date: { type: String, required: true },
      selectedSlots: [
        {
          remark: { type: String, default: '' },
          assignedDoctor: { type: String, default: '' },
          period: { type: String, default: '' },
          timestamp: { type: String, required: true },
        },
      ],
    },
  ],
});
  
  const CalendarModel = mongoose.model('Calendar', CalendarSchema);
  export default CalendarModel;