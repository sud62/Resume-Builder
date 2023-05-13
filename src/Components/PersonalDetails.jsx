import React,{useState} from 'react';

function PersonalDetails({formData, setFormData}){
  function handleChange(e){
    const {name,value} = e.target;
    setFormData(intValue => {
      return {
        ...intValue, [name] : value
      }
    })
  }
 
 return(
    <>
    <h3>Personal Details</h3>
    <form>
    <input onChange={handleChange} type = "text" name = "fname" placeholder='First Name' value = {formData.fname} ></input>
    <input onChange={handleChange} type = "text" name = "lname" placeholder='Last Name' value = {formData.lname}  />
    <input onChange={handleChange} type = "email" name = "email" placeholder='Email' value = {formData.email}  />
    <input onChange={handleChange} type = "tel" name = "phoneNumber" placeholder='Phone Number' value = {formData.phoneNumber} />
    <input onChange={handleChange} type = "url" name = "linkedIn" placeholder='Linked In' value = {formData.linkedIn} />
    <input onChange={handleChange} type = "url" name = "github" placeholder='Git Hub' value = {formData.github} />
    <input onChange={handleChange} type = "url" name = "twitter" placeholder='Twitter' value = {formData.twitter} />
    <input onChange={handleChange} type = "url" name = "instagram" placeholder='Instagram' value = {formData.instagram} />
    </form>
    </>
 )
}


export default PersonalDetails;