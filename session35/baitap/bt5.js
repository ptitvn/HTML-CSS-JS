document.addEventListener("DOMContentLoaded", function () {
    const addCategoryBtn = document.getElementById("addCategoryBtn");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");
    const submitCategory = document.getElementById("submitCategory");
    const categoryList = document.getElementById("categoryList");
    const validationErrors = document.getElementById("validation-errors");

    addCategoryBtn.onclick = function () {
        modal.style.display = "block";
    };

    closeModal.onclick = function () {
        closeForm();
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            closeForm();
        }
    };

    submitCategory.onclick = function () {
        const code = document.getElementById("categoryCode").value;
        const name = document.getElementById("categoryName").value;
        const status = document.getElementById("categoryStatus").value;

        // Validate input
        if (!code || !name) {
            validationErrors.innerHTML = "Mã danh mục và tên danh mục không được để trống";
            return;
        }

        const newCategory = { code, name, status };
        saveCategory(newCategory);
        closeForm();
        renderCategoryList();
    };

    function closeForm() {
        modal.style.display = "none";
        document.getElementById("categoryCode").value = '';
        document.getElementById("categoryName").value = '';
        validationErrors.innerHTML = '';
    }

    function saveCategory(category) {
        const categories = JSON.parse(localStorage.getItem("categories")) || [];
        categories.push(category);
        localStorage.setItem("categories", JSON.stringify(categories));
    }

    function renderCategoryList() {
        const categories = JSON.parse(localStorage.getItem("categories")) || [];
        categoryList.innerHTML = '';
        categories.forEach(cat => {
            const row = `<tr>
                <td>${cat.code}</td>
                <td>${cat.name}</td>
                <td>${cat.status}</td>
                <td>
                    <button onclick="deleteCategory('${cat.code}')">Xoá</button>
                </td>
            </tr>`;
            categoryList.innerHTML += row;
        });
    }

    window.deleteCategory = function (code) {
        const categories = JSON.parse(localStorage.getItem("categories")) || [];
        const updatedCategories = categories.filter(cat => cat.code !== code);
        localStorage.setItem("categories", JSON.stringify(updatedCategories));
        renderCategoryList();
    }

    renderCategoryList();
});