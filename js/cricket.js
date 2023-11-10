var page = 1;

function getArticle(id) {
  console.log(
    "https://content.guardianapis.com/search?page-size=5&show-fields=all&api-key=8193cdac-7310-49a5-9703-27ae3248d318&page=" +
      page +
      "&section=sport&q=cricket"
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
  $("#article").show();
}

function getCricket(pageDirection) {
  if (pageDirection == "next") {
    page++;
    $("#pageNo").html(page);
  }
  if (pageDirection == "previous" && page > "1") {
    page--;
    $("#pageNo").html(page);
  }

  $.getJSON({
    url:
      "https://content.guardianapis.com/search?page-size=5&show-fields=all&api-key=8193cdac-7310-49a5-9703-27ae3248d318&page=" +
      page +
      "&section=sport&q=cricket",
    error: function (xhr) {
      console.log("An error occured: " + xhr.status + " " + xhr.statusText);
    },
    success: function (data) {
      var results = data.response.results;
      $(".c14 .card-img-top").attr("src", results[0].fields.thumbnail);
      $(".c14 .headline").html(results[0].fields.headline);
      $(".c14 .trailText").html(results[0].fields.trailText);
      $(".c14 .firstPublicationDate").html(
        results[0].fields.firstPublicationDate
      );
      $(".c14").attr("data-id", results[0].id);

      $(".c15 .card-img-top").attr("src", results[1].fields.thumbnail);
      $(".c15 .headline").html(results[1].fields.headline);
      $(".c15 .trailText").html(results[1].fields.trailText);
      $(".c15 .firstPublicationDate").html(
        results[1].fields.firstPublicationDate
      );
      $(".c14").attr("data-id", results[1].id);

      $(".c16 .card-img-top").attr("src", results[2].fields.thumbnail);
      $(".c16 .headline").html(results[2].fields.headline);
      $(".c16 .trailText").html(results[2].fields.trailText);
      $(".c16 .firstPublicationDate").html(
        results[2].fields.firstPublicationDate
      );
      $(".c14").attr("data-id", results[2].id);

      $(".c17 .card-img-top").attr("src", results[3].fields.thumbnail);
      $(".c17 .headline").html(results[3].fields.headline);
      $(".c17 .trailText").html(results[3].fields.trailText);
      $(".c17 .firstPublicationDate").html(
        results[3].fields.firstPublicationDate
      );
      $(".c14").attr("data-id", results[3].id);

      $(".c18 .card-img-top").attr("src", results[4].fields.thumbnail);
      $(".c18 .headline").html(results[4].fields.headline);
      $(".c18 .trailText").html(results[4].fields.trailText);
      $(".c18 .firstPublicationDate").html(
        results[4].fields.firstPublicationDate
      );
      $(".c14").attr("data-id", results[4].id);
    },
  });
}

$(document).ready(function () {
  getCricket();

  getCricket("");
  $("#cnext").click(function () {
    getCricket("next");
    return false;
  });

  $("#cprev").click(function () {
    getCricket("prev");
    return false;
  });

  $(".card").click(function () {
    getArticle(this.getAttribute("data-id"));
    console.log(this.getAttribute("data-id"));
  });
});

$(".navHome").click(function () {
  $("#football").hide();
  $("#tennis").hide();
  $("#rugby").hide();
  $("#article").hide();
  $("#home").show();
  $("#main").show();
  page = 1;
});

$(".navCricket").click(function () {
  $("#home").hide();
  $("#article").hide();
  $("#cricket").show();
  $("#main").show();
  page = 1;
});
