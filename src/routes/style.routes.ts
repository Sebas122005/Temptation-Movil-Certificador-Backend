import { Router } from "express";
import StylesController from "../controllers/style.controller";
import ValidateToken from "../controllers/validate-token.controller";

const stylescontroller = new StylesController;
const validatetoken =  new ValidateToken;


const router = Router();

router.post("/style",stylescontroller.addStyles);
router.get("/styles",stylescontroller.getStyles);
router.get("/style/:idstyles",stylescontroller.getOneStyle);
router.put("/style/:idstyles",stylescontroller.updateStyle);
router.delete("/style/:idstyles",stylescontroller.deleteStyle);

export default router