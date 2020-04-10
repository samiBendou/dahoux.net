import React from 'react';

const AboutItem = (props) => {
        return (
            <div className="about-item">
                <h5>{props.title}</h5>
                <p>{props.text}</p>
            </div>
        );
};

export default AboutItem;