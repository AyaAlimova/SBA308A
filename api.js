import { selectProducts, allProducts, displaySelectedProduct } from "./index.js";

//Using POST method
export async function createProduct(newProduct) {
  try{
    const response = await fetch("https://dummyjson.com/products/add", {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(newProduct)
    });
    const createProduct = await response.json();
    allProducts.push(createProduct);
    selectProducts(allProducts)
  }
  catch(error){
    console.error('Error creating product: ', error)
  }
}
//Using PUT method

export async function updateProduct(productID, updateProduct) {
  try{
    const response = await fetch("https://dummyjson.com/products/add", {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(updateProduct)
    });
    const updateProductData = await response.json();
    const index = allProducts.findIndex(product => product.id == productID);
    allProducts[index] = updateProductData;
    selectProducts(allProducts);
    displaySelectedProduct(productID);
  }
  catch(error){
    console.error('Error updating product', error)
  }
}

