document.addEventListener("DOMContentLoaded", () => {
    const addBookmarkBtn = document.getElementById("addBookmarkBtn");
    const bookmarkList = document.getElementById("bookmarkList");
    const bookmarkModal = document.getElementById("bookmarkModal");
    const closeModal = document.querySelector(".close");
    const saveBtn = document.getElementById("saveBtn");
    const websiteNameInput = document.getElementById("websiteName");
    const websiteURLInput = document.getElementById("websiteURL");

    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    addBookmarkBtn.addEventListener("click", () => {
        bookmarkModal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        bookmarkModal.style.display = "none";
        clearInputs();
    });

    saveBtn.addEventListener("click", () => {
        const websiteName = websiteNameInput.value;
        const websiteURL = websiteURLInput.value;

        if (websiteName && websiteURL) {
            const newBookmark = {
                name: websiteName,
                url: websiteURL
            };
            bookmarks.push(newBookmark);
            localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
            renderBookmarks();
            bookmarkModal.style.display = "none";
            clearInputs();
        }
    });

    function renderBookmarks() {
        bookmarkList.innerHTML = "";
        bookmarks.forEach((bookmark, index) => {
            const div = document.createElement("div");
            div.classList.add("bookmark");
            div.innerHTML = `
                <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
                <button class="deleteBtn" data-index="${index}">Xoá</button>
            `;
            bookmarkList.appendChild(div);
        });
        
        const deleteBtns = document.querySelectorAll(".deleteBtn");
        deleteBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const index = e.target.getAttribute("data-index");
                bookmarks.splice(index, 1);
                localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
                renderBookmarks();
            });
        });
    }

    function clearInputs() {
        websiteNameInput.value = '';
        websiteURLInput.value = '';
    }

    renderBookmarks();
});