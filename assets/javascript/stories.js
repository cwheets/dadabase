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
        console.log(response)
    })
})