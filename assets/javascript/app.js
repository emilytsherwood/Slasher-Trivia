$(document).ready(function() {
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
    var choicesIndex = 0; //answerIndex starts at 1st choice (index0) in object array
    var currentAnswer = true;
    var seconds;
    var countdown;

    function setCurrentQuestion(i) {
        //Displays the question on the HTML
        $('#question').html(trivia.questions[i].question);
        $('.a').html(trivia.questions[i].choices[0]);
        $('.b').html(trivia.questions[i].choices[1]); //CORRECT
        $('.c').html(trivia.questions[i].choices[2]);
        $('.d').html(trivia.questions[i].choices[3]);
    } //end of function
    setCurrentQuestion(0);

    var question = trivia.questions[questionIndex];
    console.log(questionIndex);
    var choicesIndex = (trivia.questions[questionIndex].choices);
    // choicesIndex.attr('data-index');
    // choicesIndex.addClass('userChoice');
    // $('label').html('.userChoice') 

    //Making the click function relate to one of the choices the user picks
    $('input[type=radio]').one('click', function() {
        userGuess = $(this);
        console.log(userGuess);
        //     for (i = 0; i < 4; i++) {
        // };
        // Right or wrong answers
        // var correctAnswer = trivia.questions[i].answer[i];
        // if (userGuess == correctAnswer) {
        //     console.log(right++);
        //     alert('You are correct');
        //     next();
        // } else 
        // { (userGuess != correctAnswer)
        //     console.log(wrong++);
        //     alert('Wrong!');
        //     next();
        // }
        if ($('input[type=radio]').prop('checked')) {
            alert('You are Correct!');
            console.log(right++);
            next();
        } else {
            alert('Incorrect!');
            console.log(wrong++)
            next();
        };

        // resetQ();
        //Can do it one at a time...for each correct answer
        //Create a function for the conditional...

        function next() {
            // setCurrentQuestion(questionIndex +1)
            for (i = 0; i < trivia.questions.length; i += 1) {
                console.log('I do not know what to do here');
            }


var timer = setInterval(function(){
	myTimer()
}, 1000);
var d = 5;

function myTimer() {
	console.log(d--);
	// $('#timer-display').html = d++;
}
};
});
});

            //         function resetQ() {
            // $('input[type=radio]').prop('checked', false)
            //         }
            //     	}

            // function timer() {
            //     seconds = 3;
            //     countdown = setInterval(threeSeconds, 1000 * 3);
            // }

            // function showTimer() {
            //     seconds--
            //     $('#timer').html('<h3>seconds</h3>');
            //     if (seconds < 1) {
            //         clearInterval(countdown);
            //         alert('You ran out of time');
            //     }
            // }

    //     };
    // })

         

// setInterval (threeSeconds * 3);

// var correctAnswer = trivia.questions[i].answer;
      		// if (correctAnswer == trivia.questions[i].answer)
      		// {
      		// 	alert ("Correct")
      		// }
      		// else {
      		// 	alert ("No")

	// if($('input[type=radio]').prop('checked')){
	// 	alert ('You are Correct!');
	// 	console.log(right++);
	// 	next();
	// } else {
	// 	alert ('Incorrect!');
	// 	console.log(wrong++)
	// }

//Need to specify correct answer another way

	//reset function, reset the radio buttons! So that B isn't pressed on next question on DOM


//select div and add a click handler 
//and call setcurrent question with the next index

