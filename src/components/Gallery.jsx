//Tour List Component
import React, { useState, useEffect } from "react";
import TourCard from "./TourCard.jsx"; //Importing the TourCard component

function Gallery({tours, setTours, onRemove}) {
    //Local state for loading and error handling
    const [loading, setLoading] = useState(true); //Show loading message
    const [error, setError] = useState(null); //Catch error if fetching fails
    
    //Function to fetch tour data from API
    const fetchTours = async () => {
        try {
            const response = await fetch("https://www.course-api.com/react-tours-project");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setTours(data); //Lifting data to App component
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };
    //Use useEffect to fetch tours when the component mounts
   useEffect(() => {
        fetchTours();
    }, []);
    //Conditional UI rendering based on state
    if (loading) {
        return <h2>Loading...</h2>;
    };
    if (error) {
        return <h2>Something went wrong!</h2>;
    };
    //If all tours are removed, show refresh button
    if (tours.length === 0) {
        return (
            <section>
                <h2>No Tours Available</h2>
                <button onClick={fetchTours}>Refresh</button>
            </section>
        );
    }

    return (
        <section>
            <h2>Available Tours</h2>
            <div className="tours">
                {/* Render each tour using map( with a unique key prop */}
                {tours.map((tour) => {
                    return (
                        <TourCard 
                        key={tour.id} 
                        {...tour} 
                        onRemove={onRemove} 
                        />
                    );
                })}
            </div>
        </section>
    );
}

//Exporting the Gallery component
export default Gallery;