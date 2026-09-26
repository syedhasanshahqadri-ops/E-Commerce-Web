/* =========================================================
   ORANGEHUB - E-COMMERCE WEBSITE
   Main JavaScript
   ========================================================= */

/* =========================
   PRODUCT DATA - 50 ITEMS
   ========================= */

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "electronics",
    price: 79.99,
    oldPrice: 99.99,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    category: "electronics",
    price: 129.99,
    oldPrice: 159.99,
    rating: 4.7,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    name: "Wireless Bluetooth Speaker",
    category: "electronics",
    price: 49.99,
    oldPrice: 69.99,
    rating: 4.6,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    name: "Minimal Desk Lamp",
    category: "home",
    price: 34.99,
    oldPrice: 44.99,
    rating: 4.5,
    reviews: 63,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    name: "Classic Backpack",
    category: "fashion",
    price: 44.99,
    oldPrice: 59.99,
    rating: 4.7,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    name: "Running Sneakers",
    category: "fashion",
    price: 69.99,
    oldPrice: 89.99,
    rating: 4.8,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 7,
    name: "Modern Sunglasses",
    category: "fashion",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4.4,
    reviews: 51,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 8,
    name: "Leather Wallet",
    category: "fashion",
    price: 24.99,
    oldPrice: 34.99,
    rating: 4.6,
    reviews: 72,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 9,
    name: "Ceramic Coffee Mug",
    category: "home",
    price: 14.99,
    oldPrice: 19.99,
    rating: 4.5,
    reviews: 38,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 10,
    name: "Modern Table Clock",
    category: "home",
    price: 27.99,
    oldPrice: 39.99,
    rating: 4.3,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 11,
    name: "Portable Power Bank",
    category: "electronics",
    price: 39.99,
    oldPrice: 49.99,
    rating: 4.7,
    reviews: 93,
    image: "https://images.unsplash.com/photo-1609592424847-6f9b7c6f5f5e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 12,
    name: "Mechanical Keyboard",
    category: "electronics",
    price: 89.99,
    oldPrice: 109.99,
    rating: 4.8,
    reviews: 118,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 13,
    name: "Wireless Mouse",
    category: "electronics",
    price: 24.99,
    oldPrice: 34.99,
    rating: 4.5,
    reviews: 81,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 14,
    name: "HD Webcam",
    category: "electronics",
    price: 59.99,
    oldPrice: 74.99,
    rating: 4.4,
    reviews: 57,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 15,
    name: "Smartphone Stand",
    category: "electronics",
    price: 18.99,
    oldPrice: 24.99,
    rating: 4.6,
    reviews: 44,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 16,
    name: "USB-C Fast Charger",
    category: "electronics",
    price: 22.99,
    oldPrice: 29.99,
    rating: 4.7,
    reviews: 109,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 17,
    name: "Noise Cancelling Earbuds",
    category: "electronics",
    price: 64.99,
    oldPrice: 84.99,
    rating: 4.8,
    reviews: 137,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 18,
    name: "Smart LED Bulb",
    category: "home",
    price: 16.99,
    oldPrice: 22.99,
    rating: 4.4,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1550985543-f47f6f5c1a91?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 19,
    name: "Decorative Vase",
    category: "home",
    price: 26.99,
    oldPrice: 35.99,
    rating: 4.5,
    reviews: 35,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 20,
    name: "Soft Throw Pillow",
    category: "home",
    price: 21.99,
    oldPrice: 29.99,
    rating: 4.6,
    reviews: 48,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 21,
    name: "Cotton Hoodie",
    category: "fashion",
    price: 42.99,
    oldPrice: 59.99,
    rating: 4.7,
    reviews: 102,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 22,
    name: "Classic Denim Jacket",
    category: "fashion",
    price: 64.99,
    oldPrice: 79.99,
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 23,
    name: "Casual White T-Shirt",
    category: "fashion",
    price: 19.99,
    oldPrice: 27.99,
    rating: 4.5,
    reviews: 121,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 24,
    name: "Premium Baseball Cap",
    category: "fashion",
    price: 17.99,
    oldPrice: 24.99,
    rating: 4.4,
    reviews: 43,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 25,
    name: "Elegant Wrist Watch",
    category: "fashion",
    price: 99.99,
    oldPrice: 129.99,
    rating: 4.8,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 26,
    name: "Travel Duffel Bag",
    category: "fashion",
    price: 54.99,
    oldPrice: 69.99,
    rating: 4.7,
    reviews: 65,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 27,
    name: "Running Sports Cap",
    category: "fashion",
    price: 15.99,
    oldPrice: 21.99,
    rating: 4.3,
    reviews: 32,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 28,
    name: "Casual Canvas Shoes",
    category: "fashion",
    price: 39.99,
    oldPrice: 49.99,
    rating: 4.6,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 29,
    name: "Minimal Handbag",
    category: "fashion",
    price: 49.99,
    oldPrice: 69.99,
    rating: 4.5,
    reviews: 59,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 30,
    name: "Classic Leather Belt",
    category: "fashion",
    price: 27.99,
    oldPrice: 34.99,
    rating: 4.6,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 31,
    name: "Stainless Steel Bottle",
    category: "home",
    price: 23.99,
    oldPrice: 29.99,
    rating: 4.7,
    reviews: 88,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 32,
    name: "Modern Wall Art",
    category: "home",
    price: 31.99,
    oldPrice: 44.99,
    rating: 4.4,
    reviews: 27,
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 33,
    name: "Wooden Serving Tray",
    category: "home",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4.6,
    reviews: 36,
    image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 34,
    name: "Cozy Table Lamp",
    category: "home",
    price: 37.99,
    oldPrice: 49.99,
    rating: 4.8,
    reviews: 61,
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 35,
    name: "Premium Bed Blanket",
    category: "home",
    price: 54.99,
    oldPrice: 74.99,
    rating: 4.7,
    reviews: 83,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 36,
    name: "Kitchen Organizer",
    category: "home",
    price: 19.99,
    oldPrice: 27.99,
    rating: 4.4,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 37,
    name: "Ceramic Plant Pot",
    category: "home",
    price: 18.99,
    oldPrice: 25.99,
    rating: 4.5,
    reviews: 39,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 38,
    name: "Modern Storage Basket",
    category: "home",
    price: 24.99,
    oldPrice: 32.99,
    rating: 4.6,
    reviews: 41,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 39,
    name: "Glass Water Bottle",
    category: "home",
    price: 16.99,
    oldPrice: 22.99,
    rating: 4.4,
    reviews: 33,
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 40,
    name: "Kitchen Coffee Set",
    category: "home",
    price: 46.99,
    oldPrice: 59.99,
    rating: 4.8,
    reviews: 54,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 41,
    name: "Portable Mini Fan",
    category: "electronics",
    price: 21.99,
    oldPrice: 29.99,
    rating: 4.5,
    reviews: 62,
    image: "https://images.unsplash.com/photo-1521604258140-7c7d1a7c4f0f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 42,
    name: "Gaming Controller",
    category: "electronics",
    price: 54.99,
    oldPrice: 69.99,
    rating: 4.8,
    reviews: 111,
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 43,
    name: "Laptop Sleeve",
    category: "electronics",
    price: 28.99,
    oldPrice: 39.99,
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 44,
    name: "Smart LED Strip",
    category: "electronics",
    price: 32.99,
    oldPrice: 44.99,
    rating: 4.7,
    reviews: 96,
    image: "https://images.unsplash.com/photo-1550985543-f47f6f5c1a91?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 45,
    name: "Wireless Charging Pad",
    category: "electronics",
    price: 26.99,
    oldPrice: 34.99,
    rating: 4.5,
    reviews: 71,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 46,
    name: "Digital Alarm Clock",
    category: "electronics",
    price: 31.99,
    oldPrice: 42.99,
    rating: 4.4,
    reviews: 47,
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 47,
    name: "Portable Projector",
    category: "electronics",
    price: 159.99,
    oldPrice: 199.99,
    rating: 4.7,
    reviews: 69,
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 48,
    name: "Premium Desk Mat",
    category: "home",
    price: 19.99,
    oldPrice: 27.99,
    rating: 4.5,
    reviews: 53,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 49,
    name: "Travel Coffee Cup",
    category: "home",
    price: 17.99,
    oldPrice: 24.99,
    rating: 4.6,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 50,
    name: "Premium Gift Box",
    category: "home",
    price: 39.99,
    oldPrice: 54.99,
    rating: 4.8,
    reviews: 91,
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=900&q=80"
  }
];


