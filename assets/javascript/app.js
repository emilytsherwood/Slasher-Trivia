$(document).ready(function() {

var trivia = {
	questions: [
		{
			question: 'According to Complex.com, who is hailed as the ultimate all-time Queen Supreme of all scream queens?',
			choices: ['Kate McNeil', 'Jamie Lee-Curtis', 'Mary Sellers', 'Neve Campbell'],
			answer: 1, //index position in the above array this is referring to
		},
		{
			question: 'Which film is unique in that it was Harvey and Bob Weinstein’s first film as producers?',
			choices: ['Halloween', 'Scream', 'The Burning', 'Deep Red'],
			answer: 2,
		},
		{
			question: 'Which film ruined the UK career of director Michael Powell?',
			choices: ['Peeping Tom', 'The Red Shoes', '49th Parallel', 'Uncle Silas'],
			answer: 0,
		},
		{	
			question: 'Which famous American slasher film was based partly on the real-life case of the Gainesville Ripper?',
			choices: ['Halloween', 'Child\'s Play', 'Friday The 13th', 'Scream'],
			answer: 3,
		},
		{
			question: '"Whatever you do, don\'t fall asleep" is the famous line from which classic slasher flick?',
			choices: ['Halloween', 'The Burning', 'Nightmare on Elm Street', 'Scream'],
			answer: 2,
		}
	]
};

var points; //will tally each correct answer
var losses; //will tally each incorrect answer
var currentQ;
// var userChoice; //On click event?
//Create an if/else that will alert player if they've won or lost the total game

// function newGame(){
// 	currentQ = trivia.questions[0].question;
// 	$('#question').html(currentQ);
// 	for(var i = 0; i < 4; i++){
// 		$('.a').text(currentQ.answer[i]);
// 	}
// }



// //rendering questions and answers on the DOM

// function firstQ(){
// 	$('#question').html(trivia.questions[0].question);
// 	$('.a').html(trivia.questions[0].choices[0]);
// 	$('.b').html(trivia.questions[0].choices[1]);//CORRECT
// 	$('.c').html(trivia.questions[0].choices[2]);
// 	$('.d').html(trivia.questions[0].choices[3]);
// $('input[type=radio]').click(function(){
// 	if($('input[value=choiceB').prop('checked')){
// 		alert ('You are Correct!');
// 	} else {
// 		alert ('Incorrect!');
// 	}
// });
// };
// firstQ();


// function secondQ(){
// 	$('#question').html(trivia.questions[1].question);
// 	$('.a').html(trivia.questions[1].choices[0]);
// 	$('.b').html(trivia.questions[1].choices[1]);
// 	$('.c').html(trivia.questions[1].choices[2]);//CORRECT
// 	$('.d').html(trivia.questions[1].choices[3]);
// $('input[type=radio]').click(function(){
// 	if($('input[value=choiceC').prop('checked')){
// 		alert ('You are Correct!');
// 	} else {
// 		alert ('Incorrect!');
// 	}
// });
// };
// secondQ();

// function thirdQ(){
// 	$('#question').html(trivia.questions[2].question);
// 	$('.a').html(trivia.questions[2].choices[0]);//CORRECT
// 	$('.b').html(trivia.questions[2].choices[1]);
// 	$('.c').html(trivia.questions[2].choices[2]);
// 	$('.d').html(trivia.questions[2].choices[3]);

// 	$('#choiceA').on('click', function(){
// 	// userChoice = $(this).data('index')
// 	$('#choiceA').removeClass('a')
// 	alert ("Correct!")
// });
// $('#choiceA','#choiceC','#choiceD').on('click', function(){
// 	alert ("Incorrect!")
// });
// };
// thirdQ();

// function fourthQ(){
// 	$('#question').html(trivia.questions[3].question);
// 	$('.a').html(trivia.questions[3].choices[0]);
// 	$('.b').html(trivia.questions[3].choices[1]);
// 	$('.c').html(trivia.questions[3].choices[2]);
// 	$('.d').html(trivia.questions[3].choices[3]);//CORRECT

// $('input[type=radio]').click(function(){
// 	if($('input[value=choiceD').prop('checked')){
// 		alert ('You are Correct!');
// 	} else {
// 		alert ('Incorrect!');
// 	}
// });
// };
// fourthQ();

function fifthQ(){
	$('#question').html(trivia.questions[4].question);
	$('.a').html(trivia.questions[4].choices[0]);
	$('.b').html(trivia.questions[4].choices[1]);
	$('.c').html(trivia.questions[4].choices[2]);//CORRECT
	$('.d').html(trivia.questions[4].choices[3]);

	$('input[type=radio]').click(function(){
	if($('input[value=choiceC').prop('checked')){
		alert ('You are Correct!');
	} else {
		alert ('Incorrect!');
	}
});
};
fifthQ();


// function firstConditional(){
// 	var answer = $('#choiceB')
// 	$('input:radio:checked').is(':checked') 
// 		alert('CORRECT')
// 		points++
// };

// firstConditional();


// $(function toCheck(){
// 	$('[name="selection"]:checked').addClass('selected');
// });
// $(document).on('click', '[name="selection"]', function(){
// 	if(!$(this).hasClass('selected')){
// 		var userChoice = $('.selected[name="selection"]');
// 		if (userChoice == 2){
// 			alert("Correct")
// 		}
// 	}
// })




//Create a loop to run through the functions
	// $('.submit-button').click(function(){
	// 	if $('#choiceB').is(':checked'){
	// 		alert('Correct!');}
	// 	}
	// });


// setInterval(function() {            
//     document
//         .html('question')
//         .innerHTML = trivia.questions.question[i++];
//     if (i == trivia.questions.question.length) i = 0;   // reset to first element if you've reached the end
// }, 1000);                       


//Need to create a function with the if and else statements
//Call that function in the for loop
//ex.  for (var i = 0; i < qAndA.questions.length; i += 1) {
        //     askQuestion(qAndA.questions[i]);
        // }




// }
//loop through the questions...
//need to find a way to move onto the next question
//must press submit button to move along


});


//for document.ready function