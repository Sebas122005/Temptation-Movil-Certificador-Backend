import { Router } from "express";
import SaleDetailController from "../controllers/saledetail.controller";
import ValidateToken from "../controllers/validate-token.controller";

const salecontroller = new SaleDetailController;
const validatetoken = new ValidateToken;

const router =  Router();

router.post("/saledetail",salecontroller.addSaleDatail);
router.get("/saledetails",salecontroller.getSaleDetail);
router.get("/saledetail/:idsale", salecontroller.getOneSaleDetail);
router.put("/saledetail/:idsale",  salecontroller.updateSaleDetail);
router.delete("/saledetail/:idsale",  salecontroller.deleteSaleDetail);

export default router;