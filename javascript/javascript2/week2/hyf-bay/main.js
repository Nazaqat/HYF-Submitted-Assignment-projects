//First week
console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');
        const shipsToHTML = product.shipsTo.reduce((acc, country) => `<li>${acc}</li><li>${country}</li>`);
        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);

    });
}
renderProducts(products);

//Second week

const searchForItems = document.querySelector('input');

function sorting() {
    const searchedItems = products.filter(item => item.name.includes(searchForItems.value));
  
    renderProducts(searchedItems);
  
  }
  
  searchForItems.addEventListener('input', sorting);




