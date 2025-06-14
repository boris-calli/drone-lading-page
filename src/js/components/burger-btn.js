export function burgerBtnOpenClose() {
  const burgerBtn = document.getElementById("burger-btn");
  burgerBtn.addEventListener("click", () => {
    let burgerBtnOpenCloseClass = "burger-btn--open-close";
    if (burgerBtn.classList.contains(burgerBtnOpenCloseClass)) {
      burgerBtn.classList.remove(burgerBtnOpenCloseClass);
    } else {
      burgerBtn.classList.add(burgerBtnOpenCloseClass);
    }
    const navBarSide = document.getElementById("navigation-side-bar");
    let navBarSideActive = "navigation-side__side-bar--active";
    if (navBarSide.classList.contains(navBarSideActive)) {
      navBarSide.classList.remove(navBarSideActive);
    } else {
      navBarSide.classList.add(navBarSideActive);
    }
  });
}
