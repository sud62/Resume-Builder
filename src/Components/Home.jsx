import React from 'react';
import { useNavigate} from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
        <button onClick={() => {
          navigate("/resume")
        }}>Make Resume</button>
        <button>My Resume</button>
    </div>
  )
}

export default Home;