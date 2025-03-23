import { useLoaderData } from "react-router-dom";

const Update = () => {
  const user = useLoaderData(); // Get data from loader


  
  const handleUpdate = event => {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };

    console.log(user);
  }
  return (
    <div>
      <h2>Update User: {user.name}</h2>
      <form  onSubmit={handleUpdate}>
        <input type="text" name="name"defaultValue={user?.name} required />
        <br />
        <input type="email" name="email" defaultValue={user?.email} required />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default Update;