import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { Context } from '../component/Context'
import './Login.css'

var Login = () => {
    const {name, setName} = useContext(Context);
    const {location, setLocation} = useContext(Context);

    const setter = () => {
        setLocation();
        setName();
    };

    //useEffect(() => {});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(" Forms name: ", name, "Forms location: ", location);
        
    };

    return(
        <>
            <div className="main-wrapper">
                <div className="header-box">
                    <h1>Welcome</h1>
                    <h3>Tell us about yourself</h3>
                </div>

                <div className="form-box">
                    <form className="form" onSubmit={handleSubmit}>
                        {/* Name */}
                            <input 
                                type="text" 
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your name"
                                />
                        {/* Location */}
                            <input 
                                type="text" 
                                name="location"
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Location"
                                />
                        <Link to="/weather">
                            <input className="input-continue" type="submit" value="Continue"/> 
                        </Link>
                    </form>
                </div>
                {/* <p>{name}</p> */}
                {/* <p>{location}</p> */}
            </div>
        </>
    );
}

const Hello = (props) => {
    const {name, setName} = useContext(Context);
    const {location, setLocation} = useContext(Context);

    return (
        <div className="testing-box">
            <p>Testing Box:</p>
            <p>{name}</p>
            <p>{location}</p>
        </div>
    );
}

// export default Login;
export { Login, Hello };