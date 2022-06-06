const url = new URL(window.location.href);

let productId = url.searchParams.get("id");

const getProduct = async (url) => {
    const response = await fetch(url)
    if (response.status === 200) {
        return await response.json();
    }
    return 'error';
}

const showProduct = async () => {
    const kanap = await getProduct('http://localhost:3000/api/products/' + productId);

    if (kanap === 'error') {
        alert('Produit non trouvé.');
        return;
    }
    console.log(kanap);

    const itemLogo = document.getElementsByClassName('item__img');
    const itemTitle = document.getElementById('title');
    const itemPrice = document.getElementById('price');
    const itemDescription = document.getElementById('description');
    const itemColors = document.getElementById('colors');

    let colorOption = '';

    kanap.colors.forEach((color) => {
        colorOption += `<option value="${color}">${color}</option>`;
    })

    itemLogo[0].innerHTML = `<img src="${kanap.imageUrl}" />`;
    itemTitle.innerHTML = kanap.name;
    itemPrice.innerHTML = kanap.price;
    itemDescription.innerHTML = kanap.description;
    itemColors.innerHTML += colorOption;
}

showProduct();