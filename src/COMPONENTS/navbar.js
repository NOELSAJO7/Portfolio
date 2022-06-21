import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar=()=>{


    return(
              <div className="nameontop">
              <NavLink to='/'><div>Noel Saj</div></NavLink>
                  <div className="navbar">
              <NavLink to='/aboutme' className='navs'>about me</NavLink>          
              <NavLink to='/projects' className='navs'>projects</NavLink>
              <NavLink to='/contactpage' className='navs'>contact</NavLink>        
              </div>
              </div>
        
    );
}

export default Navbar;