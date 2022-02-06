const navBar = document.getElementById("main-nav");

document.addEventListener("scroll", () => {
  let pos = window.scrollY;
  console.log(pos);
  pos > 10
    ? navBar.classList.add("scrolled")
    : navBar.classList.remove("scrolled");
});
