const mongoose = require("mongoose");

const lectureProgressSchema = new mongoose.Schema({
  lectureId: String,
  viewed: Boolean,
  dateViewed: Date,
});

const courseProgressschema = new mongoose.Schema({
  userId: String,
  courseId: String,
  completed: Boolean,
  completionDate: Date,
  lecturesProgress: [lectureProgressSchema],
});

module.exports = mongoose.model("Progress", courseProgressschema);
