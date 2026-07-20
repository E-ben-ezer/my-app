document.addEventListener("click", function(e){


    // Add product to cart
    if(e.target.classList.contains("add-cart")){


        const id = Number(e.target.dataset.id);

        addToCart(id);


    }



    // Increase quantity
    if(e.target.classList.contains("increase")){


        increaseQuantity(
            Number(e.target.dataset.id)
        );


    }



    // Decrease quantity
    if(e.target.classList.contains("decrease")){


        decreaseQuantity(
            Number(e.target.dataset.id)
        );


    }



    // Remove cart item
    if(e.target.classList.contains("remove-item")){


        removeFromCart(
            Number(e.target.dataset.id)
        );


    }



    // Checkout

    if(e.target.id === "checkout-btn"){


        if(!validateForm()){

            alert("Please complete your information");

            return;

        }


        let modal =
        bootstrap.Modal.getInstance(
            document.getElementById("cartModal")
        );


        modal.hide();


        payWithPaystack();


    }



});