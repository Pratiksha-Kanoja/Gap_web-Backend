import ProductModal from "../Modals/Product.modal.js";

export const Addproduct = async(req,res) =>{
    try {
        const {name,price,category,image} = req.body;
        if(!name|| !price || !category|| !image)return res.status(404).json({success:false,message:"All fields are mandatory"})

        const product = new ProductModal({
            name,price,category,image
        })

        const response = await product.save();

        return res.status(200).json({success:true,message:"Product successfully added."})
    } catch (error) {
        return res.status(500).json({success:false,message:error})
    }
}


export const getallproducts =async(req,res)=>{
    try {
        const products = await ProductModal.find()
        if(products.length){
            return res.status(200).json({success:true,message:"Product found",products:products})
        }
        return res.status(404).json({success:false,message:"Product not found"})
    } catch (error) {
        return res.status(500).json({success:false,message:"Product not Found"})
    }
}