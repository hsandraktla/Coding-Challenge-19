//Root Component
import React, {useState} from "react";
import Gallery from "./components/Gallery.jsx"; //Importing the Gallery component
import "./styles/styles.css"; //Importing the CSS styles


//Root component of the app
function App() {
  //Holds the state for all tours
  const [tours, setTours] = useState([]);

  //Function to remove a tour by its ID
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };
  
  return ( 
    <main>
      <div className="title">
        <h1>Our Tours</h1>
        {/* Pass state and handlers to the Gallery component */}
        <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
      </div>
    </main>
  );
}

//Exporting the App component
export default App;
