//Tour List Component
import React, { use } from "react";
import TourCard from "./TourCard"; 

function Gallery({tours, setTours, removeTour}) {
    //Store data in useState
    const [loading, setLoading] = useState(true); //Show loading message
    const [error, setError] = useState(false); //Catch error if fetching fails
    
    //Use useEffect to call the API
    useEffect(() => {
        const fetchTours = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://course-api.com/react-tours-project");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setTours(data); //Lifting state to App component
                setError("");
            } catch (error) {
                setError("Failed to fetch tours"); //Display error message
            } 
            setLoading(false);
            };

        fetchTours();
    }, [setTours]);

    if (loading) {
        return <h2>Loading...</h2>;
    };
    if (error) {
        return <h2>{error}</h2>;
    };

    return (
        <section>
            <h2>Available Tours</h2>
            <div className="tours">
                {/* Render each tour using map( with a unique key prop */}
                {tours.map((tour) => {
                    return (
                        <TourCard key={tour.id} {...tour} removeTour={removeTour} />
                    );
                })}
            </div>
        </section>
    );
}

//Exporting the Gallery component
export default Gallery;