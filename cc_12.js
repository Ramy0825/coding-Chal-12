// Task 1: Business Dashboard – Creating and Adding Elements
const dashboard = document.getElementById("dashboard");

if (dashboard) {
    const revenueCard = document.createElement("div");
    revenueCard.className = "metric-card";                     // set class
    revenueCard.id = "revenueCard";                     //set iD
    revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>"
    dashboard.appendChild(revenueCard);                    // Add card to the dashboard
}; 

// Task 2: Updating Dashboard Metrics – Working with Lists
const metricCards = document.querySelectorAll(".metric-card");

metricCards.forEach(card => {
    card.innerHTML += "Refreshed";     //  make it shpw the words refreshed 
    card.style.backgroundColor = `Light gray`; // make it a light gray background
})

// Task 3: Dynamic Inventory Management – Adding and Removing Items
const inventoryList = document.getElementById("inventoryList");

function addProductItem(productName) {   // make a dunction where the name of the product is added 
    if (!inventoryList) return;

    const productItem = document.createElement("li");
    productItem.className = "product-item";
    productItem.dataset.product = productName;             // store product name
    productItem.innerText = productName;
    

    productItem.onclick = function() {        // // remove item when clicked
        inventoryList.removeChild(productItem);
    };
    inventoryList.appendChild(productItem);
}

// Task 4: Business Customer Section – Handling Click Events
const customerSection = document.getElementById("customerSection");

if (customerSection) {
    customerSection.onclick = function() {     // anytime the mouse is clicked to the entire customer section 
        console.log("Customer section clicked");
    };
}

function addCustomerCard(customerName) {
    if (!customerSection) return;        // exit if customer name does not return 

    const customerCard = document.createElement("div");
    customerCard.className = "customer-card";
    customerCard.innerText = customerName;
    
    customerCard.onclick = function(event) {
        console.log("Customer card clicked");
        event.stopPropagation();      // stop it from getting clicked on and getting mixed up with the parent 
    };
    
    customerSection.appendChild(customerCard);
}
