/* ===============================================
   SIMPLE E-COMMERCE WEBSITE - JAVASCRIPT
   Fully Corrected Version (With GST + Payment)
   =============================================== */

/* ===============================================
   1. PRODUCT DATA
   =============================================== */

let appliedDiscount = 0;


function applyCoupon() {
    const input = document.getElementById("coupon-input");
    const message = document.getElementById("coupon-message");
    const code = input.value.trim().toUpperCase();

    if (code === "SAVE10") {
        appliedDiscount = 0.10;
        message.textContent = "10% discount applied!";
    } 
    else if (code === "SAVE20") {
        appliedDiscount = 0.20;
        message.textContent = "20% discount applied!";
    } 
    else {
        appliedDiscount = 0;
        message.textContent = "Invalid coupon!";
        message.style.color = "red";
    }

    displayCartItems();
}


const products = [
    { id: 1, name: "Wireless Bluetooth Headphones", price: 1499, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop", category: "Electronics" },
    { id: 2, name: "Smart Watch Pro", price: 2999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop", category: "Electronics" },
    { id: 3, name: "Running Sneakers", price: 1899, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop", category: "Fashion" },
    { id: 4, name: "Leather Backpack", price: 2499, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop", category: "Fashion" },
    { id: 5, name: "Polaroid Camera", price: 4599, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop", category: "Electronics" },
    { id: 6, name: "Aromatherapy Candle Set", price: 899, image: "https://images.unsplash.com/photo-1602607452331-6e0a8b08d990?w=400&h=300&fit=crop", category: "Home" },
    { id: 7, name: "Ceramic Plant Pot", price: 599, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop", category: "Home" },
    { id: 8, name: "Vintage Sunglasses", price: 1299, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop", category: "Fashion" }
];

/* ===============================================
   2. STORAGE FUNCTIONS
   =============================================== */

function getCartFromStorage() {
    const data = localStorage.getItem('ecommerce_cart');
    return data ? JSON.parse(data) : [];
}

function saveCartToStorage(cart) {
    localStorage.setItem('ecommerce_cart', JSON.stringify(cart));
}

/* ===============================================
   3. CART FUNCTIONS
   =============================================== */

function addToCart(productId) {
    let cart = getCartFromStorage();
    const product = products.find(p => p.id === productId);

    if (!product) return;

    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCartToStorage(cart);
    updateCartCount();
    showAddedFeedback(productId);
}

function removeFromCart(productId) {
    let cart = getCartFromStorage();
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage(cart);
    displayCartItems();
}

function updateQuantity(productId, change) {
    let cart = getCartFromStorage();
    const item = cart.find(i => i.id === productId);

    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
    }

    saveCartToStorage(cart);
    displayCartItems();
}

function clearCart() {
    if (confirm("Are you sure you want to clear your cart?")) {
        saveCartToStorage([]);
        displayCartItems();
        updateCartCount();
    }
}

/* ===============================================
   4. CHECKOUT (FIXED)
   =============================================== */

function checkout() {
    const cart = getCartFromStorage();

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    window.location.href = "payment.html";
}

/* ===============================================
   5. HELPER FUNCTIONS
   =============================================== */

function getCartTotal() {
    return getCartFromStorage().reduce((total, item) =>
        total + item.price * item.quantity, 0);
}

function getCartCount() {
    return getCartFromStorage().reduce((count, item) =>
        count + item.quantity, 0);
}

function formatPrice(price) {
    return "₹" + price.toLocaleString("en-IN");
}

/* ===============================================
   6. UI FUNCTIONS
   =============================================== */

function updateCartCount() {
    const el = document.getElementById("cart-count");
    if (!el) return;

    const count = getCartCount();
    el.textContent = count;
    el.setAttribute("data-count", count);
}

function showAddedFeedback(productId) {
    const btn = document.querySelector(`[data-product-id="${productId}"]`);
    if (!btn) return;

    const original = btn.innerHTML;
    btn.innerHTML = "✓ Added!";
    btn.classList.add("added");

    setTimeout(() => {
        btn.innerHTML = original;
        btn.classList.remove("added");
    }, 1500);
}

/* ===============================================
   7. DISPLAY PRODUCTS
   =============================================== */

function displayProducts() {
    const container = document.getElementById("products-grid");
    if (!container) return;

    container.innerHTML = "";

    products.forEach(product => {
        container.innerHTML += `
            <div class="product-card">
                <div class="product-image-container">
                    <img src="${product.image}" class="product-image">
                </div>
                <div class="product-details">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">${formatPrice(product.price)}</p>
                    <button class="add-to-cart-btn"
                        data-product-id="${product.id}"
                        onclick="addToCart(${product.id})">
                        🛒 Add to Cart
                    </button>
                </div>
            </div>
        `;
    });
}

/* ===============================================
   8. DISPLAY CART (WITH GST + DELIVERY)
   =============================================== */

function displayCartItems() {
    const cart = getCartFromStorage();
    const itemsContainer = document.getElementById("cart-items");
    const emptyMsg = document.getElementById("empty-cart");
    const summary = document.getElementById("cart-summary");
    const totalItemsEl = document.getElementById("total-items");
    const totalAmountEl = document.getElementById("total-amount");
    const subtotalEl = document.getElementById("subtotal-amount");
    const gstEl = document.getElementById("gst-amount");
    const deliveryEl = document.getElementById("delivery-amount");

    if (!itemsContainer) return;

    if (cart.length === 0) {
        itemsContainer.innerHTML = "";
        if (emptyMsg) emptyMsg.style.display = "block";
        if (summary) summary.style.display = "none";
        return;
    }

    if (emptyMsg) emptyMsg.style.display = "none";
    if (summary) summary.style.display = "block";

    itemsContainer.innerHTML = "";

    cart.forEach(item => {
        itemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>${formatPrice(item.price)}</p>
                </div>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <div>${formatPrice(item.price * item.quantity)}</div>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
    });

   const subtotal = getCartTotal();
const discountAmount = subtotal * appliedDiscount;
const discountedSubtotal = subtotal - discountAmount;
const gst = discountedSubtotal * 0.18;
const delivery = discountedSubtotal > 0 ? 50 : 0;
const finalTotal = discountedSubtotal + gst + delivery;

    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (gstEl) gstEl.textContent = formatPrice(gst);
    if (deliveryEl) deliveryEl.textContent = formatPrice(delivery);
    if (totalItemsEl) totalItemsEl.textContent = getCartCount();
    if (totalAmountEl) totalAmountEl.textContent = formatPrice(finalTotal);
}

/* ===============================================
   9. SEARCH
   =============================================== */

function filterProducts() {
    const input = document.getElementById("search-input");
    const container = document.getElementById("products-grid");
    if (!input || !container) return;

    const query = input.value.toLowerCase();
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );

    container.innerHTML = "";

    if (filtered.length === 0) {
        container.innerHTML = `<p style="text-align:center;">No products found</p>`;
        return;
    }

    filtered.forEach(product => {
        container.innerHTML += `
            <div class="product-card">
                <div class="product-image-container">
                    <img src="${product.image}" class="product-image">
                </div>
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p>${formatPrice(product.price)}</p>
                    <button onclick="addToCart(${product.id})">🛒 Add to Cart</button>
                </div>
            </div>
        `;
    });
}


function displayInvoice() {
    const container = document.getElementById("invoice-content");
    const cart = JSON.parse(localStorage.getItem("last_order")) || [];

    if (!container || cart.length === 0) return;

    let html = "<h3>Order Details:</h3><ul>";

    cart.forEach(item => {
        html += `<li>${item.name} × ${item.quantity} - ₹${item.price * item.quantity}</li>`;
    });

    html += "</ul>";

    container.innerHTML = html;
}


console.log("ShopEasy JavaScript Loaded Successfully!");
