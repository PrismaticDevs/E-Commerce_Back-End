async function getProducts() {
    await fetch('/api/product')
        .then(response => {
            console.log(response);
        })
}
getProducts();