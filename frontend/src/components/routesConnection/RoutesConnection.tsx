import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/login/Login'
import SignIn from '../pages/signIn/SignIn'

const RoutesConnection = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
    )
}

export default RoutesConnection
