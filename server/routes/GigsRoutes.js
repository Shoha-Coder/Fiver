import multer from "multer";
import { Router } from "express";
import {
  addGig,
  addReview,
  checkGigOrder,
  editGig,
  getGigData,
  getUserAuthGigs,
  searchGigs,
} from "../controllers/Gigscontrollers.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";

export const gigsRoutes = Router();
const upload = multer({ dest: "uploads/" });

gigsRoutes.post("/add", verifyToken, upload.array("images"), addGig);
gigsRoutes.get("/get-user-gigs", verifyToken, getUserAuthGigs);
gigsRoutes.get("/get-gig-data/:gigId", getGigData);
gigsRoutes.put(
  "/edit-gig-data/:gigId",
  verifyToken,
  upload.array("images"),
  editGig
);
gigsRoutes.get("/search-gigs/", searchGigs)
gigsRoutes.get("/check-gig-order/:gigId", verifyToken, checkGigOrder);
gigsRoutes.post("/add-review/:gigId", verifyToken, addReview);