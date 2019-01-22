// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("#post_id").on("click", function(event) {
    var id = $(this).data("id");
    var actPost = $(this).data("newPost");

    var actPost = {
      sleepy: newSleep
    };

    // Send the PUT request.
    $.ajax("/api/cats/" + id, {
      type: "PUT",
      data: newPost
    }).then(
      function() {
        console.log("updated activity to ", newPost);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".postAct").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newPost = {
      eventName: $("#event_name").val().trim(),
      link: $("#actLink").val().trim(),
      category: $("#event_category").val().trim(),
      city: $("#event_city").val().trim(),
    };

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

  $(".deleteAct").on("submit", function(event) {
    event.preventDefault();
    var id = $(".post_id").val().trim()
    console.log(id);

    // Send the DELETE request.
    $.ajax("/api/posts/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted post", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
