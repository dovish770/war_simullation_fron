import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/login/Login'
import SignIn from '../pages/signIn/SignIn'
import AttackPage from '../pages/attackPage/AttackPage'
import DefencePage from '../pages/defencePage/DefencePage'

const RoutesConnection = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/attack" element={<AttackPage />} />
            <Route path="/defence" element={<DefencePage />} />
        </Routes>
    )
}

export default RoutesConnection
