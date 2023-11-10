
    var page = 1;
    function getRugby(pageDirection) {
      if (pageDirection == "next") {
        page++;
        $('#pageNo').html(page);
      }

      if (pageDirection == "previous") {
        page--;
        $('#pageNo').html(page);
      }
      $.getJSON({
        url: "https://content.guardianapis.com/search?page-size=5&show-fields=all&api-key=8193cdac-7310-49a5-9703-27ae3248d318&page=" +
        page +
        "&section=sport&q=rugby",
        error: function (xhr) { console.log("An error occured: " + xhr.status + " " + xhr.statusText); },
        success: function (data) {
          var results = data.response.results;
          $('.c24 .card-img-top').attr("src", results[0].fields.thumbnail);
          $('.c24 .headline').html(results[0].fields.headline);
          $('.c24 .trailText').html(results[0].fields.trailText);
          $('.c24 .firstPublicationDate').html(results[0].fields.firstPublicationDate);

          $('.c25 .card-img-top').attr("src", results[1].fields.thumbnail);
          $('.c25 .headline').html(results[1].fields.headline);
          $('.c25 .trailText').html(results[1].fields.trailText);
          $('.c25 .firstPublicationDate').html(results[1].fields.firstPublicationDate);

          $('.c26 .card-img-top').attr("src", results[2].fields.thumbnail);
          $('.c26 .headline').html(results[2].fields.headline);
          $('.c26 .trailText').html(results[2].fields.trailText);
          $('.c26 .firstPublicationDate').html(results[2].fields.firstPublicationDate);5

          $('.c27 .card-img-top').attr("src", results[3].fields.thumbnail);
          $('.c27 .headline').html(results[3].fields.headline);
          $('.c27 .trailText').html(results[3].fields.trailText);
          $('.c27 .firstPublicationDate').html(results[3].fields.firstPublicationDate);

          $('.c28 .card-img-top').attr("src", results[4].fields.thumbnail);
          $('.c28 .headline').html(results[4].fields.headline);
          $('.c28 .trailText').html(results[4].fields.trailText);
          $('.c28 .firstPublicationDate').html(results[4].fields.firstPublicationDate);

        }

      });
    }

    $(document).ready(function () {
      getRugby();

      getRugby("");
      $("#rnext").click(function () {
        getRugby("next");
        return false;
      });

      $("#rprev").click(function () {
        getRugby("prev");
        return false;
      });
    });
