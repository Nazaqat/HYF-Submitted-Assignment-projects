const products =  getAvailableProducts();

function renderProducts(products){
    const productList = document.querySelector("section.products > ul");
    
   
    products.forEach(products => {
    const nameLi = document.createElement('li');
    nameLi.textContent = products.name;
    productList.appendChild(nameLi);

    const priceLi = document.createElement('li');
    priceLi.textContent = products.price;
    productList.appendChild(priceLi);

    const ratingLi = document.createElement('li');
    ratingLi.textContent = products.rating;
    productList.appendChild(ratingLi);


    const shipsToLi = document.createElement('li');
    shipsToLi.textContent = products.shipsTo;
    productList.appendChild(shipsToLi);
    });
    return productList;
    
}

console.log(renderProducts(products));


    

  












