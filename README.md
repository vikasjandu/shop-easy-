

# 🛒 ShopEasy – Advanced E-Commerce Website

A fully responsive **E-Commerce Website** built using **pure HTML, CSS, and JavaScript** as a **BCA Final Year Project**.

This project simulates a real-world online shopping system including cart management, checkout process, multiple payment options, shipping address system, and order confirmation page.

---

# 🚀 Project Features

---

## 🏠 Home Page (`index.html`)

* Responsive Navigation Bar
* Brand Logo
* Search Bar (Filter products by name/category)
* Product Grid (8 Products)
* Add to Cart Button with feedback
* Cart Icon with Dynamic Item Count
* Hero Section
* Advanced Amazon-Style Footer

---

## 🛒 Cart Page (`cart.html`)

* Display Cart Items with Images
* Increase / Decrease Quantity
* Remove Item Button
* Auto Calculated Total Price
* Clear Cart Button
* Data Stored in localStorage
* Cart Survives Page Refresh

---

## 💳 Payment Page (`payment.html`)

* Shipping Address Form:

  * Full Name
  * Mobile Number
  * Email
  * Complete Address
  * City, State, Pincode
  * Form Validation

* Multiple Payment Methods:

  * Credit / Debit Card
  * UPI
  * Net Banking
  * Wallet (Paytm, PhonePe, Amazon Pay, Google Pay)
  * Cash on Delivery

* Dynamic Payment Method Toggle (JavaScript)

* Order Summary Section

* Confirm & Pay Button

* Order ID Auto Generation

* Order Saved in localStorage

---

## 🎉 Success Page (`success.html`)

* Displays:

  * Order ID
  * Total Amount
  * Order Date
  * Delivery Address
  * Mobile Number
* Data Loaded from localStorage
* Professional Confirmation UI
* Back to Home Button

---

# 🗂 Updated File Structure

```
ecommerce-project/
├── index.html        # Home page
├── cart.html         # Shopping cart page
├── payment.html      # Checkout & payment page
├── success.html      # Order confirmation page
├── style.css         # All website styling
├── script.js         # Main cart functionality
└── README.md         # Project documentation
```

---

# 🧠 Key JavaScript Functionalities

| Function             | Description              |
| -------------------- | ------------------------ |
| `addToCart()`        | Add product to cart      |
| `removeFromCart()`   | Remove product from cart |
| `updateQuantity()`   | Change item quantity     |
| `clearCart()`        | Clear entire cart        |
| `displayProducts()`  | Render product grid      |
| `displayCartItems()` | Render cart page         |
| `filterProducts()`   | Search products          |
| `generateOrderID()`  | Generate unique Order ID |
| `paymentSuccess()`   | Save order & redirect    |
| `showPayment()`      | Toggle payment method UI |

---

# 💾 Data Management

This project uses:

* **localStorage** for:

  * Cart Data
  * Order Details
  * Shipping Address
  * Order ID

No backend or database required.

---

# 🛠 Technologies Used

* **HTML5** – Page Structure
* **CSS3** – Styling & Responsive Design
* **JavaScript (Vanilla JS)** – Interactivity
* **localStorage API** – Data Persistence

---

# 🌍 Browser Support

Works on all modern browsers:

* Google Chrome (Recommended)
* Mozilla Firefox
* Microsoft Edge
* Safari

---

# 📚 Learning Concepts Covered

1. DOM Manipulation
2. Event Handling
3. Form Validation
4. localStorage Data Handling
5. CSS Grid & Flexbox
6. Responsive Design
7. Dynamic Page Redirection
8. Order Management Logic
9. UI/UX Design Principles
10. Checkout Flow Implementation

---

# 🔧 How to Run the Project

1. Download all project files
2. Extract into a folder
3. Open `index.html` in any modern browser
4. Add products to cart
5. Proceed to cart → payment → place order
6. View order confirmation page

No installation or server required.

---

# 💡 Future Improvements (Optional Upgrades)

* Order History Page
* Admin Panel
* Invoice PDF Download
* Login & Signup System
* Real Payment Gateway (Razorpay / Stripe)
* Backend Integration (Node.js + Database)

---

# 👨‍🎓 Project Information

Developed by: **Vikas**
Course: **BCA (Bachelor of Computer Applications)**
Project Type: **Frontend E-Commerce Website**
Technologies: HTML, CSS, JavaScript

---

# ❤️ Conclusion

ShopEasy is a beginner-to-intermediate level E-Commerce project demonstrating real-world shopping flow including:

✔ Product Listing
✔ Cart System
✔ Checkout Process
✔ Multiple Payment Options
✔ Address Collection
✔ Order Confirmation

