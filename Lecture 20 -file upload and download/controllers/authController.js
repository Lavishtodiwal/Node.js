const path = require("path");
const rootDir = require("../utils/pathUtils");
const { check, validationResult } = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.getLogin = (req, res, next) => {
  // console.log(req.body);
  res.render("auth/login", {
    pageTitle: "Login",
    currentPage: "Login",
    isLoggedIn: false,
    errors: [],
    oldInput: {},
    user: req.session.user,
  });
};
exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(422).render("auth/login", {
      pageTitle: "Login",
      currentPage: "Login",
      isLoggedIn: false,
      errors: ["User does not exist"],
      oldInput: { email },
    });
  }

  // Password check
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(422).render("auth/login", {
      pageTitle: "Login",
      currentPage: "Login",
      isLoggedIn: false,
      errors: ["Invalid password"],
      oldInput: { email },
    });
  }

  req.session.isLoggedIn = true;

  req.session.user = user;

  await req.session.save((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
};
exports.postLogout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

//sign up
exports.getSignUp = (req, res, next) => {
  // console.log(req.body);
  res.render("auth/signup", {
    pageTitle: "Sign Up",
    currentPage: "signUp",
    isLoggedIn: false,
    errors: [],
    oldInput: {
      fullName: "",
      email: "",
      role: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    user: {},
  });
};

exports.postSignUp = [
  // full name validation
  check("fullName")
    .notEmpty()
    .withMessage("Full name is required")
    .trim()
    .isLength({ min: 5 })
    .withMessage("Full name must be at least 2 characters long")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Full name can only contain letters"),

  // email validation
  check("email")
    .isEmail()
    .withMessage("Please Enter a valid email")
    .normalizeEmail(),

  //user type validation
  check("role")
    .notEmpty()
    .withMessage("user role is required")
    .isIn(["guest", "host"])
    .withMessage("invalid user type"),

  // Password validation
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/[a-z]/)
    .withMessage("Password must be at least one lower letter")
    .matches(/[A-Z]/)
    .withMessage("Password must be at least one uppercase letter")
    .matches(/[!@$%^&*(),.?":{}|<>]/)
    .withMessage("Password must be at least one special character")
    .trim(),

  // confirm Password validation
  check("confirmPassword")
    .trim()
    .custom((value, { req }) => {
      if (value != req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),

  // terms  validation
  check("terms")
    .notEmpty()
    .withMessage("You must accept the terms and conditions")
    .custom((value) => {
      if (value != "on") {
        throw new Error("You must accept the terms and conditions");
      }
      return true;
    }),

  (req, res, next) => {
    const { fullName, email, role, password, terms } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).render("auth/signup", {
        pageTitle: "Sign Up",
        currentPage: "signUp",
        isLoggedIn: false,
        errors: errors.array().map((err) => err.msg),
        oldInput: { fullName, email, role, password, terms },
      });
    }

    bcrypt
      .hash(password, 12)
      .then((hashedPassword) => {
        const user = new User({
          fullName,
          email,
          password: hashedPassword,
          role,
        });
        return user.save();
      })
      .then(() => {
        res.redirect("/login");
      })
      .catch((err) => {
        return res.status(422).render("auth/signup", {
          pageTitle: "Sign Up",
          currentPage: "signUp",
          isLoggedIn: false,
          errors: [err.message],
          oldInput: { fullName, email, role, password, terms },
          user: {},
        });
      });
  },
];
