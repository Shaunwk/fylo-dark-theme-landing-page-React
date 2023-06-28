import MainLogo from '../../images/logo.svg';
import './style.css';

function Navigation(){
    return(
        <nav className="nav">
            
            <img className='logo' src={MainLogo} alt='Logo'/>
            
            <div className='links'>
                 <p>Features</p>
                 <p>Team</p>
                 <p>Sign In</p>
            </div>
        </nav>
    );
}

export default Navigation