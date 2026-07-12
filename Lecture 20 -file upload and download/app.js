// ==========================================
// 1. MODULE IMPORTS (Zaroori packages ko lana)
// ==========================================

// Core modules (Node.js me pehle se aate hain)
const path = require("path"); // File aur folder ke paths ko handle karne ke liye

// Global modules (Jo npm install se download kiye gaye hain)
const express = require("express"); // Server banane ka main framework
const app = express(); // Express application create kar rahe hain
const session = require("express-session"); // User ke session (login status) ko yaad rakhne ke liye
const { default: mongoose } = require("mongoose"); // MongoDB database se baat karne ke liye
const { MongoStore } = require("connect-mongo"); // Sessions ko RAM ki jagah MongoDB me save karne ke liye

// Local modules (Jo files aapne khud banayi hain)
const storeRouter = require("./routes/storeRouter");
const { hostRouter, registeredHomes } = require("./routes/hostRouter");
const authRouter = require("./routes/authRouter");
const { pageNotFound } = require("./controllers/errors/error"); // 404 Not Found error page ke liye
const rootDir = require("./utils/pathUtils"); // Root directory ka sahi path nikalne ke liye

// ==========================================
// 2. CONFIGURATIONS & CONSTANTS
// ==========================================

const PORT = 3000; // Wo port number jis par hamara local server chalega

// MongoDB connection string
// (Tip: Production me real apps banate waqt in passwords ko hamesha .env file me chhupa kar rakhte hain)
const dbPath =
  "mongodb://osamakhan75557_db_user:cO05GEsV865OarEi@ac-bywyjep-shard-00-00.xt7ydij.mongodb.net:27017,ac-bywyjep-shard-00-01.xt7ydij.mongodb.net:27017,ac-bywyjep-shard-00-02.xt7ydij.mongodb.net:27017/airbnb?ssl=true&replicaSet=atlas-ylg41q-shard-0&authSource=admin&appName=Cluster0";

// ==========================================
// 3. MIDDLEWARES (Request aane ke baad sabse pehle ye chalte hain)
// ==========================================

// Form se submit kiye gaye data (URL-encoded data) ko read karne ke liye
app.use(express.urlencoded({ extended: true }));

// "public" folder ko static set kar rahe hain.
// Iske through CSS, images, ya JS files publicly accessible hoti hain, direct URL se.
app.use(express.static(path.join(rootDir, "public")));

// Session middleware: User ka data DB me safe rakhne ke liye
app.use(
  session({
    secret: "this is the airbnb clone project", // Session data ko encrypt karne ki chaabi (key)
    resave: false, // Agar session me koi change nahi hua, toh dobara save mat karo
    saveUninitialized: false, // Empty (bina login wale) sessions ko save mat karo
    store: MongoStore.create({
      // Session data MongoDB me kahan store hoga, wo bata rahe hain
      mongoUrl: dbPath,
      collectionName: "sessions",
    }),
  }),
);

// Ye custom middleware har request par check karega ki user login hai ya nahi
app.use((req, res, next) => {
  // res.locals ka data direct EJS (HTML) files me use kiya jaa sakta hai
  res.locals.isLoggedIn = req.session.isLoggedIn;
  // Backend me aage routes me use karne ke liye req me daal diya
  req.isLoggedIn = req.session.isLoggedIn;
  next(); // next() likhna zaroori hai, warna request yahi atak jayegi aur aage nahi badhegi
});

// ==========================================
// 4. ROUTING (Alag-alag pages/URLs ko handle karna)
// ==========================================

app.use(storeRouter); // Normal routes (jaise home page) ke liye
app.use(authRouter); // Login aur Signup routes ke liye

// Route Guard / Protection Middleware
app.use("/host", (req, res, next) => {
  // Agar user logged in hai, tabhi use /host wale pages par jaane do
  if (req.isLoggedIn) {
    next();
  } else {
    // Agar login nahi hai, to sidha login page par wapas bhej do (Redirect)
    res.redirect("/login");
  }
});

// Host Routes
// Upar wale check ke baad, ye router chalega.
// Ye automatically har route ke aage '/host' laga dega (e.g., /host/add-home)
app.use("/host", hostRouter);

// ==========================================
// 5. VIEW ENGINE (HTML ki jagah EJS templates use karna)
// ==========================================

app.set("view engine", "ejs"); // Express ko bata rahe hain ki hum EJS use karenge
app.set("views", "views"); // Sari EJS files 'views' naam ke folder me rakhi hain

// ==========================================
// 6. ERROR HANDLING
// ==========================================

// Agar koi user aisi URL par chala jaye jo humne upar banayi hi nahi hai,
// Toh ye fallback middleware chalega aur "Page Not Found" dikhayega
app.use(pageNotFound);

// ==========================================
// 7. DATABASE CONNECTION & SERVER START
// ==========================================

// Pehle MongoDB database se connect hote hain
mongoose
  .connect(dbPath)
  .then(() => {
    console.log("Connected to mongoDb via mongoose");

    // Jab database perfectly connect ho jaye, tabhi hamara server start hoga
    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    // Agar database connect hone me koi problem aaye
    console.log("error while connect to db", error);
  });

// ==========================================
// COMMANDS (Reference ke liye)
// ==========================================
// Tailwind CSS ko compile karne ki command. Ye input css ko process karke output.css banati hai:
// npx @tailwindcss/cli -i ./public/css/input.css -o ./public/css/output.css --watch
