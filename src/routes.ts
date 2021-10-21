import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateMessageController } from "./controller/CreateMessageController";
import { Get3astMessagesController } from "./controller/Get3astMessagesController";
import { ProfileUserController } from "./controller/ProfileUserController";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
    "/messages", 
    ensureAuthenticated, 
    new CreateMessageController().handle
);

router.get("/messages/last3", new Get3astMessagesController().handle)
router.get("/profile", ensureAuthenticated, new ProfileUserController().handle)

export { router };