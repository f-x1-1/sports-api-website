var page = 1;

function getHome(pageDirection) {
  if (pageDirection == "next") {
    page++;
    $("#pageNo").html(page);
  }

  if (pageDirection == "prev") {
    page--;
    $("#pageNo").html(page);
  }
  $.getJSON({
    url:
      "https://content.guardianapis.com/search?page-size=2&show-fields=all&api-key=8193cdac-7310-49a5-9703-27ae3248d318&page=" +
      page +
      "&section=football",
    error: function (xhr) {
      console.log("An error occured: " + xhr.status + " " + xhr.statusText);
    },
    success: function (data) {
      var results = data.response.results;
      $(".c1 .card-img-top").attr("src", results[0].fields.thumbnail);
      $(".c1 .headline").html(results[0].fields.headline);
      $(".c1 .trailText").html(results[0].fields.trailText);
      $(".c1 .firstPublicationDate").html(
        results[0].fields.firstPublicationDate
      );
      $(".c1").attr("data-id", results[0].id);

      $(".c5 .card-img-top").attr("src", results[1].fields.thumbnail);
      $(".c5 .headline").html(results[1].fields.headline);
      $(".c5 .trailText").html(results[1].fields.trailText);
      $(".c5 .firstPublicationDate").html(
        results[1].fields.firstPublicationDate
      );
      $(".c5").attr("data-id", results[1].id);
    },
  });
  $.getJSON({
    url:
      "https://content.guardianapis.com/search?page-size=2&show-fields=all&api-key=8193cdac-7310-49a5-9703-27ae3248d318&page=" +
      page +
      "&section=sport&q=cricket",
    error: function (xhr) {
      console.log("An error occured: " + xhr.status + " " + xhr.statusText);
    },
    success: function (data) {
      var results = data.response.results;
      $(".c2 .card-img-top").attr("src", results[0].fields.thumbnail);
      $(".c2 .headline").html(results[0].fields.headline);
      $(".c2 .trailText").html(results[0].fields.trailText);
      $(".c2 .firstPublicationDate").html(
        results[0].fields.firstPublicationDate
      );
      $(".c2").attr("data-id", results[0].id);

      $(".c6 .card-img-top").attr("src", results[1].fields.thumbnail);
      $(".c6 .headline").html(results[1].fields.headline);
      $(".c6 .trailText").html(results[1].fields.trailText);
      $(".c6 .firstPublicationDate").html(
        results[1].fields.firstPublicationDate
      );
      $(".c6").attr("data-id", results[1].id);
    },
  });

  $.getJSON({
    url:
      "https://content.guardianapis.com/search?page-size=2&show-fields=all&api-key=8193cdac-7310-49a5-9703-27ae3248d318&page=" +
      page +
      "&section=sport&q=tennis",
    error: function (xhr) {
      console.log("An error occured: " + xhr.status + " " + xhr.statusText);
    },
    success: function (data) {
      var results = data.response.results;

      $(".c3 .card-img-top").attr("src", results[0].fields.thumbnail);
      $(".c3 .headline").html(results[0].fields.headline);
      $(".c3 .trailText").html(results[0].fields.trailText);
      $(".c3 .firstPublicationDate").html(
        results[0].fields.firstPublicationDate
      );
      $(".c3").attr("data-id", results[0].id);

      $(".c7 .card-img-top").attr("src", results[1].fields.thumbnail);
      $(".c7 .headline").html(results[1].fields.headline);
      $(".c7 .trailText").html(results[1].fields.trailText);
      $(".c7 .firstPublicationDate").html(
        results[1].fields.firstPublicationDate
      );
      $(".c7").attr("data-id", results[1].id);
    },
  });

  $.getJSON({
    url:
      "https://content.guardianapis.com/search?page-size=2&show-fields=all&api-key=8193cdac-7310-49a5-9703-27ae3248d318&page=" +
      page +
      "&section=sport&q=rugby",
    error: function (xhr) {
      console.log("An error occured: " + xhr.status + " " + xhr.statusText);
    },
    success: function (data) {
      var results = data.response.results;

      $(".c4 .card-img-top").attr("src", results[0].fields.thumbnail);
      $(".c4 .headline").html(results[0].fields.headline);
      $(".c4 .trailText").html(results[0].fields.trailText);
      $(".c4 .firstPublicationDate").html(
        results[0].fields.firstPublicationDate
      );
      $(".c4").attr("data-id", results[0].id);

      $(".c8 .card-img-top").attr("src", results[1].fields.thumbnail);
      $(".c8 .headline").html(results[1].fields.headline);
      $(".c8 .trailText").html(results[1].fields.trailText);
      $(".c8 .firstPublicationDate").html(
        results[1].fields.firstPublicationDate
      );
      $(".c8").attr("data-id", results[1].id);
    },
  });
}

$(document).ready(function () {
  getHome();

  getHome("");
  $("#hnext").click(function () {
    getHome("next");
    return false;
  });

  $("#hprev").click(function () {
    getHome("prev");
    return false;
  });

  $(".card").click(function () {
    getArticle(this.getAttribute("data-id"));
    console.log(this.getAttribute("data-id"));
    $("#article").show();
    $("#football").hide();
    $("#home").hide();
    $("#tennis").hide();
    $("#rugby").hide();
    $("#cricket").hide();
  });
});
