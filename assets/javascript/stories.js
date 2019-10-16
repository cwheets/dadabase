$(`#story-submit`).submit(event => {
    event.preventDefault()

    var title = $('#storyTitle').val().trim()
    var story = $('#storyBody').val().trim()

    $.ajax({
        url: "/api/story",
        method: "POST",
        data: {
            title: title,
            story: story
            
        }
    }).then(response => {
        console.log(response)
 
            $.ajax({
                url: `/api/story`,
                method: "GET"
            }).then(read => {
                    
                $("#cardBody").empty()

                for (let i = 0; i < read.length; i++) {
                   

                    var newtitle = $("<h3>")
                    var newstory = $("<p>")
                    var div = $("<div>")

                    newtitle.text(read[i].title)
                    newstory.text(read[i].story)

                    div.addClass("card")

                    div.append(newtitle)
                    div.append(newstory)

                    $("#cardBody").append(div)
                    
                    
                     
    
                
                } 
                
            })
        
        })
    })
