const renderComment = async (e) => {
    e.preventDefault()
    const text = document.querySelector('input[name="newComment"]').value
    const post_id = document.querySelector(".post").dataset.post_id;
  
      const response = await fetch('/api/comments/', {
        method: 'POST',
        body: JSON.stringify({text, post_id}),
        headers: {'Content-Type': 'application/json'}
      });
  
      if (response.ok) {
        location.replace(`${post_id}`)
      } else {
        alert(response.statusText)
      }
    }

document.querySelector(".newComment").addEventListener("submit", renderComment);