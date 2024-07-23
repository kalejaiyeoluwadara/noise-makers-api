const express = require("express");
const {
  getNoiseMakers,
  createNoiseMaker,
  getNoiseMaker,
  updateNoiseMaker,
  deleteNoiseMaker,
} = require("../controller/noisemakers");
const validateObjectId = require("../middleware/validateObjectIdMiddleware");
const protect = require("../middleware/authMiddleWare");
const upload = require("../config/multer");
const router = express.Router();
router
  .route("/")
  .get(getNoiseMakers)
  .post(protect, upload.single("image"), createNoiseMaker);
router
  .route("/:id")
  .get(getNoiseMaker)
  .patch(protect, updateNoiseMaker)
  .delete(protect, deleteNoiseMaker);
module.exports = router;
