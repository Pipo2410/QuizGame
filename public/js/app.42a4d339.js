(function(t){function e(e){for(var r,c,i=e[0],u=e[1],a=e[2],b=0,d=[];b<i.length;b++)c=i[b],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&d.push(s[c][0]),s[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==s[u]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},s={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var a=0;a<i.length;a++)e(i[a]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3c3d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),s=Object(r["f"])("h1",{class:"heading-primary"},"Quiz",-1),o=Object(r["f"])("p",{class:"heading-secondary"},[Object(r["e"])(" Please answer all questions to test your knowledge about "),Object(r["f"])("b",null,"English")],-1),c={key:0,class:"container"},i={class:"section-quiz text-center"},u={key:1,class:"container"},a={class:"section-quiz"},l={key:0,class:"response-text"},b={key:1,class:"response-text"},d=Object(r["e"])(" Your answer is: "),f=Object(r["e"])(" Correct answer is: "),p={class:"cta-buttons"};function h(t,e,n,h,O,j){var w=Object(r["k"])("Question");return Object(r["g"])(),Object(r["c"])("div",null,[s,o,O.questionShown?(Object(r["g"])(),Object(r["c"])("div",u,[Object(r["f"])("section",a,[Object(r["f"])(w,{question:this.question,options:this.answers,onAnswerID:j.setAnswerID},null,8,["question","options","onAnswerID"]),O.correct?(Object(r["g"])(),Object(r["c"])("div",l,[Object(r["f"])("p",null,[Object(r["e"])(' Your answer "'+Object(r["l"])(O.correctAnswer)+'" is: ',1),Object(r["f"])("b",null,Object(r["l"])(O.correct),1)])])):!1===O.correct?(Object(r["g"])(),Object(r["c"])("div",b,[Object(r["f"])("p",{onClick:e[2]||(e[2]=function(){return t.getRandomQuestionNumber&&t.getRandomQuestionNumber.apply(t,arguments)})},[d,Object(r["f"])("b",null,Object(r["l"])(O.correct),1)]),Object(r["f"])("p",null,[f,Object(r["f"])("b",null,'"'+Object(r["l"])(O.correctAnswer)+'"',1)])])):Object(r["d"])("",!0),Object(r["f"])("div",p,[Object(r["f"])("button",{onClick:e[3]||(e[3]=function(){return j.submitAnswer&&j.submitAnswer.apply(j,arguments)}),class:"btn",disabled:j.submitDisabled}," Submit ",8,["disabled"]),Object(r["n"])(Object(r["f"])("button",{onClick:e[4]||(e[4]=function(){return j.nextQuestion&&j.nextQuestion.apply(j,arguments)}),class:"btn"}," Next ",512),[[r["m"],O.showNextBtn]])])])])):(Object(r["g"])(),Object(r["c"])("div",c,[Object(r["f"])("section",i,[Object(r["f"])("button",{onClick:e[1]||(e[1]=function(){return j.startGame&&j.startGame.apply(j,arguments)}),class:"btn"}," Start Game ")])]))])}n("d81d");var O=Object(r["p"])("data-v-279387de");Object(r["i"])("data-v-279387de");var j={class:"question heading-primary"},w=Object(r["f"])("span",{class:"form__radio-button"},null,-1);Object(r["h"])();var m=O((function(t,e,n,s,o,c){return Object(r["g"])(),Object(r["c"])(r["a"],null,[Object(r["f"])("h1",j,Object(r["l"])(n.question),1),Object(r["f"])("form",{onSubmit:e[1]||(e[1]=Object(r["o"])((function(){}),["prevent"])),class:"form"},[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(n.options,(function(e,n){return Object(r["g"])(),Object(r["c"])("div",{key:n,class:"form__radio-group"},[Object(r["f"])("input",{type:"radio",name:"question",id:n,class:"form__radio-input",correct:e.correct,"answer-id":e.id,onClick:function(n){return t.$emit("answerID",e.id)}},null,8,["id","correct","answer-id","onClick"]),Object(r["f"])("label",{for:n,class:"form__radio-label"},[w,Object(r["e"])(Object(r["l"])(e.text),1)],8,["for"])])})),128))],32)],64)})),v={emits:["answerID"],props:{question:{type:String,required:!0},options:{type:Array,required:!0},check:{type:Boolean}},methods:{}};n("cca2");v.render=m,v.__scopeId="data-v-279387de";var y=v,g=n("bc3a"),x=n.n(g),q={components:{Question:y},name:"App",data:function(){return{currentQuestionIndex:1,question:"",answers:[],showNextBtn:!1,questionShown:!1,correct:null,correctAnswer:"",sentAnwer:null,score:0}},computed:{submitDisabled:function(){return!!this.showNextBtn}},methods:{setAnswerID:function(t){this.sentAnwer=t},startGame:function(){this.currentQuestionIndex=1,this.score=0,this.questionShown=!this.questionShown,this.getQuestion()},nextQuestion:function(){this.answers=[],this.currentQuestionIndex++,this.showNextBtn=!this.showNextBtn,this.sentAnwer=null,this.currentQuestionIndex<=20?this.getQuestion():(this.questionShown=!this.questionShown,alert("You finished with ".concat(this.score," points"))),this.correct=""},getQuestion:function(){var t=this;x.a.get("http://127.0.0.1:3000/api/v1/question/".concat(this.currentQuestionIndex)).then((function(e){t.question=e.data.data.question,e.data.data.answers.map((function(e){return t.answers.push(e)})),t.questionsLength=e.data.data.questionsLength}))},postAnswer:function(){var t=this;x.a.post("http://127.0.0.1:3000/api/v1/question/".concat(this.currentQuestionIndex),{id:this.sentAnwer}).then((function(e){t.correct=e.data.data.answer,t.correctAnswer=e.data.data.correctAnswer,t.correct&&t.score++}))},submitAnswer:function(){if(null===this.sentAnwer)return alert("Choose an answer");this.showNextBtn=!this.showNextBtn,this.postAnswer()}}};n("aa3c");q.render=h;var A=q,k=Object(r["b"])(A);k.component("question",y),k.mount("#app")},"95ab":function(t,e,n){},aa3c:function(t,e,n){"use strict";n("3c3d")},cca2:function(t,e,n){"use strict";n("95ab")}});
//# sourceMappingURL=app.42a4d339.js.map