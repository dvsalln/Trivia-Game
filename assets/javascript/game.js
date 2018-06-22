var panel = $('#quiz-area');

//CLICK EVENTS

$(document).on('click', '#startBtn', function(e) {
  game.start();
});

$(document).on('click', '#doneBtn', function(e) {
  game.done();
});

//QUESTIONS ARRAY

var questions = [{
  question: "1 . How many eggs were given to Danerys Stormborn?",
  answers: ["One ", "Two ", "Three "],
  correctAnswer: "Three "
}, {
  question: "2 . What is the name of John Snows Sword?",
  answers: ["Longfellow ", "Swordie ", "Excalibur "],
  correctAnswer: "Longfellow "
}, {
  question: "3 . What is the symbol of the House of Stark?",
  answers: ["Deer ", "Snake ", "Wolf "],
  correctAnswer: "Wolf "
}, {
  question: "4 . What killed King Geoffrey?",
  answers: ["Wound ", "Poison ", "Obesity "],
  correctAnswer: "Poison "
}, {
  question: "5 . Who wrote Game of Thrones?",
  answers: ["George Bush ", "George R. R. Martin ", "J. K. Rowling"],
  correctAnswer: "George R. R. Martin "
}];

//SETS GAME STATS
var game = {
  correct:0,
  incorrect:0,
  counter:45,

  // COUNTDOWN TIMER FUNCTION
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);
  // TIME UP FUNCTION
    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },
  //START FUNCTION
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">45</span> Seconds</h2>');
    $('#startBtn').remove();


    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }
    // ADDS DONE BUTTON TO END OF QUIZ
    panel.append('<button class="btn-success" id="doneBtn">Done</button>');
  },
  //DONE FUNCTION
  done: function() {

// CHECKS CORRECT ANSWERS
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('#subwrapper h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }

};


