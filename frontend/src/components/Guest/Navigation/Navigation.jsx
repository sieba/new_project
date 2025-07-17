import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingWheat, faSignIn } from '@fortawesome/free-solid-svg-icons'
import './Navigation.css'
import { Link, useNavigate } from 'react-router-dom'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { useNavigation } from '../../../context/Shared/NavigationContext/Navigation.jsx';
import { useAuthenticatedUser } from '../../../hooks/UserAuth.jsx';
import { assets } from '../../../assets/banner.js';

const Navigation = () => {
    const navigate = useNavigate();
    const {user} = useAuthenticatedUser();
    const { activeNavlink,setActiveNavlink }  =  useNavigation();
    const homePage = () => {
        navigate("/")
    }
    return (
            <>
                <nav>
                    <div className="logo" onClick={homePage}>
                        <FontAwesomeIcon icon={faBuildingWheat} className='house_icon'/>
                        <h1>Mega<span>towel</span></h1>
                    </div>
                    <div className='links'>
                        <Link  to="/" className={activeNavlink === "home"? "active" : ""} onClick={()=>setActiveNavlink("home")}>Home</Link>
                        <Link  to="/" className={activeNavlink === "about"? "active" : ""} onClick={()=>setActiveNavlink("about")}>About</Link>
                        <Link  to="/" className={activeNavlink === "service"? "active" : ""} onClick={()=>setActiveNavlink("service")}>Service</Link>
                        <Link  to="/" className={activeNavlink === "contact"? "active" : ""} onClick={()=>setActiveNavlink("contact")}>Contact</Link>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search..." />
                        <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                    </div>

                    {user ? (
                        <div className="user_profile">         
                               <img src={user.profile ? user.profile : assets.Profile } alt="" />                    
                        </div>
                    ) : (                   
                        <div className="user">
                            <Link to="/signin">Sign In &nbsp; <FontAwesomeIcon icon={faSignIn}/></Link>
                        </div>
                    )}

                </nav>
            </>
    )
}

export default Navigation