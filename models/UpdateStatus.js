const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UpdateStatusSchema = new Schema({
  patientCount: {
    type: Number,
    required: true,
  },
  totalPatients: {
    type: Number,
    required: true,
  },
  testsAvailable: {
    type: Number,
    required: true,
  },
  ppeLevel: {
    type: Number,
    required: true,
  },
  fullMedicalCare: {
    type: Boolean,
    required: true,
  },
  acceptingCovidPatients: {
    type: Boolean,
  },
  acceptingNonCovidPatients: {
    type: Boolean,
  },
  testingOnlyCovid: {
    type: Boolean,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = UpdateStatus = mongoose.model(
  'updateStatus',
  UpdateStatusSchema
);
