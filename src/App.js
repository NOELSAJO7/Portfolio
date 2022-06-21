import './App.css';
import Summary from './summary';
import Outlinecard from './COMPONENTS/OutlineCard';
import Socialmedia from './COMPONENTS/fontawesomeicon';
import Navbar from './COMPONENTS/navbar';
import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import Aboutme from './COMPONENTS/Aboutme';
import Contact from './COMPONENTS/contact';
import Projects from './COMPONENTS/Projects';

function App() {
  return (
    <Router>
<div className="App">
      <div className="container">
          <Socialmedia></Socialmedia>
          <div className='summaryandnavbar'>
            <Navbar></Navbar>
               <Outlinecard>
               <Routes>
               <Route exact path='/' element={<Summary/>}/>
               <Route exact path='aboutme' element={<Aboutme/>}/>
               <Route exact path='projects' element={<Projects/>}/>
               <Route exact path='contactpage' element={<Contact/>}/>
               </Routes>
               </Outlinecard>
          </div>
      </div>
    </div>
    </Router>  
  );
}

export default App;
