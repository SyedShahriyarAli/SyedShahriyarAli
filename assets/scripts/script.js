$(function () {
  GetBlogs();
  GetVideos();
});

function GetBlogs() {
  $.ajax({
    url: "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shahriyarali08",
    method: "GET",
    success: GotBlogs,
    error: function () {
      console.log("Error: Unable to fetch data from the API");
    },
  });
}

function GetVideos() {
  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCgl164IdvBLNN44DYE4l5Rg&maxResults=50&key=AIzaSyCGH47FLPHRaobDe2-rc4RdToWeLKsPZvk&maxResults=3&order=date",
    method: "GET",
    success: GotVideos,
    error: function () {
      console.log("Error: Unable to fetch data from the API");
    },
  });
}

function GotBlogs(data) {
  var blogs = data.items;

  var html = "";
  for (var i = 0; i < 3; i++) {
    var date = new Date(blogs[i].pubDate);
    html += `<a href="${blogs[i].guid}" target="_blank">
            <div class="row">
                <div class="col-4"> <img src="${blogs[i].thumbnail}"/> </div>
                <div class="col-8 p-1">
                    <h3>${blogs[i].title}</h3>
                    <span class="categories">${blogs[i].categories.join(
                      ", "
                    )}</span>
                    <span class="date">${date.toLocaleString("en-US")}</span>
                </div>
            </div>
        </a>
        <hr>`;
  }

  $("#blogs").html(html);
}

function GotVideos(data) {
  var videos = data.items;

  var html = "";
  for (var i = 0; i < 3; i++) {
    var date = new Date(videos[i].snippet.publishedAt);
    html += `<a href="https://www.youtube.com/watch?v=${
      videos[i].id.videoId
    }" target="_blank">
            <div class="row">
                <div class="col-4"> <img src="${
                  videos[i].snippet.thumbnails.medium.url
                }"/> </div>
                <div class="col-8 p-1">
                    <h3>${videos[i].snippet.title}</h3>
                    <span class="description">${
                      videos[i].snippet.description
                    }</span>
                    <span class="date">${date.toLocaleString("en-US")}</span>
                </div>
            </div>
        </a>
        <hr>`;
  }

  $("#videos").html(html);
}