import React from 'react'

import style from './style'

// eslint-disable-next-line react/prop-types
const Button = ({ label }) => {

    const { btn, btnTxt } = style
    return (
        <button style={btn}>
            <span style={btnTxt}>{label}</span>
        </button>
    )
}


export default Button