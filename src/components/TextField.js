import React from 'react'
const TextField = ({ label, inputProps, onChange, value }) => {
    return (
        <div>
            <label
            style={{fontWeight:'bold', fontFamily:'sans-serif'}}>{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                value={value}
                style={{borderRadius:'8px', marginLeft:'10px'}}
            />
        </div>
    )
}
export default TextField;