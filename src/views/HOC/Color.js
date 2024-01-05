import React from "react";

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Color = (WrappedComponent) => {
    const colorRandom = getRandomColor();
    return (props) => (
        <div style={{color: colorRandom}}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default Color;
