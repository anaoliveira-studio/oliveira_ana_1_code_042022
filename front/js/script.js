const getProduct = async (url) => {
    const response = await fetch(url)
    if (response.status === 200) {
        return await response.json();
    } 
    return 'error';
}

const showProduct = async () => {
    const kanapList = await getProduct('http://localhost:3000/api/products');

    if (kanapList === 'error') {
        alert('Pas de produits disponibles');
        return;
    }

    kanapList.forEach((kanap) => {
        console.log(kanap);
    }); 
}

showProduct();
