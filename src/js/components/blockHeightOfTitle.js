function hideExcessButtons() {
  const cardContents = document.querySelectorAll(".js-cart");
  if (cardContents.length === 0) return;

  cardContents.forEach((content) => {
    const containerHeight = content.clientHeight - parseInt(window.getComputedStyle(content).paddingTop);
    const title = content.querySelector(".card-concert__title");
    const titleHeight = title.offsetHeight + parseInt(window.getComputedStyle(title).marginBottom);
    let currentHeight = titleHeight;
    let excessButtons = 0;
    const itemMoreButtonsContainer = content.querySelector(".item-more__buttons");
    const itemMoreButton = content.querySelector(".item-more");
    const itemMoreNum = content.querySelector(".item-more__num");

    const buttons = content.querySelectorAll(".buttons-banner__item:not(.item-more)");

    buttons.forEach((button) => {
      currentHeight += button.offsetHeight + 5;
      console.log('currentHeight', currentHeight)

      if (currentHeight > containerHeight) {
        button.classList.add("hidden-button");
        excessButtons++;
        itemMoreButtonsContainer.appendChild(button.cloneNode(true));
        button.remove();
      }
    });

    if (excessButtons > 0) {
      itemMoreButton.classList.remove("hidden-button");
      itemMoreNum.textContent = excessButtons;
    } else {
      itemMoreButton.classList.add("hidden-button");
    }

    itemMoreButton.addEventListener("click", function () {
      const itemMoreInner = content.querySelector(".item-more__inner");
      itemMoreInner.classList.toggle("active");
    });
  });
}

hideExcessButtons();

let resizeTimeout;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(hideExcessButtons, 100);
});
