const mongoose = require('mongoose');

const GradesSchema = mongoose.Schema({
    score: {
        type: Number
      },
    student_id: {
        type: Number
      },
    type: {
        type: String
      }
});


module.exports = mongoose.model('Grades', GradesSchema);