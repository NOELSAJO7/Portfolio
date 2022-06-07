import './fontawesomeicon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook,faInstagram ,faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Socialmedia=()=>{
    return(
<div className="icons">
    <a href="https://www.instagram.com/unnamed_friend/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faInstagram} className='icon'/></a>
    <a href="https://ne-np.facebook.com/people/Noel-Saj/100004741244709/?comment_id=Y29tbWVudDozMDA5NzI1ODcyNTg2OTY4XzMwMTAxMDM5NzU4ODI0OTE%3D" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faFacebook} className='icon'/></a>
    <a href="https://twitter.com/Noel_Saj" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faTwitter} className='icon'/></a>
    <a href="https://in.linkedin.com/in/noel-saj-6523361b4" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faLinkedin} className='icon'/></a>
    </div>
    );
    
}

export default Socialmedia;