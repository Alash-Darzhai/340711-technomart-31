document.querySelectorAll(".services-item").forEach((item) =>
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href").replace("#", "");

    document.querySelectorAll(".services-item").forEach(
        (child) => child.classList.remove("services-item--active")
    );
    document.querySelectorAll(".services-content-item").forEach(
        (child) => child.classList.remove("services-content-item--active")
    );

    item.classList.add("services-item--active");
    document.getElementById().classList.add("services-content-item--cheactiveked");
  })
);

document.querySelector(".services-item").click();
