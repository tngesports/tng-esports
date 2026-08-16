TNG ESPORTS FINAL PACKAGE

This package keeps the original TNG ESPORTS website/payment flow and adds the
live leaderboard and private admin dashboard without replacing the original
main design.

FILES
- index.html: original main website + original ₹149 Razorpay TEST checkout + Firebase registration save
- leaderboard.html: separate live leaderboard page
- admin.html: separate admin dashboard
- style.css: original design
- tng-logo.png: uploaded TNG logo
- FIRESTORE_RULES.txt: final Firestore rules

DEPLOY
1. Upload ALL files to the GitHub Pages repository root.
2. Firebase Authentication → enable Email/Password.
3. Ensure arunachalamb710@gmail.com exists as an Authentication user.
4. Firestore Database → Rules → paste the rules from FIRESTORE_RULES.txt → Publish.
5. Open /admin.html and log in with the authorised admin email/password.
6. Publish scores from Admin; leaderboard.html updates live.

PAYMENT
The original site uses Razorpay TEST checkout (rzp_test_*). It does not collect
real money. For live ₹149 payments, configure a Razorpay backend/order and
signature verification.
