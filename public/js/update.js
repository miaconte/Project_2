// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  
    $("#postAct2").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("hit");
  
      var updatePost = {
        id: $("#post_id").val().trim(),
        eventName: $("#event_name").val().trim(),
        link: $("#actLink").val().trim(),
        category: $("#event_category").val().trim(),
        city: $("#event_city").val().trim(),
      };
      console.log(updatePost);
      // Send the POST request.
      $.ajax("/api/activities", {
        type: "PUT",
        data: JSON.stringify(updatePost),
        contentType: "application/json",
      }).then(
        function(data) {
          console.log(data);
          alert("Your update was successly added! Your post id # is the same as before - " + data.id)
          console.log("created new activity");
          // Reload the page to get the updated list
          window.location.href = "/";
         
        }
      );
    });
  
        }
      );
  
  