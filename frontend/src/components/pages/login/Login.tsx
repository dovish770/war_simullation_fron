import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, navigateToDashboard } from '../../../service/usersService';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { AnyAction } from 'redux'; 
import { useNavigate, Link } from 'react-router-dom';

const Login: React.FC = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Please enter both username and password');
            return;
        }

        try {
            const loginData = { username, password };
            const resultAction = await dispatch(loginUser(loginData));

            if (loginUser.fulfilled.match(resultAction)) {
                console.log('Logged in successfully');
                setPassword('')
                setUsername('')
                setError('')
                const navigation:string = navigateToDashboard(resultAction.payload.user);
                navigate(`/${navigation}`);
            } else {
                setError(resultAction.payload as string || 'Login failed');
            }
        } catch (err: any) {
            setError(err.message || 'Login failed');
        }
    };

    return (
        <div className='Login'>
            <h2>Login</h2> 
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" value="Login" />
            </form>
            <Link to="/signin">Sign In</Link>
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default Login;
