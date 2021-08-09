import { useState } from 'react';



const useGame = () => {

    const [isX, setIsX] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null))


    const [xTurn, setXTurn] = useState(true)

    /**
     * Reset squares 
     */
    const resetSquares = () => setSquares(Array(9).fill(null))

    /**
     * toggles X value
     */
    const toggleX = () => {

        setIsX(x => !x)
    }


    /**
     * toggles xTurn value
     */
    const toggleXTurn = () => {

        setXTurn(turn => !turn)
    }


   /**
    * 
    * Mark the square with the given index with if 'X' if the the given user is 'X' and 'O' if not
    * @param {Number} i 
    */
    const markSquare = (i,x) => {

        setSquares(squares => squares.map((square,index) => {

            if (index === i) {
                
                
                return x ? 'X' : 'O' 
            }

            return square

        }))

    }

    return {markSquare, toggleX, toggleXTurn,resetSquares ,squares,xTurn,isX}

}

export default useGame