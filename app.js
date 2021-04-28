const express = require('express');
const fs = require('fs');

const app = express();
const questions = JSON.parse(
  fs.readFileSync(`${__dirname}/data/questions.json`)
);

// MIDDLEWARE
app.use(express.json());
app.use(express.static('public'));
app.use('/api/v1/question/:id', (req, res, next) => {
  if (req.params.id > questions[questions.length - 1].id) {
    return res.status(404).json({
      status: 'fail',
      message: 'No question with this id',
    });
  }
  next();
});

// ROUTE HANDLERS
app.get('/api/v1/question/:id', (req, res) => {
  const questionID = req.params.id * 1;
  const question = questions.find((q) => q.id === questionID);
  console.log(question);

  res.status(200).json({
    status: 'success',
    data: {
      id: questionID,
      question: question.question,
      answers: question.answers,
    },
  });
});

app.post('/api/v1/question/:id', (req, res) => {
  const questionID = req.params.id * 1;
  const answerID = req.body.id;
  const question = questions.find((q) => q.id === questionID);
  const correct = question.correct === answerID ? 'correct' : 'incorrect';
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
});

// SERVER
const port = 3000;
app.listen(port, () => {
  console.log('App listening on port 3000!');
});
