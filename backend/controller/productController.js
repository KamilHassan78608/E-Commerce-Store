import { v2 as cloudinary } from 'cloudinary';
import Product_Model from '../models/ProductsModel.js';

// Function to Add Product
const addProduct = async (req, res) => {
    try {

        const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

        // Check if files exist
        if (!req.files || !req.files.image1) {
            return res.json({
                success: false,
                message: "Please upload all 4 images"
            });
        }

        const image1 = req.files.image1 && req.files.image1?.[0];
        const image2 = req.files.image2 && req.files.image2?.[0];
        const image3 = req.files.image3 && req.files.image3?.[0];
        const image4 = req.files.image4 && req.files.image4?.[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

        // Upload to Cloudinary
        let imageUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url
            })
        )

        // Check if all images are provided
        if (!image1 || !image2 || !image3 || !image4) {
            return res.json({
                success: false,
                message: "All 4 images are required"
            });
        }

        // Making data to store in Db
        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory: subCategory,
            best_seller: bestSeller === "true",
            sizes: sizes ? sizes.split(",").map(s => s.trim()) : [],
            image: imageUrl,
            date: Date.now()
        };


        console.log(productData);

        const product = new Product_Model(productData);
        await product.save()


        // console.log(name, description, price, category, subCategory, sizes, bestSeller);
        // console.log(image1, image2, image3, image4);
        // console.log(imageUrl);


        res.json({
            success: true,
            message: "Product added successfully"
        })


    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
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