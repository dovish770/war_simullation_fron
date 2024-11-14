import React from 'react';
import { RootState } from "../../app/store";
import { useSelector } from 'react-redux';

const ArsenalSection = () => {
    const arsenal = useSelector((state: RootState) => state.arsenal.arsenal);

    return (
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
    )
}

export default ArsenalSection
