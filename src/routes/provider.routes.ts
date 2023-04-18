import { Router } from "express";
import ProviderController from "../controllers/provider.controller";
import ValidateToken from "../controllers/validate-token.controller";


const providerController = new ProviderController;
const validatetoken =  new ValidateToken;


const router =  Router();
/*
router.post("/addprovider",providerController.addProvider);
router.get("/providers",providerController.getProvider);
router.get("/provider/:idprovider",providerController.getOneProvider);
router.put("/provider/:idprovider",providerController.UpdateProvider);
router.delete("/provider/:idprovider",providerController.deleteProvider);
*/
router.post("/addprovider",providerController.addProvider);
router.get("/providers",providerController.getProvider);
router.get("/provider/:idprovider",providerController.getOneProvider);
router.put("/provider/:idprovider",providerController.UpdateProvider);
router.delete("/provider/:idprovider",providerController.deleteProvider);

export default router;