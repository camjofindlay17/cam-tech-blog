const submitHandler = async (e) => {
    e.preventDefault();
  
    const email = document.querySelector('#email-signup').value.trim();
    const user_name = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
  
    if (email && user_name && password) {
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({email, user_name, password}),
        headers: {'Content-Type': 'application/json'}
      });
  
      if (response.ok) {
        document.location.replace('/')
      } else {
        alert(response.statusText)
      }
    } else (
      alert("Please fill out all fields!")
    )
  }
  
  document.querySelector('.signup-class')
  .addEventListener('submit', submitHandler);