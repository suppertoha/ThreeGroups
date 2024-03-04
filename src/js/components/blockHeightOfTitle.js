function hideExcessButtons() {
  const cardContents = document.querySelectorAll(".js-cart");
  if (cardContents.length === 0) return;

  cardContents.forEach((content) => {
    const containerHeight = content.clientHeight - parseInt(window.getComputedStyle(content).paddingTop) - parseInt(window.getComputedStyle(content).paddingBottom) + 5;
    const title = content.querySelector(".card-concert__title");
    const titleHeight = title.offsetHeight + parseInt(window.getComputedStyle(title).marginBottom);
    let excessButtons = 0;
    const itemMoreButton = content.querySelector(".item-more");
    const itemMoreNum = content.querySelector(".item-more__num");
    const buttonsBanner = content.querySelector('.buttons-banner');

    const buttons = content.querySelectorAll(".buttons-banner__item:not(.item-more)");
    buttons.forEach(button => {
      button.classList.remove("hidden-button");
    })

    itemMoreButton.classList.add("hidden-button");
    [...buttons].reverse().forEach((button) => {
      const buttonsBannerHeight = buttonsBanner.offsetHeight;

      if (buttonsBannerHeight > containerHeight - titleHeight) {
        button.classList.add("hidden-button");
        excessButtons++;
      }
    });

    if (excessButtons > 0) {
      itemMoreButton.classList.remove("hidden-button");
      itemMoreNum.textContent = excessButtons;
      const buttonsBannerHeight = buttonsBanner.offsetHeight;

      if (buttonsBannerHeight > containerHeight - titleHeight) {
        const buttons = content.querySelectorAll(".buttons-banner__item:not(.item-more,.hidden-button)");
        buttons[buttons.length - 1].classList.add('hidden-button');
        itemMoreNum.textContent = excessButtons + 1;
      }

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
