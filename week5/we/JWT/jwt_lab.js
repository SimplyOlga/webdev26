const jwt = require('jsonwebtoken');

// Function to create and sign a JWT
function createJWT() {
  const payload = {
    userId: 123,
    username: 'exampleUser'
  };
  const secretKey = 'yourSecretKey'; // Replace with your secret key

  // Sign the JWT with the payload and secret key
  const token = jwt.sign(payload, secretKey);

  console.log('JWT Token:', token);
}

// Call the function to create and sign a JWT
createJWT();

// Function to verify a JWT
function verifyJWT(token) {
  const secretKey = 'yourSecretKey'; // Replace with your secret key

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error('JWT Verification Failed:', err.message);
    } else {
      console.log('JWT Verified. Decoded:', decoded);
    }
  });
}

// Replace 'yourTokenHere' with a JWT token you generated in Step 4
const jwtTokenToVerify = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJleGFtcGxlVXNlciIsImlhdCI6MTc4OTU1MDA0MH0.WeMZdPACM0SmtVjs0NgzN6E9IDWokYcE_wAUxwBVr1o';

// Call the function to verify a JWT
verifyJWT(jwtTokenToVerify);

// Function to decode a JWT
function decodeJWT(token) {
  const decoded = jwt.decode(token);

  console.log('Decoded JWT:', decoded);
}

// Replace 'yourTokenHere' with a JWT token you generated in Step 4
const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJleGFtcGxlVXNlciIsImlhdCI6MTc4OTU1MDA0MH0.WeMZdPACM0SmtVjs0NgzN6E9IDWokYcE_wAUxwBVr1o';

// Call the function to decode a JWT
decodeJWT(jwtToken);