/* =========================
   GLOBAL VARIABLES
   ========================= */

let cart = JSON.parse(localStorage.getItem("orangehub-cart")) || [];

let currentCategory = "all";
let currentSearch = "";
let currentSort = "featured";


/* =========================
   DOM ELEMENTS
   ========================= */

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const toast = document.getElementById("toast");
const loginModal = document.getElementById("loginModal");
const quickViewModal = document.getElementById("quickViewModal");


/* =========================
   HELPER FUNCTIONS
   ========================= */

function money(value) {
  return `$${Number(value).toFixed(2)}`;
}


function saveCart() {
  localStorage.setItem("orangehub-cart", JSON.stringify(cart));
}


function getProduct(id) {
  return products.find(product => product.id === Number(id));
}


function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}


/* =========================
   PRODUCT RENDERING
   ========================= */

function getFilteredProducts() {
  let filtered = [...products];

  if (currentCategory !== "all") {
    filtered = filtered.filter(
      product => product.category === currentCategory
    );
  }

  if (currentSearch.trim() !== "") {
    const query = currentSearch.toLowerCase().trim();

    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  }

  switch (currentSort) {
    case "price-low":
      filtered.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      filtered.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;

    case "name":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;

    default:
      break;
  }

  return filtered;
}


function renderProducts() {
  if (!productGrid) return;

  const filteredProducts = getFilteredProducts();

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-products">
        <div class="empty-icon">🔍</div>
        <h3>No products found</h3>
        <p>Try another search or category.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filteredProducts.map(product => {
    const discount = product.oldPrice
      ? Math.round(
          ((product.oldPrice - product.price) / product.oldPrice) * 100
        )
      : 0;

    return `
      <article class="product-card">

        <div class="product-image-wrap">

          ${
            discount > 0
              ? `<span class="discount-badge">-${discount}%</span>`
              : ""
          }

          <img
            src="${product.image}"
            alt="${product.name}"
            class="product-image"
            loading="lazy"
          />

          <button
            class="quick-view-btn"
            onclick="openQuickView(${product.id})"
          >
            Quick View
          </button>

        </div>

        <div class="product-info">

          <span class="product-category">
            ${product.category}
          </span>

          <h3>${product.name}</h3>

          <div class="product-rating">
            <span>★★★★★</span>
            <small>
              ${product.rating} (${product.reviews})
            </small>
          </div>

          <div class="product-bottom">

            <div class="product-price">
              <strong>${money(product.price)}</strong>

              ${
                product.oldPrice
                  ? `<del>${money(product.oldPrice)}</del>`
                  : ""
              }
            </div>

            <button
              class="add-cart-btn"
              onclick="addToCart(${product.id})"
              aria-label="Add ${product.name} to cart"
            >
              🛒
            </button>

          </div>

          <button
            class="buy-now-btn"
            onclick="buyNow(${product.id})"
          >
            Buy Now
          </button>

        </div>

      </article>
    `;
  }).join("");
}


