import React from 'react';

const Button = ({name, url = '#', color, action}) => {
    if (action) {
        return (
            <span data-aos="fade-up" data-aos-delay="300" className="p-2">
                <button className={`btn ${color} py-3 px-5 btn-pill`} onClick={action}>{name}</button>
            </span>
        )
    } else {
        return (
            <span data-aos="fade-up" data-aos-delay="300" className="p-2">
                <a href={url} className={`btn ${color} py-3 px-5 btn-pill`}>{name}</a>
            </span>
        )
    }
};

export default Button;