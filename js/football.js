var page = 1;

function getArticle(id) {
  console.log(
    "https://content.guardianapis.com/search?id=" +
      id +
      "&show-fields=all&api-key=db11cbf0-530f-4c48-a05e-2fa334a6646e&page=" +
      page +
      "&section=football"
  );
  $.getJSON({
    url:
      "https://content.guardianapis.com/" +
      id +
      "?show-fields=all&api-key=db11cbf0-530f-4c48-a05e-2fa334a6646e",
    error: function (xhr) {
      console.log("An error occured: " + xhr.status + " " + xhr.statusText);
    },
    success: function (data) {
      var content = data.response.content;
      console.log(content.fields.thumbnail);
      console.log(content.fields.trailText);
      $("#article .card-img-top").attr("src", content.fields.thumbnail);
      $("#article .headline").html(content.fields.headline);
      $("#article .trailText").html(content.fields.trailText);
      $("#article .firstPublicationDate").html(
        content.fields.firstPublicationDate
      );
      $("#article .bodyText").html(content.fields.body);
    },
  });
}

function getFootball(pageDirection) {
  if (pageDirection == "next") {
    page++;
    $("#pageNo").html(page);
  }
  if (pageDirection == "prev" && page > "1") {
    page--;
    $("#pageNo").html(page);
  }
  $.getJSON({
    url:
      "https://content.guardianapis.com/search?page-size=5&show-fields=all&api-key=8193cdac-7310-49a5-9703-27ae3248d318&page=" +
      page +
      "&section=football",
    error: function (xhr) {
      console.log("An error occured: " + xhr.status + " " + xhr.statusText);
    },
    success: function (data) {
      var results = data.response.results;
      $(".c9 .card-img-top").attr("src", results[0].fields.thumbnail);
      $(".c9 .headline").html(results[0].fields.headline);
      $(".c9 .trailText").html(results[0].fields.trailText);
      $(".c9 .firstPublicationDate").html(
        results[0].fields.firstPublicationDate
      );
      $(".c9").attr("data-id", results[0].id);

      $(".c10 .card-img-top").attr("src", results[1].fields.thumbnail);
      $(".c10 .headline").html(results[1].fields.headline);
      $(".c10 .trailText").html(results[1].fields.trailText);
      $(".c10 .firstPublicationDate").html(
        results[1].fields.firstPublicationDate
      );
      $(".c10").attr("data-id", results[1].id);

      $(".c11 .card-img-top").attr("src", results[2].fields.thumbnail);
      $(".c11 .headline").html(results[2].fields.headline);
      $(".c11 .trailText").html(results[2].fields.trailText);
      $(".c11 .firstPublicationDate").html(
        results[2].fields.firstPublicationDate
      );
      $(".c11").attr("data-id", results[2].id);

      $(".c12 .card-img-top").attr("src", results[3].fields.thumbnail);
      $(".c12 .headline").html(results[3].fields.headline);
      $(".c12 .trailText").html(results[3].fields.trailText);
      $(".c12 .firstPublicationDate").html(
        results[3].fields.firstPublicationDate
      );
      $(".c12").attr("data-id", results[3].id);

      $(".c13 .card-img-top").attr("src", results[4].fields.thumbnail);
      $(".c13 .headline").html(results[4].fields.headline);
      $(".c13 .trailText").html(results[4].fields.trailText);
      $(".c13 .firstPublicationDate").html(
        results[4].fields.firstPublicationDate
      );
      $(".c13").attr("data-id", results[4].id);
    },
  });
}

$(document).ready(function () {
  getFootball();

  getFootball("");
  $("#fnext").click(function () {
    getFootball("next");
    return false;
  });

  $("#fprev").click(function () {
    getFootball("prev");
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
