
    var page = 1;
    function getTennis(pageDirection) {
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
        "&section=sport&q=tennis",
        error: function (xhr) { console.log("An error occured: " + xhr.status + " " + xhr.statusText); },
        success: function (data) {
          var results = data.response.results;
          $('.c19 .card-img-top').attr("src", results[0].fields.thumbnail);
          $('.c19 .headline').html(results[0].fields.headline);
          $('.c19 .trailText').html(results[0].fields.trailText);
          $('.c19 .firstPublicationDate').html(results[0].fields.firstPublicationDate);

          $('.c20 .card-img-top').attr("src", results[1].fields.thumbnail);
          $('.c20 .headline').html(results[1].fields.headline);
          $('.c20 .trailText').html(results[1].fields.trailText);
          $('.c20 .firstPublicationDate').html(results[1].fields.firstPublicationDate);

          $('.c21 .card-img-top').attr("src", results[2].fields.thumbnail);
          $('.c21 .headline').html(results[2].fields.headline);
          $('.c21 .trailText').html(results[2].fields.trailText);
          $('.c21.firstPublicationDate').html(results[2].fields.firstPublicationDate);

          $('.c22 .card-img-top').attr("src", results[3].fields.thumbnail);
          $('.c22 .headline').html(results[3].fields.headline);
          $('.c22 .trailText').html(results[3].fields.trailText);
          $('.c22 .firstPublicationDate').html(results[3].fields.firstPublicationDate);

          $('.c23 .card-img-top').attr("src", results[4].fields.thumbnail);
          $('.c23 .headline').html(results[4].fields.headline);
          $('.c23 .trailText').html(results[4].fields.trailText);
          $('.c23 .firstPublicationDate').html(results[4].fields.firstPublicationDate);

        }

      });
    }

    $(document).ready(function () {
      getTennis();

      getTennis("");
      $("#tnext").click(function () {
        getTennis("next");
        return false;
      });

      $("#tprev").click(function () {
        getTennis("prev");
        return false;
      });
    });
