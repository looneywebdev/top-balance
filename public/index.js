
//get topBalance first
function getBalance() {
    $.get('/top-balance', function(balance) {
        $('.result').text(balance.Balance);
        console.log(balance);
    });
}

// const targetUrl="http%3A%2F%2Flocalhost%3A8080"

// $.ajax({
//     type:"GET",
//     url: targetUrl,
//     crossDomain: true,
//     success: function (data) {
//         ('.results').html(data);
//         console.log(data);
//     }
// });

//listen for submit and then place the initial value in "results" or do the math and get the new value


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
        // $.put(`/top-balance/${queryTarget}`, function(balance) {
        //     $('.result').text(balance.Balance);
        //     console.log(balance);
        // });
    });
}

$(function (){
  listen();
});

//submit event handler
//prevent default when submit button is pressed
//define a variable for user input
