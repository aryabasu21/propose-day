const form = document.getElementById("login-form");
const codeInput = document.getElementById("code");
const resultDiv = document.getElementById("result");

const secretCode = "Katha"; // Replace with your secret code
const nextPageUrl = "main.html"; // URL of the next page

// Extract name from query parameter
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  let name = urlParams.get("name"); // Get 'name' from the URL

  if (name) {
    name = decodeURIComponent(name); // Decode special characters
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); // Capitalize first letter
    codeInput.value = name; // Autofill input
  }
});

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = codeInput.value.trim();

  resultDiv.innerHTML = "Baby ❤️";
  setTimeout(() => {
    window.location.href = nextPageUrl; // Redirect after 1s
  }, 1000);
  // if (userInput.toLowerCase() === secretCode.toLowerCase()) {
  //   resultDiv.innerHTML = "Baby ❤️";
  //   setTimeout(() => {
  //     window.location.href = nextPageUrl; // Redirect after 1s
  //   }, 1000);
  // } else {
  //   resultDiv.innerHTML =
  //     "Naa Tum meri baby nhi hoo 😢 kon hooo tum kaha hai meri pechu?";
  // }
});
