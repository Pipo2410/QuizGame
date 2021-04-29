const fs = require('fs');

const questions = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/questions.json`)
);

exports.checkID = (req, res, next, val) => {
  if (val > questions[questions.length - 1].id) {
    return res.status(404).json({
      status: 'fail',
      message: 'No question with this id',
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.id) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing ID property',
    });
  }
  next();
};

exports.getQuestion = (req, res) => {
  const questionID = req.params.id * 1;
  const question = questions.find((q) => q.id === questionID);

  res.status(200).json({
    status: 'success',
    data: {
      id: questionID,
      question: question.question,
      answers: question.answers,
    },
  });
};

exports.postAnswer = (req, res) => {
  const questionID = req.params.id * 1;
  const answerID = req.body.id;
  const question = questions.find((q) => q.id === questionID);
  // const correct = question.correct === answerID ? 'correct' : 'incorrect';
  const correct = question.correct === answerID ? true : false;
  const correctAnswer = question.answers.find(
    (el) => el.id === question.correct
  );

  res.status(200).json({
    status: 'success',
    data: {
      answer: correct,
      correctAnswer: correctAnswer.text,
    },
  });
};
