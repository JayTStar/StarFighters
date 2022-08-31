import { Router } from "express";

import * as controllers from "../Controllers/controllers.js";
import { validateSchema } from "../Middlewares/schemaValidation.js";
import * as schemas from "../Schemas/Schemas.js";

const router = Router();

router.post("/battle", validateSchema(schemas.battleSchema), controllers.battle);
router.get("/ranking");

export default router