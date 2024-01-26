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
          assignedDoctor: { type: String, default: '' },
          period: { type: String, default: '' },
          timestamp: { type: String, required: true },
          users: [
            {
              remarks: { type: String, required: true },
              userId: { type: String, required: true },
            }
          ]
        },
      ],
    },
  ],
});

const CalendarModel = mongoose.model('Calendar', CalendarSchema);
export default CalendarModel;