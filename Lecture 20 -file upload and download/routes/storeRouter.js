// ==========================================
// 1. MODULE IMPORTS (Zaroori files ko lana)
// ==========================================

// Core Modules (Node.js ke inbuilt modules)
const path = require("path");

// External Modules (Third-party packages jo npm se install kiye hain)
const express = require("express");

// Local Modules (Aapke apne project ki files aur logic)
const rootDir = require("../utils/pathUtils"); // Root folder ka exact path nikalne ke liye
const { registeredHomes } = require("./hostRouter"); // Host router se data lane ke liye (agar zaroorat ho)
const storeController = require("../controllers/storeController"); // Is route ka saara main logic yahan likha hai

// ==========================================
// 2. ROUTER INITIALIZATION
// ==========================================

// Express ka router create kar rahe hain.
// Ye application ke alag-alag hisso (routes) ko cleanly handle karne me madad karta hai.
const storeRouter = express.Router();

// ==========================================
// 3. ROUTES DEFINITION (URLs aur unke functions)
// ==========================================

// --- Main Navigation Pages ---
// GET route: Root URL (e.g., www.website.com/) par Index/Home page dikhane ke liye
storeRouter.get("/", storeController.getIndex);

// GET route: Saare available properties/homes ki list dikhane ke liye
storeRouter.get("/homes", storeController.getHomes);

// GET route: Kisi ek specific ghar ki poori detail dikhane ke liye
// Note: ':homeId' ek dynamic parameter hai. Agar user '/homes/123' par jayega, toh ye '123' ko ID maan lega
storeRouter.get("/homes/:homeId", storeController.getHomeDetail);

// GET route: Ek alternative view jisme shaayad homes ek list format me dikhte hon
storeRouter.get("/home-list", storeController.getHomeList);

// --- User Features (Bookings & Favorites) ---

// GET route: User ko uski ki gayi saari bookings dikhane ke liye
storeRouter.get("/bookings", storeController.getBookings);

// GET route: User ko uske pasand kiye gaye (favorites) gharo ki list dikhane ke liye
storeRouter.get("/favorite", storeController.getFavorite);

// POST route: Jab user kisi naye ghar ko apni favorite list me add karta hai
storeRouter.post("/favorite", storeController.postAddToFavorite);

// POST route: Jab user kisi ghar ko apni favorite list se remove/delete karna chahe
// Yahan ':homeId' bata raha hai ki specifically kaunsa ghar hatana hai
storeRouter.post(
  "/favorite/delete/:homeId",
  storeController.postDeleteFavorite,
);

// --- Downloads & Extras ---

// GET route: Ghar ke rules ki PDF download karne ke liye
// Isme bhi ':homeId' use hua hai taaki system ko pata chale ki kis ghar ka PDF dena hai
storeRouter.get("/download-rules/:homeId", storeController.downloadRules);

// ==========================================
// 4. MODULE EXPORTS
// ==========================================

// Is poore 'storeRouter' ko export kar rahe hain taaki main server file (jaise app.js) me ise import karke use kiya ja sake.
module.exports = storeRouter;
