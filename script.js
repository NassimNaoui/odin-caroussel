function carousel() {
  const imgContainer = document.querySelector(".img-container");
  const children = imgContainer.children;

  const dotContainer = document.querySelector(".dot-container");
  const dotChildren = dotContainer.children;

  let currentIndex = 0;

  document.querySelector("#arrow-right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % children.length;
    updateDisplay(currentIndex, children, dotChildren);
  });

  document.querySelector("#arrow-left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + children.length) % children.length;
    updateDisplay(currentIndex, children, dotChildren);
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % children.length;
    updateDisplay(currentIndex, children, dotChildren);
  }, 5000);

  updateDisplay(currentIndex, children, dotChildren);
}

function updateDisplay(index, children, dotChildren) {
  // Remove "visible" and "focus" from all images and dots
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("visible");
    dotChildren[i].classList.remove("focus");
  }
  // Add "visible" and "focus" to the current image and dot
  children[index].classList.add("visible");
  dotChildren[index].classList.add("focus");
}

carousel();
