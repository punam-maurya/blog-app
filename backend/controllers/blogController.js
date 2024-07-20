const Blog=require("../models/blogSchema");

async function createBlog(req,res){
    try{
      const currentDate=new Date();
   
   const {heading,content}=await req.body;

//    saving the data to database
    const newBlog=new Blog({
      heading, content, createdAt:currentDate
    });
    const data=await newBlog.save();
   res.status(201).json({msg:"Blog Added Successfully",data:data});
    }
    catch(error){
      console.error(error);
      res.status(500).json({msg:"Blog Adding Error",data})
    }
}

async function readBlog(req,res){
 try{
   const blogs=await Blog.find();
  res.status(200).json(blogs);
 }catch(error){
   console.error(error);
   res.status(500).json({"msg":"cannot fetch blogs"})
 }
}

module.exports={createBlog,readBlog}