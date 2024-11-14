import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../../service/usersService';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { AnyAction } from 'redux';
import { organizations, regions } from '../../../types/modelTypes/objects';
import { useNavigate, Link } from 'react-router-dom';


const SignIn = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [organization, setOrganization] = useState('');
    const [region, setRegion] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!username || !password || !organization || !region) {
            setError('Please enter all required fields');
            return;
        }

        try {
            const RegisterDate = { username, password, organization, region };
            const resultAction = await dispatch(signInUser(RegisterDate));

            if (signInUser.fulfilled.match(resultAction)) {
                console.log('registered successfully');
                setUsername('');
                setPassword('');
                setOrganization('');
                setRegion('');
                setError('');

                navigate('/login');
            } else {
                setError('Registration failed');
            }
        } catch (err: any) {
            setError(err.message || 'Register failed');
        }
    };

    return (
        <div className='Register'>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <select value={organization} onChange={(e) => setOrganization(e.target.value)}>
                    <option value="">Select Organization</option>
                    {organizations.map(org => (
                        <option key={org} value={org}>{org}</option>
                    ))}
                </select>
                {organization === "idf" && (
                    <select value={region} onChange={(e) => setRegion(e.target.value)}>
                        <option value="">Select Region</option>
                        {regions.map(reg => (
                            <option key={reg} value={reg}>{reg}</option>
                        ))}
                    </select>
                )}
                <input type="submit" value="Sign in" />
            </form>
            <Link to="/login">back to login</Link>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default SignIn;
