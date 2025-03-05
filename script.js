const services = {
  1: "We produce printings in A4, A5, A6 and any other paper formats",
  2: "We make graphic designs for any type of event and activites",
  3: "We publish books, journals and any other forms of prints materials",
};
document.querySelectorAll(".service-item").forEach((item) => {
  item.addEventListener("click", () => {
    alert(services[item.getAttribute("data-service")]);
  });
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Show a thank you message
  alert("Thank you for contacting us!");

  // Reset the form fields
  event.target.reset();
});

document.querySelectorAll("nav ul li").forEach((link) => {
  link.addEventListener("scroll", (event) => {
    event.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
