const express=require("express");
const {ProductModel} = require("../model/product.model");
const product=express.Router();
product.use(express.json());

product.get("/",async(req,res)=>{
    res.send(await ProductModel.find());
});

product.get("/single/:id",async(req,res)=>{
  const ids=req.params.id;
  const data=await ProductModel.find({_id:ids});
  res.send(data);
});

product.get("/:gend",async(req,res)=>{
    const gen=req.params.gend;
    const {category,page,limit=10}=req.query;
    if(category){
        res.send(await ProductModel.find({gender:gen,category:category}).limit(limit).skip((page-1)*limit));
    }
    else{
        res.send(await ProductModel.find({gender:gen}).limit(limit).skip((page-1)*limit));
    }
});

product.post("/create", async (req, res) => {
    try {
      await ProductModel.create(req.body);
      res.status(200).send({ msg: "Product Added" });
    } catch (e) {
      console.log(e);
      res.status(400).send({ msg: "Not Found" });
    }
  });
  
  product.patch("/update/:prodID", async (req, res) => {
    try {
      const prodID = req.params.prodID;
      await ProductModel.findByIdAndUpdate({_id:prodID}, req.body);
      res.status(200).send({ msg: "Product Modified" });
    } catch (e) {
      console.log(e);
      res.status(400).send({ msg: "Not Found" });
    }
  });
  
  product.delete("/delete/:prodID", async (req, res) => {
      try {
        const prodID = req.params.prodID;
        await ProductModel.findByIdAndDelete(prodID);
        res.status(200).send({ msg: "Product deleted" });
      } catch (e) {
        console.log(e);
        res.status(400).send({ msg: "Not Found" });
      }
    });

    product.patch("/updateimg/:prodID", async (req, res) => {
      try {
        const prodID = req.params.prodID;
        let singleData=await ProductModel.findOne({_id:prodID});
        let newimage=req.body.image;
        singleData.image.push(newimage);
        let imageload={
          image:singleData.image
        }
        await ProductModel.findByIdAndUpdate({_id:prodID}, imageload);
        res.status(200).send({ msg: "Image Modified" });
      } catch (e) {
        console.log(e);
        res.status(400).send({ msg: "Not Found" });
      }
    });

module.exports=product;