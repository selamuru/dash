<!--
  function get_route() {
    console.log($("form input").val());
    if (!$("form input").val()) { return; }

    $.ajax({
      url: "/route/" + $("form input").val(),
      type: 'GET',
      success: function(data) {
        console.log(data);
        var results = $.parseJSON(data);
        console.log(results);
        if (results && results.length !== 0) {
          // clear previous search results
          $("#results").empty();

          // iterate over each element in API response
          $.each(results, function(index, value) {
            console.log(value);
            // TODO(jdlew): This needs to be templatized so values can be
            // substitued easily.
            var markup =
              '<div class="row">' +
                '<div class="col-md-7">' +
                  '<a href="#">' +
                    '<img class="img-responsive" src="http://placehold.it/700x300" alt="">' +
                  '</a>' +
                '</div>' +
                '<div class="col-md-5">';

            $.each(this, function(key, value) {
              console.log("Key: " + key + "; Value: " + value);
              switch (key) {
                default:
                  console.log("Unknown key: ", key);
              }
            });
            markup +=
                '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Laudantium veniam exercitationem expedita laborum at voluptate. ' +
                'Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>' +
                '<a class="btn btn-primary" href="#">View Website <span class="glyphicon glyphicon-chevron-right"></span></a>' +
              '</div>' +
            '</div>' +
            '<hr>';
            $("#results").append(markup);
          });

          // display results
          toggle_visibility("results", true);
        } else {
          console.log("Empty response", results);
        }
      },
      error: function(data) {
        console.log("Bad response", data);
      }
    });
  }
//-->
