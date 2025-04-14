//Tour List Component
import React, { useState, useEffect } from "react";
import TourCard from "./TourCard.jsx"; 

function Gallery({tours, setTours, onRemove}) {
    //Store data in useState
    const [loading, setLoading] = useState(true); //Show loading message
    const [error, setError] = useState(null); //Catch error if fetching fails
    
    //Use useEffect to call the API
    const fetchTours = async () => {
        try {
            const response = await fetch("https://www.course-api.com/react-tours-project");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setTours(data); //Lifting state to App component
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };

   useEffect(() => {
        fetchTours();
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    };
    if (error) {
        return <h2>Something went wrong!</h2>;
    };
    //If no tours are available
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