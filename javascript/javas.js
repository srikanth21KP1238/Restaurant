const button = document.querySelector(".btn-mobile");
const header = document.querySelector(".head");

button.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// all links selectors

const alllinks = document.querySelectorAll("a:link");

alllinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href !== "#" && href.startsWith("#")) {
      const select = document.querySelector(href);
      select.scrollIntoView({ behavior: "smooth" });
    }

    //close navigation

    if (link.classList.contains("links")) {
      header.classList.toggle("nav-open");
    }
  });
});

/**********************************************************************************/
const date = function () {
  let fullTime = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    date: "numeric",
    month: "long",
    year: "numeric",
  };

  let full = new Intl.DateTimeFormat("en-US", fullTime).format();
  console.log(full);
};

setInterval(date, 1000);
