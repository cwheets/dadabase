$(document).ready(event => {
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




$('.carousel').carousel({
    interval: 4000
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
        
        if (response === "you must login to post!") {
            alert(response);
          } else {
        $.ajax({
            url: `/api/jokes`,
            method: "GET"
        }).then(read => {
            for (let i = 0; i < read.length; i++) {
               
            var results = read[i].joke
            var name = read[i].User.username
            var newJoke = $("<p>");
            var addname = $("<p>");
            newJoke.text(results);
            addname.text(name)
            var newJokeDiv = $('<div>');
            newJokeDiv.attr("class", "carousel-item");
            newJokeDiv.append(newJoke);
            newJokeDiv.append(-`${addname}`)
            $(`#carousel1holder`).append(newJokeDiv);
            
            }
            window.location.reload()
        })
    }
    })
})
$('#carousel1holder').carousel();