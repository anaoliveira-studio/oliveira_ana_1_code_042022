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
        alert('Produit non trouvé.');
        return;
    }

    const items = document.getElementById('items');

    let carteHTML = '';

    kanapList.forEach((kanap) => {
        carteHTML += `<a href="./product.html?id=${kanap._id}">
        <article>
          <img src="${kanap.imageUrl}" alt="${kanap.altTxt}">
          <h3 class="productName">${kanap.name}</h3>
          <p class="productDescription">${kanap.description}</p>
        </article>
        </a>`;

        console.log(kanap);
    });

    items.innerHTML = carteHTML;
    console.log(items);
}

showProduct();