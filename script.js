document.getElementById("redeemBtn").addEventListener("click", function() {
  const code = document.getElementById("codeInput").value.trim().toLowerCase();
  const message = document.getElementById("message");

  // Valid codes (all lowercase)
  const validCodes = ["coolio", "meanie"];

  if(validCodes.includes(code)) {
    message.textContent = "✅ Code redeemed successfully!";
    message.style.color = "#00ff96";
  } else {
    message.textContent = "❌ Invalid code. Try again!";
    message.style.color = "red";
  }
});
