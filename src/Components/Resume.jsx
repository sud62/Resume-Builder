import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from './Experience';
import Project from './Project';
import Download from './Download';
import Modal2 from "./Modal";

const Resume = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [details,setDetails] = useState({
    fname : "",
    lname : "",
    email: "",
    phoneNumber : "",
    linkedIn : "",
    twitter: "",
    instagram:"",
    github : "",
    school : "",
    schoolDescription:"",
    college: "",
    collegeDescription : "",
    masterDegree : "",
    masterDescription: "",
    companyName1 : "",
    companyDescription1 : "",
    companyName2 : "",
    companyDescription2 : "",
    projectTitle1 : "",
    projectDescription1 : "",
    projectTitle2 : "",
    projectDescription2 : "",        
})
function handleChange(e){
  const {name,value} = e.target;
  setDetails(intValue => {
    return {
      ...intValue, [name] : value
    }
  })
}
  function pageDisplay(){
    if(page===0){
      return <PersonalDetails formData={details} setFormData={setDetails} />
    }
    else if(page===1){
      return <Education formData={details} setFormData={setDetails}/>
    }
    else if(page===2){
      return <Experience formData={details} setFormData={setDetails}/>
    }
    else if(page===3){
      return <Project formData={details} setFormData={setDetails}/>
    }
    else{
      return <Modal2 />
    }
  }
  function nextStep(e){
      if(page===3){
        navigate("/download");
      }
      setPage((currPage)=> currPage +1);
        console.log("next : " + page);
      e.preventDefault();
    }
   

  function prevStep(e){
      if(page===0){
        console.log("page0 : " + page);
        return (<Modal2 showModal = {true} />);   
      }
      else{
        setPage((currPage)=> currPage - 1);
        console.log("prev : " + page);


      }
      e.preventDefault();
    }

  return (
    <div>
    {/* <form onSubmit={()=> navigate("/download")}> */}
    <div className='bodyContainer'>{pageDisplay()}</div>
    <button onClick={prevStep}>Back</button>
    <button onClick={nextStep} >{page === 3?"Submit":"Next"}</button>
    {/* </form> */}
    </div>

  )
}

export default Resume;