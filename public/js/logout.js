const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/users/logout", {
      method: "POST",
      body: JSON.stringify({}),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  };
  
  document.getElementById("home-logout").addEventListener("click", logoutHandler);