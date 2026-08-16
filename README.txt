TNG eSPORTS - FIXED WEBSITE

Files:
- index.html           Home page + ADMIN link
- register.html        Registration form
- leaderboard.html     Live Firebase leaderboard
- admin.html            Firebase admin login + score management
- style.css             Responsive esports styling
- firebase-config.js    Firebase project config
- firebase-module.js    Firebase imports/helpers
- firestore.rules       Firestore security rules

SETUP:
1. Upload all files to the same GitHub Pages folder.
2. In Firebase Authentication -> Sign-in method, enable Email/Password.
3. Create an Email/Password user with:
   arunachalamb710@gmail.com
   (set your own password in Firebase; it is NOT stored in this ZIP)
4. Firebase Firestore -> Rules: paste firestore.rules and Publish.
5. Open /admin.html, log in with the Firebase account, and save scores.
6. Open /leaderboard.html to see live rankings.

IMPORTANT:
The Firebase web config/API key is normally public client configuration. The real protection is Firebase Authentication + Firestore Security Rules.
The registration page records a PAYMENT_SUCCESS reference, but a production payment gateway must verify the payment server-side before accepting registrations.
