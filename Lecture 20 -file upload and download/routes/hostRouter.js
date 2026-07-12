// ==========================================
// 1. MODULE IMPORTS (Saari zaroori files ko lana)
// ==========================================

// Core Modules (Node.js me pehle se hote hain)
const path = require("path");

// Third-Party Modules (Jo npm se install kiye gaye hain)
const express = require("express");

// Local Modules (Aapki khud ki banayi hui files)
const rootDir = require("../utils/pathUtils"); // Root directory ka path nikalne ke liye
const upload = require("../middleware/multer"); // File upload (images/PDFs) handle karne wala middleware
const hostController = require("../controllers/hostController"); // Saara logic/functions isme likhe hain

// ==========================================
// 2. ROUTER INITIALIZATION
// ==========================================

// Naya express router create kar rahe hain
const hostRouter = express.Router(); 

// ==========================================
// 3. ROUTES DEFINITION (URL paths set karna)
// ==========================================
// Best Practice: Ek jaise kaam aane wale GET aur POST routes ko ek sath group karna chahiye.

// --- Host Home List ---
// GET route: Jab host apni dashboard/list dekhna chahe
hostRouter.get("/host-home-list", hostController.getHostHomes);

// --- Add Home ---
// GET route: Naya ghar add karne wala form dikhane ke liye
hostRouter.get("/add-home", hostController.getAddHome);

// POST route: Jab user 'Add Home' ka form submit karega
hostRouter.post(
  "/add-home",
  // Multer middleware: Ye check karega ki form me 'photo' aur 'rulesPdf' aayi hai ya nahi
  upload.fields([
    { name: "photo", maxCount: 1 },    // Sirf 1 photo allow kar rahe hain
    { name: "rulesPdf", maxCount: 1 }, // Sirf 1 PDF allow kar rahe hain
  ]),
  hostController.postAddHome // Upload hone ke baad database me save karne ka logic
);

// --- Edit Home ---
// GET route: Purane ghar ki details ko form me pre-fill (pehle se bhara hua) dikhane ke liye
// '/:homeId' ek dynamic parameter hai. Ye url se specific ghar ki ID nikal lega (e.g., /edit-home/12345)
hostRouter.get("/edit-home/:homeId", hostController.getEditHome);

// POST route: Edit form submit hone ke baad nayi details aur files ko update karne ke liye
hostRouter.post(
  "/edit-home",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "rulesPdf", maxCount: 1 },
  ]),
  hostController.postEditHome
);

// --- Delete Home ---
// POST route: Kisi specific ghar ko database se delete karne ke liye
// (Note: Yahan bhi ':homeId' ka use kiya hai taaki pata chale kaunsa ghar delete karna hai)
hostRouter.post("/delete-home/:homeId", hostController.postDeleteHome);

// ==========================================
// 4. MODULE EXPORTS
// ==========================================

// Is router ko export kar rahe hain taaki isko main file (app.js) me use kiya jaa sake
exports.hostRouter = hostRouter;