const getProduct=(id)=>{
    return `http://localhost:5000/api/products/?id=${id}`
}
const getAllProducts=()=>('http://localhost:5000/api/products/');
module.exports={getAllProducts,getProduct};