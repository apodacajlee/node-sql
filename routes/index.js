import express from "express";
import userRouter from "./users.route";
import employeeRouter from "./employees.routes";
import productRouter from "./products.routes";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

router.use("/users", userRouter);

router.use("/employees", employeeRouter);

router.use("/products", productRouter);

export default router;
