/*Реализовать на JavaScript возможность перетаскивания мышью по веб-странице нескольких картинок.
Обрабатывать как минимум события mousedown, mousemove, mouseup; поддержку браузером drag&drop не использовать.
*/

const img = document.getElementsByTagName("img");
let container = document.querySelector(".content"),
  activeImage = null,
  shiftX,
  shiftY;

container.addEventListener("mouseover", mOver, false);
container.addEventListener("mouseout", mOut, false);
container.addEventListener("mousedown", imgStart, false);

function mOver(e) {
  e = e ? e : x || window.event;
}

function mOut(e) {
  e = e ? e : x || window.event;
}

function imgStart(e) {
  e = e ? e : x || window.event;
  activeImage = e.target;
  activeImage.style.filter = "contrast(1.2)";
  activeImage.style.boxShadow = "2px 4px 20px black";

  activeImage.ondragstart = function () {
    return false;
  };

  for (let i = 0; i < img.length; i++) {
    img[i].style.zIndex = 0;
  }

  activeImage.style.zIndex = 1;

  activeImage.style.position = "absolute";

  let mouseX = e.pageX;
  let mouseY = e.pageY;

  let imageX = activeImage.offsetLeft;
  let imageY = activeImage.offsetTop;

  shiftX = mouseX - imageX;
  shiftY = mouseY - imageY;

  window.onmousemove = imgMove;
  window.onmouseup = imgStop;
}

function imgStop() {
  window.onmousemove = null;
  window.onmouseup = null;
  activeImage.style.filter = "none";
  activeImage.style.boxShadow = "none";
}

function imgMove(e) {
  e = e ? e : x || window.event;

  let mouseX = e.pageX;
  let mouseY = e.pageY;

  let imageX = mouseX - shiftX;
  let imageY = mouseY - shiftY;

  activeImage.style.left = imageX + "px";
  activeImage.style.top = imageY + "px";
}
