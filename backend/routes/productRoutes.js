import express from "express";
import {
  getProductById,
  getProducts,
  deleteProductById,
  updateProduct,
  createProduct,
  getTopProducts,
  createReview,
} from "../controllers/productController.js";
import protect, { admin } from "../middleware/authMiddleware.js";
const router = express.Router();
router.get("/top", getTopProducts);
router.route("/").get(getProducts).post(protect, admin, createProduct);

router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProductById)
  .put(protect, admin, updateProduct);

router.route("/:id/reviews").post(protect, createReview);

export default router;
