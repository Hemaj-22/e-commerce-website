const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AbozY2NXVRLTl1ReGMlGcP9uPi9rOjcgaLK-nR4TceNSyUy9rYZLEcUW8yV_tWPDZ8YsPeXfSGweFigO",
  client_secret: "EOyGP-Qp4kHm80m0qZ3MhdIFMY5I3rbeXLFUntwUr6JWoTTDJKGN6yF2oZwRLEEEOKhM9jpGojo-0rZt",
});

module.exports = paypal;
