import { Link, useLoaderData } from "react-router-dom";



const Users = () => {
    const users = useLoaderData()
    const handleDelete = (_id) =>{
        console.log('delete',_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE'
        })

        .then(res => res.json())
      .then(data => {
        console.log('User added:', data);
        if(data.deletedCount>0){
            alert("user deleted successfully")
           
          }
    })
}
    return (
        <div>
            {users.length}
            
            {
            users.map(user => (
          <li key={user._id}>{user.name}:{user.email} {user._id}<Link to={`/update/${user._id}`}><button>update</button></Link><button onClick={()=>handleDelete(user._id)}>X</button></li>)) 
        }
          
        </div>
    );
};

export default Users;