function comments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => commentsDisplay(data))
}

function commentsDisplay(comments) {
    const commentContainer = document.getElementById('comment-container');
    for (const comment of comments) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment')
        commentDiv.innerHTML = `
        <h3>postId: ${comment.postId}</h3>
        <h3>name: ${comment.name}</h3>
        <p>body: ${comment.body}</p>
        `
        commentContainer.appendChild(commentDiv);
    }
}

comments()