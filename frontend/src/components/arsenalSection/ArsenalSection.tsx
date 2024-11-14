import React, { useEffect } from 'react';
import { fetchArsenal } from '../../service/dashboardService';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { AnyAction } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

const ArsenalSection = () => {
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
    <>
      <h1>Organization {arsenal?.organization.name}</h1>
      <section>
        <h2>Missiles</h2>
        <div className="missiles-container">
          {arsenal?.organization.resources && arsenal?.organization.resources.length > 0 ? (
            arsenal.organization.resources.map((missile, index) => (
              <div key={missile._id || index} className="missile-item">
                <span className="missile-name"><strong>{missile.name}</strong></span>
                <span className="missile-amount">Amount: {missile.amount}</span>
              </div>
            ))
          ) : (
            <p>No missiles available</p>
          )}
        </div>
      </section>
    </>
  )
}

export default ArsenalSection
