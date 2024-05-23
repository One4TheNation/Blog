const header = document.querySelectorAll("header")
const userName = document.querySelectorAll("userName")
const country = document.querySelectorAll("country")
const title = document.querySelectorAll("title")
const comment = document.querySelectorAll("userForm")
const button = document.querySelectorAll("button")

button.addEventListener("click", function () {
    event.preventDefault();

    const blog = {
        userName: userName.value,
        title: title.value,
        country: country.value,
        comment: comment.value
    };

    localStorage.setItem("blog", JSON.stringify(blog));

    window.location.href = "blog.html"
});

goBack.addEventListener("click", function () {
    window.location.href = "index.html";
});