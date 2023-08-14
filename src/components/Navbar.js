import navbar from '../assets/partial-css/navbar.css';
import { Link } from 'react-router-dom';



function Navbar(){
     return(
          <nav>
               <Link to="/"><img src="/images/iris2.png" /></Link>
               <Link to="/species" className="about-link">species</Link>
               <Link to="/about" className="about-link">about</Link>
          </nav>
     );
}

export default Navbar;