import React from 'react'
const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick} style={{ border: "2px solid black" }}>
            {children}
        </button>
    )
}
export default Button;