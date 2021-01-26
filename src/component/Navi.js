import React from 'react'
import { Link } from "react-router-dom";

const Navi = () => {
    return(
        <>
            <Link to="/">Home</Link>
            <br />
            <Link to="/weather">Weather</Link>
            <br />
            <Link to="/hello">Hello</Link>
        </>

    );
}

export default Navi;