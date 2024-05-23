const blogContainer = document.getElementById('main');

// Create some sample blog posts
const blogPosts = [
    { title: 'Title', userName: 'Username', country: 'Country', text: 'Inserted Text.' },
    { title: 'Title', userName: 'Username', country: 'Country', text: 'Inserted Text.' },
    { title: 'Title', userName: 'Username', country: 'Country', text: 'Inserted Text.' },
];

// Render the blog posts
blogPosts.forEach((post) => {
    const blogPost = document.createElement('div');
    blogPost.innerHTML = `
    <h3>${post.title}</h3>
    <h4>${post.userName}</h4>
    <h6>${post.country}</h6>
    <p>${post.text}</p>`;
    blogContainer.appendChild(blogPost);
});