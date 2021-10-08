
function deletePlayer(e){
    e.preventDefault();
    var playerToBeDeleted = $('#deletePlayer').val();
    db2.get(playerToBeDeleted).then(function(doc){
        console.log(JSON.stringify(doc));
        return db2.remove(doc);
    });

    {
       return window.location.href = './editPlayer.html';
    };
}


$('#deletePlayerBtn').on('click',deletePlayer);

function checkEmail() {
    try{
        var p = $('#add-player-form-email').val();
        var newemailregexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // var regularexpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (newemailregexp.test(p)){
            alert("Valid email");
            return true;
        }
        else {
            alert("Invalid email address");  
            return false;
        }
    } catch (e) {
       alert(e.message);
    }                          
}

function isPasswordValid() {
    var pass = $('#add-player-form-password').val();
    if(pass.length == 0 || pass.length < 4 || pass.length > 15) {
        alert ("Password is too short");
        return false;
    } else{
        return true;
    }
}


function progressToQuizPage() {
    var email = checkEmail();
    var password = isPasswordValid();
    var validationError = document.getElementById('add-Forms');
 
     if (email == true && password == true) {
        var doc = {
            _id: $('#add-player-form-email').val(),
            name: $('#add-player-form-name').val(),
            email: $('#add-player-form-email').val(),
            password: $('#add-player-form-password').val(),
            role: $('#add-player-role').val()
        };

        db2.put(doc,function(err,res){
            if(err){
                switch(err.message){
                    case 'Document update conflict':
                        alert("User already exists, please log in below");
                        window.location.href = './editPlayer.html';
                        break;
                    default:
                        window.location.href = './editPlayer.html';
                        break;
                }
            }else{
                alert(JSON.stringify(res));
            }
        });

        window.location.href = './game.html';
    } else
    alert ("There is a validation error");
    

}


document.querySelector('#edit-back-button').addEventListener('click', () => {
    window.location.href = './administratorGame.html';
});


