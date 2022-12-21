"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var promise = fetch("../resources/data/data.json").then(function (response) {
    return response.json();
  });
  var mainBtn = document.querySelector(".main__btn");
  console.log(mainBtn);
  mainBtn.addEventListener("click", function () {
    promise.then(function (data) {
      var randomInt = random(0, data.length - 1);
      var randomMessage = data[randomInt].message.toUpperCase();
      var messageElement = document.querySelector(".main__message");
      messageElement.innerHTML = "\u0422\u042B <span class=\"text-danger\">".concat(randomMessage, "</span>");
    });
  });
  var random = function random(min, max) {
    var random = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(random);
  };
});
//# sourceMappingURL=main.js.map
