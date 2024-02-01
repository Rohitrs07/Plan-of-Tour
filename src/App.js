import React, { useState } from "react";
import data from './data';
import Tours from './Component/Tours';

const App = () => {

  const [tours,setTours] = useState(data);
   
    // when Not Interested is clicked this removeTour function is called, based on id passed in the function
  // the filter method is used to remove that data belonging to passed id
  function removeTour(id){
    const newTours = tours.filter( tour => tour.id !== id);
    setTours(newTours);
  }

    // when all tours are clicked not interested then reinitializing all data to tours array
  if(tours.length === 0){
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="app">
         {/* removeTour and tours data are passed as props in tours component */}
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )

};

export default App;
