import { Router } from "express";
import ClaimController from "../controllers/claim.controller";
import ValidateToken from "../controllers/validate-token.controller";

const claimController = new ClaimController;
const validatetoken = new ValidateToken;
const router =  Router();

router.post("/claim", claimController.addClaim);
router.get("/claims", claimController.getClaim);
router.get("/claim/:idclaims", claimController.getOneClaim);
router.put("/claim/:idclaims", claimController.updateClaim);
router.delete("/claim/:idclaims", claimController.deleteClaim);

export default router;

