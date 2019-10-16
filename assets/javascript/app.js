// Start of carousel with jokes

$('.carousel').carousel({
    interval: 7000
  })

  for (let i = 0; i < 4; i++) {
      $.ajax({
          type: 'GET',
          url:"https://icanhazdadjoke.com",
          headers: {
              "Accept":"application/json",
            }
        }).then(function (response) {
            var results = response.joke;
            
            console.log(response);
                var newJoke = $("<p>");

                newJoke.text(results);
                
                console.log($(`#carousel1holder`));
                var newJokeDiv = $('<div>');
                newJokeDiv.attr("class", "carousel-item");
                newJokeDiv.append(newJoke);
                $(`#carousel1holder`).append(newJokeDiv);
            });
        }
$('#carousel1holder').carousel();

// End of carousel with jokes

// Hide registration area and then show when register button is clicked

$("#register").hide();
$("#registerBtn").on('click', function(){
    $("#register").show();
    $("#login").hide();
});