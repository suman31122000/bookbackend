import comment from "../model/comment.model.js";
const addcomment=async(req,res)=>{
    try{
        const newcomment=new comment(req.body); 
        await newcomment.save();
        res.status(200).json({ message: "comment added successfully" });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
const deletecomment=async(req,res)=>{
    try{
        const commentid=req.body._id || req.body.bookname;
        console.log(commentid);
        if(!commentid){
            return res.status(400).json({ message: "comment id required" });
        }
        const existingcomment=await comment.findOne({commentid});
        if(!existingcomment){
            return res.status(400).json({ message: "comment not found" });
        }
        await comment.deleteOne({commentid});
        res.status(200).json({ message: "comment deleted successfully" });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
export { addcomment,deletecomment};