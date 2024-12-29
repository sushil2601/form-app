import React, { useState } from 'react'

const FormApp = () => {

    const [skills, setSkills] = useState([])

  const [ user, setUser]= useState({
    name:'',
    age:'',
    email:'',
    phone:'',
    gender  : '',
    country: '',
    about: ''
  })
  const [users, setUsers] = useState([])

  const handleSkills=(e)=>{

    

    const {checked, value} = e.target
        setSkills([...skills, value])

  }

  const handleChange=(e)=>{
    setUser({...user, 
        
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    // console.log(skills)
    // setUser({...user, skills: skills})
    user.skills = skills
    setUsers([...users, user])
    setSkills([]);
    console.log(user)
    setUser({name:'', age:'', email:'', phone:'',gender:'' ,country:'',about:''}) 
  }
//   console.log(users)
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name : </label>
            <input 
                type='text' 
                name='name' 
                value={user.name}
                onChange={handleChange}  
            />

            <br /><br />

            <label>Age : </label>
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

            <label>Phone No : </label>
            <input 
                type ='text' 
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
                // id='male'
                onChange={handleChange}
                
            />
            <label htmlFor="male">Male</label>

            <input 
                type='radio'
                name='gender'
                value='female'
                // id = 'female'
                onChange={handleChange}
            />
            <label htmlFor="female">FeMale</label>

            <input 
                type='radio'
                name='gender'
                value='others'
                // id = 'others'
                onChange={handleChange}
            />
            <label htmlFor="others">Others</label>

            <br/><br/>

            <label>Skills : </label>

            <input 
                type='checkbox'
                name = 'skills'
                value = 'Java'
                onChange={handleSkills}   
            />
            
            <label>Java</label>

            <input 
                type='checkbox'
                name= 'skills'
                value = 'ReactJs'
                onChange={handleSkills}
            />

            <lable>ReactJs</lable>

            <input 
                type='checkbox'
                name= 'skills'
                value = 'Nodejs'
                onChange={handleSkills}
            />

            <lable>NodeJs</lable>

            <input 
                type='checkbox'
                name= 'skills'
                value = 'javascript'
                onChange={handleSkills}
            />

            <lable>JavaScript</lable>

            <br/><br/>

            <label>Country : </label>
            <select
                name='country'
                id='country'
                value={user.country}
                onChange={handleChange}
            >
                <option value='select'>select</option>
                <option value='India'>India</option>
                <option value='USA'>USA</option>
                <option value='UK'>UK</option>
                <option value='Germany'>Germany</option>
            </select>

            <br/><br/>

            <label>About : </label>
            <textarea 
                name='about'
                value={user.about}
                onChange={handleChange}
            />
            <br/><br/>

            <input 
                type='button'   
                value='Submit'
                onClick={handleSubmit}
            />
        </form><br/>
        <table border={1}>
            <thead>
                <tr>           
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Skills</th>
                    <th>Country</th>
                    <th>About</th>
                </tr> 
            </thead>
            <tbody>
            {
                users.map((user, index)=>(
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.gender}</td>
                        <td><ul>{user.skills.map((skill,i)=>{
                            return <li key={i}>{skill}</li>
                        })}</ul></td>
                        <td>{user.country}</td>
                        <td>{user.about}</td>
                 </tr>
                ))
            }
            </tbody>
        </table>

    </div>

    
  )
}

export default FormApp

