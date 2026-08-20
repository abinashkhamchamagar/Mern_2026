import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    brand: String,
    category: String,
    price: Number,

})

export default mongoose.model("Product", productSchema);