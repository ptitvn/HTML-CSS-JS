const foodItems = [
    { name: "Bún bò Huế", likes: 0, id: "bun_bo_hue" },
    { name: "Phở bò Hà Nội", likes: 1, id: "pho_bo_hanoi" },
    { name: "Cơm tấm Sài Gòn", likes: 0, id: "com_tam_sai_gon" }
];

function renderFoods() {
    const foodList = document.getElementById('food-list');
    foodList.innerHTML = '';

    foodItems.forEach(item => {
        const foodItemDiv = document.createElement('div');
        foodItemDiv.className = 'food-item';
        foodItemDiv.innerHTML = `
            <img src="https://th.bing.com/th?id=OIP.s8U-vLrExO6wJGglGaxqgQHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="${item.name}" class="food-image">
            <h2>${item.name}</h2>
            <p>❤️ ${item.likes} lượt thích</p>
            <button onclick="likeFood('${item.id}')">Thích +1</button>
        `;
        foodList.appendChild(foodItemDiv);
    });
}

function likeFood(id) {
    const food = foodItems.find(item => item.id === id);
    if (food) {
        food.likes += 1;
        localStorage.setItem(id, food.likes);
        renderFoods();
    }
}

function loadLikesFromStorage() {
    foodItems.forEach(item => {
        const storedLikes = localStorage.getItem(item.id);
        if (storedLikes) {
            item.likes = parseInt(storedLikes);
        }
    });
}

loadLikesFromStorage();
renderFoods();