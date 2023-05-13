import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Education = ({formData, setFormData}) => {
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
    <h3>Education Details</h3>
    <form>
    <input onChange={handleChange} type = "text" name = "school" placeholder='School' value = {formData.school} ></input>
    <input onChange={handleChange} type = "text" name = "schoolDescription" placeholder='School Description' value = {formData.schoolDescription}  />
    <input onChange={handleChange} type = "email" name = "college" placeholder='College/University' value = {formData.college}  />
    <input onChange={handleChange} type = "tel" name = "collegeDescription" placeholder='College Description' value = {formData.collegeDescription} />
    <input onChange={handleChange} type = "url" name = "masterDegree" placeholder='Master Degree' value = {formData.masterDegree} />
    <input onChange={handleChange} type = "url" name = "masterDescription" placeholder='Master Degree Description' value = {formData.masterDescription} />
    </form>
    </div>
  )
}


export default Education;