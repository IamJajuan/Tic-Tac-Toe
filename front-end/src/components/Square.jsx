import React from 'react'
import styles from '../styles/Square.module.css'
import PropTypes from 'prop-types'

 function Square(props) {

    const {value,index,handleClick,isX,yourTurn} = props
    return (
       <button onClick = {() => yourTurn && handleClick(index,isX)} className = {styles.square}>

           {value}

       </button>
    )
}

Square.propTypes  = {

    value: PropTypes.string,
    handleClick: PropTypes.func,
    index:PropTypes.number,
    isX:PropTypes.bool,
    yourTurn:PropTypes.bool,
}
export default Square