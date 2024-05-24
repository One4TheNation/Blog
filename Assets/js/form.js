const userName = document.querySelector("#userName")
const country = document.querySelector("#country")
const title = document.querySelector("#title")
const comment = document.querySelector("#userForm")
const button = document.querySelector("#button")

console.log(country);

button.addEventListener("click", function (event) {
    event.preventDefault();

    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    

    const blog = {
        userName: userName.value,
        title: title.value,
        country: country.value,
        comment: comment.value
    };

    blogs.push(blog);

    localStorage.setItem("blogs", JSON.stringify(blogs));
    location.assign('blog.html')
    
});
