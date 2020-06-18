$('.sidemenu-collapse').on('click', function () {
  var $body = $('body');
  if ($body.hasClass('side-closed')) {
    $body.removeClass('side-closed');
    $body.removeClass('submenu-closed');
  } else {
    $body.addClass('side-closed');
    $body.addClass('submenu-closed');
  }
});
$(".content, .navbar").mouseenter(function () {
  var $body = $('body');
  $body.removeClass('side-closed-hover');
  $body.addClass('submenu-closed');
});
$(".sidebar").mouseenter(function () {
  var $body = $('body');
  $body.addClass('side-closed-hover');
  $body.removeClass('submenu-closed');
});

if (localStorage.getItem("sidebar_option")) {
  jQuery("body").addClass(localStorage.getItem("sidebar_option"));
}
if ($('body').hasClass('side-closed')) {
  $(".sidebar-user-panel").css({ "display": "none" });
} else {
  $(".sidebar-user-panel").css({ "display": "block" });
}
jQuery(document).on("click", ".sidemenu-collapse", function () {
  var sidebar_option = "";
  if ($('body').hasClass('side-closed')) {
    var sidebar_option = "side-closed submenu-closed";
    $(".sidebar-user-panel").css({ "display": "none" });
  } else {
    $(".sidebar-user-panel").css({ "display": "block" });
  }
  jQuery("body").addClass(sidebar_option);
  localStorage.setItem("sidebar_option", sidebar_option);
});
