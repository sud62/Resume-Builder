
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Project = ({formData, setFormData}) => {
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
    <h3>Project</h3>
    <form>
    <input onChange={handleChange} type = "text" name = "projectTitle1" placeholder='Project Title' value = {formData.projectTitle1} required></input>
    <input onChange={handleChange} type = "text" name = "projectDescription1" placeholder='Project Description' value = {formData.projectDescription1} required />
    <input onChange={handleChange} type = "text" name = "projectTitle2" placeholder='Project Title' value = {formData.projectTitle2} ></input>
    <input onChange={handleChange} type = "text" name = "projectDescription2" placeholder='Project Description' value = {formData.projectDescription2}  />
    </form>
    </div>
  )
}

export default Project