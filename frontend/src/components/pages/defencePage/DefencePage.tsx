import React, { useEffect } from 'react';
import ArsenalSection from '../../arsenalSection/ArsenalSection';
import { logout } from '../../../features/users/usersSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { RootState } from '../../../app/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DefencePage: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="defence-page">
      <ArsenalSection />
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default DefencePage;
