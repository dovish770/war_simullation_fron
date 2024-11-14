import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import { fetchArsenal } from '../../../service/dashboardService';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import './AttackPage.css'
import ArsenalSection from '../../arsenalSection/ArsenalSection';
const AttackPage: React.FC = () => {

  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const { arsenal, status, error } = useSelector((state: RootState) => state.arsenal);


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArsenal());
    }
  }, [status, dispatch]);

  
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div className="attack-page">
      <h1>Organization {arsenal?.organization.name}</h1>
      <section>
        <h2>Locations</h2>
        <select className="locations-select">
          {arsenal?.locations && arsenal?.locations.length > 0 ? (
            arsenal.locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>              
            ))
          ) : (
            <option disabled>No locations available</option>
          )}
        </select>
      </section>

      <ArsenalSection/>
    </div>
  );
};

export default AttackPage;
