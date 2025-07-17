import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../../assets/banner';
import { useAuthenticatedUser } from '../../../hooks/UserAuth';

const Home = () => {
    const {user}  =  useAuthenticatedUser();

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/signin");
    }

    return (
        <div className='home_container' style={{ backgroundImage: `url(${assets.banner1})` }}>
        <div className='content'>
            <h1>
                Experience the Best <br />
               Baguio at <strong>Megatowel</strong>
            </h1>
            <p>Luxury accomodation, personalized service</p>
            <button onClick={navigateToLogin}>
                <span>Check Availability & Book </span>
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
            <h4>
               ID: {user?.id} <br />
               EMAIL : {user?.email} <br />
               ROLE: {user?.role}
            </h4>
        </div>
        </div>
    )
}


export default Home
