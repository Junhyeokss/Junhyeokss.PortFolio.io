$(function () {
  $(".main").fullpage({
    anchors: [
      "main",
      "PortFolio01",
      "PortFolio02",
      "PortFolio03",
      "PortFolio04",
      "PortFolio05",
    ],
  });

  $(".mopen").on("click", function () {
    $(this).toggleClass("on");
  });
});
