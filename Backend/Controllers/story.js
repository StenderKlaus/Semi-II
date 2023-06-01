const asyncErrorWrapper = require("express-async-handler")
const Story = require("../Models/story");
// const deleteImageFile = require("../Helpers/Libraries/deleteImageFile");
const {searchHelper, paginateHelper} =require("../Helpers/query/queryHelpers")
const {slugify} = require("slugify");
const multer = require("multer");


const cloudinary = require("../Helpers/Libraries/cloudinary");

const { CloudinaryStorage } = require("multer-storage-cloudinary");


const storage = new CloudinaryStorage({
    cloudinary: cloudinary, 
    params: {
        folder: "storyPhoto",
        format: async (req, file) => {
            let format;
            switch (file.mimetype) {
              case "image/jpeg":
                format = "jpg";
                break;
              case "image/png":
                format = "png";
                break;
              default:
                format = "jpg";
                break;
            }
            return format;
          }, // Set desired file format here,
        // public_id: (req, story) =>req.story._id
    }
 })

const parser = multer({
    storage: storage,
})


const addStory = [parser.single("image"), async  (req,res,next)=> {

    const {title, content} = req.body;
    let categorie = req.body.categorie.split(',');

    let wordCount = content.split(/\s+/).length ; 
   
    let readtime = Math.floor(wordCount /200)   ;
    const newStory = await Story.create({
        title,
        content,
        categorie,
        author :req.user._id ,
        image : req.file.path,
        readtime
    })
    try {

        
        await newStory.save();
        const result = await cloudinary.uploader.upload(req.file.path, {
            public_id : `storyPhoto/${newStory.author}/story`
        })
        await newStory.save();
        res.send({ message: 'story added successfully', newStory });

        // return res.status(200).json({
        //     success :true ,
        //     message : "add story successfully ",
        //     data: newStory
        // })
    }

    catch(error) {
        console.log(error.message)
        // deleteImageFile(req)

        return next(error)
        
    }
  
}]

const getAllStories = asyncErrorWrapper( async (req,res,next) =>{

    let query = Story.find();

    query =searchHelper("title",query,req)

    const paginationResult =await paginateHelper(Story , query ,req)

    query = paginationResult.query  ;

    query = query.sort("-likeCount -commentCount -createdAt")

    const stories = await query
    
    return res.status(200).json(
        {
            success:true,
            count : stories.length,
            data : stories ,
            page : paginationResult.page ,
            pages : paginationResult.pages
        })
    
})



const getAllPostCat = asyncErrorWrapper( async (req,res,next) =>{
console.log("getAllPostCat fired")
    let query = Story.find();
    query =searchHelper("categorie",query,req)
    const paginationResult =await paginateHelper(Story , query ,req)
    query = paginationResult.query  ;
    query = query.sort("-likeCount -commentCount -createdAt")
    const stories = await query    
    return res.status(200).json(
        {
            success:true,
            count : stories.length,
            data : stories ,
            page : paginationResult.page ,
            pages : paginationResult.pages
        })

})




const detailStory =asyncErrorWrapper(async(req,res,next)=>{

    const {slug}=req.params ;
    const {activeUser} =req.body 

    const story = await Story.findOne({
        slug: slug 
    }).populate("author likes")

    const storyLikeUserIds = story.likes.map(json => json.id)
    const likeStatus = storyLikeUserIds.includes(activeUser._id)


    return res.status(200).
        json({
            success:true,
            data : story,
            likeStatus:likeStatus
        })

})

const likeStory =asyncErrorWrapper(async(req,res,next)=>{

    const {activeUser} =req.body 
    const {slug} = req.params ;

    const story = await Story.findOne({
        slug: slug 
    }).populate("author likes")
   
    const storyLikeUserIds = story.likes.map(json => json._id.toString())
   
    if (! storyLikeUserIds.includes(activeUser._id)){

        story.likes.push(activeUser)
        story.likeCount = story.likes.length
        await story.save() ; 
    }
    else {

        const index = storyLikeUserIds.indexOf(activeUser._id)
        story.likes.splice(index,1)
        story.likeCount = story.likes.length

        await story.save() ; 
    }
 
    return res.status(200).
    json({
        success:true,
        data : story
    })

})

const editStoryPage  =asyncErrorWrapper(async(req,res,next)=>{
    const {slug } = req.params ; 
   
    const story = await Story.findOne({
        slug: slug 
    }).populate("author likes")

    return res.status(200).
        json({
            success:true,
            data : story
    })

})


const editStory  =[parser.single("image"),async(req,res,next)=>{    
    const {slug } = req.params ; 

    const {title ,categorie ,content ,image ,previousImage } = req.body;
    console.log(previousImage);
    console.log(image);
    // const newImage = req.file
    
    try {        
        console.log(req.body);
        const story = await Story.findOne({slug : slug})
        console.log(story);
            story.title = title;
            story.categorie = categorie;
            story.content = content;
            if(previousImage) { 

                    await cloudinary.uploader.destroy(previousImage);
                }
                const result = await cloudinary.uploader.upload(req.file.path, {
                public_id: `storyPhoto/${story.author}/story`
                })
            story.image =  result.url  ;          

            await story.save();

            return res.status(200).
            json({
            success:true,
            data :story
            })
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: 'An error occurred',
                    error: error.message,
                });
        }
    }];

const deleteStory  =asyncErrorWrapper(async(req,res,next)=>{

    const {slug} = req.params  ;

    const story = await Story.findOne({slug : slug })
    await cloudinary.uploader.destroy(`storyPhoto/${story.author}/story`
    );
    // deleteImageFile(req,story.image) ; 

    await story.remove()

    return res.status(200).
        json({
            success:true,
            message : "Story delete succesfully "
    })

})


module.exports ={
    addStory,
    getAllStories,
    getAllPostCat,
    detailStory,
    likeStory,
    editStoryPage,
    editStory ,
    deleteStory
}
/*

// define DELETE endpoint for deleting a single user post
.delete('/delete/:id', async (req, res) => {
    // extract post ID from request params
    const id = req.params.id
    try {
      const post = await Post.findById(id)

      // find post by ID and delete it
      if (!post) {
        res.status(404).json({ message: 'Post not found.' })
      } else {
        // this deletes any image uploads to cloudinary as well
        await cloudinary.uploader.destroy(`user_posts/${post.user}/post`)
        // this deletes the post data from mongoDB
        await Post.deleteOne({ _id: id })
        res.status(201).json('Post deleted.')
      }
    } catch (err) {
      // respond with status 500 and err msg
      res.status(500).json(err)
    }
  })

  */