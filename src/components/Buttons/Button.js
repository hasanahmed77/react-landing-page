import React from 'react'
import './Button.scss';

const Button = ({ btnName, bgColor, fontColor }) => {
    const styles = {
        backgroundColor: bgColor,
        color: fontColor
    }

    return (
        <button style={styles} >
            {btnName}
        </button>
    )
}

export default Button
