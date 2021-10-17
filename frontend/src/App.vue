<template>
  <div>
    <h1 class="heading-primary">Quiz</h1>
    <p class="heading-secondary">
      Please answer all questions to test your knowledge about <b>English</b>
    </p>
    <div v-if="!questionShown" class="container">
      <section class="section-quiz text-center">
        <button @click="startGame" class="btn">
          Start Game
        </button>
      </section>
    </div>
    <div class="container" v-else>
      <section class="section-quiz">
        <Question
          :question="this.question"
          :options="this.answers"
          @answerID="setAnswerID"
        ></Question>
        <div v-if="correct" class="response-text">
          <p>
            Your answer "{{ correctAnswer }}" is: <b>{{ correct }}</b>
          </p>
        </div>
        <div v-else-if="correct === false" class="response-text">
          <p @click="getRandomQuestionNumber">
            Your answer is: <b>{{ correct }}</b>
          </p>
          <p>
            Correct answer is: <b>"{{ correctAnswer }}"</b>
          </p>
        </div>
        <div class="cta-buttons">
          <button @click="submitAnswer" class="btn" :disabled="submitDisabled">
            Submit
          </button>
          <button @click="nextQuestion" v-show="showNextBtn" class="btn">
            Next
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Question from './components/Question.vue';
import axios from 'axios';
export default {
  components: { Question },
  name: 'App',
  data() {
    return {
      currentQuestionIndex: 1,
      question: '',
      answers: [],
      showNextBtn: false,
      questionShown: false,
      correct: null,
      correctAnswer: '',
      sentAnwer: null,
      score: 0,
    };
  },
  computed: {
    submitDisabled() {
      // disable submit button if "Next" btn is shown
      return this.showNextBtn ? true : false;
    },
  },
  methods: {
    setAnswerID(id) {
      this.sentAnwer = id;
    },
    startGame() {
      this.currentQuestionIndex = 1; // needed when reset the game at the end
      this.score = 0;
      this.questionShown = !this.questionShown;
      this.getQuestion();
    },
    nextQuestion() {
      this.answers = [];
      this.currentQuestionIndex++;
      this.showNextBtn = !this.showNextBtn;
      this.sentAnwer = null;
      if (this.currentQuestionIndex <= 20) {
        this.getQuestion();
      } else {
        this.questionShown = !this.questionShown;
        alert(`You finished with ${this.score} points`);
      }
      this.correct = '';
    },
    getQuestion() {
      axios
        .get(
          `http://127.0.0.1:3000/api/v1/question/${this.currentQuestionIndex}`
        )
        .then((res) => {
          this.question = res.data.data.question;
          res.data.data.answers.map((ans) => this.answers.push(ans));
          this.questionsLength = res.data.data.questionsLength;
        });
    },
    postAnswer() {
      axios
        .post(
          `http://127.0.0.1:3000/api/v1/question/${this.currentQuestionIndex}`,
          {
            id: this.sentAnwer,
          }
        )
        .then((res) => {
          this.correct = res.data.data.answer;
          this.correctAnswer = res.data.data.correctAnswer;
          // add +1 to the score
          if (this.correct) {
            this.score++;
          }
        });
    },
    submitAnswer() {
      if (this.sentAnwer === null) {
        return alert('Choose an answer');
      }
      this.showNextBtn = !this.showNextBtn;
      this.postAnswer();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 10rem;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  height: 100vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(227, 238, 255, 0.8),
      rgba(41, 152, 255, 0.8)
    ),
    url('./assets/chairs.jpg');
  background-size: cover;
}

.heading-primary {
  font-size: 4rem;
  -webkit-animation: moveInRight 1s ease-in-out;
  animation: moveInRight 1s ease-in-out;
}

.heading-secondary {
  font-size: 2rem;
  -webkit-animation: moveInLeft 1s ease-in-out;
  animation: moveInLeft 1s ease-in-out;
}

.container {
  margin-top: 3rem;
}
.section-quiz {
  width: 100rem;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: left;
  padding: 3rem;
  border-radius: 0.3rem;
  box-shadow: 0.5rem 0.5rem 2rem 0.5rem rgba(0, 0, 0, 0.2);
  -webkit-animation: moveInBottom 0.5s ease-in-out 0.75s;
  animation: moveInBottom 0.5s ease-in-out 0.75s;
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
}
.cta-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}
.btn {
  font-size: 3rem;
  color: #fff;
  border-radius: 0.4rem;
  display: inline-block;
  border: 2px solid transparent;
  line-height: 1;
  padding: 1rem 3rem;
  border-radius: 10rem;
  background-image: linear-gradient(to right bottom, #5643fa, #2998ff);
  position: relative;
  transition: all 0.2s;
  z-index: 2;
  border: none;
  cursor: pointer;
}
.btn:disabled {
  background: #cecece;
}
.btn:disabled::after {
  background: #cecece;
}
.btn::after {
  content: '';
  display: inline-block;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right bottom, #5643fa, #2998ff);
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10rem;
  z-index: -1;
  opacity: 1;
  transition: all 0.4s;
}
.btn:focus {
  outline: none;
}
.btn:hover {
  color: #fff;
  transform: translateY(-0.3rem);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
}
.btn:hover::after {
  opacity: 0;
  transform: scaleX(1.4) scaleY(1.6);
}
.response-text {
  margin-top: 2rem;
  text-align: center;
  font-size: 1.8rem;
}
.text-center {
  text-align: center;
}
</style>
