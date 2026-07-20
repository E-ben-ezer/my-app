// Stores selected products
let cart = [];

function addToCart(id) {
  const exists = cart.find(item => item.id === id);
  if (exists) {
    exists.quantity++;
  } else {
    const product = products.find(item => item.id === id);
    cart.push({ ...product, quantity: 1 });
  }
  updateCart();
}


function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;

  updateButtons();

  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");

  const total = document.getElementById("cart-total");

  cartItems.innerHTML = "";

  let grandTotal = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p class='text-center'>Your cart is empty.</p>";

    total.innerHTML = "GH₵0";

    return;
  }

  cart.forEach((item) => {
    const subTotal = item.price * item.quantity;

    grandTotal += subTotal;

    cartItems.innerHTML += `

<div class="card mb-3">

<div class="card-body">

<div class="row align-items-center">

<div class="col-md-2">

<img src="${item.image}"
class="img-fluid">

</div>

<div class="col-md-4">

<h5>${item.name}</h5>

</div>

<div class="col-md-2">

GH₵${item.price}

</div>

<div class="col-md-2">

<div class="btn-group">

<button
class="btn btn-outline-danger decrease"

data-id="${item.id}">

-

</button>

<button
class="btn btn-light">

${item.quantity}

</button>

<button
class="btn btn-outline-success increase"

data-id="${item.id}">

+

</button>

</div>

</div>

<div class="col-md-2">

<p class="fw-bold">

GH₵${subTotal}

</p>

<button
class="btn btn-sm btn-danger remove-item"

data-id="${item.id}">

Remove

</button>

</div>

</div>

</div>

</div>

`;
  });

  total.innerHTML = "GH₵" + grandTotal;
}

function increaseQuantity(id) {
  const item = cart.find((product) => product.id === id);

  if (item) {
    item.quantity++;
  }

  updateCart();
}

function decreaseQuantity(id) {
  const item = cart.find((product) => product.id === id);

  if (item) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      removeFromCart(id);

      return;
    }
  }

  updateCart();
}

function updateButtons() {
  const buttons = document.querySelectorAll(".add-cart");

  buttons.forEach((button) => {
    const id = Number(button.dataset.id);

    const found = cart.find((item) => item.id === id);

    if (found) {
      button.innerText = "Remove from Cart";
      button.classList.remove("btn-warning");
      button.classList.add("btn-danger");
    } else {
      button.innerText = "Add to Cart";
      button.classList.remove("btn-danger");
      button.classList.add("btn-warning");
    }
  });
}
