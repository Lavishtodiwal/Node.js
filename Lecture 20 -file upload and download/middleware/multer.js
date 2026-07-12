// Multer library ko import kar rahe hain, jo Node.js mein file upload handle karne ke kaam aati hai.
const multer = require("multer");

// Path module file aur directory paths ke saath kaam karne ke liye use hota hai.
const path = require("path");

// Ye aapka custom file hai jo project ki root directory ka path deta hai,
// taaki files ko sahi jagah save kiya ja sake.
const rootDir = require("../utils/pathUtils");

/**
 * 1. STORAGE CONFIGURATION
 * Yahan hum multer ko bata rahe hain ki file kahan save karni hai (destination)
 * aur uska naam kya rakhna hai (filename).
 */
const storage = multer.diskStorage({
  // 'destination' decide karta hai ki upload ki hui file kis folder mein jayegi.
  destination: (req, file, cb) => {
    // cb ka matlab hai 'callback'. Iska pehla argument error hota hai (jo abhi null hai),
    // aur doosra argument folder ka path hota hai.

    if (file.fieldname === "photo") {
      // Agar form mein field ka naam "photo" hai, toh usko 'public/images' folder mein save karo.
      cb(null, path.join(rootDir, "public", "images"));
    } else if (file.fieldname === "rulesPdf") {
      // Agar form mein field ka naam "rulesPdf" hai, toh usko 'public/pdf' folder mein save karo.
      cb(null, path.join(rootDir, "uploads", "pdf"));
    } else {
      // Agar koi aur field name aata hai jo upar match nahi hua, toh ek error throw kardo.
      cb(new Error("Invalid field name"));
    }
  },

  // 'filename' decide karta hai ki save hone wali file ka naam kya hoga.
  filename: (req, file, cb) => {
    // Date.now() current time (milliseconds mein) deta hai.
    // Hum usko file ke original naam ke aage laga rahe hain (e.g., 1698765432-myphoto.png).
    // Aisa karne se agar 2 users same naam ki file upload karein, toh wo ek dusre ko overwrite/replace nahi karengi.
    cb(null, Date.now() + "-" + file.originalname);
  },
});

/**
 * 2. FILE FILTER CONFIGURATION
 * Yahan hum decide karte hain ki kaun si files allow karni hain aur kaun si reject.
 */
const fileFilter = (req, file, cb) => {
  // Check kar rahe hain ki file ka type (mimetype) image ya pdf hai ya nahi.
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "application/pdf"
  ) {
    // Agar condition true hai, toh 'true' pass karo, matlab file ACCEPT kar lo.
    cb(null, true);
  } else {
    // Agar koi aur file type hai (jaise .txt ya .mp4), toh 'false' pass karo, matlab REJECT kar do.
    cb(null, false);
  }
};

/**
 * 3. MULTER INITIALIZATION
 * Ab hum multer ka ek instance bana rahe hain jisme humari banayi hui
 * storage aur fileFilter ki settings pass kar rahe hain.
 */
const upload = multer({
  storage: storage, // Kahan aur kis naam se save karna hai
  fileFilter: fileFilter, // Sirf specific files allow karni hain
});

// Is 'upload' middleware ko export kar rahe hain taaki isko routers/controllers mein use kiya ja sake.
module.exports = upload;
