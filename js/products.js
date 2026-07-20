const products = [

    {
        id: 1,
        name: "SMART TVS",
        price: 1800,
        image: "images/product1.png"
    },

    {
        id: 2,
        name: "MOBILE PHONES",
        price: 15000,
        image: "images/product2.png"
    },

    {
        id: 3,
        name: "PS 5",
        price: 9500,
        image: "images/product3.png"
    },

    {
        id: 4,
        name: "LAPTOPS",
        price: 2500,
        image: "images/product4.png"
    },

    {
        id: 5,
        name: "SMART WATCHES",
        price: 900,
        image: "images/product5.png"
    },

    {
        id: 6,
        name: "AIR PODS",
        price: 650,
        image: "images/product6.png"
    }
    // {
    //     id: 7,
    //     name: "KEYBOARD",
    //     price: 650,
    //     image: "images/product7.jpg"
    // },

    // {
    //     id: 8,
    //     name: "PERSONAL COMPUTER",
    //     price: 650,
    //     image: "images/product8.jpg"
    // },
    // {
    //     id: 9,
    //     name: "SOUND SYSTEM",
    //     price: 650,
    //     image: "images/product9.jpg"
    // }

]


const productContainer = document.getElementById("products");

function displayProducts() {

    productContainer.innerHTML = "";

    products.forEach(product => {

        productContainer.innerHTML += `

<div class="col-lg-4 col-md-6 mb-4">

<div class="card h-100 shadow">

<img src="${product.image}" class="card-img-top" height="250">

<div class="card-body">

<h5>${product.name}</h5>

<h4 class="text-primary">
GH₵ ${product.price}
</h4>

<button
class="btn btn-warning w-100 add-cart"
data-id="${product.id}">

Add to Cart

</button>

</div>

</div>

</div>

`;

    });

}

displayProducts();