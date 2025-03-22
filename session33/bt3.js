let dishes = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'Cocacola', category: 'Nước' },
    { name: 'Cò lẽ', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' },
];

document.getElementById('filterButton').addEventListener('click', function() {
    const selectedCategory = document.getElementById('category').value;
    const productList = document.getElementById('productList');
    
    productList.innerHTML = '';

    const filteredDishes = dishes.filter(dish => 
        selectedCategory === '' || dish.category === selectedCategory
    );

    filteredDishes.forEach(dish => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span class="bold">Tên đồ ăn: </span> ${dish.name} - <span class="bold">Danh mục: </span>${dish.category}`;
        productList.appendChild(listItem);
    });
});