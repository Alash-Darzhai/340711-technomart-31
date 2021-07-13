document.querySelectorAll(".services-item").forEach((item) =>
  item.addEventListener("click", function (e) {
    e.preventDefault();
    // const id = e.target.getAttribute("href").replace("#", "");

    document.querySelectorAll(".services-item").forEach(
        (child) => child.classList.remove("services-item--checked")
    );
    document.querySelectorAll(".services-content-item").forEach(
        (child) => child.classList.remove("services-content-item--cheked")
    );

    item.classList.add("services-item--checked");
    document.getElementById().classList.add("services-content-item--cheked");
  })
);

document.querySelector(".services-item").click();
