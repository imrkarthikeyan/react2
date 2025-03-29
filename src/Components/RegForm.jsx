import React, { useState } from 'react'
import "./RegForm.css";

export const RegForm = () => {

    const[user,setUser]=useState({
        name:"karthikeyan",
        gender:"male",
        age:19,
        isStudent:true,
        country:"India",
        bio:"I am a React Developer"
    })

    function changeHandler(e){
        const name=e.target.name
        const value=e.target.type==="checkbox" ? e.target.checked : e.target.value
        setUser({...user,[name]:value})
    }


  return (
    <>
        <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{user.gender}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{user.age}</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>{user.isStudent ? "student" : "other"}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{user.country}</td>
                </tr>
                <tr>
                    <td>Bio</td>
                    <td>{user.bio}</td>
                </tr>
            </tbody>
        </table>

        <form>
            <input name='name' type="text" placeholder='Enter name' value={user.name} onChange={changeHandler}/>
            <input name='age' type="number" placeholder='Enter Age' value={user.age} onChange={changeHandler}/>
            <div className='gender'>
                <label htmlFor="male">
                    <input name='gender' type="radio" value='male' id='male' checked={user.gender=="male"} onChange={changeHandler}/>
                    Male
                </label>
                <label htmlFor="female">
                    <input name='gender' type="radio" value='female' id='female' checked={user.gender=="female"} onChange={changeHandler}/>
                    Female
                </label>
            </div>
            <label htmlFor="isStudent">
                <input name='isStudent' type="checkbox" id='isStudent' checked={user.isStudent} onChange={changeHandler}/>
                Is Student
            </label>
            <div className='country'>
                <label htmlFor="country">Select Country : </label>
                <select name="country" id="country" value={user.country} onChange={changeHandler}>
                    <option value="India">India</option>
                    <option value="America">America</option>
                    <option value="British">British</option>
                    <option value="Italy">Italy</option>
                </select>
            </div>
            <textarea name="bio" id="bio" cols='30' rows='5' value={user.bio} placeholder='About you' onChange={changeHandler}></textarea>
        </form>
    </>
  )
}
