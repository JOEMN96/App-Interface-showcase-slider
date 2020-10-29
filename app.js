let node = document.querySelector(".liwrapper");
let img = document.querySelector(".mockupImg");

node.addEventListener("click", (e) => {
  let k = e.target.parentNode.childNodes;
  let arr9 = Array.prototype.slice.call(k);

  arr9.forEach((element) => {
    if (element.classList) {
      element.classList.remove("liBgActive");
    } else {
      return;
    }
  });

  switch (e.target.id) {
    case "imageONE":
      e.target.className = "liBgActive";
      img.src = "./images/1.png";

      break;

    case "imageTWO":
      img.src = "./images/2.png";
      e.target.className = "liBgActive";
      break;

    case "imageTHREE":
      img.src = "./images/3.png";
      e.target.className = "liBgActive";
      break;

    case "imageFOUR":
      img.src = "./images/1 - Copy.png";
      e.target.className = "liBgActive";
      break;

    default:
      return;
  }
});
