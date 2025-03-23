

function App() {



  const handleAddUser = event => {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };

    console.log(user);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        console.log('User added:', data);
        if(data.insertedId){
          alert("user added successfully")
          form.reset()
        }
       
      })
      .catch(error => console.error('Error adding user:', error));
  };






 
 
  return (
    <>
     
      <h1>My Simple CRUD</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Enter name" required />
        <br />
        <input type="email" name="email" placeholder="Enter email" required />
        <br />
        <input type="submit" value="Add User" />
      </form>
      
    </>
  )
}

export default App
