const express = require('express');
const questionController = require('./../controllers/questionController');

const router = express.Router();

router.param('id', questionController.checkID);

router
  .route('/:id')
  .get(questionController.getQuestion)
  .post(questionController.checkBody, questionController.postAnswer);

module.exports = router;
