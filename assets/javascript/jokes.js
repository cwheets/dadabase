$('.carousel').carousel({
    interval: 6000
  })
$(`#joke-form`).submit(event => {
    event.preventDefault()

    var joke = $('#joke').val().trim()
    $.ajax({
        url: "/api/jokes",
        method: "POST", 
        data: {
            joke: joke
        }
    }).then(response => {
 
        $.ajax({
            url: `/api/jokes`,
            method: "GET"
        }).then(read => {
            for (let i = 0; i < read.length; i++) {
               
            var results = read[i].joke

            var newJoke = $("<p>");

            newJoke.text(results);
            
            var newJokeDiv = $('<div>');
            newJokeDiv.attr("class", "carousel-item");
            newJokeDiv.append(newJoke);
            $(`#carousel1holder`).append(newJokeDiv);
            
            }
        })
    
    })
})
$('#carousel1holder').carousel();