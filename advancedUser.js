document.querySelector('#log-out-button').addEventListener('click', () => {
    window.location.href = './loginPage.html';
});

document.querySelector('#Edit-quizButton').addEventListener('click', () => {
    window.location.href = './editQuiz.html';
});


function getdetails(e){
    e.preventDefault();
    var category = $('#numbersButton').val();
    alert(category);
}

$('#numbersButton').on('click', getdetails);

$('#filmsButton').on('click', getdetails);

$('#sportsButton').on('click', getdetails);


//I need to dynamically add the quizzes into this array from the quiz db, based on the quiz name stored in the db

var categories = [
    'films','sports', 'numbers'
];


var option = "";

for(var i =0; i< categories.length; i++)
{
    option += '<option value="' + categories[i] + '">' + categories[i] + "</option>"
}
document.getElementById('quizFormControl').innerHTML = option


//On the click of the option, the questions and answers need to be displayed in a table