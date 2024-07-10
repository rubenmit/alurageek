document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('product-form');
    const productList = document.getElementById('product-list');

    const products = [
        { name: 'Mario', price: '60.00', image: 'varios/mario.jpg' },
        { name: 'Pikachu', price: '40.00', image: 'varios/pikachu.jpg' },
        { name: 'Mario', price: '60.00', image: 'varios/mario.jpg' },
        { name: 'Pikachu', price: '40.00', image: 'varios/pikachu.jpg' },
        { name: 'Mario', price: '60.00', image: 'varios/mario.jpg' },
        { name: 'Pikachu', price: '40.00', image: 'varios/pikachu.jpg' },
        { name: 'Mario', price: '60.00', image: 'varios/mario.jpg' },
        { name: 'Pikachu', price: '40.00', image: 'varios/pikachu.jpg' },
        { name: 'Mario', price: '60.00', image: 'varios/mario.jpg' },
    ];

    function renderProducts() {
        productList.innerHTML = '';
        products.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="deleteProduct(${index})">Eliminar</button>
            `;
            
            productList.appendChild(productCard);
        });
    }

    window.deleteProduct = (index) => {
        products.splice(index, 1);
        renderProducts();
    }

    productForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const newProduct = {
            name: event.target.nombre.value,
            price: event.target.precio.value,
            image: event.target.imagen.value
        };

        products.push(newProduct);
        renderProducts();
        productForm.reset();
    });

    renderProducts();
});
