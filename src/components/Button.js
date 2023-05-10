import React from 'react'
const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick} style={{ color: '#fff',
            textDecoration: 'none',
            backgroundColor: '#0717ce',
            padding: '4px 16px' ,
            borderRadius: '10px',
            fontSize: '14px',
            fontWeight:'bolder',
            marginTop:'24px' }}>
            {children}
        </button>
    )
}
export default Button;