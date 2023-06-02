let cont = $(".container");
let allData = $(".dataAll");
let inp = $(".input");
let textAll = "";
let text = "";
$(".add").click(function () {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    type: "GET",
    dataType: "json",
    success: function (data) {
      if ($(".input").val() > 10 || $(".input").val() < 1) {
        throw new Error("invalid value");
      }
      for (let index = 0; index < data.length - 1; index++) {
        if (data[index].userId === +$(".input").val()) {
          text += `
              <div class="user">
                <div class="heading">
                  <h1 class="userId">${data[index].userId}</h1>
                  <h1 class="id">${data[index].id}</h1>
                </div>
                <div class="about">
                  <h1 class="title">
                  ${data[index].title}
                  </h1>
                  <h1 class="body">
                  ${data[index].body}
                  </h1>
                </div>
              </div>`;
        }
      }
      textAll += `<div class="data"> ${text} </div> `;
      text = "";
      allData.html(textAll);
    },
    error: function (Error) {
      console.log(Error);
    },
  });
});
