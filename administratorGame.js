window.onload = function(){
    linkCategorytoDB()
};

document.querySelector('#log-out-button').addEventListener('click', () => {
    window.location.href = './loginPage.html';
});

document.querySelector('#Edit-playerButton').addEventListener('click', () => {
    window.location.href = './editPlayer.html';
});

document.querySelector('#Edit-quizButton').addEventListener('click', () => {
    window.location.href = './editQuiz.html';
});


function linkCategorytoDB (){
    var categories = [];
     db.allDocs({
        include_docs: true
      }).then(function (result) {
       var dbList = result.rows;
       dbList.forEach(element => {
           if(!categories.includes(element.doc.quizName))
           {
            categories.push(element.doc.quizName)
           }
       })
            for(var i =0; i< categories.length; i++)
            {
                option += '<option value="' + categories[i] + '">' + categories[i] + "</option>"
            }
                document.getElementById('quizFormControl').innerHTML = option
                alert(categories)
         });
    }


function getdetails(e){
    e.preventDefault();
    var e = document.getElementById("quizFormControl");
    var quizCategoryName = e.value;
    //alert(quizCategoryName);
db.allDocs({
        include_docs: true
      }).then(function (result) {
       var quizName = result.rows;
       console.log(quizName);
       $("#quizTable tr").remove(); 
       quizName.forEach(element => {
        if(element.doc.quizName == quizCategoryName)
           var row = "<tr><td>" + element.doc.quizName + "</td><td>" + element.doc.question + "</td><td>" + "<td>" + element.doc.correctanswer + "</td><td>" + "<button>Edit Question</button>" + "</td><td>" + "<button>Delete Question</button>" + "</td></tr>";
           $("#quizTable").append(row);
       });
      }).catch(function (err) {
        console.log(err);
      });
}

$('#quizFormControl').on('change', getdetails);



//I need to dynamically add the quizzes into this array from the quiz db, based on the quiz name stored in the db

// var as = document.forms[0].ddlViewBy.value;
//   var strUser = e.options[e.selectedIndex].value;
//   console.log(as, strUser);






//On the click of the option, the questions and answers need to be displayed in a table