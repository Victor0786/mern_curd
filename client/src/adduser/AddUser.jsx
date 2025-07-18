import React, { useState } from 'react'
import "./AddUser.css";
import { Link ,useNavigate } from 'react-router-dom';
import axios from "axios";


const AddUser = () => {

    const users = {
        name: "",
        email: "",
        address: "",
    };


    const [user, setUser] = useState(users)
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        console.log(name,value)

        setUser({ ...user, [name]: value });        
    }
    

    const submitForm = async (e) => {
        e.preventDefault();
        console.log(e)


        try {
    const response = await axios.post("http://localhost:8000/api/user", user);
    console.log("User added successfully", response.data);
    navigate("/");
} catch (error) {
    console.error("Error adding user:", error);
}

    
    }


    return (
      <>
            <div className='addUser'>
                <Link to="/" type="button" class="btn btn-secondary"><i class="fa-solid fa-backward"></i> Back</Link>

                <h3>Add New User</h3>
                <form className='addUserForm' onSubmit={submitForm}>
                    <div className='inputGroup' >

                        <label htmlFor='name' > Name: </label>
                        <input
                            type='text'
                            id='name'
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

export default AddUser