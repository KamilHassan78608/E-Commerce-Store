import { v2 as cloudinary } from 'cloudinary';
import Product_Model from '../models/ProductsModel.js';

// Function to Add Product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        // Upload to Cloudinary
        let imageUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url;
            })
        );

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            best_seller: bestSeller === "true",
            sizes: JSON.parse(sizes), 
            image: imageUrl,
            date: Date.now()
        };

        const product = new Product_Model(productData);
        await product.save();

        res.json({ success: true, message: "Product added successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Function to List all Product
const listProduct = async (req, res) => {
    try {
        const products = await Product_Model.find({});
        res.json({
            success: true,
            products
        });

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
}

// Function to remove a Product
const removeProduct = async (req, res) => {

    try {
        await Product_Model.findByIdAndDelete(req.body.id)
        res.json({
            success: true,
            message: "Product Removed Succesfully"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
}

// Function to display a single Product
const singleProduct = async (req, res) => {
    try {
        
        const { product_Id } = req.body;
        const product = await Product_Model.findById(product_Id)
        res.json({
            success: true,
            product
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
}

export { addProduct, listProduct, removeProduct, singleProduct }