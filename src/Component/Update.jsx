import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData(); // Get data from loader

  const handleUpdate = (event) => {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };

    console.log(updatedUser);

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated user:", data);
        if(data.modifiedCount>0){
            alert("user updated successfully")
           
          }
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  return (
    <div>
      <h2>Update User: {loadedUser.name}</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loadedUser?.name} required />
        <br />
        <input type="email" name="email" defaultValue={loadedUser?.email} required />
        <br />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default Update;
