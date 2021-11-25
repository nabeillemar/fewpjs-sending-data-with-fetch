// Add your code here

function submitData(userName, userEmail) {
    let formData = {
      name: userName,
      email: userEmail
    }
  
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  

    return fetch("http://localhost:3000/users", configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        console.log(object); 
        document.body.innerHTML = `<p>id: ${object.id}</p><br><p>name: ${object.name}`
      })
      .catch(function(error) {
        alert("Bad things!");
        console.log(error.message);
        document.body.innerHTML = error.message
      });
  }