import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Experience = ({formData, setFormData}) => {
  function handleChange(e){
    const {name,value} = e.target;
    setFormData(intValue => {
      return {
        ...intValue, [name] : value
      }
    })
  }
  return (
    <div>
    <h3>Work Experience</h3>
    <form>
    <input onChange={handleChange} type = "text" name = "companyName1" placeholder='Company' value = {formData.companyName1} required></input>
    <input onChange={handleChange} type = "text" name = "companyDescription1" placeholder='Description' value = {formData.companyDescription1} required />
    <label>Internship :</label>
    <input onChange={handleChange} type = "text" name = "companyName2" placeholder='Company' value = {formData.companyName2} required></input>
    <input onChange={handleChange} type = "text" name = "companyDescription2" placeholder='Description' value = {formData.companyDescription2} required />
     </form>
    </div>
  )
}

export default Experience