
//get topBalance first
function getBalance() {
    $.get('/top-balance', function(balance) {
        $('.result').text(balance.Balance);
        console.log(balance);
    });
}


function listen() {
    console.log("Listen");
    getBalance();
    $(".submit").submit(function(ev){
        console.log('Handling submit');
        ev.preventDefault();
        let queryTarget = $(".top").val();
        $(".top").val("");
        console.log(queryTarget);
        $.ajax({
            url: `/top-balance/${queryTarget}`,
            type: 'PUT',
            success: function(balance) {
                $('.result').text(balance.Balance);
                console.log(balance);
            }
        })
    });
}

$(function (){
  listen();
});

//submit event handler
//prevent default when submit button is pressed
//define a variable for user input
