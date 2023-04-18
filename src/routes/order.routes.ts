import { Router } from "express";
import OrderController from "../controllers/order.controller";
import ValidateToken from "../controllers/validate-token.controller";
const validatetoken = new  ValidateToken();


const orderController = new OrderController();

const router =  Router();

router.post("/order", orderController.addOrder);
router.get("/orders", orderController.getOrder);
router.get("/order/:idorder", orderController.getOneOrder);
router.put("/order/:idorder", orderController.updateOrder);
router.delete("/order/:idorder", orderController.deleteOrder);

export default router;