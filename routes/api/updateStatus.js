const express = require('express');
let UpdateStatus = require('../../models/UpdateStatus');
const router = express.Router();

router.get('/', (req, res) => {
  //   Report.find({ user: req.user.id })
  UpdateStatus.find()
    .then((updateStatus) => res.json(updateStatus))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
  //   req.body.user = req.user.id;
  const statusData = {
    patientCount: req.body.patientCount,
    totalPatients: req.body.totalPatients,
    testsAvailable: req.body.testsAvailable,
    ppeLevel: req.body.ppeLevel,
    fullMedicalCare: req.body.fullMedicalCare,
    acceptingCovidPatients: req.body.acceptingCovidPatients,
    acceptingNonCovidPatients: req.body.acceptingNonCovidPatients,
    testingOnlyCovid: req.body.testingOnlyCovid,
    user: req.body.user,
    createdAt: req.body.createdAt,
  };
  const newStatus = new UpdateStatus(statusData);
  newStatus
    .save()
    .then(() => res.json('Status Updated'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// router.get('/:id', (req, res) => {
//   UpdateStatus.findById(req.params.id)
//     .then((upddateStatus) => res.json(updateStatus))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// router.delete("/:id", (req, res) => {
//   Report.findByIdAndDelete(req.params.id)
//     .then(() => res.json("Report Deleted!"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

module.exports = router;
