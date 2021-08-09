import React from 'react'
import Square from './Square'
import PropTypes from 'prop-types'
import styles from '../styles/Board.module.css'
import { calculateWinner, containsNull } from '../helpers'
 function Board(props) {

    const {squares,handleClick,xTurn,isX} = props
  
    const yourTurn = (isX && xTurn ) || ( !isX && !xTurn )

    

    let msg = null

    if (!containsNull(squares)) {
        
        msg = "It's a draw"
    }

    if (calculateWinner(squares)) {

        msg =  !yourTurn ? "You Won" : "You lose"    
      
    }
    
   let turn = ''

   if (yourTurn) {
       
    turn = "Your Turn"
   }

 else {

   turn = xTurn ? "X Turn" : "O Turn"
 }

    return (
        <React.Fragment >

<h1 className = {styles.title}> Tic-Tac-Toe</h1>

<div className = {styles.board}>
{squares.map((square,index) => <Square yourTurn = {yourTurn} isX = {isX} index = {index} handleClick = {handleClick} key = {index} value = {square} />)}
 </div>  

                     <div className = {styles.turn} >     { msg ? msg : turn } </div>          
        </React.Fragment>
    )
}

Board.propTypes = {

    squares: PropTypes.arrayOf(PropTypes.string),
    xTurn: PropTypes.bool,
    isX:PropTypes.bool,
    handleClick:PropTypes.func,

}

export default Board