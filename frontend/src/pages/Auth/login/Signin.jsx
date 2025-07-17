import './Signin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { faSignIn } from '@fortawesome/free-solid-svg-icons/faSignIn';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import { useSignin } from '../../../context/Shared/SigninContext/SigninContext';
import { assets } from '../../../assets/banner';
const Signin = () => {
    
    const {
        loading,
        onSubmit,
        register,
        handleSubmit,
        watch,
        errors,
        user
    } = useSignin();
    
    
     const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("/");
    } 



//     fetch('http://localhost:3001/api/testcookie', {
//   credentials: 'include'
// }).then(res => res.json()).then(console.log);



   

    return (
        <div className='signup_container' style={{ backgroundImage: `url(${assets.banner1})` }}>
            <form onSubmit={handleSubmit(onSubmit)} className='form_container'>
            <div className='exit_button' onClick={navigateToHome}><FontAwesomeIcon icon={faClose}/></div>
                <h1>Sign In</h1>
                <p>Please provide valid credentials</p>



                {/* Email Input */}
                <div className="input_field">
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        className={errors.email ? "input_error" : ""}
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email address"
                            },
                            maxLength: {
                                value: 50,
                                message: "Email must be less than 50 characters"
                            },
                            minLength: {
                                value: 20,
                                message: "Email must be at least 20 characters"
                            }
                        })}
                    />
                    {errors.email && <p className='error_message'>{errors.email.message}</p>}
                </div>


                {/* Password Input */}
                <div className="input_field">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        className={errors.password ? "input_error" : ""}
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters"
                            },
                            maxLength: {
                                value: 20,
                                message: "Password must not exceed 20 characters"
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                                message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
                            }
                        })}
                    />
                    {errors.password && <p className='error_message'>{errors.password.message}</p>}
                </div>


               


                {/* Submit Button */}
                <button type="submit" disabled={loading}>
                    {loading ? "Signing in..." : "Sign In Now"} &nbsp;
                    <FontAwesomeIcon icon={faSignIn} />
                </button>

                {/* Footer */}
                <div className="signup_footer">
                    Don't have an account? <Link to="/signup">Signup here</Link>
                </div>
            </form>

            <div className="right_panel">
                <h2>Welcome  to Megatowel</h2>
                {user && (
                    <div style={{ marginTop: 20 }}>
                    <strong>Logged in as:</strong> {user.email} ({user.role})
                    </div>
                )}
                <p>Luxury stays, unforgettable experiences.</p>
                {/* <img src={assets.banner1} alt="Hotel" className="hotel_image" /> */}
                <blockquote className="testimonial">
                    "Amazing views and incredible service!" – Olivia R.
                </blockquote>
            </div>
        </div>
    );
};



export default Signin