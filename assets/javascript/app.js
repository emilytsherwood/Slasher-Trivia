// $(document).ready(function() {
var trivia = {
    questions: [{
        question: 'According to Complex.com, who is hailed as the ultimate all-time Queen Supreme of all scream queens?',
        choices: ['Kate McNeil', 'Jamie Lee-Curtis', 'Mary Sellers', 'Neve Campbell'],
        answer: 1, //index position in the above array this is referring to
    }, {
        question: 'Which film is unique in that it was Harvey and Bob Weinstein’s first film as producers?',
        choices: ['Halloween', 'Scream', 'The Burning', 'Deep Red'],
        answer: 2,
    }, {
        question: 'Which film ruined the UK career of director Michael Powell?',
        choices: ['Peeping Tom', 'The Red Shoes', '49th Parallel', 'Uncle Silas'],
        answer: 0,
    }, {
        question: 'Which famous American slasher film was based partly on the real-life case of the Gainesville Ripper?',
        choices: ['Halloween', 'Child\'s Play', 'Friday The 13th', 'Scream'],
        answer: 3,
    }, {
        question: '"Whatever you do, don\'t fall asleep" is the famous line from which classic slasher flick?',
        choices: ['Halloween', 'The Burning', 'Nightmare on Elm Street', 'Scream'],
        answer: 2,
    }]
};

var right = 1; //will tally each correct answer
var wrong = 1; //will tally each incorrect answer
var userGuess;
var questionIndex = 0; //questionIndex starts at 1st question (index0) in object array

function setCurrentQuestion(i) {
    //Displays the question on the HTML
    $('#question').html(trivia.questions[i].question);
    $('.a').html(trivia.questions[i].choices[0]);
    $('.b').html(trivia.questions[i].choices[1]); //CORRECT
    $('.c').html(trivia.questions[i].choices[2]);
    $('.d').html(trivia.questions[i].choices[3]);
} //end of function
setCurrentQuestion(0);

var timer = setInterval(function() {
    myTimer()
}, 1000);
var countdown = 130;

function myTimer() {
    $('#timer-display').html(countdown--);
    if (countdown < 0) {
    clearInterval(timer);
    alert("You are out of time!");
    reset();
}
}

//Making the click function relate to one of the choices the user picks
$('input[type=radio]').on('click', function() {
    userGuess = $(this).data('index');
    console.log(userGuess);

    // Right or wrong answers
    var correctAnswer = trivia.questions[questionIndex].answer;
    if (userGuess == correctAnswer) {
        $('.right-score').html('Right:' + ' ' + right++);
        alert('Correct!');
        next();
    } else {
        (userGuess != correctAnswer)
        $('.wrong-score').html('Wrong:' + ' ' + wrong++);
        alert('Wrong!');
        next();
    }
});

function next() {
    questionIndex++;
    setCurrentQuestion(questionIndex);
    $('input[type=radio]').attr("checked", false);
};

function reset() {
    setCurrentQuestion(0);
    var timer = setInterval(function() {
        myTimer()
    }, 1000);
var countdown = 5;

function myTimer() {
    $('#timer-display').html(countdown--);
    if (countdown < 0) {
    clearInterval(timer);
    alert("You are out of time!");
    reset();
}
}
};


        
   

