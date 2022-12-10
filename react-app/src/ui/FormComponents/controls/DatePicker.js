import React from 'react'

import './DatePicker.css'
export default function DatePicker(props) {

    const { name, label, value,error=null, onChange } = props


    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <>
            <div className="material-textfield">
                <input
                    label={label}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder=" " 
                    type="date" 
                />
                <label className='label'>{label}</label>
            </div>
            {error && <p>{error}</p>}
        </>
    )
}
