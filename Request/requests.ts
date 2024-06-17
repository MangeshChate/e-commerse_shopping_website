export async function getAllCategory(){
    const categoryRes = await fetch('https://fakestoreapi.com/products/categories')
    return categoryRes.json();
}

export async function getAllProduct(){
    const productRed = await fetch('https://fakestoreapi.com/products/')
    return productRed.json();
}

export async function getSingleProduct(id:string){
    const getProduct = await fetch(`https://fakestoreapi.com/products/${id}`)
    return getProduct.json(); 
}

export async function getProductByCategory(category:string){
    const getProduct = await  fetch(`https://fakestoreapi.com/products/category/${category}`)
    return getProduct.json();
}