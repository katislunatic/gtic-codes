document.getElementById("redeemBtn").addEventListener("click", function() {
  const code = document.getElementById("codeInput").value.trim();
  const message = document.getElementById("message");

  // Example valid codes
  const validCodes = ["GTIC2025", "WELCOME", "FREEITEM"];

  if(validCodes.includes(code.toUpperCase())) {
    message.textContent = "✅ Code redeemed successfully!";
    message.style.color = "#00ff96";
  } else {
    message.textContent = "❌ Invalid code. Try again!";
    message.style.color = "red";
  }
});
