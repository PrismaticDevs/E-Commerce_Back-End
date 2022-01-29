async function getProducts() {
    await fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            // Targets DOM element for displaying products
            const $products = document.getElementById('products');
            const $ul = document.createElement('ul');
            $ul.classList.add('list-group');
            const $h1 = document.createElement('h1');
            $ul.appendChild($h1);
            $h1.textContent = 'Products';
            // Loops to create and append data to a list
            products.forEach(product => {
                // Creates list elements
                const $li = document.createElement('li');
                const $p = document.createElement('p');
                const $button = document.createElement('button');
                // Appends elements
                $ul.appendChild($li).classList.add('list-group-item');
                $li.appendChild($p);
                $p.innerHTML = product.product_name + ' $' + product.price;
            });
            // Appends list
            $products.appendChild($ul);
        });
}
getProducts();