const menuToggle = document.querySelector(".inner-menu-mobi");
const menu = document.querySelector("#menu");
const change = document.querySelector(".inner-menu-mobi");
// const narv = document.querySelector('navbar-menu');
menuToggle.addEventListener("click", function () {
  menu.classList.toggle("show-menu");
  change.classList.toggle("change");
  // narv.classList.toggle("column");
});

window.onscroll = function () {
  //   var currentScrollPos = window.pageYOffset;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".up").style.display = "block";
  } else {
    document.querySelector(".up").style.display = "none";
  }
};

$(function () {
  $("a[href*='#']").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});
