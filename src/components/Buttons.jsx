import React from 'react';
 // Ensure you have this CSS file imported

const Buttons = () => {
  return (

    <>
    <hr className="my-6 border-[1px] overflow-scroll" />
    <div className="button-container">
      <button className="restaurant-btn">Best Restaurants in Mangaluru</button>
      <button className="restaurant-btn">Top Rated</button>
      <button className="restaurant-btn">New Arrivals</button>
      <button className="restaurant-btn">Popular in Town</button>
      <button className="restaurant-btn">Best Restaurants in B.C. Road</button>
      <button className="restaurant-btn">Best Restaurants in Kavoor</button>
      <button className="restaurant-btn">Best Restaurants in Hassan</button>
    </div>
    </>
  );
}

export default Buttons;
