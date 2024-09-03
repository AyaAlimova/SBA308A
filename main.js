import {
  categorySelect, productSelect, fetchCategoriesAndProducts, allProducts,
  selectProducts, displaySelectedProduct} from './index.js'
  import {createProduct, updateProduct} from './api.js'


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

//Add new product
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
  createProduct(newProduct)
})
//Update description part
document.getElementById('updateBtn').addEventListener('click',() => {
  const productId = productSelect.value;
  const updateProducts ={
    id: '155',
    title: 'Iphone16',
    description: 'There have been mixed rumors about the color options for the iPhone 16 models. One rumor suggested seven colors, including blue, pink, yellow, green, black, white, and purple.',
    category:'beauty',
    price: '1300',
    discountPercentage:'5.5',
    rating:'9',
    stock: 'out of stock',
    thumbnail: 'http://'
  };
  updateProduct(productId, updateProducts)
});

fetchCategoriesAndProducts();

