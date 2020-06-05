import React from 'react'

export default function Banner({children, title, substitle}) {
    return (
        <div className="banner">
            <h1> {title} </h1>
            <div />
            <p>{substitle}</p>
            {children}
        </div> 
    );
}
