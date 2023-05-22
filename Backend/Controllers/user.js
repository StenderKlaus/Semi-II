const asyncErrorWrapper = require("express-async-handler")
const User = require("../Models/user");
const Story = require("../Models/story");
const CustomError = require("../Helpers/error/CustomError");
const { comparePassword, validateUserInput } = require("../Helpers/input/inputHelpers");

const multer = require("multer");


const cloudinary = require("../Helpers/Libraries/cloudinary");

const { CloudinaryStorage } = require("multer-storage-cloudinary");


const storage = new CloudinaryStorage({
    cloudinary: cloudinary, 
    params: {
        folder: "userProfilePhoto",
        format: async (req, file) => {
            let format;
            switch (file.mimetype) {
              case "image/jpeg":
                format = "jpg";
                break;
              case "image/png":
                format = "png";
                break;
            //   case "image/gif":
            //     format = "gif";
            //     break;
              default:
                format = "jpg";
                break;
            }
            return format;
          }, // Set desired file format here,
        public_id: (req, file) =>file.originalname
    }
 })

const parser = multer({
    storage: storage,
})


const profile = asyncErrorWrapper(async (req, res, next) => {

    return res.status(200).json({
        success: true,
        data: req.user
    })

})


const editProfile = [parser.single("photo"), async (req, res, next) => {
    console.log(" pawüeüqoüe")
    // const { email, username } = req.body

    // const user = await User.findByIdAndUpdate(req.user.id, {
    //     email, username,
    //     photo: req.savedUserPhoto
    // },
    //     {
    //         new: true,
    //         runValidators: true
    //     })

    console.log(req.params.id)

    const user = await User.findById(req.params.id)
    console.log(user)
    console.log(user.username)
    console.log(user.email)
    console.log(req.file)
    
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    if (req.file) {
      user.photo = req.file.path;
    }
    await user.save();

    res.send({ message: 'User updated successfully', user });

    // return res.status(200).json({
    //     success: true,
    //     data: user

    // })

}]


const changePassword = asyncErrorWrapper(async (req, res, next) => {

    const { newPassword, oldPassword } = req.body

    if (!validateUserInput(newPassword, oldPassword)) {

        return next(new CustomError("Please check your inputs ", 400))

    }

    const user = await User.findById(req.user.id).select("+password")

    if (!comparePassword(oldPassword, user.password)) {
        return next(new CustomError('Old password is incorrect ', 400))
    }

    user.password = newPassword

    await user.save();


    return res.status(200).json({
        success: true,
        message: "Change Password  Successfully",
        user: user

    })

})


const addStoryToReadList = asyncErrorWrapper(async (req, res, next) => {

    const { slug } = req.params
    const { activeUser } = req.body;

    const story = await Story.findOne({ slug })

    const user = await User.findById(activeUser._id)

    if (!user.readList.includes(story.id)) {

        user.readList.push(story.id)
        user.readListLength = user.readList.length
        await user.save();
    }

    else {
        const index = user.readList.indexOf(story.id)
        user.readList.splice(index, 1)
        user.readListLength = user.readList.length
        await user.save();
    }

    const status = user.readList.includes(story.id)

    return res.status(200).json({
        success: true,
        story: story,
        user: user,
        status: status
    })

})

const readListPage = asyncErrorWrapper(async (req, res, next) => {

    const user = await User.findById(req.user.id)
    const readList = []

    for (let index = 0; index < user.readList.length; index++) {

        var story = await Story.findById(user.readList[index]).populate("author")

        readList.push(story)

    }

    return res.status(200).json({
        success: true,
        data: readList
    })

})

module.exports = {
    profile,
    editProfile,
    changePassword,
    addStoryToReadList,
    readListPage
}
