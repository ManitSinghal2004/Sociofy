import Express from "express";
import {} from "../controllers/post.js";
import { getPosts,addPost,deletePost } from "../controllers/post.js";
const router = Express.Router() ;

router.get("/", getPosts)
router.post("/", addPost)
router.delete("/:id",deletePost)

export default router ;  