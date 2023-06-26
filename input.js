const inputKeyword = document.getElementById("keywordSearch");
const tags = document.querySelectorAll("#inputTag");

tags.forEach((item) => {
    item.addEventListener("click", () => {
        inputKeyword.value = item.innerText;
    });
});
