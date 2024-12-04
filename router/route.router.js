import Router from "express";
import { removebook,bookdetails,booklist,updatebook} from "../controller/books.controller.js";
import {addcomment,deletecomment} from "../controller/commnet.controller.js";
import {addbook} from "../controller/books.controller.js";
const router=Router();

router.route("/addbook").post(addbook);
router.route("/removebook").delete(removebook);
router.route("/getbook").get(booklist);
router.route("/bookdetails/:info").get(bookdetails);
router.route("/comment").post(addcomment);
router.route("/deletecomment").delete(deletecomment);
router.route("/updatebook").patch(updatebook);
export default router;