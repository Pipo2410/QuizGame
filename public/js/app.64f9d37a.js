(function(t){function e(e){for(var o,s,i=e[0],a=e[1],u=e[2],x=0,d=[];x<i.length;x++)s=i[x],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&d.push(c[s][0]),c[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);l&&l(e);while(d.length)d.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],o=!0,i=1;i<r.length;i++){var a=r[i];0!==c[a]&&(o=!1)}o&&(n.splice(e--,1),t=s(s.s=r[0]))}return t}var o={},c={app:0},n=[];function s(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=o,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(r,o,function(e){return t[e]}.bind(null,o));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=a;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"2e45":function(t,e,r){"use strict";r("73b8")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("7a23"),c=Object(o["e"])("h1",{class:"heading-primary"},"Quiz",-1),n=Object(o["e"])("p",{class:"heading-secondary"},[Object(o["d"])(" Please answer all questions to test your knowledge about "),Object(o["e"])("b",null,"English")],-1),s={key:0,class:"container"},i={class:"section-quiz text-center"},a={key:1,class:"container"},u={class:"section-quiz"},l={class:"cta-buttons"};function x(t,e,r,x,d,b){var f=Object(o["j"])("Question");return Object(o["f"])(),Object(o["c"])("div",null,[c,n,d.questionShown?(Object(o["f"])(),Object(o["c"])("div",a,[Object(o["e"])("section",u,[Object(o["e"])(f,{question:d.questions[d.currentQuestionIndex].question,options:d.questions[d.currentQuestionIndex].answers},null,8,["question","options"]),Object(o["e"])("div",l,[Object(o["e"])("button",{onClick:e[2]||(e[2]=function(){return b.submitAnswer&&b.submitAnswer.apply(b,arguments)}),class:"btn",disabled:b.submitDisabled}," Submit ",8,["disabled"]),Object(o["m"])(Object(o["e"])("button",{onClick:e[3]||(e[3]=function(){return b.nextQuestion&&b.nextQuestion.apply(b,arguments)}),class:"btn"}," Next ",512),[[o["l"],d.showNextBtn]])])])])):(Object(o["f"])(),Object(o["c"])("div",s,[Object(o["e"])("section",i,[Object(o["e"])("button",{onClick:e[1]||(e[1]=function(){return b.startGame&&b.startGame.apply(b,arguments)}),class:"btn"}," Start Game ")])]))])}var d=r("2909"),b=(r("d81d"),Object(o["o"])("data-v-0d3f42aa"));Object(o["h"])("data-v-0d3f42aa");var f={class:"question heading-primary"},h=Object(o["e"])("span",{class:"form__radio-button"},null,-1);Object(o["g"])();var p=b((function(t,e,r,c,n,s){return Object(o["f"])(),Object(o["c"])(o["a"],null,[Object(o["e"])("h1",f,Object(o["k"])(r.question),1),Object(o["e"])("form",{onSubmit:e[1]||(e[1]=Object(o["n"])((function(){}),["prevent"])),class:"form"},[(Object(o["f"])(!0),Object(o["c"])(o["a"],null,Object(o["i"])(r.options,(function(t,e){return Object(o["f"])(),Object(o["c"])("div",{key:e,class:"form__radio-group"},[Object(o["e"])("input",{type:"radio",name:"question",id:e,class:"form__radio-input",correct:t.correct},null,8,["id","correct"]),Object(o["e"])("label",{for:e,class:"form__radio-label"},[h,Object(o["d"])(Object(o["k"])(t.text),1)],8,["for"])])})),128))],32)],64)})),m={props:{question:{type:String,required:!0},options:{type:Array,required:!0},check:{type:Boolean,required:!0}},methods:{}};r("2e45");m.render=p,m.__scopeId="data-v-0d3f42aa";var y=m,w={components:{Question:y},name:"App",data:function(){return{currentQuestionIndex:0,showNextBtn:!1,questionShown:!1,questions:[{question:"Where do you live?",answers:[{text:"I am live in London",correct:!1},{text:"My live is London.",correct:!1},{text:"I live in London.",correct:!0},{text:"I lives in London",correct:!1}]},{question:"Choose the correct answer",answers:[{text:"He has two brothers.",correct:!0},{text:"I has two brothers",correct:!1},{text:"He got two brothers.",correct:!1},{text:"He two brothers.",correct:!1}]},{question:"Choose the correct answer",answers:[{text:"Me like coffee.",correct:!1},{text:"I like coffee.",correct:!0},{text:"I likes the coffee",correct:!1},{text:"Me don't like coffee.",correct:!1}]},{question:"Choose the correct answer",answers:[{text:"She lives on your street.",correct:!0},{text:"She live on your street.",correct:!1},{text:"She do on your street.",correct:!1},{text:"She does on your street.",correct:!1}]},{question:"Peter and Sidney are......Australia.",answers:[{text:"from",correct:!0},{text:"by",correct:!1},{text:"for",correct:!1},{text:"per",correct:!1}]},{question:"Choose the correct answer",answers:[{text:"They is Italian.",correct:!1},{text:"They is Italy.",correct:!1},{text:"They are Italian.",correct:!0},{text:"They Italian.",correct:!1}]},{question:"Are you German?",answers:[{text:"No. My are American.",correct:!1},{text:"No. My is American.",correct:!1},{text:"No. I is American.",correct:!1},{text:"No. I am American.",correct:!0}]},{question:"Do you like music?",answers:[{text:"Yes, I does.",correct:!1},{text:"Yes, I like.",correct:!1},{text:"Yes, I do.",correct:!0},{text:"Yes, I am.",correct:!1}]},{question:"We walk......work every day.",answers:[{text:"to",correct:!0},{text:"by",correct:!1},{text:"at",correct:!1},{text:"of",correct:!1}]},{question:"We don't go......train.",answers:[{text:"to",correct:!1},{text:"by",correct:!0},{text:"at",correct:!1},{text:"out",correct:!1}]},{question:"My birthday is......the third of March.",answers:[{text:"to",correct:!1},{text:"on",correct:!0},{text:"at",correct:!1},{text:"out",correct:!1}]},{question:"Do you go to the beach......summer?",answers:[{text:"in",correct:!0},{text:"on",correct:!1},{text:"at",correct:!1},{text:"out",correct:!1}]},{question:"I live......Rosemary Road.",answers:[{text:"from",correct:!1},{text:"on",correct:!1},{text:"at",correct:!0},{text:"out",correct:!1}]},{question:"I got a dog......my birthday!",answers:[{text:"from",correct:!1},{text:"on",correct:!1},{text:"for",correct:!0},{text:"out",correct:!1}]},{question:"She is married......a doctor.",answers:[{text:"from",correct:!1},{text:"on",correct:!1},{text:"to",correct:!0},{text:"out",correct:!1}]},{question:"You can come......me.",answers:[{text:"from",correct:!1},{text:"on",correct:!1},{text:"with",correct:!0},{text:"out",correct:!1}]},{question:"We always eat chicken......Christmas.",answers:[{text:"from",correct:!1},{text:"on",correct:!0},{text:"with",correct:!1},{text:"out",correct:!1}]},{question:"Spot the different one",answers:[{text:"man",correct:!1},{text:"cat",correct:!0},{text:"boy",correct:!1},{text:"girl",correct:!1}]},{question:"Spot the different one",answers:[{text:"car",correct:!1},{text:"motorcycle",correct:!1},{text:"truck",correct:!1},{text:"bike",correct:!0}]},{question:"Spot the different one",answers:[{text:"airport",correct:!1},{text:"train station",correct:!1},{text:"bus station",correct:!1},{text:"market",correct:!0}]}]}},computed:{submitDisabled:function(){return!!this.showNextBtn}},methods:{startGame:function(){var t=this;this.questionShown=!this.questionShown;var e=Object(d["a"])(this.questions);e=this.randomizeArray(e),e.map((function(e){e.answers=t.randomizeArray(e.answers)})),this.questions=e},nextQuestion:function(){this.currentQuestionIndex++,this.showNextBtn=!this.showNextBtn},submitAnswer:function(){this.showNextBtn=!this.showNextBtn},randomizeArray:function(t){var e=t.length;while(e>0){var r=Math.floor(Math.random()*e);e--;var o=t[e];t[e]=t[r],t[r]=o}return t}}};r("9ed1");w.render=x;var O=w,j=Object(o["b"])(O);j.component("question",y),j.mount("#app")},"73b8":function(t,e,r){},"9ed1":function(t,e,r){"use strict";r("db88")},db88:function(t,e,r){}});
//# sourceMappingURL=app.64f9d37a.js.map