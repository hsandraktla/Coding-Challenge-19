//Root Component
import React, {useState} from "react";
import Gallery from "./components/Gallery";

//Root component of the app
function App() {
  //Holds the state for all tours
  const [tours, setTours] = useState([]);

  //Function to remove a book by its ID
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  
  return ( 
    <main>
      <h1>Our Tours</h1>
      {/* Pass state and handlers to the Gallery component */}
      <Gallery tours={tours} removeTour={removeTour} />
    </main>
  );
}

//Exporting the App component
export default App;
