//Single Tour Component
import React, { useState } from "react";

function TourCard ({ id, name, info, image, price, onRemove }) {
    const [readMore, setReadMore] = useState(false); //State to toggle read more

    return (
        <article className="tour-card">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                    {readMore ? info : `${info.slice(0, 70)}...`}
                    <button className="read-more" onClick={() => setReadMore(!readMore)}>
                        {readMore ? "Show Less" : "Read More"}
                    </button>
                </p>
                <button className="remove-button" onClick={() => onRemove(id)}>
                    Not Interested
                </button>
            </footer>
        </article>
    );
}

//Exporting the TourCard component
export default TourCard;
