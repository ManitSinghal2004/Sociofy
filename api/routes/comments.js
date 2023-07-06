import Express from "express";
import {getComments,addComment} from "../controllers/comment.js";
const router = Express.Router() ;

router.get("/",getComments)
router.post("/",addComment)

export default router ;  