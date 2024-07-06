import  express  from "express";
import { urlModel } from "../model/shortUrl";

export const createUrl = async (
    req:express.Request,
    res:express.Response
)=>{
    try{
        console.log("the FulUrl is : ",req.body.fullUrl);
        const {fullUrl} = req.body;
        const urlFound = await urlModel.find({fullUrl})
        
        if(urlFound.length > 0)
        {
            res.status(409);
            res.send(urlFound);
        }else{
            const shortUrl = await urlModel.create({fullUrl});
            res.status(201).send({shortUrl});
        }

    }catch(err){
        res.status(500).send({message: "something went wrong!"});
    }
};
export const getAllUrl = async (
    req:express.Request,
    res:express.Response
)=>{
    try{
        const shortUrls = await urlModel.find();
        if(shortUrls.length < 0)
            {
                res.status(404).send({message:"short Url not foun"})
                
            }else{
                res.status(200).send(shortUrls);
    
            }
    }catch(err){
        res.status(500).send({message: "something went wrong!"});

    }
};
export const getUrl = async (
    req:express.Request,
    res:express.Response
)=>{
    try{
        const shortUrl = await urlModel.findOne({shortUrl:req.params.id});
        if(shortUrl)
        {
            shortUrl.clicks++;
            shortUrl.save();
            res.redirect(`${shortUrl.fullUrl}`);
        }else
        {   
            res.status(404).send({message:"Full url not found"});
        }
    }catch (error){
        res.status(500).send({message: "something went wrong!"});
    }
};
export const deleteUrl = async (
    req:express.Request,
    res:express.Response
)=>{ 
    try{

    const shortUrl = await urlModel.findByIdAndDelete(req.params.id);
    if(shortUrl)
    {
        res.status(204).send({message:"Requested Url Successfully Deleted..!"});
    }
    }catch (error){
        res.status(500).send({message: "something went wrong!"});
    }
};