import express from "express";
import { authMiddleware } from "../middleware/auth.js";
import { createTicket, getassignedTickets, getmoderatorTicketbyid, getuserTicketbyid, getuserTickets } from "../controller/ticket.js";

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    createTicket
)

router.get(
    "/assigned",
    authMiddleware,
    getassignedTickets
)
router.get(
    "/all",
    authMiddleware,
    getuserTickets
)   





router.get(
    "/:id",
    authMiddleware,
    getuserTicketbyid
)

router.get(
    "/moderator/:mid",
    authMiddleware,
     getmoderatorTicketbyid
)



export default router;