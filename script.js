// This is for form section

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("Name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Please complete the form.");
    return;
  }

  alert("Thank you! Your message has been received.");

  form.reset();
});

// This is ifor navbar ul section

const links = document.querySelectorAll(".nav ul li a");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Order button alert message when it click the button

const orderBtn = document.querySelector(".orderBtn");

orderBtn.addEventListener("click", () => {
  alert("Our Online Order Services Is Coming Soon!");
});

// Book Tabke Button alert Message when its clicked

const bookBtn = document.querySelector(".bookBtn");

bookBtn.addEventListener("click", () => {
  alert("Thank You! For book an Order. Our Booking service is coming soon!");
});

// Lightbox for gallery Images when its clicked

const images = Document.querySelector("images_item img");



// This is for Navbar Shadow

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
