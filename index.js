const categorySelect = document.getElementById('category');
const productSelect = document.getElementById('product');
const tableRows = document.getElementById('tableRows');

let allProducts = [];

async function fetchCategoriesAndProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    allProducts = data.products;
    selectCategories(allProducts);
    selectProducts(allProducts);  // Initially populate products
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

//Select category 
function selectCategories(products) {
  const categories = [...new Set(products.map(product => product.category))];
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}

function selectProducts(products) {
  productSelect.innerHTML = '<option value="">Select a product</option>';
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.title;
    productSelect.appendChild(option);
  });
}
function updateProducts() {
  const selectedCategory = categorySelect.value;
  const filteredProducts = allProducts.filter(product => product.category === selectedCategory);
  selectProducts(filteredProducts);
}


function displaySelectedProduct(productId) {
  const selectedProduct = allProducts.find(product => product.id == productId);

  if (selectedProduct) {
    const rows =
      `<tr>
          <td>${selectedProduct.id}</td>
          <td>${selectedProduct.title}</td>
          <td>${selectedProduct.description}</td>
          <td>${selectedProduct.category}</td>
          <td>${selectedProduct.price}</td>
          <td>${selectedProduct.discountPercentage}</td>
          <td>${selectedProduct.rating}</td>
          <td>${selectedProduct.stock}</td>
          <td>${selectedProduct.brand}</td>
          <td><img src = "${selectedProduct.thumbnail}" style ="width: 20%"/></td></tr>`;
          tableRows.innerHTML = rows;
  }
  else {
      tableRows.innerHTML = `<tr><td colspan="10">No product found</td></tr>`;
  }

}
categorySelect.addEventListener('change', updateProducts);

productSelect.addEventListener('change', (event) => {
  const selectProductId = event.target.value;
  displaySelectedProduct(selectProductId)
});

fetchCategoriesAndProducts();

//Using POST method
async function createProduct(newProduct) {
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

async function updateProduct(productID, updateProduct) {
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

// Deleting data
async function deleteProduct(productID) {
  try{
    await fetch('https://dummyjson.com/products/${productID}',{
      method: 'DELETE'
    });
    allProducts = allProducts.filter(product => product.id != productID)
    createProduct(allProducts);
    tableRows.innerHTML =`<tr><td colspan = "10"> Product delete</td></tr>`
  }
  catch(error){
    console.log('Error deleting product:', error)
  }
}








