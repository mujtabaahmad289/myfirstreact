import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [school, setSchool] = useState();
    const [gender, setGender] = useState();
    const [city, setCity]= useState();

    const styleInput = {
      margin:'20px',
      padding:'5px 0px 5px 0px',
      textAlign:'center',
      fontSize:'15px',
      border: '2px solid black',
      borderRadius:'10px',
    }
  return (
    <>
    <div style={{border:'7px solid Blue',padding:'30px 45px 50px 45px',}}>

      <h1 style={{color:'green',}}>Admission Form <hr style={{color:'green',border:'5px solid green',margin:'10px 140px 0px 140px',}}/></h1>

    <input type="text"
    value={name}
    onChange={(e)=>{setName(e.target.value)}}
    placeholder='Enter Your Name' 
    style={styleInput}/>

   <input type="number"
    value={age}
    onChange={(e)=>(setAge(e.target.value))}
    placeholder='Enter Your Age'
    style={styleInput} />
    

   <input type="text"
    value={school}
    onChange={(e)=>(setSchool(e.target.value))}
    placeholder='Enter Your School'
    style={styleInput} />


    <form action="">
    <p>Please select your Gender:</p>
    <input type="radio"
     id="male" 
     name='gender'
     checked={true}
     value='Male'
     onChange={(e)=>(setGender(e.target.value))}></input>
      <label for="">Male</label>
      <input type="radio"
     id="female" 
     name='gender'
     value='Female'
     onChange={(e)=>(setGender(e.target.value))}></input>
      <label for="">Female</label>
    </form>

    <select name="city"
    onChange={(e)=>(setCity(e.target.value))}
    value={city}
    style={styleInput}>
    <option name='alert'>Select Your City</option>
    {/* {if (alert===true) than <alert>'please select the city'</alert>} */}
    <option name='LHR'>Lahore</option>
      <option name='KRI'>Karachi</option>
      <option name='ISL'>Islamabad</option>
      <option name='PSH'>Peshawar</option>
      <option name='QTA'>Quetta</option>
     
    </select>
    <br />
    <button onClick={()=>{
      // console.log(name)
      // console.log(age)
      // console.log(school)
      // console.log(gender)
      // console.log(city)
      alert(
      `Name: ${name} 
       Age: ${age} 
       School: ${school} 
       Gender: ${gender} 
       City: ${city}`)
    }}> Submit </button>

    </div>
  
    </>


  )
}

