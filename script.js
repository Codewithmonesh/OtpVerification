document.getElementById("submitBtn").addEventListener("click", function () {
  const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

  // Store OTP in localStorage
  localStorage.setItem("savedOTP", generatedOTP);

  alert("OTP Sent: " + generatedOTP); // Demo only

  // Show OTP section with animation
  const otpSection = document.getElementById("otpSection");
  otpSection.style.display = "block";
  otpSection.classList.remove("slide-in"); // restart animation
  void otpSection.offsetWidth; // reflow trick
  otpSection.classList.add("slide-in");

  document.getElementById("result").innerText = "";
});

document.getElementById("verifyBtn").addEventListener("click", function () {
  const enteredOTP = document.getElementById("otpInput").value;
  const savedOTP = localStorage.getItem("savedOTP");
  const resultEl = document.getElementById("result");

  resultEl.classList.remove("success", "error"); // reset animation class

  if (!savedOTP) {
    resultEl.innerText = "⚠️ No OTP was generated. Please click Submit.";
    resultEl.style.color = "orange";
    return;
  }

  if (enteredOTP === savedOTP) {
    resultEl.innerText = "✅ OTP Verified Successfully!";
    resultEl.style.color = "green";
    resultEl.classList.add("success");
    localStorage.removeItem("savedOTP");
  } else {
    resultEl.innerText = "❌ Invalid OTP. Try Again.";
    resultEl.style.color = "red";
    resultEl.classList.add("error");
  }
});
