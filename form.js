const header = document.querySelectorAll("header")
const userName = document.querySelectorAll("userName")
const country = document.querySelectorAll("country")
const title = document.querySelectorAll("title")
const comment = document.querySelectorAll("userForm")
const button = document.querySelectorAll("button")

button.addEventListener("click", function (event) {
    event.preventDefault();

    let blogs = []
    const data = JSON.parse(localStorage.getItem(blog));

    if (data){
        blogs = data;
    }

    const blog = {
        userName: userName.value,
        title: title.value,
        country: country.value,
        comment: comment.value
    };

blog.push(blog);

localStorage.setItem("blogs", JSON.stringify(blogs));
location.assign('blog.html')

});
