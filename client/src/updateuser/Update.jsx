import React, { useEffect, useState } from 'react'
import "./Update.css";
import { Link ,useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';

const UpdateUser = () => {

    const users = {
        name: "",
        email: "",
        address: "",
    };


    const [user, setUser] = useState(users)
    const navigate = useNavigate();
    const { id } = useParams();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        console.log(name,value)

        setUser({ ...user, [name]: value });        
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
            .then((response) => {
            setUser(response.data)
            })
            .catch((error) => {

                console.log(error)            
            })
        
    },[id])
    

    const submitForm = async (e) => {
        e.preventDefault();
        console.log(e)


        try {
    const response = await axios.put(`http://localhost:8000/api/update/users/${id}`, user);
             console.log("User added successfully", response.data,response.message);
            toast.success(response.data.message, {position: "top-right"})
    navigate("/");
} catch (error) {
    console.error("Error adding user:", error);
}

    
    }


    return (
      <>
            <div className='addUser'>
                <Link to="/" type="button" className="btn btn-secondary"><i className="fa-solid fa-backward"></i> Back</Link>

                <h3>Update User</h3>
                <form className='addUserForm' onSubmit={submitForm}>
                    <div className='inputGroup' >

                        <label htmlFor='name' > Name: </label>
                        <input
                            type='text'
                            id='name'
                            value={user.name}
                            onChange={inputHandler}
                            name='name'
                            autoComplete='off'
                            placeholder='Enter your name'
                        />

                    </div>

                    <div className='inputGroup' >

                        <label htmlFor='name' > Email: </label>
                        <input
                            type='email'
                            id='email'
                            value={user.email}
                            onChange={inputHandler}
                            name='email'
                            autoComplete='off'
                            placeholder='Enter your email'
                        />

                    </div>

                    <div className='inputGroup' >

                        <label htmlFor='name' > Address: </label>
                        <input
                            type='text'
                            id='address'
                            onChange={inputHandler}
                            name='address'
                            value={user.address}
                            autoComplete='off'
                            placeholder='Enter your Address'
                        />

                    </div>

                    <div className='inputGroup' >

                        <button type="submit" className="btn btn-primary">Submit</button>

                    </div>
                </form>
      </div>
      
      </>
  )
}

export default UpdateUser