import React from 'react'
import NavBar from '../navBar/NavBar'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesConnection from '../routesConnection/RoutesConnection'
import Login from '../pages/login/Login'

const WarApp = () => {
    return (
        <div className='WarApp'>
            <Router>
                <NavBar />
                <RoutesConnection/>
            </Router>

        </div>
    )
}

export default WarApp
