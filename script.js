const redeemBtn = document.getElementById("redeemBtn");
const codeInput = document.getElementById("codeInput");
const message = document.getElementById("message");

// Valid codes (all lowercase)
const validCodes = ["coolio", "meanie"];

// Get already redeemed codes from localStorage
let redeemedCodes = JSON.parse(localStorage.getItem("redeemedCodes")) || [];

redeemBtn.addEventListener("click", function() {
  const code = codeInput.value.trim().toLowerCase();

  if (!validCodes.includes(code)) {
    message.textContent = "❌ Invalid code. Try again!";
    message.style.color = "red";
  } else if (redeemedCodes.includes(code)) {
    message.textContent = "⚠️ You already redeemed this code!";
    message.style.color = "#FFD700"; // Gold color
  } else {
    message.textContent = "✅ Code redeemed successfully!";
    message.style.color = "#00ff96";
    redeemedCodes.push(code);
    localStorage.setItem("redeemedCodes", JSON.stringify(redeemedCodes));
  }

  // Clear the message after 3 seconds
  setTimeout(() => {
    message.textContent = "";
  }, 3000);

  // Clear input
  codeInput.value = "";
});
