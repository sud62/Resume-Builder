import React from 'react'
import { useNavigate } from 'react-router-dom';
const Download = () => {
  const navigate = useNavigate();

  return (
    <div>
    <button onClick = {navigate('/your-resume')}>Download</button>
    <a href='src\Template\srt-resume.html'><button>Fresh Download</button></a>
    <button onClick={()=>{navigate("/")}}>Home</button>
    </div>
  )
}

export default Download