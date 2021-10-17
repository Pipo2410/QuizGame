import { createApp } from 'vue';
import App from './App.vue';
import Question from './components/Question.vue';

const app = createApp(App);
app.component('question', Question);

app.mount('#app');
