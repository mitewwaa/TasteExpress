document.querySelector(".logo").addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "home.html";
});

// Reservations
// Form submission
document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const date = document.getElementById('date').value.trim();
    const time = document.getElementById('time').value.trim();
    const table = document.getElementById('table').value.trim();

    const restaurantId = document.querySelector('.restaurant').id;

    saveReservation(restaurantId, name, date, time, table);
});

// Function to save the reservation details 
function saveReservation(restaurantId, name, date, time, table) {
    let reservationDetails = {
        name: name,
        date: date,
        time: time,
        table: table
    };

    let existingReservations = JSON.parse(localStorage.getItem(`reservations_${restaurantId}_table_${table}`)) || [];
    let dateTime = `${date} ${time}`;
    
    // Check if reservation for the table already exists for the selected date and time
    if (existingReservations.some(reservation => reservation.dateTime === dateTime)) {
        alert('Reservation for this table already exists at the selected date and time! Choose another table!');
        return;
    }

    existingReservations.push({ ...reservationDetails, dateTime: dateTime });
    localStorage.setItem(`reservations_${restaurantId}_table_${table}`, JSON.stringify(existingReservations));
    alert('Reservation successful!');
}

// Shopping cart
const cartButton = document.getElementById('cart-button');
const cartSection = document.getElementById('cart');
const orderSection = document.getElementById('order');
const submitOrderButton = document.getElementById('submit-order');
const clearCartButton = document.getElementById('clear-cart');
const closeCartButton = document.getElementById('close-cart');
const closeOrderButton = document.getElementById('close-order');
const orderForm = document.getElementById('order-form');
const cartItemsList = document.getElementById('cart-items');

//Display cart
cartButton.addEventListener('click', () => {
    cartSection.style.display = 'block';
});

//Clear cart
clearCartButton.addEventListener('click', () => {
    
    cartItemsList.innerHTML = '';

    // Update total price to zero
    updateTotalPrice();
});

//Close cart
closeCartButton.addEventListener('click', () => {
    cartSection.style.display = 'none';
});

//Add items to the cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const menuItemElement = button.closest('.menu-item');
        
        // Check if menuItemElement is not null
        if (menuItemElement) {
            const menuItem = menuItemElement.querySelector('.name').textContent.trim();

            // Get the price string and parse the numeric value
            const priceString = menuItemElement.querySelector('.price').textContent.trim();
            const price = parseFloat(priceString.replace(/[^\d.]/g, ''));

            let quantity = 1;

            // Check if the item is already in the cart
            const existingCartItem = Array.from(cartItemsList.children).find(item => item.dataset.menuItem === menuItem);
            if (existingCartItem) {
                quantity = parseInt(existingCartItem.dataset.quantity) + 1;
                existingCartItem.dataset.quantity = quantity;
                existingCartItem.textContent = `${menuItem} x${quantity} - ${price * quantity} lv`; // Calculate total price
            } else {
                const cartItem = document.createElement('li');
                cartItem.dataset.menuItem = menuItem;
                cartItem.dataset.quantity = quantity;
                cartItem.dataset.price = price; // Store the price in a data attribute
                cartItem.textContent = `${menuItem} x${quantity} - ${price * quantity} lv`; // Calculate total price
                cartItemsList.appendChild(cartItem);
            }

            // Update total price
            updateTotalPrice();
        }
    });
});

// Update total price based on the quantities and prices of items in the cart
function updateTotalPrice() {
    let totalPrice = 0;

    Array.from(cartItemsList.children).forEach(item => {
        const price = parseFloat(item.dataset.price);
        const quantity = parseInt(item.dataset.quantity);
        totalPrice += price * quantity;
    });

    document.getElementById('cart-total').textContent = `Total: ${totalPrice.toFixed(2)} lv`;
}

// Display order form
submitOrderButton.addEventListener('click', () => {
    orderSection.style.display = 'block';
    cartSection.style.display = 'none';

    // Display items in the order detail section
    const orderDetailsList = document.getElementById('order-details');
    orderDetailsList.innerHTML = '';
    let totalPrice = 0;

    Array.from(cartItemsList.children).forEach(item => {
        const menuItem = item.dataset.menuItem;
        const quantity = parseInt(item.dataset.quantity);
        const price = parseFloat(item.dataset.price);
        const itemTotalPrice = price * quantity;
        
        totalPrice += itemTotalPrice;

        const itemElement = document.createElement('li');
        itemElement.textContent = `${menuItem} x${quantity} - ${itemTotalPrice.toFixed(2)} lv`;
        orderDetailsList.appendChild(itemElement);
    });

    // Display total price
    const totalPriceElement = document.createElement('li');
    totalPriceElement.textContent = `Total Price: ${totalPrice.toFixed(2)} lv`;
    orderDetailsList.appendChild(totalPriceElement);
});


// Hide order form
closeOrderButton.addEventListener('click', () => {
    orderSection.style.display = 'none';
});

// Save order information
// Function to save order information to local storage
function saveOrder(restaurantId, order) {
    let orders = JSON.parse(localStorage.getItem(`orders_${restaurantId}`)) || [];
    
    orders.push(order);

    localStorage.setItem(`orders_${restaurantId}`, JSON.stringify(orders));
}

// Form submission
orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(orderForm);
    
    const order = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        items: Array.from(cartItemsList.children).map(item => ({
            menuItem: item.dataset.menuItem,
            quantity: parseInt(item.dataset.quantity)
        }))
    };

    const restaurantId = document.querySelector('.restaurant').id;

    saveOrder(restaurantId, order);

    // Clear cart
    cartItemsList.innerHTML = '';
    updateTotalPrice();

    orderSection.style.display = 'none';
    // Display alert message
    alert("Order accepted!");
});

// Reviews
const restaurantId = document.querySelector('.restaurant').id;

// Form submission
document.getElementById('review-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name1').value.trim();
    const review = document.getElementById('review').value.trim();

    if (name !== '' && review !== '') {
        saveReview(restaurantId, name, review);
        displayReviews(restaurantId);
        document.getElementById('name1').value = ''; // Clear the name input after submission
        document.getElementById('review').value = ''; // Clear the review textarea after submission
    }
});

// Function to save review with restaurant identifier to local storage
function saveReview(restaurantId, name, review) {
    let restaurantData = JSON.parse(localStorage.getItem(`reviews_${restaurantId}`)) || { reviews: [] };
    
    restaurantData.reviews.push({ name: name, review: review });
    localStorage.setItem(`reviews_${restaurantId}`, JSON.stringify(restaurantData));
}

// Function to display reviews for a specific restaurant from local storage
function displayReviews(restaurantId) {
    const displaySection = document.getElementById('display-reviews');

    let restaurantData = JSON.parse(localStorage.getItem(`reviews_${restaurantId}`)) || { reviews: [] };
    
    displaySection.innerHTML = ''; // Clear previous reviews
    
    restaurantData.reviews.forEach(review => {
        const p = document.createElement('p');
        const h4 = document.createElement('h4');
        h4.textContent = review.name;
        p.appendChild(h4);
        p.appendChild(document.createTextNode(`: ${review.review}`)); // Append review text separately
        displaySection.appendChild(p);
    });
}

// Display existing reviews when the page loads
displayReviews(restaurantId);