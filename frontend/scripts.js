document.addEventListener('DOMContentLoaded',() =>{

    fetchProducts()
})



function fetchProducts(){

    const productGrid = document.getElementById('product-grid')


    fetch('../backend/api.php')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {

                var card = document.createElement('div');

                let productImage = document.createElement('img');
                productImage.src = product.imageUrl;
                card.appendChild(productImage)

                let productName = document.createElement('h3');
                productName.textContent = product.productName;
                card.appendChild(productName)

                let cardButton = document.createElement('button')
                cardButton.textContent= 'Add to Cart';
                cardButton.addEventListener('click', () =>{
                    addProductToCart(product)
                })

                card.appendChild(cardButton)

                productGrid.appendChild(card)
            });
        })

        .catch(error => console.error(error))
}



function addProductToCart(product){

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let existingProduct = cart.find(item => item.id == product.productId);

    if(existingProduct){
        let quantity = 1;

        existingProduct.quantity += quantity;

        cart.push({id:product.productId, productName:product.productName, imageUrl: product.imageUrl, quantity: quantity})

    }else{
        cart.push({id:product.productId, productName:product.productName, imageUrl: product.imageUrl})

        localStorage.setItem('cart', JSON.stringify(cart))
    }
    
    
}