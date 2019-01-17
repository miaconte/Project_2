app.post("/api/post", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a post or not.
    // It will do this by sending out the value "true" have a post
    // req.body is available since we're using the body parsing middleware
    if (postData.length < 5) {
      postData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the post while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    postData.length = [];
    waitListData.length = [];

    res.json({ ok: true });
  });
