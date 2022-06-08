import './summary.css';

import myimage from './images/goku.jpeg';

const Summary=()=>{
  document.title="Noel Saj|Home";
    return(
      <>
<div className="aboutMe">
  <div  className="name">
    NOEL SAJ
  </div>
  <div className='designation'>Full Stack Developer</div>
  <div className='h2'>
    I'm an independent creative developer and coder from Kerala,India.
  </div>

  <a href="https://drive.google.com/file/d/1z4uThAGFcrbWfF_xLg0DGiIL7b4EehLt/view?usp=sharing" target="_blank" rel="noreferrer noopener"><button className="resumedownload">Download CV</button>
</a>
</div>
  <div className="photo">
    <img src={myimage} alt="myimg"/>
  </div>
  </>  
    );
}
export default Summary;