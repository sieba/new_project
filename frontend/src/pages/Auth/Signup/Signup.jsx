import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons/faSignOut';
import { assets } from '../../../assets/banner';
import { Link, useNavigate } from 'react-router-dom';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import { useSignup } from '../../../context/Shared/SignupContext/SignupContext';
import { useResizable } from '../../../hooks/Resizeable';
const Signup = () => {
      const { ref, formRef, startResize } = useResizable({ minWidth: 300, maxWidth: 900 });

    
    const {
        loading,
        onSubmit,
        register,
        handleSubmit,
        watch,
        errors
    } = useSignup(); 


    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("/")
    } 





    return (
        <div className='signup_container' style={{ backgroundImage: `url(${assets.banner1})` }}>
            <form onSubmit={handleSubmit(onSubmit)}  className='form_container' ref={formRef}>
                <div className='exit_button' onClick={navigateToHome}><FontAwesomeIcon icon={faClose}/></div>
                <h1>Sign Up</h1>
                <p>Please fill out the required fields for registration</p>



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


                {/* Confirm Password Input */}
                <div className="input_field">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input
                        id="cpassword"
                        type="password"
                        className={errors.cpassword ? "input_error" : ""}
                        {...register("cpassword", {
                            required: "Confirm Password is required",
                            validate: (value) => value === watch('password') || "Passwords do not match"
                        })}
                    />
                    {errors.cpassword && <p className='error_message'>{errors.cpassword.message}</p>}
                </div>


                {/* Submit Button */}
                <button type="submit" disabled={loading}>
                    {loading ? "Signing up..." : "Sign Up Now"} &nbsp;
                    <FontAwesomeIcon icon={faSignOut} />
                </button>

                {/* Footer */}
                <div className="signup_footer">
                    Already have an account? <Link to="/signin">Sign here</Link>
                </div>
            </form>

            <div className="resizer_handle" onMouseDown={startResize}></div>

            <div className="right__panel">
                <h2>Join the GrandStay Experience</h2>
                <p>Create your free account and enjoy:</p>
                <ul>
                    <li>🏨 Member-only room rates</li>
                    <li>🎁 Complimentary upgrades</li>
                    <li>⭐ Loyalty rewards</li>
                    <li>📱 Faster booking process</li>
                </ul>

                <div className="highlight__box">
                    <strong>Bonus:</strong> Sign up today and earn 500 welcome points!
                </div>

                <blockquote className="signup__quote">
                    "Your journey begins with a single booking."
                </blockquote>
            </div>


        </div>
    );
};

export default Signup;
