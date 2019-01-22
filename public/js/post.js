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
    $.ajax("/api/posts", {
      type: "POST",
      data: newPost
    }).then(
      function() {
        console.log("created new activity");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".deleteAct").on("submit", function(event) {
  //   event.preventDefault();
  //   var id = $(".post_id").val().trim()
  //   console.log(id);

  //   // Send the DELETE request.
  //   $.ajax("/api/posts/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted post", id);
  //       // Reload the page to get the updated list
  //       location.reload();
      }
    );
//   });
// });
