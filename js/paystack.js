function payWithPaystack(){

    let name =
    document.getElementById("customer-name").value;


    let email =
    document.getElementById("customer-email").value;


    let phone =
    document.getElementById("customer-phone").value;


    let totalAmount = 0;


    cart.forEach(item=>{

        totalAmount += item.price * item.quantity;

    });



    let handler = PaystackPop.setup({

        key: "pk_test_986a6640b9a357468d009c81362460c35a117643",

        email: email,

        amount: totalAmount * 100,

        currency: "GHS",


        metadata: {

            custom_fields:[

                {
                    display_name:"Customer Name",
                    variable_name:"name",
                    value:name
                },

                {
                    display_name:"Phone",
                    variable_name:"phone",
                    value:phone
                }

            ]

        },


        callback:function(response){

            paymentSuccessful(response);

        },


        onClose:function(){

            alert("Payment cancelled");

        }


    });


    handler.openIframe();


}

// function paymentSuccessful(response){


// console.log(response.reference);


// alert(
// "Payment Successful! Reference: "
// + response.reference
// );


// }

function paymentSuccessful(response){


let name =
document.getElementById("customer-name").value;


let summary =
document.getElementById("summary-content");


let message = `

<h4 class="text-success">
Congratulations ${name}!
</h4>


<p>
Your purchase was successful.
</p>


<h5>
Order Summary
</h5>


<ul>

`;


cart.forEach(item=>{


message += `

<li>

${item.name} 
-
Quantity: ${item.quantity}

</li>

`;


});


message += `

</ul>


<h5>
Total:
GH₵${calculateTotal()}
</h5>


<p>
Payment Reference:
${response.reference}
</p>

`;


summary.innerHTML = message;



let modal =
new bootstrap.Modal(
document.getElementById("summaryModal")
);


modal.show();



}

function calculateTotal(){


let total = 0;


cart.forEach(item=>{

total += item.price * item.quantity;

});


return total;


}