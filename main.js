import {
  categorySelect, productSelect, fetchCategoriesAndProducts,
  selectCategories, selectProducts, displaySelectedProduct,
  createProduct, updateProduct, deleteProduct 
} from './index.js'

function updateProducts() {
  const selectedCategory = categorySelect.value;
  const filteredProducts = allProducts.filter(product => product.category === selectedCategory);
  selectProducts(filteredProducts);
}
categorySelect.addEventListener('change', updateProducts);

productSelect.addEventListener('change', (event) => {
  const selectedProductId = event.target.value;
  displaySelectedProduct(selectedProductId)
});

document.getElementById('createBtn').addEventListener('click', () =>{
  const newProduct = {
   id: '155',
   title: 'Iphone16',
   description: 'This is a new iphone',
   category:'beauty',
   price: '1300',
   discountPercentage:'5.5',
   rating:'9',
   stock: 'out of stock',
   thumbnail: 'http://'
  };
  data.createProduct(newProduct)
})

document.getElementById('updateBtn').addEventListener('click',() => {
  const productId = productSelect.value;
  const updateProduct ={
    id: '155',
    title: 'Iphone16',
    description: 'This is a new iphone',
    category:'beauty',
    price: '1300',
    discountPercentage:'5.5',
    rating:'9',
    stock: 'out of stock',
    thumbnail: 'http://'
  };
  updateProduct(productId, updateProduct)
});

document.getElementById('deleteBtn').addEventListener('click', () => {
  const productID = productSelect.value;
  deleteProduct(productID)
});

fetchCategoriesAndProducts();
