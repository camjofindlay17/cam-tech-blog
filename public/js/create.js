const postHandler = async (e) => {
    e.preventDefault()
    const post_title = document.querySelector("#post-title").value.trim()
    const post = document.querySelector("#post").value.trim()
  
      const response = await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({post_title, post}),
        headers: {'Content-Type': 'application/json'}
      });
  
      if (response.ok) {
        location.replace('/dashboard')
      } else {
        alert(response.statusText)
      }
    }

const destroyPost = async (e) => {
    e.preventDefault()
    const post_id = document.querySelector(".remove").dataset.post_id
    console.log(post_id)
  
    const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("Server error: Please try again");
    }
}

document.querySelector(".newPost").addEventListener("submit", postHandler);
document.querySelector(".remove").addEventListener("submit", destroyPost);