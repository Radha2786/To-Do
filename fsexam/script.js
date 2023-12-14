
const cartList = [];
const shoppingItems = [
    {
        name: "Headphones",
        price: "$99",
        imageUrl:
            "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Laptop",
        price: "$999",
        imageUrl:
            "https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Headphones",
        price: "$99",
        imageUrl:
            "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Laptop",
        price: "$999",
        imageUrl:
            "https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Headphones",
        price: "$99",
        imageUrl:
            "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Laptop",
        price: "$999",
        imageUrl:
            "https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Headphones",
        price: "$99",
        imageUrl:
            "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Laptop",
        price: "$999",
        imageUrl:
            "https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Headphones",
        price: "$99",
        imageUrl:
            "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Laptop",
        price: "$999",
        imageUrl:
            "https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Headphones",
        price: "$99",
        imageUrl:
            "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Laptop",
        price: "$999",
        imageUrl:
            "https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Headphones",
        price: "$99",
        imageUrl:
            "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Laptop",
        price: "$999",
        imageUrl:
            "https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Headphones",
        price: "$99",
        imageUrl:
            "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Smartphone",
        price: "$699",
        imageUrl:
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];
const createShoppingItemHTML = (item, index) => `
            <div class="shopping-item" id="${index}">
                <img src="${item.imageUrl}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <button class="btn" onclick="oncartclick(${index})">add to cart</button>
                <button class="btn" onclick="oncartclick(${index})">+</button>
                <button class="btn" onclick="decreaseQuantity(${index})">-</button>
            </div>`;
const oncartclick = (prodIndex) => {
    let prod = shoppingItems[prodIndex];
    // first check if this product is already in the cartList
    // if yes, then increase the quantity
    // if no, then add the product to the cartList
    let found = false;
    for (let i = 0; i < cartList.length; i++) {
        if (cartList[i].name === prod.name) {
            cartList[i].quantity++;
            found = true;
            break;
        }
    }
    if (!found) {
        prod.quantity = 1;
        cartList.push(prod);
    }
    console.log(cartList);
    displayCart();
};

const decreaseQuantity = (prodIndex) => {
    let prod = shoppingItems[prodIndex];
    // first check if this product is already in the cartList
    // if yes, then decrease the quantity
    for (let i = 0; i < cartList.length; i++) {
        if (cartList[i].name === prod.name) {
            if (cartList[i].quantity === 1) {
                cartList.splice(i, 1);
                break;
            }
            cartList[i].quantity--;
            break;
        }
    }
    console.log(cartList);
    displayCart();
};

const showcart = () => {
    let cartContainer = document.querySelector(".cart-container");
    cartContainer.classList.toggle("hide");
    displayCart();
};

const displayCart = () => {
    let cartContainer = document.querySelector(".cart-container");
    if (cartList.length === 0) {
        cartContainer.innerHTML = `<h2>Cart</h2>\n <h2 class="message">Cart is empty</h2>`;
        return;
    }
    cartContainer.innerHTML = `<h2>Cart</h2>` + cartList.map(cartHTML).join(" ");
};

const removeProd = (index) => {
    cartList.splice(index, 1);
    displayCart();
};

const cartHTML = (item, index) => `
          <div class="cart-list">
            <div class="img-cont">
                <img height="50" width="50" src="${item.imageUrl}" alt="${item.name}">
            </div>
            <div class="prod-detail">
                <h3 class="prod-name">${item.name}</h3>
                <strong>Amount</strong><span>${item.price} </span>
                <strong>Quantity</strong><span>${item.quantity}</span>
                <button onclick="removeProd(${index})" class="btn2" >remove</button>
            </div>
        </div>
          `;
const shoppingContainer = document.getElementById("shopping-container");
shoppingContainer.innerHTML = shoppingItems
    .map(createShoppingItemHTML)
    .join("");