import React, { useCallback, useEffect } from 'react'
import Board from '../components/Board'
import Button from '../components/Button'
import { calculateWinner, containsNull } from '../helpers'
import useGame from '../hooks/useGame'
import styles from '../styles/Game.module.css'


export default function SinglePlayer() {

    const game = useGame()
    const {markSquare,toggleXTurn} = game
    

    /**
     * 
     * Process square with given index for the given user
     * @param {Number} i is the given index 
     * @param {Boolean} x is the given user
     */
    const handleClick = useCallback((i,x) => {

        if (calculateWinner(game.squares) || !containsNull(game.squares) ||  game.squares[i]) {
            
         
            return
        }

        markSquare(i,x)
        toggleXTurn()

       
        

    },[markSquare,toggleXTurn,game.squares])

    /**
     * 
     * @param {Array} squares 
     * @returns a random index from array if element is null
     */
    const chooseIndex = (squares) => {

        let nullArray = []

        for (let index = 0; index < squares.length; index++) {
            const element = squares[index];

            if (!element) {
                
                nullArray.push(index)
            }
            
        }

        let index = Math.random() * nullArray.length
        index = Math.floor(index)

        return nullArray[index]

    
    }


    useEffect(() => {
        
        
        if ((game.isX && !game.xTurn) || (!game.isX && game.xTurn)) {

            const index = chooseIndex(game.squares)
            
            handleClick(index,!game.isX)
            

        }
       
    }, [game.isX,game.xTurn,game.squares,handleClick])

    return (
        <div className = {styles.game}>

            <Board isX = {game.isX} xTurn = {game.xTurn}  handleClick = {handleClick} squares = {game.squares}  />
            <Button handleClick = {game.resetSquares} text = "Reset" />
            
        </div>
    )
}
