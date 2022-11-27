import React from 'react'
import './DatePicker.css'
export default function Input(props) {

    const { name, type, label, value,error=null, onChange, placeholder } = props;
    return (
        <div>
            <div className="material-textfield">
                <input
                    label={label}
                    name={name}
                    value={value}
                    onChange={onChange}
                    type={type}
										placeholder=" "
                />
                <label>{label}</label>
            </div>
            {error && <p style={{
							color: '#ff6666',
							paddingBottom: '2px',
							marginBottom: 0
						}}>{error}</p>}
        </div>
    )
}
