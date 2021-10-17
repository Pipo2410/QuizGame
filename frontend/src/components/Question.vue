<template>
  <h1 class="question heading-primary">{{ question }}</h1>
  <form @submit.prevent class="form">
    <div
      v-for="(option, index) in options"
      :key="index"
      class="form__radio-group"
    >
      <input
        type="radio"
        name="question"
        :id="index"
        class="form__radio-input"
        :correct="option.correct"
        :answer-id="option.id"
        @click="$emit('answerID', option.id)"
      />
      <label :for="index" class="form__radio-label"
        ><span class="form__radio-button"></span>{{ option.text }}</label
      >
    </div>
  </form>
</template>

<script>
export default {
  emits: ['answerID'],
  props: {
    question: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    check: {
      type: Boolean,
    },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heading-primary {
  font-size: 2rem;
}
.section-quiz h1 {
  border-bottom: 1px dotted #ccc;
}
.section-quiz.incorrect {
  -webkit-animation: blinkRed 1s ease-in-out;
  animation: blinkRed 1s ease-in-out;
  transition: backgroundColor 1s;
  background-color: #ff6038;
}
.section-quiz.correct {
  -webkit-animation: blinkCorrect 1s ease-in-out;
  animation: blinkCorrect 1s ease-in-out;
  transition: backgroundColor 1s;
  background-color: #7ed56f;
}
.form {
  margin-top: 2rem;
}

.form__radio-group {
  display: inline-block;
  width: 50%;
  margin-bottom: 2rem;
}
.form__radio-input {
  display: none;
}
.form__radio-label {
  font-size: 1.6rem;
  cursor: pointer;
  position: relative;
  width: 100%;
}
.form__radio-button {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: 0.5rem solid #2998ff;
  border-radius: 50%;
  vertical-align: middle;
  position: relative;
  margin-right: 1rem;
}
.form__radio-button::after {
  content: '';
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  background-color: #2998ff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  opacity: 0;
  visibility: hidden;
}
.form__radio-input:checked ~ .form__radio-label .form__radio-button::after {
  opacity: 1;
  visibility: visible;
}
</style>
