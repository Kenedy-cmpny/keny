// Auto-greeting alert based on time of day
function greetUser() {
  const hour = new Date().getHours();
  let greeting = "Hello!";

  if (hour < 12) greeting = "Good Morning, Kenedy 👋";
  else if (hour < 18) greeting = "Good Afternoon, Kenedy ☀️";
  else greeting = "Good Evening, Kenedy 🌙";

  const greetBox = document.createElement("div");
  greetBox.textContent = greeting;
  greetBox.style.position = "fixed";
  greetBox.style.top = "20px";
  greetBox.style.right = "20px";
  greetBox.style.background = "#00bcd4";
  greetBox.style.color = "#fff";
  greetBox.style.padding = "10px 20px";
  greetBox.style.borderRadius = "10px";
  greetBox.style.zIndex = "999";
  greetBox.style.boxShadow = "0 4px 12px rgba(0,188,212,0.4)";
  document.body.appendChild(greetBox);

  setTimeout(() => greetBox.remove(), 4000);
}

window.onload = greetUser;

// Contact form validation using regex
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      const phoneRegex = /^\d{9,14}$/;

      if (!name || !email || !phone || !message) {
        alert("Please fill out all fields.");
        return;
      }

      if (!emailRegex.test(email)) {
        alert("Invalid email format.");
        return;
      }

      if (!phoneRegex.test(phone)) {
        alert("Phone number should be 9 to 14 digits.");
        return;
      }

      alert("Thank you for reaching out! ✅");
      form.reset();
    });
  }
});
