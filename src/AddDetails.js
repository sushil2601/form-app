import React, { useState } from 'react'

const AddDetails = () => {

  const [user,setUser] = useState({
    name:'',
    age:'',
    email:'',
    phone:'',
    gender:'',
    country:'',
    about:'',
  })

  const handleChange = (e) =>{
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  const updateHandler = (e) =>{

    e.preventDefault();

    setUser(user)

    setUser({
      name:'',
      age:'',
      email:'',
      phone:'',
      gender:'',
      country:'',
      about:'',
    })

  }
  
  return (
    <div>
      <h1>Edit Details</h1>
      <form>

        <label>Name : </label>
        <input 
            type='text'
            name='name'
            value={user.name}
            onChange={handleChange}
        />
        <br/><br/>

        <lable>Age : </lable>
        <input 
          type='number'
          name='age'
          value={user.age}
          onChange={handleChange}
        />
        <br/><br/>

        <label>Email : </label>
        <input 
          type='text'
          name='email'
          value={user.email}
          onChange={handleChange}
        />
        <br/><br/>

        <label>Phone no : </label>
        <input 
          type='text'
          name='phone'
          value={user.phone}
          onChange={handleChange}
        />
        <br/><br/>

        <label>Gender : </label>
        <input 
          type='radio'
          name='gender'
          value='male'
          onChange={handleChange}
        />
        <lable>Male</lable>

        <input 
          type='radio'
          name='gender'
          value='female'
          onChange={handleChange}
        />
        <lable>FeMale</lable>

        <input 
          type='radio'
          name='gender'
          value='others'
          onChange={handleChange}
        />
        <lable>Others</lable>

        <br/><br/>

        <label>Country : </label>
        <select
          name='country'
          value={user.country}
          onChange={handleChange}
        >
          <option value='select'>select</option>
          <option value='India'>India</option>
          <option value='RSA'>RSA</option>
          <option value='USA'>USA</option>
          <option value='Germany'>Germany</option>
        </select>
        <br/><br/>

        <lable>About : </lable>
        <textarea 
          name='about'
          value={user.about}
          onChange={handleChange}
        />
        <br/><br/>

        <input 
          type='button'
          value='Update'
          onClick={updateHandler}
        />
      </form>
    </div>
  )
}

export default AddDetails
