import  books  from "../model/book.model.js";
const addbook = async (req, res) => {
    try {
        const booksData = Array.isArray(req.body) ? req.body : [req.body];
        for (const bookData of booksData) {
            const existingBook = await books.findOne({ title: bookData.title });
            if (existingBook) {
                console.log(existingBook.quantity);
                if(bookData.quantity>1){
                    existingBook.quantity += bookData.quantity;
                    await existingBook.save();
                }
                existingBook.quantity += 1;
                await existingBook.save();
            }
            else{
            const newBook = new books(bookData);
            await newBook.save();
            }
        }
        res.status(200).json({ message: "book added successfully" });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "book not added" });
    }
}

const removebook=async(req,res)=>{
    try{
        console.log(req.body);
       const bookid=req.body._id || req.body.title;
       console.log(bookid);
       if(!bookid){
        return res.status(400).json({ message: "book id required" });
       }
       const existingBook=await books.findOne({bookid});
       if(!existingBook){
        return res.status(400).json({ message: "book not found" });
       }
       if(existingBook.quantity>1){
        existingBook.quantity -= 1;
        await existingBook.save();
        return res.status(200).json({ message: "book quantity decremented successfully",data:{quantity:existingBook.quantity} });
       }
       else
       {
        const result=await books.deleteOne({bookid});
        return res.status(200).json({ message: "book removed successfully" });
       }
    }
    catch{
        console.log(err);
        res.status(400).json({ message: "book not removed" });
    }
}

const  booklist=async(req,res)=>{
    try {
        const skip=parseInt(req.query.skip)||0;
        const limit=parseInt(req.query.limit)||20;
        const total=await books.countDocuments();
        const remaining=total-skip-limit;
        if(remaining<0){
            return res.status(400).json({message:"no more books"});
        }
        const bookdata=await books.find()
        .skip(skip)
        .limit(limit);


        return res.status(200).json({message:"books fetched successfully",books:bookdata,remaining:remaining,skip:skip});
    } catch (error) {
        console.log(error,"books not fetched");
    }
}
 const bookdetails=async(req,res)=>{
     try{
        const searchtext=req.params.info;
        const bookdata=await books.find({
            $text: {
                $search: searchtext
            }}).limit(10);
            if(bookdata.length===0){
                return res.status(400).json({message:"no book found"});
            }
        return res.status(200).json({message:"book details fetched successfully",data:bookdata});
     }
     catch(error){
        console.log(error,"book details not fetched");
     }
 }

 const updatebook=async(req,res)=>{
     try{
        const {bookid,updatetype,updatevalue}=req.body;
        const result=await books.updateOne({_id:bookid},{$set:{[updatetype]:updatevalue}});
        console.log(result);
        if(result.modifiedCount>0){
            return res.status(200).json({message:"book updated successfully"});
        }
        else{
            return res.status(400).json(error,{message:"book not updated"});
        }
     }
     catch(error){
        console.log(error,"book not updated");
     }
 }
export {addbook,removebook,bookdetails,booklist,updatebook};