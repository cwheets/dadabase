$(document).ready(event => {
    $.ajax({
        url: `/api/story`,
        method: "GET"
      }).then(read => {
        $("#cardBody").empty();
        console.log(read)
        for (let i = 0; i < read.length; i++) {
          var user = $("<p>")
          var newtitle = $("<h3>");
          var newstory = $("<p>");
          var div = $("<div>");

          newtitle.text(read[i].title);
          newstory.text(read[i].story);
          user.text(read[i].User.username);

          div.addClass("card");

          div.append(newtitle);
          div.append(newstory);
           div.append(user)
          $("#cardBody").append(div);
        }
      });
})



$(`#story-submit`).submit(event => {
  event.preventDefault();
  

  var title = $("#storyTitle")
    .val()
    .trim();
  var story = $("#storyBody")
    .val()
    .trim();
  if (title === "" || story === "") {
  } else {
    $.ajax({
      url: "/api/story",
      method: "POST",
      data: {
        title: title,
        story: story
      }
    }).then(response => {
      if (response === "you must login to post!") {
        alert(response);
      } else {
          $.ajax({
            url: `/api/story`,
            method: "GET"
          }).then(read => {
            $("#cardBody").empty();
            console.log(read)
            for (let i = 0; i < read.length; i++) {
              var user = $("<p>")
              var newtitle = $("<h3>");
              var newstory = $("<p>");
              var div = $("<div>");

              newtitle.text(read[i].title);
              newstory.text(read[i].story);
              user.text("-" + read[i].User.username);

              div.addClass("card");

              div.append(newtitle);
              div.append(newstory);
               div.append(user)
              $("#cardBody").append(div);
            }
          });
      }
    });
  }
});
