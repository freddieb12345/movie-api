import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Rating = ({rating}) => {
    const movieRating = +rating * 10;
    return (
        <div>
            <CircularProgressbarWithChildren 
                value={movieRating} 
                background
                styles={buildStyles({
                    textSize: "30px",
                    textColor: '#DE5656',
                    pathColor: '#DE5656',
                    backgroundColor: '#feeeee',
                })}
            >
                <div style={{ fontSize: 10, marginTop: -5, textAlign: 'center', color:"#DE5656" }}>
                    <strong>Rating</strong> <br />
                    {`${movieRating}%`}
                </div>
            </CircularProgressbarWithChildren>
        </div>
    );
}

export default Rating;

