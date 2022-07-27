import './summary.css';
import Button from './COMPONENTS/Button';

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

  <a href="https://drive.google.com/file/d/1z7Ki95pq_eBz0RDXbVrTswzPFYWJxind/view?usp=sharing" target="_blank" rel="noreferrer noopener"><Button className="btn">Download CV</Button>
</a>
</div>
  <div className="photo">
    <img src={myimage} alt="myimg"/>
  </div>
  </>  
    );
}
export default Summary;