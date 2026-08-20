    import productServices from "../services/product.services.js"

    const createProduct = async (req, res) => {
    const createdProduct = await productServices.createProduct();
    
    res.json(createdProduct)
    }

const getProducts = async (req, res) => {
    const { brand } = req.query;
    const products = await productServices.getProducts(brand);
    res.json(products);
}


export default { createProduct, getProducts,};