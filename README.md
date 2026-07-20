

This project is a simple e-commerce shopping cart web application built with **HTML, CSS, and JavaScript**. It allows users to browse products, add and remove items from the shopping cart, view the total cost, and complete payments using **Paystack Test Mode**.

The project demonstrates client-side JavaScript programming, DOM manipulation, form validation, and payment gateway integration.

---


* Browse available products
* Add products to the shopping cart
* Update item quantities
* Remove items from the cart
* Automatic cart total calculation
* Form validation before checkout
* Secure payment integration using **Paystack Test Mode**
* Order summary displayed after successful payment
* Cart automatically clears after successful payment
* Responsive design for desktop and mobile devices

---

## Project Structure

```text
project-folder/
│
├── css/
│   └── style.css
├── js/
│   ├── cart.js
│   ├── paystack.js
│   └── ...
├── images/
├── index.html
└── README.md
```

---

## How to Run the Project

### Option 1: Using Python

Open a terminal in the project folder and run:

```bash
python3 -m http.server 8080
```

Then open your browser and visit:

```
http://localhost:8080
```

### Option 2: Open Directly

Open the `index.html` file in your web browser.

> Note: Some browsers restrict certain JavaScript features when opening files directly. Running a local server is recommended.

---

## Payment

This project uses **Paystack in Test Mode** for demonstration purposes.

Use Paystack's test credentials when completing payments. No real money is charged during testing.

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Paystack Payment Gateway

---

## Future Improvements

* Store cart data using Local Storage
* Product search and filtering
* User authentication
* Order history
* Admin dashboard
* Backend database integration

---

## Author

Developed as a web development project for learning and demonstration purposes.
