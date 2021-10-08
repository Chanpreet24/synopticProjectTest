document.querySelector('#log-out-button').addEventListener('click', () => {
    window.location.href = './loginPage.html';
});


var categories = [
    'films','sports', 'numbers'
];

var option = "";

for(var i =0; i< categories.length; i++)
{
    option += '<option value="' + categories[i] + '">' + categories[i] + "</option>"
}
document.getElementById('quizFormControl').innerHTML = option


//only the questions need to be displayed in a table