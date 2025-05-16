document.getElementById('continueBtn').addEventListener('click', function() {
  const userInput = document.getElementById('userInput').value;
  if (userInput.trim() === '') {
    alert('Please enter your phone number or email.');
  } else {
    const otp = generateOTP();
    console.log(`Sending OTP to ${userInput}: ${otp}`); // You can remove this console log later
    localStorage.setItem('userInput', userInput);
    localStorage.setItem('otp', otp);
    window.location.href = 'otp.html'; // Redirect to OTP page
  }
});

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function socialLogin(platform) {
  alert('Logging in with ' + platform);
}

function qrLogin() {
  alert('Opening QR code scanner...');
}
