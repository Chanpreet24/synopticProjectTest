window.onload = function(){
    linkCategorytoDB()
};


document.querySelector('#log-out-button').addEventListener('click', () => {
    window.location.href = './loginPage.html';
});

var option = "";

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







//only the questions need to be displayed in a table