import {Router} from "express"
import RolesController from "../controllers/roles.controller"
import ValidateToken from "../controllers/validate-token.controller";


const rolescontroller = new RolesController;
const validatetoken =  new ValidateToken;



const router = Router();

router.post("/role",rolescontroller.addRoles);
router.get("/roles",rolescontroller.getRoles);
router.get("/role/:idrol",rolescontroller.getOneRol);
router.put("/role/:idrol",rolescontroller.updateRoles);
router.delete("/role/:idrol",rolescontroller.deleteRoles);

export default router
