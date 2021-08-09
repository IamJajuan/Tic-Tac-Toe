import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Button.module.css'

function Button(props) {

    const {handleClick,text} = props
    return (

        <button className = {styles.btn} onClick = {handleClick}>{text}</button>

    )
}

Button.propTypes = {

    handleClick: PropTypes.func,
    text:PropTypes.string,
  }
  
export default Button
