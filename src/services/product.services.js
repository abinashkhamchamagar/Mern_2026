import Product from "../models/Product.js"

const createProduct = async () => {

    return await Product.create(
        {
            name: "Iphone X",
            brand: "Apple",
            category: "Mobiles",
            price: 70000,
        }
    );

}
const getProducts = async (brand) => {
    if (brand) {
        return await Product.find({ brand: brand });
    }
    return Product.find();
};

export default { createProduct, getProducts, }