const items = [
    { name: 'Rice', calories: 130 },
    { name: 'Roti', calories: 70 },
    { name: 'Dal', calories: 100 },
    { name: 'Chana masala', calories: 120 },
    { name: 'Chicken tikka masala', calories: 150 },
    { name: 'Palak paneer', calories: 200 },
    { name: 'Naan bread', calories: 250 },
    { name: 'Idli', calories: 60 },
    { name: 'Dosa', calories: 100 },
    { name: 'Vada pav', calories: 300 },
    { name: 'Misal pav', calories: 400 },
    { name: 'Poha', calories: 150 },
    { name: 'Upma', calories: 200 },
    { name: 'Omelette', calories: 150 },
    { name: 'Paratha', calories: 210 },
    { name: 'Chicken biryani', calories: 290 },
    { name: 'Mutton curry', calories: 350 },
    { name: 'Fish fry', calories: 180 },
    { name: 'Vegetable biryani', calories: 220 },
    { name: 'Sambhar', calories: 130 },
    { name: 'Rasam', calories: 80 },
    { name: 'Raita', calories: 60 },
    { name: 'Lassi', calories: 150 },
    { name: 'Jal jeera', calories: 30 },
    { name: 'Chai', calories: 40 },
    { name: 'Coffee', calories: 2 },
    { name: 'Milk', calories: 50 },
    { name: 'Yogurt', calories: 60 },
    { name: 'Paneer', calories: 260 },
    { name: 'Cheese', calories: 400 },
    { name: 'Butter', calories: 100 },
    { name: 'Ghee', calories: 130 },
    { name: 'Oil', calories: 120 },
    { name: 'Coconut oil', calories: 130 },
    { name: 'Mustard oil', calories: 120 },
    { name: 'Ghee rice', calories: 210 },
    { name: 'Jeera rice', calories: 200 },
    { name: 'Mattar paneer', calories: 250 },
    { name: 'Chole bhature', calories: 300 },
    { name: 'Rajma chawal', calories: 290 },
    { name: 'Bhindi masala', calories: 120 },
    { name: 'Baingan bharta', calories: 140 },
    { name: 'Aloo gobi', calories: 100 },
    { name: 'Aloo tikki', calories: 150 },
    { name: 'Pani puri', calories: 150 },
    { name: 'Bhelpuri', calories: 200 },
    { name: 'Sev puri', calories: 250 },
    { name: 'Dahipuri', calories: 200 },
    { name: 'Misal', calories: 400 },
    { name: 'Usal', calories: 350 },
    { name: 'Vada', calories: 150 },
    { name: 'Samosa', calories: 250 },
    { name: 'Kachori', calories: 200 },
    { name: 'Chaat items', calories: 150 },
    { name: 'Fruits (various)', calories: 50 },
    { name: 'Vegetables (various)', calories: 30 },
    { name: 'Nuts (various)', calories: 180 },
    { name: 'Dry fruits (various)', calories: 250 },
    { name: 'Sweets (various)', calories: 200 },
    { name: 'Namkeen', calories: 250 },
    { name: 'Papad', calories: 40 },
    { name: 'Pickles', calories: 30 },
    { name: 'Chutneys', calories: 20 },
    { name: 'Murmura', calories: 100 },
    { name: 'Puffed rice', calories: 60 },
    { name: 'Roasted chana', calories: 150 },
    { name: 'Sev', calories: 300 },
    { name: 'Bhujia', calories: 350 },
    { name: 'Boiled eggs', calories: 78 },
    { name: 'Grilled chicken', calories: 180 },
    { name: 'Tandoori chicken', calories: 150 },
    { name: 'Seekh kebab', calories: 200 },
    { name: 'Shami kebab', calories: 250 },
    { name: 'Falafel', calories: 150 },
    { name: 'Hummus', calories: 100 },
    { name: 'Guacamole', calories: 160 },
    { name: 'Salsa', calories: 20 },
    { name: 'Soup', calories: 70 },
    { name: 'Salad', calories: 50 },
    { name: 'Sandwich', calories: 250 },
    { name: 'Burger', calories: 300 },
    { name: 'Pizza', calories: 280 },
    { name: 'Pasta', calories: 220 },
    { name: 'Noodles', calories: 210 },
    { name: 'Fried rice', calories: 250 },
    { name: 'Manchurian', calories: 180 },
    { name: 'Momos', calories: 80 },
    { name: 'Spring rolls', calories: 150 },
    { name: 'Dimsum', calories: 60 },
    { name: 'Biryani', calories: 280 },
    { name: 'Pulao', calories: 220 },
    { name: 'Khichdi', calories: 180 },
    { name: 'Kadhi', calories: 120 },
    { name: 'Rajasthani dal', calories: 150 },
    { name: 'Gujarati dal', calories: 100 },
    { name: 'Maharashtrian dal', calories: 110 },
    { name: 'South Indian sambar', calories: 130 },
    { name: 'Rasam', calories: 80 },
    { name: 'Payasam', calories: 250 },
    { name: 'Laddu', calories: 200 }
];

const itemsContainer = document.getElementById('itemsContainer');

// Function to display items
function displayItems(items) {
    itemsContainer.innerHTML = '';
    items.forEach(item => {
        const itemCard = `
            <div class="item-card">
                
                <h3>${item.name}</h3>
                <p>${item.calories} calories</p>
            </div>
        `;
        itemsContainer.innerHTML += itemCard;
    });
}

// Function to search items
function searchItems() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchQuery));
    displayItems(filteredItems);
}

// Display all items initially
displayItems(items);
