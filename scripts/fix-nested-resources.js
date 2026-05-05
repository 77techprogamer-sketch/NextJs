const fs = require('fs');
const path = require('path');

const blogsPath = path.join(__dirname, '..', 'src', 'data', 'blogs.json');
let blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));

function fixContent(content) {
    if (typeof content !== 'string') return content;
    
    // Fix nested resources: /resources/resources/resources/guides -> /resources/guides
    let fixed = content.replace(/\/resources(\/resources)+/g, '/resources');
    
    // Fix double slashes
    fixed = fixed.replace(/([^:])\/\//g, '$1/');
    
    return fixed;
}

blogs = blogs.map(blog => {
    if (blog.content) {
        blog.content = fixContent(blog.content);
    }
    return blog;
});

fs.writeFileSync(blogsPath, JSON.stringify(blogs, null, 2), 'utf8');
console.log('Fixed nested resources in blogs.json');
