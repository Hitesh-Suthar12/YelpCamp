const express = require("express");
const router = express.Router();
const campgorunds = require("../controllers/campgrounds");
const catchAsync = require("../utils/catchAsync");
const Campground = require("../models/campground");
const { isLoggedIn, isAuthor, validateCampground } = require("../middleware");
const multer = require("multer");
const { storage } = require("../cloudinary");
const upload = multer({ storage });

router.route("/")
  .get(catchAsync(campgorunds.index))
  .post(isLoggedIn, upload.array("image"), validateCampground, catchAsync(campgorunds.createCampground));


router.get("/new", isLoggedIn, campgorunds.renderNewForm);

router.route("/:id")
  .get(isLoggedIn, catchAsync(campgorunds.showCampground))
  .put(isLoggedIn, isAuthor, upload.array("image"), validateCampground, catchAsync(campgorunds.updateCampground))
  .delete(isLoggedIn, isAuthor, catchAsync(campgorunds.deleteCampground));

router.get("/:id/edit", isLoggedIn, isAuthor, catchAsync(campgorunds.renderEditForm));

module.exports = router;
