import { Router } from "express";
import brandController from "../controllers/brand.controller";
import ValidateToken from "../controllers/validate-token.controller";

const brandcontroller = new brandController;
const validatetoken =  new ValidateToken;


const router =  Router();

router.post("/brand",brandcontroller.addBrand);
router.get("/brands",brandcontroller.getBrand);
router.get("/brand/:idbrand",brandcontroller.getOneBrand);
router.put("/brand/:idbrand",brandcontroller.UpdateBrand);
router.delete("/brand/:idbrand",brandcontroller.deleteBrand);

export default router;