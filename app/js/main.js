"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var e = fetch("../resources/data/data.json").then(function (e) {
    return e.json();
  });
  document.querySelector(".main__btn").addEventListener("click", function () {
    e.then(function (e) {
      var t = e[n(0, e.length - 1)].message.toUpperCase();
      document.querySelector(".main__message").innerHTML = "\u0422\u042B <span class=\"text-danger\">".concat(t, "</span>");
    });
  });
  var n = function n(e, _n) {
    var t = e - .5 + Math.random() * (_n - e + 1);
    return Math.round(t);
  };
});
//# sourceMappingURL=main.js.map
