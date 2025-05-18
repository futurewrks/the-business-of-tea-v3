document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscribe-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("input").value;
    if (email) {
      alert(`Thanks for subscribing, ${email}!`);
      form.reset();
    }
  });
});
