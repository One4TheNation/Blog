const holderEl = document.querySelector("#holder");


function renderBlogs() {
    // get all blogs from local storage
    let blogs = JSON.parse(localStorage.getItem("blogs"))|| []
    // loop over all blogs
    for (const blog of blogs) {
        console.log(blog);

        const infoEl = `
        <section>
            <container class="block">
                <h3>${blog.title}</h3>
                <h5>${blog.userName}</h5>
                <h6>${blog.country}</h6>
                <p>${blog.comment}t</p>
            </container>
        </section><br>`
        
        holderEl.innerHTML = holderEl.innerHTML + infoEl;

    }


        
}
renderBlogs();