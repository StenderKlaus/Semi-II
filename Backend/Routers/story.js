const express = require("express")

const { getAccessToRoute } = require("../Middlewares/Authorization/auth");
const {addStory,getAllStories,getAllPostCat,detailStory,likeStory, editStory, deleteStory, editStoryPage } = require("../Controllers/story")
const { checkStoryExist, checkUserAndStoryExist } = require("../Middlewares/database/databaseErrorhandler");

const router = express.Router() ;

router.post("/addstory" ,[getAccessToRoute],addStory)


router.post("/:slug", checkStoryExist, detailStory)

router.post("/:slug/like",[getAccessToRoute,checkStoryExist] ,likeStory)

router.get("/editStory/:slug",[getAccessToRoute,checkStoryExist,checkUserAndStoryExist] , editStoryPage)

router.put("/:slug/edit",[getAccessToRoute,checkStoryExist,checkUserAndStoryExist] ,editStory)

router.delete("/:slug/delete",[getAccessToRoute,checkStoryExist,checkUserAndStoryExist] ,deleteStory)

router.get("/getAllStories",getAllStories)

router.get("/getAllPostCat",getAllPostCat)

module.exports = router