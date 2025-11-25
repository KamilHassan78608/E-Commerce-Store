import mongoose from 'mongoose'

const Product_Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: Array,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    sizes: {
    type: Array,
    required: true
    },
    best_seller: {
        type: Boolean,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
});

const Product_Model = mongoose.models.product || mongoose.model("product", Product_Schema);

export default Product_Model