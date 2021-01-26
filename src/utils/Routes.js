import React, { useState, useMemo } from 'react';
import { Route } from "react-router-dom";

// Routes imported
import { Login, Hello } from '../component/Login'
import WeatherPage from '../component/WeatherPage'
import Card from '../component/Card'
import { Context } from '../component/Context'

// not final
import Navi from '../component/Navi'

const Routes = () => {
    const [name, setName] = useState(null);
    const [location, setLocation] = useState(null);

    const providerValue = useMemo(() => ({
        name, setName,
        location, setLocation
    }), [name, location])
    //         location, setLocation

    // }), [location, setLocation])
    return(
        <>
            {/* <Context.Provider value={{ value1: [name, setName], value2: [location, setLocation] }}> */}
            {/* <Context.Provider value={{providerName, providerLocation}}> */}
            <Context.Provider value={providerValue}>
                <Route exact path ="/" component={Login} />
                <Route exact path="/" component={Hello} />
                <Route path="/weather" component={WeatherPage} />
                <Route path="/hello" component={Hello} />
                <Route path ="/" component={Navi} />
            </Context.Provider>
        </>
    );
}

export default Routes;