import './Projects.css';
import Button from './Button';

const Projects=()=>{

    return(
<>
<div className="prjct">
    <div className="projectdescription">
        <div className="prjcthding"><div>Electronic Items Shopping store</div><div><Button className="fit">
<a href="https://onlineelectronistorewebpage.000webhostapp.com/" target="_blank" rel="noreferrer noopener">click here</a>
</Button></div></div>
    Electronic shopping store is an e-commerse website for purchasing electronic items.<div>It is created using frontend-HTML,CSS,JS  backend-PHP,Mysql.</div>
    <div>It was a group project and the pages developed by me are (contactUs page,Category pages,Manage Cart page),backend connections to database in sql through php</div>      
    </div>

    <div className="projectdescription">
        <div className="prjcthding"><div>CryptoTracker</div><div><Button className="fit">
<a href="https://favcoins.netlify.app/" target="_blank" rel="noreferrer noopener">click here</a>
</Button></div></div>
    CryotoTracker is an app build on Reactjs.<div>It helps you keep (realtime) track of your favourite cryptocurrencies.</div>    
    </div>

</div>


</>
    );
}
export default Projects;