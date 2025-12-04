import { v2 as cloudinary } from 'cloudinary';
import Product_Model from '../models/ProductsModel.js';

// Function to Add Product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

        // Validate required fields
        if (!name || !description || !price || !category || !subCategory) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields"
            });
        }

        // Validate files
        if (!req.files || !req.files.image1 || !req.files.image2 || !req.files.image3 || !req.files.image4) {
            return res.status(400).json({
                success: false,
                message: "All 4 images are required"
            });
        }

        const image1 = req.files.image1[0];
        const image2 = req.files.image2[0];
        const image3 = req.files.image3[0];
        const image4 = req.files.image4[0];

        // Upload to Cloudinary
        let imageUrl = [];
        try {
            const uploadPromises = [image1, image2, image3, image4].map(async (item) => {
                const result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url;
            });
            imageUrl = await Promise.all(uploadPromises);
        } catch (cloudinaryError) {
            console.log("Cloudinary error:", cloudinaryError);
            return res.status(500).json({
                success: false,
                message: "Failed to upload images"
            });
        }

        // Parse sizes correctly
        let parsedSizes = [];
        try {
            if (typeof sizes === 'string') {
                parsedSizes = JSON.parse(sizes);
            } else if (Array.isArray(sizes)) {
                parsedSizes = sizes;
            }
        } catch (e) {
            parsedSizes = [];
        }

        // Create product with CORRECT field names
        const productData = {
            name,
            description,
            category,
            sub_category: subCategory, // CORRECT FIELD NAME
            price: Number(price),
            best_seller: bestSeller === "true" || bestSeller === true,
            size: parsedSizes, // CORRECT FIELD NAME (not sizes)
            image: imageUrl,
            date: Date.now()
        };

        console.log("Saving product with data:", productData);

        const product = new Product_Model(productData);
        await product.save();

        return res.status(201).json({ 
            success: true, 
            message: "Product added successfully",
            product 
        });

    } catch (error) {
        console.log("Add Product Error:", error);
        return res.status(500).json({ 
            success: false, 
            message: error.message || "Failed to add product"
        });
    }
}

// Function to List all Product
const listProduct = async (req, res) => {
    try {
        const products = await Product_Model.find({});
        return res.json({
            success: true,
            products
        });

    } catch (error) {
        console.log("List Products Error:", error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// Function to remove a Product
const removeProduct = async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Product ID is required"
            });
        }

        await Product_Model.findByIdAndDelete(id);
        return res.json({
            success: true,
            message: "Product Removed Successfully"
        });
    } catch (error) {
        console.log("Remove Product Error:", error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// Function to display a single Product
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({
                success: false,
                message: "Product ID is required"
            });
        }

        const product = await Product_Model.findById(productId);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        return res.json({
            success: true,
            product
        });

    } catch (error) {
        console.log("Single Product Error:", error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export { addProduct, listProduct, removeProduct, singleProduct };

export { addProduct, listProduct, removeProduct, singleProduct }