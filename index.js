export const categorySelect = document.getElementById('category');
export const productSelect = document.getElementById('product');
export const tableRows = document.getElementById('tableRows');

export let allProducts = [];

export async function fetchCategoriesAndProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    console.log(data)
    allProducts = data.products;
    selectCategories(allProducts);
    selectProducts(allProducts);  // Initially populate products
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

//Select category 
export function selectCategories(products) {
  const categories = [...new Set(products.map(product => product.category))];
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}

export function selectProducts(products) {
  productSelect.innerHTML = '<option value="">Select a product</option>';
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.title;
    productSelect.appendChild(option);
  });
}

export function displaySelectedProduct(productId) {
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








