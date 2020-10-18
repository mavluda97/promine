const allclass = document.querySelectorAll(".a-btn");
console.log(allclass);
allclass.forEach((c) => {
  c.addEventListener("click", (e) => {
    accordionFunc(c);
  });
});

function accordionFunc(a) {
  allclass.forEach((r) => {
    r.classList.remove("your-active");
  });
  a.classList.add("your-active");
}
