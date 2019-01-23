// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  
  $("#postAct").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("hit");
    var newPost = {
      eventName: $("#event_name").val().trim(),
      link: $("#actLink").val().trim(),
      category: $("#event_category").val().trim(),
      city: $("#event_city").val().trim(),
    };
    console.log(newPost);
    // Send the POST request.
    $.ajax("/api/activities", {
      type: "POST",
      data: JSON.stringify(newPost),
      contentType: "application/json",
    }).then(
      function(data) {
        console.log(data);
        $("#postIDHere").text(data.id);

        console.log("created new activity");
        // Reload the page to get the updated list
        $('#idNumberArea').show();
              var timer = setTimeout(function() {
                window.location='/home'
            }, 10000);
       
      }
    );
  });

      }
    );

