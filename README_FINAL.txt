TNG ESPORTS — FINAL PACKAGE

Included:
- Original home/tournament design
- ₹149 Razorpay TEST checkout with UPI, Card, Net Banking and Wallet methods requested
- Registration data saved to Firestore after the checkout success callback
- Separate leaderboard.html with live Firestore scores
- Separate admin.html with Firebase Email/Password login and score entry
- Firestore rules restricting score writes to the configured admin email
- TNG logo and responsive styling

IMPORTANT SECURITY NOTES
1. firebase-config.js contains the Firebase Web API key. Firebase documents that Firebase service API keys are not secrets; authorization is provided by Firebase Authentication, Security Rules and App Check. Do not put Firebase service-account private keys or Razorpay secret keys in this static site.
2. GitHub Secret Scanning may still flag a Firebase API key because it matches a Google API-key pattern. That alert does not mean the Firebase client key is a password. Restrict the key in Google Cloud/Firebase to the website and Firebase APIs used by this app.
3. The Razorpay key in this package is a TEST key. Do not put a Razorpay secret key in frontend code. Real payments require a server-side order/payment verification flow.
4. Firestore registration creation currently relies on the browser checkout success callback. For production payments, add server-side Razorpay signature/order verification before accepting a registration as paid.
