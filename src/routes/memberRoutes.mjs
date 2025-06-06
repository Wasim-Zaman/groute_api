import express from "express";
import MemberController from "../controller/memberController.mjs";

const router = express.Router();
const controller = new MemberController();

router.post("/login", controller.loginMember);
router.post("/refresh-token", controller.refreshToken);
// You can add other member routes here

export default router;
