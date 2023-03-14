$(function () {
  var FullpageOption = {
    anchors: [
      "main",
      "PortFolio01",
      "PortFolio02",
      "PortFolio03",
      "PortFolio04",
      "PortFolio05",
    ],

    onLeave: function (origin, destination, direction) {
      console.log(origin, destination, direction);
      $(".gnb li")
        .eq(destination - 1)
        .addClass("on")
        .siblings()
        .removeClass("on");
      $(".section")
        .eq(destination - 1)
        .addClass("on")
        .siblings()
        .removeClass("on");
    },

    afterRender: function () {
      $(".gnb li").eq(0).addClass("on");
      $(".section").eq(0).addClass("on");
    },
  };

  $(".main").fullpage(FullpageOption);

  function gnb() {
    var gnbHeight = $(".gnb").height();
    $(".gnb").css({
      transform: `translate(0,${gnbHeight / 2})`,
    });
  }

  $(".mopen").on("click", function () {
    $(this).toggleClass("on");
    $(".cover").toggleClass("on");
    $(".header").toggleClass("on");
  });

  $(".cover li").on("click", function () {
    $(".cover").removeClass("on");
    $(".mopen").removeClass("on");
    $(".header  ").removeClass("on");
  });

  $(".cover").on("wheel", function (e) {
    e.stopPropagation();
  });
});
