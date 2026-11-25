import { Schema, model} from "mongoose";
import bcrypt from 'bcrypt';

const productSchema = new Schema({
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
        minLength: 0
    },
    category: {
        type: String,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    },
    tags: {
        type: [String]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Product = model("Product", productSchema)

export default Product;