/* =========================
   CATEGORY FILTER
   ========================= */

function setCategory(category) {
  currentCategory = category;

  document.querySelectorAll("[data-category]").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.category === category
    );
  });

  renderProducts();

  const collection = document.getElementById("collection");

  if (collection) {
    collection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


document.querySelectorAll("[data-category]").forEach(button => {
  button.addEventListener("click", () => {
    setCategory(button.dataset.category);
  });
});


/* =========================
   SEARCH
   ========================= */

if (searchInput) {
  searchInput.addEventListener("input", event => {
    currentSearch = event.target.value;
    renderProducts();
  });
}


/* =========================
   SORTING
   ========================= */

if (sortSelect) {
  sortSelect.addEventListener("change", event => {
    currentSort = event.target.value;
    renderProducts();
  });
}


/* =========================
   CART FUNCTIONS
   ========================= */

function addToCart(productId, quantity = 1) {
  const product = getProduct(productId);

  if (!product) return;

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();

  showToast(`${product.name} added to cart`);
}


function removeFromCart(productId) {
  const product = getProduct(productId);

  cart = cart.filter(item => item.id !== Number(productId));

  saveCart();
  updateCartUI();

  if (product) {
    showToast(`${product.name} removed`);
  }
}


function updateQuantity(productId, change) {
  const item = cart.find(
    cartItem => cartItem.id === Number(productId)
  );

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  updateCartUI();
}


function clearCart() {
  cart = [];

  saveCart();
  updateCartUI();

  showToast("Cart cleared");
}


function getCartTotalItems() {
  return cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
}


function getCartTotalPrice() {
  return cart.reduce((total, item) => {
    const product = getProduct(item.id);

    if (!product) return total;

    return total + product.price * item.quantity;
  }, 0);
}


/* =========================
   UPDATE CART UI
   ========================= */

function updateCartUI() {
  if (cartCount) {
    cartCount.textContent = getCartTotalItems();
  }

  if (cartTotal) {
    cartTotal.textContent = money(getCartTotalPrice());
  }

  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add some products to get started.</p>
      </div>
    `;

    return;
  }

  cartItems.innerHTML = cart.map(item => {
    const product = getProduct(item.id);

    if (!product) return "";

    return `
      <div class="cart-item">

        <img
          src="${product.image}"
          alt="${product.name}"
        />

        <div class="cart-item-info">

          <h4>${product.name}</h4>

          <span class="cart-item-price">
            ${money(product.price)}
          </span>

          <div class="quantity-controls">

            <button
              onclick="updateQuantity(${product.id}, -1)"
            >
              −
            </button>

            <span>${item.quantity}</span>

            <button
              onclick="updateQuantity(${product.id}, 1)"
            >
              +
            </button>

          </div>

        </div>

        <button
          class="remove-cart-item"
          onclick="removeFromCart(${product.id})"
          aria-label="Remove product"
        >
          ×
        </button>

      </div>
    `;
  }).join("");
}


/* =========================
   CART DRAWER
   ========================= */

function openCart() {
  if (!cartDrawer) return;

  cartDrawer.classList.add("open");

  if (cartOverlay) {
    cartOverlay.classList.add("show");
  }

  document.body.classList.add("no-scroll");
}


function closeCart() {
  if (!cartDrawer) return;

  cartDrawer.classList.remove("open");

  if (cartOverlay) {
    cartOverlay.classList.remove("show");
  }

  document.body.classList.remove("no-scroll");
}


if (cartOverlay) {
  cartOverlay.addEventListener("click", closeCart);
}


/* =========================
   BUY NOW
   ========================= */

function buyNow(productId) {
  const product = getProduct(productId);

  if (!product) return;

  addToCart(productId, 1);

  openCart();
}


/* =========================
   QUICK VIEW
   ========================= */

function openQuickView(productId) {
  const product = getProduct(productId);

  if (!product || !quickViewModal) return;

  const content =
    quickViewModal.querySelector(".quick-view-content");

  if (!content) return;

  content.innerHTML = `
    <button
      class="modal-close"
      onclick="closeQuickView()"
    >
      ×
    </button>

    <div class="quick-view-layout">

      <div class="quick-view-image">
        <img
          src="${product.image}"
          alt="${product.name}"
        />
      </div>

      <div class="quick-view-details">

        <span class="product-category">
          ${product.category}
        </span>

        <h2>${product.name}</h2>

        <div class="product-rating">
          <span>★★★★★</span>
          <small>
            ${product.rating} (${product.reviews} reviews)
          </small>
        </div>

        <div class="quick-price">
          <strong>${money(product.price)}</strong>

          ${
            product.oldPrice
              ? `<del>${money(product.oldPrice)}</del>`
              : ""
          }
        </div>

        <p>
          Premium quality product designed for modern
          lifestyle and everyday convenience.
        </p>

        <div class="quick-actions">

          <button
            class="primary-btn"
            onclick="addToCart(${product.id}); closeQuickView();"
          >
            Add to Cart
          </button>

          <button
            class="secondary-btn"
            onclick="buyNow(${product.id}); closeQuickView();"
          >
            Buy Now
          </button>

        </div>

      </div>

    </div>
  `;

  quickViewModal.classList.add("show");
  document.body.classList.add("no-scroll");
}


function closeQuickView() {
  if (!quickViewModal) return;

  quickViewModal.classList.remove("show");
  document.body.classList.remove("no-scroll");
}


if (quickViewModal) {
  quickViewModal.addEventListener("click", event => {
    if (event.target === quickViewModal) {
      closeQuickView();
    }
  });
}


/* =========================
   LOGIN MODAL
   ========================= */

function openLogin() {
  if (!loginModal) return;

  loginModal.classList.add("show");
  document.body.classList.add("no-scroll");
}


function closeLogin() {
  if (!loginModal) return;

  loginModal.classList.remove("show");
  document.body.classList.remove("no-scroll");
}


if (loginModal) {
  loginModal.addEventListener("click", event => {
    if (event.target === loginModal) {
      closeLogin();
    }
  });
}


/* =========================
   LOGIN FORM
   ========================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", event => {
    event.preventDefault();

    const emailInput =
      loginForm.querySelector('input[type="email"]');

    const email = emailInput
      ? emailInput.value.trim()
      : "";

    if (!email) {
      showToast("Please enter your email");
      return;
    }

    localStorage.setItem(
      "orangehub-user",
      JSON.stringify({
        email: email
      })
    );

    showToast("Login successful!");

    closeLogin();

    loginForm.reset();
  });
}


/* =========================
   CONTACT FORM
   ========================= */

const contactForm =
  document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name =
      contactForm.querySelector('[name="name"]');

    const email =
      contactForm.querySelector('[name="email"]');

    const message =
      contactForm.querySelector('[name="message"]');

    if (!name || !email || !message) {
      showToast("Please complete the form");
      return;
    }

    if (
      name.value.trim() === "" ||
      email.value.trim() === "" ||
      message.value.trim() === ""
    ) {
      showToast("Please fill all fields");
      return;
    }

    showToast("Message sent successfully!");

    contactForm.reset();
  });
}


/* =========================
   NEWSLETTER
   ========================= */

const newsletterForm =
  document.getElementById("newsletterForm");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", event => {
    event.preventDefault();

    const input =
      newsletterForm.querySelector("input[type='email']");

    if (!input || input.value.trim() === "") {
      showToast("Please enter your email");
      return;
    }

    showToast("Thanks for subscribing!");

    newsletterForm.reset();
  });
}


/* =========================
   MOBILE NAVIGATION
   ========================= */

const menuToggle =
  document.getElementById("menuToggle");

const mobileMenu =
  document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");

    menuToggle.classList.toggle("active");
  });
}


document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    if (mobileMenu) {
      mobileMenu.classList.remove("open");
    }

    if (menuToggle) {
      menuToggle.classList.remove("active");
    }
  });
});


/* =========================
   SMOOTH SCROLL
   ========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const targetId =
      link.getAttribute("href");

    if (
      !targetId ||
      targetId === "#" ||
      targetId.length < 2
    ) {
      return;
    }

    const target =
      document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});


/* =========================
   SCROLL REVEAL ANIMATION
   ========================= */

const revealElements =
  document.querySelectorAll(
    ".reveal, .product-card, .feature-card, .category-card"
  );

if ("IntersectionObserver" in window) {

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.12
      }
    );

  revealElements.forEach(element => {
    observer.observe(element);
  });
}


/* =========================
   HEADER SCROLL EFFECT
   ========================= */

const header =
  document.querySelector(".main-header");

window.addEventListener("scroll", () => {

  if (!header) return;

  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


/* =========================
   ESC KEY
   ========================= */

document.addEventListener("keydown", event => {

  if (event.key !== "Escape") return;

  closeCart();
  closeLogin();
  closeQuickView();

});


/* =========================
   CART BUTTON
   ========================= */

const cartButton =
  document.getElementById("cartButton");

if (cartButton) {
  cartButton.addEventListener("click", openCart);
}


/* =========================
   LOGIN BUTTON
   ========================= */

const loginButton =
  document.getElementById("loginButton");

if (loginButton) {
  loginButton.addEventListener("click", openLogin);
}


/* =========================
   CLOSE BUTTONS
   ========================= */

document.querySelectorAll(
  "[data-close-cart]"
).forEach(button => {
  button.addEventListener("click", closeCart);
});


document.querySelectorAll(
  "[data-close-login]"
).forEach(button => {
  button.addEventListener("click", closeLogin);
});


document.querySelectorAll(
  "[data-close-quick-view]"
).forEach(button => {
  button.addEventListener("click", closeQuickView);
});


/* =========================
   CLEAR CART BUTTON
   ========================= */

const clearCartButton =
  document.getElementById("clearCart");

if (clearCartButton) {
  clearCartButton.addEventListener(
    "click",
    clearCart
  );
}


/* =========================
   CHECKOUT
   ========================= */

const checkoutButton =
  document.getElementById("checkoutButton");

if (checkoutButton) {

  checkoutButton.addEventListener(
    "click",
    () => {

      if (cart.length === 0) {
        showToast("Your cart is empty");
        return;
      }

      showToast(
        "Checkout demo - payment system not connected"
      );

    }
  );

}


/* =========================
   HERO BUTTONS
   ========================= */

const shopNowButton =
  document.getElementById("shopNow");

if (shopNowButton) {

  shopNowButton.addEventListener(
    "click",
    () => {

      const collection =
        document.getElementById("collection");

      if (collection) {
        collection.scrollIntoView({
          behavior: "smooth"
        });
      }

    }
  );

}


/* =========================
   INITIALIZE WEBSITE
   ========================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderProducts();

    updateCartUI();

    /* Restore saved user */
    const savedUser =
      localStorage.getItem("orangehub-user");

    if (savedUser) {
      try {

        const user =
          JSON.parse(savedUser);

        if (user.email) {
          console.log(
            "Welcome back:",
            user.email
          );
        }

      } catch (error) {

        localStorage.removeItem(
          "orangehub-user"
        );

      }
    }

  }
);


/* =========================================================
   GLOBAL FUNCTIONS
   These are available to HTML onclick="" attributes.
   ========================================================= */

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.clearCart = clearCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.buyNow = buyNow;
window.openQuickView = openQuickView;
window.closeQuickView = closeQuickView;
window.openLogin = openLogin;
window.closeLogin = closeLogin;
window.setCategory = setCategory;


/* =========================
   CONSOLE MESSAGE
   ========================= */

console.log(
  "OrangeHub E-Commerce website loaded successfully."
);