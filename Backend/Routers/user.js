const express = require("express")

// const imageUpload = require("../Helpers/Libraries/cloudinary");

const {profile,editProfile,changePassword,addStoryToReadList,readListPage} = require("../Controllers/user");
const { getAccessToRoute } = require("../Middlewares/Authorization/auth");


const router = express.Router() ;

router.get("/profile",getAccessToRoute ,profile)

router.post("/:id/editProfile",[getAccessToRoute],editProfile)

router.put("/changePassword",getAccessToRoute,changePassword)

router.post("/:slug/addStoryToReadList",getAccessToRoute ,addStoryToReadList)

router.get("/readList",getAccessToRoute ,readListPage)



module.exports = router